import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Award, Users, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const TalentProfiles = () => {
  const talentProfiles = [
    {
      name: "Sarah Chen",
      role: "Senior Full-Stack Developer",
      location: "Philippines",
      rate: "$45/hr",
      rating: 4.9,
      experience: "8+ years",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      specialization: "E-commerce & SaaS Applications",
      languages: ["English (Fluent)", "Mandarin (Native)"],
      availability: "Available"
    },
    {
      name: "Marcus Rodriguez",
      role: "UX/UI Designer",
      location: "Colombia",
      rate: "$38/hr",
      rating: 4.8,
      experience: "6+ years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      specialization: "Mobile Apps & Web Design",
      languages: ["English (Fluent)", "Spanish (Native)"],
      availability: "Available"
    },
    {
      name: "Priya Patel", 
      role: "Digital Marketing Specialist",
      location: "India",
      rate: "$32/hr",
      rating: 4.9,
      experience: "5+ years",
      skills: ["SEO", "Google Ads", "Content Marketing", "Analytics"],
      specialization: "B2B SaaS Marketing",
      languages: ["English (Fluent)", "Hindi (Native)"],
      availability: "Available"
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      location: "Canada",
      rate: "$65/hr",
      rating: 5.0,
      experience: "10+ years",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      specialization: "Cloud Infrastructure & Automation",
      languages: ["English (Native)", "French (Fluent)"],
      availability: "Available"
    },
    {
      name: "Elena Kozlov",
      role: "Data Scientist",
      location: "Ukraine",
      rate: "$55/hr",
      rating: 4.7,
      experience: "7+ years",
      skills: ["Python", "Machine Learning", "SQL", "Tableau", "Statistics"],
      specialization: "Predictive Analytics & AI",
      languages: ["English (Fluent)", "Ukrainian (Native)", "Russian (Fluent)"],
      availability: "Available"
    },
    {
      name: "Carlos Santos",
      role: "Mobile App Developer",
      location: "Brazil",
      rate: "$42/hr",
      rating: 4.8,
      experience: "6+ years",
      skills: ["React Native", "Swift", "Kotlin", "Firebase", "App Store"],
      specialization: "iOS & Android Applications",
      languages: ["English (Fluent)", "Portuguese (Native)"],
      availability: "Available"
    }
  ];

  const categories = [
    {
      icon: Users,
      name: "Development",
      count: "250+ Developers",
      roles: ["Frontend", "Backend", "Full-Stack", "Mobile", "DevOps"]
    },
    {
      icon: Award,
      name: "Design",
      count: "80+ Designers",
      roles: ["UI/UX", "Graphic Design", "Product Design", "Branding"]
    },
    {
      icon: Search,
      name: "Marketing",
      count: "120+ Marketers",
      roles: ["Digital Marketing", "Content", "SEO", "Social Media"]
    },
    {
      icon: Filter,
      name: "Operations",
      count: "90+ Specialists",
      roles: ["Project Management", "Data Analysis", "QA", "Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Meet Our Talent
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Browse profiles of our vetted professionals. Each talent has been carefully 
            screened for skills, experience, and cultural fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Hire Talent</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/staffing/1-week-trial">Try Risk-Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Talent Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Talent Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Card key={category.name} className="p-6 text-center">
                <CardContent className="p-0">
                  <category.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-primary font-medium mb-4">{category.count}</p>
                  <div className="space-y-1">
                    {category.roles.map((role) => (
                      <Badge key={role} variant="secondary" className="text-xs mr-1">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talent Profiles */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Talent Profiles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talentProfiles.map((talent) => (
              <Card key={talent.name} className="p-6">
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{talent.name}</h3>
                      <p className="text-primary font-medium">{talent.role}</p>
                    </div>
                    <Badge variant={talent.availability === "Available" ? "secondary" : "outline"}>
                      {talent.availability}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{talent.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{talent.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{talent.experience}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-primary">{talent.rate}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Specialization:</h4>
                    <p className="text-sm text-muted-foreground">{talent.specialization}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {talent.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Languages:</h4>
                    <div className="space-y-1">
                      {talent.languages.map((language) => (
                        <p key={language} className="text-sm text-muted-foreground">{language}</p>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link to="/configure-pod">Hire {talent.name.split(' ')[0]}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vetting Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Application Review</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive review of experience, portfolio, and references
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Skills Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Technical tests and practical challenges to verify expertise
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Interview Process</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple interviews to assess communication and cultural fit
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Continuous Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing performance tracking and client feedback integration
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
            Ready to Work with Our Talent?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our full talent pool and find the perfect match for your project needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Find Your Perfect Match</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default TalentProfiles;