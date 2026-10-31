---
name: Mangrove Portfolio — Warm Paper (Petrol & Bone)
status: baseline
colors:
  primary: "#26794A"
  primary-light: "#3D8F5E"
  primary-glow: "rgba(38, 121, 74, 0.20)"
  accent: "#B7791F"
  gold: "#C9A227"
  gold-light: "#E6C24B"
  bg: "#f5f1e8"
  bg-2: "#efe6d5"
  surface: "#ffffff"
  glass: "rgba(255, 255, 255, 0.80)"
  glass-border: "rgba(38, 121, 74, 0.30)"
  text: "#3D3D3D"
  text-muted: "#6B6B6B"
  text-dim: "#A0A0A0"
  white: "#ffffff"
typography:
  sans: "'Inter', sans-serif"
  display: "'Playfair Display', serif"
  mono: "'Space Mono', monospace"
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 36px
  filter-controls: 0
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 96px
components:
  logo-nav-height: 80px
  logo-footer-height: 72px
---

## Status

**This file is the baseline.** The warm-paper theme below is approved by Robbani (2026-10-29) and is the reference for every future portfolio change. Do not reintroduce the old emerald/dark themes or the night/light toggle.

## Overview

Portfolio for Burhanuddien Robbani, S.P. — GIS & Remote Sensing Analyst / Mangrove Rehabilitation Specialist. The palette is **petrol green on bone paper**: the site reads like a field report printed on warm stock, not a dark tech demo. One theme only, no toggle.

## Colors

Single `:root` block in `style.css` — there is no `[data-theme]` selector anywhere.

