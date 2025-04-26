import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Building } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary dark:text-primary-light rounded-full px-4 py-1.5 text-sm font-medium mb-3"
          >
            Career Path
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Experience
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My journey building secure and reliable solutions in the software industry
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-primary/20 dark:bg-primary/30 transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {experience.map((item, index) => (
              <ExperienceItem key={index} experience={item} index={index} isEven={index % 2 === 0} />
            ))}
          </div>
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
  isEven: boolean;
}

const ExperienceItem = ({ experience, index, isEven }: ExperienceItemProps) => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <div className="relative flex flex-col md:flex-row items-center">
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-0 md:left-1/2 w-11 h-11 bg-white dark:bg-gray-800 rounded-full border-4 border-primary dark:border-primary-light shadow-md flex items-center justify-center z-10 transform -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: index * 0.1
        }}
      >
        <Briefcase className="h-5 w-5 text-primary dark:text-primary-light" />
      </motion.div>
      
      {/* Content Card - alternating sides on desktop */}
      <motion.div
        ref={ref}
        className={`md:w-1/2 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} pl-12 md:pl-0`}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.1
        }}
      >
        <Card className="bg-white dark:bg-gray-700 border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/30 text-primary dark:text-primary-light flex items-center w-fit">
              <Calendar className="mr-1 h-3.5 w-3.5" />
              <span>{experience.period}</span>
            </Badge>
            
            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
              {experience.title}
            </h3>
            
            <div className="flex items-center mb-4 text-primary/80 dark:text-primary-light/80">
              <Building className="h-4 w-4 mr-2" />
              <span className="font-medium">{experience.company}</span>
            </div>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <motion.li 
                  key={respIndex}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * respIndex + 0.3 }}
                >
                  <span className="text-primary dark:text-primary-light mr-2 text-lg leading-tight">•</span>
                  <span className="text-sm leading-relaxed">{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
