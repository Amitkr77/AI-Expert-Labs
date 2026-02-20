import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { instituteCourses } from '../../data/siteData'
import './Institute.css'

const Institute = () => {
  const navigate = useNavigate()

  // ── Form Modal State ──────────────────────────
  const [showForm,    setShowForm]    = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [loading,     setLoading]     = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')

  const [form, setForm] = useState({
    name:    '',
    email:   '',
    phone:   '',
    course:  '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    AOS.init({ duration: 700, once: true })
    window.scrollTo(0, 0)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showForm])

  const goto = (path) => { navigate(path); window.scrollTo(0, 0) }

  // ── Open form with course pre-selected ────────
  const openForm = (e, courseTitle = '') => {
    e.stopPropagation()          // card click rokne ke liye
    setSelectedCourse(courseTitle)
    setForm(prev => ({ ...prev, course: courseTitle }))
    setSubmitted(false)
    setErrors({})
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setSubmitted(false)
    setErrors({})
    setForm({ name: '', email: '', phone: '', course: '', message: '' })
  }

  // ── Validation ────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name  = 'Name is required'
    if (!form.email.trim())   e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.phone.trim())   e.phone = 'Phone number is required'
    if (!form.course.trim())  e.course = 'Please select a course'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) { setErrors(v); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  return (
    <div className="institute-page">

      {/* ── HERO ──────────────────────────────── */}
      <div className="inst-hero">
        <div className="inst-hero-bg">
          <div className="ihb1"></div>
          <div className="ihb2"></div>
          <div className="ih-dots"></div>
        </div>
        <div className="container">
          <div className="inst-hero-inner" data-aos="fade-up">
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
                { num: '10,000+', lbl: 'Students'  },
                { num: '98%',     lbl: 'Placement'  },
                { num: '4.9⭐',   lbl: 'Rating'     },
                { num: 'EMI',     lbl: 'Available'  },
              ].map((s, i) => (
                <div key={i} className="ihs">
                  <strong>{s.num}</strong>
                  <span>{s.lbl}</span>
                </div>
              ))}
            </div>

            {/* Hero Enroll Button */}
            <button
              className="hero-enroll-btn"
              onClick={(e) => openForm(e, '')}
            >
              🚀 Enroll Now — Free Counseling
            </button>
          </div>
        </div>
      </div>

      {/* ── COURSES GRID ──────────────────────── */}
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
                  <img
                    src={course.image}
                    alt={course.title}
                    className="inst-card-img"
                  />
                  <span
                    className="inst-card-badge"
                    style={{ background: course.badgeColor }}
                  >
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

                {/* ── Card Footer — Enroll Now Button ── */}
                <div className="inst-card-foot">
                  <button
                    className="inst-view-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      goto(`/courses/institute/${course.id}`)
                    }}
                  >
                    View Details
                  </button>

                  <button
                    className="inst-enroll-btn"
                    onClick={(e) => openForm(e, course.title)}
                  >
                    Enroll Now 🚀
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

      {/* ── WHY CHOOSE ────────────────────────── */}
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
              <div
                key={i}
                className="why-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="why-icon">{w.icon}</div>
                <h4 className="why-title">{w.title}</h4>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────── */}
      <section className="inst-cta-section">
        <div className="container">
          <div className="inst-cta-box" data-aos="fade-up">
            <h2>Start Your AI Journey Today!</h2>
            <p>Talk to <strong>Our Team</strong> for FREE counseling</p>
            <button
              className="cta-enroll-big"
              onClick={(e) => openForm(e, '')}
            >
              🎓 Enroll Now — It's Free to Apply
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ENROLL FORM MODAL
      ══════════════════════════════════════════ */}
      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="modal-close" onClick={closeForm}>✕</button>

            {!submitted ? (
              <>
                {/* Modal Header */}
                <div className="modal-header">
                  <div className="modal-header-icon">🎓</div>
                  <h2 className="modal-title">Enroll Now</h2>
                  <p className="modal-subtitle">
                    Fill the form below and our team will contact you
                    within <strong>24 hours</strong>
                  </p>
                </div>

                {/* Form */}
                <form className="enroll-form" onSubmit={handleSubmit} noValidate>

                  {/* Name */}
                  <div className="ef-group">
                    <label className="ef-label">
                      Full Name <span className="ef-req">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`ef-input ${errors.name ? 'ef-error' : ''}`}
                    />
                    {errors.name && (
                      <span className="ef-err-msg">⚠ {errors.name}</span>
                    )}
                  </div>

                  {/* Email + Phone Row */}
                  <div className="ef-row">
                    <div className="ef-group">
                      <label className="ef-label">
                        Email Address <span className="ef-req">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`ef-input ${errors.email ? 'ef-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="ef-err-msg">⚠ {errors.email}</span>
                      )}
                    </div>

                    <div className="ef-group">
                      <label className="ef-label">
                        Phone Number <span className="ef-req">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`ef-input ${errors.phone ? 'ef-error' : ''}`}
                      />
                      {errors.phone && (
                        <span className="ef-err-msg">⚠ {errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Course Select */}
                  <div className="ef-group">
                    <label className="ef-label">
                      Select Course <span className="ef-req">*</span>
                    </label>
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className={`ef-input ef-select ${errors.course ? 'ef-error' : ''}`}
                    >
                      <option value="">-- Choose a course --</option>
                      {instituteCourses.map(c => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <span className="ef-err-msg">⚠ {errors.course}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="ef-group">
                    <label className="ef-label">
                      Message / Query (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any questions or special requirements..."
                      rows={3}
                      className="ef-input ef-textarea"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`ef-submit ${loading ? 'ef-loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="ef-spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Enrollment Request 🚀'
                    )}
                  </button>

                  <p className="ef-privacy">
                    🔒 Your data is safe. We never share your information.
                  </p>

                </form>
              </>
            ) : (
              /* ── SUCCESS STATE ── */
              <div className="modal-success">
                <div className="ms-circle">
                  <span className="ms-check">✓</span>
                </div>
                <h2 className="ms-h2">Enrollment Request Sent! 🎉</h2>
                <p className="ms-p">
                  Thank you <strong>{form.name || 'there'}</strong>!
                  Our team will call you on{' '}
                  <strong>{form.phone}</strong> within <strong>24 hours</strong>.
                </p>
                <div className="ms-contact">
                  <p>📞 Direct: <a href="tel:+919811263046">+91 98112 63046</a></p>
                  <p>💬 <a href="https://wa.me/919811263046" target="_blank" rel="noreferrer">WhatsApp Us</a></p>
                </div>
                <div className="ms-btns">
                  <button className="ms-close-btn" onClick={closeForm}>
                    Close
                  </button>
                  <button
                    className="ms-another-btn"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name:'', email:'', phone:'', course:'', message:'' })
                    }}
                  >
                    Enroll Another Course
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  )
}

export default Institute