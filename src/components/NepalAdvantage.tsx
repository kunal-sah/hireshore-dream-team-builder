import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Clock, Languages, Award } from 'lucide-react';

const NepalAdvantage = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    {
      icon: DollarSign,
      stat: 'Up to 83%',
      label: 'Payroll savings',
      detail: 'vs equivalent US, UK, AU hires — same seniority, none of the overhead.',
    },
    {
      icon: Clock,
      stat: '2–4 hrs',
      label: 'Daily overlap',
      detail: 'Real-time collaboration with US, EU, and APAC time zones.',
    },
    {
      icon: Languages,
      stat: 'C1+',
      label: 'English fluency',
      detail: 'Business-grade written and spoken English across every role.',
    },
    {
      icon: Award,
      stat: '95%',
      label: 'Retention rate',
      detail: 'Stable, long-term teams — not freelancer churn.',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">
            Why Nepal
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4">
            Senior talent at a fraction of the cost.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 leading-relaxed">
            We build managed teams from Nepal's top tier of vetted operators, designers, developers, and back-office specialists — priced for local economics, delivered to global standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground/70 mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-1">
                  {s.stat}
                </div>
                <div className="text-sm font-semibold text-primary-foreground/90 mb-2">
                  {s.label}
                </div>
                <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed">
                  {s.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NepalAdvantage;
