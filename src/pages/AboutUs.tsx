import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Zap, Shield, TrendingUp } from 'lucide-react';
import NavBar from '../components/NavBar';
import SiteFooter from '../components/SiteFooter';
import YouTubeFacade from '../components/ui/youtube-facade';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AboutUs = () => {
  const stats = [
    {
      icon: Users,
      number: "300+",
      label: "Team Members",
      description: "Skilled professionals across multiple domains"
    },
    {
      icon: Globe,
      number: "5+",
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
      year: "2021",
      title: "Launched Locally in Nepal",
      description: "Hireshore was founded with a mission to provide businesses with scalable, cost-effective offshore solutions, starting locally in Nepal."
    },
    {
      year: "2022",
      title: "Expanded Globally",
      description: "We expanded our recruitment services to hire top-tier talent from Nepal for businesses worldwide, enabling clients to scale efficiently without the overhead of hiring full-time, in-house teams."
    },
    {
      year: "2024",
      title: "Hired 300+ Talents",
      description: "We successfully hired over 300 skilled professionals to support our growing client base and expand our service delivery capabilities."
    },
    {
      year: "2024",
      title: "Launched Hireshore Pod Model",
      description: "Hireshore officially launched the Pod Model in 2024, providing clients with dedicated, cross-functional teams that seamlessly integrate into their operations for maximum efficiency."
    },
    {
      year: "2025",
      title: "Current State",
      description: "Trusted across UK, AU, EU & US: Serving 25+ clients from multiple regions with tailored offshore solutions. 40+ Pods Launched: Providing businesses with scalable teams designed to meet specific needs. $1M+ Saved Annually per Business: Clients save significant costs per pod while maintaining high-quality service."
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <title>About Us - Hireshore | Offshore Development Experts</title>
      <meta name="description" content="Learn about Hireshore's mission to help businesses scale through dedicated offshore delivery pods. 500+ team members serving 50+ countries." />
      
      <NavBar />
      
      <main className="flex-1">
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
                  <BreadcrumbPage>About Us</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Hireshore
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
                We're on a mission to help businesses scale efficiently through dedicated offshore delivery pods. 
                Our approach combines the best talent with proven processes to deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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

        {/* Video Section */}
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
                How We Help You Scale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Watch this video to understand how agency owners can delegate and scale their operations 
                without the overhead of hiring full-time staff.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <YouTubeFacade
                    videoId="hCa98Yfnt-U"
                    title="How Agency Owners Can Delegate & Scale Without Hiring Full-Time Staff"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How Agency Owners Can Delegate & Scale Without Hiring Full-Time Staff
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn the strategies and frameworks we use to help agencies scale efficiently
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
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
                From a local startup to a growing global delivery partner, here's how Hireshore has evolved:
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