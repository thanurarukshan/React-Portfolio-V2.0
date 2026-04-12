import "./Experience.css";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import experiences from "./data/experiences.json";

function Experience() {
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-quart" });
  }, []);

  const handleToggle = (idx, link) => {
    if (window.innerWidth <= 768) {
      setExpandedCard(expandedCard === idx ? null : idx);
    } else {
      if (link) window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="section-wrapper" id="experience">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Experience
        </h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`timeline-item${expandedCard === idx ? " expanded" : ""}`}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              onClick={() => handleToggle(idx, exp.link)}
              role={exp.link ? "link" : "article"}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleToggle(idx, exp.link)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-title">{exp.title}</span>
                <span className="timeline-company">{exp.company}</span>
                {exp.details && exp.details.length > 0 && (
                  <ul className="timeline-list">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
