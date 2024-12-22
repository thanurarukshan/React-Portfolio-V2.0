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
        <div className="Skillset-skill-des-experience">
          <div data-aos="fade-up" onClick={handleDivClick1}>
            <span id="title">Trainee DevOps Engineer</span>
            <span id="title-content" className="sub-title">hSenid Mobile Solutions</span>
            <br/>
            <span id="title-content">Created Ansible Scripts to automate tasks - (Disk Partitioning, Fresh OS Setup) helps to reduce the time it takes to do the same thing on multiple servers. Testing and debugging pre-written ansible scripts on MySQL, mongoDB binary.</span>
            <br/>
            <span id="title-content">Security Hardening on Apache server (CIS | Apache 2.4) - made changes on configuration files and change the user privileges and access permissions to achieve the preposed hardening level. </span>
            <br/>
            <span id="title-content">Experience with clustered systems (PCS Clusters) - Worked with a web server hosted on clustered system, where multiple systems work on same task to certify higher availability and load balancing. </span>
            <br/>
            <span id="title-content">API Endpoint testing (Postman, curl, wiremock) - tested endpoints configured in Apache httpd server after applying security patches.</span>
            <br/>
            <span id="title-content">System Monitoring (Grafana, Prometheus, snmp notifier, alertmanager, node exporter)- configure system to monitor status of modules, configure to send email alerts using snmp-notifier </span>
            <br/>
            <span id="title-content">Shell Scripting - wrote shell scripts to automate tasks (backup creation), read and understand complex shell based framework written for filehousekeeping, log rolling, monitoring. create a Linux tool to compare two directories with file permission, ownership and content comparison</span>
            <br/>
            <span id="title-content">Working in Agile environment with two week sprint-time, daily standups. (SDLC)</span>
            <br/>
            <span id="title-content">Experience in Git environments, Linux filesystems/tools, networking concepts/diagrams, network hardening methodologies, OS hardening methodologies. </span>
          </div>
        </div>
      </div>
      {/* <Logoslider className="Skillset-bar" /> */}
    </div>
  );
}

export default Projects;
