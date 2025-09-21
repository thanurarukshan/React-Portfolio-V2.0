import "./Experience.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const handleDivClick1 = () => {
    window.location.href =
      "https://www.linkedin.com/company/hsenid-mobile-solutions/posts/?feedView=all";
  };

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
            <span id="title-content" className="sub-title">
              hSenid Mobile Solutions
            </span>

            <ul className="experience-list">
              <li>
                Automated tasks with <b>Ansible</b> (Disk Partitioning, OS Setup) to
                save time across multiple servers.
              </li>
              <li>
                Applied <b>Security Hardening</b> on Apache (CIS Apache 2.4) via config
                changes, privilege, and permission tuning.
              </li>
              <li>
                Worked with <b>PCS Clusters</b> to support web server HA & load
                balancing.
              </li>
              <li>
                Performed <b>API Endpoint Testing</b> (Postman, curl, Wiremock) after
                security patching.
              </li>
              <li>
                Configured <b>System Monitoring</b> (Grafana, Prometheus, SNMP
                Notifier, Alertmanager, Node Exporter) with email alerts.
              </li>
              <li>
                Developed <b>Shell Scripts</b> for backup, log rolling, monitoring, and
                a Linux tool for directory comparison (permissions, ownership, content).
              </li>
              <li>
                Worked in <b>Agile sprints</b> with daily standups (SDLC).
              </li>
              <li>
                Gained experience in Git workflows, Linux filesystems, networking, and
                system hardening.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
