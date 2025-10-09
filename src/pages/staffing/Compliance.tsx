import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, FileText, Lock, Globe, Award, Users, Zap, ArrowRight, Star } from "lucide-react";
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
            100% Compliance
            <span className="text-primary"> Guaranteed</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Work confidently across 50+ countries. Our talent and processes meet the highest compliance 
            and security standards across GDPR, SOC 2, ISO 27001, and all major international frameworks.
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

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Non-Compliance Can Cost You Everything</h2>
          <p className="text-xl text-muted-foreground">
            Hiring globally without proper compliance exposes you to legal risks, data breaches, tax penalties, and reputational damage. 
            One violation can result in fines up to 4% of annual revenue under GDPR—or worse, losing your ability to operate in key markets.
          </p>
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

      {/* Case Study Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance in Action: PropertyStack</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Global Compliance Success
              </div>
              <h3 className="text-2xl font-bold mb-4">Hiring Globally with Full Compliance Confidence</h3>
              <p className="text-muted-foreground mb-6">
                PropertyStack needed to hire remote team members from Nepal while ensuring full compliance with international employment laws, tax regulations, and data protection standards.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>15+ compliant hires across multiple countries</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>All contracts, tax, and legal documentation handled</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Zero compliance issues or violations</span>
                </div>
              </div>
              <Link to="/case-studies/property-stack" className="inline-flex items-center text-primary font-semibold hover:underline">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border shadow-elegant">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Compliant hires</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                  <div className="text-sm text-muted-foreground">Compliance issues</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Documentation handled</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$1M+</div>
                  <div className="text-sm text-muted-foreground">Saved annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-xl border border-border shadow-elegant">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star className="w-5 h-5 text-yellow-500 fill-current" key={i} />
              ))}
            </div>
            <blockquote className="text-xl text-center text-foreground mb-6 italic">
              "We've hired over 15 people through Hireshore in just a year - and could've done 10 more. The hiring process is much easier now with resume videos and pre-vetted candidates. Compared to freelancers or other markets, the quality from Nepal has been significantly better. You guys have helped us grow fast and we've referred you to many of our partners."
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-foreground">Ryan Jope</div>
              <div className="text-muted-foreground">Founder, PropertyStack</div>
            </div>
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