- **Primary (#26794A):** headings, `.name-base`, button fills, active filter chip, stat numbers. White on it = 5.2:1.
- **Primary-light (#3D8F5E):** hover states, links, secondary emphasis, `.gradient-text`.
- **Accent (#B7791F):** section tags, kickers, project metric numbers, dialog kicker. Warm counterweight to the green.
- **Gold (#C9A227) / gold-light (#E6C24B):** reserved for small highlights only; never body text.
- **Background (#f5f1e8):** bone paper. **bg-2 (#efe6d5)** for alternating sections.
- **Surface (#ffffff):** cards, dialog, dropdown panel.
- **Glass (rgba(255,255,255,0.80)):** navbar and glass cards with backdrop blur.
- **Border (rgba(38,121,74,0.30)):** 1px petrol-tinted hairlines on cards, chips, inputs.
- **Text (#3D3D3D) / muted (#6B6B6B) / dim (#A0A0A0).**
- Navbar is bone-glass (`rgba(245,241,232,0.82)`, `0.96` when scrolled), not dark. Nav links use text-muted, hover primary.

## Typography

- **Display (Playfair Display):** hero name, section headings, dialog title.
- **Sans (Inter):** body, UI labels, navigation, buttons.
- **Mono (Space Mono):** eyebrow labels, metric captions, filter labels.
- Eyebrow/kicker labels stay small (0.7–0.8rem), uppercase, letter-spaced 1–3px.

## Shape & Radius

- Cards, photos, buttons (`.btn`) keep the existing radius tokens (8/16/24/36px); dialog = 16px.
- **Filter controls are pill-shaped: `border-radius: 999px`** (`.filter-chip`, `.filter-year-toggle`, `.filter-clear`, `.project-open`), matching card/dialog rounding. (Superseded the earlier "hard square" decision on 2026-10-30.)
- `* { margin: 0; padding: 0 }` resets UA dialog centering, and author `display:grid` overrides UA `dialog:not([open]){display:none}`. Both must be re-asserted for `dialog.proj-dialog` (see Project dialog section).

## Components

### Project filters (`#projects`)

- Row between two hairlines: `.project-filters`.
- Left: exactly **four** tag chips — `Rehabilitation`, `GIS`, `Remote Sensing`, `Community`. No "All" chip; `Clear` is the reset.
- Right: `Tahun` label → `.filter-year-toggle` (`All Years ▾`) → `.filter-year-panel` (checkbox list, years sorted descending) → `Clear`.
- Behaviour: tag chips toggle multi-select; year checkboxes multi-select; filters combine with AND (tag match AND year match); auto-apply on every change; `Clear` resets chips, unchecks all years, and restores all cards. Active state persists across language re-render.

### Project cards (`#projects`)

Rendered from `PORTFOLIO_DATA.projects` (5 items). Component order, top → bottom — **locked**:

1. **Photo** — `.project-img`, 200px, `object-fit: cover`, zoom to 1.05 on card hover.
2. **Meta row** — `.project-meta`, one line, gap 6px:
   - tag chips `.proj-tag` — background `#E4EFE7`, text `#1E5F3C`, border `rgba(38,121,74,.16)`
   - year chip `.project-year` — background `#FFFFFF`, text `#B7791F`, border `rgba(183,121,31,.24)`
3. **Title** — `h3`, turns petrol on hover.
4. **Short description** — max **2 sentences** (trimmed by `firstSentences()` in `script.js`), clamped to 3 lines.
5. **Stats** — `.project-stats`, 2 items, separated by hairline top/bottom and a vertical divider; number in display font + accent colour.
6. **CTA** — `.project-open`, pill, label `More Detail →` / `Detail Proyek →`, arrow slides 5px on hover.

Motion (all eased, disabled under `prefers-reduced-motion`): card lift −5px + shadow 0.42s cubic-bezier(.22,.61,.36,1); photo 0.7s; chips 0.28s; title colour 0.3s; button 0.3s.

Card is clickable as a whole (`role="button"`, Enter/Space). No separate "Read More" text link, no badge overlays.

### Project dialog (`#projectDialog`)

**Source of truth: `prototypes/project-dialog-v3.html`.** The production dialog is generated from it — never hand-edit the CSS block in `style.css` (it is marked GENERATED).

```bash
python3 tools/build_dialog.py --preview   # -> prototypes/project-dialog-v4.html
python3 tools/build_dialog.py --apply      # patch index.html + style.css + script.js
```

Layout (desktop, locked): **1000 × 580**, `display:grid; grid-template-columns: 55fr 45fr`, radius 16px, hairline petrol border.

- **Left — gallery (549×578):** stage 549×540 (`object-fit: contain`, photo never cropped) + foot 549×38 with dots centred (`margin:0 auto`) and counter `1 / 3` at the right. Prev/next 34×34 circles at `left/right:12px`. Carousel: auto-slide 5s, pause on hover/focus, swipe, ←/→ keys. With fewer than 2 photos, nav + dots + counter hide (v3 behaviour).
- **Right — content (449×578):** padding `32px 32px 34px`, vertical scroll inside (dialog never resizes). Order: title (28px) → meta (tag chips then year) → short description → tabs (`TL;DR` / `Full Stories`, sticky at top) → panel. TL;DR = paragraph + bullets; Full Stories = 4 blocks (Context / Roles / Process / Impact). No kicker, no stats block, no caption strip.
- **Close:** `position:absolute; top:12px; right:12px; 34×34`, hover rotates 90°.
- **Mobile ≤900px:** single column, `grid-template-rows: 240px 1fr`, height 88vh (≤420px: 210px row).
- **Modal behaviour:** `dialog.showModal()`, `dialog.proj-dialog{position:fixed; inset:0; margin:auto; max-height:calc(100dvh - 24px)}`; `dialog.proj-dialog:not([open]){display:none}` is mandatory (author `display:grid` otherwise leaks the closed dialog into the page flow); body scroll locked on open, restored on `close`; ESC and backdrop click close.

### Logo### Logo

- Navbar: `images/logo/robbani-r-logo-transparent-cropped.png`
- Footer: `images/logo/robbani-r-logo-footer-transparent.png`
- Both transparent PNGs; never swap back to the white-box version.

## Caching

`index.html` references `style.css?v=58` and `script.js?v=22` (current baseline). Bump both query params whenever those files change, otherwise the browser serves stale assets after a hard refresh cycle.

## Do's and Don'ts

- Do keep petrol `#26794A` as primary and bone `#f5f1e8` as the ground. Two families, no third hue.
- Do keep filter controls, chips and CTA at `border-radius: 999px`.
- Do keep exactly the four project tags; if new work needs a category, map it into one of the four.
- Do verify the year filter with a real combination (tag + 2 years) before calling a change done.
- Do regenerate the dialog with `tools/build_dialog.py` instead of editing its generated CSS block.
- Don't add a theme toggle, `data-theme`, or `.theme-switch` CSS/JS.
- Don't reintroduce emerald `#40916C` / `#2d6a4f` / `#071a12` — the baseline is warm paper.
- Don't add an "All" chip; `Clear` is the reset.
- Don't use inline styles; use CSS custom properties.
- Don't hardcode absolute paths; relative only.
