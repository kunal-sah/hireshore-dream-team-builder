import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from "framer-motion";
import { Phone, Users, Headphones, Pointer } from "lucide-react";

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

  const openPopupForm = () => {
    // Open the popup form by triggering the Cal Form
    const iframe = document.getElementById('popup-shdOJ5vbCj1i9JYIQOyt');
    if (iframe) {
      // Trigger the popup form
      const event = new Event('calFormShow');
      window.dispatchEvent(event);
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

  return (
    <header ref={heroRef} className="w-full bg-gradient-to-b from-white to-[#f0f4ff] pt-28 pb-16 md:pb-20 px-4 md:px-0 relative overflow-hidden spotlight" style={{
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
        className="max-w-4xl mx-auto text-center relative z-10"
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
            Done‑For‑You {" "}
            <span 
              className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg font-bold relative inline-block"
              style={{
                boxShadow: "0 4px 15px rgba(30, 58, 138, 0.4), 0 2px 8px rgba(30, 58, 138, 0.3)",
              }}
            >
              Delivery Pods
            </span>
          </motion.span>
          <br />
          <motion.span 
            className="inline-block font-light italic text-3xl md:text-5xl mt-2"
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Scale without chaos. No hiring. No chasing freelancers.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Plug-and-play dev, design, automation & support teams that integrate in 5–7 days.
        </motion.p>
        
        {/* New single CTA button */}
        <motion.div 
          className="mb-12"
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="inline-flex items-center justify-center h-16 gradient-btn bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all hover:shadow-xl hover:shadow-blue-200/50 ripple-effect relative overflow-hidden min-w-[300px] md:min-w-[400px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(13, 110, 253, 0.3), 0 10px 10px -5px rgba(13, 110, 253, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            onMouseDown={createRipple}
            onClick={openPopupForm}
          >
            <Pointer className="mr-2 h-5 w-5" />
            <span className="relative z-10 text-base font-bold">👉 Book a Free Strategy Session</span>
            <motion.span 
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ borderRadius: 'inherit' }}
            />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="text-sm text-gray-600 max-w-2xl mx-auto"
          custom={5}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="inline-block"
            animate={{ 
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Trusted across UK, AU, EU & US — 40+ pods launched • 100+ hires • $1M+ saved.
          </motion.span>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default LandingHero;
