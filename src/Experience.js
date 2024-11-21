// import Logoslider from "./Logoslider";
import "./Experience.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const handleDivClick1 = () => {
    window.location.href = 'https://www.linkedin.com/company/hsenid-mobile-solutions/posts/?feedView=all';
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
  const hSenid = () => {
    window.location.href = 'https://hsenidmobile.com/';
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Experience
        </span>
        <div className="Skillset-skill-des">
          <div data-aos="fade-up" onClick={handleDivClick1}>
            <span id="title">Trainee DevOps Engineer</span>
            <span id="title-content" className="sub-title">hSenid Mobile Solutions</span>
            <span id="title-content">Created Ansible Scripts to automate tasks - (Disk Partitioning, Fresh OS Setup) helps to reduce the time it takes to do the same thing on multiple servers. Testing and debugging pre-written ansible scripts on MySQL, mongoDB binary.</span>
            <span id="title-content">Security Hardening on Apache server (CIS | Apache 2.4) - made changes on configuration files and change the user privileges and access permissions to achieve the preposed hardening level. </span>
            <span id="title-content">Experience with clustered systems (PCS Clusters) - Worked with a web server hosted on clustered system, where multiple systems work on same task to certify higher availability and load balancing. </span>
            <span id="title-content">API Endpoint testing (Postman, curl, wiremock) - tested endpoints configured in Apache httpd server after applying security patches.</span>
            <span id="title-content">System Monitoring (Grafana, Prometheus, snmp notifier, alertmanager, node exporter)- configure system to monitor servers </span>
            <span id="title-content">Shell Scripting - wrote shell scripts to automate tasks (backup creation), read and understand complex shell based framework written for filehousekeeping, log rolling, monitoring. create a Linux tool to compare two directories with file permission, ownership and content comparison</span>
            <span id="title-content">Working in Agile environment with two week sprint-time, daily standups. (SDLC)</span>
            <span id="title-content">Experience in Git environments, Linux filesystems/tools, networking concepts/diagrams, network hardening methodologies, OS hardening methodologies. </span>
          </div>
          <div data-aos="fade-up" onClick={handleDivClick2}>
            <span id="title">Property Selling web app (Duo Project)</span>
            <span id="title-content">React JS, JavaScript, HTML, CSS, MySQL, JSON</span>
            <span id="title-content">used react hooks where necessary, used single json file to fetch data, drag and drop, advanced search. Completed within two days</span>
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
