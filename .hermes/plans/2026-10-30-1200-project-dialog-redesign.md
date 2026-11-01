# Project Dialog Redesign — Implementation Plan

**Goal:** Ganti `#projectDialog` menjadi dialog 2 kolom: carousel foto di kiri (landscape utuh, auto-slide + kontrol manual), dan di kanan judul EN, tag, year, short description EN, plus dua tab `TL;DR` (default) dan `Full Stories` berisi Context / Roles / Process / Impact.

**Architecture:** Data-driven. Semua isi dialog dibaca dari `PORTFOLIO_DATA.projects` di `script.js`; markup dialog statis di `index.html`; layout & animasi di `style.css`. Tidak ada dependency baru — carousel dan tabs ditulis vanilla JS.

**Tech Stack:** HTML statis, CSS custom properties, vanilla JS (ES5-safe), native `<dialog>`.

---

## Konteks & asumsi

- Baseline tema: warm paper (petrol `#26794A` + bone `#f5f1e8`), kartu & kontrol sudah rounded.
- `index.html` sudah punya kerangka `#projectDialog` dengan `.proj-dialog-media` dan `.proj-dialog-body`, tapi foto belum diisi oleh JS.
- Tiap proyek sekarang hanya punya satu `image` (string), `tags_en`, `year`, `tldr_id/en`, `desc_id/en`, `stats`.
- Judul, tag, short description, dan seluruh isi blok **selalu bahasa Inggris** (keputusan user). Label UI (`Tahun`, `Clear`, dsb.) tetap ikut toggle bahasa.
- Foto & copy final akan disuplai user nanti. Plan ini memakai draft dari data yang ada, ditandai sebagai provisional.

---

## Skema data baru (per proyek)

```js
{
  id: "p1",
  title_en: "Large-Scale Mangrove Planting",
  tags_en: ["Rehabilitation"],
  year: "2025",
  short_en: "Restored 500+ ha of coastal mangrove through ecology-based planting and spatial monitoring.",
  images: ["images/IMG_9403~photo.JPG"],        // minimal 1; ideal 3-5
  full: {
    context_en: "…",
    roles_en:   "…",
    process_en: "…",
    impact_en:  "…"
  },
  // legacy, tetap dipakai kartu di grid:
  image: "images/IMG_9403~photo.JPG",
  desc_en: "…",
  stats: [...]
}
```

Aturan fallback:
- `images` kosong → pakai `[image]`.
- `short_en` kosong → pakai `tldr_en` → potong `desc_en` kalimat pertama.
- `full.*` kosong → tampilkan `—` dan beri class `is-missing` (abu-abu), supaya jelas mana yang belum diisi.
- `images.length === 1` → panah, dot, counter, dan autoplay dimatikan.

---

## Draft isi (provisional — menunggu copy final dari user)

