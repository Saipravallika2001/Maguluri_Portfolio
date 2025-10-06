import React from "react";

const educationData = [
  {
    degree: "Master of Science in Computer and Information Sciences",
    university: "Texas Tech University",
    location: "Lubbock, TX",
    duration: "2023 – 2025",
    icon: "/icons/texastech.png", // replace with your own logo/icon
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    university: "RVR & JC College of Engineering",
    location: "Guntur, India",
    duration: "2018 – 2022",
    icon: "/icons/rvrjc.png", // replace with your own logo/icon
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#0b0f1e] py-16 px-6">
      <div className="max-w-6xl mx-auto text-white">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <h2 className="text-4xl font-bold text-center text-white mb-12 underline decoration-orange-500 decoration-4">
          Education
        </h2>
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden"
            >
              {/* Left border + content */}
              <div className="flex items-start gap-6 border-l-4 border-orange-500 p-6">
                {/* Icon */}
                <img
                  src={edu.icon}
                  alt={edu.university}
                  className="w-14 h-14 object-contain mt-1"
                />

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300">
                    {edu.university} — {edu.location}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{edu.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
