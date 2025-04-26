import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Code, Home, Briefcase, GraduationCap, Code2, MessageSquare, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { href: "#home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "#skills", label: "Skills", icon: <Code2 className="h-5 w-5" /> },
    { href: "#projects", label: "Projects", icon: <Code className="h-5 w-5" /> },
    { href: "#experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { href: "#education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
    { href: "#contact", label: "Contact", icon: <MessageSquare className="h-5 w-5" /> },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 w-72 p-0 pt-6">
        <div className="px-6">
          <SheetHeader className="text-left mb-8">
            <SheetTitle className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center text-white mr-3">
                <Code className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">
                Praveenkumar
              </span>
            </SheetTitle>
          </SheetHeader>
        </div>
        
        <div className="px-3">
          <nav className="flex flex-col space-y-1">
            {menuItems.map((item, index) => (
              <SheetClose asChild key={index}>
                <motion.a
                  href={item.href}
                  className="flex items-center px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    delay: index * 0.05 
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-8 h-8 rounded-md flex items-center justify-center bg-primary/10 text-primary dark:text-primary-light mr-3">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              </SheetClose>
            ))}
          </nav>
        </div>
        
        <Separator className="my-6" />
        
        <div className="px-6">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Connect with me</h4>
          <div className="flex space-x-3">
            <motion.a
              href="https://github.com/CraftedDevCodeMaster" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2 h-5 w-5 text-primary dark:text-primary-light" />
              <span>GitHub</span>
              <ExternalLink className="ml-1 h-3 w-3" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/praveenkumar-r123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="mr-2 h-5 w-5 text-primary dark:text-primary-light" />
              <span>LinkedIn</span>
              <ExternalLink className="ml-1 h-3 w-3" />
            </motion.a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
