// Animation optimization utilities to reduce main-thread work

export const createOptimizedVariants = (baseVariants: any) => {
  // Use GPU-accelerated properties when possible
  const optimizedVariants = { ...baseVariants };
  
  if (optimizedVariants.hidden) {
    optimizedVariants.hidden = {
      ...optimizedVariants.hidden,
      willChange: 'transform, opacity',
    };
  }
  
  if (optimizedVariants.visible) {
    optimizedVariants.visible = {
      ...optimizedVariants.visible,
      willChange: 'auto',
    };
  }
  
  return optimizedVariants;
};

export const deferredAnimationProps = {
  // Use transform3d to ensure GPU acceleration
  initial: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
  animate: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  transition: { 
    duration: 0.3, 
    ease: 'easeOut',
    // Reduce motion for users who prefer it
    ...(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? {
      duration: 0.1,
      ease: 'linear'
    } : {})
  }
};

export const lazyAnimationProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.4, ease: 'easeOut' }
};

// Intersection observer for triggering animations only when needed
export const useOptimizedAnimation = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return {
    shouldAnimate: !prefersReducedMotion,
    baseTransition: {
      duration: prefersReducedMotion ? 0.1 : 0.3,
      ease: prefersReducedMotion ? 'linear' : 'easeOut'
    }
  };
};

// Throttle animation callbacks to reduce main thread work
export const throttleAnimation = (callback: () => void, delay = 16) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  let lastExecTime = 0;
  
  return () => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      callback();
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback();
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};