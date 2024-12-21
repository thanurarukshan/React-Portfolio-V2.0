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
      />
      <span className="Aboutme-aboutme" data-aos="fade-up">
        Aboutme
      </span>
      <span className="Aboutme-dis" data-aos="fade-up">
      Dedicated and hardworking engineering undergraduate with a strong foundation in IT and a passion for continuous growth. A self-motivated and fast learner with proven ability to adapt quickly and excel in new challenges. Actively seeking opportunities to apply my skills, expand my knowledge, and gain practical experience in a dynamic and challenging environment.
      </span>
      <a className="Aboutme-cv" data-aos="fade-up" onClick={handleDownloadCV}>
        Download CV
      </a>
    </div>
  );
}

export default Aboutme;
