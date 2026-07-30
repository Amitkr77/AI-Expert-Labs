import { Router } from "express";
import { create, list } from "../controllers/submission.controller.js";
import { validateSubmission } from "../middleware/validateSubmission.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = Router();

// POST /api/submissions — used by every form on the site
router.post("/", validateSubmission, create);

// GET /api/submissions — admin-only, requires x-admin-key header
router.get("/", adminAuth, list);

export default router;
