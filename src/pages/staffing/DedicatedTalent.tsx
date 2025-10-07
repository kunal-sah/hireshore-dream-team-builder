import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { User, Shield, Clock, CheckCircle, ArrowRight, Award, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DedicatedTalent = () => {
  useEffect(() => {
    // Add JSON-LD for dedicated talent page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dedicated Talent - Your Remote Team Members",
      "description": "Get dedicated professionals who work exclusively on your projects. Full-time or part-time, seamlessly integrated with your team.",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://hireshore.co/staffing/dedicated-talent',
      "mainEntity": {
        "@type": "Service",
        "name": "Dedicated Talent Services",
        "description": "Full-time and part-time dedicated professionals for your team with 30-day satisfaction guarantee",
        "provider": {
          "@type": "Organization",
          "name": "Hireshore",
          "url": "https://hireshore.co"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const benefits = [
    'Full-time commitment to your projects',
    'Direct communication channels',
    'Integrated team member experience',
    '30-day satisfaction guarantee',
    'Flexible full-time or part-time options',
    'Seamless scaling up or down'
  ];

  const roles = [
    {
      title: 'Developers',
      description: 'Full-stack, frontend, backend specialists',
      skills: ['React/Vue/Angular', 'Node.js/Python', 'Database design']
    },
    {
      title: 'Designers',
      description: 'UI/UX, graphic, and brand designers',
      skills: ['Figma/Sketch', 'Brand identity', 'User research']
    },
    {
      title: 'Marketers',
      description: 'Digital marketing and growth specialists',
      skills: ['PPC/SEO', 'Content strategy', 'Analytics']
    },
    {
      title: 'Project Managers',
      description: 'Agile and traditional PM professionals',
      skills: ['Scrum/Kanban', 'Team coordination', 'Delivery tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 pt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/staffing">Staffing</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dedicated Talent</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <User className="mr-2 h-4 w-4" />
              Dedicated Talent
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Dedicated Team
              <span className="text-primary"> Members</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get dedicated professionals who work exclusively on your projects. Full-time or part-time, they integrate seamlessly with your team and processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/staffing/trial"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/staffing/rates"
                className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-muted transition-colors"
              >
                <Target className="mr-2 h-4 w-4" />
                View Rates
              </Link>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fully Vetted</h3>
              <p className="text-muted-foreground">Pre-screened professionals with proven track records</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Onboarding</h3>
              <p className="text-muted-foreground">Start working with your dedicated talent within 5-7 days</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-muted-foreground">30-day satisfaction guarantee with full replacement option</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Available Dedicated Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                <p className="text-muted-foreground mb-4">{role.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Dedicated Talent Works</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Define Requirements</h3>
              <p className="text-muted-foreground text-sm">Tell us your needs, skills required, and timeline</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Meet Candidates</h3>
              <p className="text-muted-foreground text-sm">Interview pre-vetted professionals matched to your needs</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Start Working</h3>
              <p className="text-muted-foreground text-sm">Onboard your dedicated team member in days</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Scale & Support</h3>
              <p className="text-muted-foreground text-sm">Ongoing management and scaling support included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Dedicated Talent?</h2>
              <p className="text-muted-foreground mb-8">
                Get the benefits of full-time employees without the overhead. Our dedicated professionals become true extensions of your team.
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
              <h3 className="text-xl font-semibold mb-4">Ready to Build Your Team?</h3>
              <p className="text-muted-foreground mb-6">
                Start with a risk-free trial and experience the difference of dedicated talent.
              </p>
              <div className="space-y-3">
                <Link
                  to="/staffing/trial"
                  className="block w-full text-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/staffing/profiles"
                  className="block w-full text-center border border-border text-foreground font-medium py-3 px-6 rounded-lg hover:bg-muted transition-colors"
                >
                  Browse Talent Profiles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Hiring Takes Too Long. Projects Can't Wait.</h2>
          <p className="text-xl text-muted-foreground">
            Traditional hiring takes 3-6 months and costs $15k+ per hire. Meanwhile, projects stall, deadlines slip, and opportunities vanish. You need talent now, not next quarter.
          </p>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: PropertyStack</h2>
            <p className="text-xl text-muted-foreground">Building a high-performing team without the hiring hassle</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
              <p className="text-muted-foreground mb-6">
                PropertyStack needed to scale their development and marketing teams rapidly but couldn't afford the time and expense of traditional hiring.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
              <p className="text-muted-foreground">
                We provided dedicated developers and marketers who integrated seamlessly with their team, starting work within 7 days instead of 3 months.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-primary">
              <h3 className="text-xl font-semibold mb-6">Results</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">7 Days</div>
                  <div className="text-muted-foreground">To full team capacity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$180k</div>
                  <div className="text-muted-foreground">Saved in hiring costs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3x Faster</div>
                  <div className="text-muted-foreground">Project delivery speed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="p-8 rounded-xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-lg italic mb-6">
                  "HireShore gave us access to top talent immediately. What would have taken us months to hire took just days, and the quality exceeded our expectations."
                </p>
                <div>
                  <div className="font-semibold">Michael Rodriguez</div>
                  <div className="text-sm text-muted-foreground">CTO, PropertyStack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Build Your Dedicated Team Today</h2>
          <p className="text-xl opacity-90 mb-8">
            Join companies who have scaled faster with dedicated talent that truly cares about your success.
          </p>
          <Link
            to="/staffing/trial"
            className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default DedicatedTalent;