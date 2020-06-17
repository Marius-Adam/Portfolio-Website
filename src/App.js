import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.scss";

import Navi from "./components/Navi/Navi";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import resumeData from "./resumeData";

export default function App() {
  return (
    <div className="App">
      <Navi resumeData={resumeData} />
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Projects resumeData={resumeData} />
      <Contact resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}
