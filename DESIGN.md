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

- Cards, photos, buttons (`.btn`) keep the existing radius tokens (8/16/24/36px).
- **Filter controls are hard square: `border-radius: 0`.** This covers `.filter-chip`, `.filter-year-toggle`, `.filter-year-panel`, `.year-check input`, `.filter-clear`, and the project dialog. This is a user requirement, not a preference — do not soften it without asking.
- `* { margin: 0; padding: 0 }` resets UA dialog centering — `.proj-dialog` must keep `margin: auto`.

## Components

### Project filters (`#projects`)

- Row between two hairlines: `.project-filters`.
- Left: exactly **four** tag chips — `Rehabilitation`, `GIS`, `Remote Sensing`, `Community`. No "All" chip; `Clear` is the reset.
- Right: `Tahun` label → `.filter-year-toggle` (`All Years ▾`) → `.filter-year-panel` (checkbox list, years sorted descending) → `Clear`.
- Behaviour: tag chips toggle multi-select; year checkboxes multi-select; filters combine with AND (tag match AND year match); auto-apply on every change; `Clear` resets chips, unchecks all years, and restores all cards. Active state persists across language re-render.

### Project cards + dialog

- 5 cards rendered from `PORTFOLIO_DATA.projects`; each carries `data-year` and `data-tags`.
- Each project has `year`, `tldr_id/tldr_en`, `desc_id/desc_en`, `tags_id/tags_en`, `stats`.
- Clicking a card (or `Read More →`, Enter/Space) opens `#projectDialog` with: kicker, title, TL;DR (green left rule), Full Story, year + stats, tags.
- Close: × button, backdrop click, ESC. Dialog uses native `<dialog>` + `showModal()`.
- Dialog is square-cornered, bone surface, petrol hairline, max-width 720px, max-height 88vh with internal scroll.

### Logo

- Navbar: `images/logo/robbani-r-logo-transparent-cropped.png`
- Footer: `images/logo/robbani-r-logo-footer-transparent.png`
- Both transparent PNGs; never swap back to the white-box version.

## Caching

`index.html` references `style.css?v=28` and `script.js?v=4`. Bump both query params whenever those files change, otherwise the browser serves stale assets after a hard refresh cycle.

## Do's and Don'ts

- Do keep petrol `#26794A` as primary and bone `#f5f1e8` as the ground. Two families, no third hue.
- Do keep filter controls at `border-radius: 0`.
- Do keep exactly the four project tags; if new work needs a category, map it into one of the four.
- Do verify the year filter with a real combination (tag + 2 years) before calling a change done.
- Don't add a theme toggle, `data-theme`, or `.theme-switch` CSS/JS.
- Don't reintroduce emerald `#40916C` / `#2d6a4f` / `#071a12` — the baseline is warm paper.
- Don't add an "All" chip; `Clear` is the reset.
- Don't use inline styles; use CSS custom properties.
- Don't hardcode absolute paths; relative only.
