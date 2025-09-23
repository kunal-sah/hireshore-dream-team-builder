import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Target, Star, Coffee, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const TeamCulture = () => {
  const values = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe our success comes from empowering amazing people to do their best work"
    },
    {
      icon: Target,
      title: "Excellence Always",
      description: "We're committed to delivering exceptional quality in everything we do"
    },
    {
      icon: Zap,
      title: "Speed & Agility",
      description: "We move fast, adapt quickly, and deliver results that matter"
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We embrace diversity and work seamlessly across cultures and time zones"
    }
  ];

  const benefits = [
    "100% Remote Work",
    "Flexible Hours & Time Zones",
    "Professional Development Budget",
    "Health & Wellness Programs",
    "Competitive Compensation",
    "Performance Bonuses", 
    "Modern Tools & Equipment",
    "Career Growth Opportunities"
  ];

  const stats = [
    { number: "150+", label: "Team Members Worldwide" },
    { number: "25+", label: "Countries Represented" },
    { number: "95%", label: "Employee Satisfaction" },
    { number: "4.8/5", label: "Glassdoor Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Team & Culture
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Meet the incredible team behind HireShore's success. We're a diverse, global community 
            united by our passion for excellence and commitment to our clients' success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/company/careers">Join Our Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact-us">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-8 text-center">
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit) => (
              <Card key={benefit} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Culture in Action</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Collaborative Environment</h3>
                <p className="text-muted-foreground">
                  We foster open communication, knowledge sharing, and cross-functional collaboration across all teams.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
                <p className="text-muted-foreground">
                  Flexible schedules, mental health support, and respect for personal time help our team thrive.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Growth & Recognition</h3>
                <p className="text-muted-foreground">
                  Regular recognition, clear career paths, and investment in professional development for everyone.
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
            Want to Join Our Amazing Team?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals who share our values and passion for excellence.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/company/careers">Explore Career Opportunities</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default TeamCulture;