
import React, { useEffect } from 'react';

const SiteFooter = () => {
  // Add useEffect to load the Calendly script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="w-full py-12 md:py-16 bg-gradient-to-t from-[#e7e9f9] to-transparent mt-8 md:mt-12">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Calendly booking widget */}
        <div id="booking-form" className="mb-12 shadow-md rounded-xl overflow-hidden">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/hireshore/30min?email_notifications[email]=wehireshore@gmail.com&hide_gdpr_banner=1" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
          <div className="text-gray-600 text-left max-w-lg">
            <p className="text-base font-medium mb-2">🤝 Backed by Real People, Real Results</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Hireshore is founded by a global team in Nepal, dedicated to helping startups and agencies grow lean and smart.<br className="hidden md:block" />
              You're not talking to a faceless recruiter — you're partnering with a founder who's built and scaled remote teams.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 text-sm">
            <a 
              className="text-[#7346e6] font-bold hover:underline flex items-center" 
              href="#booking-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="mr-2">📞</span> Book a free strategy call
            </a>
            <a className="text-gray-500 hover:text-[#7346e6] hover:underline flex items-center" href="mailto:hello@hireshore.co">
              <span className="mr-2">📧</span> hello@hireshore.co
            </a>
            <a className="text-gray-500 hover:text-[#7346e6] hover:underline flex items-center" href="https://www.hireshore.co" target="_blank" rel="noopener noreferrer">
              <span className="mr-2">🌐</span> www.hireshore.co
            </a>
          </div>
        </div>
        <div className="text-xs text-center text-gray-400 pt-8 mt-6 border-t border-gray-100">© {new Date().getFullYear()} Hireshore. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default SiteFooter;
