import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center'
}) => {
  return (
    <div
      className={`section-title section-title-${align}`}
      data-aos="fade-up"
    >
      {subtitle && (
        <span className="section-subtitle">
          {subtitle}
        </span>
      )}

      <h2 className="section-heading">
        {title}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle