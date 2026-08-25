# Career OS — Vertex (Career Assistant Robbani)

Folder ini adalah **sistem pendukung karir** yang dikelola oleh Vertex (agent profil `portfolio`).
Semua file di sini adalah *sumber kebenaran* untuk evaluasi lowongan, audit konsistensi,
dan persiapan interview — terpisah dari situs publik (`index.html`/`script.js`).

> ⚠️ **Catatan privasi**: Folder ini ikut ter-deploy ke Netlify sebagai file statis (md).
> Tidak ada data sensitif di sini selain yang sudah publik di LinkedIn/portfolio.
> Tracker lamaran (`data/applications.md`) gunakan alias, bukan identitas perusahaan rahasia.

## Struktur
| File | Fungsi |
|------|--------|
| `cv.md` | Source of truth CV (bukan file yang dikirim ke recruiter — itu buatan Canva manual) |
| `profile.yml` | Data terstruktur (experience, skills, metrics) untuk evaluasi otomatis |
| `data/applications.md` | Tracker lamaran (status: saved / applied / interview / offer / reject) |
| `data/article-digest.md` | Ringkasan artikel/riset yang relevan dengan karir |
| `star-bank.md` | Bank cerita interview (format STAR+R) dari project nyata |
| `opportunities.md` | Log hasil Opportunity Radar (lowongan/grant/conference relevan) |
| `linkedin-audit.md` | Hasil audit bulanan konsistensi LinkedIn ↔ portfolio ↔ cv.md |
| `thought-leadership.md` | Draft artikel LinkedIn / mini-paper dari project portofolio |
| `reports/` | Output evaluasi lowongan per-JD (`{###}-{company}-{tanggal}.md`) |

## Cara pakai (instruksi untuk Robbani)
- **Mau evaluasi lowongan**: tempel URL/teks JD → Vertex jalankan `portfolio-career-ops`
  (blok A–G), tulis ke `reports/` & catat di `data/applications.md`.
- **Mau latihan interview**: sebut kompetensi → Vertex ambil dari `star-bank.md`.
- **Mau riset/publikasi**: Vertex draf ke `thought-leadership.md`, kamu edit & posting.
- **Audit bulanan**: cron otomatis tiap tanggal 1 cek konsistensi & tulis `linkedin-audit.md`.

## Prinsip
- File di sini **tidak** diubah oleh deploy situs; murni aset karir.
- Semua perubahan di-commit ke branch `developing`, lalu di-push ke `main` saat launching.
