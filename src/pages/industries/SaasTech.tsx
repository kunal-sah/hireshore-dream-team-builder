import ClientSuccessStory from "@/components/ClientSuccessStory";
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
import { SEOHead } from "@/components/SEOHead";

const SaasTech = () => {
  const services = [
    "Full-Stack & Frontend Engineers",
    "Backend & Platform Engineers",
    "QA & Test Engineers",
    "DevOps & Cloud Engineers",
    "UI/UX Designers",
    "Product & Project Managers",
    "Data & Analytics Specialists",
    "Customer Support & Technical Success"
  ];

  const solutions = [
    {
      icon: Code,
      title: "Engineering Pods",
      description: "Cross-functional remote pods that plug straight into your roadmap and sprint cadence"
    },
    {
      icon: Cloud,
      title: "Dedicated Developers",
      description: "Full-time remote engineers hired into your own team, tools and processes"
    },
    {
      icon: Database,
      title: "QA & Testing",
      description: "Vetted QA engineers who protect your releases as your user base grows"
    },
    {
      icon: Shield,
      title: "Support & Back-Office",
      description: "Customer success, admin and back-office staff that keep SaaS operations running"
    }
  ];

  const stats = [
    { number: "15+", label: "Full-time hires for a single SaaS client" },
    { number: "<3 Weeks", label: "Average time to hire" },
    { number: "$1M+", label: "Estimated annual payroll savings" },
    { number: "Up to 83%", label: "Lower payroll costs vs local hiring" }
  ];

  const techStack = [
    "React", "Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Kubernetes", "Redis", "GraphQL", "Stripe"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        canonicalUrl="https://hireshore.co/industries/saas-tech"
        title="SaaS & Tech | Scale Your Product Team | Hireshore"
        description="Scale your SaaS product team with Hireshore's managed delivery pods for development, QA, and support."
        keywords="saas, tech, product team, delivery pods"
      />
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
      <section className="pt-24 pb-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <Code className="mr-2 h-4 w-4" />
            For SaaS & Tech Companies
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Scale Your SaaS Team
            <span className="text-primary"> 60% Faster</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stop waiting months to find engineers. Hire vetted remote developers, QA and support talent from Nepal — sourced, vetted, managed and paid by Hireshore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Hiring Today</Link>
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
            Get a vetted remote team that starts delivering in days. From engineering to customer support, we source, hire and manage the talent you need—without the hiring headaches or long onboarding timelines.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">SaaS &amp; Tech Roles We Hire For</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From engineering to support, we source, vet and manage the full talent stack you need
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
          <h2 className="text-3xl font-bold text-center mb-12">How SaaS Companies Work With Us</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stacks Our Talent Works In</h2>
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
                  We recruit and manage remote teams for SaaS companies at every stage, from seed to scale.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Fast Onboarding</h3>
                <p className="text-muted-foreground">
                  Pre-vetted candidates with video profiles, so you can interview, hire and onboard in weeks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Scale Up or Down</h3>
                <p className="text-muted-foreground">
                  Add or step back roles as your roadmap changes—no hiring pipeline, no local payroll overhead.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ClientSuccessStory story="sendr" />

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/resources/case-notes/saas-onboarding" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">SaaS Onboarding Case Note</h3>
              <p className="text-sm text-muted-foreground">How a SaaS team tightened user onboarding</p>
            </Link>
            <Link to="/case-studies/sendr" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Sendr Case Study</h3>
              <p className="text-sm text-muted-foreground">Remote hires for support and GTM roles</p>
            </Link>
            <Link to="/resources/cost-calculator" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Team Cost Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate what your remote team would cost</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your SaaS Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tell us the roles you need filled. We'll shortlist vetted remote candidates and handle their HR and payroll for you.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Build Your Team</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SaasTech;