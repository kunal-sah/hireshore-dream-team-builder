import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { StickyCTA } from "@/components/ui/sticky-cta";
import { TableOfContents } from "@/components/ui/table-of-contents";
import { CopyToClipboard } from "@/components/ui/copy-to-clipboard";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Video, 
  ChevronDown, 
  ChevronRight, 
  Calendar, 
  Users, 
  Target,
  FileText,
  Camera,
  Clock
} from "lucide-react";
import { useState } from "react";

const UGCBriefTemplate = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const briefSections = [
    {
      id: "campaign-overview",
      title: "Campaign Overview",
      icon: Target,
      fields: [
        { label: "Campaign Name", placeholder: "Summer Product Launch UGC" },
        { label: "Campaign Duration", placeholder: "June 1-30, 2024" },
        { label: "Budget Range", placeholder: "$5,000 - $10,000" },
        { label: "Primary Goal", placeholder: "Drive brand awareness and product sales" }
      ],
      content: `## Campaign Overview

**Campaign Name:** [Your Campaign Name]
**Duration:** [Start Date - End Date]
**Budget:** [Budget Range]
**Primary Goal:** [Main objective]

### Campaign Objectives
- [ ] Increase brand awareness by X%
- [ ] Generate X pieces of authentic content
- [ ] Drive X% increase in sales
- [ ] Build community engagement`
    },
    {
      id: "target-creators",
      title: "Target Creator Profile",
      icon: Users,
      fields: [
        { label: "Follower Count Range", placeholder: "10K - 100K followers" },
        { label: "Demographics", placeholder: "Women 25-35, US-based" },
        { label: "Content Style", placeholder: "Lifestyle, authentic, high-quality" },
        { label: "Engagement Rate", placeholder: "Minimum 3% engagement rate" }
      ],
      content: `## Target Creator Profile

**Follower Range:** [Minimum - Maximum followers]
**Demographics:** [Age, gender, location, interests]
**Content Style:** [Aesthetic, tone, quality expectations]
**Engagement:** [Minimum engagement rate requirements]

### Ideal Creator Characteristics
- Authentic engagement with their audience
- Brand alignment with our values
- Quality content creation skills
- Professional communication
- Previous brand collaboration experience (preferred)`
    },
    {
      id: "content-requirements",
      title: "Content Requirements", 
      icon: Camera,
      fields: [
        { label: "Content Types", placeholder: "Instagram Reels, Stories, Posts" },
        { label: "Number of Posts", placeholder: "3 feed posts, 5 stories" },
        { label: "Hashtags", placeholder: "#YourBrand #ProductName #UGC" },
        { label: "Mentions Required", placeholder: "@yourbrand in caption and story" }
      ],
      content: `## Content Requirements

**Content Types:** [Reels, Stories, Posts, etc.]
**Quantity:** [Number of each content type]
**Platform:** [Instagram, TikTok, YouTube, etc.]

### Content Specifications
- **Format:** [Square, vertical, horizontal]
- **Duration:** [For video content]
- **Quality:** [4K, HD, resolution requirements]
- **Hashtags:** [Required branded hashtags]
- **Mentions:** [Required @mentions]

### Content Guidelines
- Show product in use/lifestyle context
- Include authentic testimonial/review
- Maintain brand voice and aesthetic
- Follow platform best practices`
    },
    {
      id: "deliverables-timeline",
      title: "Deliverables & Timeline",
      icon: Clock,
      fields: [
        { label: "Content Delivery Date", placeholder: "7 days from contract signing" },
        { label: "Revision Rounds", placeholder: "2 rounds of revisions included" },
        { label: "Usage Rights", placeholder: "90 days usage rights for ads" },
        { label: "Reporting", placeholder: "Screenshot metrics after 48 hours" }
      ],
      content: `## Deliverables & Timeline

### Timeline
- **Contract Signed:** [Date]
- **Content Brief Call:** [Date, if applicable]
- **First Draft Due:** [Date]
- **Revisions Complete:** [Date]
- **Final Content Due:** [Date]
- **Go-Live Date:** [Date]

### Deliverables Checklist
- [ ] [X] Instagram feed posts
- [ ] [X] Instagram stories  
- [ ] [X] Reels/TikTok videos
- [ ] Performance screenshots (48hrs post-live)
- [ ] Usage rights transfer

### Revision Process
- Up to [X] rounds of revisions included
- 24-hour turnaround on feedback
- Additional revisions: [Rate/fee]`
    },
    {
      id: "compensation-terms",
      title: "Compensation & Terms",
      icon: FileText,
      fields: [
        { label: "Compensation Type", placeholder: "Flat fee + product gifting" },
        { label: "Payment Amount", placeholder: "$500 per creator" },
        { label: "Payment Schedule", placeholder: "50% upfront, 50% on delivery" },
        { label: "Additional Perks", placeholder: "Early access, discount codes" }
      ],
      content: `## Compensation & Terms

**Compensation Structure:** [Flat fee/Performance-based/Product only]
**Payment Amount:** [Dollar amount or product value]
**Payment Schedule:** [Upfront %, completion %]

### What's Included
- Product samples (retail value: $X)
- Content creation fee: $X
- Usage rights for [duration]
- [Additional perks/bonuses]

### Payment Terms
- **Invoice Requirements:** [W9, invoice format]
- **Payment Method:** [Check, PayPal, direct deposit]
- **Payment Timeline:** [Days from invoice receipt]

### Contract Terms
- Usage rights: [Duration and scope]
- Exclusivity period: [If applicable]
- Content approval process
- FTC disclosure requirements`
    }
  ];

  const fullTemplate = briefSections.map(section => section.content).join('\n\n');

  const tocSections = briefSections.map(section => ({
    id: section.id,
    title: section.title,
    level: 1
  }));

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
              <BreadcrumbPage>UGC Brief Template</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              UGC Brief Template
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A comprehensive template for briefing user-generated content creators on campaign requirements and expectations.
            </p>
          </motion.div>
          
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
              className="px-8"
            >
              <Video className="mr-2 h-5 w-5" />
              Copy Full Template
            </CopyToClipboard>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://docs.google.com/document/d/1example/copy', '_blank')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Duplicate in Google Docs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />
              </div>
            </div>

            {/* Brief Content */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Video className="h-6 w-6 text-primary" />
                      UGC Campaign Brief Template
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p className="text-lg text-muted-foreground mb-6">
                      This template helps you create clear, comprehensive briefs for user-generated content campaigns. 
                      Each section includes essential information that creators need to deliver successful content.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Brief Sections */}
              {briefSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <section.icon className="h-6 w-6 text-primary" />
                          {section.title}
                        </div>
                        <CopyToClipboard 
                          text={section.content}
                          variant="outline" 
                          size="sm"
                        >
                          Copy Section
                        </CopyToClipboard>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-slate max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }} />
                      </div>

                      <Collapsible open={openSections[section.id]} onOpenChange={() => toggleSection(section.id)}>
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            <span>View Editable Fields</span>
                            {openSections[section.id] ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4">
                          <div className="grid gap-4 p-4 bg-muted/30 rounded-lg">
                            {section.fields.map((field) => (
                              <div key={field.label} className="space-y-2">
                                <label className="text-sm font-medium">{field.label}</label>
                                <div className="p-3 bg-background rounded border border-input text-sm text-muted-foreground">
                                  {field.placeholder}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Implementation Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Implementation Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <ul className="space-y-2">
                      <li><strong>Be Specific:</strong> Vague briefs lead to content that misses the mark. Include examples and references.</li>
                      <li><strong>Set Clear Expectations:</strong> Define exactly what success looks like for both content quality and performance.</li>
                      <li><strong>Provide Creative Freedom:</strong> Give guidelines but allow creators to bring their authentic voice and style.</li>
                      <li><strong>Include Visual References:</strong> Share examples of similar content or mood boards for style guidance.</li>
                      <li><strong>Plan for Revisions:</strong> Build in time and budget for feedback rounds and content adjustments.</li>
                      <li><strong>Track Performance:</strong> Set up systems to measure campaign success and creator performance.</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Related Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Related Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <a href="/resources/templates/content-calendar" className="p-4 rounded-lg border border-input hover:bg-muted/50 transition-colors group">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-medium group-hover:text-primary">Content Calendar Template</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Plan and schedule your UGC campaigns</p>
                      </a>
                      <a href="/resources/guides/funnels" className="p-4 rounded-lg border border-input hover:bg-muted/50 transition-colors group">
                        <div className="flex items-center gap-3 mb-2">
                          <Target className="h-5 w-5 text-primary" />
                          <span className="font-medium group-hover:text-primary">Funnel Strategy Guide</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Convert UGC viewers into customers</p>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default UGCBriefTemplate;