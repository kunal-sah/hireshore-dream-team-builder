import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import DigitalSixCaseStudy from "./pages/case-studies/DigitalSix";
import MedzMediaCaseStudy from "./pages/case-studies/MedzMedia";
import SwimplyCaseStudy from "./pages/case-studies/Swimply";
import PropertyStackCaseStudy from "./pages/case-studies/PropertyStack";
import AffectiveCareCaseStudy from "./pages/case-studies/AffectiveCare";
import UncommonSolutionsCaseStudy from "./pages/case-studies/UncommonSolutions";
import CoveDigitalCaseStudy from "./pages/case-studies/CoveDigital";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Guides from "./pages/resources/Guides";
import Templates from "./pages/resources/Templates";
import CaseNotes from "./pages/resources/CaseNotes";
import Webinars from "./pages/resources/Webinars";
import FAQs from "./pages/resources/FAQs";
import DeliveryPodsPlaybook from "./pages/resources/DeliveryPodsPlaybook";
import WebLaunchChecklist from "./pages/resources/WebLaunchChecklist";
import CostCalculator from "./pages/resources/CostCalculator";
import CreativeBriefTemplate from "./pages/resources/CreativeBriefTemplate";
import GuidesLibrary from "./pages/resources/GuidesLibrary";
import TemplatesLibrary from "./pages/resources/TemplatesLibrary";
import CaseNotesLibrary from "./pages/resources/CaseNotesLibrary";
import FunnelGuide from "./pages/resources/guides/FunnelGuide";
import ContentCalendarTemplate from "./pages/resources/templates/ContentCalendarTemplate";
import WebinarsLibrary from "./pages/resources/WebinarsLibrary";
import UGCBriefTemplate from "./pages/resources/UGCBriefTemplate";
import SEOBasicsGuide from "./pages/resources/SEOBasicsGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/case-studies/digital-six" element={<DigitalSixCaseStudy />} />
          <Route path="/case-studies/medz-media" element={<MedzMediaCaseStudy />} />
          <Route path="/case-studies/swimply" element={<SwimplyCaseStudy />} />
          <Route path="/case-studies/property-stack" element={<PropertyStackCaseStudy />} />
          <Route path="/case-studies/affective-care" element={<AffectiveCareCaseStudy />} />
          <Route path="/case-studies/uncommon-solutions" element={<UncommonSolutionsCaseStudy />} />
          <Route path="/case-studies/cove-digital" element={<CoveDigitalCaseStudy />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/templates" element={<Templates />} />
          <Route path="/resources/case-notes" element={<CaseNotes />} />
        <Route path="/resources/webinars" element={<WebinarsLibrary />} />
        <Route path="/resources/faqs" element={<FAQs />} />
        <Route path="/resources/delivery-pods-playbook" element={<DeliveryPodsPlaybook />} />
        <Route path="/resources/web-launch-checklist" element={<WebLaunchChecklist />} />
        <Route path="/resources/cost-calculator" element={<CostCalculator />} />
        <Route path="/resources/creative-brief-template" element={<CreativeBriefTemplate />} />
        <Route path="/resources/guides" element={<GuidesLibrary />} />
        <Route path="/resources/templates" element={<TemplatesLibrary />} />
        <Route path="/resources/case-notes" element={<CaseNotesLibrary />} />
        <Route path="/resources/guides/funnels" element={<FunnelGuide />} />
        <Route path="/resources/templates/content-calendar" element={<ContentCalendarTemplate />} />
        <Route path="/resources/templates/ugc-brief" element={<UGCBriefTemplate />} />
        <Route path="/resources/guides/seo-basics" element={<SEOBasicsGuide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
