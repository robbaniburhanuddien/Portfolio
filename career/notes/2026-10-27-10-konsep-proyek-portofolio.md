# 10 Konsep Proyek Portofolio — GIS, Remote Sensing & Rehabilitasi Mangrove

**Untuk:** Burhanuddien Robbani, S.P.
**Tanggal:** 27 Oktober 2026
**Fungsi:** Bahan isian `PORTFOLIO_DATA.projects` di `script.js`
**Struktur:** 5 proyek profesional (saat bekerja) + 5 proyek personal (pengembangan diri)

> ⚠️ **Cara pakai:** angka yang bertanda `⚠️` perlu kamu verifikasi dulu dari dokumen asli sebelum dipublikasikan. Angka tanpa tanda diambil dari data yang sudah ada di `script.js` (831 ha, 498 ha, 772 ha, 1.000+ ha, 11 kab/kota).

---

# BAGIAN A — PROYEK SAAT BEKERJA (5)

---

## A1. Pemetaan UAV & Peta Arahan Tanam Rehabilitasi Mangrove

**Deskripsi singkat**
Merancang dan mengeksekusi misi pemetaan drone di calon lokasi rehabilitasi mangrove, lalu mengolahnya menjadi orthomosaic dan peta arahan tanam. Peta ini bukan dokumen teknis yang berhenti di laporan — ia menjadi acuan kerja harian kelompok pelaksana di lapangan, menentukan di mana bibit ditanam dan di mana tidak.

**TL;DR**
- Merencanakan misi terbang dan mengakuisisi citra di lokasi prioritas rehabilitasi.
- Mengolah orthomosaic resolusi tinggi (GSD di bawah 10 cm/px) sebagai baseline spasial.
- Menghasilkan peta arahan tanam: batas area, luas efektif, dan zona layak tanam.
- Output dipakai langsung oleh kelompok pelaksana sebagai blueprint kerja lapangan.
- Data yang sama menjadi baseline untuk monitoring tahun berikutnya.

**Full Story**

*Konteks*
Rehabilitasi mangrove sering gagal bukan karena bibitnya buruk, tapi karena orang menanam di tempat yang salah. Data spasial yang tersedia umumnya berada di skala provinsi — cukup untuk perencanaan makro, tidak cukup untuk memutuskan apakah satu petak 5 hektare layak ditanami atau tidak. Di lokasi dengan pasang-surut besar, perbedaan elevasi beberapa sentimeter saja menentukan apakah bibit akan bertahan atau tenggelam. Kebutuhan sebenarnya sederhana: satu peta resolusi tinggi per lokasi, yang bisa dibaca oleh orang lapangan, bukan hanya oleh analis GIS.

*Peran*
Saya memegang alur kerja dari hulu ke hilir: perencanaan misi, akuisisi di lapangan, pengolahan fotogrametri, sampai penyerahan peta ke tim teknis dan kelompok masyarakat. Saya juga yang menerjemahkan hasil peta menjadi instruksi kerja — bukan menyerahkan file lalu pergi.

*Proses*
Perencanaan misi dilakukan dengan Dronelink untuk mengatur overlap dan ketinggian terbang agar GSD konsisten. Akuisisi memakai DJI Mavic/Phantom, dengan penempatan GCP agar orthomosaic punya acuan koordinat yang bisa dipertanggungjawabkan. Pengolahan di Agisoft Metashape: alignment, dense cloud, mesh, orthomosaic, dan DSM. Setelah itu delineasi batas area tanam di ArcGIS Pro/QGIS, overlay dengan data hidrologi dan tutupan eksisting, lalu pengecekan lapangan untuk area yang ambigu. Hasil akhir disusun dalam layout peta yang bisa dibaca oleh non-teknis: legenda jelas, skala, arah utara, dan tabel luas per kelompok.

*Dampak*
Peta arahan tanam mempersempit area kerja ke zona yang benar-benar layak tanam, sehingga sumber daya bibit dan tenaga tidak terbuang di lokasi yang secara hidrologi tidak mendukung. Yang lebih penting, peta itu memberi bahasa bersama antara tim teknis, kelompok masyarakat, dan pemerintah daerah — perdebatan "di sini boleh tanam atau tidak" berhenti jadi soal pendapat dan berubah jadi soal data.

