import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { navLinks } from '../../data/siteData'
import './Navbar.css'

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <Link to="hero" smooth duration={500} className="nav-logo">
          <div className="logo-box">
            <span className="logo-icon">⚡</span>
          </div>
          <div className="logo-text-wrap">
            <span className="logo-main">AI Experts <span className="logo-accent">Labs</span></span>
            <span className="logo-sub">Noida, India</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <Link
                to={link.to}
                spy smooth offset={-80} duration={500}
                onSetActive={() => setActive(link.to)}
                className={`nav-link ${active === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="nav-actions">
          <a href="tel:+919811263046" className="nav-phone">
            📞 +91 98112 63046
          </a>
          <Link to="contact" smooth duration={500} offset={-80} className="nav-cta">
            Free Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          {navLinks.map(link => (
            <Link
              key={link.id}
              to={link.to}
              smooth offset={-80} duration={500}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact" smooth duration={500} offset={-80}
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation →
          </Link>
          <div className="mobile-contact">
            <a href="tel:+919811263046">📞 +91 98112 63046</a>
            <a href="mailto:pradeep@aixpertslabs.com">✉️ pradeep@aixpertslabs.com</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar