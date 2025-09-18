import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, Phone, Code, Pen, ShoppingCart, MessageSquare, User, Headphones, Search, FileEdit, Palette } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const techRoles = [
    { 
      title: "Full Stack Developers", 
      icon: <Code className="w-10 h-10 text-[#0d6efd]" />,
      description: "Expert developers who can handle both front-end and back-end development needs."
    },
    { 
      title: "Graphics Designers", 
      icon: <Palette className="w-10 h-10 text-[#0d6efd]" />,
      description: "Creative professionals who design stunning visual content and brand materials."
    },
    { 
      title: "UI/UX Designers", 
      icon: <Pen className="w-10 h-10 text-[#0d6efd]" />,
      description: "Creative professionals who craft beautiful, user-friendly interfaces and experiences."
    },
    { 
      title: "SEO Specialists", 
      icon: <Search className="w-10 h-10 text-[#0d6efd]" />,
      description: "Experts who optimize your online presence to improve visibility and rankings."
    },
    { 
      title: "Content Creators", 
      icon: <FileEdit className="w-10 h-10 text-[#0d6efd]" />,
      description: "Talented writers and creators who develop engaging content for your audience."
    },
    { 
      title: "Shopify & WordPress Developers", 
      icon: <ShoppingCart className="w-10 h-10 text-[#0d6efd]" />,
      description: "Specialized developers who build and enhance e-commerce and CMS platforms."
    }
  ];
  
  const supportRoles = [
    { 
      title: "Virtual Assistants", 
      icon: <User className="w-10 h-10 text-[#0d6efd]" />,
      description: "Remote professionals who handle administrative tasks and support business operations."
    },
    { 
      title: "Call Answering Services", 
      icon: <Phone className="w-10 h-10 text-[#0d6efd]" />,
      description: "Dedicated staff who professionally handle incoming calls for your business."
    },
    { 
      title: "Web Chat Support", 
      icon: <MessageSquare className="w-10 h-10 text-[#0d6efd]" />,
      description: "Real-time chat agents who provide immediate assistance to website visitors."
    },
    { 
      title: "Appointment Setters", 
      icon: <Calendar className="w-10 h-10 text-[#0d6efd]" />,
      description: "Specialists who schedule and manage meetings and appointments efficiently."
    },
    { 
      title: "24/7 Customer Support Agents", 
      icon: <Headphones className="w-10 h-10 text-[#0d6efd]" />,
      description: "Round-the-clock support team ensuring customer queries are addressed anytime."
    },
    { 
      title: "Business Continuity Assistants", 
      icon: <Briefcase className="w-10 h-10 text-[#0d6efd]" />,
      description: "Professionals who ensure your business operations continue running smoothly."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Delivery Pods We Offer
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pre-vetted, white-labeled pods for web, design, automation, marketing, and support - fully managed so you stay focused on growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Admin & Support Roles Column - Now on the LEFT */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 bg-blue-50 rounded-full p-3">
                <Users className="w-8 h-8 text-[#0d6efd]" />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-gray-900">☎️ Admin & Support Roles</h3>
            </div>
            
            <motion.div
              className="space-y-6 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {supportRoles.map((role, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start" 
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mt-1">{role.icon}</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{role.title}</h4>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
          
          {/* Tech & Creative Roles Column - Now on the RIGHT */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 bg-blue-50 rounded-full p-3">
                <Briefcase className="w-8 h-8 text-[#0d6efd]" />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-gray-900">🛠️ Tech & Creative Roles</h3>
            </div>
            
            <motion.div
              className="space-y-6 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techRoles.map((role, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start" 
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 mt-1">{role.icon}</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{role.title}</h4>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
        
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-[#0d6efd] to-[#0091ff] text-white font-medium py-6 px-8 rounded-full text-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
              onClick={() => {
                const element = document.getElementById('book');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              👉 Book a Free Strategy Session
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
