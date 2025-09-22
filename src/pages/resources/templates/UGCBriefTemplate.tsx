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
import { Video, ChevronDown, Users, Target, Camera, Zap } from "lucide-react";
import { useState } from "react";

const UGCBriefTemplate = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const contentTypes = [
    { type: "Product Reviews", description: "Authentic testimonials and product demonstrations", engagement: "High conversion" },
    { type: "Tutorials", description: "How-to content featuring your products/services", engagement: "Educational value" },
    { type: "Lifestyle Content", description: "Products integrated into daily life scenarios", engagement: "Aspirational appeal" },
    { type: "Challenges", description: "Interactive campaigns encouraging participation", engagement: "Viral potential" }
  ];

  const ugcTemplate = `🎬 USER-GENERATED CONTENT (UGC) BRIEF

CAMPAIGN OVERVIEW
Campaign Name: [Descriptive Campaign Title]
Campaign ID: [Unique Reference - e.g., UGC-001]
Launch Date: [Start Date]
End Date: [Campaign End Date]
Budget: [Total Budget Allocation]

BRAND INFORMATION
Brand Name: [Your Brand Name]
Brand Voice: [Tone and personality - e.g., friendly, professional, edgy]
Brand Values: [Core values to communicate]
Website: [Brand website URL]
Social Handles: [All relevant social media accounts]

CAMPAIGN OBJECTIVES
Primary Goal: [Main objective - e.g., brand awareness, product launch, sales]
Secondary Goals:
- [Goal 1 - e.g., increase engagement]
- [Goal 2 - e.g., build community]
- [Goal 3 - e.g., gather testimonials]

Success Metrics:
- [Metric 1]: [Target number - e.g., 1000 posts]
- [Metric 2]: [Target - e.g., 50K total views]
- [Metric 3]: [Target - e.g., 5% conversion rate]

TARGET AUDIENCE
Primary Audience:
- Age Range: [e.g., 25-45]
- Gender: [Primary gender focus or all]
- Location: [Geographic targeting]
- Interests: [Key interests and hobbies]
- Pain Points: [What problems they face]
- Platform Preferences: [Where they spend time]

Secondary Audience:
- [Additional demographic details]
- [Platform behaviors]

PRODUCT/SERVICE FOCUS
Primary Product: [Main product/service name]
Key Features to Highlight:
1. [Feature 1]: [Why it matters to audience]
2. [Feature 2]: [Benefit explanation]
3. [Feature 3]: [Value proposition]

Unique Selling Points:
- [USP 1]: [Competitive advantage]
- [USP 2]: [What makes you different]

Price Point: [If relevant to mention]
Available At: [Where to purchase/access]

CONTENT REQUIREMENTS

Content Types Needed:
□ Product Reviews/Testimonials
□ Unboxing Videos
□ Tutorial/How-to Content
□ Before & After Comparisons
□ Lifestyle Integration
□ Challenge/Trend Participation

Format Specifications:
□ Video (specify length): [e.g., 15-60 seconds]
□ Images: [High-res, specific dimensions]
□ Stories: [Platform-specific requirements]
□ Carousel Posts: [Number of slides]

Technical Requirements:
- Video Quality: [Minimum 1080p HD]
- Audio Quality: [Clear, no background noise]
- Lighting: [Well-lit, natural preferred]
- Orientation: [Vertical/horizontal/square]
- File Format: [MP4, JPG, etc.]

CREATIVE GUIDELINES

Must Include:
□ Product clearly visible for [X] seconds
□ Brand name mentioned/shown
□ Specific talking points (see below)
□ Natural product integration
□ Clear call-to-action

Talking Points (Choose 2-3):
- "[Specific benefit or result]"
- "[Problem this solves]"
- "[Personal experience/story]"
- "[Unique feature highlight]"
- "[Comparison to alternatives]"

Creative Direction:
Style: [e.g., casual, polished, minimalist]
Mood: [e.g., energetic, calm, inspiring]
Setting: [e.g., home, outdoors, studio]
Wardrobe: [if relevant - colors, style]

Do NOT Include:
✗ Competitor products or mentions
✗ Inappropriate content or language
✗ Copyright music (use provided or copyright-free)
✗ [Other specific restrictions]

HASHTAG STRATEGY
Required Hashtags:
#[BrandHashtag] #[ProductHashtag] #[CampaignHashtag]

Suggested Hashtags:
#[RelevantTag1] #[RelevantTag2] #[RelevantTag3]
#[CommunityTag] #[TrendingTag] #[NicheTag]

Hashtag Guidelines:
- Use [X] hashtags maximum
- Include brand hashtag in all posts
- Research trending tags in your niche
- Mix popular and niche-specific tags

COMPENSATION & DELIVERABLES

Compensation Structure:
- Payment: [Amount] per approved post
- Bonus: [Performance-based incentives]
- Products: [Free products/services included]
- Usage Rights: [How long brand can use content]

Deliverables Required:
□ [Number] of [content type] posts
□ High-resolution raw files
□ Usage rights agreement signed
□ Performance metrics sharing (if requested)

Payment Schedule:
- 50% upon content approval
- 50% upon posting/campaign completion
- Payment method: [PayPal, bank transfer, etc.]

SUBMISSION PROCESS

Step 1: Content Creation
- Create content following brief guidelines
- Test all links and ensure quality standards
- Prepare caption with required elements

Step 2: Review & Approval
- Submit to: [Email/platform for review]
- Include: Raw files + proposed caption
- Approval timeline: [X] business days

Step 3: Publishing
- Post on approved date/time
- Use exact approved caption and hashtags
- Tag brand accounts as specified
- Submit link to live post

BRAND ASSETS PROVIDED
□ Product samples/access
□ Brand logos (high-res files)
□ Product photography for reference
□ Brand guidelines document
□ Previous UGC examples
□ Copyright-free music library access

USAGE RIGHTS & LEGAL
Content Usage Rights:
- Brand may use content for: [Marketing, ads, website, etc.]
- Duration of usage rights: [Time period]
- Attribution requirements: [How creator will be credited]
- Exclusivity period: [If any restrictions on creator]

Legal Requirements:
□ FTC disclosure compliance (#ad, #sponsored)
□ Platform-specific disclosure requirements
□ Age verification (if applicable)
□ Location restrictions (if any)

CAMPAIGN TIMELINE
Week 1: [Milestone - e.g., Brief distribution, creator selection]
Week 2: [Milestone - e.g., Content creation period]
Week 3: [Milestone - e.g., Content review and approval]
Week 4: [Milestone - e.g., Content publishing and promotion]
Week 5: [Milestone - e.g., Performance analysis and reporting]

KEY DATES TO REMEMBER:
- Content submission deadline: [Date]
- Revision deadline: [Date]
- Publishing window: [Date range]
- Campaign end date: [Date]

INSPIRATION & REFERENCES
Similar Campaigns: [Links to successful examples]
Brand Aesthetic: [Links to brand social accounts]
Competitor Analysis: [What works in your industry]
Current Trends: [Relevant trends to incorporate]

DON'T AND DO'S

DO:
✅ Be authentic and genuine in your content
✅ Follow brand guidelines while maintaining your voice
✅ Engage with comments on your posts
✅ Use high-quality visuals and audio
✅ Disclose partnerships transparently
✅ Meet all deadlines and requirements

DON'T:
❌ Copy other creators' content exactly
❌ Ignore feedback or revision requests
❌ Post without prior approval
❌ Use unauthorized music or copyrighted material
❌ Make false claims about the product
❌ Forget FTC disclosure requirements

CONTACT INFORMATION
Campaign Manager: [Name]
Email: [Direct email]
Phone: [If urgent contact needed]
Slack/Discord: [Team communication channel]

Emergency Contact: [For urgent issues]
Response Time: [Expected response timeframe]

ADDITIONAL NOTES
[Any specific instructions, special considerations, or important details unique to this campaign]

CREATOR ACKNOWLEDGMENT
By accepting this brief, I confirm that I:
□ Understand all requirements and guidelines
□ Agree to the compensation and timeline
□ Will follow FTC disclosure requirements
□ Grant usage rights as specified
□ Commit to delivering quality content on time

Creator Signature: _________________________ Date: _________
[Printed Name]

Campaign Manager Approval: _________________________ Date: _________
[Printed Name and Title]`;

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
                <Video className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Marketing Template</span>
              </motion.div>
              
              <motion.h1 
                id="ugc-brief-template"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
              >
                User-Generated Content (UGC) Brief Template
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 max-w-3xl"
              >
                Create compelling UGC campaigns that drive authentic engagement and conversions. Complete framework for briefing creators and managing campaigns.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <Badge className="bg-blue-100 text-blue-800">25+ Sections</Badge>
                <Badge className="bg-green-100 text-green-800">FTC Compliant</Badge>
                <Badge className="bg-purple-100 text-purple-800">Marketing</Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Brief Sections</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">FTC</div>
                  <div className="text-sm text-muted-foreground">Compliant</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Content Types</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Customizable</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Content Types */}
          <section id="content-types" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">UGC Content Types & Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contentTypes.map((content, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="h-5 w-5 text-primary" />
                      {content.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground text-sm">{content.description}</p>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      {content.engagement}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Complete Template */}
          <section id="complete-template" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Complete UGC Brief Template</h2>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Comprehensive UGC Campaign Brief
                  </CardTitle>
                  <CopyToClipboard text={ugcTemplate} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap font-mono text-muted-foreground overflow-x-auto">
                    {ugcTemplate}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-12">
            <h2 className="text-3xl font-bold mb-8">UGC Campaign Best Practices</h2>
            
            <div className="space-y-6">
              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('creator-selection')}
                >
                  <span className="font-semibold">Creator Selection & Vetting</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections['creator-selection'] ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Selection Criteria:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Audience alignment with your target demographic</li>
                      <li>Engagement rate over follower count (aim for 2-5%)</li>
                      <li>Content quality and aesthetic consistency</li>
                      <li>Brand values alignment and authenticity</li>
                      <li>Previous brand collaboration performance</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('legal-compliance')}
                >
                  <span className="font-semibold">Legal & Compliance Requirements</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections['legal-compliance'] ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">FTC Disclosure Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Clear and conspicuous disclosure (#ad, #sponsored)</li>
                        <li>Disclosure must be easily noticeable and understandable</li>
                        <li>Platform-specific disclosure requirements</li>
                        <li>Creator education on proper disclosure practices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Usage Rights & Contracts:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Clear usage rights and duration agreements</li>
                        <li>Content ownership and modification rights</li>
                        <li>Exclusivity clauses and competitor restrictions</li>
                        <li>Performance guarantees and deliverable standards</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger 
                  className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                  onClick={() => toggleSection('performance-tracking')}
                >
                  <span className="font-semibold">Performance Tracking & Optimization</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections['performance-tracking'] ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-background border border-muted rounded-b-lg">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Metrics to Track:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Engagement rate and quality of interactions</li>
                          <li>Reach and impression metrics</li>
                          <li>Click-through rates to brand content</li>
                          <li>Conversion rates and sales attribution</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Optimization Strategies:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>A/B test different creative approaches</li>
                          <li>Analyze top-performing content patterns</li>
                          <li>Optimize posting times and frequency</li>
                          <li>Refine creator selection criteria</li>
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
                <h3 className="text-2xl font-bold mb-4">Ready to Launch Your UGC Campaign?</h3>
                <p className="text-muted-foreground mb-6">
                  We can help you identify creators, manage campaigns, and optimize performance for maximum ROI.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                >
                  Get UGC Campaign Support
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

export default UGCBriefTemplate;