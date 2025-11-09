import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Headphones, Shield, Bug, Clock, MessageCircle, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SupportQAPod = () => {
  const features = [
    "24/7 Customer Support",
    "Quality Assurance Testing", 
    "Bug Detection & Fixing",
    "User Experience Testing",
    "Performance Monitoring",
    "Technical Documentation",
    "Support Ticket Management",
    "Customer Success Programs"
  ];

  const deliverables = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Round-the-clock support services to keep your customers happy and engaged"
    },
    {
      icon: Shield,
      title: "Quality Assurance", 
      description: "Comprehensive testing to ensure your products meet the highest quality standards"
    },
    {
      icon: Bug,
      title: "Issue Resolution",
      description: "Rapid identification and resolution of bugs, issues, and technical problems"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Support & QA Pod
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ensure exceptional quality and customer satisfaction with our comprehensive support and QA services. 
            Keep your products bug-free and your customers delighted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Configure Your Support & QA Pod</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature) => (
              <Card key={feature} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Deliverables</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((item) => (
              <Card key={item.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Setup & Training</h3>
                <p className="text-muted-foreground">
                  We set up support systems and train our team on your products and processes
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Test & Support</h3>
                <p className="text-muted-foreground">
                  Continuous testing and 24/7 customer support to maintain quality and satisfaction
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Monitor & Improve</h3>
                <p className="text-muted-foreground">
                  Ongoing monitoring and improvement of support processes and quality standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bugs Are Costing You Customers</h2>
          <p className="text-xl text-muted-foreground">
            Every unresolved issue is a lost customer. Every delayed support ticket damages your reputation. But hiring a full support and QA team costs $200k+ annually.
          </p>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Swimply</h2>
            <p className="text-xl text-muted-foreground">Delivering world-class support without the overhead</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  As Swimply grew rapidly, they struggled to maintain quality support without hiring an expensive in-house team, leading to delayed responses and customer frustration.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  Our Support & QA Pod provided 24/7 coverage with comprehensive testing and rapid issue resolution, maintaining quality as they scaled.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">Customer satisfaction score</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-muted-foreground">Response time achievement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">#1</div>
                    <div className="text-muted-foreground">Performance leaderboard position</div>
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
                    "The Hireshore team consistently delivers exceptional customer support. They maintain top performance metrics and truly understand our brand values."
                  </p>
                  <div>
                    <div className="font-semibold">Kyle Batten</div>
                    <div className="text-sm text-muted-foreground">Sr. Manager, Customer Support and Trust & Safety, Swimply</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Exceptional Support?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure quality and customer satisfaction with our comprehensive support services.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Support & QA Pod Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SupportQAPod;