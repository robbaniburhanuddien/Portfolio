/**
 * ============================================================
 *  MANGROVE PORTFOLIO — DATA.JS
 *  Database terpusat UNTUK SEMUA informasi (identity, contact,
 *  education, certifications, stats, experience, projects, gallery).
 *  Sejak migrasi, halaman di-render dari sini (lihat script.js:
 *  buildExperience / buildEducation / buildProjects / buildGallery / buildStats).
 *  Editlah file ini untuk mengubah konten — index.html hanya wadah.
 * ============================================================
 */

var PORTFOLIO_DATA = {

  // ============================================================
  // IDENTITAS PRIBADI
  // ============================================================
  identity: {
    firstName:    "Burhanuddien",
    lastName:     "Robbani",
    fullName:     "Burhanuddien Robbani",
    degree:       "S.P.",
    displayName:  "Burhanuddien Robbani, S.P.",

    // Tone "terus belajar & siap berkolaborasi" (sesuai diskusi 2026-08)
    tagline_id:   "Praktisi Rehabilitasi Mangrove & Geospasial",
    tagline_en:   "Mangrove Rehabilitation & Geospatial Practitioner",

    bio_id: `Perkenalkan, saya Burhanuddien Robbani, S.P. — masih terus belajar dan ikut berkontribusi di bidang rehabilitasi mangrove, pemetaan geospasial, dan pemberdayaan masyarakat pesisir. Beberapa tahun ini saya berkesempatan belajar langsung lewat program restorasi mangrove nasional, antara lain bersama Badan Restorasi Gambut dan Mangrove (BRGM) dan Kementerian Kehutanan Republik Indonesia.`,

    bio2_id: `Dari survei lapangan, pengoperasian drone UAV, hingga analisis GIS dan duduk bersama masyarakat pesisir — saya mencoba menyambungkan ilmu dan aksi nyata, meski masih banyak yang harus dipelajari, demi ekosistem pesisir Indonesia yang lebih baik.`,

    bio_en: `Hello, I'm Burhanuddien Robbani, S.P. — still learning and contributing in mangrove rehabilitation, geospatial mapping, and coastal community empowerment. Over the past few years I've had the chance to learn hands-on through the national mangrove restoration program, including with the Peatland and Mangrove Restoration Agency (BRGM) and the Ministry of Forestry of the Republic of Indonesia.`,

    bio2_en: `From field surveys and UAV drone operations to GIS analysis and sitting with coastal communities — I try to connect knowledge with real action, though there's still much to learn, for the sake of Indonesia's coastal ecosystems.`,
  },

  // ============================================================
  // KONTAK
  // ============================================================
  contact: {
    email:      "burhanuddienrobbani@gmail.com",
    whatsapp:   "+62 812-2676-8040",
    linkedin:   "https://linkedin.com/in/robbanib",
    instagram:  "https://www.instagram.com/robbanib/",
    github:     "https://github.com/robbaniburhanuddien",
    location:   "Medan, Sumatera Utara",
    locationEN: "Medan, North Sumatra",
    mapLink:    "",
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
      year_start:   2018,
      year_end:     2023,
      major_id:     "Agronomi / Kehutanan",
      major_en:     "Agronomy / Forestry",
      gpa:          "",
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
      year:      "2023",
      number:    "",
    },
    {
      name_id:   "Pelatihan GIS & Remote Sensing Mangrove",
      name_en:   "GIS & Remote Sensing Training – Mangrove",
      issuer_id: "Kementerian Kehutanan Republik Indonesia",
      issuer_en: "Ministry of Forestry, Republic of Indonesia",
      year:      "2023",
      number:    "",
    },
    {
      name_id:   "Pelatihan Rehabilitasi Mangrove",
      name_en:   "Mangrove Rehabilitation Training",
      issuer_id: "BRGM – Badan Restorasi Gambut dan Mangrove",
      issuer_en: "BRGM – Peatland and Mangrove Restoration Agency",
      year:      "2022",
      number:    "",
    },
  ],

  // ============================================================
  // STATISTIK HERO (counter diambil dari sini)
  // ============================================================
  stats: {
    yearsExperience: 3,    // -> "3+ Tahun Pengalaman"
    projectsDone:    10,   // -> "10+ Jam Terbang UAV" (stat2)
    workRegions:     11,   // -> "11 Kab/Kota Pelaksanaan" (stat3)
  },

  // ============================================================
  // PENGALAMAN KERJA — urut dari terbaru ke terlama
  // field logo = file di images/logo/ (box putih di timeline)
  // ============================================================
  experience: [
    {
      id:         "exp1",
      period_id:  "Jan 2025 – Sekarang",
      period_en:  "Jan 2025 – Present",
      position_id:"Technical Mangrove Rehabilitation Facilitator",
      position_en:"Technical Mangrove Rehabilitation Facilitator",
      org:        "PPIU M4CR Sumatera Utara — Proyek M4CR (World Bank × Kementerian LHK)",
      location_id:"Medan, Sumatera Utara",
      location_en:"Medan, North Sumatra",
      type_id:    "Full-time",
      type_en:    "Full-time",
      logo:       "images/logo/m4cr-logo.png",
      duties_id: [
        "Monitoring & evaluasi (M&E) rehabilitasi mangrove di daerah target rehabilitasi",
        "Survei hidrologi untuk menentukan perlu/tidaknya intervensi hidrologi pada kegiatan rehabilitasi",
        "Penyusunan administrasi kegiatan swakelola rehabilitasi mangrove bersama Kelompok Masyarakat (Pokmas)",
        "Koordinasi dengan Pemerintah Daerah, Masyarakat Lokal, dan Pemangku Kawasan",
      ],
      duties_en: [
        "Monitoring & evaluation (M&E) of Mangrove Rehabilitation in target rehabilitation areas",
        "Hydrological surveys to determine whether hydrological intervention is needed in rehabilitation activities",
        "Preparation of self-managed (swakelola) mangrove rehabilitation administration with local community groups (Pokmas)",
        "Coordinating with Local Governments, Communities, and Stakeholders",
      ],
      tags: ["M&E", "Hidrologi", "Swakelola", "Community"],
    },
    {
      id:         "exp2",
      period_id:  "Jul 2023 – Des 2025",
      period_en:  "Jul 2023 – Dec 2025",
      position_id:"Staf Rehabilitasi Mangrove (Teknis dan GIS)",
      position_en:"Mangrove Rehabilitation Staff (Technical and GIS)",
      org:        "BRGM (Badan Restorasi Gambut dan Mangrove)",
      location_id:"Jakarta, Indonesia",
      location_en:"Jakarta, Indonesia",
      type_id:    "Full-time",
      type_en:    "Full-time",
      logo:       "images/logo/brgm-logo.png",
      duties_id: [
        "Melaksanakan Percepatan Rehabilitasi Mangrove di wilayah Provinsi Kepulauan Riau dan Kepulauan Bangka Belitung",
        "Pengolahan data spasial & operasional sebagai GIS Operator (ArcGIS, QGIS, GEE)",
        "Pendekatan pemberdayaan masyarakat & padat karya dalam rehabilitasi",
        "Koordinasi dengan Pemerintah Daerah, Komunitas Lokal, dan Pemangku Kawasan",
      ],
      duties_en: [
        "Implementing Accelerated Mangrove Rehabilitation across Riau Islands and Bangka Belitung Islands Provinces",
        "Spatial data processing & operations as GIS Operator (ArcGIS, QGIS, GEE)",
        "Community empowerment & labor-intensive approach in rehabilitation",
        "Coordinating with Local Governments, Communities, and Stakeholders",
      ],
      tags: ["Rehabilitasi", "GIS", "Pemberdayaan"],
    },
    {
      id:         "exp3",
      period_id:  "Jan 2021 – Mar 2021",
      period_en:  "Jan 2021 – Mar 2021",
      position_id:"Intern Research Analyst",
      position_en:"Research Analyst Intern",
      org:        "Balai Besar Karantina Pertanian Tanjung Priok — Kementerian Pertanian RI",
      location_id:"Jakarta, Indonesia",
      location_en:"Jakarta, Indonesia",
      type_id:    "Magang",
      type_en:    "Internship",
      logo:       "images/logo/kementan-logo.png",
      duties_id: [
        "Deteksi dan identifikasi biomolekuler bakteri OPTK pada benih umbi kentang asal Skotlandia di Balai Besar Karantina Pertanian Tanjung Priok, Jakarta.",
        "Berhasil melakukan deteksi dan identifikasi biomolekuler menggunakan PCR dan metode lain pada komoditas karantina hama & penyakit impor-ekspor (kentang, anggrek, dll).",
        "Berpartisipasi dalam seluruh agenda balai seperti inspeksi instalasi karantina tumbuhan di pelabuhan dan gudang penyimpanan.",
      ],
      duties_en: [
        "Biomolecular Detection and Identification of Bacterial OPTK on Potato Tuber Seeds from Scotland at Balai Besar Karantina Pertanian Tanjung Priok, Jakarta.",
        "Succeeded in carrying out biomolecular detection and identification using PCR and other methods on import/export pest and disease commodities (potatoes, orchids, etc.).",
        "Participated in every Balai's agenda like inspection of plant quarantine installations at ports and storage warehouses.",
      ],
      tags: ["Biomolekuler", "PCR", "Karantina"],
    },
  ],

  // ============================================================
  // PROYEK UNGGULAN
  // ============================================================
  projects: [
    {
      id: "p1",
      category: "rehabilitasi",
      image: "images/IMG_9403~photo.JPG",
      title_id: "Penanaman Mangrove Skala Besar",
      title_en: "Large-Scale Mangrove Planting",
      desc_id:  "Program penanaman dan pemulihan ekosistem mangrove di wilayah pesisir target nasional dengan pendekatan berbasis ekologi.",
      desc_en:  "Mangrove planting and ecosystem restoration program in national target coastal areas using an ecology-based approach.",
      tags_id: ["Rehabilitasi", "BRGM"],
      tags_en: ["Rehabilitation", "BRGM"],
      stats: [
        { num: "500+", label_id: "ha Area", label_en: "ha Area" },
        { num: "10K+", label_id: "Bibit",   label_en: "Seedlings" },
      ],
    },
    {
      id: "p2",
      category: "gis",
      image: "images/DJI_0381.JPG",
      title_id: "Pemetaan Distribusi Mangrove Nasional",
      title_en: "National Mangrove Distribution Mapping",
      desc_id:  "Pemetaan dan analisis perubahan tutupan mangrove menggunakan citra satelit multi-temporal untuk mendukung kebijakan restorasi.",
      desc_en:  "Mapping and analysis of mangrove cover changes using multi-temporal satellite imagery to support restoration policy.",
      tags_id: ["GIS", "Remote Sensing"],
      tags_en: ["GIS", "Remote Sensing"],
      stats: [
        { num: "5+", label_id: "Provinsi",   label_en: "Provinces" },
        { num: "3",  label_id: "Tahun Data", label_en: "Years of Data" },
      ],
    },
    {
      id: "p3",
      category: "uav",
      image: "images/DJI_0379.JPG",
      title_id: "Survei Aerial Kawasan Mangrove",
      title_en: "Aerial Survey of Mangrove Areas",
      desc_id:  "Pelaksanaan survei menggunakan drone untuk menghasilkan orthophoto dan DSM beresolusi tinggi sebagai basis peta kerja lapangan.",
      desc_en:  "Drone-based surveys to produce high-resolution orthophotos and DSMs as the basis for field work maps.",
      tags_id: ["UAV", "Fotogrametri"],
      tags_en: ["UAV", "Photogrammetry"],
      stats: [
        { num: "20+", label_id: "Misi Terbang", label_en: "Flight Missions" },
        { num: "2cm", label_id: "Resolusi GSD", label_en: "GSD Resolution" },
      ],
    },
    {
      id: "p4",
      category: "community",
      image: "images/KT Sejahtera_23112024_105851.jpg",
      title_id: "Pemberdayaan Masyarakat Pesisir",
      title_en: "Coastal Community Empowerment",
      desc_id:  "Program pendampingan dan pelatihan masyarakat nelayan dan petani pesisir dalam pengelolaan mangrove berbasis komunitas berkelanjutan.",
      desc_en:  "Assistance and training program for fishing and farming communities in sustainable community-based mangrove management.",
      tags_id: ["Komunitas", "Pemberdayaan"],
      tags_en: ["Community", "Empowerment"],
      stats: [
        { num: "500+", label_id: "Peserta", label_en: "Participants" },
        { num: "15+", label_id: "Desa",    label_en: "Villages" },
      ],
    },
    {
      id: "p5",
      category: "gis rehabilitasi",
      image: "images/20260416_034518537_iOS.jpg",
      title_id: "Sistem Monitoring Mangrove Terpadu",
      title_en: "Integrated Mangrove Monitoring System",
      desc_id:  "Pengembangan sistem pemantauan kondisi mangrove secara berkala menggunakan integrasi data lapangan, GIS, dan penginderaan jauh.",
      desc_en:  "Development of a periodic mangrove condition monitoring system integrating field data, GIS, and remote sensing.",
      tags_id: ["Monitoring", "GIS"],
      tags_en: ["Monitoring", "GIS"],
      stats: [
        { num: "12",         label_id: "Plot Monitoring", label_en: "Monitoring Plots" },
        { num: "Semi-annual", label_id: "Siklus Data",    label_en: "Data Cycle" },
      ],
    },
    {
      id: "p6",
      category: "uav gis",
      image: "images/WhatsApp Image 2024-06-24 at 12.55.17 AM.jpeg",
      title_id: "Validasi Lapangan via Drone & GIS",
      title_en: "Field Validation via Drone & GIS",
      desc_id:  "Integrasi data drone dan analisis GIS untuk validasi tutupan mangrove dan identifikasi area prioritas restorasi secara akurat.",
      desc_en:  "Integration of drone data and GIS analysis for accurate validation of mangrove cover and identification of priority restoration areas.",
      tags_id: ["UAV", "GIS", "BRGM"],
      tags_en: ["UAV", "GIS", "BRGM"],
      stats: [
        { num: "95%", label_id: "Akurasi", label_en: "Accuracy" },
        { num: "3",   label_id: "Kawasan", label_en: "Regions" },
      ],
    },
  ],

  // ============================================================
  // GALERI FOTO (migrasi dari GALLERY_FILES di script.js)
  // cat: plant/survey/gis/community/aerial/doc
  // ============================================================
  gallery: [
    { file: "IMG_9403~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "IMG_9410~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "IMG_9530~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "IMG_9536~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "IMG_9537~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "IMG_9543~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "IMG_9622~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "IMG_9436~photo.JPG", cat: "plant", id: "Penanaman Mangrove", en: "Mangrove Planting" },
    { file: "DJI_0379.JPG", cat: "survey", id: "Survei UAV", en: "UAV Survey" },
    { file: "DJI_0381.JPG", cat: "survey", id: "Survei UAV", en: "UAV Survey" },
    { file: "DJI_0382.JPG", cat: "survey", id: "Survei UAV", en: "UAV Survey" },
    { file: "GOPR0278.JPG", cat: "survey", id: "Survei UAV", en: "UAV Survey" },
    { file: "GOPR0321.JPG", cat: "survey", id: "Survei UAV", en: "UAV Survey" },
    { file: "GOPR0366.JPG", cat: "survey", id: "Survei UAV", en: "UAV Survey" },
    { file: "IMG_9401~photo.JPG", cat: "gis", id: "Pemetaan GIS", en: "GIS Mapping" },
    { file: "IMG_9402~photo.JPG", cat: "gis", id: "Pemetaan GIS", en: "GIS Mapping" },
    { file: "IMG_9404~photo.JPG", cat: "gis", id: "Pemetaan GIS", en: "GIS Mapping" },
    { file: "IMG_9405~photo.JPG", cat: "gis", id: "Pemetaan GIS", en: "GIS Mapping" },
    { file: "IMG_9406~photo.JPG", cat: "gis", id: "Pemetaan GIS", en: "GIS Mapping" },
    { file: "IMG_9518~photo.JPG", cat: "gis", id: "Pemetaan GIS", en: "GIS Mapping" },
    { file: "KT Sejahtera_23112024_105851.jpg", cat: "community", id: "Kolaborasi Komunitas", en: "Community Collaboration" },
    { file: "KT Sejahtera_23112024_105855.jpg", cat: "community", id: "Kolaborasi Komunitas", en: "Community Collaboration" },
    { file: "KT Sejahtera_23112024_105859.jpg", cat: "community", id: "Kolaborasi Komunitas", en: "Community Collaboration" },
    { file: "KT Sejahtera_23112024_113852.jpg", cat: "community", id: "Kolaborasi Komunitas", en: "Community Collaboration" },
    { file: "KT Sejahtera_23112024_113900.jpg", cat: "community", id: "Kolaborasi Komunitas", en: "Community Collaboration" },
    { file: "DJI_0382.JPG", cat: "aerial", id: "Tampak Udara", en: "Aerial View" },
    { file: "IMG_9401~photo.JPG", cat: "aerial", id: "Tampak Udara", en: "Aerial View" },
    { file: "20260416_034518537_iOS.jpg", cat: "doc", id: "Dokumentasi Lapangan", en: "Field Documentation" },
  ],

  // ============================================================
  // CV / RESUME
  // ============================================================
  cv: {
    file_id: "cv.pdf",
    file_en: "cv-en.pdf",
  },

};

