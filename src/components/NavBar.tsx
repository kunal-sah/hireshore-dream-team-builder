
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Headphones, Users, Phone, Palette, Code } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth mouse movement
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleMouse = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create ripple effect for buttons
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
    
    // Remove the span after the animation completes
    setTimeout(() => {
      if (circle.parentElement) {
        circle.parentElement.removeChild(circle);
      }
    }, 800);
  };

  return (
    <motion.nav 
      className={`w-full ${scrolled 
        ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg" 
        : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70"} 
        sticky top-0 z-50 border-b transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      onMouseMove={handleMouse}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img 
                src="/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png" 
                alt="HireShore Logo" 
                className="h-10 w-auto" 
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              />
            </Link>
          </motion.div>
          
          {/* Service-specific CTAs */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Cold Callers CTA - Primary */}
            <motion.button
              className="inline-flex items-center justify-center h-9 bg-gradient-to-r from-[#0d6efd] to-[#0091ff] text-white font-semibold px-3 py-2 rounded-md text-sm hover:shadow-md hover:shadow-blue-200/50 transition-all ripple-effect relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={createRipple}
              onClick={() => scrollToSection('hire-form')}
            >
              <Headphones className="mr-1.5 h-4 w-4" />
              <span className="relative z-10">Cold Callers</span>
            </motion.button>

            {/* Tech Talent CTA */}
            <motion.button
              className="inline-flex items-center justify-center h-9 border-2 border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd]/10 font-medium px-3 py-2 rounded-md text-sm transition-all ripple-effect relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={createRipple}
              onClick={() => scrollToSection('hire-form')}
            >
              <Code className="mr-1.5 h-4 w-4" />
              <span className="relative z-10">Tech</span>
            </motion.button>

            {/* Admin Talent CTA */}
            <motion.button
              className="inline-flex items-center justify-center h-9 border-2 border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd]/10 font-medium px-3 py-2 rounded-md text-sm transition-all ripple-effect relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={createRipple}
              onClick={() => scrollToSection('hire-form')}
            >
              <Users className="mr-1.5 h-4 w-4" />
              <span className="relative z-10">Admin</span>
            </motion.button>

            {/* Creative Talent CTA */}
            <motion.button
              className="inline-flex items-center justify-center h-9 border-2 border-[#0d6efd] text-[#0d6efd] hover:bg-[#0d6efd]/10 font-medium px-3 py-2 rounded-md text-sm transition-all ripple-effect relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={createRipple}
              onClick={() => scrollToSection('hire-form')}
            >
              <Palette className="mr-1.5 h-4 w-4" />
              <span className="relative z-10">Creative</span>
            </motion.button>

            {/* Book a Call - Secondary CTA */}
            <motion.button
              className="inline-flex items-center justify-center h-9 text-[#0d6efd] hover:bg-[#0d6efd]/5 font-medium px-3 py-2 rounded-md text-sm transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBooking}
            >
              <Phone className="mr-1.5 h-4 w-4" />
              <span>Book Call</span>
            </motion.button>
          </div>

          {/* Mobile Menu - Simplified */}
          <div className="flex lg:hidden items-center space-x-2">
            <motion.button
              onClick={() => scrollToSection('hire-form')}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#0d6efd] to-[#0091ff] text-white font-bold py-2 px-3 rounded-md text-sm hover:shadow-md transition-all"
            >
              <Headphones className="h-4 w-4" />
            </motion.button>
            <motion.button
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center border-2 border-[#0d6efd] text-[#0d6efd] py-2 px-3 rounded-md text-sm transition-all"
            >
              <Phone className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
