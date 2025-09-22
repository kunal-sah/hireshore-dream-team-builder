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
import { Users, Clock, TrendingUp, ArrowRight, Target, Zap, CheckCircle, BarChart3, Lightbulb, Rocket } from "lucide-react";

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

          {/* Challenge-Solution-Outcome */}
          <section id="challenge-solution" className="py-20">
            <div className="space-y-12">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      PROBLEM
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      B2B SaaS with complex project management features facing severe churn and activation challenges.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">23% monthly churn rate (3x industry average)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Only 34% completed setup within first week</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Complex 14-step onboarding (45 min average)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-blue-700 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      SOLUTION
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Interactive onboarding system with progressive disclosure and smart automation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Reduced to 3 essential steps with smart defaults</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Progressive disclosure with contextual guidance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Sample data for immediate value demonstration</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      OUTCOME
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Dramatic improvements in activation, retention, and time-to-value metrics.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Activation rate: 34% → 91% (+168%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Monthly churn: 23% → 8.2% (-64%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Time-to-value: 12 days → 2.5 days (-79%)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Metrics */}
              <Card id="key-metrics" className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Onboarding Performance Results</CardTitle>
                  <p className="text-muted-foreground">Transformation across key user experience metrics</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">91%</div>
                      <div className="text-sm text-muted-foreground">Activation Rate</div>
                      <div className="text-xs text-green-600 mt-1">+168% improvement</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">8.2%</div>
                      <div className="text-sm text-muted-foreground">Monthly Churn</div>
                      <div className="text-xs text-blue-600 mt-1">-64% reduction</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-purple-600 mb-2">2.5 days</div>
                      <div className="text-sm text-muted-foreground">Time to Value</div>
                      <div className="text-xs text-purple-600 mt-1">-79% faster</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-2">67%</div>
                      <div className="text-sm text-muted-foreground">Feature Adoption ↑</div>
                      <div className="text-xs text-orange-600 mt-1">Feature discovery</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Onboarding Redesign Process */}
              <section id="onboarding-redesign" className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Onboarding Flow Redesign</h2>
                
                <div className="grid gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <BarChart3 className="h-5 w-5" />
                        User Research & Analysis (Week 1)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Research Methodology</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <p><strong>Session Analysis:</strong> 847 user sessions analyzed</p>
                            <p><strong>User Interviews:</strong> 23 churned customers interviewed</p>
                            <p><strong>Journey Mapping:</strong> 14 required steps documented</p>
                          </div>
                          <div className="space-y-2">
                            <p><strong>Time Analysis:</strong> Average 45 minutes completion</p>
                            <p><strong>Drop-off Points:</strong> Key abandonment stages identified</p>
                            <p><strong>Success Patterns:</strong> Aha moments for long-term users</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">User behavior analyzed</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Pain points identified</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Success factors mapped</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <Lightbulb className="h-5 w-5" />
                        Progressive Onboarding Design (Weeks 2-3)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">The 3-Step Quick Start Revolution</h4>
                        <div className="grid gap-4">
                          <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-green-600">1</span>
                            </div>
                            <div>
                              <div className="font-semibold text-sm">Company Profile Setup</div>
                              <div className="text-xs text-muted-foreground">Auto-populated from signup data, smart industry defaults</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-green-600">2</span>
                            </div>
                            <div>
                              <div className="font-semibold text-sm">Team Size & Use Case Selection</div>
                              <div className="text-xs text-muted-foreground">Triggers intelligent configuration and feature recommendations</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-green-600">3</span>
                            </div>
                            <div>
                              <div className="font-semibold text-sm">Sample Project Creation</div>
                              <div className="text-xs text-muted-foreground">Immediate value demonstration with pre-populated data</div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
                          <div className="text-sm font-semibold text-green-700">Result: 91% completion rate vs. 34% with old 14-step flow</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-700">
                        <Rocket className="h-5 w-5" />
                        Interactive Implementation (Weeks 4-5)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Technical Implementation</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <span>React-based guided tour with Shepherd.js integration</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <span>Interactive checklist with progress tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <span>Celebration animations for milestone completion</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">User Experience Features</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <span>Contextual tooltips appearing when needed</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <span>Smart empty states with next-step guidance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <span>30-second video snippets for complex features</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Progressive Feature Introduction */}
              <section id="feature-introduction" className="space-y-6">
                <h2 className="text-3xl font-bold mb-8">Progressive Feature Introduction Strategy</h2>
                
                <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
                  <CardHeader>
                    <CardTitle className="text-indigo-700">4-Week Feature Rollout Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-indigo-600">1</span>
                            </div>
                            <span className="font-semibold">Week 1: Core Features</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Task creation, assignment, and basic project management</p>
                        </div>
                        
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-indigo-600">2</span>
                            </div>
                            <span className="font-semibold">Week 2: Collaboration</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Team communication tools, commenting, and file sharing</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-indigo-600">3</span>
                            </div>
                            <span className="font-semibold">Week 3: Analytics</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Reporting dashboards, progress tracking, and insights</p>
                        </div>
                        
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-indigo-600">4</span>
                            </div>
                            <span className="font-semibold">Week 4: Advanced</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Automation workflows, integrations, and custom configurations</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Customer Success Integration */}
              <section id="customer-success" className="space-y-6">
                <h2 className="text-3xl font-bold mb-8">Customer Success Integration</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-700">Automated Engagement Triggers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">Day 1: Welcome Sequence</div>
                          <div className="text-xs text-muted-foreground">Automated email with quick start guide and video tutorial</div>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">Day 3: Progress Check</div>
                          <div className="text-xs text-muted-foreground">Conditional outreach if less than 50% onboarding completed</div>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">Day 7: Success Manager</div>
                          <div className="text-xs text-muted-foreground">Personal outreach for enterprise accounts</div>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">Day 14: Feature Adoption</div>
                          <div className="text-xs text-muted-foreground">Targeted email sequence for advanced features</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="text-orange-700">Risk Detection & Intervention</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">No Login (48 hours)</div>
                          <div className="text-xs text-muted-foreground">Priority outreach with personalized assistance offer</div>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">Incomplete Setup (3 days)</div>
                          <div className="text-xs text-muted-foreground">One-on-one setup assistance and custom training</div>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">Low Feature Usage</div>
                          <div className="text-xs text-muted-foreground">Targeted training offers and use case guidance</div>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <div className="font-semibold text-sm mb-1">Support Ticket Created</div>
                          <div className="text-xs text-muted-foreground">Automatic escalation to success team</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Technology Implementation */}
              <section id="technology" className="space-y-6">
                <h2 className="text-3xl font-bold mb-8">Technology Stack & Implementation</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-t-4 border-t-blue-500">
                    <CardHeader>
                      <CardTitle className="text-blue-600">Frontend & UX</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">React + TypeScript</div>
                        <div className="text-xs text-muted-foreground">Component-based architecture</div>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Shepherd.js</div>
                        <div className="text-xs text-muted-foreground">Interactive guided tours</div>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Framer Motion</div>
                        <div className="text-xs text-muted-foreground">Smooth animations & transitions</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-600">Analytics & Tracking</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Mixpanel</div>
                        <div className="text-xs text-muted-foreground">User behavior tracking</div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Custom Dashboard</div>
                        <div className="text-xs text-muted-foreground">Onboarding funnel metrics</div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Hotjar</div>
                        <div className="text-xs text-muted-foreground">User session recordings</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-purple-500">
                    <CardHeader>
                      <CardTitle className="text-purple-600">Backend & Data</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">PostgreSQL</div>
                        <div className="text-xs text-muted-foreground">Event streaming & storage</div>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Intercom</div>
                        <div className="text-xs text-muted-foreground">Messaging automation</div>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Webhook System</div>
                        <div className="text-xs text-muted-foreground">Real-time event processing</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Key Lessons */}
              <section id="lessons-learned" className="space-y-6">
                <h2 className="text-3xl font-bold mb-8">Key Lessons & Best Practices</h2>
                
                <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
                  <CardHeader>
                    <CardTitle className="text-orange-700">Critical Success Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-yellow-500" />
                            Less is More
                          </div>
                          <p className="text-xs text-muted-foreground">Reducing steps from 14 to 3 dramatically improved completion rates and user satisfaction</p>
                        </div>
                        
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            Show Value First
                          </div>
                          <p className="text-xs text-muted-foreground">Sample data let users experience benefits immediately rather than starting with empty states</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Users className="h-4 w-4 text-blue-500" />
                            Progressive Disclosure
                          </div>
                          <p className="text-xs text-muted-foreground">Advanced features introduced after core value established prevented overwhelming new users</p>
                        </div>
                        
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
                          <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-purple-500" />
                            Personalization Matters
                          </div>
                          <p className="text-xs text-muted-foreground">Industry-specific templates and smart defaults increased engagement by 40%</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

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
        </div>
      </div>

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