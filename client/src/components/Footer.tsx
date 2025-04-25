const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Portfolio</p>
            <p className="text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
