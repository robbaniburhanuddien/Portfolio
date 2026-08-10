/**
 * ============================================================
 *  MANGROVE PORTFOLIO — DATA.JS
 *  Database terpusat untuk semua informasi pribadi.
 *  Cukup edit file ini saja, tidak perlu ubah index.html!
 * ============================================================
 */

const PORTFOLIO_DATA = {

  // ============================================================
  // IDENTITAS PRIBADI
  // ============================================================
  identity: {
    firstName:    "Burhanuddien",
    lastName:     "Robbani",
    fullName:     "Burhanuddien Robbani",
    degree:       "S.P.",                          // Sarjana Pertanian
    displayName:  "Burhanuddien Robbani, S.P.",

    tagline_id:   "Mangrove Conservationist & Geospatial Specialist",
    tagline_en:   "Mangrove Conservationist & Geospatial Specialist",

    bio_id: `Saya adalah Burhanuddien Robbani, S.P., seorang profesional di bidang
rehabilitasi ekosistem mangrove, pemetaan geospasial, dan pemberdayaan masyarakat pesisir.
Selama 3 tahun terakhir, saya berkontribusi aktif dalam program restorasi mangrove nasional
di bawah naungan Badan Restorasi Gambut dan Mangrove (BRGM) dan Kementerian Kehutanan
Republik Indonesia.`,

    bio2_id: `Dengan keahlian multidisiplin — survei lapangan, pengoperasian drone UAV,
analisis GIS, hingga koordinasi komunitas lokal — saya berkomitmen untuk menjembatani
ilmu pengetahuan dengan aksi nyata demi kelestarian ekosistem pesisir Indonesia.`,

    bio_en: `I am Burhanuddien Robbani, S.P., a professional in mangrove ecosystem
rehabilitation, geospatial mapping, and coastal community empowerment. Over the past
3 years, I have actively contributed to the national mangrove restoration program under
the Peatland and Mangrove Restoration Agency (BRGM) and the Ministry of Forestry of the
Republic of Indonesia.`,

    bio2_en: `With multidisciplinary expertise — field surveys, UAV drone operations,
GIS analysis, and local community coordination — I am committed to bridging science and
real-world action for the sustainability of Indonesia's coastal ecosystems.`,
  },

  // ============================================================
  // KONTAK — Update di sini!
  // ============================================================
  contact: {
    email:      "burhanuddienrobbani@gmail.com",   // ✅ Sudah diisi
    whatsapp:   "+62 812-2676-8040",              // ✅ Sudah diisi
    linkedin:   "https://linkedin.com/in/robbanib", // ✅ Sudah diisi
    instagram:  "",                                 // 📌 Opsional
    github:     "",                                 // 📌 Opsional
    location:   "Medan, Sumatera Utara",
    locationEN: "Medan, North Sumatra",
    mapLink:    "",                                 // 📌 Opsional: Google Maps link
  },

  // ============================================================
  // PENDIDIKAN
  // ============================================================
  education: [
    {
      degree_id:    "Sarjana Pertanian (S.P.)",
      degree_en:    "Bachelor of Agriculture (S.P.)",
      institution:  "Universitas Jenderal Soedirman (UNSOED)",
      city:         "Purwokerto",
      year_start:   2018,          // 📌 Sesuaikan jika perlu
      year_end:     2022,          // 📌 Sesuaikan jika perlu
      major_id:     "Agronomi / Kehutanan",  // 📌 Sesuaikan prodi asli
      major_en:     "Agronomy / Forestry",
      gpa:          "",            // 📌 Opsional
    }
  ],

  // ============================================================
  // SERTIFIKASI & PELATIHAN
  // ============================================================
  certifications: [
    {
      name_id:   "Sertifikat Pilot RPAS / UAV",
      name_en:   "RPAS / UAV Pilot Certificate",
      issuer_id: "Lembaga Sertifikasi Profesi Kedirgantaraan",
      issuer_en: "Aviation Professional Certification Body",
      year:      "2023",          // 📌 Sesuaikan tahun
      number:    "",              // 📌 Nomor sertifikat (opsional)
    },
    {
      name_id:   "Pelatihan GIS & Remote Sensing Mangrove",
      name_en:   "GIS & Remote Sensing Training – Mangrove",
      issuer_id: "Kementerian Kehutanan Republik Indonesia",
      issuer_en: "Ministry of Forestry, Republic of Indonesia",
      year:      "2023",          // 📌 Sesuaikan
      number:    "",
    },
    {
      name_id:   "Pelatihan Rehabilitasi Mangrove",
      name_en:   "Mangrove Rehabilitation Training",
      issuer_id: "BRGM – Badan Restorasi Gambut dan Mangrove",
      issuer_en: "BRGM – Peatland and Mangrove Restoration Agency",
      year:      "2022",          // 📌 Sesuaikan
      number:    "",
    },
  ],

  // ============================================================
  // STATISTIK HERO
  // ============================================================
  stats: {
    yearsExperience: 3,
    projectsDone:    15,           // 📌 Sesuaikan jumlah proyek nyata
    workRegions:     8,            // 📌 Sesuaikan jumlah wilayah
  },

  // ============================================================
  // PENGALAMAN KERJA
  // Timeline karir — urut dari terbaru ke terlama
  // ============================================================
  experience: [
    {
      id:         "exp1",
      period_id:  "2024 – Sekarang",
      period_en:  "2024 – Present",
      position_id:"Field Coordinator – Mangrove Rehabilitation",
      position_en:"Field Coordinator – Mangrove Rehabilitation",
      org:        "BRGM (Badan Restorasi Gambut dan Mangrove)",
      location_id:"Pesisir Sumatera Utara & Riau",
      location_en:"North Sumatra & Riau Coast",
      type:       "Full-time",
      duties_id: [
        "Koordinasi kegiatan penanaman dan pemeliharaan mangrove di wilayah target restorasi nasional",
        "Pelaksanaan monitoring dan evaluasi kondisi ekosistem mangrove menggunakan metode transek",
        "Pengoperasian drone UAV untuk pemetaan dan survei aerial kawasan mangrove",
        "Koordinasi dengan pemerintah daerah, komunitas lokal, dan pemangku kepentingan",
      ],
      duties_en: [
        "Coordinating mangrove planting and maintenance activities in national restoration target areas",
        "Monitoring and evaluating mangrove ecosystem conditions using transect methods",
        "Operating UAV drones for aerial mapping and surveying of mangrove areas",
        "Coordinating with local governments, communities, and stakeholders",
      ],
      tags: ["Rehabilitasi", "UAV", "GIS", "Community"],
    },
    {
      id:         "exp2",
      period_id:  "2023 – 2024",
      period_en:  "2023 – 2024",
      position_id:"GIS & Remote Sensing Specialist",
      position_en:"GIS & Remote Sensing Specialist",
      org:        "Kementerian Kehutanan Republik Indonesia",
      location_id:"Jakarta & Medan",
      location_en:"Jakarta & Medan",
      type:       "Full-time",
      duties_id: [
        "Analisis tutupan lahan dan perubahan ekosistem mangrove menggunakan citra satelit (Sentinel-2, Landsat)",
        "Pembuatan peta tematik distribusi dan kondisi mangrove skala nasional",
        "Pengolahan data penginderaan jauh menggunakan ArcGIS, QGIS, dan Google Earth Engine",
        "Penyusunan laporan teknis geospasial sebagai dasar kebijakan restorasi",
      ],
      duties_en: [
        "Land cover analysis and mangrove ecosystem change monitoring using satellite imagery (Sentinel-2, Landsat)",
        "Production of thematic maps of national mangrove distribution and condition",
        "Remote sensing data processing using ArcGIS, QGIS, and Google Earth Engine",
        "Preparation of geospatial technical reports as a basis for restoration policy",
      ],
      tags: ["ArcGIS", "QGIS", "Remote Sensing", "Google Earth Engine"],
    },
    {
      id:         "exp3",
      period_id:  "2022 – 2023",
      period_en:  "2022 – 2023",
      position_id:"Community Engagement Officer",
      position_en:"Community Engagement Officer",
      org:        "BRGM – Program Pemberdayaan Masyarakat Pesisir",
      location_id:"Pesisir Sumatera (Sumut, Riau, Sumsel)",
      location_en:"Sumatran Coast (North Sumatra, Riau, South Sumatra)",
      type:       "Full-time",
      duties_id: [
        "Fasilitasi pelatihan dan pendampingan masyarakat pesisir dalam pengelolaan mangrove berbasis komunitas",
        "Pelaksanaan sosialisasi program restorasi mangrove nasional kepada kelompok masyarakat lokal",
        "Koordinasi dan pembentukan kelompok tani/nelayan peduli mangrove di wilayah target",
        "Dokumentasi dan pelaporan kegiatan pemberdayaan masyarakat kepada pemangku kepentingan",
      ],
      duties_en: [
        "Facilitation of training and assistance for coastal communities in community-based mangrove management",
        "Socialization of the national mangrove restoration program to local community groups",
        "Coordination and formation of mangrove-aware farmer/fisherman groups in target areas",
        "Documentation and reporting of community empowerment activities to stakeholders",
      ],
      tags: ["Pemberdayaan", "Pelatihan", "Sosialisasi", "Laporan"],
    },
  ],

  // ============================================================
  // PROYEK UNGGULAN
  // ============================================================
  projects: [
    {
      id:       "p1",
      category: "rehabilitasi",
      emoji:    "🌱",
      tags:     ["Rehabilitasi", "BRGM"],
      title_id: "Penanaman Mangrove Skala Besar",
      title_en: "Large-Scale Mangrove Planting",
      desc_id:  "Program penanaman dan pemulihan ekosistem mangrove di wilayah pesisir target nasional dengan pendekatan berbasis ekologi.",
      desc_en:  "Mangrove planting and ecosystem restoration program in national target coastal areas using an ecology-based approach.",
      stats:    [{ num: "500+", label_id: "ha Area", label_en: "ha Area" }, { num: "10K+", label_id: "Bibit", label_en: "Seedlings" }],
      image:    "images/IMG_9403~photo.JPG",
    },
    {
      id:       "p2",
      category: "gis",
      emoji:    "🗺️",
      tags:     ["GIS", "Remote Sensing"],
      title_id: "Pemetaan Distribusi Mangrove Nasional",
      title_en: "National Mangrove Distribution Mapping",
      desc_id:  "Pemetaan dan analisis perubahan tutupan mangrove menggunakan citra satelit multi-temporal untuk mendukung kebijakan restorasi.",
      desc_en:  "Mapping and analysis of mangrove cover changes using multi-temporal satellite imagery to support restoration policy.",
      stats:    [{ num: "5+", label_id: "Provinsi", label_en: "Provinces" }, { num: "3", label_id: "Tahun Data", label_en: "Years of Data" }],
      image:    "images/DJI_0381.JPG",
    },
    {
      id:       "p3",
      category: "uav",
      emoji:    "🛸",
      tags:     ["UAV", "Fotogrametri"],
      title_id: "Survei Aerial Kawasan Mangrove",
      title_en: "Aerial Survey of Mangrove Areas",
      desc_id:  "Pelaksanaan survei menggunakan drone untuk menghasilkan orthophoto dan DSM beresolusi tinggi sebagai basis peta kerja lapangan.",
      desc_en:  "Drone-based surveys to produce high-resolution orthophotos and DSMs as the basis for field work maps.",
      stats:    [{ num: "20+", label_id: "Misi Terbang", label_en: "Flight Missions" }, { num: "2cm", label_id: "Resolusi GSD", label_en: "GSD Resolution" }],
      image:    "images/DJI_0379.JPG",
    },
    {
      id:       "p4",
      category: "community",
      emoji:    "👥",
      tags:     ["Komunitas", "Pemberdayaan"],
      title_id: "Pemberdayaan Masyarakat Pesisir",
      title_en: "Coastal Community Empowerment",
      desc_id:  "Program pendampingan dan pelatihan masyarakat nelayan dan petani pesisir dalam pengelolaan mangrove berbasis komunitas berkelanjutan.",
      desc_en:  "Assistance and training program for fishing and farming communities in sustainable community-based mangrove management.",
      stats:    [{ num: "500+", label_id: "Peserta", label_en: "Participants" }, { num: "15+", label_id: "Desa", label_en: "Villages" }],
      image:    "images/KT Sejahtera_23112024_105851.jpg",
    },
    {
      id:       "p5",
      category: "gis rehabilitasi",
      emoji:    "📊",
      tags:     ["Monitoring", "GIS"],
      title_id: "Sistem Monitoring Mangrove Terpadu",
      title_en: "Integrated Mangrove Monitoring System",
      desc_id:  "Pengembangan sistem pemantauan kondisi mangrove secara berkala menggunakan integrasi data lapangan, GIS, dan penginderaan jauh.",
      desc_en:  "Development of a periodic mangrove condition monitoring system integrating field data, GIS, and remote sensing.",
      stats:    [{ num: "12", label_id: "Plot Monitoring", label_en: "Monitoring Plots" }, { num: "Semi-annual", label_id: "Siklus Data", label_en: "Data Cycle" }],
      image:    "images/20260416_034518537_iOS.jpg",
    },
    {
      id:       "uav gis",
      emoji:    "🌍",
      tags:     ["UAV", "GIS", "BRGM"],
      title_id: "Validasi Lapangan via Drone & GIS",
      title_en: "Field Validation via Drone & GIS",
      desc_id:  "Integrasi data drone dan analisis GIS untuk validasi tutupan mangrove dan identifikasi area prioritas restorasi secara akurat.",
      desc_en:  "Integration of drone data and GIS analysis for accurate validation of mangrove cover and identification of priority restoration areas.",
      stats:    [{ num: "95%", label_id: "Akurasi", label_en: "Accuracy" }, { num: "3", label_id: "Kawasan", label_en: "Regions" }],
      image:    "images/WhatsApp Image 2024-06-24 at 12.55.17 AM.jpeg",
    },
  ],

  // ============================================================
  // GALERI FOTO
  // ============================================================
  gallery: [
    { label_id: "Penanaman Mangrove", label_en: "Mangrove Planting",      size: "normal", src: "images/IMG_9403~photo.JPG" },
    { label_id: "Survei UAV / Drone", label_en: "UAV / Drone Survey",     size: "large",  src: "images/DJI_0379.JPG" },
    { label_id: "Pemetaan GIS",       label_en: "GIS Mapping",            size: "normal", src: "images/20260416_034518537_iOS.jpg" },
    { label_id: "Community Meeting",  label_en: "Community Engagement",   size: "normal", src: "images/20260416_033920743_iOS.jpg" },
    { label_id: "Foto Aerial",        label_en: "Aerial View",            size: "large",  src: "images/DJI_0381.JPG" },
    { label_id: "Survei Transek",     label_en: "Transect Survey",        size: "normal", src: "images/20230824_172149.jpg" },
  ],

  // ============================================================
  // CV / RESUME
  // ============================================================
  cv: {
    file_id: "cv.pdf",    // 📌 Simpan CV di folder yang sama dengan index.html
    file_en: "cv-en.pdf", // 📌 Opsional: CV versi Inggris
  },

};

