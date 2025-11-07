import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Calendar, CreditCard, Users, Home, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const Hospitality = () => {
  const services = [
    "Hotel Booking Systems",
    "Restaurant Management",
    "Event Planning Platforms",
    "Guest Experience Apps",
    "Revenue Management",
    "Property Management Systems",
    "Online Reservation Systems",
    "Customer Review Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <nav className="pt-20 pb-4 px-4 bg-muted/20" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList className="flex flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/industries">Industries</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Hospitality</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hospitality Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Enhance guest experiences and streamline operations with cutting-edge hospitality technology.
            From booking systems to guest management, we deliver solutions that drive satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Improve Guest Experience</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Guest Expectations Are Higher Than Ever</h2>
          <p className="text-xl text-muted-foreground">
            Outdated booking systems, disconnected guest communication, and manual processes frustrate guests 
            and drain your team. In hospitality, every touchpoint matters—and technology should enhance, 
            not hinder, the experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hospitality Services</h2>
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

      {/* Case Study */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Swimply</h2>
            <p className="text-xl text-muted-foreground">Transforming hospitality booking with seamless technology</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  Swimply needed to scale their unique hospitality platform with complex booking management, 
                  real-time availability, and seamless guest experiences.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  Our team built comprehensive booking systems, automated guest communication, and integrated 
                  property management tools for efficient operations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                    <div className="text-muted-foreground">Bookings processed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$27M</div>
                    <div className="text-muted-foreground">Funding raised (Shark Tank)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3x</div>
                    <div className="text-muted-foreground">Faster booking process</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="p-8 bg-card">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-1 text-center">
                  <p className="text-lg italic mb-6">
                    "The Hireshore team consistently delivers exceptional customer support. They maintain top 
                    performance metrics and truly understand our brand values, making them an integral part of 
                    our customer success strategy."
                  </p>
                  <div>
                    <div className="font-semibold">Yona Meissner</div>
                    <div className="text-sm text-muted-foreground">Head of Operations, Swimply</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Requirements Analysis</h3>
                <p className="text-muted-foreground">
                  We analyze your hospitality needs and guest journey touchpoints
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Solution Development</h3>
                <p className="text-muted-foreground">
                  Custom booking systems and guest management platforms
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Launch & Optimize</h3>
                <p className="text-muted-foreground">
                  Seamless integration and continuous optimization for guest satisfaction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/resources/guides" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Hospitality Tech Guide</h3>
              <p className="text-sm text-muted-foreground">Best practices for hospitality tech</p>
            </Link>
            <Link to="/case-studies/swimply" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Swimply Case Study</h3>
              <p className="text-sm text-muted-foreground">Full success story details</p>
            </Link>
            <Link to="/resources/cost-calculator" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">ROI Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate your potential savings</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Guest Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading hospitality brands that trust us to deliver exceptional technology solutions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Hospitality Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Hospitality;