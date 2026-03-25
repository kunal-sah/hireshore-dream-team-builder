

# Fix: Mega Menu Closes When Moving Mouse Down Into Items

## Root Cause

The parent container (line 121-122) has `onMouseLeave={handleMenuLeave}` and each individual nav trigger also has `onMouseLeave={handleMenuLeave}`. The MegaMenu is positioned `absolute top-full` which visually extends **below** the parent container's box. When the mouse moves from a nav trigger down into the mega menu dropdown, the browser fires `mouseLeave` on the parent container because the absolutely-positioned child overflows the parent's bounds. This starts the 600ms close timer.

The `onMouseEnter` on the MegaMenu *should* cancel this timer, but there are race conditions — especially when the user moves slowly or pauses on the boundary. The result: the menu closes mid-interaction.

## Fix

### NavBar.tsx — 3 changes:

1. **Remove `onMouseLeave` from the parent container** (line 122). This is the main culprit — it fires when the mouse enters the overflowing mega menu.

2. **Remove `onMouseLeave={handleMenuLeave}` from each individual nav trigger div** (lines 128, 146, 163, 180, 205, 222). Instead, only use `onMouseEnter` on each trigger to open the correct menu. The closing logic should be handled exclusively by the MegaMenu's `onMouseLeave`.

3. **Keep `handleMenuLeave` but only use it from the MegaMenu's leave handler**. The mega menu's `onHoverLeave` → `handleMegaMenuLeave` already handles closing. This ensures the menu only closes when the mouse truly leaves the dropdown panel.

### MegaMenu.tsx — 1 change:

4. **Increase the hover bridge height** from `h-4` (`-top-4`) to `h-6` (`-top-6`) for a more generous catch zone between the nav bar and the dropdown.

### Summary of behavior after fix:
- Hovering a nav item opens the menu (via `onMouseEnter`)
- Hovering a different nav item switches the menu (via `onMouseEnter`)
- Moving into the mega menu panel keeps it open (bridge div + `onMouseEnter` cancels any timer)
- Moving the mouse completely outside the mega menu panel closes it after 500ms
- Clicking any link closes it immediately

