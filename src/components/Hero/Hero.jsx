import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

// Import Images from assets
import heroMain from "../../assets/hero.webp";
import student1 from "../../assets/St1.webp";
import student2 from "../../assets/st2.webp";
import student3 from "../../assets/st3.webp";
import student4 from "../../assets/st4.webp";

const highlights = [
  "Live Projects & Mentorship",
  "100% Placement Assistance",
  "Industry-Recognized Certificate",
  "EMI Available — No Cost",
];

const avatars = [student1, student2, student3, student4];

const Hero = () => {
  return (
    <section className="hero" id="hero">

      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>

      <div className="container">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">

            <h1 className="hero-h1">
              Master AI &
              <span className="hero-grad"> Transform</span>
              <br />
              Your Career &
              <span className="hero-grad"> Business</span>
            </h1>

            <p className="hero-para">
              Join <strong>10,000+ students & 150+ companies</strong> who trust
              AI Experts Labs for world-class AI training and solutions.
            </p>

            <div className="hero-highlights">
              {highlights.map((text, i) => (
                <div key={i} className="highlight-item">
                  <span className="check">✔</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="hero-ctas">
              <Link to="courses" smooth duration={500} offset={-80} className="cta-primary">
                Explore Courses
              </Link>
              <Link to="contact" smooth duration={500} offset={-80} className="cta-secondary">
                Free Consultation
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="AI Experts Labs student"
                    className="trust-avatar"
                    loading="lazy"
                    width="60"
                    height="60"
                  />
                ))}
              </div>

              <span className="trust-text">
                ⭐ 4.9/5 — Trusted by <strong>10,000+</strong> students
              </span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <img
              src={heroMain}
              alt="AI Training and Technology"
              className="hero-main-img"
              loading="eager"
              fetchPriority="high"
              width="700"
              height="394"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;