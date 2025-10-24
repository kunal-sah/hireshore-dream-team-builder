import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, DollarSign, Shield, TrendingUp, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Finance = () => {
  const services = [
    "Bookkeeping & Accounting",
    "Back Office Processing",
    "Loan Processing & Servicing",
    "Insurance Claim Processing",
    "Financial Data Entry",
    "Account Reconciliation",
    "Invoice Management",
    "Financial Document Processing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Financial Technology
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build secure, compliant financial solutions with expert fintech development.
            From payment processing to trading platforms, we deliver solutions that meet regulatory standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Build Fintech Solutions</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Security and Compliance Cannot Be Compromised</h2>
          <p className="text-xl text-muted-foreground">
            Financial technology demands the highest standards of security, regulatory compliance, and reliability. 
            One vulnerability or compliance gap can cost you everything. You need partners who understand the stakes.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build secure, compliant fintech solutions with bank-grade security and regulatory expertise baked in from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Security First</h3>
                <p className="text-muted-foreground">
                  Bank-grade encryption and security protocols on every transaction
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  Built-in compliance with SOC 2, PCI-DSS, and financial regulations
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Scalable Infrastructure</h3>
                <p className="text-muted-foreground">
                  Handle millions of transactions without compromising speed or security
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Financial Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

      {/* Case Study */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Digital Six</h2>
            <p className="text-xl text-muted-foreground">Accelerating fintech marketing and compliance</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  Digital Six needed to scale marketing operations for fintech clients while maintaining strict 
                  compliance standards and delivering rapid campaign turnarounds.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  Our team provided compliant marketing operations, automated workflow systems, and financial 
                  sector expertise to accelerate campaign delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">80%</div>
                    <div className="text-muted-foreground">Faster campaign delivery</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Compliance adherence</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3x</div>
                    <div className="text-muted-foreground">Client capacity increase</div>
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
                    "Working with this team gave us the confidence to scale our fintech marketing operations 
                    while maintaining the compliance standards our industry demands."
                  </p>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-muted-foreground">CEO, Digital Six</div>
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
                  <Link to="/staffing/compliance" className="hover:text-primary">
                    Financial Compliance Guide
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Ensure your fintech operations meet all regulatory standards</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/case-studies/digital-six" className="hover:text-primary">
                    Digital Six Case Study
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">See how we accelerated fintech marketing by 80%</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/resources/cost-calculator" className="hover:text-primary">
                    Fintech ROI Calculator
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Calculate the value of secure, compliant development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Secure Fintech Solutions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with experts who understand the complexities of financial technology. Get started in 24 hours with our secure fintech solutions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Fintech Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Finance;