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
* [x] Periksa & sesuaikan tahun pengalaman kerja di index.html/script.js agar 100% akurat. `[CONTENT]`
* [x] Uji coba tombol kirim pesan formulir kontak (simulasi respons). `[STYLIST]`
* [x] Perbaiki UI hero (scroll-indicator tumpang tindih + readability light mode + tema switch). `[STYLIST]` → lihat HISTORY 2026-08-16

### Low Priority / Future Scope
* [x] Tambahkan tautan Instagram & Github ke contact (data.js inject + index.js). `[CONTENT]` → SELESAI: handle `https://www.instagram.com/robbanib/` & `https://github.com/robbaniburhanuddien` sudah diisi di `data.js`, icon sosmed render di section Tentang (fix guard `PORTFOLIO_DATA.contact` di script.js). Lihat HISTORY 2026-08-16 batch 4.
* [x] Caption lightbox galeri jadi bilingual (ikuti switch EN). `[STYLIST]`
* [x] Fix bug i18n section #map — key map.tag/map.title/map.desc ditambah ke kamus id+en (sebelumnya undefined saat switch bahasa). `[CONTENT]`
* [ ] Rancang modul peta interaktif mini (Leaflet.js/WebGIS) untuk lokasi kerja mangrove Sumatera. `[ARCH]` → NEEDS-PERMISSION (tambah library)

=================
## HISTORY (Log Perubahan)
=================

Format: `[YYYY-MM-DD]` — deskripsi singkat.

### [2026-08-16] (batch 2 — request Robbani)
* **Logo pengalaman → file asli** — monogram M4CR/BRGM diganti `<img>` ke
  `images/logo/m4cr-logo.png` & `images/logo/brgm-logo.png` (copy dari file asli
  `Logo Kemenhut & M4CR CSASumut.png` & `LOGO-BRGM...-removebg-preview.png`). CSS `.tl-org-logo img` ditambah.
* **Teks BRGM diperbaiki** — `exp2.loc` → "Jakarta, Indonesia"; `exp2.d1` diperluas
  jadi "Melaksanakan Percepatan Rehabilitasi Mangrove di wilayah Provinsi Kepulauan
  Riau dan Kepulauan Bangka Belitung" (id+en).
* **Galeri → slider otomatis** — `.gallery-grid` diganti `.gallery-slider` (track +
  prev/next + dots + caption judul/sub di bawah). Auto-rotate 5s, pause on hover,
  filter kategori tetap jalan. Caption sub per kategori (CAT_SUB id/en). Lightbox lama dicabut.
* **Proyek unggulan → editable manual** — 6 `project-card` di-hardcode (hapus `data-i18n`
  pada judul/desc/stats/tag) agar Robbani bisa edit langsung di HTML tanpa sentuh dict.
* **Video perjalanan lapangan → DITUNDA** — section `#field-video` + nav link + CSS
  dihapus (simpan untuk nanti). i18n `vid.*` masih ada di script.js (tidak dipakai).
* **Peta sebaran → foto langsung terlihat** — tambah `.map-photos` grid 4 kolom di bawah
  peta, render foto tiap wilayah (Jakarta/Kepri/Babel/Sumut) dari `MAP_REGIONS`.
  Fix: `encodeURIComponent` → `encodeURI` agar foto dengan spasi/`~` load benar.
  Popup marker tetap jalan.

### [2026-08-16] (batch 3 — polish hero & section)
* **Header & Nav** — `.logo-photo` `margin-right:14px`; `.nav-links` gap `36px→48px`.
* **Hero title** — "Spesialis" → "Mangrove Restoration & GIS Specialist" (lebih akurat, tidak overclaim).
* **Subtitle highlight** — GIS & Remote Sensing / UAV Pilot / Community Engagement di-aksen `.hl`.
* **CTA hover** — pendar hijau (`box-shadow` glow) pada `.btn-primary` & `.btn-outline`.
* **Stats** — 3+ Tahun, 10+ Jam Terbang UAV, 11 Kab/Kota; tooltip (`title`); `+` naik sejajar.
* **Latar hero** — tambah `.hero-contour` (SVG contour + siluet perakaran mangrove, opacity 5–8%).

