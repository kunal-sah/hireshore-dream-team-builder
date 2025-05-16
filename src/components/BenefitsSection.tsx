
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const benefits = [
  {
    emoji: "🧠",
    title: "Elite Talent. No Guesswork.",
    desc: "We handpick the top 1% from Nepal across technical skills, soft skills & startup fit.",
  },
  {
    emoji: "💸",
    title: "Massive Cost Advantage",
    desc: "Save up to 80–90% vs. local hires. Pros from $800/month. Grow lean — without compromise.",
  },
  {
    emoji: "⚡️",
    title: "Speed to Hire: 14 Days or Less",
    desc: "Shortlist in 48 hours. Fully onboarded in 2 weeks, maximum.",
  },
  {
    emoji: "🔁",
    title: "Zero Risk Hiring Guarantee",
    desc: "If it's not a fit, we'll replace them free — within 90 days. Your success, guaranteed.",
  },
  {
    emoji: "💰",
    title: "No Upfront Cost",
    desc: "Pay only after you onboard and are fully satisfied. Hiring made frictionless.",
  },
  {
    emoji: "🤝",
    title: "Personalized Support",
    desc: "From custom role scoping to post-hire support — we act as your extended hiring team.",
  }
];

const BenefitsSection = () => {
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
    <section id="benefits" className="max-w-5xl mx-auto py-16 md:py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Why Hireshore?</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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
          <motion.div key={benefit.title} variants={item}>
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow group hover:border-purple-200 duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <motion.span 
                  className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 2,
                    delay: index * 0.2
                  }}
                >
                  {benefit.emoji}
                </motion.span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#8b5cf6] transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{benefit.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
