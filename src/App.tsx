import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Immediate load for critical pages
import Index from "./pages/Index";

// Lazy load all other pages to reduce initial bundle
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Industries = lazy(() => import("./pages/Industries"));
const Resources = lazy(() => import("./pages/Resources"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Legal = lazy(() => import("./pages/Legal"));

// Lazy load case studies
const DigitalSixCaseStudy = lazy(() => import("./pages/case-studies/DigitalSix"));
const MedzMediaCaseStudy = lazy(() => import("./pages/case-studies/MedzMedia"));
const SwimplyCaseStudy = lazy(() => import("./pages/case-studies/Swimply"));
const PropertyStackCaseStudy = lazy(() => import("./pages/case-studies/PropertyStack"));
const AffectiveCareCaseStudy = lazy(() => import("./pages/case-studies/AffectiveCare"));
const UncommonSolutionsCaseStudy = lazy(() => import("./pages/case-studies/UncommonSolutions"));
const CoveDigitalCaseStudy = lazy(() => import("./pages/case-studies/CoveDigital"));

// Lazy load resource pages
const FAQs = lazy(() => import("./pages/resources/FAQs"));
const DeliveryPodsPlaybook = lazy(() => import("./pages/resources/DeliveryPodsPlaybook"));
const WebLaunchChecklist = lazy(() => import("./pages/resources/WebLaunchChecklist"));
const CostCalculator = lazy(() => import("./pages/resources/CostCalculator"));
const CreativeBriefTemplate = lazy(() => import("./pages/resources/CreativeBriefTemplate"));
const GuidesLibrary = lazy(() => import("./pages/resources/GuidesLibrary"));
const TemplatesLibrary = lazy(() => import("./pages/resources/TemplatesLibrary"));
const CaseNotesLibrary = lazy(() => import("./pages/resources/CaseNotesLibrary"));
const WebinarsLibrary = lazy(() => import("./pages/resources/WebinarsLibrary"));
const SEOBasicsGuide = lazy(() => import("./pages/resources/SEOBasicsGuide"));

// Lazy load guides
const AutomationGuide = lazy(() => import("./pages/resources/guides/AutomationGuide"));
const OutreachGuide = lazy(() => import("./pages/resources/guides/OutreachGuide"));
const FunnelGuide = lazy(() => import("./pages/resources/guides/FunnelGuide"));

// Lazy load templates
const ContentCalendarTemplate = lazy(() => import("./pages/resources/templates/ContentCalendarTemplate"));
const SprintPlanTemplate = lazy(() => import("./pages/resources/templates/SprintPlanTemplate"));
const SOPStarterTemplate = lazy(() => import("./pages/resources/templates/SOPStarterTemplate"));
const UGCBriefTemplate = lazy(() => import("./pages/resources/templates/UGCBriefTemplate"));

// Lazy load case notes
const NDISAutomation = lazy(() => import("./pages/resources/case-notes/NDISAutomation"));
const EcommerceReplatform = lazy(() => import("./pages/resources/case-notes/EcommerceReplatform"));
const SaaSOnboarding = lazy(() => import("./pages/resources/case-notes/SaaSOnboarding"));

// Loading component for better UX
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/resources/guides" element={<GuidesLibrary />} />
            <Route path="/resources/templates" element={<TemplatesLibrary />} />
            <Route path="/resources/case-notes" element={<CaseNotesLibrary />} />
            <Route path="/resources/webinars" element={<WebinarsLibrary />} />
            <Route path="/resources/faqs" element={<FAQs />} />
            <Route path="/resources/delivery-pods-playbook" element={<DeliveryPodsPlaybook />} />
            <Route path="/resources/web-launch-checklist" element={<WebLaunchChecklist />} />
            <Route path="/resources/cost-calculator" element={<CostCalculator />} />
            <Route path="/resources/creative-brief-template" element={<CreativeBriefTemplate />} />
            <Route path="/resources/guides/funnels" element={<FunnelGuide />} />
            <Route path="/resources/guides/seo-basics" element={<SEOBasicsGuide />} />
            <Route path="/resources/guides/automation-starters" element={<AutomationGuide />} />
            <Route path="/resources/guides/outreach-systems" element={<OutreachGuide />} />
            <Route path="/resources/templates/content-calendar" element={<ContentCalendarTemplate />} />
            <Route path="/resources/templates/sprint-plan" element={<SprintPlanTemplate />} />
            <Route path="/resources/templates/sop-starter" element={<SOPStarterTemplate />} />
            <Route path="/resources/templates/ugc-brief" element={<UGCBriefTemplate />} />
            <Route path="/resources/case-notes/ndis-automation" element={<NDISAutomation />} />
            <Route path="/resources/case-notes/ecommerce-replatform" element={<EcommerceReplatform />} />
            <Route path="/resources/case-notes/saas-onboarding" element={<SaaSOnboarding />} />
            <Route path="/resources/case-notes/ads-leads-gap-funnel" element={<CaseNotesLibrary />} />
            <Route path="/resources/case-notes/cold-outreach-automation" element={<CaseNotesLibrary />} />
            <Route path="/resources/case-notes/shopify-fulfillment-automation" element={<CaseNotesLibrary />} />
            <Route path="/resources/case-notes/coaching-booking-optimization" element={<CaseNotesLibrary />} />
            <Route path="/resources/case-notes/real-estate-lead-nurture" element={<CaseNotesLibrary />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal" element={<Legal />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
