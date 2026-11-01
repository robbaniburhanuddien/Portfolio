# Catatan Perbaikan CV & Tab Projects — 2026-10-24

Sumber: instruksi Robbani (chat Vertex, 24 Okt 2026). Status: **disimpan sebagai acuan kerja**.

---

## Catatan 1 — 4 poin deskripsi pekerjaan dibuat ulang

### Formula satu bullet (wajib memuat 5 unsur)
`Kata kerja aksi + Apa yang dikerjakan + Skala/scope + Metode/alat + Hasil/dampak (+ penerima manfaat/laporan)`

Contoh:
> "Memantau rehabilitasi mangrove **1.369 ha** (P0+P1) di **X kab/kota** menggunakan **ArcGIS Field Maps + GNSS**, menghasilkan **12 laporan progres bulanan** untuk **PPIU M4CR/World Bank**."

Aturan:
- 1 bullet = 1 ide, maksimal 2 baris (±25 kata).
- Mulai dengan kata kerja kuat: *Led, Delivered, Monitored, Produced, Verified, Coordinated, Facilitated, Analysed* — bukan "Bertanggung jawab atas".
- Setiap angka harus punya bukti (lihat bagian Data Mentah).
- Jangan campur tugas rutin dengan klaim dampak dalam satu bullet.

### 4 dimensi yang harus terwakili di tiap peran
1. **Core delivery** — apa yang benar-benar diserahkan (ha, desa, dokumen).
2. **Metode teknis** — GIS/RS/UAV/hidrologi/tools yang dipakai.
3. **Tata kelola & stakeholder** — Pemda, Pokmas/KTH, World Bank/BRGM, perizinan.
4. **Hasil / pemecahan masalah** — survival rate, efisiensi, temuan lapangan, koreksi desain.

### Blueprint per peran

**A. Technical Mangrove Rehabilitation Facilitator — PPIU M4CR Sumut (Jan 2025–sekarang)**
1. M&E rehabilitasi **[X ha]** di **[Y kab/kota]**; produksi **[Z laporan]** progres untuk PPIU/World Bank.
2. Survei hidrologi di **[N plot]**; rekomendasi intervensi (gapok/ bronjong/ canal blocking) untuk **[M ha]**.
3. Administrasi swakelola bersama **[P Pokmas]**; verifikasi dokumen & pencairan **[Rp …]**.
4. Koordinasi Pemda/desa/pemangku kawasan; menyelesaikan **[Q]** isu batas/konflik lahan/gagal tanam.

**B. Staf Rehabilitasi Mangrove (Teknis & GIS) — BRGM (Jul 2023–Des 2024)**
1. Menyerahkan rehabilitasi **~1.786 ha** di Kepri (703+197 ha 2023; 69+584+229 ha 2024) + Babel.
2. GIS/RS: produksi **[N peta]** kerja & monitoring; digitasi/verifikasi **[X ha]** dengan GNSS.
3. Pemberdayaan/padat karya: **[P Pokmas]**, **[N tenaga kerja]**, **[B bibit]**.
4. Koordinasi & pelaporan ke BRGM pusat/daerah; **[N]** dokumen teknis.

**C. Research Analyst Intern — BBKP Tanjung Priok (Jan–Mar 2021)**
1. Deteksi PCR bakteri OPTK pada **[N sampel]** benih kentang asal Skotlandia.
2. Inspeksi karantina di **[N]** titik (pelabuhan/gudang).
3. Dokumentasi hasil uji & pendukung laporan laboratorium.
(Cukup 3 bullet — peran magang tidak perlu dipaksa 4.)

> Catatan: angka dalam tanda **[ ]** harus diisi dari bukti, bukan perkiraan.

---

## Catatan 2 — Perbaikan nama kantor M4CR (SUDAH DITERAPKAN)

