# Navigation Restructure Plan

## New top-level structure

```
Services ▾   Staffing ▾   Pricing   Case Studies   Resources ▾   [Book a paid trial]
```

Reduces 7 items → 5, removes overlap, promotes Case Studies (highest-converting page), aligns CTA with "paid trial" rule.

---

## Changes

### 1. `src/components/NavBar.tsx`
- Remove top-level items: **Pod**, **Solutions**, **Industries**, **Company**.
- Add **Services** (merged) and **Case Studies** (flat link to `/case-studies`).
- Final order: Services ▾ · Staffing ▾ · Pricing · Case Studies · Resources ▾ · CTA.
- Rename CTA button "Book a Call" → "Book a paid trial" (keeps existing Calendly URL + UTM tracking).
- Mobile menu: convert flat links to **accordion** — each section expands to show sub-items from the mega-menu data, so mobile users get parity with desktop.

### 2. `src/components/MegaMenu.tsx`
- **Merge `solutions` + `services` → single `services` menu** with 3 columns:
  - *Delivery Pods*: Web Dev, Design, Video, SEO & Content, Marketing Ops, Data/AI, Support & QA
  - *By Outcome*: Launch faster, Scale design, Automate ops, Fill pipeline, Support & QA
  - *How it works*: Process & SLAs, QA Framework, Onboarding, Case Studies
  - Spotlight card: "Configure your Delivery Pod" → `/configure-pod`
- **Update `resources` menu** — add a 4th column **"Browse by industry"** with the 8 industry links (Agencies, Real Estate, E-commerce, SaaS/Tech, Healthcare, Education, Hospitality, Finance).
- **Remove `solutions` and `company` menu definitions** (no longer triggered from nav).

### 3. `src/components/SiteFooter.tsx`
- Ensure footer columns include the demoted items: **Company** (About, Team, Careers, Partners, Contact), **Industries** (full list), and **Solutions by role** (Agency Owners, Marketing Leaders, Founders, HR/Recruiters). Add/expand columns as needed. All existing pages remain reachable.

### 4. Routes
- No route changes. All existing pages (`/solutions/*`, `/industries/*`, `/company/*`, `/about-us`) remain live and linked from footer + mega-menu + internal pages. Nothing breaks SEO.

---

## Out of scope
- No page content changes
- No design-token / color / typography changes
- No new pages created
- Edge functions, backend, forms untouched

## Files touched
- `src/components/NavBar.tsx`
- `src/components/MegaMenu.tsx`
- `src/components/SiteFooter.tsx`
