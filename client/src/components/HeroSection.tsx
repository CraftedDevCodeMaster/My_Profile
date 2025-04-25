import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

  const roles = ["Java Developer", "React.js Expert", "Spring Boot Engineer"];

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
              <span className="text-primary dark:text-primary-light">John Doe</span>
            </motion.h1>
            
            <motion.div
              className="h-12 mb-8 overflow-hidden"
              variants={itemVariants}
            >
              <motion.div
                animate={{
                  y: [-0, -120, -240, -0],
                }}
                transition={{
                  duration: 6,
                  times: [0, 0.33, 0.66, 1],
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
              A passionate full-stack developer specializing in Java and React.js with expertise in building robust, scalable applications.
            </motion.p>
            
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary dark:border-primary-light shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
