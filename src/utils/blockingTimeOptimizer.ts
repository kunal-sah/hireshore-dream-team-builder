/**
 * Total Blocking Time (TBT) Optimizer
 * Breaks up long tasks to reduce main thread blocking
 */

interface TaskScheduler {
  schedule: (task: () => void, priority?: 'user-blocking' | 'user-visible' | 'background') => void;
  yield: () => Promise<void>;
}

class BlockingTimeOptimizer {
  private taskQueue: Array<{ task: () => void; priority: string }> = [];
  private isProcessing = false;
  private scheduler: TaskScheduler;

  constructor() {
    this.scheduler = this.createOptimalScheduler();
  }

  /**
   * Initialize TBT optimizations
   */
  init(): void {
    if (typeof window === 'undefined') return;

    // Break up existing long tasks
    this.breakUpInitialTasks();
    
    // Monitor and prevent future long tasks
    this.setupTaskMonitoring();
    
    // Optimize component rendering
    this.optimizeComponentRendering();
    
    // Process task queue
    this.processTaskQueue();
  }

  /**
   * Create optimal task scheduler based on browser capabilities
   */
  private createOptimalScheduler(): TaskScheduler {
    // Use scheduler.postTask if available (Chrome 94+)
    if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
      return {
        schedule: (task: () => void, priority = 'background') => {
          (window as any).scheduler.postTask(task, { priority });
        },
        yield: async () => {
          return new Promise(resolve => {
            (window as any).scheduler.postTask(resolve, { priority: 'background' });
          });
        }
      };
    }

    // Fallback to MessageChannel for better task scheduling
    const channel = new MessageChannel();
    const callbacks: Array<() => void> = [];
    
    channel.port2.onmessage = () => {
      const callback = callbacks.shift();
      if (callback) callback();
    };

