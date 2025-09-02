import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Clock, TrendingUp, DollarSign, Zap } from 'lucide-react';
import { CaseStudyLayout } from '@/components/ui/case-study-layout';

const PropertyStackSuccessSection = () => {
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
      icon: DollarSign,
      number: "$1M+",
      label: "Annual Savings",
      description: "Estimated cost savings vs local hiring"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Delivery Speed",
      description: "Increased delivery speed & user satisfaction"
    }
  ];

  const roles = [
    "Full-stack & React Developers",
    "QA Engineers (3+ hires)",
    "UX/UI Designers",
    "Client Success & Tech Support Agents",
    "Data Entry & Admin Support",
    "Executive Assistant",
    "Engineering Team Lead"
  ];

  return (
    <CaseStudyLayout
      title="Building a Scalable Product & Support Team for PropertyStack"
      client="PropertyStack"
      industry="SaaS Property Rental Management"
      location="Brisbane, Australia"
    >

        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-red-50 border border-red-100 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🚩</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            When PropertyStack first connected with Hireshore, they were a lean 5-member startup team, using no-code tools and working with freelancers to build their MVP. As their platform evolved, it became clear that scaling with freelancers and solo devs lacked long-term efficiency, quality, and cohesion.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4 font-semibold">
            Goal: Build a reliable in-house team of developers, QA testers, support staff, and admin specialists—without burning through limited startup capital.
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">The Solution: A Full Offshore Delivery & Support Pod</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Hireshore delivered a full-stack recruitment-as-a-service solution, helping PropertyStack onboard 15+ high-quality team members across engineering, design, QA, client success, and operations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Roles Hired:</h4>
              <ul className="space-y-2">
                {roles.map((role, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Process:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Headhunting from internal talent pool, forums, and communities</li>
                <li>• Multi-stage technical screening with video intros and task assessments</li>
                <li>• Candidate shortlist presented with video profiles for faster reviews</li>
                <li>• Close sync with PropertyStack's CTO and support team lead</li>
                <li>• Assistance with contracts, onboarding, timezone alignment</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">📈 Results</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Additional Results */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">QA team helped squash bugs and improve UX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Support pod built SOPs and responded to clients faster</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Executive assistant freed up leadership time</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Long-Term Partnership:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">PropertyStack has referred multiple clients to Hireshore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Plans for 10–20 more hires in 2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Expanding across PropertyStack, Alara brands</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic">
            "We've hired over 15 people through Hireshore in just a year—and could've done 10 more. The hiring process is much easier now with resume videos and pre-vetted candidates. Compared to freelancers or other markets, the quality from Nepal has been significantly better. You guys have helped us grow fast and we've referred you to many of our partners."
          </blockquote>
          
          <div className="text-center mb-8">
            <div className="font-bold text-gray-900 text-lg">Ryan Jope</div>
            <div className="text-gray-600">Founder of PropertyStack</div>
          </div>

        </motion.div>
    </CaseStudyLayout>
  );
};

export default PropertyStackSuccessSection;