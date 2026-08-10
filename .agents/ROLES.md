# Project Roles — Who Runs What

Proyek ini dikerjakan oleh **1 manusia (Burhan) + 1 AI Agent**, bukan tim besar.
Pola terbaik adalah **peran berganti** dalam satu agent, dengan batas wewenang jelas.

## Peran & Wewenang
| Peran | Tugas | Boleh otomatis? | Contoh task |
| :--- | :--- | :--- | :--- |
| 🏗️ **Architect** | Jaga konsistensi struktur, arsitektur, & aturan `AGENTS.md` | Hanya usul/refactor kecil | Perbaiki `ARCHITECTURE.md`, audit aturan |
| ✍️ **Content Editor** | Isi/update teks, data, i18n (ID/EN) | Ya (tambah data, fix typo) | Tambah proyek, update pengalaman, fix `bio2` |
| 🎨 **Stylist** | CSS, responsive, animasi, tema | Ya (tweak), tidak (refactor total) | Optimasi glassmorphism, perbaiki mobile menu |
| 🚀 **DevOps** | Git, deploy, repo, Netlify | Ya (commit/push) | Selesaikan push ke GitHub (butuh token) |

## Aturan Main Antar Peran
* **Content Editor** & **Stylist** → boleh jalan otomatis untuk perubahan kecil (bug, typo, tambah data).
* **Architect** & perubahan **breaking** (rename variabel `data.js`, refactor CSS besar, hapus gambar) → **wajib minta izin** dulu.
* **DevOps** → tidak ubah logika kode, hanya sinkron ke repo.

## Alur Tipikal Satu Task
Contoh: "Tambah proyek baru"
```
1. Content Editor → objek di data.js + key i18n di script.js + markup di index.html
2. Stylist (jika perlu) → pastikan .project-card muat & responsive
3. Architect → cek tidak langgar AGENTS.md rule
4. DevOps (opsional) → commit + push
```

## Referensi
* Aturan izin lengkap → `AGENTS.md` §5.
* Definisi selesai → `AGENTS.md` §6.


---

## Task Templates (dari SKILL.md)
Template ini dipakai **Content Editor / Stylist** saat menjalankan tugas konkret.
Bisa dipanggil langsung oleh executor sebagai instruksi tugas.

> ⚠️ FAKTA ARSITEKTUR: halaman saat ini di-hardcode di `index.html`, `data.js` HANYA
> inject 4 link kontak (`AGENTS.md` §3). Menambah proyek/experience = edit `index.html`
> + key i18n di `script.js`. TIDAK cukup edit `data.js` (tidak muncul di halaman).

### 🚀 Template 1: Tambah Proyek Baru
```
Tambahkan 1 proyek ke portofolio (hardcode, bukan via data.js):
1. Di index.html: duplikasi 1 .project-card, isi title/desc (pakai data-i18n="pX.title"
   dst. untuk ID+EN), tags, stats, dan <img src="images/..."> (pastikan file ada).
2. Di script.js: tambah key pX.title/pX.desc/pX.unit1/pX.unit2 untuk "id" DAN "en"
   di kamus i18n (copy pola p1..p6 yang ada).
3. Verifikasi: node --check script.js; semua key baru ada di kedua bahasa; img ada.
JANGAN ubah data.js (tidak berdampak ke render).
```

### 💼 Template 2: Update Riwayat Pekerjaan (Timeline)
```
Update 1 item experience di index.html (hardcode, bukan via data.js):
1. Cari .timeline-item target, ubah periode/lokasi/duties (pakai data-i18n expX.*).
2. Di script.js: update key expX.* untuk "id" DAN "en" agar sinkron.
3. Verifikasi: node --check; key expX.* ada di kedua bahasa.
JANGAN andalkan data.js (hanya inject kontak).
```

### 🎨 Template 3: Code Review / Optimasi
```
Audit performa & visual portofolio (index.html, style.css, script.js).
Fokus: (1) kecepatan load gambar, (2) transisi glassmorphism, (3) SEO/WAI-ARIA.
Berikan perbaikan dalam bentuk diff siap terapkan.
```
