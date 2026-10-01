# 🗺️ ROADMAP KARIR — GIS → SENIOR GIS ANALYST
**Pemilik:** Burhanuddien Robbani, S.P.
**Dibuat:** 29 September 2026
**Fokus:** Remote Sensing & Specialist Track
**Target 12 bulan:** Senior Remote Sensing Specialist

---

## 🎯 TRACK PILIHAN

| Track | Growth | Cocok? | Alasan |
|---|---|---|---|
| **Remote Sensing / Specialist** | +73% | ✅ **UTAMA** | Sudah punya UAV, mangrove, Sentinel-2/Landsat, NDVI. T-shaped (domain+teknik) sulit digantikan AI |
| GIS Analysis | +49% | ✅ Alternatif | Jalan yang sedang ditempuh |
| Geospatial Engineering | +60% | ⚠️ Nanti | Butuh React/JS/Docker, switch terbaik di tahun 2-5 |

**Gaji acuan (US lowongan, konversi kasar Rp16.500):**
- Senior RS Specialist $149K (~Rp 2,46 M — realita Indonesia Rp 20–40 juta/bln)
- Senior GIS Analyst $113K (~Rp 1,86 M — realita Indonesia Rp 15–28 juta/bln)
- ⚠️ **JANGAN pakai angka USD untuk negosiasi. Yang penting: rasio +49% / +73%.**

---

## 📊 DATA NYATA (1,366 lowongan GIS)

| Level | Rata-rata skills | Skill combo kunci |
|---|---|---|
| Entry (0-2 thn) | 5.3 | Python (22%), GIS fundamental (20%) |
| **Senior (3-7 thn)** | **9.2 (+74%)** | **Python+SQL co-occur: 5 → 37** |

- Senior job rata-rata minta **9.2 skills** vs 5.3 di entry
- **"Teknisian Trap":** kerja yang tidak compound (buat peta, bersihkan data, sama seperti 5 tahun lalu tapi lebih cepat)
- **Solusi:** frame kerja sebagai **outcomes**, bukan outputs

---

## 🗓️ JADWAL 12 BULAN

### 🟢 BULAN 1 (Sep–Okt 2026): DEEP GEE — MULAI SEKARANG
**Status: 🟡 IN PROGRESS**

| Minggu | Topik | Deliverable | Status |
|---|---|---|---|
| **1–2** | GEE Fundamentals: JS vs Python API, ImageCollection & filtering, Sentinel-2 bands, cloud masking (`s2cloudless`/`qa.routineFilter`), mosaic + export | **Peta NDVI Sentinel-2 cloud-masked area rehabilitasi Robbani (Sumut + Kepri)** | ⬜ |
| **3–4** | Time-series: `.reduce()` annual, change detection, Landsat harmonization, MNDWI/NDRE, Random Forest di GEE, accuracy assessment | **Grafik time-series NDVI 2015–2025 area 1.786 Ha** | ⬜ |
| **5** | Automasi: Python `ee` API, batch export 100+ tile, COG, asset upload, Earth App | **Script Python auto-generate peta NDVI tahunan + Earth App** | ⬜ |
| **6** | Portofolio: GitHub repo, Earth App published, halaman portfolio, LinkedIn post | **1 repo + 1 Earth App + 1 halaman portfolio + 1 post LI** | ⬜ |

**Referensi tutorial (relevan rehab/konservasi):**
- 📘 **GEE Mangroves (Sentinel-1 + Sentinel-2 fusion, 10m, RF classification)** — `google-earth-engine.com/Terrestrial-Applications-part-1/Mangroves/`
  → **PALING RELEVAN** — metodologi identik dengan kerjaan Robbani
- 📘 **Mangroves II — Change Mapping (map-to-map + anomaly analysis, 2000-2020)** — `google-earth-engine.com/Terrestrial-Applications-part-1/Mangroves-II-Change-Mapping/`
  → Reference: Roy et al. (2016) inter-sensor harmonization, NDVI anomaly threshold ±0.05
- 🔬 **Chen et al. 2025 — Mangrove monitoring CCDC, Lampung Indonesia, GEE** (Restor. Ecol.)
  → **STUDY CASE TERDEKAT**: remnant mangrove + area rehabilitasi, Sentinel-2 time-series, akurasi deforestation 86% / restoration 90%
- 🔬 **Blue Carbon Explorer (TNC)** — `https://BlueCarbon.tnc.org` — contoh dashboard GEE produksi untuk prioritisasi rehabilitasi
  → Logikanya: NDVI gain > +0.1 = sehat, NDVI loss < −0.1 = degraded, filter canopy height < 1.8 m + jarak ke seed source = prioritas restorasi
- 🔬 **Cissell et al. — mangrove DST Puerto Rico, Random Forest, akurasi >85%** (NSF)
  → Workflowrf yang bisa di-deploy user lain dengan sedikit perluasan teknis
- 📹 **YouTube:** search "Google Earth Engine mangrove monitoring tutorial", "GEE Sentinel-2 change detection", "GEE random forest classification"
- 📹 **Course resmi:** Google Earth Engine Training (`developers.google.com/earth-engine/tutorials`) — bagian "Time Series" & "Classification"

**Threshold industri (pakai ini agar output-nya "dunia kerja"):**
- NDVI > 0.4 = mangrove sehat (Solanki et al.)
- NDVI gain ≥ +0.1 = pulih/healthy
- NDVI loss ≤ −0.1 = degraded, perlu intervensi
- Akurasi target: >85% overall accuracy, laporkan confusion matrix + kappa
- Resolusi: 10 m (Sentinel-2)

