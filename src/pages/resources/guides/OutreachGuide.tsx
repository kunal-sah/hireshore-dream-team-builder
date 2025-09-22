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
import { MessageSquare, Clock, Target, ArrowRight, Mail, Users, Phone, Video, TrendingUp, CheckCircle, Copy, Star, Zap, BarChart3 } from "lucide-react";

const OutreachGuide = () => {
  const copyTemplate = (template: string) => {
    navigator.clipboard?.writeText(template);
  };

  const emailTemplate = `Subject: Quick question about [Company]'s [specific initiative]

Hi [First Name],

I noticed [Company] just [specific recent development - funding, expansion, etc.]. Congratulations!

I'm reaching out because [similar company] was facing [specific challenge] when they were at a similar stage. We helped them [specific outcome] in [timeframe].

Would it make sense to have a brief conversation about how [Company] is handling [relevant challenge]?

Best,
[Your name]

P.S. Here's a [relevant resource] that might be helpful regardless: [link]`;

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
            Outreach Systems That Scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Master cold email, LinkedIn outreach, and multi-channel prospecting strategies that generate consistent leads
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
              {/* Overview Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Cold Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">Write compelling emails that get 15-25% reply rates</p>
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <TrendingUp className="h-3 w-3" />
                      Highest ROI channel
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Users className="h-5 w-5 text-blue-500" />
                      </div>
                      <CardTitle className="text-lg">LinkedIn Outreach</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">Professional networking and relationship building</p>
                    <div className="flex items-center gap-2 text-xs text-blue-600">
                      <Star className="h-3 w-3" />
                      3x higher response rates
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Zap className="h-5 w-5 text-purple-500" />
                      </div>
                      <CardTitle className="text-lg">Multi-Channel</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">Coordinate touchpoints across all channels</p>
                    <div className="flex items-center gap-2 text-xs text-purple-600">
                      <CheckCircle className="h-3 w-3" />
                      80% need 5+ touches
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Success Metrics */}
              <Card className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                    Success Benchmarks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">40-60%</div>
                      <div className="text-sm font-medium mb-1">Open Rate</div>
                      <div className="text-xs text-muted-foreground">Proper subject lines + deliverability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">15-25%</div>
                      <div className="text-sm font-medium mb-1">Reply Rate</div>
                      <div className="text-xs text-muted-foreground">Relevant personalization + clear value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">3-8%</div>
                      <div className="text-sm font-medium mb-1">Meeting Rate</div>
                      <div className="text-xs text-muted-foreground">Strong positioning + timing</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cold Email Section */}
              <Card id="cold-email-fundamentals" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Mail className="h-7 w-7 text-primary" />
                    Cold Email Mastery Framework
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Cold email delivers the highest ROI of any outreach channel when executed properly. This proven framework generates 15-25% reply rates and consistent pipeline growth.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* AIDA-P Formula */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      The AIDA-P Formula
                    </h3>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">A</div>
                        <div>
                          <div className="font-medium">Attention</div>
                          <div className="text-sm text-muted-foreground">Relevant observation about their business</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">I</div>
                        <div>
                          <div className="font-medium">Interest</div>
                          <div className="text-sm text-muted-foreground">Specific problem you can solve</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">D</div>
                        <div>
                          <div className="font-medium">Desire</div>
                          <div className="text-sm text-muted-foreground">Brief case study or social proof</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">A</div>
                        <div>
                          <div className="font-medium">Action</div>
                          <div className="text-sm text-muted-foreground">Clear, low-commitment next step</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">P</div>
                        <div>
                          <div className="font-medium">Personalization</div>
                          <div className="text-sm text-muted-foreground">Company-specific insight or compliment</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Template */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Copy className="h-5 w-5 text-primary" />
                      High-Converting Email Template
                    </h3>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="space-y-4 font-mono text-sm">
                        <div>
                          <span className="font-bold text-blue-600">Subject:</span> Quick question about [Company]'s [specific initiative]
                        </div>
                        <div className="border-l-4 border-blue-300 pl-4 space-y-2">
                          <p>Hi [First Name],</p>
                          <p>I noticed [Company] just [specific recent development - funding, expansion, etc.]. Congratulations!</p>
                          <p>I'm reaching out because [similar company] was facing [specific challenge] when they were at a similar stage. We helped them [specific outcome] in [timeframe].</p>
                          <p>Would it make sense to have a brief conversation about how [Company] is handling [relevant challenge]?</p>
                          <p>Best,<br/>[Your name]</p>
                          <p className="text-blue-600">P.S. Here's a [relevant resource] that might be helpful regardless: [link]</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => copyTemplate(emailTemplate)}
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Template
                      </Button>
                    </div>
                  </div>

                  {/* Research Checklist */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Research & Personalization Checklist
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Company Triggers</div>
                            <div className="text-sm text-muted-foreground">Recent funding, expansion, leadership changes</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Individual Insights</div>
                            <div className="text-sm text-muted-foreground">Recent posts, shared connections, background</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Industry Context</div>
                            <div className="text-sm text-muted-foreground">Current trends, challenges, opportunities</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium">Competitive Intel</div>
                            <div className="text-sm text-muted-foreground">What tools they're using, gaps you can fill</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LinkedIn Section */}
              <Card id="linkedin-strategy" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Users className="h-7 w-7 text-blue-500" />
                    LinkedIn Outreach System
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    LinkedIn generates 3x higher response rates than email but requires a different approach. Focus on building relationships before pitching.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Optimization */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Profile Optimization for Outreach</h3>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Professional Headline</div>
                          <div className="text-sm text-muted-foreground">Focus on outcomes you deliver, not job title</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Summary Section</div>
                          <div className="text-sm text-muted-foreground">Client success stories and specific metrics</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Activity Posts</div>
                          <div className="text-sm text-muted-foreground">Share valuable insights 2-3x per week</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3-Touch Sequence */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">3-Touch LinkedIn Sequence</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                          <p className="font-semibold">Connection Request</p>
                        </div>
                        <p className="text-sm italic">
                          "Hi [Name], I've been following [Company]'s growth in [industry]. Would love to connect and share some insights from working with similar [role/industry] leaders."
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                          <p className="font-semibold">Value Message (3-7 days later)</p>
                        </div>
                        <p className="text-sm italic">
                          "Thanks for connecting! Saw your recent post about [topic]. We just helped [similar company] with [related challenge] - thought you might find this case study interesting: [link]"
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                          <p className="font-semibold">Soft Ask (1 week later)</p>
                        </div>
                        <p className="text-sm italic">
                          "Hope the case study was helpful! If [Company] is exploring [relevant solution], I'd be happy to share what's worked for other [industry] leaders. Worth a brief call?"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Multi-Touch Follow-up */}
              <Card id="follow-up-sequences" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Zap className="h-7 w-7 text-purple-500" />
                    Multi-Touch Follow-up Strategy
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    80% of sales require 5+ touchpoints, but 90% of salespeople give up after 3. This systematic approach ensures consistent follow-through.
                  </p>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">The 8-Touch Email Sequence</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { touch: 1, title: "Initial outreach", desc: "Value-focused introduction", color: "blue" },
                      { touch: 2, title: "Case study (4 days)", desc: "Relevant success story", color: "blue" },
                      { touch: 3, title: "Resource share (1 week)", desc: "Helpful content/tool", color: "blue" },
                      { touch: 4, title: "Different angle (2 weeks)", desc: "New problem/opportunity", color: "green" },
                      { touch: 5, title: "Social proof (3 weeks)", desc: "Testimonials/reviews", color: "green" },
                      { touch: 6, title: "Urgency/scarcity (1 month)", desc: "Limited time offer", color: "green" },
                      { touch: 7, title: "Break-up email (6 weeks)", desc: "Last attempt message", color: "yellow" },
                      { touch: 8, title: "Re-engage (3 months)", desc: "New trigger/development", color: "yellow" }
                    ].map((item) => (
                      <div key={item.touch} className={`p-3 rounded-lg ${
                        item.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800' :
                        item.color === 'green' ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800' :
                        'bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                            item.color === 'blue' ? 'bg-blue-500' :
                            item.color === 'green' ? 'bg-green-500' :
                            'bg-yellow-500'
                          }`}>
                            {item.touch}
                          </div>
                          <p className="font-semibold text-sm">{item.title}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Multi-Channel Approach */}
              <Card id="multi-channel-approach" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Video className="h-7 w-7 text-orange-500" />
                    Omnichannel Outreach Orchestration
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Coordinate touchpoints across email, LinkedIn, phone, and social media for maximum impact while maintaining message consistency.
                  </p>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">Channel-Specific Strengths</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-4">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Mail className="h-5 w-5 text-blue-600" />
                          Email Strengths
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Detailed value propositions</li>
                          <li>• Sharing resources/case studies</li>
                          <li>• Follow-up scheduling</li>
                          <li>• Formal introductions</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-green-600" />
                          LinkedIn Strengths
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Relationship building</li>
                          <li>• Social proof leverage</li>
                          <li>• Industry insights sharing</li>
                          <li>• Warm introductions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Phone className="h-5 w-5 text-yellow-600" />
                          Phone Strengths
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Immediate response/clarification</li>
                          <li>• Complex problem discussion</li>
                          <li>• Relationship acceleration</li>
                          <li>• Closing conversations</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Video className="h-5 w-5 text-purple-600" />
                          Video Strengths
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>• Personal connection</li>
                          <li>• Complex demonstrations</li>
                          <li>• Breaking through noise</li>
                          <li>• High-impact follow-ups</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking & Optimization */}
              <Card id="tracking-optimization" className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <BarChart3 className="h-7 w-7 text-green-600" />
                    Performance Tracking & Optimization
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Measure what matters and continuously improve your outreach effectiveness
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Metrics Dashboard</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">Volume Metrics</div>
                            <div className="text-xs text-muted-foreground">Contacts reached, emails sent, connections made</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">Engagement Metrics</div>
                            <div className="text-xs text-muted-foreground">Open rates, reply rates, connection acceptance</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                          <Target className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">Conversion Metrics</div>
                            <div className="text-xs text-muted-foreground">Meetings booked, opportunities created, deals closed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">A/b Testing Framework</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">Subject Lines</div>
                            <div className="text-xs text-muted-foreground">Question vs. statement vs. benefit-focused</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">Email Length</div>
                            <div className="text-xs text-muted-foreground">Short (50-75 words) vs. medium (100-150 words)</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">CTA Style</div>
                            <div className="text-xs text-muted-foreground">Direct ask vs. soft inquiry vs. resource offer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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