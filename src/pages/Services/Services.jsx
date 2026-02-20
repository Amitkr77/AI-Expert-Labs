import React, { useEffect } from 'react'
import AOS from 'aos'; import 'aos/dist/aos.css'
import { servicesData } from '../../data/siteData'
import './Services.css'

const Services = () => {
  useEffect(() => { AOS.init({ duration: 700, once: true }); window.scrollTo(0, 0) }, [])

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <span className="tag-pill">Our Services</span>
          <h1 className="page-h1">AI Services That <span className="grad-txt">Drive Results</span></h1>
          <p className="page-sub">End-to-end AI solutions that transform businesses and create real impact.</p>
        </div>
      </div>

      <section className="section container">
        <div className="svc-full-grid">
          {servicesData.map((s, i) => (
            <div key={s.id} className="svc-full-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="svc-full-icon" style={{ background: s.bg }}>
                <span>{s.icon}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href="tel:+919811263046" className="svc-cta">Get This Service →</a>
            </div>
          ))}
        </div>

        {/* <div className="services-contact-banner" data-aos="fade-up">
          <h2>Ready to Build Your AI Solution?</h2>
          <p>Contact us  <strong>Our Team</strong></p>
          <div style={{ display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap', marginTop:'20px' }}>
            <a href="tel:+919811263046"                           className="btn-primary">📞 Call Now</a>
            <a href="https://wa.me/919811263046" target="_blank" rel="noreferrer" className="btn-wa">💬 WhatsApp</a>
          </div>
        </div> */}
      </section>
    </div>
  )
}

export default Services