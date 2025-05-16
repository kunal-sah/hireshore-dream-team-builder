
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <motion.nav 
      className={`w-full ${scrolled 
        ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg" 
        : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70"} 
        sticky top-0 z-50 border-b transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-xl font-bold text-gray-900 bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] inline-block text-transparent bg-clip-text">
              Hireshore
            </Link>
          </motion.div>
          
          <NavigationMenu>
            <NavigationMenuList>
              {["benefits", "Services", "testimonials", "booking"].map((item, index) => {
                const isDropdown = item === "Services";
                return (
                  <NavigationMenuItem key={item}>
                    {isDropdown ? (
                      <>
                        <NavigationMenuTrigger 
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 relative group"
                        >
                          Services
                          <motion.div 
                            className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8b5cf6] transform -translate-x-1/2"
                            animate={{ width: hoveredIndex === index ? "80%" : "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[200px] p-2">
                            <motion.button 
                              whileHover={{ x: 5 }}
                              onClick={() => scrollToSection('roles')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              Available Roles
                            </motion.button>
                            <motion.button 
                              whileHover={{ x: 5 }}
                              onClick={() => scrollToSection('trust')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              Trust & Safety
                            </motion.button>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <motion.button 
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => item === "booking" ? scrollToBooking() : scrollToSection(item)} 
                        className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 relative"
                        whileTap={{ scale: 0.95 }}
                      >
                        {item === "booking" ? "Book a Call" : item.charAt(0).toUpperCase() + item.slice(1)}
                        <motion.div 
                          className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8b5cf6] transform -translate-x-1/2"
                          animate={{ width: hoveredIndex === index ? "80%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('hire-form')}
              className="inline-block bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-medium py-2 px-4 rounded-full text-sm hover:shadow-md hover:shadow-purple-200/50 transition-all"
            >
              Start Hiring
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
