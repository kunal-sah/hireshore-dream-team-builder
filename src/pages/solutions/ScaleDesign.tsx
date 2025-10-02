import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Users, Zap, CheckCircle, ArrowRight, Clock, Award, Target, Home, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const ScaleDesign = () => {
  const benefits = [
    'Unlimited design requests',
    'No hiring or onboarding costs',
    'Consistent brand standards',
    'Expert creative team',
    'Fast turnaround times',
    'Scalable with your growth'
  ];

  const designServices = [
    {
      title: 'Brand Design',
      description: 'Logos, brand guidelines, visual identity systems',
      icon: Award
    },
    {
      title: 'Marketing Assets',
      description: 'Social media graphics, ads, email templates',
      icon: Target
    },
    {
      title: 'Web Design',
      description: 'Landing pages, website graphics, UI elements', 
      icon: Palette
    },
    {
      title: 'Print & Digital',
      description: 'Brochures, presentations, digital publications',
      icon: Zap
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Scale Design Services Without Hiring",
    "description": "Get unlimited access to world-class design talent without the overhead of hiring. Scale your creative output instantly with dedicated design pods.",
    "provider": {
      "@type": "Organization",
      "name": "HireShore",
      "url": "https://hireshore.com"
    },
    "serviceType": "Design Services",
    "areaServed": "Worldwide"
  };

  return (
    <>
      <Helmet>
        <title>Scale Design Without Hiring | Unlimited Design Services | HireShore</title>
        <meta name="description" content="Get unlimited access to world-class design talent without the overhead of hiring. Save $120k+/year while scaling your creative output instantly." />
        <meta name="keywords" content="scale design, unlimited design, design services, design team, design pod, creative services" />
        <link rel="canonical" href="https://hireshore.com/solutions/scale-design" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <NavBar />
        
        {/* Breadcrumbs */}
        <nav className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-muted/20" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/solutions">Solutions</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Scale Design</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                <Palette className="mr-2 h-4 w-4" />
                Design Solution
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Scale Design Without
                <span className="text-primary"> The Hires</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Stop the expensive hiring cycle. Get unlimited access to world-class design talent and scale your creative output instantly—without the overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/configure-pod">
                    Start Design Pod
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}>
                  <Clock className="mr-2 h-4 w-4" />
                  See Design Examples
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">$120k+</div>
                <div className="text-muted-foreground">Annual Savings vs Hiring</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">5-7 Days</div>
                <div className="text-muted-foreground">To Start Designing</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">24-48hrs</div>
                <div className="text-muted-foreground">Average Turnaround</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Design Bottleneck Is Killing Your Growth</h2>
            <p className="text-xl text-muted-foreground">
              You need quality design work fast, but hiring designers costs $80k+ annually, takes 3-6 months, 
              and locks you into fixed overhead. Meanwhile, your competitors are shipping faster and your 
              marketing campaigns sit in the backlog.
            </p>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Smarter Way to Scale Design</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get a full design team for the price of one junior hire. Unlimited requests, fast turnarounds, 
                and zero hiring headaches.
              </p>
            </div>

            {/* Cost Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 text-red-500">Traditional Hiring</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>• $80k+ annual salary per designer</div>
                    <div>• 3-6 months hiring process</div>
                    <div>• Benefits and overhead costs</div>
                    <div>• Limited to work hours</div>
                    <div>• Vacation and sick days</div>
                  </div>
                  <div className="mt-4 text-2xl font-bold text-red-500">$120k+/year</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-primary">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Design Pod</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>• Full design team access</div>
                    <div>• Start in 5-7 days</div>
                    <div>• No overhead or benefits</div>
                    <div>• Flexible capacity scaling</div>
                    <div>• Always available coverage</div>
                  </div>
                  <div className="mt-4 text-2xl font-bold text-primary">From $2,500/month</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Design Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designServices.map((service, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Design Scaling Works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Submit Requests</h3>
                  <p className="text-muted-foreground">Upload briefs, references, and requirements through our simple portal</p>
                </CardContent>
              </Card>
              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Creation</h3>
                  <p className="text-muted-foreground">Our designers create concepts and iterate based on your feedback</p>
                </CardContent>
              </Card>
              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Rapid Delivery</h3>
                  <p className="text-muted-foreground">Receive production-ready assets within 24-48 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Design Pods?</h2>
                <p className="text-muted-foreground mb-8">
                  Skip the hiring hassle and get instant access to a full creative team. Scale up or down as needed without the commitment of full-time employees.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Start Scaling Today</h3>
                  <p className="text-muted-foreground mb-6">
                    Get unlimited design capacity without the hiring headaches.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link to="/configure-pod">Configure Design Pod</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/case-studies">View Design Work</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Design Pod Guide</h3>
                  <p className="text-sm text-muted-foreground mb-4">Learn how top companies use design pods to scale faster</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/resources/guides">Read Guide →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Case Studies</h3>
                  <p className="text-sm text-muted-foreground mb-4">See real results from companies using our design services</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/case-studies">View Cases →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Cost Calculator</h3>
                  <p className="text-sm text-muted-foreground mb-4">Calculate your savings vs traditional hiring</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/resources/cost-calculator">Calculate →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Design?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join companies who've replaced expensive hires with flexible design pods.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/configure-pod">
                Start Design Pod
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default ScaleDesign;