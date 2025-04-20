
import LandingHero from "../components/LandingHero";
import BenefitsSection from "../components/BenefitsSection";
import RolesSection from "../components/RolesSection";
import TrustSection from "../components/TrustSection";
import TestimonialsSection from "../components/TestimonialsSection";
import HiringFormSection from "../components/HiringFormSection";
import SiteFooter from "../components/SiteFooter";

const Index = () => {
  return (
    <div className="bg-gradient-to-tr from-[#e0e7ff] via-white to-[#e0ffe7] min-h-screen flex flex-col font-sans text-neutral-900">
      <LandingHero />
      <BenefitsSection />
      <RolesSection />
      <TrustSection />
      <TestimonialsSection />
      <HiringFormSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
