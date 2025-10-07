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
            Outdated systems, compliance headaches, and slow development are holding healthcare providers back from delivering exceptional patient care.
          </p>
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

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Healthcare?</h2>
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