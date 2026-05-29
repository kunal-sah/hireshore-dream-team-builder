import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Users, ArrowRight, Check } from 'lucide-react';

const TwoWaysToHire = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const offers = [
    {
      icon: User,
      eyebrow: 'Team augmentation',
      title: 'Dedicated Talent',
      description:
        'A full-time specialist embedded in your team. Vetted, trained, and managed by us — works in your tools, your hours, your process.',
      bullets: [
        'Designers, developers, ops, VAs, bookkeepers',
        'You direct the work day-to-day',
        'Replace or scale anytime',
      ],
      cta: { label: 'See talent profiles', href: '/staffing/talent-profiles' },
    },
    {
      icon: Users,
      eyebrow: 'Cross-functional pod',
      title: 'Delivery Pod',
      description:
        'A managed, multi-skill team (PM + specialists) that takes the brief and ships the deliverables. You get outcomes, not task management.',
      bullets: [
        'PM, designer, developer, QA — one team',
        'Ships by Day 5, weekly scorecards',
        'Full-time output, flexible month-to-month',
      ],
      cta: { label: 'How Delivery Pods work', href: '/delivery-pods' },
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/70 mb-3">
            Two ways to hire
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Pick the model that fits your work.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you need one dedicated specialist or an entire cross-functional team, we manage hiring, training, retention, and quality — so you don't have to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {offers.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-border rounded-2xl p-6 sm:p-8 flex flex-col"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {o.eyebrow}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-3">
                  {o.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                  {o.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {o.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={o.cta.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  {o.cta.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TwoWaysToHire;
