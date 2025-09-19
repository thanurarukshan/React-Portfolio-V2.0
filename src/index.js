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

//font
import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Aboutme />
    <Experience/>
    <Skillset />
    <Projects />
    <Certifications />
    <Footer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
