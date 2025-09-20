import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { 
  Globe, 
  Palette, 
  Zap, 
  MessageSquare, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Code,
  Briefcase
} from "lucide-react";

const Services = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/intro-call', '_blank');
  };

  const deliveryAreas = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Webflow, WordPress, Shopify, Framer. Landing pages, CMS builds, integrations, site migrations."
    },
    {
      icon: Palette,
      title: "Creative & Media Production", 
      description: "Social graphics, ads, branding, motion. Short‑form & long‑form video editing, AI‑assisted production."
    },
    {
      icon: Zap,
      title: "Marketing & Automation",
      description: "Funnels, paid ads (Google, Meta), SEO, email/SMS, CRM automations with Zapier/Make/n8n & GoHighLevel."
    },
    {
      icon: MessageSquare,
      title: "Content & Communication",
      description: "Copywriting for websites, funnels, ads & emails. Content scripts, carousels, captions. Appointment setting."
    },
    {
      icon: Users,
      title: "Admin & Recruitment",
      description: "Data entry, CRM hygiene, list building, telecalling, RPO (sourcing, screening, onboarding)."
    }
  ];

  const techHiringRoles = [
    {
      category: "Engineering",
      roles: "Frontend, Backend, Full‑stack, Mobile (iOS/Android), Data, ML/AI, MLOps, DevOps/SRE, QA & SDET, Automation QA"
    },
    {
      category: "Product",
      roles: "Product Managers, Product Owners, Technical Program Managers, Business Analysts"
    },
    {
      category: "Design",
      roles: "UI/UX Designers, Design Systems, UX Writers"
    },
    {
      category: "Architecture & Security",
      roles: "Solution Architects, Cloud Architects, SecOps"
    }
  ];

  const hiringSteps = [
    {
      step: "1",
      title: "Intake",
      description: "Role scorecard, stack, seniority, timezone overlap, budget"
    },
    {
      step: "2",
      title: "Shortlist",
      description: "3–5 vetted candidates in 5–10 business days"
    },
    {
      step: "3",
      title: "Vetting",
      description: "Tech tests, pair‑programming or code review, culture screen"
    },
    {
      step: "4",
      title: "Trial Sprint (optional)",
      description: "1–2 weeks inside your workflow"
    },
    {
      step: "5",
      title: "Hire & Onboard",
      description: "Offer, paperwork, device & access, 30/60/90 plan"
    }
  ];

  const engagementOptions = [
    {
      title: "Direct Hire (Recruitment)",
      description: "One‑time fee; replacement guarantee"
    },
    {
      title: "Staff Aug (Contract‑to‑Hire)",
      description: "Monthly rate on Hireshore payroll; convert anytime"
    },
    {
      title: "Managed Pod",
      description: "We provide leadership (Tech Lead/PM) and delivery SLAs"
    }
  ];

  const whyPoints = [
    "Plug & Play Delivery Pods: Pre‑configured roles (dev, design, automation, content) that operate as one team.",
    "AI + Automation Native: Faster turnarounds with modern tooling (Runway, Midjourney, ChatGPT, n8n, Zapier, GHL).",
    "Process‑Driven: Slack + ClickUp, daily/weekly reports, clear SLAs, and QA baked in.",
    "Truly White‑Label: We work under your brand. You face the client, we do the work."
  ];

  const proofCases = [
    "NDIS admin drain → Client portal + CRM alerts → 10+ hrs/week saved.",
    "Low ad‑to‑lead conversion → Webflow + GHL funnel + email/SMS → 5× qualified leads in 30 days.",
    "Cold outreach inefficiency → B2B data scrape + LinkedIn/email via n8n → 400+ qualified leads/month.",
    "Shopify fulfillment errors → Inventory sync + Slack alerts → 100% order accuracy.",
    "Slow onboarding → Calendly + CRM + SOP generation → 80% faster onboarding."
  ];

  const industries = [
    "E‑commerce & DTC", "NDIS, Health & Wellness", "Coaches & Consultants", 
    "Real Estate & Construction", "Finance & Bookkeeping", "Agencies & Studios", "SaaS & Startups"
  ];

  const techStacks = [
    { category: "Web & Creative", tools: "Webflow, WordPress, Shopify, Figma, Adobe CC, Canva" },
    { category: "Automation & CRM", tools: "Zapier, Make, n8n, GoHighLevel, HubSpot, Pipedrive, Zoho, Klaviyo" },
    { category: "SEO & Ads", tools: "Ahrefs, SEMrush, GSC, Meta Ads Manager, Google Ads" },
    { category: "Collab & Ops", tools: "Slack, Discord, Notion, ClickUp, Loom, Google Workspace" },
    { category: "AI Stack", tools: "Runway ML, Midjourney, Pika, Kaiber, ChatGPT, ElevenLabs" }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Intake",
      description: "Share goals, brand kit, references, access. We scope into tasks with estimates and a sprint plan."
    },
    {
      step: "2", 
      title: "Design / Build",
      description: "Dedicated pod executes across web/creative/automation. Daily updates in Slack + task boards in ClickUp (or your system)."
    },
    {
      step: "3",
      title: "Review", 
      description: "Asynchronous reviews, loom walkthroughs, QA checklists, SEO/Perf checks. Changes captured in one place to avoid loops."
    },
    {
      step: "4",
      title: "Deliver",
      description: "Final files, deploys, and documentation. Time & outcome report. Backlog tees up the next sprint."
    }
  ];

  const faqs = [
    { q: "Do you work under our brand?", a: "Yes. We're fully white‑label." },
    { q: "Can you use our tools?", a: "Absolutely. We adapt to your stack or set you up in ours quickly." },
    { q: "What if a skill is missing?", a: "We fill the gap from our bench within 5–7 days." },
    { q: "How fast can we start?", a: "Typically inside 3–5 days once access and priorities are set." }
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
            Scale delivery without hiring.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            White‑label web, creative, and automation pods that plug into your agency and ship on time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" onClick={bookCall} className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Book an intro call
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/pricing">See plans</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Hireshore is your behind‑the‑scenes execution partner. We combine trained talent, proven systems, 
              and AI‑enabled workflows to take work off your plate and keep your brand (or your client's) shipping.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <area.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Hiring & Staff Augmentation */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Hiring & Staff Augmentation (Full‑Time)</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Build product teams without the recruiting overhead. We help you <strong>hire and manage full‑time technical talent</strong> under your brand or on Hireshore payroll.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="h-8 w-8 text-primary mr-3" />
                Roles we place
              </h3>
              <div className="space-y-4">
                {techHiringRoles.map((role, index) => (
                  <div key={role.category} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-lg mb-2">{role.category}</h4>
                    <p className="text-muted-foreground">{role.roles}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="h-8 w-8 text-primary mr-3" />
                How it works
              </h3>
              <div className="space-y-4">
                {hiringSteps.map((step, index) => (
                  <div key={step.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Engagement options</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {engagementOptions.map((option, index) => (
                <Card key={option.title}>
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-lg mb-3">{option.title}</h4>
                    <p className="text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6"
          >
            <p className="text-center text-muted-foreground">
              <strong>Assurance:</strong> Replacement within <strong>5–7 days</strong>, timezone overlap guaranteed, NDAs and IP protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Agencies Use Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Agencies Use Us
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {whyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Use Cases */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Proof & Use Cases
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {proofCases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-sm leading-relaxed">{case_}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground italic"
          >
            (Ask for full case studies on call.)
          </motion.p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Industries We Serve
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 text-lg"
          >
            {industries.map((industry, index) => (
              <span key={index} className="text-muted-foreground">
                {industry}{index < industries.length - 1 && " •"}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech We Work With */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Tech We Work With
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">{stack.category}</h3>
                    <p className="text-sm text-muted-foreground">{stack.tools}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            How It Works (Intake → Design → Review → Deliver)
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted/20 rounded-lg p-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Included:</h3>
                <p className="text-sm text-muted-foreground">
                  Project Manager, QA, reports, and white‑label docs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Not included:</h3>
                <p className="text-sm text-muted-foreground">
                  Paid media spend, third‑party license fees, or brand‑new custom software outside hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team & Capacity */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Team & Capacity (Snapshot)
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Pod Roles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Web developers, UI/UX, graphic designers, video editors, social marketers, 
                SEO specialists, media buyer, copywriter, content creator, telecallers, 
                data VAs, automation expert, recruitment team, leadership (CMO/COO/CTO/CEO).
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Monthly Capacity</h3>
              <p className="text-muted-foreground leading-relaxed">
                4–6 full sites / 15–20 landers, 200+ graphics, 60–80 shorts, 5–7 SEO brands, 
                6–8 ad accounts, 10–12 social brands, 10–15 automations, 15k calls, 10–12 hires.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Engagement Models
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Project</h3>
                <p className="text-sm text-muted-foreground">(fixed scope)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Retainer / Subscription</h3>
                <p className="text-sm text-muted-foreground">(pods on tap)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Hourly / Blocks</h3>
                <p className="text-sm text-muted-foreground">(flex capacity)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Full‑Time Staffing</h3>
                <p className="text-sm text-muted-foreground">(direct hire or on Hireshore payroll)</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Button size="lg" onClick={bookCall} className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Book an intro call
            </Button>
            <p className="text-muted-foreground">
              Get a pilot sprint plan in 24–48 hrs.
            </p>
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

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Stop juggling freelancers. Plug in a pod and ship.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={bookCall}
              className="text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book an intro call
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Services;