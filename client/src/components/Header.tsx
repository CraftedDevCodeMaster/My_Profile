import { useState, useEffect } from "react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center text-white">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">
                Praveenkumar
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === item.href.substring(1)
                    ? "text-primary dark:text-primary-light"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light"
                } transition-colors duration-200`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-primary-light rounded-full"
                    layoutId="navigation-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-3">
              <motion.a
                href="https://github.com/CraftedDevCodeMaster"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/praveenkumar-r123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
            
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Open mobile menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
