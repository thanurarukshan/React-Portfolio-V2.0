import "./Projects.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "./data/projects.json";

function Projects() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-quart" });
  }, []);

  return (
    <section className="section-wrapper" id="projects">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Projects
        </h2>
        <div className="projects-list">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-item"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
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
              <span className="project-num">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="project-body">
                <span className="project-title">{project.title}</span>
                <span className="project-tech">{project.tech}</span>
                {project.description && (
                  <span className="project-desc">{project.description}</span>
                )}
                {project.docsLink && (
                  <a
                    className="project-docs-link"
                    href={project.docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    📄 Docs
                  </a>
                )}
              </div>
              {project.link && (
                <span className="project-arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
