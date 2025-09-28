import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Rocket, Clock, Zap, CheckCircle, ArrowRight, Users, Target, Award, Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const LaunchFaster = () => {
  const benefits = [
    'Launch in 5-7 days guaranteed',
    'Pre-built enterprise frameworks',
    'Dedicated launch specialists assigned',
    'Zero code delays or revisions',
    'Full quality assurance included',
    '30-day post-launch optimization'
  ];

  const process = [
    {
      step: '1',
      title: '24-Hour Discovery',
      description: 'Fast-track requirements gathering with our proven framework',
      icon: Users
    },
    {
      step: '2', 
      title: 'Parallel Development',
      description: 'Multiple specialists work simultaneously on your project',
      icon: Zap
    },
    {
      step: '3',
      title: 'Same-Week Launch',
      description: 'Go live within 7 days with ongoing performance monitoring',
      icon: Rocket
    }
  ];

  const socialProof = [
    { metric: '847', label: 'Websites Launched Fast' },
    { metric: '4.9/5', label: 'Client Satisfaction Score' },
    { metric: '6.2x', label: 'Average ROI Increase' }
  ];

  const testimonial = {
    quote: "We needed to launch before our competitor. HireShore delivered our website in 6 days - beating our competitor to market by 3 weeks. Revenue increased 340% in the first month.",
    author: "Sarah Chen",
    title: "CEO, TechStart Inc.",
    result: "340% revenue increase"
  };

  const urgencyText = "⚡ Limited: Only 3 Fast Launch slots available this month";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fast Website Launch Service",
    "description": "Launch websites 10x faster with our proven methodology. Get your website live in days, not months, with enterprise-quality results.",
    "provider": {
      "@type": "Organization",
      "name": "HireShore",
      "url": "https://hireshore.com"
    },
    "serviceType": "Website Development",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://hireshore.com/solutions/launch-faster"
    },
    "offers": {
      "@type": "Offer",
      "description": "Fast website launch in 5-7 days",
      "seller": {
        "@type": "Organization",
        "name": "HireShore"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Launch Websites 10x Faster | Fast Web Development Service | HireShore</title>
        <meta name="description" content="Launch your website in days, not months. Our proven fast launch methodology delivers enterprise-quality websites 90% faster than traditional development." />
        <meta name="keywords" content="fast website launch, rapid web development, quick website deployment, website launch service, fast web design" />
        <meta property="og:title" content="Launch Websites 10x Faster | HireShore" />
        <meta property="og:description" content="Launch your website in days, not months with our proven fast launch methodology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hireshore.com/solutions/launch-faster" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Launch Websites 10x Faster | HireShore" />
        <meta name="twitter:description" content="Launch your website in days, not months with our proven fast launch methodology." />
        <link rel="canonical" href="https://hireshore.com/solutions/launch-faster" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <NavBar />
        
        {/* Breadcrumbs */}
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
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/solutions">Solutions</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Launch Faster</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              {/* Urgency Banner */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 text-destructive font-medium mb-4 animate-pulse">
                <Clock className="mr-2 h-4 w-4" />
                {urgencyText}
              </div>
              
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                <Rocket className="mr-2 h-4 w-4" />
                Proven Launch System
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Beat Your Competition
                <span className="bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent"> to Market</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                While your competitors wait months for their websites, you'll be live in 7 days. Our battle-tested launch system has delivered 847 successful websites with 94% going live ahead of schedule.
              </p>
              
              {/* Social Proof */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  847+ websites launched
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  4.9/5 client satisfaction
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  6.2x average ROI increase
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/configure-pod"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-variant text-primary-foreground font-bold py-4 px-10 rounded-lg hover:shadow-glow transition-all duration-300 text-lg"
                >
                  Claim Your Fast Launch Slot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                  className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Free Strategy Call (15 min)
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                💰 No upfront payment • 📞 Free consultation • ⚡ 7-day guarantee
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-xl bg-card border border-border hover-scale group">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">847</div>
                <div className="text-muted-foreground font-medium">Websites Launched</div>
                <div className="text-xs text-green-600 mt-1">94% ahead of schedule</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border hover-scale group">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">4.9★</div>
                <div className="text-muted-foreground font-medium">Client Satisfaction</div>
                <div className="text-xs text-green-600 mt-1">From 200+ reviews</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border hover-scale group">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">6.2x</div>
                <div className="text-muted-foreground font-medium">ROI Increase</div>
                <div className="text-xs text-green-600 mt-1">Average first year</div>
              </div>
            </div>
            
            {/* Testimonial Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary-variant/5 rounded-2xl p-8 mb-16 border border-primary/20">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 max-w-4xl mx-auto">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.title}</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Fast Launch Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground rounded-full font-bold text-xl mb-4 group-hover:shadow-glow transition-all duration-300">
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Stop Losing Money to Slow Launches</h2>
                <p className="text-muted-foreground mb-4">
                  Every day your website isn't live, you're losing potential customers to competitors. Our clients typically see immediate results:
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="text-green-800 font-semibold">💰 Average Revenue Impact:</div>
                  <div className="text-green-700">$47,000 additional revenue in first 90 days</div>
                </div>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary-variant/10 p-8 rounded-xl border-2 border-primary/20 shadow-elegant">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-4">
                    🔥 Limited Time Offer
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Launch This Month</h3>
                  <p className="text-muted-foreground mb-4">
                    Secure your fast launch slot before they're gone.
                  </p>
                  <div className="text-sm text-muted-foreground mb-6">
                    ✅ Free strategy session<br/>
                    ✅ No setup fees<br/>
                    ✅ 7-day launch guarantee
                  </div>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/configure-pod"
                    className="block w-full text-center bg-gradient-to-r from-primary to-primary-variant text-primary-foreground font-bold py-4 px-6 rounded-lg hover:shadow-glow transition-all duration-300 shadow-lg"
                  >
                    🚀 Reserve My Launch Slot
                  </Link>
                  <button
                    onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                    className="block w-full text-center border-2 border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    📞 Free Consultation Call
                  </button>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  💳 No payment required to start
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white font-medium mb-6">
              <Clock className="mr-2 h-4 w-4" />
              Only 3 slots left this month
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Competition Won't Wait.
              <br />Neither Should You.
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
              Join 847 smart business owners who chose speed over delay. Launch your website in 7 days and start generating revenue while competitors are still planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
              >
                Claim Your Fast Launch Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                <Clock className="mr-2 h-4 w-4" />
                Free Strategy Call
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm opacity-90">
              <div>✅ 7-day launch guarantee</div>
              <div>✅ No upfront payment</div>
              <div>✅ Free strategy session</div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default LaunchFaster;