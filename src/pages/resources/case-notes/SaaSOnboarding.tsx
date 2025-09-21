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
import { Users, Clock, TrendingUp, ArrowRight, Target, Zap } from "lucide-react";

const SaaSOnboarding = () => {
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
              <BreadcrumbPage>SaaS User Onboarding</BreadcrumbPage>
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
            <Users className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Case Study</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            23% Churn → Interactive Onboarding → 91% Activation Rate
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 text-sm text-muted-foreground mb-8"
          >
            <Badge className="bg-purple-100 text-purple-800">SaaS</Badge>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 weeks delivery</span>
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
                  B2B SaaS with complex project management features experiencing 23% monthly churn. Only 34% of users 
                  completed setup within first week, with most abandoning during initial configuration.
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
                  Interactive onboarding system with progressive disclosure, smart defaults, sample data, and 
                  contextual guidance. Integrated with customer success workflows and usage analytics.
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
                  First-week activation increased to 91%, monthly churn reduced to 8.2%. Time-to-value decreased 
                  from 12 days to 2.5 days with 67% improvement in feature adoption.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Onboarding Performance Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">91%</div>
                  <div className="text-sm text-muted-foreground">Activation Rate</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">8.2%</div>
                  <div className="text-sm text-muted-foreground">Monthly Churn</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">2.5 days</div>
                  <div className="text-sm text-muted-foreground">Time to Value</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">67%</div>
                  <div className="text-sm text-muted-foreground">Feature Adoption ↑</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Implementation */}
          <div className="prose prose-lg max-w-none">
            <h2>Onboarding Flow Redesign</h2>
            
            <h3>User Research & Analysis (Week 1)</h3>
            <ul>
              <li>Analyzed 847 user sessions to identify drop-off points</li>
              <li>Conducted 23 user interviews with churned customers</li>
              <li>Mapped existing onboarding journey: 14 required steps, avg 45 minutes</li>
              <li>Identified core "aha moments" for successful long-term users</li>
            </ul>

            <h3>Progressive Onboarding Design (Weeks 2-3)</h3>
            <ul>
              <li>Reduced initial setup to 3 essential steps (from 14)</li>
              <li>Created smart default configurations based on industry/company size</li>
              <li>Designed contextual tooltips and progressive disclosure UI</li>
              <li>Built sample project templates for immediate value demonstration</li>
            </ul>

            <h3>Interactive Implementation (Weeks 4-5)</h3>
            <ul>
              <li>Developed React-based guided tour with Shepherd.js</li>
              <li>Integrated checklist component with progress tracking</li>
              <li>Added celebration animations for milestone completion</li>
              <li>Built analytics dashboard for onboarding funnel monitoring</li>
            </ul>

            <h2>Key Onboarding Flow Components</h2>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">The 3-Step Quick Start</h4>
              <ol className="text-sm pl-4">
                <li><strong>Step 1:</strong> Company profile (auto-populated from signup data)</li>
                <li><strong>Step 2:</strong> Team size & use case selection (triggers smart defaults)</li>
                <li><strong>Step 3:</strong> Sample project creation (immediate value demonstration)</li>
              </ol>
              <p className="text-sm mt-3 mb-0"><em>Result: 91% completion rate vs. 34% with old 14-step flow</em></p>
            </div>

            <h3>Progressive Feature Introduction</h3>
            <ul>
              <li><strong>Week 1:</strong> Core task creation and assignment features</li>
              <li><strong>Week 2:</strong> Collaboration tools and commenting system</li>
              <li><strong>Week 3:</strong> Reporting and analytics features</li>
              <li><strong>Week 4:</strong> Advanced automation and integrations</li>
            </ul>

            <h3>Contextual Help System</h3>
            <ul>
              <li><strong>Smart tooltips:</strong> Appear only when users need them</li>
              <li><strong>Empty states:</strong> Provide specific next-step guidance</li>
              <li><strong>Progress indicators:</strong> Show completion status and next steps</li>
              <li><strong>Video snippets:</strong> 30-second clips for complex features</li>
            </ul>

            <h2>Customer Success Integration</h2>
            <p>
              Onboarding system integrated with customer success workflows to provide personalized support 
              based on user behavior and engagement patterns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Automated Triggers</h4>
                <ul className="text-sm">
                  <li>Day 1: Welcome email with quick start guide</li>
                  <li>Day 3: Check-in if less than 50% onboarding complete</li>
                  <li>Day 7: Success manager outreach for enterprise</li>
                  <li>Day 14: Feature adoption email sequence</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Risk Indicators</h4>
                <ul className="text-sm">
              <li>No login within 48 hours - Priority outreach</li>
              <li>Incomplete setup after 3 days - Personalized help</li>
              <li>Low feature usage - Targeted training offer</li>
              <li>Support ticket during onboarding - Success escalation</li>
                </ul>
              </div>
            </div>

            <h2>Technology Implementation</h2>
            <ul>
              <li><strong>Frontend:</strong> React with Shepherd.js for guided tours</li>
              <li><strong>Analytics:</strong> Mixpanel for user behavior tracking</li>
              <li><strong>Automation:</strong> Intercom for messaging workflows</li>
              <li><strong>Data:</strong> PostgreSQL with event streaming</li>
              <li><strong>Monitoring:</strong> Custom dashboard for onboarding metrics</li>
            </ul>

            <h2>Continuous Optimization</h2>
            <p>
              Post-launch optimization focused on reducing time-to-value and increasing feature 
              adoption through data-driven improvements and user feedback integration.
            </p>
            <ul>
              <li>A/B tested onboarding flow variations for different user segments</li>
              <li>Implemented heat mapping to optimize UI element placement</li>
              <li>Added gamification elements increasing completion rates by 23%</li>
              <li>Created industry-specific onboarding paths for better relevance</li>
            </ul>

            <h2>Lessons Learned</h2>
            <ul>
              <li><strong>Less is more:</strong> Reducing steps from 14 to 3 dramatically improved completion</li>
              <li><strong>Show value first:</strong> Sample data let users experience benefits immediately</li>
              <li><strong>Progressive disclosure:</strong> Advanced features introduced after core value established</li>
              <li><strong>Personalization matters:</strong> Industry-specific templates increased engagement 40%</li>
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">SaaS</Badge>
            <Badge variant="outline">User Onboarding</Badge>
            <Badge variant="outline">Churn Reduction</Badge>
            <Badge variant="outline">UX Design</Badge>
            <Badge variant="outline">Customer Success</Badge>
            <Badge variant="outline">Analytics</Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Struggling with user activation?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We've helped 30+ SaaS companies improve activation rates and reduce churn through better onboarding.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Book Onboarding Strategy Call
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

export default SaaSOnboarding;