import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Is the Pod dedicated to my business?",
      answer: "Yes, the Pod is dedicated to your project's success and aligned to your goals. While team members may work on other projects, your Pod operates as a cohesive unit focused on delivering your specific outcomes."
    },
    {
      question: "How do you handle time zones?",
      answer: "We ensure 2–4 hours of overlap in your time zone with clear SLAs and async updates. Our team is distributed globally, allowing us to match you with specialists who can work during your preferred hours while maintaining 24/7 progress on your projects."
    },
    {
      question: "What happens if someone doesn't perform well?",
      answer: "If someone isn't a good fit, we replace them quickly to maintain momentum. We have backup specialists ready and a proven onboarding process that gets new team members productive within 1-2 days, not weeks."
    },
    {
      question: "Do Pods replace my team?",
      answer: "No, Pods extend your team's capacity and focus on tactical work while your team handles strategy and client relationships. Think of us as your execution arm - we handle the building while you focus on growing your business."
    },
    {
      question: "How quickly can we get started?",
      answer: "We can have your Pod operational and delivering work within 5 days. Day 1-2 is intake and planning, Day 3-4 is team setup and tool integration, and by Day 5 you're receiving deliverables."
    },
    {
      question: "What if I need to scale up or down?",
      answer: "Pods are designed to be flexible. You can scale capacity month-to-month based on your needs without the overhead of hiring, firing, or managing additional employees. No long-term contracts or commitments required."
    }
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Common questions about working with Delivery Pods
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 py-3 sm:py-4 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-3 sm:pb-4 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;