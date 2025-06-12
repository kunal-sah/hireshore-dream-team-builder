
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ReferralDialog from "./ReferralDialog";

const SiteFooter = () => {
  const [isReferralDialogOpen, setIsReferralDialogOpen] = useState(false);

  // Add useEffect to load the ParraCity Web script when component mounts
  useEffect(() => {
    // Add ParraCity Web script
    const script = document.createElement('script');
    script.src = "https://api.parracityweb.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Add LeadConnector chat widget script
    const chatScript = document.createElement('script');
    chatScript.src = "https://widgets.leadconnectorhq.com/loader.js";
    chatScript.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    chatScript.setAttribute('data-widget-id', '68298cb376ba227d5563113e');
    document.body.appendChild(chatScript);

    return () => {
      // Clean up scripts when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.body.contains(chatScript)) {
        document.body.removeChild(chatScript);
      }
    };
  }, []);

  const openPopupForm = () => {
    // Open the popup form by triggering the Cal Form
    const iframe = document.getElementById('popup-shdOJ5vbCj1i9JYIQOyt');
    if (iframe) {
      // Trigger the popup form
      const event = new Event('calFormShow');
      window.dispatchEvent(event);
    }
  };

  const footerLinks = [
    { icon: "📞", text: "Book a free strategy call", action: openPopupForm },
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
        />
        
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
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        {/* Refer a Friend button - visible in the footer */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            onClick={() => setIsReferralDialogOpen(true)}
            className="bg-[#f97316] hover:bg-[#ea580c] px-8 py-6 text-base rounded-lg"
            size="lg"
          >
            <UserPlus className="mr-2" />
            Refer a friend - Earn $100
          </Button>
        </motion.div>
        
        {/* ParraCity Web booking widget */}
        <motion.div 
          id="booking-form" 
          className="mb-12 shadow-lg rounded-xl overflow-hidden bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <iframe 
            src="https://api.parracityweb.com/widget/booking/2bnjaAemKcwV8XCygK9C" 
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "750px" }} 
            scrolling="no" 
            id="2bnjaAemKcwV8XCygK9C_1749702216266"
            title="Booking Form"
          />
        </motion.div>

        {/* Standard Footer Format */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info Column */}
            <motion.div 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-medium text-gray-800 mb-4">🤝 Backed by Real People, Real Results</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Hireshore is founded by a global team in Nepal, dedicated to helping startups and agencies grow lean and smart.
                You're not talking to a faceless recruiter — you're partnering with a founder who's built and scaled remote teams.
              </p>
            </motion.div>
            
            {/* Company Contact Column */}
            <motion.div
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-medium text-gray-800 mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Hireshore, LLC</p>
                  <p className="text-sm text-gray-600">800 North King Street</p>
                  <p className="text-sm text-gray-600">Wilmington, DE 19801 US</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">HQ Office</p>
                  <p className="text-sm text-gray-600">Nepal, Lalitpur, Krishna Galli</p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Person Column */}
            <motion.div
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-medium text-gray-800 mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Representative</p>
                  <p className="text-sm text-gray-600">Kunal Sah</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone & WhatsApp</p>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="tel:+9779819074501" 
                      className="text-sm text-[#7346e6] hover:underline flex items-center"
                    >
                      <Phone size={16} className="mr-1" />
                      +977 981 9074501
                    </a>
                    <a 
                      href="https://wa.me/9779819074501" 
                      className="text-sm text-[#7346e6] hover:underline flex items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageSquare size={16} className="mr-1" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <a href="mailto:kunal@hireshore.co" className="text-sm text-[#7346e6] hover:underline">kunal@hireshore.co</a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div className="flex justify-center mt-8 space-x-6">
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
                  className="text-[#7346e6] font-medium hover:underline flex items-center group"
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
          </div>
          
          {/* Copyright */}
          <motion.div 
            className="text-sm text-center text-gray-400 pt-8 mt-8 border-t border-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © {new Date().getFullYear()} Hireshore. All rights reserved.
          </motion.div>
        </div>
      </div>

      {/* Referral Dialog */}
      <ReferralDialog open={isReferralDialogOpen} onOpenChange={setIsReferralDialogOpen} />
    </footer>
  );
};

export default SiteFooter;
