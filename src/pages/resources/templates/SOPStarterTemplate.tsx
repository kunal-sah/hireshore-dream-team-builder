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
import { FileText, ChevronDown, CheckCircle, Users, Target, Zap } from "lucide-react";
import { useState } from "react";

const SOPStarterTemplate = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const sopCategories = [
    { category: "Administrative", examples: "Employee Onboarding, Expense Reporting, Document Management" },
    { category: "Operations", examples: "Quality Control, Inventory Management, Customer Service" },
    { category: "Safety & Compliance", examples: "Emergency Procedures, Data Protection, Regulatory Compliance" },
    { category: "Technical", examples: "Software Deployment, System Maintenance, Troubleshooting" }
  ];

  const sopTemplate = `📋 STANDARD OPERATING PROCEDURE (SOP)

SOP TITLE: [Specific Process Name]
SOP NUMBER: [Unique Identifier - e.g., SOP-001]
VERSION: [Version Number - e.g., 1.0]
EFFECTIVE DATE: [Implementation Date]
REVIEW DATE: [Next Review Date]

DOCUMENT CONTROL
Created by: [Name and Title]
Approved by: [Supervisor/Manager Name]
Department: [Responsible Department]
Distribution: [Who receives this SOP]

PURPOSE & SCOPE
Purpose: [Why this SOP exists and what it aims to achieve]
Scope: [What processes/activities this SOP covers]
Limitations: [What this SOP does NOT cover]

ROLES & RESPONSIBILITIES
Primary Owner: [Person responsible for process execution]
- [Specific responsibility 1]
- [Specific responsibility 2]

Secondary Stakeholders: [Supporting roles]
- [Role]: [Responsibilities]
- [Role]: [Responsibilities]

Approver: [Person who approves process outcomes]
- [Approval criteria and authority]

DEFINITIONS & ACRONYMS
[Term 1]: [Clear definition]
[Term 2]: [Clear definition]
[Acronym]: [Full form and meaning]

PREREQUISITES
Before starting this process, ensure:
□ [Requirement 1 - e.g., Required access/permissions]
□ [Requirement 2 - e.g., Necessary tools/software]
□ [Requirement 3 - e.g., Training completed]
□ [Requirement 4 - e.g., Dependencies satisfied]

MATERIALS & RESOURCES NEEDED
Tools Required:
- [Tool/Software 1]: [Purpose]
- [Tool/Software 2]: [Purpose]

Documents/Forms:
- [Document 1]: [When to use]
- [Form 1]: [Purpose and location]

Access Requirements:
- [System/Location 1]: [Level of access needed]
- [System/Location 2]: [Purpose]

DETAILED PROCEDURE

Step 1: [Action Title]
WHO: [Responsible party]
WHAT: [Detailed description of what needs to be done]
WHERE: [Location/system where action takes place]
WHEN: [Timing/trigger for this step]
HOW: [Specific instructions]
  • [Sub-step 1]
  • [Sub-step 2]
  • [Sub-step 3]

✅ CHECKPOINT: [What to verify before moving to next step]
⚠️ CAUTION: [Any warnings or important notes]

Step 2: [Action Title]
WHO: [Responsible party]
WHAT: [Detailed description]
WHERE: [Location/system]
WHEN: [Timing/trigger]
HOW: [Specific instructions]
  • [Sub-step 1]
  • [Sub-step 2]

✅ CHECKPOINT: [Verification point]

Step 3: [Action Title]
[Continue same format for all steps]

QUALITY CONTROL CHECKPOINTS
□ [Quality check 1] - Standard: [Expected outcome]
□ [Quality check 2] - Standard: [Expected outcome]
□ [Quality check 3] - Standard: [Expected outcome]

ESCALATION PROCEDURES
If problems occur:
Level 1: [First point of contact] - [When to escalate]
Level 2: [Second point of contact] - [When to escalate]
Level 3: [Final escalation point] - [When to escalate]

Emergency Contact: [Name/Role] - [Contact details]

DOCUMENTATION REQUIREMENTS
Records to Maintain:
- [Record type 1]: [Where stored, how long retained]
- [Record type 2]: [Storage location and duration]

Reporting Requirements:
- [Report 1]: [Frequency, recipient, format]
- [Report 2]: [When to submit, to whom]

PERFORMANCE METRICS
Success Metrics:
- [Metric 1]: [Target value] - [How measured]
- [Metric 2]: [Target value] - [Measurement method]
- [Metric 3]: [Target value] - [Frequency of measurement]

Review Triggers:
- [Trigger 1]: [When to review process]
- [Trigger 2]: [Review criteria]

TROUBLESHOOTING GUIDE
Common Issues and Solutions:

Issue: [Problem description]
Symptoms: [How to identify this issue]
Solution: [Step-by-step resolution]
Prevention: [How to avoid in future]

Issue: [Problem description]
Symptoms: [How to identify]
Solution: [Resolution steps]
Prevention: [Preventive measures]

TRAINING REQUIREMENTS
Required Training:
- [Training 1]: [Who needs it, frequency]
- [Training 2]: [Prerequisites, certification]

Competency Assessment:
- [Assessment method]: [Pass criteria]
- [Retraining triggers]: [When required]

RELATED DOCUMENTS
Supporting SOPs:
- [SOP Number]: [Title] - [Relationship]
- [SOP Number]: [Title] - [How it connects]

Forms & Templates:
- [Form name]: [Purpose and location]
- [Template name]: [When to use]

External References:
- [Regulation/Standard]: [Relevance]
- [Industry guideline]: [Application]

REVISION HISTORY
Version | Date | Changes Made | Changed By | Approved By
1.0 | [Date] | Initial creation | [Name] | [Name]
1.1 | [Date] | [Description of changes] | [Name] | [Name]

APPROVAL SIGNATURES
Process Owner: _________________________ Date: _________
[Printed Name and Title]

Department Manager: _________________________ Date: _________
[Printed Name and Title]

Quality Assurance: _________________________ Date: _________
[Printed Name and Title]

DISTRIBUTION LIST
□ [Department/Role 1]
□ [Department/Role 2]
□ [Department/Role 3]
□ Document Control Center
□ Training Department

END OF SOP

---
IMPLEMENTATION CHECKLIST
□ SOP reviewed and approved by all stakeholders
□ Training materials developed
□ Staff training completed
□ Process testing conducted
□ Metrics tracking system implemented
□ Review schedule established
□ Distribution completed
□ Process officially launched`;

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
              <BreadcrumbPage>SOP Starter Template</BreadcrumbPage>
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
                <FileText className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Operations Template</span>
              </motion.div>
              
              <motion.h1 
                id="sop-starter-template"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
              >
                Standard Operating Procedure (SOP) Starter Template
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 max-w-3xl"
              >
                Create comprehensive, compliant SOPs that ensure consistent process execution across your organization. Complete framework with all essential sections.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <Badge className="bg-blue-100 text-blue-800">20+ Sections</Badge>
                <Badge className="bg-green-100 text-green-800">ISO Compliant</Badge>
                <Badge className="bg-purple-100 text-purple-800">Operations</Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Template Sections</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">ISO</div>
                  <div className="text-sm text-muted-foreground">Compliant Format</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">SOP Categories</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Customizable</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SOP Categories */}
          <section id="sop-categories" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">SOP Categories & Applications</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sopCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{category.examples}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Complete Template */}
          <section id="complete-template" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Complete SOP Template</h2>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    ISO-Compliant SOP Template
                  </CardTitle>
                  <CopyToClipboard text={sopTemplate} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap font-mono text-muted-foreground overflow-x-auto">
                    {sopTemplate}
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
                  onClick={() => toggleSection('preparation')}
                >
                  <span className="font-semibold">SOP Development Preparation</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.preparation ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Before Writing Your SOP:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Map out the complete process flow from start to finish</li>
                      <li>Identify all stakeholders and their roles</li>
                      <li>Gather existing documentation and reference materials</li>
                      <li>Interview subject matter experts and process users</li>
                      <li>Review regulatory requirements and compliance standards</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('writing')}
                >
                  <span className="font-semibold">Writing Best Practices</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.writing ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Writing Guidelines:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Use clear, concise language - avoid jargon</li>
                        <li>Write in active voice and present tense</li>
                        <li>Include specific details and exact requirements</li>
                        <li>Use consistent formatting and numbering</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Structure Tips:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Break complex processes into logical steps</li>
                        <li>Include decision points and alternative paths</li>
                        <li>Add visual aids (flowcharts, screenshots) when helpful</li>
                        <li>Provide examples for clarity</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('maintenance')}
                >
                  <span className="font-semibold">SOP Maintenance & Review</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.maintenance ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Regular Review Schedule:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Quarterly reviews for high-impact processes</li>
                          <li>Annual reviews for stable processes</li>
                          <li>Immediate review after incidents</li>
                          <li>Review when regulations change</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Update Triggers:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Process changes or improvements</li>
                          <li>Technology updates or new tools</li>
                          <li>Staff feedback and suggestions</li>
                          <li>Compliance requirement changes</li>
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
                <h3 className="text-2xl font-bold mb-4">Need Help Creating Custom SOPs?</h3>
                <p className="text-muted-foreground mb-6">
                  Our team can help you develop comprehensive SOPs tailored to your specific processes and compliance requirements.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                >
                  Get Custom SOP Development
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

export default SOPStarterTemplate;