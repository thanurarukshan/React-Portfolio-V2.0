import "./Skillset.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "./data/skills.json";

function Skillset() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-quart" });
  }, []);

  return (
    <section className="section-wrapper" id="skills">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-row"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <span className="skill-category">{skill.title}</span>
              <span className="skill-items">{skill.items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skillset;
