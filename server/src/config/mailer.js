import { Resend } from "resend";
import env from "./env.js";

let resendClient = null;

/**
 * Lazily creates (and caches) the Resend client. Resend sends email over
 * HTTPS (not raw SMTP), which avoids the outbound SMTP port
 * blocking/timeouts some hosts (e.g. Render) apply to providers like Gmail.
 */
export const getResendClient = () => {
  if (resendClient) return resendClient;

  if (!env.resendApiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured. Set it in server/.env (get a free key at https://resend.com)."
    );
  }

  resendClient = new Resend(env.resendApiKey);
  return resendClient;
};

/**
 * Verifies the Resend API key works by making a lightweight authenticated
 * call. Runs once at server startup so misconfiguration is caught early.
 */
export const verifyTransporter = async () => {
  const client = getResendClient();
  const { error } = await client.apiKeys.list();
  if (error) throw new Error(error.message || "Resend API key verification failed");
  console.log("[mailer] Resend API key verified");
};

export default getResendClient;
