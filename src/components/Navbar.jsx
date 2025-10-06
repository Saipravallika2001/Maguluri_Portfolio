// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 bg-[#0e1423] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pravallika</h1>
        <ul className="flex gap-6 text-base">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
