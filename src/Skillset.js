import "./Skillset.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "./data/skills.json";
function Skillset() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Skillset
        </span>

        <div className="Skillset-skill-des">
          {skills.map((skill, idx) => (
            <div key={idx} data-aos="fade-up">
              <span id="title">{skill.title}</span>
              <span id="title-content">
                {skill.items.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skillset;
