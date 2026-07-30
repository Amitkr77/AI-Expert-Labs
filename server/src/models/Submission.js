import mongoose from "mongoose";

const { Schema } = mongoose;

export const FORM_TYPES = [
  "contact",
  "consultation",
  "free-consultation",
  "enrollment",
  "newsletter",
];

const submissionSchema = new Schema(
  {
    formType: {
      type: String,
      enum: FORM_TYPES,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
      index: true,
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String,
      default: "",
    },
    ip: {
      type: String,
      default: "",
    },
    userAgent: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
