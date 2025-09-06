import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Clock, Shield, TrendingUp, AlertTriangle, User } from 'lucide-react';

const WhyPodsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why Pods vs Full-Time Hire?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Compare the traditional hiring approach with our managed Delivery Pod solution
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Full-Time Hire Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Full-Time Hire</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">1 person, limited skill coverage</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Hiring risk & 2-4 week ramp time</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Management overhead & training</span>
              </div>
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Single-point dependency risk</span>
              </div>
            </div>
          </motion.div>

          {/* Hireshore Delivery Pod Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-200 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hireshore Delivery Pod</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Multi-skill team (PM + ICs)</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Ships by Day 5, zero ramp time</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Managed process & built-in QA</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Flexible scale, no lock-in</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPodsSection;