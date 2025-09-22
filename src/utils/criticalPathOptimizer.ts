// Critical path optimization utilities

// Defer heavy computations to prevent main thread blocking
export const deferHeavyWork = (work: () => void, timeout = 5000) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(work, { timeout });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(work, 0);
  }
};

// Batch DOM updates to prevent layout thrashing
export const batchDOMUpdates = (updates: (() => void)[]) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

// Progressive image loading
export const setupProgressiveImageLoading = () => {
  deferHeavyWork(() => {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      if (img.dataset.src) {
        imageObserver.observe(img);
      }
    });
  });
};

// Preload critical resources with priority hints
export const preloadCriticalAssets = () => {
  // Preload critical images
  const criticalImages = [
    '/lovable-uploads/ebb69f88-62a2-4344-a4f5-5f906856fb26.png' // Logo
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Ensure fonts are loaded if not already loaded asynchronously
  deferHeavyWork(() => {
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]') as HTMLLinkElement;
    if (fontLink && fontLink.rel === 'preload') {
      // Font is already being loaded asynchronously via preload
      return;
    }
    
    // Fallback: ensure fonts are available
    if (!document.fonts || document.fonts.status === 'loaded') return;
    
    document.fonts.ready.then(() => {
      // Fonts loaded - force repaint to apply font changes
      document.documentElement.style.transform = 'translateZ(0)';
      requestAnimationFrame(() => {
        document.documentElement.style.transform = '';
      });
    });
  }, 100);
};

// Optimize third-party scripts loading
export const optimizeThirdPartyScripts = () => {
  deferHeavyWork(() => {
    // Add loading optimization attributes to existing scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const scriptElement = script as HTMLScriptElement;
      if (!scriptElement.hasAttribute('async') && !scriptElement.hasAttribute('defer')) {
        // Add defer to non-critical scripts
        if (!scriptElement.src.includes('widget.js') && !scriptElement.src.includes('booking')) {
          scriptElement.setAttribute('defer', '');
        }
      }
    });
  });
};