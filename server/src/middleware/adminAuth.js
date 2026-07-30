import env from "../config/env.js";

/**
 * Protects admin-only routes (e.g. listing submissions) with a static
 * API key passed in the `x-admin-key` header. Set ADMIN_API_KEY in
 * server/.env to enable this.
 */
export const adminAuth = (req, res, next) => {
  if (!env.adminApiKey) {
    return res
      .status(503)
      .json({ success: false, message: "Admin API is not configured (set ADMIN_API_KEY)." });
  }

  const key = req.header("x-admin-key");

  if (!key || key !== env.adminApiKey) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  next();
};

export default adminAuth;
