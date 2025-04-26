import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { education } from "@/data/education";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, School, BookOpen } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary dark:text-primary-light rounded-full px-4 py-1.5 text-sm font-medium mb-3"
          >
            Academic Journey
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Education & Training
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My educational background and professional development
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
      initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
      animate={controls}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
      className="h-full"
    >
      <Card className="bg-white dark:bg-gray-700 h-full border-0 shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-primary to-primary-light"></div>
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <GraduationCap className="h-6 w-6 text-primary dark:text-primary-light" />
            </div>
            <div>
              <Badge variant="outline" className="mb-1 bg-primary/10 border-primary/30 text-primary dark:text-primary-light flex items-center w-fit">
                <Calendar className="mr-1 h-3 w-3" />
                <span className="text-xs">{education.period}</span>
              </Badge>
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 leading-tight">{education.degree}</h3>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <School className="h-5 w-5 text-primary/70 dark:text-primary-light/70 mr-2 mt-0.5 flex-shrink-0" />
            <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">{education.institution}</h4>
          </div>
          
          <div className="flex items-start flex-grow">
            <BookOpen className="h-5 w-5 text-primary/70 dark:text-primary-light/70 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{education.description}</p>
          </div>
          
          <motion.div 
            className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationSection;
