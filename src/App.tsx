import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import DigitalSixCaseStudy from "./pages/case-studies/DigitalSix";
import MedzMediaCaseStudy from "./pages/case-studies/MedzMedia";
import SwimplyCaseStudy from "./pages/case-studies/Swimply";
import PropertyStackCaseStudy from "./pages/case-studies/PropertyStack";
import AffectiveCareCaseStudy from "./pages/case-studies/AffectiveCare";
import UncommonSolutionsCaseStudy from "./pages/case-studies/UncommonSolutions";
import CoveDigitalCaseStudy from "./pages/case-studies/CoveDigital";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/digital-six" element={<DigitalSixCaseStudy />} />
          <Route path="/case-studies/medz-media" element={<MedzMediaCaseStudy />} />
          <Route path="/case-studies/swimply" element={<SwimplyCaseStudy />} />
          <Route path="/case-studies/property-stack" element={<PropertyStackCaseStudy />} />
          <Route path="/case-studies/affective-care" element={<AffectiveCareCaseStudy />} />
          <Route path="/case-studies/uncommon-solutions" element={<UncommonSolutionsCaseStudy />} />
          <Route path="/case-studies/cove-digital" element={<CoveDigitalCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
