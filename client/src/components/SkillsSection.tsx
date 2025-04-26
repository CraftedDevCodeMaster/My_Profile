import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary dark:text-primary-light rounded-full px-4 py-1.5 text-sm font-medium mb-3"
          >
            Tech Stack
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Skills & Expertise
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized in building secure and scalable solutions using modern technologies
          </motion.p>
        </div>
        
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
      initial={{ opacity: 0, y: 30, rotateY: -10 }}
      animate={controls}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.05, 
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2, type: "tween" }
      }}
      className="h-full"
    >
      <Card className="bg-white dark:bg-gray-700 border-0 shadow-md h-full overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full relative z-10">
          <div 
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary dark:text-primary-light relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/5"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <span className="material-icons text-3xl relative z-10">{skill.icon}</span>
          </div>
          
          <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-200">
            {skill.name}
          </h3>
          
          <motion.div
            className="bg-primary/10 text-primary dark:text-primary-light text-xs font-medium px-3 py-1 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.experience}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsSection;
