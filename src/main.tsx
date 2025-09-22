import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { initThirdPartyOptimizations } from './utils/thirdPartyOptimizer';
import { initCSSOptimizations } from './utils/criticalCSS';
import { initBundleOptimizations } from './utils/bundleOptimizer';
import { initRenderOptimizations } from './utils/renderOptimizer';
import { initSpeedIndexOptimizations } from './utils/speedIndexOptimizer';
import { initInteractivityOptimizations } from './utils/interactivityOptimizer';
import { initBlockingTimeOptimizations } from './utils/blockingTimeOptimizer';
import { initCacheOptimizations } from './utils/cacheOptimizer';
import { initNetworkOptimizations } from './utils/networkOptimizer';
import { initLayoutOptimizations } from './utils/layoutOptimizer';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';

// Render the app immediately to avoid any blank-page issues
createRoot(document.getElementById("root")!).render(<App />);

// Defer non-critical optimizations to idle time to prevent blocking initial render
const runOptimizations = () => {
  try { initCSSOptimizations(); } catch (e) { console.warn('CSS optimizations failed:', e); }
  try { initLayoutOptimizations(); } catch (e) { console.warn('Layout optimizations failed:', e); }
  try { initNetworkOptimizations(); } catch (e) { console.warn('Network optimizations failed:', e); }
  try { initCacheOptimizations(); } catch (e) { console.warn('Cache optimizations failed:', e); }
  try { accessibilityEnhancer.initialize(); } catch (e) { console.warn('Accessibility enhancer failed:', e); }
  try { initBlockingTimeOptimizations(); } catch (e) { console.warn('Blocking time optimizations failed:', e); }
  try { initInteractivityOptimizations(); } catch (e) { console.warn('Interactivity optimizations failed:', e); }
  try { initSpeedIndexOptimizations(); } catch (e) { console.warn('Speed index optimizations failed:', e); }
  try { initRenderOptimizations(); } catch (e) { console.warn('Render optimizations failed:', e); }
  try { initThirdPartyOptimizations(); } catch (e) { console.warn('Third-party optimizations failed:', e); }
  try { initBundleOptimizations(); } catch (e) { console.warn('Bundle optimizations failed:', e); }
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(runOptimizations, { timeout: 200 });
  } else {
    setTimeout(runOptimizations, 0);
  }
}

