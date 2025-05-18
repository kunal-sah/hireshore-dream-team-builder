
import React from 'react';
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
