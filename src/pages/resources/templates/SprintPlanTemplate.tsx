import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { CopyToClipboard } from "@/components/ui/copy-to-clipboard";
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
import { Zap, ChevronDown, Target, Calendar, Users, CheckCircle, Timer, TrendingUp } from "lucide-react";
import { useState } from "react";

const SprintPlanTemplate = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const sprintPhases = [
    { phase: "Planning", duration: "1 day", activities: "Goal setting, backlog refinement, capacity planning" },
    { phase: "Execution", duration: "8-9 days", activities: "Development, testing, daily standups" },
    { phase: "Review", duration: "1 day", activities: "Sprint review, stakeholder feedback" },
    { phase: "Retrospective", duration: "0.5 days", activities: "Team reflection, process improvements" }
  ];

  const sprintRoles = [
    { role: "Product Owner", responsibilities: "Define user stories, set priorities, accept work" },
    { role: "Scrum Master", responsibilities: "Facilitate ceremonies, remove blockers, coach team" },
    { role: "Development Team", responsibilities: "Estimate, develop, test, deliver working software" },
    { role: "Stakeholders", responsibilities: "Provide feedback, validate requirements, support decisions" }
  ];

  const sprintTemplate = `🚀 SPRINT PLANNING TEMPLATE

SPRINT OVERVIEW
Sprint #: [Number]
Sprint Goal: [Clear, achievable objective for this 2-week period]
Sprint Duration: [Start Date] - [End Date]
Team Capacity: [Total story points or hours available]

PRE-SPRINT PREPARATION
□ Backlog is refined and prioritized
□ User stories have acceptance criteria
□ Technical dependencies identified
□ Team capacity calculated
□ Definition of Done confirmed

SPRINT GOAL
Primary Objective: [What we want to achieve this sprint]
Success Metrics: [How we'll measure success]
Risk Factors: [Potential blockers or challenges]

USER STORIES & TASKS
[Copy this section for each user story]

User Story #[Number]: [Title]
As a [user type], I want [functionality] so that [benefit]

Acceptance Criteria:
□ [Criterion 1]
□ [Criterion 2] 
□ [Criterion 3]

Story Points: [Estimation]
Priority: [High/Medium/Low]
Dependencies: [Any blockers or prerequisites]

Technical Tasks:
□ [Task 1 - Owner - Estimated hours]
□ [Task 2 - Owner - Estimated hours]
□ [Task 3 - Owner - Estimated hours]

DAILY STANDUP TEMPLATE
What did you complete yesterday?
- [Team member]: [Completed work]

What will you work on today?
- [Team member]: [Planned work]

Any blockers or impediments?
- [Team member]: [Issues requiring help]

SPRINT CEREMONIES SCHEDULE
Sprint Planning: [Date/Time] - [Duration]
Daily Standups: [Days/Times] - 15 minutes
Sprint Review: [Date/Time] - [Duration]
Sprint Retrospective: [Date/Time] - [Duration]

DEFINITION OF DONE CHECKLIST
□ Code written and reviewed
□ Unit tests written and passing
□ Integration tests passing
□ Documentation updated
□ Stakeholder acceptance received
□ Deployed to staging environment
□ Performance criteria met

RISK MANAGEMENT
Identified Risks:
1. [Risk 1] - Mitigation: [Action plan]
2. [Risk 2] - Mitigation: [Action plan]
3. [Risk 3] - Mitigation: [Action plan]

Contingency Plans:
- If velocity drops: [Backup plan]
- If blockers arise: [Escalation process]
- If scope changes: [Change management process]

SPRINT REVIEW AGENDA
Demo Schedule:
- [Time]: [Story/Feature] - [Presenter]
- [Time]: [Story/Feature] - [Presenter]
- [Time]: [Story/Feature] - [Presenter]

Stakeholder Feedback:
□ Feature meets requirements
□ User experience is satisfactory
□ Performance is acceptable
□ Ready for production deployment

SPRINT RETROSPECTIVE
What went well? (Keep doing)
- [Item 1]
- [Item 2]
- [Item 3]

What could be improved? (Start doing)
- [Item 1] - Action: [Specific action plan]
- [Item 2] - Action: [Specific action plan]
- [Item 3] - Action: [Specific action plan]

What should we stop doing? (Stop doing)
- [Item 1]
- [Item 2]
- [Item 3]

Action Items for Next Sprint:
□ [Action 1] - Owner: [Name] - Due: [Date]
□ [Action 2] - Owner: [Name] - Due: [Date]
□ [Action 3] - Owner: [Name] - Due: [Date]

METRICS & TRACKING
Sprint Velocity: [Story points completed]
Burndown Chart: [Track daily progress]
Cycle Time: [Average time from start to done]
Defect Rate: [Bugs found per story point]
Team Satisfaction: [Score out of 10]

COMMUNICATION PLAN
Team Updates: [How and when]
Stakeholder Reports: [Frequency and format]
Escalation Process: [When and to whom]
Documentation Location: [Where everything is stored]

TOOLS & RESOURCES
Project Management: [Jira, Asana, etc.]
Communication: [Slack, Teams, etc.]
Code Repository: [GitHub, GitLab, etc.]
CI/CD Pipeline: [Deployment tools]
Documentation: [Confluence, Notion, etc.]`;

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
              <BreadcrumbLink href="/resources/templates">Templates</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Sprint Planning Template</BreadcrumbPage>
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
          <section className="relative py-16 mb-12 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
            <div className="relative px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6"
              >
                <Zap className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Operations Template</span>
              </motion.div>
              
              <motion.h1 
                id="sprint-planning-template"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
              >
                Sprint Planning Template
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 max-w-3xl"
              >
                Structure your 2-week sprints for consistent delivery and team alignment. Complete framework with ceremonies, roles, and tracking.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <Badge className="bg-blue-100 text-blue-800">15 Fields</Badge>
                <Badge className="bg-green-100 text-green-800">Operations</Badge>
                <Badge className="bg-purple-100 text-purple-800">Agile Framework</Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Week Cycles</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Key Ceremonies</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Template Fields</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Customizable</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Sprint Framework Overview */}
          <section id="sprint-framework" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Sprint Framework Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-blue-600" />
                    Sprint Phases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sprintPhases.map((phase, index) => (
                      <div key={index} className="flex justify-between items-start p-3 bg-muted/50 rounded-lg">
                        <div>
                          <div className="font-semibold">{phase.phase}</div>
                          <div className="text-sm text-muted-foreground">{phase.activities}</div>
                        </div>
                        <Badge variant="outline">{phase.duration}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    Team Roles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sprintRoles.map((role, index) => (
                      <div key={index} className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-semibold mb-1">{role.role}</div>
                        <div className="text-sm text-muted-foreground">{role.responsibilities}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Template Sections */}
          <section id="template-sections" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Complete Template</h2>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Sprint Planning Template
                  </CardTitle>
                  <CopyToClipboard text={sprintTemplate} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap font-mono text-muted-foreground">
                    {sprintTemplate}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Guide */}
          <section id="implementation-guide" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Implementation Guide</h2>
            
            <div className="space-y-6">
              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('setup')}
                >
                  <span className="font-semibold">Sprint Setup & Configuration</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.setup ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Before Your First Sprint:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Define your Definition of Done criteria</li>
                      <li>Establish team capacity and velocity baseline</li>
                      <li>Set up project management tools (Jira, Asana, etc.)</li>
                      <li>Create communication channels for team updates</li>
                      <li>Schedule recurring sprint ceremonies</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('ceremonies')}
                >
                  <span className="font-semibold">Sprint Ceremonies Best Practices</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.ceremonies ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Sprint Planning Meeting:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Time-box to 2 hours for 2-week sprint</li>
                        <li>Focus on "what" and "how" for selected user stories</li>
                        <li>Ensure team commitment to sprint goal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Daily Standups:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Keep to 15 minutes maximum</li>
                        <li>Focus on progress toward sprint goal</li>
                        <li>Identify and escalate blockers quickly</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('metrics')}
                >
                  <span className="font-semibold">Success Metrics & Tracking</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.metrics ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Metrics to Track:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Sprint velocity (story points completed)</li>
                          <li>Burndown chart progress</li>
                          <li>Cycle time per user story</li>
                          <li>Team satisfaction scores</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Quality Indicators:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Defect rate per sprint</li>
                          <li>User story acceptance rate</li>
                          <li>Technical debt accumulation</li>
                          <li>Sprint goal achievement rate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help Setting Up Your Sprint Process?</h3>
                <p className="text-muted-foreground mb-6">
                  Our team can customize this template and train your team on agile best practices.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                >
                  Get Custom Sprint Setup
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default SprintPlanTemplate;