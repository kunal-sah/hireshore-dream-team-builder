import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, DollarSign, Users, CheckCircle, Clock, Zap, Star } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Founders: React.FC = () => {
  useEffect(() => {
    // Add JSON-LD for founders solution page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Solutions for Founders & Startups",
      "description": "Build your startup faster and smarter with world-class talent at a fraction of traditional costs.",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://hireshore.co/solutions/founders',
      "mainEntity": {
        "@type": "Service",
        "name": "Startup Solutions",
        "description": "Complete startup support from idea to launch and beyond",
        "provider": {
          "@type": "Organization",
          "name": "Hireshore",
          "url": "https://hireshore.co"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const challenges = [
    { icon: DollarSign, title: "Bootstrap Budget Constraints", description: "Get enterprise-quality work without enterprise costs" },
    { icon: Clock, title: "Speed to Market", description: "Launch faster and beat competitors to market" },
    { icon: Users, title: "Finding the Right Talent", description: "Access specialized skills without long hiring processes" },
    { icon: Zap, title: "Scaling Quickly", description: "Rapidly expand capacity as your startup grows" }
  ];

  const solutions = [
    { title: "MVP Development", description: "Rapid prototyping and minimum viable product development" },
    { title: "Brand & Identity Creation", description: "Complete brand package including logo, guidelines, and assets" },
    { title: "Growth Marketing Setup", description: "Performance marketing campaigns and conversion optimization" },
    { title: "Product Design & UX", description: "User research, wireframing, and polished UI design" },
    { title: "Technical Infrastructure", description: "Scalable backend systems and cloud architecture" },
    { title: "Fundraising Support", description: "Pitch decks, financial models, and investor materials" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 pt-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/solutions">Solutions</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>For Founders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Rocket className="h-4 w-4" />
                <span>For Founders/Startups</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Startup
              <span className="text-primary"> Faster & Smarter</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop wasting time on hiring and managing. Get access to world-class talent that helps you 
              build, launch, and scale your startup at a fraction of the traditional cost.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/configure-pod"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Launch My Startup Pod
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border-2 border-primary text-primary font-semibold py-4 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book Founder Call
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
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-gray-600">Faster to Market</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Startups Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Startup Founder Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique pressures and constraints of building a startup
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
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete startup support from idea to launch and beyond
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
              From Idea to Launch in Record Time
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Validate & Plan</h3>
              <p className="text-gray-600">We help validate your idea and create a detailed launch plan</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build & Design</h3>
              <p className="text-gray-600">Rapidly develop your MVP with professional design and development</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch & Scale</h3>
              <p className="text-gray-600">Launch your startup and scale with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Story: PropertyStack</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Startup Hiring Success
              </div>
              <h3 className="text-2xl font-bold mb-4">15+ Team Members Hired in Under 3 Weeks Each</h3>
              <p className="text-gray-600 mb-6">
                PropertyStack needed to rapidly scale their product and support teams without breaking the bank. Our recruitment-as-a-service helped them hire 15+ quality team members in just one year.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Reduced hiring time from 1.5 months to under 3 weeks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>$1M+ annual savings vs. local hiring costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>Full-stack developers, QA engineers, designers & support</span>
                </div>
              </div>
              <Link to="/case-studies/property-stack" className="inline-flex items-center text-primary font-semibold hover:underline">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-gray-600">Quality hires in 1 year</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">&lt;3</div>
                  <div className="text-sm text-gray-600">Weeks per hire</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$1M+</div>
                  <div className="text-sm text-gray-600">Annual savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Delivery speed up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-center text-gray-900 mb-6 italic">
              "We've hired over 15 people through Hireshore in just a year - and could've done 10 more. The hiring process is much easier now with resume videos and pre-vetted candidates. Compared to freelancers or other markets, the quality from Nepal has been significantly better. You guys have helped us grow fast and we've referred you to many of our partners."
            </blockquote>
            <div className="text-center mb-8">
              <div className="font-semibold text-gray-900">Ryan Jope</div>
              <div className="text-gray-600">Founder, PropertyStack</div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/9xMVgH1j9XE"
                  title="PropertyStack Testimonial - Ryan Jope"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Launch Your Startup?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 500+ founders who've launched successful startups with HireShore
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/configure-pod"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              Start My Startup Pod
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

export default Founders;