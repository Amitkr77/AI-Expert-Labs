import React from "react";
import { statsData } from "../../data/siteData";
import "./About.css";

const highlights = [
  {
    title: "Real-Time Industry Projects",
    desc: "Work on live AI applications aligned with real business environments and deploy production-ready solutions."
  },
  {
    title: "Performance-Based Internship (Up to ₹40K)",
    desc: "Top performers become eligible for internship opportunities with stipend up to ₹40,000 based on merit."
  },
  {
    title: "Dedicated Placement Assistance",
    desc: "Resume building, interview prep, hiring referrals and structured career roadmap support."
  },
  {
    title: "1-on-1 Mentorship",
    desc: "Personalized guidance and continuous skill tracking aligned with industry standards."
  }
];

const About = () => {
  return (
    <section className="about-new" id="about">
      <div className="container">

        {/* TOP INTRO */}
        <div className="about-intro" data-aos="fade-up">
          <h2>
            More Than Training —
            <span className="grad-text"> A Complete AI Career Ecosystem</span>
          </h2>
          <p>
            AI Experts Labs bridges the gap between academic learning and
            real-world industry requirements by combining practical exposure,
            structured mentorship, and career-driven execution.
          </p>
        </div>

        {/* HIGHLIGHT TIMELINE */}
        <div className="about-timeline">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* STATS BAR */}
        <div className="about-stats-bar" data-aos="fade-up">
          {statsData.map((s) => (
            <div key={s.id} className="stat-bar-item">
              <h3>{s.number}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;