import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Calendar, Users, Rocket, FileText, MessageSquare, Settings, Target } from "lucide-react";
import { Link } from "react-router-dom";

const OnboardingProcess = () => {
  const onboardingSteps = [
    {
      day: "Day 1",
      icon: MessageSquare,
      title: "Discovery & Requirements",
      description: "Comprehensive intake call to understand your needs, goals, and project specifications",
      deliverables: ["Project brief", "Requirements document", "Timeline outline"]
    },
    {
      day: "Day 2-3",
      icon: Users,
      title: "Team Assembly & Planning",
      description: "Curate and assign the perfect team members based on your specific requirements",
      deliverables: ["Team assignments", "Sprint planning", "Communication setup"]
    },
    {
      day: "Day 4-5",
      icon: Settings,
      title: "Setup & Integration",
      description: "Configure all necessary tools, access, and workflows for seamless collaboration",
      deliverables: ["Tool setup", "Access provisioning", "Workflow configuration"]
    },
    {
      day: "Day 6-7",
      icon: Rocket,
      title: "Kickoff & First Sprint",
      description: "Official project kickoff with first deliverables and established rhythm",
      deliverables: ["Project kickoff", "First deliverable", "Regular cadence"]
    }
  ];

  const benefits = [
    "Fastest industry onboarding",
    "Zero learning curve",
    "Immediate productivity", 
    "Clear communication channels",
    "Established workflows",
    "Quality assurance from day one",
    "Regular progress updates",
    "Dedicated project management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            5-7 Day Onboarding
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get up and running in just 5-7 days with our streamlined onboarding process. 
            From discovery to delivery, we make starting fast and easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Onboarding</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Schedule Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your 7-Day Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {onboardingSteps.map((step) => (
              <Card key={step.day} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <step.icon className="w-12 h-12 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className="text-sm text-primary font-medium">{step.day}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Deliverables:</h4>
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Onboarding Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onboarding Success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2">5-7</h3>
                <p className="text-muted-foreground">Days to full productivity</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                <p className="text-muted-foreground">Client satisfaction rate</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">Projects delivered on time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the fastest onboarding in the industry and start seeing results within a week.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Begin Your Onboarding</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default OnboardingProcess;