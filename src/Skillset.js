import Logoslider from "./Logoslider";
import "./Skillset.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skillset() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Skillset
        </span>
        <div className="Skillset-skill-des">
          <div data-aos="fade-up">
            <span id="title">Problem Solving</span>
            <span id="title-content">Python, JavaScript, Java</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">UI / UX Design</span>
            <span id="title-content">
              Figma
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Web Development - Front End</span>
            <span id="title-content">
              Html, CSS, JS, Reactjs, Nextjs
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Web Development - Back End</span>
            <span id="title-content">
              Nodejs, Expressjs
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Cloud Computing</span>
            <span id="title-content">
              Containers & Kubernetes, Docker, OpenShift, AWS Services
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">DevOps</span>
            <span id="title-content">Git, Github</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Database Management</span>
            <span id="title-content">MySQL, phpmyadmin</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Software Engineering</span>
            <span id="title-content">
              Agile, Scrum, Linux, Data Structure and Algorithms
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Graphic Design</span>
            <span id="title-content">
              Adobe Photoshop, Adobe Illustrator, Adobe Premiere-Pro, Adobe
              After-Effects, Adobe Lightroom
            </span>
          </div>
        </div>
      </div>
      <Logoslider className="Skillset-bar" />
    </div>
  );
}

export default Skillset;
