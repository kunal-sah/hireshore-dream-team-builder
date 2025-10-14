import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Headphones, Clock, CheckCircle, ArrowRight, Award, Target, Users, Home, ChevronRight, BarChart, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const SupportQA = () => {
  const painPoints = [
    'Customer tickets piling up with slow response times',
    'Quality issues slipping through to production',
    'Support team overwhelmed with repetitive questions',
    'No systematic QA process in place'
  ];

  const benefits = [
    { title: '24/7 Support Coverage', description: 'Never miss a customer inquiry', icon: Clock },
    { title: '90% Faster Response', description: 'Resolve issues in minutes, not hours', icon: MessageCircle },
    { title: '99% Bug Detection', description: 'Catch issues before customers do', icon: Target },
    { title: 'Improved CSAT Score', description: 'Happier customers, better retention', icon: Award }
  ];

  const howItWorks = [
    { step: '1', title: 'Process Setup', description: 'Define support workflows and QA checkpoints', icon: Target },
    { step: '2', title: 'Team Onboarding', description: 'Train dedicated support and QA specialists', icon: Users },
    { step: '3', title: 'Coverage Begins', description: '24/7 monitoring and response to all channels', icon: Clock },
    { step: '4', title: 'Continuous Improvement', description: 'Regular reporting and process optimization', icon: BarChart }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ongoing Support & QA Service",
    "description": "24/7 customer support and quality assurance. Deliver exceptional customer experience with dedicated support and QA teams.",
    "provider": {
      "@type": "Organization",
      "name": "HireShore"
    }
  };

  return (
    <>
      <Helmet>
        <title>Ongoing Support & QA Services | 24/7 Customer Support | HireShore</title>
        <meta name="description" content="Deliver exceptional customer experience with 24/7 support and systematic QA. Respond 90% faster and catch 99% of bugs before they reach customers." />
        <link rel="canonical" href="https://hireshore.com/solutions/support-qa" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <NavBar />
        
        <nav className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-muted/20" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/solutions">Solutions</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Support & QA</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        
        <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Headphones className="mr-2 h-4 w-4" />
              Support Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exceptional Support.
              <span className="bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent"> Flawless Quality.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Deliver world-class customer experience with 24/7 support and systematic QA that catches issues before they reach your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/configure-pod" className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-variant text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:shadow-glow transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')} className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-muted transition-colors">
                Book a Call
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Poor Support Costs You Customers</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Slow response times and quality issues damage your reputation and hurt retention. Your customers deserve better, but you don't have the resources to scale support properly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start bg-card p-6 rounded-lg border border-border">
                  <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="text-destructive font-bold text-sm">✕</span>
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
                <p className="text-muted-foreground mb-6">
                  We provide dedicated support and QA teams that work around the clock to ensure exceptional customer experience and product quality. From ticket management to bug detection, we've got you covered.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>24/7 multi-channel support coverage</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Systematic QA processes and testing</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Regular reporting and insights</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">90%</div>
                  <div className="text-muted-foreground mb-6">Faster Response Times</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">99%</div>
                  <div className="text-muted-foreground">Bug Detection Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Dedicated Support & QA Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 hover-scale">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground rounded-full font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Success Story: Swimply</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                  Customer Support Excellence
                </div>
                <h3 className="text-2xl font-bold mb-4">95% CSAT Score with Dedicated Support Team</h3>
                <p className="text-muted-foreground mb-6">
                  Swimply needed exceptional customer support to match their growing platform. Our dedicated USA timezone team delivered industry-leading performance.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>7 dedicated USA timezone customer representatives</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Consistently ranking #1 on performance leaderboard</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>99% response time achievement rate</span>
                  </div>
                </div>
                <Link to="/case-studies/swimply" className="inline-flex items-center text-primary font-semibold hover:underline">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">7</div>
                    <div className="text-sm text-muted-foreground">USA timezone reps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">#1</div>
                    <div className="text-sm text-muted-foreground">Leaderboard position</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Response time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">CSAT score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-xl border border-border shadow-elegant">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-center text-foreground mb-6 italic">
                "The support team from Hireshore is exceptional. They consistently rank #1 on our performance leaderboard and maintain a 95% CSAT score. Their dedication to customer success is unmatched."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground">Bunim Laskin</div>
                <div className="text-muted-foreground">Founder, Swimply</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Start delivering exceptional support today</h2>
            <p className="text-xl opacity-90 mb-8">
              Join 180+ companies who improved customer satisfaction with dedicated support and QA teams.
            </p>
            <Link to="/configure-pod" className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-elegant">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/services/support-qa" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Support & QA Pod</h3>
                <p className="text-sm text-muted-foreground">Learn about our QA framework</p>
              </Link>
              <Link to="/how-it-works/qa-framework" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">QA Framework</h3>
                <p className="text-sm text-muted-foreground">Our quality assurance methodology</p>
              </Link>
              <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Case Studies</h3>
                <p className="text-sm text-muted-foreground">See support transformation results</p>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default SupportQA;