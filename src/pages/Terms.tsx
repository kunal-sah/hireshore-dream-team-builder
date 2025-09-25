import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Terms = () => {
  useEffect(() => {
    // Add JSON-LD for terms page
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms & Conditions - Hireshore",
      "description": "Terms and conditions for using Hireshore services and website.",
      "url": typeof window !== 'undefined' ? window.location.href : 'https://hireshore.co/terms',
      "publisher": {
        "@type": "Organization",
        "name": "Hireshore",
        "url": "https://hireshore.co"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <title>Terms & Conditions | Hireshore</title>
      <meta name="description" content="Terms and conditions for using Hireshore services and website." />
      <link rel="canonical" href="/terms" />
      <NavBar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100 pt-20">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <header className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
            <p className="text-gray-600 mt-3">Please read these terms carefully before using our services.</p>
          </div>
        </header>
        <section className="py-12">
          <article className="max-w-4xl mx-auto px-4 prose prose-slate">
            <h2>Use of Services</h2>
            <p>By accessing our website or using our services, you agree to comply with these terms.</p>
            <h2>Payments & Invoices</h2>
            <p>Payment terms are defined per engagement and must be honored within agreed timelines.</p>
            <h2>Limitation of Liability</h2>
            <p>We are not liable for indirect or consequential damages arising from the use of our services.</p>
            <h2>Contact</h2>
            <p>For any questions, contact <a href="mailto:sales@hireshore.co">sales@hireshore.co</a>.</p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Terms;
