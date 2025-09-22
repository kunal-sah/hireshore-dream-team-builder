// Performance utilities to improve First Input Delay
export const deferTask = (task: () => void, timeout = 100) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(task, { timeout });
  } else {
    setTimeout(task, timeout);
  }
};

export const deferHeavyTask = (task: () => void, timeout = 200) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(task, { timeout });
  } else {
    setTimeout(task, timeout);
  }
};

export const breakUpTask = (tasks: (() => void)[], delay = 50) => {
  tasks.forEach((task, index) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(task, { timeout: delay * (index + 1) });
    } else {
      setTimeout(task, delay * (index + 1));
    }
  });
};

export const optimizeEventListeners = (element: Element, event: string, handler: EventListener) => {
  let rafId = 0;
  
  const optimizedHandler = (e: Event) => {
    if (rafId) return;
    
    rafId = requestAnimationFrame(() => {
      handler(e);
      rafId = 0;
    });
  };
  
  element.addEventListener(event, optimizedHandler, { passive: true });
  
  return () => {
    element.removeEventListener(event, optimizedHandler);
    if (rafId) cancelAnimationFrame(rafId);
  };
};