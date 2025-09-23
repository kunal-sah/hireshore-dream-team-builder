import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Clock, TrendingUp, CheckCircle, Users, Zap } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const AutomateOps: React.FC = () => {
  const benefits = [
    { icon: Clock, title: "Save 20+ hours weekly", description: "Automate repetitive tasks and focus on growth" },
    { icon: TrendingUp, title: "Reduce operational costs by 60%", description: "Eliminate manual processes and human error" },
    { icon: Zap, title: "Scale without hiring", description: "Handle 10x more volume with smart automation" },
    { icon: Users, title: "Improve team satisfaction", description: "Free your team from boring, repetitive work" }
  ];

  const automationServices = [
    { title: "CRM & Lead Management", description: "Automated lead scoring, nurturing, and handoffs" },
    { title: "Email & Marketing Automation", description: "Drip campaigns, segmentation, and personalization" },
    { title: "Data Entry & Processing", description: "Automated data collection, cleaning, and reporting" },
    { title: "Customer Support", description: "Chatbots, ticket routing, and response automation" },
    { title: "Workflow Optimization", description: "Process mapping and bottleneck elimination" },
    { title: "Integration & API Setup", description: "Connect your tools for seamless data flow" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Settings className="h-4 w-4" />
                <span>Operations Automation</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Automate Your Operations,
              <span className="text-primary"> Scale Without Limits</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop wasting time on repetitive tasks. Our automation specialists build custom workflows 
              that save 20+ hours weekly and reduce operational costs by 60%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Start Automation Pod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Hours Saved Weekly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-gray-600">Volume Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Automate Your Operations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with intelligent automation that works 24/7
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automation Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end automation solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Automate Your Operations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Audit & Analysis</h3>
              <p className="text-gray-600">We analyze your current processes and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Build</h3>
              <p className="text-gray-600">Our specialists create tailored automation workflows for your business</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy & Optimize</h3>
              <p className="text-gray-600">We implement, test, and continuously optimize your automated systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start saving 20+ hours per week with intelligent automation workflows
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Configure Automation Pod
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default AutomateOps;