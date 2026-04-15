from __future__ import annotations

import base64
import io
import secrets
import struct
from typing import Tuple

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from PIL import Image, UnidentifiedImageError

app = FastAPI(title="Image Steganography with OTP Encryption")

# Frontend runs on Vite (default port 5173), so allow it for local development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["X-OTP-Key", "X-Output-Filename"],
)

END_MARKER = b"<EOF>"
LENGTH_PREFIX_SIZE = 4  # 4 bytes for unsigned int payload length.


def bytes_to_bits(data: bytes) -> str:
    """Convert bytes to a bit string like '010101' for LSB embedding."""
    return "".join(f"{byte:08b}" for byte in data)


def bits_to_bytes(bits: str) -> bytes:
    """Convert a bit string back into bytes."""
    if len(bits) % 8 != 0:
        raise ValueError("Bit stream length must be divisible by 8")
    return bytes(int(bits[i : i + 8], 2) for i in range(0, len(bits), 8))


def xor_encrypt_decrypt(data: bytes, key: bytes) -> bytes:
    """OTP XOR operation: same function works for encryption and decryption."""
    if len(data) != len(key):
        raise ValueError("OTP key length must match message length")
    return bytes(d ^ k for d, k in zip(data, key))


def generate_otp_key(length: int) -> bytes:
    """Generate cryptographically secure random bytes for OTP."""
    return secrets.token_bytes(length)


def encode_payload(message_bytes: bytes, key_bytes: bytes) -> bytes:
    encrypted = xor_encrypt_decrypt(message_bytes, key_bytes)
    payload = encrypted + END_MARKER
    return struct.pack(">I", len(payload)) + payload


def embed_lsb(image: Image.Image, payload: bytes) -> Image.Image:
    """Embed payload bits into RGB channels by replacing the least significant bit."""
    rgb_image = image.convert("RGB")
    pixels = list(rgb_image.getdata())

    payload_bits = bytes_to_bits(payload)
    capacity_bits = len(pixels) * 3

    if len(payload_bits) > capacity_bits:
        raise ValueError(
            f"Message too large for image. Capacity: {capacity_bits // 8} bytes, "
            f"required: {(len(payload_bits) + 7) // 8} bytes"
        )

    bit_index = 0
    new_pixels = []

    for r, g, b in pixels:
        if bit_index < len(payload_bits):
            r = (r & 0b11111110) | int(payload_bits[bit_index])
            bit_index += 1
        if bit_index < len(payload_bits):
            g = (g & 0b11111110) | int(payload_bits[bit_index])
            bit_index += 1
        if bit_index < len(payload_bits):
            b = (b & 0b11111110) | int(payload_bits[bit_index])
            bit_index += 1
        new_pixels.append((r, g, b))

    encoded_image = Image.new("RGB", rgb_image.size)
    encoded_image.putdata(new_pixels)
    return encoded_image


def extract_lsb_payload(image: Image.Image) -> bytes:
    """Extract payload from LSBs: first 4 bytes length prefix, then payload bytes."""
    rgb_image = image.convert("RGB")
    pixels = list(rgb_image.getdata())

    bits = []
    for r, g, b in pixels:
        bits.append(str(r & 1))
        bits.append(str(g & 1))
        bits.append(str(b & 1))

    bit_stream = "".join(bits)

    length_bits_count = LENGTH_PREFIX_SIZE * 8
    if len(bit_stream) < length_bits_count:
        raise ValueError("Encoded image does not contain valid metadata")

    payload_length = struct.unpack(">I", bits_to_bytes(bit_stream[:length_bits_count]))[0]
    payload_bits_count = payload_length * 8

    if len(bit_stream) < length_bits_count + payload_bits_count:
        raise ValueError("Encoded payload appears incomplete or corrupted")

    payload_bits = bit_stream[length_bits_count : length_bits_count + payload_bits_count]
    payload = bits_to_bytes(payload_bits)
    return payload


def validate_and_parse_image(file_bytes: bytes) -> Image.Image:
    try:
        image = Image.open(io.BytesIO(file_bytes))
        image.load()
        return image
    except (UnidentifiedImageError, OSError) as exc:
        raise ValueError("Invalid image file. Please upload PNG or JPG") from exc


def decode_with_key(payload: bytes, key_b64: str) -> str:
    if not payload.endswith(END_MARKER):
        raise ValueError("No valid hidden message marker found in image")

    encrypted = payload[: -len(END_MARKER)]

    try:
        key_bytes = base64.urlsafe_b64decode(key_b64.encode("utf-8"))
    except Exception as exc:
        raise ValueError("OTP key format is invalid") from exc

    if len(key_bytes) != len(encrypted):
        raise ValueError(
            f"Invalid OTP key length. Expected {len(encrypted)} bytes after decoding."
        )

    original_message = xor_encrypt_decrypt(encrypted, key_bytes)

    try:
        return original_message.decode("utf-8")
    except UnicodeDecodeError as exc:
        raise ValueError("Decryption failed. OTP key is likely incorrect") from exc


@app.get("/")
async def root() -> dict[str, str]:
    return {"status": "ok", "message": "Steganography API is running"}


@app.post("/encode")
async def encode(image: UploadFile = File(...), message: str = Form(...)):
    if not message:
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    file_bytes = await image.read()

    try:
        source_image = validate_and_parse_image(file_bytes)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    message_bytes = message.encode("utf-8")
    key_bytes = generate_otp_key(len(message_bytes))
    payload = encode_payload(message_bytes, key_bytes)

    try:
        encoded_image = embed_lsb(source_image, payload)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    output_stream = io.BytesIO()
    encoded_image.save(output_stream, format="PNG")
    output_stream.seek(0)

    otp_key_b64 = base64.urlsafe_b64encode(key_bytes).decode("utf-8")

    headers = {
        "X-OTP-Key": otp_key_b64,
        "X-Output-Filename": "encoded_image.png",
        "Content-Disposition": 'attachment; filename="encoded_image.png"',
    }

    return StreamingResponse(
        output_stream,
        media_type="image/png",
        headers=headers,
    )


@app.post("/decode")
async def decode(image: UploadFile = File(...), otp_key: str = Form(...)):
    if not otp_key:
        raise HTTPException(status_code=400, detail="OTP key is required")

    file_bytes = await image.read()

    try:
        encoded_image = validate_and_parse_image(file_bytes)
        payload = extract_lsb_payload(encoded_image)
        message = decode_with_key(payload, otp_key)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    return JSONResponse({"message": message})
