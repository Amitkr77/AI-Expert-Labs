import { useState, useEffect, useCallback } from "react";
import "./Hero.css";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";

const slides = [
  { src: slide1, alt: "AI Training – Future Technologies" },
  { src: slide2, alt: "AI Training – Practical Workshops" },
  { src: slide3, alt: "AI Training – Expert Mentorship" },
  { src: slide4, alt: "AI Training – Real-World Projects" },
  { src: slide5, alt: "AI Training – Career Acceleration" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx) => setCurrent(idx), []);

  const goNext = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    []
  );

  const goPrev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(goNext, 5200);
    return () => clearInterval(id);
  }, [goNext]);

  return (
    <section className="hero" id="hero">
      <div className="slider-wrapper">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`slide ${i === current ? "slide-active" : ""}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="slide-img"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              draggable={false}
            />

            <div className="slide-overlay" />
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          className="slider-btn slider-btn-prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className="slider-btn slider-btn-next"
          onClick={goNext}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? "dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="slide-counter">
          <span className="counter-current">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span> / </span>
          <span>{slides.length}</span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div key={current} className="progress-fill" />
        </div>
      </div>
    </section>
  );
}