---

## A2. Percepatan Rehabilitasi Mangrove 772 Hektare — Kepulauan Riau

**Deskripsi singkat**
Menjalankan program percepatan rehabilitasi mangrove 2023–2024 dengan target penanaman dan pemeliharaan tahun pertama di Kepulauan Riau. Peran saya berada di irisan teknis dan GIS: memastikan luas yang dilaporkan sama dengan luas yang benar-benar ditanam di lapangan.

**TL;DR**
- Realisasi penanaman 772 hektare di Provinsi Kepulauan Riau.
- Pemantauan area pemeliharaan lebih dari 1.000 hektare.
- Verifikasi luasan berbasis poligon GIS, bukan klaim manual.
- Koordinasi lintas kelompok masyarakat dan pemerintah daerah.
- Data realisasi spasial menjadi dasar evaluasi program.

**Full Story**

*Konteks*
Program percepatan punya dua tekanan yang saling bertentangan: kecepatan eksekusi dan akuntabilitas luasan. Dalam program berskala ratusan hektare yang melibatkan banyak kelompok pelaksana, selisih antara "luas target", "luas tanam", dan "luas yang benar-benar hidup" adalah hal yang wajar — tapi kalau tidak diverifikasi, selisih itu menjadi masalah di kemudian hari. Tantangannya adalah membangun mekanisme verifikasi yang cukup ketat tanpa memperlambat pekerjaan lapangan.

*Peran*
Sebagai staf teknis dan GIS, saya menjadi jembatan antara target dari pusat, pelaksanaan di lapangan, dan pelaporan. Saya menyusun sebaran target per kabupaten, memverifikasi poligon realisasi, dan melakukan rekonsiliasi antara data lapangan dengan citra.

*Proses*
Alurnya dimulai dari pemecahan target provinsi menjadi target kabupaten, lalu ke kelompok pelaksana. Setiap kelompok mengirim data lokasi dan luasan; saya memverifikasi dengan citra drone dan citra satelit, mengecek apakah poligon yang dilaporkan benar-benar berada di area yang bisa ditanami. Untuk area yang tidak jelas, dilakukan pengecekan lapangan. Data yang sudah bersih dikompilasi menjadi laporan progres dengan peta dan tabel yang konsisten.

*Dampak*
Realisasi 772 hektare bisa dipertanggungjawabkan secara spasial — bukan sekadar angka di laporan. Mekanisme verifikasi ini juga memunculkan temuan yang berguna: beberapa area yang dilaporkan tertanam ternyata berada di zona yang tidak sesuai, dan bisa dikoreksi lebih awal sebelum menjadi temuan audit.

---

## A3. Survei Hidrologi & Perencanaan Tata Letak Penanaman — Sumatera Utara

**Deskripsi singkat**
Menggabungkan survei hidrologi lapangan dengan analisis GIS untuk menentukan perlu-tidaknya intervensi hidrologi dan bagaimana tata letak penanaman sebaiknya disusun. Hasilnya menjadi dasar teknis penanaman 831 hektare dan pemeliharaan tahun pertama 498 hektare di Sumatera Utara.

**TL;DR**
- Survei hidrologi di zona pasang-surut untuk membaca kondisi nyata lokasi.
- Identifikasi area yang butuh intervensi (saluran, pemecah gelombang, penyesuaian elevasi).
- Penyusunan tata letak tanam per zona hidrologi, bukan pola seragam.
- Mendukung realisasi penanaman 831 hektare dan pemeliharaan 498 hektare.
- Menurunkan risiko gagal tanam akibat genangan dan abrasi.

**Full Story**

*Konteks*
Mangrove adalah ekosistem yang sangat bergantung pada hidrologi. Bibit yang ditanam di zona dengan genangan terlalu dalam, salinitas tidak sesuai, atau energi gelombang terlalu tinggi akan mati meskipun ditanam dengan teknik yang benar. Sayangnya, perencanaan penanaman sering disederhanakan menjadi "petak dibagi rata" — pola yang mudah dianggarkan tapi tidak selalu sesuai kondisi lapangan.

