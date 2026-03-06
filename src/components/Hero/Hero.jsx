import React, { useState, useEffect } from "react";
import "./Hero.css";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const prevIndex =
    current === 0 ? slides.length - 1 : current - 1;
  const nextIndex =
    current === slides.length - 1 ? 0 : current + 1;

  return (
    <section className="hero">
      <div className="carousel">

        {slides.map((img, index) => {
          let position = "nextSlide";

          if (index === current) {
            position = "activeSlide";
          } else if (index === prevIndex) {
            position = "prevSlide";
          } else if (index === nextIndex) {
            position = "nextSlide";
          } else {
            position = "hiddenSlide";
          }

          return (
            <div className={`slide ${position}`} key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </div>
          );
        })}

        <button
          className="btn prev"
          onClick={() =>
            setCurrent(
              current === 0 ? slides.length - 1 : current - 1
            )
          }
        >
          ❮
        </button>

        <button
          className="btn next"
          onClick={() =>
            setCurrent((current + 1) % slides.length)
          }
        >
          ❯
        </button>

      </div>
    </section>
  );
};

export default Hero;