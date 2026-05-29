## Homepage UI/UX audit — findings & proposed fixes

Audit done at 1168px viewport across the full scroll. Grouped by severity. Implementation can ship in sprints; this plan is the **map**, not a code change.

---

### 🔴 P0 — Brand consistency & messaging conflicts

**1. "Free" language violates the project's "Paid trial" rule.**
Found in 3+ places:
- `BenefitsSection.tsx` — "free within 90 days" guarantee copy
- `CalendlySection.tsx` — "Book Your Free Strategy Session" + "Schedule Your Free Call"
- `ServicesSection.tsx` (mid-page CTA) — "👉 Book a Free Strategy Session"

**Fix:** Replace every "Free Strategy Session / Free Call" with **"Book a Strategy Call"** or **"Start Your Paid Trial"**. Remove "free" entirely from headings/CTAs. Reword guarantees so they don't imply free.

**2. Competing/duplicate CTAs with inconsistent labels.**
Across the page: *Book a Call · Get My Delivery Pod · See How Pods Work · Book a Free Strategy Session · Schedule Your Free Call · Book a Free Strategy Session* + a sticky "Want to hire top remote talent at 70% less cost?" chat tooltip.

**Fix:** Standardize to **two** labels site-wide:
- Primary: **"Get My Delivery Pod"** → scrolls to Calendly
- Secondary: **"See How Pods Work"** → scrolls to how-it-works

Kill mid-page duplicate CTAs; keep one primary CTA per major section.

---

### 🟠 P1 — Hero section issues

**3. Persistent chat tooltip covers content.** A floating "Want to hire top remote talent…" speech bubble overlaps Yona Meissner's row in the Founders Wall and sticks above the chat bubble on every section. It steals attention from the hero too.

**Fix:** Auto-dismiss after first scroll, OR delay 8s, OR make it a one-time appearance (cookie). Don't render over founder photos.

**4. Hero headline awkward wrap at desktop.** "Get Full-Time Capacity Without the / Full-Time Overhead" — the line break lands on "Without the" alone, which reads poorly.

**Fix:** Tighten copy ("Full-Time Capacity. Without the Overhead.") or set `max-w-[14ch]`/`balance` on the h1.

**5. Audience tabs (All / Agencies / Startups) appear *after* the subtitle.** Users read the generic subtitle, *then* see filters — the filtering benefit is hidden.

**Fix:** Move the tab row **above** the subtitle (right under H1) so it acts as a personalization control before the user reads anything.

**6. Video pill overlap.** "Stop chasing updates. Get organized." dark pill sits on top of the play button, making the video look broken.

**Fix:** Move pill below the video (or to top-left corner with proper offset).

**7. Trust badge placement weak.** The 5-avatar + stars row sits below the micro-reassurance line, after a lot of vertical content. Social proof works hardest *before* the CTA.

**Fix:** Move trust badge directly under the H1 (above subtitle) as an eyebrow row.

---

### 🟠 P1 — Trust / proof sections

**8. Logo grid wraps to an orphan row of 2 (Swimply, Sendr) on desktop.** Looks unbalanced.

**Fix:** Either pad the array to 8 logos (add Yes Digital + 2 others) and grid 4×2, or use a marquee.

**9. Founders Wall — partial overlap with chat widget.** Yona row gets hidden behind the floating chat tooltip.

**Fix:** Tied to #3 fix. Also: add more founders to fill rows evenly (4×3 = 12 instead of 4×2).

**10. Three nearly-duplicate "what is a Pod" sections.** `DeliveryPodDefinition`, `PodAtAGlance`, `InsideDeliveryPod` cover overlapping ground. User reads "a Delivery Pod is X" three times.

**Fix:** Merge into **one** "What is a Delivery Pod" section with: 1-line definition → 6-tile pod-at-a-glance grid → expandable "see what's inside" reveal. Remove the other two from Index.

---

### 🟡 P2 — Polish & rhythm

**11. Featured Video Testimonial is redundant** — it shows Aaron's quote/video, but the new TestimonialsSection already does the same thing for Aaron + 5 others.

**Fix:** Remove the standalone "Featured Story" block; keep only TestimonialsSection.

**12. "See Our Success Stories" CTA card** feels generic next to all the other CTAs.

**Fix:** Either remove (case studies are linked from nav), or replace with a 3-card thumbnail grid of top case studies (Digital Six, PropertyStack, Swimply) for visual variety.

**13. Section spacing inconsistency.** Some sections have heavy bg fills, others are floating cards on white — rhythm breaks.

**Fix:** Alternate `bg-white` and `bg-gray-50/blue-50` zones consistently. Standardize section padding to `py-16 md:py-24`.

**14. Comparison table is dense at 1168px.** 5 columns × 6 rows in one shot — readable on desktop, will choke on tablet.

**Fix:** At `<lg`, collapse into stacked cards: each column = one card with the rows as labeled rows.

**15. Mobile preview not validated.** Audit done at 1168px only.

**Fix:** Run a parallel mobile pass at 390px before shipping.

---

### 🟡 P2 — Conversion micro-fixes

**16. No sticky CTA on scroll.** Once users pass the hero, the only persistent CTA is the chat widget. The "Book a Call" nav button is good but generic.

**Fix:** The `sticky-cta.tsx` component exists but appears inactive on `/`. Wire it up to appear after 800px scroll, hide near `#book`.

**17. FAQ section ends abruptly into a wall of CTA.** No bridge between "scale up/down?" and "Book Your Free Strategy Session".

**Fix:** Add a one-liner above Calendly: "Still have questions? Talk to Kunal directly — 30 min, no pitch."

---

## Suggested sprint order

| Sprint | Focus | Items |
|---|---|---|
| **S1** (1 day) | Brand consistency | 1, 2, 5, 6 |
| **S2** (1 day) | Hero polish | 4, 7, 3 |
| **S3** (2 days) | IA cleanup | 10, 11, 12, 8, 9 |
| **S4** (1 day) | Conversion + responsive | 13, 14, 15, 16, 17 |

Reply with **"Sprint 1"** (or any sprint number / item numbers) and I'll implement.