*Peran*
Saya menjalankan survei hidrologi dan menerjemahkan hasilnya menjadi rencana tata letak. Posisi saya adalah fasilitator teknis rehabilitasi: yang mengukur, menganalisis, lalu menjelaskan rekomendasi ke tim pelaksana dan kelompok masyarakat.

*Proses*
Survei mencakup pengukuran parameter hidrologi di titik-titik yang mewakili variasi lokasi, dilengkapi pencatatan kondisi substrat dan indikator vegetasi eksisting. Data lapangan itu kemudian di-overlay dengan DSM hasil pemetaan drone dan data pasang-surut untuk membangun zonasi: area yang layak tanam langsung, area yang butuh perlakuan, dan area yang sebaiknya dibiarkan. Dari zonasi itu disusun tata letak penanaman per petak, termasuk jenis dan kerapatan.

*Dampak*
Tata letak tanam menjadi spesifik per lokasi, bukan pola generik yang diulang. Ini berkontribusi pada realisasi 831 hektare penanaman dan 498 hektare pemeliharaan tahun pertama. Yang lebih penting untuk jangka panjang: rekomendasi intervensi hidrologi memberi dasar teknis ketika program perlu menjelaskan mengapa suatu area butuh perlakuan tambahan.

---

## A4. Monitoring & Evaluasi Berbasis Citra Drone

**Deskripsi singkat**
Membangun alur monitoring dan evaluasi yang mengubah citra drone menjadi keputusan lapangan: mana area yang perlu penyulaman, mana yang perlu pemeliharaan intensif, dan mana yang sudah berjalan sesuai rencana. Bukan laporan foto, tapi laporan terukur yang bisa ditindaklanjuti.

**TL;DR**
- Siklus M&E berkala dengan citra drone sebagai sumber data utama.
- Deteksi area gagal tanam dan kebutuhan penyulaman.
- Terjemahan data spasial menjadi rekomendasi tindakan konkret.
- Laporan evaluasi untuk tim pelaksana dan pemangku kepentingan.
- Baseline terukur untuk pemeliharaan tahun pertama.

**Full Story**

*Konteks*
Monitoring dan evaluasi di program rehabilitasi sering berhenti sebagai formalitas administratif: foto sebelum-tanam, foto sesudah-tanam, lalu laporan. Padahal nilai M&E justru ada di pertanyaan yang lebih sulit — berapa persen yang hidup, di zona mana kematian terkonsentrasi, dan apa penyebabnya. Tanpa data spasial, pertanyaan itu hanya bisa dijawab dengan perkiraan.

*Peran*
Saya menjalankan M&E berbasis spasial: merancang titik pengamatan, mengakuisisi citra, mengolah, dan menyusun temuan. Saya juga yang membawa temuan itu kembali ke tim pelaksana dalam bahasa yang bisa dieksekusi.

*Proses*
Pengamatan dilakukan pada plot yang mewakili variasi zona tanam. Citra drone diolah menjadi orthomosaic, lalu dibandingkan dengan baseline penanaman untuk melihat perubahan tutupan. Area dengan tutupan rendah diperiksa lebih dekat — apakah karena gelombang, sedimen, hama, atau memang gagal tanam. Temuan itu dikompilasi per kelompok pelaksana agar rekomendasinya spesifik, bukan umum.

*Dampak*
Tindakan korektif bisa diambil lebih cepat, saat biaya perbaikannya masih rendah. Laporan evaluasi juga menjadi lebih kredibel karena setiap klaim didukung citra dan koordinat, bukan hanya narasi. Untuk pekerjaan saya sendiri, alur ini menjadi kerangka yang bisa direplikasi di lokasi lain.

---

## A5. Fasilitasi Kelembagaan Kelompok Masyarakat & Administrasi Swakelola

**Deskripsi singkat**
Mendampingi kelompok masyarakat menjalankan kegiatan rehabilitasi secara swakelola — dari administrasi, SOP kerja, sampai pelaporan. Ini bagian yang jarang muncul di peta dan jarang masuk portofolio, padahal justru di sinilah program berbasis masyarakat paling sering gagal.

