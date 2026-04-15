import { useMemo, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

function App() {
  const [tab, setTab] = useState("encode");

  const [encodeImage, setEncodeImage] = useState(null);
  const [encodePreview, setEncodePreview] = useState("");
  const [message, setMessage] = useState("");

  const [decodeImage, setDecodeImage] = useState(null);
  const [decodePreview, setDecodePreview] = useState("");
  const [otpKeyInput, setOtpKeyInput] = useState("");

  const [generatedOtpKey, setGeneratedOtpKey] = useState("");
  const [encodedImageUrl, setEncodedImageUrl] = useState("");
  const [decodedMessage, setDecodedMessage] = useState("");

  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const charCount = useMemo(() => message.length, [message]);

  const onSelectImage = (file, mode) => {
    if (!file) {
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    if (mode === "encode") {
      setEncodeImage(file);
      setEncodePreview(previewUrl);
      setEncodedImageUrl("");
      setGeneratedOtpKey("");
    } else {
      setDecodeImage(file);
      setDecodePreview(previewUrl);
      setDecodedMessage("");
    }

    setStatus({ type: "", text: "" });
  };

  const copyToClipboard = async (text) => {
    if (!text) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setStatus({ type: "success", text: "Copied to clipboard." });
    } catch {
      setStatus({ type: "error", text: "Clipboard copy failed." });
    }
  };

  const handleEncode = async (event) => {
    event.preventDefault();

    if (!encodeImage) {
      setStatus({ type: "error", text: "Please upload an image to encode." });
      return;
    }

    if (!message.trim()) {
      setStatus({ type: "error", text: "Please enter a secret message." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const formData = new FormData();
      formData.append("image", encodeImage);
      formData.append("message", message);

      const response = await fetch(`${API_BASE}/encode`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({ detail: "Encoding failed" }));
        throw new Error(err.detail || "Encoding failed");
      }

      const otpKey = response.headers.get("X-OTP-Key") || "";
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      setGeneratedOtpKey(otpKey);
      setEncodedImageUrl(downloadUrl);
      setStatus({
        type: "success",
        text: "Message encrypted and hidden in image successfully.",
      });
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Encoding failed." });
    } finally {
      setLoading(false);
    }
  };

  const handleDecode = async (event) => {
    event.preventDefault();

    if (!decodeImage) {
      setStatus({ type: "error", text: "Please upload an encoded image." });
      return;
    }

    if (!otpKeyInput.trim()) {
      setStatus({ type: "error", text: "Please enter the OTP key." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const formData = new FormData();
      formData.append("image", decodeImage);
      formData.append("otp_key", otpKeyInput.trim());

      const response = await fetch(`${API_BASE}/decode`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({ detail: "Decoding failed" }));
        throw new Error(err.detail || "Decoding failed");
      }

      const data = await response.json();
      setDecodedMessage(data.message || "");
      setStatus({ type: "success", text: "Message decoded successfully." });
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Decoding failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg via-slate-950 to-black text-slate-100">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="animate-floatIn rounded-2xl border border-cyan-900/50 bg-panel/90 p-6 shadow-glow backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Secure Visual Crypto</p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Image Steganography with OTP Encryption</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Encrypt a message using a one-time pad, then hide the encrypted binary data inside image pixels using LSB.
            Decode later with the correct OTP key.
          </p>
        </header>

        <div className="mt-8 flex gap-2 rounded-xl bg-panelSoft/80 p-1">
          <button
            className={`tab-btn ${tab === "encode" ? "tab-btn-active" : ""}`}
            onClick={() => {
              setTab("encode");
              setStatus({ type: "", text: "" });
            }}
            type="button"
          >
            Encode
          </button>
          <button
            className={`tab-btn ${tab === "decode" ? "tab-btn-active" : ""}`}
            onClick={() => {
              setTab("decode");
              setStatus({ type: "", text: "" });
            }}
            type="button"
          >
            Decode
          </button>
        </div>

        {status.text ? (
          <div
            className={`mt-6 rounded-xl border p-3 text-sm ${
              status.type === "error"
                ? "border-red-500/40 bg-red-500/10 text-red-200"
                : "border-emerald-400/40 bg-emerald-400/10 text-emerald-100"
            }`}
          >
            {status.text}
          </div>
        ) : null}

        <main className="mt-6 animate-floatIn rounded-2xl border border-slate-800 bg-panel p-5 shadow-glow sm:p-6">
          {tab === "encode" ? (
            <form onSubmit={handleEncode} className="space-y-5">
              <label className="block">
                <span className="form-label">Upload Image (PNG/JPG)</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  className="file-input"
                  onChange={(e) => onSelectImage(e.target.files?.[0], "encode")}
                />
              </label>

              {encodePreview ? (
                <img src={encodePreview} alt="Encode preview" className="preview-img" />
              ) : null}

              <label className="block">
                <span className="form-label">Secret Message</span>
                <textarea
                  className="text-input min-h-28"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type the message you want to hide"
                />
                <span className="mt-1 block text-xs text-slate-400">Characters: {charCount}</span>
              </label>

              <button type="submit" disabled={loading} className="primary-btn">
                {loading ? "Encoding..." : "Encode and Hide Message"}
              </button>

              {generatedOtpKey ? (
                <section className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                  <p className="text-sm font-semibold text-cyan-200">Generated OTP Key</p>
                  <p className="mt-2 break-all rounded-md bg-black/30 p-3 text-xs text-cyan-100">{generatedOtpKey}</p>
                  <button
                    className="secondary-btn mt-3"
                    type="button"
                    onClick={() => copyToClipboard(generatedOtpKey)}
                  >
                    Copy OTP Key
                  </button>
                </section>
              ) : null}

              {encodedImageUrl ? (
                <section className="space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <img src={encodedImageUrl} alt="Encoded preview" className="preview-img" />
                  <a className="primary-btn inline-block text-center" href={encodedImageUrl} download="encoded_image.png">
                    Download Encoded Image
                  </a>
                </section>
              ) : null}
            </form>
          ) : (
            <form onSubmit={handleDecode} className="space-y-5">
              <label className="block">
                <span className="form-label">Upload Encoded Image</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  className="file-input"
                  onChange={(e) => onSelectImage(e.target.files?.[0], "decode")}
                />
              </label>

              {decodePreview ? (
                <img src={decodePreview} alt="Decode preview" className="preview-img" />
              ) : null}

              <label className="block">
                <span className="form-label">OTP Key</span>
                <textarea
                  className="text-input min-h-24"
                  value={otpKeyInput}
                  onChange={(e) => setOtpKeyInput(e.target.value)}
                  placeholder="Paste the OTP key from encoding"
                />
              </label>

              <button type="submit" disabled={loading} className="primary-btn">
                {loading ? "Decoding..." : "Decode Message"}
              </button>

              {decodedMessage ? (
                <section className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <p className="text-sm font-semibold text-emerald-100">Decoded Message</p>
                  <p className="mt-2 whitespace-pre-wrap rounded-md bg-black/30 p-3 text-sm text-emerald-50">
                    {decodedMessage}
                  </p>
                  <button
                    className="secondary-btn mt-3"
                    type="button"
                    onClick={() => copyToClipboard(decodedMessage)}
                  >
                    Copy Message
                  </button>
                </section>
              ) : null}
            </form>
          )}
        </main>
      </div>

      {loading ? (
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="spinner" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
