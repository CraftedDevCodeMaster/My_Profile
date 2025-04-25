import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { education } from "@/data/education";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface EducationCardProps {
  education: {
    degree: string;
    institution: string;
    period: string;
    description: string;
  };
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: "easeOut" 
      }}
      whileHover={{ y: -5 }}
      className="transition-all duration-300"
    >
      <Card className="bg-white dark:bg-gray-700 h-full">
        <CardContent className="p-6 h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-xl">{education.degree}</h3>
            <Badge className="bg-primary/20 text-primary-dark dark:text-primary-light rounded-full px-3 py-1 text-sm">
              {education.period}
            </Badge>
          </div>
          <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-2">{education.institution}</h4>
          <p className="text-gray-600 dark:text-gray-300">{education.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationSection;
