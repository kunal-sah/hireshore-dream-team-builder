import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
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
  Search, 
  ChevronDown, 
  ChevronRight, 
  Target,
  TrendingUp,
  Link,
  FileText,
  CheckCircle,
  Globe,
  Clock,
  Users,
  Zap,
  Award,
  BarChart3,
  Settings,
  Lightbulb,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const SEOBasicsGuide = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const seoChecklist = `# SEO Basics Checklist

## Keyword Research
- [ ] Identify 5-10 primary keywords for your business
- [ ] Research long-tail keyword variations
- [ ] Analyze competitor keywords
- [ ] Use tools like Google Keyword Planner, Ubersuggest, or Ahrefs

## On-Page SEO
- [ ] Optimize title tags (include primary keyword, under 60 characters)
- [ ] Write compelling meta descriptions (under 160 characters)
- [ ] Use header tags (H1, H2, H3) to structure content
- [ ] Include keywords naturally in content
- [ ] Optimize images with descriptive alt text
- [ ] Create SEO-friendly URLs (short, descriptive, include keywords)

## Technical SEO
- [ ] Ensure fast page loading speeds
- [ ] Make website mobile-responsive
- [ ] Create and submit XML sitemap
- [ ] Set up Google Analytics and Search Console
- [ ] Fix broken links and 404 errors
- [ ] Implement SSL certificate (HTTPS)

## Content Strategy
- [ ] Create valuable, original content regularly
- [ ] Target different stages of the buyer journey
- [ ] Use internal linking to connect related pages
- [ ] Update old content to keep it fresh
- [ ] Include relevant keywords in content naturally

## Local SEO (if applicable)
- [ ] Create Google My Business profile
- [ ] Ensure NAP consistency across directories
- [ ] Collect positive customer reviews
- [ ] Target local keywords
- [ ] Create location-specific content`;

  const keywordResearchTemplate = `# Keyword Research Template

## Primary Keywords (5-10 main terms)
1. [Primary Keyword 1] - [Search Volume] - [Difficulty]
2. [Primary Keyword 2] - [Search Volume] - [Difficulty]
3. [Primary Keyword 3] - [Search Volume] - [Difficulty]

## Long-tail Keywords (10-20 specific phrases)
1. [Long-tail Keyword 1] - [Search Volume] - [Difficulty]
2. [Long-tail Keyword 2] - [Search Volume] - [Difficulty]
3. [Long-tail Keyword 3] - [Search Volume] - [Difficulty]

## Competitor Keywords
### Competitor 1: [Competitor Name]
- Top ranking keywords: [List 5-10]
- Content gaps we can target: [List opportunities]

### Competitor 2: [Competitor Name]
- Top ranking keywords: [List 5-10]
- Content gaps we can target: [List opportunities]

## Keyword Mapping
| Keyword | Target Page | Current Ranking | Priority |
|---------|-------------|-----------------|----------|
| [Keyword] | [Page URL] | [Position] | [High/Med/Low] |`;

  const guideSteps = [
    {
      number: "01",
      title: "Understanding SEO Fundamentals",
      description: "Learn what SEO is and why it matters for your business",
      icon: Globe,
      stats: { percentage: "75%", label: "users never scroll past page 1" },
      keyPoints: [
        "How search engines discover and rank content",
        "Why SEO is crucial for business growth",
        "The crawling, indexing, and ranking process",
        "Common SEO myths debunked"
      ],
      content: {
        overview: "Search Engine Optimization (SEO) is the practice of improving your website's visibility in search engine results pages (SERPs). When people search for products, services, or information related to your business, you want your website to appear as high as possible in the results.",
        sections: [
          {
            title: "Why SEO Matters for Your Business",
            points: [
              "75% of users never scroll past the first page of search results",
              "Organic search drives 53% of all website traffic",
              "SEO leads have a 14.6% close rate vs. 1.7% for outbound leads", 
              "It's the most cost-effective long-term marketing strategy",
              "Builds trust and credibility with your audience"
            ]
          },
          {
            title: "How Search Engines Work",
            points: [
              "**Crawling**: Search engines discover pages on the web using automated bots",
              "**Indexing**: Pages are analyzed and stored in the search engine's massive database",
              "**Ranking**: When someone searches, algorithms decide which pages to show and in what order",
              "**Serving Results**: The most relevant and authoritative pages appear first"
            ]
          }
        ]
      }
    },
    {
      number: "02", 
      title: "Keyword Research & Strategy",
      description: "Find the right keywords your audience is searching for",
      icon: Target,
      stats: { percentage: "92%", label: "of keywords get <10 searches/month" },
      keyPoints: [
        "Types of keywords and search intent",
        "Keyword research tools and techniques",
        "Competitor keyword analysis",
        "Building your keyword strategy"
      ],
      content: {
        overview: "Keyword research is the foundation of any successful SEO strategy. It helps you understand what your potential customers are searching for and how to create content that meets their needs.",
        sections: [
          {
            title: "Understanding Keyword Types",
            points: [
              "**Short-tail keywords**: 1-2 words, high competition (e.g., 'shoes')",
              "**Long-tail keywords**: 3+ words, lower competition, higher intent (e.g., 'best running shoes for flat feet')",
              "**Commercial keywords**: Indicate buying intent (e.g., 'buy,' 'best,' 'review')",
              "**Informational keywords**: Seeking information (e.g., 'how to,' 'what is')",
              "**Local keywords**: Include location-based terms (e.g., 'dentist near me')"
            ]
          },
          {
            title: "Keyword Research Process",
            points: [
              "Start with seed keywords related to your business and industry",
              "Use keyword research tools to expand your list (Google Keyword Planner, Ubersuggest)",
              "Analyze search volume, competition, and keyword difficulty",
              "Consider user intent behind each keyword (informational, commercial, navigational)",
              "Group keywords by topic and priority for content planning"
            ]
          }
        ]
      }
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description: "Optimize individual pages for your target keywords", 
      icon: FileText,
      stats: { percentage: "36%", label: "of SEOs think title tags are most important" },
      keyPoints: [
        "Title tag and meta description optimization",
        "Header structure and content optimization",
        "Internal linking strategies",
        "Image and media optimization"
      ],
      content: {
        overview: "On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic. This includes both the content and HTML source code of a page.",
        sections: [
          {
            title: "Essential On-Page Elements",
            points: [
              "**Title Tags**: Include primary keyword near the beginning, keep under 60 characters",
              "**Meta Descriptions**: Summarize page content in 150-160 characters with target keyword",
              "**Header Tags (H1, H2, H3)**: Structure content logically with keyword-rich headers",
              "**URL Structure**: Use short, descriptive URLs that include target keywords",
              "**Internal Linking**: Connect related pages to distribute authority and improve user experience"
            ]
          },
          {
            title: "Content Optimization Best Practices",
            points: [
              "Include keywords naturally throughout content (aim for 1-2% keyword density)",
              "Write for humans first, search engines second - focus on value and readability",
              "Use synonyms and related terms to avoid keyword stuffing",
              "Ensure content is comprehensive and covers the topic thoroughly",
              "Add relevant images with descriptive alt text for better accessibility"
            ]
          }
        ]
      }
    },
    {
      number: "04",
      title: "Technical SEO Basics", 
      description: "Ensure your website is technically sound for search engines",
      icon: Settings,
      stats: { percentage: "53%", label: "of mobile users leave if page loads >3 seconds" },
      keyPoints: [
        "Site speed and Core Web Vitals optimization",
        "Mobile responsiveness and usability",
        "Site structure and XML sitemaps",
        "Security and indexability"
      ],
      content: {
        overview: "Technical SEO focuses on improving the technical aspects of your website to help search engines crawl, index, and understand your site more effectively.",
        sections: [
          {
            title: "Site Performance Optimization",
            points: [
              "**Page Speed**: Aim for loading times under 3 seconds on all devices",
              "**Core Web Vitals**: Optimize for LCP, FID, and CLS metrics",
              "**Image Optimization**: Compress images and use modern formats like WebP",
              "**Minification**: Reduce JavaScript and CSS file sizes",
              "**CDN Implementation**: Use Content Delivery Networks for faster global access"
            ]
          },
          {
            title: "Technical Infrastructure",
            points: [
              "**Mobile Optimization**: Ensure responsive design across all devices",
              "**HTTPS Security**: Implement SSL certificates for secure connections",
              "**XML Sitemaps**: Create and submit sitemaps to search engines",
              "**Robots.txt**: Guide search engine crawlers effectively",
              "**Structured Data**: Use schema markup to help search engines understand content"
            ]
          }
        ]
      }
    },
    {
      number: "05",
      title: "Content Strategy for SEO",
      description: "Create valuable content that ranks and converts",
      icon: TrendingUp,
      stats: { percentage: "70%", label: "of marketers actively invest in content marketing" },
      keyPoints: [
        "Topic clusters and pillar content strategy",
        "Content types that drive organic traffic",
        "Content optimization techniques",
        "Content maintenance and updates"
      ],
      content: {
        overview: "Content is the foundation of SEO success. Search engines want to show users the most relevant and valuable content for their queries.",
        sections: [
          {
            title: "Strategic Content Planning",
            points: [
              "**Topic Clusters**: Create pillar pages for broad topics with supporting cluster content",
              "**Content Calendar**: Plan content around keyword research and seasonal trends", 
              "**User Intent Mapping**: Align content with different stages of the buyer journey",
              "**Competitor Analysis**: Identify content gaps and opportunities",
              "**Content Auditing**: Regularly review and optimize existing content performance"
            ]
          },
          {
            title: "High-Performing Content Types",
            points: [
              "**How-to Guides**: Step-by-step tutorials that provide immediate value",
              "**Listicles**: Easy-to-scan content that performs well on social media",
              "**Case Studies**: Real examples that build trust and demonstrate expertise",
              "**Product/Service Pages**: Commercial content optimized for buying-intent keywords",
              "**FAQ Pages**: Address common questions to capture voice search queries"
            ]
          }
        ]
      }
    },
    {
      number: "06",
      title: "Measuring SEO Success",
      description: "Track progress and optimize your SEO efforts",
      icon: BarChart3,
      stats: { percentage: "61%", label: "of marketers say improving SEO is their top priority" },
      keyPoints: [
        "Key SEO metrics and KPIs to track",
        "Essential tools for SEO monitoring",
        "Setting up proper tracking and reporting",
        "Making data-driven optimization decisions"
      ],
      content: {
        overview: "Measuring SEO performance helps you understand what's working and where to focus your efforts for maximum impact.",
        sections: [
          {
            title: "Critical SEO Metrics",
            points: [
              "**Organic Traffic**: Monitor overall organic search traffic and trends",
              "**Keyword Rankings**: Track positions for target keywords over time",
              "**Click-Through Rate (CTR)**: Measure how often people click your search results",
              "**Conversion Rate**: Track how organic traffic converts to leads or sales",
              "**Core Web Vitals**: Monitor technical performance metrics"
            ]
          },
          {
            title: "Essential SEO Tools",
            points: [
              "**Google Analytics**: Free tool for comprehensive traffic and behavior analysis",
              "**Google Search Console**: Essential for search performance and technical monitoring",
              "**SEMrush/Ahrefs**: Advanced keyword research and competitive analysis",
              "**PageSpeed Insights**: Google's tool for technical performance testing",
              "**Screaming Frog**: Desktop crawler for technical SEO audits"
            ]
          }
        ]
      }
    }
  ];

  const tocSections = guideSteps.map(step => ({
    id: `step-${step.number}`,
    title: `${step.number}. ${step.title}`,
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
              <BreadcrumbLink href="/resources/guides">Guides</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>SEO Basics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-5" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Complete SEO Masterclass
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">
                SEO Basics Guide
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Master search engine optimization fundamentals and drive organic traffic that converts into real business growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={() => document.getElementById('what-youll-learn')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Search className="mr-2 h-5 w-5" />
                Start Learning Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={bookCall}
                className="group"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Get Free SEO Audit
              </Button>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, label: "Avg. Organic CTR", value: "28.5%" },
              { icon: TrendingUp, label: "Traffic Increase", value: "150%" },
              { icon: Clock, label: "Reading Time", value: "25 min" },
              { icon: Award, label: "Success Rate", value: "94%" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-background/50 border border-border/50 backdrop-blur-sm">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
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
                <TableOfContents />
              </div>
            </div>

            {/* Guide Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* What You'll Learn */}
              <motion.div
                id="what-youll-learn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Lightbulb className="h-7 w-7 text-primary" />
                      What You'll Master
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        { 
                          icon: Globe, 
                          title: "Search Engine Fundamentals", 
                          description: "Understand how Google crawls, indexes, and ranks websites in search results",
                          color: "text-blue-600"
                        },
                        { 
                          icon: Target, 
                          title: "Strategic Keyword Research", 
                          description: "Find high-value keywords your customers actually search for",
                          color: "text-green-600"
                        },
                        { 
                          icon: FileText, 
                          title: "On-Page Optimization", 
                          description: "Optimize titles, content, and HTML to rank higher in search results",
                          color: "text-purple-600"
                        },
                        { 
                          icon: Settings, 
                          title: "Technical SEO Essentials", 
                          description: "Ensure your website is fast, mobile-friendly, and crawlable",
                          color: "text-orange-600"
                        },
                        { 
                          icon: TrendingUp, 
                          title: "Content That Converts", 
                          description: "Create valuable content that ranks well and drives business results",
                          color: "text-pink-600"
                        },
                        { 
                          icon: BarChart3, 
                          title: "Performance Tracking", 
                          description: "Measure SEO success and continuously improve your rankings",
                          color: "text-indigo-600"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center ${item.color}`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Quick Start Promise</h3>
                          <p className="text-muted-foreground mb-4">
                            Follow this guide and you'll have a solid SEO foundation within 2-3 hours. 
                            Most businesses see initial ranking improvements within 4-6 weeks.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">25-min read</Badge>
                            <Badge variant="secondary">Beginner-friendly</Badge>
                            <Badge variant="secondary">Actionable steps</Badge>
                            <Badge variant="secondary">Free tools included</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Guide Steps */}
              {guideSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  id={`step-${step.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
                      <CardTitle className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl text-lg font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold mb-2">{step.title}</div>
                          <div className="text-muted-foreground font-normal mb-3">{step.description}</div>
                          <div className="flex items-center gap-4">
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {step.stats.percentage} {step.stats.label}
                            </Badge>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <p className="text-muted-foreground leading-relaxed mb-4">{step.content.overview}</p>
                        
                        <div className="grid md:grid-cols-4 gap-3 mb-6">
                          {step.keyPoints.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-center gap-2 text-sm p-2 rounded-lg bg-muted/30">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        {step.content.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {section.title}
                            </h3>
                            <div className="space-y-3">
                              {section.points.map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ 
                                    __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                                  }} />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Templates & Tools Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <FileText className="h-7 w-7 text-primary" />
                      SEO Templates & Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {/* SEO Checklist */}
                    <Collapsible open={openSections.checklist} onOpenChange={() => toggleSection('checklist')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between h-auto p-4 hover:bg-primary/5 group">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-base">Complete SEO Checklist</div>
                              <div className="text-sm text-muted-foreground">Step-by-step implementation guide</div>
                            </div>
                          </div>
                          {openSections.checklist ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="bg-gradient-to-br from-muted/30 to-muted/50 p-6 rounded-lg border">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <span className="text-base font-medium">SEO Implementation Checklist</span>
                              <p className="text-sm text-muted-foreground mt-1">Everything you need to optimize your website</p>
                            </div>
                            <CopyToClipboard text={seoChecklist} size="sm">
                              <Button variant="secondary" size="sm">
                                Copy Checklist
                              </Button>
                            </CopyToClipboard>
                          </div>
                          <div className="bg-background/80 p-4 rounded-lg border-l-4 border-l-primary">
                            <pre className="text-sm whitespace-pre-wrap font-mono text-foreground overflow-x-auto">{seoChecklist}</pre>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Keyword Research Template */}
                    <Collapsible open={openSections.keywords} onOpenChange={() => toggleSection('keywords')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between h-auto p-4 hover:bg-primary/5 group">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                              <Target className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="text-left">
                              <div className="font-semibold text-base">Keyword Research Template</div>
                              <div className="text-sm text-muted-foreground">Organized worksheet for keyword planning</div>
                            </div>
                          </div>
                          {openSections.keywords ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="bg-gradient-to-br from-muted/30 to-muted/50 p-6 rounded-lg border">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <span className="text-base font-medium">Keyword Research & Planning Template</span>
                              <p className="text-sm text-muted-foreground mt-1">Structured approach to keyword research</p>
                            </div>
                            <CopyToClipboard text={keywordResearchTemplate} size="sm">
                              <Button variant="secondary" size="sm">
                                Copy Template
                              </Button>
                            </CopyToClipboard>
                          </div>
                          <div className="bg-background/80 p-4 rounded-lg border-l-4 border-l-primary">
                            <pre className="text-sm whitespace-pre-wrap font-mono text-foreground overflow-x-auto">{keywordResearchTemplate}</pre>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Free SEO Tools */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Essential Free SEO Tools
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { name: "Google Search Console", description: "Monitor search performance and technical issues", url: "https://search.google.com/search-console" },
                          { name: "Google Analytics", description: "Track website traffic and user behavior", url: "https://analytics.google.com" },
                          { name: "PageSpeed Insights", description: "Test and optimize website loading speed", url: "https://pagespeed.web.dev" },
                          { name: "Google Keyword Planner", description: "Research keywords and search volumes", url: "https://ads.google.com/home/tools/keyword-planner" }
                        ].map((tool, index) => (
                          <a 
                            key={index}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors group"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <ExternalLink className="w-4 h-4 text-primary" />
                              <span className="font-medium group-hover:text-primary">{tool.name}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{tool.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
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
                          <FileText className="h-5 w-5 text-primary" />
                          <span className="font-medium group-hover:text-primary">Content Calendar</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Plan SEO-optimized content</p>
                      </a>
                      <a href="/resources/guides/funnels" className="p-4 rounded-lg border border-input hover:bg-muted/50 transition-colors group">
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <span className="font-medium group-hover:text-primary">Funnel Guide</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Convert SEO traffic into customers</p>
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

export default SEOBasicsGuide;