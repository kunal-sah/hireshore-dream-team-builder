
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { trackCTAClick, getCurrentPagePath } from "@/utils/utmTracking";

const HiringFormSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const scrollToCalendly = () => {
    trackCTAClick('hiring_form_book_call', getCurrentPagePath());
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mouse tracking for magnetic button effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };
  
  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
  // Spring configs for smoother motion
  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(13, 110, 253, 0.3), 0 8px 10px -6px rgba(13, 110, 253, 0.2)"
    },
    tap: { scale: 0.95 }
  };
  
  // Staggered animation for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };
  
  // Create ripple effect
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    
    circle.classList.add('ripple');
    
    const ripple = button.querySelector('.ripple');
    if (ripple) {
      ripple.remove();
    }
    
    button.appendChild(circle);
    
    setTimeout(() => {
      if (circle.parentElement) {
        circle.parentElement.removeChild(circle);
      }
    }, 800);
  };

  return (
    <section 
      id="hire-form" 
      ref={ref} 
      className="max-w-3xl mx-auto py-16 md:py-24 px-4"
    >
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        {/* Animated background gradient blobs */}
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-blue-100 opacity-50 blur-2xl"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 opacity-50 blur-2xl"
          animate={{ 
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            duration: 15, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-4 text-center relative z-10"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Build Your Offshore Team
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mb-8 text-center max-w-xl mx-auto relative z-10"
          >
            Whether you're hiring a VA or a full tech squad - we've got you. Free hiring consultation, 
            shortlist in 48 hours, onboard in 14 days. <b>Pay only after onboarding.</b>
          </motion.p>
          
          <motion.div 
            className="flex justify-center relative z-10"
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMouse}
          >
            <motion.button 
              onClick={scrollToCalendly}
              className="bg-gradient-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg relative overflow-hidden group ripple-effect magnetic-button"
              style={{
                x: smoothX.get() * 0.1,
                y: smoothY.get() * 0.1
              }}
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onMouseDown={createRipple}
            >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" 
              />
              <span className="relative z-10">Book a Free Call</span>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ boxShadow: "0 0 0 0 rgba(13, 110, 253, 0)" }}
                whileHover={{ 
                  boxShadow: "0 0 15px 3px rgba(13, 110, 253, 0.6)",
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HiringFormSection;
