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

  // Optimize CSS loading without forced reflows (disabled to prevent blank page)
  const optimizeCSSLoading = () => {
    // Intentionally no-op. Previously toggling media attributes on stylesheets
    // could leave critical CSS disabled in some browsers.
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

  // Ensure no persistent loading state that could hide content
  requestAnimationFrame(() => {
    document.documentElement.classList.remove('loading');
    document.documentElement.classList.add('loaded');
  });
  
  // Remove loading class quickly as a failsafe
  const removeLoadingState = () => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('loading');
      document.documentElement.classList.add('loaded');
    });
  };

  // Simplified: immediately mark styles as ready without heavy checks
  const checkStylesLoaded = () => {
    removeLoadingState();
  };

  // Start checking after DOM is ready with robust scheduling and fallbacks
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(removeLoadingState, { timeout: 200 });
      } else {
        setTimeout(removeLoadingState, 0);
      }
    });
  } else {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(removeLoadingState, { timeout: 200 });
    } else {
      setTimeout(removeLoadingState, 0);
    }
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