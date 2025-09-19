import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Headphones, Users, Phone, Palette, Code, Menu, X } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    const bookingElement = document.getElementById('book');
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
      className={`fixed top-0 left-0 right-0 w-full ${scrolled 
        ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg" 
        : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70"} 
        z-50 border-b transition-all duration-300`}
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
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/case-studies"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Case Studies
            </Link>

            <Link
              to="/about-us"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/contact-us"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contact Us
            </Link>

            {/* Book a Call - Primary CTA */}
            <motion.button
              className="inline-flex items-center justify-center h-10 bg-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg text-sm hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ripple-effect relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={createRipple}
              onClick={scrollToBooking}
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className="relative z-10">Book Free Strategy Session</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/case-studies"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  to="/about-us"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <motion.button
                  className="w-full mt-4 inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-4 py-3 rounded-lg text-base hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseDown={createRipple}
                  onClick={() => {
                    scrollToBooking();
                    setMobileMenuOpen(false);
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Strategy Session
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
