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
                  Business automation eliminates repetitive tasks, reduces human error, and frees up your team to focus on high-value activities. 
                  This comprehensive guide provides step-by-step workflows you can implement immediately using no-code tools.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold mb-2">💡 Quick Win: Start Here</h4>
                  <p className="text-sm mb-0">Begin with lead capture automation - it typically saves 5-10 hours per week and has immediate ROI.</p>
                </div>

                <h2 id="zapier-fundamentals">Zapier Setup & Best Practices</h2>
                <p>
                  Zapier connects over 5,000 apps to create automated workflows called "Zaps." Follow this proven framework:
                </p>
                
                <h3>Essential Zapier Concepts</h3>
                <ul>
                  <li><strong>Triggers:</strong> Events that start your automation (form submission, new email, etc.)</li>
                  <li><strong>Actions:</strong> What happens after the trigger (create record, send email, etc.)</li>
                  <li><strong>Filters:</strong> Conditional logic to control when actions run</li>
                  <li><strong>Multi-step Zaps:</strong> Complex workflows with multiple actions</li>
                </ul>

                <h3>Setup Framework</h3>
                <ol>
                  <li><strong>Plan First:</strong> Map your current manual process before building</li>
                  <li><strong>Start Simple:</strong> Begin with single-step automations, then add complexity</li>
                  <li><strong>Test Thoroughly:</strong> Use Zapier's test feature before going live</li>
                  <li><strong>Monitor & Optimize:</strong> Check automation history weekly for errors</li>
                </ol>

                <h2 id="lead-capture-workflows">Complete Lead Capture Automation</h2>
                <p>
                  Turn website visitors into organized, nurtured leads with zero manual work. This workflow saves 8-12 hours per week for most businesses.
                </p>

                <h3>Workflow 1: Website Form → CRM → Email Sequence</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Trigger: New form submission (Typeform, Gravity Forms, etc.)</p>
                  <p className="text-sm mb-2"><strong>Step 1:</strong> Create contact in CRM (HubSpot, Pipedrive, etc.)</p>
                  <p className="text-sm mb-2"><strong>Step 2:</strong> Add to email marketing list (Mailchimp, ConvertKit, etc.)</p>
                  <p className="text-sm mb-2"><strong>Step 3:</strong> Send Slack notification to sales team</p>
                  <p className="text-sm mb-0"><strong>Step 4:</strong> Create follow-up task with due date</p>
                </div>

                <h3>Workflow 2: LinkedIn Lead → Enriched Contact</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Trigger: New LinkedIn connection or message</p>
                  <p className="text-sm mb-2"><strong>Step 1:</strong> Extract contact info using Clearbit/Hunter.io</p>
                  <p className="text-sm mb-2"><strong>Step 2:</strong> Create enriched CRM record</p>
                  <p className="text-sm mb-2"><strong>Step 3:</strong> Add to appropriate email sequence</p>
                  <p className="text-sm mb-0"><strong>Step 4:</strong> Schedule personalized follow-up</p>
                </div>

                <h2 id="crm-integration">CRM Integration & Data Sync</h2>
                <p>
                  Keep customer data consistent across all platforms with these proven integration patterns:
                </p>

                <h3>Bi-directional Sync Workflows</h3>
                <ul>
                  <li><strong>Contact Updates:</strong> Changes in one system automatically update all others</li>
                  <li><strong>Deal Stages:</strong> Sales progress syncs between CRM and project management tools</li>
                  <li><strong>Activity Logging:</strong> Emails, calls, and meetings logged automatically</li>
                  <li><strong>Task Creation:</strong> New deals trigger onboarding tasks in project tools</li>
                </ul>

                <h3>Data Enrichment Pipeline</h3>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">🎯 High-Impact Automation</p>
                  <p className="text-sm mb-2">When someone fills out your form with just name and email:</p>
                  <ol className="text-sm pl-4">
                    <li>Zapier sends email to Clearbit API</li>
                    <li>Returns company info, role, social profiles</li>
                    <li>Updates CRM with full contact profile</li>
                    <li>Assigns to appropriate sales rep based on company size</li>
                    <li>Triggers personalized email sequence</li>
                  </ol>
                </div>

                <h2 id="notification-systems">Intelligent Notification Systems</h2>
                <p>
                  Get the right information to the right people at the right time without notification overload.
                </p>

                <h3>Smart Alert Rules</h3>
                <ul>
                  <li><strong>High-Value Leads:</strong> Instant Slack alerts for leads from target companies</li>
                  <li><strong>Customer Issues:</strong> Priority notifications for support tickets from key accounts</li>
                  <li><strong>Sales Milestones:</strong> Team celebrations when deals reach certain values</li>
                  <li><strong>Weekly Digests:</strong> Summary reports instead of constant updates</li>
                </ul>

                <h3>Escalation Workflows</h3>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Example: Support Ticket Escalation</p>
                  <ol className="text-sm pl-4">
                    <li>New ticket created → Assigned to support agent</li>
                    <li>If no response in 2 hours → Notify team lead</li>
                    <li>If no resolution in 24 hours → Escalate to manager</li>
                    <li>If customer replies → Reset escalation timer</li>
                  </ol>
                </div>

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