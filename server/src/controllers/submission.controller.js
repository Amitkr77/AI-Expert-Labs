import { createSubmission, listSubmissions } from "../services/submission.service.js";

export const create = async (req, res, next) => {
  try {
    const { formType, name, email, phone, company, subject, message, source } = req.body;

    const submission = await createSubmission({
      formType,
      name: name || (formType === "newsletter" ? "Newsletter Subscriber" : name),
      email,
      phone,
      company,
      subject,
      message,
      source,
      ip: req.ip,
      userAgent: req.get("user-agent") || "",
    });

    res.status(201).json({
      success: true,
      message: submission.emailSent
        ? "Thanks! Your message has been sent."
        : "Your message was saved, but the notification email could not be sent. Our team will still follow up.",
      data: {
        id: submission._id,
        formType: submission.formType,
        emailSent: submission.emailSent,
        createdAt: submission.createdAt,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const list = async (req, res, next) => {
  try {
    const { formType, page, limit } = req.query;
    const result = await listSubmissions({
      formType,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });

    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};

export default { create, list };
