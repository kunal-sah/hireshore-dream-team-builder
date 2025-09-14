import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";
import { Button } from "@/components/ui/button";

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
    id: 'swimply',
    title: 'Swimply: From Shark Tank to Market Leader',
    client: 'Swimply',
    industry: 'Marketplace Platform',
    challenge: 'Scale platform development after Shark Tank appearance',
    result: '300% increase in user engagement, robust platform architecture',
    metrics: '300% user growth',
    thumbnail: '/lovable-uploads/936ff4a8-e76e-467f-b57a-9df89f07ab2f.png',
    tags: ['Platform Development', 'Scaling', 'Marketplace'],
    readTime: '5 min'
  },
  {
    id: 'property-stack',
    title: 'PropertyStack: Streamlined Real Estate Operations',
    client: 'PropertyStack',
    industry: 'PropTech',
    challenge: 'Automate complex real estate workflows and data management',
    result: 'Reduced processing time by 60%, improved accuracy',
    metrics: '60% time reduction',
    thumbnail: '/lovable-uploads/c7b9d56b-ffc4-4200-b765-496cd470a080.png',
    tags: ['PropTech', 'Automation', 'Data Management'],
    readTime: '4 min'
  },
  {
    id: 'affective-care',
    title: 'Affective Care: Digital Health Innovation',
    client: 'Affective Care',
    industry: 'HealthTech',
    challenge: 'Build scalable mental health platform with compliance',
    result: 'HIPAA-compliant platform serving 10K+ users',
    metrics: '10K+ active users',
    thumbnail: '/lovable-uploads/ecf56630-afb3-4e7b-9ae6-94694f6f12a7.png',
    tags: ['HealthTech', 'Compliance', 'Mental Health'],
    readTime: '6 min'
  },
  {
    id: 'uncommon-solutions',
    title: 'Uncommon Solutions: Enterprise Transformation',
    client: 'Uncommon Solutions',
    industry: 'Enterprise Software',
    challenge: 'Modernize legacy systems and improve user experience',
    result: 'Complete digital transformation, 40% efficiency gain',
    metrics: '40% efficiency increase',
    thumbnail: '/lovable-uploads/d44ef2d1-ea46-4a06-8e1d-f8a836983722.png',
    tags: ['Enterprise', 'Legacy Modernization', 'UX'],
    readTime: '7 min'
  },
  {
    id: 'cove-digital',
    title: 'Cove Digital: Agency Growth Acceleration',
    client: 'Cove Digital',
    industry: 'Digital Agency',
    challenge: 'Scale operations while maintaining quality standards',
    result: '200% capacity increase, maintained 98% client satisfaction',
    metrics: '200% capacity growth',
    thumbnail: '/lovable-uploads/39722330-5204-4d51-a69b-4979142e6e40.png',
    tags: ['Agency Growth', 'Operations', 'Quality Management'],
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
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={caseStudy.thumbnail} 
                    alt={`${caseStudy.client} case study thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 text-gray-600 px-2 py-1 rounded-full text-xs">
                    <Clock className="h-3 w-3" />
                    {caseStudy.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Challenge:</strong> {caseStudy.challenge}
                  </div>
                  
                  <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
                    <TrendingUp className="h-4 w-4" />
                    {caseStudy.metrics}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {caseStudy.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
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
                const element = document.getElementById('book');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
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