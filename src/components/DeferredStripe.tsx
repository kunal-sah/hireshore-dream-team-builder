import React, { useEffect, useState } from 'react';
import { scriptManager } from '../utils/scriptManager';

interface DeferredStripeProps {
  children: React.ReactNode;
  defer?: boolean;
}

export const DeferredStripe: React.FC<DeferredStripeProps> = ({ children, defer = true }) => {
  const [isStripeLoaded, setIsStripeLoaded] = useState(false);

  useEffect(() => {
    if (!defer) {
      setIsStripeLoaded(true);
      return;
    }

    // Check if Stripe is already loaded
    if (window.Stripe) {
      setIsStripeLoaded(true);
      return;
    }

    const loadStripe = async () => {
      try {
        await scriptManager.loadScript(
          'https://js.stripe.com/v3/',
          { 'data-manual-load': 'true' }
        );
        setIsStripeLoaded(true);
      } catch (error) {
        console.warn('Failed to load Stripe:', error);
      }
    };

    // Defer Stripe loading until interaction or idle time
    const deferredLoad = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => loadStripe(), { timeout: 3000 });
      } else {
        setTimeout(loadStripe, 1000);
      }
    };

    // Load on user interaction or after delay
    const interactionEvents = ['scroll', 'click', 'touchstart', 'mouseover'];
    const handleInteraction = () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction, true);
      });
      deferredLoad();
    };

    interactionEvents.forEach(event => {
      document.addEventListener(event, handleInteraction, { 
        once: true, 
        passive: true, 
        capture: true 
      });
    });

    // Fallback: load after 5 seconds
    setTimeout(deferredLoad, 5000);

    return () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction, true);
      });
    };
  }, [defer]);

  // Don't render children until Stripe is ready (if deferred)
  if (defer && !isStripeLoaded) {
    return null;
  }

  return <>{children}</>;
};

declare global {
  interface Window {
    Stripe: any;
  }
}