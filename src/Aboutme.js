/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Aboutme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import New from "./assets/Dec21.pdf"; // cv
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
        alt="Me"
      />
      <span className="Aboutme-aboutme" data-aos="fade-up">
        Aboutme
      </span>
      <span className="Aboutme-dis" data-aos="fade-up">
      Dedicated, passionate about IT, self-motivated, always try new things, fast learner, adapt quickly and<br/><span className="Aboutme-dis-word">seeking opportunities</span>
      </span>
      <a className="Aboutme-cv" data-aos="fade-up" onClick={handleDownloadCV}>
        Download CV
      </a>
    </div>
  );
}

export default Aboutme;
