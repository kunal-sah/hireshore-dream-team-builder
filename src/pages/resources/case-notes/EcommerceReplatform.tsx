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
import { ShoppingCart, Clock, TrendingUp, ArrowRight, Target, Zap } from "lucide-react";

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
                      Established e-commerce brand stuck on legacy platform with 3.2% conversion rate, slow load times (8+ seconds), 
                      and limited mobile experience. Revenue plateaued at $2M annually despite growing traffic.
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
                      Complete migration to Shopify Plus with custom theme, advanced filtering, subscription integration, 
                      and mobile-first checkout optimization. Preserved SEO rankings throughout transition.
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
                      Conversion rate increased to 8.7%, page load time reduced to 1.8 seconds. Revenue grew 312% to $8.2M 
                      in first year post-launch with 43% mobile conversion improvement.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Key Metrics */}
              <Card id="key-metrics">
                <CardHeader>
                  <CardTitle>Performance Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">312%</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">8.7%</div>
                      <div className="text-sm text-muted-foreground">Conversion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">1.8s</div>
                      <div className="text-sm text-muted-foreground">Page Load Time</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">43%</div>
                      <div className="text-sm text-muted-foreground">Mobile Conv. ↑</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Implementation */}
              <div className="prose prose-lg max-w-none">
                <h2 id="migration-strategy">Migration Strategy & Execution</h2>
                
                <h3>Pre-Migration Analysis (Week 1)</h3>
                <ul>
                  <li>Comprehensive site audit: 2,847 products, 156 categories, 12,000+ URLs</li>
                  <li>Performance baseline: 3.2% conversion, 8.4s load time, 71% bounce rate</li>
                  <li>SEO analysis: 847 ranking keywords, top traffic pages identified</li>
                  <li>Customer journey mapping: 7 key conversion paths documented</li>
                </ul>

                <h3>Platform Setup & Design (Weeks 2-4)</h3>
                <ul>
                  <li>Shopify Plus environment configuration with staging/production split</li>
                  <li>Custom theme development optimized for brand and conversion</li>
                  <li>Advanced product filtering and search functionality</li>
                  <li>Mobile-first responsive design with touch-optimized interactions</li>
                </ul>

                <h3>Data Migration & Testing (Weeks 5-6)</h3>
                <ul>
                  <li>Product catalog migration with enhanced attribute mapping</li>
                  <li>Customer data transfer with order history preservation</li>
                  <li>301 redirect strategy for all existing URLs</li>
                  <li>Comprehensive QA testing across devices and browsers</li>
                </ul>

                <h3>Launch & Optimization (Weeks 7-8)</h3>
                <ul>
                  <li>Soft launch with select customer segment for final validation</li>
                  <li>Full production launch with real-time monitoring</li>
                  <li>Post-launch conversion rate optimization based on user behavior</li>
                  <li>Staff training on new platform management and features</li>
                </ul>

                <h2 id="performance-improvements">Key Performance Improvements</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Technical Enhancements</h4>
                    <ul className="text-sm">
                      <li>• Page load time: 8.4s → 1.8s (-78%)</li>
                      <li>• Mobile performance score: 34 → 89</li>
                      <li>• Server response time: 2.1s → 0.3s</li>
                      <li>• Image optimization: WebP format, lazy loading</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">User Experience</h4>
                    <ul className="text-sm">
                      <li>• Conversion rate: 3.2% → 8.7% (+172%)</li>
                      <li>• Mobile conversion: 1.8% → 5.1% (+183%)</li>
                      <li>• Cart abandonment: 72% → 43% (-40%)</li>
                      <li>• Average order value: $89 → $127 (+43%)</li>
                    </ul>
                  </div>
                </div>

                <h2 id="success-factors">Critical Success Factors</h2>
                <ul>
                  <li><strong>SEO Preservation:</strong> Zero ranking loss during migration through careful redirect planning</li>
                  <li><strong>Mobile Optimization:</strong> Touch-first design resulted in 43% mobile conversion improvement</li>
                  <li><strong>Performance Focus:</strong> Sub-2-second load times significantly reduced bounce rate</li>
                  <li><strong>Conversion Design:</strong> Strategic placement of trust signals and CTAs throughout funnel</li>
                  <li><strong>Advanced Features:</strong> Product recommendations and personalization drove AOV growth</li>
                </ul>

                <h2 id="technology-stack">Technology Stack</h2>
                <ul>
                  <li><strong>Platform:</strong> Shopify Plus with custom liquid theme</li>
                  <li><strong>Performance:</strong> Cloudflare CDN, WebP images, critical CSS inlining</li>
                  <li><strong>Analytics:</strong> Google Analytics 4, Hotjar heatmaps, Shopify Analytics</li>
                  <li><strong>Marketing:</strong> Klaviyo email automation, Google/Facebook pixel integration</li>
                  <li><strong>Subscriptions:</strong> ReCharge integration for recurring revenue</li>
                </ul>

                <h2 id="post-launch">Post-Launch Optimization</h2>
                <p>
                  Continued optimization in the 90 days post-launch focused on conversion rate improvements and 
                  customer experience enhancements based on real user data and behavior analysis.
                </p>
                <ul>
                  <li>A/B tested checkout flow variations for additional conversion gains</li>
                  <li>Implemented abandoned cart recovery sequences with 28% recovery rate</li>
                  <li>Added product recommendation engine increasing cross-sell by 34%</li>
                  <li>Optimized search functionality reducing zero-result searches by 67%</li>
                </ul>
              </div>

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