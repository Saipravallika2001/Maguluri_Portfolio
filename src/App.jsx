import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Hero />

      <div className="bg-[#0c1123]">
        <About />
      </div>

      <div className="bg-[#0b0f1e]">
        <Education />
      </div>

      <div className="bg-[#0c1123]">
        <WorkExperience />
      </div>

      <div className="bg-[#0c1123]">
        <Skills />
      </div>

      <div className="bg-[#0e1423]">
        <Projects />
      </div>

      <div className="bg-[#0b0f1a]">
        <Certifications />
      </div>

      <div className="bg-[#0e1423]">
        <Contact />
      </div>
    </div>
  );
}

export default App;
