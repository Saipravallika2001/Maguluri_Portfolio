
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 text-white bg-secondary">

      <h2 className="text-4xl font-bold text-center text-white mb-12 underline decoration-orange-500 decoration-4">
          Contact
        </h2>
      <p className="text-center mb-4">Feel free to connect via email or LinkedIn.</p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:saipravallika005@gmail.com" className="text-primary hover:underline">Email</a>
        <a href="https://www.linkedin.com/in/sai-pravallika-maguluri/" target="_blank" className="text-primary hover:underline" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Saipravallika2001" target="_blank" className="text-primary hover:underline" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
