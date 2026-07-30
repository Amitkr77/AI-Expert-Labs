import { Router } from "express";
import submissionRoutes from "./submission.routes.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ success: true, status: "ok" });
});

router.use("/submissions", submissionRoutes);

export default router;
