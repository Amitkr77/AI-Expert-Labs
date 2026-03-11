import { useState, useEffect, useCallback } from "react";
import "./Hero.css";
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
  { text: "#33e1ff", glow: "0 0 40px rgba(51,225,255,0.4)", border: "rgba(51,225,255,0.3)" },
  { text: "#c084fc", glow: "0 0 40px rgba(192,132,252,0.4)", border: "rgba(192,132,252,0.3)" },
  { text: "#34d399", glow: "0 0 40px rgba(52,211,153,0.4)", border: "rgba(52,211,153,0.3)" },
  { text: "#fb923c", glow: "0 0 40px rgba(251,146,60,0.4)", border: "rgba(251,146,60,0.3)" },
  { text: "#60a5fa", glow: "0 0 40px rgba(96,165,250,0.4)", border: "rgba(96,165,250,0.3)" },
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
    <section className="hero-root">

      {/* Full background image */}
      <img
        src={slides[current].src}
        alt={slides[current].alt}
        className={`hero-bg-img ${visible ? "visible" : "hidden"}`}
      />

      {/* Dark overlay — left side only */}
      <div className="hero-bg-overlay" />

      <div className="slide-wrapper">

        <button className="nav-btn-side nav-btn-left" onClick={goPrev}>‹</button>

        <div className={`slide-layout ${visible ? "visible" : "hidden"}`}>

          <div className="hero-text">

            {/* Tag */}
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

            {/* Headline */}
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

            {/* Features */}
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

            {/* CTA */}
            <button className="hero-cta">Build an AI-Ready Workforce</button>

          </div>

        </div>

        <button className="nav-btn-side nav-btn-right" onClick={goNext}>›</button>

      </div>

      {/* Slide dots */}
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
  );
}