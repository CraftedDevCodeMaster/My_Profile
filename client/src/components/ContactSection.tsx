import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Link2, Code, Briefcase, MessageSquare } from "lucide-react";
import { FormEvent, useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form is static/visual only per requirements
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ContactInfo />
          <ContactForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
          />
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white dark:bg-gray-700 mb-8">
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-4">Contact Information</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Mail className="text-primary dark:text-primary-light mr-3 h-5 w-5" />
              <span className="text-gray-600 dark:text-gray-300">praveenkumarr200025@gmail.com</span>
            </li>
            <li className="flex items-start">
              <Phone className="text-primary dark:text-primary-light mr-3 h-5 w-5" />
              <span className="text-gray-600 dark:text-gray-300">+91 9113276180</span>
            </li>
            <li className="flex items-start">
              <MapPin className="text-primary dark:text-primary-light mr-3 h-5 w-5" />
              <span className="text-gray-600 dark:text-gray-300">Bengaluru, India</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="bg-white dark:bg-gray-700">
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-4">Connect</h3>
          <div className="flex space-x-4">
            <SocialButton icon={<Link2 className="h-5 w-5" />} href="#" />
            <SocialButton icon={<Code className="h-5 w-5" />} href="#" />
            <SocialButton icon={<Briefcase className="h-5 w-5" />} href="#" />
            <SocialButton icon={<MessageSquare className="h-5 w-5" />} href="#" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
}

const SocialButton = ({ icon, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => void;
}

const ContactForm = ({ formData, handleChange, handleSubmit }: ContactFormProps) => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white dark:bg-gray-700">
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <Label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <Label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-light text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactSection;
