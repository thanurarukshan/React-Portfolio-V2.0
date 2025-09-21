import "./Projects.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "./data/projects.json"; // import the JSON file

function Projects() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="Skillset">
      <div className="Skillset-skill">
        <span className="Skillset-skill-name" data-aos="fade-up">
          Projects
        </span>

        <div className="Skillset-skill-des">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              onClick={() =>
                project.link &&
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
              role={project.link ? "link" : "article"}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" && project.link)
                  window.open(project.link, "_blank", "noopener,noreferrer");
              }}
            >
              <span id="title">{project.title}</span>
              <span id="title-content">{project.tech}</span>
              {project.description && (
                <span id="title-content">{project.description}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
