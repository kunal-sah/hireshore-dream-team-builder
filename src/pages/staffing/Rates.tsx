import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, DollarSign, Users, Clock, Globe, Star, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Rates = () => {
  const pricingTiers = [
    {
      name: "Essential",
      price: "$25-35",
      period: "/hour",
      description: "Perfect for startups and small businesses",
      features: [
        "Junior to Mid-level talent",
        "40+ hours/week availability", 
        "Basic project management",
        "Email & chat support",
        "Quality assurance included",
        "1-week trial available"
      ],
      roles: ["Junior Developers", "Content Writers", "Virtual Assistants", "Data Entry Specialists"]
    },
    {
      name: "Professional",
      price: "$35-55",
      period: "/hour",
      description: "Ideal for growing companies and complex projects",
      features: [
        "Senior-level expertise",
        "Flexible hours & timezone",
        "Dedicated project manager",
        "Priority support",
        "Advanced quality assurance",
        "Performance guarantees"
      ],
      roles: ["Senior Developers", "Designers", "Marketing Specialists", "Analysts"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$55-85",
      period: "/hour",
      description: "For large organizations requiring specialized expertise",
      features: [
        "Expert & specialist talent",
        "24/7 availability",
        "Custom team assembly",
        "White-glove service",
        "SLA guarantees",
        "Compliance & security"
      ],
      roles: ["Technical Architects", "Team Leads", "Strategy Consultants", "Specialists"]
    }
  ];

  const additionalServices = [
    {
      service: "Recruitment-as-a-Service",
      price: "20-25%",
      description: "First year salary fee for permanent placements"
    },
    {
      service: "Team Assembly",
      price: "$500",
      description: "One-time setup fee for custom team configurations"
    },
    {
      service: "Rush Delivery",
      price: "+25%",
      description: "Premium for urgent projects requiring immediate start"
    },
    {
      service: "Dedicated Account Manager",
      price: "$2,000",
      description: "Monthly fee for dedicated relationship management"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "No Hidden Costs",
      description: "Transparent pricing with all fees included upfront"
    },
    {
      icon: Clock,
      title: "Flexible Billing",
      description: "Weekly or monthly billing cycles to match your cash flow"
    },
    {
      icon: Award,
      title: "Performance Guarantee",
      description: "100% satisfaction guarantee or we'll make it right"
    },
    {
      icon: Globe,
      title: "Global Talent",
      description: "Access to talent from 50+ countries at competitive rates"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transparent Rates
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Simple, transparent pricing for world-class talent. No hidden fees, 
            no surprises - just exceptional value for premium results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Get Custom Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/staffing/1-week-trial">Try Risk-Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hourly Rates by Expertise Level</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={`p-8 relative ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-primary">{tier.price}</span>
                      <span className="text-xl text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Common Roles:</h4>
                    <div className="space-y-2">
                      {tier.roles.map((role) => (
                        <div key={role} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                    <Link to="/configure-pod">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.service} className="p-6">
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{service.service}</h3>
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Rates Make Sense</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compare the Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">In-House Hiring</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>$60,000+ annual salary</p>
                  <p>+ $15,000 benefits</p>
                  <p>+ $10,000 recruitment costs</p>
                  <p>+ Office space & equipment</p>
                  <p className="font-semibold text-foreground">= $85,000+ per year</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Traditional Agencies</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>$80-150+ per hour</p>
                  <p>+ Management overhead</p>
                  <p>+ Long contracts</p>
                  <p>+ Setup fees</p>
                  <p className="font-semibold text-foreground">= $120,000+ per year</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center border-primary">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">HireShore</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>$25-85 per hour</p>
                  <p>+ Full management included</p>
                  <p>+ No contracts required</p>
                  <p>+ Zero setup fees</p>
                  <p className="font-semibold text-primary">= $50,000-170,000 per year</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Transparent Pricing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote based on your specific needs and start with our risk-free trial.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Get Your Custom Quote</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Rates;