### [2026-08-16] (batch 4 — section Tentang & sosmed)
* **About: hapus "Siapa Saya?"**, samakan font/ukuran/warna nama & gelar S.P. (2rem, weight 700, `var(--clr-text)`, bukan italic/emas).
* **Hapus badge "UAV Certified"** (`.about-photo-badge` dicabut).
* **Foto → slider** — `.about-photo-frame` jadi `.about-slider` (track + tombol ‹ › + auto-rotate 4.5s + pause on hover). `ABOUT_PHOTOS` di script.js.
* **Info-grid (Lembaga/Lokasi/Pendidikan/Email) → icon sosmed** — `.about-social` render Instagram, LinkedIn, GitHub, Email, WhatsApp dari `PORTFOLIO_DATA.contact` (SVG inline).
* **FIX icon sosmed tidak muncul** — guard `(window.PORTFOLIO_DATA && ...)` salah karena `const PORTFOLIO_DATA` bukan property `window`; diganti `typeof PORTFOLIO_DATA !== 'undefined'`.
* **Isi link IG/GitHub** di `data.js` (`robbanib` / `robbaniburhanuddien`).
* **Pasang 4 foto profil** dari `images/profil tentang saya/` ke `ABOUT_PHOTOS` (`encodeURI(src)` untuk spasi).
* Verifikasi: node --check OK; simulasi DOM node → slider 4 img + 5 icon sosmed (CHILDREN=5).
* Verifikasi: node --check OK, css brace 320/320, ad-hoc structural check 22/22 PASS.

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
* **Verifier resmi**: `node scripts/verify-portfolio.cjs` (dibuat 2026-08-17) — cek 3 hal:
  teks "undefined" di index.html, semua `data-i18n` ada di kamus id+en, semua `src="images/..."`
  ada file-nya. Jalankan ini sebelum commit; jangan bikin script ad-hoc baru.
* Tombol "Unduh CV" masih `href="#"` — `cv.pdf` belum ada; `data.js.cv.file_id` tak di-inject.
* `data.js` BELUM menggerakkan halaman (projects/experience/gallery hardcode di HTML).
  Mengubah ini = breaking change → wajib minta izin (`AGENTS.md` §5).
* ~~Caption lightbox galeri masih bahasa ID saja (belum ikut switch EN).~~ — SUDAH DIBERESKAN (2026-08-10): caption kini bilingual & ikut switch EN.
* 76 dari 96 foto di `images/` tidak dipakai + ada file duplikat byte-identik.

### [2026-08-11]
* **Audit akurasi tahun Experience/Timeline** — rentang tahun di `index.html`
  (`2024 – Sekarang`, `2023 – 2024`, `2022 – 2023`) sudah konsisten: berurutan
  kronologis (terbaru di atas), tidak saling tabrakan/tumpang tindih, dan tidak ada
  tahun masa depan yang salah (Sekarang = 2026 valid).
* **Fix ketidaksesuaian ID↔EN pada label periode** — span `.tl-period` sebelumnya
  **hardcode** di `index.html` tanpa `data-i18n`, sehingga di mode EN tetap menampilkan
  "Sekarang" (bukan "Present"). Ditambahkan key `exp1.period`/`exp2.period`/`exp3.period`
  ke kamus `i18n` (`id`: "2024 – Sekarang" / `en`: "2024 – Present"; rentang lain sama di
  kedua bahasa) dan atribut `data-i18n="expX.period"` ke ketiga span. Tidak ada fakta/
  riwayat kerja baru yang dikarang — hanya bikin label periode bilingual & konsisten.
* **Verifikasi** — `node --check script.js` & `node --check data.js` OK; ke-133+ key
  `data-i18n` di `index.html` ada di kamus `id` & `en`; ke-35 `src` galeri ada file-nya.

* **Galeri profesional (full)** — kurasi 35 foto dari 96 (`images/`), tag kategori
  (plant/survey/gis/community/aerial/doc) dari pola nama file + metada...[truncated]