| Proyek | Context | Roles | Process | Impact |
|---|---|---|---|---|
| p1 Large-Scale Mangrove Planting (2025) | North Sumatra's coastal belt lost mangrove cover to pond conversion and abrasion; the national programme targeted degraded ponds and mudflats that still supported replanting. | Planned planting layouts and verified field implementation as GIS/technical facilitator; coordinated with pokmas and local government on site selection and maintenance. | Land-suitability analysis in GIS, hydrological survey for water-gate decisions, UAV orthophoto baseline, GNSS ground-truthing, survival monitoring. | 831 ha planted and 498 ha maintained in year one province-wide; this card covers 500+ ha with 10K+ seedlings. |
| p2 National Mangrove Distribution Mapping (2024) | Restoration targets were set without a consistent national baseline of existing mangrove extent and loss rate. | Processed and classified multi-temporal imagery, built change-detection layers, produced map layouts for planning. | Sentinel-2/Landsat composites in GEE, cloud masking, NDVI/MDI, supervised classification, accuracy checks, ArcGIS/QGIS layouts. | Cover and change layers for 5+ provinces across 3 time periods, used to allocate planting areas. |
| p3 Aerial Survey of Mangrove Areas (2023) | Field teams needed current high-resolution base maps; satellite imagery was too coarse to delineate canals, bunds, and planting rows. | Planned and flew UAV missions, processed photogrammetry, delivered orthomosaics/DSMs to field implementers. | DJI Mavic/Phantom + Dronelink planning, GNSS control points, Agisoft Metashape and Pix4D, point-cloud classification, GeoTIFF output. | 20+ missions at 2 cm GSD, guiding planting layout and progress verification. |
| p4 Coastal Community Empowerment (2024) | Restoration failed where planting happened without local ownership; groups needed technical and institutional support beyond the project cycle. | Facilitated KTH/pokmas groups, delivered technical training, supported social-forestry institutional setup. | Participatory mapping (PGIS), field schools on nursery and planting technique, group governance mentoring, visual progress reporting. | 500+ participants in 15+ villages trained, with active groups taking over maintenance and monitoring. |
| p5 Integrated Mangrove Monitoring System (2026) | Survival and growth data were collected in inconsistent formats, slowing comparison across sites and funder reporting. | Designed the monitoring workflow, built the data schema, integrated field records with spatial layers. | Permanent sample plots, KoboToolbox/ODK forms, GNSS positions, drone re-flights, semi-annual NDVI comparison in GEE. | 12 monitoring plots on a semi-annual cycle with comparable survival and canopy-cover trends. |

Draft `short_en` per proyek sudah tersedia dari `tldr_en` yang ada sekarang.

---

## Struktur markup target

```html
<dialog id="projectDialog" class="proj-dialog">
  <div class="proj-dialog-inner">

    <button id="projectDialogClose" class="proj-dialog-close">×</button>

    <!-- KIRI: carousel -->
    <div class="pd-gallery" id="pdGallery">
      <div class="pd-track" id="pdTrack">
        <!-- .pd-slide > img, di-generate JS -->
      </div>
      <button class="pd-nav pd-prev" id="pdPrev" aria-label="Foto sebelumnya">‹</button>
      <button class="pd-nav pd-next" id="pdNext" aria-label="Foto berikutnya">›</button>
      <div class="pd-dots" id="pdDots" role="tablist" aria-label="Pilih foto"></div>
      <span class="pd-counter" id="pdCounter" aria-live="polite">1 / 3</span>
    </div>

    <!-- KANAN: meta + tabs -->
    <div class="proj-dialog-body">
      <h2 class="proj-dialog-title" id="projectDialogTitle"></h2>

      <div class="pd-meta">
        <div class="pd-tags" id="pdTags"></div>
        <span class="pd-year" id="pdYear"></span>
      </div>

      <p class="pd-short" id="pdShort"></p>

      <div class="pd-tabs" role="tablist" aria-label="Detail proyek">
        <button class="pd-tab is-active" id="tabTldr" role="tab"
                aria-selected="true"  aria-controls="panelTldr">TL;DR</button>
        <button class="pd-tab" id="tabFull" role="tab"
                aria-selected="false" aria-controls="panelFull">Full Stories</button>
      </div>

      <div class="pd-panel is-active" id="panelTldr" role="tabpanel" aria-labelledby="tabTldr">
        <p id="pdTldr"></p>
      </div>

      <div class="pd-panel" id="panelFull" role="tabpanel" aria-labelledby="tabFull" hidden>
        <dl class="pd-blocks">
          <dt>Context</dt><dd id="pdContext"></dd>
          <dt>Roles</dt><dd id="pdRoles"></dd>
          <dt>Process</dt><dd id="pdProcess"></dd>
          <dt>Impact</dt><dd id="pdImpact"></dd>
        </dl>
      </div>
    </div>

  </div>
</dialog>
```

---

## Task list (bite-sized)

### Task 1 — Extend project data schema
**File:** `script.js` (array `projects`)
- Tambah `short_en`, `images: []`, `full: { context_en, roles_en, process_en, impact_en }` ke 5 proyek.
- Biarkan field lama (`image`, `desc_id/en`, `tldr_id/en`, `stats`) utuh untuk kartu grid.
- **Verify:** `node --check script.js` lolos.

