/**
 * Critical CSS optimization utilities
 * Extracts and inlines critical above-the-fold CSS while deferring non-critical styles
 */

export const deferNonCriticalCSS = (): void => {
  if (typeof window === 'undefined') return;

  // Function to defer CSS loading
  const deferCSS = (href: string, media = 'all') => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print'; // Load as print media to avoid blocking
    link.onload = function(this: HTMLLinkElement) { 
      this.media = media; // Switch to target media once loaded
    };
    
    // Fallback for older browsers
    setTimeout(() => {
      if (link.media === 'print') {
        link.media = media;
      }
    }, 3000);
    
    document.head.appendChild(link);
  };

  // Defer loading of non-critical stylesheets after page load
  window.addEventListener('load', () => {
    // Use requestIdleCallback to defer even further
    const deferStyles = () => {
      // Defer any large CSS files that aren't critical for above-the-fold content
      const nonCriticalStyles = [
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap',
        // Add other non-critical stylesheets here
      ];

      nonCriticalStyles.forEach(href => {
        // Check if not already loaded
        if (!document.querySelector(`link[href="${href}"]`)) {
          deferCSS(href);
        }
      });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(deferStyles, { timeout: 2000 });
    } else {
      setTimeout(deferStyles, 100);
    }
  });
};

/**
 * Remove unused CSS rules dynamically (advanced optimization)
 */
export const removeUnusedCSS = (): void => {
  if (typeof window === 'undefined' || !document.styleSheets) return;

  // This is a simplified version - in production you'd use tools like PurgeCSS
  try {
    const usedSelectors = new Set<string>();
    
    // Collect all selectors actually used in the DOM
    const collectUsedSelectors = () => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(element => {
        // Add class-based selectors
        element.classList.forEach(className => {
          usedSelectors.add(`.${className}`);
        });
        
        // Add ID-based selectors
        if (element.id) {
          usedSelectors.add(`#${element.id}`);
        }
        
        // Add tag-based selectors
        usedSelectors.add(element.tagName.toLowerCase());
      });
    };

    // Run after DOM is ready and then periodically for dynamic content
    if (document.readyState === 'complete') {
      collectUsedSelectors();
    } else {
      window.addEventListener('load', collectUsedSelectors);
    }
    
    // Re-collect selectors after dynamic content loads
    setTimeout(collectUsedSelectors, 2000);
    setTimeout(collectUsedSelectors, 5000);
    
  } catch (error) {
    // Fail silently - this is an optimization, not critical functionality
    console.warn('CSS optimization error:', error);
  }
};

/**
 * Initialize all CSS optimizations
 */
export const initCSSOptimizations = (): void => {
  deferNonCriticalCSS();
  
  // Defer advanced optimizations until after initial render
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        removeUnusedCSS();
      }, { timeout: 5000 });
    }
  });
};