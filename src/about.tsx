"use client"
import { Link } from "react-router-dom";
import pradeep from "./assets/team/pradeep.jpg";
import harshu from "./assets/team/harshu.jpg";
import anshu from "./assets/team/anshu.jpg";
import saurav from "./assets/team/Suman.jpg";
import { Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <style>
        {`
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* BG VIDEO */}
  <div className="absolute inset-0 overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover brightness-75"
    >
      <source src="/video/yxdnwa81sxrmw0cwzzz8smvt9c_result_.mp4" type="video/mp4" />
    </video>

    {/* PREMIUM OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    {/* TAG */}
    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold tracking-widest mb-6 backdrop-blur-md">
      <Sparkles className="w-4 h-4" />
      ARCHITECTING INTELLIGENCE
    </span>

    {/* HEADING */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-extrabold leading-[1.05] text-white mb-6 tracking-tight">
      Building the Future of{" "}
      <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
        Artificial Intelligence
      </span>
    </h1>

    {/* SUBTEXT */}
    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
      We empower global institutions to harness the transformative power of AI through 
      <span className="text-white font-medium"> strategic execution</span>, 
      <span className="text-white font-medium"> advanced education</span>, and 
      <span className="text-white font-medium"> autonomous intelligence systems</span>.
    </p>

    {/* CTA */}
    <div className="flex justify-center gap-6 flex-wrap">

      <Link
        to="/consultation"
        className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-900/40 hover:scale-105"
      >
        Free Consultation →
      </Link>

      <Link
        to="/contact"
        className="px-10 py-5 text-lg font-semibold text-white rounded-full border border-white/30 backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105"
      >
        Who We Are
      </Link>

    </div>

  </div>
</section>


      {/* WHO WE ARE */}
      <section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-12 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-7">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Who <span className="text-orange-500">We</span> Are
        </h2>

        <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">

          <p>
            Founded at the intersection of <span className="font-semibold text-slate-800">technological disruption</span> and 
            <span className="font-semibold text-slate-800"> industrial innovation</span>, AIxperts Labs is an elite 
            AI research and implementation company.
          </p>

          <p>
            We design <span className="font-semibold text-orange-500">intelligent ecosystems</span> where 
            <span className="font-semibold text-slate-800"> data, automation, and human creativity</span> 
            work together to create exponential business growth.
          </p>

          <p>
            From <span className="font-semibold">enterprise AI strategy</span> to 
            <span className="font-semibold"> autonomous workflows</span>, our solutions are built to 
            <span className="font-semibold text-slate-800"> adapt, scale, and evolve</span> with modern businesses.
          </p>

          <p>
            Our team specializes in <span className="font-semibold text-orange-500">Generative AI</span> and 
            <span className="font-semibold"> intelligent automation</span>, delivering measurable impact 
            and long-term transformation for global clients.
          </p>

        </div>
      </div>

      {/* RIGHT CARDS */}
      <div className="lg:col-span-5 space-y-6">

        {/* MISSION */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition">
          <div className="text-orange-500 text-3xl mb-4">🎯</div>
          <h3 className="text-2xl font-semibold mb-3">
            Our Mission
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            To make <span className="font-semibold text-slate-800">advanced AI accessible</span> 
            and empower organizations by integrating intelligent systems into everyday operations.
          </p>
        </div>

        {/* VISION */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition">
          <div className="text-purple-500 text-3xl mb-4">👁️</div>
          <h3 className="text-2xl font-semibold mb-3">
            Our Vision
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            To lead the global AI transformation where every business operates with 
            <span className="font-semibold text-slate-800"> maximum intelligence, speed, and efficiency</span>.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
{/* IMPACT STATS */}
<section className="py-12 bg-white border-y border-slate-100">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

      {[
        { value: "10K+", label: "Students Trained", width: "85%" },
        { value: "50+", label: "Global Workshops", width: "70%" },
        { value: "20+", label: "Automations Live", width: "92%" },
        { value: "15+", label: "Strategic Partners", width: "60%" },
      ].map((item, i) => (
        <div key={i} className="space-y-4">

          {/* PROGRESS LINE */}
          <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full"
              style={{ width: item.width }}
            ></div>
          </div>

          {/* NUMBER */}
          <h3 className="relative inline-block text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            <span className="relative z-10">{item.value}</span>

            {/* GRADIENT BG */}
            <span className="absolute inset-0 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 rounded-xl blur-sm opacity-60"></span>
          </h3>

          {/* LABEL 🔥 IMPROVED */}
          <p className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            {item.label}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>
     {/* STRATEGIC DOMAINS */}
<section className="relative py-16 text-black overflow-hidden">

  {/* BG IMAGE */}
  <div className="absolute inset-0">
    <img className="w-full h-full object-cover"/>
    <div className="absolute inset-0 bg-white/85"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-10">
    <h2 className="text-4xl md:text-5xl font-bold">
  <span className="text-black">Strategic </span>
  <span className="text-orange-500">Domains</span>
</h2>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {/* CARD 1 */}
      <div className="p-6 rounded-2xl bg-white/10 border border-black/20 backdrop-blur-md hover:shadow-xl transition">
        <h3 className="text-xl font-bold mb-2">Enterprise AI Consulting</h3>
        <p className="text-slate-500 text-sm">
          Strategic roadmaps bridging legacy systems with AI-driven innovation.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="p-6 rounded-2xl bg-white/10 border border-black/20 backdrop-blur-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">AI Automation</h3>
        <p className="text-slate-500 text-sm">
          Autonomous workflows designed to eliminate friction and boost efficiency.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="p-6 rounded-2xl bg-white/10 border border-black/20 backdrop-blur-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">Elite Training</h3>
        <p className="text-slate-500 text-sm">
          AI-first programs to upskill modern global workforces.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="p-6 rounded-2xl bg-white/10 border border-black/20 backdrop-blur-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">Innovation Lab</h3>
        <p className="text-slate-500 text-sm">
          Continuous R&D focused on building proprietary AI frameworks.
        </p>
      </div>

      {/* CARD 5 */}
      <div className="p-6 rounded-2xl bg-white/10 border border-black/20 backdrop-blur-md hover:shadow-xl transition">
        <h3 className="text-xl font-semibold mb-2">Agentic Frameworks</h3>
        <p className="text-slate-500 text-sm">
          Multi-agent systems capable of reasoning, decision-making, and execution.
        </p>
      </div>

      {/* CARD 6 */}
      <div className="p-6 rounded-2xl bg-white/10 border border-black/20 backdrop-blur-md hover:shadow-xl transition">
        <h3 className="text-xl font-bold mb-2">AI Solutions</h3>
        <p className="text-sm opacity-90">
          End-to-end AI solutions tailored for scalable business transformation.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* INTELLIGENCE FRONTIERS */}
{/* INTELLIGENCE FRONTIERS */}
<section className="relative py-14 text-white overflow-hidden">

  {/* BG IMAGE */}
  <div className="absolute inset-0">
    <img
      src="https://www.shutterstock.com/image-photo/futuristic-poster-header-background-ai-600nw-2700672289.jpg"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/80"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-16 backdrop-blur-xl">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-4xl tracking-[0.3em] text-blue-300 mb-4">
  FUTURE <span className="text-orange-500">R&D</span>
</p>
          

          <p className="text-4xl   uppercase text-orange-500 mb-4">
  Intelligence Frontiers
</p>

          <div className="space-y-6 text-slate-300">

            <div>
              <h3 className="font-semibold text-xl  text-white mb-1">
                • Generative AI
              </h3>
              <p className="text-sm">
                Fine-tuning large language models for domain-specific enterprise intelligence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">
                • Autonomous Systems
              </h3>
              <p className="text-sm">
                Building goal-oriented agents that operate independently within secure ecosystems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">
                • Workflow Platforms
              </h3>
              <p className="text-sm">
                Next-gen SaaS products integrating AI directly into enterprise stacks.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT GRID */}
       {/* RIGHT CIRCLE SYSTEM */}
{/* RIGHT SIDE VIDEO */}
<div className="relative w-full h-[400px] rounded-[30px] overflow-hidden border border-white/10 shadow-xl">

  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/video/ai.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/30"></div>

</div>

      </div>

    </div>

  </div>
</section>


      {/* STATS */}
     

      {/* AI LAB */}
     {/* AI LAB */}
<section className="pt-8 pb-10 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-16">
     <h2 className="text-4xl font-bold mb-3">
  AI <span className="text-orange-500">Innovation</span> Lab
</h2>
      <p className="text-slate-500">
        Next-generation artificial intelligence research and development
      </p>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "AI Research",
          desc: "Exploring advanced machine learning architectures and intelligent systems.",
          icon: "🧠",
        },
        {
          title: "AI Infrastructure",
          desc: "Developing scalable AI platforms for enterprise applications.",
          icon: "⚙️",
        },
        {
          title: "AI Development",
          desc: "Building innovative AI products like HelloGini.",
          icon: "🚀",
        },
        {
          title: "AI Automation",
          desc: "Seamless deployment of AI models into production-ready environments.",
          icon: "📦",
        },
        {
          title: "Data Engineering",
          desc: "Designing robust data pipelines and architectures for AI systems.",
          icon: "📊",
        },
        {
          title: "AI Security",
          desc: "Ensuring safe, ethical, and secure AI implementations across platforms.",
          icon: "🔐",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >

          {/* ICON */}
          <div className="text-3xl mb-4">{item.icon}</div>

          {/* TITLE */}
          <h3 className="font-bold text-lg mb-3 group-hover:text-orange-500 transition">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-slate-500 text-sm leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>



      {/* TEAM (FIXED PREMIUM) */}
<section className="py-18 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Leadership Team
          </h2>
          <p className="text-slate-500 mt-3">
            Experts driving Aixperts Labs mission
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
<TeamRowCard
  name="Pradeep Kumar"
  role="Founder & CEO"
  img={pradeep}
  desc="Leading AIxperts Labs with a vision to transform enterprises through cutting-edge AI strategies."
/>

<TeamRowCard
  name="Harshu Bharti"
  role="Co-Founder & CTO"
  img={harshu}
  desc="Architecting scalable AI systems and driving innovation in intelligent automation."
/>

<TeamRowCard
  name="Anshu Bharti"
  role="Co-founder & COO"
  img={anshu}
  desc="Ensuring seamless execution and operational excellence across all AI solutions."
/>

<TeamRowCard
  name="Saurav Suman"
  role="Head of Sales & Internship"
  img={saurav}
  desc="Driving growth, partnerships, and talent development across AI programs."
/>

        </div>
      </div>
    </section>
      {/* CTA */}
      {/* PREMIUM CTA */}
<section className="py-32 bg-white">
  <div className="max-w-[1200px] mx-auto px-6">

    <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-16 md:p-24 text-center shadow-2xl">

      {/* LIGHT GLOW */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Architect your{" "}
          <span className="text-white/80">AI future</span> today.
        </h2>

        {/* SUBTEXT */}
        <p className="text-white/90 text-lg md:text-xl mb-12">
          Join the elite institutions leading the autonomous revolution with AIxpets Labs.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

                <Link
                  to="/contact"
                  className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition shadow-xl"
                >
                Book Consultation
                </Link>
                          
            


          {/* <button className="px-10 py-4 border border-white/30 text-white rounded-2xl font-semibold hover:bg-white/10 transition">
            Contact Strategy
          </button> */}

        </div>

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

interface TeamRowCardProps {
  name: string;
  role: string;
  img: string;
  desc: string;
}

function TeamRowCard({ name, role, img, desc }: TeamRowCardProps) {
  return (
    <div className="group flex items-center gap-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 p-6">

      <div className="w-[160px] h-[200px] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={img}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/200x250";
          }}
          className={`w-full h-full object-cover ${
  name === "Anshu Bharti" ? "object-[center_top]" : "object-center"
} group-hover:scale-105 transition duration-500`}
        />
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-500 transition">
          {name}
        </h3>

        <p className="text-slate-500 mt-1 text-sm">
          {role}
        </p>

        <div className="w-12 h-[3px] bg-slate-300 mt-4 group-hover:w-20 group-hover:bg-orange-400 transition-all duration-300"></div>

        <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-md">
          {desc}
        </p>
      </div>
    </div>
  );
}