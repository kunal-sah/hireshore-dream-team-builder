import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, RotateCcw, DollarSign, Target } from 'lucide-react';
import { CaseStudyLayout } from '@/components/ui/case-study-layout';

const AffectiveCareSuccessSection = () => {
  const stats = [
    {
      icon: Clock,
      number: "40+",
      label: "Hours Saved Weekly",
      description: "From inefficient delegation and micro-management"
    },
    {
      icon: Zap,
      number: "5",
      label: "Days to Rebrand",
      description: "New website launched with complete rebranding"
    },
    {
      icon: RotateCcw,
      number: "40+",
      label: "Category Pages",
      description: "Shopify pages designed & optimized for SEO"
    },
    {
      icon: DollarSign,
      number: "100%",
      label: "Cost Efficiency",
      description: "Flat subscription replacing multiple freelancers"
    }
  ];

  const services = [
    "WordPress Development & UI Design",
    "GoHighLevel Funnel Building",
    "Shopify Product Management",
    "Project Management & QA Support",
    "AI-Powered UI Design Acceleration",
    "SEO Category Page Optimization"
  ];

  return (
    <CaseStudyLayout
      title="Scaling NDIS Service Delivery & E-Commerce Operations for Affective Care"
      client="Affective Care"
      industry="NDIS Service Provider"
      location="Sydney, Australia"
    >

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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

        {/* Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold">🚩</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Affective Care was growing rapidly, but managing digital assets across multiple service lines and stores became increasingly difficult. The team relied on freelancers for WordPress landing page development and GoHighLevel automation - often billed hourly at inflated rates, with delayed delivery and lack of transparency.
              </p>
              <p>
                Their visual assets came from a Malaysian subscription design service, but it was costly and limited in flexibility and output. Managing their Shopify store with over 4,000 products was becoming a daily bottleneck.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="font-semibold text-blue-900">Goal:</p>
                <p className="text-blue-800">Establish a reliable, full-time delivery team to handle ongoing web development, design, and e-commerce operations for their growing NDIS ecosystem.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p className="font-semibold text-gray-800">
                A Custom Delivery Pod + Shopify Support Team
              </p>
              <p>
                Hireshore deployed a dedicated delivery pod to manage all of Affective Care's tech and marketing execution under one flat monthly subscription.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Services Included:</p>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results & Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Key Achievements</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>Focus shifted from micro-managing execution to scaling new services & launching ad campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>Tasks that used to take weeks now get done in days</span>
                </li>
                <li className="flex items-start gap-3">
                  <RotateCcw className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>Shopify assistants transformed product catalog management</span>
                </li>
              </ul>

            </div>

          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-4">🔁 Looking Ahead</h4>
            <p className="text-lg">
              Hireshore is now collaborating with Affective Care's marketing team to launch inbound lead campaigns, scale their Shopify operations, roll out rebranding across multiple NDIS brands, and expand SEO and automation efforts across Australia.
            </p>
          </div>
        </motion.div>
    </CaseStudyLayout>
  );
};

export default AffectiveCareSuccessSection;