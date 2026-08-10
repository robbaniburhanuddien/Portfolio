# 📁 Struktur Folder Portofolio Mangrove

```
portfolio/
├── index.html          ✅ Selesai — Struktur halaman lengkap (bilingual)
├── style.css           ✅ Selesai — Desain dark emerald glassmorphism
├── script.js           ✅ Selesai — Animasi, i18n, filter, lightbox
├── images/             📂 BUAT FOLDER INI — Simpan fotomu di sini
│   ├── profile.jpg         → Foto profil kamu
│   ├── hero-bg.jpg         → Foto mangrove untuk hero (opsional)
│   ├── gallery-1.jpg       → Foto lapangan 1
│   ├── gallery-2.jpg       → Foto lapangan 2
│   ├── gallery-3.jpg       → dst...
│   └── project-*.jpg       → Foto proyek
└── cv.pdf              📄 Upload CV kamu di sini
```

## 🔧 Cara Tambahkan Foto Kamu

### Foto Profil
Di `index.html`, cari bagian `about-photo-frame` dan ganti:
```html
<!-- Hapus div photo-placeholder, ganti dengan: -->
<img src="images/profile.jpg" alt="Nama Kamu" />
```

### Foto Galeri
Di `index.html`, cari setiap `gallery-item` dan tambahkan:
```html
<img src="images/gallery-1.jpg" alt="Penanaman Mangrove" />
```

### Foto Proyek
Di `index.html`, cari setiap `project-img` dan tambahkan:
```html
<img src="images/project-rehab.jpg" alt="Nama Proyek" />
```

### Link CV
Di `index.html`, cari tombol "Unduh CV":
```html
<a href="cv.pdf" class="btn btn-primary btn-sm" download>Unduh CV</a>
```

## ✏️ Data yang Perlu Kamu Update di index.html

| Item | Cari di HTML | Ganti dengan |
|------|-------------|-------------|
| Nama | `Nama Lengkap` | Nama asli kamu |
| Email | `email@domain.com` | Email kamu |
| LinkedIn | `linkedin.com/in/profil-anda` | URL LinkedIn kamu |
| WhatsApp | `+62 XXX-XXXX-XXXX` | No. HP kamu |
| Lokasi | `Indonesia` | Kota/provinsi kamu |
| Universitas | `[Nama Universitas]` | Nama kampus kamu |
| Tahun | `20XX` | Tahun yang sebenarnya |
| Periode kerja | `2024 – Sekarang` | Periode akurat kamu |
| Nama jabatan | `Field Coordinator` | Jabatan asli kamu |
| Lokasi kerja | tiap `exp*.loc` | Lokasi nyata kamu |

## 🚀 Cara Buka Website

Cukup buka file `index.html` di browser, atau gunakan Live Server di VS Code.

## 🌐 Deploy Gratis

### GitHub Pages
1. Buat repo baru di GitHub (nama: `username.github.io`)
2. Upload semua file ke repo
3. Settings → Pages → Source: main branch
4. Website live di `https://username.github.io`

### Netlify (Lebih Mudah)
1. Buka netlify.com
2. Drag & drop folder portfolio ke Netlify
3. Website langsung live!
