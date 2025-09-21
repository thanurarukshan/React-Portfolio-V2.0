import "./Experience.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import experiences from "./data/experiences.json"; // make sure this file exists in the same folder

function Experience() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

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
              data-aos="fade-up"
              onClick={() =>
                exp.link &&
                window.open(exp.link, "_blank", "noopener,noreferrer")
              }
              role={exp.link ? "link" : "article"}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" && exp.link)
                  window.open(exp.link, "_blank", "noopener,noreferrer");
              }}
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
