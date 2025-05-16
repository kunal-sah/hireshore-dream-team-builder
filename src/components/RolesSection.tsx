
import React from 'react';
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developers (React, Node, Laravel, etc.)",
  "UI/UX Designers (Figma, Webflow)",
  "Digital Marketers (SEO, Performance, Email)",
  "Virtual Assistants (Admin, Sales Support, Project Management)",
  "QA Engineers & DevOps",
  "Shopify / WordPress Experts",
  "Customer Support Reps (Email, Chat, Phone)",
  "More — tailored for your needs"
];

const RolesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.section 
      id="roles" 
      className="max-w-4xl mx-auto py-16 md:py-24 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Roles We Specialize In
      </motion.h2>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {roles.map((role) => (
          <motion.div
            key={role}
            className="w-full"
            variants={item}
          >
            <motion.div
              className="bg-white text-gray-800 px-5 py-4 rounded-lg shadow-sm border border-gray-100 text-sm md:text-base w-full text-center relative overflow-hidden group"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="relative z-10">
                {role}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/0 via-[#8b5cf6]/0 to-[#22d3ee]/0 group-hover:from-[#8b5cf6]/5 group-hover:via-[#8b5cf6]/10 group-hover:to-[#22d3ee]/5 transition-colors duration-500 ease-out" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default RolesSection;
