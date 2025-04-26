import { motion } from "framer-motion";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React", percentage: 85, icon: "⚛️" },
    { name: "Next.js", percentage: 80, icon: "N" },
    { name: "TypeScript", percentage: 75, icon: "TS" },
    { name: "Material UI", percentage: 80, icon: "MUI" },
    { name: "Tailwind CSS", percentage: 90, icon: "🌊" },
  ];

  const backendSkills = [
    { name: "Java", percentage: 90, icon: "☕" },
    { name: "Spring Boot", percentage: 85, icon: "🍃" },
    { name: "Node.js", percentage: 70, icon: "📦" },
    { name: "PostgreSQL", percentage: 75, icon: "🐘" },
    { name: "MongoDB", percentage: 70, icon: "🍃" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold inline-block relative mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto"></div>
        </div>

        {/* Objective */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Objective
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            Experienced Software Engineer specializing in payment systems and bank API integrations with expertise in Spring Boot and Next.js. Proven in architecting secure and scalable solutions for the financial sector, including flight search and booking functionalities. Driven by a passion for innovation
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Frontend
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill}
                  index={index}
                  color="from-violet-600 to-pink-500"
                />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Backend
            </h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill}
                  index={index}
                  color="from-blue-600 to-violet-600"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Other Skills */}
        <motion.div
          className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Other Skills & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Git",
              "Docker",
              "RESTful APIs",
              "JWT",
              "OAuth",
              "CI/CD",
              "Agile",
              "JIRA",
              "Payment Gateways",
              "Microservices",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environments & Tools */}
        <motion.div
          className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Technologies & Environments
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "nginx Server",
              "Tomcat Server",
              "AWS EC2/S3",
              "Oracle SQL",
              "PLSQL",
              "Apache Camel",
              "JasperReports",
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: {
    name: string;
    percentage: number;
    icon?: string;
  };
  index: number;
  color: string;
}

const SkillBar = ({ skill, index, color }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {skill.percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${skill.percentage}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2 * index,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
