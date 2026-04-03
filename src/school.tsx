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
<section className="relative py-24 overflow-hidden">

  {/* 🔥 BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-purple-100"></div>

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
        Institutional Grade AI
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
        AI Curriculum for{" "}
        <span className="text-orange-500">
          Innovators
        </span>
      </h1>

      <p className="text-slate-500 mt-6 text-lg max-w-xl">
        AI education for schools & universities with real-world learning,
        ethical training and future-ready curriculum.
      </p>

      <div className="flex gap-4 mt-8">
       <Link to="/services">
  <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:scale-105 transition">
    View Programs
  </button>
</Link>

<Link to="/contact">
  <button className="border px-8 py-4 rounded-full hover:bg-slate-50">
    Contact sales
  </button>
</Link>
      </div>
    </motion.div>

    {/* RIGHT VIDEO */}
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl"
    >

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-contain bg-black"
      >
        <source src="/video/school.mp4" type="video/mp4" />
      </video>

    </motion.div>

  </div>
</section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 mt-10">

        {[
          { title: "Institutions", value: "150+" },
          { title: "Students", value: "50K+" },
          { title: "Modules", value: "24" },
        ].map((item, i) => (
          <div key={i} className="relative p-8 rounded-2xl overflow-hidden text-center shadow-xl">

            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500"></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

            <div className="relative z-10">
              <p className="text-white/80">{item.title}</p>
              <h3 className="text-4xl font-bold text-white mt-2">{item.value}</h3>
            </div>

          </div>
        ))}

      </section>

      {/* ================= TABS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-26">

        <h2 className="text-3xl font-bold mb-10">
          Tailored for Every Level
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