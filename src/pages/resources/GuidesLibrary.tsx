import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { BookOpen, ArrowRight, TrendingUp, Search, Zap, MessageSquare, Clock, Target } from "lucide-react";

const GuidesLibrary = () => {
  const guides = [
    {
      id: "funnels",
      title: "Complete Funnel Guide",
      description: "Build high-converting funnels from awareness to purchase",
      duration: "25 min read",
      difficulty: "Intermediate",
      topics: ["Landing Pages", "Email Sequences", "Conversion Optimization", "Analytics"],
      icon: TrendingUp,
      href: "/resources/guides/funnels"
    },
    {
      id: "seo-basics",
      title: "SEO Fundamentals",
      description: "Technical SEO, content optimization, and ranking strategies",
      duration: "30 min read", 
      difficulty: "Beginner",
      topics: ["On-Page SEO", "Technical SEO", "Content Strategy", "Local SEO"],
      icon: Search,
      href: "/resources/guides/seo-basics"
    },
    {
      id: "automation-starters",
      title: "Automation Playbook",
      description: "No-code automation workflows for common business processes",
      duration: "20 min read",
      difficulty: "Intermediate", 
      topics: ["Zapier Workflows", "Lead Capture", "CRM Integration", "Notifications"],
      icon: Zap,
      href: "/resources/guides/automation-starters"
    },
    {
      id: "outreach-systems",
      title: "Outreach Systems",
      description: "Cold email, LinkedIn, and multi-channel prospecting strategies",
      duration: "35 min read",
      difficulty: "Advanced",
      topics: ["Cold Email", "LinkedIn Outreach", "Personalization", "Follow-up Sequences"],
      icon: MessageSquare,
      href: "/resources/guides/outreach-systems"
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
              <BreadcrumbPage>Guides Library</BreadcrumbPage>
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
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Comprehensive Guides</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Guides Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            In-depth guides for funnels, SEO, automation, and outreach systems to grow your business.
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
              onClick={() => document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Guides
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Get Custom Strategy
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section id="guides" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Guide</h2>
            <p className="text-xl text-muted-foreground">Each guide includes step-by-step instructions, templates, and real examples.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer" onClick={() => window.location.href = guide.href}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <guide.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {guide.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {guide.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{guide.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">What You'll Learn:</h4>
                        <div className="flex flex-wrap gap-2">
                          {guide.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-primary text-sm group-hover:translate-x-1 transition-transform pt-2">
                        <span>Read Guide</span>
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

      {/* Features Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Guide Includes</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Step-by-Step Process</h3>
                <p className="text-muted-foreground">Clear, actionable instructions you can follow immediately</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Templates & Tools</h3>
                <p className="text-muted-foreground">Ready-to-use templates and recommended tools</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real Examples</h3>
                <p className="text-muted-foreground">Case studies and examples from successful campaigns</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need custom implementation?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our delivery pods can implement any of these strategies for you in 2-4 week sprints.
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

export default GuidesLibrary;