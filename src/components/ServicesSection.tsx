import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, User, Headphones, Calendar, Palette, Search, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Bookkeeping & Billing",
    description: "Xero, QuickBooks, MYOB. AR/AP, reconciliations, collections.",
    icon: Calculator,
    href: "/services",
  },
  {
    title: "Virtual Assistants & Admin",
    description: "Inbox, scheduling, data entry, CRM hygiene — your day, handled.",
    icon: User,
    href: "/services/support-qa-pod",
  },
  {
    title: "Customer Support",
    description: "Calls, web chat, and 24/7 ticket coverage under your brand.",
    icon: Headphones,
    href: "/services/support-qa-pod",
  },
  {
    title: "Appointment Setting",
    description: "Qualified meetings booked straight into your calendar.",
    icon: Calendar,
    href: "/services/marketing-ops-pod",
  },
  {
    title: "Design & Content",
    description: "Graphics, brand assets, and content built for your channels.",
    icon: Palette,
    href: "/services/design-pod",
  },
  {
    title: "SEO & Marketing Ops",
    description: "On-page SEO, content production, and funnel ops execution.",
    icon: Search,
    href: "/services/seo-content-pod",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-foreground mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What our pods cover
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Managed pods for back-office, support, and growth — fully white-labeled, ready in days.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={cat.href}
                className="group block h-full rounded-xl bg-white border border-border p-5 sm:p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <cat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3" />
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/services">
              See all roles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90 text-white rounded-full"
            onClick={() => {
              const el = document.getElementById('book');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Get my pod
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
