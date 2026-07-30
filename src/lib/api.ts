export type FormType = "contact" | "consultation" | "free-consultation" | "enrollment" | "newsletter";

export interface SubmissionPayload {
  formType: FormType;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  source?: string;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function submitForm(payload: SubmissionPayload) {
  const res = await fetch(`${API_URL}/api/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || "Failed to submit form. Please try again.");
  }

  return data;
}
