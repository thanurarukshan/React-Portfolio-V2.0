import React from "react";
import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GitHub } from "@mui/icons-material";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [text] = useTypewriter({
    words: portfolioData.roles,
    loop: {},
  });

  const iconMap = {
    LinkedIn: LinkedInIcon,
    GitHub: GitHub,
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
    Email: EmailIcon,
    WhatsApp: WhatsAppIcon
  };

  return (
    <div className="App">
      <span className="App-name">
        <div>
          {/* First part of name: THANURA */}
          {portfolioData.nameParts[0].split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
        <div>
          {/* Second part of name: RUKSHAN */}
          {portfolioData.nameParts[1].split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </span>
      <div className="App-hash">
        <span className="App-hash01"># </span>
        <span className="App-hash02">{text}</span>
        <span>
          <Cursor />
        </span>
      </div>
      <span className="App-iconname">find me on </span>
      <div className="App-iconbar">
        {portfolioData.socialLinks.map((link, index) => {
          const IconComponent = iconMap[link.icon];
          return (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {IconComponent && <IconComponent className="App-iconbar-icons" />}
            </a>
          );
        })}
      </div>
      <a className="App-scroll" href="#aboutMe">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
}

export default App;
