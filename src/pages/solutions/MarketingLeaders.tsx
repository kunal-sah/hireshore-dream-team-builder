import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart, Users, CheckCircle, TrendingUp, Zap } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const MarketingLeaders: React.FC = () => {
  const challenges = [
    { icon: Target, title: "Meeting Aggressive Growth Targets", description: "Deliver results that align with business objectives and KPIs" },
    { icon: Users, title: "Building High-Performance Teams", description: "Scale your marketing team without compromising quality" },
    { icon: BarChart, title: "Proving Marketing ROI", description: "Demonstrate clear attribution and business impact" },
    { icon: TrendingUp, title: "Staying Ahead of Trends", description: "Keep up with rapidly evolving marketing channels and tactics" }
  ];

  const solutions = [
    { title: "Performance Marketing Teams", description: "Expert PPC, social media, and conversion optimization specialists" },
    { title: "Content & Creative Production", description: "Scalable content creation for all channels and campaigns" },
    { title: "Marketing Operations & Automation", description: "CRM setup, lead scoring, and workflow automation" },
    { title: "Analytics & Attribution Setup", description: "Advanced tracking, reporting, and performance measurement" },
    { title: "Growth Strategy & Consulting", description: "Strategic planning and campaign optimization guidance" },
    { title: "Brand & Creative Development", description: "Brand strategy, creative assets, and campaign materials" }
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
                <Target className="h-4 w-4" />
                <span>For Marketing Leaders</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hit Your Growth Targets
              <span className="text-primary"> Every Quarter</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop struggling with resource constraints and missed deadlines. Our marketing pods provide 
              the expertise and capacity you need to consistently deliver results and exceed KPIs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Scale My Marketing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book Strategy Call
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
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-gray-600">Faster Campaign Launch</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-gray-600">Better ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-gray-600">Target Achievement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Leader Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the pressure of delivering consistent growth with limited resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 transition-colors">
                <challenge.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Solutions That Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete marketing support designed for ambitious marketing leaders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
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
              How We Support Marketing Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Alignment</h3>
              <p className="text-gray-600">We align our pods with your business objectives and KPIs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Execution</h3>
              <p className="text-gray-600">Deploy specialized teams that hit the ground running</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <p className="text-gray-600">Continuously optimize campaigns and report on results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-medium text-gray-900 mb-6">
            "HireShore's marketing pods gave me the team I needed to hit aggressive growth targets. 
            We increased our lead volume by 300% and improved conversion rates by 40% in just 6 months."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">Michael Rodriguez</div>
              <div className="text-gray-600">VP Marketing, SaaS Startup</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Exceed Your Targets?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join marketing leaders who consistently hit their KPIs with HireShore pods
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Configure Marketing Pod
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default MarketingLeaders;