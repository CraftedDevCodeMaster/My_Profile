import { motion } from "framer-motion";
import { Code, Heart, ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      {/* Scroll to top button */}
      <div className="absolute right-8 -top-5">
        <motion.button
          className="w-10 h-10 bg-primary hover:bg-primary-light text-white rounded-full flex items-center justify-center shadow-lg"
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Logo & Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center text-white mr-3">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">
                Praveenkumar
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Software engineer specializing in payment processing, mandates, and bank API integrations with Spring Boot.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://github.com/CraftedDevCodeMaster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-light transition-colors duration-200"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                <FaGithub className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/praveenkumar-r123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-light transition-colors duration-200"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-light transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-light transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-light transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-light transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-primary-light transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2"></span>
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium block text-gray-300">Email:</span>
                <a href="mailto:praveenkumarr200025@gmail.com" className="hover:text-primary-light transition-colors duration-200">
                  praveenkumarr200025@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-medium block text-gray-300">Phone:</span>
                <a href="tel:+919113276180" className="hover:text-primary-light transition-colors duration-200">
                  +91 91132 76180
                </a>
              </li>
              <li className="text-gray-400">
                <span className="font-medium block text-gray-300">Location:</span>
                Bengaluru, India
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 text-lg">Top Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Oracle SQL", "HTML/CSS", "JavaScript", "Next.js"].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-700/50 text-sm px-3 py-1 rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Praveenkumar R. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-3 w-3 text-red-500 mx-1 animate-pulse" /> as a software engineer portfolio showcase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
