/**
 * Cache Optimizer
 * Implements client-side caching strategies to improve repeat visit performance
 */

interface CacheConfig {
  enableServiceWorker: boolean;
  enableMemoryCache: boolean;
  enableResourceHints: boolean;
  cacheDuration: {
    scripts: number;
    styles: number;
    images: number;
    fonts: number;
  };
}

class CacheOptimizer {
  private config: CacheConfig;
  private memoryCache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      enableServiceWorker: true,
      enableMemoryCache: true,
      enableResourceHints: true,
      cacheDuration: {
        scripts: 86400000, // 24 hours
        styles: 86400000,  // 24 hours
        images: 604800000, // 7 days
        fonts: 2592000000, // 30 days
      },
      ...config
    };
  }

  /**
   * Initialize cache optimizations
   */
  async init(): Promise<void> {
    if (typeof window === 'undefined') return;

    // Register service worker for caching
    if (this.config.enableServiceWorker) {
      await this.registerServiceWorker();
    }

    // Add resource hints for better caching
    if (this.config.enableResourceHints) {
      this.addResourceHints();
    }

    // Preload critical resources
    this.preloadCriticalResources();

    // Setup memory cache cleanup
    this.setupCacheCleanup();

    // Optimize third-party resource caching
    this.optimizeThirdPartyResources();
  }

  /**
   * Register service worker for advanced caching
   */
  private async registerServiceWorker(): Promise<void> {
    if (!('serviceWorker' in navigator)) return;

    try {
      // Create service worker code dynamically
      const swCode = this.generateServiceWorkerCode();
      const blob = new Blob([swCode], { type: 'application/javascript' });
      const swUrl = URL.createObjectURL(blob);

      const registration = await navigator.serviceWorker.register(swUrl);
      console.log('Cache optimizer service worker registered:', registration);

      // Clean up blob URL
      URL.revokeObjectURL(swUrl);
    } catch (error) {
      console.warn('Failed to register cache service worker:', error);
    }
  }

  /**
   * Generate service worker code for caching
   */
  private generateServiceWorkerCode(): string {
    return `
      const CACHE_NAME = 'hireshore-cache-v1';
      const CACHE_DURATION = {
        scripts: ${this.config.cacheDuration.scripts},
        styles: ${this.config.cacheDuration.styles},
        images: ${this.config.cacheDuration.images},
        fonts: ${this.config.cacheDuration.fonts},
      };

      // Install event - cache critical resources
      self.addEventListener('install', (event) => {
        event.waitUntil(
          caches.open(CACHE_NAME).then((cache) => {
            // Cache critical resources immediately
            return cache.addAll([
              '/',
              '/assets/index-RHy9OfMu.css',
              '/assets/index-B92P8K1F.js'
            ]).catch(() => {
              // Ignore cache failures during install
            });
          })
        );
        self.skipWaiting();
      });

      // Activate event - clean up old caches
      self.addEventListener('activate', (event) => {
        event.waitUntil(
          caches.keys().then((cacheNames) => {
            return Promise.all(
              cacheNames.map((cacheName) => {
                if (cacheName !== CACHE_NAME) {
                  return caches.delete(cacheName);
                }
              })
            );
          })
        );
        self.clients.claim();
      });

      // Fetch event - implement cache-first strategy
      self.addEventListener('fetch', (event) => {
        const url = new URL(event.request.url);
        
        // Only cache same-origin requests and specific third-party resources
        if (url.origin === self.location.origin || 
            url.hostname.includes('fonts.googleapis.com') ||
            url.hostname.includes('fonts.gstatic.com')) {
          
          event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
              if (cachedResponse) {
                // Check if cache is still valid
                const cacheTime = parseInt(cachedResponse.headers.get('sw-cache-time') || '0');
                const resourceType = getResourceType(event.request.url);
                const maxAge = CACHE_DURATION[resourceType] || CACHE_DURATION.scripts;
                
                if (Date.now() - cacheTime < maxAge) {
                  return cachedResponse;
                }
              }

              // Fetch and cache the resource
              return fetch(event.request).then((response) => {
                if (response.status === 200) {
                  const responseClone = response.clone();
                  caches.open(CACHE_NAME).then((cache) => {
                    // Add cache timestamp
                    const headers = new Headers(responseClone.headers);
                    headers.set('sw-cache-time', Date.now().toString());
                    
                    const cachedResponse = new Response(responseClone.body, {
                      status: responseClone.status,
                      statusText: responseClone.statusText,
                      headers: headers
                    });
                    
                    cache.put(event.request, cachedResponse);
                  });
                }
                return response;
              }).catch(() => {
                // Return cached version if network fails
                return cachedResponse || new Response('Offline', { status: 503 });
              });
            })
          );
        }
      });

      function getResourceType(url) {
        if (url.includes('.js')) return 'scripts';
        if (url.includes('.css')) return 'styles';
        if (url.match(/\\.(png|jpg|jpeg|gif|webp|svg)$/)) return 'images';
        if (url.match(/\\.(woff|woff2|ttf|eot)$/)) return 'fonts';
        return 'scripts';
      }
    `;
  }

  /**
   * Add resource hints for better caching
   */
  private addResourceHints(): void {
    const head = document.head;

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://js.stripe.com',
      'https://widgets.leadconnectorhq.com',
      'https://services.leadconnectorhq.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      head.appendChild(link);
    });

    // DNS prefetch for additional domains
    const dnsPrefetchDomains = [
      'https://assets.calendly.com',
      'https://static.doubleclick.net',
      'https://m.stripe.network'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      head.appendChild(link);
    });
  }

  /**
   * Preload critical resources
   */
  private preloadCriticalResources(): void {
    const criticalResources = [
      { href: '/assets/index-RHy9OfMu.css', as: 'style' },
      { href: '/assets/index-B92P8K1F.js', as: 'script' },
      { href: 'https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  }

  /**
   * Setup memory cache cleanup
   */
  private setupCacheCleanup(): void {
    // Clean up expired memory cache entries every 5 minutes
    setInterval(() => {
      const now = Date.now();
      for (const [key, value] of this.memoryCache.entries()) {
        if (now - value.timestamp > value.ttl) {
          this.memoryCache.delete(key);
        }
      }
    }, 300000); // 5 minutes
  }

  /**
   * Optimize third-party resource caching
   */
  private optimizeThirdPartyResources(): void {
    // Lazy load non-critical third-party resources
    const lazyLoadThirdParty = () => {
      // Defer Stripe loading until needed
      this.deferStripeLoading();
      
      // Defer chat widget loading
      this.deferChatWidgetLoading();
      
      // Defer analytics loading
      this.deferAnalyticsLoading();
    };

    // Use idle callback to defer third-party loading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(lazyLoadThirdParty, { timeout: 5000 });
    } else {
      setTimeout(lazyLoadThirdParty, 2000);
    }
  }

  /**
   * Defer Stripe loading until interaction
   */
  private deferStripeLoading(): void {
    let stripeLoaded = false;
    const loadStripe = () => {
      if (stripeLoaded) return;
      stripeLoaded = true;
      
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3';
      script.async = true;
      document.head.appendChild(script);
    };

    // Load on user interaction
    ['click', 'scroll', 'keydown'].forEach(event => {
      document.addEventListener(event, loadStripe, { once: true, passive: true });
    });

    // Fallback: load after 10 seconds
    setTimeout(loadStripe, 10000);
  }

  /**
   * Defer chat widget loading
   */
  private deferChatWidgetLoading(): void {
    // Chat widget is already deferred in index.html, but we can optimize further
    const optimizeChatWidget = () => {
      const existingScript = document.querySelector('script[src*="leadconnectorhq.com"]') as HTMLScriptElement;
      if (existingScript && existingScript.src) {
        // Add cache headers via fetch
        this.cacheResource(existingScript.src, 'scripts');
      }
    };

    setTimeout(optimizeChatWidget, 3000);
  }

  /**
   * Defer analytics loading
   */
  private deferAnalyticsLoading(): void {
    // Cache analytics resources when they load
    const cacheAnalytics = () => {
      const analyticsScripts = document.querySelectorAll('script[src*="doubleclick.net"]') as NodeListOf<HTMLScriptElement>;
      analyticsScripts.forEach(script => {
        if (script.src) {
          this.cacheResource(script.src, 'scripts');
        }
      });
    };

    setTimeout(cacheAnalytics, 5000);
  }

  /**
   * Cache a resource in memory
   */
  cacheResource(url: string, type: keyof CacheConfig['cacheDuration'], data?: any): void {
    if (!this.config.enableMemoryCache) return;

    const ttl = this.config.cacheDuration[type];
    this.memoryCache.set(url, {
      data: data || null,
      timestamp: Date.now(),
      ttl
    });
  }

  /**
   * Get cached resource
   */
  getCachedResource(url: string): any | null {
    if (!this.config.enableMemoryCache) return null;

    const cached = this.memoryCache.get(url);
    if (!cached) return null;

    if (Date.now() - cached.timestamp > cached.ttl) {
      this.memoryCache.delete(url);
      return null;
    }

    return cached.data;
  }

  /**
   * Prefetch resources for next navigation
   */
  prefetchForNextNavigation(): void {
    const prefetchResources = [
      '/case-studies',
      '/services',
      '/about',
      '/contact'
    ];

    prefetchResources.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);
    });
  }

  /**
   * Clear all caches
   */
  async clearCache(): Promise<void> {
    // Clear memory cache
    this.memoryCache.clear();

    // Clear service worker cache
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }
  }
}

// Global instance
export const cacheOptimizer = new CacheOptimizer();

// Initialize cache optimizations
export const initCacheOptimizations = async () => {
  if (typeof window !== 'undefined') {
    await cacheOptimizer.init();
  }
};

// Export utilities
export const cacheResource = (url: string, type: 'scripts' | 'styles' | 'images' | 'fonts', data?: any) => {
  cacheOptimizer.cacheResource(url, type, data);
};

export const getCachedResource = (url: string) => {
  return cacheOptimizer.getCachedResource(url);
};