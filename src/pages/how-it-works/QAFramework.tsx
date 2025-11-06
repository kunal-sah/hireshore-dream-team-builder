import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Target, Zap, Search, FileText, Users, Award, Home, ChevronRight, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const QAFramework = () => {
  const qaStandards = [
    {
      icon: Shield,
      title: "Multi-Layer Testing",
      description: "Comprehensive testing at unit, integration, and system levels"
    },
    {
      icon: Target,
      title: "Performance Standards",
      description: "Rigorous performance benchmarks and optimization protocols"
    },
    {
      icon: Search,
      title: "Code Review Process",
      description: "Mandatory peer reviews and automated code quality checks"
    },
    {
      icon: FileText,
      title: "Documentation Standards",
      description: "Complete documentation requirements for all deliverables"
    }
  ];

  const qaProcess = [
    "Initial Requirements Review",
    "Development Planning & Standards",
    "Continuous Integration Testing",
    "Peer Code Reviews",
    "Quality Assurance Testing",
    "Performance & Security Audits",
    "Client Review & Feedback",
    "Final Delivery & Sign-off"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <nav className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-muted/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList className="flex flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/how-it-works">How It Works</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>QA Framework</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            QA Framework
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our comprehensive Quality Assurance framework ensures every deliverable meets 
            the highest standards of quality, performance, and reliability. No shortcuts, just excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/how-it-works/process-sla">View Process & SLA</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fast Delivery Should Not Mean Low Quality</h2>
          <p className="text-xl text-muted-foreground">
            Too many agencies rush deliverables and call it agile. Bugs, performance issues, and sloppy code 
            become your problem to fix. Speed without quality is just expensive technical debt. You need both—
            and that requires a real QA framework, not empty promises.
          </p>
        </div>
      </section>

      {/* QA Standards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our QA Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qaStandards.map((standard) => (
              <Card key={standard.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <standard.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QA Process */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">8-Step QA Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaProcess.map((step, index) => (
              <Card key={step} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Story: Affective Care</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Quality Assurance Excellence
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Critical Bugs in Production Launch</h3>
              <p className="text-muted-foreground mb-6">
                Affective Care needed to rebrand and rebuild their WordPress site in just 5 days with zero room for errors. Our rigorous QA framework ensured flawless delivery across 40+ Shopify category pages and complete website redesign.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>New website launched with rebranding in just 5 days</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>40+ Shopify category pages designed & optimized</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Zero critical bugs in production environment</span>
                </div>
              </div>
              <Link to="/case-studies/affective-care" className="inline-flex items-center text-primary font-semibold hover:underline">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Days to rebrand</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Pages optimized</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">0</div>
                  <div className="text-sm text-muted-foreground">Critical bugs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Quality score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-1 text-center">
                  <p className="text-lg italic mb-6">
                    "The quality of their work is consistently outstanding. Their QA framework catches issues before they reach us, which means we spend less time on revisions and more time launching features. It's rare to find a team that moves fast without compromising quality."
                  </p>
                  <div>
                    <div className="font-semibold">Rita Dagher</div>
                    <div className="text-sm text-muted-foreground">CEO & Psychologist, Affective Care</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">99.5% Bug-Free Rate</h3>
                <p className="text-muted-foreground">
                  Industry-leading quality with less than 0.5% post-delivery issues
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">100% Performance Standards</h3>
                <p className="text-muted-foreground">
                  All deliverables meet or exceed performance benchmarks
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">98% Client Satisfaction</h3>
                <p className="text-muted-foreground">
                  Consistently high client satisfaction with quality deliverables
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/how-it-works/onboarding-process" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
              <h3 className="font-semibold mb-2">Onboarding Process</h3>
              <p className="text-sm text-muted-foreground">5-7 day onboarding timeline</p>
            </Link>
            <Link to="/how-it-works/process-sla" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
              <h3 className="font-semibold mb-2">Process & SLA</h3>
              <p className="text-sm text-muted-foreground">Service level agreements</p>
            </Link>
            <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground">Real client success stories</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Quality Framework
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get guaranteed quality with our proven QA framework and processes.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Quality Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default QAFramework;