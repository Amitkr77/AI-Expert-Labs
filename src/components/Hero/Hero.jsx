import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* BG */}
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
        <div className="hero-dots"></div>
      </div>

      <div className="container">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">

            {/* <div className="hero-tag">
              <span className="tag-dot"></span>
              🇮🇳 India's #1 AI Training & Solutions Company
            </div> */}

            <h1 className="hero-h1">
              Master AI &
              <span className="hero-grad"> Transform</span>
              <br />Your Career &
              <span className="hero-grad"> Business</span>
            </h1>

            <p className="hero-para">
              Join <strong>10,000+ students & 150+ companies</strong> who trust
              AI Experts Labs for world-class AI training, consulting, and
              custom AI solutions. Based in Noida, serving globally.
            </p>

            {/* Highlights */}
            <div className="hero-highlights">
              {[
                { icon: "✅", text: "Live Projects & Mentorship" },
                { icon: "✅", text: "100% Placement Assistance" },
                { icon: "✅", text: "Industry-Recognized Certificate" },
                { icon: "✅", text: "EMI Available — No Cost" },
              ].map((h, i) => (
                <div key={i} className="highlight-item">
                  <span>{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-ctas">
              <Link to="courses" smooth duration={500} offset={-80} className="cta-primary">
                Explore Courses 🚀
              </Link>
              <Link to="contact" smooth duration={500} offset={-80} className="cta-secondary">
                Free Consultation →
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust">
              <div className="trust-avatars">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&q=80",
                ].map((src, i) => (
                  <img key={i} src={src} alt="student" className="trust-avatar" style={{ zIndex: 4 - i }} />
                ))}
              </div>
              <div className="trust-text">
                <div className="trust-stars">⭐⭐⭐⭐⭐</div>
                <span>Trusted by <strong>10,000+</strong> students across India</span>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hero-right">

            <div className="hero-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80"
                alt="AI Technology"
                className="hero-main-img"
              />

              {/* Float Cards */}
              <div className="hero-float card-placement">
                <div className="float-icon">💼</div>
                <div>
                  <p className="float-num">98%</p>
                  <p className="float-label">Placement Rate</p>
                </div>
              </div>

              <div className="hero-float card-students">
                <div className="float-icon">🎓</div>
                <div>
                  <p className="float-num">10K+</p>
                  <p className="float-label">Students Trained</p>
                </div>
              </div>

              <div className="hero-float card-rating">
                <div className="float-icon">⭐</div>
                <div>
                  <p className="float-num">4.9/5</p>
                  <p className="float-label">Google Rating</p>
                </div>
              </div>

              {/* Glow */}
              <div className="img-glow"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="hero-scroll-hint">
        <div className="scroll-ring">
          <div className="scroll-dot"></div>
        </div>
      </div>

    </section>
  )
}

export default Hero