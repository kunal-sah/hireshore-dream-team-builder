import { Helmet } from 'react-helmet-async';
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Palette, Layout, Image, Zap, Users, Clock, Home, ChevronRight, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const DesignPod = () => {
  const features = [
    "UI/UX Design & Prototyping",
    "Brand Identity & Logo Design", 
    "Landing Page & Website Design",
    "Mobile App Design",
    "Marketing Materials & Assets",
    "Design System Creation",
    "Figma & Adobe Creative Suite",
    "Unlimited Design Revisions"
  ];

  const deliverables = [
    {
      icon: Layout,
      title: "Website & Landing Pages",
      description: "High-converting designs optimized for user experience and conversions"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand packages including logos, color palettes, and style guides"
    },
    {
      icon: Image,
      title: "Marketing Assets",
      description: "Social media graphics, advertisements, and promotional materials"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Design Pod Services",
    "description": "Get unlimited design work from dedicated designers. From websites to brand identity, we deliver pixel-perfect designs that convert and captivate your audience.",
    "provider": {
      "@type": "Organization",
      "name": "HireShore"
    }
  };

  return (
    <>
      <Helmet>
        <title>Design Pod | Unlimited UI/UX & Brand Design Services | HireShore</title>
        <meta name="description" content="Get unlimited design work from dedicated designers. Professional UI/UX, branding, and marketing design with fast turnarounds and unlimited revisions." />
        <meta name="keywords" content="design pod, UI/UX design, brand identity, web design, graphic design, design services" />
        <link rel="canonical" href="https://hireshore.com/services/design-pod" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <NavBar />
        
        {/* Breadcrumbs */}
        <nav className="pt-20 pb-4 px-4 bg-muted/20" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/"><Home className="h-4 w-4" /></Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Design Pod</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="pt-16 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Design Pod
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your brand with unlimited design work. Get pixel-perfect designs that convert and captivate your audience—from websites to marketing materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/configure-pod">Configure Your Design Pod</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">24-48hrs</div>
                <div className="text-muted-foreground">Average Turnaround</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">Unlimited</div>
                <div className="text-muted-foreground">Design Revisions</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Design Delays Are Costing You Customers</h2>
            <p className="text-xl text-muted-foreground">
              Your competitors are launching beautiful campaigns while your designs sit in endless revision cycles. Freelancers disappear mid-project, and hiring in-house costs $80k+ annually. Meanwhile, your brand suffers.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Design, Delivered Fast</h2>
            <p className="text-xl text-muted-foreground">
              Get a dedicated design team that understands your brand and delivers consistently. Unlimited requests, fast turnarounds, and no hiring headaches.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature) => (
                <Card key={feature} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Deliverables */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Deliverables</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {deliverables.map((item) => (
                <Card key={item.title} className="p-8 text-center">
                  <CardContent className="p-0">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">1. Brief & Requirements</h3>
                  <p className="text-muted-foreground">
                    Share your vision, brand guidelines, and project requirements with our design team
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">2. Design & Iterate</h3>
                  <p className="text-muted-foreground">
                    Our designers create initial concepts and iterate based on your feedback
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">3. Deliver & Launch</h3>
                  <p className="text-muted-foreground">
                    Receive production-ready files and assets for immediate implementation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Creative Brief Template</h3>
                  <p className="text-sm text-muted-foreground mb-4">Get the perfect design brief template</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/resources/templates/creative-brief">Download →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Design Portfolio</h3>
                  <p className="text-sm text-muted-foreground mb-4">See our design work in action</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/case-studies">View Work →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Palette className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Delivery Pods Playbook</h3>
                  <p className="text-sm text-muted-foreground mb-4">Learn how to work with design pods</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/resources/delivery-pods-playbook">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Story: Digital Six</h2>
              <p className="text-xl text-muted-foreground">Scaling creative output without expensive hires</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                  <p className="text-muted-foreground mb-6">
                    Digital Six needed to scale their design capacity rapidly without the time and expense of hiring multiple designers.
                  </p>
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                  <p className="text-muted-foreground">
                    Our Design Pod provided unlimited design requests with professional designers who understood their brand and delivered consistently high-quality work.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-primary">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6">Results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">3x</div>
                      <div className="text-muted-foreground">Faster design delivery</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">$95k</div>
                      <div className="text-muted-foreground">Saved annually vs hiring</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24-48hrs</div>
                      <div className="text-muted-foreground">Average turnaround time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial */}
            <Card className="p-8 bg-card">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-lg italic mb-6">
                      "The Design Pod transformed how we work. We get professional, on-brand designs delivered quickly without any of the hassles of hiring and managing designers."
                    </p>
                    <div>
                      <div className="font-semibold">Marcus Thompson</div>
                      <div className="text-sm text-muted-foreground">Creative Director, Digital Six</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Design?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get unlimited design work with fast turnarounds and unlimited revisions.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/configure-pod">Start Your Design Pod Today</Link>
            </Button>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default DesignPod;