/**
 * Third-party script optimization utilities
 * Reduces main-thread blocking by deferring non-critical scripts
 */

export interface ScriptConfig {
  src: string;
  id?: string;
  attributes?: Record<string, string>;
  defer?: boolean;
  async?: boolean;
}

/**
 * Load a script with idle callback to minimize main-thread impact
 */
export const loadScriptOnIdle = (config: ScriptConfig, timeout = 3000): Promise<void> => {
  return new Promise((resolve, reject) => {
    const loadScript = () => {
      // Check if script already exists
      if (config.id && document.getElementById(config.id)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = config.src;
      
      if (config.id) script.id = config.id;
      if (config.defer) script.defer = true;
      if (config.async !== false) script.async = true; // Default to async

      // Add custom attributes
      if (config.attributes) {
        Object.entries(config.attributes).forEach(([key, value]) => {
          script.setAttribute(key, value);
        });
      }

      script.onload = () => resolve();
      script.onerror = reject;

      document.head.appendChild(script);
    };

    // Use requestIdleCallback or fallback to timeout
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadScript, { timeout });
      } else {
        setTimeout(loadScript, 100);
      }
    } else {
      loadScript();
    }
  });
};

/**
 * Load multiple scripts in sequence with idle callbacks
 */
export const loadScriptsSequentially = async (scripts: ScriptConfig[], timeout = 3000): Promise<void> => {
  for (const script of scripts) {
    await loadScriptOnIdle(script, timeout);
  }
};

/**
 * Defer third-party widgets until page interaction or visibility
 */
export const deferWidgetUntilInteraction = (
  loadWidget: () => void,
  triggers: ('scroll' | 'mouseover' | 'touchstart' | 'click')[] = ['scroll', 'mouseover', 'touchstart']
): void => {
  let loaded = false;

  const load = () => {
    if (loaded) return;
    loaded = true;
    
    // Remove event listeners
    triggers.forEach(trigger => {
      document.removeEventListener(trigger, load, true);
    });
    
    loadWidget();
  };

  // Add event listeners
  triggers.forEach(trigger => {
    document.addEventListener(trigger, load, { 
      once: true, 
      passive: true, 
      capture: true 
    });
  });

  // Fallback: load after 5 seconds even without interaction
  setTimeout(load, 5000);
};

/**
 * Initialize chat widget with performance optimizations
 */
export const initializeChatWidget = (): void => {
  const loadChatWidget = () => {
    loadScriptOnIdle({
      src: 'https://widgets.leadconnectorhq.com/loader.js',
      id: 'chat-widget-loader',
      attributes: {
        'data-resources-url': 'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
        'data-widget-id': '68298cb376ba227d5563113e'
      }
    }).catch(console.error);
  };

  // Defer chat widget until user interaction
  deferWidgetUntilInteraction(loadChatWidget);
};

/**
 * Initialize all third-party optimizations
 */
export const initThirdPartyOptimizations = (): void => {
  if (typeof window === 'undefined') return;

  // Initialize chat widget with deferred loading
  initializeChatWidget();

  // Add performance observers for monitoring
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Log long tasks from third-party scripts
          if (entry.entryType === 'longtask' && entry.duration > 50) {
            console.warn('Long task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name
            });
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      // Fail silently if not supported
    }
  }
};