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
import { Calendar, ChevronDown, Instagram, Twitter, Linkedin, Youtube, Hash, Target } from "lucide-react";
import { useState } from "react";

const ContentCalendarTemplate = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const platforms = [
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-600", frequency: "1-2x daily", bestTimes: "8-10am, 12-2pm, 5-6pm" },
    { name: "Instagram", icon: Instagram, color: "text-pink-600", frequency: "1x daily", bestTimes: "11am-1pm, 7-9pm" },
    { name: "Twitter", icon: Twitter, color: "text-blue-400", frequency: "3-5x daily", bestTimes: "8-10am, 12-3pm, 5pm" },
    { name: "YouTube", icon: Youtube, color: "text-red-600", frequency: "2-3x weekly", bestTimes: "2-4pm, 8-11pm" }
  ];

  const contentTypes = [
    { type: "Educational", description: "How-to guides, tips, tutorials", percentage: "40%", color: "bg-blue-100 text-blue-800" },
    { type: "Behind-the-scenes", description: "Company culture, process insights", percentage: "20%", color: "bg-green-100 text-green-800" },
    { type: "User-generated", description: "Customer stories, testimonials", percentage: "15%", color: "bg-purple-100 text-purple-800" },
    { type: "Promotional", description: "Product features, announcements", percentage: "15%", color: "bg-orange-100 text-orange-800" },
    { type: "Entertainment", description: "Memes, trending topics, fun facts", percentage: "10%", color: "bg-yellow-100 text-yellow-800" }
  ];

  const calendarTemplate = `Content Calendar Template - Month: [MONTH YEAR]

WEEKLY THEMES:
Week 1: [Theme 1 - e.g., "Getting Started"]
Week 2: [Theme 2 - e.g., "Advanced Tips"] 
Week 3: [Theme 3 - e.g., "Case Studies"]
Week 4: [Theme 4 - e.g., "Behind the Scenes"]

DAY-BY-DAY BREAKDOWN:

MONDAY - Educational Focus
LinkedIn: [Educational post with carousel/video]
- Topic: [specific topic]
- Format: [carousel/video/text]
- CTA: [specific call to action]
- Hashtags: #[relevant] #[hashtags]

Instagram: [Tip or tutorial reel]
- Hook: [attention-grabbing opening]
- Value: [key takeaway]
- CTA: [save, share, comment]

TUESDAY - Behind-the-Scenes
LinkedIn: [Process or team content]
Instagram: [Stories + Feed post]
Twitter: [Thread about process]

WEDNESDAY - User-Generated Content
LinkedIn: [Customer story/testimonial]
Instagram: [Repost customer content]
Twitter: [Customer highlight thread]

THURSDAY - Educational Focus
LinkedIn: [Deep-dive article or post]
Instagram: [Educational carousel]
YouTube: [Tutorial video] (Weekly)

FRIDAY - Community/Entertainment
LinkedIn: [Weekly roundup or inspiration]
Instagram: [Fun/personality content]
Twitter: [Engage with community]

CONTENT BUCKETS (80/20 Rule):
80% Value-First Content:
- Educational tutorials
- Industry insights
- Customer success stories
- Behind-the-scenes content

20% Promotional Content:
- Product announcements
- Feature highlights
- Special offers
- Company news

HASHTAG STRATEGY:
Primary Industry Tags: #[industry] #[niche] #[service]
Secondary Reach Tags: #[broader] #[trending] #[location]
Branded Tags: #[companyname] #[campaignname]

ENGAGEMENT STRATEGY:
- Respond to comments within 2 hours
- Like and comment on industry leaders' posts
- Share relevant content from customers/partners
- Join conversations using branded hashtags

CONTENT CREATION WORKFLOW:
Monday: Content planning and ideation
Tuesday: Visual creation (graphics, videos)
Wednesday: Copy writing and optimization
Thursday: Scheduling and final review
Friday: Performance analysis and next week planning

METRICS TO TRACK:
- Reach and impressions
- Engagement rate (likes, comments, shares)
- Click-through rate to website
- Lead generation from social
- Brand mention sentiment`;

  const postTemplates = {
    educational: `🎯 [HOOK: Bold statement or question]

[Problem identification - what your audience struggles with]

Here's how to [solve the problem]:

✅ Step 1: [Specific action]
✅ Step 2: [Specific action] 
✅ Step 3: [Specific action]

💡 Pro tip: [Additional insight or warning]

[Personal experience or results you've seen]

What's your experience with [topic]? Drop a comment below 👇

#[hashtag1] #[hashtag2] #[hashtag3]`,

    behindScenes: `🔍 Behind the scenes at [Company Name]

[Set the scene - what's happening today]

Here's what most people don't see about [process/industry]:

• [Insight 1 - something surprising]
• [Insight 2 - something challenging]  
• [Insight 3 - something rewarding]

The reality is [honest take on the work/industry].

But here's why we love it anyway: [positive spin/mission]

What would you like to see more of behind the scenes? 

#[hashtag1] #[hashtag2] #[hashtag3]`,

    promotional: `🚀 [Exciting announcement or benefit]

[Brief context - why this matters to your audience]

Introducing [product/service/feature]:

🔥 [Key benefit 1]
🔥 [Key benefit 2]
🔥 [Key benefit 3]

Perfect for [ideal customer] who want to [achieve goal].

[Social proof - testimonial quote or stat]

Ready to [desired action]?

👉 [Clear call to action with link/next step]

Questions? Drop them below 👇

#[hashtag1] #[hashtag2] #[hashtag3]`
  };

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
              <BreadcrumbPage>Content Calendar Template</BreadcrumbPage>
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
            <Calendar className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Content Planning Template</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Content Calendar Template
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Plan, schedule, and track content across all channels with this comprehensive template.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CopyToClipboard 
              text={calendarTemplate}
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Copy Template
            </CopyToClipboard>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://docs.google.com/spreadsheets/create', '_blank')}
            >
              Open in Google Sheets
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
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <section id="overview">
              <h2 className="text-3xl font-bold mb-6 text-primary">Content Planning Made Simple</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  A content calendar is your roadmap to consistent, strategic social media presence. 
                  This template helps you plan content themes, maintain the right mix of content types, 
                  and stay organized across multiple platforms.
                </p>
                <p className="mb-6">
                  Follow the 80/20 rule: 80% valuable content that educates, entertains, or inspires 
                  your audience, and 20% promotional content about your products or services.
                </p>
              </div>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Content Calendar Benefits</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Consistent posting schedule builds audience trust</li>
                      <li>• Strategic content mix maximizes engagement</li>
                      <li>• Batch creation saves 5+ hours per week</li>
                      <li>• Clear themes and messaging improve brand recognition</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            {/* Platform Strategy */}
            <section id="platform-strategy">
              <h2 className="text-3xl font-bold mb-6 text-primary">Platform-Specific Strategy</h2>
              <p className="text-muted-foreground mb-8">
                Each platform has unique best practices for timing, frequency, and content format.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <platform.icon className={`h-6 w-6 mr-3 ${platform.color}`} />
                          {platform.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-sm">Posting Frequency:</span>
                            <p className="text-muted-foreground text-sm">{platform.frequency}</p>
                          </div>
                          <div>
                            <span className="font-medium text-sm">Best Times:</span>
                            <p className="text-muted-foreground text-sm">{platform.bestTimes}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Content Mix */}
            <section id="content-mix">
              <h2 className="text-3xl font-bold mb-6 text-primary">Content Type Distribution</h2>
              <p className="text-muted-foreground mb-8">
                Follow this proven content mix to maximize engagement and build trust with your audience.
              </p>

              <div className="space-y-4">
                {contentTypes.map((content, index) => (
                  <motion.div
                    key={content.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3 className="font-semibold mr-3">{content.type}</h3>
                              <Badge className={content.color}>{content.percentage}</Badge>
                            </div>
                            <p className="text-muted-foreground text-sm">{content.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Calendar Template */}
            <section id="calendar-template">
              <h2 className="text-3xl font-bold mb-6 text-primary">Complete Calendar Template</h2>
              <p className="text-muted-foreground mb-6">
                Monthly content calendar with weekly themes, daily post types, and strategic content mix.
              </p>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Monthly Content Calendar Template</CardTitle>
                    <CopyToClipboard text={calendarTemplate} />
                  </div>
                </CardHeader>
                <CardContent>
                  <Collapsible open={openSections.calendar}>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                      onClick={() => toggleSection('calendar')}
                    >
                      <span className="font-medium">View Complete Template</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${openSections.calendar ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <pre className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                        <code>{calendarTemplate}</code>
                      </pre>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* Post Templates */}
            <section id="post-templates">
              <h2 className="text-3xl font-bold mb-6 text-primary">Post Templates</h2>
              <p className="text-muted-foreground mb-8">
                Ready-to-use templates for different content types. Just fill in your specific details.
              </p>

              <div className="space-y-6">
                {Object.entries(postTemplates).map(([type, template], index) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="capitalize">{type.replace(/([A-Z])/g, ' $1')} Post Template</CardTitle>
                          <CopyToClipboard text={template} />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Collapsible open={openSections[type]}>
                          <CollapsibleTrigger 
                            className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                            onClick={() => toggleSection(type)}
                          >
                            <span className="font-medium">View Template</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${openSections[type] ? 'rotate-180' : ''}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <pre className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                              <code>{template}</code>
                            </pre>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Implementation Tips */}
            <section id="implementation-tips">
              <h2 className="text-3xl font-bold mb-6 text-primary">Implementation Tips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Planning Process
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Plan content 2-4 weeks in advance</li>
                    <li>• Batch create visuals and copy</li>
                    <li>• Schedule posts using automation tools</li>
                    <li>• Review and adjust weekly based on performance</li>
                    <li>• Keep 20% flexibility for trending topics</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Hash className="h-5 w-5 mr-2 text-primary" />
                    Engagement Strategy
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Respond to comments within 2 hours</li>
                    <li>• Ask questions to encourage interaction</li>
                    <li>• Use platform-specific hashtags strategically</li>
                    <li>• Share user-generated content regularly</li>
                    <li>• Join relevant conversations in your industry</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Related Resources */}
            <section id="related-resources" className="mt-16">
              <h2 className="text-3xl font-bold mb-6 text-primary">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">Creative Brief Template</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Plan your content campaigns with clear messaging and creative direction.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/resources/creative-brief-template">View Template</a>
                  </Button>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">UGC Brief Template</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Brief creators for authentic user-generated content that fits your calendar.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/resources/templates/ugc-brief">View Template</a>
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

export default ContentCalendarTemplate;