**Sebelum:** `PPIU M4CR Sumatera Utara — Proyek M4CR (World Bank × Kementerian LHK)`
**Menjadi (ID):** `PPIU M4CR Sumatera Utara — Proyek M4CR (World Bank × Kementerian Kehutanan RI)`
**English:** `PPIU M4CR North Sumatra — M4CR Project (World Bank × Ministry of Forestry of the Republic of Indonesia)`
Singkatan resmi EN: **MoF RI** (boleh dipakai di headline agar ringkas).

File yang diperbarui:
- `script.js` (org experience exp1)
- `career/cv.md` (headline + experience)
- `career/data/make_cv.py` (headline + experience)

Tindak lanjut: **render ulang PDF CV** (`python career/data/make_cv.py`) agar PDF ikut terkoreksi.
Catatan nomenklatur: "KLHK" sudah tidak dipakai sejak pemisahan kementerian (2024). Gunakan "Kementerian Kehutanan RI".

---

## Catatan 3 — Tab Projects harus berbasis pengalaman riil, bukan hasil AI

### Audit kartu saat ini (script.js → PORTFOLIO_DATA.projects)
| ID | Judul | Stat sekarang | Status |
|----|-------|---------------|--------|
| p1 | Penanaman Mangrove Skala Besar | 500+ ha, 10K+ bibit | **Belum terverifikasi** — angka tidak ada di cv.md/laporan |
| p2 | Pemetaan Distribusi Mangrove Nasional | 5+ provinsi, 3 tahun | **Overclaim** — basis data riil baru Sumut/Kepri (dan Babel) |
| p3 | Survei Aerial Kawasan Mangrove | 20+ misi, 2 cm GSD | **Belum terverifikasi** — butuh log terbang |
| p4 | Pemberdayaan Masyarakat Pesisir | 500+ peserta, 15+ desa | **Belum terverifikasi** — butuh daftar hadir |

Aturan baru: **tidak ada angka di kartu tanpa file bukti**. Jika belum ada bukti → hapus angka, ganti kualitatif ("multi-site", "berulang tiap bulan").

### Struktur kartu proyek baru (field wajib)
`judul · lokasi (desa/kec/kab/prov) · periode · peran · skala (ha/desa/pokmas) · metode & tools · output (peta/laporan) · hasil terukur · foto milik sendiri · izin publikasi`

### Kandidat proyek riil (ganti 4 kartu generik)
1. **Rehabilitasi Mangrove Sumut (M4CR)** — 334 ha (P0) + 636 ha (P1); jumlah desa/Pokmas menyusul dari laporan.
2. **Rehabilitasi Mangrove Kepri (BRGM)** — 703+197 ha (2023) dan 69+584+229 ha (2024).
3. **Pemetaan UAV untuk baseline/monitoring** — hanya angka dari log terbang (jumlah misi, ha, GSD aktual).
4. **Pendampingan Pokmas / padat karya** — jumlah Pokmas, anggota, dan bibit dari daftar hadir/BA.
5. (Opsional) **Monitoring NDVI Sentinel-2 (GEE)** — hanya jika script & hasil bisa direproduksi.

---

## Catatan 4 — CV yang di-hyperlink dari website

Status: **sudah dipasang (versi ID)**.

Yang sudah dikerjakan:
- `cv.pdf` di root situs (hasil render `career/data/make_cv.py`, 1 halaman, ±3,5 KB, text layer, memuat URL portofolio sebagai hyperlink).
- Tombol **Unduh CV** di section About (`index.html`) sudah diarahkan ke `cv.pdf` + `download="CV-Burhanuddien-Robbani.pdf"` + `aria-label`.
- PDF memuat `burhans-portfolio.netlify.app` (link timbal balik CV ↔ web).

