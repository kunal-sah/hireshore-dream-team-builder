import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Track mouse movement for card movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized to -1 to 1)
    const moveX = (e.clientX - centerX) / (rect.width / 2) * 5; // Max 5px movement
    const moveY = (e.clientY - centerY) / (rect.height / 2) * 5; // Max 5px movement
    
    x.set(moveX);
    y.set(moveY);
  };
  
  // Smooth out the mouse movement with springs
  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  
  return (
    <motion.section 
      id="roles" 
      className="relative py-20 md:py-32 px-4"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Container with max width to prevent wide screens from breaking the layout */}
      <div className="max-w-4xl mx-auto relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/30 to-white opacity-70 -z-10"></div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          <motion.span 
            className="relative inline-block text-gradient"
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          >
            Roles We Specialize In
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0d6efd] via-[#6610f2] to-[#0091ff]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.span>
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={role}
              className="w-full perspective"
              variants={item}
              whileHover={{ 
                z: 20,
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <motion.div
                className="bg-white text-gray-800 px-5 py-4 rounded-lg shadow-sm border border-gray-100 text-sm md:text-base w-full text-center relative overflow-hidden group tilt spotlight"
                style={{ 
                  x: index % 2 === 0 ? smoothX : useTransform(smoothX, v => -v),
                  y: index % 3 === 0 ? smoothY : useTransform(smoothY, v => -v),
                  rotateX: useTransform(smoothY, [-5, 5], [2, -2]),
                  rotateY: useTransform(smoothX, [-5, 5], [-2, 2]),
                }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
                  scale: 1.03,
                  backgroundColor: "rgba(248, 250, 252, 1)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17
                }}
                animate={{
                  background: activeIndex === index 
                    ? "linear-gradient(120deg, rgba(248, 250, 252, 1), rgba(239, 246, 255, 0.8), rgba(248, 250, 252, 1))" 
                    : "rgba(255, 255, 255, 1)"
                }}
              >
                <div className="relative z-10 tilt-inner">
                  {role}
                </div>
                
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#0d6efd]/0 via-[#0d6efd]/0 to-[#0091ff]/0 group-hover:from-[#0d6efd]/5 group-hover:via-[#6610f2]/10 group-hover:to-[#0091ff]/5" 
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Glowing border on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  initial={{ boxShadow: "0 0 0 0px rgba(13, 110, 253, 0)" }}
                  whileHover={{ 
                    boxShadow: "0 0 0 2px rgba(13, 110, 253, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Add floating decorative elements */}
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-xl opacity-50 -z-5"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-100/40 to-indigo-100/40 blur-xl opacity-50 -z-5"
          animate={{
            y: [0, 12, 0],
            x: [0, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
    </motion.section>
  );
};

export default RolesSection;
