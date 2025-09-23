import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Calendar, Users, Zap, Target, Clock, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OneWeekTrial = () => {
  const trialBenefits = [
    "No upfront commitment",
    "Full access to talent pool",
    "Complete project management",
    "Real deliverables & results",
    "Risk-free evaluation",
    "Dedicated support team",
    "Quality assurance included",
    "Easy scaling options"
  ];

  const trialProcess = [
    {
      day: "Day 1",
      title: "Instant Setup",
      description: "Quick onboarding call and immediate team assignment"
    },
    {
      day: "Day 2-6",
      title: "Active Work",
      description: "Your team delivers real results on actual project tasks"
    },
    {
      day: "Day 7",
      title: "Evaluation",
      description: "Review results and decide on long-term engagement"
    }
  ];

  const whatYouGet = [
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Hand-picked professionals matched to your specific needs and project requirements"
    },
    {
      icon: Target,
      title: "Real Results",
      description: "Actual deliverables and tangible progress on your business objectives"
    },
    {
      icon: Zap,
      title: "Full Support",
      description: "Complete project management, communication, and quality assurance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            1-Week Risk-Free Trial
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the HireShore difference with zero commitment. Get a full week of 
            dedicated talent working on your actual projects with real deliverables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trial Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">7 Days</h3>
              <p className="text-muted-foreground">Full week of dedicated work</p>
            </div>
            <div>
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Zero Risk</h3>
              <p className="text-muted-foreground">No contracts or commitments</p>
            </div>
            <div>
              <Target className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Real Results</h3>
              <p className="text-muted-foreground">Actual deliverables for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Your Trial</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whatYouGet.map((item) => (
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

      {/* Trial Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trial Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trialBenefits.map((benefit) => (
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

      {/* Trial Process */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Your Trial Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trialProcess.map((step, index) => (
              <Card key={step.day} className="p-8 text-center relative">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-primary font-medium mb-4">{step.day}</p>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < trialProcess.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Try Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Start with a Trial?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">No Time Wasted</h3>
                <p className="text-muted-foreground">
                  Skip lengthy negotiations and contracts. Start working immediately with top talent.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Prove Value First</h3>
                <p className="text-muted-foreground">
                  See real results before making any long-term commitments or investments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Perfect Team Fit</h3>
                <p className="text-muted-foreground">
                  Ensure cultural and technical alignment before scaling up your engagement.
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
            Ready to Try Risk-Free?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get started today with zero commitment and experience the HireShore difference.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default OneWeekTrial;