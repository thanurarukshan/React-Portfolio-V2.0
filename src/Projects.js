// import Logoslider from "./Logoslider";
import "./Projects.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const handleDivClick1 = () => {
    window.location.href = 'https://github.com/thanurarukshan/React-Portfolio-V2.0';
  }
  const handleDivClick2 = () => {
    window.location.href = 'https://github.com/thanurarukshan/property-selling-web-app-static';
  }
  const handleDivClick3 = () => {
    window.location.href = 'https://unihelperlk.web.app/';
  }
  const handleDivClick4 = () => {
    window.location.href = 'https://github.com/thanurarukshan/Rest-API-Node-Back-End';
  }
  const handleDivClick5 = () => {
    window.location.href = 'https://github.com/thanurarukshan';
  }
  const handleDivClick6 = () => {
    window.location.href = 'https://github.com/thanurarukshan/diff-PRO';
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Projects
        </span>
        <div className="Skillset-skill-des">
          <div data-aos="fade-up" onClick={handleDivClick6}>
            <span id="title">Diff-Pro | A tool for Advanced File/Directories Comparison</span>
            <span id="title-content">Shell Scripting</span>
            <span id="title-content">A shell-based tool designed to compare file/directory structures within the same server or two seperate servers.</span>
          </div>
          <div data-aos="fade-up" onClick={handleDivClick1}>
            <span id="title">Portfolio Website (Solo Project)</span>
            <span id="title-content">React JS, JavaScript, HTML, CSS, Firebase Hosting</span>
            <span id="title-content">used react JS framework for better performance and liberaries like AOS for better visuals</span>
          </div>
          <div data-aos="fade-up" onClick={handleDivClick2}>
            <span id="title">Property Selling web app (Duo Project)</span>
            <span id="title-content">React JS, JavaScript, HTML, CSS, MySQL, JSON</span>
            <span id="title-content">used react hooks where necessary, used single json file to fetch data, drag and drop, advanced search.</span>
          </div>
          <div data-aos="fade-up" onClick={handleDivClick3}>
            <span id="title">Project UniHelper (Solo Project)</span>
            <span id="title-content">HTML, CSS, JavaScript, React JS, Firebase Hosting</span>
            <span id="title-content">static web app created as a community engagement project.</span>
          </div>
          <div data-aos="fade-up" onClick={handleDivClick4}>
            <span id="title">REST API demonstration (Solo Project)</span>
            <span id="title-content">React JS, JavaScript, Node JS, Express JS</span>
            <span id="title-content">created a simple CRUD application for learning purposes.</span>
          </div>
          <div data-aos="fade-up" onClick={handleDivClick5} className="formore">
            <span id="title">For More...</span>
            <span id="title-content">GitHub</span>
            {/* <span id="title-content">created a simple CRUD application for learning purposes.</span> */}
          </div>
          {/* <div data-aos="fade-up">
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
          </div> */}
        </div>
      </div>
      {/* <Logoslider className="Skillset-bar" /> */}
    </div>
  );
}

export default Projects;
