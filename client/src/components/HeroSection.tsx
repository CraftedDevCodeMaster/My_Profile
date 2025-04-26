import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const roles = [
    "Software Engineer", 
    "Java Developer", 
    "Spring Boot Specialist",
    "Full Stack Developer"
  ];

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={itemVariants}>
              <span className="block">Hi, I'm</span>
              <span className="text-primary dark:text-primary-light">Praveenkumar R</span>
            </motion.h1>
            
            <motion.div
              className="h-12 mb-8 overflow-hidden"
              variants={itemVariants}
            >
              <motion.div
                animate={{
                  y: [-0, -120, -240, -360, -0],
                }}
                transition={{
                  duration: 8,
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {roles.map((role, index) => (
                  <p
                    key={index}
                    className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 h-12 flex items-center"
                  >
                    {role}
                  </p>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              Experienced software engineer specializing in payment processing, mandates, and bank API integrations with advanced proficiency in Spring Boot. Passionate about creating secure and scalable solutions for the financial sector.
            </motion.p>
            
            <motion.div className="flex space-x-6 mb-8" variants={itemVariants}>
              <a 
                href="https://github.com/CraftedDevCodeMaster" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors duration-200"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/praveenkumar-r123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
            </motion.div>
            
            <motion.div className="flex space-x-4" variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-light text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light font-medium hover:bg-primary/10 transition-colors duration-200"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary dark:border-primary-light shadow-xl bg-gradient-to-br from-primary/20 to-primary-light/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold text-primary dark:text-primary-light">PR</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
