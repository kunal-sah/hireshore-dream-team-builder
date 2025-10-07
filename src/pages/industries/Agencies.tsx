import React from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Building, Users, Zap, CheckCircle, ArrowRight, Award, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Agencies = () => {
  const challenges = [
    'Scaling without increasing overhead',
    'Managing multiple client projects',
    'Finding reliable talent quickly',
    'Maintaining quality standards',
    'Balancing capacity with demand',
    'Delivering consistent results'
  ];

  const solutions = [
    {
      title: 'White-Label Services',
      description: 'Expand your service offerings without hiring',
      icon: Award,
      benefits: ['Design & development', 'Content creation', 'Marketing services']
    },
    {
      title: 'Overflow Support',
      description: 'Handle peak demand with flexible capacity',
      icon: TrendingUp,
      benefits: ['On-demand scaling', 'Quality assurance', 'Fast turnaround']
    },
    {
      title: 'Specialized Skills',
      description: 'Access expertise you don\'t have in-house',
      icon: Target,
      benefits: ['Technical specialists', 'Industry experts', 'Latest technologies']
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
              <Building className="mr-2 h-4 w-4" />
              For Agencies
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Scale Your Agency
              <span className="text-primary"> Without Limits</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Partner with HireShore to expand your capabilities, handle overflow projects, and deliver exceptional results to more clients without increasing your overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Scale Your Agency
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
                className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-muted transition-colors"
              >
                <Users className="mr-2 h-4 w-4" />
                Agency Partnership Call
              </button>
            </div>
          </div>

          {/* Agency Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Agency Partners</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-muted-foreground">Average Revenue Growth</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">48hr</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions Built for Agencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <solution.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">We Understand Agency Challenges</h2>
              <p className="text-muted-foreground mb-8">
                Running an agency means constantly balancing client demands with resource constraints. We help you break free from these limitations.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Rapid Scaling</h4>
                <p className="text-sm text-muted-foreground">
                  Scale your team up or down instantly based on project demands without hiring overhead.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Quality Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  Maintain your reputation with consistent, high-quality deliverables from vetted professionals.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">White-Label Ready</h4>
                <p className="text-sm text-muted-foreground">
                  All work delivered under your brand with full white-label support and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Digital Six</h2>
            <p className="text-xl text-muted-foreground">Scaling an agency without the hiring headaches</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
              <p className="text-muted-foreground mb-6">
                Digital Six was turning away clients because they couldn't scale their team fast enough. Traditional hiring would take months they didn't have.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
              <p className="text-muted-foreground">
                We provided white-label design, development, and marketing services that integrated seamlessly with their agency brand and processes.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-primary">
              <h3 className="text-xl font-semibold mb-6">Results</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">400%</div>
                  <div className="text-muted-foreground">Increase in client capacity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$500k</div>
                  <div className="text-muted-foreground">Additional annual revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                  <div className="text-muted-foreground">New full-time hires needed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="p-8 rounded-xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-lg italic mb-6">
                  "HireShore became our secret weapon. We can now take on any project, knowing we have the capacity to deliver exceptional work without the overhead of hiring."
                </p>
                <div>
                  <div className="font-semibold">Marcus Thompson</div>
                  <div className="text-sm text-muted-foreground">Creative Director, Digital Six</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Building className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Agency?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join 200+ agencies who've partnered with us to deliver more, stress less, and grow faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Partnership
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center border border-white/20 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Agency Case Studies
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Agencies;