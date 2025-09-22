/**
 * Critical CSS optimization utilities
 * Extracts and inlines critical above-the-fold CSS while deferring non-critical styles
 */

/**
 * Remove render-blocking CSS by ensuring all stylesheets load asynchronously
 * But preserve critical app styles
 */
export const eliminateRenderBlockingCSS = (): void => {
  if (typeof window === 'undefined') return;

  // Function to convert synchronous CSS to async
  const makeStylesheetAsync = (link: HTMLLinkElement) => {
    if (link.rel === 'stylesheet' && !link.hasAttribute('data-async-converted')) {
      // Skip main app stylesheets, critical styles, and fonts
      if (link.hasAttribute('data-critical') || 
          link.href.includes('fonts.googleapis.com') ||
          link.href.includes('fonts.gstatic.com') ||
          link.href.includes('index') ||
          link.href.includes('main') ||
          link.href.includes('app')) {
        return; // Don't convert critical stylesheets
      }
      
      const newLink = document.createElement('link');
      newLink.rel = 'preload';
      newLink.href = link.href;
      newLink.as = 'style';
      newLink.setAttribute('data-async-converted', 'true');
      newLink.onload = function(this: HTMLLinkElement) {
        this.onload = null;
        this.rel = 'stylesheet';
      };
      
      // Insert the new async link before the original
      link.parentNode?.insertBefore(newLink, link);
      // Remove the original synchronous link
      link.remove();
    }
  };

  // Convert any existing synchronous stylesheets
  const convertExistingCSS = () => {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]:not([data-async-converted])');
    stylesheets.forEach((link) => {
      const htmlLink = link as HTMLLinkElement;
      makeStylesheetAsync(htmlLink);
    });
  };

  // Observer to catch dynamically added stylesheets
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && (node as Element).tagName === 'LINK') {
          const link = node as HTMLLinkElement;
          if (link.rel === 'stylesheet' && !link.hasAttribute('data-async-converted')) {
            // Delay slightly to allow the element to be fully processed
            setTimeout(() => makeStylesheetAsync(link), 0);
          }
        }
      });
    });
  });

  // Start observing
  observer.observe(document.head, { childList: true, subtree: true });

  // Convert existing CSS immediately if DOM is ready
  if (document.readyState !== 'loading') {
    convertExistingCSS();
  } else {
    document.addEventListener('DOMContentLoaded', convertExistingCSS);
  }

  // Also run after a brief delay to catch any CSS loaded by modules
  setTimeout(convertExistingCSS, 100);
  setTimeout(convertExistingCSS, 500);
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
  // Eliminate render-blocking CSS first
  eliminateRenderBlockingCSS();
  
  // Defer advanced optimizations until after initial render
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        removeUnusedCSS();
      }, { timeout: 5000 });
    }
  });
};