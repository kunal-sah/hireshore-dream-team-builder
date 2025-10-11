import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Shield, Users, Database, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Healthcare = () => {
  useEffect(() => {
    // Add JSON-LD for healthcare industry page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Healthcare Technology Solutions",
      "description": "Transform healthcare delivery with secure, HIPAA-compliant technology solutions and development services.",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://hireshore.co/industries/healthcare',
      "mainEntity": {
        "@type": "Service",
        "name": "Healthcare Technology Services",
        "description": "HIPAA-compliant development, EHR systems, telemedicine platforms, and healthcare analytics",
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

  const services = [
    "HIPAA-Compliant Development",
    "Electronic Health Records (EHR)",
    "Telemedicine Platforms",
    "Healthcare Analytics",
    "Patient Management Systems",
    "Medical Device Integration",
    "Healthcare Mobile Apps",
    "Compliance & Security"
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
              <BreadcrumbLink href="/industries">Industries</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Healthcare</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <section className="pt-8 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Healthcare Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform healthcare delivery with secure, compliant technology solutions.
          </p>
          <Button size="lg" asChild>
            <Link to="/configure-pod">Get Healthcare Solutions</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Services</h2>
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

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Healthcare Deserves Better Technology</h2>
          <p className="text-xl text-muted-foreground">
            Outdated systems, compliance headaches, and slow development are holding healthcare providers back from delivering exceptional patient care. Manual workflows drain staff time, security vulnerabilities create risk, and legacy systems can't keep up with modern healthcare demands.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build HIPAA-compliant healthcare technology that streamlines operations, protects patient data, and scales with your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">HIPAA Compliance Built-In</h3>
                <p className="text-muted-foreground">
                  Security and compliance from day one, no exceptions
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Automated Workflows</h3>
                <p className="text-muted-foreground">
                  Reduce administrative burden by 80% with intelligent automation
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Database className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Connect with existing EHR systems and healthcare platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-4">Compliance Assessment</h3>
                <p className="text-muted-foreground">
                  Review your requirements and ensure HIPAA compliance from the start
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-4">Secure Development</h3>
                <p className="text-muted-foreground">
                  Build compliant systems with encrypted data and automated workflows
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-4">Deploy & Monitor</h3>
                <p className="text-muted-foreground">
                  Launch with confidence and maintain compliance with ongoing support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Affective Care</h2>
            <p className="text-xl text-muted-foreground">Modernizing healthcare operations with compliant technology</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  Affective Care needed to modernize their patient management systems while maintaining HIPAA compliance and minimizing disruption to care delivery.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We built a HIPAA-compliant platform with automated workflows, real-time reporting, and seamless integration with existing EHR systems.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">80%</div>
                    <div className="text-muted-foreground">Reduction in administrative work</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">HIPAA compliance maintained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3 Months</div>
                    <div className="text-muted-foreground">From concept to launch</div>
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
                    "HireShore understood the complexity of healthcare technology and delivered a solution that improved our operations while maintaining the highest compliance standards."
                  </p>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Operations Director, Affective Care</div>
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
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/resources/guides/automation-guide" className="hover:text-primary">
                    Healthcare Automation Guide
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Learn how to automate healthcare workflows while maintaining compliance</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/case-studies/affective-care" className="hover:text-primary">
                    Affective Care Case Study
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">See how we modernized healthcare operations with 80% efficiency gain</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/staffing/compliance" className="hover:text-primary">
                    Healthcare Compliance Services
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Ensure your operations meet HIPAA and healthcare standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Healthcare?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started in 24 hours with HIPAA-compliant solutions built by healthcare technology experts.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Healthcare Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Healthcare;