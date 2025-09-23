import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Search, Users, Target, Clock, Award, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const RecruitmentService = () => {
  const services = [
    "End-to-End Recruitment Process",
    "Technical Skills Assessment",
    "Cultural Fit Evaluation",
    "Reference & Background Checks",
    "Onboarding Support",
    "90-Day Performance Guarantee",
    "Ongoing Support & Retention",
    "Custom Talent Pipeline"
  ];

  const process = [
    {
      icon: Target,
      title: "Requirements Analysis",
      description: "Deep dive into your specific needs, culture, and ideal candidate profile"
    },
    {
      icon: Search,
      title: "Talent Sourcing",
      description: "Comprehensive search across our network and external talent pools"
    },
    {
      icon: Users,
      title: "Screening & Assessment",
      description: "Multi-stage evaluation including technical, cultural, and soft skills"
    },
    {
      icon: Award,
      title: "Final Selection",
      description: "Present top candidates with complete profiles and recommendations"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      stat: "2-3 Weeks",
      label: "Average Time to Hire"
    },
    {
      icon: Target,
      stat: "95%",
      label: "Success Rate"
    },
    {
      icon: Globe,
      stat: "50+",
      label: "Countries Covered"
    },
    {
      icon: Users,
      stat: "1000+",
      label: "Successful Placements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Recruitment-as-a-Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let us handle your entire recruitment process. From sourcing to onboarding, 
            we find and place the perfect talent for your team with our proven methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Recruitment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Discuss Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
                <p className="text-muted-foreground">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Recruitment Service</h2>
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

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Recruitment Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={step.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Guarantee</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">90-Day Performance Guarantee</h3>
                <p className="text-muted-foreground">
                  If the candidate doesn't meet expectations within 90 days, we'll find a replacement at no cost.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Quality candidates presented within 2-3 weeks, with continuous pipeline development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Continuous support during integration and ongoing relationship management for retention.
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
            Ready to Find Your Perfect Candidates?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our recruitment experts handle the entire process while you focus on your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Recruitment Process</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default RecruitmentService;