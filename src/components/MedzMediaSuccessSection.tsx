import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, TrendingUp, Heart, Zap, Target } from "lucide-react";

const MedzMediaSuccessSection = () => {
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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Medz Media Success Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scaling delivery, social media & personal efficiency for a Sydney-based digital marketing agency
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-lg font-semibold text-primary">Client: Medz Media</p>
            <p className="text-muted-foreground">Industry: Digital Marketing (SMEs) • Location: Sydney, Australia</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenge & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="bg-card rounded-xl p-8 border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              🚩 The Challenge
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When Marlon, founder of Medz Media, reached out to Hireshore, he was juggling every role—designer, 
              developer, strategist, and sales lead—often working late into the night to keep things afloat. While 
              he had tried using freelance platforms and subscription-based services, the constant coordination, 
              lack of quality control, and communication gaps made scaling impossible.
            </p>
            <div className="mt-4 p-4 bg-primary/5 rounded-lg">
              <p className="font-semibold text-primary">Goal:</p>
              <p className="text-muted-foreground">Build a managed delivery team and support structure to free up 
              Marlon's time, retain more clients, and expand Medz Media's service offerings.</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              ✅ Our Solution
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hireshore deployed a full Delivery Pod plus support add-ons, all wrapped into a fixed monthly 
              subscription under $499, eliminating the cost and chaos of hiring freelancers.
            </p>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-secondary/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Tools & Integration:</strong> ClickUp, WhatsApp, WordPress, GHL, Figma, Adobe Suite
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "The best experience I've had working with a remote team. Websites came out fantastic—fast, 
                secure, beautifully designed. The team's energy, proactiveness, and suggestions make them feel 
                like a real part of my business. I've worked with freelancers before—this is a whole different level. 
                I've referred Hireshore to friends, clients, and even my full-time employer. It's truly been a 
                game changer for both my business and personal life."
              </blockquote>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-foreground">Marlon M.</p>
                  <p className="text-sm text-muted-foreground">Founder, Medz Media</p>
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-card rounded-xl p-8 border shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">🔁 Long-Term Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Marlon is now working closely with Hireshore not just for Medz Media, but also for new service 
              lines across Australia and South America. With plans to add SEO and automation specialists, this 
              partnership continues to evolve beyond a simple outsourcing model—it's a full growth alliance, 
              including a new white-label collaboration: CrewLinker, powered by Hireshore's backend delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MedzMediaSuccessSection;