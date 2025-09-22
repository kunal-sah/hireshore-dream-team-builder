import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyCTA } from "@/components/ui/sticky-cta";
import { TableOfContents } from "@/components/ui/table-of-contents";
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

      <div className="flex gap-8 max-w-7xl mx-auto px-4 py-8">
        {/* Table of Contents - Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
            <div className="relative px-8">
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
                id="overview"
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
          <section id="challenge-solution" className="py-20">
            <div className="space-y-12">
              
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
              <Card id="key-metrics">
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

              {/* Implementation Details */}
              <div className="prose prose-lg max-w-none">
                <h2 id="onboarding-redesign">Onboarding Flow Redesign</h2>
                
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

                <h2 id="technology">Technology Implementation</h2>
                <ul>
                  <li><strong>Frontend:</strong> React with Shepherd.js for guided tours</li>
                  <li><strong>Analytics:</strong> Mixpanel for user behavior tracking</li>
                  <li><strong>Automation:</strong> Intercom for messaging workflows</li>
                  <li><strong>Data:</strong> PostgreSQL with event streaming</li>
                </ul>
              </div>

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
        </div>
      </div>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default SaaSOnboarding;