import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Clock, Zap, Award } from 'lucide-react';
import NavBar from '../../components/NavBar';
import SiteFooter from '../../components/SiteFooter';

const PropertyStackCaseStudy = () => {
  const stats = [
    {
      icon: Users,
      number: "15+",
      label: "Team Members Hired",
      description: "High-quality hires across engineering, design, QA"
    },
    {
      icon: Target,
      number: "60%",
      label: "Processing Time Reduced",
      description: "Streamlined real estate workflows"
    },
    {
      icon: Clock,
      number: "1 Year",
      label: "Partnership Duration",
      description: "Long-term recruitment collaboration"
    },
    {
      icon: Award,
      number: "100%",
      label: "Quality Delivery",
      description: "All hires met or exceeded expectations"
    }
  ];

  const services = [
    "Full-Stack Development",
    "UI/UX Design",
    "Quality Assurance",
    "Client Success Management",
    "Operations Support",
    "Technical Screening",
    "Video Profile Creation",
    "Contract & Onboarding Assistance"
  ];

  useEffect(() => {
    // Add JSON-LD for case study page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "PropertyStack Case Study - Streamlined Real Estate Operations",
      "description": "How PropertyStack hired 15+ team members and reduced processing time by 60% with Hireshore's recruitment-as-a-service solution",
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
        "@id": "https://www.hireshore.co/case-studies/property-stack"
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
      <title>PropertyStack Case Study - Hireshore Success Story</title>
      <meta name="description" content="See how PropertyStack hired 15+ team members and reduced processing time by 60% with Hireshore's recruitment-as-a-service solution. Real results, proven process." />
      
      <NavBar />
      
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
              <h1 className="text-2xl font-bold text-gray-900">PropertyStack</h1>
              <p className="text-sm text-gray-600">PropTech • Brisbane, Australia</p>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Streamlined Real Estate Operations
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            How PropertyStack scaled from a 5-member startup to a robust team of 20+ with 
            streamlined hiring processes and 60% faster workflows.
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
                  <div className="text-gray-600">5-member startup team struggling to scale</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Inefficient freelancer coordination</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">Need for quality technical talent</div>
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
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Quality hires in one year</div>
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
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
            <blockquote className="text-lg text-gray-700 italic mb-6 max-w-4xl mx-auto">
              "We've hired over 15 people through Hireshore in just a year—and could've done 10 more. 
              The hiring process is much easier now with resume videos and pre-vetted candidates. 
              Compared to freelancers or other markets, the quality from Nepal has been significantly better."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div>
                <div className="font-semibold text-gray-900">Ryan Jope</div>
                <div className="text-gray-600">Founder, PropertyStack</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <SiteFooter />
    </div>
  );
};

export default PropertyStackCaseStudy;