import React, { useState, useEffect } from "react";
import "./Hero.css";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

const slides = [slide1, slide2, slide3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide Every 5 Seconds (Loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">
      <div className="slider-wrapper">

        {slides.map((img, index) => (
          <div
            key={index}
            className={`slide ${
              index === current ? "slide-active" : ""
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="slide-img"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="slide-overlay"></div>

        {/* Arrows */}
        <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="slider-btn slider-btn-next" onClick={nextSlide}>
          ❯
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${
                index === current ? "dot-active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div
            key={current}
            className="progress-fill"
          ></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;