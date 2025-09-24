import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Settings, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      day: "Day 1–2",
      title: "Intake",
      description: "Audit deliverables & tools; define success metrics and owners",
      icon: Search,
      color: "from-primary to-primary-variant"
    },
    {
      day: "Day 3–4", 
      title: "Spin-Up",
      description: "Stand up pod, set boards, align cadence",
      icon: Settings,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      day: "Day 5",
      title: "Ship", 
      description: "Deliver + daily updates, weekly scorecards, QA baked in",
      icon: Rocket,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
          >
            From intake to delivery in just 5 days - here's our proven process
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center relative group"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </motion.div>
                  
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                    <div className="text-xs sm:text-sm font-semibold text-primary mb-2">{step.day}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;