* **Lengkapi KNOWLEDGE.md (profil & glosarium personal)** — isi dari Robbani:
  tone "santai-ilmiah", English American; spesies mangrove latin+lokal (Rhizophora
  mucronata/apiculata/stylosa, Avicennia marina, Sonneratia alba, Bruguiera gymnorrhiza
  [tancang/tumu], Ceriops tagal, Nypa fruticans [nipah], Lumnitzera racemosa/littorea
  [teruntum]); tool SIG ArcGIS Pro/ArcMap/QGIS/GEE; drone DJI Mavic Air 2/Air 2S/Phantom 4/
  Mavic 3 + app DJI Fly/DJI GO/Dronelink; Pix4D & Agisoft Metashape; BRGM di Deputi
  Pemberdayaan Masyarakat (Kepri & Babel); M4CR = Mangrove for Coastal Resilience;
  target rehab Sumut (Langkat, Serdang Bedagai, Batu Bara, Deli Serdang, Asahan,
  Labuhanbatu Utara, Labuhanbatu). Tambah §9 terminologi resmi dari Perpres 120/2020
  (target 600rb ha mangrove, 1,2 jt ha gambut, NSPK, M&E, rewetting, padat karya).
  Simpan salinan Perpres & surat Mensesneg di `reference/`.


* **Sesuaikan front-end dengan KNOWLEDGE.md (SAFE, tanpa section baru)** — perkuat
  daftar Tools & Teknologi di index.html: tambah ArcMap, Dronelink, DJI Fly, DJI GO,
  perjelas unit drone (Mavic Air 2 / Air 2S / Phantom 4 / Mavic 3); singkat
  "Google Earth Engine" -> "GEE (Google Earth Engine)" di badge/tag/skill-bar/exp2.d3
  (id+en) biar konsisten dengan glosarium KNOWLEDGE §3. Tidak ubah layout/struktur.
  node --check script.js OK.

* **Perbaiki Experience (2 item, akurat vs fakta Robbani)** — hapus exp3 (Community
  Engagement Officer, tidak disebutkan); exp1 -> PPIU M4CR Sumut (Jan 2025-Sekarang,
  Medan, Technical Facilitator: M&E, survei hidrologi, swakelola pokmas); exp2 -> BRGM
  (Jul 2023-Des 2025, Kepri & Babel, Deputi Pemberdayaan Masyarakat, GIS Operator).
  Update index.html + script.js (id/en). node --check OK, exp3_residual=0.

### [2026-08-16]
* **Polish & verifikasi tombol kirim pesan kontak (simulasi)** — handler
  `CONTACT FORM (Simulated)` di `script.js` sudah berjalan benar: saat submit tombol
  tampil status "Mengirim.../Sending...", ter-disable sementara, setelah ~1,2s muncul
  `#formSuccess` (bilingual via `data-i18n="form.success"`), form di-reset, tombol
  kembali normal, pesan sukses auto-hilang (5s). Perbaikan SAFE (tanpa refactor CSS):
  - Hilangkan teks hardcoded status kirim -> pakai key i18n baru `form.sending` (id/en).
  - Tampilkan nama pengirim di pesan sukses via key `form.success_name` (id/en,
    placeholder `{name}`); fallback ke `form.success` bila nama kosong.
  - Restore teks tombol via `i18n[currentLang]['form.send']` (konsisten walau bahasa
    di-switch saat mengirim); atribut `data-i18n` pada success span dilepas saat
    tampil & dikembalikan saat disembunyi agar tak tertimpa `applyLanguage`.
  Verifikasi: node --check script.js & data.js OK; 126 key data-i18n di HTML ada di
  kamus id+en; semua src="images/..." valid.

* **Cron run `portfolio-orchestrator` (agregat verifikasi)** — dispatch task SAFE
  beruntun; task NEEDS-PERMISSION/blocked di-HOLD (mode cron: tanpa tanya, JANGAN
  git push). SAFE selesai: tombol kirim formulir kontak (entri di atas, commit
  `937979c`). DI-HOLD: Push GitHub (NEEDS-PERMISSION, no PAT), Netlify (NEEDS-
  PERMISSION, tunggu push), Unggah cv.pdf (butuh file dari user), IG/Github di
  contact (butuh handle asli user — tidak ditebak), Peta interaktif Leaflet.js
  (NEEDS-PERMISSION, tambah library). Verifikasi agregat: `node --check` script.js
  & data.js OK; 0 teks "undefined" di index.html; ke-13 `src="images/..."` valid.

* **Tema light + toggle & perbaikan bio/exp2** — default light mode (putih kehutanan,
  kartu glass) via `:root[data-theme=light]`; tombol themeToggle di navbar + simpan
  localStorage (bisa ke dark). Bio intro diubah jadi humble-professional (id+en).
  exp2.loc BRGM -> "Jakarta & Kepulauan Riau & Kepulauan Bangka Belitung" (id+en).
  node --check OK; verify PASS.

