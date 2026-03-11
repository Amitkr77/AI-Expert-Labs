import { useState, useEffect, useCallback } from "react";
import slide1 from "../../assets/hero1.png";
import slide2 from "../../assets/hero2.png";
import slide3 from "../../assets/hero3.png";
import slide4 from "../../assets/hero4.png";
import slide5 from "../../assets/hero5.png";

const slides = [
  { src: slide1, alt: "AI Training – Future Technologies" },
  { src: slide2, alt: "AI Training – Practical Workshops" },
  { src: slide3, alt: "AI Training – Expert Mentorship" },
  { src: slide4, alt: "AI Training – Real-World Projects" },
  { src: slide5, alt: "AI Training – Career Acceleration" },
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

        /* ── ROOT ───────────────────────────────────── */
        .hero-root {
          margin-top: 90px;
          width: 100%;
          aspect-ratio: 100 / 30;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* ── FULL BG IMAGE ──────────────────────────── */
        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          z-index: 0;
          transition: opacity 0.42s ease;
        }
        .hero-bg-img.hidden  { opacity: 0; }
        .hero-bg-img.visible { opacity: 1; }

        /* Overlay — only left ~45% dark for text, right image stays clean */
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(5,9,25,0.92) 0%,
            rgba(5,9,25,0.88) 25%,
            rgba(5,9,25,0.55) 42%,
            rgba(5,9,25,0.10) 58%,
            transparent 72%
          );
          z-index: 1;
          pointer-events: none;
        }

        /* ── WRAPPER ────────────────────────────────── */
        .slide-wrapper {
          max-width: 1200px;
          width: 100%;
          padding: 20px 72px;
          position: relative;
          z-index: 10;
        }

        /* ── LAYOUT (text only, no image column) ────── */
        .slide-layout {
          display: flex;
          align-items: center;
          transition: opacity 0.42s ease, transform 0.42s ease;
        }
        .slide-layout.hidden  { opacity:0; transform:translateY(14px); }
        .slide-layout.visible { opacity:1; transform:translateY(0);    }

        /* ── TEXT ───────────────────────────────────── */
        .hero-text {
          display: flex;
          flex-direction: column;
          padding: 10px 0 10px 8px;
          max-width: 520px;
        }

        /* Tag */
        .slide-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid;
          margin-bottom: 14px;
          width: fit-content;
          transition: color 0.5s, border-color 0.5s;
        }
        .slide-tag-dot {
          width:5px; height:5px; border-radius:50%;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1);   }
          50%      { opacity:0.4; transform:scale(0.7); }
        }

        /* Headline */
        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 2.4vw, 34px);
          line-height: 1.2;
          color: #fff;
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .hero-headline .line        { display: block; }
        .hero-headline .line-accent { transition: color 0.5s ease; }

        /* Features */
        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          color: #94a3b8;
          line-height: 1.4;
        }
        .feature-icon {
          width:18px; height:18px;
          border-radius:5px;
          display:flex; align-items:center; justify-content:center;
          font-size:9px; flex-shrink:0;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: background 0.5s, border-color 0.5s;
        }

        /* CTA */
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #d35c1d, #f07340);
          border: none;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          border-radius: 7px;
          cursor: pointer;
          width: fit-content;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(211,92,29,0.35);
        }
        .hero-cta:hover { transform:translateY(-1px); box-shadow:0 6px 22px rgba(211,92,29,0.5); }
        .hero-cta::after { content:'→'; font-size:13px; transition:transform 0.2s; }
        .hero-cta:hover::after { transform:translateX(3px); }

        /* Floating stat cards */
        .stat-card {
          position: absolute;
          background: rgba(6,11,31,0.75);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 9px;
          padding: 7px 14px;
          backdrop-filter: blur(12px);
          z-index: 10;
        }
        .stat-card-top    { top: 18%;  right: 72px; animation: float-up   4s   ease-in-out infinite; }
        .stat-card-bottom { bottom: 18%; right: 72px; animation: float-down 4.5s ease-in-out infinite; }
        @keyframes float-up   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes float-down { 0%,100%{transform:translateY(0)} 50%{transform:translateY( 5px)} }
        .stat-number {
          font-family:'Syne',sans-serif;
          font-size:14px; font-weight:700; color:white; transition:color 0.5s;
        }
        .stat-label {
          font-size:8px; color:#64748b;
          letter-spacing:0.06em; text-transform:uppercase; margin-top:1px;
        }

        /* ── ARROWS ─────────────────────────────────── */
        .nav-btn-side {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          z-index: 20;
          padding: 4px 6px;
          line-height: 1;
          transition: color 0.2s, transform 0.2s;
        }
        .nav-btn-side:hover {
          color: #00d4ff;
          transform: translateY(-50%) scale(1.25);
        }
        .nav-btn-left  { left:  14px; }
        .nav-btn-right { right: 14px; }

        /* ── DOTS ────────────────────────────────────── */
        .dots {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
          z-index: 20;
        }
        .dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }
        .dot.active {
          transform: scale(1.3);
        }

        /* ── RESPONSIVE ─────────────────────────────── */
        @media (max-width: 900px) {
          .hero-root { aspect-ratio: unset; padding: 28px 0 36px; }
          .slide-wrapper { padding: 0 52px; }
          .hero-headline { font-size: clamp(22px, 4vw, 32px); }
          .stat-card-top    { top: 12px;    right: 52px; }
          .stat-card-bottom { bottom: 36px; right: 52px; }
        }

        @media (max-width: 580px) {
          .hero-root    { padding: 22px 0 30px; }
          .slide-wrapper { padding: 0 44px; }
          .hero-headline { font-size: clamp(20px, 5.5vw, 26px); }
          .feature-list  { gap: 7px; }
          .feature-item  { font-size: 12px; }
          .stat-card-top,
          .stat-card-bottom { display: none; }
          .nav-btn-left  { left:  4px; }
          .nav-btn-right { right: 4px; }
        }
      `}</style>

      <section className="hero-root">

        {/* Full background image */}
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className={`hero-bg-img ${visible ? "visible" : "hidden"}`}
        />

        {/* Overlay layers */}
        <div className="hero-bg-overlay" />

        <div className="slide-wrapper">

          <button className="nav-btn-side nav-btn-left" onClick={goPrev}>‹</button>

          <div className={`slide-layout ${visible ? "visible" : "hidden"}`}>

            {/* TEXT ONLY — image is the background */}
            <div className="hero-text">
              <div className="slide-tag" style={{ color: accent.text, borderColor: accent.border }}>
                <span className="slide-tag-dot" style={{ background: accent.text, boxShadow: accent.glow }} />
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
                    <span className="feature-icon" style={{ borderColor: accent.border, color: accent.text }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="hero-cta">Build an AI-Ready Workforce</button>
            </div>

          </div>

          <button className="nav-btn-side nav-btn-right" onClick={goNext}>›</button>

        </div>

        {/* Floating stat cards — anchored to hero section */}
        {/* <div className="stat-card stat-card-top">
          <div className="stat-number" style={{ color: accent.text }}>500+</div>
          <div className="stat-label">Companies Trained</div>
        </div>
        <div className="stat-card stat-card-bottom">
          <div className="stat-number" style={{ color: accent.text }}>98%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div> */}

        {/* Dots */}
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              style={i === current ? { background: accent.text } : {}}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

      </section>
    </>
  );
}