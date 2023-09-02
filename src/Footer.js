import "./Footer.css";

import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className="footer-main">
        <div className="footer-main-flex">
            <div className="footer-main-icons">
                <a href="https://www.linkedin.com/in/thanura-rukshan-8b610b169/?originalSubdomain=lk"><LinkedInIcon /></a>
                <a href="https://www.facebook.com/thanura.rukshan.5"><FacebookIcon /></a>
                <a href="mailto:thanurarukshan2000@gmail.com"><EmailIcon /></a>
                <a href="https://wa.me/+94779371866"><WhatsAppIcon /></a>
            </div>
            <span id="footer-main-span">Copyright © 2023 | All Rights Reserved</span>
            <span>Thanks for Visit</span>

        </div>
    </div>
  )
}

export default Footer