import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitForm } from "./lib/api";

const Consultation: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setStatus("sending");
    try {
      await submitForm({
        formType: "consultation",
        name: form.name,
        email: form.email,
        company: form.company,
        subject: "Free AI Consultation Booking",
        message: form.message,
        source: "consultation-page",
      });
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error("EMAIL ERROR:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white text-slate-900 pt-28 pb-20 px-6">
      
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Free <span className="text-orange-600">AI Consultation</span>
        </h1>

        <p className="text-lg text-slate-500 mb-12">
          Get expert guidance to transform your business with AI.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {[
          "AI Strategy Planning",
          "Automation Opportunities",
          "Cost Optimization",
          "Custom AI Solutions",
          "Workflow Analysis",
          "Future Roadmap"
        ].map((item: string, i: number) => (
          <div key={i} className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition">
            <CheckCircle2 className="text-orange-600 mb-4" />
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto bg-slate-50 p-10 rounded-3xl border shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Your Free Session
        </h2>

        {status === "sent" ? (
          <p className="text-center text-emerald-600 font-semibold py-8">
            Thanks! We've received your request and will reach out shortly. ✓
          </p>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl border"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl border"
            />
            <input
              type="text"
              name="company"
              placeholder="Company / Project"
              value={form.company}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border"
            />
            <textarea
              name="message"
              placeholder="Tell us..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit"} <ArrowRight className="w-5 h-5" />
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>
            )}
          </form>
        )}
      </div>

    </div>
  );
};

export default Consultation;
