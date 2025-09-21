import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyCTA } from "@/components/ui/sticky-cta";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { TableOfContents } from "@/components/ui/table-of-contents";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Zap, 
  Clock, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BarChart3, 
  Workflow, 
  MessageSquare, 
  Database,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  Settings,
  Mail,
  Smartphone
} from "lucide-react";

const AutomationGuide = () => {
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
              <BreadcrumbPage>Automation Playbook</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Complete Automation Guide</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Business Automation Playbook
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business processes with proven no-code automation workflows that save hours daily and eliminate human error
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center"
          >
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>25 min read</span>
              </div>
              <Badge variant="secondary" className="px-3 py-1">
                <Target className="h-3 w-3 mr-1" />
                Intermediate
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                <span>10+ Ready-to-Use Workflows</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* What You'll Learn - Enhanced */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Target className="h-6 w-6 text-primary" />
                    What You'll Master in This Playbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Workflow className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Advanced Zapier Workflows</h4>
                        <p className="text-sm text-muted-foreground">Multi-step automations that connect 5+ apps seamlessly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Lead Capture & Nurturing</h4>
                        <p className="text-sm text-muted-foreground">Turn website visitors into organized, nurtured prospects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">CRM Integration & Data Sync</h4>
                        <p className="text-sm text-muted-foreground">Bi-directional sync between all your business tools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Smart Notification Systems</h4>
                        <p className="text-sm text-muted-foreground">Get the right alerts at the right time without spam</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="bg-accent/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">Expected ROI</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">15-25h</div>
                        <div className="text-xs text-muted-foreground">Saved per week</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">85%</div>
                        <div className="text-xs text-muted-foreground">Error reduction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">3-6mo</div>
                        <div className="text-xs text-muted-foreground">Full ROI</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Start Guide */}
              <Card className="border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Lightbulb className="h-6 w-6 text-accent" />
                    Quick Start: Your First Automation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-accent">🚀 Start Here - Lead Capture Automation</h4>
                    <p className="text-sm text-muted-foreground mb-4">This single workflow typically saves 8-12 hours per week and provides immediate ROI. Perfect for beginners.</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                        <div className="text-sm">
                          <strong>Form Submit Trigger:</strong> Website form, landing page, or lead magnet
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                        <div className="text-sm">
                          <strong>Create CRM Contact:</strong> Automatically add to HubSpot, Pipedrive, or your CRM
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                        <div className="text-sm">
                          <strong>Email Sequence:</strong> Add to nurturing campaign in Mailchimp/ConvertKit
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                        <div className="text-sm">
                          <strong>Team Alert:</strong> Instant Slack notification with lead details
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-accent/20">
                      <p className="text-xs text-muted-foreground">⏱️ Setup time: 30-45 minutes • 🔧 Difficulty: Beginner • 📈 Impact: High</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guide Content */}
              <div className="space-y-12">
                {/* Introduction */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl" id="introduction">
                      <Zap className="h-7 w-7 text-primary" />
                      Introduction to Business Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="text-lg leading-relaxed">
                        Business automation eliminates repetitive tasks, reduces human error by up to 85%, and frees up your team to focus on high-value strategic work. 
                        This comprehensive playbook provides battle-tested, step-by-step workflows you can implement immediately using no-code tools.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">73%</div>
                        <div className="text-sm text-muted-foreground">Average time savings</div>
                      </div>
                      <div className="text-center p-4 bg-accent/5 rounded-lg">
                        <div className="text-2xl font-bold text-accent mb-1">$48K</div>
                        <div className="text-sm text-muted-foreground">Annual cost savings</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/10 rounded-lg">
                        <div className="text-2xl font-bold text-secondary-foreground mb-1">4 weeks</div>
                        <div className="text-sm text-muted-foreground">Average implementation</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Why This Playbook Works</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            These aren't theoretical workflows - they're proven automations used by 200+ businesses to save thousands of hours monthly.
                          </p>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>✓ No coding required - visual, drag-and-drop setup</div>
                            <div>✓ Works with tools you already use</div>
                            <div>✓ ROI typically achieved within 90 days</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Zapier Fundamentals */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl" id="zapier-fundamentals">
                      <Settings className="h-7 w-7 text-primary" />
                      Zapier Mastery Framework
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="text-lg">
                        Zapier connects over 6,000 apps to create automated workflows called "Zaps." Master this proven framework used by automation experts:
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-accent/5 border-accent/20">
                        <CardHeader>
                          <CardTitle className="text-lg">Core Concepts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">T</div>
                              <div>
                                <div className="font-semibold text-foreground">Triggers</div>
                                <div className="text-sm text-muted-foreground">Events that start your automation (form submission, new email, etc.)</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">A</div>
                              <div>
                                <div className="font-semibold text-foreground">Actions</div>
                                <div className="text-sm text-muted-foreground">What happens after the trigger (create record, send email, etc.)</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">F</div>
                              <div>
                                <div className="font-semibold text-foreground">Filters</div>
                                <div className="text-sm text-muted-foreground">Conditional logic to control when actions run</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                          <CardTitle className="text-lg">Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-semibold text-foreground">Plan Before Building</div>
                                <div className="text-sm text-muted-foreground">Map your current manual process first</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-semibold text-foreground">Start Simple</div>
                                <div className="text-sm text-muted-foreground">Single-step automations first, then add complexity</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-semibold text-foreground">Test Thoroughly</div>
                                <div className="text-sm text-muted-foreground">Use real data in Zapier's test mode</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-semibold text-foreground">Monitor & Optimize</div>
                                <div className="text-sm text-muted-foreground">Check automation history weekly</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Pro Tip: The 80/20 Rule</h4>
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            Focus on automating the 20% of tasks that consume 80% of your time. These typically include: lead capture, 
                            data entry, email sequences, and status updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lead Capture Workflows */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl" id="lead-capture-workflows">
                      <Users className="h-7 w-7 text-primary" />
                      Complete Lead Capture System
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="text-lg">
                        Transform website visitors into organized, nurtured leads with zero manual work. These workflows save 15-20 hours per week for most businesses.
                      </p>
                    </div>

                    {/* Workflow 1 */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                        <h3 className="text-xl font-semibold text-foreground">Website Form → Complete Lead Nurturing</h3>
                        <Badge variant="secondary" className="ml-auto">High Impact</Badge>
                      </div>
                      
                      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                        <CardContent className="pt-6">
                          <div className="grid gap-4">
                            <div className="flex items-start gap-4">
                              <div className="bg-primary text-primary-foreground rounded-lg p-2 flex-shrink-0">
                                <Workflow className="h-5 w-5" />
                              </div>
                              <div className="space-y-2">
                                <div className="font-semibold text-foreground">Trigger: New Form Submission</div>
                                <div className="text-sm text-muted-foreground">Typeform, Gravity Forms, Webflow, or any web form</div>
                              </div>
                            </div>
                            
                            <Separator />
                            
                            <div className="space-y-4">
                              <div className="flex items-start gap-4">
                                <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                                <div>
                                  <div className="font-medium text-foreground">Create CRM Contact</div>
                                  <div className="text-sm text-muted-foreground">Add to HubSpot, Pipedrive, Salesforce with lead source tracking</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start gap-4">
                                <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                                <div>
                                  <div className="font-medium text-foreground">Email Marketing Integration</div>
                                  <div className="text-sm text-muted-foreground">Add to Mailchimp/ConvertKit with appropriate tags and sequences</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start gap-4">
                                <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                                <div>
                                  <div className="font-medium text-foreground">Instant Team Notification</div>
                                  <div className="text-sm text-muted-foreground">Slack alert with lead details and qualification score</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start gap-4">
                                <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                                <div>
                                  <div className="font-medium text-foreground">Automated Follow-up Task</div>
                                  <div className="text-sm text-muted-foreground">Create time-sensitive follow-up task with lead context</div>
                                </div>
                              </div>

                              <div className="flex items-start gap-4">
                                <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</div>
                                <div>
                                  <div className="font-medium text-foreground">Lead Scoring & Routing</div>
                                  <div className="text-sm text-muted-foreground">Auto-assign to sales rep based on lead value and territory</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-background rounded-lg p-4 border">
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="h-4 w-4 text-primary" />
                                <span className="font-medium text-foreground">Expected Results</span>
                              </div>
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                  <div className="font-semibold text-primary">15-20h</div>
                                  <div className="text-muted-foreground">Saved/week</div>
                                </div>
                                <div>
                                  <div className="font-semibold text-primary">95%</div>
                                  <div className="text-muted-foreground">Lead capture rate</div>
                                </div>
                                <div>
                                  <div className="font-semibold text-primary">2min</div>
                                  <div className="text-muted-foreground">Response time</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Workflow 2 */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                        <h3 className="text-xl font-semibold text-foreground">LinkedIn Lead → Enriched CRM Contact</h3>
                        <Badge variant="outline" className="ml-auto">B2B Focus</Badge>
                      </div>
                      
                      <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <div className="bg-secondary text-secondary-foreground rounded-lg p-2 flex-shrink-0">
                                <Users className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">Trigger: LinkedIn Activity</div>
                                <div className="text-sm text-muted-foreground">New connection, message, or profile view (via LinkedIn automation tools)</div>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                                  <div className="text-sm">
                                    <div className="font-medium">Data Enrichment</div>
                                    <div className="text-muted-foreground">Extract company info via Clearbit/Hunter.io</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                                  <div className="text-sm">
                                    <div className="font-medium">CRM Creation</div>
                                    <div className="text-muted-foreground">Rich contact with company details</div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                                  <div className="text-sm">
                                    <div className="font-medium">Email Sequences</div>
                                    <div className="text-muted-foreground">Industry-specific nurturing campaigns</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-1" />
                                  <div className="text-sm">
                                    <div className="font-medium">Follow-up Scheduling</div>
                                    <div className="text-muted-foreground">Personalized outreach based on profile data</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Implementation Tip</h4>
                          <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                            Start with Workflow 1 (website forms) as it provides immediate value and is easiest to set up. 
                            Once running smoothly for 2-3 weeks, add LinkedIn automation.
                          </p>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            💰 Combined ROI: $2,400-3,600 monthly time savings for typical B2B business
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CRM Integration */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl" id="crm-integration">
                      <Database className="h-7 w-7 text-primary" />
                      CRM Integration & Data Sync Mastery
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="text-lg">
                        Keep customer data consistent across all platforms with these proven integration patterns that eliminate data silos and manual updates.
                      </p>
                    </div>

                    {/* Bi-directional Sync */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Workflow className="h-6 w-6 text-primary" />
                        Bi-directional Sync Workflows
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-primary/5 border-primary/20">
                          <CardContent className="pt-6">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-3">
                                <Users className="h-5 w-5 text-primary" />
                                <span className="font-semibold">Contact & Deal Management</span>
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Contact Updates</div>
                                    <div className="text-muted-foreground">Changes in one system update all others instantly</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Deal Stages</div>
                                    <div className="text-muted-foreground">Sales progress syncs to project management tools</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Activity Logging</div>
                                    <div className="text-muted-foreground">Emails, calls, meetings logged automatically</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-accent/5 border-accent/20">
                          <CardContent className="pt-6">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-3">
                                <Settings className="h-5 w-5 text-accent" />
                                <span className="font-semibold">Process Automation</span>
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Task Creation</div>
                                    <div className="text-muted-foreground">New deals trigger onboarding tasks automatically</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Document Generation</div>
                                    <div className="text-muted-foreground">Contracts, proposals created from deal data</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                                  <div className="text-sm">
                                    <div className="font-medium">Team Notifications</div>
                                    <div className="text-muted-foreground">Smart alerts based on deal value & stage</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Data Enrichment Pipeline */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        Advanced Data Enrichment Pipeline
                      </h3>
                      
                      <Card className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200 dark:border-emerald-800">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="bg-emerald-600 text-white rounded-lg p-2 flex-shrink-0">
                              <Target className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🎯 High-Impact Workflow: Minimal Input → Maximum Data</h4>
                              <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">
                                When someone submits a form with just name and email, this pipeline enriches it into a complete business profile:
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid gap-4">
                            <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                              <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                              <div>
                                <div className="font-medium text-emerald-800 dark:text-emerald-200">Email → Clearbit API</div>
                                <div className="text-sm text-emerald-600 dark:text-emerald-400">Extract company, role, and social profiles</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                              <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                              <div>
                                <div className="font-medium text-emerald-800 dark:text-emerald-200">CRM Profile Creation</div>
                                <div className="text-sm text-emerald-600 dark:text-emerald-400">Full contact with company size, industry, tech stack</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                              <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                              <div>
                                <div className="font-medium text-emerald-800 dark:text-emerald-200">Smart Assignment</div>
                                <div className="text-sm text-emerald-600 dark:text-emerald-400">Route to sales rep based on company size & territory</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                              <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                              <div>
                                <div className="font-medium text-emerald-800 dark:text-emerald-200">Personalized Sequences</div>
                                <div className="text-sm text-emerald-600 dark:text-emerald-400">Industry-specific email campaigns with relevant content</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-emerald-600 mb-1">90%</div>
                              <div className="text-sm text-emerald-700 dark:text-emerald-400">Data completeness achieved automatically</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Systems */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl" id="notification-systems">
                      <MessageSquare className="h-7 w-7 text-primary" />
                      Intelligent Notification Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                      <p className="text-lg">
                        Get the right information to the right people at the right time without notification overload. Smart filtering prevents alert fatigue while ensuring critical information reaches decision-makers instantly.
                      </p>
                    </div>

                    {/* Smart Alert Rules */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Smartphone className="h-6 w-6 text-primary" />
                        Priority-Based Alert System
                      </h3>
                      
                      <div className="grid gap-4">
                        <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">!</div>
                              <div className="flex-1">
                                <div className="font-semibold text-red-800 dark:text-red-200 mb-2">🚨 High Priority (Instant)</div>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                  <div className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-red-700 dark:text-red-300">Enterprise Leads ($100K+ potential)</div>
                                      <div className="text-red-600 dark:text-red-400">Slack + SMS to sales director</div>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-red-700 dark:text-red-300">VIP Customer Issues</div>
                                      <div className="text-red-600 dark:text-red-400">Priority support tickets from key accounts</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                              <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">⚡</div>
                              <div className="flex-1">
                                <div className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚡ Medium Priority (Within 1 hour)</div>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                  <div className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-amber-700 dark:text-amber-300">Qualified Leads</div>
                                      <div className="text-amber-600 dark:text-amber-400">Target company contacts & warm referrals</div>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-amber-700 dark:text-amber-300">Sales Milestones</div>
                                      <div className="text-amber-600 dark:text-amber-400">Deal progression & team celebrations</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">📊</div>
                              <div className="flex-1">
                                <div className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📊 Low Priority (Daily/Weekly Digest)</div>
                                <div className="grid md:grid-cols-2 gap-3 text-sm">
                                  <div className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-blue-700 dark:text-blue-300">General Leads</div>
                                      <div className="text-blue-600 dark:text-blue-400">Newsletter signups & info requests</div>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-blue-700 dark:text-blue-300">Performance Reports</div>
                                      <div className="text-blue-600 dark:text-blue-400">Weekly summaries & metrics dashboards</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Escalation Workflow Example */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <AlertCircle className="h-6 w-6 text-accent" />
                        Smart Escalation Workflow
                      </h3>
                      
                      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3 mb-4">
                            <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Example: Support Ticket Escalation System</h4>
                              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
                                Automated escalation ensures no customer falls through the cracks while preventing unnecessary alerts:
                              </p>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                              <div>
                                <div className="font-medium text-yellow-800 dark:text-yellow-200">Initial Assignment</div>
                                <div className="text-sm text-yellow-700 dark:text-yellow-400">New ticket → Auto-assigned to available support agent</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                              <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                              <div>
                                <div className="font-medium text-yellow-800 dark:text-yellow-200">First Escalation (2 hours)</div>
                                <div className="text-sm text-yellow-700 dark:text-yellow-400">No response → Notify team lead + mark urgent</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                              <div>
                                <div className="font-medium text-yellow-800 dark:text-yellow-200">Manager Escalation (24 hours)</div>
                                <div className="text-sm text-yellow-700 dark:text-yellow-400">No resolution → Escalate to support manager + CC customer success</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
                              <div>
                                <div className="font-medium text-green-800 dark:text-green-200">Smart Reset</div>
                                <div className="text-sm text-green-700 dark:text-green-400">Customer replies → Reset escalation timer & notify assigned agent</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <h2 id="advanced-workflows">Advanced Automation Patterns</h2>

                <h3>Customer Journey Automation</h3>
                <p>Automate the entire customer lifecycle from first contact to renewal:</p>
                <ul>
                  <li><strong>Onboarding Sequence:</strong> Welcome emails, setup instructions, check-in calls</li>
                  <li><strong>Usage Monitoring:</strong> Alerts when customers stop using your product</li>
                  <li><strong>Renewal Reminders:</strong> Automated outreach 60-90 days before renewal</li>
                  <li><strong>Upsell Triggers:</strong> Identify expansion opportunities based on usage patterns</li>
                </ul>

                <h3>Internal Process Automation</h3>
                <ul>
                  <li><strong>Expense Reporting:</strong> Receipt scanning → expense creation → approval workflow</li>
                  <li><strong>Content Publishing:</strong> Blog post approval → social media scheduling → newsletter inclusion</li>
                  <li><strong>HR Workflows:</strong> New hire → equipment requests → onboarding checklist</li>
                </ul>

                <h2 id="roi-tracking">Measuring Automation ROI</h2>
                <p>Track these metrics to prove and improve your automation value:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Time Savings</h4>
                    <ul className="text-sm">
                      <li>• Hours saved per week per process</li>
                      <li>• Employee hourly cost × hours saved</li>
                      <li>• Annual savings calculation</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Quality Improvements</h4>
                    <ul className="text-sm">
                      <li>• Reduced error rates</li>
                      <li>• Faster response times</li>
                      <li>• Improved customer satisfaction</li>
                    </ul>
                  </div>
                </div>

                <h2 id="common-mistakes">Common Automation Mistakes to Avoid</h2>
                <ul>
                  <li><strong>Over-automating:</strong> Some tasks need human judgment - don't automate everything</li>
                  <li><strong>No backup plans:</strong> Always have manual processes for when automations fail</li>
                  <li><strong>Ignoring maintenance:</strong> Review and update automations monthly</li>
                  <li><strong>Poor testing:</strong> Test with real data before deploying to production</li>
                  <li><strong>No monitoring:</strong> Set up error alerts and check automation logs regularly</li>
                </ul>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need help implementing these automations?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our delivery pods can set up these automation workflows for you in just 2-4 weeks.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Book Implementation Call
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

export default AutomationGuide;