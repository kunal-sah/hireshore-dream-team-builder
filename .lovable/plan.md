## Consulting rebrand — Navy Trust + Urbanist/Epilogue, zero gradients

Shift the visual system from "vibe-coded" gradients to a restrained consulting/outsourcing brand.

### Brand tokens

**Palette (HSL in `src/index.css`)**
- `--background`: `0 0% 100%` (white)
- `--foreground`: `222 60% 14%` (navy `#0f1b3d`)
- `--primary`: `222 60% 14%` (navy)
- `--primary-foreground`: `0 0% 100%`
- `--secondary` / surface: `218 35% 93%` (`#e8edf3`)
- `--accent`: `212 47% 43%` (mid-blue `#3b6fa0`)
- `--muted`: `218 25% 96%`
- `--muted-foreground`: `222 20% 40%`
- `--border`: `218 25% 88%`
- Replace `--gradient-primary`, `--gradient-subtle`, `--gradient-blue-purple`, `--gradient-purple-blue` with flat solid mappings so existing utilities still resolve but produce flat color.

**Typography**
- Add Urbanist (700/600) + Epilogue (400/500) to `index.html` via Google Fonts.
- Tailwind: `font-sans` → Epilogue, `font-display` → Urbanist.
- All h1/h2/h3 get `font-display` + tighter tracking; body uses Epilogue.

### Gradient purge (strict — strip all)

Sweep these files, replace every `bg-gradient-to-*`, `from-*`, `via-*`, `to-*`, `bg-gradient-primary*`, `bg-clip-text text-transparent` with flat brand utilities:

- `src/components/LandingHero.tsx` — remove the morphing blob backgrounds entirely; CTA goes flat navy.
- `src/components/PodAtAGlance.tsx` — six colorful icon tiles (green/purple/orange/teal/indigo) become flat navy on `bg-secondary`.
- `src/components/ServicesSection.tsx` — gradient CTA button → flat navy.
- `src/components/WhyPodsSection.tsx` — `bg-gradient-to-b` section bg → flat white.
- `src/components/BenefitsSection.tsx`, `MediaFeatures.tsx`, `RolesSection.tsx`, `ProofSection.tsx`, `HowItWorksSection.tsx`, `FoundersWall.tsx`, `TrustedStartups.tsx`, `CalendlySection.tsx`, `FAQSection.tsx` — same sweep.
- `tailwind.config.ts` — keep gradient utility names (so we don't break refs) but rebind to flat brand colors; remove `gradient-blue-purple` / `gradient-purple-blue` references.
- `src/index.css` — remove spotlight + morphing animations that depend on rainbow blobs.

### Composition adjustments

- Hero: navy H1 on white, single navy primary CTA, ghost secondary; remove all parallax floating shapes; keep just one subtle `bg-secondary` band behind the video card.
- Buttons: one variant only — `bg-primary text-primary-foreground` flat, `hover:bg-primary/90`. No shimmer/ripple/glow.
- Cards: white surface, `border-border`, `shadow-sm` (no shadow-2xl).
- Sections alternate `bg-white` and `bg-secondary/40` for rhythm.
- NavBar "Book a Call" button: flat navy pill, no blue gradient.

### Out of scope

- No layout restructuring (sections stay in current order).
- No copy changes.
- No logo redesign.
- Other pages (Staffing, CaseStudies, ContactUs) get the token updates automatically via index.css; one-off gradient classes on those pages get cleaned in a follow-up if you flag them.

### Memory

Persist the new core rules: Navy Trust palette, Urbanist+Epilogue, no gradients anywhere — so future edits don't reintroduce vibe-coded styling.

### Technical execution order

1. `index.css` tokens + remove gradient CSS vars (rebind to flat).
2. `tailwind.config.ts` — Urbanist/Epilogue font families, flat `gradient-*` bindings.
3. `index.html` — Google Fonts link.
4. Hero — biggest visual change first; verify in browser.
5. Sweep remaining components with rg-driven find/replace, then visual QA at desktop + mobile.
6. Update `mem://index.md` Core rules.

Ready to build on approval.