## NOTES / IDE PENDING (Robbani)
* **Logo/foto navbar**: `.logo-photo` (lingkaran 34px di kiri teks "Robbani") sudah disiapkan
  sebagai placeholder dashed. Belum diisi — nanti Robbani tentukan foto/logo mana (mis. foto
  diri atau logo BRGM/M4CR) lalu set `background-image` via inline style atau JS. Catat di sini
  saat sudah diputuskan.
* **Galeri lapangan**: saat ini hanya 4 item hardcode; folder images/ punya 96 file. Ingin
  tampilkan semua foto kegiatan -> butuh render dinamis (JS generate dari list images/) atau
  pilih subset. STATUS: menunggu keputuan Robbani (render semua vs kurasi).
* **Peta Indonesia animasi + foto di lokasi**: ide Render dokumentasi ke kab/kota (Kepri, Babel,
  Medan/Sumut, dll) agar recruiter tahu sebaran. Opsi: SVG peta + marker (tanpa library, SAFE)
  atau Leaflet/WebGIS (tambah library = NEEDS-PERMISSION). STATUS: menunggu izin Robbani.

* **Fix tema + switch estetik + galeri dinamis + head tab** — perbaiki bug toggle tema
  (palet dark tidak terdefinisi -> sekarang `:root,:root[data-theme=dark]` = dark default,
  `[data-theme=light]` = light forestry). Kontras teks dirapikan kedua tema. Toggle bahasa
  & tema diubah jadi saklar estetik-profesional (`.switch` + knob geser). Galeri kini render
  semua 96 foto dari `images/` via JS (`GALLERY_FILES` + `buildGallery()`), lightbox tetap
  jalan. Head tab title -> "Robbani", logo kiri jadi slot `.logo-photo` (placeholder foto).
  node --check OK; verify PASS. STATUS: menunggu preview visual Robbani.

* **Peta sebaran dokumentasi (Opsi C, zero-dep SVG)** — section `#map` dengan SVG silhouette
  Indonesia stylized + 4 marker (Jakarta, Kepri, Babel, Sumut) animasi pop+pulse. Klik marker
  -> popup glass berisi grid foto dari `images/` (MAP_REGIONS di script.js). Kab/kota Sumut
  (Langkat, Sergai, Batu Bara, Deli Serdang, Asahan, Labuhanbatu) tertulis di sub popup Sumut.
  Tanpa library eksternal. node --check OK; verify PASS. STATUS: menunggu preview visual.

* **Kurasi galeri**: GALLERY_FILES dikurasi dari 96 -> 19 foto terbaik (penanaman, drone,
  GIS laptop, transek, komunitas) tanpa caption (visual only, pilihan Robbani). node OK.
* **CARA TANDAI FOTO UNTUK PETA** (Robbani): tidak perlu pindah folder / tidak perlu stock
  foto peta. Cukup di chat sebutkan: "foto X.jpg di Kepri, Y.jpg di Babel, Z.jpg di Sumut,
  W.jpg di Jakarta" -> saya update MAP_REGIONS.photos agar popup peta berisi foto lokasi itu.
  Boleh juga rename file jadi prefix lokasi (mis. kepri_penanaman1.jpg) lalu bilang saja.
  Marker peta sudah ada 4: jakarta, kepri, babel, sumut (posisi % di CSS, bisa digeser).

### [2026-08-16]
* **Perbaiki UI hero (request Robbani)** — 3 perbaikan di `style.css`:
  1. **Scroll-indicator tumpang tindih** — `.hero-scroll` dipindah dari tengah bawah
     (`left:50%; translateX(-50%)`) ke **pojok kanan bawah** (`right:28px; bottom:28px`),
     sehingga tidak lagi menutupi data stat. Di mobile (<480px) diperkecil & tetap di pojok kanan.
  2. **Readability light mode** — 8 heading section yang hardcode `var(--clr-white)`
     (section-header h2, about-name, tl-position, skill-domain-card h3, badge-cloud h3,
     project-body h3, edu-col-title, edu-body h4) diubah ke `var(--clr-text)` agar otomatis
     gelap saat light mode (background section terang) & terang saat dark mode. Hero title &
     stat-number sengaja **tetap putih** karena background hero selalu gelap di kedua tema.
  3. **Tema switch** — tambah transisi halus 0.45s pada body + elemen utama saat toggle.
     Knob `.theme-switch` di **dark mode** jadi navy/abu-abu gelap (`linear-gradient(#1e2a44,#2c3e5c)`),
     di **light mode** kembali emas/oranye (`var(--clr-gold)`) sesuai permintaan.
  STATUS: perubahan lokal siap, belum di-commit (menunggu persetujuan Robbani sebelum commit).

