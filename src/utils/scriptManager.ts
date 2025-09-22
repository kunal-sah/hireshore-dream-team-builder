/**
 * Script manager to prevent duplicate loading and optimize JavaScript delivery
 */

interface ScriptCache {
  [url: string]: {
    promise: Promise<void>;
    loaded: boolean;
    element?: HTMLScriptElement;
  };
}

class ScriptManager {
  private static instance: ScriptManager;
  private cache: ScriptCache = {};
  private observers: Map<string, IntersectionObserver> = new Map();

  static getInstance(): ScriptManager {
    if (!ScriptManager.instance) {
      ScriptManager.instance = new ScriptManager();
    }
    return ScriptManager.instance;
  }

  /**
   * Load script only once, return cached promise if already loading/loaded
   */
  loadScript(src: string, attributes?: Record<string, string>): Promise<void> {
    if (this.cache[src]) {
      return this.cache[src].promise;
    }

    const promise = new Promise<void>((resolve, reject) => {
      // Check if script already exists in DOM
      const existingScript = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
      if (existingScript) {
        this.cache[src] = { promise, loaded: true, element: existingScript };
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      
      // Add custom attributes
      if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
          script.setAttribute(key, value);
        });
      }

      script.onload = () => {
        this.cache[src].loaded = true;
        resolve();
      };
      
      script.onerror = () => {
        delete this.cache[src];
        reject(new Error(`Failed to load script: ${src}`));
      };

      document.head.appendChild(script);
      this.cache[src] = { promise, loaded: false, element: script };
    });

    this.cache[src] = { promise, loaded: false };
    return promise;
  }

  /**
   * Load script only when element becomes visible
   */
  loadScriptOnVisible(src: string, targetSelector: string, attributes?: Record<string, string>): Promise<void> {
    return new Promise((resolve, reject) => {
      const target = document.querySelector(targetSelector);
      if (!target) {
        reject(new Error(`Target element not found: ${targetSelector}`));
        return;
      }

      // If already visible, load immediately
      const rect = target.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        this.loadScript(src, attributes).then(resolve).catch(reject);
        return;
      }

      // Create intersection observer
      const observerKey = `${src}_${targetSelector}`;
      if (this.observers.has(observerKey)) {
        resolve(); // Already observing
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.disconnect();
              this.observers.delete(observerKey);
              this.loadScript(src, attributes).then(resolve).catch(reject);
            }
          });
        },
        { rootMargin: '50px' }
      );

      observer.observe(target);
      this.observers.set(observerKey, observer);
    });
  }

  /**
   * Prevent YouTube script duplication
   */
  loadYouTubePlayer(): Promise<void> {
    const youtubePlayerSrc = 'https://www.youtube.com/iframe_api';
    
    // Check if YouTube API is already available
    if (window.YT && window.YT.Player) {
      return Promise.resolve();
    }

    return this.loadScript(youtubePlayerSrc);
  }

  /**
   * Clean up observers and unused scripts
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    
    // Remove unused scripts after delay
    Object.entries(this.cache).forEach(([src, cached]) => {
      if (cached.loaded && cached.element) {
        // Check if script is actually being used
        setTimeout(() => {
          // This is a simplified cleanup - in production you'd have more sophisticated logic
          if (!document.querySelector(`script[src="${src}"]`)) {
            delete this.cache[src];
          }
        }, 30000); // 30 seconds delay
      }
    });
  }
}

// Global instance
export const scriptManager = ScriptManager.getInstance();

// Clean up on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    scriptManager.cleanup();
  });
}

// YouTube API global callback
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}