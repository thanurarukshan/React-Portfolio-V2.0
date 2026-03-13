import "./Experience.css";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import experiences from "./data/experiences.json"; // make sure this file exists in the same folder

function Experience() {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleCardClick = (idx, link) => {
    if (window.innerWidth <= 768) {
      setExpandedCard(expandedCard === idx ? null : idx);
    } else {
      if (link) window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e, idx, link) => {
    if (e.key === "Enter") {
      handleCardClick(idx, link);
    }
  };

  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Experience
        </span>

        {/* ONE wrapper with the class your CSS expects */}
        <div className="Skillset-skill-des-experience">
          {experiences.map((exp, idx) => (
            /* each child <div> is a "card" and will match `.Skillset-skill-des-experience div` CSS */
            <div
              key={idx}
              className={`experience-card ${expandedCard === idx ? "expanded" : ""}`}
              data-aos="fade-up"
              onClick={() => handleCardClick(idx, exp.link)}
              role={exp.link ? "link" : "article"}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, idx, exp.link)}
            >
              <span id="title">{exp.title}</span>
              <span id="title-content" className="sub-title">
                {exp.company}
              </span>

              <ul className="experience-list">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
