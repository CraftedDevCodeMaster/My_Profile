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
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      className="h-full"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="bg-white dark:bg-gray-700 overflow-hidden h-full flex flex-col border-0 shadow-lg rounded-xl">
        <div className="h-52 overflow-hidden relative">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute top-3 right-3 z-20 flex flex-wrap gap-1 max-w-[70%] justify-end">
            {project.technologies.slice(0, 2).map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                className="bg-primary/90 hover:bg-primary text-white font-medium shadow-md"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 2 && (
              <Badge className="bg-gray-700/90 hover:bg-gray-700 text-white font-medium shadow-md">
                +{project.technologies.length - 2}
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-100">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap gap-3 justify-start">
              {project.demoLink && (
                <motion.a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-light text-sm hover:bg-primary/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye className="h-3.5 w-3.5 mr-1.5" />
                  Demo
                </motion.a>
              )}
              {project.sourceLink && (
                <motion.a 
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-light text-sm hover:bg-primary/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code className="h-3.5 w-3.5 mr-1.5" />
                  Source
                </motion.a>
              )}
              {project.docsLink && (
                <motion.a 
                  href={project.docsLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-light text-sm hover:bg-primary/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="h-3.5 w-3.5 mr-1.5" />
                  Docs
                </motion.a>
              )}
              {project.downloadLink && (
                <motion.a 
                  href={project.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-light text-sm hover:bg-primary/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="h-3.5 w-3.5 mr-1.5" />
                  Download
                </motion.a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;
