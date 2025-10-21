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
const Solutions = lazy(() => import("./pages/Solutions"));
const Staffing = lazy(() => import("./pages/Staffing"));
const ConfigurePod = lazy(() => import("./pages/ConfigurePod"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Industries = lazy(() => import("./pages/Industries"));
const Resources = lazy(() => import("./pages/Resources"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Legal = lazy(() => import("./pages/Legal"));

// Solutions pages
const LaunchFaster = lazy(() => import("./pages/solutions/LaunchFaster"));
const ScaleDesign = lazy(() => import("./pages/solutions/ScaleDesign"));
const AutomateOps = lazy(() => import("./pages/solutions/AutomateOps"));
const SalesPipeline = lazy(() => import("./pages/solutions/SalesPipeline"));
const SupportQA = lazy(() => import("./pages/solutions/SupportQA"));
const AgencyOwners = lazy(() => import("./pages/solutions/AgencyOwners"));
const MarketingLeaders = lazy(() => import("./pages/solutions/MarketingLeaders"));
const Founders = lazy(() => import("./pages/solutions/Founders"));
const HRRecruiters = lazy(() => import("./pages/solutions/HRRecruiters"));

// How it works pages
const QAFramework = lazy(() => import("./pages/how-it-works/QAFramework"));
const OnboardingProcess = lazy(() => import("./pages/how-it-works/OnboardingProcess"));

// Staffing pages
const RecruitmentService = lazy(() => import("./pages/staffing/RecruitmentService"));
const Compliance = lazy(() => import("./pages/staffing/Compliance"));
const OneWeekTrial = lazy(() => import("./pages/staffing/OneWeekTrial"));
const Rates = lazy(() => import("./pages/staffing/Rates"));
const TalentProfiles = lazy(() => import("./pages/staffing/TalentProfiles"));

// Industries pages
const Ecommerce = lazy(() => import("./pages/industries/Ecommerce"));
const SaasTech = lazy(() => import("./pages/industries/SaasTech"));
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const Education = lazy(() => import("./pages/industries/Education"));
const Hospitality = lazy(() => import("./pages/industries/Hospitality"));
const Finance = lazy(() => import("./pages/industries/Finance"));

// Company pages
const Careers = lazy(() => import("./pages/company/Careers"));
const Partners = lazy(() => import("./pages/company/Partners"));

// Services pages  
const WebDev = lazy(() => import("./pages/services/WebDev"));
const DesignPod = lazy(() => import("./pages/services/DesignPod"));
const VideoPod = lazy(() => import("./pages/services/VideoPod"));
const SEOContentPod = lazy(() => import("./pages/services/SEOContentPod"));
const MarketingOpsPod = lazy(() => import("./pages/services/MarketingOpsPod"));
const DataAIPod = lazy(() => import("./pages/services/DataAIPod"));
const SupportQAPod = lazy(() => import("./pages/services/SupportQAPod"));

// How it works pages
const ProcessSLA = lazy(() => import("./pages/how-it-works/ProcessSLA"));

// Staffing pages
const DedicatedTalent = lazy(() => import("./pages/staffing/DedicatedTalent"));
const BuildTeam = lazy(() => import("./pages/staffing/BuildTeam"));

// Industries pages
const Agencies = lazy(() => import("./pages/industries/Agencies"));
const RealEstate = lazy(() => import("./pages/industries/RealEstate"));

// Company pages
const TeamCulture = lazy(() => import("./pages/company/TeamCulture"));

// Lazy load case studies
const DigitalSixCaseStudy = lazy(() => import("./pages/case-studies/DigitalSix"));
const MedzMediaCaseStudy = lazy(() => import("./pages/case-studies/MedzMedia"));
const SwimplyCaseStudy = lazy(() => import("./pages/case-studies/Swimply"));
const PropertyStackCaseStudy = lazy(() => import("./pages/case-studies/PropertyStack"));
const AffectiveCareCaseStudy = lazy(() => import("./pages/case-studies/AffectiveCare"));
const UncommonSolutionsCaseStudy = lazy(() => import("./pages/case-studies/UncommonSolutions"));
const CoveDigitalCaseStudy = lazy(() => import("./pages/case-studies/CoveDigital"));
const EkleipsiDigitalCaseStudy = lazy(() => import("./pages/case-studies/EkleipsiDigital"));

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
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/launch-faster" element={<LaunchFaster />} />
            <Route path="/solutions/scale-design" element={<ScaleDesign />} />
            <Route path="/solutions/automate-ops" element={<AutomateOps />} />
            <Route path="/solutions/sales-pipeline" element={<SalesPipeline />} />
            <Route path="/solutions/support-qa" element={<SupportQA />} />
            <Route path="/solutions/agency-owners" element={<AgencyOwners />} />
            <Route path="/solutions/marketing-leaders" element={<MarketingLeaders />} />
            <Route path="/solutions/founders" element={<Founders />} />
            <Route path="/solutions/hr-recruiters" element={<HRRecruiters />} />
            
            {/* How it works routes */}
            <Route path="/how-it-works/qa-framework" element={<QAFramework />} />
            <Route path="/how-it-works/onboarding" element={<OnboardingProcess />} />
            
            {/* Staffing routes */}
            <Route path="/staffing/recruitment" element={<RecruitmentService />} />
            <Route path="/staffing/compliance" element={<Compliance />} />
            <Route path="/staffing/trial" element={<OneWeekTrial />} />
            <Route path="/staffing/rates" element={<Rates />} />
            <Route path="/staffing/talent-profiles" element={<TalentProfiles />} />
            
            {/* Industries routes */}
            <Route path="/industries/ecommerce" element={<Ecommerce />} />
            <Route path="/industries/saas-tech" element={<SaasTech />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/finance" element={<Finance />} />
            
            {/* Company routes */}
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/partners" element={<Partners />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-dev" element={<WebDev />} />
            <Route path="/services/design" element={<DesignPod />} />
            <Route path="/services/video" element={<VideoPod />} />
            <Route path="/services/seo-content" element={<SEOContentPod />} />
            <Route path="/services/marketing-ops" element={<MarketingOpsPod />} />
            <Route path="/services/data-ai" element={<DataAIPod />} />
            <Route path="/services/support-qa" element={<SupportQAPod />} />
            <Route path="/staffing" element={<Staffing />} />
            <Route path="/staffing/dedicated" element={<DedicatedTalent />} />
            <Route path="/staffing/build-team" element={<BuildTeam />} />
            <Route path="/how-it-works/process-sla" element={<ProcessSLA />} />
            <Route path="/configure-pod" element={<ConfigurePod />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/agencies" element={<Agencies />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/company/team-culture" element={<TeamCulture />} />
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
            <Route path="/case-studies/ekleipsi-digital" element={<EkleipsiDigitalCaseStudy />} />
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
