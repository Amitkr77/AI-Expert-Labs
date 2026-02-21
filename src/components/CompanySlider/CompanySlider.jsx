import React from 'react'
import './CompanySlider.css'

const CompanySlider = () => {
  // Hiring Partner Companies
  const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  ]

  // Double the array for seamless infinite scroll
  const doubledCompanies = [...companies, ...companies]

  return (
    <section className="company-slider-section">
      <div className="container">
        {/* Section Header */}
        <div className="slider-header">
          {/* <span className="slider-tag">🤝 Trusted Partners</span> */}
          <h2 className="slider-title">
            Our Students Work at <span className="highlight">Top Companies</span>
          </h2>
          {/* <p className="slider-subtitle">
            150+ hiring partners across India & globally
          </p> */}
        </div>
      </div>

      {/* Infinite Slider */}
      <div className="slider-wrapper">
        <div className="slider-track">
          {doubledCompanies.map((company, index) => (
            <div className="slider-item" key={index}>
              {/* <img 
                src={company.logo} 
                alt={company.name} 
                className="company-logo"
              /> */}
              <span className="company-name">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      {/* <div className="container">
        <div className="slider-stats">
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">Hiring Partners</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Placement Rate</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">₹8.5 LPA</span>
            <span className="stat-label">Avg. Package</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">₹45 LPA</span>
            <span className="stat-label">Highest Package</span>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default CompanySlider