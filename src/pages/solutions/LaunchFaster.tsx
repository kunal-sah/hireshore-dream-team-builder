import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Rocket, Clock, Zap, CheckCircle, ArrowRight, Users, Target, Award, Home, ChevronRight, Star } from 'lucide-react';
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

        {/* Problem Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Traditional Website Launches Take Forever</h2>
            <p className="text-xl text-muted-foreground">
              Waiting 3-6 months for a website launch is costing you customers, revenue, and market opportunities. Development agencies move slowly, freelancers disappear mid-project, and your competitors are already live capturing your market share.
            </p>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Launch in Days, Not Months</h2>
                <p className="text-muted-foreground mb-6">
                  Our proven fast-launch methodology combines pre-built frameworks, expert developers, and streamlined processes to get your website live 10x faster than traditional development—without sacrificing quality.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Pre-built templates accelerate development</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Dedicated launch team ready to start immediately</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Quality assurance built into every step</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">10x</div>
                  <div className="text-muted-foreground mb-6">Faster Than Traditional</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">5-7</div>
                  <div className="text-muted-foreground">Days to Launch</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
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

        {/* Case Study Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Success Story: Cove Digital</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                  Website Migration
                </div>
                <h3 className="text-2xl font-bold mb-4">40-Page Website Launched in Just 2 Weeks</h3>
                <p className="text-muted-foreground mb-6">
                  Cove Digital needed to migrate and launch a complex 40-page dental website while maintaining SEO rankings. Our delivery pod completed the entire migration in record time.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Completed 3 full projects in one month</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Saved 40+ hours monthly for growth focus</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Maintained 100% SEO rankings post-migration</span>
                  </div>
                </div>
                <Link to="/case-studies/cove-digital" className="inline-flex items-center text-primary font-semibold hover:underline">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2</div>
                    <div className="text-sm text-muted-foreground">Weeks for 40-page site</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Projects in one month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">40+</div>
                    <div className="text-sm text-muted-foreground">Hours saved monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">SEO maintained</div>
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
                "Working with Hireshore has given me more time to grow my business and take on new local clients. I'm also a WordPress expert myself, so having a pod I trust to deliver without compromise is a game changer. I hand over the project and SOP, and it's done before the deadline and to the highest quality standard I could imagine."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground">Chloe Bundy</div>
                <div className="text-muted-foreground">Founder, Cove Digital</div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/resources/web-launch-checklist" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Web Launch Checklist</h3>
                <p className="text-sm text-muted-foreground">Complete pre-launch checklist for success</p>
              </Link>
              <Link to="/resources/delivery-pods-playbook" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Delivery Pods Playbook</h3>
                <p className="text-sm text-muted-foreground">How fast launch teams operate</p>
              </Link>
              <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Launch Success Stories</h3>
                <p className="text-sm text-muted-foreground">See real launch timelines and results</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Get started in 24 hours with our expert team</h2>
            <p className="text-xl opacity-90 mb-8">
              Join 100+ companies who chose speed without compromising quality. Launch your website in record time.
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