Aturan final CV untuk web:
1. **Nama file stabil** `cv.pdf` — jangan pakai tanggal di nama file agar link tidak pernah putus. Arsip versi lama disimpan di luar folder deploy.
2. **Ukuran < 2 MB**, 1–2 halaman A4, **text layer** (bukan scan), font minimal 9 pt.
3. **Dua versi**: `cv.pdf` (ID) dan `cv-en.pdf` (EN); tombol mengikuti bahasa aktif.
4. **Metadata PDF**: title + author terisi.
5. **Link di dalam CV harus klikabel**: portfolio, LinkedIn, email — bukan teks mati.
6. **Aksesibilitas tombol**: teks deskriptif ("Unduh CV" / "Download CV"), `aria-label` menyebut format, jangan "klik di sini".
7. Setelah 4 bullet baru selesai → render ulang (`python3 career/data/make_cv.py`), salin ke `cv.pdf`, cek ulang link & jumlah halaman.
8. **Jangan taruh CV final di `career/`** untuk dipublikasikan — folder itu ikut ter-track git. File publik cukup di root `cv.pdf`.

Checklist QA sebelum deploy:
- [ ] Klik tombol → PDF terbuka/terunduh
- [ ] Teks PDF bisa di-copy (ATS-friendly)
- [ ] Link portfolio di dalam PDF bisa diklik
- [ ] Versi EN tersedia (atau tombol menyesuaikan bahasa)
- [ ] Tidak ada "KLHK" tersisa di PDF/web

---

## Data mentah yang harus disiapkan

### A. Fakta tingkat pekerjaan (untuk 4 bullet)
Isi per peran: organisasi, posisi, periode, lokasi, luas ha per fase, jumlah kab/kota/desa, jumlah Pokmas + anggota, bibit + spesies, survival rate, jumlah peta & laporan, penerima laporan, tools, anggaran (jika boleh dibuka), 2–3 masalah yang diselesaikan.

### B. Fakta tingkat proyek (untuk kartu web)
Isi per proyek: judul, kategori, peran, desa/kec/kab/prov, tanggal mulai–selesai, luas ha + fase, bibit, spesies, jumlah Pokmas, peserta, metode, tools, output, hasil terukur, path bukti, path foto, status izin foto, siap publish (Y/N).

### C. Bukti (evidence) — struktur folder
⚠️ **Jangan simpan bukti di dalam folder `portfolio/`** — `netlify.toml` memakai `publish = "."`, sehingga seluruh isi folder bisa ikut ter‑deploy. Simpan di luar repo:

```
1 project/career-evidence/
  01-m4cr-sumut/
    laporan-bulanan/   (PDF)
    peta/              (PDF/PNG)
    foto/              (JPG, sertakan tanggal + lokasi di nama file)
    surat-tugas/       (PDF)
    data-lapangan/     (XLSX/CSV hasil Kobo)
  02-brgm-kepri/
  03-uav/              (log terbang, orthomosaic, DSM)
  04-community/        (daftar hadir, BA, dokumentasi)
```
Penamaan: `YYYYMMDD_<lokasi>_<jenis>_<versi>.<ext>` (contoh: `20250314_desa-x_progres-maret_v1.pdf`).

Aturan privasi: redaksi NIK/nomor HP warga; foto orang butuh izin; jangan unggah dokumen berlabel "rahasia/internal" tanpa persetujuan.

### D. Lembar kerja minimal
Gunakan `career/data/raw-evidence-template.xlsx` (3 sheet: Pekerjaan, Proyek, Verifikasi).
Alur: isi fakta → isi path bukti → status verifikasi → baru tulis bullet/kartu.

### E. Aturan verifikasi
Setiap klaim di CV/web wajib punya baris di sheet "Verifikasi" dengan status:
- **verified** → ada file bukti yang bisa dibuka
- **unverified** → belum ada bukti, jangan dipakai di CV
- **rejected** → sudah dicek, tidak akurat, hapus

---

## Urutan kerja yang disarankan
1. Kumpulkan bukti per peran (folder `career/evidence/`).
2. Isi `raw-evidence-template.xlsx`.
3. Tulis ulang 4 bullet per peran (formula di Catatan 1).
4. Ganti kartu Projects dengan 3–4 proyek yang punya bukti.
5. Render CV PDF + preview web lokal, lalu review bersama.
