import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShoppingCart, TrendingUp, Users, Zap, Package, CreditCard, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  const services = [
    "Shopify & WooCommerce Development",
    "Custom E-commerce Platforms",
    "Payment Gateway Integration",
    "Inventory Management Systems",
    "Mobile Commerce Solutions",
    "E-commerce Marketing & SEO",
    "Analytics & Conversion Optimization",
    "Customer Support & Management"
  ];

  const solutions = [
    {
      icon: ShoppingCart,
      title: "Platform Development",
      description: "Custom e-commerce platforms built for scalability and performance"
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description: "Secure payment processing with multiple gateway integrations"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Automated inventory tracking and order fulfillment systems"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Digital marketing strategies to drive traffic and increase conversions"
    }
  ];

  const stats = [
    { number: "300%", label: "Average Sales Increase" },
    { number: "45%", label: "Conversion Rate Improvement" },
    { number: "60%", label: "Faster Page Load Times" },
    { number: "24/7", label: "Support Coverage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            E-commerce Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your online store with our specialized e-commerce development, 
            marketing, and optimization services. Drive sales and scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Scale Your Store</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View E-commerce Cases</Link>
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
          <h2 className="text-3xl font-bold text-center mb-12">E-commerce Services</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our E-commerce Solutions</h2>
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

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why E-commerce Businesses Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">E-commerce Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized team with deep experience in e-commerce platforms and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Rapid Deployment</h3>
                <p className="text-muted-foreground">
                  Get your store online quickly with our streamlined development and launch process.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Global Scale</h3>
                <p className="text-muted-foreground">
                  Build for international markets with multi-currency, multi-language support.
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
            Ready to Scale Your E-commerce Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with e-commerce experts who understand your industry and growth challenges.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your E-commerce Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Ecommerce;