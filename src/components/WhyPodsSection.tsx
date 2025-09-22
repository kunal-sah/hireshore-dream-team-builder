import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Clock, Shield, TrendingUp, AlertTriangle, User, CheckCircle } from 'lucide-react';

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

  const comparisonData = [
    {
      criteria: "Skill Coverage",
      fullTime: "1 person",
      freelancers: "Fragmented",
      agency: "Good but siloed",
      pod: "Multi-skill, stable team",
      podAdvantage: true
    },
    {
      criteria: "Management",
      fullTime: "You",
      freelancers: "You (heavy)",
      agency: "Shared/variable",
      pod: "Included (PM + QA)",
      podAdvantage: true
    },
    {
      criteria: "Speed to Start",
      fullTime: "4–8 weeks",
      freelancers: "1–2 weeks",
      agency: "2–4 weeks",
      pod: "5 days to ship",
      podAdvantage: true
    },
    {
      criteria: "Risk",
      fullTime: "High",
      freelancers: "High inconsistency",
      agency: "Contract lock-in",
      pod: "Low, flexible scale",
      podAdvantage: true
    },
    {
      criteria: "Cost Efficiency",
      fullTime: "Salary + overhead",
      freelancers: "Per task",
      agency: "Retainer/mark-ups",
      pod: "Full-time output for less",
      podAdvantage: true
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
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
            Why a Pod Instead of a Full-Time Hire or Freelancers?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            See how Delivery Pods compare to traditional staffing approaches
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Column headers */}
          <div className="grid grid-cols-5 gap-2 md:gap-4 py-2 px-4 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200 mb-2">
            <div>Method</div>
            <div className="text-center">Full-Time</div>
            <div className="text-center">Freelancers</div>
            <div className="text-center">Agency</div>
            <div className="text-center text-blue-600">Delivery Pod</div>
          </div>
          
          {/* Simplified comparison grid */}
          <div className="grid gap-2 p-4">
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-5 gap-2 md:gap-4 py-3 px-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="font-medium text-gray-900 text-sm md:text-base">{row.criteria}</div>
                <div className="text-center text-xs md:text-sm text-gray-600">{row.fullTime}</div>
                <div className="text-center text-xs md:text-sm text-gray-600">{row.freelancers}</div>
                <div className="text-center text-xs md:text-sm text-gray-600">{row.agency}</div>
                <div className="text-center bg-blue-50 rounded px-2 py-1">
                  <span className="text-xs md:text-sm font-medium text-blue-700 flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">{row.pod}</span>
                    <span className="sm:hidden">✓</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPodsSection;