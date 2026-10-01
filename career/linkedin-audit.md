# LinkedIn Audit — Konsistensi Bulanan
*Dijalankan otomatis tiap tanggal 1 (cron) oleh Vertex. Bandingkan LinkedIn ↔ portfolio web ↔ cv.md.*

## Template hasil audit
- **Headline konsisten?** [ ] Ya / [ ] Tidak — catatan:
- **About/Summary sinkron?** [ ] Ya / [ ] Tidak — catatan:
- **Experience: M4CR ada di LinkedIn?** [ ] Ya / [ ] Tidak
- **Experience: periode cocok?** [ ] Ya / [ ] Tidak (exp1/exp2/exp3)
- **Skills ATS: ArcGIS/QGIS/GEE/UAV ada?** [ ] Ya / [ ] Tidak
- **Email typo?** [ ] Bersih / [ ] Ada (sebutkan)
- **Link aneh (script.google.com)?** [ ] Tidak ada / [ ] Ada
- **Foto profil = portfolio?** [ ] Ya / [ ] Tidak

## Log

### 2026-10-01 — Audit #2 (cron Vertex)

| Item | Status | Catatan |
|------|--------|---------|
| **Headline konsisten?** | ⚠️ Tidak fully | cv.md & profile.yml sama: `Technical Mangrove Rehabilitation Facilitator \| GIS & UAV Operator \| M4CR (World Bank × KLHK)`. Tapi portfolio web (index.html) pakai hero subline berbeda: *"Leveraging GIS, Remote Sensing, and UAV Technology for precision mangrove rehabilitation and community empowerment"* — tanpa sebutan "M4CR" atau "Facilitator". Headline LinkedIn kemungkinan perlu diupdate agar sama dengan cv.md. |
| **About/Summary sinkron?** | ⚠️ Tidak fully | cv.md & profile.yml tidak punya About/Summary section. Portfolio web (index.html) punya `about.bio` ID+EN, tapi EN bio tulis *"M4CR-the Ministry of Forestry"* (hyphen) bukan *"World Bank × KLHK"* (× sign) seperti di cv.md. Juga `hero.desc` ID & EN pakai en-dash (–) bukan ×. LinkedIn About kemungkinan berbeda lagi — perlu dicek manual. |
| **Experience: M4CR ada di LinkedIn?** | ✅ Ada (di portfolio) | M4CR jelas ada di cv.md, profile.yml, script.js exp1, dan semua CV_ATS/job files. Kehadiran di LinkedIn perlu konfirmasi manual (akses publik terbatas). |
| **Experience: periode cocok?** | ✅ Cocok | Semua 3 exp sama: exp1 Jan 2025–Present (1y7m), exp2 Jul 2023–Dec 2024 (1y6m), exp3 Jan 2021–Mar 2021 (3m). cv.md ↔ profile.yml ↔ script.js → **no drift**. |
| **Skills ATS: ArcGIS/QGIS/GEE/UAV ada?** | ✅ Ada | Semua 4 skill muncul di cv.md, profile.yml, dan badge-cloud script.js. Tambahkan: ArcGIS Field Maps, GNSS/GPS, KoboToolbox/ODK juga ada di semua sumber. |
| **Email typo?** | ✅ Bersih | `burhanuddienrobbani@gmail.com` konsisten di cv.md, profile.yml, script.js, make_cv.py, dan semua CV_ATS. Tidak ada typo. |
| **Link aneh (script.google.com)?** | ✅ Tidak ada | Hanya 4 URL eksternal: `linkedin.com/in/robbanib`, `github.com/robbaniburhanuddien`, `instagram.com/robbanib/`, `wa.me/`. Tidak ada script.google.com. Satu-satunya link aneh: `http://localhost:8123` (dev only, tidak publik). |
| **Foto profil = portfolio?** | ❓ Tidak bisa dicek | Tidak ada akses ke foto LinkedIn. Di portfolio, foto ada di `aboutSlider` (referensi via JS, file di `images/`). Perlu konfirmasi visual. |

#### OFI (Opportunities for Improvement) — 3 rekomendasi:

1. **Harmonisasi headline**: Ganti hero subline di `script.js` (baris 123) menjadi headline yang sama dengan cv.md: *"Technical Mangrove Rehabilitation Facilitator | GIS & UAV Operator | M4CR (World Bank × KLHK)"*. Ini meningkatkan ATS keyword match dan konsistensi personal branding.

2. **Konsisten delimiter "×" vs "x" vs "–"**: cv.md & profile.yml pakai `×` (Unicode U+00D7), tapi `make_cv.py` (baris 34,41) dan semua `CV_ATS_*.md` pakai `x` (ASCII). `hero.desc` & `about.bio` EN pakai `–` (en-dash). Standardisasi ke `×` di semua file.

3. **LinkedIn URL format**: cv.md tulis `linkedin.com/in/robbanib` (tanpa scheme), profile.yml `https://www.linkedin.com/in/robbanib` (dengan www), script.js `https://linkedin.com/in/robbanib` (tanpa www). Standarkan ke `https://www.linkedin.com/in/robbanib` di semua sumber.

#### Catatan LinkedIn (butuh akses manual):
- Headline LinkedIn kemungkinan masih menggunakan versi lama (perlu diupdate ke headline cv.md).
- About/Summary LinkedIn perlu diisi/diperbarui agar sejalan dengan portfolio `about.bio`.
- Pastikan M4CR (World Bank × KLHK) muncul di Experience section LinkedIn.
