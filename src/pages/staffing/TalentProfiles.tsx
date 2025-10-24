import { Helmet } from 'react-helmet-async';
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Star, Code, Palette, BarChart3, Headphones, Video, Brain, Check, ArrowRight, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const TalentProfiles = () => {
  const categories = [
    { name: "Developers", icon: Code, count: "150+" },
    { name: "Designers", icon: Palette, count: "75+" },
    { name: "Marketers", icon: BarChart3, count: "80+" },
    { name: "Support", icon: Headphones, count: "60+" },
    { name: "Video Creators", icon: Video, count: "40+" },
    { name: "Data & AI", icon: Brain, count: "35+" }
  ];

  const featuredTalent = [
    {
      name: "Aarti Gurung",
      role: "Senior Full-Stack Developer",
      location: "Nepal",
      experience: "8 years",
      rate: "$45/hour",
      skills: ["React", "Node.js", "Python", "AWS"],
      rating: 4.9,
      projectsCompleted: 47,
      bio: "Expert in modern web development with a passion for creating scalable applications.",
      availability: "Available Now"
    },
    {
      name: "Bikash Thapa", 
      role: "UI/UX Designer",
      location: "Nepal",
      experience: "6 years",
      rate: "$38/hour",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      rating: 4.8,
      projectsCompleted: 32,
      bio: "Creative designer focused on user-centered design and beautiful interfaces.",
      availability: "Available Now"
    },
    {
      name: "Sita Tamang",
      role: "Digital Marketing Specialist",
      location: "Nepal",
      experience: "5 years", 
      rate: "$28/hour",
      skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
      rating: 4.9,
      projectsCompleted: 58,
      bio: "Results-driven marketer with proven track record of growing online presence.",
      availability: "Available in 1 week"
    },
    {
      name: "Rajesh Shrestha",
      role: "Video Producer",
      location: "Nepal",
      experience: "7 years",
      rate: "$35/hour", 
      skills: ["After Effects", "Premiere Pro", "Motion Graphics", "3D Animation"],
      rating: 4.7,
      projectsCompleted: 41,
      bio: "Creative video professional specializing in engaging content and animations.",
      availability: "Available Now"
    },
    {
      name: "Meena Rai",
      role: "Data Scientist",
      location: "Nepal",
      experience: "4 years",
      rate: "$50/hour",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Visualization"],
      rating: 4.8,
      projectsCompleted: 23,
      bio: "Data scientist with expertise in ML models and business intelligence solutions.",
      availability: "Available in 2 weeks"
    },
    {
      name: "Suresh Karki",
      role: "Customer Support Lead",
      location: "Nepal",
      experience: "6 years",
      rate: "$22/hour",
      skills: ["Zendesk", "Customer Success", "Process Optimization", "Training"],
      rating: 4.9,
      projectsCompleted: 63,
      bio: "Customer support expert with experience building and leading support teams.",
      availability: "Available Now"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Talent Profiles",
    "description": "Browse profiles of pre-vetted professionals across development, design, marketing, and more",
    "itemListElement": featuredTalent.map((talent, index) => ({
      "@type": "Person",
      "position": index + 1,
      "name": talent.name,
      "jobTitle": talent.role,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": talent.location
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Talent Profiles | Browse Pre-Vetted Professionals | HireShore</title>
        <meta name="description" content="Browse profiles of pre-vetted professionals across development, design, marketing, support, and more. Find the perfect talent for your team." />
        <meta name="keywords" content="talent profiles, hire developers, hire designers, remote team, vetted professionals" />
        <link rel="canonical" href="https://hireshore.com/staffing/talent-profiles" />
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
                  <BreadcrumbLink asChild><Link to="/staffing">Staffing</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Talent Profiles</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-16 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet Your Next
              <span className="text-primary"> Team Member</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Browse profiles of pre-vetted professionals ready to join your team. Each talent is carefully selected for their skills, experience, and cultural fit—no more gambling on unproven freelancers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact-us">Hire Talent</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/staffing/1-week-trial">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Hiring Unknown Freelancers Is a Gamble</h2>
            <p className="text-xl text-muted-foreground">
              Freelance platforms are flooded with inflated profiles and fake reviews. You spend weeks interviewing only to discover the candidate can't deliver. 
              By the time you realize it, you've lost time and money on someone who wasn't a fit.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Talent by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Card key={category.name} className="p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-0">
                    <category.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <Badge variant="secondary">{category.count}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Talent Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Featured Talent</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Get to know some of our top-performing team members across different specializations
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTalent.map((talent, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-3">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {talent.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{talent.name}</h3>
                        <p className="text-sm text-muted-foreground">{talent.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                          {talent.rating}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {talent.location} • {talent.experience} experience
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{talent.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {talent.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <span className="font-semibold text-primary">{talent.rate}</span>
                      <span className="text-muted-foreground">{talent.projectsCompleted} projects</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Badge 
                        variant={talent.availability === "Available Now" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {talent.availability}
                      </Badge>
                      <Button size="sm" asChild>
                        <Link to="/contact-us">Hire {talent.name.split(' ')[0]}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Talent Network</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Active Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.8</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Talent Success: PropertyStack</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                  Real Estate Success Story
                </div>
                <h3 className="text-2xl font-bold mb-4">15+ Top Talents Hired Globally</h3>
                <p className="text-muted-foreground mb-6">
                  PropertyStack rapidly scaled their team by hiring 15+ pre-vetted professionals across development, design, and support roles through our talent network.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>15+ specialists hired in 1 year</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>All fully vetted and ready to work</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>$1M+ saved vs traditional recruitment</span>
                  </div>
                </div>
                <Link to="/case-studies/property-stack" className="inline-flex items-center text-primary font-semibold hover:underline">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-card p-8 rounded-xl border border-border shadow-elegant">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Team members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$1M+</div>
                    <div className="text-sm text-muted-foreground">Cost saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3x</div>
                    <div className="text-sm text-muted-foreground">Faster hiring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-xl border border-border shadow-elegant">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star className="w-5 h-5 text-yellow-500 fill-current" key={i} />
                ))}
              </div>
              <blockquote className="text-xl text-center text-foreground mb-6 italic">
                "We've hired over 15 people through Hireshore in just a year. The hiring process is much easier now with resume videos and pre-vetted candidates. Compared to freelancers or other markets, the quality has been significantly better. The talent profiles make it easy to find exactly who we need."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground">Ryan Jope</div>
                <div className="text-muted-foreground">Founder, PropertyStack</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vetting Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Rigorous Vetting Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Application Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Portfolio assessment and initial screening of qualifications
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Technical Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive skills testing and practical challenges
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Cultural Fit Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    Communication skills and work style evaluation
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Reference Check</h3>
                  <p className="text-sm text-muted-foreground">
                    Background verification and past client feedback
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
              Ready to Meet Your Perfect Team Member?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our talent pool and find the professionals who will help grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact-us">Find Talent</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/staffing/1-week-trial">Try Risk-Free</Link>
              </Button>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default TalentProfiles;
