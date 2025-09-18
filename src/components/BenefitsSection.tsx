import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import React, { useState } from "react";

const benefits = [
  {
    emoji: "🧠",
    title: "Elite Talent. No Guesswork.",
    desc: "We handpick the top 1% from Nepal across technical skills, soft skills & startup fit.",
  },
  {
    emoji: "💸",
    title: "Massive Cost Advantage",
    desc: "Save up to 80-90% vs. local hires. Pros from $800/month. Grow lean without compromise.",
  },
  {
    emoji: "⚡️",
    title: "Speed to Hire: 14 Days or Less",
    desc: "Shortlist in 48 hours. Fully onboarded in 2 weeks, maximum.",
  },
  {
    emoji: "🔁",
    title: "Zero Risk Hiring Guarantee",
    desc: "If it's not a fit, we'll replace them free within 90 days. Your success, guaranteed.",
  },
  {
    emoji: "💰",
    title: "No Upfront Cost",
    desc: "Pay only after you onboard and are fully satisfied. Hiring made frictionless.",
  },
  {
    emoji: "🤝",
    title: "Personalized Support",
    desc: "From custom role scoping to post-hire support, we act as your extended hiring team.",
  }
];

const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="benefits" className="relative py-12 px-4">
      {/* Container with max width to prevent wide screens from breaking the layout */}
      <div className="max-w-5xl mx-auto relative">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4ff] via-white to-[#f0f4ff] opacity-70 -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            <motion.span 
              className="inline-block relative"
              whileInView={{ 
                textShadow: ["0 0 0px rgba(13, 110, 253, 0)", "0 0 5px rgba(13, 110, 253, 0.5)", "0 0 0px rgba(13, 110, 253, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Why Hireshore?
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0d6efd] via-[#6610f2] to-[#0091ff]"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.span>
          </h2>
          <p className="text-lg text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            We're not just recruiters. We're an extension of your founding team.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title} 
              variants={item} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full"
            >
              <motion.div 
                className={`${hoveredIndex === index ? 'active' : ''}`}
                animate={{
                  rotateY: hoveredIndex === index ? [0, 8, 0] : 0,
                  transition: { duration: 0.8, type: "spring" }
                }}
              >
                <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover:border-purple-200 duration-300 h-full bg-white">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-blue-50 to-indigo-50"
                      animate={{ 
                        y: [0, -5, 0],
                        boxShadow: [
                          "0 4px 10px rgba(13, 110, 253, 0.1)",
                          "0 8px 20px rgba(13, 110, 253, 0.2)",
                          "0 4px 10px rgba(13, 110, 253, 0.1)"
                        ]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 2,
                        delay: index * 0.2
                      }}
                    >
                      <motion.span 
                        className="text-4xl transform transition-transform duration-300 group-hover:scale-110"
                      >
                        {benefit.emoji}
                      </motion.span>
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0d6efd] group-hover:to-[#6610f2] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{benefit.desc}</p>
                    
                    {/* Add subtle gradient line */}
                    <motion.div 
                      className="w-0 h-0.5 bg-gradient-to-r from-blue-300 to-purple-400 mt-4"
                      animate={{ width: hoveredIndex === index ? "80%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
