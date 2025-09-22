
import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Critical above-fold components - load immediately
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import TrustedStartups from "../components/TrustedStartups";
import DeliveryPodDefinition from "../components/DeliveryPodDefinition";
import SiteFooter from "../components/SiteFooter";
import YouTubeFacade from "../components/ui/youtube-facade";

// Lazy load below-fold components to reduce initial bundle
const PodAtAGlance = lazy(() => import("../components/PodAtAGlance"));
const InsideDeliveryPod = lazy(() => import("../components/InsideDeliveryPod"));
const HowItWorksSection = lazy(() => import("../components/HowItWorksSection"));
const WhyPodsSection = lazy(() => import("../components/WhyPodsSection"));
const ProofSection = lazy(() => import("../components/ProofSection"));
const BenefitsSection = lazy(() => import("../components/BenefitsSection"));
const MediaFeatures = lazy(() => import("../components/MediaFeatures"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const RolesSection = lazy(() => import("../components/RolesSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const FAQSection = lazy(() => import("../components/FAQSection"));
const CalendlySection = lazy(() => import("../components/CalendlySection"));

// Component loader for better UX
const ComponentLoader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400"></div>
  </div>
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
        <DeliveryPodDefinition />
        <Suspense fallback={<ComponentLoader />}>
          <PodAtAGlance />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <InsideDeliveryPod />
        </Suspense>
        <div id="how-it-works">
          <Suspense fallback={<ComponentLoader />}>
            <HowItWorksSection />
          </Suspense>
        </div>
        <div id="why-pods">
          <Suspense fallback={<ComponentLoader />}>
            <WhyPodsSection />
          </Suspense>
        </div>
        <div id="proof">
          <Suspense fallback={<ComponentLoader />}>
            <ProofSection />
          </Suspense>
        </div>
        <Suspense fallback={<ComponentLoader />}>
          <BenefitsSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <MediaFeatures />
        </Suspense>
        
        {/* Marlon's Medz Media Testimonial */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <blockquote className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6">
                  "The best experience I've had working with a remote team. Websites came out fantastic - fast, 
                  secure, beautifully designed. The team's energy, proactiveness, and suggestions make them feel 
                  like a real part of my business. I've worked with freelancers before - this is a whole different level. 
                  I've referred Hireshore to friends, clients, and even my full-time employer. It's truly been a 
                  game changer for both my business and personal life."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Marlon M.</p>
                    <p className="text-sm text-gray-600">Founder, Medz Media</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <YouTubeFacade
                  videoId="43qQdLve5Ps"
                  title="Medz Media Testimonial - Marlon M."
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Aaron's Digital Six Testimonial */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "We were maybe 22–23 when we started... now there are 47 people across Australia and Nepal. 
                  The WordPress guys are killing it. The SEO side is strong. This is way better than our past 
                  freelancer experience. I've already referred several people to Hireshore."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold text-gray-900">Aaron Erwich</div>
                    <div className="text-gray-600">Founder, Digital Six</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <YouTubeFacade
                    videoId="yW90cSyX_iI"
                    title="Digital Six Testimonial - Aaron Erwich"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">Watch Aaron's full testimonial</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Ryan's PropertyStack Testimonial */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <blockquote className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6">
                  "We've hired over 15 people through Hireshore in just a year - and could've done 10 more. 
                  The hiring process is much easier now with resume videos and pre-vetted candidates. 
                  Compared to freelancers or other markets, the quality from Nepal has been significantly better. 
                  You guys have helped us grow fast and we've referred you to many of our partners."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900">Ryan Jope</p>
                    <p className="text-sm text-gray-600">Founder of PropertyStack</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <YouTubeFacade
                  videoId="9xMVgH1j9XE"
                  title="PropertyStack Testimonial - Ryan Jope"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* View All Case Studies CTA */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
            >
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
            </motion.div>
          </div>
        </section>
        <Suspense fallback={<ComponentLoader />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <RolesSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <CalendlySection />
        </Suspense>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Index;
