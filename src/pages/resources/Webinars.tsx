import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Video,
  ArrowRight,
  Phone,
  Calendar,
  Play,
  Clock,
  Users
} from "lucide-react";

const Webinars = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const upcomingWebinars = [
    {
      title: "Scaling Creative Operations with Delivery Pods",
      description: "Learn how modern agencies use delivery pods to maintain quality while scaling creative output.",
      date: "Oct 15, 2024",
      time: "2:00 PM EST",
      duration: "45 minutes",
      attendees: "120+ registered",
      status: "upcoming",
      featured: true
    },
    {
      title: "Automation Workflows That Actually Work",
      description: "Practical automation strategies that save time without breaking existing processes.",
      date: "Oct 28, 2024",
      time: "3:00 PM EST",
      duration: "60 minutes",
      attendees: "85+ registered",
      status: "upcoming"
    }
  ];

  const pastWebinars = [
    {
      title: "Building Scalable Outreach Systems",
      description: "How to create systematic outreach that generates consistent leads without burning out your team.",
      date: "Sep 20, 2024",
      duration: "55 minutes",
      views: "340+ views",
      status: "replay"
    },
    {
      title: "NDIS Business Automation Deep Dive",
      description: "Specific automation strategies for NDIS providers to reduce admin overhead and improve compliance.",
      date: "Sep 5, 2024",
      duration: "50 minutes",
      views: "280+ views",
      status: "replay"
    },
    {
      title: "E-commerce Performance Optimization",
      description: "Technical optimizations that directly impact conversion rates and customer experience.",
      date: "Aug 22, 2024",
      duration: "40 minutes",
      views: "420+ views",
      status: "replay"
    },
    {
      title: "Agency Capacity Planning & Resource Management",
      description: "How to predict and plan for capacity needs while maintaining quality standards.",
      date: "Aug 8, 2024",
      duration: "45 minutes",
      views: "195+ views",
      status: "replay"
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
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="p-4 bg-primary/10 rounded-full">
              <Video className="h-12 w-12 text-primary" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Webinars
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            Upcoming sessions & replays covering operations, automation, and scaling strategies.
          </motion.p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Sessions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="default" className="text-xs">
                          Upcoming
                        </Badge>
                        {webinar.featured && (
                          <Badge variant="secondary" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                      {webinar.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{webinar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>{webinar.date} at {webinar.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>{webinar.attendees}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-primary text-sm group-hover:translate-x-1 transition-transform">
                      <span>Register now</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Past Webinars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Replay Library</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <Play className="h-6 w-6 text-secondary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Replay
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                      {webinar.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{webinar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{webinar.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-primary text-sm group-hover:translate-x-1 transition-transform">
                      <Play className="mr-1 h-4 w-4" />
                      <span>Watch replay</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want a private session?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a one-on-one strategy session tailored to your specific needs.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book a 30‑min intro
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Webinars;