import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Users, CheckCircle, Zap, BarChart } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const SalesPipeline: React.FC = () => {
  const benefits = [
    { icon: TrendingUp, title: "5x more qualified leads", description: "Advanced targeting and lead scoring systems" },
    { icon: Target, title: "60% higher conversion rates", description: "Optimized funnels and nurture sequences" },
    { icon: Zap, title: "Automate lead generation", description: "24/7 lead capture and qualification" },
    { icon: BarChart, title: "Full pipeline visibility", description: "Real-time tracking and analytics" }
  ];

  const pipelineServices = [
    { title: "Lead Generation & Prospecting", description: "Multi-channel outreach and lead capture systems" },
    { title: "Lead Scoring & Qualification", description: "Automated systems to prioritize your best prospects" },
    { title: "Sales Funnel Optimization", description: "High-converting landing pages and nurture sequences" },
    { title: "CRM Setup & Management", description: "Streamlined pipeline management and automation" },
    { title: "Email & SMS Campaigns", description: "Personalized outreach that converts prospects" },
    { title: "Analytics & Reporting", description: "Track performance and optimize for better results" }
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
                <TrendingUp className="h-4 w-4" />
                <span>Sales Pipeline</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fill Your Sales Pipeline
              <span className="text-primary"> On Autopilot</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop chasing leads. Our specialists build automated systems that generate 5x more qualified 
              prospects and increase conversion rates by 60%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Start Pipeline Pod
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
              <div className="text-4xl font-bold text-primary mb-2">5x</div>
              <div className="text-gray-600">More Qualified Leads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Higher Conversion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Automated Lead Generation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Sales Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a predictable pipeline that delivers consistent, high-quality leads
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
              Complete Pipeline Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lead generation to conversion optimization, we handle every aspect
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pipelineServices.map((service, index) => (
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
              How We Fill Your Pipeline
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy & Setup</h3>
              <p className="text-gray-600">We analyze your target market and build a comprehensive lead generation strategy</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execute & Generate</h3>
              <p className="text-gray-600">Deploy multi-channel campaigns and automated systems to capture leads</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nurture & Convert</h3>
              <p className="text-gray-600">Qualify leads and guide them through optimized conversion funnels</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fill Your Pipeline?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start generating 5x more qualified leads with our proven systems
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Configure Pipeline Pod
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

export default SalesPipeline;