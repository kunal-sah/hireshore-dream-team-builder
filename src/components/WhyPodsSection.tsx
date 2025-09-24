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
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Criteria</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Full-Time Hire</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Freelancers</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Traditional Agency</th>
                  <th className="text-center py-4 px-6 font-semibold text-primary bg-primary/10">Delivery Pod (You)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}>
                    <td className="py-4 px-6 font-medium text-gray-900 border-r border-gray-100">
                      {row.criteria}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600 border-r border-gray-100">
                      {row.fullTime}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600 border-r border-gray-100">
                      {row.freelancers}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600 border-r border-gray-100">
                      {row.agency}
                    </td>
                    <td className="py-4 px-6 text-center bg-primary/10 border-l-2 border-primary/20">
                      <span className="inline-flex items-center font-medium text-primary">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        {row.pod}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-6 space-y-6">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-4">{row.criteria}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Full-Time Hire:</span>
                    <span className="text-sm font-medium text-gray-900">{row.fullTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Freelancers:</span>
                    <span className="text-sm font-medium text-gray-900">{row.freelancers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Traditional Agency:</span>
                    <span className="text-sm font-medium text-gray-900">{row.agency}</span>
                  </div>
                  <div className="flex justify-between items-center bg-primary/10 rounded px-3 py-2 border-l-2 border-primary/20">
                    <span className="text-sm font-medium text-primary">Delivery Pod:</span>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-primary" />
                      <span className="text-sm font-medium text-primary">{row.pod}</span>
                    </div>
                  </div>
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