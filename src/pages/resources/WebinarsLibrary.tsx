import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import { StickyCTA } from "@/components/ui/sticky-cta";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Video, Calendar, Users, ArrowRight, ExternalLink, Clock } from "lucide-react";

const WebinarsLibrary = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const upcomingWebinars = [
    {
      id: 1,
      title: "Building High-Converting Sales Funnels",
      description: "Learn to design and implement sales funnels that convert visitors into customers",
      date: "March 25, 2024",
      time: "2:00 PM EST",
      duration: "60 minutes",
      presenter: "Sarah Johnson",
      registrationLink: "https://calendly.com/hireshore/webinar-funnels",
      topics: ["Funnel Strategy", "Conversion Optimization", "Email Marketing"],
      type: "upcoming"
    },
    {
      id: 2,
      title: "SEO Fundamentals for Startups",
      description: "Essential SEO strategies to improve your organic search rankings",
      date: "April 8, 2024",
      time: "3:00 PM EST",
      duration: "45 minutes",
      presenter: "Mike Chen",
      registrationLink: "https://calendly.com/hireshore/webinar-seo",
      topics: ["Keyword Research", "On-Page SEO", "Link Building"],
      type: "upcoming"
    }
  ];

  const replayWebinars = [
    {
      id: 3,
      title: "Content Marketing Automation",
      description: "Streamline your content creation and distribution process",
      date: "February 15, 2024",
      duration: "55 minutes",
      presenter: "Lisa Rodriguez",
      watchLink: "https://vimeo.com/example-replay",
      topics: ["Content Strategy", "Automation Tools", "Social Media"],
      type: "replay"
    },
    {
      id: 4,
      title: "Email Marketing Best Practices",
      description: "Proven strategies to increase open rates and conversions",
      date: "January 22, 2024",
      duration: "50 minutes",
      presenter: "David Park",
      watchLink: "https://vimeo.com/example-replay-2",
      topics: ["Email Design", "Segmentation", "A/B Testing"],
      type: "replay"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 pt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Webinars</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Webinars & Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Live sessions and replays covering growth strategies, marketing automation, and operational excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              View Upcoming Sessions
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={bookCall}
            >
              <Users className="mr-2 h-5 w-5" />
              Request Custom Training
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Sessions</h2>
            <p className="text-xl text-muted-foreground">Register now and join live Q&A sessions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                        Upcoming
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {webinar.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{webinar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {webinar.time}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Topics Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {webinar.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full mt-4" 
                        onClick={() => window.open(webinar.registrationLink, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replays */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Session Replays</h2>
            <p className="text-xl text-muted-foreground">Catch up on previous sessions at your own pace</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {replayWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <Video className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge variant="outline">
                        Replay Available
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {webinar.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{webinar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {webinar.duration}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Topics Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {webinar.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-4" 
                        onClick={() => window.open(webinar.watchLink, '_blank')}
                      >
                        <Video className="mr-2 h-4 w-4" />
                        Watch Replay
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Training?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We offer tailored training sessions for your team's specific needs and goals.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              <Users className="mr-2 h-5 w-5" />
              Book Custom Training
            </Button>
          </motion.div>
        </div>
      </section>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default WebinarsLibrary;