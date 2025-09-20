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
  Search, 
  ChevronDown, 
  ChevronRight, 
  Target,
  TrendingUp,
  Link,
  FileText,
  CheckCircle,
  Globe
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
      content: `Search Engine Optimization (SEO) is the practice of improving your website's visibility in search engine results pages (SERPs). When people search for products, services, or information related to your business, you want your website to appear as high as possible in the results.

**Why SEO Matters:**
- 75% of users never scroll past the first page of search results
- Organic search drives 53% of all website traffic
- SEO leads have a 14.6% close rate vs. 1.7% for outbound leads
- It's cost-effective long-term marketing

**How Search Engines Work:**
1. **Crawling**: Search engines discover pages on the web
2. **Indexing**: Pages are analyzed and stored in the search engine's database
3. **Ranking**: When someone searches, the engine decides which pages to show and in what order`
    },
    {
      number: "02", 
      title: "Keyword Research & Strategy",
      description: "Find the right keywords your audience is searching for",
      icon: Target,
      content: `Keyword research is the foundation of any successful SEO strategy. It helps you understand what your potential customers are searching for and how to create content that meets their needs.

**Types of Keywords:**
- **Short-tail**: 1-2 words, high competition (e.g., "shoes")
- **Long-tail**: 3+ words, lower competition, higher intent (e.g., "best running shoes for flat feet")
- **Commercial**: Indicate buying intent (e.g., "buy," "best," "review")
- **Informational**: Seeking information (e.g., "how to," "what is")

**Research Process:**
1. Start with seed keywords related to your business
2. Use keyword research tools to expand your list
3. Analyze search volume and competition
4. Consider user intent behind each keyword
5. Group keywords by topic and priority`
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description: "Optimize individual pages for your target keywords", 
      icon: FileText,
      content: `On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic. This includes both the content and HTML source code of a page.

**Key On-Page Elements:**

**Title Tags:**
- Include primary keyword near the beginning
- Keep under 60 characters
- Make it compelling and click-worthy
- Each page should have a unique title

**Meta Descriptions:**
- Summarize page content in 150-160 characters
- Include target keyword naturally
- Write compelling copy that encourages clicks
- Include a call-to-action when appropriate

**Header Tags (H1, H2, H3):**
- Use H1 for the main page title
- Use H2-H6 to structure content logically
- Include keywords in headers naturally
- Help both users and search engines understand content structure

**Content Optimization:**
- Include keywords naturally throughout content
- Write for humans first, search engines second
- Use synonyms and related terms
- Ensure content is comprehensive and valuable`
    },
    {
      number: "04",
      title: "Technical SEO Basics", 
      description: "Ensure your website is technically sound for search engines",
      icon: CheckCircle,
      content: `Technical SEO focuses on improving the technical aspects of your website to help search engines crawl, index, and understand your site more effectively.

**Essential Technical Elements:**

**Site Speed:**
- Aim for loading times under 3 seconds
- Optimize images (compress, use WebP format)
- Minimize JavaScript and CSS
- Use a Content Delivery Network (CDN)

**Mobile Optimization:**
- Ensure responsive design across all devices
- Test mobile usability regularly
- Use Google's Mobile-Friendly Test tool

**Site Structure:**
- Create logical URL structure
- Use descriptive, keyword-rich URLs
- Implement proper internal linking
- Create XML sitemap and submit to search engines

**Security:**
- Use HTTPS (SSL certificate)
- Keep software and plugins updated
- Regular security monitoring

**Indexability:**
- Ensure important pages can be crawled
- Use robots.txt properly
- Check for and fix crawl errors
- Monitor Google Search Console for issues`
    },
    {
      number: "05",
      title: "Content Strategy for SEO",
      description: "Create valuable content that ranks and converts",
      icon: TrendingUp,
      content: `Content is the foundation of SEO success. Search engines want to show users the most relevant and valuable content for their queries.

**Content Planning:**

**Topic Clusters:**
- Create pillar pages for broad topics
- Support with cluster content covering subtopics
- Link related content together
- Establish topical authority

**Content Types:**
- Blog posts and articles
- Product/service pages
- How-to guides and tutorials
- Case studies and success stories
- FAQs and resource pages

**Content Optimization:**
- Research keywords for each piece of content
- Write compelling headlines and introductions
- Use formatting to improve readability (bullets, headers, short paragraphs)
- Include relevant images and media
- Add internal links to related content
- Optimize for featured snippets

**Content Maintenance:**
- Regularly update existing content
- Monitor performance and optimize underperforming pages
- Refresh outdated information
- Add new information to keep content current`
    },
    {
      number: "06",
      title: "Measuring SEO Success",
      description: "Track progress and optimize your SEO efforts",
      icon: TrendingUp,
      content: `Measuring SEO performance helps you understand what's working and where to focus your efforts for maximum impact.

**Key SEO Metrics:**

**Organic Traffic:**
- Monitor overall organic search traffic
- Track traffic to specific pages
- Analyze traffic trends over time

**Keyword Rankings:**
- Track rankings for target keywords
- Monitor ranking changes over time
- Focus on keywords that drive business value

**Click-Through Rates (CTR):**
- Monitor CTR in Google Search Console
- Optimize titles and descriptions for better CTR
- Test different approaches

**Conversion Metrics:**
- Track organic traffic conversions
- Calculate organic traffic ROI
- Monitor goal completions from organic search

**Technical Health:**
- Site speed and Core Web Vitals
- Crawl errors and indexing issues
- Mobile usability scores

**Tools for Tracking:**
- Google Analytics for traffic and conversions
- Google Search Console for search performance
- SEO tools like SEMrush, Ahrefs, or Moz for comprehensive tracking`
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
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              SEO Basics Guide
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Master the fundamentals of search engine optimization to drive organic traffic and grow your business online.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById('step-01')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Search className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={bookCall}
            >
              Get SEO Audit
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
                <TableOfContents />
              </div>
            </div>

            {/* Guide Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Search className="h-6 w-6 text-primary" />
                      SEO Fundamentals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-slate max-w-none">
                    <p className="text-lg text-muted-foreground mb-6">
                      This guide covers everything you need to know to get started with SEO. You'll learn how to research keywords, 
                      optimize your website, and measure your success. Perfect for beginners and small business owners.
                    </p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm mb-2"><strong>What you'll learn:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• How search engines work and rank websites</li>
                        <li>• How to find the right keywords for your business</li>
                        <li>• On-page optimization techniques that work</li>
                        <li>• Technical SEO basics every website needs</li>
                        <li>• Content strategies that drive organic traffic</li>
                        <li>• How to measure and improve your SEO performance</li>
                      </ul>
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
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                          {step.number}
                        </div>
                        <div>
                          <div className="text-xl">{step.title}</div>
                          <div className="text-sm text-muted-foreground font-normal">{step.description}</div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: step.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br />') }} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Templates Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Templates & Checklists</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* SEO Checklist */}
                    <Collapsible open={openSections.checklist} onOpenChange={() => toggleSection('checklist')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          <span className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Complete SEO Checklist
                          </span>
                          {openSections.checklist ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium">SEO Implementation Checklist</span>
                            <CopyToClipboard text={seoChecklist} size="sm">
                              Copy Checklist
                            </CopyToClipboard>
                          </div>
                          <pre className="text-sm whitespace-pre-wrap font-mono">{seoChecklist}</pre>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Keyword Research Template */}
                    <Collapsible open={openSections.keywords} onOpenChange={() => toggleSection('keywords')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          <span className="flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Keyword Research Template
                          </span>
                          {openSections.keywords ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium">Keyword Research & Planning Template</span>
                            <CopyToClipboard text={keywordResearchTemplate} size="sm">
                              Copy Template
                            </CopyToClipboard>
                          </div>
                          <pre className="text-sm whitespace-pre-wrap font-mono">{keywordResearchTemplate}</pre>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
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