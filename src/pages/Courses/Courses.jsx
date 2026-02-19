import React, { useEffect } from 'react'
import AOS from 'aos'; import 'aos/dist/aos.css'
import { coursesData } from '../../data/siteData'
import './Courses.css'

const Stars = ({ r }) => <span>{"⭐".repeat(Math.floor(r))}<span style={{color:'#64748b',fontSize:'0.8rem'}}> {r}</span></span>

const Courses = () => {
  useEffect(() => { AOS.init({ duration: 700, once: true }); window.scrollTo(0, 0) }, [])

  return (
    <div className="courses-page">
      <div className="page-hero">
        <div className="container">
          <span className="tag-pill">AI Courses</span>
          <h1 className="page-h1">Industry-Leading <span className="grad-txt">AI Programs</span></h1>
          <p className="page-sub">Hands-on training with live projects, expert mentors & placement support. EMI available.</p>
        </div>
      </div>

      <section className="section container">
        <div className="courses-full-grid">
          {coursesData.map((c, i) => (
            <div key={c.id} className="course-full-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="cfc-img-wrap">
                <img src={c.image} alt={c.title} className="cfc-img" />
                <span className="cfc-badge" style={{ background: c.badgeColor }}>{c.badge}</span>
              </div>
              <div className="cfc-body">
                <div className="cfc-meta">
                  <span className="cfc-level">{c.level}</span>
                  <span className="cfc-dur">⏱ {c.duration}</span>
                  <span className="cfc-stu">👨‍🎓 {c.students}</span>
                </div>
                <h3 className="cfc-title">{c.title}</h3>
                <div className="cfc-stars"><Stars r={c.rating} /> <span className="cfc-rev">({c.reviews} reviews)</span></div>
                <div className="cfc-tags">
                  {c.tags.map(t => <span key={t} className="cfc-tag">{t}</span>)}
                </div>
                <div className="cfc-footer">
                  <div>
                    <span className="cfc-price">{c.price}</span>
                    <span className="cfc-old">{c.originalPrice}</span>
                  </div>
                  <button className="cfc-btn">Enroll Now →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-help-box" data-aos="fade-up">
          <div>
            <h3>Can't decide which course?</h3>
            <p>Talk to our counselor for FREE guidance</p>
          </div>
          <a href="tel:+919811263046" className="btn-primary">📞 +91 98112 63046</a>
        </div>
      </section>
    </div>
  )
}

export default Courses