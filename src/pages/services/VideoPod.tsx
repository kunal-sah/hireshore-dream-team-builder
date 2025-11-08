import { Helmet } from 'react-helmet-async';
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Video, Film, Edit, Mic, Camera, Play, Clock, Home, ChevronRight, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const VideoPod = () => {
  const features = [
    "Video Production & Editing",
    "Animated Explainer Videos", 
    "Social Media Video Content",
    "Product Demo Videos",
    "Training & Educational Videos",
    "Motion Graphics & Animations",
    "Video Ads & Commercials",
    "Podcast Production & Editing"
  ];

  const deliverables = [
    {
      icon: Video,
      title: "Marketing Videos",
      description: "Engaging promotional videos that drive conversions and brand awareness"
    },
    {
      icon: Film,
      title: "Product Demos",
      description: "Clear, compelling demonstrations of your products or services in action"
    },
    {
      icon: Edit,
      title: "Social Content",
      description: "Optimized video content for all major social media platforms"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Video Production Pod Services",
    "description": "Professional video production and editing services delivered on-demand. From concept to final cut, we create videos that engage, educate, and convert.",
    "provider": {
      "@type": "Organization",
      "name": "HireShore"
    }
  };

  return (
    <>
      <Helmet>
        <title>Video Pod | Professional Video Production & Editing Services | HireShore</title>
        <meta name="description" content="Professional video production and editing services on-demand. Create engaging videos that drive results with expert videographers and editors." />
        <meta name="keywords" content="video production, video editing, video pod, explainer videos, product videos, social media videos" />
        <link rel="canonical" href="https://hireshore.com/services/video-pod" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <NavBar />
        
        {/* Breadcrumbs */}
        <nav className="pt-20 pb-4 px-4 bg-muted/20" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/"><Home className="h-4 w-4" /></Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Video Pod</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="pt-16 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Video Production Pod
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your message into compelling video content. From concept to final cut, we create videos that engage, educate, and convert your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/configure-pod">Configure Your Video Pod</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">5-7 Days</div>
                <div className="text-muted-foreground">Average Production Time</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Videos Produced</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Higher Engagement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Video Marketing Shouldn't Be This Hard</h2>
            <p className="text-xl text-muted-foreground">
              You know video converts, but production agencies charge $5k+ per video, freelancers are unreliable, and in-house video teams cost $100k+ annually. Meanwhile, your competitors are publishing daily.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Video Production, Simplified</h2>
            <p className="text-xl text-muted-foreground">
              Get a dedicated video production team that delivers consistently. From script to screen, we handle everything so you can focus on your message.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 bg-muted/20">
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
        <section className="py-16 px-4">
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
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">1. Plan & Script</h3>
                  <p className="text-muted-foreground">
                    We work with you to develop concepts, scripts, and storyboards for your video content
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">2. Produce & Record</h3>
                  <p className="text-muted-foreground">
                    Professional production with high-quality equipment and experienced videographers
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <Play className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">3. Edit & Deliver</h3>
                  <p className="text-muted-foreground">
                    Expert editing and post-production to create polished, engaging final videos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">UGC Brief Template</h3>
                  <p className="text-sm text-muted-foreground mb-4">Create effective video briefs</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/resources/ugc-brief-template">Download →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Video Portfolio</h3>
                  <p className="text-sm text-muted-foreground mb-4">See our video work</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/case-studies">View Videos →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Video className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Content Calendar</h3>
                  <p className="text-sm text-muted-foreground mb-4">Plan your video content</p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/resources/templates/content-calendar">Get Template →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Story: Digital Six</h2>
              <p className="text-xl text-muted-foreground">Creating engaging video content at scale</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                  <p className="text-muted-foreground mb-6">
                    Digital Six needed consistent video content for multiple clients but production agencies were too expensive and freelancers were unreliable.
                  </p>
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                  <p className="text-muted-foreground">
                    Our Video Pod provided on-demand video production with fast turnarounds, delivering everything from explainer videos to social media content.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-primary">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6">Results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">25+</div>
                      <div className="text-muted-foreground">Videos produced monthly</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">70%</div>
                      <div className="text-muted-foreground">Cost savings vs agencies</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">5-7 Days</div>
                      <div className="text-muted-foreground">Average delivery time</div>
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
                      "Hireshore's team has been instrumental in helping us deliver quality projects consistently. Their professionalism and dedication have made a real difference."
                    </p>
                    <div>
                      <div className="font-semibold">Project Manager</div>
                      <div className="text-sm text-muted-foreground">Growing Business</div>
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
              Ready to Create Compelling Videos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional video production that tells your story and drives results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/configure-pod">Start Your Video Pod Today</Link>
            </Button>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default VideoPod;