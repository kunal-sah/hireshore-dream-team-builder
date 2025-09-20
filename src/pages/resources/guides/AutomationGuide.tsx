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
import { Zap, Clock, Target, ArrowRight } from "lucide-react";

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
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Automation Guide</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Automation Playbook
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            No-code automation workflows for common business processes
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 justify-center text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>20 min read</span>
            </div>
            <Badge variant="secondary">Intermediate</Badge>
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
                      <h4 className="font-medium">Zapier Workflows</h4>
                      <p className="text-sm text-muted-foreground">Connect apps and automate repetitive tasks</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Lead Capture</h4>
                      <p className="text-sm text-muted-foreground">Automatically collect and organize leads</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">CRM Integration</h4>
                      <p className="text-sm text-muted-foreground">Sync data between systems seamlessly</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Notifications</h4>
                      <p className="text-sm text-muted-foreground">Set up smart alerts for key events</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guide Content */}
              <div className="prose prose-lg max-w-none">
                <h2 id="introduction">Introduction to Business Automation</h2>
                <p>
                  Business automation is the key to scaling operations without proportionally increasing overhead. 
                  This guide covers practical automation workflows that can be implemented using no-code tools.
                </p>

                <h2 id="zapier-fundamentals">Zapier Fundamentals</h2>
                <p>
                  Zapier connects over 5,000 apps to create automated workflows called "Zaps." Here's how to get started:
                </p>
                <ul>
                  <li>Understanding triggers and actions</li>
                  <li>Setting up multi-step workflows</li>
                  <li>Using filters and conditional logic</li>
                  <li>Testing and debugging automations</li>
                </ul>

                <h2 id="lead-capture-workflows">Lead Capture Workflows</h2>
                <p>
                  Automate your lead capture process to ensure no potential customer falls through the cracks:
                </p>
                <ol>
                  <li>Form submission triggers</li>
                  <li>Data validation and enrichment</li>
                  <li>CRM record creation</li>
                  <li>Follow-up sequence initiation</li>
                </ol>

                <h2 id="crm-integration">CRM Integration Strategies</h2>
                <p>
                  Keep your customer data synchronized across all platforms with these integration patterns:
                </p>

                <h2 id="notification-systems">Smart Notification Systems</h2>
                <p>
                  Set up intelligent alerts to stay informed without being overwhelmed by notifications.
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