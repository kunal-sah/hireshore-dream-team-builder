
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LandingHero = () => {
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
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <header className="w-full bg-gradient-to-b from-white to-[#f0f4ff] pt-28 pb-20 md:pb-32 px-4 md:px-0 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl animate-pulse" 
             style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl animate-pulse"
             style={{animationDuration: '10s', animationDelay: '1s'}}></div>
      </div>

      <motion.div 
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-sans mb-6 text-gray-900 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Top 1% Remote Talent from Nepal
          <span className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] inline-block text-transparent bg-clip-text"> Startup-Friendly Cost</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hireshore helps startups and agencies hire senior tech, creative, and support talent — fast, affordable, risk-free.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#hire-form"
            className="inline-flex items-center justify-center h-12 bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all hover:shadow-xl hover:shadow-purple-200/50"
          >
            Start Hiring Now
          </motion.a>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 border-2 border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300"
              onClick={scrollToBooking}
            >
              Book a Free Call
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-sm mt-4 text-gray-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          No commitments. Get a free talent shortlist in 48 hours.
        </motion.div>
      </motion.div>
    </header>
  );
};

export default LandingHero;
