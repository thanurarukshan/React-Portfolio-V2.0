import React, { useEffect, useState } from "react";
import "./MobileNav.css";
import HomeIcon    from "@mui/icons-material/HomeOutlined";
import PersonIcon  from "@mui/icons-material/PersonOutlined";
import WorkIcon    from "@mui/icons-material/WorkOutlined";
import CodeIcon    from "@mui/icons-material/CodeOutlined";
import FolderIcon  from "@mui/icons-material/FolderOutlined";

const navItems = [
  { label: "Home",     href: "#",           sectionId: null,         Icon: HomeIcon },
  { label: "About",    href: "#aboutMe",    sectionId: "aboutMe",    Icon: PersonIcon },
  { label: "Work",     href: "#experience", sectionId: "experience", Icon: WorkIcon },
  { label: "Skills",   href: "#skills",     sectionId: "skills",     Icon: CodeIcon },
  { label: "Projects", href: "#projects",   sectionId: "projects",   Icon: FolderIcon },
];

function MobileNav() {
  const [active, setActive] = useState("Home");

  // ── Active section tracking via IntersectionObserver ───────────────────
  useEffect(() => {
    const sectionIds = navItems
      .filter((n) => n.sectionId)
      .map((n) => n.sectionId);

    const observers = [];
    const visibleSections = new Set();

    const updateActive = () => {
      if (visibleSections.size === 0) {
        setActive("Home");
        return;
      }
      for (const item of navItems) {
        if (item.sectionId && visibleSections.has(item.sectionId)) {
          setActive(item.label);
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

    // If near top → Home
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
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navItems.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          className={`mobile-nav-item${active === label ? " active" : ""}`}
          aria-label={label}
        >
          <Icon className="mobile-nav-icon" />
          <span className="mobile-nav-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}

export default MobileNav;
