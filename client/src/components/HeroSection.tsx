import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const stats = [
    { number: "2+", text: "Years Experience" },
    { number: "8+", text: "Projects Completed" },
    // { number: "5+", text: "Happy Clients" }
  ];

  const roles = [
    "Software Engineer",
    "Java Developer",
    "Full Stack Developer",
    "React Js Developer",
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <section
      id="home"
      className="py-20 min-h-[90vh] flex items-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                Open to challenges, eager to collaborate
              </div>
            </motion.div>

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
                  repeatDelay: 1,
                }}
              >
                {roles.map((role, index) => (
                  <p
                    key={index}
                    className="text-4xl md:text-4xl font-medium h-12 flex items-center"
                    style={{ color: "rgb(124, 58, 237)" }}
                  >
                    {role}
                  </p>
                ))}
              </motion.div>
            </motion.div>

            {/* <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            Experienced Software Engineer specializing in payment processing and bank API integrations with expertise in Spring Boot and Next.js for building secure and scalable solutions in financial and travel sectors.
            </motion.p> */}

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Innovative Software Engineer focused on delivering robust
              solutions that enhance system performance and efficiency.
              Committed to developing scalable applications that leverage
              cutting-edge technologies to create impactful user experiences{" "}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6"
              >
                <a href="#contact">Contact Me</a>
              </Button>

              {/* <Button
                asChild
                variant="outline"
                className="border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 rounded-full px-6 hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                <a href="/resume.pdf" download>Download CV</a>
              </Button> */}
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.text}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-60 h-60 md:w-60 md:h-60 rounded-full bg-violet-100 dark:bg-violet-900/30 mx-auto overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Replace the text with an image */}
                  <img
                    src="/images/m38.jpg" // Reference the image from the public folder
                    alt="Profile"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
                  />
                </div>

                {/* Tech Icons floating around */}
                <motion.div
                  className="absolute w-full h-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-md">☕</span>
                  </div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-5xl">🍃</span>
                  </div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-5xl">🌐</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xl">⚛️</span>
                  </div>
                </motion.div>
              </div>
            </div> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
