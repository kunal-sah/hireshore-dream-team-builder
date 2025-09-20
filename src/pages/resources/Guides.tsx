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
  BookOpen,
  ArrowRight,
  Phone,
  TrendingUp,
  Target,
  Zap,
  Users,
  Search,
  Mail
} from "lucide-react";

const Guides = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const guides = [
    {
      icon: TrendingUp,
      title: "Building Sales Funnels That Convert",
      description: "Step-by-step guide to creating high-converting funnels that turn visitors into customers.",
      readTime: "15 min read",
      badge: "Popular",
      featured: true
    },
    {
      icon: Search,
      title: "SEO Basics for Service Businesses",
      description: "Essential SEO strategies to improve your local search rankings and organic traffic.",
      readTime: "12 min read",
      badge: "Guide"
    },
    {
      icon: Zap,
      title: "Automation Starters: Your First 5 Workflows",
      description: "Simple automation workflows that save time and reduce manual work.",
      readTime: "20 min read",
      badge: "Guide"
    },
    {
      icon: Users,
      title: "Outreach Systems That Scale",
      description: "Build systematic outreach processes that generate consistent leads.",
      readTime: "18 min read",
      badge: "Guide"
    },
    {
      icon: Target,
      title: "Lead Qualification Framework",
      description: "How to identify and prioritize your best prospects for higher close rates.",
      readTime: "10 min read",
      badge: "Guide"
    },
    {
      icon: Mail,
      title: "Email Sequence Templates",
      description: "Proven email sequences for nurturing leads and converting prospects.",
      readTime: "14 min read",
      badge: "Guide"
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
              <BreadcrumbPage>Guides</BreadcrumbPage>
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
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Guides
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            Funnels, SEO basics, automation starters, outreach systems and more.
          </motion.p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <guide.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {guide.badge}
                        </Badge>
                        {guide.featured && (
                          <Badge variant="default" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                      <div className="flex items-center text-primary text-sm group-hover:translate-x-1 transition-transform">
                        <span>Read guide</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need custom guidance?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a 30‑min intro and we'll map your specific strategy.
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

export default Guides;