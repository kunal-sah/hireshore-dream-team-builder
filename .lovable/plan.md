## Mobile audit findings (viewport 390×844)

Captured screenshots at iPhone 12 width. Issues observed:

1. **Horizontal overflow / right-edge clipping** — Multiple sections (hero subtitle, testimonial body, comparison strip) render with text clipped at the viewport edge. Root causes:
   - `WhyPodsSection.tsx` desktop comparison table is gated to `lg:` but the wrapper still influences layout; the section also has a long-form table view that can leak.
   - `TestimonialsSection.tsx` uses `text-lg sm:text-xl` body with long unbroken quotes inside `p-6` cards — combined with `leading-relaxed` and no `break-words`, long URLs/strings can overflow.
   - `LandingHero.tsx` CTA buttons are `inline-flex` without `relative`, so the absolute `motion.span` ripple overlay attaches to the nearest positioned ancestor (the parent flex container) instead of the button, producing an oversized hover overlay that can push the layout.
   - Founders wall pills use `pl-1 pr-4` with avatar + 2-line text — on very narrow widths (≤360 px) the 2-column grid (`grid-cols-2`) gets too tight; pill text overflows the rounded container.

2. **Hero text sizes** — H1 jumps from `text-3xl` (30px) at base to `text-4xl` at `sm` (640px). On 360–414 px phones the headline looks heavy and the subtitle (`text-base`, ~16px) plus 5-line wrap pushes CTAs below the fold.

3. **Audience tab pills** — `px-4 sm:px-6 py-2` on three pills (All / Agencies / Startups) fit but have no top margin separation from the H1 baseline on small screens.

4. **`How It Works` / `Inside the Pod` cards** — Heading "How It Works" centers fine, but day cards have wide internal padding causing crowded text on mobile.

5. **Safety net missing** — `src/index.css` does not enforce `overflow-x: hidden` on `html, body`. The wrapper in `Index.tsx` has it, but inner pages (Pricing, CaseStudies, etc.) do not all wrap with it, so any rogue wide element causes the whole page to scroll horizontally.

## Plan

### 1. Global safety net (`src/index.css`)
Add to base layer:
```css
html, body { overflow-x: hidden; }
img, video { max-width: 100%; height: auto; }
```

### 2. `src/components/LandingHero.tsx`
- Add `relative overflow-hidden` to both CTA buttons so the ripple/hover `motion.span` cannot leak outside.
- Tighten mobile typography: H1 → `text-[28px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl`; subtitle → `text-[15px] sm:text-base md:text-lg lg:text-xl`.
- Add `break-words` to subtitle `p`.
- Reduce eyebrow avatar stack from 5 → 4 visible on `<sm`, keep 5 from `sm`.
- Tighten section padding: `pt-16 sm:pt-28 pb-10 sm:pb-16`.

### 3. `src/components/TestimonialsSection.tsx`
- Card padding: `p-5 sm:p-8 md:p-10` (was `p-6`).
- Quote text: `text-base sm:text-lg md:text-xl break-words` (was `text-lg sm:text-xl`).
- Section: keep `px-4` but add `overflow-hidden` to card wrapper to clip any long strings.

### 4. `src/components/FoundersWall.tsx`
- Pill: switch to `flex-wrap` safe layout — `min-w-0` on the inner text container is already there; add `overflow-hidden` to pill and `truncate` already in place is fine. Reduce avatar from `w-10 h-10` → `w-9 h-9` on mobile to give text more room.
- Grid: keep `grid-cols-2` but reduce gap: `gap-x-3 gap-y-3 sm:gap-x-6 sm:gap-y-5`.

### 5. `src/components/WhyPodsSection.tsx`
- Ensure the `overflow-x-auto` wrapper has `max-w-full` and the inner table has explicit `min-w` only on `lg:` breakpoint (`lg:min-w-[...]`), not at base.

### 6. `src/components/HowItWorksSection.tsx`
- Day cards: `p-5 sm:p-6 md:p-8`; heading `text-lg sm:text-xl`.

### 7. `src/components/PodAtAGlance.tsx`
- Icon tiles already flat; verify card padding stack `p-5 sm:p-6` and `gap-4` on mobile.

### 8. `src/components/NavBar.tsx`
- Verify mobile hamburger panel uses `max-h-[calc(100dvh-64px)] overflow-y-auto` so long mega menu lists don't push the page.

### 9. `src/components/ui/sticky-cta.tsx`
- Currently `fixed bottom-6 right-6 max-w-sm`. On 360 px screens the card is ~344 px wide leaving 16 px gutter — OK. Add `left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm` so it spans full width on mobile and looks intentional rather than crammed in a corner.

### Out of scope
- No copy changes, no layout restructuring beyond the spacing/typography tweaks above.
- Inner pages (Pricing, CaseStudies, Staffing) — call out as a follow-up sweep after the homepage is clean.

### Verification
After edits, re-screenshot at 360, 390, and 414 widths, scroll the full page, and confirm: no horizontal scrollbar, no clipped text, CTAs fully visible above the fold, sticky CTA card has gutter.
