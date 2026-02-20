import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'; import 'aos/dist/aos.css'
import { corporateCourses } from '../../data/siteData'
import './Corporate.css'

const Corporate = () => {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 700, once: true })
    window.scrollTo(0, 0)
  }, [])

  const goto = (path) => { navigate(path); window.scrollTo(0, 0) }

  return (
    <div className="corporate-page">

      {/* Hero */}
      <div className="corp-hero">
        <div className="corp-hero-bg">
          <div className="chb1"></div><div className="chb2"></div>
          <div className="ch-dots"></div>
        </div>
        <div className="container">
          <div className="corp-hero-inner" data-aos="fade-up">
            {/* <button className="back-btn-c" onClick={() => goto('/courses')}>
              ← Back to Courses
            </button> */}
            <span className="tag-pill-corp">🏢 Corporate Training</span>
            <h1 className="corp-h1">
              AI Training for
              <span className="corp-grad"> Your Team</span>
            </h1>
            <p className="corp-sub">
              Customized AI upskilling programs for teams of 5 to 5000.
              On-site, Virtual or Hybrid delivery. Custom curriculum for your industry.
            </p>
            <div className="corp-hero-stats">
              {[
                { num: '150+',  lbl: 'Companies'  },
                { num: '40%',   lbl: 'Productivity Boost' },
                { num: '4.8⭐', lbl: 'Client Rating'      },
                { num: 'Custom', lbl: 'Pricing'            },
              ].map((s, i) => (
                <div key={i} className="chs">
                  <strong>{s.num}</strong>
                  <span>{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <section className="corp-process section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-hdr-c" data-aos="fade-up">
            <span className="tag-pill-corp">How It Works</span>
            <h2 className="sec-h2-c">Simple 4-Step Process</h2>
          </div>
          <div className="process-steps">
            {[
              { step: '01', icon: '📞', title: 'Discovery Call',     desc: 'We understand your team size, goals, and technical level.' },
              { step: '02', icon: '📋', title: 'Custom Curriculum',  desc: 'We design a tailored curriculum specific to your industry and team needs.' },
              { step: '03', icon: '🚀', title: 'Training Delivery',  desc: 'On-site, virtual or hybrid training by Pradeep Kumar and expert trainers.' },
              { step: '04', icon: '📈', title: 'Ongoing Support',    desc: 'Post-training support, assessments and consulting to ensure ROI.' },
            ].map((p, i) => (
              <div key={i} className="process-step" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="step-num">{p.step}</div>
                <div className="step-icon">{p.icon}</div>
                <h4 className="step-title">{p.title}</h4>
                <p className="step-desc">{p.desc}</p>
                {i < 3 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="corp-programs section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="sec-hdr-c" data-aos="fade-up">
            <span className="tag-pill-corp">Our Programs</span>
            <h2 className="sec-h2-c">
              Corporate AI <span className="corp-grad">Programs</span>
            </h2>
            <p className="sec-sub-c">
              Choose from our specialized corporate training programs or get a fully custom solution.
            </p>
          </div>

          <div className="corp-grid">
            {corporateCourses.map((course, i) => (
              <div
                key={course.id}
                className="corp-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                onClick={() => goto(`/courses/corporate/${course.id}`)}
              >
                <div className="corp-card-img-wrap">
                  <img src={course.image} alt={course.title} className="corp-card-img" />
                  <span className="corp-badge" style={{ background: course.badgeColor }}>
                    {course.badge}
                  </span>
                  <div className="corp-team-size">
                    👥 {course.teamSize}
                  </div>
                </div>

                <div className="corp-card-body">
                  <div className="corp-meta">
                    <span className="corp-level">{course.level}</span>
                    <span className="corp-dur">⏱ {course.duration}</span>
                  </div>

                  <h3 className="corp-card-title">{course.title}</h3>
                  <p className="corp-card-subtitle">{course.subtitle}</p>

                  <div className="corp-rating">
                    {'⭐'.repeat(Math.floor(course.rating))}
                    <span> {course.rating} ({course.reviews} reviews)</span>
                  </div>

                  <div className="corp-tags">
                    {course.tags.slice(0, 3).map(t => (
                      <span key={t} className="corp-tag">{t}</span>
                    ))}
                  </div>

                  <div className="corp-highlights">
                    {course.highlights.slice(0, 3).map((h, j) => (
                      <p key={j} className="corp-hl">✅ {h}</p>
                    ))}
                  </div>
                </div>

                <div className="corp-card-foot">
                  <div>
                    <span className="corp-price">{course.price}</span>
                    <span className="corp-delivery">{course.delivery}</span>
                  </div>
                  <button className="corp-view-btn">View Details →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="corp-trusted section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-hdr-c" data-aos="fade-up">
            <h2 className="sec-h2-c">Trusted by Leading Companies</h2>
          </div>
          <div className="trusted-grid">
            {['TCS', 'Infosys', 'Wipro', 'HCL', 'Accenture', 'Capgemini', 'Deloitte', 'IBM'].map((c, i) => (
              <div key={i} className="trusted-badge" data-aos="fade-up" data-aos-delay={i * 60}>
                🏢 {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="corp-cta-section">
        <div className="container">
          <div className="corp-cta-box" data-aos="fade-up"> 
            <h2>Get a Custom Training Proposal</h2>
            <p>Talk to <strong>Our Team  </strong> AIXperts Labs</p>
            <p className="corp-cta-addr">📍 Logix Cyber Park, Tower C, 9th Floor, Sec 62, Noida</p>
            {/* <div className="corp-cta-btns">
              <a href="tel:+919811263046" className="cta-call-c">📞 +91 98112 63046</a>
              <a href="https://wa.me/919811263046" target="_blank" rel="noreferrer" className="cta-wa-c">💬 WhatsApp</a>
              <a href="mailto:pradeep@aixpertslabs.com" className="cta-email-c">✉️ Email Us</a>
            </div> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Corporate