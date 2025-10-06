import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 text-white bg-secondary"
    >
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12 underline decoration-orange-500 decoration-4">
          About Me
        </h2>
        
      </div>

      {/* About Card */}
      <div
        className="max-w-4xl mx-auto px-6 py-10 bg-[#0f1a2e] text-center text-lg rounded-xl 
        border-b-4 border-orange-600 
        shadow-[0_20px_40px_-10px_rgba(249,115,22,0.8)]"
      >
        <p className="leading-relaxed">
          I’m a data engineer with 2+ years of experience building scalable, cloud-native data pipelines and real-time analytics solutions. My expertise spans across batch and streaming workflows, ETL/ELT orchestration, and modern data engineering tools including Apache Airflow, Spark, Kafka, dbt, and Snowflake.

With strong proficiency in Python, SQL, and data modeling, I design and deploy high-performance pipelines that process millions of records with speed, reliability, and accuracy. I also work on advanced use cases involving LLM-powered semantic search and vector databases to unlock intelligent insights at scale.

Armed with a Master’s degree in Computer Science, I bring a sharp problem-solving mindset, a deep understanding of modern data architectures, and a passion for turning complex data into trusted, actionable assets that drive business impact.
        </p>
      </div>
    </section>
  );
};

export default About;
