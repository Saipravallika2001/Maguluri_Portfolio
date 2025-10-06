import React from "react";

const skills = [
  {
    category: "Programming & Scripting",
    items: [
      { name: "Data Structures and Algorithms", icon: "/icons/dsa.png" },
      { name: "Java", icon: "/public/icons/java.png" },
      { name: "Linux", icon: "/icons/linux.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "R Programming", icon: "/icons/r.jpeg" },
      { name: "Scala", icon: "/icons/scala.png" },
      { name: "Shell Scripting", icon: "/icons/shell.png" },
      { name: "SQL (Advanced)", icon: "/icons/sql.png" },
    ],
  },
  {
    category: "Data Engineering & Pipelines",
    items: [
      { name: "ETL/ELT Development", icon: "/icons/etl.png" },
      { name: "Batch & Streaming Ingestion", icon: "/icons/batch.png" },
      { name: "Data Cleansing", icon: "/icons/cleansing.png" },
      { name: "Data Transformation", icon: "/icons/transform.png" },
      { name: "Data Validation", icon: "/icons/validate.png" },
      { name: "Data Auditing", icon: "/icons/audit.png" },
      { name: "Apache Airflow", icon: "/icons/airflow.png" },
      { name: "Fivetran", icon: "/icons/fivetran.png" },
      { name: "dbt", icon: "/icons/dbt.jpeg" },
    ],
  },
  {
    category: "Big Data Ecosystem",
    items: [
      { name: "Apache Spark", icon: "/icons/spark.jpeg" },
      { name: "Pyspark", icon: "/icons/pyspark.png" },
      { name: "Elasticsearch", icon: "/icons/elasticsearch.png" },
      { name: "Hadoop", icon: "/icons/hadoop.png" },
      { name: "Hive", icon: "/icons/hive.png" },
      { name: "Informatica", icon: "/icons/informatica.png" },
      { name: "Kafka", icon: "/icons/kafka.png" },
      { name: "Kinesis", icon: "/icons/kinesis.png" },
      { name: "Sigma", icon: "/icons/sigma.png" },
    ],
  },
  {
    category: "LLM, NLP & Semantic Search",
    items: [
      { name: "OpenAI Embeddings", icon: "/icons/openai.png" },
      { name: "HuggingFace Transformers", icon: "/icons/huggingface.png" },
      { name: "Pinecone", icon: "/icons/pinecone.png" },
      { name: "LangChain", icon: "/icons/langchain.png" },
      { name: "LlamaIndex", icon: "/icons/llamaindex.png" },
      { name: "Semantic Search", icon: "/icons/semantic.png" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "/icons/aws.png" },
      { name: "AWS Glue", icon: "/icons/glue.png" },
      { name: "AWS Redshift", icon: "/icons/redshift.png" },
      { name: "AWS S3", icon: "/icons/s3.png" },
      { name: "Azure Data Factory", icon: "/icons/adf.png" },
      { name: "Databricks", icon: "/icons/databrickslogo.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "GCP", icon: "/icons/gcp.png" },
      { name: "Kubernetes", icon: "/icons/kubernetes.png" },
      { name: "Terraform", icon: "/icons/terraform.png" },
    ],
  },
  {
    category: "Databases & Warehousing",
    items: [
      { name: "Google BigQuery", icon: "/icons/bigquery.png" },
      { name: "Microsoft SQL Server", icon: "/icons/sqlserver.png" },
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
      { name: "Snowflake", icon: "/icons/snowflake.png" },
      { name: "SSIS", icon: "/icons/ssis.png" },
      { name: "SSRS", icon: "/icons/ssrs.png" },
    ],
  },
  {
    category: "Analytics & Data Modeling",
    items: [
      { name: "Pandas", icon: "/icons/pandas.png" },
      { name: "NumPy", icon: "/icons/numpy.png" },
      { name: "Alteryx", icon: "/icons/alteryx.png" },
      { name: "Feature Engineering", icon: "/icons/feature.png" },
      { name: "Dimensional Modeling", icon: "/icons/dimensional.png" },
      { name: "Star/Snowflake Schema", icon: "/icons/star.png" },
    ],
  },
  {
    category: "Testing, CI/CD & Collaboration",
    items: [
      { name: "Jupyter Notebook", icon: "/icons/jupyter.png" },
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub Actions", icon: "/icons/githubactions.png" },
      { name: "JIRA", icon: "/icons/jira.png" },
      { name: "Confluence", icon: "/icons/confluence.png" },
      { name: "Agile/Scrum", icon: "/icons/agile.png" },
      { name: "Postman", icon: "/icons/postman.png" },
      { name: "Power Apps", icon: "/icons/powerapps.png" },
    ],
  },
  {
    category: "Visualization & Reporting",
    items: [
      { name: "Excel", icon: "/icons/excel.png" },
      { name: "Power BI", icon: "/icons/powerbi.jpeg" },
      { name: "Tableau", icon: "/icons/Tableau.png" },
      { name: "Streamlit", icon: "/icons/streamlit.png" },
      { name: "Looker", icon: "/icons/looker.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-[#0a0f1c]" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 underline decoration-orange-500 decoration-4">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-6 rounded-xl shadow-lg border-b-4 border-orange-500 shadow-orange-500/20 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">
                {group.category}
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                {group.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 text-gray-300 text-sm"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
