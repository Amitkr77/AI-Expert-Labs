"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const courses = [
  {
    title: "AI & ML Program",
    desc: "Become AI Engineer with real projects",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
  },
  {
    title: "Generative AI",
    desc: "Master ChatGPT & LLM tools",
    image: "https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=1200",
  },
  {
    title: "Data Science",
    desc: "Real datasets & ML training",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
];

export default function Institute() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-6xl font-bold leading-tight">
            Launch Your Career in{" "}
            <span className="text-orange-500">Artificial Intelligence</span>
          </h1>

          <p className="text-slate-500 mt-6 text-lg max-w-xl">
            Learn AI from industry experts with real-world projects, certifications,
            and career support.
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

          {/* TRUST */}
          <div className="flex gap-6 mt-10 text-sm text-slate-500">
            <span>⭐ 4.9 Rating</span>
            <span>50K+ Students</span>
            <span>Job Ready</span>
          </div>
        </motion.div>

        {/* RIGHT */}
       {/* RIGHT VIDEO */}
<motion.div
  initial={{ x: 80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  className="relative rounded-3xl overflow-hidden"
>

  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[350px] md:h-[420px] object-cover rounded-3xl"
  >
    <source src="/video/institute.mp4" type="video/mp4" />
  </video>

  {/* OPTIONAL: light overlay (remove if want full clarity) */}
  <div className="absolute inset-0 bg-black/10"></div>

</motion.div>

      </section>

    
      {/* ================= STATS ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-24">

        {["1000+ Learners","50+ Courses","95% Success"].map((item, i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl font-bold text-orange-500">{item}</h3>
          </div>
        ))}

      </section>
      

      {/* ================= COURSES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Explore <span className="text-orange-500">Programs</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              data-aos="fade-up"
              className="rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
            >
              <img src={c.image} className="h-52 w-full object-cover" />

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{c.title}</h3>
                <p className="text-slate-500 mb-4">{c.desc}</p>

                <button
                  onClick={() => setShowForm(true)}
                  className="text-orange-500 font-semibold"
                >
                  Enroll →
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 bg-gradient-to-r from-orange-500 to-purple-500 text-white text-center">

          {[
            "Real Projects",
            "Industry Mentors",
            "Placement Support",
          ].map((item, i) => (
            <div key={i} className="bg-orange  p-6 rounded-2xl shadow">
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}

        </div>
      </section>
      {/* ================= TRUST / PARTNERS ================= */}
<section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

  {/* LEFT TEXT */}
  <motion.div
    initial={{ x: -60, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Offer students{" "}
      <span className="text-orange-500">10,600+ courses</span>{" "}
      from 350+ leading universities and industry partners
    </h2>

    <p className="text-slate-500 mt-6 text-lg max-w-xl">
      Learn from world-class institutions and top companies with
      cutting-edge AI curriculum and real-world applications.
    </p>
  </motion.div>

  {/* RIGHT LOGO IMAGE */}
  <motion.div
    initial={{ x: 60, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src="https://images.ctfassets.net/2pudprfttvy6/2eC1z7LVc0mMog2PnVxS5u/1e10361669fa01aeea0a1a2e9352a229/BC-2700_B2B_Homepage_Partner_Logo_Refresh_April_2024b.png"
      className="w-full rounded-2xl shadow-xl"
    />
  </motion.div>

</section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white p-16 rounded-3xl">

          <h2 className="text-4xl font-bold mb-6">
            Start Your AI Journey Today
          </h2>

          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-black px-8 py-3 rounded-full"
          >
            Enroll Now
          </button>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-80">
            <h2 className="font-bold mb-4">Enroll</h2>
            <input className="w-full mb-2 border p-2" placeholder="Name" />
            <input className="w-full mb-2 border p-2" placeholder="Email" />
            <button className="w-full bg-orange-500 text-white py-2">
              Submit
            </button>
          </div>
        </div>
      )}

    </div>
  );
}