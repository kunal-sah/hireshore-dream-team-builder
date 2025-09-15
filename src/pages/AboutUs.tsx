import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Zap, Shield, TrendingUp } from 'lucide-react';
import NavBar from '../components/NavBar';
import SiteFooter from '../components/SiteFooter';

const AboutUs = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Team Members",
      description: "Skilled professionals across multiple domains"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistent delivery excellence"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "Client business expansion with our pods"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We exist to help businesses scale efficiently through dedicated offshore delivery pods."
    },
    {
      icon: Heart,
      title: "People-First",
      description: "Our team members are our greatest asset. We invest in their growth and well-being."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, predictable delivery that you can count on, every single time."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously improve our processes and embrace new technologies."
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Founded",
      description: "Started with a vision to transform offshore development"
    },
    {
      year: "2020",
      title: "First Delivery Pods",
      description: "Launched our revolutionary pod-based delivery model"
    },
    {
      year: "2021", 
      title: "Global Expansion",
      description: "Expanded to serve clients across USA, UK, and Australia"
    },
    {
      year: "2022",
      title: "500+ Team Members",
      description: "Grew to over 500 skilled professionals"
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated AI tools to accelerate delivery and quality"
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Recognized as a leading offshore delivery partner"
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <title>About Us - Hireshore | Offshore Development Experts</title>
      <meta name="description" content="Learn about Hireshore's mission to help businesses scale through dedicated offshore delivery pods. 500+ team members serving 50+ countries." />
      
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Hireshore
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We're on a mission to help businesses scale efficiently through dedicated offshore delivery pods. 
                Our approach combines the best talent with proven processes to deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Hireshore was born from a simple observation: most businesses struggle to scale their development 
                    and creative operations efficiently. Traditional freelancer marketplaces are unpredictable, 
                    and building in-house teams is expensive and time-consuming.
                  </p>
                  <p>
                    We pioneered the "delivery pod" model - dedicated, cross-functional teams that work exclusively 
                    for your business. This approach combines the cost-efficiency of offshore talent with the 
                    reliability and integration of an in-house team.
                  </p>
                  <p>
                    Today, we're proud to serve over 200 clients worldwide, from early-stage startups to 
                    Fortune 500 companies, helping them scale their operations without the traditional headaches 
                    of remote team management.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To democratize access to world-class development and creative talent, 
                    enabling businesses of all sizes to compete and scale globally.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and team members.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                From a small startup to a global delivery partner - here's how we've grown.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                        <div className="text-xl font-bold text-gray-900 mb-2">{item.title}</div>
                        <div className="text-gray-600">{item.description}</div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our delivery pods can help scale your business efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Get In Touch
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 font-semibold px-8 py-3 rounded-lg transition-colors"
                  onClick={() => window.location.href = '/case-studies'}
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default AboutUs;