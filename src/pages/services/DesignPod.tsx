import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Palette, Layout, Image, Zap, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const DesignPod = () => {
  const features = [
    "UI/UX Design & Prototyping",
    "Brand Identity & Logo Design", 
    "Landing Page & Website Design",
    "Mobile App Design",
    "Marketing Materials & Assets",
    "Design System Creation",
    "Figma & Adobe Creative Suite",
    "Unlimited Design Revisions"
  ];

  const deliverables = [
    {
      icon: Layout,
      title: "Website & Landing Pages",
      description: "High-converting designs optimized for user experience and conversions"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand packages including logos, color palettes, and style guides"
    },
    {
      icon: Image,
      title: "Marketing Assets",
      description: "Social media graphics, advertisements, and promotional materials"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Design Pod
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get unlimited design work from our dedicated designers. From websites to brand identity, 
            we deliver pixel-perfect designs that convert and captivate your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Configure Your Design Pod</Link>
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
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
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
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Brief & Requirements</h3>
                <p className="text-muted-foreground">
                  Share your vision, brand guidelines, and project requirements with our design team
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Design & Iterate</h3>
                <p className="text-muted-foreground">
                  Our designers create initial concepts and iterate based on your feedback
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Deliver & Launch</h3>
                <p className="text-muted-foreground">
                  Receive production-ready files and assets for immediate implementation
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
            Ready to Elevate Your Design?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get unlimited design work with fast turnarounds and unlimited revisions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Design Pod Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default DesignPod;