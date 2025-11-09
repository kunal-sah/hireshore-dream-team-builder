import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain, Database, TrendingUp, Bot, Cpu, BarChart3, Users, Clock, Home, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DataAIPod = () => {
  const features = [
    "Data Analytics & Insights",
    "AI Model Development", 
    "Machine Learning Implementation",
    "Predictive Analytics",
    "Data Visualization Dashboards",
    "Business Intelligence Reports",
    "Automated Data Processing",
    "AI-Powered Recommendations"
  ];

  const deliverables = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Custom AI models and machine learning solutions tailored to your business needs"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Interactive dashboards that provide actionable insights from your data"
    },
    {
      icon: TrendingUp,
      title: "Predictive Models",
      description: "Advanced predictive analytics to forecast trends and optimize decisions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumbs */}
      <nav className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-muted/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList className="flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Data / AI Pod</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Data / AI Pod
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Unlock the power of your data with advanced analytics and AI solutions. 
            Make data-driven decisions, predict trends, and automate processes with intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Configure Your Data/AI Pod</Link>
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
          <h2 className="text-3xl font-bold text-center mb-12">{"What's Included"}</h2>
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
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Data Assessment</h3>
                <p className="text-muted-foreground">
                  We analyze your data sources, quality, and structure to identify opportunities
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Build & Train</h3>
                <p className="text-muted-foreground">
                  Develop and train AI models and analytics solutions tailored to your business goals
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Deploy & Monitor</h3>
                <p className="text-muted-foreground">
                  Implement solutions into your workflow and continuously monitor and improve performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{"You're Sitting on a Goldmine of Data"}</h2>
          <p className="text-xl text-muted-foreground">
            But manual processes, disconnected systems, and lack of AI expertise mean you can't extract its value. Meanwhile, data-driven competitors are pulling ahead, and opportunities are slipping through the cracks.
          </p>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Example Outcomes from Data / AI Pods</h2>
            <p className="text-xl text-muted-foreground">Common business wins from analytics, automation, and AI</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">Typical Challenges</h3>
                <p className="text-muted-foreground mb-6">
                  Manual data processing across multiple systems leads to slow decisions and missed insights.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Approach</h3>
                <p className="text-muted-foreground">
                  We build automated pipelines, analytics dashboards, and predictive models tailored to your goals.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Typical Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">Faster Decisions</div>
                    <div className="text-muted-foreground">Real-time reporting and alerts</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">Lower Costs</div>
                    <div className="text-muted-foreground">Automations reduce manual effort</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">Better Forecasts</div>
                    <div className="text-muted-foreground">Predictive models guide decisions</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/resources/guides/automation-guide" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover:shadow-md">
              <h3 className="font-semibold mb-2">Automation Guide</h3>
              <p className="text-sm text-muted-foreground">Learn how to automate your operations</p>
            </Link>
            <Link to="/case-studies/affective-care" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover:shadow-md">
              <h3 className="font-semibold mb-2">Case Study</h3>
              <p className="text-sm text-muted-foreground">See how Affective Care automated operations</p>
            </Link>
            <Link to="/resources/cost-calculator" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover:shadow-md">
              <h3 className="font-semibold mb-2">Cost Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate ROI of automation</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Harness AI & Data?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your business with intelligent data solutions and AI-powered insights.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Data AI Pod Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default DataAIPod;
