import React from "react";
import "./App.css";
import LinkedInIcon  from "@mui/icons-material/LinkedIn";
import FacebookIcon  from "@mui/icons-material/Facebook";
import EmailIcon     from "@mui/icons-material/Email";
import WhatsAppIcon  from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GitHub } from "@mui/icons-material";
import { portfolioData } from "./data/portfolioData";

const iconMap = {
  LinkedIn:  LinkedInIcon,
  GitHub:    GitHub,
  Facebook:  FacebookIcon,
  Instagram: InstagramIcon,
  Email:     EmailIcon,
  WhatsApp:  WhatsAppIcon,
};

function App() {
  const [text] = useTypewriter({
    words:       portfolioData.roles,
    loop:        {},
    typeSpeed:   60,
    deleteSpeed: 40,
    delaySpeed:  2000,
  });

  return (
    <div className="App">
      <div className="App-content">

        {/* Hero Quote */}
        <h1 className="App-quote">
          <span className="App-quote-word App-quote-code">Code.</span>
          <span className="App-quote-separator"> </span>
          <span className="App-quote-word App-quote-deploy">Deploy.</span>
          <span className="App-quote-separator"> </span>
          <span className="App-quote-word App-quote-automate">Automate.</span>
        </h1>

        {/* Typewriter */}
        <div className="App-typewriter">
          <span className="App-typewriter-prompt">$ </span>
          <span className="App-typewriter-text">{text}</span>
          <Cursor cursorStyle="_" />
        </div>

        {/* Basic Info */}
        <div className="App-info">
          <p className="App-info-name">Thanura Rukshan</p>
          <p className="App-info-degree">B.Sc. (Hons) Eng. in Information and Communication Engineering — SLTC Research University</p>
          <div className="App-info-tags">
            <span>Infrastructure as Code</span>
            <span>CI/CD Pipelines</span>
            <span>Cloud Architecture</span>
            <span>Containerization</span>
            <span>Monitoring &amp; Observability</span>
          </div>
        </div>

        {/* Social Links */}
        <span className="App-iconname">find me on</span>
        <div className="App-iconbar">
          {portfolioData.socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="App-iconbar-link"
              >
                {IconComponent && <IconComponent className="App-iconbar-icons" />}
              </a>
            );
          })}
        </div>

        {/* Scroll indicator — commented out */}
        {/* <a className="App-scroll" href="#aboutMe" aria-label="Scroll down">
          <span></span><span></span><span></span>
        </a> */}

      </div>
    </div>
  );
}

export default App;
