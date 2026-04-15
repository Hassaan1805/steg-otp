# Image Steganography with One-Time Pad (OTP) Encryption

A full-stack project that encrypts text with OTP (XOR) and hides the encrypted data in image pixels using LSB steganography.

## Tech Stack

- Backend: FastAPI (Python)
- Frontend: React + Vite
- Styling: Tailwind CSS (dark theme)
- Image Processing: Pillow (PIL)
- Database: None

## Project Structure

- `backend/` FastAPI API and steganography logic
- `frontend/` React app (Vite + Tailwind)
- `static/images/` optional place for sample images

## How It Works

### OTP Encryption

1. Convert message to UTF-8 bytes.
2. Generate a secure random key (same byte length) with `secrets.token_bytes`.
3. XOR each message byte with key byte.
4. Save OTP key as Base64 for easy copy/paste.

### LSB Steganography

1. Build payload = encrypted bytes + marker.
2. Prefix payload with 4-byte length header.
3. Convert payload to binary bits.
4. Replace only the least significant bit of each RGB channel.
5. Save encoded output as PNG to preserve hidden bits.

## Run Instructions

## 1) Backend Setup

```bash
cd backend
python -m venv .venv
# Windows PowerShell:
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Backend API docs will be available at:
- `http://127.0.0.1:8000/docs`

## 2) Frontend Setup

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:
- `http://127.0.0.1:5173`

## API Endpoints

- `POST /encode`
  - Form fields:
    - `image`: PNG/JPG file
    - `message`: plain text message
  - Response:
    - Encoded PNG image stream
    - Header `X-OTP-Key` contains generated OTP key

- `POST /decode`
  - Form fields:
    - `image`: encoded image
    - `otp_key`: Base64 OTP key
  - Response JSON:
    - `{ "message": "..." }`

## Notes

- If message is too large for the image capacity, encode returns an error.
- Wrong OTP key or corrupted image data returns clear decode errors.
- PNG is recommended for reliability because JPEG compression may destroy LSB data.
# steg-otp
