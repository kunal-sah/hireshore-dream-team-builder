

# Website Optimization Checklist

## Current State Summary
After reviewing the full codebase, here are all optimization opportunities organized by priority.

---

## HIGH PRIORITY

### 1. YouTube Embeds Killing Performance
**Problem:** 18+ raw YouTube iframes across the site. Each iframe loads ~1-2MB of JavaScript from YouTube on page load, even with `loading="lazy"`. The homepage alone has 5 iframes (hero + 4 testimonials).

**Fix:** Replace all `<iframe>` YouTube embeds with a lightweight facade component (`youtube-facade.tsx` already exists but is unused). Show a thumbnail + play button; only load the iframe when clicked. This alone could save 5-10MB on homepage.

### 2. SEOHead Only Used on Homepage
**Problem:** The `SEOHead` component exists but is only used on `Index.tsx`. ~60+ pages have no per-page meta titles/descriptions. Some pages use `Helmet` directly (about 11 pages), but the majority have nothing.

**Fix:** Add `SEOHead` to every page with unique title, description, and keywords. Priority pages: Services (7), Solutions (9), Case Studies (8), Industries (8).

### 3. robots.txt Missing Sitemap Reference
**Problem:** `robots.txt` has no `Sitemap:` directive pointing to `/sitemap.xml`.

**Fix:** Add `Sitemap: https://hireshore.co/sitemap.xml` to robots.txt.

### 4. Structured Data Leak (No Cleanup)
**Problem:** In `Index.tsx`, `addStructuredData()` appends a `<script>` tag to `<head>` on every mount but never removes it. Navigating away and back creates duplicates.

**Fix:** Add cleanup in the `useEffect` return, or use the `SEOHead`/`Helmet` component to manage JSON-LD.

---

## MEDIUM PRIORITY

### 5. Heavy Framer Motion Usage
**Problem:** Nearly every component imports and uses `framer-motion` with `whileInView`, `whileHover`, floating background animations, parallax effects, and ripple effects. The hero alone has 5+ animated background blobs running infinite animations.

**Fix:** Remove infinite background animations (floating blobs) or reduce them. Use CSS transitions instead of framer-motion for simple hover/fade effects. Consider `will-change` sparingly.

### 6. Chat Widget Loaded on Every Page
**Problem:** `SiteFooter` loads LeadConnector chat widget script on every page mount. This is a third-party script that adds weight.

**Fix:** Defer chat widget loading until user interaction (e.g., scroll past 50% or after 5 seconds idle).

### 7. Font Loading Not Optimized
**Problem:** Google Fonts loaded via render-blocking `<link>` in `index.html`. Two font families (Inter + Playfair Display) with multiple weights.

**Fix:** Add `font-display: swap` (already in URL via `display=swap`), but also add `media="print" onload="this.media='all'"` pattern for non-blocking load, or self-host the fonts.

### 8. NavBar Menu Timeout of 5 Seconds
**Problem:** `handleMenuLeave` sets a 5-second timeout before closing the mega menu. This is extremely long and will feel buggy.

**Fix:** Reduce to 300-500ms with a buffer zone approach.

### 9. No Image Optimization / WebP
**Problem:** All images are served as PNG from `lovable-uploads`. No width/height attributes on most images (causes layout shift / poor CLS).

**Fix:** Add explicit `width` and `height` attributes to all `<img>` tags. Consider converting hero/key images to WebP.

---

## LOW PRIORITY

### 10. Duplicate Testimonials on Homepage
**Problem:** The homepage shows 4 individual video testimonials (Marlon, Aaron, Ryan, Yona) AND a `TestimonialsSection` carousel that repeats the same people. Redundant content hurts scroll depth and page weight.

**Fix:** Keep either the video testimonials OR the carousel, not both. Or make the carousel show different quotes from different clients.

### 11. Missing Error Boundaries
**Problem:** No error boundaries around lazy-loaded components. If a chunk fails to load, the whole page crashes.

**Fix:** Add React error boundaries around `Suspense` groups.

### 12. No 404 Handling in Footer Links
**Problem:** Footer uses `<a>` tags instead of React Router `<Link>` for internal routes (`/privacy`, `/terms`, `/legal`), causing full page reloads.

**Fix:** Replace with `<Link>` components.

### 13. Unused Imports/Code
**Problem:** `LazyMotion` is declared in `Index.tsx` but never used. `deferExecution` is imported but unused. `beforeAfterImage` imported in `LandingHero.tsx` but never rendered.

**Fix:** Remove dead code to reduce bundle size.

### 14. Vite Build Not Optimized
**Problem:** No manual chunk splitting configured. No compression plugin. No tree-shaking hints for large libraries like framer-motion and lucide-react.

**Fix:** Add `build.rollupOptions.output.manualChunks` to split vendor chunks (framer-motion, react, lucide-react). Add `vite-plugin-compression` for gzip/brotli.

### 15. Missing Accessibility Improvements
**Problem:** Mega menu lacks keyboard navigation (Tab/Escape support). Mobile menu has no focus trap. No skip-to-content link.

**Fix:** Add `onKeyDown` handlers for Escape to close menus, focus trapping for mobile menu, and a skip navigation link.

---

## Implementation Order
1. YouTube facade (biggest performance win)
2. robots.txt sitemap directive (2-minute fix, big SEO impact)
3. JSON-LD cleanup (prevent duplicates)
4. SEOHead on all pages (SEO lift)
5. Defer chat widget
6. NavBar timeout fix
7. Remove unused code
8. Add image dimensions
9. Vite chunk splitting
10. Reduce framer-motion usage

