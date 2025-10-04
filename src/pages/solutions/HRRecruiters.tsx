import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Search, Clock, CheckCircle, Target, Shield, TrendingUp, Award } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const HRRecruiters: React.FC = () => {
  const challenges = [
    { icon: Search, title: "Finding Quality Candidates", description: "Access pre-vetted talent pools and specialized skills" },
    { icon: Clock, title: "Reducing Time-to-Hire", description: "Accelerate hiring with streamlined processes" },
    { icon: Target, title: "Meeting Hiring Quotas", description: "Consistently fill positions and meet recruitment targets" },
    { icon: Shield, title: "Quality Assurance", description: "Ensure candidate quality and cultural fit" }
  ];

  const solutions = [
    { title: "Talent Sourcing & Screening", description: "Pre-vetted candidates from our global talent network" },
    { title: "Recruitment Process Outsourcing", description: "End-to-end recruitment services and candidate management" },
    { title: "Technical Skills Assessment", description: "Comprehensive technical and soft skills evaluation" },
    { title: "Employer Branding", description: "Attract top talent with compelling employer brand content" },
    { title: "Interview Process Optimization", description: "Streamlined interview workflows and assessment tools" },
    { title: "Onboarding Support", description: "Smooth candidate onboarding and integration processes" }
  ];

  const caseStudy = {
    company: "PropertyStack",
    industry: "PropTech • Brisbane, Australia",
    challenge: "When PropertyStack first connected with Hireshore, they were a lean 5-member startup team using no-code tools and freelancers. Scaling with freelancers lacked long-term efficiency, quality, and cohesion.",
    solution: "Hireshore delivered a full-stack recruitment-as-a-service solution, helping PropertyStack onboard 15+ high-quality team members across engineering, design, QA, client success, and operations including Full-stack & React Developers, QA Engineers, UX/UI Designers, Client Success & Tech Support Agents, Data Entry & Admin Support, Executive Assistant, and Engineering Team Lead.",
    results: [
      { metric: "Full-time Hires", value: "15+", improvement: "within 12 months" },
      { metric: "Weeks Hiring", value: "<3", improvement: "from ~1.5 months" },
      { metric: "Annual Savings", value: "$1M+", improvement: "vs local hiring" }
    ],
    testimonial: {
      quote: "We've hired over 15 people through Hireshore in just a year - and could've done 10 more. The hiring process is much easier now with resume videos and pre-vetted candidates. Compared to freelancers or other markets, the quality from Nepal has been significantly better. You guys have helped us grow fast and we've referred you to many of our partners.",
      author: "Ryan Jope",
      role: "Founder, PropertyStack",
      videoUrl: "https://www.youtube.com/embed/9xMVgH1j9XE"
    }
  };

  return (
    <>
      <Helmet>
        <title>HR & Recruitment Solutions | Fill Positions 60% Faster | HireShore</title>
        <meta name="description" content="Transform your recruitment process with HireShore's pre-vetted talent pools and streamlined hiring. Fill positions 60% faster with 95% success rate." />
        <meta name="keywords" content="HR recruitment solutions, talent acquisition, pre-vetted candidates, recruitment process outsourcing, hiring efficiency" />
        <link rel="canonical" href="https://hireshore.com/solutions/hr-recruiters" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "HR & Recruitment Solutions",
            "provider": {
              "@type": "Organization",
              "name": "HireShore"
            },
            "description": "Pre-vetted talent pools and streamlined recruitment processes that cut time-to-hire by 60%",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Recruitment Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Talent Sourcing & Screening"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Recruitment Process Outsourcing"
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
        <div className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link to="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-foreground font-medium">HR & Recruiters</span>
            </nav>
          </div>
        </div>
      
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Users className="h-4 w-4" />
                <span>For HR/Recruiters</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Fill Positions Faster
              <span className="text-primary"> With Quality Talent</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop struggling with empty pipelines and lengthy hiring cycles. Our recruitment pods 
              provide pre-vetted candidates and streamlined processes that cut time-to-hire by 60%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group shadow-lg"
              >
                Start Recruitment Pod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Book Consultation
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
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <div className="text-muted-foreground">Faster Time-to-Hire</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Position Fill Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Pre-Vetted Candidates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common HR & Recruitment Challenges
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand the pressure of filling positions with quality candidates quickly
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
                Complete Recruitment Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end recruitment support that helps you consistently hit your targets
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
                Our Recruitment Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From requirements to onboarding in 3 simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Requirements Analysis</h3>
                <p className="text-muted-foreground">We analyze your hiring needs and create detailed candidate profiles</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Source & Screen</h3>
                <p className="text-muted-foreground">Access our talent network and conduct comprehensive screening</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Present & Support</h3>
                <p className="text-muted-foreground">Present qualified candidates and support through offer and onboarding</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real Results from Real Companies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how HireShore transformed recruitment for growing teams
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
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
                <blockquote className="text-xl font-medium text-foreground mb-6 italic">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
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
                Helpful Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tools and guides to support your recruitment success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/resources/cost-calculator" className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Cost Calculator</h3>
                <p className="text-muted-foreground">Calculate hiring costs and ROI with our recruitment pod model</p>
              </Link>
              <Link to="/resources/delivery-pods-playbook" className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Delivery Pods Playbook</h3>
                <p className="text-muted-foreground">Learn how to maximize your recruitment pod effectiveness</p>
              </Link>
              <Link to="/staffing/talent-profiles" className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Talent Profiles</h3>
                <p className="text-muted-foreground">Browse our pre-vetted talent pool and available skills</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Recruitment?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join HR leaders who consistently exceed hiring targets with our recruitment pods
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-background text-foreground font-semibold py-4 px-8 rounded-lg hover:bg-background/90 transition-colors group shadow-lg"
              >
                Configure Recruitment Pod
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

export default HRRecruiters;