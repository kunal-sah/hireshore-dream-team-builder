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
import founderImage from '@/assets/kunal-sah-founder.jpeg';
import { SEOHead } from "@/components/SEOHead";

const AboutUs = () => {
  const stats = [
    {
      icon: Users,
      number: "400+",
      label: "Team Members",
      description: "Skilled professionals across multiple domains"
    },
    {
      icon: Globe,
      number: "10+",
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
      title: "Scaled Across Continents",
      description: "Crossed 40+ active pods serving clients across the UK, AU, EU & US, helping businesses save $1M+ annually per pod while maintaining premium delivery quality."
    },
    {
      year: "2026",
      title: "Launched Direct Hire Services",
      description: "Hireshore launched Direct Hire — a recruitment service that places vetted Nepali talent directly into clients' in-house teams as full-time employees, with a one-time placement fee and no ongoing management overhead. Today we serve 40+ clients with 60+ pods and a 400+ strong talent bench."
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <SEOHead
        canonicalUrl="https://hireshore.co/about-us"
        title="About Us | Meet the Team Behind Hireshore"
        description="Learn about Hireshore's mission, team, and values. Founded to help startups and agencies scale with managed delivery pods."
        keywords="about hireshore, team, mission, remote team management"
      />
      
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
        <section className="bg-surface py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Hireshore
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 px-4">
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
                  className="bg-white rounded-2xl p-6 shadow-lg border border-border text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground/80 mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hireshore was born from a simple observation: most businesses struggle to scale their back-office
                    and creative operations efficiently. Traditional freelancer marketplaces are unpredictable,
                    and building in-house teams is expensive and time-consuming.
                  </p>
                  <p>
                    We pioneered the "delivery pod" model — dedicated, cross-functional teams that work exclusively
                    for your business. This approach combines the cost-efficiency of offshore talent with the
                    reliability and integration of an in-house team.
                  </p>
                  <p>
                    In 2026 we extended this with Direct Hire, our recruitment service that places vetted Nepali
                    talent directly into clients' in-house teams as full-time employees — with a one-time placement
                    fee and no ongoing management overhead. Today we serve 40+ clients across the UK, AU, EU and US.
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
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-primary-foreground/90">
                    To democratize access to world-class back-office and creative talent,
                    enabling businesses of all sizes to compete and scale globally.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Message from Founder */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Message from the Founder
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    When I started Hireshore in 2021, I had a simple vision: to bridge the gap between talented professionals in Nepal and businesses around the world that needed quality work at a fair price.
                  </p>
                  <p className="text-lg">
                    Growing up in Nepal, I witnessed incredible talent that often went unnoticed on the global stage. At the same time, I saw businesses struggling with high costs and unreliable freelancers. I knew there had to be a better way.
                  </p>
                  <p className="text-lg">
                    In 2026, Hireshore has grown beyond my initial expectations. We've built 60+ dedicated pods, helped clients save over $1M annually per business, and created meaningful careers for 400+ talented individuals. This year we also launched Direct Hire — placing vetted Nepali talent straight into our clients' in-house teams with a one-time recruitment fee.
                  </p>
                  <p className="text-lg">
                    Our journey is just beginning. We're committed to continuing to innovate, to provide exceptional value to our clients, and to create opportunities for talented professionals in Nepal and beyond.
                  </p>
                  <div className="pt-4">
                    <p className="font-display text-xl font-semibold text-foreground">Kunal Sah</p>
                    <p className="text-muted-foreground">Founder & CEO, Hireshore</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Nepal</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                    <img 
                      src={founderImage} 
                      alt="Kunal Sah, Founder of Hireshore" 
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
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
                <YouTubeFacade
                  videoId="hCa98Yfnt-U"
                  title="How Agency Owners Can Delegate & Scale Without Hiring Full-Time Staff"
                  className="aspect-video bg-gray-100 rounded-xl overflow-hidden"
                />
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