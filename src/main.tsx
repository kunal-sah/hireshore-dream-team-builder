import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initThirdPartyOptimizations } from './utils/thirdPartyOptimizer';
import { initCSSOptimizations } from './utils/criticalCSS';
import { initBundleOptimizations } from './utils/bundleOptimizer';

// Initialize all optimizations
initThirdPartyOptimizations();
initCSSOptimizations();
initBundleOptimizations();

createRoot(document.getElementById("root")!).render(<App />);