**TL;DR**
- Pendampingan kelembagaan kelompok masyarakat pelaksana lapangan.
- Penyusunan administrasi swakelola sesuai ketentuan program.
- Sosialisasi SOP, alur kerja, dan target proyek sejak awal.
- Koordinasi dengan pemerintah daerah dan pemangku kawasan.
- Peningkatan kapasitas anggota kelompok untuk menjalankan siklus kegiatan.

**Full Story**

*Konteks*
Program rehabilitasi berbasis masyarakat punya asumsi yang tidak selalu diuji: bahwa kelompok masyarakat siap menjalankan kegiatan berskala teknis dan administratif. Kenyataannya, banyak kelompok mampu menanam tapi kesulitan menyusun dokumen pertanggungjawaban, dan banyak fasilitator mampu memandu teknis tapi tidak sabar dengan administrasi. Ketika administrasi macet, kegiatan lapangan ikut berhenti.

*Peran*
Saya berperan sebagai fasilitator: mendampingi kelompok menjalankan kegiatan, membantu menyusun administrasi, dan memastikan mereka memahami bukan hanya apa yang harus dikerjakan, tapi mengapa.

*Proses*
Pendampingan dimulai dari sosialisasi alur kerja dan target proyek, lalu berlanjut ke penyusunan rencana kegiatan kelompok. Saya mendampingi penyusunan dokumen swakelola, memverifikasi kesesuaiannya, dan membantu kelompok memahami mekanisme pelaporan. Di sisi teknis, kelompok dilatih membaca peta arahan tanam dan melakukan pencatatan hasil lapangan yang konsisten.

*Dampak*
Kelompok yang didampingi mampu menjalankan siklus kegiatan dengan lebih mandiri — dari perencanaan sampai pelaporan. Efek sampingnya sering lebih penting: ketika kelompok merasa dilibatkan dalam keputusan, tingkat keberhasilan tanaman dan pemeliharaan cenderung lebih baik, karena ada rasa memiliki yang tidak bisa dibeli dengan insentif.

---

# BAGIAN B — PROYEK PERSONAL / PENGEMBANGAN DIRI (5)

---

## B1. NDVI Time-Series Mangrove Sumatera Utara–Kepulauan Riau dengan Google Earth Engine (2020–2026)

**Deskripsi singkat**
Membangun pipeline Google Earth Engine mandiri untuk memantau dinamika NDVI mangrove di Sumatera Utara dan Kepulauan Riau sepanjang 2020–2026. Tujuannya membuktikan satu hal: perubahan kondisi vegetasi bisa dibaca secara kontinu tanpa harus ke lapangan setiap bulan.

**TL;DR**
- Sentinel-2 Surface Reflectance Harmonized dengan cloud masking (QA60/SCL).
- Komposit tahunan 2020–2026 untuk area kajian Sumut dan Kepri.
- Perhitungan NDVI dan klasifikasi tren: membaik, stabil, memburuk.
- Export GeoTIFF dan statistik per area of interest.
- Script modular yang bisa dipakai ulang untuk lokasi lain.

**Full Story**

*Konteks*
Monitoring mangrove yang saya lakukan di pekerjaan sangat bergantung pada kunjungan lapangan dan pemetaan drone — akurat, tapi mahal dan tidak kontinu. Sementara itu, citra Sentinel-2 tersedia gratis setiap lima hari. Pertanyaannya: seberapa jauh data gratis itu bisa menggantikan sebagian beban monitoring? Saya ingin menjawabnya sendiri, bukan mengandalkan klaim di literatur.

*Peran*
Proyek ini sepenuhnya mandiri: saya merancang pertanyaan, menulis script, menguji, dan mengevaluasi hasilnya. Tidak ada tim, tidak ada tenggat eksternal — hanya kebutuhan untuk memahami alat yang akan makin relevan di pekerjaan.

