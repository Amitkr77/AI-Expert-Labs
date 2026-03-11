import { useState, useEffect, useCallback } from "react";

const slides = [
  { alt: "AI Training – Future Technologies", gradient: "from-cyan-500 to-blue-600" },
  { alt: "AI Training – Practical Workshops", gradient: "from-violet-500 to-purple-700" },
  { alt: "AI Training – Expert Mentorship", gradient: "from-emerald-400 to-teal-600" },
  { alt: "AI Training – Real-World Projects", gradient: "from-orange-400 to-rose-600" },
  { alt: "AI Training – Career Acceleration", gradient: "from-sky-400 to-indigo-600" },
];

const slideContent = [
  {
    tag: "Future Technologies",
    headline: ["AI Upskilling", "for the Corporate", "& Industrial Workforce"],
    accent: 0,
    features: ["Workforce Transformation", "Practical AI Skills", "Industry Use-Cases", "Automation Literacy"],
  },
  {
    tag: "Practical Workshops",
    headline: ["Hands-On", "AI Training that", "Drives Real Results"],
    accent: 1,
    features: ["Live Lab Sessions", "Scenario-Based Learning", "Tool Mastery", "Instant Applicability"],
  },
  {
    tag: "Expert Mentorship",
    headline: ["Learn From", "Industry-Leading", "AI Practitioners"],
    accent: 2,
    features: ["1-on-1 Mentoring", "Expert-Led Modules", "Peer Collaboration", "Feedback Loops"],
  },
  {
    tag: "Real-World Projects",
    headline: ["Build AI", "Solutions That", "Solve Real Problems"],
    accent: 3,
    features: ["Live Project Work", "Cross-Industry Cases", "Portfolio Building", "Impact Measurement"],
  },
  {
    tag: "Career Acceleration",
    headline: ["Future-Proof", "Your Career with", "AI Expertise"],
    accent: 4,
    features: ["Certification Tracks", "Role-Based Paths", "Leadership AI Skills", "Market Readiness"],
  },
];

