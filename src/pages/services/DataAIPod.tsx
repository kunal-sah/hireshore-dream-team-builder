import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain, Database, TrendingUp, Bot, Cpu, BarChart3, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

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
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
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

      {/* Case Study Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Affective Care</h2>
            <p className="text-xl text-muted-foreground">Automating operations with intelligent data solutions</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  Affective Care struggled with manual data processing across multiple systems, leading to inefficiencies and missed insights in their healthcare operations.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  Our Data/AI Pod implemented automated data pipelines, predictive analytics, and AI-powered reporting that transformed their operations and decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">80%</div>
                    <div className="text-muted-foreground">Reduction in manual work</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$250k</div>
                    <div className="text-muted-foreground">Annual operational savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
                    <div className="text-muted-foreground">Data insights & reporting</div>
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
                    "The Data/AI Pod completely transformed how we handle information. We went from spending hours on manual reports to having real-time insights at our fingertips."
                  </p>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Operations Director, Affective Care</div>
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
