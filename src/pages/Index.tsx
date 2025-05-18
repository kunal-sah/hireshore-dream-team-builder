
import React, { useEffect } from 'react';
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import BenefitsSection from "../components/BenefitsSection";
import RolesSection from "../components/RolesSection";
import TrustSection from "../components/TrustSection";
import TestimonialsSection from "../components/TestimonialsSection";
import HiringFormSection from "../components/HiringFormSection";
import SiteFooter from "../components/SiteFooter";
import ReferralBanner from "../components/ReferralBanner";

const Index = () => {
  // Add useEffect to load the popup form script
  useEffect(() => {
    // Create and add the iframe
    const iframe = document.createElement('iframe');
    iframe.src = "https://api.parracityweb.com/widget/form/shdOJ5vbCj1i9JYIQOyt";
    iframe.style.display = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "3px";
    iframe.id = "popup-shdOJ5vbCj1i9JYIQOyt";
    iframe.setAttribute("data-layout", "{'id':'POPUP'}");
    iframe.setAttribute("data-trigger-type", "showOnScrolling");
    iframe.setAttribute("data-trigger-value", "20");
    iframe.setAttribute("data-activation-type", "alwaysActivated");
    iframe.setAttribute("data-activation-value", "");
    iframe.setAttribute("data-deactivation-type", "neverDeactivate");
    iframe.setAttribute("data-deactivation-value", "");
    iframe.setAttribute("data-form-name", "Cal Form");
    iframe.setAttribute("data-height", "533");
    iframe.setAttribute("data-layout-iframe-id", "popup-shdOJ5vbCj1i9JYIQOyt");
    iframe.setAttribute("data-form-id", "shdOJ5vbCj1i9JYIQOyt");
    iframe.title = "Cal Form";
    document.body.appendChild(iframe);

    // Create and add the script
    const script = document.createElement('script');
    script.src = "https://api.parracityweb.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the elements when component unmounts
    return () => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-neutral-900 overflow-x-hidden">
      <ReferralBanner />
      <NavBar />
      <LandingHero />
      <TrustSection />
      <BenefitsSection />
      <RolesSection />
      <TestimonialsSection />
      <HiringFormSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
