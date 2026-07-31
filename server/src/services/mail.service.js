import { getResendClient } from "../config/mailer.js";
import env from "../config/env.js";

const FORM_TYPE_LABELS = {
  contact: "Contact Form",
  consultation: "Consultation Booking",
  "free-consultation": "Free Consultation Request",
  enrollment: "Institute Enrollment",
  newsletter: "Newsletter Signup",
};

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const buildAdminEmail = (submission) => {
  const label = FORM_TYPE_LABELS[submission.formType] || "Website Form";

  const rows = [
    ["Name", submission.name],
    ["Email", submission.email],
    ["Phone", submission.phone],
    ["Company", submission.company],
    ["Subject", submission.subject],
    ["Message", submission.message],
    ["Source page", submission.source],
  ].filter(([, value]) => value);

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const htmlRows = rows
    .map(
      ([rowLabel, value]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#334155;border-bottom:1px solid #e2e8f0;white-space:nowrap;">${escapeHtml(
          rowLabel
        )}</td>
        <td style="padding:8px 12px;color:#1e293b;border-bottom:1px solid #e2e8f0;">${escapeHtml(
          value
        ).replace(/\n/g, "<br/>")}</td>
      </tr>`
    )
    .join("");

  return {
    from: env.mailFrom,
    to: env.mailTo,
    replyTo: submission.email,
    subject: `New ${label} — ${submission.name}`,
    text: `New submission from the website (${label})\n\n${text}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#ea580c;">New ${escapeHtml(label)}</h2>
        <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
      </div>
    `,
  };
};

const buildUserAutoReplyEmail = (submission) => {
  if (submission.formType === "newsletter") {
    return {
      from: env.mailFrom,
      to: submission.email,
      subject: "You're subscribed! — AIxperts Labs",
      text: `Hi,\n\nThanks for subscribing to the AIxperts Labs Intelligence Feed! You'll now get the latest AI breakthroughs delivered to your inbox.\n\n— AIxperts Labs`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#ea580c;">You're subscribed!</h2>
          <p style="color:#334155;font-size:15px;line-height:1.6;">
            Thanks for subscribing to the AIxperts Labs Intelligence Feed. You'll now get the latest AI breakthroughs delivered to your inbox.
          </p>
          <p style="color:#94a3b8;font-size:13px;margin-top:32px;">— AIxperts Labs</p>
        </div>
      `,
    };
  }

  return {
    from: env.mailFrom,
    to: submission.email,
    subject: "We've received your request — AIxperts Labs",
    text: `Hi ${submission.name},\n\nThanks for reaching out to AIxperts Labs! We've received your request and one of our team members will get back to you shortly.\n\n— AIxperts Labs`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#ea580c;">Thanks, ${escapeHtml(submission.name)}!</h2>
        <p style="color:#334155;font-size:15px;line-height:1.6;">
          We've received your request and one of our team members will get back to you shortly.
        </p>
        <p style="color:#94a3b8;font-size:13px;margin-top:32px;">— AIxperts Labs</p>
      </div>
    `,
  };
};

/**
 * Sends the admin notification email, and (if enabled) an auto-reply to the
 * person who submitted the form. Throws if the admin notification fails —
 * the auto-reply failing is not treated as fatal.
 */
export const sendSubmissionEmails = async (submission) => {
  const client = getResendClient();

  const { error } = await client.emails.send(buildAdminEmail(submission));
  if (error) {
    throw new Error(error.message || "Failed to send notification email via Resend");
  }

  if (env.sendAutoReply) {
    const { error: autoReplyError } = await client.emails.send(
      buildUserAutoReplyEmail(submission)
    );
    if (autoReplyError) {
      console.error("[mailer] Auto-reply failed (non-fatal):", autoReplyError.message);
    }
  }

  return true;
};

export default sendSubmissionEmails;
