import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Rocket, Palette, Settings, TrendingUp, Headphones, Building, Target, User, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Solutions = () => {
  useEffect(() => {
    // Add JSON-LD for solutions page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Business Solutions That Scale",
      "description": "Tailored solutions for every business challenge - launch faster, scale operations, automate processes, and fill your pipeline.",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://hireshore.co/solutions',
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 9,
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Launch websites faster",
            "description": "Get your website up and running in days, not months"
          },
          {
            "@type": "Service", 
            "name": "Scale design without hires",
            "description": "Access unlimited design resources without overhead"
          }
        ]
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

  const outcomesSolutions = [
    {
      title: 'Launch websites faster',
      description: 'Get your website up and running in days, not months, with our streamlined development process.',
      icon: Rocket,
      href: '/solutions/launch-faster'
    },
    {
      title: 'Scale design without hires',
      description: 'Access unlimited design resources without the overhead of hiring full-time staff.',
      icon: Palette,
      href: '/solutions/scale-design'
    },
    {
      title: 'Automate operations',
      description: 'Streamline your business processes with smart automation and workflow optimization.',
      icon: Settings,
      href: '/solutions/automate-ops'
    },
    {
      title: 'Fill your sales pipeline',
      description: 'Generate consistent, qualified leads with proven marketing and sales systems.',
      icon: TrendingUp,
      href: '/solutions/sales-pipeline'
    },
    {
      title: 'Ongoing support & QA',
      description: 'Ensure your systems run smoothly with dedicated support and quality assurance.',
      icon: Headphones,
      href: '/solutions/support-qa'
    }
  ];

  const roleSolutions = [
    {
      title: 'For Agency Owners',
      description: 'Scale your agency operations and deliver more projects without increasing overhead.',
      icon: Building,
      href: '/solutions/agency-owners'
    },
    {
      title: 'For Marketing Leaders',
      description: 'Execute complex marketing strategies with dedicated teams and proven frameworks.',
      icon: Target,
      href: '/solutions/marketing-leaders'
    },
    {
      title: 'For Founders/Startups',
      description: 'Move fast and build efficiently with our startup-focused delivery pods.',
      icon: User,
      href: '/solutions/founders'
    },
    {
      title: 'For HR/Recruiters',
      description: 'Access pre-vetted talent and streamlined hiring processes for your organization.',
      icon: Users,
      href: '/solutions/hr-recruiters'
    }
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
                <BreadcrumbPage>Solutions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Solutions That Scale
                <span className="text-primary"> Your Business</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you need to launch faster, scale operations, or fill your pipeline - we have tailored solutions for every business challenge.
              </p>
            </div>
          </div>
        </section>

        {/* By Outcome Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions by Outcome</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outcomesSolutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.href}
                  className="group p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card"
                >
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* By Role Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions by Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roleSolutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.href}
                  className="group p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card"
                >
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Configure Your Solution?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a custom delivery pod tailored to your specific needs and goals.
            </p>
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Configure Your Pod
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default Solutions;