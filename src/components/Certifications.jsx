import React from "react";

const certifications = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: "IBM (Coursera)",
    icon: "/icons/ibm.jpeg",
    link: "https://coursera.org/verify/some-id",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google (Coursera)",
    icon: "/icons/google.jpeg",
    link: "/icons/data_analytics.pdf",
  },
  {
    name: "Databricks Lakehouse Fundamentals Accreditation",
    issuer: "Databricks",
    icon: "/icons/databricks.png",
    link: "/icons/Databricks - Generic.pdf",
  },
  {
    name: "The Joy of Computing Using Python From NPTEL",
    issuer: "NPTEL",
    icon: "/icons/nptel.jpeg",
    link: "/icons/Python.jpeg",
  },
  {
    name: "Database Management System From NPTEL",
    issuer: "NPTEL",
    icon: "/icons/nptel.jpeg",
    link: "/icons/dbms.jpeg",
  },
  {
    name: "Automation Anywhere Certification",
    issuer: "Automation Anywhere",
    icon: "/icons/automation.png",
    link: "/icons/automation_anywhere.pdf",
  }

];

const Certifications = () => {
  return (
    <section className="py-20 bg-[#0a0f1c]" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 underline decoration-orange-500 decoration-4">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-6 rounded-xl shadow-lg border-b-4 border-orange-500 shadow-orange-500/20 transition-transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={cert.icon}
                  alt={cert.name}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-lg text-white font-semibold">
                    {cert.name}
                  </p>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline text-sm hover:text-orange-300"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;