/**
 * Critical Content Optimizer
 * Ensures above-the-fold content renders immediately for optimal Speed Index
 */
import React, { useEffect } from 'react';

interface CriticalContentOptimizerProps {
  children: React.ReactNode;
}

export const CriticalContentOptimizer: React.FC<CriticalContentOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Mark critical content for immediate rendering
    const markCriticalContent = () => {
      const criticalSelectors = [
        'nav',
        '.hero-container',
        '.landing-hero',
        'h1',
        '.hero-text',
        '.hero-subtitle',
        '.btn-primary',
        '[data-critical="true"]'
      ];

      criticalSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          const element = el as HTMLElement;
          element.setAttribute('data-speed-critical', 'true');
          element.style.willChange = 'auto';
          element.style.contentVisibility = 'visible';
          
          // Remove any animation delays on critical content
          element.style.animationDelay = '0ms';
          element.style.transitionDelay = '0ms';
        });
      });
    };

    // Apply immediately
    markCriticalContent();
    
    // Apply again after DOM mutations
    const observer = new MutationObserver(() => {
      markCriticalContent();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};