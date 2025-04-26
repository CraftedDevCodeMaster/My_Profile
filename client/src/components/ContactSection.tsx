import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Show success message to user
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold inline-block relative mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <div className="w-32 h-1 bg-violet-600 mx-auto"></div>
          
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm currently available for freelance work and full-time positions. If you have a project that 
            needs my expertise or want to discuss potential opportunities, feel free to reach out.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg p-8 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <a href="tel:+919113276180" className="text-white hover:underline">
                    +91 91132 76180
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a href="mailto:praveenkumarr200025@gmail.com" className="text-white hover:underline">
                    praveenkumarr200025@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="text-white">Bengaluru, India</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white/90 text-sm font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/CraftedDevCodeMaster" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/praveenkumar-r123" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:praveenkumarr200025@gmail.com" 
                  className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaEnvelope className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to discuss a potential project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;