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

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">E-commerce Growth Shouldn't Be This Hard</h2>
          <p className="text-xl text-muted-foreground">
            Slow page loads kill conversions. High cart abandonment drains revenue. Managing inventory, marketing, and customer support across multiple channels overwhelms your team. You need e-commerce technology that grows with you, not holds you back.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build lightning-fast e-commerce platforms that convert visitors into customers, automate your operations, and scale effortlessly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Optimized Performance</h3>
                <p className="text-muted-foreground">
                  Lightning-fast load times that improve conversions by up to 45%
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Connect all your tools: payments, inventory, shipping, and marketing
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Scale Without Limits</h3>
                <p className="text-muted-foreground">
                  Handle thousands of orders with automated workflows and support
                </p>
              </CardContent>
            </Card>
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

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-4">Platform Audit & Strategy</h3>
                <p className="text-muted-foreground">
                  Analyze your current e-commerce setup and identify optimization opportunities
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-4">Build & Optimize</h3>
                <p className="text-muted-foreground">
                  Develop high-performance stores with seamless integrations and automated workflows
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-4">Scale & Grow</h3>
                <p className="text-muted-foreground">
                  Monitor performance, optimize conversions, and scale operations effortlessly
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Uncommon Solutions</h2>
            <p className="text-xl text-muted-foreground">Scaling an e-commerce brand with optimized technology</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  Uncommon Solutions needed to scale their e-commerce operations while maintaining performance, improving conversion rates, and reducing cart abandonment.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We optimized their Shopify store, implemented advanced analytics, automated marketing workflows, and integrated with their fulfillment systems.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">285%</div>
                    <div className="text-muted-foreground">Increase in online sales</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">58%</div>
                    <div className="text-muted-foreground">Higher conversion rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <div className="text-muted-foreground">Reduction in cart abandonment</div>
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
                    "HireShore transformed our e-commerce platform into a conversion machine. The results speak for themselves - our sales have nearly tripled."
                  </p>
                  <div>
                    <div className="font-semibold">Breearna Jope</div>
                    <div className="text-sm text-muted-foreground">Founder, Uncommon Solutions</div>
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
                  <Link to="/resources/guides/funnel-guide" className="hover:text-primary">
                    E-commerce Funnel Optimization Guide
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Learn how to increase conversion rates and reduce cart abandonment</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/resources/cost-calculator" className="hover:text-primary">
                    E-commerce ROI Calculator
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Calculate potential revenue increase from platform optimization</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/case-studies/uncommon-solutions" className="hover:text-primary">
                    Uncommon Solutions Case Study
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">See how we helped scale an e-commerce brand by 285%</p>
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
            Partner with e-commerce experts who understand your industry and growth challenges. Get started in 24 hours with our expert team.
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