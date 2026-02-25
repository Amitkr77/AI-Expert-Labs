import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

const highlights = [
  "Live Projects & Mentorship",
  "100% Placement Assistance",
  "Industry-Recognized Certificate",
  "EMI Available — No Cost",
];

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=60&fm=webp",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&q=60&fm=webp",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=60&fm=webp",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&q=60&fm=webp",
];

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* Simplified Background */}
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

            {/* Highlights */}
            <div className="hero-highlights">
              {highlights.map((text, i) => (
                <div key={i} className="highlight-item">
                  <span className="check">✔</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-ctas">
              <Link to="courses" smooth duration={500} offset={-80} className="cta-primary">
                Explore Courses
              </Link>
              <Link to="contact" smooth duration={500} offset={-80} className="cta-secondary">
                Free Consultation
              </Link>
            </div>

            {/* Trust */}
            <div className="hero-trust">
              <div className="trust-avatars">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="student"
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
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=60&fm=webp"
              srcSet="
                https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=60&fm=webp 400w,
                https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=60&fm=webp 700w
              "
              sizes="(max-width: 768px) 100vw, 700px"
              alt="AI Technology"
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