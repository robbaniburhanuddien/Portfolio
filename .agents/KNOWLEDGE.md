# KNOWLEDGE.md — Glosarium Domain & Panduan Gaya Penulisan

File ini memberi AI konteks domain agar menulis deskripsi proyek, bio, dan copywriting
dengan **gaya spesialis konservasi & geospasial**, bukan bahasa generik/robotik.

## 1. Aturan Gaya Penulisan (WAJIB untuk AI)
* Gunakan nada ilmiah & profesional. Hindari bahasa marketing berlebihan.
* Mangrove = **"spesies mangrove" / "vegetasi mangrove"**, BUKAN "pohon biasa".
* Blue Carbon = simpanan karbon ekosistem pesisir (mangrove, padang lamun, terumbu karang).
  Sebut sebagai "sekuestrasi karbon" bukan "menyerap karbon" sembarangan.
* Konsisten bilingual: setiap teks baru wajib ada versi `id` DAN `en` (lihat `AGENTS.md` §4).
* Jangan over-promise capaian (mis. "100% pulih") tanpa data; gunakan angka dari `data.js`.
* Nama lembaga & singkatan ditulis lengkap saat pertama muncul, lalu boleh disingkat.

## 2. Glosarium — Rehabilitasi & Ekologi Mangrove
* **Rehabilitasi mangrove** — pengembalian fungsi ekosistem mangrove yang rusak.
* **Spesies mangrove** — contoh lazim di Indonesia:
  *Rhizophora* (bakau), *Avicennia* (api-api), *Sonneratia* (pedada), *Bruguiera* (tancang).
* **Propagul / bibit mangrove** — structur perbanyakan mangrove (bukan "biji biasa").
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
* **Fotogrametri** — penyusunan model 3D/model permukaan dari foto tumpang tindih.
* **GSD** (Ground Sample Distance) — resolusi spasial piksel (mis. "2cm GSD").
* **Tutupan lahan (land cover)** — klasifikasi permukaan dari citra.

## 4. Glosarium — UAV / Drone
* **RPAS** (Remotely Piloted Aircraft System) — istilah resmi drone/UAV.
* **UAV Pilot** — penyandang sertifikat pilot drone (lisensi).
* **Misi terbang / flight mission** — satu kali terbang survei terjadwal.
* **Validasi lapangan** — cek kebenaran data satelit/GIS lewat observasi nyata di lokasi.

## 5. Institusi & Singkatan (akurat)
* **BRGM** = Badan Restorasi Gambut dan Mangrove (bukan BKSDA, bukan KLHK).
* **Kementerian LHK / Kehutanan RI** = Kementerian Lingkungan Hidup dan Kehutanan.
* **LAPAN** = Lembaga Penerbangan dan Antariksa Nasional (riwayat pelatihan).
* Lokasi: **Sumatera Utara** (bukan "Sumatra"), **Riau**, **Sumatera Selatan** saat konteks regional.

## 6. Catatan Akurasi (jangan diulang)
* Jangan mencampuradukkan BRGM dengan Kementerian Kehutanan — keduanya lembaga beda.
* "Mangrove" selalu tunggal jamak netral; jangan "mangroves" di teks ID.
* Saat menyebut luasan, pakai satuan dari `data.js` (ha, provinsi, desa) — jangan reka angka.
