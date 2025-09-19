// import Logoslider from "./Logoslider";
import "./Skillset.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Tile from "./components/Tile";

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
        {/* <Tile title="test" content="test-content"/> */}
        <div className="Skillset-skill-des">
          <div data-aos="fade-up">
            <span id="title">Languages</span>
            <span id="title-content">Python, JavaScript, Java</span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Cloud/DevOps</span>
            <span id="title-content">
              Docker, Kubernetes, Ansible, OpenShift, CI, CD, AWS, GitHub Actions, Tekton, Prometheus, Alert Manager, Grafana
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Database</span>
            <span id="title-content">
              MySQL, MongoDB
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Software Engineering</span>
            <span id="title-content">
              Agile, OOP(Object Oriented Programming), Shell/Bash Scripting, Scrum, Git, Linux, Data Structures and Algorithms 
            </span>
          </div>
          <div data-aos="fade-up">
            <span id="title">Networking</span>
            <span id="title-content">
              Networking Fundamentals, Network Security
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
            <span id="title">Graphic Design</span>
            <span id="title-content">
              Adobe Photoshop, Adobe Illustrator, Adobe Premiere-Pro, Adobe
              After-Effects, Adobe Lightroom
            </span>
          </div>
        </div>
      </div>
      {/* <Logoslider className="Skillset-bar" /> */}
    </div>
  );
}

export default Skillset;
