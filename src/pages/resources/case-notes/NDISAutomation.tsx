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
                <FileText className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Case Study</span>
              </motion.div>
              
              <motion.h1 
                id="overview"
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
              <Card id="key-metrics">
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

              {/* Implementation Strategy */}
              <Card id="implementation-details">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Implementation Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Phase 1 */}
                  <div className="border-l-4 border-red-200 pl-6 py-4 bg-red-50/50 rounded-r-lg">
                    <h3 className="text-lg font-semibold mb-4 text-red-800">Phase 1: Discovery & Assessment (Week 1)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Mapped existing admin workflows and identified <span className="font-semibold text-foreground">23 manual touchpoints</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Documented NDIS compliance requirements and quality assurance standards</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Analyzed current tool stack: CRM, document storage, communication channels</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Interviewed staff to understand daily pain points and bottlenecks</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-blue-200 pl-6 py-4 bg-blue-50/50 rounded-r-lg">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800">Phase 2: Portal Development (Week 2)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Built responsive client intake portal with <span className="font-semibold text-foreground">mobile-first design</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Implemented conditional logic forms reducing completion time by <span className="font-semibold text-foreground">60%</span></p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Created automated document generation using client responses</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Set up secure file upload system for supporting documentation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-green-200 pl-6 py-4 bg-green-50/50 rounded-r-lg">
                    <h3 className="text-lg font-semibold mb-4 text-green-800">Phase 3: Automation & Training (Week 3)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Configured multi-channel notifications: <span className="font-semibold text-foreground">Slack, email, and SMS alerts</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Built custom dashboard for tracking application status and deadlines</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Trained <span className="font-semibold text-foreground">8 staff members</span> on new workflows with hands-on sessions</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">Established automated backup and monitoring systems</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technology Stack */}
              <Card id="technology-stack">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Technology Stack & Integrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors">
                      <h4 className="font-semibold mb-2 text-primary">Frontend Portal</h4>
                      <p className="text-sm text-muted-foreground">React.js with conditional form logic</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors">
                      <h4 className="font-semibold mb-2 text-primary">CRM Integration</h4>
                      <p className="text-sm text-muted-foreground">HubSpot API for contact management</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors">
                      <h4 className="font-semibold mb-2 text-primary">Notifications</h4>
                      <p className="text-sm text-muted-foreground">Slack webhooks for team updates</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors">
                      <h4 className="font-semibold mb-2 text-primary">Document Generation</h4>
                      <p className="text-sm text-muted-foreground">Automated PDF creation</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors">
                      <h4 className="font-semibold mb-2 text-primary">Compliance Tracking</h4>
                      <p className="text-sm text-muted-foreground">Custom dashboard with audit trails</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors">
                      <h4 className="font-semibold mb-2 text-primary">Security</h4>
                      <p className="text-sm text-muted-foreground">End-to-end encryption & NDIS compliance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
        </div>
      </div>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default NDISAutomation;