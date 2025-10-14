import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Target, BarChart, Users, CheckCircle, TrendingUp, Zap, Award, Rocket, Star } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const MarketingLeaders: React.FC = () => {
  const challenges = [
    { icon: Target, title: "Meeting Aggressive Growth Targets", description: "Deliver results that align with business objectives and KPIs" },
    { icon: Users, title: "Building High-Performance Teams", description: "Scale your marketing team without compromising quality" },
    { icon: BarChart, title: "Proving Marketing ROI", description: "Demonstrate clear attribution and business impact" },
    { icon: TrendingUp, title: "Staying Ahead of Trends", description: "Keep up with rapidly evolving marketing channels and tactics" }
  ];

  const solutions = [
    { title: "Performance Marketing Teams", description: "Expert PPC, social media, and conversion optimization specialists" },
    { title: "Content & Creative Production", description: "Scalable content creation for all channels and campaigns" },
    { title: "Marketing Operations & Automation", description: "CRM setup, lead scoring, and workflow automation" },
    { title: "Analytics & Attribution Setup", description: "Advanced tracking, reporting, and performance measurement" },
    { title: "Growth Strategy & Consulting", description: "Strategic planning and campaign optimization guidance" },
    { title: "Brand & Creative Development", description: "Brand strategy, creative assets, and campaign materials" }
  ];

  const caseStudy = {
    company: "Digital Six",
    industry: "Marketing & Advertising • Brisbane, Australia",
    challenge: "Unreliable freelancers from India and Pakistan, frequent hiring and termination cycles, high costs and operational inefficiencies",
    solution: "Built a dependable offshore team with WordPress Development, Shopify Development, SEO Specialists, UI/UX Design, Data Research, AI Development, Lead Generation, and Next.js Development",
    results: [
      { metric: "Team Growth", value: "21→47", improvement: "Scaled across Australia and Nepal" },
      { metric: "Monthly Savings", value: "$1M+", improvement: "vs. in-house hiring costs" },
      { metric: "Quality Delivery", value: "100%", improvement: "Improved WordPress & SEO" }
    ],
    testimonial: {
      quote: "We were maybe 22–23 when we started... now there are 47 people across Australia and Nepal. The WordPress guys are killing it. The SEO side is strong. This is way better than our past freelancer experience. I've already referred several people to Hireshore.",
      author: "Aaron Erwich",
      role: "Founder, Digital Six",
      videoUrl: "https://www.youtube.com/embed/yW90cSyX_iI"
    }
  };

  return (
    <>
      <Helmet>
        <title>Marketing Leadership Solutions | Scale Your Marketing Team | HireShore</title>
        <meta name="description" content="Hit your growth targets every quarter with HireShore's marketing pods. Scale your team 3x faster with 40% better ROI and 90% target achievement rate." />
        <meta name="keywords" content="marketing team scaling, CMO solutions, performance marketing, marketing operations, growth marketing services" />
        <link rel="canonical" href="https://hireshore.com/solutions/marketing-leaders" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marketing Leadership Solutions",
            "provider": {
              "@type": "Organization",
              "name": "HireShore"
            },
            "description": "Marketing pods that provide expertise and capacity to consistently deliver results and exceed KPIs",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Marketing Teams"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marketing Operations & Automation"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <NavBar />
        
        {/* Breadcrumbs */}
        <div className="bg-muted/30 border-b pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex flex-wrap text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link to="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground font-medium">Marketing Leaders</span>
            </nav>
          </div>
        </div>
      
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Target className="h-4 w-4" />
                  <span>For Marketing Leaders</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Hit Your Growth Targets
                <span className="text-primary"> Every Quarter</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Stop struggling with resource constraints and missed deadlines. Our marketing pods provide 
                the expertise and capacity you need to consistently deliver results and exceed KPIs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/configure-pod"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group shadow-lg"
                >
                  Scale My Marketing
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Book Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <div className="text-muted-foreground">Faster Campaign Launch</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-muted-foreground">Better ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">Target Achievement Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Marketing Leader Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand the pressure of delivering consistent growth with limited resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
                  <challenge.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Marketing Solutions That Deliver
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete marketing support designed for ambitious marketing leaders
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-muted/30 p-6 rounded-xl hover:bg-primary/5 transition-colors border border-border">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Support Marketing Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From strategy to execution in 3 proven steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Strategy Alignment</h3>
                <p className="text-muted-foreground">We align our pods with your business objectives and KPIs</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Rapid Execution</h3>
                <p className="text-muted-foreground">Deploy specialized teams that hit the ground running</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground">Continuously optimize campaigns and report on results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real Marketing Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how marketing leaders are exceeding their KPIs with HireShore
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{caseStudy.company}</h3>
                  <p className="text-muted-foreground">{caseStudy.industry}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">The Challenge</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Our Solution</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">The Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="bg-muted/30 p-4 rounded-lg border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                        <div className="text-sm font-medium text-foreground mb-1">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  View More Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium text-foreground mb-6 italic">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-foreground">{caseStudy.testimonial.author}</div>
                    <div className="text-muted-foreground">{caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={caseStudy.testimonial.videoUrl}
                    title={`${caseStudy.company} Testimonial`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Watch the full testimonial</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Helpful Resources for Marketing Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tools and guides to accelerate your marketing success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/resources/cost-calculator" className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
                <BarChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Cost Calculator</h3>
                <p className="text-muted-foreground">Calculate ROI and compare costs vs. in-house hiring</p>
              </Link>
              <Link to="/services/marketing-ops-pod" className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Marketing Ops Pod</h3>
                <p className="text-muted-foreground">Learn about our marketing automation and operations services</p>
              </Link>
              <Link to="/resources/delivery-pods-playbook" className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Delivery Pods Playbook</h3>
                <p className="text-muted-foreground">Best practices for managing and scaling marketing pods</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Exceed Your Targets?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join marketing leaders who consistently hit their KPIs with HireShore pods
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-background text-foreground font-semibold py-4 px-8 rounded-lg hover:bg-background/90 transition-colors group shadow-lg"
              >
                Configure Marketing Pod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center border-2 border-primary-foreground text-primary-foreground font-semibold py-4 px-8 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default MarketingLeaders;