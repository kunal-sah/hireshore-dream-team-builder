
# Homepage section-gap fix

## Root cause

`src/pages/Index.tsx` wraps every homepage section in:

```tsx
<main className="space-y-16 md:space-y-20 py-8">
```

Each child section already owns its vertical padding (`py-12` / `py-16` / `py-20`). Stacking `space-y-20` on top of two `py-20` sections creates ~240px of empty space between sections. When adjacent sections have different background colors (white vs `bg-muted`/`bg-surface`), the gap reads as a "broken" white band sandwiched between colored sections — which is exactly what the screenshots show.

## Fix (4 changes)

### 1. Remove the double spacing on `<main>`

`src/pages/Index.tsx` line 150:

```diff
- <main className="space-y-16 md:space-y-20 py-8">
+ <main>
```

Sections will then sit flush against each other and own their own rhythm.

### 2. Standardize section padding

Audit every homepage section component and normalize the wrapper to ONE rule:

```
py-16 md:py-24
```

Sections to align: `TrustedStartups`, `FoundersWall`, `NepalAdvantage`, `TwoWaysToHire`, `ServicesSection`, `BenefitsSection`, `RolesSection`, `TestimonialsSection`, `MediaFeatures`, `FAQSection`, `CalendlySection`.

Exceptions: `TrustedStartups` (logo strip) can stay tighter at `py-10 md:py-14`.

### 3. Establish a clean background rhythm

Currently random. Switch to a deliberate alternation so the eye expects each transition:

```text
LandingHero          → bg-background (white)
TrustedStartups      → bg-background
FoundersWall         → bg-surface     (navy-50)
NepalAdvantage       → bg-primary     (navy, white text)  ← anchor band
TwoWaysToHire        → bg-background
ServicesSection      → bg-surface
BenefitsSection      → bg-background
RolesSection         → bg-surface
TestimonialsSection  → bg-background
MediaFeatures        → bg-surface
FAQSection           → bg-background
CalendlySection      → bg-surface
SiteFooter           → bg-primary
```

With sections flush + alternating tones, transitions become a deliberate visual rhythm instead of arbitrary white voids.

### 4. Fix the three secondary issues visible in screenshots

- **Orphan "Get My Delivery Pod" CTA pill** sitting between `TwoWaysToHire` and `BenefitsSection`: move it inside `TwoWaysToHire`'s own footer area (under the two cards) so it belongs to that section instead of floating in the gap.
- **Floating Kunal avatar** above `CalendlySection`: it currently appears alone in a white band because of the gap. Once gaps collapse it will sit naturally above the heading. Also wrap it + heading + subhead in a single tight stack (`space-y-4`) so it never visually orphans again.
- **Serif italic "our clients"** heading in `TestimonialsSection`: replace the italic serif span with the system display font (`font-display`) and use `text-primary` as the accent treatment instead of a different typeface. Keeps Navy Trust typography contract.

## Files affected

- `src/pages/Index.tsx` — remove `space-y` + `py-8` on `<main>`
- `src/components/TrustedStartups.tsx`
- `src/components/FoundersWall.tsx`
- `src/components/NepalAdvantage.tsx`
- `src/components/TwoWaysToHire.tsx` — also absorb the orphan CTA
- `src/components/ServicesSection.tsx`
- `src/components/BenefitsSection.tsx`
- `src/components/RolesSection.tsx`
- `src/components/TestimonialsSection.tsx` — also fix serif italic heading
- `src/components/MediaFeatures.tsx`
- `src/components/FAQSection.tsx`
- `src/components/CalendlySection.tsx` — wrap avatar+heading+subhead in tight stack

No copy changes, no logic changes, no new components. Pure layout/rhythm pass.

## Expected outcome

- No more white "dead bands" between sections.
- Sections feel like one continuous page with intentional color rhythm.
- The NepalAdvantage navy band becomes a clear anchor mid-page instead of being lost in noise.
- Typography stays consistent (no rogue serif).
