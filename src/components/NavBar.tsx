import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import MegaMenu from './MegaMenu';
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

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

  const handleMenuEnter = (menuType: string) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setActiveMenu(menuType);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu('');
    }, 5000); // Extended delay to prevent accidental closure while navigating to cards
    setMenuTimeout(timeout);
  };

  const handleMegaMenuEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
  };

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu('');
    }, 250); // Close shortly after actually leaving the mega menu
    setMenuTimeout(timeout);
  };

  const closeMegaMenu = () => {
    setActiveMenu('');
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
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
      className={`fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-50 border-b transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <div className="hidden lg:flex items-center space-x-1 relative">
            {/* Solutions */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuEnter('solutions')}
              onMouseLeave={handleMenuLeave}
            >
              {/* Hover buffer area above */}
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent pointer-events-auto"></div>
              
              <Link
                to="/solutions"
                className="flex items-center px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Pods/Services */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuEnter('services')}
              onMouseLeave={handleMenuLeave}
            >
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent pointer-events-auto"></div>
              
              <Link
                to="/services"
                className="flex items-center px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Pod
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Staffing */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuEnter('staffing')}
              onMouseLeave={handleMenuLeave}
            >
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent pointer-events-auto"></div>
              
              <Link
                to="/staffing"
                className="flex items-center px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Staffing
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Industries */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuEnter('industries')}
              onMouseLeave={handleMenuLeave}
            >
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent pointer-events-auto"></div>
              
              <Link
                to="/industries"
                className="flex items-center px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              className="px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
            >
              Pricing
            </Link>

            {/* Resources */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuEnter('resources')}
              onMouseLeave={handleMenuLeave}
            >
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent pointer-events-auto"></div>
              
              <Link
                to="/resources"
                className="flex items-center px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Company */}
            <div
              className="relative group"
              onMouseEnter={() => handleMenuEnter('company')}
              onMouseLeave={handleMenuLeave}
            >
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent pointer-events-auto"></div>
              
              <Link
                to="/about-us"
                className="flex items-center px-4 py-2 text-gray-900 hover:text-primary font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Book a Call - Primary CTA */}
            <motion.button
              className="ml-4 inline-flex items-center justify-center bg-primary text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Book a Call
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
                  to="/solutions"
                  className="block px-3 py-2 rounded-md text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pod
                </Link>
                <Link
                  to="/staffing"
                  className="block px-3 py-2 rounded-md text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Staffing
                </Link>
                <Link
                  to="/industries"
                  className="block px-3 py-2 rounded-md text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  to="/pricing"
                  className="block px-3 py-2 rounded-md text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/resources"
                  className="block px-3 py-2 rounded-md text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  to="/about-us"
                  className="block px-3 py-2 rounded-md text-base font-semibold text-gray-900 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company
                </Link>
                
                <motion.button
                  className="w-full mt-4 inline-flex items-center justify-center bg-primary text-white font-semibold px-4 py-3 rounded-lg text-base hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.open('https://calendly.com/hireshore/30min', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Call
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mega Menu */}
      <div
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMegaMenuLeave}
      >
        <MegaMenu
          isOpen={!!activeMenu}
          menuType={activeMenu}
          onClose={closeMegaMenu}
          onHoverEnter={handleMegaMenuEnter}
          onHoverLeave={handleMegaMenuLeave}
        />
      </div>
    </motion.nav>
  );
};

export default NavBar;
