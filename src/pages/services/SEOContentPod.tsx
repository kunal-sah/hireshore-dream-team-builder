import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Search, FileText, BarChart3, Target, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SEOContentPod = () => {
  const features = [
    "SEO Strategy & Keyword Research",
    "Blog Writing & Article Creation", 
    "Website Copy & Landing Pages",
    "Technical SEO Optimization",
    "Content Calendar Planning",
    "Meta Tags & Schema Markup",
    "Link Building & Outreach",
    "Performance Tracking & Reports"
  ];

  const deliverables = [
    {
      icon: Search,
      title: "SEO Strategy",
      description: "Comprehensive SEO audits and strategic plans to boost your search rankings"
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "High-quality, SEO-optimized content that engages readers and ranks well"
    },
    {
      icon: BarChart3,
      title: "Performance Reports",
      description: "Detailed analytics and insights to track your SEO progress and ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Dominate Search Rankings
            <span className="text-primary"> With Expert SEO</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stop losing customers to competitors on page one. Our SEO Content Pod delivers comprehensive strategies that boost rankings, drive organic traffic, and convert visitors into paying customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Start SEO Pod</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">250%</div>
              <div className="text-muted-foreground">Avg Traffic Increase</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">180+</div>
              <div className="text-muted-foreground">Keywords Ranked</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">3-6 Months</div>
              <div className="text-muted-foreground">To Page 1</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Invisible on Google = No Business</h2>
          <p className="text-xl text-muted-foreground">
            Your competitors rank on page one while your website is buried on page five. You've tried DIY SEO, cheap freelancers, and agencies that promise the world but deliver nothing. Meanwhile, you're losing thousands in potential revenue every month to competitors who show up first.
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Strategic SEO That Actually Works</h2>
          <p className="text-xl text-muted-foreground">
            Get a dedicated SEO team that combines technical expertise, content creation, and proven strategies. We don't just promise rankings—we deliver measurable traffic and revenue growth.
          </p>
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
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">1. Research & Strategy</h3>
                <p className="text-muted-foreground">
                  We analyze your market, competitors, and keywords to develop a winning SEO strategy
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">2. Create & Optimize</h3>
                <p className="text-muted-foreground">
                  Our team creates high-quality content and optimizes your site for search engines
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">3. Monitor & Improve</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring and optimization to improve rankings and drive more traffic
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Story: Swimply</h2>
            <p className="text-xl text-muted-foreground">Scaling organic traffic with strategic SEO</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground mb-6">
                  Swimply needed to increase organic visibility and drive more qualified traffic to support their rapid growth in the pool rental marketplace.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-primary">The Solution</h3>
                <p className="text-muted-foreground">
                  Our SEO Content Pod implemented a comprehensive strategy including keyword research, content optimization, technical SEO, and consistent content creation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">250%</div>
                    <div className="text-muted-foreground">Increase in organic traffic</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">180+</div>
                    <div className="text-muted-foreground">First page rankings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">65%</div>
                    <div className="text-muted-foreground">More qualified leads</div>
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
                    "The SEO Content Pod delivered results beyond our expectations. Our organic traffic has more than doubled, and we're now ranking for competitive keywords we never thought possible."
                  </p>
                  <div>
                    <div className="font-semibold">Bunim Laskin</div>
                    <div className="text-sm text-muted-foreground">CEO, Swimply</div>
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
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Boost your organic traffic and search rankings with our expert SEO services.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Your SEO Pod Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default SEOContentPod;