import { motion } from "framer-motion";
import { Star, Users, Clock, MessageSquare, Zap } from "lucide-react";

const SwimplySuccessSection = () => {
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

  return (
    <motion.section 
      className="max-w-6xl mx-auto py-12 md:py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Powering Swimply's Customer Success
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our 7 dedicated USA timezone customer representatives have been delivering exceptional support, 
          maintaining top leaderboard positions with outstanding CSAT scores and response times.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
    </motion.section>
  );
};

export default SwimplySuccessSection;