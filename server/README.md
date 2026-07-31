# AIxperts Labs — Backend API

Express + MongoDB (Mongoose) + Nodemailer backend for all website forms
(Contact, Consultation, Free Consultation popup, Institute Enrollment, Newsletter).

Every form submits to a single endpoint, which:
1. Saves the submission to MongoDB
2. Emails you (the business) a notification via Nodemailer/SMTP
3. Sends the visitor an auto-reply confirmation (optional, on by default)

> **Heads up:** some hosts (Render's free tier included) block outbound SMTP
> connections to providers like Gmail — the connection just times out even
> with correct credentials. This is a platform network restriction, not a
> bug in this code. It'll work locally but may fail once deployed; if it
> does, the fix is either testing a different SMTP provider or switching
> to an HTTP-based email API (e.g. Resend, SendGrid) instead of raw SMTP.

## Setup

```bash
cd server
npm install
cp .env.example .env
```

Fill in `.env`:

- `MONGODB_URI` — your MongoDB connection string (Atlas or self-hosted)
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` — your email provider's SMTP credentials
  - **Gmail**: host `smtp.gmail.com`, port `587`, and an [App Password](https://myaccount.google.com/apppasswords) (not your normal password — requires 2FA enabled)
  - Any other provider (Outlook, Zoho, SendGrid, etc.) works too — just use their SMTP host/port/credentials
- `MAIL_TO` — the inbox that should receive new leads
- `FRONTEND_URL` — your frontend's URL, for CORS (e.g. `http://localhost:3000` in dev)
- `ADMIN_API_KEY` — any random string; required to use `GET /api/submissions`

Run it:

```bash
npm run dev    # auto-restarts on file changes
# or
npm start
```

The server starts on `http://localhost:5000` by default and logs whether
MongoDB and SMTP connected successfully.

## API

### `POST /api/submissions`
Used by every form on the site.

```json
{
  "formType": "contact",       // "contact" | "consultation" | "free-consultation" | "enrollment"
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543210",       // optional
  "company": "Acme Inc",       // optional
  "subject": "General Inquiry",// optional
  "message": "Hello!",         // optional
  "source": "contact-page"     // optional, free text
}
```

Response:
```json
{ "success": true, "message": "Thanks! Your message has been sent.", "data": { "id": "...", "emailSent": true } }
```

### `GET /api/submissions`
Admin-only. Requires header `x-admin-key: <ADMIN_API_KEY>`.
Query params: `formType`, `page`, `limit`.

### `GET /api/health`
Basic health check.

## Folder structure

```
server/
  server.js                  # entry point
  src/
    app.js                   # express app + middleware
    config/
      env.js                 # loads & validates .env
      db.js                  # mongoose connection
      mailer.js               # nodemailer transporter
    models/
      Submission.js          # mongoose schema
    services/
      submission.service.js  # save + orchestrate email
      mail.service.js        # builds & sends emails
    controllers/
      submission.controller.js
    routes/
      index.js
      submission.routes.js
    middleware/
      validateSubmission.js
      adminAuth.js
      errorHandler.js
```
