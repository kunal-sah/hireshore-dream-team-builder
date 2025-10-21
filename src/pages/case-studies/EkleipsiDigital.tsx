import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, Target, Zap, CheckCircle2 } from 'lucide-react';
import NavBar from '../../components/NavBar';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyCTA from '../../components/CaseStudyCTA';
import ekleipsiLogo from '../../assets/ekleipsi-logo.png';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const EkleipsiDigitalCaseStudy = () => {
  const stats = [
    {
      icon: DollarSign,
      number: "80%",
      label: "Cost Reduction",
      description: "From $50/hour to $8 AUD/hour"
    },
    {
      icon: Clock,
      number: "10 hrs/week",
      label: "Managed Service",
      description: "Lead gen, SEO & web optimization"
    },
    {
      icon: Target,
      number: "100%",
      label: "Transparency",
      description: "Full weekly visibility & tracking"
    },
    {
      icon: TrendingUp,
      number: "3X",
      label: "Lead Quality",
      description: "Improved & consistent lead flow"
    }
  ];

  const services = [
    "Media Buying & PPC Management",
    "SEO Optimization",
    "WordPress Development",
    "Lead Generation Campaigns",
    "Weekly Project Management",
    "Time Tracking & Reporting"
  ];

  const beforeAfter = [
    {
      metric: "Cost per Hour",
      before: "~$50 (freelancers)",
      after: "$8 AUD (Hireshore Pod)"
    },
    {
      metric: "Project Management",
      before: "Manual and scattered",
      after: "Centralized & tracked"
    },
    {
      metric: "Team Capacity",
      before: "2 co-founders only",
      after: "Dedicated pod across 3 domains"
    },
    {
      metric: "Lead Quality",
      before: "Inconsistent",
      after: "Improved & consistent"
    },
    {
      metric: "Transparency",
      before: "Low",
      after: "Full weekly visibility"
    }
  ];

  useEffect(() => {
    const currentDomain = typeof window !== 'undefined' ? window.location.origin : "https://hireshore.co";
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ekleipsi Digital Case Study - 80% Cost Reduction Through Streamlined Operations",
      "description": "How Ekleipsi Digital streamlined operations and cut costs by 80% with Hireshore's managed delivery pod for media buying, SEO, and web development",
      "author": {
        "@type": "Organization",
        "name": "Hireshore"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hireshore",
        "logo": {
          "@type": "ImageObject", 
          "url": `${currentDomain}/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png`
        }
      },
      "datePublished": "2024-01-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${currentDomain}/case-studies/ekleipsi-digital`
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
      <title>Ekleipsi Digital Case Study - Hireshore Success Story</title>
      <meta name="description" content="See how Ekleipsi Digital cut costs by 80% and streamlined operations with Hireshore's managed delivery pod. Real results from Brisbane-based digital marketing agency." />
      
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-20">
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
                <BreadcrumbPage>Ekleipsi Digital</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Featured Logo Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block bg-white rounded-3xl p-12 shadow-2xl"
          >
            <img 
              src={ekleipsiLogo} 
              alt="Ekleipsi Digital Logo" 
              className="h-16 md:h-20 w-auto mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section 
        className="max-w-6xl mx-auto py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Headline */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How Ekleipsi Digital Streamlined Operations <br className="hidden md:block" />
            and Cut Costs by 80%
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A performance-driven digital marketing agency in Brisbane replaced expensive freelancers with a dedicated Hireshore delivery pod
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <stat.icon className="h-10 w-10 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Overview */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Overview</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Client</div>
              <div className="font-semibold text-gray-900">Ekleipsi Digital</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Industry</div>
              <div className="font-semibold text-gray-900">Digital Marketing</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Location</div>
              <div className="font-semibold text-gray-900">Brisbane, Australia</div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ekleipsi Digital is a performance-driven digital marketing agency specializing in PPC advertising, media buying, SEO, WordPress development, and lead generation for small to mid-sized businesses across Australia.
          </p>
        </motion.div>

        {/* The Challenge */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Before partnering with Hireshore, Ekleipsi Digital's co-founders were handling every aspect of the business themselves — from client communication and marketing strategy to ad management and website development. As new clients came in, their workload skyrocketed. Managing multiple roles manually made their operations inefficient, time-consuming, and unsustainable.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Pain Points:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Overloaded founders managing all operations manually</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Lack of scalable structure for handling new clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Rising costs of freelancers and inconsistent delivery quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">No clear system for tracking tasks or accountability</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* The Solution */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Hireshore Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Hireshore deployed a dedicated Delivery Pod designed to handle all of Ekleipsi's key operations — including media buying, SEO, and web development — under a transparent hourly model.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-green-600 mr-2" />
                What We Did
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Onboarded a specialized pod team with experts across ads, SEO, and web dev</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integrated both co-founders into Hireshore's project management platform for real-time visibility</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Established a weekly workflow with task assignments, time logs, and progress reports</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Used Slack for fast communication and coordination with the founders</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Set up weekly invoicing based on tracked hours, ensuring accountability and predictable costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Delivered</h3>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Zap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Target className="h-6 w-6 text-purple-600 mr-2" />
              Custom Workflow Highlights
            </h3>
            <p className="text-gray-700">
              A custom onboarding flow allowed seamless integration between Ekleipsi's team and our Delivery Pod — combining their strategic direction with our execution system for maximum efficiency.
            </p>
          </div>
        </motion.div>

        {/* Before vs After Comparison */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Before vs After Hireshore</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left font-semibold">Metric</th>
                  <th className="p-4 text-left font-semibold">Before Hireshore</th>
                  <th className="p-4 text-left font-semibold">After Hireshore</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfter.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900">{item.metric}</td>
                    <td className="p-4 text-gray-700">{item.before}</td>
                    <td className="p-4 text-green-600 font-semibold">{item.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* The Results */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Within weeks, the partnership transformed Ekleipsi's operations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                Cost Reduction
              </h3>
              <p className="text-gray-700">
                Campaigns were managed in-house by Hireshore at <strong>$8 AUD/hour</strong>, compared to <strong>$50/hour</strong> freelancer rates.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                Operational Efficiency
              </h3>
              <p className="text-gray-700">
                <strong>10 hours per week</strong> of managed service covered lead generation, SEO, and website optimization.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Target className="h-6 w-6 text-purple-600 mr-2" />
                Transparent System
              </h3>
              <p className="text-gray-700">
                Weekly time-tracking, reporting, and communication eliminated operational confusion.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
                Consistent Lead Flow
              </h3>
              <p className="text-gray-700">
                High-quality leads generated from optimized ad campaigns at a fraction of previous costs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Client Testimonial */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 md:p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl mb-4">"</div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                Working with their pod saved us a huge amount on costs while still generating high-quality leads. Everything is transparent, efficient, and stress-free.
              </blockquote>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <div className="text-lg font-semibold">Benjamin Rogers & Jasmine Absolom</div>
              <div className="text-blue-100">Co-Founders, Ekleipsi Digital</div>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By partnering with Hireshore, Ekleipsi Digital built a lean yet powerful delivery engine capable of managing media buying, SEO, and development under one roof — all while saving time, cutting costs, and maintaining full control over operations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Services Delivered:</h3>
              <p className="text-gray-700">Delivery Pod (Media Buying, SEO, Web Development)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tools Used:</h3>
              <p className="text-gray-700">Hireshore Project Management Suite, Slack, Time Tracking, Weekly Reporting</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <CaseStudyCTA />
      <SiteFooter />
    </div>
  );
};

export default EkleipsiDigitalCaseStudy;