### [2026-08-17]
* **Fix bug i18n section #map** — tiga key `map.tag` / `map.title` / `map.desc`
  dipakai sebagai atribut `data-i18n` di `<section id="map">` (peta sebaran dokumentasi
  kerja: Jakarta, Kepri, Babel, Sumut) tetapi belum terdaftar di kamus `i18n` (`id`
  maupun `en`) → teks bisa tampil "undefined" saat switch bahasa. Ditambahkan ke
  kedua kamus: `id` = "Sebaran Lapangan" / "Di Mana Saya Bekerja?" / deskripsi sebaran
  wilayah; `en` = "Field Coverage" / "Where Do I Work?" / "Mangrove activities are
  documented across several regions. Click a point to see photos from that location."
  Teks `id` diambil persis dari fallback HTML yang sudah ada (tidak ada fakta baru),
  gaya "santai-ilmiah", English = American English. Tanpa ubah struktur HTML/CSS,
  tanpa library eksternal. Verifikasi: `node --check` script.js & data.js OK;
  `scripts/verify-portfolio.cjs` → ALL CHECKS PASS (102 key data-i18n ada di kamus
  id+en; 0 "undefined"; 8 image src valid). `[CONTENT]`

### [2026-08-18] — Penyempurnaan hero, logo, galeri, mode terang (batch panjang)
* **Hero tone "terus belajar & siap kolaborasi"** (commit `1de32d6`): title
  "Praktisi Rehabilitasi Mangrove" / desc sebut 3 th BRGM + M4CR–Kemenhut; role
  disamakan. Fix bug krusial: portfolio pakai `applyLanguage()` yang **menimpa** teks
  HTML pakai kamus `script.js` — jadi edit hero harus di kamus, bukan cuma HTML.
* **Batch5** (`fff75ef`): hero.desc "hal baru" (bukan "cara baru"), logo M4CR jadi
  rectangle putih lebar (`min-width:88px`) agar logo 2-elemen terbaca, sub-judul
  pengalaman diubah humble ("Fasilitator Lapangan Rehabilitasi Mangrove" /
  "Staf Rehabilitasi Mangrove (GIS & Pemberdayaan Masyarakat)"), hapus filter kategori
  galeri + slide diturunkan 460→320px, pendidikan "2018 – 2023", hero-desc kontras.
* **Gradasi hero** (`edb04e3`): `.hero-overlay` diturunkan `transparent 40%`→`15%`
  (zona CTA) agar teks terbaca di mode terang.
* **Fix hero render** (`ca06c35`): `hero-desc` & `hero-stats` dilepas class `reveal`
  (sebelumnya `opacity:0` nunggu scroll-trigger → pudar & ke-potong di batas viewport);
  hero-desc `#f2fbf6` + text-shadow; densitas hero dirapatkan agar stats (3+/10+/11) muat 1 viewport.
* **Logo R + footer + stat** (`f7e7a29`): dari foto folder `images/#1 halaman depan/`
  (Minimalist_letter_R_logo jpeg) dibuat **PNG transparan** `images/logo/robbani-r-logo.png`
  (PIL hapus bg putih → alpha), dipasang di header samping "Robbani"; footer nama
  disamakan "Robbani"; tanda `+` stat digelapkan (`--clr-accent`→`--clr-primary`).
* **Navbar + footer** (`c5c8703`): akar masalah mode terang — hero SELALU gelap
  (background hardcode), navbar transparan → di light mode text gelap hilang di atas
  hero gelap. Fix: `.navbar` diberi **glass gelap permanen + text terang** di kedua mode
  (nama & tab Tentang/Pengalaman/Keahlian/Kontak terbaca di light mode). Footer ditambah
  logo R + teks "Mangrove Enthusiast" + tahun **2026**.
