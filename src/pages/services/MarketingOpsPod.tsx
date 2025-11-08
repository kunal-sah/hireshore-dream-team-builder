import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Settings, Zap, BarChart, Workflow, Target, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const MarketingOpsPod = () => {
  const features = [
    "Marketing Automation Setup",
    "CRM Integration & Management", 
    "Lead Scoring & Nurturing",
    "Campaign Performance Tracking",
    "Marketing Attribution Analysis",
    "Email Marketing Automation",
    "Sales Funnel Optimization",
    "Marketing Stack Integration"
  ];

  const deliverables = [
    {
      icon: Workflow,
      title: "Automation Workflows",
      description: "Sophisticated marketing automation that nurtures leads and drives conversions"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting to measure marketing performance and ROI"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration between your marketing tools, CRM, and sales systems"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Marketing Ops Pod
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Streamline your marketing operations with advanced automation, analytics, and optimization. 
            Turn your marketing into a predictable revenue-generating machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Configure Your Marketing Ops Pod</Link>
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
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Audit & Strategy</h3>
                <p className="text-muted-foreground">
                  We analyze your current marketing operations and develop an optimization strategy
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Implement & Automate</h3>
                <p className="text-muted-foreground">
                  Set up advanced automation workflows and integrate your marketing technology stack
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Optimize & Scale</h3>
                <p className="text-muted-foreground">
                  Continuous optimization and scaling of your marketing operations for maximum ROI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Your Marketing Stack Is a Disconnected Mess</h2>
          <p className="text-xl text-muted-foreground">
            Leads slip through cracks, campaigns lack attribution, and your tools don't talk to each other. Meanwhile, you are drowning in manual work that should be automated.
          </p>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Cove Digital</h2>
            <p className="text-xl text-muted-foreground">Streamlining marketing operations for predictable growth</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  Cove Digital struggled with disconnected marketing tools, manual lead tracking, and no clear attribution, making it impossible to scale efficiently.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  Our Marketing Ops Pod integrated their entire stack, automated lead nurturing, and implemented comprehensive attribution tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">60%</div>
                    <div className="text-muted-foreground">Reduction in manual work</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
                    <div className="text-muted-foreground">Increase in lead conversion</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Marketing attribution visibility</div>
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
                    "Hireshore's team helped us streamline our marketing operations and automate key workflows. The efficiency gains have been remarkable for our business."
                  </p>
                  <div>
                    <div className="font-semibold">Operations Team</div>
                    <div className="text-sm text-muted-foreground">Growing Business</div>
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
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your marketing operations with advanced automation and analytics.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Marketing Ops Pod Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default MarketingOpsPod;