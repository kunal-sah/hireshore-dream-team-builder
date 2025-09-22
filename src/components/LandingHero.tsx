import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { Phone, Users, Headphones, Pointer, ArrowDown } from "lucide-react";
import { LazyYouTube } from './LazyYouTube';

// Defer non-critical image loading for better FCP
const beforeAfterImage = "/src/assets/before-after-comparison.jpg";

const LandingHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedAudience, setSelectedAudience] = useState<'all' | 'agencies' | 'startups'>('all');
  const [imageLoaded, setImageLoaded] = useState(false);
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
        return "Agency buried in client work? Our managed Delivery Pods cut fulfillment by up to 80% in a week - no hiring, no freelancer chasing.";
      case 'startups':
        return "Building a product on a budget? Get the output of a full‑time hire with a managed, multi‑skill team that ships by Day 5.";
      default:
        return "Whether you're an agency buried in client work or a startup racing to ship, our managed Delivery Pods give you the output of a full-time hire, with multiple skills, faster onboarding, and zero hiring headaches.";
    }
  };

  // Preload the hero image for faster display - defer to improve FID
  useEffect(() => {
    const deferImageLoad = () => {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = beforeAfterImage;
    };
    
    // Defer image preloading until browser is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(deferImageLoad, { timeout: 1000 });
    } else {
      setTimeout(deferImageLoad, 50);
    }
  }, []);

  // Create ripple effect - Modified to handle both button and anchor elements, optimized for performance
  const createRipple = (event: React.MouseEvent<Element>) => {
    const element = event.currentTarget;
    
    requestAnimationFrame(() => {
      const circle = document.createElement('span');
      
      // Use cached or estimated dimensions to avoid layout reads
      const elementRect = element.getBoundingClientRect();
      const diameter = Math.max(elementRect.width, elementRect.height);
      const radius = diameter / 2;
      
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - elementRect.left - radius}px`;
      circle.style.top = `${event.clientY - elementRect.top - radius}px`;
      
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
    });
  };

  return (
    <header 
      ref={heroRef} 
      className="hero-container w-full bg-gradient-to-b from-white to-[#f0f4ff] pt-20 sm:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 relative overflow-hidden spotlight" 
      data-critical="true"
      style={{
        '--x': '50%',
        '--y': '50%',
      } as React.CSSProperties}
    >
      {/* Simplified background elements for Speed Index */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-3xl below-fold"
        />
        <div 
          className="absolute bottom-20 right-[15%] w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-200 opacity-20 blur-3xl below-fold"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] sm:min-h-[600px]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-gray-900 leading-tight tracking-tight hero-text hero-text-priority"
              data-critical="true"
            >
              <span className="inline-block">
                Get Full-Time Capacity Without the Full-Time Overhead
              </span>
            </h1>
            
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl hero-subtitle"
              data-critical="true"
            >
              {getSubtitleText()}
            </p>
            
            <div className="">
              <div className="flex flex-wrap justify-start gap-2 mb-6">
                <button 
                  className={`px-4 sm:px-6 py-4 min-h-[44px] rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    selectedAudience === 'all' 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedAudience('all')}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  All
                </button>
                <button 
                  className={`px-4 sm:px-6 py-4 min-h-[44px] rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    selectedAudience === 'agencies' 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedAudience('agencies')}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  Agencies
                </button>
                <button 
                  className={`px-4 sm:px-6 py-4 min-h-[44px] rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    selectedAudience === 'startups' 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedAudience('startups')}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  Startups
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <button
                className="btn-primary inline-flex items-center justify-center h-12 sm:h-14 gradient-btn bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg text-sm sm:text-base transition-all hover:shadow-xl ripple-effect relative overflow-hidden w-full sm:min-w-[280px]"
                onMouseDown={createRipple}
                onClick={scrollToCalendly}
              >
                <span className="relative z-10 text-base font-bold">Get My Delivery Pod</span>
              </button>

              <button
                className="inline-flex items-center justify-center h-12 sm:h-14 min-h-[48px] border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 rounded-xl text-sm sm:text-base transition-all w-full sm:min-w-[220px]"
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{ minHeight: '48px' }}
              >
                <span>See How Pods Work</span>
              </button>
            </div>
            
            {/* Micro-reassurance */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 font-medium">
                No lock-in. ~30 seconds to book.
              </p>
            </div>
          </div>
          
          {/* Right side - Video with lazy loading */}
          <motion.div 
            className="relative below-fold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-4">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative">
                <LazyYouTube
                  videoId="kdXYdRxr4qA"
                  title="Stop Chasing Updates: Organize Tasks & Teams in One Place"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-full text-sm font-medium">
                Stop chasing updates. Get organized.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default LandingHero;