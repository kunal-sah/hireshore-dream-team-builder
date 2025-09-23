import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Target, Search, FileText, Award, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const RecruitmentService = () => {
  const processSteps = [
    {
      step: "1",
      title: "Requirements Gathering",
      description: "We work with you to understand your exact hiring needs, company culture, and role requirements.",
      duration: "1-2 days"
    },
    {
      step: "2", 
      title: "Talent Sourcing",
      description: "Our recruiters tap into our global network to find the best candidates for your specific needs.",
      duration: "3-5 days"
    },
    {
      step: "3",
      title: "Screening & Interviews",
      description: "We conduct thorough technical and cultural fit interviews to present only the best candidates.",
      duration: "5-7 days"
    },
    {
      step: "4",
      title: "Final Selection",
      description: "You interview our top recommendations and make your final hiring decision.",
      duration: "2-3 days"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Hiring",
      description: "Reduce time-to-hire by 70% with our streamlined process"
    },
    {
      icon: Target,
      title: "Quality Candidates",
      description: "Access to pre-vetted talent from our global network"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Lower recruitment costs compared to traditional agencies"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "90-day replacement guarantee on all placements"
    }
  ];

  const pricingPlans = [
    {
      name: "Standard",
      price: "15%",
      description: "First year salary",
      features: [
        "30-day replacement guarantee",
        "Basic screening process",
        "Standard turnaround time",
        "Email support"
      ]
    },
    {
      name: "Premium",
      price: "20%", 
      description: "First year salary",
      features: [
        "90-day replacement guarantee",
        "Enhanced screening process",
        "Priority turnaround time",
        "Dedicated account manager",
        "Cultural fit assessment"
      ],
      popular: true
    },
    {
      name: "Executive",
      price: "25%",
      description: "First year salary", 
      features: [
        "120-day replacement guarantee",
        "Executive-level screening",
        "Expedited process",
        "Senior account manager",
        "Leadership assessment",
        "Reference verification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Recruitment-as-a-Service</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let Us Handle Your
            <span className="text-primary"> Entire Hiring Process</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From job posting to final offer, we manage every step of recruitment. Focus on your business while we find your perfect team members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact-us">Start Recruiting</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/staffing/rates">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Recruitment Process</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A proven 4-step process that delivers quality candidates in just 10-15 days
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <Card key={step.step} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <Badge variant="outline">{step.duration}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Recruitment Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center">
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Pay only when we successfully place a candidate. No upfront fees, no hidden costs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`p-8 ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                <CardContent className="p-0">
                  {plan.popular && (
                    <Badge className="mb-4">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.description}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact-us">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your Hiring?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let us handle the recruitment process while you focus on growing your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact-us">Start Your Search</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default RecruitmentService;