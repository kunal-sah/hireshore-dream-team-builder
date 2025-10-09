import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Star, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const OneWeekTrial = () => {
  const trialFeatures = [
    "No upfront payment required",
    "Full access to talent pool",
    "Direct communication with team member",
    "Project management support",
    "Quality assurance included",
    "Cancel anytime during trial"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Tell Us Your Needs",
      description: "Share your project requirements, skills needed, and timeline.",
      icon: Target
    },
    {
      step: "2",
      title: "Meet Your Team Member",
      description: "We'll match you with the perfect candidate within 24 hours.",
      icon: Users
    },
    {
      step: "3",
      title: "Start Your Trial",
      description: "Begin working together on your project with full support.",
      icon: Star
    },
    {
      step: "4",
      title: "Decide to Continue",
      description: "Love your team member? Continue with our standard rates.",
      icon: Award
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc",
      quote: "The one-week trial let us test the waters without any risk. Now we have 3 full-time team members from HireShore.",
      role: "CEO"
    },
    {
      name: "Mike Rodriguez", 
      company: "Growth Agency",
      quote: "Best decision we made. The trial developer solved a critical issue in 3 days. We hired him immediately.",
      role: "CTO"
    },
    {
      name: "Emma Thompson",
      company: "E-commerce Co",
      quote: "No other agency offers this level of confidence in their talent. The trial proved their quality.",
      role: "Operations Director"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Risk-Free Trial</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Try World-Class Talent
            <span className="text-primary"> Free for 1 Week</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Test our talent quality with zero commitment. Work with a dedicated professional for one week, completely free. Only pay if you're 100% satisfied.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact-us">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/staffing/dedicated">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Hiring Blind Is Too Risky</h2>
          <p className="text-xl text-muted-foreground">
            Most agencies force you to commit before seeing results. Pay upfront, sign contracts, and hope it works out. 
            But what if the talent doesn't deliver? What if communication is poor? You're stuck with wasted money and lost time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Trial to Hire Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24hrs</div>
              <div className="text-muted-foreground">Avg. Matching Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Successful Trials</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-muted-foreground">Upfront Costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What's Included in Your Free Trial</h2>
              <div className="space-y-4">
                {trialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">100% Risk-Free</h3>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$0</div>
                    <div className="text-muted-foreground">Trial Cost</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  No contracts, no commitments, no hidden fees. Just pure talent evaluation.
                </p>
                <Button className="w-full" size="lg" asChild>
                  <Link to="/contact-us">Start Your Free Trial</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <Card key={step.step} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trial Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">What happens after the free week?</h3>
                <p className="text-muted-foreground">
                  If you're satisfied, continue with our standard rates. If not, simply walk away with no charges or commitments.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Are there any hidden costs?</h3>
                <p className="text-muted-foreground">
                  Absolutely none. The trial week is completely free with no setup fees, contracts, or obligations.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2">Can I try multiple team members?</h3>
                <p className="text-muted-foreground">
                  Yes! You can run multiple trials simultaneously for different roles or projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study - Testimonial Hybrid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Trial to Hire Success</h2>
          <Card className="p-8"><CardContent className="p-0">
            <div className="flex items-center mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />))}</div>
            <p className="text-lg italic mb-4">"The one-week trial let us test without any risk. The developer solved a critical issue in 3 days. We hired him immediately and now have 3 full-time team members from HireShore."</p>
            <div className="font-semibold">Sarah Chen, CEO TechStart Inc</div>
          </CardContent></Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Test Our Talent Quality?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of companies who discovered their perfect team members through our risk-free trial.</p>
          <Button size="lg" variant="secondary" asChild><Link to="/contact-us">Start Free Trial Today</Link></Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default OneWeekTrial;