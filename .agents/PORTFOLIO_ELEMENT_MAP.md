# Portfolio Element Map — Kamus Bersama (Awam ↔ Teknis)

Tujuan: Robbani tahu nama tiap bagian portofolio supaya arahan tidak nebak.
Setiap bagian punya: (1) Nama awam, (2) Nama kode/section, (3) Fungsi, (4) Bisa diubah apa.

================================================================
## STRUKTUR HALAMAN (dari atas ke bawah / kiri ke kanan)
================================================================

1. **HERO (Layar Pembuka)**
   - section `#hero`
   - Isi: "Hi, my name is" (intro) → "Burhanuddien **Robbani.**" (nama) →
     "Translating Spatial Data into Ecological Action." (HERO STATEMENT) →
     "Leveraging GIS..." (SUBLINE) → tombol "View Experience" / "Get in Touch".
   - Hero Statement = kalimat besar pengganti job title (font sama dengan nama).
   - Subline = 1 kalimat kecil penjelas (font kecil).
   - FULL ENGLISH (tidak berubah saat klik ID/EN).

2. **NAVBAR (Menu Atas)** — `#navLinks`
   - Link: Experience, Skills, Projects, Contact (Tentang/About sudah diarsip).
   - Klik scroll ke section terkait.

3. **WHERE I'VE WORKED (Pengalaman)** — `#experience` (section-tag: "Career Journey")
   - TAB STYLE: kiri = daftar perusahaan (BRGM, PPIU M4CR), kanan = panel detail.
   - Klik perusahaan → panel ganti (posisi, masa kerja, jobdesc) TANPA scroll.
   - Mobile: tab jadi baris (akordion-style).

4. **SKILLS & SPECIALIZATION (Keahlian)** — `#skills` (section-tag: "Competencies")
   - 4 kartu domain: Rehab, GIS, UAV, Community. Tiap kartu ada tools + bullet.
   - Tools (ArcGIS, QGIS, GEE, UAV) = FULL ENGLISH.

5. **FEATURED PROJECTS (Proyek)** — `#projects` (section-tag: "Project Portfolio")
   - Grid kartu proyek + filter kategori. Klik kartu → lightbox/modal detail.
   - BILINGUAL (desc ikut toggle ID/EN).

6. **LET'S CONNECT (Kontak)** — `#contact` (section-tag: "Let's Connect", h2: "Get In Touch")
   - Blurb + 4 icon bulat: LinkedIn, Instagram, GitHub, Email (mailto).
   - FULL ENGLISH (tidak berubah saat klik ID/EN).

================================================================
## YANG SUDAH DIARSIP (ada di archive.html, belum di halaman)
================================================================
- **ABOUT / BACKGROUND** (`#about` "Tentang Saya") — foto + bio.
- **GALLERY** (foto lapangan).
- **MAP** (peta lokasi kerja).
- **EDUCATION & CERTIFICATION** (`#education` "Pendidikan & Sertifikasi").
Cara munculkan lagi: pindahkan balik dari archive.html ke index.html.

================================================================
## SISTEM BAHASA (i18n)
================================================================
- Tombol ID/EN di pojok kanan atas.
- DEFAULT sekarang = **ENGLISH**.
- **FULL ENGLISH (abaikan toggle)**: Hero, Contact, semua judul/sub-judul section,
  tools teknis, nama latin spesies.
- **BILINGUAL (ikut toggle)**: bio (kalau dipulihkan), project desc, experience duties,
  skills narrative.

================================================================
## CATATAN UNTUK ROBBANI
================================================================
- Kalau mau arahkan perubahan, sebut nama bagian di atas (mis. "hero statement",
  "where i've worked", "let's connect"). Saya akan tahu persis element mana.
- "Background" = About section (sudah diarsip).
- Preview live selalu di http://localhost:8123 — cek di sana, bukan nebak.
- Semua perubahan di branch `redesign-minimalis` (bisa undo ke `main`).
