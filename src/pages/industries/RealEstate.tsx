import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Home, Users, BarChart3, Search, Globe, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstate = () => {
  const services = [
    "IDX Website Development",
    "Lead Generation Systems", 
    "Virtual Tour Creation",
    "CRM Integration & Automation",
    "Property Marketing Materials",
    "Social Media Management",
    "Email Marketing Campaigns",
    "Market Analysis & Reporting"
  ];

  const solutions = [
    {
      icon: Home,
      title: "Property Websites",
      description: "Stunning real estate websites with IDX integration and lead capture forms"
    },
    {
      icon: Search,
      title: "Lead Generation",
      description: "Automated systems to capture, nurture, and convert property leads into clients"
    },
    {
      icon: Calendar,
      title: "Showing Management",
      description: "Streamlined booking systems for property viewings and client appointments"
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Data-driven insights and market reports to support your sales strategy"
    }
  ];

  const challenges = [
    {
      challenge: "Lead Generation",
      solution: "Implement automated lead capture systems with immediate follow-up sequences"
    },
    {
      challenge: "Property Marketing",
      solution: "Create compelling visual content and virtual tours for all listings"
    },
    {
      challenge: "Client Management",
      solution: "Set up CRM workflows to track leads through the entire sales process"
    },
    {
      challenge: "Market Presence",
      solution: "Build strong online presence with SEO-optimized websites and social media"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Real Estate Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Accelerate your real estate business with our specialized services. From lead generation 
            to closing deals, we provide the digital infrastructure you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real Estate Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

      {/* Key Solutions */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item) => (
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

      {/* Common Challenges */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Real Estate Challenges We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((item, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{item.challenge}</h3>
                  <p className="text-muted-foreground">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real Estate Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <p className="text-muted-foreground">Average increase in qualified leads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-muted-foreground">Faster deal closing times</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Client retention improvement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Lead capture & follow-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: PropertyStack</h2>
            <p className="text-xl text-muted-foreground">Revolutionizing property management with technology</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  PropertyStack needed a comprehensive platform to manage properties, leads, and client relationships while scaling rapidly across multiple markets.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We developed a complete real estate management system with IDX integration, automated lead nurturing, and powerful analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">400%</div>
                    <div className="text-muted-foreground">Increase in qualified leads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                    <div className="text-muted-foreground">Faster deal closing</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                    <div className="text-muted-foreground">Additional annual revenue</div>
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
                    "The platform HireShore built transformed our business. We can now manage thousands of properties and leads efficiently while providing exceptional client service."
                  </p>
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-sm text-muted-foreground">CTO, PropertyStack</div>
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
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the digital tools and systems you need to generate more leads and close more deals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Transformation</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default RealEstate;