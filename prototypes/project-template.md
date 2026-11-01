# Template Konten Proyek — Format Isian

Gunakan template ini untuk mengisi data proyek. Salin bagian yang diperlukan
ke file utama (misalnya `script.js` atau `_data/projects.json`). Isian
**id** dan **location_id** boleh tetap, **image** dan **gallery** dapat
diganti nanti saat Anda siapkan folder dokumentasi.

> Catatan: Semua bidang bersifat wajib kecuali ditandai opsional.
> Untuk dokumen, isi `gallery` dengan data dari folder yang akan Anda berikan nanti.

---

## 1. Identitas Proyek

```json
{
  "id": "exp1",                     // contoh: "exp1"
  "kicker": "Rehabilitasi · Sumatera Utara",
  "title": {
    "id": "Rehabilitasi Mangrove Sumatera Utara (M4CR)",
    "en": "M4CR Mangrove Rehabilitation North Sumatra (M4CR)"
  },
  "short": {
    "id": "Perencanaan berbasis GIS, survei hidrologi, dan M&E lapangan untuk 831 ha penanaman serta 498 ha pemeliharaan tahun pertama.",
    "en": "GIS-based planning, hydrological analysis, and field monitoring for 831 ha planting and 498 ha first-year maintenance."
  },
  "image": "images/IMG_9403~photo.JPG",
  "location": {
    "id": "Sumatera Utara",
    "en": "North Sumatra"
  },
  "period": "2025–2026",
  "role": {
    "id": "Technical Mangrove Rehabilitation Facilitator — PPIU M4CR, Ministry of Forestry",
    "en": "Technical Mangrove Rehabilitation Facilitator — PPIU M4CR, Ministry of Forestry"
  }
}
```

## 2. Tags (English)

```json
"tags": {
  "id": ["Rehabilitasi", "GIS", "UAV", "M&E"],
  "en": ["Rehabilitation", "GIS", "UAV", "M&E"]
}
```

## 3. Statistik

```json
"stats": [
  { "num": "831 ha", "label": { "id": "Penanaman", "en": "Planting" } },
  { "num": "498 ha", "label": { "id": "Pemeliharaan", "en": "Maintenance" } }
]
```

## 4. TL;DR (3–5 poin)

```json
"tldr": {
  "id": [
    "Merancang tata letak rehabilitasi berbasis GIS dan analisis hidrologi.",
    "Memantau 831 ha penanaman dan 498 ha pemeliharaan tahun pertama lewat citra drone.",
    "Menerjemahkan data spasial menjadi keputusan lapangan dan laporan evaluasi."
  ],
  "en": [
    "Planned GIS-based rehabilitation layouts and hydrological analysis.",
    "Monitored 831 ha planting and 498 ha first-year maintenance using drone imagery.",
    "Translated spatial data into tactical field decisions and evaluation reports."
  ]
}
```

## 5. Full Story

```json
"fullStory": [
  {
    "heading": "Konteks",
    "body": "Program M4CR mendukung percepatan rehabilitasi mangrove di Sumatera Utara. Tantangannya bukan hanya menanam, tetapi memastikan lokasi tanam sesuai kondisi hidrologi dan ekologi setempat."
  },
  {
    "heading": "Peran",
    "body": "Sebagai fasilitator teknis, saya menghubungkan perencanaan spasial dengan pelaksanaan lapangan: menyiapkan peta kerja, memverifikasi lokasi, dan mendampingi tim pelaksana."
  },
  {
    "heading": "Proses",
    "list": [
      "Survei lapangan dan UAV untuk baseline serta monitoring.",
      "Analisis GIS dan hidrologi untuk menentukan zonasi tanam.",
      "M&E berbasis citra drone untuk mengevaluasi progres dan kesehatan tanaman.",
      "Penyusunan laporan evaluasi untuk tim pelaksana dan pemangku kepentingan."
    ]
  },
  {
    "heading": "Dampak",
    "body": "831 ha penanaman dan 498 ha pemeliharaan tahun pertama terdokumentasi dan terpantau. Data spasial membantu tim mengambil keputusan cepat saat menemukan gangguan ekologi di lapangan."
  },
  {
    "heading": "Tech Stack",
    "body": "ArcGIS, QGIS, Google Earth Engine, DJI Mavic 2, Agisoft Metashape, ArcGIS Field Maps."
  }
]
```

## 7. Dokumentasi (Gallery)

**Folder dokumen yang akan Anda berikan nanti:**

```
/path/to/dokumentasi
```

Isi `gallery` dengan data dari folder tersebut. Contoh:

```json
"gallery": [
  {
    "src": "../images/IMG_9403~photo.JPG",
    "alt": "Tim rehabilitasi mangrove di lapangan",
    "caption": "Tim rehabilitasi di lapangan",
    "caption_en": "Field rehabilitation team"
  },
  {
    "src": "../images/IMG_9410~photo.JPG",
    "alt": "Penanaman mangrove",
    "caption": "Penanaman mangrove",
    "caption_en": "Mangrove planting"
  },
  {
    "src": "../images/IMG_9530~photo.JPG",
    "alt": "Monitoring pertumbuhan mangrove",
    "caption": "Monitoring pertumbuhan",
    "caption_en": "Mangrove growth monitoring"
  },
  {
    "src": "../images/IMG_9536~photo.JPG",
    "alt": "Dokumentasi kegiatan rehabilitasi",
    "caption": "Dokumentasi kegiatan rehabilitasi",
    "caption_en": "Rehabilitation activity documentation"
  }
]
```

> Ganti `src` dengan path relatif yang benar sesuai struktur folder.  
> Jika folder berisi banyak gambar, daftarkan masing-masing dengan `src`, `alt`, `caption`, `caption_en`.

