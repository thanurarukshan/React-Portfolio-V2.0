import "./Headerbar.css";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home",       href: "#",              sectionId: null },
  { label: "About",      href: "#aboutMe",        sectionId: "aboutMe" },
  { label: "Experience", href: "#experience",     sectionId: "experience" },
  { label: "Skills",     href: "#skills",         sectionId: "skills" },
  { label: "Projects",   href: "#projects",       sectionId: "projects" },
  { label: "Certs",      href: "#certifications", sectionId: "certifications" },
];

function Headerbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("Home");

  // ── Scroll-aware glassmorphism ──────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Active section tracking via IntersectionObserver ───────────────────
  useEffect(() => {
    // Map each sectionId → label
    const sectionIds = navLinks
      .filter((l) => l.sectionId)
      .map((l) => l.sectionId);

    const observers = [];

    // Track which sections are currently intersecting
    const visibleSections = new Set();

    const updateActive = () => {
      if (visibleSections.size === 0) {
        // Nothing below the fold → we're at the top (Home)
        setActive("Home");
        return;
      }
      // Pick the section whose ID appears first in navLinks order
      for (const link of navLinks) {
        if (link.sectionId && visibleSections.has(link.sectionId)) {
          setActive(link.label);
          return;
        }
      }
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
          updateActive();
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Also watch scroll position: if near top, activate "Home"
    const handleScroll = () => {
      if (window.scrollY < 80) {
        visibleSections.clear();
        setActive("Home");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`headerbar-main${scrolled ? " scrolled" : ""}`}>
      <nav className="headerbar">
        <span className="headerbar-logo">
          <span className="headerbar-logo-bracket">&lt;</span>
          TR
          <span className="headerbar-logo-bracket">/&gt;</span>
        </span>
        <div className="headerbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`headerbar-link${active === link.label ? " active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Headerbar;
