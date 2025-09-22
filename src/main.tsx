import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initThirdPartyOptimizations } from './utils/thirdPartyOptimizer';
import { initCSSOptimizations } from './utils/criticalCSS';

// Initialize optimizations
initThirdPartyOptimizations();
initCSSOptimizations();

createRoot(document.getElementById("root")!).render(<App />);
