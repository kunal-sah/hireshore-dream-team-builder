import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, Target, Zap } from 'lucide-react';
import NavBar from '../../components/NavBar';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyCTA from '../../components/CaseStudyCTA';
import digitalSixLogo from '../../assets/digital-six-logo.png';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DigitalSixCaseStudy = () => {
  const stats = [
    {
      icon: Users,
      number: "21→47",
      label: "Team Growth",
      description: "Scaled across Australia and Nepal"
    },
    {
      icon: DollarSign,
      number: "$1M+",
      label: "Monthly Savings",
      description: "Potential in-house hiring costs saved"
    },
    {
      icon: TrendingUp,
      number: "250%",
      label: "Team Expansion",
      description: "Growth in just a few months"
    },
    {
      icon: Target,
      number: "100%",
      label: "Quality Delivery",
      description: "Improved WordPress & SEO performance"
    }
  ];

  const services = [
    "WordPress Development",
    "Shopify Development", 
    "SEO Specialists",
    "UI/UX Design",
    "Data Research",
    "AI Development",
    "Lead Generation",
    "Next.js Development"
  ];

  useEffect(() => {
    // Add JSON-LD for case study page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Digital Six Case Study - Scaling High-Performance Offshore Team",
      "description": "How Digital Six scaled from 22 to 47 team members and saved over $1M monthly with Hireshore's managed delivery pods",
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
        "@id": "https://www.hireshore.co/case-studies/digital-six"
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
      <title>Digital Six Case Study - Hireshore Success Story</title>
      <meta name="description" content="See how Digital Six scaled from 22 to 47 team members and saved over $1M monthly with Hireshore's managed delivery pods. Real results, measurable outcomes." />
      
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
                <BreadcrumbPage>Digital Six</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Featured Image/Cover Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-20"
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
              src={digitalSixLogo} 
              alt="Digital Six Logo" 
              className="h-20 md:h-24 w-auto mx-auto"
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
              <h1 className="text-2xl font-bold text-gray-900">Digital Six</h1>
              <p className="text-sm text-gray-600">Marketing & Advertising • Brisbane, Australia</p>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Scaling a High-Performance Offshore Team
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From unreliable freelancers to a dependable offshore team of 47 members, 
            saving over $1M monthly while improving delivery quality.
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

        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The Challenge
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Unreliable freelancers from India and Pakistan</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Frequent hiring and termination cycles</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">High costs and operational inefficiencies</div>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h4>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl p-6 shadow-lg mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">$1M+</div>
                <div className="text-gray-600">Monthly savings in hiring costs</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "We were maybe 22–23 when we started... now there are 47 people across Australia and Nepal. 
                The WordPress guys are killing it. The SEO side is strong. This is way better than our past 
                freelancer experience. I've already referred several people to Hireshore."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-gray-900">Aaron Erwich</div>
                  <div className="text-gray-600">Founder, Digital Six</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/yW90cSyX_iI"
                  title="Digital Six Testimonial"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-2">Watch Aaron's full testimonial</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <CaseStudyCTA />

      <SiteFooter />
    </div>
  );
};

export default DigitalSixCaseStudy;