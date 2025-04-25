import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Code, FileText, Download } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink?: string;
    sourceLink?: string;
    docsLink?: string;
    downloadLink?: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
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
      className="h-full"
    >
      <Card className="bg-white dark:bg-gray-700 overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-xl">
        <div className="h-48 overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <div className="flex flex-wrap gap-2 justify-end">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="bg-primary/20 text-primary-dark dark:text-primary-light">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {project.demoLink && (
              <a href={project.demoLink} className="inline-flex items-center text-primary dark:text-primary-light hover:underline">
                <Eye className="h-4 w-4 mr-1" />
                Live Demo
              </a>
            )}
            {project.sourceLink && (
              <a href={project.sourceLink} className="inline-flex items-center text-primary dark:text-primary-light hover:underline">
                <Code className="h-4 w-4 mr-1" />
                Source Code
              </a>
            )}
            {project.docsLink && (
              <a href={project.docsLink} className="inline-flex items-center text-primary dark:text-primary-light hover:underline">
                <FileText className="h-4 w-4 mr-1" />
                Documentation
              </a>
            )}
            {project.downloadLink && (
              <a href={project.downloadLink} className="inline-flex items-center text-primary dark:text-primary-light hover:underline">
                <Download className="h-4 w-4 mr-1" />
                Download
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;
