import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Aboutme from "./Aboutme";
import Skillset from "./Skillset";
import Projects from "./Projects";
import Footer from "./Footer";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Headerbar from "./Headerbar";
import MobileNav from "./MobileNav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Fixed full-site Vanta background */}
    <div id="vanta-bg" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
    {/* Page content sits on top */}
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Headerbar />
      <App />
      <Aboutme />
      <Experience />
      <Skillset />
      <Projects />
      <Certifications />
      <Footer />
    </div>
    <MobileNav />
  </React.StrictMode>,
);

reportWebVitals();
