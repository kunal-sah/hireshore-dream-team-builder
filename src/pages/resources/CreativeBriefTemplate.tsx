import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { FileText, ChevronDown, Target, Users, Lightbulb, MapPin, Image, Calendar } from "lucide-react";
import { useState } from "react";

const CreativeBriefTemplate = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const briefSections = [
    {
      id: "project-overview",
      title: "Project Overview",
      icon: Target,
      fields: [
        { label: "Project Name", placeholder: "e.g., Q1 Product Launch Campaign" },
        { label: "Project Type", placeholder: "e.g., Website, Ad Campaign, Brand Identity" },
        { label: "Timeline", placeholder: "e.g., 4 weeks (Jan 15 - Feb 12, 2024)" },
        { label: "Budget Range", placeholder: "e.g., $10K - $15K" },
        { label: "Key Stakeholders", placeholder: "e.g., Marketing Director, Product Manager" }
      ],
      content: `**Purpose**: Establish project scope, constraints, and key participants.

**Instructions**: Fill out basic project parameters before diving into creative requirements. This section helps align expectations and resources upfront.`
    },
    {
      id: "business-goal",
      title: "Business Goal & Objectives",
      icon: Target,
      fields: [
        { label: "Primary Business Goal", placeholder: "e.g., Increase product awareness by 40%" },
        { label: "Success Metrics", placeholder: "e.g., 10K website visits, 500 signups, 20% conversion rate" },
        { label: "Secondary Objectives", placeholder: "e.g., Build email list, improve brand perception" },
        { label: "Business Context", placeholder: "e.g., Launching in competitive market, seasonal promotion" }
      ],
      content: `**Purpose**: Define what success looks like and why this project matters to the business.

**Examples**:
- Launch new SaaS feature to existing customer base
- Drive 25% more qualified leads for Q1 sales team
- Rebrand to appeal to younger demographic (25-35 years old)
- Enter new geographic market with localized messaging`
    },
    {
      id: "target-audience",
      title: "Target Audience",
      icon: Users,
      fields: [
        { label: "Primary Audience", placeholder: "e.g., Marketing managers at 50-500 person companies" },
        { label: "Demographics", placeholder: "e.g., Age 28-45, college-educated, $60K+ income" },
        { label: "Pain Points", placeholder: "e.g., Struggling with manual reporting, limited time" },
        { label: "Where They Spend Time", placeholder: "e.g., LinkedIn, industry blogs, marketing podcasts" },
        { label: "Current Behavior", placeholder: "e.g., Using spreadsheets, evaluating new tools" }
      ],
      content: `**Purpose**: Create detailed persona to guide creative decisions and messaging.

**Research Questions**:
- What keeps them up at night?
- What solutions have they tried before?
- How do they prefer to consume information?
- What language/terminology do they use?
- Who influences their buying decisions?`
    },
    {
      id: "key-message",
      title: "Key Message & Positioning",
      icon: Lightbulb,
      fields: [
        { label: "Core Message", placeholder: "e.g., The only marketing automation platform built for growing teams" },
        { label: "Value Proposition", placeholder: "e.g., Save 15 hours/week on reporting while increasing lead quality by 3x" },
        { label: "Proof Points", placeholder: "e.g., Used by 2,000+ companies, 98% customer satisfaction" },
        { label: "Tone of Voice", placeholder: "e.g., Professional yet approachable, confident but not pushy" },
        { label: "Key Differentiators", placeholder: "e.g., No-code setup, dedicated success manager, integrates with everything" }
      ],
      content: `**Purpose**: Establish the core narrative and how to communicate it effectively.

**Message Hierarchy**:
1. **Primary**: Main benefit/transformation
2. **Secondary**: Supporting benefits and proof
3. **Tertiary**: Features and logistics

**Tone Guidelines**:
- How formal/casual should the voice be?
- What personality traits should come through?
- Any words/phrases to avoid?`
    },
    {
      id: "campaign-strategy",
      title: "Campaign Strategy & Placements",
      icon: MapPin,
      fields: [
        { label: "Campaign Type", placeholder: "e.g., Multi-channel awareness campaign, conversion-focused email series" },
        { label: "Primary Channels", placeholder: "e.g., Google Ads, LinkedIn, email newsletter" },
        { label: "Secondary Channels", placeholder: "e.g., Organic social, retargeting, partner websites" },
        { label: "Content Formats Needed", placeholder: "e.g., Landing page, 5 ad variations, email sequence, social posts" },
        { label: "Integration Points", placeholder: "e.g., CRM sync, event tracking, lead scoring" }
      ],
      content: `**Purpose**: Define how and where the creative will be deployed.

**Channel Strategy**:
- **Owned Media**: Website, email, social profiles
- **Earned Media**: PR, word-of-mouth, organic shares  
- **Paid Media**: Ads, sponsored content, influencer partnerships

**Content Mapping**:
- Awareness stage: Educational content, thought leadership
- Consideration: Case studies, product demos, comparisons
- Decision: Free trials, consultations, testimonials`
    },
    {
      id: "creative-direction",
      title: "Creative Direction & References",
      icon: Image,
      fields: [
        { label: "Visual Style", placeholder: "e.g., Clean and modern, bold colors, minimal text" },
        { label: "Brand Guidelines", placeholder: "e.g., Use primary blue (#0066CC), Helvetica font, avoid stock photos" },
        { label: "Reference Examples", placeholder: "e.g., Slack's homepage, Mailchimp's email templates" },
        { label: "What to Avoid", placeholder: "e.g., Overly corporate feel, too much text, generic imagery" },
        { label: "Asset Requirements", placeholder: "e.g., Mobile-first design, 4 size variations, animation preferred" }
      ],
      content: `**Purpose**: Provide creative team with visual direction and constraints.

**Visual Elements**:
- **Color Palette**: Primary, secondary, accent colors
- **Typography**: Headlines, body text, captions
- **Photography Style**: Candid vs. polished, diverse representation
- **Iconography**: Simple vs. detailed, flat vs. dimensional
- **Layout**: Grid system, white space, information hierarchy`
    },
    {
      id: "deliverables",
      title: "Deliverables & Timeline",
      icon: Calendar,
      fields: [
        { label: "Required Deliverables", placeholder: "e.g., Landing page design, 10 ad variations, email templates" },
        { label: "File Formats", placeholder: "e.g., Figma files, PNG exports, HTML/CSS code" },
        { label: "Revision Rounds", placeholder: "e.g., 2 rounds of feedback, final approval by [date]" },
        { label: "Key Milestones", placeholder: "e.g., Concepts due Jan 20, final files Jan 30" },
        { label: "Launch Date", placeholder: "e.g., Campaign goes live February 1, 2024" }
      ],
      content: `**Purpose**: Set clear expectations for what will be delivered and when.

**Typical Timeline**:
- **Week 1**: Concept development and initial designs
- **Week 2**: First round revisions and refinements  
- **Week 3**: Final revisions and asset preparation
- **Week 4**: QA, testing, and launch preparation

**Quality Standards**:
- All designs must pass accessibility review
- Mobile responsiveness required for web assets
- Performance optimization for digital placements`
    }
  ];

  const fullTemplate = briefSections.map(section => 
    `## ${section.title}\n\n${section.content}\n\n${section.fields.map(field => 
      `**${field.label}**: ${field.placeholder}`
    ).join('\n')}\n\n`
  ).join('');

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
              <BreadcrumbPage>Creative Brief Template</BreadcrumbPage>
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
            <FileText className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Template</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Creative Brief Template
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Complete framework for goal, audience, offer, placements, and creative references.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CopyToClipboard 
              text={fullTemplate}
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Use this template
            </CopyToClipboard>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://www.notion.so/templates/creative-brief', '_blank')}
            >
              Duplicate in Notion
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview */}
            <section id="overview" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">How to Use This Template</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  This creative brief template ensures your projects start with crystal-clear direction. 
                  Use it for campaigns, websites, brand work, or any creative project requiring alignment 
                  between strategy and execution.
                </p>
                <p className="mb-6">
                  Each section builds on the previous one, creating a complete picture of what success 
                  looks like and how to achieve it. Fill out sections collaboratively with stakeholders 
                  for maximum buy-in.
                </p>
              </div>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Pro Tip</h4>
                    <p className="text-sm text-muted-foreground">
                      Schedule a 30-minute brief review meeting with all stakeholders. 
                      Walking through the brief together catches gaps and builds consensus before creative work begins.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Template Sections */}
            {briefSections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-3 bg-primary/10 rounded-lg mr-4">
                          <section.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{section.title}</CardTitle>
                        </div>
                      </div>
                      <CopyToClipboard 
                        text={`## ${section.title}\n\n${section.content}\n\n${section.fields.map(field => 
                          `**${field.label}**: ${field.placeholder}`
                        ).join('\n')}`}
                        size="sm"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none mb-6">
                      {section.content.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed mb-2 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <Collapsible open={openSections[section.id]}>
                      <CollapsibleTrigger 
                        className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                        onClick={() => toggleSection(section.id)}
                      >
                        <span className="font-medium">View Template Fields</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openSections[section.id] ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="space-y-4 p-4 border rounded-lg bg-background">
                          {section.fields.map((field, fieldIndex) => (
                            <div key={fieldIndex} className="space-y-2">
                              <label className="text-sm font-medium text-foreground">
                                {field.label}
                              </label>
                              <div className="p-3 bg-muted/30 rounded border text-sm text-muted-foreground">
                                {field.placeholder}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </motion.section>
            ))}

            {/* Related Resources */}
            <section id="related-resources" className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Web Launch Checklist</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ensure your website projects meet performance, SEO, and accessibility standards.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/resources/web-launch-checklist">View Checklist</a>
                  </Button>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Delivery Pods Playbook</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Learn how to structure teams for consistent, on-time creative delivery.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/resources/delivery-pods-playbook">Read Playbook</a>
                  </Button>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default CreativeBriefTemplate;