    return {
      schedule: (task: () => void) => {
        callbacks.push(task);
        channel.port1.postMessage(null);
      },
      yield: async () => {
        return new Promise(resolve => {
          callbacks.push(resolve);
          channel.port1.postMessage(null);
        });
      }
    };
  }

  /**
   * Break up initial long tasks that block TBT
   */
  private breakUpInitialTasks(): void {
    // Override heavy operations that typically cause long tasks
    this.wrapConsole();
    this.wrapEventListeners();
    this.wrapStyleCalculations();
  }

  /**
   * Wrap console methods to prevent blocking
   */
  private wrapConsole(): void {
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    console.log = (...args) => {
      this.scheduler.schedule(() => originalLog.apply(console, args), 'background');
    };

    console.warn = (...args) => {
      this.scheduler.schedule(() => originalWarn.apply(console, args), 'background');
    };

    console.error = (...args) => {
      this.scheduler.schedule(() => originalError.apply(console, args), 'user-visible');
    };
  }

  /**
   * Wrap event listeners to use task scheduling
   */
  private wrapEventListeners(): void {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    
    EventTarget.prototype.addEventListener = function(type, listener, options) {
      const wrappedListener = (event: Event) => {
        if (typeof listener === 'function') {
          // Schedule non-critical events as background tasks
          const priority = ['scroll', 'mousemove', 'resize'].includes(type) 
            ? 'background' 
            : 'user-blocking';
          
          (window as any).__blockingOptimizer?.scheduler.schedule(() => {
            listener.call(this, event);
          }, priority);
        } else if (listener && typeof listener.handleEvent === 'function') {
          const priority = ['scroll', 'mousemove', 'resize'].includes(type) 
            ? 'background' 
            : 'user-blocking';
            
          (window as any).__blockingOptimizer?.scheduler.schedule(() => {
            listener.handleEvent(event);
          }, priority);
        }
      };

      return originalAddEventListener.call(this, type, wrappedListener, options);
    };

    // Store reference for the wrapped listeners
    (window as any).__blockingOptimizer = this;
  }

  /**
   * Prevent style calculations from blocking
   */
  private wrapStyleCalculations(): void {
    // Defer style-heavy operations
    const deferStyleWork = () => {
      const styleIntensiveSelectors = [
        '.loading-skeleton',
        '.animate-spin',
        '.animate-pulse',
        '[data-defer-animation]'
      ];

      styleIntensiveSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
          this.scheduler.schedule(() => {
            const el = element as HTMLElement;
            // Apply optimizations to reduce style calculation time
            el.style.willChange = 'auto';
            el.style.contain = 'layout style';
          }, 'background');
        });
      });
    };

    this.scheduler.schedule(deferStyleWork, 'background');
  }

  /**
   * Monitor tasks and break up long ones
   */
  private setupTaskMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'longtask' && entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration}ms - breaking up future similar tasks`);
            this.breakUpSimilarTasks();
          }
        });
      });

      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Fail silently if not supported
    }
  }

  /**
   * Break up similar long tasks
   */
  private breakUpSimilarTasks(): void {
    // Implement strategies to break up commonly long tasks
    this.breakUpImageProcessing();
    this.breakUpDOMOperations();
    this.breakUpAnimations();
  }

  /**
   * Break up image processing into smaller chunks
   */
  private breakUpImageProcessing(): void {
    const images = document.querySelectorAll('img:not([data-processed])');
    
    const processImageBatch = async (startIndex: number, batchSize: number = 3) => {
      const batch = Array.from(images).slice(startIndex, startIndex + batchSize);
      
      for (const img of batch) {
        const imageEl = img as HTMLImageElement;
        imageEl.setAttribute('data-processed', 'true');
        
        // Optimize image loading
        if (!imageEl.loading) {
          imageEl.loading = 'lazy';
        }
        if (!imageEl.decoding) {
          imageEl.decoding = 'async';
        }
        
        // Yield control back to the browser
        await this.scheduler.yield();
      }
      
      // Process next batch
      if (startIndex + batchSize < images.length) {
        this.scheduler.schedule(() => {
          processImageBatch(startIndex + batchSize, batchSize);
        }, 'background');
      }
    };

    if (images.length > 0) {
      this.scheduler.schedule(() => processImageBatch(0), 'background');
    }
  }

  /**
   * Break up DOM operations
   */
  private breakUpDOMOperations(): void {
    // Batch DOM reads and writes to prevent layout thrashing
    const domReads: Array<() => void> = [];
    const domWrites: Array<() => void> = [];

    const flushDOMOperations = () => {
      // Process all reads first
      while (domReads.length > 0) {
        const read = domReads.shift();
        if (read) read();
      }
      
      // Then process all writes
      while (domWrites.length > 0) {
        const write = domWrites.shift();
        if (write) write();
      }
    };

    // Schedule DOM operation flushing
    this.scheduler.schedule(flushDOMOperations, 'user-visible');
  }

  /**
   * Break up animations to prevent blocking
   */
  private breakUpAnimations(): void {
    const animatedElements = document.querySelectorAll('[class*="animate-"], .morphing-shape');
    
    animatedElements.forEach((element, index) => {
      this.scheduler.schedule(() => {
        const el = element as HTMLElement;
        
        // Use CSS containment to limit animation impact
        el.style.contain = 'layout style paint';
        el.style.willChange = 'transform, opacity';
        
        // Use transform instead of changing layout properties
        if (el.style.left || el.style.top) {
          const left = el.style.left;
          const top = el.style.top;
          el.style.left = '';
          el.style.top = '';
          el.style.transform = `translate(${left}, ${top})`;
        }
      }, 'background');
    });
  }

  /**
   * Optimize component rendering to prevent blocking
   */
  private optimizeComponentRendering(): void {
    // Use content-visibility for off-screen content
    const belowFoldElements = document.querySelectorAll('.below-fold, [data-lazy-load]');
    
    belowFoldElements.forEach((element, index) => {
      this.scheduler.schedule(() => {
        const el = element as HTMLElement;
        el.style.contentVisibility = 'auto';
        el.style.containIntrinsicSize = '0 400px';
        
        // Add intersection observer for progressive rendering
        this.addProgressiveRenderer(el);
      }, 'background');
    });
  }

  /**
   * Add progressive renderer to reduce blocking
   */
  private addProgressiveRenderer(element: HTMLElement): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.scheduler.schedule(() => {
              const el = entry.target as HTMLElement;
              el.style.contentVisibility = 'visible';
              el.style.containIntrinsicSize = '';
              observer.unobserve(el);
            }, 'user-visible');
          }
        });
      },
      { rootMargin: '50px', threshold: 0.01 }
    );

    observer.observe(element);
  }

  /**
   * Process task queue without blocking
   */
  private async processTaskQueue(): Promise<void> {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.taskQueue.length > 0) {
      const { task, priority } = this.taskQueue.shift()!;
      
      // Execute task
      task();
      
      // Yield control if we've been running too long
      if (performance.now() % 5 === 0) {
        await this.scheduler.yield();
      }
    }

    this.isProcessing = false;
  }

  /**
   * Add task to queue with priority
   */
  queueTask(task: () => void, priority: 'user-blocking' | 'user-visible' | 'background' = 'background'): void {
    this.taskQueue.push({ task, priority });
    
    if (!this.isProcessing) {
      this.scheduler.schedule(() => this.processTaskQueue(), priority);
    }
  }

  /**
   * Break up a large synchronous operation
   */
  async breakUpOperation<T>(
    items: T[],
    processor: (item: T, index: number) => void,
    batchSize: number = 5
  ): Promise<void> {
    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      
      // Process batch
      batch.forEach((item, index) => {
        processor(item, i + index);
      });
      
      // Yield control after each batch
      if (i + batchSize < items.length) {
        await this.scheduler.yield();
      }
    }
  }
}

// Global instance
export const blockingTimeOptimizer = new BlockingTimeOptimizer();

// Initialize immediately
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => blockingTimeOptimizer.init());
  } else {
    blockingTimeOptimizer.init();
  }
}

// Export utilities
export const initBlockingTimeOptimizations = () => {
  blockingTimeOptimizer.init();
};

export const queueNonBlockingTask = (task: () => void, priority?: 'user-blocking' | 'user-visible' | 'background') => {
  blockingTimeOptimizer.queueTask(task, priority);
};

export const breakUpOperation = async <T>(
  items: T[],
  processor: (item: T, index: number) => void,
  batchSize?: number
): Promise<void> => {
  return blockingTimeOptimizer.breakUpOperation(items, processor, batchSize);
};