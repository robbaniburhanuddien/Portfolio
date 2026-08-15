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

### Low Priority / Future Scope
* [~] Tambahkan tautan Instagram & Github ke contact (data.js inject + index.html). `[CONTENT]` → blocked: butuh handle IG/Github asli dari user (cron HOLD — jangan tebak akun).
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
* **Verifikasi** — `node --check script.js` & `node --check data.js` OK; ke-133 key
  `data-i18n` di `index.html` ada di kamus `id` & `en`; ke-8 `src="images/..."` ada file-nya.

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
