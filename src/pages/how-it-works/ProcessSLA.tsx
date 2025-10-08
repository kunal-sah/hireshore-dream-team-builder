import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Users, Target, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessSLA = () => {
  const slaMetrics = [
    {
      metric: "Project Kickoff",
      timeframe: "24 hours",
      description: "Initial team assignment and project setup"
    },
    {
      metric: "First Deliverable",
      timeframe: "48-72 hours",
      description: "Initial work output or prototype delivery"
    },
    {
      metric: "Regular Updates",
      timeframe: "Daily",
      description: "Progress reports and communication touchpoints"
    },
    {
      metric: "Revision Turnaround",
      timeframe: "12-24 hours",
      description: "Feedback implementation and iteration cycles"
    }
  ];

  const processSteps = [
    {
      icon: Target,
      step: "1",
      title: "Requirements Gathering",
      description: "We start with a detailed discovery call to understand your needs, goals, and project specifications.",
      timeline: "Day 1"
    },
    {
      icon: Users,
      step: "2", 
      title: "Team Assembly",
      description: "We assign the perfect team members based on your project requirements and timeline.",
      timeline: "Day 1-2"
    },
    {
      icon: Zap,
      step: "3",
      title: "Sprint Planning",
      description: "We break down your project into manageable sprints with clear deliverables and deadlines.",
      timeline: "Day 2-3"
    },
    {
      icon: ArrowRight,
      step: "4",
      title: "Execution & Delivery",
      description: "Our team executes the plan with regular check-ins, updates, and iterative improvements.",
      timeline: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Process & SLA
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover our proven process and service level agreements that ensure fast, 
            reliable delivery of high-quality work every time. No surprises, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Agencies Promise the World, Deliver Excuses</h2>
          <p className="text-xl text-muted-foreground">
            Vague timelines, missed deadlines, and zero accountability. Most agencies talk about process but 
            deliver chaos. You need commitments you can actually count on—with consequences when they are not met.
          </p>
        </div>
      </section>

      {/* SLA Commitments */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Level Commitments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {slaMetrics.map((item) => (
              <Card key={item.metric} className="p-6 text-center">
                <CardContent className="p-0">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.metric}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{item.timeframe}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our 4-Step Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <Card key={step.step} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className="text-sm text-primary font-medium">{step.timeline}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="flex-1 text-center">
                  <p className="text-lg italic mb-6">
                    "The clarity of their process and the reliability of their SLA commitments set them apart. 
                    For the first time, we have a partner that actually delivers when they say they will. The 
                    daily updates and fast revision turnaround keep our projects moving at the pace we need."
                  </p>
                  <div>
                    <div className="font-semibold">Emily Roberts</div>
                    <div className="text-sm text-muted-foreground">COO, Cove Digital</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quality Guarantees */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">On-Time Delivery</h3>
                <p className="text-muted-foreground">
                  We guarantee delivery within agreed timeframes or provide transparent updates and solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Unlimited Revisions</h3>
                <p className="text-muted-foreground">
                  We will iterate until you are completely satisfied with the final deliverable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every deliverable goes through our rigorous QA process before delivery.
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
            Ready to Experience Our Process?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies that trust our proven process and SLA commitments.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProcessSLA;