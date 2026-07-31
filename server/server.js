import app from "./src/app.js";
import env from "./src/config/env.js";
import connectDB from "./src/config/db.js";
import { verifyTransporter } from "./src/config/mailer.js";

// Open the port first so Render's port scanner detects it immediately.
// MongoDB / SMTP are connected afterward in the background — if either is
// slow or misconfigured, it no longer delays the port binding.
app.listen(env.port, "0.0.0.0", () => {
  console.log(`[server] Listening on port ${env.port} (${env.nodeEnv})`);
});

connectDB().catch((err) => {
  console.error("[db] Failed to connect:", err.message);
  console.error(
    "[db] Check MONGODB_URI, and in Atlas make sure Network Access allows 0.0.0.0/0."
  );
});

verifyTransporter().catch((err) => {
  console.warn(
    "[mailer] SMTP verification failed — check SMTP_HOST/SMTP_USER/SMTP_PASS. " +
      "The server is still running, but emails will fail until this is fixed."
  );
  console.warn("[mailer]", err.message);
});
