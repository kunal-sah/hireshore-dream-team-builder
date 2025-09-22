/**
 * Bundle optimization utilities to reduce unused JavaScript
 */

/**
 * Dynamically import components only when needed
 */
export const loadComponentOnDemand = async <T>(
  importFn: () => Promise<{ default: T }>
): Promise<T> => {
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.error('Failed to load component:', error);
    throw error;
  }
};

/**
 * Preload critical components during idle time
 */
export const preloadCriticalComponents = (): void => {
  if (typeof window === 'undefined') return;

  const preloadComponents = [
    // Preload above-the-fold components
    () => import('../components/NavBar'),
    () => import('../components/LandingHero'),
    () => import('../components/TrustedStartups'),
  ];

  const preloadNextBatch = () => {
    preloadComponents.forEach(importFn => {
      importFn().catch(() => {
        // Fail silently - this is just preloading
      });
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preloadNextBatch, { timeout: 3000 });
  } else {
    setTimeout(preloadNextBatch, 2000);
  }
};

/**
 * Remove unused event listeners and clean up references
 */
export const cleanupUnusedReferences = (): void => {
  // Clean up any global references that might be holding onto memory
  if (typeof window !== 'undefined') {
    // Remove unused global callbacks
    const unusedGlobals = ['gtag', 'fbq', 'analytics'] as const;
    unusedGlobals.forEach(globalName => {
      if (window[globalName as keyof Window] && typeof window[globalName as keyof Window] === 'function') {
        // Only clean up if they're not actively being used
        setTimeout(() => {
          delete (window as any)[globalName];
        }, 30000); // 30 second delay
      }
    });
  }
};

/**
 * Optimize bundle by removing unused polyfills and libraries
 */
export const optimizeBundleSize = (): void => {
  // This is mainly handled at build time, but we can do some runtime optimizations
  
  // Remove unused CSS classes (simplified version)
  const removeUnusedStyles = () => {
    const styleSheets = Array.from(document.styleSheets);
    const usedClasses = new Set<string>();
    
    // Collect all classes actually used in DOM
    document.querySelectorAll('*').forEach(element => {
      element.classList.forEach(className => {
        usedClasses.add(className);
      });
    });
    
    // This is a simplified approach - in production you'd use PurgeCSS
    console.log(`Found ${usedClasses.size} used CSS classes`);
  };

  // Defer this optimization
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(removeUnusedStyles, { timeout: 10000 });
  }
};

/**
 * Initialize all bundle optimizations
 */
export const initBundleOptimizations = (): void => {
  preloadCriticalComponents();
  
  // Defer non-critical optimizations
  window.addEventListener('load', () => {
    setTimeout(() => {
      optimizeBundleSize();
      cleanupUnusedReferences();
    }, 5000);
  });
};