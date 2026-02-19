import React, { useState, useEffect } from 'react'
import AOS from 'aos'; import 'aos/dist/aos.css'
import { portfolioData, portfolioCategories } from '../../data/siteData'
import './Portfolio.css'

const Portfolio = () => {
  const [active, setActive] = useState('All')
  useEffect(() => { AOS.init({ duration: 700, once: true }); window.scrollTo(0, 0) }, [])

  const filtered = active === 'All' ? portfolioData : portfolioData.filter(p => p.category === active)

  return (
    <div className="portfolio-page">
      <div className="page-hero">
        <div className="container">
          <span className="tag-pill">Our Work</span>
          <h1 className="page-h1">Featured <span className="grad-txt">AI Projects</span></h1>
          <p className="page-sub">Real-world AI solutions delivering measurable business results.</p>
        </div>
      </div>

      <section className="section container">
        <div className="port-filters" data-aos="fade-up">
          {portfolioCategories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`port-filter-btn ${active === c ? 'active' : ''}`}>{c}</button>
          ))}
        </div>

        <div className="port-full-grid">
          {filtered.map((p, i) => (
            <div key={p.id} className="port-full-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="pfc-img-wrap">
                <img src={p.image} alt={p.title} className="pfc-img" />
                <div className="pfc-overlay">
                  <span className="pfc-result">✨ {p.result}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="pfc-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                </div>
              </div>
              <div className="pfc-foot">
                <div>
                  <h4>{p.title}</h4>
                  <p>📈 {p.result}</p>
                </div>
                <span className="pfc-cat">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portfolio