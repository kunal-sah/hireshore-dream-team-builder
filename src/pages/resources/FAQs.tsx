import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  MessageCircle,
  Phone,
  DollarSign,
  Users,
  Shield,
  Zap
} from "lucide-react";

const FAQs = () => {
  const bookCall = () => {
    window.open('https://calendly.com/hireshore/30min', '_blank');
  };

  const faqCategories = [
    {
      icon: DollarSign,
      title: "Pricing",
      faqs: [
        {
          q: "How much do delivery pods cost?",
          a: "Pod pricing starts at $4,500/month for part-time capacity (20 hours/week) and scales to $8,500/month for full-time dedicated pods (40 hours/week). Enterprise pods with multiple specialists start at $12,000/month."
        },
        {
          q: "What's included in the monthly fee?",
          a: "Your monthly fee includes dedicated team members, project management, quality assurance, weekly reporting, and access to our project management platform. No hidden costs or surprise charges."
        },
        {
          q: "Do you have minimum contracts?",
          a: "We require a 3-month minimum engagement to ensure proper onboarding and relationship building. Most clients see significant results within the first month and continue long-term."
        },
        {
          q: "Can I scale up or down as needed?",
          a: "Yes, you can adjust capacity with 30 days notice. We help you plan for seasonal demands and growth phases without long-term commitments beyond the initial 3 months."
        }
      ]
    },
    {
      icon: Users,
      title: "Staffing",
      faqs: [
        {
          q: "What if I don't like my assigned team member?",
          a: "We guarantee replacement within 5-7 business days if there's not a good fit. We carefully match team members based on your industry, communication style, and technical requirements."
        },
        {
          q: "What time zones do you operate in?",
          a: "Our team operates across multiple time zones with significant overlap during US business hours (EST/PST). Most team members are available 9 AM - 6 PM in your local time."
        },
        {
          q: "How do you ensure quality from remote teams?",
          a: "Every pod includes a dedicated project manager, standardized QA processes, weekly check-ins, and access to our project tracking platform. We maintain 95%+ client satisfaction rates."
        },
        {
          q: "Can I work directly with team members?",
          a: "Yes, you'll have direct communication with your pod members through Slack, weekly calls, and our project platform. Your project manager coordinates everything but you maintain direct relationships."
        }
      ]
    },
    {
      icon: Shield,
      title: "Security",
      faqs: [
        {
          q: "How do you protect my data and IP?",
          a: "All team members sign comprehensive NDAs, we use secure project management platforms, and follow enterprise-grade security protocols. Your data never leaves approved channels."
        },
        {
          q: "What security certifications do you have?",
          a: "We maintain SOC 2 compliance and follow GDPR guidelines. All team members complete security training and use company-provided devices with endpoint protection."
        },
        {
          q: "Can you work with our existing security requirements?",
          a: "Yes, we regularly work within client security frameworks including HIPAA, PCI compliance, and custom enterprise security policies. We'll adapt to your requirements."
        },
        {
          q: "How do you handle sensitive client information?",
          a: "Sensitive information is compartmentalized on a need-to-know basis, stored in encrypted systems, and accessed only through approved channels. Regular security audits ensure compliance."
        }
      ]
    },
    {
      icon: Zap,
      title: "Onboarding",
      faqs: [
        {
          q: "How quickly can we get started?",
          a: "Most pods are up and running within 5-7 business days of contract signing. We handle team assembly, tool setup, and initial project briefings during this period."
        },
        {
          q: "What information do you need to get started?",
          a: "We'll need access to your current tools, brand guidelines, existing processes, and a detailed brief of your first project. Our onboarding team guides you through everything."
        },
        {
          q: "Do you integrate with our existing tools?",
          a: "Yes, we work with most popular platforms including Slack, Asana, Monday, Figma, Webflow, Shopify, and more. If you have a custom tool, we'll evaluate integration options."
        },
        {
          q: "What does the first month look like?",
          a: "Week 1: Team introductions and tool setup. Week 2-3: First project execution with close oversight. Week 4: Review, optimization, and planning for month 2. Regular check-ins throughout."
        }
      ]
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
              <BreadcrumbPage>FAQs</BreadcrumbPage>
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
              <MessageCircle className="h-12 w-12 text-primary" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
          >
            Everything you need to know about pricing, staffing, security, and onboarding.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a 30‑min intro and we'll answer all your questions personally.
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

export default FAQs;