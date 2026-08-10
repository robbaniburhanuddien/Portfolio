# AI Agent Guidelines & Technical System Rules (Single Source of Truth)

## 1. Project Identity
* **Name:** Burhan Mangrove Portfolio
* **Type:** Zero-dependency Static Single Page Application (SPA)
* **Stack:** Vanilla HTML5 + CSS3 (Custom Properties) + JavaScript (ES6+)
* **Theme & Aesthetic:** Premium Dark Emerald "Nature-Tech" dengan glassmorphism.
* **Palette:** lihat variabel `--clr-*` di `style.css` (`:root`). Jangan duplikasi nilai warna di sini.
* **Fonts:** Inter (sans), Playfair Display (display), Space Mono (mono) via Google Fonts.

## 2. Core Rules ("NEVER")
* **JANGAN** pasang framework/bundler berat (React, Tailwind, Webpack, Vite) kecuali diminta. Tetap zero-dependency.
* **JANGAN** hardcode teks yang seharusnya masuk ke sistem i18n (`script.js`) atau `data.js`.
* **JANGAN** hapus file gambar di `images/` tanpa izin.
* **JANGAN** tulis style inline di atribut HTML kecuali nilai dinamis (animasi/particles).
* **JANGAN** pakai library state JS kompleks; gunakan class CSS (`.visible`, `.open`, `.hidden`).

## 3. Data & Injection (FAKTA SAAT INI)
* `data.js` saat ini **hanya meng-inject 4 link kontak** (email, linkedin, whatsapp, location) lewat atribut `data-db`.
* Konten utama — projects, experience, gallery, education, skills — **di-hardcode di `index.html`**, BUKAN di-render dari `data.js`.
* Menambah proyek/experience = edit `index.html` + tambah key i18n di `script.js`. (Tidak cukup edit `data.js`.)
* Ingin ubah arsitektur agar `data.js` benar-benar menggerakkan halaman → **wajib minta izin** (breaking change).

## 4. i18n (Bilingual ID/EN)
* Setiap teks baru wajib punya key di kamus `i18n` (`script.js`) untuk `id` DAN `en`.
* Elemen pakai `data-i18n="key"`. Key yang dipakai HTML **harus** ada di kamus.
  * Contoh bug tertutup: `bio2` salah, seharusnya `about.bio2`.

## 5. Permission Rules
**Wajib minta izin:**
* Hapus gambar `images/` atau file inti.
* Tambah framework/dependensi/library eksternal ke HTML.
* Rename variabel kunci `data.js` yang dipakai `script.js`/`index.html`.
* Refactor total struktur CSS.

**Boleh otomatis (tanpa izin):**
* Tambah objek data baru (`data.js`).
* Fix bug kecil (link rusak, tag tak tertutup, typo i18n).
* Tambah komentar/keterangan penjelas.

## 6. Definition of Done
* Konsol developer (F12) bersih dari error JavaScript.
* Teks baru ada versi ID + EN.
* Responsif di desktop & mobile.
* Perubahan fitur dicatat di `CHANGELOG.md` (STATUS + HISTORY).
* **Wajib version control:** setiap perubahan kode/doc di-`git commit` dengan pesan jelas, lalu `append` entry HISTORY ke `CHANGELOG.md` agar sesi AI baru bisa lacak sejarah.

## 7. Context Files (baca saat memulai sesi)
Semua berada di folder `.agents/`:
* `AGENTS.md` — aturan ini (single source of truth).
* `EXECUTOR.md` — runbook operasional agent (urutan baca → kerja → verifikasi → catat).
* `ARCHITECTURE.md` — struktur & fakta data flow (baca sebelum refactor).
* `PRD.md` — tujuan produk & scope.
* `ROLES.md` — pembagian peran, batas izin & task templates (baca saat eksekusi tugas).
* `KNOWLEDGE.md` — glosarium domain + panduan gaya penulisan (wajib saat tulis teks baru).
* `CHANGELOG.md` — STATUS/TODO tracker (atas) + sejarah perubahan & known issues (bawah).
