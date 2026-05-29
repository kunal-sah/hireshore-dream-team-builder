import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from "framer-motion";
import { Phone, Users, Headphones, Pointer, ArrowDown, Star } from "lucide-react";
import YouTubeFacade from "./ui/youtube-facade";
import { trackCTAClick } from "@/utils/utmTracking";

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
    // Trigger Calendly loading before scrolling
    document.dispatchEvent(new CustomEvent('calendly-load'));
    trackCTAClick('hero_get_delivery_pod', 'hero_section');
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get subtitle text based on selected audience
  const getSubtitleText = () => {
    switch (selectedAudience) {
      case 'agencies':
        return "Agency buried in client work? Hire vetted Nepal-based specialists or a full Delivery Pod — fully managed, 70–80% lower cost than local hires, no freelancer chasing.";
      case 'startups':
        return "Building on a budget? Get senior offshore talent or a cross-functional pod from Nepal — same expertise, a fraction of the cost, fully managed by us.";
      default:
        return "Managed offshore teams from Nepal. Dedicated specialists or full cross-functional pods — same senior expertise as US/UK/AU hires, 70–80% lower cost, zero hiring headaches.";
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
    <header ref={heroRef} className="w-full bg-background pt-16 sm:pt-28 pb-10 sm:pb-16 md:pb-20 px-4 relative overflow-hidden border-b border-border">


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] sm:min-h-[600px]">
          {/* Left side - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow trust badge */}
            <motion.div
              className="flex items-center gap-3 flex-wrap"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex -space-x-3">
                {[
                  "/lovable-uploads/dave-cannell.png",
                  "/lovable-uploads/john-bromley.png",
                  "/lovable-uploads/8d290392-3676-42f7-91a8-d1bb48f6fca7.png",
                  "/lovable-uploads/d4be4a5a-7f58-4205-b403-c137a43e5d8b.png",
                  "/lovable-uploads/fbdcffaa-5b42-4efe-ae99-e7cec23a54c8.png",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm bg-gray-100"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Trusted by 25+ founders &amp; agencies
                </p>
              </div>
            </motion.div>

            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-[1.1] sm:leading-[1.05] tracking-tight text-balance">
              <motion.span 
                className="inline-block"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Senior offshore teams from Nepal. <span className="text-primary-variant">70–80% less cost.</span>
              </motion.span>
            </h1>

            {/* Audience tabs — above subtitle so users filter before reading */}
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap justify-start gap-2">
                {(['all','agencies','startups'] as const).map((aud) => (
                  <button
                    key={aud}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      selectedAudience === aud
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedAudience(aud)}
                  >
                    {aud === 'all' ? 'All' : aud === 'agencies' ? 'Agencies' : 'Startups'}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-[15px] sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl break-words"
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              key={selectedAudience}
            >
              {getSubtitleText()}
            </motion.p>


            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6"
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="relative overflow-hidden inline-flex items-center justify-center h-12 sm:h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md text-sm sm:text-base transition-colors w-full sm:min-w-[280px]"
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
                className="relative overflow-hidden inline-flex items-center justify-center h-12 sm:h-14 border border-border text-foreground hover:bg-secondary font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md text-sm sm:text-base transition-colors w-full sm:min-w-[220px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick('hero_see_how_pods_work', 'hero_section');
                  window.location.href = '/delivery-pods';
                }}
              >
                <span>How it works</span>
              </motion.button>
            </motion.div>
            
            {/* Micro-reassurance (trust badge moved to eyebrow above) */}
            <motion.div 
              className="mb-2"
              custom={6}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-sm text-gray-600 font-medium">
                Paid trial available · 1–2 weeks, no long-term commitment · ~30 seconds to book.
              </p>
            </motion.div>
            
          </motion.div>
          
          {/* Right side - Video */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative bg-white rounded-lg border border-border shadow-sm p-3">
              <YouTubeFacade
                videoId="kdXYdRxr4qA"
                title="Stop Chasing Updates: Organize Tasks & Teams in One Place"
                className="aspect-video bg-gray-100 rounded-xl overflow-hidden"
              />
              <p className="mt-3 text-center text-sm font-medium text-gray-700">
                Stop chasing updates. Get organized.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default LandingHero;
