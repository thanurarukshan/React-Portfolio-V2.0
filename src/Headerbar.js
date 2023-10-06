import "./Headerbar.css";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

function Headerbar() {
  return (
    <div className="headerbar-main">
      <div className="headerbar">
        <div>
          <a href="#">Home</a>
          <a href="#aboutMe">About me</a>
        </div>
        {/*<div className="headerbar-links">
          <a href="https://www.linkedin.com/in/thanura-rukshan-8b610b169/?originalSubdomain=lk"><LinkedInIcon /></a>
          <a href="https://www.facebook.com/thanura.rukshan.5"><FacebookIcon /></a>
          <a href="mailto:thanurarukshan2000@gmail.com"><EmailIcon /></a>
          <a href="https://wa.me/+94779371866"><WhatsAppIcon /></a>
        </div>*/}
      </div>
    </div>
  );
}

export default Headerbar;
