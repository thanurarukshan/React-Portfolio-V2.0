import "./Footer.css";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from '@mui/icons-material/Instagram';
import { GitHub } from "@mui/icons-material";
// import Logoslider from "./Logoslider";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-main-flex">
        <div className="footer-main-icons">
          <a href="https://www.linkedin.com/in/thanura-rukshan-8b610b169/?originalSubdomain=lk">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/thanurarukshan">
            <GitHub />
          </a>
          <a href="https://www.facebook.com/thanura.rukshan.5">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/thanura_rukshan/">
            <InstagramIcon />
          </a>
          <a href="mailto:thanurarukshan2000@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://wa.me/+94779371866">
            <WhatsAppIcon />
          </a>
        </div>
        <span id="footer-main-span">
          Copyright © 2025 | All Rights Reserved.
        </span>
        <span id="footer-main-span2">Thanks for Visit</span>
        {/* <Logoslider className="Skillset-bar" /> */}
      </div>
    </div>
  );
}

export default Footer;
