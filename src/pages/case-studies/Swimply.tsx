import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Clock, MessageSquare, Zap } from 'lucide-react';
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

const SwimplyCaseStudy = () => {
  const stats = [
    {
      icon: Users,
      number: "7",
      label: "USA Timezone Reps",
      description: "Dedicated customer representatives"
    },
    {
      icon: Star,
      number: "#1",
      label: "Top Performers",
      description: "Leading the leaderboard consistently"
    },
    {
      icon: Clock,
      number: "99%",
      label: "Response Time",
      description: "Industry-leading response rates"
    },
    {
      icon: MessageSquare,
      number: "95%",
      label: "CSAT Score",
      description: "Customer satisfaction rating"
    }
  ];

  useEffect(() => {
    // Add JSON-LD for case study page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Swimply Case Study - Powering Customer Success",
      "description": "How Hireshore's dedicated USA timezone customer representatives delivered exceptional support with 95% CSAT scores and top leaderboard performance",
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
        "@id": "https://www.hireshore.co/case-studies/swimply"
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
      <title>Swimply Case Study - Powering Customer Success</title>
      <meta name="description" content="See how Hireshore's 7 dedicated USA timezone customer representatives delivered exceptional support for Swimply with 95% CSAT scores and top performance." />
      
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
                <BreadcrumbPage>Swimply</BreadcrumbPage>
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
            className="text-sm font-medium text-purple-600 uppercase tracking-wider inline-block mb-4"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Client Success Story
          </motion.span>
          
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl px-8 py-4 shadow-lg border border-gray-100">
              <img
                src="/lovable-uploads/2999c320-31d3-437d-ac66-13dca87efa9b.png"
                alt="Swimply logo"
                className="h-12 object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Powering Swimply's Customer Success
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our 7 dedicated USA timezone customer representatives have been delivering exceptional support, 
            maintaining top leaderboard positions with outstanding CSAT scores and response times.
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
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Seamless Integration & Support
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Slack Integration</div>
                    <div className="text-gray-600">Synced with Swimply's internal team for real-time collaboration</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Zendesk Platform</div>
                    <div className="text-gray-600">Utilizing Zendesk as support software for streamlined ticket management</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">USA Timezone Coverage</div>
                    <div className="text-gray-600">Round-the-clock support during peak business hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">Top Performers</div>
                <div className="text-gray-600">Consistently ranking #1 on the leaderboard among all representatives</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Outstanding Customer Success Results</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Our dedicated customer support team has consistently delivered exceptional results for Swimply, 
              maintaining industry-leading performance metrics while providing seamless integration with their 
              existing systems and workflows.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Customer Satisfaction Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-gray-600">Response Time Achievement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">#1</div>
                <div className="text-gray-600">Leaderboard Position</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "The Hireshore team consistently delivers exceptional customer support. They maintain top performance metrics and truly understand our brand values, making them an integral part of our customer success strategy."
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold text-gray-900">Yona Meissner</div>
                <div className="text-sm text-gray-600">Head of Operations, Swimply</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "The support team from Hireshore consistently ranks #1 on our performance leaderboard with a 95% CSAT score. Their professionalism and dedication to customer success is truly exceptional."
            </blockquote>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-semibold text-gray-900">Kyle Batten</div>
                <div className="text-sm text-gray-600">Sr. Manager, Customer Support and Trust & Safety, Swimply</div>
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

export default SwimplyCaseStudy;