### Task 2 — Isi draft copy 5 proyek
**File:** `script.js`
- Masukkan draft tabel di atas.
- Tandai proyek yang copy-nya provisional dengan komentar `// TODO(copy): menunggu final dari Robbani`.
- **Verify:** semua `full.*` non-empty; tidak ada string `undefined`.

### Task 3 — Ganti markup dialog
**File:** `index.html` (blok `#projectDialog`, sekitar baris 356-374)
- Ganti isi `.proj-dialog-inner` sesuai struktur di atas.
- Hapus `figure.proj-dialog-media` lama dan tombol CTA "Lihat di Galeri"/"Buka Peta Lokasi" (tidak dipakai).
- **Verify:** struktur punya `#pdGallery`, `#pdTrack`, `#pdPrev`, `#pdNext`, `#pdDots`, dua `role="tab"`.

### Task 4 — CSS layout 2 kolom
**File:** `style.css` (blok `/* ---- PROJECT DIALOG ---- */`)
- `.proj-dialog` max-width `1040px`, `border-radius: 16px`, `overflow: hidden`.
- `.proj-dialog-inner` grid `minmax(0, 55fr) minmax(0, 45fr)`, gap 0, padding 0.
- `.proj-dialog-close` absolute, tetap di atas (z-index 5).
- **Verify:** buka dialog, kolom kiri ±55%.

### Task 5 — CSS carousel + frame foto utuh
**File:** `style.css`
- `.pd-gallery { position:relative; background:#efe6d5; }`
- `.pd-track { display:flex; height:100%; transition: transform .45s cubic-bezier(.22,.61,.36,1); }`
- `.pd-slide { flex: 0 0 100%; display:flex; align-items:center; justify-content:center; }`
- `.pd-slide img { width:100%; height:100%; object-fit:contain; }` ← kunci "tidak terpotong"
- `.pd-nav` bulat 36px, background bone 92% + blur, posisi tengah kiri/kanan.
- `.pd-dots` di bawah tengah; `.pd-dot` 7px bulat, aktif = petrol dan melebar 18px.
- `.pd-counter` kanan bawah, mono 0.65rem.
- **Verify:** foto landscape tampil utuh, ada "mat" bone di sisi.

### Task 6 — CSS tabs
**File:** `style.css`
- `.pd-tabs { display:flex; gap:8px; border-bottom:1px solid rgba(38,121,74,.16); }`
- `.pd-tab { padding:10px 18px; border-radius:999px 999px 0 0; ... }` (atau segmented pill)
- `.pd-tab.is-active { background:var(--clr-primary); color:#fff; }`
- `.pd-blocks dt` mono uppercase kecil petrol; `dd` body text muted, margin-bottom 16px.
- **Verify:** tab aktif jelas, dua tombol berdampingan.

### Task 7 — Render dialog dari data
**File:** `script.js` → `openProjectDialog(p)`
- Isi `#projectDialogTitle` = `p.title_en`.
- `#pdTags` = `p.tags_en` chips; `#pdYear` = `p.year`.
- `#pdShort` = `p.short_en`.
- `#pdTldr` = `p.short_en` (ringkasan 1-2 kalimat).
- `#pdContext/#pdRoles/#pdProcess/#pdImpact` = `p.full.*_en`.
- Bangun slide dari `p.images` (fallback `[p.image]`), alt = `p.title_en + ' — foto N'`.
- Reset ke slide 0 & tab TL;DR setiap kali dibuka.
- **Verify:** klik tiap kartu → isi benar, tidak ada `undefined`.

### Task 8 — Carousel controller
**File:** `script.js`, fungsi baru `initProjectCarousel()` + state per-dialog.
- `goTo(i)`: clamp, geser track `translateX(-i*100%)`, update dot + counter.
- `next()/prev()`.
- Autoplay `setInterval(5000)`, hanya jika `images.length > 1` dan `!prefers-reduced-motion`.
- Pause saat: `mouseenter` gallery, `focusin`, user klik nav/dot, `document.hidden`.
- Resume saat `mouseleave`/`focusout` (kecuali sudah pernah interaksi manual → tetap pause; pilih perilaku: **pause permanen setelah interaksi manual**).
- Keyboard: `ArrowLeft`/`ArrowRight` saat fokus di gallery.
- Touch: swipe minimal 40px.
- **Cleanup:** `clearInterval` saat dialog `close` (hindari timer bocor).

