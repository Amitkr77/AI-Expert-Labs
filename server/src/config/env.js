import dotenv from "dotenv";

dotenv.config();

const required = ["MONGODB_URI", "SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];

const missing = required.filter((key) => !process.env[key]);

if (missing.length) {
  // eslint-disable-next-line no-console
  console.warn(
    `[env] Warning: missing environment variables: ${missing.join(
      ", "
    )}. Copy server/.env.example to server/.env and fill in your credentials.`
  );
}

export const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",

  mongodbUri: process.env.MONGODB_URI || "",

  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",

  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },

  mailFrom: process.env.MAIL_FROM || process.env.SMTP_USER || "",
  mailTo: process.env.MAIL_TO || "",

  sendAutoReply: process.env.SEND_AUTO_REPLY !== "false",

  adminApiKey: process.env.ADMIN_API_KEY || "",
};

export default env;
