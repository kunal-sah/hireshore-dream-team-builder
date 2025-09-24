import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

const ProofSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    {
      number: "40+",
      label: "Pods launched",
      icon: TrendingUp,
      color: "from-primary to-primary-variant"
    },
    {
      number: "5+",
      label: "Years operating", 
      icon: Clock,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      number: "80%",
      label: "Avg workload reduced",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "25+",
      label: "Startups & agencies served",
      icon: Users,
      color: "from-cyan-500 to-cyan-600"
    }
  ];

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

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 120 }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Proof & Outcomes
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  variants={statVariants}
                  className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;