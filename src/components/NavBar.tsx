import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Headphones, Users, Phone, Palette, Code, Menu, X, ChevronDown, BookOpen, FileText, CheckSquare, Calculator, Video, MessageCircle } from "lucide-react";
import { CacheOptimizedImage } from "./CacheOptimizedImage";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth mouse movement
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const resourceItems = [
    { title: "Delivery Pods Playbook", href: "/resources/delivery-pods-playbook", icon: BookOpen },
    { title: "Creative Brief Template", href: "/resources/creative-brief-template", icon: FileText },
    { title: "Web Launch Checklist", href: "/resources/web-launch-checklist", icon: CheckSquare },
    { title: "Cost Calculator", href: "/resources/cost-calculator", icon: Calculator },
    { title: "Guides Library", href: "/resources/guides", icon: BookOpen },
    { title: "Templates Library", href: "/resources/templates", icon: FileText },
    { title: "Case Notes", href: "/resources/case-notes", icon: FileText },
    { title: "Webinars", href: "/resources/webinars", icon: Video },
    { title: "FAQs", href: "/resources/faqs", icon: MessageCircle },
  ];

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

  // Create ripple effect for buttons - optimized for performance
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    
    requestAnimationFrame(() => {
      const circle = document.createElement('span');
      const diameter = Math.max(button.offsetWidth, button.offsetHeight);
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
    });
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
              <CacheOptimizedImage 
                src="/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png" 
                alt="HireShore Logo" 
                className="h-10 w-auto" 
                width={158}
                height={40}
                displayWidth={158}
                displayHeight={40}
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
            </Link>
          </motion.div>
          
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to="/services"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Services
              </Link>

              <Link
                to="/pricing"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Pricing
              </Link>

              <Link
                to="/industries"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Industries
              </Link>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary font-medium transition-colors">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <div className="mb-4">
                      <Link
                        to="/resources"
                        className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <BookOpen className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <div className="font-medium">Resource Hub</div>
                          <div className="text-sm text-muted-foreground">All guides, templates, and tools</div>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="grid gap-1">
                      {resourceItems.slice(0, 4).map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
                        >
                          <item.icon className="h-4 w-4 mr-3 text-muted-foreground" />
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="border-t mt-2 pt-2">
                      {resourceItems.slice(4).map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
                        >
                          <item.icon className="h-4 w-4 mr-3 text-muted-foreground" />
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/about-us"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/case-studies"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Case Studies
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
                onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
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
                  to="/services"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/pricing"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/industries"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  to="/resources"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                
                {/* Mobile Resources Submenu */}
                <div className="pl-6 space-y-1">
                  {resourceItems.slice(0, 5).map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.title}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/about-us"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/case-studies"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
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
                    window.open('https://calendly.com/hireshore/30min', '_blank');
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