### Task 9 — Tabs controller
**File:** `script.js`
- Klik tab → set `aria-selected`, toggle `.is-active`, tampilkan panel (`hidden` attr).
- Default `TL;DR` setiap dialog dibuka.
- Keyboard: panah kiri/kanan pindah tab.

### Task 10 — Fallback & edge cases
- 1 foto → sembunyikan `#pdPrev`, `#pdNext`, `#pdDots`, `#pdCounter`; matikan autoplay.
- Field kosong → `—` + class `is-missing`.
- Nama file dengan spasi/`~` → `encodeURI` saat set `src`.
- **Verify:** proyek dengan 1 foto tidak menampilkan kontrol.

### Task 11 — Responsive & a11y
- `< 840px`: grid 1 kolom, gallery tinggi `240px`, body padding 22px.
- Tab & nav punya `aria-label`; counter `aria-live="polite"`.
- Fokus awal saat dialog dibuka = tombol close atau judul (`tabindex="-1"`).
- Kontras teks kecil (`#pdCounter`, label blok) dicek ≥ 4.5:1.

### Task 12 — Verifikasi & rilis
- Buka 5 proyek, cek isi + carousel + tabs.
- Test 390px, 768px, 1440px.
- `node --check script.js`; cek console kosong.
- Screenshot dialog tiap proyek untuk arsip.
- Bump `style.css?v=43`, `script.js?v=14`.
- Update `DESIGN.md` bagian Components → Project dialog.

---

## Files likely to change

- `index.html` — markup `#projectDialog`
- `style.css` — blok dialog, carousel, tabs, responsive
- `script.js` — `projects[]`, `openProjectDialog()`, carousel & tabs controllers
- `DESIGN.md` — dokumentasi komponen
- `.hermes/plans/` — plan ini

---

## Validation checklist

- [ ] 5 proyek membuka dialog dengan judul EN, tag, year, short EN
- [ ] TL;DR aktif default; Full Stories menampilkan 4 blok
- [ ] Foto landscape tampil utuh (tidak crop)
- [ ] Autoplay jalan, berhenti saat hover/interaksi, tidak jalan saat 1 foto
- [ ] Panah & dot berfungsi, counter akurat
- [ ] Tidak ada timer bocor setelah dialog ditutup
- [ ] Mobile 390px tetap nyaman
- [ ] Toggle ID/EN tidak mengubah isi dialog (tetap EN)
- [ ] Console bersih, `node --check` lolos

---

## Risks & tradeoffs

| Risiko | Mitigasi |
|---|---|
| `object-fit: contain` menyisakan ruang kosong | Latar bone dibuat seperti "mat" foto; konsisten dengan tema field-report |
| Autoplay mengganggu | Pause saat hover/fokus, mati total saat `prefers-reduced-motion`, pause permanen setelah interaksi manual |
| Dialog terlalu tinggi di laptop | `max-height: 90vh` + body scroll internal |
| Nama file foto mengandung spasi/`~` | `encodeURI()` saat set `src`; uji di server lokal |
| Copy provisional terlihat final | Komentar `TODO(copy)` + class `is-missing` untuk field kosong |

---

## Open questions (menunggu user)

1. **Foto per proyek:** berapa banyak idealnya (3–5)? Apakah akan diberi nama file terstandar (`p1-1.jpg`, `p1-2.jpg`, …)?
2. **Copy final:** user akan kirim per blok; sebelum itu draft dipakai.
3. **Tag:** tetap 4 tag EN yang sekarang, atau boleh nambah tag khusus proyek di dialog?
4. **Full Stories panjang:** 1 paragraf per blok, atau boleh 2 paragraf untuk proyek besar?