// ============================================================
// AUTO-INJECT DATA KE HALAMAN
// (Fungsi ini dipanggil otomatis setelah DOM siap)
// ============================================================
function injectData() {
  // Nama & identitas
  const nameEls = document.querySelectorAll('[data-db="fullName"]');
  nameEls.forEach(el => { el.textContent = PORTFOLIO_DATA.identity.fullName; });

  const degreeEls = document.querySelectorAll('[data-db="degree"]');
  degreeEls.forEach(el => { el.textContent = PORTFOLIO_DATA.identity.degree; });

  // Email — semua elemen dengan data-db="email"
  const emailEls = document.querySelectorAll('[data-db="email"]');
  emailEls.forEach(el => {
    if (el.tagName === 'A') {
      el.href = 'mailto:' + PORTFOLIO_DATA.contact.email;
      el.textContent = PORTFOLIO_DATA.contact.email;
    } else {
      el.textContent = PORTFOLIO_DATA.contact.email;
    }
  });

  // WhatsApp
  const waEls = document.querySelectorAll('[data-db="whatsapp"]');
  waEls.forEach(el => {
    const num = PORTFOLIO_DATA.contact.whatsapp;
    if (el.tagName === 'A') {
      const cleaned = num.replace(/\D/g, '');
      el.href = 'https://wa.me/' + cleaned;
      el.textContent = num;
    } else {
      el.textContent = num;
    }
  });

  // LinkedIn
  const liEls = document.querySelectorAll('[data-db="linkedin"]');
  liEls.forEach(el => {
    if (el.tagName === 'A') {
      el.href = PORTFOLIO_DATA.contact.linkedin;
      el.textContent = PORTFOLIO_DATA.contact.linkedin.replace('https://', '');
    }
  });

  // Lokasi
  const locEls = document.querySelectorAll('[data-db="location"]');
  locEls.forEach(el => { el.textContent = PORTFOLIO_DATA.contact.location; });

  // Universitas
  const uniEls = document.querySelectorAll('[data-db="university"]');
  uniEls.forEach(el => { el.textContent = PORTFOLIO_DATA.education[0].institution + ', ' + PORTFOLIO_DATA.education[0].city; });

  // Tahun universitas
  const uniYearEls = document.querySelectorAll('[data-db="uniYear"]');
  uniYearEls.forEach(el => {
    const edu = PORTFOLIO_DATA.education[0];
    el.textContent = edu.year_start + ' – ' + edu.year_end;
  });

  // Page title & meta
  document.title = PORTFOLIO_DATA.identity.displayName + ' | Mangrove Specialist';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = `Portfolio profesional ${PORTFOLIO_DATA.identity.displayName} — spesialis rehabilitasi mangrove, GIS, UAV Pilot, dan community engagement bersama BRGM dan Kementerian Kehutanan RI.`;
}

document.addEventListener('DOMContentLoaded', injectData);

console.log('📋 Portfolio Data loaded:', PORTFOLIO_DATA.identity.displayName);
