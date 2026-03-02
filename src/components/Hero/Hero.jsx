import React, { useState, useEffect, useCallback } from "react";
import "./Hero.css";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";

const slides = [
  { src: slide1, alt: "AI Training Slide 1" },
  { src: slide2, alt: "AI Training Slide 2" },
  { src: slide3, alt: "AI Training Slide 3" },
  { src: slide4, alt: "AI Training Slide 4" },
  { src: slide5, alt: "AI Training Slide 5" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="hero" id="hero">
      <div className="slider-container">
        <div className="slider-wrapper">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`slide ${i === current ? "slide-active" : "slide-hidden"}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="slide-img"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                draggable={false}
              />
              <div className="slide-overlay" />
            </div>
          ))}

          {/* Prev Button */}
          <button
            className="slider-btn slider-btn-prev"
            onClick={goPrev}
            aria-label="Previous Slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="slider-btn slider-btn-next"
            onClick={goNext}
            aria-label="Next Slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="slide-counter">
            <span className="counter-current">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="counter-sep" />
            <span className="counter-total">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div key={current} className="progress-fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;