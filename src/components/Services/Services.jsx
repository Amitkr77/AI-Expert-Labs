import React from 'react'
import { servicesData } from '../../data/siteData'
import './Services.css'

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">

        <div className="services-hdr" data-aos="fade-up">
          <span className="tag-pill">⚡ What We Do</span>
          <h2 className="services-h2">
            AI Services That <span className="grad-text">Drive Results</span>
          </h2>
          <p className="services-sub">
            From strategy to deployment — we deliver end-to-end AI solutions
            that create real business impact.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((s, i) => (
            <div key={s.id} className="service-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="svc-icon-wrap" style={{ background: s.bg }}>
                <span className="svc-icon">{s.icon}</span>
              </div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.description}</p>
              <span className="svc-link">Learn More →</span>
              <div className="svc-glow" style={{ background: s.gradient }}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services