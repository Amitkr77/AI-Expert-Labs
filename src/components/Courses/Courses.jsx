import React from 'react'
import { coursesData } from '../../data/siteData'
import './Courses.css'

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>★</span>
      ))}
      <span className="rating-num">{rating}</span>
    </div>
  )
}

const Courses = () => {
  return (
    <section className="courses section" id="courses">
      <div className="container">

        {/* Header */}
        <div className="courses-header" data-aos="fade-up">
          <span className="tag-pill">🎓 AI Courses</span>
          <h2 className="courses-h2">
            Industry-Leading <span className="grad-text">AI Programs</span>
          </h2>
          <p className="courses-sub">
            Hands-on AI training with live projects, expert mentors, and
            guaranteed placement support. EMI available.
          </p>
        </div>

        {/* Grid */}
        <div className="courses-grid">
          {coursesData.map((course, i) => (
            <div
              key={course.id}
              className="course-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Image */}
              <div className="course-img-wrap">
                <img src={course.image} alt={course.title} className="course-img" />
                <div
                  className="course-badge"
                  style={{ background: course.badgeColor }}
                >
                  {course.badge}
                </div>
              </div>

              {/* Body */}
              <div className="course-body">
                <div className="course-meta">
                  <span className="course-level">{course.level}</span>
                  <span className="course-duration">⏱ {course.duration}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>

                <StarRating rating={course.rating} />
                <span className="course-reviews">({course.reviews} reviews)</span>

                <div className="course-tags">
                  {course.tags.map(tag => (
                    <span key={tag} className="course-tag">{tag}</span>
                  ))}
                </div>

                <div className="course-students">
                  👨‍🎓 {course.students} students enrolled
                </div>

              </div>

              {/* Footer */}
              <div className="course-footer">
                <div className="course-price">
                  <span className="price-current">{course.price}</span>
                  <span className="price-original">{course.originalPrice}</span>
                </div>
                <button className="course-btn">Enroll Now →</button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="courses-bottom" data-aos="fade-up">
          <p>Can't decide? Talk to our counselor for FREE</p>
          <a href="tel:+919811263046" className="courses-cta">
            📞 Call +91 98112 63046
          </a>
        </div>

      </div>
    </section>
  )
}

export default Courses