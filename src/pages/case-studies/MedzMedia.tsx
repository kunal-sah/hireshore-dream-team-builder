import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, Heart, Zap, Target } from 'lucide-react';
import NavBar from '../../components/NavBar';
import SiteFooter from '../../components/SiteFooter';

const MedzMediaCaseStudy = () => {
  const stats = [
    {
      icon: Clock,
      number: "40+",
      label: "Hours Saved Weekly",
      description: "From working past 2 AM to enjoying evenings with family"
    },
    {
      icon: TrendingUp,
      number: "50%",
      label: "Client Retention Increase",
      description: "Better delivery quality and faster turnaround times"
    },
    {
      icon: Target,
      number: "5+",
      label: "Websites Delivered",
      description: "In first 2 months with near-perfect client satisfaction"
    },
    {
      icon: Users,
      number: "Full",
      label: "Delivery Pod Team",
      description: "Developers, designers, QA, and project management"
    },
    {
      icon: Zap,
      number: "$499",
      label: "Monthly Subscription",
      description: "Fixed cost eliminating freelancer coordination chaos"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Work-Life Balance",
      description: "From burnout to quality time with kids"
    }
  ];

  const services = [
    "Web & WordPress Development",
    "Graphic and UI Design",
    "GoHighLevel Automation Support",
    "QA and Project Management",
    "Personal Assistant Services",
    "Social Media Management"
  ];

  useEffect(() => {
    // Add JSON-LD for case study page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Medz Media Case Study - From Burnout to Work-Life Balance",
      "description": "How Medz Media founder saved 40+ hours weekly and increased client retention by 50% with Hireshore's managed delivery pods",
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
        "@id": "https://www.hireshore.co/case-studies/medz-media"
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
      <title>Medz Media Case Study - Hireshore Success Story</title>
      <meta name="description" content="See how Medz Media founder saved 40+ hours weekly and increased client retention by 50% with Hireshore's managed delivery pods. Real results, better work-life balance." />
      
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
              <h1 className="text-2xl font-bold text-gray-900">Medz Media</h1>
              <p className="text-sm text-gray-600">Digital Marketing • Sydney, Australia</p>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            From Burnout to Work-Life Balance
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            How Marlon transformed his digital marketing agency from working past 2 AM to enjoying 
            quality time with family while growing the business.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenge & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="bg-white rounded-xl p-8 border shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              🚩 The Challenge
            </h3>
            <p className="text-gray-600 leading-relaxed">
              When Marlon, founder of Medz Media, reached out to Hireshore, he was juggling every role—designer, 
              developer, strategist, and sales lead—often working late into the night to keep things afloat. While 
              he had tried using freelance platforms and subscription-based services, the constant coordination, 
              lack of quality control, and communication gaps made scaling impossible.
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-700">Goal:</p>
              <p className="text-gray-600">Build a managed delivery team and support structure to free up 
              Marlon's time, retain more clients, and expand Medz Media's service offerings.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              ✅ Our Solution
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hireshore deployed a full Delivery Pod plus support add-ons, all wrapped into a fixed monthly 
              subscription under $499, eliminating the cost and chaos of hiring freelancers.
            </p>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                  <span className="text-gray-600">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Tools & Integration:</strong> ClickUp, WhatsApp, WordPress, GHL, Figma, Adobe Suite
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6">
                "The best experience I've had working with a remote team. Websites came out fantastic—fast, 
                secure, beautifully designed. The team's energy, proactiveness, and suggestions make them feel 
                like a real part of my business. I've worked with freelancers before—this is a whole different level. 
                I've referred Hireshore to friends, clients, and even my full-time employer. It's truly been a 
                game changer for both my business and personal life."
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900">Marlon M.</p>
                  <p className="text-sm text-gray-600">Founder, Medz Media</p>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/43qQdLve5Ps"
                title="Medz Media Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Long-term Partnership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-xl p-8 border shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔁 Long-Term Collaboration</h3>
            <p className="text-gray-600 leading-relaxed">
              Marlon is now working closely with Hireshore not just for Medz Media, but also for new service 
              lines across Australia and South America. With plans to add SEO and automation specialists, this 
              partnership continues to evolve beyond a simple outsourcing model—it's a full growth alliance, 
              including a new white-label collaboration: CrewLinker, powered by Hireshore's backend delivery.
            </p>
          </div>
        </motion.div>
      </motion.section>

      <SiteFooter />
    </div>
  );
};

export default MedzMediaCaseStudy;