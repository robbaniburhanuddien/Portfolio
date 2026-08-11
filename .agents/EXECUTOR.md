# EXECUTOR.md — Runbook Agent Otonom

Panduan operasional bagi AI agent (executor) yang menjalankan tugas pada proyek ini.
Baca dari atas ke bawah setiap kali memulai sesi. Semua aturan membatasi ada di `AGENTS.md`.

## 0. Prinsip Utama
* Proyek ini **zero-dependency vanilla** (HTML/CSS/JS). Jangan tambah framework kecuali izin.
* Selalu **bilingual** (ID + EN) untuk teks baru.
* Setiap perubahan **wajib di-commit + dicatat di CHANGELOG** (`AGENTS.md` §6).
* Jangan hapus gambar / file inti / rename var `data.js` tanpa izin (`AGENTS.md` §5).

## 0b. Catatan Environment (Windows / MSYS)
* Tool `search_files` di subagent kadang gagal dengan prefix `/c/...` (MSYS path).
  Pakai **path Windows asli** (`C:\Users\burha\Downloads\portfolio\...`) atau
  periksa lewat `terminal` (`ls`, `grep -n`) saat `search_files` error "IO error".
* Selalu verifikasi dengan `node --check <file>.js` via `terminal` (authoritative).

## 1. URUTAN BACA (wajib, sebelum kerja)
1. `AGENTS.md`        — aturan, izin, DoD (single source of truth).
2. `ARCHITECTURE.md`  — struktur & fakta data flow (cegah asumsi salah).
3. `CHANGELOG.md`     — baca **STATUS** (task aktif) + **HISTORY/Known Issues** (jangan ulang bug).
4. `KNOWLEDGE.md`     — glosarium & gaya penulisan (wajib saat tulis teks baru).
5. `ROLES.md`         — tentukan peran & pakai Task Templates.

## 2. TENTUKAN PERAN (lihat ROLES.md)
* **Content Editor** / **Stylist** → boleh jalan otomatis (tambah data, fix bug, tweak CSS).
* **Architect** / perubahan **breaking** (rename var data.js, refactor CSS total, hapus gambar)
  → **WAJIB minta izin** dulu (`AGENTS.md` §5).

## 3. LOOP KERJA
```
a. Ambil 1 task dari CHANGELOG.md → STATUS (pilih yang [ ] atau [~]).
b. Pakai Task Template di ROLES.md sebagai instruksi kerja.
c. Edit file terkait (index.html / script.js / data.js / style.css).
d. VERIFIKASI (langkah 4).
e. CATAT (langkah 5).
f. Lanjut task berikutnya, atau berhenti jika semua selesai / butuh izin.
```

## 4. VERIFIKASI (wajib sebelum catat selesai)
* **JS syntax:** `node --check script.js` dan `node --check data.js` → harus OK.
* **i18n:** setiap `data-i18n="X"` di index.html harus ada di kamus `script.js` (id & en).
  (Cek cepat: grep key di script.js.)
* **Images:** setiap `src="images/..."` di index.html harus file nyata ada di folder `images/`.
* **Preview:** buka index.html di preview pane; cek tidak ada teks "undefined".
* **DoD:** cek `AGENTS.md` §6 (no JS error, bilingual, responsive, committed+logged).

## 5. CATAT (wajib)
1. Update `CHANGELOG.md` → STATUS: pindahkan task ke `[x]` (atau `[~]` jika blocked).
2. Append entry ke `CHANGELOG.md` → HISTORY dengan format `[YYYY-MM-DD]` + deskripsi.
3. `git add -A` → `git commit -m "..."` (pesan jelas, bahasa bebas).
4. **Push (OPSIONAL, hanya jika credential tersedia):** push HANYA dilakukan bila
   orchestrator menyediakan remote URL ber-PAT, atau user sudah set PAT. Tanpa itu,
   repo private akan gagal/hang — cukup stop di commit lokal & catat di STATUS.

## 6. JANGAN
* Jangan hapus `images/` atau file inti tanpa izin.
* Jangan tambah CDN/framework/library eksternal tanpa izin.
* Jangan tulis teks hanya 1 bahasa (harus ID + EN).
* Jangan biarkan task selesai tanpa `git commit` + log `CHANGELOG`.

## 7. Saat Ragu
Jika instructions ambigu atau berpotensi breaking change → **berhenti & minta izin**
(`AGENTS.md` §5), jangan tebak.
