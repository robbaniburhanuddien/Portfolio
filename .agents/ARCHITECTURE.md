# System Architecture & Project Structure

## 1. Tech Stack
| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| Structure | HTML5 (Semantic) | Layout, SEO metadata |
| Logic | JavaScript (ES6) | i18n, lightbox, filter, scroll reveal, counter, particles |
| Data | Vanilla JS (`data.js`) | Kontak (di-inject) + cadangan data proyek (belum dipakai render) |
| Styling | Vanilla CSS3 | Custom properties, glassmorphism, keyframes, scrollbar |
| Hosting | Netlify / GitHub Pages | CDN edge, trigger via `git push` |

## 2. Directory Tree
```
portfolio/
├── .agents/        # AI context: AGENTS.md (aturan), ARCHITECTURE.md, PRD.md, SKILL.md, ROLES.md, TODO.md
├── images/         # Foto lapangan, GIS, drone (96 file; ~20 dipakai)
├── index.html      # Layout statis (konten utama hardcode di sini)
├── style.css       # Design system, variabel --clr-*, animasi
├── script.js       # Kamus i18n + logika interaktif
├── data.js         # PORTFOLIO_DATA + injectData() (kontak saja)
├── update.bat      # Skrip deploy git (double-click)
├── PANDUAN.md      # Panduan untuk manusia (user)
└── README.md       # Init git
```

## 3. Data Flow — FAKTA SAAT INI
* `data.js` → `injectData()` hanya mengisi elemen `data-db` (email / linkedin / whatsapp / location) + `document.title` + meta description.
* `script.js` → `applyLanguage(lang)` menerjemahkan semua `[data-i18n]` saat load dan saat tombol bahasa ditekan.
* `index.html` → konten **projects / experience / gallery / education** bersifat STATIS (hardcode). Bukan di-render dari `data.js`.
* `data.js.projects / experience / gallery` saat ini hanya cadangan/referensi gambar, **tidak** di-inject ke DOM.

## 4. Rencana Evolusi (belum dikerjakan)
Agar `data.js` menjadi single source of truth: render projects/experience/gallery lewat JS loop yang membaca `PORTFOLIO_DATA`. Ini termasuk breaking change → butuh persetujuan pemilik sebelum dijalankan.
