# Product Requirement Document (PRD) — Mangrove Portfolio

## 1. Executive Summary
Proyek ini adalah website portofolio profesional interaktif satu halaman (Single Page Application) milik **Burhanuddien Robbani, S.P.** Website ini dirancang dengan estetika "Nature-Tech" premium menggunakan efek glassmorphism bertema hijau emerald gelap. Website ini mempromosikan keahlian khusus selama 3 tahun terakhir di bidang rehabilitasi mangrove, GIS/Remote Sensing, pilot UAV/drone, dan pemberdayaan masyarakat pesisir di bawah BRGM dan Kementerian Kehutanan RI.

## 2. Goals & Objectives
* **Personal Branding:** Memposisikan pemilik sebagai ahli restorasi mangrove & spesialis geospasial terkemuka di Indonesia.
* **Bilingual Support (ID/EN):** Menjangkau pemangku kepentingan nasional (pemerintah, komunitas lokal) dan internasional (NGO lingkungan, lembaga donor global).
* **High-Impact Visuals:** Menampilkan dokumentasi udara (UAV) dan lapangan asli untuk membuktikan dampak nyata pekerjaan restorasi.

## 3. Target Audience & Users
* **Lembaga Pemerintah (BRGM, Kementerian LHK/Kehutanan):** Profesional lapangan tepercaya untuk koordinasi program nasional.
* **NGO / NGO Internasional:** Konsultan teknis rehabilitasi pesisir dan analisis GIS.
* **Akademisi & Peneliti:** Data monitoring dan metodologi restorasi berbasis komunitas.

## 4. Scope of Features (MVP)
* **Hero Section:** Status keaktifan, tagline, dan counter statistik (Tahun Kerja, Luas Area, Wilayah Kerja).
* **Bilingual Switcher:** Ganti bahasa ID/EN instan tanpa reload via modul i18n terpusat.
* **Interactive Project Filters:** Filter berdasarkan kategori (Rehabilitasi, GIS, UAV, Community).
* **Lightbox Gallery:** Pratinjau resolusi penuh.
* **Bilingual Contact Form:** Terintegrasi tautan WhatsApp & LinkedIn (simulasi kirim di sisi klien).

## 5. Out of Scope
* Sistem CMS (tetap statis agar ringan & aman).
* WebGIS kompleks (ditambahkan bertahap nanti).

## 6. Catatan Pembelajaran
Proyek ini juga murni ajang belajar AI — "smallest real thing that teaches it".
Setiap kendala (gotcha) dicatat di `TODO.md` / diskusi agar jadi bahan pembelajaran berkelanjutan, dan dituliskan laporan singkat (`writeup`) begitu fitur berhasil.
