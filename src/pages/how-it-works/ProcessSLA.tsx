import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Users, Target, Shield, Zap, ArrowRight, Home, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const ProcessSLA = () => {
  const slaMetrics = [
    {
      metric: "Project Kickoff",
      timeframe: "24 hours",
      description: "Initial team assignment and project setup"
    },
    {
      metric: "First Deliverable",
      timeframe: "48-72 hours",
      description: "Initial work output or prototype delivery"
    },
    {
      metric: "Regular Updates",
      timeframe: "Daily",
      description: "Progress reports and communication touchpoints"
    },
    {
      metric: "Revision Turnaround",
      timeframe: "12-24 hours",
      description: "Feedback implementation and iteration cycles"
    }
  ];

  const processSteps = [
    {
      icon: Target,
      step: "1",
      title: "Requirements Gathering",
      description: "We start with a detailed discovery call to understand your needs, goals, and project specifications.",
      timeline: "Day 1"
    },
    {
      icon: Users,
      step: "2", 
      title: "Team Assembly",
      description: "We assign the perfect team members based on your project requirements and timeline.",
      timeline: "Day 1-2"
    },
    {
      icon: Zap,
      step: "3",
      title: "Sprint Planning",
      description: "We break down your project into manageable sprints with clear deliverables and deadlines.",
      timeline: "Day 2-3"
    },
    {
      icon: ArrowRight,
      step: "4",
      title: "Execution & Delivery",
      description: "Our team executes the plan with regular check-ins, updates, and iterative improvements.",
      timeline: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <nav className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-muted/20" aria-label="Breadcrumb">
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
                <BreadcrumbLink asChild><Link to="/how-it-works">How It Works</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Process & SLA</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Process & SLA
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover our proven process and service level agreements that ensure fast, 
            reliable delivery of high-quality work every time. No surprises, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Agencies Promise the World, Deliver Excuses</h2>
          <p className="text-xl text-muted-foreground">
            Vague timelines, missed deadlines, and zero accountability. Most agencies talk about process but 
            deliver chaos. You need commitments you can actually count on—with consequences when they are not met.
          </p>
        </div>
      </section>

      {/* SLA Commitments */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Level Commitments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {slaMetrics.map((item) => (
              <Card key={item.metric} className="p-6 text-center">
                <CardContent className="p-0">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.metric}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{item.timeframe}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our 4-Step Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <Card key={step.step} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className="text-sm text-primary font-medium">{step.timeline}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Story: Cove Digital</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Reliable Process Delivery
              </div>
              <h3 className="text-2xl font-bold mb-4">Consistent 2-Week Turnaround on Complex Websites</h3>
              <p className="text-muted-foreground mb-6">
                Cove Digital needed a reliable partner who could consistently deliver high-quality WordPress websites on tight deadlines. Our proven process and SLA commitments enabled them to scale from 1 to 3 projects per month.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>40+ hours freed monthly for business development</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Completed 3 full website projects in one month</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>40-page websites delivered in just 2 weeks</span>
                </div>
              </div>
              <Link to="/case-studies/cove-digital" className="inline-flex items-center text-primary font-semibold hover:underline">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Hours saved monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Projects per month</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Weeks for 40-page site</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">On-time delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
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
                    "Working with Hireshore has given me more time to grow my business and take on new local clients. I'm also a WordPress expert myself, so having a pod I trust to deliver without compromise is a game changer. I hand over the project and SOP, and it's done before the deadline and to the highest quality standard I could imagine."
                  </p>
                  <div>
                    <div className="font-semibold">Chloe Bundy</div>
                    <div className="text-sm text-muted-foreground">Founder, Cove Digital</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quality Guarantees */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">On-Time Delivery</h3>
                <p className="text-muted-foreground">
                  We guarantee delivery within agreed timeframes or provide transparent updates and solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Unlimited Revisions</h3>
                <p className="text-muted-foreground">
                  We will iterate until you are completely satisfied with the final deliverable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every deliverable goes through our rigorous QA process before delivery.
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
            <Link to="/how-it-works/onboarding-process" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
              <h3 className="font-semibold mb-2">Onboarding Process</h3>
              <p className="text-sm text-muted-foreground">5-7 day onboarding timeline</p>
            </Link>
            <Link to="/how-it-works/qa-framework" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
              <h3 className="font-semibold mb-2">QA Framework</h3>
              <p className="text-sm text-muted-foreground">Quality assurance standards</p>
            </Link>
            <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground">Real client success stories</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Process?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies that trust our proven process and SLA commitments.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProcessSLA;