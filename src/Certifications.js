import "./Certifications.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import certifications from "./data/certifications.json";

function Certifications() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-quart" });
  }, []);

  return (
    <section className="section-wrapper" id="certifications">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Certifications
        </h2>
        <div className="cert-list">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="cert-item"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <span className="cert-title">{cert.title}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