* **EDIT MANUAL ROBBANI (working tree, belum commit)** — Robbani ubah sendiri `script.js`
  (kamus i18n `id`+`en`) di section Experience:
  - `exp.desc`: "3 tahun dedikasi di garis terdepan..." → **"Perjalanan Karir yang luar
    biasa ikut berperan dalam Rehabilitasi Mangrove di indonesia"** (id; "indonesia" sengaja
    huruf kecil di teks asli user — EN: "An extraordinary career journey has played a role
    in mangrove rehabilitation in Indonesia").
  - `exp1.pos`: "Fasilitator Lapangan Rehabilitasi Mangrove" → **"Technical Mangrove
    Rehabilitation Facilitator"** (id+en sama).
  - `exp2.pos`: "...(GIS & Pemberdayaan Masyarakat)" → **"Staf Rehabilitasi Mangrove
    (Teknis dan GIS)"** (id) / "(Technical and GIS)" (en).
  - Kapitalisasi nama entitas di `exp1.d3/d4` & `exp2.d4`: "pokmas"→"Pokmas"/"Kelompok
    Masyarakat", "pemerintah daerah"→"Pemerintah Daerah", "komunitas lokal"→"Masyarakat
    Lokal", "pemangku kepentingan"→"Pemangku Kawasan" (id+en).
  CATATAN AGENT: ini **mengembalikan sebagian phrasing humble** yang kita sepakati di
  batch5 — itu hak pemilik, dicatat apa adanya. Tone `exp.desc` baru lebih formal/berat,
  agak berbeda dari hero "terus belajar". "indonesia" (huruf kecil) di `exp.desc` id
  mungkin typo kapitalisasi (EN benar "Indonesia"). Belum di-commit — menunggu review Robbani.
* **EDIT MANUAL ROBBANI #2** — Robbani perbaiki sendiri kapitalisasi: `exp.desc` (id)
  "di indonesia" → **"di Indonesia"** (sesuai konvensi nama negara). EN tidak berubah
  ("in Indonesia" sudah benar). Tidak ada perubaan lain. Konteks humble dibiarkan apa
  adanya per keputusan Robbani ("kali ini seperti itu dulu"). Status: sudah di-commit.

* **TAMBAH PENGALAMAN #3 — Internship Research Analyst (Kementan)** — Robbani minta
  tambah experience magang: Balai Besar Karantina Pertanian Tanjung Priok, Kementerian
  Pertanian RI, Jakarta (Jan 2021 – Mar 2021). Posisi "Intern Research Analyst" (id) /
  "Research Analyst Intern" (en). Duties (id+en): deteksi & identifikasi biomolekuler
  bakteri OPTK pada benih kentang Skotlandia; PCR & metode lain on komoditas karantina
  impor-ekspor (kentang, anggrek); inspeksi instalasi karantina di pelabuhan/gudang.
  Logo asli Kementan di-copy ke `images/logo/kementan-logo.png` (nama aman, hindari
  spasi/&). Timeline item ke-3 (selang-seling, tanpa `right`=kiri), `.logo-kementan`
  box putih seperti M4CR/BRGM. Key i18n `exp3.*` + `exp.internship` (Magang/Internship)
  ditambah ke kamus id+en. node --check OK; simulasi applyLanguage('id') render exp3 benar;
  verify PASS. Status: menunggu preview visual.

