import React from "react";
import "./OurPartners.css";

const OurPartners = () => {

  const partners = [
    {
      name: "BiddRx",
      logo: "https://www.biddrx.com/Images/logo.png",
      link: "https://www.biddrx.com/"
    },
    {
      name: "Casters Global",
      logo: "https://castersglobal.com/Casters_Global_Logo.png",
      link: "https://castersglobal.com/"
    },
    {
      name: "Cehro India",
      logo: "https://www.cehroindia.org/assets/cehro%20logo%201.png",
      link: "https://www.cehroindia.org/"
    },
    {
      name: "Sumedha Agro",
      logo: "https://sumedhaagro.com/assets/Logo-DFEZMT6g.webp",
      link: "https://sumedhaagro.com/"
    }
  ];

  // Infinite loop ke liye 3x copy
  const loopPartners = [...partners, ...partners, ...partners];

  return (
    <section className="partners-section">

      <div className="container">
        <div className="partners-header">
          <h2>Our <span>Partners</span></h2>
          <p>We collaborate with trusted organizations and companies</p>
        </div>
      </div>

      <div className="partners-slider">

        <div className="partners-track">

          {loopPartners.map((partner, index) => (

            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-item"
            >
              <img src={partner.logo} alt={partner.name} />

              <span className="partner-name">
                {partner.name}
              </span>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
};

export default OurPartners;