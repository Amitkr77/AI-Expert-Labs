import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaClock,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors,  setErrors]  = useState({})

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true })
    window.scrollTo(0, 0)
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.subject.trim()) e.subject = 'Please select a subject'
    if (!form.message.trim()) e.message = 'Message is required'
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
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 2000)
  }

  const contactCards = [
    {
      icon: <FaMapMarkerAlt />,
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.08)',
      title: 'Visit Our Office',
      lines: [
        'Logix Cyber Park, Tower C',
        '9th Floor, Sector 62',
        'Noida 201309, India',
      ],
    },
    {
      icon: <FaUser />,
      color: '#10b981',
      bg: 'rgba(16,185,129,0.08)',
      title: 'Contact Person',
      lines: ['Pradeep Kumar', 'Founder & CEO'],
    },
    {
      icon: <FaPhoneAlt />,
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.08)',
      title: 'Call / WhatsApp',
      lines: ['+91 98112 63046'],
      link: 'tel:+919811263046',
    },
    {
      icon: <FaEnvelope />,
      color: '#ec4899',
      bg: 'rgba(236,72,153,0.08)',
      title: 'Email Us',
      lines: ['pradeep@aixpertslabs.com'],
      link: 'mailto:pradeep@aixpertslabs.com',
    },
    {
      icon: <FaClock />,
      color: '#06b6d4',
      bg: 'rgba(6,182,212,0.08)',
      title: 'Working Hours',
      lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'],
    },
  ]

  const faqs = [
    {
      q: 'What AI courses do you offer?',
      a: 'We offer Complete AI & ML, Generative AI, Data Science, Computer Vision and many more industry-focused programs.',
    },
    {
      q: 'Is EMI available for courses?',
      a: 'Yes! We offer No Cost EMI options to make our courses affordable for everyone.',
    },
    {
      q: 'Do you provide placement assistance?',
      a: 'Absolutely! We have a dedicated placement team with 98% placement rate across top companies.',
    },
    {
      q: 'Do you offer corporate AI training?',
      a: 'Yes, we provide customized corporate AI training programs for teams and enterprises.',
    },
  ]

  return (
    <div className="contact-page">

      {/* ══ PAGE HERO ══════════════════════════════════ */}
      <div className="contact-hero">
        <div className="contact-hero-bg">
          <div className="ch-blob ch-b1"></div>
          <div className="ch-blob ch-b2"></div>
          <div className="ch-dots"></div>
        </div>
        <div className="container">
          <div className="contact-hero-inner">
            <div className="ch-left" data-aos="fade-right">
              <span className="tag-pill">📬 Contact Us</span>
              <h1 className="ch-h1">
                Let's Build Something
                <span className="grad-txt"> Amazing Together</span>
              </h1>
              <p className="ch-p">
                Ready to start your AI journey or need a custom AI solution?
                Talk to <strong>Pradeep Kumar</strong> — our Founder & CEO —
                and our expert team today.
              </p>

              {/* Quick Contact Chips */}
              <div className="ch-chips">
                <a href="tel:+919811263046" className="ch-chip">
                  <FaPhoneAlt />
                  <span>+91 98112 63046</span>
                </a>
                <a
                  href="https://wa.me/919811263046"
                  target="_blank"
                  rel="noreferrer"
                  className="ch-chip ch-chip-green"
                >
                  <FaWhatsapp />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="mailto:pradeep@aixpertslabs.com"
                  className="ch-chip"
                >
                  <FaEnvelope />
                  <span>Email Us</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="ch-socials">
                <span className="ch-social-label">Follow Us:</span>
                {[
                  { icon: <FaLinkedin  />, href: 'https://linkedin.com',  color: '#0077b5' },
                  { icon: <FaTwitter   />, href: 'https://twitter.com',   color: '#1da1f2' },
                  { icon: <FaInstagram />, href: 'https://instagram.com', color: '#e4405f' },
                  { icon: <FaYoutube   />, href: 'https://youtube.com',   color: '#ff0000' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ch-social-btn"
                    style={{ '--sc': s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Hero Right — Map */}
            <div className="ch-right" data-aos="fade-left">
              <div className="ch-map-card">
                <div className="ch-map-header">
                  <div className="ch-map-dot"></div>
                  <div>
                    <p className="ch-map-title">AI Experts Labs</p>
                    <p className="ch-map-addr">
                      Logix Cyber Park, Tower C, 9th Floor,<br />
                      Sector 62, Noida 201309
                    </p>
                  </div>
                </div>
                <iframe
                  title="AI Experts Labs"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.543623971099!2d77.36282731508328!3d28.620985982425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a1c4a4b30d%3A0x4a4f9b9c9b9c9b9c!2sLogix%20Cyber%20Park!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="240"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="ch-map-footer">
                  <a
                    href="https://maps.google.com/?q=Logix+Cyber+Park+Noida+Sector+62"
                    target="_blank"
                    rel="noreferrer"
                    className="ch-directions"
                  >
                    📍 Get Directions →
                  </a>
                  <span className="ch-timing">🕒 Open: Mon–Sat, 9AM–7PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ INFO CARDS ═════════════════════════════════ */}
      <section className="info-cards-section">
        <div className="container">
          <div className="info-cards-grid">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="info-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="info-card-icon"
                  style={{ background: card.bg, color: card.color }}
                >
                  {card.icon}
                </div>
                <div className="info-card-body">
                  <h4 className="info-card-title">{card.title}</h4>
                  {card.link ? (
                    <a href={card.link} className="info-card-link">
                      {card.lines.map((l, j) => (
                        <span key={j} className="info-card-line">{l}</span>
                      ))}
                    </a>
                  ) : (
                    card.lines.map((l, j) => (
                      <span key={j} className="info-card-line">{l}</span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORM + SIDEBAR ═════════════════════════════ */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-main-grid">

            {/* LEFT — Form */}
            <div className="form-section" data-aos="fade-right">
              {sent ? (
                /* SUCCESS STATE */
                <div className="form-success">
                  <div className="success-animation">
                    <div className="success-circle">
                      <span className="success-check">✓</span>
                    </div>
                  </div>
                  <h2 className="success-h2">Message Sent! 🎉</h2>
                  <p className="success-p">
                    Thank you for reaching out! <strong>Pradeep Kumar</strong> or
                    our team will get back to you within <strong>24 hours</strong>.
                  </p>
                  <div className="success-info">
                    <p>📞 For urgent queries: <a href="tel:+919811263046">+91 98112 63046</a></p>
                    <p>💬 Or <a href="https://wa.me/919811263046" target="_blank" rel="noreferrer">WhatsApp Us</a></p>
                  </div>
                  <button
                    className="success-btn"
                    onClick={() => setSent(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* FORM */
                <div className="form-card">
                  <div className="form-card-header">
                    <h2 className="form-h2">Send Us a Message</h2>
                    <p className="form-sub">
                      We respond within <strong>24 hours</strong> ⚡
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="cform" noValidate>

                    {/* Name + Phone */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`form-input ${errors.name ? 'input-error' : ''}`}
                        />
                        {errors.name && (
                          <span className="error-msg">⚠ {errors.name}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="error-msg">⚠ {errors.email}</span>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="form-group">
                      <label className="form-label">
                        I'm Interested In <span className="required">*</span>
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.subject ? 'input-error' : ''}`}
                      >
                        <option value="">Select an option...</option>
                        <optgroup label="🎓 Courses">
                          <option>Complete AI & ML Program</option>
                          <option>Generative AI & LLM Course</option>
                          <option>Data Science Course</option>
                          <option>Computer Vision Course</option>
                        </optgroup>
                        <optgroup label="💼 Services">
                          <option>AI Development Services</option>
                          <option>Machine Learning Solutions</option>
                          <option>Data Analytics</option>
                          <option>NLP & Chatbot Development</option>
                          <option>AI Consulting</option>
                          <option>Corporate Training</option>
                        </optgroup>
                        <optgroup label="ℹ️ Other">
                          <option>General Inquiry</option>
                          <option>Partnership / Collaboration</option>
                          <option>Career / Jobs</option>
                        </optgroup>
                      </select>
                      {errors.subject && (
                        <span className="error-msg">⚠ {errors.subject}</span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label className="form-label">
                        Your Message <span className="required">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, or questions..."
                        rows={5}
                        className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                      />
                      {errors.message && (
                        <span className="error-msg">⚠ {errors.message}</span>
                      )}
                      <span className="char-count">
                        {form.message.length} characters
                      </span>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className={`form-submit-btn ${loading ? 'loading' : ''}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner"></span>
                          Sending your message...
                        </>
                      ) : (
                        'Send Message →'
                      )}
                    </button>

                    <p className="form-privacy">
                      🔒 Your information is 100% secure. We never share your data.
                    </p>

                  </form>
                </div>
              )}
            </div>

            {/* RIGHT — Sidebar */}
            <div className="contact-sidebar" data-aos="fade-left">

              {/* WhatsApp Card */}
              <div className="sidebar-wa-card">
                <div className="wa-icon">
                  <FaWhatsapp />
                </div>
                <div className="wa-content">
                  <h3>Chat on WhatsApp</h3>
                  <p>Get instant reply from our team</p>
                  <a
                    href="https://wa.me/919811263046"
                    target="_blank"
                    rel="noreferrer"
                    className="wa-btn"
                  >
                    Open WhatsApp →
                  </a>
                </div>
              </div>

              {/* Call Card */}
              <div className="sidebar-call-card">
                <div className="call-icon">📞</div>
                <div className="call-content">
                  <p className="call-label">Call Directly</p>
                  <a href="tel:+919811263046" className="call-number">
                    +91 98112 63046
                  </a>
                  <p className="call-name">Pradeep Kumar — Founder & CEO</p>
                </div>
              </div>

              {/* Office Info */}
              <div className="sidebar-office-card">
                <h4 className="sidebar-card-title">📍 Our Office</h4>
                <div className="office-details">
                  <div className="office-row">
                    <span className="office-icon">🏢</span>
                    <div>
                      <strong>AI Experts Labs</strong>
                      <p>Logix Cyber Park, Tower C<br />9th Floor, Sector 62<br />Noida 201309, India</p>
                    </div>
                  </div>
                  <div className="office-row">
                    <span className="office-icon">🕒</span>
                    <div>
                      <strong>Working Hours</strong>
                      <p>Monday – Saturday<br />9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                  <div className="office-row">
                    <span className="office-icon">✉️</span>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:pradeep@aixpertslabs.com">
                        pradeep@aixpertslabs.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="sidebar-response-card">
                <div className="response-items">
                  {[
                    { icon: '💬', label: 'WhatsApp',   time: 'Within 1 Hour' },
                    { icon: '📞', label: 'Phone',       time: 'Immediate'     },
                    { icon: '✉️', label: 'Email',       time: 'Within 24 hrs' },
                    { icon: '📝', label: 'Contact Form', time: 'Within 24 hrs' },
                  ].map((r, i) => (
                    <div key={i} className="response-item">
                      <span className="r-icon">{r.icon}</span>
                      <span className="r-label">{r.label}</span>
                      <span className="r-time">{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ SECTION ════════════════════════════════ */}
      <section className="faq-section section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="sec-header" data-aos="fade-up">
            <span className="tag-pill">❓ FAQs</span>
            <h2 className="sec-h2">
              Frequently Asked <span className="grad-txt">Questions</span>
            </h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="faq-q">
                  <span className="faq-icon">Q</span>
                  <h4>{faq.q}</h4>
                </div>
                <div className="faq-a">
                  <span className="faq-a-icon">A</span>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ═════════════════════════════════ */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-inner" data-aos="fade-up">
            <h2 className="cta-h2">
              Still Have Questions?
            </h2>
            <p className="cta-p">
              Reach out to <strong>Pradeep Kumar</strong> directly —
              we're always happy to help!
            </p>
            <div className="cta-action-btns">
              <a href="tel:+919811263046" className="cta-btn-primary">
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919811263046"
                target="_blank"
                rel="noreferrer"
                className="cta-btn-wa"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="mailto:pradeep@aixpertslabs.com"
                className="cta-btn-email"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact