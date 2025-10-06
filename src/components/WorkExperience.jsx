import React from "react";

const experiences = [
  {
    role: "Data Engineer Volunteer",
    company: "Bright Mind Enrichment And Schooling",
    location: "California, United States",
    duration: "July 2025 – Present",
    points: [
      "Developed end-to-end data pipelines to process and validate real-time donor transactions from third-party payment APIs.",
      "Automated batch ETL processes for thousands of daily donation records, accelerating reporting by 40%.",
      "Reduced latency by 30% under peak load conditions through infrastructure optimization.",
      "Delivered analytics-ready donor data that improved campaign decision-making and increased retention by 20%.",
    ]
  },
  {
    role: "Data Engineer",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    duration: "Oct 2022 – Jul 2023",
    points: [
      "Designed 30+ Aprimo DAM workflows to streamline asset approvals for Johnson & Johnson, boosting asset availability by 40%.",
      "Built real-time metadata pipelines with AWS Glue and Kafka, processing 2M+ events daily with 99.99% accuracy.",
      "Automated validation using Python and PyTest, improving test coverage to 85% and reducing critical workflow issues by 40%.",
      "Embedded logging, monitoring, and fault recovery into production workflows to ensure 99.9% uptime.",
      "Partnered with cross-functional teams to deliver curated datasets, improving reporting turnaround by 30%"
    ]
  },
  {
    role: "Data Engineer Intern",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    duration: "Feb 2022 – Sep 2022",
    points: [
      "Built ETL pipelines using Python, Django, and MySQL for a Vehicle Insurance Management System.",
      "Applied Kubernetes to containerize and scale ETL tasks, increasing compliance automation efficiency by 35%.",
      "Enabled real-time API ingestion to monitor policy infractions, reducing violations from 15% to <2%.",
      "Delivered optimized data models and improved query performance for regulatory reporting."
    ]
  },
  {
    role: "Data Engineer Intern",
    company: "Verzeo",
    location: "Hyderabad, India",
    duration: "Jan 2021 – Oct 2021",
    points: [
      "Developed a real-time semantic search system using HuggingFace, Pinecone, and Power BI.",
      "Indexed 1,000+ documents and achieved <2s query response time using vector embeddings.",
      "Improved search accuracy by 40% and retrieval speed by 80%, enabling faster insight delivery."
    ]
  },
];

const WorkExperience = () => {
  return (
    <>
      <section className="py-16 bg-[#0f1a2e] transition-colors duration-300" id="experience">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 underline decoration-orange-500 decoration-4">
            Experience
          </h2>
          <div className="relative border-l-4 border-orange-500 pl-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-8 top-2"></div>
                <h3 className="text-xl font-semibold text-orange-500">
                  {exp.role}
                </h3>
                <p className="text-gray-300 text-sm mb-1">
                  {exp.company} – {exp.location}
                </p>
                <p className="text-sky-300 text-sm mb-3">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
