import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ArrowRight, Search, Filter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
import { useState } from "react";

const CaseNotesLibrary = () => {
  const navigate = useNavigate();
  
  const caseNotes = [
    {
      id: "ndis-admin-automation",
      title: "NDIS Admin Drain → Portal + Alerts → 10+ hrs/week saved",
      industry: "Healthcare",
      timeframe: "3 weeks",
      problem: "NDIS provider spending 15+ hours weekly on manual admin tasks, client intake forms, and compliance documentation",
      solution: "Custom client portal with automated form workflows, CRM integration, and Slack notification system",
      outcome: "Reduced admin time by 67% (10+ hours/week), improved client experience, 100% compliance tracking",
      tags: ["Automation", "Healthcare", "Portal", "CRM Integration"],
      readTime: "4 min read",
      slug: "ndis-automation"
    },
    {
      id: "ecommerce-replatform",
      title: "Legacy Platform → Shopify Plus → 312% Revenue Growth",
      industry: "E-commerce",
      timeframe: "8 weeks",
      problem: "Established e-commerce brand stuck on legacy platform with 3.2% conversion rate, slow load times, and limited mobile experience",
      solution: "Complete migration to Shopify Plus with custom theme, advanced filtering, subscription integration, and mobile-first optimization",
      outcome: "Conversion rate increased to 8.7%, page load time reduced to 1.8 seconds, revenue grew 312% to $8.2M in first year",
      tags: ["E-commerce", "Migration", "Performance", "Mobile-First"],
      readTime: "6 min read",
      slug: "ecommerce-replatform"
    },
    {
      id: "saas-onboarding",
      title: "23% Churn → Interactive Onboarding → 91% Activation Rate",
      industry: "SaaS",
      timeframe: "5 weeks",
      problem: "B2B SaaS with complex features experiencing 23% monthly churn, only 34% of users completed setup within first week",
      solution: "Interactive onboarding system with progressive disclosure, smart defaults, sample data, and contextual guidance",
      outcome: "First-week activation increased to 91%, monthly churn reduced to 8.2%, time-to-value decreased from 12 days to 2.5 days",
      tags: ["SaaS", "UX Design", "Churn Reduction", "User Onboarding"],
      readTime: "5 min read",
      slug: "saas-onboarding"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", ...Array.from(new Set(caseNotes.map(note => note.industry)))];

  const filteredCaseNotes = caseNotes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesIndustry = selectedIndustry === "All" || note.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const handleReadNote = (slug: string) => {
    navigate(`/resources/case-notes/${slug}`);
  };

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
              <BreadcrumbPage>Case Notes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Case Notes Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Real client transformations with detailed implementation strategies, results, and lessons learned.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search case notes..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <select
                className="appearance-none pl-10 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Case Notes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{note.industry}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {note.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {note.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <strong>Timeframe:</strong> {note.timeframe}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-red-700">Problem</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{note.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-blue-700">Solution</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{note.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-1 text-green-700">Result</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{note.outcome}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {note.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {note.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{note.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <Button 
                        className="w-full mt-4"
                        onClick={() => handleReadNote(note.slug)}
                      >
                        Read Full Note
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCaseNotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case notes found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for similar results?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can solve your specific challenges and deliver measurable outcomes.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.open('https://calendly.com/hireshore/30min', '_blank')}
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <StickyCTA />
      <SiteFooter />
    </div>
  );
};

export default CaseNotesLibrary;