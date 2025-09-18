import React from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const Legal = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <title>Legal Mentions | Hireshore</title>
      <meta name="description" content="Legal information about Hireshore including company and contact details." />
      <link rel="canonical" href="/legal" />
      <NavBar />
      <main className="flex-1">
        <header className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900">Legal Mentions</h1>
            <p className="text-gray-600 mt-3">Company identification and legal information.</p>
          </div>
        </header>
        <section className="py-12">
          <article className="max-w-4xl mx-auto px-4 prose prose-slate">
            <h2>Company</h2>
            <p>Hireshore, LLC - 800 North King Street, Wilmington, DE 19801 US</p>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:sales@hireshore.co">sales@hireshore.co</a></p>
            <h2>Intellectual Property</h2>
            <p>All content on this site is protected by copyright and other intellectual property laws.</p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Legal;
