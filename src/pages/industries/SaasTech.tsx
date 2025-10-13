import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Code, Cloud, Database, Shield, Zap, Users, BarChart, Home, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const SaasTech = () => {
  const services = [
    "Full-Stack SaaS Development",
    "Cloud Architecture & DevOps",
    "API Development & Integration",
    "Database Design & Optimization", 
    "Security & Compliance",
    "Mobile App Development",
    "Product Management & Strategy",
    "Technical Support & Maintenance"
  ];

  const solutions = [
    {
      icon: Code,
      title: "MVP Development",
      description: "Rapid MVP development to validate your SaaS concept and get to market fast"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture on AWS, Azure, or Google Cloud Platform"
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Advanced database design, analytics, and AI/ML integration"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2, GDPR, and industry compliance"
    }
  ];

  const stats = [
    { number: "50+", label: "SaaS Products Built" },
    { number: "200%", label: "Average User Growth" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "3 Months", label: "Average MVP Timeline" }
  ];

  const techStack = [
    "React", "Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Kubernetes", "Redis", "GraphQL", "Stripe"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <nav className="pt-20 pb-4 px-4 bg-muted/20" aria-label="Breadcrumb">
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
                <BreadcrumbLink asChild><Link to="/industries">Industries</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>SaaS & Tech</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <Code className="mr-2 h-4 w-4" />
            For SaaS & Tech Companies
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Build Your SaaS Product
            <span className="text-primary"> 60% Faster</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stop waiting months to find developers. Get a full-stack team that starts delivering production-ready code in days—from MVP to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Building Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View SaaS Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Hiring Developers Takes Too Long</h2>
          <p className="text-xl text-muted-foreground">
            Your competitors are shipping features while you're stuck in hiring loops. Finding senior developers takes 4-6 months and costs $150k+. Meanwhile, your product roadmap collects dust and market opportunities disappear.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ship Faster, Scale Smarter</h2>
          <p className="text-xl text-muted-foreground">
            Get a full-stack development team that starts delivering production-ready code in days. From MVP to enterprise scale, we provide the complete talent stack you need—without the hiring headaches or long onboarding timelines.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Complete SaaS Development Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From MVP to enterprise scale, we deliver the full stack of talent you need
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized SaaS Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <solution.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="bg-background px-4 py-2 rounded-lg border">
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why SaaS Companies Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">SaaS Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized teams with deep SaaS experience across multiple industries and scales.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Rapid Development</h3>
                <p className="text-muted-foreground">
                  Get to market fast with our proven development methodologies and frameworks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
                <p className="text-muted-foreground">
                  Built for scale from day one with cloud-native architecture and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: PropertyStack</h2>
            <p className="text-xl text-muted-foreground">Building a scalable SaaS platform for real estate</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  PropertyStack needed to build a robust SaaS platform that could handle thousands of users while maintaining performance and security.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We built a cloud-native architecture with microservices, automated scaling, and enterprise-grade security from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                    <div className="text-muted-foreground">Active users supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-muted-foreground">Platform uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">4 Months</div>
                    <div className="text-muted-foreground">From MVP to launch</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
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
                    "HireShore built a SaaS platform that scales effortlessly. Their expertise in cloud architecture and security gave us the confidence to grow rapidly."
                  </p>
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-sm text-muted-foreground">CTO, PropertyStack</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/resources/guides/automation-guide" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">SaaS Development Guide</h3>
              <p className="text-sm text-muted-foreground">Best practices for building SaaS</p>
            </Link>
            <Link to="/case-studies/property-stack" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">PropertyStack Case Study</h3>
              <p className="text-sm text-muted-foreground">Full SaaS development story</p>
            </Link>
            <Link to="/resources/cost-calculator" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Development Cost Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate your project costs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Next SaaS Product?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with SaaS specialists who understand the unique challenges of building scalable software.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your SaaS Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SaasTech;