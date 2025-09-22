import React, { useState, useEffect, useRef } from 'react';
import { scriptManager } from '../utils/scriptManager';

interface LazyCalendlyProps {
  className?: string;
}

export const LazyCalendly: React.FC<LazyCalendlyProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !isScriptLoaded) {
      // Use script manager to prevent duplicate loading
      const loadCalendlyAssets = async () => {
        try {
          // Load CSS first (non-blocking)
          const cssLink = document.createElement('link');
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://assets.calendly.com/assets/booking/css/booking-3c803e311.css';
          cssLink.media = 'print';
          cssLink.onload = function(this: HTMLLinkElement) { 
            this.media = 'all'; 
          };
          document.head.appendChild(cssLink);

          // Load JavaScript using script manager
          await scriptManager.loadScript(
            'https://assets.calendly.com/assets/external/widget.js',
            { 'data-manual-load': 'true' }
          );
          
          setIsScriptLoaded(true);
        } catch (error) {
          console.warn('Failed to load Calendly assets:', error);
        }
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => loadCalendlyAssets(), { timeout: 2000 });
      } else {
        setTimeout(loadCalendlyAssets, 500);
      }
    }
  }, [isVisible, isScriptLoaded]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible && isScriptLoaded ? (
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/hireshore/strategy-session?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
          data-auto-load="false"
        />
      ) : (
        <div className="min-w-80 h-[700px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex flex-col items-center justify-center text-center p-8">
          <div className="animate-pulse space-y-4">
            <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto"></div>
            <div className="space-y-2">
              <div className="h-4 bg-blue-200 rounded w-48 mx-auto"></div>
              <div className="h-4 bg-blue-200 rounded w-36 mx-auto"></div>
            </div>
          </div>
          <p className="text-blue-600 font-medium mt-4">Loading booking calendar...</p>
        </div>
      )}
      
      {/* Fallback for users with JavaScript disabled */}
      <noscript>
        <div className="text-center p-8">
          <p className="text-gray-600 mb-4">
            JavaScript is required to load the booking calendar.
          </p>
          <a 
            href="https://calendly.com/hireshore/strategy-session" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book on Calendly →
          </a>
        </div>
      </noscript>
    </div>
  );
};