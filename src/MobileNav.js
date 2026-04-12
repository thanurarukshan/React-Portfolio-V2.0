import React from "react";
import "./MobileNav.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import WorkIcon from "@mui/icons-material/WorkOutlined";
import CodeIcon from "@mui/icons-material/CodeOutlined";
import FolderIcon from "@mui/icons-material/FolderOutlined";

const navItems = [
  { label: "Home", href: "#", Icon: HomeIcon },
  { label: "About", href: "#aboutMe", Icon: PersonIcon },
  { label: "Work", href: "#experience", Icon: WorkIcon },
  { label: "Skills", href: "#skills", Icon: CodeIcon },
  { label: "Projects", href: "#projects", Icon: FolderIcon },
];

function MobileNav() {
  const [active, setActive] = React.useState("Home");

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navItems.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          className={`mobile-nav-item${active === label ? " active" : ""}`}
          onClick={() => setActive(label)}
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
