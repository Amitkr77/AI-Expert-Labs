import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Consultation: React.FC = () => {
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

        <form className="space-y-6">
          <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl border" />
          <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl border" />
          <input type="text" placeholder="Company / Project" className="w-full px-5 py-4 rounded-xl border" />
          <textarea placeholder="Tell us..." rows={4} className="w-full px-5 py-4 rounded-xl border" />

          <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
            Submit <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>

    </div>
  );
};

export default Consultation;