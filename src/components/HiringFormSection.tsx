
import React from "react";
import { motion } from "framer-motion";

const HiringFormSection = () => {
  const scrollToBooking = () => {
    const footerCalendly = document.getElementById('booking-form');
    if (footerCalendly) {
      footerCalendly.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3), 0 8px 10px -6px rgba(139, 92, 246, 0.2)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="hire-form" className="max-w-3xl mx-auto py-16 md:py-24 px-4">
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        {/* Background gradient blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 opacity-50 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-100 to-cyan-100 opacity-50 blur-2xl"></div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's Build Your Offshore Team
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 mb-8 text-center max-w-xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Whether you're hiring a VA or a full tech squad — we've got you. Free hiring consultation, 
          shortlist in 48 hours, onboard in 14 days. <b>Pay only after onboarding.</b>
        </motion.p>
        
        <motion.div 
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg relative overflow-hidden group"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            <span className="relative z-10">Book a Free Call</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HiringFormSection;
