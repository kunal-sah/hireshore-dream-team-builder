import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, GraduationCap, BookOpen, Users, Video, Home, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const Education = () => {
  const services = [
    "Learning Management Systems",
    "Educational Mobile Apps",
    "Virtual Classroom Platforms",
    "Student Information Systems",
    "E-learning Content Creation",
    "Assessment & Analytics",
    "Educational Games & Simulations",
    "Parent-Teacher Communication"
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
                <BreadcrumbPage>Education</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Education Technology
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionize learning with innovative educational technology solutions.
            From learning management systems to virtual classrooms, we create engaging experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Build Education Solutions</Link>
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
          <h2 className="text-3xl font-bold mb-6">Traditional Learning Tools Are Falling Behind</h2>
          <p className="text-xl text-muted-foreground">
            Outdated learning platforms, poor engagement, and disconnected tools make it harder for educators 
            to deliver effective learning experiences. Modern education demands modern technology that actually 
            enhances teaching and learning outcomes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education Services</h2>
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
            <h2 className="text-3xl font-bold mb-4">Education Success Story</h2>
            <p className="text-xl text-muted-foreground">Transforming online learning experiences</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  A leading education platform needed to scale their virtual learning environment with better 
                  engagement tools, assessment systems, and parent-teacher communication.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We built an integrated learning management system with interactive features, automated assessments, 
                  and seamless communication channels.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-muted-foreground">Increase in student engagement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-muted-foreground">Active students on platform</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">40%</div>
                    <div className="text-muted-foreground">Reduction in admin time</div>
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
                    "The platform transformed how we deliver education. Student engagement has never been higher, 
                    and teachers love the intuitive tools that save them hours every week."
                  </p>
                  <div>
                    <div className="font-semibold">Dr. Sarah Thompson</div>
                    <div className="text-sm text-muted-foreground">Director of Technology, EdTech Institute</div>
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
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Learning Assessment</h3>
                <p className="text-muted-foreground">
                  Analyze current learning tools and identify enhancement opportunities
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Platform Development</h3>
                <p className="text-muted-foreground">
                  Build engaging, interactive learning management solutions
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Video className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Launch & Support</h3>
                <p className="text-muted-foreground">
                  Deploy with training and ongoing technical support
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
              <h3 className="font-semibold mb-2">EdTech Development Guide</h3>
              <p className="text-sm text-muted-foreground">Best practices for educational technology</p>
            </Link>
            <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Education Case Studies</h3>
              <p className="text-sm text-muted-foreground">See more education success stories</p>
            </Link>
            <Link to="/resources/cost-calculator" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Cost Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate your development costs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Build learning experiences that engage students and empower educators.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your Education Project</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Education;