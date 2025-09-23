import React from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Rocket, Clock, Zap, CheckCircle, ArrowRight, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Rocket className="mr-2 h-4 w-4" />
              Launch Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Launch Websites
              <span className="text-primary"> 10x Faster</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Skip the months of development hassle. Our proven launch methodology gets your website live in days, not months, with enterprise-quality results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
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
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">5-7 Days</div>
              <div className="text-muted-foreground">Average Launch Time</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Faster Than Traditional</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
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
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
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
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Ready to Launch?</h3>
              <p className="text-muted-foreground mb-6">
                Get your website live in days with our proven fast launch system.
              </p>
              <div className="space-y-3">
                <Link
                  to="/configure-pod"
                  className="block w-full text-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Launch Your Website in Record Time</h2>
          <p className="text-xl opacity-90 mb-8">
            Join 100+ companies who chose speed without compromising quality.
          </p>
          <Link
            to="/configure-pod"
            className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Fast Launch Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default LaunchFaster;