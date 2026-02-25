import React, { useState, useEffect } from "react";
import { portfolioData, portfolioCategories } from "../../data/siteData";
import "./Portfolio.css";

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState(0);

  const filtered =
    active === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === active);

  const total = filtered.length;

  /* Reset index when filter changes */
  useEffect(() => {
    setIndex(0);
  }, [active]);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const getPosition = (i) => {
    if (i === index) return "active";
    if (i === (index - 1 + total) % total) return "left";
    if (i === (index + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="portfolio">
      <div className="container">

        <div className="port-hdr">
          <h2 className="port-h2">
            Featured <span className="grad-text">AI Projects</span>
          </h2>
          <p className="port-sub">
            Real-world AI solutions delivering measurable business results.
          </p>
        </div>

        <div className="port-filters">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`port-filter ${active === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="carousel-wrapper">

          <button className="carousel-btn left" onClick={prevSlide}>
            ‹
          </button>

          <div className="carousel">
            {filtered.map((item, i) => (
              <div key={item.id} className={`carousel-card ${getPosition(i)}`}>

                <div className="carousel-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="carousel-img"
                  />
                </div>

                <div className="carousel-content">
                  <h4>{item.title}</h4>
                  <p>{item.result}</p>
                </div>

              </div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={nextSlide}>
            ›
          </button>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;