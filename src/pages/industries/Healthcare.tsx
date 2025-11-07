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
      "name": "Healthcare Back Office & Virtual Assistant Services",
      "description": "HIPAA-compliant back office support and virtual assistants for healthcare practices. Medical billing, claims processing, patient scheduling, and more.",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://hireshore.co/industries/healthcare',
      "mainEntity": {
        "@type": "Service",
        "name": "Healthcare Virtual Assistant Services",
        "description": "Medical billing, coding, claims processing, patient scheduling, insurance verification, and HIPAA-compliant back office support",
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
    {
      title: "Medical Billing & Coding",
      description: "Accurate claims processing, ICD-10 coding, and revenue cycle management"
    },
    {
      title: "Patient Scheduling & Coordination",
      description: "Appointment management, reminders, and patient communication"
    },
    {
      title: "Insurance Verification & Authorization",
      description: "Eligibility checks, prior authorizations, and benefits verification"
    },
    {
      title: "Medical Transcription",
      description: "HIPAA-compliant transcription of clinical notes and documentation"
    },
    {
      title: "Claims Processing & Follow-up",
      description: "Claim submissions, denials management, and appeals handling"
    },
    {
      title: "Patient Record Management",
      description: "EMR/EHR data entry, chart preparation, and record maintenance"
    },
    {
      title: "Healthcare Data Entry",
      description: "Patient demographics, clinical data, and administrative documentation"
    },
    {
      title: "Prior Authorization Processing",
      description: "Authorization requests, follow-ups, and compliance tracking"
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
            Healthcare Back Office & Virtual Assistant Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Scale your healthcare practice with HIPAA-compliant back office support and virtual assistants. Reduce administrative burden and focus on patient care.
          </p>
          <Button size="lg" asChild>
            <Link to="/configure-pod">Get Healthcare Support</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Back Office Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-3">
                    <Check className="w-6 h-6 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Healthcare Administrative Burden is Overwhelming</h2>
          <p className="text-xl text-muted-foreground">
            Healthcare providers spend countless hours on billing, claims, scheduling, and data entry—taking valuable time away from patient care. High administrative costs, staffing challenges, compliance requirements, and claim denials drain resources while impacting the quality of care delivery.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our HIPAA-trained virtual assistants and back office specialists handle your administrative workload, allowing your team to focus on delivering exceptional patient care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">HIPAA-Trained Specialists</h3>
                <p className="text-muted-foreground">
                  Certified professionals trained in healthcare compliance and data security
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Reduce Admin Costs by 70%</h3>
                <p className="text-muted-foreground">
                  Lower operational costs while increasing billing accuracy and efficiency
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Database className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Seamless System Integration</h3>
                <p className="text-muted-foreground">
                  Work directly in your EMR/EHR systems and existing workflows
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
                <h3 className="text-xl font-semibold mb-4">Needs Assessment</h3>
                <p className="text-muted-foreground">
                  We analyze your administrative workflows and identify optimization opportunities
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-4">Team Deployment</h3>
                <p className="text-muted-foreground">
                  HIPAA-trained specialists onboard and integrate with your systems in 5 days
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Continuous quality management, performance tracking, and scalable support
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
            <h2 className="text-3xl font-bold mb-4">Success Story: Multi-Specialty Healthcare Group</h2>
            <p className="text-xl text-muted-foreground">Streamlining medical billing and back office operations</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  A growing multi-specialty practice struggled with claim denials, slow billing cycles, and overwhelmed administrative staff. Patient scheduling errors and authorization delays were impacting revenue and patient satisfaction.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We deployed a dedicated team of HIPAA-trained medical billing specialists, coders, and virtual assistants to handle claims processing, insurance verification, patient scheduling, and EMR data entry.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-muted-foreground">First-pass claim acceptance rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">72%</div>
                    <div className="text-muted-foreground">Reduction in administrative costs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5 Days</div>
                    <div className="text-muted-foreground">Team deployment and integration</div>
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
                    "Hireshore helped us streamline our digital operations and improve our service delivery. Their expertise in web development and project management has been invaluable."
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

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/resources/cost-calculator" className="hover:text-primary">
                    Healthcare Staffing Cost Calculator
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Calculate potential savings with outsourced healthcare back office support</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/case-studies/affective-care" className="hover:text-primary">
                    Affective Care Case Study
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">See how we streamlined healthcare operations and reduced admin burden</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/staffing/compliance" className="hover:text-primary">
                    HIPAA Compliance Training
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Learn how our team maintains healthcare compliance standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Reduce Healthcare Admin Burden?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get HIPAA-trained back office support deployed in 5 days. Lower costs, improve accuracy, focus on patient care.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Healthcare Support</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Healthcare;