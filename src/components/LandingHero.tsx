import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from "framer-motion";
import { Phone, Users, Headphones, Pointer, ArrowDown } from "lucide-react";
import heroImage from "../assets/hero-before-after.jpg";

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
            Get Full-Time Capacity Without the Full-Time Overhead
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Whether you're an agency buried in client work or a startup racing to ship—our managed Delivery Pods give you the output of a full-time hire, with multiple skills, faster onboarding, and zero hiring headaches.
        </motion.p>
        
        {/* Hero Visual */}
        <motion.div 
          className="mb-8"
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={heroImage} 
              alt="Before and After: From chaos to clarity with Hireshore Delivery Pods"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-2 rounded-full text-sm font-medium">
              From chaos to clarity in 7 days
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="inline-flex items-center justify-center h-16 gradient-btn bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all hover:shadow-xl hover:shadow-blue-200/50 ripple-effect relative overflow-hidden min-w-[300px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(13, 110, 253, 0.3), 0 10px 10px -5px rgba(13, 110, 253, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            onMouseDown={createRipple}
            onClick={openPopupForm}
          >
            <Pointer className="mr-2 h-5 w-5" />
            <span className="relative z-10 text-base font-bold">Book a Free Strategy Session</span>
            <motion.span 
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ borderRadius: 'inherit' }}
            />
          </motion.button>

          <motion.button
            className="inline-flex items-center justify-center h-16 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl text-lg transition-all min-w-[250px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('how-it-works');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            <span>See How Pods Work</span>
          </motion.button>
        </motion.div>

        {/* Micro-reassurance */}
        <motion.div 
          className="mb-8"
          custom={5}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm text-gray-600 font-medium">
            No lock-in. ~30 seconds to book.
          </p>
        </motion.div>
        
        {/* Trust row */}
        <motion.div 
          className="text-sm text-gray-600 max-w-2xl mx-auto"
          custom={6}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="inline-block font-medium"
            animate={{ 
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Trusted by 25+ global startups & agencies
          </motion.span>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default LandingHero;
