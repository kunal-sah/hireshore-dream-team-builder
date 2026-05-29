import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award, Target } from 'lucide-react';
import NavBar from '../../components/NavBar';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyCTA from '../../components/CaseStudyCTA';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SEOHead } from "@/components/SEOHead";

const SendrCaseStudy = () => {
  const stats = [
    { icon: Users, number: "2", label: "Key Hires", description: "EA/VA to CEO + GTM Engineer Consultant" },
    { icon: Clock, number: "Fast", label: "Time-to-Hire", description: "Relevant profiles shared within days" },
    { icon: Target, number: "100%", label: "Role Fit", description: "Matched to founder & GTM workflows" },
    { icon: Award, number: "Smooth", label: "Hiring Process", description: "Efficient end-to-end coordination" },
  ];

  const keyRoles = [
    "Executive Assistant / Virtual Assistant to the CEO",
    "GTM Engineer Consultant / GTM Account Manager",
  ];

  const processSteps = [
    "Quick discovery to map Sendr's GTM platform context and founder workflows",
    "Curated shortlist with video intros for both EA and GTM Engineer roles",
    "Multi-stage screening focused on outbound, GTM tooling, and EA fluency",
    "Direct sync with Dave & John to align on candidate fit and culture",
    "Onboarding support, contracts, and timezone alignment with the Sendr team",
  ];

  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Sendr Case Study - Hiring EA & GTM Engineer for a GTM Platform Startup",
      "description": "How Sendr hired an EA/VA to the CEO and a GTM Engineer Consultant / Account Manager through Hireshore.",
      "author": { "@type": "Organization", "name": "Hireshore" },
      "publisher": { "@type": "Organization", "name": "Hireshore" },
      "datePublished": "2026-05-29",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.hireshore.co/case-studies/sendr"
      }
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(s);
    return () => { if (document.head.contains(s)) document.head.removeChild(s); };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <SEOHead
        canonicalUrl="https://hireshore.co/case-studies/sendr"
        title="Sendr Case Study | EA & GTM Engineer Hired | Hireshore"
        description="How Sendr (sendr.ai) hired reliable remote talent for EA/VA to CEO and GTM Engineer roles with Hireshore."
        keywords="sendr, case study, GTM engineer, executive assistant, remote hiring"
      />
      <NavBar />

      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/case-studies">Case Studies</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Sendr</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <motion.section
        className="max-w-6xl mx-auto py-28 px-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wider inline-block mb-4">Case Study</span>
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white rounded-xl px-8 py-4 shadow-lg border border-gray-100">
              <h1 className="text-2xl font-bold text-gray-900">Sendr</h1>
              <p className="text-sm text-gray-600">GTM Platform • sendr.ai</p>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Staffing a GTM Platform Startup with EA & GTM Engineering Talent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hireshore helped Sendr hire reliable remote talent for key support and GTM roles —
            including an EA/VA to the CEO and a GTM Engineer Consultant / Account Manager.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">🚩 The Challenge</h3>
              <p className="text-gray-600 mb-4">
                As a fast-moving GTM platform led by Dave Cannell (Cofounder & CEO, ex-Google) and
                John Bromley (Cofounder, GTM & Outbound), Sendr needed dependable remote talent to
                support the CEO's day-to-day and to operate their GTM motion as an account manager
                and engineer.
              </p>
              <p className="text-gray-900 font-semibold">
                <strong>Goal:</strong> Quickly fill two specialized roles — an EA/VA to the CEO and
                a GTM Engineer Consultant / Account Manager — without slowing product velocity.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">The Solution</h4>
              <p className="text-gray-600 mb-4">
                Hireshore ran a focused recruitment sprint, understanding Sendr's needs quickly and
                shipping pre-vetted profiles tailored to each role.
              </p>
              <h5 className="font-semibold text-gray-900 mb-3">Roles Hired:</h5>
              <div className="grid grid-cols-1 gap-2 mb-4">
                {keyRoles.map((role, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{role}</span>
                  </div>
                ))}
              </div>
              <h5 className="font-semibold text-gray-900 mb-3">Our Process:</h5>
              <div className="space-y-2">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">📈 Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-start gap-2"><Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-gray-700">Relevant, pre-vetted profiles shared early in the process</span></div>
              <div className="flex items-start gap-2"><Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-gray-700">EA/VA freed up CEO time for product & fundraising</span></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2"><TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" /><span className="text-gray-700">GTM Engineer added capacity to outbound & account management</span></div>
              <div className="flex items-start gap-2"><TrendingUp className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" /><span className="text-gray-700">Smooth, efficient hiring with minimal founder overhead</span></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">💬 Client Testimonial</h3>
            <blockquote className="text-lg text-gray-700 italic mb-6 max-w-4xl mx-auto">
              "Hireshore helped us hire reliable remote talent for key support and GTM roles at Sendr,
              including an EA/VA to the CEO and a GTM Engineer Consultant / Account Manager. Their team
              understood our needs quickly, shared relevant profiles, and made the hiring process smooth and efficient."
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900">Dave Cannell</div>
              <div className="text-gray-600">Cofounder & CEO, Sendr</div>
            </div>
          </div>
        </div>
      </motion.section>

      <CaseStudyCTA />
      <SiteFooter />
    </div>
  );
};

export default SendrCaseStudy;
