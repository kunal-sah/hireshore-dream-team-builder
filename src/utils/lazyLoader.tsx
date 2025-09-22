import React, { lazy, ComponentType } from 'react';

// Higher-order component for lazy loading with error boundary
export const withLazyLoading = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  FallbackComponent?: React.ComponentType
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (props: P) => (
    <React.Suspense 
      fallback={
        FallbackComponent ? (
          <FallbackComponent />
        ) : (
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )
      }
    >
      <LazyComponent {...(props as any)} />
    </React.Suspense>
  );
  
  return WrappedComponent;
};

// Intersection Observer based lazy loader for components
export const useIntersectionLoader = (callback: () => void, options?: IntersectionObserverInit) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(target);
        }
      });
    }, options);
    
    observer.observe(target);
    
    return () => {
      observer.unobserve(target);
    };
  }, [callback, options]);
  
  return targetRef;
};

// Progressive loading component
export const ProgressiveLoader: React.FC<{
  placeholder: React.ReactNode;
  children: React.ReactNode;
  threshold?: number;
}> = ({ placeholder, children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useIntersectionLoader(() => setIsVisible(true), { threshold });
  
  return (
    <div ref={ref}>
      {isVisible ? children : placeholder}
    </div>
  );
};