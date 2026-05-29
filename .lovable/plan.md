## About Us — Rebrand + 2026 Update

### 1. Apply Navy Trust branding
Replace blue/purple/gradient classes with brand tokens (consistent with the rest of the site):
- Hero `bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50` → flat `bg-surface` (or `bg-secondary`)
- Stat icon backgrounds `bg-blue-100` / `text-blue-600` → `bg-primary/10` / `text-primary`
- "Our Mission" card `bg-gradient-to-br from-blue-100 to-purple-100` → flat `bg-primary text-primary-foreground` (or `bg-secondary`)
- Founder image accent `bg-gradient-to-br from-blue-400 to-purple-500` → flat `bg-primary`
- Values icon chips `bg-blue-100` / `text-blue-600` → `bg-primary/10` / `text-primary`
- Timeline center line `bg-blue-200` → `bg-primary/20`; year dots → `bg-primary`
- Headings/body kept in semantic tokens (`text-foreground`, `text-muted-foreground`)
- Ensure headings use `font-display` (Urbanist), body uses default `font-sans` (Epilogue)

### 2. Update stats to 2026
Bump the four hero stats to current 2026 numbers (using existing icons):
- Team Members: 300+ → **400+**
- Countries Served: 5+ → **10+**
- Client Satisfaction: 98% (keep)
- Average Growth: 300% (keep)

(If you'd prefer different numbers, tell me and I'll swap.)

### 3. Add 2026 milestone — Direct Hire launch
Append a new entry to the timeline:
- **2026 — Launched Direct Hire Services**
- Copy: "Hireshore launched Direct Hire — a recruitment service that places vetted Nepali talent directly into clients' in-house teams as full-time employees, with a one-time placement fee and no ongoing management overhead."

Also update the "Current State" entry from **2025 → 2026** and refresh the numbers to match (25+ clients → e.g. 40+ clients, 40+ pods → 60+ pods — confirm if you want exact figures).

### 4. Founder message tweak
Update the "Today, Hireshore has grown..." paragraph to reflect 2026 scale and mention Direct Hire as the newest offering alongside the Pod model.

### Files touched
- `src/pages/AboutUs.tsx` (only)

### Confirm before I build
1. OK with my proposed 2026 stat numbers (400+ team, 10+ countries, 40+ clients, 60+ pods)? Or give me exact figures.
2. Direct Hire copy above OK, or do you want different wording?
