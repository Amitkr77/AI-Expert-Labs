import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [load, setLoad] = useState(false)

  // Handle change
  const onChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }))
  }

  // Validation
  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Full name is required"
    } else if (form.name.length < 3) {
      newErrors.name = "Minimum 3 characters required"
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      newErrors.name = "Only letters allowed"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format"
    }

    const phone = form.phone.replace(/\s+/g, '').trim()

      if (!phone) {
        newErrors.phone = "Phone number is required"
      } 
      else if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(phone)) {
        newErrors.phone = "Enter valid Indian mobile number"
      }

    if (!form.message.trim()) {
      newErrors.message = "Message is required"
    } else if (form.message.length < 10) {
      newErrors.message = "Minimum 10 characters required"
    }

    return newErrors
  }

  // Submit
  const onSubmit = e => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoad(true)

    setTimeout(() => {
      setLoad(false)
      setSent(true)
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setErrors({})
    }, 1500)
  }

  const info = [
    {
      icon: <FaMapMarkerAlt />,
      color: "#6366f1",
      title: "Visit Us",
      lines: ["Logix Cyber Park, Tower C, 9th Floor", "Sector 62, Noida 201309"]
    },
    {
      icon: <FaPhoneAlt />,
      color: "#f59e0b",
      title: "Call / WhatsApp",
      lines: ["+91 98112 63046"]
    },
    {
      icon: <FaEnvelope />,
      color: "#ec4899",
      title: "Email Us",
      lines: ["pradeep@aixpertslabs.com"]
    },
    {
      icon: <FaClock />,
      color: "#06b6d4",
      title: "Working Hours",
      lines: ["Mon–Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"]
    },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="container">

        {/* HEADER */}
        <div className="contact-hdr">
          <h2 className="contact-h2">
            Let's <span className="grad-text">Connect & Grow</span> Together
          </h2>
          <p className="contact-sub">
            Ready to start your AI journey? Contact us today.
          </p>
        </div>

        <div className="contact-layout">

          {/* LEFT SIDE */}
          <div className="contact-left">

            {info.map((item, i) => (
              <div key={i} className="cinfo-card">
                <div
                  className="cinfo-icon"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="cinfo-text">
                  <h4>{item.title}</h4>
                  {item.lines.map((l, j) => <p key={j}>{l}</p>)}
                </div>
              </div>
            ))}

            {/* GOOGLE MAP */}
            <div className="cinfo-card">
              <div
                className="cinfo-icon"
                style={{ background: "#10b98115", color: "#10b981" }}
              >
                <FaMapMarkerAlt />
              </div>

              <div className="cinfo-text">
                <h4>Our Location</h4>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57895.751239876765!2d77.33048617910157!3d28.612614100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5687a962671%3A0x5d66885cf442835e!2sLogix%20Cyber%20Park!5e0!3m2!1sen!2sin!4v1771407100394!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{
                    border: 0,
                    borderRadius: "12px",
                    marginTop: "10px"
                  }}
                  loading="lazy"
                  title="Company Location"
                ></iframe>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <div className="cta-box">
              <p>💬 Chat on WhatsApp</p>
              <a
                href="https://wa.me/919811263046"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                Open WhatsApp →
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">

            {sent ? (
              <div className="form-sent">
                <div className="sent-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thank you! We will contact you within 24 hours.</p>
                <button className="form-submit" onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (

              <form className="cform" onSubmit={onSubmit}>

                <h3 className="cform-title">Design Your Courses</h3>
                <p className="cform-sub">We respond within 24 hours ⚡</p>

                <div className="cform-row">

                  <div className="cform-group">
                    <label>Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </div>

                  <div className="cform-group">
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </div>

                </div>

                <div className="cform-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="cform-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us about your goals..."
                    rows={4}
                  />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`form-submit ${load ? 'loading' : ''}`}
                  disabled={load}
                >
                  {load ? 'Sending...' : 'Send Message →'}
                </button>

                <p className="form-note">
                  🔒 Your information is 100% secure. No spam, ever.
                </p>

              </form>

            )}

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact