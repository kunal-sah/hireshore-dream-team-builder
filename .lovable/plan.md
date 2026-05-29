# Hero Copy Rephrase — Product-First, Agency-Second

## Goal
Flip the default hero subtitle so product-based companies (startups) are mentioned before agencies, matching the user's priority audience.

## Changes

1. **`src/components/LandingHero.tsx`** (line ~42)
   - Reverse the default subtitle sentence order:
     - **From:** "Whether you're an agency buried in client work or a startup racing to ship..."
     - **To:** "Whether you're a startup racing to ship or an agency buried in client work..."
   - Keep the rest of the sentence unchanged.

2. **`src/pages/Index.tsx`** (line ~69)
   - Update the static SEO `<meta name="description">` to match the new subtitle order.

3. **`src/components/InsideDeliveryPod.tsx`** (line ~77)
   - Review the line "See how our specialized teams fit into agency and startup contexts" — flip to "startup and agency" if the same ordering priority applies here.

## No-Change Items
- "Startups" audience tab label stays as-is (confirmed).
- Headline "Get Full-Time Capacity Without the Full-Time Overhead" stays as-is.
- Agency-specific and Startup-specific subtitle variants remain unchanged.