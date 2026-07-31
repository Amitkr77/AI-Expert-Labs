# AIxperts Labs — Backend API

Express + MongoDB (Mongoose) + Resend backend for all website forms
(Contact, Consultation, Free Consultation popup, Institute Enrollment, Newsletter).

Every form submits to a single endpoint, which:
1. Saves the submission to MongoDB
2. Emails you (the business) a notification via Resend
3. Sends the visitor an auto-reply confirmation (optional, on by default)

> **Why Resend instead of raw SMTP/Nodemailer?** Some hosts (Render's free
> tier included) can't reliably reach SMTP ports (587/465) to providers like
> Gmail — connections just time out regardless of correct credentials.
> Resend sends email over standard HTTPS, which is never blocked.

## Setup

```bash
cd server
npm install
cp .env.example .env
```

Fill in `.env`:

- `MONGODB_URI` — your MongoDB connection string (Atlas or self-hosted)
- `RESEND_API_KEY` — sign up free at [resend.com](https://resend.com), then Dashboard → API Keys → Create API Key
- `MAIL_FROM` — leave as `onboarding@resend.dev` until you verify your own domain in Resend (Dashboard → Domains); a custom From address will fail to send until then
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
MongoDB connected and the Resend API key verified successfully.

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
      mailer.js               # resend client
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
