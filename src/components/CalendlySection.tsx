import React, { useEffect } from 'react';

const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly script only once
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section 
      id="book" 
      aria-label="Book a meeting" 
      className="py-12 sm:py-16 bg-gray-50"
      style={{ scrollMarginTop: '96px' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Book Your Free Strategy Session</h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">Get a custom plan for your business in 30 minutes</p>
          <div className="mt-4 sm:mt-6">
            <button className="bg-primary text-primary-foreground font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Schedule Your Free Call
            </button>
          </div>
        </div>
        
        {/* Calendly inline widget */}
        <div 
          className="calendly-inline-widget bg-white rounded-lg shadow-lg overflow-hidden mx-auto"
          data-url="https://calendly.com/hireshore/30min"
          style={{ minWidth: '280px', maxWidth: '100%', height: '600px' }}
        />
        
        <noscript>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">JavaScript is required to book. Open here:</p>
            <a 
              href="https://calendly.com/hireshore/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book on Calendly
            </a>
          </div>
        </noscript>
      </div>
    </section>
  );
};

export default CalendlySection;