---

## Contoh Lengkap (kasus M4CR)

```json
{
  "id": "exp1",
  "kicker": "Rehabilitasi · Sumatera Utara",
  "title": {
    "id": "Rehabilitasi Mangrove Sumatera Utara (M4CR)",
    "en": "M4CR Mangrove Rehabilitation North Sumatra (M4CR)"
  },
  "short": {
    "id": "Perencanaan berbasis GIS, survei hidrologi, dan M&E lapangan untuk 831 ha penanaman serta 498 ha pemeliharaan tahun pertama.",
    "en": "GIS-based planning, hydrological analysis, and field monitoring for 831 ha planting and 498 ha first-year maintenance."
  },
  "image": "../images/IMG_9403~photo.JPG",
  "location": { "id": "Sumatera Utara", "en": "North Sumatra" },
  "period": "2025–2026",
  "role": {
    "id": "Technical Mangrove Rehabilitation Facilitator — PPIU M4CR, Ministry of Forestry",
    "en": "Technical Mangrove Rehabilitation Facilitator — PPIU M4CR, Ministry of Forestry"
  },
  "tags": { "id": ["Rehabilitasi", "GIS", "UAV", "M&E"], "en": ["Rehabilitation", "GIS", "UAV", "M&E"] },
  "stats": [
    { "num": "831 ha", "label": { "id": "Penanaman", "en": "Planting" } },
    { "num": "498 ha", "label": { "id": "Pemeliharaan", "en": "Maintenance" } }
  ],
  "tldr": {
    "id": [
      "Merancang tata letak rehabilitasi berbasis GIS dan analisis hidrologi.",
      "Memantau 831 ha penanaman dan 498 ha pemeliharaan tahun pertama lewat citra drone.",
      "Menerjemahkan data spasial menjadi keputusan lapangan dan laporan evaluasi."
    ],
    "en": [
      "Planned GIS-based rehabilitation layouts and hydrological analysis.",
      "Monitored 831 ha planting and 498 ha first-year maintenance using drone imagery.",
      "Translated spatial data into tactical field decisions and evaluation reports."
    ]
  },
  "fullStory": [
    { "heading": "Konteks", "body": "Program M4CR mendukung percepatan rehabilitasi mangrove di Sumatera Utara. Tantangannya bukan hanya menanam, tetapi memastikan lokasi tanam sesuai kondisi hidrologi dan ekologi setempat." },
    { "heading": "Peran", "body": "Sebagai fasilitator teknis, saya menghubungkan perencanaan spasial dengan pelaksanaan lapangan: menyiapkan peta kerja, memverifikasi lokasi, dan mendampingi tim pelaksana." },
    { "heading": "Proses", "list": ["Survei lapangan dan UAV untuk baseline serta monitoring.", "Analisis GIS dan hidrologi untuk menentukan zonasi tanam.", "M&E berbasis citra drone untuk mengevaluasi progres dan kesehatan tanaman.", "Penyusunan laporan evaluasi untuk tim pelaksana dan pemangku kepentingan."] },
    { "heading": "Dampak", "body": "831 ha penanaman dan 498 ha pemeliharaan tahun pertama terdokumentasi dan terpantau. Data spasial membantu tim mengambil keputusan cepat saat menemukan gangguan ekologi di lapangan." },
    { "heading": "Tech Stack", "body": "ArcGIS, QGIS, Google Earth Engine, DJI Mavic 2, Agisoft Metashape, ArcGIS Field Maps." }
  ],
  "gallery": [
    { "src": "../images/IMG_9403~photo.JPG", "alt": "Tim rehabilitasi mangrove di lapangan", "caption": "Tim rehabilitasi di lapangan", "caption_en": "Field rehabilitation team" },
    { "src": "../images/IMG_9410~photo.JPG", "alt": "Penanaman mangrove", "caption": "Penanaman mangrove", "caption_en": "Mangrove planting" },
    { "src": "../images/IMG_9530~photo.JPG", "alt": "Monitoring pertumbuhan mangrove", "caption": "Monitoring pertumbuhan", "caption_en": "Mangrove growth monitoring" },
    { "src": "../images/IMG_9536~photo.JPG", "alt": "Dokumentasi kegiatan rehabilitasi", "caption": "Dokumentasi kegiatan rehabilitasi", "caption_en": "Rehabilitation activity documentation" }
  ]
}
```

---

## Format Data Script (JavaScript)

Di `script.js`, format yang dipakai adalah array object. Contoh potongan:

```js
{
  id: "exp1",
  kicker: "Rehabilitasi · Sumatera Utara",
  title: { id: "...", en: "..." },
  short: { id: "...", en: "..." },
  image: "../images/IMG_9403~photo.JPG",
  location: { id: "Sumatera Utara", en: "North Sumatra" },
  period: "2025–2026",
  role: { id: "...", en: "..." },
  tags: { id: ["Rehabilitasi", "GIS", "UAV", "M&E"], en: ["Rehabilitation", "GIS", "UAV", "M&E"] },
  stats: [
    { num: "831 ha", label_id: "Penanaman", label_en: "Planting" },
    { num: "498 ha", label_id: "Pemeliharaan", label_en: "Maintenance" }
  ],
  tldr: { id: [...], en: [...] },
  fullStory: [ { heading: "Konteks", body: "..." } ],
  gallery: [ { src: "../images/...", alt: "...", caption: "...", caption_en: "..." } ]
}
```

Cukup isi bagian yang ingin diganti; sisanya bisa diganti nanti saat Anda siapkan folder dokumen.
