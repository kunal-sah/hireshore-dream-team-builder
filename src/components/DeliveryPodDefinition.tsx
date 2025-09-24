import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DeliveryPodDefinition = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-8 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's a Delivery Pod?</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A Delivery Pod is a small, managed, cross-functional team (PM + specialists) that plugs into your tools and ships client work by Day 5, giving you the output of a full-time hire without the overhead.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryPodDefinition;