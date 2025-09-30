import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import { TrendingUp, Target, Users, CheckCircle, ArrowRight, Zap, Award, Home, ChevronRight, BarChart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const SalesPipeline = () => {
  const painPoints = [
    'Inconsistent lead flow causing revenue gaps',
    'Sales team spending hours on manual outreach',
    'Low conversion rates from leads to customers',
    'No clear system for nurturing prospects'
  ];

  const benefits = [
    { title: '3x More Qualified Leads', description: 'Consistent pipeline generation', icon: TrendingUp },
    { title: '50% Faster Sales Cycle', description: 'Automated nurture sequences', icon: Zap },
    { title: '2x Conversion Rate', description: 'Strategic follow-up systems', icon: Target },
    { title: 'Full Visibility', description: 'Real-time pipeline tracking', icon: BarChart }
  ];

  const howItWorks = [
    { step: '1', title: 'Pipeline Audit', description: 'Analyze your current sales process and identify gaps', icon: Target },
    { step: '2', title: 'Lead Generation Setup', description: 'Build automated systems for consistent lead flow', icon: Users },
    { step: '3', title: 'Nurture Automation', description: 'Create sequences that convert prospects to customers', icon: MessageCircle },
    { step: '4', title: 'Optimize & Scale', description: 'Track performance and refine for maximum ROI', icon: BarChart }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sales Pipeline Filling Service",
    "description": "Fill your sales pipeline with qualified leads. Generate 3x more leads with automated outreach and nurture systems.",
    "provider": {
      "@type": "Organization",
      "name": "HireShore"
    }
  };

  return (
    <>
      <Helmet>
        <title>Fill Your Sales Pipeline with Qualified Leads | HireShore</title>
        <meta name="description" content="Generate 3x more qualified leads with automated outreach and nurture systems. Build a consistent sales pipeline that drives predictable revenue." />
        <link rel="canonical" href="https://hireshore.com/solutions/sales-pipeline" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <NavBar />
        
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
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/solutions">Solutions</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Fill Sales Pipeline</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        
        <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <TrendingUp className="mr-2 h-4 w-4" />
              Sales Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fill Your Pipeline.
              <span className="bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent"> Drive Predictable Revenue.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Generate 3x more qualified leads with automated outreach and nurture systems that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/configure-pod" className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-variant text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:shadow-glow transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')} className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-muted transition-colors">
                Book a Call
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Empty Pipeline? Revenue Suffers.</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Without a consistent flow of qualified leads, your revenue becomes unpredictable. Manual outreach doesn't scale, and opportunities slip through the cracks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start bg-card p-6 rounded-lg border border-border">
                  <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <span className="text-destructive font-bold text-sm">✕</span>
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How Hireshore Solves This</h2>
                <p className="text-muted-foreground mb-6">
                  We build automated lead generation systems that fill your pipeline with qualified prospects. From outreach to nurture sequences, we handle the heavy lifting so you can focus on closing deals.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Automated outreach to ideal prospects</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Smart nurture sequences that convert</span></li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span>Full pipeline visibility and reporting</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">3x</div>
                  <div className="text-muted-foreground mb-6">More Qualified Leads</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-variant bg-clip-text text-transparent mb-2">50%</div>
                  <div className="text-muted-foreground">Faster Sales Cycle</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Pipeline Automation Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 hover-scale">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground rounded-full font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-variant text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">We'll help you set up your first automated workflow quickly and efficiently</h2>
            <p className="text-xl opacity-90 mb-8">
              Join 150+ companies who automated their sales pipeline and scaled revenue predictably.
            </p>
            <Link to="/configure-pod" className="inline-flex items-center justify-center bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-elegant">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/resources/guides/funnels" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Funnel Guide</h3>
                <p className="text-sm text-muted-foreground">Build high-converting sales funnels</p>
              </Link>
              <Link to="/resources/guides/outreach-systems" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Outreach Systems</h3>
                <p className="text-sm text-muted-foreground">Master cold outreach automation</p>
              </Link>
              <Link to="/case-studies" className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 hover-scale">
                <h3 className="font-semibold mb-2">Case Studies</h3>
                <p className="text-sm text-muted-foreground">See real pipeline results</p>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default SalesPipeline;