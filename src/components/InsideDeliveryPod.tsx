import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Code, Palette, Server, Shield, CheckCircle, Zap, Calendar } from 'lucide-react';

const InsideDeliveryPod = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const podTypes = [
    {
      title: 'Agency Pod',
      description: 'Perfect for client work and creative deliverables',
      roles: [
        { icon: Users, role: 'Project Manager', description: 'Coordinates workflow & client communication' },
        { icon: Palette, role: 'Designer', description: 'UI/UX design & brand consistency' },
        { icon: Code, role: 'Web Developer', description: 'Frontend & backend development' },
        { icon: Shield, role: 'QA Specialist', description: 'Testing & quality assurance' }
      ],
      outcomes: [
        'On-time delivery',
        'Brand consistency',
        'Fewer revisions',
        'Happy clients'
      ],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Product Builder Pod',
      description: 'Ideal for feature development and product scaling',
      roles: [
        { icon: Users, role: 'Project Manager', description: 'Sprint planning & stakeholder alignment' },
        { icon: Code, role: 'Frontend Developer', description: 'React, Vue, Angular development' },
        { icon: Server, role: 'Backend Developer', description: 'APIs, databases & infrastructure' },
        { icon: Shield, role: 'QA Engineer', description: 'Automated testing & deployment' }
      ],
      outcomes: [
        'Faster features',
        'Cleaner sprints',
        'Predictable releases',
        'Scalable architecture'
      ],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inside a Delivery Pod</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our specialized teams fit into agency and startup contexts
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {podTypes.map((podType, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${podType.gradient} p-6`}>
                <h3 className="text-2xl font-bold text-white mb-2">{podType.title}</h3>
                <p className="text-white/90">{podType.description}</p>
              </div>

              {/* Roles */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Team Roles
                </h4>
                <div className="space-y-3 mb-6">
                  {podType.roles.map((role, roleIndex) => {
                    const IconComponent = role.icon;
                    return (
                      <div key={roleIndex} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{role.role}</div>
                          <div className="text-sm text-gray-600">{role.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Outcomes */}
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Key Outcomes
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {podType.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InsideDeliveryPod;