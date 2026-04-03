import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "AI Consulting",
    description:
      "Strategic AI consulting to identify opportunities, reduce costs, and accelerate growth using intelligent systems.",

    points: ["AI Roadmap", "Use-case Discovery", "ROI Planning"],
  },
  {
    id: 2,
    title: "AI Automation",
    description:
      "Automate repetitive workflows with AI-driven systems that increase efficiency and reduce human effort.",
   
    points: ["Process Automation", "RPA + AI", "Workflow Optimization"],
  },
  {
    id: 3,
    title: "Custom AI Development",
    description:
      "Custom-built AI solutions, chatbots, and LLM-based products tailored to your business.",
    
    points: ["Custom Models", "LLM Integration", "AI SaaS"],
  },
  {
    id: 4,
    title: "Machine Learning",
    description:
      "Advanced ML systems that analyze data, predict trends, and improve business decisions.",
    
    points: ["Prediction Models", "Data Analysis", "Forecasting"],
  },
  {
    id: 5,
    title: "AI Chatbots",
    description:
      "Smart AI chatbots for customer support, lead generation, and automation.",
    
    points: ["WhatsApp Bots", "Website Bots", "Voice AI"],
  },
  {
    id: 6,
    title: "AI Training",
    description:
      "Professional AI training programs for students, developers, and enterprises.",
   
    points: ["Workshops", "Corporate Training", "Hands-on Projects"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your business & goals" },
  { step: "02", title: "Strategy", desc: "Creating AI roadmap & planning" },
  { step: "03", title: "Development", desc: "Building & training AI models" },
  { step: "04", title: "Deployment", desc: "Launching & scaling solutions" },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-21 pb-32">
    
      {/* HERO */}
{/* HERO */}
{/* HERO */}
<div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* VIDEO BACKGROUND */}
 <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/video/service.mp4" type="video/mp4" />
</video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* GRADIENT GLOW (optional premium) */}
  <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
  bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl opacity-50"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 text-center">

    {/* TAG */}
   <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
  <Sparkles className="w-4 h-4" />
  OUR SERVICES
</span>

    {/* HEADING */}
    <h1 className="text-4xl md:text-8xl font-bold text-white leading-tight mb-6">
      Transform Your Business With{" "}
      <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
        AI Solutions
      </span>
    </h1>

    {/* SUBTEXT */}
    <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-10">
      We architect high-performance autonomous agents and custom LLM infrastructure for the world's most ambitious enterprises.
    </p>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">

      <Link
  to="/consultation"
  onClick={() => window.scrollTo(0, 0)}
  className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-500 transition-all"
>
  Free Consultation
</Link>

     <Link
  to="/corporate"
  onClick={() => window.scrollTo(0, 0)}
  className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all"
>
  View Case Study →
</Link>

    </div>

    {/* STATS */}
    <div className="max-w-5xl mx-auto border-y border-white/10">

      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="p-8 border-r border-white/10 text-center">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
            Projects Delivered
          </p>
          <p className="text-3xl font-bold text-white">100+</p>
        </div>

        <div className="p-8 border-r border-white/10 text-center">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
            Industries
          </p>
          <p className="text-3xl font-bold text-white">50+</p>
        </div>

        <div className="p-8 text-center">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">
            Client Satisfaction
          </p>
          <p className="text-3xl font-bold text-white">100%</p>
        </div>

      </div>

    </div>

  </div>
</div>
{/* ROADMAP SECTION */}
<div className="max-w-7xl mx-auto px-6 mt-32">

  {/* HEADING */}
  {/* HEADING */}
<div className="text-center mb-20 max-w-3xl mx-auto">

  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
    
    <span className="text-black">The AI </span>

    <span className="bg-gradient-to-r from-orange-500 to-orange-500 text-transparent bg-clip-text">
      Transformation Roadmap
    </span>

  </h2>

  <p className="text-slate-500 text-lg mt-6 leading-relaxed">
    A systematic approach to transitioning from legacy infrastructure 
    to fully autonomous enterprise operations.
  </p>

