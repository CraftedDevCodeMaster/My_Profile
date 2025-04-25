import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="relative timeline-container pl-8 md:pl-12 max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <ExperienceItem key={index} experience={item} index={index} />
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
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut" 
      }}
      className="timeline-item relative pl-8 pb-12"
    >
      <Card className="bg-white dark:bg-gray-700">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <h3 className="font-bold text-xl mb-1">{experience.title}</h3>
            <Badge className="self-start md:self-center bg-primary/20 text-primary-dark dark:text-primary-light rounded-full px-3 py-1 text-sm">
              {experience.period}
            </Badge>
          </div>
          <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-4">{experience.company}</h4>
          <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-2">
            {experience.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex}>{responsibility}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
