import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Target, Award, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "Join our engineering team to build scalable solutions for our growing client base."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time", 
      salary: "$65,000 - $95,000",
      description: "Create beautiful, user-centered designs for web and mobile applications."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      description: "Drive growth through digital marketing campaigns and content strategy."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description: "Lead client projects and ensure successful delivery of all commitments."
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      salary: "$45,000 - $65,000 + Commission",
      description: "Generate qualified leads and support our growing sales pipeline."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      description: "Ensure client satisfaction and drive retention across our customer base."
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "100% Remote Work",
      description: "Work from anywhere in the world with flexible hours"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Target,
      title: "Professional Growth",
      description: "Learning budget and career development opportunities"
    },
    {
      icon: Award,
      title: "Performance Bonuses",
      description: "Quarterly and annual bonuses based on performance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build your career with a fast-growing company that values innovation, 
            collaboration, and personal growth. Work with talented people on exciting projects that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="#open-positions">View Open Positions</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/company/team-culture">Our Culture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="flex-1 text-center">
                  <p className="text-lg italic mb-6">
                    "Joining this team was the best career decision I've made. The culture of innovation, 
                    support for professional growth, and work-life balance is exceptional. I get to work on 
                    challenging projects with brilliant people while maintaining flexibility in my schedule."
                  </p>
                  <div>
                    <div className="font-semibold">Alex Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Senior Developer, Engineering Team</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid gap-6">
            {openPositions.map((position) => (
              <Card key={position.title} className="p-8">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to="/contact-us">Apply Now</Link>
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{position.description}</p>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{position.salary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Apply</h3>
                <p className="text-sm text-muted-foreground">
                  Submit your application with resume and cover letter
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Screen</h3>
                <p className="text-sm text-muted-foreground">
                  Initial screening call to discuss your background
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Interview</h3>
                <p className="text-sm text-muted-foreground">
                  Technical and cultural fit interviews with team
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Offer</h3>
                <p className="text-sm text-muted-foreground">
                  Reference checks and job offer with onboarding
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
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Do not see the perfect role? Send us your resume and we will keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact-us">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Careers;