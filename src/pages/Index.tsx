
import React, { useEffect } from 'react';
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import BenefitsSection from "../components/BenefitsSection";
import RolesSection from "../components/RolesSection";
import TrustedStartups from "../components/TrustedStartups";
import TestimonialsSection from "../components/TestimonialsSection";
import HiringFormSection from "../components/HiringFormSection";
import SiteFooter from "../components/SiteFooter";
import ReferralBanner from "../components/ReferralBanner";
import ServicesSection from "../components/ServicesSection";
import MediaFeatures from "../components/MediaFeatures";
import SharkTankSection from "../components/SharkTankSection";
import SwimplySuccessSection from "../components/SwimplySuccessSection";
import DigitalSixSuccessSection from "../components/DigitalSixSuccessSection";
import PropertyStackSuccessSection from "../components/PropertyStackSuccessSection";
import MedzMediaSuccessSection from "../components/MedzMediaSuccessSection";
import AffectiveCareSuccessSection from "../components/AffectiveCareSuccessSection";
import UncommonSolutionsSuccessSection from "../components/UncommonSolutionsSuccessSection";
import CoveDigitalSuccessSection from "../components/CoveDigitalSuccessSection";
import WhyPodsSection from "../components/WhyPodsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProofSection from "../components/ProofSection";
import ConversionFormSection from "../components/ConversionFormSection";

const Index = () => {
  // Add useEffect to load the popup form scripts and JSON-LD
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

    // Clean up JSON-LD script
    const cleanupJsonLd = () => {
      document.head.removeChild(jsonLdScript);
    };
    // Create and add the Cal Form iframe
    const calIframe = document.createElement('iframe');
    calIframe.src = "https://api.parracityweb.com/widget/form/shdOJ5vbCj1i9JYIQOyt";
    calIframe.style.display = "none";
    calIframe.style.width = "100%";
    calIframe.style.height = "100%";
    calIframe.style.border = "none";
    calIframe.style.borderRadius = "3px";
    calIframe.id = "popup-shdOJ5vbCj1i9JYIQOyt";
    calIframe.setAttribute("data-layout", "{'id':'POPUP'}");
    calIframe.setAttribute("data-trigger-type", "pageScroll");
    calIframe.setAttribute("data-trigger-value", "20");
    calIframe.setAttribute("data-activation-type", "alwaysActivated");
    calIframe.setAttribute("data-activation-value", "");
    calIframe.setAttribute("data-deactivation-type", "neverDeactivate");
    calIframe.setAttribute("data-deactivation-value", "");
    calIframe.setAttribute("data-form-name", "Cal Form");
    calIframe.setAttribute("data-height", "430");
    calIframe.setAttribute("data-layout-iframe-id", "popup-shdOJ5vbCj1i9JYIQOyt");
    calIframe.setAttribute("data-form-id", "shdOJ5vbCj1i9JYIQOyt");
    calIframe.title = "Cal Form";
    document.body.appendChild(calIframe);

    // Create and add the script
    const formScript = document.createElement('script');
    formScript.src = "https://api.parracityweb.com/js/form_embed.js";
    formScript.async = true;
    document.body.appendChild(formScript);

    // Cleanup function to remove the elements when component unmounts
    return () => {
      if (document.body.contains(calIframe)) {
        document.body.removeChild(calIframe);
      }
      if (document.body.contains(formScript)) {
        document.body.removeChild(formScript);
      }
      cleanupJsonLd();
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-neutral-900 overflow-x-hidden">
      <ReferralBanner />
      <NavBar />
      <LandingHero />
      <div className="space-y-12 md:space-y-16">
        <TrustedStartups />
        <div id="why-pods">
          <WhyPodsSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="proof">
          <ProofSection />
        </div>
        <BenefitsSection />
        <MediaFeatures />
        <SwimplySuccessSection />
        <DigitalSixSuccessSection />
        <PropertyStackSuccessSection />
        <MedzMediaSuccessSection />
        <AffectiveCareSuccessSection />
        <UncommonSolutionsSuccessSection />
        <CoveDigitalSuccessSection />
        <SharkTankSection />
        <ServicesSection />
        <RolesSection />
        <TestimonialsSection />
        <ConversionFormSection />
        <HiringFormSection />
      </div>
      <SiteFooter />
    </div>
  );
};

export default Index;
