import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

const SkillsSection = () => {
  // Group skills by category
  const frontendSkills = [
    { name: "React", percentage: 85 },
    { name: "Next.js", percentage: 80 },
    { name: "TypeScript", percentage: 75 },
    { name: "Material UI", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 }
  ];
  
  const backendSkills = [
    { name: "Java", percentage: 90 },
    { name: "Spring Boot", percentage: 85 },
    { name: "Node.js", percentage: 70 },
    { name: "PostgreSQL", percentage: 75 },
    { name: "MongoDB", percentage: 70 }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
            <div className="absolute bottom-0 left-0 w-full h-1 bg-violet-600"></div>
          </motion.h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Frontend skills */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Frontend</h3>
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
          
          {/* Backend skills */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Backend</h3>
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
        
        {/* Additional Skills and Tools */}
        <motion.div
          className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Other Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {["Git", "Docker", "RESTful APIs", "JWT", "OAuth", "CI/CD", "Agile", "JIRA", "Payment Gateways", "Microservices"].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              >
                {skill}
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
  };
  index: number;
  color: string;
}

const SkillBar = ({ skill, index, color }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
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
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
