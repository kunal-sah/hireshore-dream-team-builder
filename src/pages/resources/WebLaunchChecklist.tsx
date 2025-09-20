import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { CheckSquare, Download, Gauge, Search, BarChart3, Shield } from "lucide-react";
import { useState } from "react";

const WebLaunchChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const downloadChecklist = () => {
    console.log("Download checklist");
  };

  const handleCheck = (itemId: string) => {
    setCheckedItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const checklistSections = [
    {
      icon: Gauge,
      title: "Performance",
      description: "Speed, optimization, and core web vitals",
      items: [
        { id: "perf-1", text: "Page load speed under 3 seconds" },
        { id: "perf-2", text: "Core Web Vitals (LCP, FID, CLS) in green" },
        { id: "perf-3", text: "Images optimized and compressed" },
        { id: "perf-4", text: "Lazy loading implemented" },
        { id: "perf-5", text: "CSS and JS minified" },
        { id: "perf-6", text: "CDN configured" },
        { id: "perf-7", text: "Caching headers set" }
      ]
    },
    {
      icon: Search,
      title: "SEO",
      description: "Search engine optimization essentials",
      items: [
        { id: "seo-1", text: "Title tags optimized (under 60 chars)" },
        { id: "seo-2", text: "Meta descriptions added (under 160 chars)" },
        { id: "seo-3", text: "H1 tags properly structured" },
        { id: "seo-4", text: "Alt text for all images" },
        { id: "seo-5", text: "XML sitemap generated" },
        { id: "seo-6", text: "Robots.txt configured" },
        { id: "seo-7", text: "Schema markup implemented" },
        { id: "seo-8", text: "Canonical URLs set" }
      ]
    },
    {
      icon: BarChart3,
      title: "Tracking",
      description: "Analytics and conversion tracking",
      items: [
        { id: "track-1", text: "Google Analytics 4 installed" },
        { id: "track-2", text: "Google Tag Manager configured" },
        { id: "track-3", text: "Conversion goals set up" },
        { id: "track-4", text: "Event tracking implemented" },
        { id: "track-5", text: "Facebook Pixel installed" },
        { id: "track-6", text: "Heat mapping tool added" },
        { id: "track-7", text: "Form tracking enabled" }
      ]
    },
    {
      icon: Shield,
      title: "Accessibility",
      description: "WCAG compliance and usability",
      items: [
        { id: "a11y-1", text: "Color contrast ratios meet WCAG AA" },
        { id: "a11y-2", text: "Keyboard navigation functional" },
        { id: "a11y-3", text: "Screen reader compatibility" },
        { id: "a11y-4", text: "Focus indicators visible" },
        { id: "a11y-5", text: "Form labels properly associated" },
        { id: "a11y-6", text: "Error messages descriptive" },
        { id: "a11y-7", text: "Skip navigation links added" }
      ]
    }
  ];

  const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const completionPercentage = Math.round((completedItems / totalItems) * 100);

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
              <BreadcrumbPage>Web Launch QA Checklist</BreadcrumbPage>
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
            className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <CheckSquare className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Quality Assurance</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Web Launch QA Checklist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Performance, SEO, tracking, and accessibility checks to ensure your website launches flawlessly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={downloadChecklist}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Checklist
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={bookCall}
            >
              Get QA audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Progress</h3>
                <span className="text-2xl font-bold text-primary">{completionPercentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {completedItems} of {totalItems} items completed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {checklistSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{section.title}</CardTitle>
                        <p className="text-muted-foreground">{section.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Checkbox
                            id={item.id}
                            checked={checkedItems[item.id] || false}
                            onCheckedChange={() => handleCheck(item.id)}
                          />
                          <label
                            htmlFor={item.id}
                            className={`text-sm cursor-pointer flex-1 ${
                              checkedItems[item.id] ? 'line-through text-muted-foreground' : ''
                            }`}
                          >
                            {item.text}
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need help with QA?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team can audit your website and ensure everything is launch-ready.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={bookCall}
            >
              Book QA audit call
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default WebLaunchChecklist;