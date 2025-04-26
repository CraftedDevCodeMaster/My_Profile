import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold inline-block relative mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <div className="w-48 h-1 bg-violet-600 mx-auto"></div>
          
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here are some of my recent projects that showcase my technical abilities and problem-solving
            skills. Each project represents unique challenges that I've successfully overcome.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const gradients = [
    "from-violet-500 to-fuchsia-500",
    "from-rose-500 to-pink-500",
    "from-blue-500 to-violet-500"
  ];
  
  const gradient = gradients[index % gradients.length];

  // Generate two-letter abbreviation for project thumbnail
  const getInitials = (title: string) => {
    const words = title.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return title.substring(0, 2).toUpperCase();
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Project Thumbnail */}
      <div className={`bg-gradient-to-r ${gradient} h-52 flex items-center justify-center relative p-4`}>
        <span className="text-white text-6xl font-bold opacity-60">
          {getInitials(project.title)}
        </span>
        {index === 0 && (
          <div className="absolute top-4 right-4 bg-white text-violet-600 dark:bg-violet-600 dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded">
            Featured
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-3">
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
            >
              Live Demo
            </a>
          )}
          
          {project.sourceLink && (
            <a 
              href={project.sourceLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;