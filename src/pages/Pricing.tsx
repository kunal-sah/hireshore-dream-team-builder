import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { 
  CheckCircle,
  Clock,
  Calendar,
  Zap,
  Phone,
  MessageSquare
} from "lucide-react";

const Pricing = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById('book');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#book';
    }
  };

  const plans = [
    {
      name: "Postpaid",
      subtitle: "Pay‑as‑you‑go",
      price: "$10",
      period: "/hour",
      billing: "Bi‑weekly or per project",
      bestFor: "One‑offs, uncertain scopes, quick wins.",
      icon: Clock,
      features: [
        "Access to the Hireshore bench across web, design, video, SEO, automation, content",
        "Slack comms + ClickUp tracking",
        "Time reports and QA"
      ],
      note: "Availability depends on scheduling. For priority access, choose a prepaid option.",
      popular: false
    },
    {
      name: "Prepaid Flex Hours",
      subtitle: "Most popular",
      price: "$1,450",
      period: "/ 160 hours",
      effectiveRate: "$9/hour",
      usageWindow: "Up to 3 months",
      bestFor: "Agencies with recurring needs across mixed tasks.",
      icon: Zap,
      features: [
        "One pool of hours for any task or role",
        "Priority allocation and faster turnarounds",
        "Add blocks in 40‑hour increments at $8/hour",
        "No subscription, no long‑term lock‑in"
      ],
      popular: true
    },
    {
      name: "Monthly Pod",
      subtitle: "Highest efficiency",
      price: "$1,200",
      period: "/ 160 hours per month",
      effectiveRate: "$7.5/hour",
      usageWindow: "30 days (does not roll over)",
      bestFor: "Sprints, new launches, and steady production.",
      icon: Calendar,
      features: [
        "Dedicated resources held for you",
        "Deepest discount with consistent delivery",
        "Scale mid‑month with 40‑hour add‑ons at the same effective rate"
      ],
      popular: false
    }
  ];

  const includedFeatures = [
    "Project Manager + QA + reporting",
    "Slack + ClickUp (or your tools)",
    "White‑label docs and deliverables",
    "Web (Webflow/WordPress/Shopify), automation (Zapier/Make/n8n, GHL), SEO, ads creatives, video, copywriting",
    "Timezone‑friendly overlap and weekly strategy call"
  ];

  const exampleOutputs = [
    "Web: 1 standard Webflow site (5–7 pages) or 4–6 landing pages with variants",
    "Creative: 100–140 social graphics + 10–15 ad concepts",
    "Video: 25–35 short‑form edits or 3–5 long‑form",
    "Automation: 5–8 workflows (lead capture, CRM sync, notifications, scrapers)",
    "SEO/Content: Technical pass + 6–8 on‑page optimizations + 4–6 blogs",
    "Mixed Sprint: A bit of everything aligned to your campaign plan"
  ];

  const comparisonFeatures = [
    { feature: "Upfront cost", postpaid: "Zero upfront", flex: "Prepaid savings", monthly: "Best rate" },
    { feature: "Queue priority", postpaid: "Standard queue", flex: "Priority queue", monthly: "Dedicated team" },
    { feature: "Best for", postpaid: "Ad‑hoc tasks", flex: "Hours last 3 months", monthly: "Use inside 30 days" }
  ];

  const faqs = [
    { q: "Are tasks unlimited?", a: "Yes—mix any task types inside your hours." },
    { q: "Do unused Monthly hours roll over?", a: "No; that's why it's our best rate. Use them to sprint." },
    { q: "Can we pause?", a: "Flex Hours can pause within the 3‑month window. Monthly is continuous." },
    { q: "How do you report time?", a: "Daily summaries + weekly roll‑ups with links to work." },
    { q: "What if someone isn't a fit?", a: "We replace within 5–7 days—no extra cost." },
    { q: "Is this truly white‑label?", a: "100%. We never face your client." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Simple plans. Serious output.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            Choose flexible hours or a monthly pod—always white‑label, always managed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={scrollToBooking} className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Start with a pilot
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={scrollToBooking}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to a strategist
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Plans & Pricing
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <plan.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                    </div>
                    <div className="pt-4">
                      <div className="text-4xl font-bold">{plan.price}</div>
                      <div className="text-muted-foreground">{plan.period}</div>
                      {plan.effectiveRate && (
                        <div className="text-sm text-primary mt-2">Effective rate: {plan.effectiveRate}</div>
                      )}
                      {plan.billing && (
                        <div className="text-sm text-muted-foreground mt-1">Billing: {plan.billing}</div>
                      )}
                      {plan.usageWindow && (
                        <div className="text-sm text-muted-foreground mt-1">Usage window: {plan.usageWindow}</div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-sm mb-2">Best for:</p>
                        <p className="text-sm text-muted-foreground">{plan.bestFor}</p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-sm mb-3">What you get:</p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {plan.note && (
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground italic">
                            <strong>Note:</strong> {plan.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            All Plans Include
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 mb-8"
          >
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6"
          >
            <p className="text-sm text-muted-foreground">
              <strong>Not Included:</strong> Ad spend, third‑party app fees, new software licenses outside scope.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Can Do With 160 Hours */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What We Can Do With 160 Hours
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {exampleOutputs.map((output, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-sm leading-relaxed">{output}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground italic text-sm"
          >
            *(Estimates; actuals depend on complexity and inputs.)*
          </motion.p>
        </div>
      </section>

      {/* Add-Ons & Scaling */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Add‑Ons & Scaling
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-left max-w-2xl mx-auto"
          >
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Add <strong>40‑hour</strong> blocks anytime (Flex: <strong>$8/h</strong>; Monthly: <strong>$7.5/h</strong>)</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Spin up specialist roles (e.g., motion/automation) inside your hours</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Add telecalling or recruitment support as needed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Comparison At‑a‑Glance
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-left p-4 font-semibold">Postpaid</th>
                  <th className="text-left p-4 font-semibold">Flex Hours</th>
                  <th className="text-left p-4 font-semibold">Monthly Pod</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.postpaid}</td>
                    <td className="p-4 text-muted-foreground">{row.flex}</td>
                    <td className="p-4 text-muted-foreground">{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to stop juggling freelancers?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 opacity-90"
          >
            Start with a pilot sprint or lock a monthly pod.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToBooking}
              className="text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a 30‑min intro
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToBooking}
              className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Get a sample sprint plan
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm mt-4 opacity-80"
          >
            (24–48 hrs)
          </motion.p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Pricing;