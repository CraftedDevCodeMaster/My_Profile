import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Home, Briefcase, Code, MessageSquare, ExternalLink, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { href: "#home", label: "About", icon: <Home className="h-5 w-5" /> },
    { href: "#skills", label: "Skills", icon: <Code className="h-5 w-5" /> },
    { href: "#projects", label: "Projects", icon: <Code className="h-5 w-5" /> },
    { href: "#experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
    { href: "#contact", label: "Contact", icon: <MessageSquare className="h-5 w-5" /> },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="bg-white dark:bg-gray-900 border-l border-gray-100 dark:border-gray-800 w-full max-w-xs p-0">
        <div className="flex items-center justify-between px-4 py-4">
          <SheetTitle className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Menu
          </SheetTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <Separator className="bg-gray-100 dark:bg-gray-800" />
        
        <div className="px-4 py-6">
          <nav className="flex flex-col space-y-5">
            {menuItems.map((item, index) => (
              <SheetClose asChild key={index}>
                <motion.a
                  href={item.href}
                  className="flex items-center text-base font-medium text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
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
                  {item.label}
                </motion.a>
              </SheetClose>
            ))}
          </nav>
        </div>
        
        <Separator className="bg-gray-100 dark:bg-gray-800 my-4" />
        
        <div className="px-4 py-6">
          {/* <Button
            asChild
            className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-md"
          >
            <a href="#contact">Hire Me</a>
          </Button> */}
          
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Connect with me</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/CraftedDevCodeMaster" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/praveenkumar-r123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
