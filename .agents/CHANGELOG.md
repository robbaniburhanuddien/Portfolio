# CHANGELOG.md — STATUS & HISTORY Proyek

File ini punya dua bagian:
- **STATUS** (atas) — tracker tugas aktif, dibaca & diupdate executor tiap sesi.
- **HISTORY** (bawah) — log perubahan tanggal + Known Issues, agar sesi AI baru
  tidak mengulangi bug/miskonsepsi masa lalu.

=================
## STATUS (TODO Tracker)
=================

Legend: `[x]` selesai · `[/]` progress · `[ ]` belum · `[~]` blocked
Tag bidang: `[ARCH]` Architect · `[CONTENT]` Content Editor · `[STYLIST]` Stylist · `[DEVOPS]` DevOps
Urutan eksekusi orchestrator: High → Medium → Low.

### High Priority
* [x] Inisialisasi struktur dasar portofolio (HTML/CSS/JS). `[ARCH]`
* [x] Desain sistem tema premium Dark Emerald & Glassmorphism. `[STYLIST]`
* [x] Buat database terpusat `data.js` untuk profil dan kontak. `[CONTENT]`
* [x] Sambungkan WhatsApp dan LinkedIn asli milik Burhan. `[CONTENT]`
* [x] Pasang foto-foto lapangan asli (survei UAV, kegiatan BRGM) ke HTML & Galeri. `[CONTENT]`
* [x] Inisialisasi Git lokal (git init + commit "first commit" + branch main + remote origin). `[DEVOPS]`
* [ ] Push ke GitHub (BLOKIR: repo private butuh autentikasi PAT — GCM hang di terminal headless). `[DEVOPS]` → NEEDS-PERMISSION
* [~] Sambungkan GitHub ke Netlify untuk deployment otomatis (Menunggu push berhasil). `[DEVOPS]`

### Medium Priority
* [ ] Unggah file PDF kurikulum vitae (cv.pdf) ke root + aktifkan tombol "Download CV" (butuh file dari user). `[CONTENT]`
* [ ] Periksa & sesuaikan tahun pengalaman kerja di index.html/script.js agar 100% akurat. `[CONTENT]`
* [ ] Uji coba tombol kirim pesan formulir kontak (simulasi respons). `[STYLIST]`

### Low Priority / Future Scope
* [ ] Tambahkan tautan Instagram & Github ke contact (data.js inject + index.html). `[CONTENT]`
* [x] Caption lightbox galeri jadi bilingual (ikuti switch EN). `[STYLIST]`
* [ ] Rancang modul peta interaktif mini (Leaflet.js/WebGIS) untuk lokasi kerja mangrove Sumatera. `[ARCH]` → NEEDS-PERMISSION (tambah library)

=================
## HISTORY (Log Perubahan)
=================

Format: `[YYYY-MM-DD]` — deskripsi singkat.

### [2026-08-10]
* **Init Git lokal** — `git init`, commit "first commit" (README.md), branch `main`,
  remote `origin` → `https://github.com/robbaniburhanuddien/Portofolio.git`.
  Push tertunda: repo **private**, butuh PAT/auth (GCM hang di terminal headless).
* **Restrukturisasi dokumentasi `.agents/`** — gabung `workflow.md` → `AGENTS.md`;
  perbaiki `ARCHITECTURE.md` (hapus klaim salah bahwa halaman di-render dari `data.js`;
  fakta: konten di-hardcode di `index.html`, `data.js` hanya inject 4 link kontak);
  merge `IDEA.md` → `PRD.md`; merge `SKILL.md` → `ROLES.md`; merge `TODO.md` → file ini.
* **Tambah `ROLES.md`** — peran Architect / Content Editor / Stylist / DevOps + aturan izin.
* **Bug fix i18n** — `data-i18n="bio2"` → `data-i18n="about.bio2"` (key lama tak ada di
  kamus → paragraf About ke-2 sempat tampil "undefined").
* **Bersihkan dead keys** — hapus `about.photo_hint` & `gal.p1`–`gal.p6` dari kamus `script.js`.
* **Tambah `KNOWLEDGE.md`** — glosarium domain + panduan gaya penulisan.
* **Rampingkan 8→5 file & siapkan executor** — perbarui DoD §6 (wajib git commit + log
  CHANGELOG); pisahkan CHANGELOG jadi STATUS/HISTORY; buat `EXECUTOR.md` (runbook);
  update pointer AGENTS.md §7.
* **Buat skill `portfolio-orchestrator`** — orchestrator manual yg dispatch executor
  leaf beruntun; gate izin di orchestrator (leaf tdk bisa clarify).
* **Gallery lightbox caption bilingual** — tambah `GALLERY_CAPTIONS` (ID↔EN) di
  `script.js`; caption lightbox kini dihitung dari `currentLang` saat dibuka, DAN
  ikut berubah saat tombol bahasa (`langToggle`) ditekan saat lightbox terbuka.
* **Perbaiki Task Templates (ROLES.md)** — arahkan ke index.html + i18n (bukan data.js
  yg tdk berdampak render). **Tag bidang + urutkan prioritas di STATUS** (CHANGELOG).
  **Rapiakan step push** di EXECUTOR.md (hanya jika PAT tersedia).

### Known Issues (jangan diulang)
* Tombol "Unduh CV" masih `href="#"` — `cv.pdf` belum ada; `data.js.cv.file_id` tak di-inject.
* `data.js` BELUM menggerakkan halaman (projects/experience/gallery hardcode di HTML).
  Mengubah ini = breaking change → wajib minta izin (`AGENTS.md` §5).
* ~~Caption lightbox galeri masih bahasa ID saja (belum ikut switch EN).~~ — SUDAH DIBERESKAN (2026-08-10): caption kini bilingual & ikut switch EN.
* 76 dari 96 foto di `images/` tidak dipakai + ada file duplikat byte-identik.
