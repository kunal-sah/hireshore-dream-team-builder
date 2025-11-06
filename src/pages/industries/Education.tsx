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
    {
      title: "Student Enrollment & Registration",
      description: "Application processing, document verification, and enrollment management"
    },
    {
      title: "Academic Records Management",
      description: "Transcript processing, grade entry, and student records maintenance"
    },
    {
      title: "Admissions Support",
      description: "Application review, interview scheduling, and candidate communication"
    },
    {
      title: "Financial Aid Processing",
      description: "FAFSA processing, scholarship administration, and aid verification"
    },
    {
      title: "Student Services Support",
      description: "Help desk, inquiry management, and student communication"
    },
    {
      title: "Course Scheduling & Coordination",
      description: "Class scheduling, room assignments, and academic calendar management"
    },
    {
      title: "Data Entry & Reporting",
      description: "Student data management, reporting, and compliance documentation"
    },
    {
      title: "Alumni Relations Support",
      description: "Database management, event coordination, and fundraising support"
    }
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
            Education Administrative & Virtual Assistant Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Scale your educational institution with dedicated back office support. From admissions to student services, reduce administrative burden and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Get Education Support</Link>
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
          <h2 className="text-3xl font-bold mb-6">Educational Institutions Are Drowning in Admin Work</h2>
          <p className="text-xl text-muted-foreground">
            Staff shortages, rising enrollment demands, and manual processes create bottlenecks in admissions, student services, and academic administration. High administrative costs and slow processing times impact student experience and institutional efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education Administrative Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-3">
                    <Check className="w-6 h-6 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">Success Story: Regional University</h2>
            <p className="text-xl text-muted-foreground">Streamlining admissions and student services operations</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  A growing regional university faced overwhelming admissions backlogs during peak enrollment periods. Manual document processing, slow application reviews, and overwhelmed student services staff created bottlenecks and poor student experience.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  We deployed a dedicated team of admissions specialists, student services coordinators, and data entry professionals to handle application processing, document verification, student inquiries, and enrollment management.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">60%</div>
                    <div className="text-muted-foreground">Faster application processing time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                    <div className="text-muted-foreground">Applications processed per semester</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">65%</div>
                    <div className="text-muted-foreground">Reduction in administrative costs</div>
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
                    "HireShore's admissions team transformed our enrollment operations. We processed record applications with zero backlogs, and our internal staff can now focus on strategic student success initiatives."
                  </p>
                  <div>
                    <div className="font-semibold">Lilian N. Peyman</div>
                    <div className="text-sm text-muted-foreground">Branding & Marketing, Affective Care</div>
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
                <h3 className="text-xl font-semibold mb-4">1. Workflow Analysis</h3>
                <p className="text-muted-foreground">
                  We analyze your administrative processes and identify optimization opportunities
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Team Deployment</h3>
                <p className="text-muted-foreground">
                  Trained education specialists onboard and integrate with your systems in days
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  Ongoing quality management, performance tracking, and scalable support
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
            <Link to="/resources/cost-calculator" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Education Staffing Cost Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate savings with outsourced administrative support</p>
            </Link>
            <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Education Case Studies</h3>
              <p className="text-sm text-muted-foreground">See how institutions streamlined operations</p>
            </Link>
            <Link to="/staffing/talent-profiles" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <h3 className="font-semibold mb-2">Education Specialist Profiles</h3>
              <p className="text-sm text-muted-foreground">Meet our admissions and student services teams</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Education Administration?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get dedicated admissions and student services support deployed in days. Lower costs, faster processing, better student experience.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Get Education Support</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Education;