import "./Aboutme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import New from "./assets/May20.pdf"; // cv
function Aboutme() {
  const handleDownloadCV = () => {
    window.open(New);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Aboutme" id="aboutMe">
      <img
        src="./Thanurawithframe.png"
        className="Aboutme-me"
        data-aos="fade-up"
      />
      <span className="Aboutme-aboutme" data-aos="fade-up">
        Aboutme
      </span>
      <span className="Aboutme-dis" data-aos="fade-up">
      Hardworking Engineering undergraduate with a strong IT background. 
      Self-motivated and a fast learner, eager to leverage my skills and gain 
      practical knowledge through a challenging opportunity.
      </span>
      <a className="Aboutme-cv" data-aos="fade-up" onClick={handleDownloadCV}>
        Download CV
      </a>
    </div>
  );
}

export default Aboutme;
