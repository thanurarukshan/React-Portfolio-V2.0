import "./Aboutme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import New from "./assets/New.pdf";

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
        Hey there! I am an engineering undergraduate with an IT background. I am
        self-motivated and a fun, friendly person who is always willing to try
        new things. I work well in groups as well as on my own because I like to
        set goals for myself that I can achieve, and I have good listening and
        communication skills.
      </span>
      <a className="Aboutme-cv" data-aos="fade-up" onClick={handleDownloadCV}>
        Download CV
      </a>
    </div>
  );
}

export default Aboutme;
