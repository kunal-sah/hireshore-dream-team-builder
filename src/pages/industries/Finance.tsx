import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, DollarSign, Shield, TrendingUp, CreditCard, Users, Clock, BarChart3 } from "lucide-react";
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
            Financial Back Office Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Streamline your financial operations with expert bookkeeping, loan processing, and back-office support. 
            Scale your financial services with dedicated talent that delivers accuracy and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Get Financial Support</Link>
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
          <h2 className="text-3xl font-bold mb-6">Financial Back Office Work Demands Precision and Scale</h2>
          <p className="text-xl text-muted-foreground">
            Managing bookkeeping, loan processing, and insurance claims requires meticulous attention to detail and consistent capacity. 
            Hiring in-house is costly and time-consuming. You need skilled professionals who can deliver accuracy at scale.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide dedicated financial professionals who handle your back-office operations with accuracy, speed, and compliance expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Expert Financial Talent</h3>
                <p className="text-muted-foreground">
                  Skilled bookkeepers, processors, and financial assistants with proven track records
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Process loans, claims, and reconciliations faster with dedicated support teams
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Cost-Effective Scale</h3>
                <p className="text-muted-foreground">
                  Save up to 70% on operational costs while maintaining quality and compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Back Office Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our financial specialists handle the heavy lifting so you can focus on growth and client relationships.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <Card key={service} className="p-6 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Financial Services Firm</h2>
            <p className="text-xl text-muted-foreground">Scaling loan processing and back-office operations</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  A growing financial services firm struggled with processing 500+ loan applications monthly while maintaining 
                  accuracy in bookkeeping and claim processing. In-house hiring was too slow and expensive.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We deployed a dedicated team of 8 financial specialists handling loan processing, bookkeeping, 
                  and insurance claim back-office operations with structured QA processes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">65%</div>
                    <div className="text-muted-foreground">Reduction in processing time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                    <div className="text-muted-foreground">Accuracy rate maintained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$180K</div>
                    <div className="text-muted-foreground">Annual cost savings</div>
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
                    "Hireshore helped us build a talented team that handles operations efficiently. The quality of candidates and support has been excellent, allowing us to scale effectively."
                  </p>
                  <div>
                    <div className="font-semibold">Ryan Jope</div>
                    <div className="text-sm text-muted-foreground">Founder, PropertyStack</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/staffing/talent-profiles" className="hover:text-primary">
                    Financial Talent Profiles
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Meet our skilled bookkeepers and financial processors</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/how-it-works/qa-framework" className="hover:text-primary">
                    Quality Assurance Framework
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Learn how we ensure 99%+ accuracy in financial processing</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">
                  <Link to="/resources/cost-calculator" className="hover:text-primary">
                    Cost Savings Calculator
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">Calculate your savings with outsourced financial operations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Financial Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get dedicated financial professionals handling your bookkeeping, loan processing, and back-office work. 
            Start within 48 hours and save up to 70% on operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/configure-pod">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/staffing/talent-profiles">View Talent Profiles</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Finance;