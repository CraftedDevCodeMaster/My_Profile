import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="bg-white dark:bg-gray-800 border-r w-64">
        <SheetHeader className="text-left">
          <SheetTitle className="text-primary dark:text-primary-light">
            Portfolio
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <SheetClose asChild>
            <a
              href="#home"
              className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              Home
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="#skills"
              className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              Skills
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="#projects"
              className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              Projects
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="#experience"
              className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              Experience
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="#education"
              className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              Education
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="#contact"
              className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              Contact
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
