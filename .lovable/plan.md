## Goal
Add three reference-style social-proof elements to the homepage, in the existing light theme with purple accent (no dark mode switch).

## 1. Hero trust badge (image 1)
**File:** `src/components/LandingHero.tsx`

Right under the "Paid trial available…" microcopy, insert a compact row:
- Overlapping avatar stack (5 circular avatars, ring-2 white, -ml-3 overlap) using existing testimonial photos: Dave Cannell, John Bromley, Aaron Erwich, Ryan Jope, Marlon M.
- 5 yellow `Star` icons (lucide-react, fill-current)
- Subtext: **"Trusted by 25+ global founders & agencies"**
- Layout: `flex items-center gap-3`, small text-sm muted

## 2. Founders & creators grid (image 2)
**New file:** `src/components/FoundersWall.tsx`. Mounted in `src/pages/Index.tsx` right after `<TrustedStartups />`.

Structure:
- Small uppercase eyebrow: **"You're in good hands"**
- Existing client logo row (reuse the same `clients` array from TrustedStartups — keep both or refactor TrustedStartups to render only the eyebrow+logos and let FoundersWall add the avatar grid below).
- Sub-eyebrow: **"And the founders who trust our pods"**
- Responsive grid (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5`) of avatar + name pills. Each entry: 40px round photo with subtle purple ring + name (text-sm font-medium).
- Source names from existing testimonials + case studies: Aaron Erwich, Ryan Jope, Yona Meissner, Marlon M., Chloe Bundy, Breearna Jope, Dave Cannell, John Bromley, plus a few more founder names already on the site (PropertyStack, Swimply, Medz Media, etc.). Only real names already used in the project — no invented people.

Light theme styling: white bg, `border border-gray-100`, soft purple ring on avatars, hover lift.

## 3. Video testimonials section (image 3)
**Rewrite:** `src/components/TestimonialsSection.tsx` from horizontal carousel to a stacked 2-column layout (alternating image/text orientation, zigzag).

For each testimonial with a YouTube video:
- Left (or right on alternating rows): `YouTubeFacade` thumbnail in rounded card
- Other side: large pull-quote, author avatar + name + title
- Card: `bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10`

Section heading rewrite to match reference tone but keep brand voice:
- **"Hear it directly from our clients"** — with "our clients" wrapped in a serif italic accent span (use `font-serif italic text-primary`).
- Subhead: short line about real founders, real outcomes.

Use the existing 3 testimonials that have known video case studies (Aaron Erwich → `yW90cSyX_iI`, plus 2 more we already have videos for — fall back to text-only card layout for testimonials without a video so the rest of the list keeps showing).

## Technical notes
- All new colors must come from existing tailwind tokens / `index.css` semantic tokens — no hardcoded hex outside the existing palette.
- Reuse `YouTubeFacade` per the project convention (defer iframe).
- Keep `space-y-16 md:space-y-20` rhythm on Index.
- Update SEO: no change needed.
- No backend/data changes.

## Out of scope
- Dark theme conversion
- New testimonials/people not already on the site
- Carousel removal elsewhere on the site
