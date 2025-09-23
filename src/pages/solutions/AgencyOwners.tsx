import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, TrendingUp, Users, CheckCircle, Clock, Target } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const AgencyOwners: React.FC = () => {
  const challenges = [
    { icon: Users, title: "Scaling Without Quality Loss", description: "Maintain high standards while growing your team and client base" },
    { icon: Clock, title: "Reducing Operational Overhead", description: "Spend less time on admin and more time on strategy and growth" },
    { icon: Target, title: "Improving Profit Margins", description: "Increase profitability while delivering exceptional client results" },
    { icon: TrendingUp, title: "Predictable Growth", description: "Build systems that enable consistent, sustainable agency growth" }
  ];

  const solutions = [
    { title: "White-Label Development Teams", description: "Expand capacity with skilled developers under your brand" },
    { title: "Creative & Design Pods", description: "On-demand creative teams for branding, ads, and content" },
    { title: "Client Delivery Automation", description: "Streamlined workflows for faster project completion" },
    { title: "Business Operations Support", description: "Back-office support to handle administrative tasks" },
    { title: "Sales & Marketing Systems", description: "Lead generation and client acquisition automation" },
    { title: "Quality Assurance Programs", description: "Ensure consistent quality across all client deliverables" }
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
                <Building className="h-4 w-4" />
                <span>For Agency Owners</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Scale Your Agency
              <span className="text-primary"> Without the Headaches</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop being the bottleneck in your own agency. Our delivery pods help you scale operations, 
              improve margins, and deliver exceptional results while you focus on growth and strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Scale My Agency
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
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <div className="text-gray-600">Average Agency Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-gray-600">Faster Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Agency Owner Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of running and scaling a successful agency
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
              Agency Growth Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete solutions designed specifically for agency owners looking to scale
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
              How We Help You Scale
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agency Audit</h3>
              <p className="text-gray-600">We analyze your current operations, bottlenecks, and growth opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solution</h3>
              <p className="text-gray-600">Build tailored delivery pods that integrate seamlessly with your agency</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale & Optimize</h3>
              <p className="text-gray-600">Continuously optimize operations as your agency grows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-medium text-gray-900 mb-6">
            "HireShore transformed our agency. We went from struggling to deliver projects on time to scaling 300% 
            in 12 months. Their pods handle the heavy lifting while we focus on strategy and client relationships."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-gray-600">Founder, Digital Growth Agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Agency?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 200+ agency owners who've scaled their operations with HireShore delivery pods
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Configure My Solution
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

export default AgencyOwners;