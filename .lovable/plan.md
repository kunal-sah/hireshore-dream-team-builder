## Homepage audit — what's unwanted / off-offer / redundant

Current order:
`Hero → TrustedStartups (client logos) → FoundersWall (founder faces) → NepalAdvantage → TwoWaysToHire → ServicesSection → BenefitsSection → RolesSection → Testimonials → MediaFeatures (press) → FAQ → Calendly`

### Problems found

**1. Three "trust strip" sections doing similar jobs**
- `TrustedStartups` — client logo marquee ("Trusted by 25+ Global Startups")
- `FoundersWall` — founder headshots + names
- `MediaFeatures` — press logos (Forbes, MSN, Inman…)

Two of these stacked near the hero, and a third buried mid-page. Feels repetitive and dilutes each one.

**2. `ServicesSection` and `RolesSection` overlap heavily**
Both are "here are the roles we provide." Combined they list devs twice, designers twice, VAs twice.

**3. Off-offer roles still listed**
Memory says: *Focus on VA & back-office outsourcing (bookkeeping, billing). No software dev.* But both sections still feature:
- Full Stack Developers
- QA Engineers & DevOps
- Shopify / WordPress Developers
- UI/UX Designers

These contradict the positioning and pull the page away from the VA / back-office offer.

**4. `BenefitsSection` and `NepalAdvantage` are both "why us" pitches**
NepalAdvantage = why Nepal. BenefitsSection = generic benefits ("Elite Talent. No Guesswork." etc.). They argue similar points back to back.

**5. RolesSection has no real heading visible in the scan** — it's a decorative list, low information density for the space it takes.

---

### Recommended changes

**Remove from homepage**
- `RolesSection` — fully redundant with ServicesSection. Delete from Index.
- `MediaFeatures` — move to About Us page (press credibility belongs there, not on the conversion path).
- `BenefitsSection` — merge its 2–3 strongest points into `NepalAdvantage` as a small bullet row, then remove the standalone section.

**Trim / refocus**
- `ServicesSection` — strip software-dev-heavy roles. Keep VA, bookkeeping/billing, customer support, appointment setters, chat support, admin, plus the lighter creative/marketing roles that actually match the pods (SEO, Content, Graphics). Drop Full Stack Devs, QA/DevOps, Shopify/WordPress Devs. Rename the "Tech & Creative" cluster to "Marketing & Creative."
- `FoundersWall` — keep, but consider moving it directly above `TestimonialsSection` so all "real people" social proof lives together, instead of competing with the client-logo strip near the hero.

**Keep as-is**
- `LandingHero`, `TrustedStartups`, `NepalAdvantage` (enhanced), `TwoWaysToHire`, `TestimonialsSection`, `FAQSection`, `CalendlySection`.

---

### Proposed new homepage order

```text
Hero
TrustedStartups            (one trust strip near hero — logos)
NepalAdvantage             (why Nepal + 3 merged benefit bullets)
TwoWaysToHire              (the offer: Pods vs Dedicated)
ServicesSection            (refocused: VA, back-office, support, marketing/creative)
FoundersWall               (faces, leads into…)
TestimonialsSection
FAQSection
CalendlySection
```

### Where moved content goes
- `MediaFeatures` → `src/pages/AboutUs.tsx` (press section).
- `RolesSection` → deleted (content already covered by Services).
- `BenefitsSection` strongest 3 points → folded into `NepalAdvantage`.

### Technical notes
- Edit `src/pages/Index.tsx` to remove `RolesSection`, `BenefitsSection`, `MediaFeatures` imports + Suspense blocks, and reorder.
- Edit `src/components/ServicesSection.tsx` to drop dev-heavy role objects from `techRoles`.
- Edit `src/components/NepalAdvantage.tsx` to add a compact 3-item benefits row.
- Edit `src/pages/AboutUs.tsx` to render `MediaFeatures`.

Want me to proceed with all of the above, or cherry-pick (e.g. just remove RolesSection + MediaFeatures + dev roles, and leave BenefitsSection alone)?
