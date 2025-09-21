import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyCTA } from "@/components/ui/sticky-cta";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FileText, ArrowRight, TrendingUp, Clock, Target, Users, DollarSign, Zap } from "lucide-react";

const CaseNotesLibrary = () => {
  const navigate = useNavigate();
  
  const caseNotes = [
    {
      id: "ndis-admin-automation",
      title: "NDIS Admin Drain → Portal + Alerts → 10+ hrs/week saved",
      industry: "Healthcare",
      timeframe: "3 weeks",
      problem: "NDIS provider spending 15+ hours weekly on manual admin tasks, client intake forms, and compliance documentation",
      solution: "Custom client portal with automated form workflows, CRM integration, and Slack notification system",
      outcome: "Reduced admin time by 67% (10+ hours/week), improved client experience, 100% compliance tracking",
      tags: ["Automation", "Healthcare", "Portal", "CRM Integration"],
      readTime: "4 min read",
      slug: "ndis-automation"
    },
    {
      id: "ecommerce-replatform",
      title: "Legacy Platform → Shopify Plus → 312% Revenue Growth",
      industry: "E-commerce",
      timeframe: "8 weeks",
      problem: "Established e-commerce brand stuck on legacy platform with 3.2% conversion rate, slow load times, and limited mobile experience",
      solution: "Complete migration to Shopify Plus with custom theme, advanced filtering, subscription integration, and mobile-first optimization",
      outcome: "Conversion rate increased to 8.7%, page load time reduced to 1.8 seconds, revenue grew 312% to $8.2M in first year",
      tags: ["E-commerce", "Migration", "Performance", "Mobile-First"],
      readTime: "6 min read",
      slug: "ecommerce-replatform"
    },
    {
      id: "saas-onboarding",
      title: "23% Churn → Interactive Onboarding → 91% Activation Rate",
      industry: "SaaS",
      timeframe: "5 weeks", 
      problem: "B2B SaaS with complex features experiencing 23% monthly churn, only 34% of users completed setup within first week",
      solution: "Interactive onboarding system with progressive disclosure, smart defaults, sample data, and contextual guidance",
      outcome: "First-week activation increased to 91%, monthly churn reduced to 8.2%, time-to-value decreased from 12 days to 2.5 days",
      tags: ["SaaS", "UX Design", "Churn Reduction", "User Onboarding"],
      readTime: "5 min read",
      slug: "saas-onboarding"
    }
      metrics: {
        timeSaved: "10+ hours/week",
        efficiency: "67% reduction",
        accuracy: "100% compliance",
        satisfaction: "Client satisfaction up 40%"
      },
      tags: ["Automation", "Healthcare", "Portal", "Compliance"],
      href: "/resources/case-notes/ndis-admin-automation"
    },
    {
      id: "ads-leads-gap-funnel",
      title: "Ads → Leads Gap → Funnel + Nurture → 5× Qualified Leads in 30 Days",
      industry: "SaaS",
      timeframe: "4 weeks", 
      problem: "Tech startup getting traffic from ads but only 2% converting to qualified leads, no follow-up system",
      solution: "Optimized landing pages, lead scoring system, 7-email automation sequence, and CRM integration",
      outcome: "Lead conversion increased from 2% to 12%, 5× more qualified leads, 40% faster sales cycle",
      metrics: {
        conversion: "2% → 12%",
        leads: "5× increase",
        salesCycle: "40% faster",
        roi: "300% ROI"
      },
      tags: ["Funnel", "Lead Generation", "SaaS", "Automation"],
      href: "/resources/case-notes/ads-leads-gap-funnel"
    },
    {
      id: "cold-outreach-automation",
      title: "Cold Outreach Stall → Data Scrape + Flows → 400+ B2B Leads/Month",
      industry: "Agency",
      timeframe: "2 weeks",
      problem: "Digital agency struggling with manual prospecting, inconsistent outreach, low response rates",
      solution: "Automated lead scraping, personalized email sequences, LinkedIn automation, CRM integration",
      outcome: "400+ qualified leads monthly, 15% response rate, 3× more discovery calls booked",
      metrics: {
        leads: "400+ leads/month",
        responseRate: "15%",
        calls: "3× more calls",
        conversion: "25% to meeting"
      },
      tags: ["Outreach", "Lead Generation", "Agency", "B2B"],
      href: "/resources/case-notes/cold-outreach-automation"
    },
    {
      id: "shopify-fulfillment-automation",
      title: "Shopify Errors → Sync + Slack Bot → 100% Fulfillment Accuracy",
      industry: "E-commerce",
      timeframe: "1 week",
      problem: "E-commerce store with inventory sync issues, fulfillment errors, manual order tracking",
      solution: "Shopify-inventory system integration, automated Slack alerts, order status automation",
      outcome: "Zero fulfillment errors, real-time inventory tracking, 50% faster order processing",
      metrics: {
        accuracy: "100% fulfillment",
        speed: "50% faster processing", 
        errors: "Zero sync issues",
        satisfaction: "Customer complaints down 80%"
      },
      tags: ["E-commerce", "Shopify", "Automation", "Inventory"],
      href: "/resources/case-notes/shopify-fulfillment-automation"
    },
    {
      id: "coaching-booking-optimization",
      title: "Low Show-ups → Funnel + Reminders → 85% Booking Attendance",
      industry: "Coaching",
      timeframe: "2 weeks",
      problem: "Business coach with 40% no-show rate for discovery calls, manual booking process, no follow-up",
      solution: "Optimized booking funnel, automated reminder sequences, calendar integration, qualification questions",
      outcome: "Show-up rate increased to 85%, 60% more qualified prospects, streamlined booking process",
      metrics: {
        showRate: "40% → 85%",
        qualification: "60% better prospects",
        bookings: "3× more bookings",
        conversion: "50% to client"
      },
      tags: ["Coaching", "Booking", "Funnel", "Automation"],
      href: "/resources/case-notes/coaching-booking-optimization"
    },
    {
      id: "real-estate-lead-nurture",
      title: "Cold Leads → Nurture System → 30% More Closings in 90 Days",
      industry: "Real Estate",
      timeframe: "6 weeks",
      problem: "Real estate agent with large database of cold leads, no systematic follow-up, losing deals to competitors",
      solution: "Segmented email campaigns, property alert automation, CRM workflows, social media retargeting",
      outcome: "Re-engaged 40% of cold database, 30% increase in closings, automated lead nurturing",
      metrics: {
        reengagement: "40% of cold leads",
        closings: "30% increase",
        automation: "80% of nurture automated",
        timeline: "25% faster closings"
      },
      tags: ["Real Estate", "Lead Nurture", "CRM", "Email Marketing"],
      href: "/resources/case-notes/real-estate-lead-nurture"
    }
  ];

  const getIndustryColor = (industry: string) => {
    const colors: { [key: string]: string } = {
      "Healthcare": "bg-green-100 text-green-800",
      "SaaS": "bg-blue-100 text-blue-800", 
      "Agency": "bg-purple-100 text-purple-800",
      "E-commerce": "bg-orange-100 text-orange-800",
      "Coaching": "bg-yellow-100 text-yellow-800",
      "Real Estate": "bg-red-100 text-red-800"
    };
    return colors[industry] || "bg-gray-100 text-gray-800";
  };

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
              <BreadcrumbPage>Case Notes</BreadcrumbPage>
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
            <FileText className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Real Results</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Case Notes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Short deconstructions with problem → solution → outcome from real client projects.
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
              onClick={() => document.getElementById('case-notes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Case Notes
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Notes Grid */}
      <section id="case-notes" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Client Results</h2>
            <p className="text-xl text-muted-foreground">See how we've solved similar challenges across different industries.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer" onClick={() => navigate(note.href)}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-2 flex-wrap">
                        <Badge className={getIndustryColor(note.industry)}>
                          {note.industry}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {note.timeframe}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                      {note.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Problem → Solution → Outcome */}
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-200 pl-4">
                        <h4 className="font-semibold text-sm text-red-700 mb-1">PROBLEM</h4>
                        <p className="text-sm text-muted-foreground">{note.problem}</p>
                      </div>
                      
                      <div className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold text-sm text-blue-700 mb-1">SOLUTION</h4>
                        <p className="text-sm text-muted-foreground">{note.solution}</p>
                      </div>
                      
                      <div className="border-l-4 border-green-200 pl-4">
                        <h4 className="font-semibold text-sm text-green-700 mb-1">OUTCOME</h4>
                        <p className="text-sm text-muted-foreground">{note.outcome}</p>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-sm mb-3">KEY METRICS</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(note.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-muted/50 rounded">
                            <div className="font-semibold text-sm">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags and CTA */}
                    <div className="pt-4 border-t">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {note.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-primary text-sm group-hover:translate-x-1 transition-transform">
                        <span>Read full case note</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern Recognition */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Success Patterns</h2>
            <p className="text-xl text-muted-foreground mb-8">
              These patterns emerge across successful projects, regardless of industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation First</h3>
              <p className="text-muted-foreground">Replace manual processes with smart workflows and integrations</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Focused Solutions</h3>
              <p className="text-muted-foreground">Solve one key bottleneck thoroughly rather than many partially</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Measurable Impact</h3>
              <p className="text-muted-foreground">Track specific metrics that directly impact business outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for similar results?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a strategy call to discuss how we can solve your specific challenges in 2-4 weeks.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Book Strategy Call
            </Button>
          </motion.div>
        </div>
      </section>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default CaseNotesLibrary;