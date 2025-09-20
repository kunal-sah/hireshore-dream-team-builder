import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  FileIcon,
  ArrowRight,
  Phone,
  TrendingUp,
  Zap,
  Users,
  Target,
  ShoppingCart
} from "lucide-react";

const CaseNotes = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const caseNotes = [
    {
      icon: TrendingUp,
      title: "E-commerce Site Speed → 40% Revenue Boost",
      problem: "Site loading in 8+ seconds causing 70% bounce rate",
      solution: "Performance audit, image optimization, CDN setup",
      outcome: "2.1s load time, 40% revenue increase in 30 days",
      industry: "E-commerce",
      readTime: "3 min read",
      featured: true
    },
    {
      icon: Users,
      title: "NDIS Admin Drain → 10+ Hours Saved Weekly",
      problem: "Manual paperwork taking 15+ hours per week",
      solution: "Automated intake forms, CRM workflows, compliance tracking",
      outcome: "85% reduction in admin time, zero compliance issues",
      industry: "Healthcare",
      readTime: "4 min read"
    },
    {
      icon: Target,
      title: "Lead Qualification Gap → 5x Qualified Leads",
      problem: "80% of leads were unqualified, wasting sales time",
      solution: "Lead scoring system, qualification funnel, nurture sequences",
      outcome: "5x qualified leads, 60% shorter sales cycle",
      industry: "B2B Services",
      readTime: "3 min read"
    },
    {
      icon: Zap,
      title: "Manual Outreach → 400+ Leads/Month",
      problem: "Cold outreach taking 20+ hours/week with poor results",
      solution: "Data scraping, automated sequences, personalization at scale",
      outcome: "400+ qualified B2B leads monthly, 90% time savings",
      industry: "SaaS",
      readTime: "5 min read"
    },
    {
      icon: ShoppingCart,
      title: "Fulfillment Errors → 100% Accuracy",
      problem: "Order errors causing customer complaints and refunds",
      solution: "Shopify-Slack integration, automated alerts, QA checkpoints",
      outcome: "100% fulfillment accuracy, 50% fewer support tickets",
      industry: "E-commerce",
      readTime: "3 min read"
    }
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
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="p-4 bg-primary/10 rounded-full">
              <FileIcon className="h-12 w-12 text-primary" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Case Notes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            Short deconstructions with problem → solution → outcome from real client work.
          </motion.p>
        </div>
      </section>

      {/* Case Notes Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {caseNotes.map((note, index) => (
              <motion.div
                key={note.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <note.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {note.industry}
                        </Badge>
                        {note.featured && (
                          <Badge variant="default" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-4">
                      {note.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="text-sm font-medium text-red-600">Problem:</span>
                        <p className="text-sm text-muted-foreground">{note.problem}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-blue-600">Solution:</span>
                        <p className="text-sm text-muted-foreground">{note.solution}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-green-600">Outcome:</span>
                        <p className="text-sm text-muted-foreground">{note.outcome}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{note.readTime}</span>
                      <div className="flex items-center text-primary text-sm group-hover:translate-x-1 transition-transform">
                        <span>Read full note</span>
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

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want a custom case analysis?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We'll analyze your specific situation and map a solution strategy.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a 30‑min intro
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default CaseNotes;