import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { initThirdPartyOptimizations } from './utils/thirdPartyOptimizer';
import { initCSSOptimizations } from './utils/criticalCSS';
import { initBundleOptimizations } from './utils/bundleOptimizer';
import { initRenderOptimizations } from './utils/renderOptimizer';
import { initSpeedIndexOptimizations } from './utils/speedIndexOptimizer';
import { initInteractivityOptimizations } from './utils/interactivityOptimizer';
import { initBlockingTimeOptimizations } from './utils/blockingTimeOptimizer';
import { initCacheOptimizations } from './utils/cacheOptimizer';
import { initNetworkOptimizations } from './utils/networkOptimizer';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';

// Initialize network optimizations first (critical for reducing request chains)
initNetworkOptimizations();

// Initialize cache optimizations second (improves repeat visits)
initCacheOptimizations();

// Initialize accessibility enhancements (critical for SEO)
accessibilityEnhancer.initialize();

// Initialize TBT optimizations second (critical for reducing blocking time)
initBlockingTimeOptimizations();

// Initialize TTI optimizations third (for interactivity)
initInteractivityOptimizations();

// Initialize Speed Index optimizations fourth (for visual completeness)
initSpeedIndexOptimizations();

// Initialize other optimizations with lower priority
initRenderOptimizations();
initThirdPartyOptimizations();
initCSSOptimizations();
initBundleOptimizations();

// Load main CSS asynchronously after critical rendering
const loadMainCSS = async () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('./index.css', import.meta.url).href;
  link.media = 'print';
  link.onload = () => { link.media = 'all'; };
  document.head.appendChild(link);
  
  // Fallback
  setTimeout(() => { if (link.media === 'print') link.media = 'all'; }, 3000);
};

// Defer main CSS loading
if ('requestIdleCallback' in window) {
  requestIdleCallback(loadMainCSS, { timeout: 1000 });
} else {
  setTimeout(loadMainCSS, 100);
}

createRoot(document.getElementById("root")!).render(<App />);
