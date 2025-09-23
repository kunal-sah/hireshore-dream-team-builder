import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, FileText, Lock, Globe, Award, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Compliance = () => {
  const compliance = [
    "GDPR Compliance (EU)",
    "CCPA Compliance (California)",
    "SOC 2 Type II Certified",
    "ISO 27001 Security Standards",
    "HIPAA Compliance (Healthcare)",
    "PCI DSS (Payment Processing)",
    "Employment Law Compliance",
    "Tax & Legal Documentation"
  ];

  const frameworks = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "GDPR, CCPA, and international data privacy regulations",
      details: ["Data encryption", "Access controls", "Audit trails", "Right to deletion"]
    },
    {
      icon: Lock,
      title: "Security Standards",
      description: "SOC 2, ISO 27001, and enterprise security protocols",
      details: ["Multi-factor authentication", "Regular penetration testing", "Incident response", "Security monitoring"]
    },
    {
      icon: FileText,
      title: "Employment Compliance",
      description: "International employment law and tax regulations",
      details: ["Contract compliance", "Tax obligations", "Worker classification", "Labor law adherence"]
    },
    {
      icon: Globe,
      title: "Global Regulations",
      description: "Compliance across 50+ countries and jurisdictions",
      details: ["Local labor laws", "Tax compliance", "Regulatory requirements", "Documentation standards"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      stat: "100%",
      label: "Compliance Rate"
    },
    {
      icon: Shield,
      stat: "50+",
      label: "Countries Covered"
    },
    {
      icon: Users,
      stat: "Zero",
      label: "Compliance Violations"
    },
    {
      icon: Zap,
      stat: "24/7",
      label: "Monitoring & Support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Compliance & Security
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Work with confidence knowing our talent and processes meet the highest compliance 
            and security standards across all major international frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Ensure Compliance</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Compliance Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
                <p className="text-muted-foreground">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((standard) => (
              <Card key={standard} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{standard}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance Frameworks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((framework) => (
              <Card key={framework.title} className="p-8">
                <CardContent className="p-0">
                  <framework.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{framework.title}</h3>
                  <p className="text-muted-foreground mb-6">{framework.description}</p>
                  <div className="space-y-2">
                    {framework.details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Compliance Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Risk Mitigation</h3>
                <p className="text-muted-foreground">
                  Protect your business from legal, financial, and reputational risks with comprehensive compliance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Global Operations</h3>
                <p className="text-muted-foreground">
                  Operate confidently across international markets with local compliance expertise.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Client Trust</h3>
                <p className="text-muted-foreground">
                  Build stronger client relationships with demonstrated commitment to security and compliance.
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
            Secure Your Operations with Compliance
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with us for guaranteed compliance across all major international frameworks.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Get Compliant Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Compliance;