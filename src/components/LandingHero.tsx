
import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from "framer-motion";

const LandingHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useMotionValue(0);
  const heroRef = useRef<HTMLElement>(null);
  
  // Parallax effect values
  const bgY1 = useTransform(scrollY, [0, 500], [0, -50]);
  const bgY2 = useTransform(scrollY, [0, 500], [0, -80]);
  const textY = useTransform(scrollY, [0, 200], [0, -20]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const springConfig = { damping: 25, stiffness: 700 };
  const smoothY = useSpring(y, springConfig);

  const scrollToBooking = () => {
    const footerCalendly = document.querySelector('.calendly-inline-widget');
    if (footerCalendly) {
      footerCalendly.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
      
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Spotlight effect for hero section
  useEffect(() => {
    if (!heroRef.current) return;
    
    const updateSpotlight = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      heroRef.current.style.setProperty('--x', `${x}%`);
      heroRef.current.style.setProperty('--y', `${y}%`);
    };
    
    heroRef.current.addEventListener('mousemove', updateSpotlight);
    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', updateSpotlight);
      }
    };
  }, [heroRef]);
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }),
  };
  
  // Create ripple effect - Modified to handle both button and anchor elements
  const createRipple = (event: React.MouseEvent<Element>) => {
    const element = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    const rect = element.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    
    circle.classList.add('ripple');
    
    const ripple = element.querySelector('.ripple');
    if (ripple) {
      ripple.remove();
    }
    
    element.appendChild(circle);
    
    setTimeout(() => {
      if (circle.parentElement) {
        circle.parentElement.removeChild(circle);
      }
    }, 800);
  };

  // Text scramble effect
  const scrambleText = "Startup-Friendly Cost";
  
  return (
    <header ref={heroRef} className="w-full bg-gradient-to-b from-white to-[#f0f4ff] pt-28 pb-20 md:pb-32 px-4 md:px-0 relative overflow-hidden spotlight" style={{
      '--x': '50%',
      '--y': '50%',
    } as React.CSSProperties}>
      {/* Animated morphing background elements */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ opacity }}
      >
        <motion.div 
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-3xl morphing-shape" 
          style={{ y: bgY1 }}
          animate={{ 
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 opacity-20 blur-3xl morphing-shape"
          style={{ y: bgY2 }}
          animate={{
            x: [0, -15, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Add more subtle floating elements */}
        <motion.div 
          className="absolute top-[30%] right-[25%] w-24 h-24 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 opacity-10 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        <motion.div 
          className="absolute bottom-[40%] left-[20%] w-32 h-32 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-10 blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ y: textY }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-sans mb-6 text-gray-900 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block"
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Top 1% Remote Talent from Nepal
          </motion.span>
          <motion.div
            className="bg-gradient-to-r from-[#0d6efd] to-[#6610f2] inline-block text-transparent bg-clip-text mt-2 text-gradient shadow-text"
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              <motion.div
                className="inline-block text-scramble"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Adding a contrasting background behind the text to make it more visible */}
                <span className="bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">
                  {scrambleText.split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      className="text-[#0d6efd] font-bold"
                      style={{ '--i': i } as React.CSSProperties}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 mb-8"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Hireshore helps startups and agencies hire senior tech, creative, and support talent — fast, affordable, risk-free.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="inline-flex items-center justify-center h-12 gradient-btn text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all hover:shadow-xl hover:shadow-blue-200/50 ripple-effect relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(13, 110, 253, 0.3), 0 10px 10px -5px rgba(13, 110, 253, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            onMouseDown={createRipple}
            onClick={() => {
              const hireForm = document.getElementById('hire-form');
              if (hireForm) {
                hireForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">Start Hiring Now</span>
            <motion.span 
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ borderRadius: 'inherit' }}
            />
          </motion.button>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(13, 110, 253, 0.2), 0 10px 10px -5px rgba(13, 110, 253, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 border-2 border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd]/10 transition-all duration-300 ripple-effect relative overflow-hidden gradient-border"
              onClick={scrollToBooking}
              onMouseDown={createRipple}
            >
              <span className="relative z-10">Book a Free Call</span>
              <motion.span 
                className="absolute inset-0 bg-[#0d6efd]/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ borderRadius: 'inherit' }}
              />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-sm mt-4 text-gray-500 italic"
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="neon-glow inline-block"
            animate={{ 
              filter: ["drop-shadow(0 0 1px rgba(13, 110, 253, 0.5))", "drop-shadow(0 0 3px rgba(13, 110, 253, 0.7))", "drop-shadow(0 0 1px rgba(13, 110, 253, 0.5))"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            No commitments. Get a free talent shortlist in 48 hours.
          </motion.span>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default LandingHero;
