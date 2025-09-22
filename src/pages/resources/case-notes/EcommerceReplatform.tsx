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
import { ShoppingCart, Clock, TrendingUp, ArrowRight, Target, Zap, CheckCircle, Users, BarChart3 } from "lucide-react";

const EcommerceReplatform = () => {
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
              <BreadcrumbPage>E-commerce Platform Migration</BreadcrumbPage>
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
                <ShoppingCart className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Case Study</span>
              </motion.div>
              
              <motion.h1 
                id="overview"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
              >
                Legacy Platform → Shopify Plus → 312% Revenue Growth
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-6 text-sm text-muted-foreground mb-8"
              >
                <Badge className="bg-blue-100 text-blue-800">E-commerce</Badge>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 weeks delivery</span>
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
                      Established e-commerce brand stuck on legacy platform with declining performance and growth limitations.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">3.2% conversion rate (industry: 6-8%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">8+ second load times causing 71% bounce rate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Revenue plateau at $2M despite traffic growth</span>
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
                      Complete migration to Shopify Plus with performance optimization and UX enhancement.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Custom responsive theme development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Advanced filtering & search functionality</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Mobile-first checkout optimization</span>
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
                      Dramatic performance improvements driving significant revenue growth.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Revenue: $2M → $8.2M (+312%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Conversion: 3.2% → 8.7% (+172%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Load time: 8.4s → 1.8s (-78%)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Metrics */}
              <Card id="key-metrics" className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Performance Results</CardTitle>
                  <p className="text-muted-foreground">Measured impact across key business metrics</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">312%</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                      <div className="text-xs text-green-600 mt-1">$2M → $8.2M</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">8.7%</div>
                      <div className="text-sm text-muted-foreground">Conversion Rate</div>
                      <div className="text-xs text-blue-600 mt-1">+172% improvement</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-purple-600 mb-2">1.8s</div>
                      <div className="text-sm text-muted-foreground">Page Load Time</div>
                      <div className="text-xs text-purple-600 mt-1">-78% faster</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-2">43%</div>
                      <div className="text-sm text-muted-foreground">Mobile Conv. ↑</div>
                      <div className="text-xs text-orange-600 mt-1">Mobile optimization</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Migration Strategy */}
              <section id="migration-strategy" className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Migration Strategy & Execution</h2>
                
                <div className="grid gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <BarChart3 className="h-5 w-5" />
                        Pre-Migration Analysis (Week 1)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Comprehensive Site Audit</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <p><strong>Inventory:</strong> 2,847 products across 156 categories</p>
                            <p><strong>Content:</strong> 12,000+ URLs requiring migration</p>
                            <p><strong>Traffic:</strong> 847 ranking keywords identified</p>
                          </div>
                          <div className="space-y-2">
                            <p><strong>Performance:</strong> 3.2% conversion, 8.4s load time</p>
                            <p><strong>Behavior:</strong> 71% bounce rate analysis</p>
                            <p><strong>Journey:</strong> 7 key conversion paths mapped</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">SEO analysis completed</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Technical audit finished</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">User journey mapped</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <Zap className="h-5 w-5" />
                        Platform Setup & Design (Weeks 2-4)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Infrastructure Setup</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span>Shopify Plus environment with staging/production split</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span>CDN setup and performance optimization</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span>Security protocols and SSL implementation</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Design Development</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span>Custom theme optimized for conversions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span>Mobile-first responsive design approach</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                              <span>Advanced filtering and search functionality</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-700">
                        <Users className="h-5 w-5" />
                        Data Migration & Testing (Weeks 5-6)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Migration Checklist</h4>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Product catalog with enhanced attributes</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Customer data with complete order history</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>301 redirect strategy for all existing URLs</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Cross-device and browser QA testing</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Performance benchmarking completed</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>SEO validation and monitoring setup</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-700">
                        <ArrowRight className="h-5 w-5" />
                        Launch & Optimization (Weeks 7-8)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Strategic Launch Approach</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                            <div className="font-semibold text-orange-600 mb-1">Phase 1</div>
                            <div>Soft Launch</div>
                            <div className="text-xs text-muted-foreground mt-1">Select customers</div>
                          </div>
                          <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                            <div className="font-semibold text-orange-600 mb-1">Phase 2</div>
                            <div>Full Launch</div>
                            <div className="text-xs text-muted-foreground mt-1">Real-time monitoring</div>
                          </div>
                          <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                            <div className="font-semibold text-orange-600 mb-1">Phase 3</div>
                            <div>Optimization</div>
                            <div className="text-xs text-muted-foreground mt-1">Staff training</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Performance Improvements */}
              <section id="performance-improvements" className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Performance Transformation</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Zap className="h-5 w-5" />
                        Technical Enhancements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                          <span className="font-medium">Page Load Time</span>
                          <span className="font-bold text-blue-600">8.4s → 1.8s (-78%)</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                          <span className="font-medium">Mobile Performance Score</span>
                          <span className="font-bold text-blue-600">34 → 89</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                          <span className="font-medium">Server Response Time</span>
                          <span className="font-bold text-blue-600">2.1s → 0.3s</span>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Key Optimizations:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• WebP image format with lazy loading implementation</li>
                          <li>• Critical CSS inlining for faster rendering</li>
                          <li>• Cloudflare CDN with global edge caching</li>
                          <li>• JavaScript optimization and minification</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <TrendingUp className="h-5 w-5" />
                        User Experience Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                          <span className="font-medium">Conversion Rate</span>
                          <span className="font-bold text-green-600">3.2% → 8.7% (+172%)</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                          <span className="font-medium">Mobile Conversion</span>
                          <span className="font-bold text-green-600">1.8% → 5.1% (+183%)</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg">
                          <span className="font-medium">Cart Abandonment</span>
                          <span className="font-bold text-green-600">72% → 43% (-40%)</span>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <h4 className="font-semibold mb-2">UX Improvements:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Touch-optimized interactions for mobile</li>
                          <li>• Streamlined checkout process design</li>
                          <li>• Enhanced product recommendation engine</li>
                          <li>• Improved search and filtering experience</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Technology Stack */}
              <section id="technology-stack" className="space-y-6">
                <h2 className="text-3xl font-bold mb-8">Technology Stack & Integrations</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-t-4 border-t-blue-500">
                    <CardHeader>
                      <CardTitle className="text-blue-600">Platform & Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Shopify Plus</div>
                        <div className="text-xs text-muted-foreground">Enterprise e-commerce platform</div>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Cloudflare CDN</div>
                        <div className="text-xs text-muted-foreground">Global content delivery network</div>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Custom Liquid Theme</div>
                        <div className="text-xs text-muted-foreground">Optimized for conversions</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-600">Analytics & Marketing</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Google Analytics 4</div>
                        <div className="text-xs text-muted-foreground">Advanced tracking & insights</div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Hotjar Heatmaps</div>
                        <div className="text-xs text-muted-foreground">User behavior analysis</div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Klaviyo Integration</div>
                        <div className="text-xs text-muted-foreground">Email marketing automation</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-t-purple-500">
                    <CardHeader>
                      <CardTitle className="text-purple-600">Revenue & Retention</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">ReCharge Subscriptions</div>
                        <div className="text-xs text-muted-foreground">Recurring revenue platform</div>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Product Recommendations</div>
                        <div className="text-xs text-muted-foreground">AI-powered suggestions</div>
                      </div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="font-semibold text-sm mb-1">Personalization Engine</div>
                        <div className="text-xs text-muted-foreground">Dynamic content optimization</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">E-commerce</Badge>
                <Badge variant="outline">Shopify Plus</Badge>
                <Badge variant="outline">Platform Migration</Badge>
                <Badge variant="outline">Conversion Optimization</Badge>
                <Badge variant="outline">Mobile-First</Badge>
                <Badge variant="outline">Performance</Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your e-commerce platform?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We've migrated 50+ stores to modern platforms with zero downtime and significant performance gains.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Book Migration Strategy Call
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

export default EcommerceReplatform;