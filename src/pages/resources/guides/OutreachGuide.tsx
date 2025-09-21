import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyCTA } from "@/components/ui/sticky-cta";
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
import { MessageSquare, Clock, Target, ArrowRight } from "lucide-react";

const OutreachGuide = () => {
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
              <BreadcrumbPage>Outreach Systems</BreadcrumbPage>
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
            <MessageSquare className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Outreach Guide</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Outreach Systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Cold email, LinkedIn, and multi-channel prospecting strategies
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 justify-center text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>35 min read</span>
            </div>
            <Badge variant="secondary">Advanced</Badge>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    What You'll Learn
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Cold Email</h4>
                      <p className="text-sm text-muted-foreground">Write compelling cold emails that get responses</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">LinkedIn Outreach</h4>
                      <p className="text-sm text-muted-foreground">Professional networking and prospecting</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Personalization</h4>
                      <p className="text-sm text-muted-foreground">Scale personalized messaging effectively</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Follow-up Sequences</h4>
                      <p className="text-sm text-muted-foreground">Systematic follow-up that converts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guide Content */}
              <div className="prose prose-lg max-w-none">
                <h2 id="cold-email-fundamentals">Cold Email Mastery Framework</h2>
                <p>
                  Cold email delivers the highest ROI of any outreach channel when executed properly. This proven framework 
                  generates 15-25% reply rates and consistent pipeline growth.
                </p>

                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold mb-2">🎯 Success Benchmarks</h4>
                  <ul className="text-sm mb-0">
                    <li>• <strong>Open Rate:</strong> 40-60% (proper subject lines + deliverability)</li>
                    <li>• <strong>Reply Rate:</strong> 15-25% (relevant personalization + clear value)</li>
                    <li>• <strong>Meeting Rate:</strong> 3-8% (strong positioning + timing)</li>
                  </ul>
                </div>

                <h3>The AIDA-P Formula for Cold Emails</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
                  <p className="font-semibold mb-2">Subject Line: [Specific Benefit] for [Company Name]</p>
                  <p className="text-sm mb-2"><strong>Attention:</strong> Relevant observation about their business</p>
                  <p className="text-sm mb-2"><strong>Interest:</strong> Specific problem you can solve</p>
                  <p className="text-sm mb-2"><strong>Desire:</strong> Brief case study or social proof</p>
                  <p className="text-sm mb-2"><strong>Action:</strong> Clear, low-commitment next step</p>
                  <p className="text-sm mb-0"><strong>Personalization:</strong> Company-specific insight or compliment</p>
                </div>

                <h3>High-Converting Email Template</h3>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-4 font-mono text-sm">
                  <p className="mb-2"><strong>Subject:</strong> Quick question about [Company]'s [specific initiative]</p>
                  <p className="mb-2">Hi [First Name],</p>
                  <p className="mb-2">I noticed [Company] just [specific recent development - funding, expansion, etc.]. Congratulations!</p>
                  <p className="mb-2">I'm reaching out because [similar company] was facing [specific challenge] when they were at a similar stage. We helped them [specific outcome] in [timeframe].</p>
                  <p className="mb-2">Would it make sense to have a brief conversation about how [Company] is handling [relevant challenge]?</p>
                  <p className="mb-2">Best,<br/>[Your name]</p>
                  <p className="mb-0">P.S. Here's a [relevant resource] that might be helpful regardless: [link]</p>
                </div>

                <h3>Research & Personalization Checklist</h3>
                <ul>
                  <li><strong>Company triggers:</strong> Recent funding, expansion, leadership changes</li>
                  <li><strong>Individual insights:</strong> Recent posts, shared connections, background</li>
                  <li><strong>Industry context:</strong> Current trends, challenges, opportunities</li>
                  <li><strong>Competitive intel:</strong> What tools they're using, gaps you can fill</li>
                </ul>

                <h2 id="linkedin-strategy">LinkedIn Outreach System</h2>
                <p>
                  LinkedIn generates 3x higher response rates than email but requires a different approach. Focus on building relationships before pitching.
                </p>

                <h3>Profile Optimization for Outreach</h3>
                <ul>
                  <li><strong>Professional headline:</strong> Focus on outcomes you deliver, not job title</li>
                  <li><strong>Summary section:</strong> Client success stories and specific metrics</li>
                  <li><strong>Activity posts:</strong> Share valuable insights 2-3x per week</li>
                  <li><strong>Recommendations:</strong> Get specific testimonials from clients</li>
                </ul>

                <h3>3-Touch LinkedIn Sequence</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Touch 1: Connection Request</p>
                    <p className="text-sm mb-0">"Hi [Name], I've been following [Company]'s growth in [industry]. Would love to connect and share some insights from working with similar [role/industry] leaders."</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Touch 2: Value Message (3-7 days later)</p>
                    <p className="text-sm mb-0">"Thanks for connecting! Saw your recent post about [topic]. We just helped [similar company] with [related challenge] - thought you might find this case study interesting: [link]"</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Touch 3: Soft Ask (1 week later)</p>
                    <p className="text-sm mb-0">"Hope the case study was helpful! If [Company] is exploring [relevant solution], I'd be happy to share what's worked for other [industry] leaders. Worth a brief call?"</p>
                  </div>
                </div>

                <h3>LinkedIn InMail Best Practices</h3>
                <ul>
                  <li><strong>Subject line:</strong> Reference their company/industry, not your product</li>
                  <li><strong>Opening:</strong> Mention a mutual connection or specific company insight</li>
                  <li><strong>Value prop:</strong> Focus on their likely priorities, not your features</li>
                  <li><strong>CTA:</strong> Ask for 15 minutes, not a "demo" or "sales call"</li>
                </ul>

                <h2 id="personalization-at-scale">Scaling Personalization Systems</h2>
                <p>
                  Achieve 10x personalization volume without sacrificing quality using these proven frameworks and tools.
                </p>

                <h3>Research Automation Stack</h3>
                <ul>
                  <li><strong>Apollo/ZoomInfo:</strong> Contact discovery and enrichment</li>
                  <li><strong>Clearbit/Hunter:</strong> Company intelligence gathering</li>
                  <li><strong>Clay/Phantombuster:</strong> LinkedIn and web scraping</li>
                  <li><strong>GPT-4:</strong> Personalization line generation</li>
                </ul>

                <h3>Dynamic Personalization Framework</h3>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">3-Tier Personalization System</p>
                  <ol className="text-sm pl-4">
                    <li><strong>Tier 1 (High-value prospects):</strong> 10-15 min custom research per person</li>
                    <li><strong>Tier 2 (Good-fit prospects):</strong> 2-3 min templated personalization</li>
                    <li><strong>Tier 3 (Volume prospects):</strong> Industry/company-level personalization</li>
                  </ol>
                </div>

                <h3>Industry-Specific Messaging Templates</h3>
                <ul>
                  <li><strong>SaaS:</strong> Focus on user adoption, churn reduction, expansion revenue</li>
                  <li><strong>E-commerce:</strong> Conversion rates, customer acquisition costs, seasonal trends</li>
                  <li><strong>Professional Services:</strong> Efficiency, client satisfaction, competitive differentiation</li>
                  <li><strong>Manufacturing:</strong> Process optimization, cost reduction, supply chain resilience</li>
                </ul>

                <h2 id="follow-up-sequences">Multi-Touch Follow-up Strategy</h2>
                <p>
                  80% of sales require 5+ touchpoints, but 90% of salespeople give up after 3. This systematic approach ensures consistent follow-through.
                </p>

                <h3>The 8-Touch Email Sequence</h3>
                <div className="space-y-3 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 1: Initial outreach</p>
                      <p>Value-focused introduction</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 2: Case study (4 days)</p>
                      <p>Relevant success story</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 3: Resource share (1 week)</p>
                      <p>Helpful content/tool</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 4: Different angle (2 weeks)</p>
                      <p>New problem/opportunity</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 5: Social proof (3 weeks)</p>
                      <p>Testimonials/reviews</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 6: Urgency/scarcity (1 month)</p>
                      <p>Limited time offer</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 7: Break-up email (6 weeks)</p>
                      <p>"Last attempt" message</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded">
                      <p className="font-semibold">Touch 8: Re-engage (3 months)</p>
                      <p>New trigger/development</p>
                    </div>
                  </div>
                </div>

                <h3>Multi-Channel Coordination Rules</h3>
                <ul>
                  <li><strong>Email + LinkedIn:</strong> Space touches 48-72 hours apart</li>
                  <li><strong>Phone calls:</strong> Only after 2-3 email touches</li>
                  <li><strong>Social engagement:</strong> Like/comment before direct outreach</li>
                  <li><strong>Video messages:</strong> Use for high-value prospects on touches 3-4</li>
                </ul>

                <h2 id="multi-channel-approach">Omnichannel Outreach Orchestration</h2>
                <p>
                  Coordinate touchpoints across email, LinkedIn, phone, and social media for maximum impact while maintaining message consistency.
                </p>

                <h3>Channel-Specific Best Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">📧 Email Strengths</h4>
                    <ul className="text-sm">
                      <li>• Detailed value propositions</li>
                      <li>• Sharing resources/case studies</li>
                      <li>• Follow-up scheduling</li>
                      <li>• Formal introductions</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💼 LinkedIn Strengths</h4>
                    <ul className="text-sm">
                      <li>• Relationship building</li>
                      <li>• Social proof leverage</li>
                      <li>• Industry insights sharing</li>
                      <li>• Warm introductions</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">📞 Phone Strengths</h4>
                    <ul className="text-sm">
                      <li>• Immediate response/clarification</li>
                      <li>• Complex problem discussion</li>
                      <li>• Relationship acceleration</li>
                      <li>• Closing conversations</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🎥 Video Strengths</h4>
                    <ul className="text-sm">
                      <li>• Personal connection</li>
                      <li>• Complex demonstrations</li>
                      <li>• Breaking through noise</li>
                      <li>• High-impact follow-ups</li>
                    </ul>
                  </div>
                </div>

                <h3>Omnichannel Sequence Example</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Week 1-2: Foundation Building</p>
                  <ul className="text-sm pl-4">
                    <li>Day 1: LinkedIn connection request</li>
                    <li>Day 3: First email (value-focused)</li>
                    <li>Day 5: LinkedIn message (case study)</li>
                    <li>Day 8: Follow-up email (resource share)</li>
                    <li>Day 12: LinkedIn comment on their post</li>
                  </ul>
                </div>

                <h2 id="tracking-optimization">Performance Tracking & Optimization</h2>
                <p>Measure what matters and continuously improve your outreach effectiveness:</p>
                
                <h3>Key Metrics Dashboard</h3>
                <ul>
                  <li><strong>Volume metrics:</strong> Contacts reached, emails sent, connections made</li>
                  <li><strong>Engagement metrics:</strong> Open rates, reply rates, connection acceptance</li>
                  <li><strong>Conversion metrics:</strong> Meetings booked, opportunities created, deals closed</li>
                  <li><strong>Efficiency metrics:</strong> Time per prospect, cost per meeting, ROI per channel</li>
                </ul>

                <h3>A/B Testing Framework</h3>
                <ul>
                  <li><strong>Subject lines:</strong> Test question vs. statement vs. benefit-focused</li>
                  <li><strong>Email length:</strong> Short (50-75 words) vs. medium (100-150 words)</li>
                  <li><strong>CTA style:</strong> Direct ask vs. soft inquiry vs. resource offer</li>
                  <li><strong>Send timing:</strong> Day of week, time of day optimization</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your outreach?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our team build and manage your outreach system while you focus on closing deals.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Book Outreach Strategy Call
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

export default OutreachGuide;