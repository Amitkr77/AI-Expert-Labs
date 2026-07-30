import Submission from "../models/Submission.js";
import { sendSubmissionEmails } from "./mail.service.js";

/**
 * Persists a form submission to MongoDB, then attempts to send the
 * notification/auto-reply emails. If email sending fails, the submission
 * is still saved (so no data is lost) and the failure is reported back
 * to the caller via `emailSent: false`.
 */
export const createSubmission = async (payload) => {
  const submission = await Submission.create(payload);

  try {
    await sendSubmissionEmails(submission);
    submission.emailSent = true;
    await submission.save();
  } catch (err) {
    console.error("[submission.service] Failed to send email:", err.message);
    submission.emailSent = false;
    await submission.save();
  }

  return submission;
};

export const listSubmissions = async ({ formType, page = 1, limit = 25 } = {}) => {
  const query = {};
  if (formType) query.formType = formType;

  const skip = (Math.max(1, page) - 1) * limit;

  const [items, total] = await Promise.all([
    Submission.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Submission.countDocuments(query),
  ]);

  return { items, total, page: Number(page), limit: Number(limit) };
};

export default { createSubmission, listSubmissions };