---

### 🟡 BULAN 2–3: SQL + WEB GIS
**Status: ⬜ Belum mulai**
- [ ] PostgreSQL + PostGIS (PostGIS Workshop, free)
- [ ] SQL spatial query: `ST_Intersects`, `ST_Buffer`, spatial index
- [ ] Leaflet.js + GeoJSON
- [ ] ArcGIS Online / Experience Builder dashboard
- **Deliverable:** pipeline GEE output → CSV → PostGIS → Leaflet dashboard (full-stack)

---

### 🟠 BULAN 4–6: AUTOMATION + CLOUD
**Status: ⬜ Belum mulai**
- [ ] ArcPy — toolboxes yang bisa dipakai tim (bukan script pribadi)
- [ ] Python packaging (`pyproject.toml`, installable)
- [ ] AWS S3 + Lambda untuk batch geospatial processing
- [ ] Docker — containerize pipeline GIS
- [ ] Data engineering: ETL, FME
- **Deliverable:** automated pipeline GEE → S3 → PostGIS → web map

---

### 🔵 BULAN 7–9: ML + SPATIAL DATA SCIENCE
**Status: ⬜ Belum mulai**
- [ ] PyTorch + rasterio (deep learning classification)
- [ ] Spatial statistics: kriging, spatial regression, Moran's I
- [ ] GEE ML: `ee.Classifier.train()` (RF, gradient tree)
- [ ] R untuk statistik
- **Deliverable:** deep learning mangrove health model

---

### 🟣 BULAN 10–12: LEADERSHIP + BRANDING
**Status: ⬜ Belum mulai**
- [ ] GISP certification (URISA, ~$300, butuh 3-5 thn exp)
- [ ] Esri Technical Certification (ArcGIS Pro Specialist)
- [ ] PM basics: Agile, budgeting
- [ ] LinkedIn: 1 post teknis/bulan
- [ ] Portfolio: 3 case study lengkap
- **Deliverable:** certification + portfolio refresh

---

## 🎓 SERTIFIKASI (priority)
1. **GISP** (GIS Professional) — URISA, $300
2. **Esri Technical Certification** — ArcGIS Pro Specialist, free
3. AWS Certified Geospatial (growing)
4. Pilot license — sudah dimiliki, maintain

---

## 📌 SKILL GAP TRACKER

| Skill | Status | Prioritas |
|---|---|---|
| ArcGIS Pro / QGIS | ✅ Expert | — |
| UAV / Drone Mapping | ✅ Expert | — |
| Remote Sensing (S2, L8) | ✅ Expert | — |
| NDVI/EVI indices | ✅ | — |
| Python (ArcPy, GeoPandas) | ⚠️ Basic | 🟡 P2 |
| **Google Earth Engine** | 🟡 **Sedang belajar** | 🔴 **P1 — BULAN INI** |
| **SQL / PostgreSQL-PostGIS** | ❌ Belum | 🔴 P1 (bulan 2-3) |
| **Web GIS** (Leaflet, ArcGIS Online) | ❌ Belum | 🔴 P2 (bulan 2-3) |
| **Cloud** (AWS/Azure) | ❌ Belum | 🟡 P3 (bulan 4-6) |
| **ML spatial** (PyTorch) | ❌ Belum | 🟡 P4 (bulan 7-9) |
| **Project Management** | ⚠️ Lead kecil | 🟡 P5 |
| **Communication/Storytelling** | ⚠️ | 🟡 P6 |
| **English** | ⚠️ Terbatas | 🟡 P5 (blockeruntuk dev/consulting) |

---

## ⚠️ TECHNICIAN TRAP — INGAT INI

> "You make a map. You clean a dataset. You run an analysis. The work matters, but it doesn't compound. Five years in, you're doing the same work faster — not different work at a higher level."

**Contoh framing yang benar:**

| ❌ Output (buruk) | ✅ Outcome (bagus) |
|---|---|
| "Saya buat peta mangrove" | "Saya deteksi degradasi 1.786 Ha &.generate bukti spasial untuk keputusan Kemenhut" |
| "Saya olah data Sentinel-2" | "Saya automate NDVI time-series yang_PROTOCOL recruitment hemat 40 jam manual" |
| "Saya survey lapangan" | "Saya dentifikasi 3 area prioritas restorasi dari analisis NDVI anomaly" |

---

## 📝 LOG PROGRESS

| Tanggal | Item | Status | Catatan |
|---|---|---|---|
| 29 Sep 2026 | Roadmap dibuat | ✅ | Fokus GEE bulan ini |
| | Minggu 1-2: GEE Fundamentals | ⬜ | |
| | Minggu 3-4: Time-series | ⬜ | |
| | Minggu 5: Automasi | ⬜ | |
| | Minggu 6: Portofolio | ⬜ | |

---

## 📌 CATATAN UNTUK ROBI

**Yang harus dilakukan minggu ini:**
1. Buka `code.earthengine.google.com` — login Google
2. Copy script NDVI pertama untuk area Sumatera Utara
3. Jalankan — peta langsung muncul
4. Kirim screenshot ke Vertex untuk review
5. Jalankan tutorial `google-earth-engine.com/Terrestrial-Applications-part-1/Mangroves/`

**Vertex akanCHS remind tiap Senin pagi tentang progress GEE.**
