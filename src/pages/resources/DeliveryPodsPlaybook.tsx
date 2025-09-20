import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { StickyCTA } from "@/components/ui/sticky-cta";
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
import { BookOpen, Clock, Users, CheckCircle, ArrowRight, Download } from "lucide-react";

const DeliveryPodsPlaybook = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const downloadPlaybook = () => {
    // In a real implementation, this would download the actual playbook
    console.log("Download playbook");
  };

  const chapters = [
    {
      number: "01",
      title: "Pod Fundamentals",
      description: "Understanding delivery pods and why they work",
      duration: "15 min read",
      content: {
        sections: [
          {
            heading: "What is a Delivery Pod?",
            content: "A delivery pod is a small, cross-functional team (typically 3-5 people) that operates as a mini-agency within your agency. Unlike traditional project handoffs, pods own the entire delivery lifecycle from strategy to execution."
          },
          {
            heading: "Why Pods Work",
            content: `Traditional agency problems:
• Projects get lost in handoffs between departments
• No single point of accountability
• Timeline promises break down in execution
• Quality varies based on who's available

Pod solutions:
• End-to-end ownership eliminates handoffs
• Clear accountability with dedicated team leads
• Consistent team composition builds domain expertise
• Standardized processes ensure quality`
          },
          {
            heading: "Pod Composition",
            content: `Core roles in a delivery pod:
• Pod Lead (project strategy & client communication)
• Designer (visual design & UX)
• Developer (technical implementation)
• Specialist (varies by pod: copywriter, automation expert, SEO, etc.)

Optional roles:
• QA specialist (for complex projects)
• Account manager (for high-touch clients)`
          },
          {
            heading: "Pod vs Traditional Structure",
            content: `Traditional: Strategy → Design → Development → QA → Launch (linear, prone to breaks)

Pod: Strategy + Design + Development + QA happening in parallel cycles (iterative, resilient)

Result: 40% faster delivery, 60% fewer revisions, 80% improvement in on-time delivery`
          }
        ]
      }
    },
    {
      number: "02", 
      title: "Team Structure",
      description: "Roles, responsibilities, and communication flows",
      duration: "20 min read",
      content: {
        sections: [
          {
            heading: "Pod Lead Responsibilities",
            content: `Primary duties:
• Sprint planning and capacity allocation
• Client communication and expectation management
• Quality control and delivery standards
• Team coordination and blocking issue resolution
• Performance tracking and reporting

Skills needed:
• Project management experience
• Client-facing communication skills
• Technical understanding (doesn't need to code)
• Problem-solving and priority management`
          },
          {
            heading: "Designer Role",
            content: `Responsibilities:
• UI/UX design for web and mobile projects
• Brand compliance and visual consistency
• Design system maintenance
• Prototype creation and user testing
• Asset preparation for development

Pod-specific skills:
• Fast iteration and feedback incorporation
• Collaboration with developers during build
• Client presentation and design rationale`
          },
          {
            heading: "Developer Role",
            content: `Core responsibilities:
• Frontend and backend development
• Technical architecture decisions
• Code quality and performance optimization
• Integration with third-party services
• Deployment and maintenance

Pod-specific approach:
• Works directly with designer (no handoff delays)
• Participates in client demos and technical discussions
• Maintains documentation for team knowledge sharing`
          },
          {
            heading: "Communication Flows",
            content: `Internal communication:
• Daily 15-minute standups
• Weekly sprint planning (2 hours)
• Bi-weekly retrospectives (1 hour)

Client communication:
• Weekly update calls (30 minutes)
• Sprint demo sessions (45 minutes)
• Emergency escalation process (2-hour response)

Documentation:
• Shared workspace (Slack channel per pod)
• Project tracking (ClickUp/Asana)
• Client-facing reports (weekly summaries)`
          }
        ]
      }
    },
    {
      number: "03",
      title: "Sprint Planning",
      description: "2-week cycles, capacity planning, and promise tracking",
      duration: "25 min read",
      content: {
        sections: [
          {
            heading: "2-Week Sprint Structure",
            content: `Week 1: Discovery & Design
• Day 1-2: Requirements gathering and planning
• Day 3-5: Design and technical architecture
• Day 6-7: Client review and feedback incorporation

Week 2: Build & Test
• Day 8-10: Development and content creation
• Day 11-12: QA testing and refinements
• Day 13-14: Client demo and next sprint planning`
          },
          {
            heading: "Capacity Planning",
            content: `Standard capacity allocation:
• Pod Lead: 20% planning, 60% execution oversight, 20% client communication
• Designer: 80% design work, 20% collaboration time
• Developer: 85% coding, 15% planning and communication
• Specialist: 90% specialized work, 10% team coordination

Buffer management:
• 20% buffer for revisions and scope adjustments
• Emergency capacity: 1 day per sprint for urgent fixes
• Knowledge sharing: 2 hours per sprint for documentation`
          },
          {
            heading: "Promise Tracking System",
            content: `Three levels of commitments:
1. Sprint Promises (what we'll deliver this sprint)
2. Project Promises (overall timeline and deliverables)
3. Quality Promises (standards and review processes)

Tracking methods:
• Daily progress updates in project management tool
• Weekly client-facing progress reports
• Monthly promise vs. delivery analysis
• Quarterly team performance reviews`
          },
          {
            heading: "Scope Management",
            content: `Scope creep prevention:
• Clear sprint boundaries with defined deliverables
• Change request process for mid-sprint additions
• Impact assessment for all new requirements
• Client education on sprint-based delivery

Scope adjustment process:
1. Identify scope change request
2. Assess impact on current sprint
3. Present options: delay, swap, or add to next sprint
4. Get client approval before proceeding
5. Update project timeline and communicate changes`
          }
        ]
      }
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "QA processes, testing protocols, and delivery standards",
      duration: "18 min read",
      content: {
        sections: [
          {
            heading: "QA Framework",
            content: `Three-tier QA approach:
1. Self-QA: Creator reviews own work before handoff
2. Peer Review: Team member reviews before client delivery
3. Final Review: Pod lead approves before client presentation

Quality gates:
• Design: Brand compliance, usability, responsiveness
• Development: Code review, performance testing, browser compatibility
• Content: Grammar, tone, SEO optimization
• Overall: Client requirements met, delivery standards achieved`
          },
          {
            heading: "Testing Protocols",
            content: `Web Development Testing:
• Cross-browser testing (Chrome, Firefox, Safari, Edge)
• Mobile responsiveness testing
• Performance testing (page load speed <3 seconds)
• Accessibility compliance (WCAG AA)
• Form functionality and validation
• Integration testing with third-party services

Design Review Checklist:
• Brand guideline compliance
• Typography and color consistency
• Image optimization and quality
• User experience flow validation
• Mobile design review`
          },
          {
            heading: "Delivery Standards",
            content: `Pre-delivery checklist:
□ All deliverables meet project requirements
□ QA testing completed and documented
□ Client feedback incorporated
□ Performance benchmarks met
□ Documentation updated
□ Backup and version control confirmed

Client handoff process:
1. Internal final review (24 hours before delivery)
2. Client demo preparation
3. Delivery with documentation
4. Client training/walkthrough
5. Post-delivery support transition`
          },
          {
            heading: "Error Prevention",
            content: `Common error patterns and prevention:
• Missing requirements: Use detailed project briefs and confirmation calls
• Technical issues: Maintain staging environments and pre-launch testing
• Design inconsistencies: Use design systems and style guides
• Communication gaps: Structured update cadence and documentation

Error response protocol:
1. Immediate acknowledgment (within 2 hours)
2. Impact assessment and solution options (within 4 hours)
3. Fix implementation (within 24 hours)
4. Post-mortem analysis to prevent recurrence`
          }
        ]
      }
    },
    {
      number: "05",
      title: "Client Communication",
      description: "Updates, reporting, and expectation management",
      duration: "12 min read",
      content: {
        sections: [
          {
            heading: "Communication Cadence",
            content: `Weekly touchpoints:
• Monday: Sprint planning summary and week's priorities
• Wednesday: Mid-week progress update with any blockers
• Friday: Weekly wrap-up with demo of completed work

Monthly reporting:
• Project progress against timeline
• Budget utilization and forecasting
• Performance metrics and KPIs
• Upcoming priorities and dependencies`
          },
          {
            heading: "Expectation Management",
            content: `Setting clear expectations:
• Project timeline with key milestones
• Communication preferences and response times
• Revision limits and change request process
• Quality standards and review procedures

Managing scope creep:
• Document all requests, no matter how small
• Provide impact assessment for each change
• Offer alternatives that fit within current scope
• Maintain friendly but firm boundaries`
          },
          {
            heading: "Status Reporting Templates",
            content: `Weekly Status Report Format:
• Completed this week: [specific deliverables]
• In progress: [current work with % complete]
• Next week priorities: [planned work]
• Blockers/risks: [anything needing client input]
• Questions/decisions needed: [specific asks]

Demo Presentation Structure:
1. Week's objectives recap (2 minutes)
2. Completed work walkthrough (15 minutes)
3. Next sprint preview (5 minutes)
4. Q&A and feedback collection (remaining time)`
          },
          {
            heading: "Difficult Conversation Management",
            content: `When things go wrong:
• Acknowledge issues quickly and transparently
• Take ownership without making excuses
• Present solution options with clear timelines
• Offer compensation or make-goods when appropriate

Preventing escalations:
• Regular check-ins to surface concerns early
• Clear documentation of all decisions and changes
• Proactive communication about potential issues
• Strong internal processes to minimize problems`
          }
        ]
      }
    },
    {
      number: "06",
      title: "Scaling & Optimization",
      description: "Growing pods, measuring success, and continuous improvement",
      duration: "22 min read",
      content: {
        sections: [
          {
            heading: "Pod Performance Metrics",
            content: `Key Performance Indicators:
• On-time delivery rate (target: 95%+)
• Client satisfaction scores (target: 4.5/5+)
• Revenue per pod member (track monthly)
• Project profitability margins
• Team utilization rates (target: 80-85%)

Quality metrics:
• Revision requests per project (target: <2)
• Post-launch issues (target: <5% of projects)
• Client retention rate (target: 90%+)
• Referral rate from pod clients`
          },
          {
            heading: "Scaling Pod Operations",
            content: `When to scale:
• Consistent 100% utilization for 2+ months
• Waitlist of qualified prospects
• Team skill gaps limiting project types
• Geographic or timezone expansion needs

Scaling approaches:
1. Add specialist to existing pod (safest)
2. Create second pod with experienced lead
3. Split high-performing pod into two teams
4. Partner with external specialists

New pod setup checklist:
□ Identify and train pod lead
□ Recruit core team members
□ Set up communication and project tools
□ Create client onboarding process
□ Establish QA and reporting procedures`
          },
          {
            heading: "Continuous Improvement",
            content: `Monthly optimization review:
• Analyze performance metrics vs. targets
• Review client feedback and satisfaction scores
• Identify process bottlenecks and inefficiencies
• Test new tools or methodologies
• Update documentation and templates

Quarterly strategic review:
• Assess pod composition and skill gaps
• Review market positioning and service offerings
• Evaluate pricing and profitability
• Plan capacity expansion or contraction
• Set goals for next quarter`
          },
          {
            heading: "Pod Evolution Strategies",
            content: `Specialization paths:
• Industry-focused pods (e-commerce, SaaS, healthcare)
• Service-focused pods (automation, SEO, video)
• Client-size focused pods (enterprise, SMB, startup)

Advanced pod structures:
• Multi-pod projects for large clients
• Rotating specialists across pods
• Client-embedded pod members
• Hub-and-spoke model with shared resources

Success indicators for evolution:
• Consistent premium pricing acceptance
• Inbound referrals for specialized work
• Team members becoming industry experts
• Higher client lifetime value`
          }
        ]
      }
    }
  ];

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
              <BreadcrumbPage>Delivery Pods Playbook</BreadcrumbPage>
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
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Comprehensive Guide</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Delivery Pods Playbook
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            How modern agencies keep promises to the calendar and scale delivery without chaos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Reading
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={bookCall}
            >
              Book implementation call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What you'll learn</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete framework for building delivery pods that consistently hit deadlines and exceed client expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Structure</h3>
              <p className="text-muted-foreground">Optimal pod composition and role definitions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sprint Planning</h3>
              <p className="text-muted-foreground">2-week cycles that actually stick to schedule</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
              <p className="text-muted-foreground">QA processes that catch issues before clients do</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents - Interactive */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Playbook</h2>
            <p className="text-xl text-muted-foreground">Click any chapter to explore the content</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {chapters.map((chapter, index) => (
                <AccordionItem key={chapter.number} value={`item-${index}`} className="border rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center w-full">
                      <div className="bg-primary/10 text-primary rounded-lg p-3 mr-4">
                        <span className="font-bold text-lg">{chapter.number}</span>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-xl font-semibold mb-1">{chapter.title}</h3>
                        <p className="text-muted-foreground text-sm">{chapter.description}</p>
                      </div>
                      <div className="text-right mr-4">
                        <p className="text-sm text-muted-foreground">{chapter.duration}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-8">
                      {chapter.content.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border-l-4 border-primary/20 pl-6">
                          <h4 className="text-lg font-semibold mb-3 text-primary">{section.heading}</h4>
                          <div className="prose prose-sm max-w-none">
                            {section.content.split('\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-muted-foreground leading-relaxed mb-2 whitespace-pre-line">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      <div className="mt-8 pt-6 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Chapter {chapter.number} • {chapter.duration}
                          </span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              if (index === chapters.length - 1) {
                                bookCall();
                              } else {
                                // Scroll to next chapter for better UX
                                const nextAccordion = document.querySelector(`[value="item-${index + 1}"]`);
                                if (nextAccordion) {
                                  nextAccordion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                              }
                            }}
                          >
                            {index === chapters.length - 1 ? 'Get Implementation Help' : 'Next Chapter'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section id="related-resources" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Creative Brief Template</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Structure your projects with clear goals, audience definition, and creative direction.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/resources/creative-brief-template">View Template</a>
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Web Launch Checklist</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Ensure every web project meets performance, SEO, and quality standards.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/resources/web-launch-checklist">View Checklist</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to implement?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a 30-min call and we'll help you set up your first delivery pod in 24-48 hours.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              Book implementation call
            </Button>
          </motion.div>
        </div>
      </section>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default DeliveryPodsPlaybook;