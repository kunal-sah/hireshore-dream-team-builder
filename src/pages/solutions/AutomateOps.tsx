import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Settings, Clock, Zap, CheckCircle, ArrowRight, TrendingUp, Target, Award, Home, ChevronRight, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const AutomateOps = () => {
  const painPoints = [
    'Manual tasks consuming 20+ hours per week',
    'Inconsistent processes leading to errors',
    'Team burnout from repetitive work',
    'Difficulty scaling without adding headcount'
  ];

  const benefits = [
    { title: 'Save 20+ Hours Weekly', description: 'Eliminate repetitive manual tasks', icon: Clock },
    { title: '90% Faster Workflows', description: 'Streamline operations end-to-end', icon: Zap },
    { title: 'Reduce Errors by 75%', description: 'Consistent, automated processes', icon: Target },
    { title: 'Scale Without Hiring', description: 'Grow operations efficiently', icon: TrendingUp }
  ];

  const howItWorks = [
    { step: '1', title: 'Process Audit', description: 'We analyze your current workflows and identify automation opportunities', icon: Target },
    { step: '2', title: 'Custom Automation', description: 'Build tailored solutions integrated with your existing tools', icon: Settings },
    { step: '3', title: 'Team Training', description: 'Onboard your team and optimize continuously', icon: Users },
    { step: '4', title: 'Ongoing Support', description: 'Monitor performance and refine as you scale', icon: BarChart }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Operations Automation Service",
    "description": "Automate Your Agency Operations and Save Time. Save 20+ hours/week with intelligent workflow automation.",
    "provider": {
      "@type": "Organization",
      "name": "HireShore"
    }
  };

  return (
    <>
      <Helmet>
        <title>Automate Your Agency Operations and Save Time | HireShore</title>
        <meta name="description" content="Save 20+ hours/week and manage projects efficiently with HireShore's automation solutions. Streamline workflows, reduce errors, and scale without hiring." />
        <link rel="canonical" href="https://hireshore.com/solutions/automate-ops" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <NavBar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Settings className="h-4 w-4" />
                <span>Operations Automation</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automate Your Operations,
              <span className="text-primary"> Scale Without Limits</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop wasting time on repetitive tasks. Our automation specialists build custom workflows 
              that save 20+ hours weekly and reduce operational costs by 60%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Start Automation Pod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Hours Saved Weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-gray-600">Volume Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Automate Your Operations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with intelligent automation that works 24/7
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Manual Tasks Drain Your Time and Slow Down Growth</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Manual tasks drain your time, slow down delivery, and make scaling your agency nearly impossible. You're stuck doing repetitive work instead of focusing on what matters.
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

        {/* Solution Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
                <p className="text-muted-foreground mb-6">
                  We automate repetitive tasks, integrate seamlessly with your tools, and scale operations without hiring full-time staff. Your team focuses on high-value work while automation handles the rest.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Automate repetitive tasks to free your team</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Integrate seamlessly with your tools</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Scale operations without hiring full-time staff</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-muted-foreground mb-6">Hours Saved Per Week</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">75%</div>
                  <div className="text-muted-foreground">Reduction in Errors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Automation Matters</h2>
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

        {/* How It Works */}
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

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Get started in 24 hours with our expert team</h2>
            <p className="text-xl opacity-90 mb-8">
              Join 200+ companies who automated their operations and scaled efficiently.
            </p>
            <Link to="/configure-pod" className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-elegant">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/resources/delivery-pods-playbook" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Delivery Pods Playbook</h3>
                <p className="text-sm text-muted-foreground">Complete guide to scaling operations</p>
              </Link>
              <Link to="/resources/cost-calculator" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Cost Calculator</h3>
                <p className="text-sm text-muted-foreground">See how much you can save</p>
              </Link>
              <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Case Studies</h3>
                <p className="text-sm text-muted-foreground">Real results from our clients</p>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default AutomateOps;