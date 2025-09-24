import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Clock, Globe, CheckCircle, Settings, Target } from 'lucide-react';

const PodAtAGlance = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Users,
      label: 'Team',
      value: 'PM + multi-skill specialists',
      color: 'from-primary to-primary-variant'
    },
    {
      icon: Clock,
      label: 'Start',
      value: 'Day 1–2 Intake → Day 3–4 Spin-Up → Day 5 Ship',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      label: 'Capacity',
      value: 'Full-time output (flexible month-to-month)',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      label: 'Overlap',
      value: '2–4 hrs/day in your time zone',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CheckCircle,
      label: 'Quality',
      value: 'Managed process & QA included',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Settings,
      label: 'Stack',
      value: 'We use your SOPs, tools, and brand voice',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pod at a Glance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick snapshot of what you get with a managed Delivery Pod
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-subtle rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.label}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodAtAGlance;