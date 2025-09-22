/**
 * Layout Optimizer
 * Prevents forced reflows and layout thrashing
 */

class LayoutOptimizer {
  private resizeObserver: ResizeObserver | null = null;
  private dimensionCache = new Map<Element, DOMRect>();
  private rafId: number | null = null;
  private pendingReads: (() => void)[] = [];
  private pendingWrites: (() => void)[] = [];

  constructor() {}

  /**
   * Initialize optimizations (defer heavy overrides until explicitly called)
   */
  public init(): void {
    this.setupResizeObserver();
    this.batchLayoutOperations();
  }

  /**
   * Setup ResizeObserver to cache dimensions
   */
  private setupResizeObserver(): void {
    if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;

    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        // Update cached dimensions
        this.dimensionCache.set(entry.target, entry.contentRect as DOMRect);
      });
    });
  }

  /**
   * Batch layout reads and writes to prevent forced reflows
   */
  private batchLayoutOperations(): void {
    const processBatch = () => {
      // Process all reads first
      this.pendingReads.forEach(read => read());
      this.pendingReads.length = 0;

      // Then process all writes
      this.pendingWrites.forEach(write => write());
      this.pendingWrites.length = 0;

      this.rafId = null;
    };

    // Schedule batch processing
    const scheduleBatch = () => {
      if (this.rafId === null) {
        this.rafId = requestAnimationFrame(processBatch);
      }
    };

    // Override common layout-triggering methods
    this.overrideLayoutMethods(scheduleBatch);
  }

  /**
   * Override methods that commonly cause forced reflows
   */
  private overrideLayoutMethods(scheduleBatch: () => void): void {
    // Override getBoundingClientRect with caching
    const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = function(this: Element) {
      const cached = layoutOptimizer.dimensionCache.get(this);
      if (cached) {
        return cached;
      }
      
      // Schedule the read operation
      layoutOptimizer.scheduleRead(() => {
        const rect = originalGetBoundingClientRect.call(this);
        layoutOptimizer.dimensionCache.set(this, rect);
      });
      
      scheduleBatch();
      
      // Return cached or call original
      return originalGetBoundingClientRect.call(this);
    };
  }

  /**
   * Get cached element dimensions
   */
  getCachedDimensions(element: Element): DOMRect | null {
    return this.dimensionCache.get(element) || null;
  }

  /**
   * Observe element for dimension changes
   */
  observeElement(element: Element): void {
    if (this.resizeObserver) {
      this.resizeObserver.observe(element);
      
      // Initial measurement
      const rect = element.getBoundingClientRect();
      this.dimensionCache.set(element, rect);
    }
  }

  /**
   * Unobserve element
   */
  unobserveElement(element: Element): void {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(element);
    }
    this.dimensionCache.delete(element);
  }

  /**
   * Schedule a layout read operation
   */
  scheduleRead(readFn: () => void): void {
    this.pendingReads.push(readFn);
  }

  /**
   * Schedule a layout write operation
   */
  scheduleWrite(writeFn: () => void): void {
    this.pendingWrites.push(writeFn);
  }

  /**
   * Batch multiple DOM measurements
   */
  batchMeasure<T>(elements: Element[], measureFn: (element: Element) => T): T[] {
    const results: T[] = [];
    
    // Batch all measurements together to avoid forced reflows
    elements.forEach((element, index) => {
      this.scheduleRead(() => {
        results[index] = measureFn(element);
      });
    });

    return results;
  }

  /**
   * Clean up resources
   */
  cleanup(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    
    this.dimensionCache.clear();
    this.pendingReads.length = 0;
    this.pendingWrites.length = 0;
  }
}

// Global instance
export const layoutOptimizer = new LayoutOptimizer();

/**
 * Initialize layout optimizations
 */
export const initLayoutOptimizations = (): void => {
  if (typeof window !== 'undefined') {
    // Apply optimizations on page load
    const start = () => layoutOptimizer.init();
    if (document.readyState === 'complete') {
      start();
    } else {
      window.addEventListener('load', start);
    }
  }
};

/**
 * Utility function to safely get element dimensions without forced reflows
 */
export const getSafeDimensions = (element: Element): DOMRect | null => {
  return layoutOptimizer.getCachedDimensions(element) || element.getBoundingClientRect();
};

/**
 * Utility to batch DOM operations and prevent layout thrashing
 */
export const batchDOMOperations = (readOperations: (() => void)[], writeOperations: (() => void)[]): void => {
  readOperations.forEach(op => layoutOptimizer.scheduleRead(op));
  writeOperations.forEach(op => layoutOptimizer.scheduleWrite(op));
};