// ============================================================
// AUTO-INJECT KONTAK KE HALAMAN (email, whatsapp, linkedin, location)
// Section lain (experience/education/projects/gallery/stats) di-render
// oleh script.js (buildExperience/buildEducation/buildProjects/buildGallery/buildStats).
// ============================================================
function injectData() {
  const nameEls = document.querySelectorAll('[data-db="fullName"]');
  nameEls.forEach(el => { el.textContent = PORTFOLIO_DATA.identity.fullName; });

  const degreeEls = document.querySelectorAll('[data-db="degree"]');
  degreeEls.forEach(el => { el.textContent = PORTFOLIO_DATA.identity.degree; });

  const emailEls = document.querySelectorAll('[data-db="email"]');
  emailEls.forEach(el => {
    if (el.tagName === 'A') { el.href = 'mailto:' + PORTFOLIO_DATA.contact.email; el.textContent = PORTFOLIO_DATA.contact.email; }
    else { el.textContent = PORTFOLIO_DATA.contact.email; }
  });

  const waEls = document.querySelectorAll('[data-db="whatsapp"]');
  waEls.forEach(el => {
    const num = PORTFOLIO_DATA.contact.whatsapp;
    if (el.tagName === 'A') { const cleaned = num.replace(/\D/g, ''); el.href = 'https://wa.me/' + cleaned; el.textContent = num; }
    else { el.textContent = num; }
  });

  const liEls = document.querySelectorAll('[data-db="linkedin"]');
  liEls.forEach(el => {
    if (el.tagName === 'A') { el.href = PORTFOLIO_DATA.contact.linkedin; el.textContent = PORTFOLIO_DATA.contact.linkedin.replace('https://', ''); }
  });

  const locEls = document.querySelectorAll('[data-db="location"]');
  locEls.forEach(el => { el.textContent = PORTFOLIO_DATA.contact.location; });
}

document.addEventListener('DOMContentLoaded', injectData);

// Pastikan tersedia secara global lintas <script> (cross-browser safety)
if (typeof window !== 'undefined') { window.PORTFOLIO_DATA = PORTFOLIO_DATA; }

console.log('📋 Portfolio Data loaded:', PORTFOLIO_DATA.identity.displayName);
