## Goal

Tighten the homepage by replacing the dense 11-role grid in `ServicesSection` with a compact "What our pods cover" category strip. Preserve the detailed role content by moving it to `/services` (full catalog) — relevant `/services/*` pod pages already exist and remain the destination for deep dives.

## Homepage change

Replace `src/components/ServicesSection.tsx` content with a slim section:

- Heading: **What our pods cover**
- Subhead: One line reinforcing managed pods (not job-board hiring)
- 6 category cards (icon + title + 1-line description), single row on desktop / 2-col on mobile:

```text
1. Bookkeeping & Billing       → /services/web-dev (replace with finance pod when added)
2. Virtual Assistants & Admin  → /services/support-qa-pod
3. Customer Support (calls/chat/24·7) → /services/support-qa-pod
4. Appointment Setting         → /services/marketing-ops-pod
5. Design & Content            → /services/design-pod
6. SEO & Marketing Ops         → /services/seo-content-pod
```

- Single CTA: **"See all roles →"** linking to `/services`
- Keep existing `id="services"` anchor and section spacing tokens

Result: removes ~60% of vertical scroll between `TwoWaysToHire` and `FoundersWall`, gets users to social proof + Calendly faster.

## Move detailed roles to /services

Update `src/pages/Services.tsx` to host the full catalog currently on the homepage:

- Two columns retained: **Admin & Support Roles** and **Back-Office & Marketing Roles**
- All 11 roles with full descriptions (Virtual Assistants, Call Answering, Web Chat, Appointment Setters, 24/7 Support, Business Continuity, Bookkeepers, Billing & Accounts, Graphics Designers, SEO Specialists, Content Creators)
- Each role links to its matching `/services/*` pod page where applicable
- Keeps Paid-trial CTA at the bottom

I'll first read `src/pages/Services.tsx` to merge cleanly without duplicating sections it already renders.

## Files touched

- `src/components/ServicesSection.tsx` — replaced with compact category strip
- `src/pages/Services.tsx` — full role catalog added/merged
- `.lovable/plan.md` — short note appended to record the change

## Not changed

- `src/pages/Index.tsx` order stays the same (ServicesSection keeps its slot)
- `TwoWaysToHire`, `NepalAdvantage`, `FoundersWall`, `TestimonialsSection`, `FAQ`, `Calendly` untouched
- No design-token, typography, or color changes (Navy Trust palette preserved, no gradients)
