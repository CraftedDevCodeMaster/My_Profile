import { useState } from "react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary dark:text-primary-light">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#skills"
              className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#education"
              className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors duration-200"
            >
              Education
            </a>
            <a
              href="#contact"
              className="px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-primary hover:dark:text-primary-light transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Open mobile menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;
