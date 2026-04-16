"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Corporate() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
<section className="relative min-h-[91vh] flex items-center justify-center overflow-hidden">

  {/* 🎥 VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/video/corporate.mp4" type="video/mp4" />
  </video>

  {/* 🔥 DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#020617]/80"></div>

  {/* 🔥 GRADIENT GLOW */}
  <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-orange-500/20 blur-[120px]"></div>
  <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px]"></div>

  {/* MAIN CONTENT */}
  <div className="relative z-20 max-w-7xl mx-auto px-6">

    {/* 🔥 TOP GRID */}
    <div className="grid lg:grid-cols-2 gap-40 items-center">

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="px-5 py-3 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-xl font-bold">
          AI Transformation
        </span>

        <h1 className="text-6xl md:text-6xl font-extrabold mt-6 leading-tight text-white">
          Workforce Transformation for the{" "}
          <span className="text-orange-500">AI Workforce</span>
        </h1>

        <p className="text-slate-200 mt-6 text-2xl max-w-xl">
          Empower your teams with cutting-edge AI skills and automation.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-8 flex-wrap">

          <Link to="/services">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition">
              View Programs
            </button>
          </Link>

          <Link to="/contact">
            <button className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
              Contact Sales
            </button>
          </Link>

        </div>

      </motion.div>

      {/* RIGHT VIDEO */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        <div className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] md:h-[420px] object-cover"
          >
            <source src="/video/corporate.mp4" type="video/mp4" />
          </video>

        </div>

        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>

      </motion.div>

    </div>

    {/* 🔥 FULL WIDTH STATS (NOW BELOW BOTH) */}
    <div className="mt-16 border-y border-slate-500">

      <div className="grid grid-cols-2 md:grid-cols-4">

        <div className="p-6 border-r border-slate-500 text-center">
          <p className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">1000+</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Professionals
          </p>
        </div>

        <div className="p-6 border-r border-slate-500 text-center">
          <p className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">50+</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Companies
          </p>
        </div>

        <div className="p-6 border-r border-slate-500 text-center">
          <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">95%</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Success Rate
          </p>
        </div>

        <div className="p-6 text-center">
          <p className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">4.9★</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Rating
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
  

     {/* ================= PROCESS ================= */}
{/* ================= PROCESS ================= */}
<section className="bg-slate-50 py-18">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-6xl font-bold mb-16">
      How We{" "}
      <span className="text-orange-500">Transform Your Team</span>
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      {[
        {
          id: "01",
          title: "Assessment",
          desc: "We deeply analyze your current workflow, team structure, and bottlenecks to identify growth opportunities.",
          gradient: "from-blue-500 via-cyan-500 to-teal-400",
        },
        {
          id: "02",
          title: "Strategy",
          desc: "We design a tailored roadmap with clear goals, timelines, and scalable solutions aligned to your business.",
          gradient: "from-purple-500 via-pink-500 to-rose-400",
        },
        {
          id: "03",
          title: "Implementation",
          desc: "We execute the plan using modern tools and best practices, ensuring smooth integration.",
          gradient: "from-orange-500 via-red-500 to-pink-500",
        },
        {
          id: "04",
          title: "Scaling",
          desc: "We optimize and scale your system for long-term growth and performance.",
          gradient: "from-green-500 via-emerald-500 to-lime-400",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.07, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative p-6 rounded-2xl text-white shadow-xl overflow-hidden cursor-pointer group"
        >

          {/* 🔥 Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>

          {/* ✨ Glass overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

          {/* 💎 Content */}
          <div className="relative z-10 text-center">

            {/* NUMBER */}
            <div className="text-3xl font-bold mb-2 opacity-90">
              {item.id}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-2xl tracking-wide mb-3">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-white/90 opacity-80 group-hover:opacity-100 transition duration-300">
              {item.desc}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* ================= SPECIALIZATIONS ================= */}
     <section className="max-w-7xl mx-auto px-6 py-16">

  {/* HEADING */}
  <div className="text-center mb-16">
    <h2 className="text-6xl font-bold text-black">
      Our <span className="text-orange-500">Specializations</span>
    </h2>

    <p className="text-slate-500 mt-6 text-2xl max-w-4xl mx-auto">
      We focus on high-impact AI transformation domains.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        title: "Leadership Strategy",
        desc: "Executive-level roadmap development and strategic planning for sustainable AI adoption.",
        icon: "📊",
        gradient: "from-orange-500 via-pink-500 to-purple-500"
      },
      {
        title: "Workflow Automation",
        desc: "Integration of GenAI tools across marketing, sales, operations, and engineering.",
        icon: "⚙️",
        gradient: "from-blue-500 via-cyan-400 to-indigo-500"
      },
      {
        title: "Ethical AI Governance",
        desc: "Risk management frameworks and compliance strategies for ethical AI deployment.",
        icon: "🛡️",
        gradient: "from-green-400 via-emerald-500 to-lime-400"
      },
    ].map((item, i) => (

      <div
        key={i}
        className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
      >

        {/* 🔥 Animated Gradient BG */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition duration-500 animate-gradient`}
        ></div>

        {/* 🔥 Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-2xl opacity-0 group-hover:opacity-70 transition duration-500`}
        ></div>

        {/* CARD CONTENT */}
        <div className="relative bg-[#020617] group-hover:bg-transparent border border-white/10 group-hover:border-transparent rounded-2xl p-10 h-full transition duration-500">

          {/* ICON */}
          <div className="text-4xl mb-5 group-hover:scale-125 transition duration-300">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-bold mb-3 text-white">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-slate-400 group-hover:text-white/90 transition">
            {item.desc}
          </p>

        </div>

      </div>

    ))}

  </div>
</section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-24 items-center">

        <motion.img
          src="https://media.licdn.com/dms/image/v2/D4E12AQFBpmtTnuNgYQ/article-cover_image-shrink_720_1280/B4EZldeMxnGUAI-/0/1758209826023?e=2147483647&v=beta&t=41EjJrvnFareKNdWfJADfFE-fBeOMkH3kDGdbbD12S4"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-6xl font-bold mb-6">
            Enterprise <span className="text-orange-500">AI Capabilities</span>
          </h2>

          <ul className="space-y-4  text-xl text-slate-900">
            <li>✔ AI Strategy & Consulting</li>
            <li>✔ Workflow Automation</li>
            <li>✔ GenAI Tools Integration</li>
            <li>✔ Custom AI Solutions</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative rounded-[30px] p-16 text-center shadow-2xl overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>

            <div className="relative z-10 text-white">

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to transform your enterprise?
              </h2>

              <p className="text-white/90 mb-10">
                Join forward-thinking companies using AI.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">

                <Link to="/consultation">
  <button className="bg-white text-black px-8 py-4 rounded-full font-semibold">
    Schedule Consultation
  </button>
</Link>

<Link to="/portfolio">
  <button className="bg-black text-white px-8 py-4 rounded-full font-semibold">
    View Case Studies
  </button>
</Link>

              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}