import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Target, Clock, Star, Globe, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const BuildTeam = () => {
  const features = [
    "Custom Team Assembly",
    "Multi-Skill Team Combinations", 
    "Dedicated Project Manager",
    "Flexible Team Scaling",
    "Cross-Functional Expertise",
    "24/7 Productivity Coverage",
    "Integrated Workflows",
    "Performance Analytics"
  ];

  const teamTypes = [
    {
      icon: Target,
      title: "Product Development Teams",
      description: "Full-stack developers, designers, and product managers working together",
      roles: ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Product Manager"]
    },
    {
      icon: Globe,
      title: "Marketing Teams", 
      description: "Complete marketing operations from strategy to execution",
      roles: ["Marketing Manager", "Content Writer", "Graphic Designer", "SEO Specialist"]
    },
    {
      icon: Briefcase,
      title: "Operations Teams",
      description: "Streamline your business operations with specialized talent",
      roles: ["Operations Manager", "Data Analyst", "Process Specialist", "QA Tester"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Build-a-Team
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Assemble your perfect team with our Build-a-Team service. Get complementary skills, 
            seamless collaboration, and dedicated project management all in one solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/configure-pod">Build Your Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Discuss Requirements</Link>
            </Button>
          </div>
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

      {/* Team Types */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Team Configurations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamTypes.map((team) => (
              <Card key={team.title} className="p-8">
                <CardContent className="p-0">
                  <team.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{team.title}</h3>
                  <p className="text-muted-foreground mb-6">{team.description}</p>
                  <div className="space-y-2">
                    {team.roles.map((role) => (
                      <div key={role} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Build a Team?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Seamless Collaboration</h3>
                <p className="text-muted-foreground">
                  Pre-integrated teams that work together seamlessly from day one, with established workflows and communication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Complementary Skills</h3>
                <p className="text-muted-foreground">
                  Get the exact mix of skills you need without the overhead of managing individual contractors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Faster Results</h3>
                <p className="text-muted-foreground">
                  Accelerate project delivery with teams that can work in parallel and cover more ground simultaneously.
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
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom team assembled specifically for your project needs and objectives.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/configure-pod">Start Building Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default BuildTeam;