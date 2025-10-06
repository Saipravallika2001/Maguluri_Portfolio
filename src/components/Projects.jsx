import React from "react";

const projects = [
  {
    image: "/icons/project2.png",
    title: "Customer 360-Degree Data Warehouse",
    description:
      "Built a centralized data warehouse unifying transactions, support interactions, and website activity, modeled with dbt and Snowflake to enable analytics such as churn prediction, and segmentation. Delivered interactive dashboards providing actionable insights to business teams.",
    Skills: "SQL, dbt, Snowflake, Data Modeling, BI Visualization",
    link: "https://github.com/your-username/point-and-click-ml",
  },
  {
    image: "/icons/project5.png",
    title: "IOT Smart Home Lakehouse",
    description:
      "Designed a modern data lakehouse architecture to process IoT sensor data (temperature, energy usage, motion). Built pipelines in Databricks with Delta Lake to unify batch and streaming ingestion, applied bronze–silver–gold layering for data quality, and created a Power BI dashboard to track energy optimization insights and anomaly detection.",
    Skills: "AWS S3, Databricks (Spark + Delta Lake), Airflow, Power BI, Data Lakehouse",
      link: "https://github.com/your-username/point-and-click-ml",
  },
  {
    image: "/icons/project1.png",
    title: "Automated Retail Sales ETL Pipeline",
    description:
      "Designed and implemented a batch ETL pipeline to process daily retail sales data. Built data ingestion workflows with Airflow, transformed raw CSV files into a star schema in Snowflake, and created a Tableau dashboard showcasing revenue trends, top-performing products, and customer churn insights.",

    Skills: "Python, SQL, Airflow, Snowflake, Tableau, Data Modeling",
    link: "https://github.com/your-username/weather-pipeline",
  },
  {
    image: "/icons/project3.png",
    title: "Real-Time Ride Sharing Analytics Pipeline",
    description:
      "Built a real-time data pipeline to monitor ride-sharing demand and driver performance. Leveraged Kafka for event streaming and Spark Streaming for real-time transformations. Processed and stored insights in Cassandra and visualized ride demand hotspots and average wait times using Grafana dashboards.",
    Skills: "Kafka, Spark Streaming, Cassandra, Docker, Grafana",
      link: "https://github.com/your-username/point-and-click-ml",
  },
  {
    image: "/icons/project4.png",
    title: "Financial Fraud Detection Pipeline",
    description:
      "Implemented a streaming pipeline to detect fraudulent financial transactions in real time. Used Kafka for ingestion of transaction streams and Spark Structured Streaming to flag anomalies based on spending patterns and geo-location mismatches. Stored results in PostgreSQL and Redis for real-time access, and built a Tableau dashboard for fraud monitoring teams.",
    Skills: "Kafka, Spark Structured Streaming, PostgreSQL, Redis, Airflow, Tableau",
      link: "https://github.com/your-username/study-notion",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-[#0f1a2e] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 underline decoration-orange-500 decoration-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0b0f1e] w-[500px] h-[530px] rounded-xl overflow-hidden shadow-md border border-orange-500 
                       transition-transform duration-300 transform hover:scale-105 
                       shadow-[0_10px_30px_0_rgba(255,115,0,0.5)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {project.title}
              </h3>
              <p className="text-white text-0.5xl mb-4">{project.description}</p>
              <p className="text-sm text-sky-300 italic mb-4">
                <span className="font-semibold text-sky-300">Skills:</span> {project.Skills}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-0.5xl text-orange-400 underline hover:text-orange-300 transition duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
