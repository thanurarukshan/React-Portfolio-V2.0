import "./Certifications.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import certifications from "./data/certifications.json";

function Certifications() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Certifications
        </span>

        <div className="Skillset-skill-des">
          {certifications.map((cert, idx) => (
            <div key={idx} data-aos="fade-up">
              <span id="title">{cert.title}</span>
              <span id="title-content">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