*Proses*
Alurnya: mendefinisikan AOI di Sumut dan Kepri, memfilter koleksi Sentinel-2 per tahun, menerapkan cloud masking, membentuk komposit median tahunan, menghitung NDVI, lalu mengekstrak statistik per AOI. Untuk tren, saya membandingkan nilai antar tahun dan mengklasifikasikan piksel ke dalam tiga kategori. Bagian yang paling banyak menyita waktu justru bukan pemrograman, tapi debugging: API yang deprecated, koleksi yang tidak menyediakan band SCL, dan parameter `maxPixels` yang membuat export gagal tanpa pesan error jelas.

*Dampak*
Saya sekarang punya pipeline yang bisa dijalankan ulang untuk lokasi mana pun dengan mengganti AOI. Lebih dari itu, saya memahami batasannya: NDVI bagus untuk melihat perubahan relatif, tapi tidak bisa membedakan mangrove dari vegetasi lain tanpa data pendukung. Pemahaman itu yang membuat saya bisa menjelaskan hasil ke orang non-teknis tanpa melebih-lebihkan.

---

## B2. Klasifikasi Kerapatan Kanopi Mangrove dengan Random Forest

**Deskripsi singkat**
Melatih model Random Forest untuk mengklasifikasikan kerapatan kanopi mangrove dari kombinasi indeks spektral Sentinel-2 dan data latih lapangan. Eksperimen untuk menjawab pertanyaan: seberapa jauh machine learning bisa menggantikan interpretasi visual, dan di titik mana ia mulai gagal?

**TL;DR**
- Fitur spektral: NDVI, NDWI, SAVI, dan indeks mangrove.
- Data latih dari plot lapangan dan interpretasi citra drone.
- Klasifikasi tiga kelas: rapat, sedang, jarang.
- Validasi dengan confusion matrix dan overall accuracy.
- Analisis fitur mana yang paling berkontribusi.

**Full Story**

*Konteks*
Klasifikasi kerapatan kanopi secara manual konsisten secara lokal, tapi tidak skalabel dan rentan subjektivitas antar-analis. Machine learning menawarkan jalan keluar, tapi juga jebakan: model yang akurasinya tinggi di satu lokasi bisa gagal total di lokasi lain karena perbedaan kondisi atmosfer, substrat, atau komposisi spesies.

*Peran*
Mandiri, dari penyusunan data latih sampai evaluasi model. Saya sengaja mengerjakan sendiri agar bisa memahami setiap tahap, bukan hanya memanggil fungsi klasifikasi.

*Proses*
Data latih dikumpulkan dari dua sumber: plot lapangan dan interpretasi orthomosaic drone yang sudah punya resolusi lebih tinggi dari Sentinel-2. Fitur disusun dari beberapa indeks spektral untuk memberi model informasi yang cukup tanpa membuatnya overfit. Model dilatih di Google Earth Engine dan di Python, lalu dievaluasi dengan confusion matrix. Bagian yang paling instruktif adalah melihat kesalahan: kelas "sedang" paling sering tertukar, karena secara spektral ia memang berada di antara dua ekstrem.

*Dampak*
Saya punya metode yang bisa diulang dan, yang lebih penting, pemahaman tentang ketidakpastiannya. Untuk keperluan portofolio dan wawancara, proyek ini menunjukkan bahwa saya tidak hanya bisa menjalankan klasifikasi, tapi juga bisa menjelaskan kapan hasilnya layak dipercaya.

---

## B3. WebGIS Interaktif Sebaran Lokasi Rehabilitasi

**Deskripsi singkat**
Membangun WebGIS ringan untuk menampilkan sebaran lokasi rehabilitasi, status kegiatan, dan foto lapangan dalam satu peta interaktif. Dibuat untuk menjawab pertanyaan yang sederhana tapi sering sulit dijawab: "sebenarnya saya pernah bekerja di mana saja?"

**TL;DR**
- Peta interaktif berbasis Leaflet dan GeoJSON, tanpa backend.
- Layer lokasi, status kegiatan, dan foto lapangan.
- Popup informatif per lokasi dengan metadata singkat.
- Responsif dan bisa dibuka dari HP.
- Deploy statis, tanpa biaya server.

