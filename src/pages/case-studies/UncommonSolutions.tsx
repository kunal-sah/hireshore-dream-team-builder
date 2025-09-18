import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Users, Clock, Award } from 'lucide-react';
import NavBar from '../../components/NavBar';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyCTA from '../../components/CaseStudyCTA';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const UncommonSolutionsCaseStudy = () => {
  const challenges = [
    "Unpredictable delivery timelines",
    "Unclear pricing and scope creep", 
    "Delivery inconsistency across projects",
    "No single point of accountability"
  ];

  const deliveryPodServices = [
    "Webflow developer",
    "UI/UX designer", 
    "GoHighLevel funnel builder",
    "Project manager",
    "QA support",
    "Slack + project dashboard setup",
    "Lead designer/devs to create product mockups and samples for sales"
  ];

  const toolsAndTech = [
    "Webflow, Figma, GoHighLevel",
    "AI-powered product generation tools",
    "Video automation tools (fitness & jewelry content)",
    "Paid media support & automation flows",
    "Flexible pre-paid package: 160 hours (at $8/hour) valid over 3 months"
  ];

  const results = [
    "Saved 40+ hours/week in coordination and delegation",
    "Launched agency website and multiple client projects from scratch",
    "Pitched more confidently using done-for-you mockups & samples",
    "No longer reliant on juggling 4-5 freelancers - one pod, one system, one team",
    "Cost-efficient & transparent delivery with pre-agreed timelines"
  ];

  const additionalServices = [
    "Content calendar creation and scheduling",
    "Urgent tender application support (35+ hours research)",
    "24+ hours nonstop work across multiple departments",
    "Property development real estate marketing tender",
    "Sales and marketing AI automation to scale Uncommon"
  ];

  useEffect(() => {
    // Add JSON-LD for case study page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Streamlining Creative Delivery & Scaling Client Projects for Uncommon Solutions",
      "description": "How Uncommon Solutions streamlined creative delivery and scaled client projects with Hireshore's plug & play delivery pod solution, saving 40+ hours weekly",
      "author": {
        "@type": "Organization",
        "name": "Hireshore"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hireshore"
      },
      "datePublished": "2024-01-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.hireshore.co/case-studies/uncommon-solutions"
      }
    };

    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(jsonLdScript);

    return () => {
      if (document.head.contains(jsonLdScript)) {
        document.head.removeChild(jsonLdScript);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <title>Uncommon Solutions Case Study - Digital Marketing Success Story</title>
      <meta name="description" content="See how Uncommon Solutions streamlined creative delivery and scaled client projects with Hireshore's plug & play delivery pod solution, saving 40+ hours weekly." />
      
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/case-studies">Case Studies</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Uncommon Solutions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <motion.section
        className="max-w-6xl mx-auto py-28 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="text-sm font-medium text-blue-600 uppercase tracking-wider inline-block mb-4"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Case Study
          </motion.span>
          
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl px-8 py-4 shadow-lg border border-gray-100">
              <h1 className="text-2xl font-bold text-gray-900">Uncommon Solutions</h1>
              <p className="text-sm text-gray-600">Digital Marketing & B2B Strategy • Norway</p>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Streamlining Creative Delivery & Scaling Client Projects
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From unpredictable timelines to transparent delivery with a complete plug & play delivery pod solution.
          </motion.p>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold">🚩</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{challenge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Solution: Plug & Play Delivery Pod</h3>
            </div>
            <div className="space-y-3">
              {deliveryPodServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools, Tech & Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tools, Tech & Strategy</h3>
          <div className="space-y-3">
            {toolsAndTech.map((tool, index) => (
              <div key={index} className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Results</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              {results.slice(0, 3).map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {results.slice(3).map((result, index) => (
                <div key={index + 3} className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white/50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Additional Support Delivered:</h4>
            <div className="space-y-2">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-white rounded-xl p-8 border border-green-200">
            <blockquote className="text-lg text-gray-700 mb-6">
              "The team is well-skilled, easy to work with, and they deliver on time. I get estimates upfront, so I can confidently promise timelines to my clients - and they're met. I don't need to search for freelancers anymore. Kunal and the Hireshore team help me pitch, plan, and deliver custom solutions for every client."
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold text-gray-900">Breearna Jope</div>
                <div className="text-gray-600">Founder, Uncommon Solutions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <CaseStudyCTA />

      <SiteFooter />
    </div>
  );
};

export default UncommonSolutionsCaseStudy;