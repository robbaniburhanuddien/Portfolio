# KNOWLEDGE.md — Glosarium Domain & Panduan Gaya Penulisan

File ini memberi AI konteks domain agar menulis deskripsi proyek, bio, dan copywriting
dengan **gaya spesialis konservasi & geospasial khas Robbani**, bukan bahasa generik/robotik.
Executor & orchestrator WAJIB baca file ini sebelum menulis/mengubah teks apa pun.

> 🔲 ISI ROBBANI: bagian bertanda ini hanya Robbani yang tahu — isi malam ini / saat senggang.

## 1. Aturan Gaya Penulisan (WAJIB untuk AI)
* Nada: **santai-ilmiah** — profesional tapi readable (formal-ilmiah, mudah dipahami
  pembaca umum, tidak kaku akademik). Ini preferensi tetap Robbani.
* Bahasa Inggris: **American English** (color, center, monitoring — bukan British).
* Mangrove = **"spesies mangrove" / "vegetasi mangrove"**, BUKAN "pohon biasa".
* Blue Carbon = simpanan karbon ekosistem pesisir (mangrove, padang lamun, terumbu karang).
  Sebut "sekuestrasi karbon", bukan "menyerap karbon" sembarangan.
* Konsisten bilingual: setiap teks baru wajib ada versi `id` DAN `en` (`AGENTS.md` §4).
* Jangan over-promise capaian (mis. "100% pulih") tanpa data; pakai angka dari `data.js`.
* Nama lembaga & singkatan: tulis lengkap saat pertama muncul, lalu boleh disingkat.
* Frasa yang HARUS dihindari: klise marketing/romantis (mis. "hijaukan bumi", "penyelamat
  planet"), hiperbola tanpa data.
* Frasa yang SELALU dipakai: "restorasi berbasis masyarakat", "rehabilitasi mangrove",
  "monitoring & evaluasi", sebut spesies dengan **nama latin + lokal**.
* Saat menyebut spesies mangrove yang ditanam, SELALU pakai **nama latin + nama lokal**
  (mis. *Rhizophora mucronata* / bakau), bukan hanya nama umum.
## 2. Glosarium — Rehabilitasi & Ekologi Mangrove
* **Rehabilitasi mangrove** — pengembalian fungsi ekosistem mangrove yang rusak.
* **Spesies mangrove** — contoh lazim di Indonesia:
  *Rhizophora* (bakau), *Avicennia* (api-api), *Sonneratia* (pedada), *Bruguiera* (tancang),
  *Ceriops* (tancang kecil).
* **Spesies mangrove sering ditanam Robbani** (SELALU tulis nama latin + lokal):
  *Rhizophora mucronata* (bakau), *Rhizophora apiculata* (bakau), *Rhizophora stylosa*
  (bakau), *Avicennia marina* (api-api), *Sonneratia alba* (pedada),
  *Bruguiera gymnorrhiza* (tancang / tumu), *Ceriops tagal* (tancang kecil),
  *Nypa fruticans* (nipah), *Lumnitzera racemosa* & *Lumnitzera littorea* (teruntum).
  🔲 ISI ROBBANI: tambah spesies lain jika ada.
* **Propagul / bibit mangrove** — struktur perbanyakan mangrove (bukan "biji biasa").
* **Blue Carbon** — karbon yang disimpan & disekuestrasi oleh ekosistem pesisir.
* **Transek** — metode pengamatan garis untuk monitoring ekosistem.
* **Plot monitoring** — petak contoh berkala untuk evaluasi kondisi.
* **Substrat / salinitas / pasang surut** — variabel lingkungan penting mangrove.

## 3. Glosarium — GIS & Remote Sensing
* **Sentinel-2, Landsat** — citra satelit optik multi-temporal untuk pantau tutupan.
* **Google Earth Engine (GEE)** — platform pemrosesan penginderaan jauh berbasis cloud.
* **ArcGIS, QGIS** — perangkat lunak SIG (desktop).
* **Orthophoto** — foto udara terkoreksi geometrik (peta foto).
* **Orthomosaic** — gabungan orthophoto menjadi satu peta utuh.
* **DSM** (Digital Surface Model) / **DTM** (Digital Terrain Model).
* **Fotogrametri** — penyusunan model 3D/permukaan dari foto tumpang tindih.
* **GSD** (Ground Sample Distance) — resolusi spasial piksel (mis. "2cm GSD").
* **Tutupan lahan (land cover)** — klasifikasi permukaan dari citra.
* **Tool SIG yang sering Robbani pakai** (sebut eksplisit bila tulis tentang pengolahan spasial):
  **ArcGIS Pro**, **ArcMap**, **QGIS**, **Google Earth Engine (GEE)** untuk pengolahan spasial.

## 4. Glosarium — UAV / Drone
* **RPAS** (Remotely Piloted Aircraft System) — istilah resmi drone/UAV.
* **UAV Pilot** — penyandang sertifikat pilot drone (lisensi).
* **Misi terbang / flight mission** — satu kali terbang survei terjadwal.
* **Validasi lapangan** — cek kebenaran data satelit/GIS lewat observasi nyata di lokasi.
* Drone/RPAS yang Robbani pakai: **DJI Mavic Air 2**, **DJI Air 2S**, **DJI Phantom 4**,
  **DJI Mavic 3**. Aplikasi kendali/penerbangan: **DJI Fly**, **DJI GO**, **Dronelink**.
* **Pengolahan data drone (fotogrametri)** Robbani: **Pix4D**, **Agisoft Metashape**
  (untuk orthomosaic, DSM/DTM, model 3D dari foto UAV).


## 5. Institusi & Singkatan (akurat)
* **BRGM** = Badan Restorasi Gambut dan Mangrove (bukan BKSDA, bukan KLHK).
* **Kementerian LHK / Kehutanan RI** = Kementerian Lingkungan Hidup dan Kehutanan.
* **LAPAN** = Lembaga Penerbangan dan Antariksa Nasional (riwayat pelatihan Robbani).
* Lembaga lain yang sering terlibat: **World Bank** (Bank Dunia) via proyek M4CR,
  **Kementerian LHK** (mitra proyek), **PPIU M4CR Sumatera Utara** (unit pelaksana).
* Nama proyek spesifik (harus konsisten penulisannya):
  **M4CR** = **Mangrove for Coastal Resilience** (proyek rehabilitasi mangrove,
  kerjasama World Bank – Kementerian LHK, dilaksanakan via PPIU),
  **PPIU M4CR Sumatera Utara** (Satuan Tugas/Pelaksana proyek di Medan).

## 6. Lokasi & Wilayah Kerja
* Provinsi utama: **Sumatera Utara** (bukan "Sumatra") — basis PPIU M4CR Sumut (Medan).
* Kab/Kota target rehabilitasi di Sumatera Utara (daerah kerja PPIU M4CR Sumut):
  **Langkat, Serdang Bedagai, Batu Bara, Deli Serdang, Asahan, Labuhanbatu Utara,
  Labuhanbatu** (selain Medan sebagai basecamp PPIU).
* Wilayah regional lain (riwayat BRGM): **Kepulauan Riau (Kepri)** & **Kepulauan Bangka Belitung (Babel)**.

## 8. Profil Karir Robbani (konteks penulisan)
* **Jul 2023 – Dec 2025**: Badan Restorasi Gambut dan Mangrove (**BRGM**).
  Posisi: Staf Rehabilitasi Mangrove — berada di **Deputi Bidang Pemberdayaan Masyarakat**
  (salah satu 4 deputi BRGM per Pasal 6 Perpres 120/2020; fokus: perbaikan penghidupan
  masyarakat, pendekatan padat karya, rehabilitasi mangrove bersama kelompok masyarakat).
  Wilayah penugasan: Kepulauan Riau & Kepulauan Bangka Belitung.
  Tugas: melaksanakan rehabilitasi mangrove + peran sebagai **GIS Operator**.
* **Jan 2025 – sekarang**: Technical Mangrove Rehabilitation Facilitator.
  Proyek: kerjasama **World Bank** (Bank Dunia) dengan Kementerian Kehutanan,
  di **PPIU M4CR Sumatera Utara, Medan**.
  Tugas utama:
  - Monitoring & Evaluasi (M&E) rehabilitasi mangrove di daerah target rehabilitasi.
  - Survei hidrologi untuk menentukan perlu/tidaknya **intervensi hidrologi** pada kegiatan rehab.
  - Penyusunan administrasi kegiatan **swakelola** (Kerjasama Pelaksana Kegiatan Rehabilitasi
    Mangrove dengan **kelompok masyarakat** / pokmas).
* 🔲 ISI ROBBANI: rincian/pencapaian lain akan ditambahkan kemudian.

## 9. Dasar Hukum & Terminologi Resmi (sumber: Perpres 120/2020)
* **Perpres No. 120 Tahun 2020** — dasar hukum pembentukan BRGM (menggantikan
  Perpres 1/2016 tentang Badan Restorasi Gambut). Mengatur percepatan restorasi gambut
  & rehabilitasi mangrove.
* **BRGM** = Badan Restorasi Gambut dan Mangrove, lembaga **nonstruktural** di bawah Presiden.
* **Target nasional (Perpres 120/2020)**:
  - Rehabilitasi mangrove: **600.000 ha** (9 provinsi: Sumut, Riau, Kepri, Babel,
    Kalbar, Kaltim, Kalut, Papua, Papua Barat).
  - Restorasi gambut: **1.200.000 ha** (4 tahun, 2021–2024).
* **Kegiatan standar rehabilitasi mangrove (NSPK, Pasal 5 ayat 3)**: persemaian,
  pembibitan, penanaman, pemeliharaan, pembangunan persemaian modern.
  → Saat tulis tentang "penanaman", gunakan rantai ini, bukan sekadar "tanam bakau".
* **Monitoring & Evaluasi (M&E)** mangrove: BRGM bersama Ditjen PDASHL & Ditjen
  Pengelolaan Ruang Laut (Kemen LHK/KKP) — sesuai tugas Robbani di PPIU M4CR.
* **Rewetting** = pembasahan kembali lahan gambut (infrastruktur pembasahan).
* **Pendekatan padat karya & pemberdayaan masyarakat** — rehabilitasi melibatkan
  kelompok masyarakat (sinkron dengan "swakelola pokmas" di profil Robbani).
* **Deputi BRGM**: Perencanaan & Evaluasi; Konstruksi, Operasi & Pemeliharaan;
  Edukasi, Sosialisasi, Partisipasi & Kemitraan; Pemberdayaan Masyarakat.
* 🔲 ISI ROBBANI: simpan salinan Perpres di `reference/` (sudah ada) — baca langsung
  bila perlu kutipan pasal tepat.

## 7. Catatan Akurasi (jangan diulang)
* Jangan mencampuradukkan BRGM dengan Kementerian Kehutanan — keduanya lembaga beda.
* "Mangrove" selalu tunggal-jamak netral; jangan "mangroves" di teks ID.
* Saat menyebut luasan, pakai satuan dari `data.js` (ha, provinsi, desa) — jangan reka angka.
* Pastikan caption/nama foto konsisten dengan `data-label` galeri (lihat CHANGELOG).
