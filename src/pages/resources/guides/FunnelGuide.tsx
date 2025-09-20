import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { CopyToClipboard } from "@/components/ui/copy-to-clipboard";
import { StickyCTA } from "@/components/ui/sticky-cta";
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
import { TrendingUp, ChevronDown, Target, Users, Mail, BarChart3, Lightbulb } from "lucide-react";
import { useState } from "react";

const FunnelGuide = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const funnelStages = [
    {
      stage: "Awareness",
      description: "Attract your ideal prospects",
      tactics: ["Blog content", "Social media", "SEO", "Paid ads", "PR"],
      metrics: ["Traffic", "Impressions", "Reach", "Brand searches"]
    },
    {
      stage: "Interest", 
      description: "Capture attention and build trust",
      tactics: ["Lead magnets", "Email capture", "Webinars", "Free tools"],
      metrics: ["Email signups", "Content downloads", "Time on page", "Pages per session"]
    },
    {
      stage: "Consideration",
      description: "Nurture leads and demonstrate value",
      tactics: ["Email sequences", "Case studies", "Product demos", "Free trials"],
      metrics: ["Email open rates", "Click-through rates", "Demo bookings", "Trial signups"]
    },
    {
      stage: "Intent",
      description: "Convert interested prospects to customers",
      tactics: ["Sales calls", "Consultations", "Proposals", "Limited offers"],
      metrics: ["Conversion rate", "Cost per acquisition", "Sales qualified leads"]
    },
    {
      stage: "Purchase",
      description: "Complete the transaction",
      tactics: ["Streamlined checkout", "Payment options", "Security badges", "Guarantees"],
      metrics: ["Purchase conversion", "Cart abandonment", "Average order value"]
    },
    {
      stage: "Retention",
      description: "Keep customers engaged and coming back",
      tactics: ["Onboarding sequences", "Customer success", "Upsells", "Loyalty programs"],
      metrics: ["Customer lifetime value", "Retention rate", "Repeat purchase rate", "Net promoter score"]
    }
  ];

  const landingPageTemplate = `<!-- High-Converting Landing Page Template -->
<!DOCTYPE html>
<html>
<head>
    <title>[Benefit] - [Company Name]</title>
    <meta name="description" content="[Primary benefit in 160 chars]">
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <h1>[Clear value proposition in 10 words or less]</h1>
        <p>[Supporting headline that explains the benefit]</p>
        <button class="cta-primary">[Action-oriented CTA]</button>
        <img src="hero-image.jpg" alt="[Descriptive alt text]">
    </section>

    <!-- Social Proof -->
    <section class="social-proof">
        <p>Trusted by [number] companies including:</p>
        <!-- Logo carousel -->
        <div class="logos">[Customer logos]</div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
        <h2>How [Product] Helps You [Achieve Goal]</h2>
        <div class="benefit-grid">
            <div class="benefit">
                <icon>[Icon]</icon>
                <h3>[Benefit Title]</h3>
                <p>[Benefit description]</p>
            </div>
            <!-- Repeat for 3-6 benefits -->
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <h2>[Urgency/scarcity element]</h2>
        <button class="cta-secondary">[Same CTA as hero]</button>
    </section>
</body>
</html>`;

  const emailSequenceTemplate = `Email 1: Welcome & Deliver Lead Magnet
Subject: Here's your [Lead Magnet Name] + what's next

Hi [First Name],

Thanks for downloading [Lead Magnet]! You can access it here: [Link]

Over the next few days, I'll share:
• [Benefit 1]
• [Benefit 2] 
• [Benefit 3]

Best,
[Name]

---

Email 2: Value-First Content (Day 2)
Subject: The #1 mistake [Target Audience] make with [Topic]

Hi [First Name],

Yesterday I shared [Lead Magnet]. Today, let me tell you about the biggest mistake I see [target audience] make:

[Share valuable insight or tip]

Here's how to avoid it:
[Step-by-step solution]

Tomorrow I'll share [next topic].

Best,
[Name]

---

Email 3: Case Study/Social Proof (Day 4)
Subject: How [Customer] achieved [Specific Result]

Hi [First Name],

Want to see [your solution] in action?

[Customer Name] was struggling with [problem]. After implementing [solution], they achieved:
• [Specific result 1]
• [Specific result 2]
• [Specific result 3]

Here's exactly what they did: [Brief case study]

If you're ready for similar results, here's how I can help: [CTA]

Best,
[Name]

---

Email 4: Soft Pitch (Day 7)
Subject: Ready to [achieve desired outcome]?

Hi [First Name],

Over the past week, you've learned:
• [Recap key points from previous emails]

If you're ready to take the next step, I have [number] spots available for [product/service].

Here's what's included:
• [Benefit 1]
• [Benefit 2]
• [Benefit 3]

[CTA Button]

Best,
[Name]`;

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
              <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/resources/guides">Guides</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Complete Funnel Guide</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <TrendingUp className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Complete Guide</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Complete Funnel Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Build high-converting funnels from awareness to purchase with proven templates and strategies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById('funnel-stages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Building
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Get Custom Funnel
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <section id="overview">
              <h2 className="text-3xl font-bold mb-6 text-primary">Funnel Fundamentals</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  A marketing funnel is a strategic framework that guides prospects through a series of steps, 
                  from initial awareness to final purchase and beyond. Think of it as a roadmap that nurtures 
                  relationships and builds trust at each stage.
                </p>
                <p className="mb-6">
                  This guide provides everything you need to build, optimize, and scale high-converting funnels 
                  for any business model, including templates, examples, and proven strategies.
                </p>
              </div>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Key Success Metrics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 2-5% conversion rate from visitor to lead</li>
                      <li>• 20-30% email open rates in nurture sequences</li>
                      <li>• 10-20% conversion from lead to customer</li>
                      <li>• 3:1 or better return on ad spend (ROAS)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* Funnel Stages */}
            <section id="funnel-stages">
              <h2 className="text-3xl font-bold mb-6 text-primary">6-Stage Funnel Framework</h2>
              <p className="text-muted-foreground mb-8">
                Each stage requires different content, tactics, and metrics to maximize conversions.
              </p>

              <div className="space-y-6">
                {funnelStages.map((stage, index) => (
                  <motion.div
                    key={stage.stage}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center">
                          <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-4">
                            <span className="font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <CardTitle className="text-xl">{stage.stage}</CardTitle>
                            <p className="text-muted-foreground">{stage.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Tactics</h4>
                            <ul className="space-y-1">
                              {stage.tactics.map((tactic) => (
                                <li key={tactic} className="text-sm text-muted-foreground">• {tactic}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Key Metrics</h4>
                            <ul className="space-y-1">
                              {stage.metrics.map((metric) => (
                                <li key={metric} className="text-sm text-muted-foreground">• {metric}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Landing Page Template */}
            <section id="landing-page-template">
              <h2 className="text-3xl font-bold mb-6 text-primary">Landing Page Template</h2>
              <p className="text-muted-foreground mb-6">
                A proven landing page structure that converts visitors into leads. Copy and customize for your offer.
              </p>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>High-Converting Landing Page HTML</CardTitle>
                    <CopyToClipboard text={landingPageTemplate} />
                  </div>
                </CardHeader>
                <CardContent>
                  <Collapsible open={openSections.landingPage}>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                      onClick={() => toggleSection('landingPage')}
                    >
                      <span className="font-medium">View Complete Template</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${openSections.landingPage ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <pre className="bg-slate-950 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{landingPageTemplate}</code>
                      </pre>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* Email Sequence Template */}
            <section id="email-sequence-template">
              <h2 className="text-3xl font-bold mb-6 text-primary">Email Nurture Sequence</h2>
              <p className="text-muted-foreground mb-6">
                A 4-email sequence that builds trust and converts leads into customers over 7 days.
              </p>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Complete Email Sequence Template</CardTitle>
                    <CopyToClipboard text={emailSequenceTemplate} />
                  </div>
                </CardHeader>
                <CardContent>
                  <Collapsible open={openSections.emailSequence}>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                      onClick={() => toggleSection('emailSequence')}
                    >
                      <span className="font-medium">View Complete Sequence</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${openSections.emailSequence ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <pre className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                        <code>{emailSequenceTemplate}</code>
                      </pre>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* Optimization Tips */}
            <section id="optimization-tips">
              <h2 className="text-3xl font-bold mb-6 text-primary">Conversion Optimization</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    A/B Testing Priorities
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Headlines (biggest impact)</li>
                    <li>• Call-to-action buttons</li>
                    <li>• Form fields (reduce friction)</li>
                    <li>• Social proof placement</li>
                    <li>• Value proposition clarity</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Key Metrics to Track
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Traffic sources and quality</li>
                    <li>• Landing page conversion rate</li>
                    <li>• Email engagement metrics</li>
                    <li>• Cost per acquisition (CPA)</li>
                    <li>• Customer lifetime value (CLV)</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Related Resources */}
            <section id="related-resources" className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Creative Brief Template</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Structure your funnel creative projects with clear goals and messaging.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/resources/creative-brief-template">View Template</a>
                  </Button>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Automation Guide</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Automate your funnel with workflows for lead capture and nurturing.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/resources/guides/automation-starters">View Guide</a>
                  </Button>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default FunnelGuide;