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
                <h2 id="cold-email-fundamentals">Cold Email Fundamentals</h2>
                <p>
                  Cold email remains one of the most effective B2B prospecting channels when done correctly. 
                  This section covers the fundamentals of writing compelling cold emails.
                </p>

                <h2 id="linkedin-strategy">LinkedIn Outreach Strategy</h2>
                <p>
                  LinkedIn provides a professional platform for B2B outreach. Learn how to leverage it effectively:
                </p>
                <ul>
                  <li>Profile optimization for outreach</li>
                  <li>Connection request strategies</li>
                  <li>InMail best practices</li>
                  <li>Content engagement tactics</li>
                </ul>

                <h2 id="personalization-at-scale">Personalization at Scale</h2>
                <p>
                  Balance personal touch with efficiency using these proven techniques:
                </p>
                <ol>
                  <li>Research automation tools</li>
                  <li>Dynamic personalization tokens</li>
                  <li>Industry-specific messaging</li>
                  <li>Trigger-based outreach</li>
                </ol>

                <h2 id="follow-up-sequences">Multi-Touch Follow-up Sequences</h2>
                <p>
                  Most sales happen after multiple touchpoints. Design systematic follow-up sequences that convert.
                </p>

                <h2 id="multi-channel-approach">Multi-Channel Coordination</h2>
                <p>
                  Combine email, LinkedIn, phone, and social media for maximum impact while maintaining consistency.
                </p>
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