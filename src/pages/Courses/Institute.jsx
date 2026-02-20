import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'; import 'aos/dist/aos.css'
import { instituteCourses } from '../../data/siteData'
import './Institute.css'

const Institute = () => {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 700, once: true })
    window.scrollTo(0, 0)
  }, [])

  const goto = (path) => { navigate(path); window.scrollTo(0, 0) }

  return (
    <div className="institute-page">

      {/* Hero */}
      <div className="inst-hero">
        <div className="inst-hero-bg">
          <div className="ihb1"></div><div className="ihb2"></div>
          <div className="ih-dots"></div>
        </div>
        <div className="container">
          <div className="inst-hero-inner" data-aos="fade-up">
            {/* <button className="back-btn" onClick={() => goto('/courses')}>
              ← Back to Courses
            </button> */}
            <span className="tag-pill-inst">🎓 Institute Training</span>
            <h1 className="inst-h1">
              AI Courses for
              <span className="inst-grad"> Individuals</span>
            </h1>
            <p className="inst-sub">
              Industry-focused AI programs for students, freshers & professionals.
              Live classes, real projects & 100% placement support.
            </p>
            <div className="inst-hero-stats">
              {[
                { num: '10,000+', lbl: 'Students' },
                { num: '98%',     lbl: 'Placement' },
                { num: '4.9⭐',   lbl: 'Rating'    },
                { num: 'EMI',     lbl: 'Available'  },
              ].map((s, i) => (
                <div key={i} className="ihs">
                  <strong>{s.num}</strong>
                  <span>{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="inst-courses section">
        <div className="container">
          <div className="inst-grid">
            {instituteCourses.map((course, i) => (
              <div
                key={course.id}
                className="inst-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                onClick={() => goto(`/courses/institute/${course.id}`)}
              >
                {/* Image */}
                <div className="inst-card-img-wrap">
                  <img src={course.image} alt={course.title} className="inst-card-img" />
                  <span className="inst-card-badge" style={{ background: course.badgeColor }}>
                    {course.badge}
                  </span>
                  {course.discount && (
                    <span className="inst-discount">{course.discount}</span>
                  )}
                </div>

                {/* Body */}
                <div className="inst-card-body">
                  <div className="inst-card-meta">
                    <span className="inst-level">{course.level}</span>
                    <span className="inst-dur">⏱ {course.duration}</span>
                  </div>

                  <h3 className="inst-card-title">{course.title}</h3>
                  <p className="inst-card-subtitle">{course.subtitle}</p>

                  <div className="inst-rating">
                    {'⭐'.repeat(Math.floor(course.rating))}
                    <span> {course.rating} ({course.reviews} reviews)</span>
                  </div>

                  <div className="inst-tags">
                    {course.tags.slice(0, 3).map(t => (
                      <span key={t} className="inst-tag">{t}</span>
                    ))}
                    {course.tags.length > 3 && (
                      <span className="inst-tag">+{course.tags.length - 3}</span>
                    )}
                  </div>

                  <div className="inst-highlights-preview">
                    {course.highlights.slice(0, 3).map((h, j) => (
                      <p key={j} className="inst-hl">✅ {h}</p>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="inst-card-foot">
                  <div className="inst-price-wrap">
                    {/* <span className="inst-price">{course.price}</span>
                    {course.originalPrice && (
                      <span className="inst-old">{course.originalPrice}</span>
                    )} */}
                  </div>
                  <button className="inst-enroll-btn">
                    View Details →
                  </button>
                </div>

                <div className="inst-stu-count">
                  👨‍🎓 {course.students} students enrolled
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="inst-why section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="sec-hdr" data-aos="fade-up">
            <span className="tag-pill-inst">Why AI Experts Labs</span>
            <h2 className="sec-h2-inst">
              Why 10,000+ Students
              <span className="inst-grad"> Choose Us</span>
            </h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '🎯', title: '100% Job Assistance',   desc: 'Dedicated placement cell with 500+ hiring partners including Google, Microsoft, Amazon.' },
              { icon: '👨‍🏫', title: 'Expert Instructors',    desc: 'Learn directly from Pradeep Kumar and industry practitioners with 10+ years experience.' },
              { icon: '💻', title: 'Live + Recorded',        desc: 'Attend live sessions or watch recordings anytime. Never miss a class.' },
              { icon: '📁', title: 'Real Projects',          desc: '50+ hands-on projects using real industry datasets and business problems.' },
              { icon: '📜', title: 'Recognized Certificate', desc: 'Get an industry-recognized certificate accepted by top companies worldwide.' },
              { icon: '💰', title: 'Affordable + EMI',       desc: 'No Cost EMI options available. Pay in easy installments without any interest.' },
            ].map((w, i) => (
              <div key={i} className="why-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="why-icon">{w.icon}</div>
                <h4 className="why-title">{w.title}</h4>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="inst-cta-section">
        <div className="container">
          <div className="inst-cta-box" data-aos="fade-up">
            <h2>Start Your AI Journey Today!</h2>
            <p>Talk to <strong>Our Team</strong> for FREE counseling</p>
            {/* <div className="inst-cta-btns">
              <a href="tel:+919811263046" className="cta-call">📞 +91 98112 63046</a>
              <a href="https://wa.me/919811263046" target="_blank" rel="noreferrer" className="cta-wa">💬 WhatsApp</a>
            </div> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Institute