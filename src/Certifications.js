// import Logoslider from "./Logoslider";
import "./Certifications.css";
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
          Certifications
        </span>
        <div className="Skillset-skill-des">
          <div data-aos="fade-up">
            <span id="title">AWS Academy – Cloud Foundations</span>
            <span id="title-content">AWS</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Introduction to Containers, Docker, Kubernetes and OpenShift  </span>
            <span id="title-content">
              Coursera
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Containers and Kubernetes Essentials</span>
            <span id="title-content">
              Coursera
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Linux for Developers</span>
            <span id="title-content">
              Coursera 
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Cloud Computing Foundations </span>
            <span id="title-content">
              Great Learning
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Cloud Foundations - Advanced</span>
            <span id="title-content">
              Great Learning
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">AWS for Beginners</span>
            <span id="title-content">
              Great Learning 
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Data Structures and Algorithms in Java for Intermediate Level</span>
            <span id="title-content">
              Great Learning
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Introduction to Agile Development and Scrum</span>
            <span id="title-content">
              Coursera
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Networks and Network Security</span>
            <span id="title-content">
              Coursera
            </span>
          </div>
        </div>
      </div>
      {/* <Logoslider className="Skillset-bar" /> */}
    </div>
  );
}

export default Skillset;
