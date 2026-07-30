import app from "./src/app.js";
import env from "./src/config/env.js";
import connectDB from "./src/config/db.js";
import { verifyTransporter } from "./src/config/mailer.js";

const start = async () => {
  try {
    await connectDB();

    try {
      await verifyTransporter();
    } catch (err) {
      console.warn(
        "[mailer] SMTP verification failed — check SMTP_HOST/SMTP_USER/SMTP_PASS in server/.env. " +
          "The server will still start, but emails will fail until this is fixed."
      );
      console.warn("[mailer]", err.message);
    }

    app.listen(env.port, () => {
      console.log(`[server] Listening on port ${env.port} (${env.nodeEnv})`);
    });
  } catch (err) {
    console.error("[server] Failed to start:", err.message);
    process.exit(1);
  }
};

start();
