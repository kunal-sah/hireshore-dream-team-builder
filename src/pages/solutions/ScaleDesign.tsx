import React from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Palette, Users, Zap, CheckCircle, ArrowRight, Clock, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScaleDesign = () => {
  const benefits = [
    'Unlimited design requests',
    'No hiring or onboarding costs',
    'Consistent brand standards',
    'Expert creative team',
    'Fast turnaround times',
    'Scalable with your growth'
  ];

  const designServices = [
    {
      title: 'Brand Design',
      description: 'Logos, brand guidelines, visual identity systems',
      icon: Award
    },
    {
      title: 'Marketing Assets',
      description: 'Social media graphics, ads, email templates',
      icon: Target
    },
    {
      title: 'Web Design',
      description: 'Landing pages, website graphics, UI elements', 
      icon: Palette
    },
    {
      title: 'Print & Digital',
      description: 'Brochures, presentations, digital publications',
      icon: Zap
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
              <Palette className="mr-2 h-4 w-4" />
              Design Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Scale Design Without
              <span className="text-primary"> The Hires</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get unlimited access to world-class design talent without the overhead of hiring. Scale your creative output instantly with our dedicated design pods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Design Pod
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-muted transition-colors"
              >
                <Clock className="mr-2 h-4 w-4" />
                See Design Examples
              </button>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-semibold mb-4">Traditional Hiring</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>• $80k+ annual salary per designer</div>
                <div>• 3-6 months hiring process</div>
                <div>• Benefits and overhead costs</div>
                <div>• Limited to work hours</div>
                <div>• Vacation and sick days</div>
              </div>
              <div className="mt-4 text-2xl font-bold text-red-500">$120k+/year</div>
            </div>
            <div className="p-6 rounded-xl border border-primary bg-primary/5">
              <h3 className="text-lg font-semibold mb-4 text-primary">Design Pod</h3>
              <div className="space-y-3 text-muted-foreground">
                <div>• Full design team access</div>
                <div>• Start in 5-7 days</div>
                <div>• No overhead or benefits</div>
                <div>• Flexible capacity scaling</div>
                <div>• Always available coverage</div>
              </div>
              <div className="mt-4 text-2xl font-bold text-primary">$2,500+/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Design Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Design Scaling Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit Requests</h3>
              <p className="text-muted-foreground">Upload briefs, references, and requirements through our simple portal</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Creation</h3>
              <p className="text-muted-foreground">Our designers create concepts and iterate based on your feedback</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Delivery</h3>
              <p className="text-muted-foreground">Receive production-ready assets within 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Design Pods?</h2>
              <p className="text-muted-foreground mb-8">
                Skip the hiring hassle and get instant access to a full creative team. Scale up or down as needed without the commitment of full-time employees.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-4">Start Scaling Today</h3>
              <p className="text-muted-foreground mb-6">
                Get unlimited design capacity without the hiring headaches.
              </p>
              <div className="space-y-3">
                <Link
                  to="/configure-pod"
                  className="block w-full text-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Configure Design Pod
                </Link>
                <Link
                  to="/case-studies"
                  className="block w-full text-center border border-border text-foreground font-medium py-3 px-6 rounded-lg hover:bg-muted transition-colors"
                >
                  View Design Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Design?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join companies who've replaced expensive hires with flexible design pods.
          </p>
          <Link
            to="/configure-pod"
            className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Design Pod
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ScaleDesign;