**Full Story**

*Konteks*
Setelah tiga tahun bekerja di berbagai kabupaten, data lokasi saya tersebar di banyak tempat: file shapefile proyek, catatan lapangan, folder foto, dan ingatan. Ketika harus menjelaskan cakupan kerja ke orang lain — atau ke diri sendiri saat menyusun portofolio — tidak ada satu sumber yang bisa dibuka. Ini masalah kecil yang kalau dibiarkan akan terus menghambat.

*Peran*
Mandiri, dari konsolidasi data sampai deploy. Saya juga yang memutuskan apa yang layak ditampilkan dan apa yang tidak, karena sebagian data lokasi bersifat sensitif atau milik instansi.

*Proses*
Langkah pertama adalah konsolidasi: mengumpulkan koordinat dan metadata dari berbagai sumber ke satu tabel. Setelah itu konversi ke GeoJSON dengan struktur yang konsisten. Antarmuka dibangun dengan Leaflet — dipilih karena ringan dan tidak butuh build tooling. Popup dibuat menampilkan informasi yang benar-benar berguna: nama lokasi, tahun, jenis kegiatan, dan satu foto. Yang terakhir, deploy sebagai situs statis.

*Dampak*
Saya punya satu halaman yang bisa dibuka kapan saja untuk menjelaskan cakupan kerja secara visual. Untuk portofolio, ini juga berfungsi sebagai bukti kemampuan teknis: bukan hanya bisa membuat peta di desktop GIS, tapi juga menyajikannya di web.

---

## B4. Uji Akurasi Orthomosaic UAV terhadap Ground Control Point

**Deskripsi singkat**
Menguji seberapa akurat orthomosaic yang dihasilkan Metashape dan Pix4D ketika divalidasi dengan GCP terukur. Studi kecil untuk menjawab pertanyaan yang sering muncul di lapangan tapi jarang dijawab dengan angka: seberapa percaya diri kita pada koordinat hasil drone?

**TL;DR**
- GCP terukur GNSS sebagai ground truth.
- Perbandingan RMSE horizontal dan vertikal antar software.
- Metashape vs Pix4D pada dataset yang sama.
- Pengaruh jumlah dan sebaran GCP terhadap akurasi.
- Rekomendasi setup misi untuk pekerjaan rehabilitasi.

**Full Story**

*Konteks*
Peta drone sering dipakai untuk menentukan batas area dan menghitung luas, tapi jarang ada yang bertanya berapa besar errornya. Padahal pada pekerjaan rehabilitasi, error satu meter di batas area bisa berarti selisih puluhan hektare ketika dikalikan dengan panjang garis pantai. Tanpa angka akurasi, klaim "peta ini akurat" hanyalah asumsi.

*Peran*
Mandiri. Saya merancang uji, mengakuisisi data, memproses di dua software, dan menghitung sendiri.

*Proses*
Saya menempatkan GCP dengan sebaran yang direncanakan, mengukur koordinatnya dengan GNSS, lalu memproses dataset yang sama di Metashape dan Pix4D dengan pengaturan yang setara. Hasilnya dibandingkan dengan koordinat GCP untuk menghitung RMSE horizontal dan vertikal. Saya juga menguji variasi jumlah GCP untuk melihat seberapa besar pengaruhnya — pertanyaan praktis, karena di lapangan jumlah GCP sering dibatasi waktu dan akses.

*Dampak*
Saya punya angka, bukan asumsi, tentang akurasi yang bisa diharapkan. Untuk pekerjaan, ini memungkinkan saya memberi rekomendasi setup misi yang proporsional: tidak berlebihan untuk pekerjaan kasar, tidak kurang untuk pekerjaan yang butuh presisi.

---

## B5. Estimasi Stok Karbon Biru Mangrove dari NDVI dan Persamaan Allometrik

**Deskripsi singkat**
Menghitung estimasi biomassa dan stok karbon mangrove dengan menggabungkan NDVI Sentinel-2 dan persamaan allometrik berbasis diameter. Latihan untuk masuk ke ranah blue carbon — area yang saya yakini akan makin penting dalam beberapa tahun ke depan.

