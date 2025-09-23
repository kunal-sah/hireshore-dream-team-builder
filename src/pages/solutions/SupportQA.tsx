import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, Shield, Clock, CheckCircle, Users, Star } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const SupportQA: React.FC = () => {
  const benefits = [
    { icon: Clock, title: "24/7 Support Coverage", description: "Round-the-clock assistance for your customers" },
    { icon: Star, title: "99.5% Quality Assurance", description: "Rigorous testing and quality control processes" },
    { icon: Shield, title: "Risk-Free Operations", description: "Continuous monitoring and issue prevention" },
    { icon: Users, title: "Dedicated Support Team", description: "Experienced professionals focused on your success" }
  ];

  const supportServices = [
    { title: "Customer Support", description: "Multi-channel support via chat, email, and phone" },
    { title: "Quality Assurance Testing", description: "Comprehensive QA testing for websites and applications" },
    { title: "Bug Tracking & Resolution", description: "Systematic issue identification and fixes" },
    { title: "User Experience Testing", description: "Usability testing and optimization recommendations" },
    { title: "Performance Monitoring", description: "Continuous monitoring of website speed and uptime" },
    { title: "Documentation & Training", description: "User guides, FAQs, and team training materials" }
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
                <Headphones className="h-4 w-4" />
                <span>Support & QA</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ongoing Support & QA
              <span className="text-primary"> That Never Sleeps</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ensure flawless operations with 24/7 support coverage and 99.5% quality assurance. 
              Our dedicated team keeps your business running smoothly while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Start Support Pod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book a Consultation
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
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-gray-600">Quality Assurance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">&lt;2hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Support & QA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional support and quality assurance that keeps your business running flawlessly
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
              Complete Support & QA Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support solutions to keep your operations running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
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
              Our Support & QA Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Setup & Integration</h3>
              <p className="text-gray-600">We integrate with your systems and establish monitoring protocols</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitor & Support</h3>
              <p className="text-gray-600">24/7 monitoring and immediate response to issues and customer inquiries</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimize & Improve</h3>
              <p className="text-gray-600">Continuous improvement based on data and feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for 24/7 Support & QA?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ensure flawless operations with professional support that never sleeps
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Configure Support Pod
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

export default SupportQA;