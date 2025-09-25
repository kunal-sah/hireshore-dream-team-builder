import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { User, Users, Search, FileText, Award, Calculator, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Staffing = () => {
  useEffect(() => {
    // Add JSON-LD for staffing page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "World-Class Talent On Demand - Staffing Solutions",
      "description": "Access pre-vetted global talent through flexible staffing solutions. From dedicated professionals to complete teams.",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://hireshore.co/staffing',
      "mainEntity": {
        "@type": "Service",
        "name": "Staffing Services",
        "description": "Dedicated talent, team building, recruitment services, and compliance management",
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

  const hiringOptions = [
    {
      title: 'Dedicated Talent',
      description: 'Full-time and part-time dedicated professionals for your team',
      icon: User,
      href: '/staffing/dedicated',
      features: ['Full-time commitment', 'Direct communication', 'Integrated team member', '30-day guarantee']
    },
    {
      title: 'Build-a-Team',
      description: 'Multi-role solutions with complementary skill sets',
      icon: Users,
      href: '/staffing/build-team',
      features: ['Cross-functional teams', 'Coordinated delivery', 'Scalable structure', 'Unified management']
    },
    {
      title: 'Recruitment-as-a-Service',
      description: 'Let us handle the entire hiring process for you',
      icon: Search,
      href: '/staffing/recruitment',
      features: ['End-to-end recruitment', 'Pre-screened candidates', 'Fast turnaround', 'Quality guarantee']
    },
    {
      title: 'Compliance & Payroll',
      description: 'Complete HR and payroll management services',
      icon: FileText,
      href: '/staffing/compliance',
      features: ['Legal compliance', 'Payroll processing', 'Benefits management', 'HR support']
    }
  ];

  const benefits = [
    'Access to pre-vetted global talent',
    'Flexible engagement models',
    'Dedicated account management',
    'Quality assurance processes',
    'Seamless onboarding',
    'Ongoing performance monitoring'
  ];

  return (
    <>
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
                <BreadcrumbPage>Staffing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                World-Class Talent
                <span className="text-primary"> On Demand</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access pre-vetted global talent through flexible staffing solutions. From dedicated professionals to complete teams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Talented Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-muted-foreground">Days Avg. Onboarding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Support Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Options */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Flexible Hiring Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hiringOptions.map((option, index) => (
                <div key={index} className="p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                  <div className="flex items-center mb-4">
                    <option.icon className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">{option.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={option.href}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose HireShore Staffing?</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Start Your Free Trial</h3>
                <p className="text-muted-foreground mb-6">
                  Try our talent for one week, completely risk-free. No commitments, no contracts.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/staffing/trial"
                    className="block w-full text-center bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to="/staffing/rates"
                    className="block w-full text-center border border-border text-foreground font-medium py-3 px-6 rounded-lg hover:bg-muted transition-colors"
                  >
                    View Rates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default Staffing;