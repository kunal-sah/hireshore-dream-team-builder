# Homepage Refocus Plan

## Strategic shift

**Current problem:** Homepage spends 5 sections explaining "what is a Delivery Pod" before showing proof, price, or the Nepal cost-saving angle. Visitors who came for "affordable offshore talent" have to scroll through a product-education funnel first.

**New positioning order (top → bottom):**
1. Hook: Nepal-based managed teams, 70–80% cost savings, same expertise
2. Proof: who trusts us (logos, testimonials)
3. What you get: two clear offers — (a) Dedicated talent / team augmentation, (b) Cross-functional Pods
4. How we hire/vet (trust on talent quality)
5. Pricing snapshot + paid trial CTA
6. FAQ + final CTA

## Homepage section changes

### Keep on homepage (lean versions)
- `LandingHero` — rewrite copy to lead with "Managed offshore teams from Nepal. 70–80% lower cost, senior talent, fully managed."
- `TrustedStartups` (logos)
- `PodAtAGlance` — **shrink to 3 tiles**, reframe as "Two ways to hire" (Dedicated Talent / Cross-functional Pod / Managed by us)
- `ProofSection` or `TestimonialsSection` (pick one, not both)
- `ServicesSection` — keep, it shows the range
- A new compact **"Nepal advantage"** strip: cost comparison ($ vs US/AU/UK), timezone overlap, English fluency, retention rate
- `BenefitsSection` (trimmed)
- Pricing teaser + paid trial CTA
- `FAQSection` (top 4–5 only)
- `SiteFooter`

### Move OFF homepage to a dedicated `/delivery-pods` page
- `DeliveryPodDefinition` (full definition)
- `InsideDeliveryPod` (Agency Pod vs Product Builder Pod)
- `HowItWorksSection` (Day 1–2 / 3–4 / 5)
- `WhyPodsSection` (comparison table)
- Plus a CTA back to "Book a Pod"

Link to it from the new compact "Two ways to hire" tile and from the nav (Services → Delivery Pods).

### Optional: also create `/why-nepal` page later
For deeper cost-savings storytelling, talent sourcing, timezone, case studies of Nepali talent. Not required now — a strip on homepage is enough.

## Why this works

- **Faster value clarity:** A cost-conscious founder sees "Nepal, 70–80% off, managed" in the first viewport instead of "what is a pod?"
- **Two clean offers** instead of one fuzzy product education funnel
- **Shorter homepage** (~8 sections vs ~13) — better mobile experience, better conversion
- **Pod page becomes a real sales asset** — anyone seriously evaluating Pods gets the full story on one focused URL, better for SEO too ("delivery pod", "cross-functional pod team" keywords)
- **Nepal angle becomes the headline** instead of being buried — that's your moat, lean into it

## Files affected (when we build)

- `src/pages/Index.tsx` — remove 4 sections, add Nepal-advantage strip, reorder
- `src/pages/DeliveryPods.tsx` — **new page** composing the 4 moved sections + hero + CTA
- `src/App.tsx` — register `/delivery-pods` route
- `src/components/NavBar.tsx` + `MegaMenu.tsx` — add link
- `src/components/LandingHero.tsx` — rewrite headline + subhead
- `src/components/PodAtAGlance.tsx` — reduce to 3 tiles, reframe as "Two ways to hire" + "Fully managed"
- New: `src/components/NepalAdvantage.tsx` — cost comparison strip
- `public/sitemap.xml` + SEO metadata

## Open question for you

Before I write the implementation plan, confirm:

1. **Two offers or one?** Do you want to sell (a) "Dedicated talent / staff augmentation" AND (b) "Delivery Pods" as two distinct products on the homepage, or collapse both into one "Managed Nepal teams" offer and treat Pods as just one configuration?
2. **Cost claim:** Can we show a concrete comparison (e.g. "$2,500/mo Nepal vs $8,000/mo US designer") or keep it as "70–80% savings" copy only?
3. **Paid trial:** Keep the 1–2 week paid trial as the primary CTA on homepage?

Answer those and I'll finalize the build plan.
