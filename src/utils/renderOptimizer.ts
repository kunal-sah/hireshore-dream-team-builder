/**
 * Render optimization utilities to prevent blocking and improve LCP
 * Optimized to prevent forced reflows
 */

/**
 * Ensure critical resources are loaded first without forced reflows
 */
export const optimizeCriticalPath = (): void => {
  if (typeof window === 'undefined') return;

  // Ensure fonts are loaded with proper fallbacks
  const ensureFontLoading = () => {
    // Check if fonts are loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Use RAF to batch DOM writes and prevent reflows
        requestAnimationFrame(() => {
          document.body.classList.remove('fonts-loading');
          document.body.classList.add('fonts-loaded');
        });
      });
    }
  };

  // Optimize CSS loading without forced reflows
  const optimizeCSSLoading = () => {
    // Defer to prevent blocking main thread
    requestIdleCallback(() => {
      // Batch all DOM reads first
      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      const styleData = stylesheets.map(link => ({
        element: link as HTMLLinkElement,
        href: link.getAttribute('href')
      }));

      // Then batch all DOM writes
      requestAnimationFrame(() => {
        styleData.forEach(({ element, href }) => {
          if (href && !href.includes('fonts.googleapis.com')) {
            // Ensure non-font stylesheets have proper loading attributes
            element.setAttribute('media', 'print');
            element.addEventListener('load', function(this: HTMLLinkElement) {
              // Batch the media change to prevent reflow
              requestAnimationFrame(() => {
                this.media = 'all';
              });
            });
          }
        });
      });
    });
  };

  // Run optimizations with proper scheduling
  ensureFontLoading();
  
  // Defer CSS optimization to prevent blocking
  if ('requestIdleCallback' in window) {
    requestIdleCallback(optimizeCSSLoading);
  } else {
    setTimeout(optimizeCSSLoading, 0);
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

  // Use RAF to batch DOM operations and prevent reflows
  requestAnimationFrame(() => {
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
  });
};

/**
 * Handle FOUC (Flash of Unstyled Content) prevention without forced reflows
 */
export const preventFOUC = (): void => {
  if (typeof window === 'undefined') return;

  // Add class to prevent FOUC without querying layout
  requestAnimationFrame(() => {
    document.documentElement.classList.add('loading');
  });
  
  // Remove loading class when styles are ready
  const removeLoadingState = () => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('loading');
      document.documentElement.classList.add('loaded');
    });
  };

  // Wait for all critical stylesheets to load without forced reflows
  const checkStylesLoaded = () => {
    // Use timeout-based approach instead of synchronous sheet checking
    let loadedCount = 0;
    let totalCount = 0;

    // Batch DOM reads
    requestAnimationFrame(() => {
      const criticalStylesheets = document.querySelectorAll('link[rel="stylesheet"], link[rel="preload"][as="style"]');
      totalCount = criticalStylesheets.length;

      const checkIfAllLoaded = () => {
        loadedCount++;
        if (loadedCount >= totalCount) {
          removeLoadingState();
        }
      };

      // Use event-based loading detection to avoid forced reflows
      criticalStylesheets.forEach((link) => {
        // Avoid checking .sheet property which forces reflow
        link.addEventListener('load', checkIfAllLoaded, { once: true });
        
        // Use a timeout as fallback instead of synchronous check
        setTimeout(() => {
          if (loadedCount < totalCount) {
            checkIfAllLoaded();
          }
        }, 50);
      });

      // Failsafe: remove loading state after reasonable wait time
      setTimeout(removeLoadingState, 300);
    });
  };

  // Start checking after DOM is ready with proper scheduling
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      requestIdleCallback(checkStylesLoaded);
    });
  } else {
    requestIdleCallback(checkStylesLoaded);
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