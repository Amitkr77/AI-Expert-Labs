import nodemailer from "nodemailer";
import env from "./env.js";

let transporter = null;

/**
 * Lazily creates (and caches) the Nodemailer transporter using SMTP
 * credentials from environment variables. Works with Gmail (App Password),
 * Outlook, Zoho, SendGrid SMTP, or any standard SMTP provider.
 */
export const getTransporter = () => {
  if (transporter) return transporter;

  if (!env.smtp.host || !env.smtp.user || !env.smtp.pass) {
    throw new Error(
      "SMTP credentials are not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in server/.env."
    );
  }

  transporter = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.secure, // true for port 465, false for 587/25 (STARTTLS)
    auth: {
      user: env.smtp.user,
      pass: env.smtp.pass,
    },
  });

  return transporter;
};

/**
 * Verifies the SMTP connection/credentials. Call this on server startup
 * so misconfiguration is caught early instead of failing silently on the
 * first form submission.
 */
export const verifyTransporter = async () => {
  const t = getTransporter();
  await t.verify();
  console.log("[mailer] SMTP connection verified");
};

export default getTransporter;
