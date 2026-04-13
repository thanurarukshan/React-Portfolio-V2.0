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
import WaveBackground from "./WaveBackground";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Canvas water-wave background — fixed, covers the full site */}
    <WaveBackground />

    {/* Page content sits on top (z-index 1) */}
    <div style={{ position: "relative", zIndex: 1 }}>
      <Headerbar />
      <App />
      <Aboutme />
      <Experience />
      <Skillset />
      <Projects />
      <Certifications />
      <Footer />
    </div>

    {/* Mobile bottom nav sits above content */}
    <MobileNav />
  </React.StrictMode>,
);

reportWebVitals();
