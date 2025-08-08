import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Hammer, Layers3, Search, Timer, Wrench } from "lucide-react";
import React from "react";

const item = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i } }),
};

const CoveDigitalSuccessSection: React.FC = () => {
  const focus = [
    "WordPress & Wix development",
    "Critical website migrations (10–40+ page sites)",
    "Local SEO implementation",
    "QA & Project Management oversight",
  ];

  const complex = [
    "A 10-page window cleaning service website",
    "A 40-page dental website migration",
    "Full Wix product store transfers",
  ];

  const tools = [
    "WordPress, Wix, Google Sheets, Loom",
    "Internal SOPs and migration checklists",
    "SEO audit sheets integrated into dev tasks",
    "Loom videos for visual references and design inspiration",
    "Content preservation: recreate or transfer missing content",
  ];

  const results = [
    "Delivered a 40-page website migration in just 2 weeks",
    "Completed 3 full website projects in a month",
    "Maintained SEO rankings post-migration using checklist-driven QA",
    "Chloe regained 40+ hours/month to focus on growth and client acquisition",
  ];

  return (
    <motion.section
      id="case-cove-digital"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Layers3 className="h-4 w-4" /> Case Study
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            ✅ Scaling Website Delivery for Cove Digital
          </h2>
          <p className="mt-3 text-muted-foreground">
            Client: Cove Digital • Industry: Digital Marketing Agency • Location: Newquay, Cornwall, UK
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.article
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Wrench className="h-5 w-5" /> Solution: Dedicated Migration Pod
            </h3>
            <ul className="mt-3 space-y-2">
              {focus.map((f, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Hammer className="h-5 w-5" /> Complex Tasks We Handled
            </h3>
            <ul className="mt-3 space-y-2">
              {complex.map((c, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                  <span>{c}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.article
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Search className="h-5 w-5" /> Tools, Tech & Strategy
          </h3>
          <ul className="mt-3 space-y-2">
            {tools.map((t, i) => (
              <motion.li
                key={i}
                variants={item}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-6 rounded-xl border bg-card text-card-foreground shadow-sm"
        >
          <h3 className="text-xl font-semibold">Results</h3>
          <ul className="mt-3 space-y-2">
            {results.map((r, i) => (
              <motion.li
                key={i}
                variants={item}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                <span>{r}</span>
              </motion.li>
            ))}
          </ul>
          <blockquote className="mt-6 border-l-4 pl-4 text-muted-foreground">
            “Working with Hireshore has given me more time to grow my business and take on new local clients. I hand over the project and SOP, and it’s done before the deadline and to the highest quality.” — Chloe Bundy, Founder, Cove Digital
          </blockquote>
        </motion.article>

        <div className="mt-10 flex justify-center">
          <a href="#hiring-form" className="inline-flex items-center gap-2 text-primary hover:underline">
            Start a migration with us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default CoveDigitalSuccessSection;
