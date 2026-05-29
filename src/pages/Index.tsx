import React, { useEffect, lazy, Suspense } from 'react';
import { SEOHead } from "../components/SEOHead";


// Critical above-fold components - load immediately
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import TrustedStartups from "../components/TrustedStartups";
import FoundersWall from "../components/FoundersWall";
import SiteFooter from "../components/SiteFooter";
import { preloadCriticalResources, optimizeImageLoading } from "../utils/performanceOptimizer";
import { deferHeavyWork, preloadCriticalAssets, optimizeThirdPartyScripts } from "../utils/criticalPathOptimizer";

// Lazy load below-fold components to reduce initial bundle
const NepalAdvantage = lazy(() => import("../components/NepalAdvantage"));
const TwoWaysToHire = lazy(() => import("../components/TwoWaysToHire"));
const BenefitsSection = lazy(() => import("../components/BenefitsSection"));
const MediaFeatures = lazy(() => import("../components/MediaFeatures"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const RolesSection = lazy(() => import("../components/RolesSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const FAQSection = lazy(() => import("../components/FAQSection"));
const CalendlySection = lazy(() => import("../components/CalendlySection"));

// Removed unused LazyMotion

// Component loader for better UX
const ComponentLoader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400"></div>
  </div>
);

const Index = () => {
  // Add useEffect to optimize performance and defer non-critical work
  useEffect(() => {
    // Immediate critical resource preloading
    preloadCriticalAssets();
    preloadCriticalResources();
    
    // Defer all heavy operations to prevent main thread blocking
    deferHeavyWork(() => {
      optimizeImageLoading();
      optimizeThirdPartyScripts();
      addStructuredData();
      setupScrollBehavior();
    }, 100);

    return () => {
      const script = document.getElementById('org-structured-data');
      if (script) script.remove();
    };
  }, []);

   const addStructuredData = () => {
    const currentDomain = typeof window !== 'undefined' ? window.location.origin : "https://hireshore.co";
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Hireshore",
      "url": currentDomain,
      "logo": `${currentDomain}/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png`,
      "description": "Get Full-Time Capacity Without the Full-Time Overhead. Managed Delivery Pods for product teams and agencies.",
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

    const existingScript = document.getElementById('org-structured-data');
    if (existingScript) return; // Don't add duplicates

    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.id = 'org-structured-data';
    jsonLdScript.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(jsonLdScript);
  };

  const setupScrollBehavior = () => {
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
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-neutral-900 overflow-x-hidden">
      <SEOHead 
        title="Done-For-You Delivery Pods | Scale With Hireshore"
        description="Scale without chaos with Hireshore's vetted delivery pods for dev, design, automation & support. Real case studies. Book a strategy call."
        keywords="delivery pods, offshore development, remote team, managed services, web development, design services, marketing automation, white label services"
        canonicalUrl="https://hireshore.co/"
      />
      <NavBar />
      <LandingHero />
      <main className="space-y-16 md:space-y-20 py-8">
        <TrustedStartups />
        <FoundersWall />

        <Suspense fallback={<ComponentLoader />}>
          <NepalAdvantage />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <TwoWaysToHire />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <BenefitsSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <RolesSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <MediaFeatures />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <CalendlySection />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
