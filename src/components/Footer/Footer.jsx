import React from 'react'
import { Link } from 'react-scroll'
import { siteConfig, navLinks, servicesData } from '../../data/siteData'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import './Footer.css'
import logo from "../../assets/logo4.png";

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Link 
                to="hero" 
                smooth 
                duration={500} 
                offset={-80}
                className="nav-logo"
              >
                <img
                  src={logo}
                  alt="AIXperts Labs"
                  className="logo-img"
                  draggable="false"
                />
              </Link>
            </div>
            {/* <p className="footer-desc">
              India's leading AI training and solutions company.
              Empowering businesses and professionals with cutting-edge AI technology.
            </p> */}
            <div className="footer-contact-list">
              <div className="footer-citem"><FaMapMarkerAlt /><span>Logix Cyber Park, Tower C, 9th Floor, Sec 62, Noida 201309</span></div>
              <div className="footer-citem"><FaPhoneAlt /><a href="tel:+919811263046">+91 98112 63046</a></div>
              <div className="footer-citem"><FaEnvelope /><a href="mailto:pradeep@aixpertslabs.com">pradeep@aixpertslabs.com</a></div>
            </div>
            <div className="footer-socials">
              {[
                { href: siteConfig.social.linkedin,  icon: <FaLinkedin  /> },
                { href: siteConfig.social.twitter,   icon: <FaTwitter   /> },
                { href: siteConfig.social.github,    icon: <FaGithub    /> },
                { href: siteConfig.social.instagram, icon: <FaInstagram /> },
                { href: siteConfig.social.youtube,   icon: <FaYoutube   /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="footer-soc-btn">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-list">
              {navLinks.map(l => (
                <li key={l.id}>
                  <Link to={l.to} smooth duration={500} offset={-80}>→ {l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">AI Services</h4>
            <ul className="footer-list">
              {servicesData.map(s => (
                <li key={s.id}><a href="#">→ {s.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p className="footer-newsletter-txt">
              Get AI insights, course updates and industry news in your inbox.
            </p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Enter your email" className="news-input" />
              <button className="news-btn">Subscribe</button>
            </div>
            <div className="footer-badges">
              <span className="footer-badge">🏆 ISO Certified</span>
              <span className="footer-badge">✅ Govt. Recognized</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          {/* <p>© {year} AI Experts Labs | Founded by <strong>Pradeep Kumar</strong> | Noida, India</p> */}
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer