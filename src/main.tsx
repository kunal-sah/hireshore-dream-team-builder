import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initThirdPartyOptimizations } from './utils/thirdPartyOptimizer';
import { initCSSOptimizations } from './utils/criticalCSS';
import { initBundleOptimizations } from './utils/bundleOptimizer';
import { initRenderOptimizations } from './utils/renderOptimizer';
import { initSpeedIndexOptimizations } from './utils/speedIndexOptimizer';
import { initInteractivityOptimizations } from './utils/interactivityOptimizer';
import { initBlockingTimeOptimizations } from './utils/blockingTimeOptimizer';

// Initialize TBT optimizations first (critical for reducing blocking time)
initBlockingTimeOptimizations();

// Initialize TTI optimizations second (for interactivity)
initInteractivityOptimizations();

// Initialize Speed Index optimizations third (for visual completeness)
initSpeedIndexOptimizations();

// Initialize other optimizations with lower priority
initRenderOptimizations();
initThirdPartyOptimizations();
initCSSOptimizations();
initBundleOptimizations();

createRoot(document.getElementById("root")!).render(<App />);
