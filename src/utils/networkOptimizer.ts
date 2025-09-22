// Network optimization utilities to reduce critical request chains

export const preconnectOrigins = [
  'https://widgets.leadconnectorhq.com',
  'https://services.leadconnectorhq.com',
  'https://services.msgsndr.com',
  'https://images.leadconnectorhq.com',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

export const dnsPreconnectOrigins = [
  'https://www.youtube.com',
  'https://calendly.com',
  'https://polyfill.io'
];

// Function to dynamically add preconnect hints if not already present
export const addPreconnectHints = () => {
  preconnectOrigins.forEach(origin => {
    if (!document.querySelector(`link[href="${origin}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      if (origin.includes('fonts.gstatic.com')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    }
  });
};

// Function to defer non-critical third-party scripts
export const deferThirdPartyScripts = (callback: () => void, delay = 3000) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: delay });
  } else {
    setTimeout(callback, delay);
  }
};

// Resource prioritization helper
export const prioritizeResource = (url: string, as: string, importance: 'high' | 'low' = 'low') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  
  if (importance === 'high') {
    link.setAttribute('fetchpriority', 'high');
  }
  
  document.head.appendChild(link);
};

// Monitor and optimize critical request chains
export const optimizeCriticalChains = () => {
  // Add preconnect hints for better performance
  addPreconnectHints();
  
  // Monitor network performance
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('DNS lookup time:', navEntry.domainLookupEnd - navEntry.domainLookupStart);
            console.log('Connection time:', navEntry.connectEnd - navEntry.connectStart);
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    } catch (e) {
      // Fail silently if not supported
    }
  }
};

// Initialize optimizations when DOM is ready
export const initNetworkOptimizations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeCriticalChains);
  } else {
    optimizeCriticalChains();
  }
};