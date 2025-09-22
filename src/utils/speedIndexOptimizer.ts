/**
 * Speed Index Optimizer
 * Focuses on rapidly displaying above-the-fold content to improve Speed Index score
 */

interface SpeedOptimizationConfig {
  prioritizeAboveFold: boolean;
  deferBelowFold: boolean;
  optimizeImages: boolean;
  reduceAnimations: boolean;
}

class SpeedIndexOptimizer {
  private config: SpeedOptimizationConfig;
  private intersectionObserver?: IntersectionObserver;
  private criticalContentLoaded = false;

  constructor(config: Partial<SpeedOptimizationConfig> = {}) {
    this.config = {
      prioritizeAboveFold: true,
      deferBelowFold: true,
      optimizeImages: true,
      reduceAnimations: true,
      ...config
    };
  }

  /**
   * Initialize speed optimizations
   */
  init(): void {
    if (typeof window === 'undefined') return;

    // Prioritize critical content immediately
    this.prioritizeCriticalContent();
    
    // Defer non-critical resources
    if (this.config.deferBelowFold) {
      this.deferBelowFoldContent();
    }

    // Optimize image loading
    if (this.config.optimizeImages) {
      this.optimizeImageLoading();
    }

    // Reduce animation delays
    if (this.config.reduceAnimations) {
      this.reduceAnimationDelays();
    }

    // Set up intersection observer for progressive loading
    this.setupProgressiveLoading();
  }

  /**
   * Prioritize critical above-the-fold content
   */
  private prioritizeCriticalContent(): void {
    // Force immediate visibility of hero content
    const style = document.createElement('style');
    style.textContent = `
      /* Critical Speed Index optimizations */
      .hero-container,
      .landing-hero,
      [data-critical="true"] {
        opacity: 1 !important;
        transform: none !important;
        animation: none !important;
        will-change: auto !important;
      }
      
      /* Prevent layout shifts in critical sections */
      .hero-container {
        min-height: 100vh;
        contain: layout;
      }
      
      /* Prioritize critical text */
      .hero-text,
      .hero-subtitle,
      h1, h2 {
        font-display: swap;
        text-rendering: optimizeSpeed;
      }
      
      /* Defer non-critical content */
      .below-fold:not(.visible) {
        content-visibility: auto;
        contain-intrinsic-size: 0 400px;
      }
    `;
    document.head.appendChild(style);

    // Mark critical elements
    const criticalSelectors = [
      'nav',
      '.hero-container',
      '.landing-hero',
      'h1',
      '.hero-text',
      '.hero-subtitle'
    ];

    criticalSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        (el as HTMLElement).setAttribute('data-critical', 'true');
        (el as HTMLElement).style.willChange = 'auto';
      });
    });

    this.criticalContentLoaded = true;
  }

  /**
   * Aggressively defer below-the-fold content
   */
  private deferBelowFoldContent(): void {
    // Use requestIdleCallback to defer non-critical operations
    const deferNonCritical = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback, { timeout: 2000 });
      } else {
        setTimeout(callback, 100);
      }
    };

    // Defer loading of heavy components
    deferNonCritical(() => {
      const heavySelectors = [
        '[data-component="testimonials"]',
        '[data-component="media-features"]',
        '[data-component="footer"]',
        '.video-container',
        'iframe'
      ];

      heavySelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          (el as HTMLElement).classList.add('below-fold');
        });
      });
    });
  }

  /**
   * Optimize image loading for Speed Index
   */
  private optimizeImageLoading(): void {
    // Prioritize above-the-fold images
    const prioritizeImage = (img: HTMLImageElement, priority: 'high' | 'low') => {
      img.setAttribute('fetchpriority', priority);
      if (priority === 'high') {
        img.setAttribute('loading', 'eager');
        img.style.contentVisibility = 'visible';
      } else {
        img.setAttribute('loading', 'lazy');
        img.style.contentVisibility = 'auto';
      }
    };

    // High priority images (above-the-fold)
    const criticalImages = document.querySelectorAll('img[data-critical], .hero-container img, nav img');
    criticalImages.forEach(img => prioritizeImage(img as HTMLImageElement, 'high'));

    // Low priority images (below-the-fold)
    const nonCriticalImages = document.querySelectorAll('img:not([data-critical]):not(.hero-container img):not(nav img)');
    nonCriticalImages.forEach(img => prioritizeImage(img as HTMLImageElement, 'low'));

    // Defer image decoding for non-critical images
    setTimeout(() => {
      nonCriticalImages.forEach(img => {
        (img as HTMLImageElement).decoding = 'async';
      });
    }, 100);
  }

  /**
   * Reduce animation delays that block visual content
   */
  private reduceAnimationDelays(): void {
    // Disable animations for critical content during initial load
    const disableInitialAnimations = () => {
      const style = document.createElement('style');
      style.textContent = `
        .hero-container *,
        .landing-hero *,
        nav *,
        [data-critical="true"] * {
          animation-duration: 0.01ms !important;
          animation-delay: 0ms !important;
          transition-duration: 0.01ms !important;
          transition-delay: 0ms !important;
        }
      `;
      style.setAttribute('data-speed-optimization', 'true');
      document.head.appendChild(style);

      // Re-enable animations after critical content is loaded
      setTimeout(() => {
        const speedStyles = document.querySelectorAll('[data-speed-optimization]');
        speedStyles.forEach(style => style.remove());
      }, 1000);
    };

    // Apply immediately for critical content
    disableInitialAnimations();

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  /**
   * Set up progressive loading for below-the-fold content
   */
  private setupProgressiveLoading(): void {
    if (!('IntersectionObserver' in window)) return;

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('visible');
            
            // Trigger lazy loading for this section
            this.loadSectionContent(element);
            
            // Stop observing this element
            this.intersectionObserver?.unobserve(element);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    // Observe below-the-fold sections
    setTimeout(() => {
      const belowFoldSections = document.querySelectorAll('.below-fold, [data-lazy-load]');
      belowFoldSections.forEach(section => {
        this.intersectionObserver?.observe(section);
      });
    }, 500);
  }

  /**
   * Load content for a specific section when it becomes visible
   */
  private loadSectionContent(element: HTMLElement): void {
    // Restore normal rendering for this section
    element.style.contentVisibility = 'visible';
    element.style.containIntrinsicSize = 'auto';

    // Load images in this section
    const images = element.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      const imageEl = img as HTMLImageElement;
      imageEl.loading = 'eager';
      imageEl.decoding = 'async';
    });

    // Load videos/iframes in this section
    const videos = element.querySelectorAll('iframe, video');
    videos.forEach(video => {
      const videoEl = video as HTMLIFrameElement | HTMLVideoElement;
      if (videoEl.dataset.src) {
        videoEl.src = videoEl.dataset.src;
        delete videoEl.dataset.src;
      }
    });
  }

  /**
   * Clean up resources
   */
  cleanup(): void {
    this.intersectionObserver?.disconnect();
  }
}

// Global instance
export const speedIndexOptimizer = new SpeedIndexOptimizer();

// Initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => speedIndexOptimizer.init());
  } else {
    speedIndexOptimizer.init();
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => speedIndexOptimizer.cleanup());
}

// Export for manual initialization
export const initSpeedIndexOptimizations = () => {
  speedIndexOptimizer.init();
};