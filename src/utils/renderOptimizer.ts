/**
 * Render optimization utilities to prevent blocking and improve LCP
 */

/**
 * Ensure critical resources are loaded first
 */
export const optimizeCriticalPath = (): void => {
  if (typeof window === 'undefined') return;

  // Ensure fonts are loaded with proper fallbacks
  const ensureFontLoading = () => {
    // Check if fonts are loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Fonts are loaded, remove any loading states
        document.body.classList.remove('fonts-loading');
        document.body.classList.add('fonts-loaded');
      });
    }
  };

  // Optimize CSS loading
  const optimizeCSSLoading = () => {
    // Find any stylesheets that might be blocking
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && !href.includes('fonts.googleapis.com')) {
        // Ensure non-font stylesheets have proper loading attributes
        link.setAttribute('media', 'print');
        link.addEventListener('load', function(this: HTMLLinkElement) {
          this.media = 'all';
        });
      }
    });
  };

  // Run optimizations
  ensureFontLoading();
  
  // Defer CSS optimization until after initial render
  if ('requestAnimationFrame' in window) {
    window.requestAnimationFrame(() => {
      optimizeCSSLoading();
    });
  }
};

/**
 * Preload critical resources for better LCP
 */
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    // Critical images that might affect LCP
    '/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png', // Logo
    '/src/assets/before-after-comparison.jpg', // Hero image
  ];

  criticalResources.forEach((src) => {
    // Check if not already preloaded
    if (!document.querySelector(`link[href="${src}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  });
};

/**
 * Handle FOUC (Flash of Unstyled Content) prevention
 */
export const preventFOUC = (): void => {
  if (typeof window === 'undefined') return;

  // Add class to prevent FOUC
  document.documentElement.classList.add('loading');
  
  // Remove loading class when styles are ready
  const removeLoadingState = () => {
    document.documentElement.classList.remove('loading');
    document.documentElement.classList.add('loaded');
  };

  // Wait for all critical stylesheets to load
  const checkStylesLoaded = () => {
    const criticalStylesheets = document.querySelectorAll('link[rel="stylesheet"], link[rel="preload"][as="style"]');
    let loadedCount = 0;
    const totalCount = criticalStylesheets.length;

    const checkIfAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalCount) {
        removeLoadingState();
      }
    };

    criticalStylesheets.forEach((link) => {
      if ((link as HTMLLinkElement).sheet) {
        // Already loaded
        checkIfAllLoaded();
      } else {
        link.addEventListener('load', checkIfAllLoaded);
        // Fallback timeout
        setTimeout(checkIfAllLoaded, 100);
      }
    });

    // Failsafe: remove loading state after max wait time
    setTimeout(removeLoadingState, 500);
  };

  // Start checking after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkStylesLoaded);
  } else {
    checkStylesLoaded();
  }
};

/**
 * Initialize all render optimizations
 */
export const initRenderOptimizations = (): void => {
  preventFOUC();
  optimizeCriticalPath();
  preloadCriticalResources();
};