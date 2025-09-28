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
    'Launch in days, not months',
    'Pre-built templates and frameworks',
    'Streamlined development process',
    'Dedicated launch team',
    'Quality assurance included',
    'Post-launch support'
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'We understand your vision and requirements',
      icon: Users
    },
    {
      step: '2', 
      title: 'Rapid Development',
      description: 'Our team builds using proven frameworks',
      icon: Zap
    },
    {
      step: '3',
      title: 'Launch & Support',
      description: 'Go live with ongoing optimization',
      icon: Rocket
    }
  ];

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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                <Rocket className="mr-2 h-4 w-4" />
                Launch Solution
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Launch Websites
                <span className="bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent"> 10x Faster</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Skip the months of development hassle. Our proven launch methodology gets your website live in days, not months, with enterprise-quality results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/configure-pod"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-variant text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  Start Fast Launch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <button
                  onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                  className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-muted transition-colors"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Book Discovery Call
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-xl bg-card border border-border hover-scale">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">5-7 Days</div>
                <div className="text-muted-foreground">Average Launch Time</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border hover-scale">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">90%</div>
                <div className="text-muted-foreground">Faster Than Traditional</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border hover-scale">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">100+</div>
                <div className="text-muted-foreground">Successful Fast Launches</div>
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
                <h2 className="text-3xl font-bold mb-6">Why Launch Fast Matters</h2>
                <p className="text-muted-foreground mb-8">
                  In today's competitive market, speed to market can make or break your success. Our fast launch methodology combines proven frameworks with expert execution.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border shadow-elegant">
                <h3 className="text-xl font-semibold mb-4">Ready to Launch?</h3>
                <p className="text-muted-foreground mb-6">
                  Get your website live in days with our proven fast launch system.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/configure-pod"
                    className="block w-full text-center bg-gradient-to-r from-primary to-primary-variant text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:shadow-glow transition-all duration-300"
                  >
                    Configure Launch Pod
                  </Link>
                  <Link
                    to="/case-studies"
                    className="block w-full text-center border border-border text-foreground font-medium py-3 px-6 rounded-lg hover:bg-muted transition-colors"
                  >
                    View Success Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Launch Your Website in Record Time</h2>
            <p className="text-xl opacity-90 mb-8">
              Join 100+ companies who chose speed without compromising quality.
            </p>
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-elegant"
            >
              Start Fast Launch Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default LaunchFaster;