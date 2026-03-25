

# Technical SEO Audit Report

## CRITICAL Issues (Will Hurt Rankings)

### 1. Sitemap URLs Don't Match Actual Routes (9 broken URLs)
The `public/sitemap.xml` has URLs that differ from the actual routes in `App.tsx`. Google will crawl these and get 404s (soft 404s via the SPA catch-all), wasting crawl budget and flagging errors in Search Console.

| Sitemap URL | Actual Route |
|---|---|
| `/services/design-pod` | `/services/design` |
| `/services/seo-content-pod` | `/services/seo-content` |
| `/services/marketing-ops-pod` | `/services/marketing-ops` |
| `/services/video-pod` | `/services/video` |
| `/services/support-qa-pod` | `/services/support-qa` |
| `/services/data-ai-pod` | `/services/data-ai` |
| `/staffing/dedicated-talent` | `/staffing/dedicated` |
| `/staffing/recruitment-service` | `/staffing/recruitment` |
| `/staffing/one-week-trial` | `/staffing/trial` |

**Fix:** Update all 9 sitemap URLs to match actual routes.

### 2. Two Pages Missing from Sitemap
- `/case-studies/ekleipsi-digital` -- exists in routes, not in sitemap
- `/configure-pod` -- exists in routes, not in sitemap

**Fix:** Add both URLs to sitemap.

### 3. 404 Page Listed in Sitemap
`/404` is in the sitemap. Search engines should never index a 404 page.

**Fix:** Remove the `/404` entry from sitemap.

### 4. Sitemap `lastmod` Dates Are Stale
All dates show `2025-01-24` (over a year old). Google uses `lastmod` to decide crawl priority. Stale dates reduce recrawl frequency.

**Fix:** Update all `lastmod` to `2026-03-25` (today).

---

## HIGH Priority Issues

### 5. No Canonical URLs on 73 of 74 Pages
Only `Index.tsx` passes `canonicalUrl` to `SEOHead`. The remaining 73 pages rely on `window.location.href` which will include query strings, preview domains, and trailing slashes -- causing duplicate content issues.

**Fix:** Add explicit `canonicalUrl="https://hireshore.co/[path]"` to every `SEOHead` usage.

### 6. Structured Data Not Cleaned Up on Unmount
In `Index.tsx`, the JSON-LD script has a dedup check (`getElementById`) but is never removed on component unmount. If React re-mounts, the script persists from previous renders. Minor memory leak.

**Fix:** Add cleanup in the `useEffect` return to remove the script element.

### 7. Duplicate Meta Tags (index.html + Helmet)
`index.html` has hardcoded `<title>`, `<meta description>`, `<link canonical>`, OG tags, and Twitter tags. Helmet on each page also sets these. This creates duplicate tags in the DOM -- some crawlers may pick the wrong one.

**Fix:** Remove all SEO meta tags from `index.html` (keep only charset, viewport, theme-color, favicon, fonts). Let Helmet handle all SEO tags dynamically.

### 8. SPA Rendering -- No Pre-rendering for Crawlers
This is a client-side SPA. Google can render JS, but Bing/Twitter/Facebook/LinkedIn cannot. When social crawlers hit any page, they only see the `index.html` meta tags (homepage meta), not the page-specific ones.

**Fix (informational):** Consider adding a pre-rendering service (e.g., prerender.io) or deploy with SSR/SSG in the future. For now, the `index.html` hardcoded tags at least provide a fallback.

---

## MEDIUM Priority Issues

### 9. Chat Widget Script Leaks on Every Page
The `SiteFooter` chat widget script is appended but the cleanup function is inside the `setTimeout` callback's return (which is ignored). The script is never removed on unmount.

**Fix:** Move cleanup logic to the outer `useEffect` return.

### 10. No `og:locale` Tag
Missing `og:locale` meta tag. Facebook and social crawlers use this to determine content language.

**Fix:** Add `<meta property="og:locale" content="en_US" />` to `SEOHead`.

### 11. No `og:site_name` Tag
Missing site name for social sharing context.

**Fix:** Add `<meta property="og:site_name" content="Hireshore" />` to `SEOHead`.

---

## Implementation Plan

### Step 1: Fix sitemap.xml
- Correct 9 mismatched URLs to match actual routes
- Add `/case-studies/ekleipsi-digital` and `/configure-pod`
- Remove `/404` entry
- Update all `lastmod` dates to `2026-03-25`

### Step 2: Clean up index.html
- Remove duplicate title, description, canonical, OG, and Twitter meta tags
- Keep only: charset, viewport, theme-color, favicon, apple-touch-icon, fonts, preconnects

### Step 3: Enhance SEOHead component
- Add `og:locale` and `og:site_name` meta tags
- Add explicit canonical URLs to all 73 pages that are missing them

### Step 4: Fix Index.tsx structured data
- Add cleanup in `useEffect` return to remove JSON-LD script on unmount

### Step 5: Fix SiteFooter chat widget cleanup
- Move script cleanup to outer useEffect return

