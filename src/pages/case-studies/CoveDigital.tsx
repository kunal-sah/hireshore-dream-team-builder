import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap, Award, Globe } from 'lucide-react';
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

const CoveDigitalCaseStudy = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "2",
      label: "Weeks",
      description: "40-page website migration delivered"
    },
    {
      icon: Target,
      number: "3",
      label: "Full Projects",
      description: "Completed in just one month"
    },
    {
      icon: Users,
      number: "40+",
      label: "Hours Saved",
      description: "Monthly time savings for growth focus"
    },
    {
      icon: Award,
      number: "100%",
      label: "SEO Rankings",
      description: "Maintained post-migration with QA checklists"
    }
  ];

  const deliveryPodServices = [
    "WordPress & Wix development",
    "Critical website migrations (10–40+ page sites)",
    "Local SEO implementation", 
    "QA & Project Management oversight"
  ];

  const complexTasks = [
    "A 10-page window cleaning service website",
    "A 40-page dental website migration", 
    "Full Wix product store transfers"
  ];

  const toolsAndTech = [
    "WordPress, Wix, Google Sheets, Loom",
    "Internal SOPs and migration checklists",
    "SEO audit sheets integrated into dev tasks",
    "Loom videos for visual references and design inspiration",
    "Content preservation: recreate or transfer missing content"
  ];

  const results = [
    "Delivered a 40-page website migration in just 2 weeks",
    "Completed 3 full website projects in a month",
    "Maintained SEO rankings post-migration using checklist-driven QA",
    "Chloe regained 40+ hours/month to focus on growth and client acquisition"
  ];

  useEffect(() => {
    // Add JSON-LD for case study page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Scaling Website Delivery for Cove Digital with Reliable Migration & SEO Support",
      "description": "How Cove Digital scaled website delivery with Hireshore's dedicated migration pod, completing 40-page migrations in 2 weeks and saving 40+ hours monthly",
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
        "@id": "https://www.hireshore.co/case-studies/cove-digital"
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
      <title>Cove Digital Case Study - Website Migration & SEO Success Story</title>
      <meta name="description" content="See how Cove Digital scaled website delivery with Hireshore's dedicated migration pod, completing 40-page migrations in 2 weeks and saving 40+ hours monthly." />
      
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
                <BreadcrumbPage>Cove Digital</BreadcrumbPage>
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
              <h1 className="text-2xl font-bold text-gray-900">Cove Digital</h1>
              <p className="text-sm text-gray-600">Digital Marketing Agency • Newquay, Cornwall, UK</p>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Scaling Website Delivery with Reliable Migration & SEO Support
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Dedicated migration pod delivering complex website projects in record time while maintaining SEO rankings and quality standards.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Solution: Dedicated Migration Pod
              </h3>
              <div className="space-y-3 mb-6">
                {deliveryPodServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-gray-600">{service}</div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">Complex Tasks We Handled</h4>
              <div className="space-y-2">
                {complexTasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl p-6 shadow-lg mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-600">Weeks for 40-page migration</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools, Tech & Strategy */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools, Tech & Strategy</h3>
            
            <div className="space-y-3 max-w-4xl mx-auto text-left">
              {toolsAndTech.map((tool, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Results</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                {results.slice(0, 2).map((result, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {results.slice(2).map((result, index) => (
                  <div key={index + 2} className="flex items-start gap-3 text-left">
                    <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-green-200">
              <blockquote className="text-lg text-gray-700 mb-6">
                "Working with Hireshore has given me more time to grow my business and take on new local clients. I'm also a WordPress expert myself, so having a pod I trust to deliver without compromise is a game changer. I hand over the project and SOP, and it's done before the deadline and to the highest quality standard I could imagine."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="font-semibold text-gray-900">Chloe Bundy</div>
                  <div className="text-gray-600">Founder, Cove Digital</div>
                </div>
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

export default CoveDigitalCaseStudy;