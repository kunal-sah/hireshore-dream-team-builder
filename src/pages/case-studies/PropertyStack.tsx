import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Clock, Zap, Award } from 'lucide-react';
import NavBar from '../../components/NavBar';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyCTA from '../../components/CaseStudyCTA';
import { LazyYouTube } from '../../components/LazyYouTube';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PropertyStackCaseStudy = () => {
  const stats = [
    {
      icon: Users,
      number: "15+",
      label: "Full-time Hires",
      description: "Onboarded remotely from Nepal within 12 months"
    },
    {
      icon: Clock,
      number: "<3",
      label: "Weeks Hiring",
      description: "Reduced from ~1.5 months to under 3 weeks"
    },
    {
      icon: TrendingUp,
      number: "$1M+",
      label: "Annual Savings",
      description: "Estimated cost savings vs local hiring"
    },
    {
      icon: Award,
      number: "100%",
      label: "Delivery Speed",
      description: "Increased delivery speed & user satisfaction"
    }
  ];

  const keyRoles = [
    "Full-stack & React Developers",
    "QA Engineers (3+ hires)",
    "UX/UI Designers",
    "Client Success & Tech Support Agents",
    "Data Entry & Admin Support",
    "Executive Assistant",
    "Engineering Team Lead"
  ];

  const processSteps = [
    "Headhunting from internal talent pool, forums, and communities",
    "Multi-stage technical screening with video intros and task assessments",
    "Candidate shortlist presented with video profiles for faster reviews",
    "Close sync with PropertyStack's CTO and support team lead",
    "Assistance with contracts, onboarding, timezone alignment"
  ];

  useEffect(() => {
    // Add JSON-LD for case study page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "PropertyStack Case Study - Building a Scalable Product & Support Team",
      "description": "How PropertyStack hired 15+ team members in under 3 weeks per hire and saved $1M+ annually with Hireshore's recruitment-as-a-service solution",
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
      <title>PropertyStack Case Study - Building a Scalable Product & Support Team</title>
      <meta name="description" content="See how PropertyStack hired 15+ team members in under 3 weeks per hire and saved $1M+ annually with Hireshore's recruitment-as-a-service solution." />
      
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
                <BreadcrumbPage>PropertyStack</BreadcrumbPage>
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
            Building a Scalable Product & Support Team
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our 15+ dedicated team members helped PropertyStack scale from a lean 5-member startup 
            to a reliable in-house team without burning through limited startup capital.
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
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🚩 The Challenge
                </h3>
                <p className="text-gray-600 mb-4">
                  When PropertyStack first connected with Hireshore, they were a lean 5-member startup team, 
                  using no-code tools and working with freelancers to build their MVP. As their platform evolved, 
                  it became clear that scaling with freelancers and solo devs lacked long-term efficiency, quality, and cohesion.
                </p>
                <p className="text-gray-900 font-semibold">
                  <strong>Goal:</strong> Build a reliable in-house team of developers, QA testers, support staff, 
                  and admin specialists without burning through limited startup capital.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  The Solution: A Full Offshore Delivery & Support Pod
                </h4>
                <p className="text-gray-600 mb-4">
                  Hireshore delivered a full-stack recruitment-as-a-service solution, helping PropertyStack 
                  onboard 15+ high-quality team members across engineering, design, QA, client success, and operations.
                </p>
                
                <h5 className="font-semibold text-gray-900 mb-3">Key Roles Hired:</h5>
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {keyRoles.map((role, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
                
                <h5 className="font-semibold text-gray-900 mb-3">Our Process:</h5>
                <div className="space-y-2">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
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
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            📈 Key Achievements & Long-Term Partnership
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">QA team helped squash bugs and improve UX</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Support pod built SOPs and responded to clients faster</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Executive assistant freed up leadership time</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Long-Term Partnership:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">PropertyStack has referred multiple clients to Hireshore</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Plans for 10–20 more hires in 2025</span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Expanding across PropertyStack, Alara brands</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              💬 Client Testimonial
            </h3>
            <blockquote className="text-lg text-gray-700 italic mb-6 max-w-4xl mx-auto">
              "We've hired over 15 people through Hireshore in just a year - and could've done 10 more. 
              The hiring process is much easier now with resume videos and pre-vetted candidates. 
              Compared to freelancers or other markets, the quality from Nepal has been significantly better. 
              You guys have helped us grow fast and we've referred you to many of our partners."
            </blockquote>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div>
                <div className="font-semibold text-gray-900">Ryan Jope</div>
                <div className="text-gray-600">Founder of PropertyStack</div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <LazyYouTube
                  videoId="9xMVgH1j9XE"
                  title="PropertyStack Testimonial - Ryan Jope"
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Watch Ryan's full testimonial about working with Hireshore</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <CaseStudyCTA />

      <SiteFooter />
    </div>
  );
};

export default PropertyStackCaseStudy;