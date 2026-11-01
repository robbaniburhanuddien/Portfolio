# 🔁 REVERSE-ENGINEERING REPORT — Irfankurnia.com (ref: 포트폴리오는 러시를 거부한다)

**Target:** https://irfankurnia.com  
**Method:** REA workflow (`morluto/rea` — *reverse-engineer-anything*). Eye‑grade: native, managed, Electron/JavaScript, packaged, firmware, and browser targets. We applied the **browser target** path: capture live instance → extract structure → produce evidence → adapt to target.  
**Date:** 2026‑10‑25

---

## 1. Evidence collection

- Downloaded live HTML (27 529 bytes) → `/home/burha/.hermes/profiles/portfolio/cache/scratch/irfankurnia.html`
- Parsed DOM outline: `<header>` → `<nav>`, `<main>` → sections, `<dialog>`s exposed for experiments.
- CSS: Astro‑compiled `/_astro/Base.Bag1PnVm.css` (variables, glass cards, scroll‑driven reveal). No custom framework; vanilla HTML/CSS/JS + Astro.
- Externally linked assets: `favicon`, `manifest.json`, `resume.pdf` (Google Drive link), `og:image`, `structured‑data` JSON‑LD.

---

## 2. Components observed (components → evidence)

| # | Component | Where in HTML | Behavior / Implementation hints |
|---|-----------|---------------|---------------------------------|
| 1 | **Hero with animated card stack** | `<section>#hero` + `<article class="stack-card">` x5 | Cards slide in sequentially; one visible at a time; `data-card` & `data-position` drive reveal; JS shuffles cards (no custom framework, pure JS). |
| 2 | **Project / Featured Work cards** | `<a class="project-card" href="/work/…">` | Compact card: cover image → title → 1‑sentence desc + tags. Uses `data-reveal` for scroll‑reveal. |
| 3 | **Resume / download CTA** | `<a href="https://drive.google.com/file/d/…view" target="_blank">Resume</a>` | Direct PDF link, opens in new tab. No fancy button; clean CTA. |
| 4 | **Quests / Experiments dialogs** | `<dialog id="quest-…">` | Buttons open `<dialog>`; content + title; close via `data-dialog-close`. |
| 5 | **Contact section** | `<article class="contact-card">` | Email + LinkedIn, clear CTA “open for full‑time”, “response in 24h”. |
| 6 | **Accessibility & structure** | `<a class="skip-link" href="#main-content">`, `<nav>`, `<main>`, `<dialog>`, `aria-*` attributes | Standard WCAG, low‑weight, works without JS. |
| 7 | **Focusable motion toggle** | `<button class="motion-toggle">` | `prefers-reduced-motion` respected; users can pause animations. |

---

## 3. REA methodology applied

1. **Capture** – live page (HTTP 200, no auth).  
2. **Observe** – DOM tree, CSS link, inline script/jss, ARIA landmarks.  
3. **Extract** – component boundaries, interaction patterns, animation cues.  
4. **Produce** – evidence file (`IR-Evidence.md`); recommend adaptations to target site (portfolio).  
5. **Adapt** – translate components into the target stack (HTML/CSS/JS) with minimal dependencies.  

---

## 4. Translation to portfolio (`Burhanuddien Robbani — mangrove/GIS`)

The portfolio already has:

- Downloadable CV PDF (`cv.pdf`).
- Filterable project cards (rehabilitasi / GIS / UAV / community).
- Scroll reveal via `.reveal` class.
- Contact form + downloadable CV link.

### 5‑point adaptation plan

| Absorb from Irfankurnia | Portfolio implementation plan | Priority |
|---|---------------------------------|
| **Card stack / hero reveal animation** | Replace static hero copy with a lightweight 3‑step card stack (photo → role → statement) or keep hero but add a subtle `reveal` show‑up. | Medium |
| **Quests / Experiments dialog** | Add a small “Experiment” section at the bottom: 2–3 experiments (GEE NDVI, UAV orthomosaic, PGIS mapping). Clicking opens a `<dialog>` with evidence & result. | Medium |
| **Resume / CV link (clean CTA)** | Already done (`cv.pdf`), but add a secondary “Download CV (EN)” later. | High |
| **Accessible skip link & semantic landmarks** | Add `<a class="skip-link" href="#main-content">Skip to content</a>` near `<body>` top. | Medium |
| **Motion toggle / respect `prefers-reduced-motion`** | Add a small toggle in footer (or respect OS preference, already applied). | Low |

> **Decision:** We will not add a full hero card stack; it competes with content. Instead, we will adopt **Experiment dialogs + accessible skip link + resume CTA** first, then revisit hero motion if still needed.

---

## 5. Next steps (for the portfolio)

1. **Dialog section:** Add `<dialog id="quest-gantt">` for GEE NDVI time‑series, `<dialog id="quest-uav">` for UAV orthomosaic, `<dialog id="quest-pgis">` for community mapping. Each card shows: title, one‑line description, evidence (link to GEE script, map PNG, community photo with consent).  
2. **Skip link:** Insert at top of `<body>` and style `.skip-link` (high contrast, positioned off‑screen by default).  
3. **CTA link:** Keep `cv.pdf` but add a secondary EN version later.  
4. **Motion toggle:** Add a footer toggle that pauses the hero scanning line & scroll reveals.  
5. **Verify:** Run local server (`python3 -m http.server 8123`), open in browser, test dialogs & skip link, check reduced‑motion.

---

## 6. Files modified / planned

- `index.html` → skip-link, dialogs, hero tweaks
- `script.js` → reveal logic, dialog open/close, motion toggle
- `style.css` → skip-link, dialog styling, motion toggle, (optionally) scan‑line
- `career/reverse-engineering/IR-Evidence.md` ← **this file**

---

## 7. Commands used (for the record)

```bash
# 1. Fetch live page
curl -sL --max-time 30 "https://irfankurnia.com" -o irfankurnia.html

# 2. Parse DOM & CSS links (Python 3)
python3 - <<'EOF'
from html.parser import HTMLParser
...
EOF

# 3. Start local preview
python3 -m http.server 8123 --bind 127.0.0.1
```

---

**Status:** Evidence collected ✅ → Component analysis ✅ → Adaptation plan ✅ → Ready for implementation.
