# Fix Calendly Widget

All changes in `src/components/CalendlySection.tsx`.

## 1. Explicit init with ref
- Add `useRef` on the widget div.
- Inject script with an `onload` handler that calls `window.Calendly.initInlineWidget({ url: 'https://calendly.com/hireshore/30min', parentElement: widgetRef.current, prefill: {}, utm: {} })`.
- If script already present, call init directly.
- Cleanup on unmount.

## 2. Right-size the widget (no inner scroll)
Replace fixed `height: 600px` with responsive heights tuned to Calendly's 30-min flow:
- Mobile: `h-[1150px]`
- Tablet (md): `h-[1050px]`
- Desktop (lg): `h-[780px]` (side-by-side date+time layout kicks in ≥1024px)

Classes: `calendly-inline-widget w-full min-w-[280px] max-w-full h-[1150px] md:h-[1050px] lg:h-[780px] bg-white rounded-lg shadow-lg overflow-hidden mx-auto`

## 3. Loading state
Show a centered spinner overlay inside the widget container while the script loads; hide once `initInlineWidget` runs.

## Out of scope
No copy changes, no section padding changes, no other components touched.
