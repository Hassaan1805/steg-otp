# New System Setup Guide

This guide explains how to run the project on a fresh machine.

## 1. Prerequisites

Install these tools first:

- Python 3.10+ (3.11+ recommended)
- Node.js 18+ (Node.js 20 LTS recommended)
- npm (comes with Node.js)
- Git

Check installed versions:

```bash
python --version
node --version
npm --version
git --version
```

## 2. Get the Project

If you already have the folder, skip this section.

```bash
git clone <your-repo-url>
cd "Image steganography"
```

## 3. Backend Setup (FastAPI)

Open Terminal 1:

### Windows (PowerShell)

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

### macOS/Linux

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Backend URLs:

- API root: http://127.0.0.1:8000/
- Swagger docs: http://127.0.0.1:8000/docs

## 4. Frontend Setup (React + Vite)

Open Terminal 2:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

- http://localhost:5173/

## 5. How to Use

### Encode

1. Go to the Encode tab.
2. Upload a PNG or JPG image.
3. Enter a secret message.
4. Click Encode.
5. Copy and save the generated OTP key.
6. Download the encoded image.

### Decode

1. Go to the Decode tab.
2. Upload the encoded image.
3. Paste the OTP key.
4. Click Decode.
5. Read the recovered original message.

## 6. Important Notes

- The OTP key is required for decryption. If lost, message cannot be recovered.
- PNG output is recommended because JPEG compression can damage LSB data.
- If message is too long for the selected image, encoding will fail with a capacity error.

## 7. Common Issues and Fixes

### A. `uvicorn` or `fastapi` not found

Install backend dependencies inside the virtual environment:

```bash
cd backend
# activate virtual environment first
pip install -r requirements.txt
```

### B. PowerShell script execution is blocked

Run this once in PowerShell:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then activate again:

```powershell
.\.venv\Scripts\Activate.ps1
```

### C. Port already in use

Use different ports:

Backend:

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8001
```

Frontend:

```bash
npm run dev -- --port 5174
```

### D. CORS or API connection issue

- Make sure backend is running before using frontend.
- Confirm backend is at http://127.0.0.1:8000.
- If you changed backend port, update frontend API base in source.

## 8. Optional Production Build (Frontend)

```bash
cd frontend
npm run build
npm run preview
```

## 9. Quick Start Summary

Terminal 1:

```bash
cd backend
python -m venv .venv
# activate env
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Terminal 2:

```bash
cd frontend
npm install
npm run dev
```
