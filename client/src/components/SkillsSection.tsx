import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
    experience: string;
  };
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ scale: 1.05 }}
      className="transition-transform duration-200"
    >
      <Card className="bg-white dark:bg-gray-700">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center mb-4 text-primary dark:text-primary-light">
            <span className="material-icons text-4xl">{skill.icon}</span>
          </div>
          <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm">{skill.experience}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsSection;