* **PINDAH RUMAH PORTFOLIO KE CLOUD DRIVE** — folder `portfolio` dipindah dari
  `C:\Users\burha\Downloads\portfolio` ke `C:\Users\burha\OneDrive\Desktop\1 project\portfolio`
  (OneDrive → otomatis backup + akses lintas device). Folder `Downloads/portfolio` lama
  sudah kosong (0 file, tidak ada .git) sehingga tidak ada duplikat konten; OneDrive
  menjadi **sumber tunggal**. Server preview di-restart ke path baru:
  `cd "C:\Users\burha\OneDrive\Desktop\1 project\portfolio" && python -m http.server 8123`
  (buka `http://localhost:8123`). Catatan: skill `portfolio-migration-pitfalls` tersimpan
  di `C:\Users\burha\AppData\Local\hermes\skills\` (DI LUAR folder portfolio, tidak ikut
  OneDrive, tidak auto-sync akun) — perlu backup manual jika mau portable.

* **MIGRASI KE data.js SEBAGAI SUMBER TUNGGAL (B + C1–C5)** — Robbani minta
  `data.js` disinkronkan & auto-sinkron dengan konten halaman. Izin ubah struktur
  (breaking) diberikan Robbani ("ubah izin per AGENTS.md selama tidak mengganggu
  task lain"). Dilakukan bertahap + verifikasi tiap langkah:
  - **B** (`89eb998`): `data.js` ditulis ulang jadi database lengkap (identity,
    contact, education 2018–2023, certifications, stats 3/10/11, experience 3 item +
    field `logo`, projects 6, gallery 28) — **tanpa ubah tampilan** (render masih
    hardcode).
  - **C1** (`04d8c96`): Experience timeline render dari `data.js` via `buildExperience()`
    + `#timelineRoot`. Logo M4CR/BRGM/Kementan dari field `exp.logo`. Simulasi PASS.
  - **C2** (`91a7c9e`): Education + Sertifikasi render dari `data.js` via
    `buildEducation()` + `#eduRoot`. Simulasi PASS (degree 2018–2023, 3 sertifikat).
  - **C3** (`8df57e4`): Gallery sumber `data.js` — `GALLERY_FILES` dijadikan alias
    `(PORTFOLIO_DATA.gallery || [])`. (Simulasi berat hang karena setInterval timer,
    tapi node --check + served terbukti.)
  - **C4** (`bf7a1ba`): Projects render dari `data.js` via `buildProjects()` +
    `#projectsRoot`; filter kategori tetap jalan (`attachProjectFilter` di-query
    setelah build). Simulasi 6 card PASS.
  - **C5** (`c2e36c7`): Hero stats counter dari `data.js` via `buildStats()`
    (set `data-target` 3/10/11 dari `stats`). Simulasi PASS.
  - **STATUS**: semua section sekarang di-render dari `data.js`. `index.html` tinggal
    wadah (`#timelineRoot`/`#eduRoot`/`#projectsRoot`/`#sliderTrack`/hero-stats `data-stat`).
    **BLOCKED**: update `.agents/AGENTS.md` section 3 (fakta "data.js hanya kontak"
    → "sumber tunggal") **ditolak oleh izin sistem** (file instruksi agen terproteksi).
    Catatan ini di CHANGELOG sebagai pengganti. Robbani perlu ubah AGENTS.md manual
    bila ingin dokumentasi resmi terbaru.
  - **TIDAK BERUBAH dari diskusi sebelumnya**: teks/phrasing yang sudah disepakati
    (humble tone hero, nama Robbani, footer "Mangrove Enthusiast 2026", logo R, dll)
    tetap utuh — migrasi hanya pindahkan sumber data, bukan mengubah isi.

### [2026-08-18] — PELAJARAN KRITIS MIGRASI (jangan diulang)
Setelah migrasi data.js, TIGA fitur rusak beruntun. Semua punya **pola sama**:
elemen yang di-render **dinamis** (via JS) lupa di-handle di dua titik — (a) saat
`init`, DAN (b) saat **ganti bahasa** — plus animasi/visibility yang cuma di-setup
sekali di awal tidak memperhitungkan elemen yang dirender kemudian.

* **Bug 1 — Section kosong total (global scope antar file).** Awalnya `data.js`
  (`const PORTFOLIO_DATA`) & `script.js` terpisah; global dari `data.js` tak terbaca
  di `script.js` di beberapa context → build gagal. **Fix**: gabung `data.js` ke
  DALAM `script.js` (1 file, tanpa cross-script) — commit `fcc6b05`.
* **Bug 2 — Section ada di DOM tapi TAK TERLIHAT (class `.reveal` opacity:0).**
  Item dinamis (experience/edu/projects) di-render SETELAH `revealObserver` pasang
  listener → dapat `opacity:0` tapi tak pernah dapat `.visible`. **Fix**: item
  langsung `reveal visible` (terlihat) — commit `855e967`.
* **Bug 3 — Mode English → stat jadi 0.** `buildStats` cuma di init; animasi counter
  punya guard `if (countersAnimated) return` (cuma jalan sekali). Saat ganti bahasa
  angka di-reset 0 tapi animasi tak jalan → tampil 0. **Fix**: panggil `buildStats()` +
  `animateCounters()` ulang di handler `langToggle`, hapus guard — commit `44c1c64`.

