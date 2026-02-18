import React from 'react'
import { statsData } from '../../data/siteData'
import './About.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="about-wrap">

          {/* Image Side */}
          <div className="about-imgs" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Team" className="about-img-main"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80"
              alt="Training" className="about-img-small"
            />
            <div className="about-exp-badge">
              <span className="exp-num">5+</span>
              <span className="exp-label">Years<br/>Experience</span>
            </div>
          </div>

          {/* Content */}
          <div className="about-content" data-aos="fade-left">
            <span className="tag-pill">About Us</span>

            <h2 className="about-h2">
              India's Most Trusted
              <span className="grad-text"> AI Company</span>
            </h2>

            <p className="about-p">
              Founded by <strong>Pradeep Kumar</strong>, AI Experts Labs is headquartered at
              Logix Cyber Park, Sector 62, Noida. We are a one-stop destination for
              AI training, consulting, and custom AI development.
            </p>

            <p className="about-p">
              Our mission is to democratize AI education and make
              India a global AI powerhouse by training the next generation of
              AI professionals and delivering world-class AI solutions to businesses.
            </p>

            <div className="about-features">
              {[
                { icon: "🎓", title: "AI Training",      desc: "Industry-focused programs with real projects" },
                { icon: "🚀", title: "AI Development",   desc: "Custom AI solutions for your business"       },
                { icon: "🤝", title: "100% Placement",   desc: "Dedicated placement support for all students" },
                { icon: "📍", title: "Noida, India",     desc: "Logix Cyber Park, Tower C, 9th Floor"        },
              ].map((f, i) => (
                <div key={i} className="about-feat">
                  <div className="feat-icon">{f.icon}</div>
                  <div>
                    <p className="feat-title">{f.title}</p>
                    <p className="feat-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="tel:+919811263046" className="about-cta">
              📞 Talk to Pradeep Kumar
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row" data-aos="fade-up">
          {statsData.map(s => (
            <div key={s.id} className="stat-box">
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-num">{s.number}</span>
              <span className="stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About