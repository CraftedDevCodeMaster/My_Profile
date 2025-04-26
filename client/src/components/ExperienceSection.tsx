import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Check } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold inline-block relative mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <div className="w-28 h-1 bg-violet-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  };
  index: number;
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  return (
    <motion.div
      className="mb-16 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <div className="mb-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {experience.title}
            </h3>
            <div className="text-sm text-violet-600 dark:text-violet-400 font-medium">
              @ {experience.company}
            </div>
          </div>
          <div className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium px-2.5 py-1 rounded">
            {experience.period}
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">
            Key Achievements:
          </h4>
          <ul className="space-y-3">
            {experience.responsibilities.map((item, respIndex) => (
              <motion.li 
                key={respIndex}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * respIndex + 0.3 }}
              >
                <div className="mr-2 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Only add separator after the first item */}
      {index === 0 && (
        <div className="border-b border-gray-200 dark:border-gray-700 mt-8"></div>
      )}
    </motion.div>
  );
};

export default ExperienceSection;