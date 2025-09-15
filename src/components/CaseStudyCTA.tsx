import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

const CaseStudyCTA = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById('book');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on case study page, navigate to home page booking section
      window.location.href = '/#book';
    }
  };

  return (
    <motion.section 
      className="bg-gradient-to-r from-primary/10 to-accent py-16 mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to Scale Your Business?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get a custom strategy session and discover how our dedicated pods can transform your business operations.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-lg text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-3 h-5 w-5" />
            Book Your Free Strategy Session
            <ArrowRight className="ml-3 h-5 w-5" />
          </motion.button>
        </motion.div>

        <motion.p 
          className="text-sm text-muted-foreground mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          No commitment required • 30-minute consultation • Custom solution designed for you
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CaseStudyCTA;