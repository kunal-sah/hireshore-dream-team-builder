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
import { FileText, Clock, TrendingUp, ArrowRight, Target, Zap } from "lucide-react";

const NDISAutomation = () => {
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
              <BreadcrumbLink href="/resources/case-notes">Case Notes</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>NDIS Admin Automation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <FileText className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Case Study</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            NDIS Admin Drain → Portal + Alerts → 10+ hrs/week saved
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 text-sm text-muted-foreground mb-8"
          >
            <Badge className="bg-green-100 text-green-800">Healthcare</Badge>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>3 weeks delivery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          
          {/* Problem → Solution → Outcome */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  PROBLEM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NDIS provider spending 15+ hours weekly on manual admin tasks, client intake forms, and compliance documentation. 
                  Staff overwhelmed with paperwork, leading to delayed client onboarding and compliance risks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  SOLUTION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom client portal with automated form workflows, CRM integration, and Slack notification system. 
                  Streamlined intake process with automatic compliance tracking and staff task management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  OUTCOME
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduced admin time by 67% (10+ hours/week), improved client experience, 100% compliance tracking. 
                  Staff can now focus on client care instead of paperwork.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Key Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">10+ hrs/week</div>
                  <div className="text-sm text-muted-foreground">Time Saved</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">67%</div>
                  <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">40%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction ↑</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Implementation */}
          <div className="prose prose-lg max-w-none">
            <h2>Implementation Details</h2>
            
            <h3>Phase 1: Discovery & Assessment (Week 1)</h3>
            <ul>
              <li>Mapped existing admin workflows and pain points</li>
              <li>Identified compliance requirements and documentation needs</li>
              <li>Analyzed current tools and integration possibilities</li>
            </ul>

            <h3>Phase 2: Portal Development (Week 2)</h3>
            <ul>
              <li>Built custom client intake portal with conditional logic</li>
              <li>Integrated with existing CRM system</li>
              <li>Set up automated document generation</li>
            </ul>

            <h3>Phase 3: Automation & Training (Week 3)</h3>
            <ul>
              <li>Configured Slack notifications for key events</li>
              <li>Trained staff on new workflows</li>
              <li>Established monitoring and maintenance procedures</li>
            </ul>

            <h2>Key Technologies</h2>
            <ul>
              <li><strong>Frontend Portal:</strong> React.js with conditional form logic</li>
              <li><strong>CRM Integration:</strong> HubSpot API for contact management</li>
              <li><strong>Notifications:</strong> Slack webhooks for team updates</li>
              <li><strong>Document Generation:</strong> Automated PDF creation</li>
              <li><strong>Compliance Tracking:</strong> Custom dashboard with audit trails</li>
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Automation</Badge>
            <Badge variant="outline">Healthcare</Badge>
            <Badge variant="outline">Portal</Badge>
            <Badge variant="outline">Compliance</Badge>
            <Badge variant="outline">CRM Integration</Badge>
            <Badge variant="outline">Slack</Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Similar admin challenges?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We can automate your admin workflows and save your team 10+ hours per week in just 2-4 weeks.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Book Automation Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default NDISAutomation;