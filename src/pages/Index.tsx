
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

const Index = () => {
  // Add useEffect to load the popup form scripts
  useEffect(() => {
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
    const script = document.createElement('script');
    script.src = "https://api.parracityweb.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the elements when component unmounts
    return () => {
      if (document.body.contains(calIframe)) {
        document.body.removeChild(calIframe);
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
      <div className="space-y-12 md:space-y-16">
        <TrustedStartups />
        <BenefitsSection />
        <MediaFeatures />
        <SwimplySuccessSection />
        <DigitalSixSuccessSection />
        <PropertyStackSuccessSection />
        <MedzMediaSuccessSection />
        <SharkTankSection />
        <ServicesSection />
        <RolesSection />
        <TestimonialsSection />
        <HiringFormSection />
      </div>
      <SiteFooter />
    </div>
  );
};

export default Index;