const accentColors = [
  { text: "#33e1ff", glow: "0 0 40px rgba(51,225,255,0.4)", dot: "#33e1ff", border: "rgba(51,225,255,0.3)" },
  { text: "#c084fc", glow: "0 0 40px rgba(192,132,252,0.4)", dot: "#c084fc", border: "rgba(192,132,252,0.3)" },
  { text: "#34d399", glow: "0 0 40px rgba(52,211,153,0.4)", dot: "#34d399", border: "rgba(52,211,153,0.3)" },
  { text: "#fb923c", glow: "0 0 40px rgba(251,146,60,0.4)", dot: "#fb923c", border: "rgba(251,146,60,0.3)" },
  { text: "#60a5fa", glow: "0 0 40px rgba(96,165,250,0.4)", dot: "#60a5fa", border: "rgba(96,165,250,0.3)" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
      setAnimating(false);
    }, 420);
  }, [animating]);

  const goNext = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(goNext, 5200);
    return () => clearInterval(id);
  }, [goNext]);

  const slide = slideContent[current];
  const accent = accentColors[slide.accent];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          width: 100%;
          min-height: 100vh;
          background: #060b1f;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Animated grid background */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(51,225,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51,225,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
        }

        /* Ambient orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          pointer-events: none;
          transition: background 1s ease;
        }
        .orb-1 { width: 500px; height: 500px; top: -100px; left: -100px; }
        .orb-2 { width: 400px; height: 400px; bottom: -80px; right: -80px; }
        .orb-3 { width: 300px; height: 300px; top: 40%; left: 50%; transform: translate(-50%,-50%); opacity: 0.1; }

        /* Slide wrapper */
        .slide-wrapper {
          max-width: 1200px;
          width: 100%;
          padding: 60px 40px;
          position: relative;
          z-index: 2;
        }

        /* Main slide layout */
        .slide-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          transition: opacity 0.42s ease, transform 0.42s ease;
        }
        .slide-layout.hidden {
          opacity: 0;
          transform: translateY(16px);
        }
        .slide-layout.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Left: text content */
        .hero-text { flex: 1; }

        .slide-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid;
          margin-bottom: 28px;
          transition: color 0.5s, border-color 0.5s;
        }

        .slide-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 4.5vw, 58px);
          line-height: 1.1;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 36px;
        }

        .hero-headline .line { display: block; }
        .hero-headline .line-accent { transition: color 0.5s ease; }

        /* Feature list */
        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #94a3b8;
          font-weight: 400;
        }

        .feature-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.5s, border-color 0.5s;
        }

        /* CTA Button */
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #d35c1d, #f07340);
          border: none;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 32px rgba(211,92,29,0.35);
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(211,92,29,0.5);
        }

        .hero-cta::after {
          content: '→';
          font-size: 18px;
          transition: transform 0.2s;
        }

        .hero-cta:hover::after {
          transform: translateX(4px);
        }

        /* Right: visual panel */
        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-card {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .visual-card-inner {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 16px;
          padding: 32px;
        }

        /* Slide image placeholder / actual image */
        .slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          border-radius: 20px;
          opacity: 0.85;
        }

        /* Floating stats cards */
        .stat-card {
          position: absolute;
          background: rgba(6,11,31,0.85);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 14px 20px;
          backdrop-filter: blur(12px);
          z-index: 3;
        }

        .stat-card-top {
          top: -18px;
          right: 24px;
          animation: float-1 4s ease-in-out infinite;
        }

        .stat-card-bottom {
          bottom: -18px;
          left: 24px;
          animation: float-2 4.5s ease-in-out infinite;
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: white;
          transition: color 0.5s;
        }
        .stat-label {
          font-size: 11px;
          color: #64748b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Bottom controls */
        .hero-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 48px;
          padding: 0 40px;
          max-width: 1200px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .progress-dots {
          display: flex;
          gap: 8px;
          flex: 1;
        }

        .dot {
          height: 3px;
          border-radius: 10px;
          cursor: pointer;
          transition: width 0.4s ease, background 0.4s ease;
        }

        .dot-inactive {
          width: 20px;
          background: rgba(255,255,255,0.15);
        }

        .dot-active {
          width: 48px;
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          color: white;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          backdrop-filter: blur(8px);
        }

        .nav-btn:hover {
          background: rgba(255,255,255,0.12);
          transform: scale(1.05);
        }

        /* Slide counter */
        .slide-counter {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          color: #475569;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        .slide-counter span {
          color: #94a3b8;
        }

        /* Decorative corner */
        .corner-badge {
          position: absolute;
          top: 32px;
          right: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #475569;
          font-family: 'DM Sans', sans-serif;
          z-index: 2;
        }

        .live-indicator {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(34,197,94,0.6);
          animation: blink 1.5s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Vertical label */
        .vertical-label {
          position: absolute;
          left: -28px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #334155;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .slide-layout { grid-template-columns: 1fr; gap: 40px; }
          .slide-wrapper { padding: 40px 24px; }
          .hero-visual { display: none; }
          .hero-controls { padding: 0 24px; }
          .corner-badge { display: none; }
          .vertical-label { display: none; }
        }
      `}</style>

      <section className="hero-root">
        {/* Ambient orbs */}
        <div className="orb orb-1" style={{ background: accent.text }} />
        <div className="orb orb-2" style={{ background: "#d35c1d" }} />
        <div className="orb orb-3" style={{ background: accent.text }} />

        {/* Corner live badge */}
        <div className="corner-badge">
          <div className="live-indicator" />
          Live Training Programs
        </div>

        <div className="slide-wrapper">
          {/* Vertical side label */}
          <div className="vertical-label">AI-Powered Workforce</div>

          <div className={`slide-layout ${visible ? "visible" : "hidden"}`}>

            {/* LEFT: Text */}
            <div className="hero-text">
              <div
                className="slide-tag"
                style={{ color: accent.text, borderColor: accent.border }}
              >
                <span
                  className="slide-tag-dot"
                  style={{ background: accent.text, boxShadow: accent.glow }}
                />
                {slide.tag}
              </div>

              <h1 className="hero-headline">
                {slide.headline.map((line, i) => (
                  <span
                    key={i}
                    className={`line ${i === 0 ? "line-accent" : ""}`}
                    style={i === 0 ? { color: accent.text, textShadow: accent.glow } : {}}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <ul className="feature-list">
                {slide.features.map((f, i) => (
                  <li className="feature-item" key={i}>
                    <span
                      className="feature-icon"
                      style={{ borderColor: accent.border, color: accent.text }}
                    >
                      ✦
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="hero-cta">
                Build an AI-Ready Workforce
              </button>
            </div>

            {/* RIGHT: Visual */}
            <div className="hero-visual">
              <div className="visual-card">
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: `radial-gradient(ellipse at 60% 40%, ${accent.text}22 0%, transparent 70%)`,
                  borderRadius: 20,
                }} />

                {/* Slide number big bg text */}
                <div style={{
                  position: "absolute",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "200px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.02)",
                  lineHeight: 1,
                  userSelect: "none",
                }}>
                  {String(current + 1).padStart(2, "0")}
                </div>

                {/* Central icon / visual */}
                <div style={{
                  position: "relative", zIndex: 2,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 20,
                }}>
                  <div style={{
                    width: 90, height: 90,
                    borderRadius: 24,
                    background: `linear-gradient(135deg, ${accent.text}33, ${accent.text}11)`,
                    border: `1px solid ${accent.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 40,
                    boxShadow: accent.glow,
                  }}>
                    {["🤖", "🧠", "🎯", "⚡", "🚀"][current]}
                  </div>

                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 20, fontWeight: 700,
                    color: "white", textAlign: "center",
                  }}>
                    {slide.tag}
                  </div>

                  <div style={{
                    fontSize: 13, color: "#64748b",
                    textAlign: "center", maxWidth: 220,
                    lineHeight: 1.6,
                  }}>
                    Empowering teams with cutting-edge AI capabilities
                  </div>

                  {/* Mini progress bar */}
                  <div style={{
                    width: 160, height: 3,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 10, overflow: "hidden",
                  }}>
                    <div style={{
                      height: "100%",
                      width: `${(current + 1) / slides.length * 100}%`,
                      background: accent.text,
                      borderRadius: 10,
                      transition: "width 0.5s ease",
                    }} />
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="stat-card stat-card-top">
                <div className="stat-number" style={{ color: accent.text }}>500+</div>
                <div className="stat-label">Companies Trained</div>
              </div>

              <div className="stat-card stat-card-bottom">
                <div className="stat-number" style={{ color: accent.text }}>98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="hero-controls">
          <button className="nav-btn" onClick={goPrev}>‹</button>

          <div className="progress-dots">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === current ? "dot-active" : "dot-inactive"}`}
                style={i === current ? { background: accent.text } : {}}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <div className="slide-counter">
            <span>{String(current + 1).padStart(2, "0")}</span>
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </div>

          <button className="nav-btn" onClick={goNext}>›</button>
        </div>
      </section>
    </>
  );
}
