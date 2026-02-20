import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { corporateCourses } from '../../data/siteData'
import './Corporate.css'

const Corporate = () => {
  const navigate = useNavigate()

  // ── Modal State ───────────────────────────────
  const [showForm,  setShowForm]  = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    email:       '',
    phone:       '',
    teamSize:    '',
    program:     '',
    industry:    '',
    message:     '',
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    AOS.init({ duration: 700, once: true })
    window.scrollTo(0, 0)
  }, [])

  // Lock body scroll when modal open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showForm])

  const goto = (path) => { navigate(path); window.scrollTo(0, 0) }

  // ── Open modal ────────────────────────────────
  const openForm = (e, programTitle = '') => {
    e.stopPropagation()
    setForm(prev => ({ ...prev, program: programTitle }))
    setSubmitted(false)
    setErrors({})
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setSubmitted(false)
    setErrors({})
    setForm({
      companyName: '',
      contactName: '',
      email:       '',
      phone:       '',
      teamSize:    '',
      program:     '',
      industry:    '',
      message:     '',
    })
  }

  // ── Validation ────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.companyName.trim()) e.companyName = 'Company name is required'
    if (!form.contactName.trim()) e.contactName = 'Contact person name is required'
    if (!form.email.trim())       e.email       = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.phone.trim())       e.phone       = 'Phone number is required'
    if (!form.teamSize.trim())    e.teamSize    = 'Please select team size'
    if (!form.program.trim())     e.program     = 'Please select a program'
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
    <div className="corporate-page">

      {/* ── HERO ──────────────────────────────── */}
      <div className="corp-hero">
        <div className="corp-hero-bg">
          <div className="chb1"></div>
          <div className="chb2"></div>
          <div className="ch-dots"></div>
        </div>
        <div className="container">
          <div className="corp-hero-inner" data-aos="fade-up">
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
                { num: '150+',   lbl: 'Companies'          },
                { num: '40%',    lbl: 'Productivity Boost'  },
                { num: '4.8⭐',  lbl: 'Client Rating'       },
                { num: 'Custom', lbl: 'Pricing'             },
              ].map((s, i) => (
                <div key={i} className="chs">
                  <strong>{s.num}</strong>
                  <span>{s.lbl}</span>
                </div>
              ))}
            </div>

            {/* Hero CTA Button */}
            <button
              className="corp-hero-btn"
              onClick={(e) => openForm(e, '')}
            >
              🏢 Get Free Training Proposal
            </button>
          </div>
        </div>
      </div>

      {/* ── PROCESS ───────────────────────────── */}
      <section className="corp-process section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-hdr-c" data-aos="fade-up">
            <span className="tag-pill-corp">How It Works</span>
            <h2 className="sec-h2-c">Simple 4-Step Process</h2>
          </div>
          <div className="process-steps">
            {[
              { step: '01', icon: '📞', title: 'Discovery Call',    desc: 'We understand your team size, goals, and technical level.' },
              { step: '02', icon: '📋', title: 'Custom Curriculum', desc: 'We design a tailored curriculum specific to your industry and team needs.' },
              { step: '03', icon: '🚀', title: 'Training Delivery', desc: 'On-site, virtual or hybrid training by Pradeep Kumar and expert trainers.' },
              { step: '04', icon: '📈', title: 'Ongoing Support',   desc: 'Post-training support, assessments and consulting to ensure ROI.' },
            ].map((p, i) => (
              <div
                key={i}
                className="process-step"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
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

      {/* ── PROGRAMS GRID ─────────────────────── */}
      <section className="corp-programs section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="sec-hdr-c" data-aos="fade-up">
            <span className="tag-pill-corp">Our Programs</span>
            <h2 className="sec-h2-c">
              Corporate AI <span className="corp-grad">Programs</span>
            </h2>
            <p className="sec-sub-c">
              Choose from our specialized corporate programs or get a fully custom solution.
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
                {/* Image */}
                <div className="corp-card-img-wrap">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="corp-card-img"
                  />
                  <span
                    className="corp-badge"
                    style={{ background: course.badgeColor }}
                  >
                    {course.badge}
                  </span>
                  <div className="corp-team-size">
                    👥 {course.teamSize}
                  </div>
                </div>

                {/* Body */}
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

                {/* ── Card Footer — Two Buttons ── */}
                <div className="corp-card-foot">
                  <button
                    className="corp-view-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      goto(`/courses/corporate/${course.id}`)
                    }}
                  >
                    View Details
                  </button>

                  <button
                    className="corp-proposal-btn"
                    onClick={(e) => openForm(e, course.title)}
                  >
                    Get Proposal 📋
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ────────────────────────── */}
      <section className="corp-trusted section" style={{ background: 'white' }}>
        <div className="container">
          <div className="sec-hdr-c" data-aos="fade-up">
            <h2 className="sec-h2-c">Trusted by Leading Companies</h2>
          </div>
          <div className="trusted-grid">
            {[
              'TCS', 'Infosys', 'Wipro', 'HCL',
              'Accenture', 'Capgemini', 'Deloitte', 'IBM',
            ].map((c, i) => (
              <div
                key={i}
                className="trusted-badge"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                🏢 {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────── */}
      <section className="corp-cta-section">
        <div className="container">
          <div className="corp-cta-box" data-aos="fade-up">
            <h2>Get a Custom Training Proposal</h2>
            <p>Talk to <strong>Our Team</strong> — AIXperts Labs</p>
            <p className="corp-cta-addr">
              📍 Logix Cyber Park, Tower C, 9th Floor, Sec 62, Noida
            </p>
            <button
              className="corp-cta-big-btn"
              onClick={(e) => openForm(e, '')}
            >
              📋 Request Free Proposal
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORPORATE ENQUIRY MODAL
      ══════════════════════════════════════════ */}
      {showForm && (
        <div className="corp-modal-overlay" onClick={closeForm}>
          <div
            className="corp-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button className="corp-modal-close" onClick={closeForm}>
              ✕
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="corp-modal-header">
                  <div className="corp-modal-icon">🏢</div>
                  <h2 className="corp-modal-title">Corporate Training Enquiry</h2>
                  <p className="corp-modal-sub">
                    Fill the form below and our corporate team will send you
                    a <strong>customized proposal within 24 hours</strong>
                  </p>
                </div>

                {/* Form */}
                <form
                  className="corp-enroll-form"
                  onSubmit={handleSubmit}
                  noValidate
                >

                  {/* Company + Contact Person */}
                  <div className="cef-row">
                    <div className="cef-group">
                      <label className="cef-label">
                        Company Name <span className="cef-req">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className={`cef-input ${errors.companyName ? 'cef-error' : ''}`}
                      />
                      {errors.companyName && (
                        <span className="cef-err-msg">⚠ {errors.companyName}</span>
                      )}
                    </div>

                    <div className="cef-group">
                      <label className="cef-label">
                        Contact Person <span className="cef-req">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={form.contactName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`cef-input ${errors.contactName ? 'cef-error' : ''}`}
                      />
                      {errors.contactName && (
                        <span className="cef-err-msg">⚠ {errors.contactName}</span>
                      )}
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="cef-row">
                    <div className="cef-group">
                      <label className="cef-label">
                        Work Email <span className="cef-req">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`cef-input ${errors.email ? 'cef-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="cef-err-msg">⚠ {errors.email}</span>
                      )}
                    </div>

                    <div className="cef-group">
                      <label className="cef-label">
                        Phone Number <span className="cef-req">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`cef-input ${errors.phone ? 'cef-error' : ''}`}
                      />
                      {errors.phone && (
                        <span className="cef-err-msg">⚠ {errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Team Size + Industry */}
                  <div className="cef-row">
                    <div className="cef-group">
                      <label className="cef-label">
                        Team Size <span className="cef-req">*</span>
                      </label>
                      <select
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className={`cef-input cef-select ${errors.teamSize ? 'cef-error' : ''}`}
                      >
                        <option value="">-- Select size --</option>
                        <option value="5-10">5 – 10 Employees</option>
                        <option value="11-25">11 – 25 Employees</option>
                        <option value="26-50">26 – 50 Employees</option>
                        <option value="51-100">51 – 100 Employees</option>
                        <option value="101-500">101 – 500 Employees</option>
                        <option value="500+">500+ Employees</option>
                      </select>
                      {errors.teamSize && (
                        <span className="cef-err-msg">⚠ {errors.teamSize}</span>
                      )}
                    </div>

                    <div className="cef-group">
                      <label className="cef-label">Industry</label>
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        className="cef-input cef-select"
                      >
                        <option value="">-- Select industry --</option>
                        <option>Information Technology</option>
                        <option>Banking & Finance</option>
                        <option>Healthcare</option>
                        <option>Retail & E-commerce</option>
                        <option>Manufacturing</option>
                        <option>Education</option>
                        <option>Consulting</option>
                        <option>Government / PSU</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Program Select */}
                  <div className="cef-group">
                    <label className="cef-label">
                      Program of Interest <span className="cef-req">*</span>
                    </label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className={`cef-input cef-select ${errors.program ? 'cef-error' : ''}`}
                    >
                      <option value="">-- Select a program --</option>
                      {corporateCourses.map(c => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                      <option value="Custom Program">
                        Custom Program (Tell us your needs)
                      </option>
                    </select>
                    {errors.program && (
                      <span className="cef-err-msg">⚠ {errors.program}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="cef-group">
                    <label className="cef-label">
                      Training Requirements / Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your training goals, timeline, specific requirements..."
                      rows={3}
                      className="cef-input cef-textarea"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`cef-submit ${loading ? 'cef-loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="cef-spinner"></span>
                        Submitting Enquiry...
                      </>
                    ) : (
                      'Submit Corporate Enquiry 📋'
                    )}
                  </button>

                  <p className="cef-privacy">
                    🔒 Your company data is 100% confidential and secure.
                  </p>

                </form>
              </>
            ) : (
              /* ── SUCCESS ── */
              <div className="corp-modal-success">
                <div className="cms-circle">
                  <span className="cms-check">✓</span>
                </div>
                <h2 className="cms-h2">Enquiry Submitted! 🎉</h2>
                <p className="cms-p">
                  Thank you <strong>{form.contactName || 'there'}</strong>!
                  Our corporate team will send a customized proposal to{' '}
                  <strong>{form.email}</strong> within <strong>24 hours</strong>.
                </p>

                <div className="cms-info-box">
                  <div className="cms-info-row">
                    <span>🏢</span>
                    <span>{form.companyName}</span>
                  </div>
                  <div className="cms-info-row">
                    <span>👥</span>
                    <span>Team Size: {form.teamSize}</span>
                  </div>
                  <div className="cms-info-row">
                    <span>📋</span>
                    <span>{form.program}</span>
                  </div>
                </div>

                <div className="cms-contact">
                  <p>📞 Urgent? Call: <a href="tel:+919811263046">+91 98112 63046</a></p>
                  <p>💬 <a href="https://wa.me/919811263046" target="_blank" rel="noreferrer">WhatsApp Our Team</a></p>
                </div>

                <div className="cms-btns">
                  <button className="cms-close-btn" onClick={closeForm}>
                    Close
                  </button>
                  <button
                    className="cms-another-btn"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        companyName: '', contactName: '', email: '',
                        phone: '', teamSize: '', program: '', industry: '', message: '',
                      })
                    }}
                  >
                    Submit Another
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

export default Corporate