**TL;DR**
- NDVI sebagai proksi biomassa di atas permukaan.
- Persamaan allometrik spesifik untuk genus mangrove.
- Konversi biomassa ke karbon dengan fraksi karbon.
- Estimasi ton karbon per hektare per lokasi.
- Analisis ketidakpastian sederhana dan batasannya.

**Full Story**

*Konteks*
Karbon biru adalah salah satu alasan mengapa mangrove mendapat perhatian besar — jauh lebih besar dari ekosistem daratan yang setara luasnya. Tapi kemampuan menghitungnya tidak otomatis dimiliki oleh orang yang bekerja di lapangan. Saya melihat celah ini sebagai peluang: orang yang bisa menanam mangrove sekaligus menghitung karbonnya jauh lebih langka daripada salah satunya saja.

*Peran*
Mandiri, sepenuhnya belajar sendiri. Saya membaca literatur, memilih persamaan, dan mengerjakan perhitungan dengan kesadaran penuh bahwa hasilnya adalah estimasi kasar, bukan angka yang siap diaudit.

*Proses*
Alurnya: mengumpulkan persamaan allometrik yang tersedia untuk genus mangrove yang umum di Indonesia, memilih yang paling sesuai dengan data yang bisa saya akses, lalu mengekstrak NDVI dari Sentinel-2 sebagai proksi tutupan. Biomassa dihitung, dikonversi ke karbon dengan fraksi karbon standar, lalu dinyatakan per hektare. Saya juga menghitung rentang ketidakpastian dari variasi persamaan yang dipakai.

*Dampak*
Saya punya kerangka awal yang bisa dikembangkan — dan pemahaman jujur tentang batasannya. Untuk arah karier, ini memberi saya bahasa yang sama dengan orang-orang yang bekerja di blue carbon, sehingga saya bisa masuk ke diskusi itu bukan sebagai pengamat.

---

# CATATAN VERIFIKASI

Sebelum dipublikasikan, cek ulang:

| Item | Sumber | Status |
|------|--------|--------|
| 831 ha penanaman Sumut | `script.js` exp1 duties | ✅ ada di data |
| 498 ha pemeliharaan Sumut | `script.js` exp1 duties | ✅ ada di data |
| 772 ha penanaman Kepri | `script.js` exp2 duties | ✅ ada di data |
| 1.000+ ha pemeliharaan Kepri | `script.js` exp2 duties | ✅ ada di data |
| 11 kab/kota | `script.js` stats | ✅ ada di data |
| Jumlah misi terbang UAV | — | ⚠️ belum ada angka pasti |
| Jumlah kelompok masyarakat didampingi | — | ⚠️ perlu dicek dari laporan |
| Tahun mulai proyek personal | — | ⚠️ sesuaikan dengan tanggal sebenarnya |

**Catatan konsistensi:** angka 334 ha (P0) + 636 ha (P1) di catatan CV sebelumnya tidak sama dengan 831 ha di `script.js`. Kemungkinan perbedaan antara target dan realisasi, atau cakupan wilayah yang berbeda. Perlu diputuskan angka mana yang dipakai agar tidak ada dua versi cerita.

---

# REKOMENDASI KURASI

Dari 10 proyek di atas, untuk halaman portofolio sebaiknya tampilkan **6** sebagai unggulan:

1. **A1** — Pemetaan UAV & Peta Arahan Tanam *(paling visual, paling mudah didemokan)*
2. **A3** — Survei Hidrologi & Tata Letak *(paling teknis, menunjukkan kedalaman)*
3. **A2** — Percepatan Rehabilitasi 772 ha *(angka paling kuat)*
4. **B1** — NDVI Time-Series GEE *(menunjukkan inisiatif dan skill modern)*
5. **B5** — Estimasi Karbon Biru *(diferensiasi untuk target internasional)*
6. **B3** — WebGIS Interaktif *(bisa didemokan langsung, bukti produk jadi)*

Empat sisanya tetap disimpan sebagai bahan wawancara dan bisa ditampilkan di halaman "arsip proyek" jika diperlukan.
