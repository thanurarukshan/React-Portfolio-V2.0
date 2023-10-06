import React from "react";
import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GitHub } from "@mui/icons-material";

function App() {
  const [text] = useTypewriter({
    words: [
      "Engineering Undergraduate",
      "Web Developer",
      "App Developer",
      "Graphic Designer",
    ],
    loop: {},
  });

  return (
    <div className="App">
      <span className="App-name">
        <span>T</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
        <span>U</span>
        <span>R</span>
        <span>A</span>
        <span> </span>
        <span>R</span>
        <span>U</span>
        <span>K</span>
        <span>S</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
      </span>
      <div className="App-hash">
        <span className="App-hash01"># </span>
        <span className="App-hash02">{text}</span>
        <span>
          <Cursor />
        </span>
      </div>
      <div className="App-iconbar">
        <a href="https://www.linkedin.com/in/thanura-rukshan-8b610b169/?originalSubdomain=lk">
          <LinkedInIcon className="App-iconbar-icons" />
        </a>
        <a href="https://github.com/thanurarukshan">
          <GitHub className="App-iconbar-icons" />
        </a>
        <a href="https://www.facebook.com/thanura.rukshan.5">
          <FacebookIcon className="App-iconbar-icons" />
        </a>
        <a href="mailto:thanurarukshan2000@gmail.com">
          <EmailIcon className="App-iconbar-icons" />
        </a>
        <a href="https://wa.me/+94779371866">
          <WhatsAppIcon className="App-iconbar-icons" />
        </a>
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
