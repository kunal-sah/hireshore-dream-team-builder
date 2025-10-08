import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Users, Target, Award, TrendingUp, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partnerTypes = [
    {
      title: "Agency Partners",
      description: "Marketing agencies and consultancies who resell our services",
      icon: Users,
      benefits: [
        "White-label delivery services",
        "Competitive partner pricing",
        "Dedicated account management",
        "Co-marketing opportunities"
      ],
      commission: "15-25%"
    },
    {
      title: "Referral Partners",
      description: "Business partners who refer clients to our services",
      icon: Handshake,
      benefits: [
        "Simple referral process",
        "Generous commission structure",
        "Marketing support materials",
        "Performance tracking dashboard"
      ],
      commission: "10-15%"
    },
    {
      title: "Technology Partners",
      description: "SaaS platforms and tech companies seeking integration",
      icon: Globe,
      benefits: [
        "API integration support",
        "Joint solution development",
        "Technical documentation",
        "Developer support"
      ],
      commission: "Custom"
    }
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Expand your service offerings and increase revenue streams"
    },
    {
      icon: Target,
      title: "Client Retention",
      description: "Provide comprehensive solutions to keep clients satisfied"
    },
    {
      icon: Award,
      title: "Quality Delivery",
      description: "Leverage our proven processes and expert team"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get personal support from our partner success team"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Partnership Program</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Grow Together as
            <span className="text-primary"> Strategic Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our partner network and expand your service offerings while earning competitive commissions. Together, we can deliver exceptional results for more clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact-us">Become a Partner</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Your Clients Need More. You Cannot Deliver Everything.</h2>
          <p className="text-xl text-muted-foreground">
            Client demands are growing, but building in-house teams for every service is expensive and slow. 
            Meanwhile, you are turning down revenue because you lack the right capabilities. Partner with us 
            to expand your offerings without the overhead.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="p-8 hover:border-primary/50 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <div className="space-y-3 mb-6">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{type.commission}</div>
                      <div className="text-sm text-muted-foreground">Commission Rate</div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact-us">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
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

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Success Stories</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <Badge variant="outline" className="mb-4">Marketing Agency</Badge>
                <p className="text-muted-foreground mb-4 italic">
                  "Partnering allowed us to offer services we could not deliver in-house. Revenue tripled in 12 months."
                </p>
                <div className="font-semibold">Growth Agency Co</div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">$2M</div>
                <Badge variant="outline" className="mb-4">Business Consulting</Badge>
                <p className="text-muted-foreground mb-4 italic">
                  "The referral program has become a significant revenue stream for our business."
                </p>
                <div className="font-semibold">TechStart Consultancy</div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <Badge variant="outline" className="mb-4">Design Agency</Badge>
                <p className="text-muted-foreground mb-4 italic">
                  "White-label partnership helped us scale without hiring additional staff."
                </p>
                <div className="font-semibold">Creative Solutions Inc</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-sm text-muted-foreground">
                  Submit your partnership application with business details
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-sm text-muted-foreground">
                  We review your application and schedule a discovery call
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Onboard</h3>
                <p className="text-sm text-muted-foreground">
                  Complete onboarding and access partner resources
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Grow</h3>
                <p className="text-sm text-muted-foreground">
                  Start earning commissions and growing your business
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our growing network of successful partners and start earning competitive commissions today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact-us">Apply for Partnership</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Partners;