import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Target, Zap, Search, FileText, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

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
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            QA Framework
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our comprehensive Quality Assurance framework ensures every deliverable meets 
            the highest standards of quality, performance, and reliability.
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

      {/* Quality Metrics */}
      <section className="py-16 px-4">
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