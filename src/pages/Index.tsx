
import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ErrorBoundary from '../components/ErrorBoundary';

// Critical above-the-fold components - load immediately
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import TrustedStartups from "../components/TrustedStartups";

// Lazy load below-the-fold components to reduce main-thread work
const BenefitsSection = lazy(() => import("../components/BenefitsSection"));
const RolesSection = lazy(() => import("../components/RolesSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const SiteFooter = lazy(() => import("../components/SiteFooter"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const MediaFeatures = lazy(() => import("../components/MediaFeatures"));
const SharkTankSection = lazy(() => import("../components/SharkTankSection"));
const DigitalSixSuccessSection = lazy(() => import("../components/DigitalSixSuccessSection"));
const MedzMediaSuccessSection = lazy(() => import("../components/MedzMediaSuccessSection"));
const WhyPodsSection = lazy(() => import("../components/WhyPodsSection"));
const HowItWorksSection = lazy(() => import("../components/HowItWorksSection"));
const ProofSection = lazy(() => import("../components/ProofSection"));
const CalendlySection = lazy(() => import("../components/CalendlySection"));
const DeliveryPodDefinition = lazy(() => import("../components/DeliveryPodDefinition"));
const PodAtAGlance = lazy(() => import("../components/PodAtAGlance"));
const InsideDeliveryPod = lazy(() => import("../components/InsideDeliveryPod"));
const FAQSection = lazy(() => import("../components/FAQSection"));

// Lightweight loading component to prevent layout shifts
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
  </div>
);

// Wrapper for lazy components with error boundary
const LazySection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<SectionLoader />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const Index = () => {
  // Add useEffect to add JSON-LD and scroll behavior
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Hireshore",
      "url": "https://www.hireshore.co",
      "logo": "https://www.hireshore.co/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png",
      "description": "Get Full-Time Capacity Without the Full-Time Overhead. Managed Delivery Pods for agencies and startups.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+977 981 9074501",
        "contactType": "Customer Service",
        "email": "kunal@hireshore.co"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "800 North King Street",
        "addressLocality": "Wilmington",
        "addressRegion": "DE",
        "postalCode": "19801",
        "addressCountry": "US"
      },
      "offers": {
        "@type": "Offer",
        "name": "Managed Delivery Pods",
        "description": "Multi-skill teams that deliver full-time capacity without full-time overhead",
        "category": "Business Service"
      }
    };

    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(jsonLdScript);

    // Smooth scroll behavior for all booking CTAs
    const smoothScrollToBook = (e: Event) => {
      e.preventDefault();
      const el = document.getElementById('book');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Universal selector list for all booking-ish CTAs
    const selectors = [
      'a[href*="book"]',
      'a[href*="schedule"]',
      'a[href*="meeting"]',
      'a[href*="demo"]',
      'a[href*="strategy"]',
      'a[href*="consult"]',
      'button[data-action="book"]',
      'button[data-action="schedule"]',
      'button[data-action="demo"]',
      '.js-book',
      '.js-schedule',
      '.btn-book',
      '.btn-demo',
      '.btn-call',
      'a[href="#book"]',
      'button[href="#book"]'
    ];

    // Attach scroll behavior
    const nodes = document.querySelectorAll(selectors.join(','));
    nodes.forEach((node) => {
      // Neutralize any previous modal handlers
      node.removeAttribute('data-modal-target');
      node.removeAttribute('data-trigger');
      (node as HTMLElement).onclick = smoothScrollToBook;
      node.setAttribute('href', '#book');
      node.setAttribute('aria-controls', 'book');
    });

    // Disable any existing openModal function
    if ((window as any).openModal) {
      (window as any).openModal = function() { /* disabled to force scroll to Calendly */ };
    }

    // Cleanup function
    return () => {
      if (document.head.contains(jsonLdScript)) {
        document.head.removeChild(jsonLdScript);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-neutral-900 overflow-x-hidden">
      <NavBar />
      <LandingHero />
      <div className="space-y-12 md:space-y-16">
        <TrustedStartups />
        
        <LazySection>
          <DeliveryPodDefinition />
        </LazySection>
        
        <LazySection>
          <PodAtAGlance />
        </LazySection>
        
        <LazySection>
          <InsideDeliveryPod />
        </LazySection>
        
        <div id="how-it-works">
          <LazySection>
            <HowItWorksSection />
          </LazySection>
        </div>
        
        <div id="why-pods">
          <LazySection>
            <WhyPodsSection />
          </LazySection>
        </div>
        
        <div id="proof">
          <LazySection>
            <ProofSection />
          </LazySection>
        </div>
        
        <LazySection>
          <BenefitsSection />
        </LazySection>
        
        <LazySection>
          <MediaFeatures />
        </LazySection>
        
        {/* Consolidated Video Testimonials */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600">Real stories from founders who transformed their operations</p>
          </div>
          <div className="grid gap-8 lg:gap-12">
            {/* Medz Media */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <blockquote className="text-lg text-gray-900 leading-relaxed mb-4">
                    "The best experience I've had working with a remote team. This is a whole different level from freelancers. 
                    It's been a game changer for both my business and personal life."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">Marlon M.</p>
                    <p className="text-sm text-gray-600">Founder, Medz Media</p>
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%" height="100%" loading="lazy"
                    src="https://www.youtube.com/embed/43qQdLve5Ps"
                    title="Medz Media Success Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            
            {/* Digital Six */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "Now there are 47 people across Australia and Nepal. Way better than our past freelancer experience. 
                    I've already referred several people to Hireshore."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">Aaron Erwich</p>
                    <p className="text-sm text-gray-600">Founder, Digital Six</p>
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%" height="100%" loading="lazy"
                    src="https://www.youtube.com/embed/yW90cSyX_iI"
                    title="Digital Six Success Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            
            {/* PropertyStack */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <blockquote className="text-lg text-gray-900 leading-relaxed mb-4">
                    "We've hired over 15 people through Hireshore in just a year. The quality from Nepal has been 
                    significantly better than freelancers or other markets."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900">Ryan Jope</p>
                    <p className="text-sm text-gray-600">Founder, PropertyStack</p>
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%" height="100%" loading="lazy"
                    src="https://www.youtube.com/embed/9xMVgH1j9XE"
                    title="PropertyStack Success Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* View All Case Studies CTA */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              See Our Success Stories
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Discover how agencies and startups transformed their operations with Hireshore's managed delivery pods
            </p>
            <Link 
              to="/case-studies"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-xl transition-all hover:shadow-lg"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
        <LazySection>
          <ServicesSection />
        </LazySection>
        
        <LazySection>
          <RolesSection />
        </LazySection>
        
        <LazySection>
          <TestimonialsSection />
        </LazySection>
        
        <LazySection>
          <FAQSection />
        </LazySection>
        
        <LazySection>
          <CalendlySection />
        </LazySection>
      </div>
      <LazySection>
        <SiteFooter />
      </LazySection>
    </div>
  );
};

export default Index;
