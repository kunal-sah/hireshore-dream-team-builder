import React from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Code, Zap, Shield, CheckCircle, ArrowRight, Globe, Smartphone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDev = () => {
  const technologies = [
    {
      name: 'Webflow',
      description: 'Visual development platform for responsive websites',
      icon: Globe,
      features: ['No-code friendly', 'Fast deployment', 'SEO optimized']
    },
    {
      name: 'WordPress',
      description: 'Flexible CMS for content-rich websites',
      icon: Code,
      features: ['Custom themes', 'Plugin ecosystem', 'Easy updates']
    },
    {
      name: 'Shopify',
      description: 'E-commerce platform for online stores',
      icon: Smartphone,
      features: ['Payment integration', 'Inventory management', 'Mobile-first']
    }
  ];

  const benefits = [
    'Lightning-fast development',
    'Mobile-responsive design',
    'SEO-optimized structure',
    'Security best practices',
    'Performance optimization',
    'Ongoing maintenance'
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Code className="mr-2 h-4 w-4" />
              Web Development Pod
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Expert Web Development
              <span className="text-primary"> On Demand</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get professional websites built on Webflow, WordPress, or Shopify. Our web development pod delivers fast, secure, and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Web Dev Pod
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-muted transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" />
                View Portfolio
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Websites Built</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">5-7</div>
              <div className="text-muted-foreground">Days to Launch</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">A+</div>
              <div className="text-muted-foreground">Performance Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <tech.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
                <p className="text-muted-foreground mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Planning</h3>
              <p className="text-muted-foreground text-sm">Requirements analysis and architecture design</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Development</h3>
              <p className="text-muted-foreground text-sm">Coding with best practices and optimization</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Testing</h3>
              <p className="text-muted-foreground text-sm">Quality assurance and performance testing</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Launch</h3>
              <p className="text-muted-foreground text-sm">Deployment and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Web Dev Pod?</h2>
              <p className="text-muted-foreground mb-8">
                Get enterprise-quality web development without the enterprise overhead. Our pods combine speed, quality, and ongoing support.
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
            <div className="space-y-6">
              <div className="flex items-center p-4 rounded-lg bg-card border border-border">
                <Zap className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold">Fast Development</h4>
                  <p className="text-sm text-muted-foreground">Launch in days, not months</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg bg-card border border-border">
                <Shield className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold">Security First</h4>
                  <p className="text-sm text-muted-foreground">Built with security best practices</p>
                </div>
              </div>
              <div className="flex items-center p-4 rounded-lg bg-card border border-border">
                <Search className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold">SEO Optimized</h4>
                  <p className="text-sm text-muted-foreground">Built for search engine success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Code className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get professional web development that scales with your business.
          </p>
          <Link
            to="/configure-pod"
            className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Web Dev Pod
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default WebDev;