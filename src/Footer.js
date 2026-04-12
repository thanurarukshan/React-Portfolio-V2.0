import "./Footer.css";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-inner">

        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/thanura-rukshan-8b610b169/?originalSubdomain=lk" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/thanurarukshan" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          <a href="https://www.facebook.com/thanura.rukshan.5" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/thanura_rukshan/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:thanurarukshan2000@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://wa.me/+94779371866" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
        </div>

        <p className="footer-name">Thanura Rukshan</p>
        <p className="footer-copy">© 2026 · All Rights Reserved</p>
        {/* <p className="footer-tagline">Thanks for scrolling.</p> */}
      </div>
    </footer>
  );
}

export default Footer;
