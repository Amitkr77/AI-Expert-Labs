import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/siteData'
import './Navbar.css'
import logo from "../../assets/logo5.webp"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null) // For mobile dropdowns
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  // Handle scroll to top for home link
  const handleLogoClick = () => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle scroll to contact section
  const scrollToContact = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offset = 80
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  // Toggle mobile dropdown
  const toggleMobileDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={handleLogoClick}>
          <img
            src={logo}
            alt="AIXperts Labs"
            className="logo-img"
            width="300"
            height="105"
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.id} className="nav-item">

              {/* Normal Link */}
              {!link.dropdown && (
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown Link */}
              {link.dropdown && (
                <div className="dropdown">
                  <span className="nav-link dropdown-trigger">
                    {link.label} 
                    <svg className="dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </span>

                  <div className="dropdown-menu">
                    {link.dropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="dropdown-item"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="nav-actions">
          <a href="tel:+919811263046" className="nav-phone">
            📞 +91 98112 63046
          </a>
          <button onClick={scrollToContact} className="nav-cta">
            Free Consultation
          </button>
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          {navLinks.map(link => (
            <div key={link.id} className="mobile-nav-item">
              
              {/* Normal Link */}
              {!link.dropdown && (
                <Link
                  to={link.path}
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown Link */}
              {link.dropdown && (
                <div className="mobile-dropdown">
                  <button 
                    className="mobile-nav-link mobile-dropdown-trigger"
                    onClick={() => toggleMobileDropdown(link.id)}
                  >
                    {link.label}
                    <svg 
                      className={`mobile-dropdown-arrow ${openDropdown === link.id ? 'open' : ''}`} 
                      width="12" height="8" viewBox="0 0 12 8" fill="currentColor"
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </button>
                  
                  <div className={`mobile-dropdown-menu ${openDropdown === link.id ? 'open' : ''}`}>
                    {link.dropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="mobile-dropdown-item"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}

          <button
            onClick={scrollToContact}
            className="mobile-nav-cta"
          >
            Free Consultation →
          </button>
          
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