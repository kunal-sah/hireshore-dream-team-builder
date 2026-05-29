# Fix: YouTube Thumbnails Not Loading

## Problem
The YouTube facade is requesting `maxresdefault.jpg`, which doesn't exist for every video (notably the Shark Tank and Swimply testimonial videos). When it's missing, YouTube returns a 120x90 gray placeholder image with the broken-camera icon — but the browser still treats it as a successful load, so the `onError` fallback never fires. Result: blurry gray box with a tiny video-icon. The bottom title overlay also overlaps the "Stop Chasing Updates…" caption baked into the section.

## Fix (src/components/ui/youtube-facade.tsx)

1. **Use a reliable thumbnail with graceful fallback**
   - Start with `hqdefault.jpg` (always exists, 480x360, good quality).
   - Try upgrading to `maxresdefault.jpg` via an off-screen `Image()` preloader; only swap in once it loads successfully AND its natural width is > 120 (filters out YouTube's gray placeholder).
   - Keep the existing `onError` path for the gradient + play-button fallback.

2. **Remove the duplicate title overlay**
   - Drop the bottom black `bg-black/80` title chip inside the facade. The page sections already render their own captions/headings beneath the video, and the overlay is what's colliding with the "Stop chasing updates…" text in the screenshot.
   - Keep `title` on the iframe/img for accessibility.

3. **Polish**
   - Add `loading="lazy"` and `decoding="async"` to the thumbnail `<img>`.
   - Ensure the container keeps a proper 16:9 aspect when used without an explicit aspect class.

No other components need changes — both `SharkTankSection` and `SwimplySuccessSection` consume `YouTubeFacade` and will pick up the fix automatically.
