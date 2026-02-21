import React, { useState } from 'react'
import { portfolioData, portfolioCategories } from '../../data/siteData'
import './Portfolio.css'

const Portfolio = () => {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? portfolioData : portfolioData.filter(p => p.category === active)

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">

        <div className="port-hdr" data-aos="fade-up">
          {/* <span className="tag-pill">🏆 Our Work</span> */}
          <h2 className="port-h2">Featured <span className="grad-text">AI Projects</span></h2>
          <p className="port-sub">Real-world AI solutions delivering measurable business results.</p>
        </div>

        <div className="port-filters" data-aos="fade-up">
          {portfolioCategories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`port-filter ${active === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="port-grid">
          {filtered.map((item, i) => (
            <div key={item.id} className="port-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="port-img-wrap">
                <img src={item.image} alt={item.title} className="port-img" />
                <div className="port-overlay">
                  <span className="port-result">✨ {item.result}</span>
                  <h3 className="port-card-title">{item.title}</h3>
                  <p className="port-card-desc">{item.description}</p>
                  <div className="port-tags">
                    {item.tags.map(t => <span key={t} className="port-tag">{t}</span>)}
                  </div>
                </div>
              </div>
              <div className="port-card-foot">
                <div>
                  <h4 className="port-foot-title">{item.title}</h4>
                  <p className="port-foot-result">📈 {item.result}</p>
                </div>
                <span className="port-cat-badge">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio