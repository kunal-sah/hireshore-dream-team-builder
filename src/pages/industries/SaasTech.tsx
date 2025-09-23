import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Code, Cloud, Database, Shield, Zap, Users, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

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
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            SaaS & Tech Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build, scale, and optimize your SaaS products with our specialized tech teams. 
            From MVP to enterprise, we deliver world-class software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Build Your SaaS</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Tech Cases</Link>
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

      {/* Services */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">SaaS Development Services</h2>
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