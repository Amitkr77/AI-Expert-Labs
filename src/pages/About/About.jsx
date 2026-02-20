import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { statsData, teamData } from '../../data/siteData'
import './About.css'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="tag-pill">About Us</span>
          <h1 className="page-h1">India's Most Trusted <span className="grad-txt">AI Company</span></h1>
          <p className="page-sub">
            Founded by Pradeep Kumar — headquartered at Logix Cyber Park, Noida.
            Building the future of AI since 2019.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section container">
        <div className="about-grid" data-aos="fade-up">
          <div className="about-img-side">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Team" className="ab-img-main"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80"
              alt="Working" className="ab-img-sm"
            />
            <div className="ab-badge">
              <span className="ab-num">5+</span>
              <span className="ab-lbl">Years of<br/>Excellence</span>
            </div>
          </div>

          <div className="about-txt-side" data-aos="fade-left">
            <span className="tag-pill">Our Story</span>
            <h2 className="sec-h2">Why AI Experts Labs?</h2>
            <p className="ab-p">
              AI Experts Labs was founded with a single vision — to make
              Artificial Intelligence accessible to every business and
              professional in India and beyond.
            </p>
            <p className="ab-p">
              Under the leadership of <strong>Pradeep Kumar</strong>, we have grown
              from a small AI consulting firm to India's leading AI training
              and solutions company with 10,000+ students trained and
              150+ enterprise projects delivered.
            </p>
            <div className="ab-info-box">
              <div className="ab-info-item">
                <span>📍</span>
                <div>
                  <strong>Headquarters</strong>
                  <p>Logix Cyber Park, Tower C, 9th Floor, Sector 62, Noida 201309</p>
                </div>
              </div>
              {/* <div className="ab-info-item">
                <span>👤</span>
                <div>
                  <strong>Founder & CEO</strong>
                  <p>Pradeep Kumar </p>
                </div>
              </div> */}
              <div className="ab-info-item">
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>pradeep@aixpertslabs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="stats-row">
            {statsData.map((s, i) => (
              <div key={s.id} className="stat-box" data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-num">{s.number}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section container">
        <div className="sec-header" data-aos="fade-up">
          <span className="tag-pill">Our Team</span>
          <h2 className="sec-h2">Meet The <span className="grad-txt">Experts</span></h2>
        </div>
        <div className="team-grid">
          {teamData.map((m, i) => (
            <div key={m.id} className="team-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <img src={m.image} alt={m.name} className="team-img" />
              <div className="team-info">
                <h3 className="team-name">{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p className="team-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About