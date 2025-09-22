import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initThirdPartyOptimizations } from './utils/thirdPartyOptimizer';

// Initialize third-party optimizations
initThirdPartyOptimizations();

createRoot(document.getElementById("root")!).render(<App />);
