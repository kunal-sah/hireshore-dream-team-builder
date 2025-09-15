import React from 'react';
import NavBar from '@/components/NavBar';
import SiteFooter from '@/components/SiteFooter';

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <title>Privacy Policy | Hireshore</title>
      <meta name="description" content="Hireshore Privacy Policy outlining how we collect, use, and protect your data." />
      <link rel="canonical" href="/privacy" />
      <NavBar />
      <main className="flex-1">
        <header className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-3">Your privacy matters. This page explains what data we collect and how we use it.</p>
          </div>
        </header>
        <section className="py-12">
          <article className="max-w-4xl mx-auto px-4 prose prose-slate">
            <h2>Information We Collect</h2>
            <p>We collect information you provide through forms (name, email, company, message) to respond to your inquiries and deliver our services.</p>
            <h2>How We Use Information</h2>
            <p>We use your information to communicate with you, provide requested services, and improve our website.</p>
            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your data.</p>
            <h2>Contact</h2>
            <p>For any privacy questions, contact us at <a href="mailto:sales@hireshore.co">sales@hireshore.co</a>.</p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Privacy;
