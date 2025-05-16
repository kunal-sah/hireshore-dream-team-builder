
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SiteFooter = () => {
  // Add useEffect to load the Calendly script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const footerLinks = [
    { icon: "📞", text: "Book a free strategy call", action: () => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: "📧", text: "kunal@hireshore.co", href: "mailto:kunal@hireshore.co" },
    { icon: "🌐", text: "www.hireshore.co", href: "https://www.hireshore.co", external: true },
  ];

  return (
    <footer className="w-full py-12 md:py-16 bg-gradient-to-t from-[#e7e9f9] to-transparent mt-8 md:mt-12 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute -bottom-20 left-1/4 w-64 h-64 rounded-full bg-purple-200 opacity-10 blur-3xl"
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute -bottom-10 right-1/4 w-80 h-80 rounded-full bg-blue-200 opacity-10 blur-3xl"
          animate={{ 
            y: [0, -15, 0], 
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 10, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        {/* Calendly booking widget - Updated with better fit */}
        <motion.div 
          id="booking-form" 
          className="mb-12 shadow-md rounded-xl overflow-hidden bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <div 
            className="calendly-inline-widget w-full" 
            data-url="https://calendly.com/hireshore/30min?email_notifications[email]=wehireshore@gmail.com&hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=7346e6" 
            style={{ minWidth: "320px", height: "630px" }}
          />
        </motion.div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
          <motion.div 
            className="text-gray-600 text-left max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base font-medium mb-2">🤝 Backed by Real People, Real Results</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Hireshore is founded by a global team in Nepal, dedicated to helping startups and agencies grow lean and smart.<br className="hidden md:block" />
              You're not talking to a faceless recruiter — you're partnering with a founder who's built and scaled remote teams.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-start md:items-end gap-3 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {footerLinks.map((link, index) => (
              link.href ? (
                <motion.a
                  key={link.text}
                  className="text-gray-500 hover:text-[#7346e6] hover:underline flex items-center group"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  whileHover={{ x: link.external ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.span 
                    className="mr-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index, 
                      repeat: Infinity, 
                      repeatDelay: 5 
                    }}
                  >
                    {link.icon}
                  </motion.span> 
                  <span className="transition-all duration-300">{link.text}</span>
                </motion.a>
              ) : (
                <motion.button
                  key={link.text}
                  className="text-[#7346e6] font-bold hover:underline flex items-center group"
                  onClick={link.action}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.span 
                    className="mr-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatDelay: 5 
                    }}
                  >
                    {link.icon}
                  </motion.span> 
                  {link.text}
                </motion.button>
              )
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-xs text-center text-gray-400 pt-8 mt-6 border-t border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Hireshore. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default SiteFooter;
