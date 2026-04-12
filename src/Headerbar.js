import "./Headerbar.css";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#aboutMe" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
];

function Headerbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
              onClick={() => setActive(link.label)}
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