**3 ATURAN EMAS biar tidak terulang (WAJIB dicek tiap kali ubah render dinamis):**
1. **Semua teks/angka yang di-render JS harus ikut `applyLanguage` + re-render saat
   toggle bahasa.** Jangan hanya andalkan `data-i18n` (itu cuma untuk elemen STATIS
   HTML). Tiap fungsi `buildX()` harus dipanggil ulang di handler `langToggle`.
2. **Jangan pakai class visibility (`.reveal`/`opacity:0`) pada elemen dinamis**
   tanpa memastikan ia dapat `.visible` SETELAH render. Lebih baik langsung terlihat.
3. **Hindari guard "sekali jalan" (`countersAnimated`, observer disconnect sekali)
   untuk hal yang bisa berubah** (bahasa, re-render). Kalau mau animasi, TRIGGER ULANG,
   bukan lock.

**Cara verifikasi yang benar (penting):** jsdom (`runScripts:'dangerously'`) adalah
engine peniru browser yang AKURAT untuk cek render + visibility + ganti bahasa +
counter. Node `vm` dengan stub DOM SEDERHANA TIDAK akurat (innerHTML stub tak parse
node, querySelectorAll kosong → text/stat-check gagal padahal children benar).
Pakai jsdom, bukan vm-stub, untuk verifikasi akhir. CATATAN: `scripts/verify-portfolio.cjs`
(di CHANGELOG Known Issues) hanya cek undefined/i18n-key/src-file — TIDAK menangkap
bug render/visibility/ganti-bahasa di atas. Untuk itu butuh jsdom end-to-end.

---

## HISTORY — Redesign Minimalis "Simple but Significant" (branch `redesign-minimalis`)

### 2026-08-21 — Ronde 2: Hero & Contact final (commit `5b77c49`)
**Tujuan:** sesuaikan hero & contact verbatim ala Brittany Chiang, pakai template warna/font kita.

**Perubahan Hero (`index.html` + `style.css`):**
- Baris di bawah nama "Burhanuddien **Robbani**" diubah jadi STATEMENT persis:
  `Translating Spatial Data into Ecological Action.`
  - Font & ukuran **SAMA PERSIS** dengan nama (class `.hero-statement`, font-display
    weight 800, clamp 2.4–4rem) — BUKAN teks kecil.
- 4 key competencies (`.hero-competencies`) **DIHAPUS**.
- Diganti 1 kalimat subline kecil (`.hero-subline`, 0.95rem, opacity 0.82):
  `Leveraging GIS, Remote Sensing, and UAV Technology for precision mangrove rehabilitation and community empowerment.`
- `hero.desc` (3 years...) ikut dihapus dari hero (data tetap di `script.js`, tidak dipakai).
- Class `.hero-role` lama dihapus dari CSS.

**Perubahan Contact (`index.html` + `script.js`):**
- Layout ala Brittany: heading "Get In Touch" (EN) / "Hubungi Saya" (ID) + blurb +
  **email besar** (`mailto:`) + **social icons**.
- Social icons (`#lcSocials`) sekarang pakai **SVG sama persis dengan halaman About**
  (linkedin, instagram, github) — konsisten visual. Tidak lagi teks "in/IG/GH".
- Warna & font mengikuti template porto kita (emerald), bukan copy paste Brittany.

**Verifikasi:** jsdom ad-hoc (prefix `hermes-verify-`) → 7 pass, 0 JS error.
Konfirmasi: statement/subline persis, competencies removed, contact 3 svg icons.

### 2026-08-21 — Ronde 1: Baseline redesign + arsip (commit `5cb893c`)
- Opsi A "Kalem Emerald": blur glass 16→8px, gradient-text solid emerald, orbs
  dikurangi glow, section padding 120→150px.
- Hero: rata kiri di container tengah (ala Brittany), `name-accent` untuk "Robbani".
- Gallery + Map **DIARSIP** ke `archive.html` (di-gitignore, tidak di-push) — bisa
  dipulihkan nanti.
- FIX JS crash: `contactForm` null → guard `if (contactForm && formSuccess)`.
- `.gitignore` ditambah (node_modules, archive.html, *.log).

### Catatan push (BLOKIR)
- Push gagal (exit 128): `cannot spawn git-askpass` + `could not read Username` —
  tidak ada PAT di environment headless. Butuh PAT dari user (jalankan di PC sendiri).
- Semua commit aman di lokal branch `redesign-minimalis`. Belum di GitHub.

