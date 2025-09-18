import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Import thumbnails
import digitalSixThumbnail from '../assets/digital-six-thumbnail.jpg';
import medzMediaThumbnail from '../assets/thumbnails/medz-media-thumbnail-v2.jpg';
import swimplyThumbnail from '../assets/thumbnails/swimply-thumbnail-v2.jpg';
import propertyStackThumbnail from '../assets/thumbnails/propertystack-thumbnail-v2.jpg';
import affectiveCareThumbnail from '../assets/thumbnails/affective-care-thumbnail-v2.jpg';
import uncommonSolutionsThumbnail from '../assets/thumbnails/uncommon-solutions-thumbnail-v2.jpg';
import coveDigitalThumbnail from '../assets/thumbnails/cove-digital-thumbnail-v2.jpg';
import digitalSixLogo from '../assets/digital-six-logo.png';
 
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  result: string;
  metrics: string;
  thumbnail: string;
  tags: string[];
  readTime: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'digital-six',
    title: 'Scaling High-Performance Offshore Team for Digital Six',
    client: 'Digital Six',
    industry: 'Marketing & Advertising',
    challenge: 'Replace unreliable freelancers with dependable offshore team',
    result: 'Scaled from 22 to 47 team members, saved $1M+ monthly',
    metrics: '250% team growth',
    thumbnail: digitalSixThumbnail,
    tags: ['Team Scaling', 'Cost Reduction', 'Offshore Development'],
    readTime: '6 min'
  },
  {
    id: 'medz-media',
    title: 'From Burnout to Work-Life Balance for Medz Media',
    client: 'Medz Media',
    industry: 'Digital Marketing',
    challenge: 'Founder working past 2 AM, struggling to scale operations',
    result: '40+ hours saved weekly, 50% client retention increase',
    metrics: '40+ hours saved weekly',
    thumbnail: medzMediaThumbnail,
    tags: ['Work-Life Balance', 'Operations', 'Client Retention'],
    readTime: '5 min'
  },
  {
    id: 'swimply',
    title: 'Powering Customer Success for Swimply',
    client: 'Swimply',
    industry: 'Marketplace Platform',
    challenge: 'Scale customer support operations with dedicated USA timezone reps',
    result: '7 USA timezone reps delivering 95% CSAT scores and #1 leaderboard performance',
    metrics: '95% CSAT Score',
    thumbnail: swimplyThumbnail,
    tags: ['Customer Support', 'USA Timezone', 'Performance'],
    readTime: '5 min'
  },
  {
    id: 'property-stack',
    title: 'Building a Scalable Product & Support Team for PropertyStack',
    client: 'PropertyStack',
    industry: 'SaaS Property Rental Management',
    challenge: 'Build reliable in-house team without burning startup capital',
    result: '15+ full-time hires onboarded, $1M+ annual savings vs local hiring',
    metrics: '15+ Full-time Hires',
    thumbnail: propertyStackThumbnail,
    tags: ['Team Building', 'Cost Savings', 'PropertyTech'],
    readTime: '6 min'
  },
  {
    id: 'affective-care',
    title: 'Scaling NDIS Service Delivery & E-Commerce for Affective Care',
    client: 'Affective Care',
    industry: 'NDIS Service Provider',
    challenge: 'Establish reliable delivery team for web development and e-commerce operations',
    result: '40+ hours saved weekly, 5-day rebranding, 40+ Shopify pages optimized',
    metrics: '40+ Hours Saved Weekly',
    thumbnail: affectiveCareThumbnail,
    tags: ['NDIS', 'E-commerce', 'Web Development'],
    readTime: '6 min'
  },
  {
    id: 'uncommon-solutions',
    title: 'Streamlining Creative Delivery & Scaling Client Projects for Uncommon Solutions',
    client: 'Uncommon Solutions',
    industry: 'Digital Marketing & B2B Strategy',
    challenge: 'Unpredictable timelines, unclear pricing, and delivery inconsistency',
    result: '40+ hours/week saved in coordination, transparent delivery with pre-agreed timelines',
    metrics: '40+ Hours Saved Weekly',
    thumbnail: uncommonSolutionsThumbnail,
    tags: ['Creative Delivery', 'Project Management', 'Efficiency'],
    readTime: '7 min'
  },
  {
    id: 'cove-digital',
    title: 'Scaling Website Delivery for Cove Digital with Reliable Migration & SEO Support',
    client: 'Cove Digital',
    industry: 'Digital Marketing Agency',
    challenge: 'Scale website migration operations while maintaining quality and SEO rankings',
    result: '40-page website migration in 2 weeks, 40+ hours/month saved for growth focus',
    metrics: '2 Weeks for 40-Page Migration',
    thumbnail: coveDigitalThumbnail,
    tags: ['Website Migration', 'SEO', 'Agency Growth'],
    readTime: '5 min'
  }
];

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredCases, setFilteredCases] = useState(caseStudies);

  const allTags = ['All', ...Array.from(new Set(caseStudies.flatMap(cs => cs.tags)))];

  useEffect(() => {
    // Add JSON-LD for Case Studies page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Case Studies - Hireshore Success Stories",
      "description": "Explore how Hireshore's managed delivery pods have helped agencies and startups achieve remarkable results. Real case studies with measurable outcomes.",
      "url": "https://www.hireshore.co/case-studies",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": caseStudies.map((cs, index) => ({
          "@type": "Article",
          "position": index + 1,
          "name": cs.title,
          "description": cs.challenge,
          "author": {
            "@type": "Organization",
            "name": "Hireshore"
          }
        }))
      }
    };

    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(jsonLdScript);

    return () => {
      if (document.head.contains(jsonLdScript)) {
        document.head.removeChild(jsonLdScript);
      }
    };
  }, []);

  useEffect(() => {
    let filtered = caseStudies;

    if (searchTerm) {
      filtered = filtered.filter(cs => 
        cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cs.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cs.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cs.challenge.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTag !== 'All') {
      filtered = filtered.filter(cs => cs.tags.includes(selectedTag));
    }

    setFilteredCases(filtered);
  }, [searchTerm, selectedTag]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* SEO Meta Tags */}
      <title>Case Studies & Proof - Hireshore Success Stories</title>
      <meta name="description" content="Explore real case studies showing how Hireshore's managed delivery pods helped agencies and startups scale operations, reduce costs, and improve outcomes." />
      <meta name="keywords" content="case studies, managed delivery pods, agency solutions, startup success, white-label services, Hireshore proof" />
      
      <NavBar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Case Studies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Case Studies & Proof
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Real success stories from agencies and startups who transformed their operations with Hireshore's managed delivery pods
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-blue-200"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                  <img 
                    src={caseStudy.thumbnail} 
                    alt={`${caseStudy.client} case study thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {caseStudy.readTime}
                  </div>
                  {caseStudy.id === 'digital-six' && (
                    <img 
                      src={digitalSixLogo}
                      alt="Digital Six logo - case study thumbnail"
                      className="absolute top-14 right-4 h-10 w-auto object-contain drop-shadow-md"
                      loading="lazy"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h3>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-gray-800">Challenge:</strong> {caseStudy.challenge}
                  </div>
                  
                  <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4 bg-emerald-50 px-3 py-2 rounded-lg">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">{caseStudy.metrics}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 font-semibold py-2.5"
                    onClick={() => window.location.href = `/case-studies/${caseStudy.id}`}
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No case studies found matching your criteria.</p>
              <Button 
                onClick={() => { setSearchTerm(''); setSelectedTag('All'); }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join these successful companies and see how managed delivery pods can transform your operations
            </p>
            <Button 
              size="lg"
              className="bg-gray-900 hover:bg-gray-800"
              onClick={() => {
                // Navigate to homepage and scroll to Calendly section
                window.location.href = '/#book';
              }}
            >
              Book Your Free Strategy Session
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default CaseStudies;