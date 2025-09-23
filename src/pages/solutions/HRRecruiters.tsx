import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Search, Clock, CheckCircle, Target, Shield } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const HRRecruiters: React.FC = () => {
  const challenges = [
    { icon: Search, title: "Finding Quality Candidates", description: "Access pre-vetted talent pools and specialized skills" },
    { icon: Clock, title: "Reducing Time-to-Hire", description: "Accelerate hiring with streamlined processes" },
    { icon: Target, title: "Meeting Hiring Quotas", description: "Consistently fill positions and meet recruitment targets" },
    { icon: Shield, title: "Quality Assurance", description: "Ensure candidate quality and cultural fit" }
  ];

  const solutions = [
    { title: "Talent Sourcing & Screening", description: "Pre-vetted candidates from our global talent network" },
    { title: "Recruitment Process Outsourcing", description: "End-to-end recruitment services and candidate management" },
    { title: "Technical Skills Assessment", description: "Comprehensive technical and soft skills evaluation" },
    { title: "Employer Branding", description: "Attract top talent with compelling employer brand content" },
    { title: "Interview Process Optimization", description: "Streamlined interview workflows and assessment tools" },
    { title: "Onboarding Support", description: "Smooth candidate onboarding and integration processes" }
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
                <Users className="h-4 w-4" />
                <span>For HR/Recruiters</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fill Positions Faster
              <span className="text-primary"> With Quality Talent</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop struggling with empty pipelines and lengthy hiring cycles. Our recruitment pods 
              provide pre-vetted candidates and streamlined processes that cut time-to-hire by 60%.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Start Recruitment Pod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book Consultation
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
              <div className="text-gray-600">Faster Time-to-Hire</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Position Fill Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Pre-Vetted Candidates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HR & Recruiter Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the pressure of filling positions with quality candidates quickly
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
              Complete Recruitment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end recruitment support that helps you consistently hit your targets
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
              Our Recruitment Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
              <p className="text-gray-600">We analyze your hiring needs and create detailed candidate profiles</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Source & Screen</h3>
              <p className="text-gray-600">Access our talent network and conduct comprehensive screening</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Present & Support</h3>
              <p className="text-gray-600">Present qualified candidates and support through offer and onboarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-medium text-gray-900 mb-6">
            "HireShore transformed our hiring process. We went from 90-day hiring cycles to 30 days, 
            with better candidate quality. Their recruitment pod is like having a dedicated team of experts."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">Jennifer Martinez</div>
              <div className="text-gray-600">VP People Operations, GrowthCorp</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join HR leaders who consistently exceed hiring targets with our recruitment pods
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Configure Recruitment Pod
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

export default HRRecruiters;