import React from 'react'
import './Marquee.css'

const brands = [
  "🏢 Google", "🏢 Microsoft", "🏢 Amazon", "🏢 TCS",
  "🏢 Infosys", "🏢 Wipro", "🏢 Accenture", "🏢 IBM",
  "🏢 Deloitte", "🏢 Capgemini", "🏢 HCL", "🏢 Tech Mahindra",
]

const Marquee = () => {
  return (
    <div className="marquee-section">
      <p className="marquee-label">Our Students Work At</p>
      <div className="marquee-track">
        <div className="marquee-content">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="marquee-item">
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee