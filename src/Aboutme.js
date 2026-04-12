/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Aboutme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import New from "./assets/2026New2.pdf";

function Aboutme() {
  const handleDownloadCV = () => {
    window.open(New);
  };

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-quart" });
  }, []);

  return (
    <section className="Aboutme" id="aboutMe">
      <div className="Aboutme-inner">
        {/* Profile photo */}
        <div className="Aboutme-photo-wrap" data-aos="fade-up">
          <img
            src="./professionalme2026.png"
            className="Aboutme-me"
            alt="Thanura Rukshan"
          />
        </div>

        {/* Name */}
        <h2 className="Aboutme-name" data-aos="fade-up" data-aos-delay="80">
          Thanura Rukshan
        </h2>

        {/* Subtitle */}
        <p className="Aboutme-subtitle" data-aos="fade-up" data-aos-delay="140">
          <em>DevOps Engineer</em> &mdash; Cloud &amp; Automation
        </p>

        {/* About text */}
        <p className="Aboutme-dis" data-aos="fade-up" data-aos-delay="220">
          Dedicated and passionate about IT, self-motivated, always pushing new
          boundaries. A fast learner who adapts quickly and is constantly{" "}
          <strong className="Aboutme-accent">seeking opportunities</strong> to
          build, automate, and ship things that matter.
        </p>

        {/* CV button */}
        <a
          className="Aboutme-cv"
          data-aos="fade-up"
          data-aos-delay="280"
          onClick={handleDownloadCV}
          href="#"
          role="button"
        >
          <span>Download CV</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Aboutme;
