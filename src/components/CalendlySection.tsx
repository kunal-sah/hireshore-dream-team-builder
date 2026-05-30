import React, { useEffect, useRef, useState } from 'react';
import { getCalendlyURL, getCurrentPagePath } from '@/utils/utmTracking';
import kunalPhoto from '@/assets/kunal-sah.png';


declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css';

const CalendlySection = () => {
  const calendlyURL = getCalendlyURL(`calendly_section_${getCurrentPagePath()}`);
  const sectionRef = useRef<HTMLElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    const initWidget = () => {
      if (initializedRef.current) return;
      if (!widgetRef.current || !window.Calendly) return;
      widgetRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: calendlyURL,
        parentElement: widgetRef.current,
        prefill: {},
        utm: {},
      });
      initializedRef.current = true;
      // Give the iframe a moment to render before hiding the loader
      setTimeout(() => setIsWidgetReady(true), 600);
    };

    const loadCalendly = () => {
      // Ensure CSS
      if (!document.querySelector(`link[href="${CALENDLY_CSS_HREF}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = CALENDLY_CSS_HREF;
        document.head.appendChild(link);
      }

      if (window.Calendly) {
        initWidget();
        return;
      }

      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${CALENDLY_SCRIPT_SRC}"]`
      );
      if (existing) {
        existing.addEventListener('load', initWidget, { once: true });
        // In case it already loaded but Calendly attached late
        const t = setInterval(() => {
          if (window.Calendly) {
            clearInterval(t);
            initWidget();
          }
        }, 150);
        setTimeout(() => clearInterval(t), 8000);
        return;
      }

      const script = document.createElement('script');
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadCalendly();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleBookingClick = () => loadCalendly();
    document.addEventListener('calendly-load', handleBookingClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('calendly-load', handleBookingClick);
    };
  }, [calendlyURL]);

  return (
    <section
      ref={sectionRef}
      id="book"
      aria-label="Book a meeting"
      className="py-16 md:py-24 bg-secondary"
      style={{ scrollMarginTop: '96px' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <img
            src={kunalPhoto}
            alt="Kunal Sah, Founder of Hireshore"
            loading="lazy"
            className="mx-auto mb-5 w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-white shadow-lg"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Talk to Kunal — 30 min, no pitch</h2>

          <p className="text-muted-foreground text-base sm:text-lg px-4">Still have questions? Get a custom plan for your business in 30 minutes.</p>
          <div className="mt-4 sm:mt-6">
            <button
              className="bg-primary text-primary-foreground font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              onClick={() => document.dispatchEvent(new CustomEvent('calendly-load'))}
            >
              Get My Delivery Pod
            </button>
          </div>
        </div>

        {/* Calendly inline widget */}
        <div className="relative w-full min-w-[280px] max-w-full h-[1150px] md:h-[1050px] lg:h-[820px] bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
          {!isWidgetReady && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white z-10 pointer-events-none">
              <div className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <p className="text-sm text-muted-foreground">Loading calendar…</p>
            </div>
          )}
          <div
            ref={widgetRef}
            className="calendly-inline-widget w-full h-full"
            data-url={calendlyURL}
          />
        </div>

        <noscript>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">JavaScript is required to book. Open here:</p>
            <a
              href={calendlyURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
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