import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Building2,
  ShoppingCart,
  Heart,
  Users,
  Home,
  Calculator,
  Rocket,
  Globe,
  Palette,
  Zap,
  TrendingUp,
  UserPlus,
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";

const Industries = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const industries = [
    {
      icon: Building2,
      title: "Agencies & Studios",
      problems: "capacity crunch, freelancer churn, inconsistent QA, messy handoffs.",
      delivery: "white‑label delivery pods (web/design/automation), campaign sprints, retainer execution, client‑ready reports.",
      outcome: "predictable velocity, fewer escalations, higher margins."
    },
    {
      icon: ShoppingCart,
      title: "E‑commerce & DTC",
      problems: "creative throughput, attribution gaps, fulfillment automations.",
      delivery: "Shopify builds, CRO landers, UGC/editing, Klaviyo flows, inventory/Slack alerts.",
      outcome: "higher AOV/ROAS, 100% order accuracy, faster drops."
    },
    {
      icon: Heart,
      title: "NDIS, Health & Wellness",
      problems: "paperwork overhead, compliance, multi‑step intake.",
      delivery: "portals, form automation, CRM workflows, HIPAA‑aware processes.",
      outcome: "10+ hours/week saved, fewer admin errors, better client experience."
    },
    {
      icon: Users,
      title: "Coaches, Consultants & Creators",
      problems: "webinar funnels, appointment show‑ups, content volume.",
      delivery: "funnels in Webflow/GHL, email/SMS sequences, reels/carousels, calendar automation.",
      outcome: "more booked calls, consistent content cadence."
    },
    {
      icon: Home,
      title: "Real Estate & Construction",
      problems: "listing sites, lead routing, proposal ops.",
      delivery: "Webflow/WordPress listings, map/search, lead scrape & nurture, proposal automation.",
      outcome: "faster inquiries, cleaner handovers."
    },
    {
      icon: Calculator,
      title: "Finance & Bookkeeping",
      problems: "data entry, reconciliations, repeat workflows.",
      delivery: "QuickBooks/Xero integrations, dashboarding, secure document flows.",
      outcome: "lower ops cost, fewer manual errors."
    },
    {
      icon: Rocket,
      title: "SaaS & Startups",
      problems: "hiring velocity, product execution, GTM rhythm.",
      delivery: "full‑time tech hiring/staff‑aug, design/dev pods, growth automation.",
      outcome: "faster roadmap, efficient burn, clearer analytics."
    }
  ];

  const solutionBlocks = [
    {
      icon: Globe,
      title: "Web & App",
      description: "Webflow/WordPress/Shopify + custom dashboards"
    },
    {
      icon: Palette,
      title: "Creative Engine",
      description: "design system, social/ad creative, brand kits, motion"
    },
    {
      icon: Zap,
      title: "Automation Core",
      description: "Zapier/Make/n8n, scrapers, CRM syncs, alerts"
    },
    {
      icon: TrendingUp,
      title: "Growth Stack",
      description: "funnels, SEO, paid media, email/SMS"
    },
    {
      icon: UserPlus,
      title: "People & Process",
      description: "full‑time tech hiring, PM/QA, SOPs, training"
    }
  ];

  const caseSnapshots = [
    "NDIS admin drain → portal + alerts → 10+ hrs/week saved",
    "Ads → leads gap → funnel + nurture → 5× qualified leads in 30 days",
    "Cold outreach stall → data scrape + flows → 400+ B2B leads/month",
    "Shopify errors → sync + Slack bot → 100% fulfillment accuracy"
  ];

  const guarantees = [
    "Intake → Build → Review → Deliver, with PM, QA, and weekly cadence.",
    "Replacement in 5–7 days, NDAs & IP protection, timezone overlap."
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 pt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Industries</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Solutions built for your industry.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            From agencies to NDIS to SaaS, we plug in pods that understand your workflows and ship faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book an industry walkthrough
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('case-snapshots')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See case snapshots
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{industry.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Badge variant="destructive" className="mb-2">Problems we solve</Badge>
                        <p className="text-sm text-muted-foreground">{industry.problems}</p>
                      </div>
                      
                      <div>
                        <Badge variant="secondary" className="mb-2">What we deliver</Badge>
                        <p className="text-sm text-muted-foreground">{industry.delivery}</p>
                      </div>
                      
                      <div>
                        <Badge className="mb-2">Outcome</Badge>
                        <p className="text-sm text-muted-foreground">{industry.outcome}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Blocks */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solution Blocks (Mix & Match)</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {solutionBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <block.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{block.title}</h3>
                    <p className="text-sm text-muted-foreground">{block.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              Build your solution → We'll map a 2‑week pilot
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Snapshots */}
      <section id="case-snapshots" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Snapshots</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caseSnapshots.map((snapshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-lg">{snapshot}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/case-studies'}
            >
              View all case studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process & Guarantees */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Process & Guarantees</h2>
            
            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{guarantee}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to a strategist
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Industries;