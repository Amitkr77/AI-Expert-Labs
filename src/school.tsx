"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Institute() {
  const [activeTab, setActiveTab] = useState("K-12");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const tabData = {
    "K-12": [
      { title: "AI Foundations", desc: "Basics of AI and ethics", icon: "🤖" },
      { title: "Creative Coding", desc: "Build AI applications", icon: "💻" },
      { title: "AI Ethics", desc: "Bias & safety in AI", icon: "🧠" },
    ],
    "Higher Education": [
      { title: "Machine Learning", desc: "Advanced ML models", icon: "📊" },
      { title: "Deep Learning", desc: "Neural networks", icon: "🧠" },
      { title: "AI Research", desc: "Innovation & experiments", icon: "🔬" },
    ],
    "Vocational": [
      { title: "AI Tools", desc: "Use ChatGPT tools", icon: "⚙️" },
      { title: "Automation", desc: "Workflow automation", icon: "🔄" },
      { title: "Freelancing AI", desc: "Earn with AI", icon: "💼" },
    ],
  };

  const openModule = (title) => {
    alert(`Opening ${title} 🚀`);
  };

  return (
    <div className="bg-slate-50 text-slate-900">

      {/* ================= HERO ================= */}
     {/* ================= HERO ================= */}
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* 🎥 VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/video/school.mp4" type="video/mp4" />
  </video>

  {/* 🔥 DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#020617]/80"></div>

  {/* 🔥 GRADIENT GLOW */}
  <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-orange-500/20 blur-[120px]"></div>
  <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-[120px]"></div>

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
          Institutional Grade AI
        </span>

        <h1 className="text-6xl md:text-6xl font-extrabold mt-6 leading-tight text-white">
          AI Curriculum for{" "}
          <span className="text-orange-500">
            Innovators
          </span>
        </h1>

        <p className="text-slate-200 mt-6 text-2xl max-w-xl">
          AI education for schools & universities with real-world learning,
          ethical training and future-ready curriculum.
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
            <source src="/video/school.mp4" type="video/mp4" />
          </video>

        </div>

        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>

      </motion.div>

    </div>

    {/* 🔥 FULL WIDTH STATS */}
    <div className="mt-16 border-y border-slate-500">

      <div className="grid grid-cols-2 md:grid-cols-4">

        <div className="p-6 border-r border-slate-500 text-center">
          <p className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">200+</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Schools
          </p>
        </div>

        <div className="p-6 border-r border-slate-500 text-center">
          <p className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">50K+</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Students
          </p>
        </div>

        <div className="p-6 border-r border-slate-500 text-center">
          <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">100%</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Curriculum Ready
          </p>
        </div>

        <div className="p-6 text-center">
          <p className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">24</p>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Modules
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

  

      {/* ================= TABS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-26">

        <h2 className="text-6xl font-bold mb-10">
  Tailored for {" "}
  <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
   Every Level
  </span>
</h2>

        {/* TABS */}
        <div className="flex gap-6 border-b pb-4 mb-10">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-orange-500 text-black"
                  : "text-slate-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {tabData[activeTab].map((item, i) => {

            const gradients = [
              "from-orange-500 via-pink-500 to-purple-500",
              "from-blue-500 via-cyan-500 to-teal-400",
              "from-green-500 via-emerald-500 to-lime-400",
            ];

            return (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative p-6 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >

                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]}`}></div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

                <div className="relative z-10 text-white">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4">{item.desc}</p>

                  <button onClick={() => openModule(item.title)}>
                    View Module →
                  </button>
                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="relative p-16 rounded-3xl text-center text-white overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
              Ready to integrate AI?
            </h2>

            <Link to="/contact">
  <button className="bg-white text-black px-8 py-3 rounded-full">
    Schedule Demo
  </button>
</Link>
          </div>

        </div>

      </section>

    </div>
  );
}