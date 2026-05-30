Fix mobile horizontal overflow on hero and standardize side margins across homepage sections.

## 1. Hero overflow fix (`src/components/LandingHero.tsx`)
- Add `min-w-0` to both grid children (left content + right video) so grid tracks can shrink below min-content on mobile.
- Bump section padding `px-4` → `px-4 sm:px-6 lg:px-8`.

## 2. Standardize horizontal padding to `px-4 sm:px-6 lg:px-8`
- `TrustedStartups.tsx`, `FoundersWall.tsx`, `TestimonialsSection.tsx` — wrap content in `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, drop `px-4` from section
- `NepalAdvantage.tsx`, `TwoWaysToHire.tsx`, `FAQSection.tsx`, `SiteFooter.tsx` — `md:px-8` → `lg:px-8`
- `CalendlySection.tsx` — `px-4` → `px-4 sm:px-6 lg:px-8`

## 3. Verify
Re-test at 390px and 1168px, confirm no horizontal scroll.