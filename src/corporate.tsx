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
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-xs font-bold">
            AI Transformation
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Workforce
Transformation for the{" "}
            <span className="text-orange-500">AI Workforce</span>
          </h1>

          <p className="text-slate-500 mt-6 text-lg max-w-xl">
            Empower your teams with cutting-edge AI skills and automation.
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

        <motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  className="relative rounded-3xl overflow-hidden"
>

  {/* VIDEO */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[350px] md:h-[420px] object-cover rounded-3xl"
  >
    <source src="/video/corporate.mp4" type="video/mp4" />
  </video>

  {/* LIGHT OVERLAY (very subtle) */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* OPTIONAL GLOW BORDER */}
  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>

</motion.div>
      </section>

      {/* ================= COUNTERS ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 mb-24">
        {[
          { num: "1000+", label: "Professionals" },
          { num: "50+", label: "Companies" },
          { num: "95%", label: "Success Rate" },
          { num: "4.9★", label: "Rating" },
        ].map((item, i) => (
          <div key={i} data-aos="fade-up" className="text-center">
            <h3 className="text-4xl font-bold text-orange-500">{item.num}</h3>
            <p className="text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>

     {/* ================= PROCESS ================= */}
<section className="bg-slate-50 py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-16">
      How We{" "}
      <span className="text-orange-500">Transform Your Team</span>
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      {[
        {
          title: "Assessment",
          gradient: "from-blue-500 via-cyan-500 to-teal-400",
        },
        {
          title: "Strategy",
          gradient: "from-purple-500 via-pink-500 to-rose-400",
        },
        {
          title: "Implementation",
          gradient: "from-orange-500 via-red-500 to-pink-500",
        },
        {
          title: "Scaling",
          gradient: "from-green-500 via-emerald-500 to-lime-400",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.07, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative p-6 rounded-2xl text-white shadow-xl overflow-hidden cursor-pointer"
        >

          {/* 🔥 Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>

          {/* ✨ Glass overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

          {/* 💎 Content */}
          <div className="relative z-10 text-center">

            <div className="text-3xl font-bold mb-2 opacity-90">
              0{i + 1}
            </div>

            <h3 className="font-semibold text-lg tracking-wide">
              {item.title}
            </h3>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* ================= SPECIALIZATIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
      Our <span className="text-orange-500">Specializations</span>
          </h2>

          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            We focus on high-impact AI transformation domains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            { title: "Leadership Strategy", desc: "Executive level roadman develonment and strategic planning tor sustainableAl adoption across global teams.", icon: "📊" },
            { title: "Workflow Automation", desc: "Practical integration of GenAl tools fordepartments ranging trom marketingand sales to operations and engineering.", icon: "⚙️" },
            { title: "Ethical AI Governance", desc: "Robust risk management trameworksana comnllance strategles to enctresate and ethical Al deployment at scale.", icon: "🛡️" },
          ].map((item, i) => (
            <div key={i} className="relative p-10 rounded-2xl text-white shadow-xl overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src="https://media.licdn.com/dms/image/v2/D4E12AQFBpmtTnuNgYQ/article-cover_image-shrink_720_1280/B4EZldeMxnGUAI-/0/1758209826023?e=2147483647&v=beta&t=41EjJrvnFareKNdWfJADfFE-fBeOMkH3kDGdbbD12S4"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Enterprise <span className="text-orange-500">AI Capabilities</span>
          </h2>

          <ul className="space-y-4 text-slate-600">
            <li>✔ AI Strategy & Consulting</li>
            <li>✔ Workflow Automation</li>
            <li>✔ GenAI Tools Integration</li>
            <li>✔ Custom AI Solutions</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-white">
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