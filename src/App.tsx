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
