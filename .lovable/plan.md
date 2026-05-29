Update homepage SEO title and meta description to match the current homepage messaging.

Current homepage emphasizes:
- "Senior offshore teams from Nepal. Save up to 83% on payroll."
- Two hiring models: Dedicated Talent + Delivery Pods
- Services: dev, design, automation, support, VA, bookkeeping
- Paid trial (1-2 weeks, no commitment)

Proposed updates:

**Title (all locations):**
`Senior Offshore Teams from Nepal | Hireshore`

**Meta description:**
`Hire senior offshore talent from Nepal. Dedicated specialists or managed delivery pods — save up to 83% on payroll. Vetted, fully managed, paid trial available.`
(~153 chars, fits search results)

**Files to update:**
1. `index.html` — `<title>`, `<meta name="description">`, Open Graph title/description, Twitter title/description, and JSON-LD `description` field
2. `src/components/SEOHead.tsx` — default `title` and `description` prop values
3. `src/pages/Index.tsx` — explicit `title` and `description` passed to `<SEOHead>`

No layout or visual changes. Only metadata copy updates.