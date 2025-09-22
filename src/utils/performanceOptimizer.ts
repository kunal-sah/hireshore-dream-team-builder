// Performance optimization utilities

// Defer non-critical JavaScript execution
export const deferExecution = (callback: () => void, delay = 0) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: 5000 });
  } else {
    setTimeout(callback, delay);
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];
  
  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
};

// Optimize images loading
export const optimizeImageLoading = () => {
  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach((img, index) => {
    if (index > 2) { // Skip first 3 images (likely above fold)
      img.setAttribute('loading', 'lazy');
    }
  });
};

// Bundle chunk preloading for better UX
export const preloadRouteChunks = (routes: string[]) => {
  routes.forEach(route => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    document.head.appendChild(link);
  });
};