</div>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        step: "01",
        title: "Strategic Audit",
        desc: "Identifying high-impact opportunities within existing data architecture.",
      },
      {
        step: "02",
        title: "Infrastructure",
        desc: "Secure, scalable vector databases and enterprise-grade LLM pipelines.",
      },
      {
        step: "03",
        title: "Custom Training",
        desc: "Fine-tuning models on proprietary datasets with RAG implementation.",
      },
      {
        step: "04",
        title: "Autonomous Scale",
        desc: "Multi-agent systems orchestrating complex workflows.",
      },
    ].map((item, i) => (
      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="p-8 rounded-2xl border border-orange-500/60 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 opacity-50 hover:-translate-y-1 transition-all duration-300"
      >

        {/* STEP */}
        <p className="text-[10px] py-2font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
          Phase {item.step}
        </p>

        {/* TITLE */}
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-slate-500 leading-relaxed">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

</div>

      {/* SERVICES */}

     {/* CORE SPECIALIZATION HEADING */}
{/* CORE SPECIALIZATION SECTION */}
{/* CORE SPECIALIZATION SECTION */}
{/* CORE SPECIALIZATION SECTION */}
<div className="max-w-7xl mx-auto px-6 mt-24">

  {/* HEADING */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
      <span className="text-black">Our Core </span>
      <span className="text-orange-500">Specialization</span>
    </h2>

    <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
      Cutting-edge AI services designed to transform businesses.
    </p>
  </div>

  {/* SERVICES GRID */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

    {servicesData.map((service, i) => (
      <div
        key={service.id}
        data-aos="fade-up"
        data-aos-delay={i * 80}
        className="group relative p-6 rounded-2xl border border-slate-200 overflow-hidden
        bg-gradient-to-br from-white via-slate-50 to-blue-50
        hover:-translate-y-2 transition-all duration-300
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
      >

        {/* HOVER GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
        bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          {/* TITLE */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition">
            {service.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-slate-500 mb-3">
            {service.description}
          </p>

          {/* POINTS */}
          <ul className="text-xs text-slate-400 mb-4 space-y-1">
            {service.points.map((p, index) => (
              <li key={index}>✔ {p}</li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="tel:+919811263046"
            className="text-orange-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Get Service →
          </a>

        </div>
      </div>
    ))}

  </div>

</div>
      {/* PROCESS */}
      

      {/* WHY US */}
      <div className="max-w-5xl mx-auto px-6 mt-32 text-center">
        <h2 className="text-4xl font-bold mb-6"></h2>
        <p className="text-slate-500 mb-10">
        </p>

       {/* PROCESS */}
<div className="max-w-7xl mx-auto px-6 mt-32">

  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">
  <span className="text-black">Our </span>
  <span className="text-orange-500">Process</span>
</h2>
    <p className="text-slate-500">
      A proven approach to deliver scalable AI solutions
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {[
      {
        step: "01",
        title: "Discovery",
        desc: "Understanding your business goals, challenges, and opportunities",
      },
      {
        step: "02",
        title: "Strategy",
        desc: "Creating AI roadmap, use-cases, and implementation plan",
      },
      {
        step: "03",
        title: "Development",
        desc: "Building, training, and testing AI models and systems",
      },
      {
        step: "04",
        title: "Deployment",
        desc: "Launching, scaling, and optimizing AI solutions",
      },
    ].map((item, i) => (
      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        className="group relative p-8 rounded-3xl border border-slate-200 overflow-hidden
bg-gradient-to-br from-white via-orange-50 to-pink-300
hover:-translate-y-3 transition-all duration-500
hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >

        {/* STEP NUMBER */}
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg mb-6 shadow-md">
          {item.step}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition">
          {item.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed">
          {item.desc}
        </p>

        {/* HOVER LINE */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-b-3xl"></div>

      </div>
    ))}

  </div>
</div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-32 mb-24 text-center bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl py-12 text-white shadow-xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your AI Solution?
        </h2>

        <p className="mb-10 text-white/90">
          Let's create something powerful together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="tel:+919811263046"
            className="bg-white text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919811263046"
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-8 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
};

export default Services;