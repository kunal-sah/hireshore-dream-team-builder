import { motion } from "framer-motion";
import { CheckCircle2, Clock, Workflow, Users, Zap } from "lucide-react";
import React from "react";

const listItem = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i } }),
};

const UncommonSolutionsSuccessSection: React.FC = () => {
  const challenge = [
    "Unpredictable delivery timelines",
    "Unclear pricing and scope creep",
    "Delivery inconsistency across projects",
    "No single point of accountability",
  ];

  const pod = [
    "Webflow developer",
    "UI/UX designer",
    "GoHighLevel funnel builder",
    "Project manager",
    "QA support",
    "Slack + project dashboard setup",
    "Lead designer/devs to create product mockups and samples for sales",
  ];

  const tools = [
    "Webflow, Figma, GoHighLevel",
    "AI-powered product generation tools",
    "Video automation tools (fitness & jewelry content)",
    "Paid media support & automation flows",
    "Flexible pre-paid package: 160 hours (at $8/hour) valid over 3 months",
  ];

  const results = [
    "Saved 40+ hours/week in coordination and delegation",
    "Launched agency website and multiple client projects from scratch",
    "Pitched more confidently using done-for-you mockups & samples",
    "No longer reliant on juggling 4–5 freelancers—one pod, one system, one team",
    "Cost-efficient & transparent delivery with pre-agreed timelines",
  ];

  return (
    <motion.section
      id="case-uncommon-solutions"
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
            <Zap className="h-4 w-4" /> Case Study
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            ✅ Streamlining Creative Delivery for Uncommon Solutions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Client: Uncommon Solutions • Industry: Digital Marketing & B2B Strategy • Location: Norway
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
              <Clock className="h-5 w-5" /> The Challenge
            </h3>
            <ul className="mt-3 space-y-2">
              {challenge.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                  <span>{item}</span>
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
              <Users className="h-5 w-5" /> The Solution: Plug & Play Delivery Pod
            </h3>
            <ul className="mt-3 space-y-2">
              {pod.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                  <span>{item}</span>
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
            <Workflow className="h-5 w-5" /> Tools, Tech & Strategy
          </h3>
          <ul className="mt-3 space-y-2">
            {tools.map((item, i) => (
              <motion.li
                key={i}
                variants={listItem}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                <span>{item}</span>
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
            {results.map((item, i) => (
              <motion.li
                key={i}
                variants={listItem}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <blockquote className="mt-6 border-l-4 pl-4 text-muted-foreground">
            “The team is well-skilled, easy to work with, and they deliver on time. I get estimates upfront, so I can confidently promise timelines to my clients—and they’re met. I don’t need to search for freelancers anymore.” — Breearna Jope, Founder, Uncommon Solutions
          </blockquote>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default UncommonSolutionsSuccessSection;
