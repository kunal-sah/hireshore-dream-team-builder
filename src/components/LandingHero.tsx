import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from "framer-motion";
import { Phone, Users, Headphones, Pointer, ArrowDown } from "lucide-react";
import beforeAfterImage from "../assets/before-after-comparison.jpg";

const LandingHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedAudience, setSelectedAudience] = useState<'all' | 'agencies' | 'startups'>('all');
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

  const scrollToCalendly = () => {
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get subtitle text based on selected audience
  const getSubtitleText = () => {
    switch (selectedAudience) {
      case 'agencies':
        return "Agency buried in client work? Our managed Delivery Pods cut fulfillment by up to 80% in a week — no hiring, no freelancer chasing.";
      case 'startups':
        return "Building a product on a budget? Get the output of a full‑time hire with a managed, multi‑skill team that ships by Day 5.";
      default:
        return "Whether you're an agency buried in client work or a startup racing to ship—our managed Delivery Pods give you the output of a full-time hire, with multiple skills, faster onboarding, and zero hiring headaches.";
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-gray-900 leading-tight tracking-tight"
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
              className="text-lg md:text-xl text-gray-700 max-w-2xl"
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              key={selectedAudience} // Add key to re-animate when audience changes
            >
              {getSubtitleText()}
            </motion.p>
            
            <motion.div 
              className=""
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex justify-start gap-2 mb-6">
                <button 
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedAudience === 'all' 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedAudience('all')}
                >
                  All
                </button>
                <button 
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedAudience === 'agencies' 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedAudience('agencies')}
                >
                  Agencies
                </button>
                <button 
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedAudience === 'startups' 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedAudience('startups')}
                >
                  Startups
                </button>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-6"
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="inline-flex items-center justify-center h-14 gradient-btn bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg text-base transition-all hover:shadow-xl ripple-effect relative overflow-hidden min-w-[280px]"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onMouseDown={createRipple}
                onClick={scrollToCalendly}
              >
                <span className="relative z-10 text-base font-bold">Get My Delivery Pod</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ borderRadius: 'inherit' }}
                />
              </motion.button>

              <motion.button
                className="inline-flex items-center justify-center h-14 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl text-base transition-all min-w-[220px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>See How Pods Work</span>
              </motion.button>
            </motion.div>
            
            {/* Micro-reassurance */}
            <motion.div 
              className="mb-6"
              custom={6}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-sm text-gray-600 font-medium">
                No lock-in. ~30 seconds to book.
              </p>
            </motion.div>
            
          </motion.div>
          
          {/* Right side - Before/After Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <img 
                src={beforeAfterImage} 
                alt="Before: Chaotic sticky notes and disorder. After: Organized kanban board with clear progress tracking"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-full text-sm font-medium">
                From chaos to clarity in 7 days.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default LandingHero;
