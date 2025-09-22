import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

// Render the app immediately to avoid any blank-page issues
const rootEl = document.getElementById("root")!;
console.log('[App] Bootstrapping...');
createRoot(rootEl).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

// Failsafe: force-visibility for deferred sections
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = '.below-fold,[data-lazy-load],[data-defer-processing]{content-visibility:visible !important;contain-intrinsic-size:auto !important;}';
  document.head.appendChild(style);
  requestAnimationFrame(() => {
    document.querySelectorAll('.below-fold,[data-lazy-load],[data-defer-processing]').forEach((el) => {
      const h = el as HTMLElement;
      h.style.contentVisibility = 'visible';
      h.style.containIntrinsicSize = 'auto';
      h.classList.add('visible');
    });
  });
}

// Defer non-critical optimizations to idle time to prevent blocking initial render
const runOptimizations = async () => {
  try {
    const [
      critical,
      layout,
      network,
      cache,
      accessibility,
      blocking,
      interactivity,
      speedIndex,
      render,
      thirdParty,
      bundle,
    ] = await Promise.all([
      import('./utils/criticalCSS').catch(() => null),
      import('./utils/layoutOptimizer').catch(() => null),
      import('./utils/networkOptimizer').catch(() => null),
      import('./utils/cacheOptimizer').catch(() => null),
      import('./utils/accessibilityEnhancer').catch(() => null),
      import('./utils/blockingTimeOptimizer').catch(() => null),
      import('./utils/interactivityOptimizer').catch(() => null),
      import('./utils/speedIndexOptimizer').catch(() => null),
      import('./utils/renderOptimizer').catch(() => null),
      import('./utils/thirdPartyOptimizer').catch(() => null),
      import('./utils/bundleOptimizer').catch(() => null),
    ]);

    try { critical?.initCSSOptimizations?.(); } catch (e) { console.warn('CSS optimizations failed:', e); }
    try { layout?.initLayoutOptimizations?.(); } catch (e) { console.warn('Layout optimizations failed:', e); }
    try { network?.initNetworkOptimizations?.(); } catch (e) { console.warn('Network optimizations failed:', e); }
    try { cache?.initCacheOptimizations?.(); } catch (e) { console.warn('Cache optimizations failed:', e); }
    try { accessibility?.accessibilityEnhancer?.initialize?.(); } catch (e) { console.warn('Accessibility enhancer failed:', e); }
    try { blocking?.initBlockingTimeOptimizations?.(); } catch (e) { console.warn('Blocking time optimizations failed:', e); }
    try { interactivity?.initInteractivityOptimizations?.() || interactivity?.interactivityOptimizer?.init?.(); } catch (e) { console.warn('Interactivity optimizations failed:', e); }
    try { speedIndex?.initSpeedIndexOptimizations?.() || speedIndex?.speedIndexOptimizer?.init?.(); } catch (e) { console.warn('Speed index optimizations failed:', e); }
    try { render?.initRenderOptimizations?.(); } catch (e) { console.warn('Render optimizations failed:', e); }
    try { thirdParty?.initThirdPartyOptimizations?.(); } catch (e) { console.warn('Third-party optimizations failed:', e); }
    try { bundle?.initBundleOptimizations?.(); } catch (e) { console.warn('Bundle optimizations failed:', e); }
  } catch (e) {
    console.warn('Deferred optimizations failed to load:', e);
  }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(runOptimizations, { timeout: 200 });
  } else {
    setTimeout(runOptimizations, 0);
  }
}

