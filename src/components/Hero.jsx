import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between px-6 md:px-16 bg-[#0a0f1c] text-white">
      
      {/* Top Navigation */}
      <nav className="w-full flex justify-start gap-6 py-6 text-lg font-medium">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#education" className="hover:text-primary transition-colors">Education</a>
        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 w-full">
        
        {/* Left - Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/yourphoto.jpg"
            alt="Profile"
            className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover  shadow-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="md:w-1/2 space-y-6 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold">
            Hello, I'm <span className="text-primary">Sai Pravallika</span>
          </h1>
          <p className="text-2xl font-medium mb-8">
            A Passionate <span className="text-primary">Data Engineer...</span>
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-14 mt-8">
            
            {/* GitHub */}
            <a
              href="https://github.com/Saipravallika2001"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center group hover:scale-110 transition-transform"
            >
              <FaGithub className="text-5xl text-white group-hover:text-primary transition-colors" />
              <span className="mt-3 font-semibold text-primary">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sai-pravallika-maguluri/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center group hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-5xl text-white group-hover:text-primary transition-colors" />
              <span className="mt-3 font-semibold text-primary">LinkedIn</span>
            </a>

            {/* Gmail */}
            <a
              href="mailto:saipravallika005@gmail.com"
              className="flex flex-col items-center group hover:scale-110 transition-transform"
            >
              <SiGmail className="text-5xl text-white group-hover:text-primary transition-colors" />
              <span className="mt-3 font-semibold text-primary">Gmail</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
