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

  // Let's Connect social links (ala Brittany — icon SVG, reuse About icons)
  const lc = document.getElementById('lcSocials');
  if (lc) {
    const ICONS = {
      linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z"/></svg>',
      instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
      github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
      email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
    };
    const LINKS = [
      { key:'linkedin', href: PORTFOLIO_DATA.contact.linkedin, title:'LinkedIn' },
      { key:'instagram', href: PORTFOLIO_DATA.contact.instagram, title:'Instagram' },
      { key:'github', href: PORTFOLIO_DATA.contact.github, title:'GitHub' },
      { key:'email', href: 'mailto:' + PORTFOLIO_DATA.contact.email, title:'Email' },
    ];
    lc.innerHTML = LINKS.map(l =>
      `<a href="${l.href}" target="_blank" rel="noopener" title="${l.title}" aria-label="${l.title}">${ICONS[l.key]}</a>`
    ).join('');
  }
}

document.addEventListener('DOMContentLoaded', injectData);

// Pastikan tersedia secara global lintas <script> (cross-browser safety)
if (typeof window !== 'undefined') { window.PORTFOLIO_DATA = PORTFOLIO_DATA; }

console.log('📋 Portfolio Data loaded:', PORTFOLIO_DATA.identity.displayName);

/* =========================================
   MANGROVE PORTFOLIO — SCRIPT.JS
   Features: i18n, animations, filters,
             counter, lightbox, particles
   ========================================= */

'use strict';

// =========================================
// TRANSLATIONS (Bilingual ID/EN)
// =========================================
const i18n = {
  id: {
    // Nav
    "nav.about":       "Tentang",
    "nav.experience":  "Pengalaman",
    "nav.skills":      "Keahlian",
    "nav.projects":    "Proyek",
    "nav.gallery":     "Galeri",
    "nav.video":       "Video",
    "nav.contact":     "Kontak",

    // Hero (minimalis ala Brittany — rata kiri)
    "hero.intro":      "Halo, nama saya",
    "hero.role":       "Saya memulihkan ekosistem mangrove Indonesia dengan sains geospasial, drone, dan aksi komunitas.",
    "hero.desc":       "3 tahun belajar dan berkontribusi dalam rehabilitasi mangrove bersama BRGM dan M4CR–Kementerian Kehutanan RI. Masih terus mengeksplorasi hal baru — dan siap berkolaborasi untuk tantangan yang lebih besar.",
    "hero.cta1":       "Lihat Pengalaman",
    "hero.cta2":       "Hubungi Saya",
    "hero.scroll":     "Scroll ke bawah",

    // About
    "about.tag":       "Tentang Saya",
    "about.title":     "Siapa Saya?",
    "about.role":      "Praktisi Rehabilitasi Mangrove & Geospasial",
    "about.bio":       "Perkenalkan, saya Burhanuddien Robbani, S.P. — masih terus belajar dan ikut berkontribusi di bidang rehabilitasi mangrove, pemetaan geospasial, dan pemberdayaan masyarakat pesisir. Beberapa tahun ini saya berkesempatan belajar langsung lewat program restorasi mangrove nasional, antara lain bersama Badan Restorasi Gambut dan Mangrove (BRGM) dan M4CR-Kementerian Kehutanan Republik Indonesia.",
    "about.bio2":      "Dari survei lapangan, pengoperasian drone UAV, hingga analisis GIS dan duduk bersama masyarakat pesisir — saya mencoba menyambungkan ilmu dan aksi nyata, meski masih banyak yang harus dipelajari, demi ekosistem pesisir Indonesia yang lebih baik.",
    "about.org":       "Lembaga",
    "about.location":  "Lokasi",
    "about.edu":       "Pendidikan",
    "about.edu_val":   "S1 Pertanian (S.P.)",
    "about.email_label":"Email",
    "about.cv":        "Unduh CV",

    // Experience
    "exp.tag":         "Perjalanan Karir",
    "exp.title":       "Di Mana Saya Bekerja",
    "exp.desc":        "Perjalanan Karir yang luar biasa ikut berperan dalam Rehabilitasi Mangrove di Indonesia",
    "exp.full":        "Full-time",
    "exp1.pos":        "Technical Mangrove Rehabilitation Facilitator",
    "exp1.loc":        "Medan, Sumatera Utara",
    "exp1.d1":         "Monitoring & evaluasi (M&E) Rehabilitasi Mangrove di daerah target rehabilitasi",
    "exp1.d2":         "Survei hidrologi untuk menentukan perlu/tidaknya intervensi hidrologi pada kegiatan rehabilitasi",
    "exp1.d3":         "Penyusunan administrasi kegiatan swakelola rehabilitasi mangrove bersama Kelompok Masyarakat (Pokmas)",
    "exp1.d4":         "Koordinasi dengan Pemerintah Daerah, Masyarakat Lokal, dan Pemangku Kawasan",
    "exp2.pos":        "Staf Rehabilitasi Mangrove (Teknis dan GIS)",
    "exp2.loc":        "Jakarta, Indonesia",
    "exp2.d1":         "Melaksanakan Percepatan Rehabilitasi Mangrove di wilayah Provinsi Kepulauan Riau dan Kepulauan Bangka Belitung",
    "exp2.d2":         "Pengolahan data spasial & operasional sebagai GIS Operator (ArcGIS, QGIS, GEE)",
    "exp2.d3":         "Pendekatan pemberdayaan masyarakat & padat karya dalam rehabilitasi",
    "exp2.d4":         "Koordinasi dengan Pemerintah Daerah, Masyarakat Lokal, dan Pemangku Kawasan",
    "exp3.period":     "Jan 2021 – Mar 2021",
    "exp3.pos":        "Intern Research Analyst",
    "exp3.loc":        "Jakarta, Indonesia",
    "exp3.d1":         "Deteksi dan identifikasi biomolekuler bakteri OPTK pada benih umbi kentang asal Skotlandia di Balai Besar Karantina Pertanian Tanjung Priok, Jakarta.",
    "exp3.d2":         "Berhasil melakukan deteksi dan identifikasi biomolekuler menggunakan PCR dan metode lain pada komoditas karantina hama & penyakit impor-ekspor (kentang, anggrek, dll).",
    "exp3.d3":         "Berpartisipasi dalam seluruh agenda balai seperti inspeksi instalasi karantina tumbuhan di pelabuhan dan gudang penyimpanan.",
    "exp.internship":  "Magang",
    "exp1.period":     "Jan 2025 – Sekarang",
    "exp2.period":     "Jul 2023 – Des 2025",

    // Skills
    "skills.tag":      "Kompetensi",
    "skills.title":    "Keahlian & Spesialisasi",
    "skills.tools":    "Tools & Teknologi",
    "skill1.title":    "Mangrove and Coastal Rehabilitation",
    "skill1.tools_label": "Peralatan & Perangkat Lunak:",
    "skill1.tools":    "GNSS/GPS Receiver (Garmin/Trimble), ArcGIS Field Maps, KoboToolbox/ODK, Pita Ukur/Haglof",
    "skill1.s1":       "Pelaksanaan survei lapangan presisi tinggi dan Ground Truthing (validasi titik sampel) menggunakan instrumen GNSS dan ArcGIS Field Maps.",
    "skill1.s2":       "Desain spasial dan perencanaan zonasi rehabilitasi berbasis analisis Kesesuaian Lahan (Land Suitability).",
    "skill1.s3":       "Pemantauan Tingkat Kelulushidupan (Survival Rate) dan inventarisasi kesehatan tegakan mangrove secara berkala.",
    "skill1.s4":       "Identifikasi taksonomi flora pesisir dan perancangan intervensi restorasi ekologi yang tepat guna.",
    "skill2.title":    "GIS and Remote Sensing",
    "skill2.tools_label": "Peralatan & Perangkat Lunak:",
    "skill2.tools":    "ArcGIS Pro, QGIS, dan GEE",
    "skill2.s1":       "Akuisisi dan pra-pemrosesan citra satelit resolusi menengah (Sentinel-2/Landsat 8 & 9) berbasis cloud computing menggunakan Google Earth Engine (GEE), mencakup koreksi atmosferik dan cloud masking.",
    "skill2.s2":       "Ekstraksi fitur dan klasifikasi kerapatan tajuk mangrove menggunakan analisis Indeks Vegetasi (NDVI/MDI) serta algoritma Machine Learning (misal: Random Forest/CART) di ArcGIS Pro/QGIS.",
    "skill2.s3":       "Analisis multitemporal Perubahan Tutupan Lahan (LULC) untuk memantau dinamika deforestasi dan degradasi ekosistem mangrove selama periode [Sebutkan Tahun, misal: 2015-2025].",
    "skill2.s4":       "Desain kartografi tingkat lanjut dan visualisasi data spasial interaktif untuk mendukung pengambilan keputusan (Decision Support) dalam strategi rehabilitasi mangrove.",
    "skill3.title":    "UAV / Drone Operation & Mapping",
    "skill3.tools_label": "Peralatan & Perangkat Lunak:",
    "skill3.tools":    "DJI Mavic 2 / Air 2S, DJI Phantom 4, Aplikasi Perencanaan Misi (Dronelink), Agisoft Metashape, Pix4D",
    "skill3.s1":       "Perencanaan dan eksekusi misi pemetaan udara otonom (autonomous flight mapping) untuk akuisisi data spasial pesisir resolusi tinggi.",
    "skill3.s2":       "Pemrosesan fotogrametri untuk menghasilkan Orthomosaic dan Digital Elevation/Surface Model (DEM/DSM) ultra-resolusi.",
    "skill3.s3":       "Ekstraksi dan klasifikasi data Point Cloud untuk rekonstruksi model 3D lanskap mangrove.",
    "skill3.s4":       "Pemantauan kondisi kanopi dan kesehatan vegetasi pesisir skala mikro berbasis data fotogrametri.",
    "skill4.title":    "Community Engagement & Social Forestry",
    "skill4.tools_label": "Peralatan & Perangkat Lunak:",
    "skill4.tools":    "Google Workspace, Canva, Pendekatan Pemetaan Partisipatif (PGIS)",
    "skill4.s1":       "Fasilitasi dan pendampingan kelembagaan Perhutanan Sosial (KTH/LPHD) dalam tata kelola hutan mangrove berkelanjutan.",
    "skill4.s2":       "Peningkatan kapasitas (Capacity Building) masyarakat lokal melalui penyelenggaraan pelatihan teknis dan edukasi ekologi.",
    "skill4.s3":       "Manajemen proyek, penyusunan laporan progres/kinerja, dan produksi dokumentasi visual proyek yang komprehensif.",
    "skill4.s4":       "Inisiasi dan pengembangan skema penghidupan alternatif (Alternative Livelihood) berbasis pemanfaatan hasil hutan bukan kayu (HHBK) ekosistem mangrove.",

    // Projects
    "proj.tag":        "Portofolio Proyek",
    "proj.title":      "Proyek Unggulan",
    "proj.desc":       "Proyek pilihan yang mencerminkan keahlian dan dampak nyata di lapangan",
    "proj.filter_all": "Semua",
    "proj.filter_rehab":"Rehabilitasi",
    "proj.filter_gis": "GIS & Pemetaan",
    "proj.filter_uav": "UAV",
    "proj.filter_comm":"Community",
    "proj.tag_rehab":  "Rehabilitasi",
    "proj.tag_comm":   "Komunitas",
    "p1.title":        "Penanaman Mangrove Skala Besar",
    "p1.desc":         "Program penanaman dan pemulihan ekosistem mangrove di wilayah pesisir target nasional dengan pendekatan berbasis ekologi.",
    "p1.unit1":        "ha Area",
    "p1.unit2":        "Bibit",
    "p2.title":        "Pemetaan Distribusi Mangrove Nasional",
    "p2.desc":         "Pemetaan dan analisis perubahan tutupan mangrove menggunakan citra satelit multi-temporal untuk mendukung kebijakan restorasi.",
    "p2.unit1":        "Provinsi",
    "p2.unit2":        "Tahun Data",
    "p3.title":        "Survei Aerial Kawasan Mangrove",
    "p3.desc":         "Pelaksanaan survei menggunakan drone untuk menghasilkan orthophoto dan DSM beresolusi tinggi sebagai basis peta kerja lapangan.",
    "p3.unit1":        "Misi Terbang",
    "p3.unit2":        "Resolusi GSD",
    "p4.title":        "Pemberdayaan Masyarakat Pesisir",
    "p4.desc":         "Program pendampingan dan pelatihan masyarakat nelayan dan petani pesisir dalam pengelolaan mangrove berbasis komunitas berkelanjutan.",
    "p4.unit1":        "Peserta",
    "p4.unit2":        "Desa",
    "p5.title":        "Sistem Monitoring Mangrove Terpadu",
    "p5.desc":         "Pengembangan sistem pemantauan kondisi mangrove secara berkala menggunakan integrasi data lapangan, GIS, dan penginderaan jauh.",
    "p5.unit1":        "Plot Monitoring",
    "p5.unit2":        "Siklus Data",
    "p6.title":        "Validasi Lapangan via Drone & GIS",
    "p6.desc":         "Integrasi data drone dan analisis GIS untuk validasi tutupan mangrove dan identifikasi area prioritas restorasi secara akurat.",
    "p6.unit1":        "Akurasi",
    "p6.unit2":        "Kawasan",

    // Gallery
    "gal.tag":         "Dokumentasi",
    "gal.title":       "Galeri Lapangan",
    "gal.desc":        "Momen nyata dari lapangan — rehabilitasi, survei, dan kolaborasi komunitas",
    "gal.hint":        "💡 Klik gambar untuk melihat ukuran penuh",
    "gal.filter.all":       "Semua",
    "gal.filter.plant":     "Penanaman",
    "gal.filter.survey":    "Survei UAV",
    "gal.filter.gis":       "Pemetaan GIS",
    "gal.filter.community": "Komunitas",
    "gal.filter.doc":       "Dokumentasi",

    // Education
    "edu.tag":         "Latar Belakang",
    "edu.title":       "Pendidikan & Sertifikasi",
    "edu.edu":         "Pendidikan",
    "edu.cert":        "Sertifikasi & Pelatihan",
    "edu.deg1":        "Sarjana Pertanian (S.P.)",
    "edu.uni1":        "Universitas Jenderal Soedirman (UNSOED), Purwokerto",
    "cert1.name":      "Sertifikat Pilot RPAS / UAV",
    "cert1.org":       "Lembaga Sertifikasi Resmi",
    "cert2.name":      "Pelatihan GIS & Remote Sensing",
    "cert2.org":       "LAPAN / Kementerian Kehutanan",
    "cert3.name":      "Pelatihan Rehabilitasi Mangrove",
    "cert3.org":       "BRGM – Badan Restorasi Gambut dan Mangrove",

    // Contact
    "contact.tag":     "Mari Terhubung",
    "contact.title":   "Hubungi Saya",
    "contact.desc":    "Terbuka untuk kolaborasi riset, konsultasi, atau peluang proyek mangrove",
    "contact.blurb":   "Kotak masuk saya selalu terbuka. Punya pertanyaan atau sekadar menyapa, saya usahakan membalasnya!",
    "contact.email":   "Email",
    "contact.wa":      "WhatsApp",
    "contact.loc":     "Lokasi",
    "form.name":       "Nama",
    "form.subject":    "Subjek",
    "form.message":    "Pesan",
    "form.send":       "Kirim Pesan",
    "form.success":    "Pesan terkirim! Terima kasih.",
    "form.success_name":"Pesan terkirim! Terima kasih, {name}.",
    "form.sending":    "Mengirim...",

    // Footer
    "footer.copy":     "© 2026 · Burhanuddien Robbani, S.P. — Mangrove Enthusiast",

    // Field Video
    "vid.tag":         "Dokumentasi Lapangan",
    "vid.title":       "Perjalanan di Lapangan",
    "vid.desc":        "Rekam jejak kegiatan rehabilitasi mangrove — dari survei UAV hingga bersama masyarakat pesisir.",
    "vid.note":        "Video akan aktif setelah file field.mp4 ditambahkan ke folder portofolio.",

    // Map (sebaran wilayah kerja: Jakarta, Kepri, Babel, Sumut)
    "map.tag":         "Sebaran Lapangan",
    "map.title":       "Di Mana Saya Bekerja?",
    "map.desc":        "Dokumentasi kegiatan mangrove tersebar di beberapa wilayah. Klik titik untuk melihat foto dari lokasi tersebut.",
  },

  en: {
    // Nav
    "nav.about":       "About",
    "nav.experience":  "Experience",
    "nav.skills":      "Skills",
    "nav.projects":    "Projects",
    "nav.gallery":     "Gallery",
    "nav.video":       "Video",
    "nav.contact":     "Contact",

    // Hero (minimalis ala Brittany — rata kiri)
    "hero.intro":      "Hi, my name is",
    "hero.role":       "I restore Indonesia's mangrove ecosystems with geospatial science, drones, and community action.",
    "hero.desc":       "3 years learning and contributing in mangrove rehabilitation with BRGM and M4CR–Ministry of Forestry RI. Still exploring new things — and ready to collaborate on bigger challenges ahead.",
    "hero.cta1":       "View Experience",
    "hero.cta2":       "Get in Touch",
    "hero.scroll":     "Scroll down",

    // About
    "about.tag":       "About Me",
    "about.title":     "Who Am I?",
    "about.role":      "Mangrove Rehabilitation & Geospatial Practitioner",
    "about.bio":       "Hello, I'm Burhanuddien Robbani, S.P. — still learning and contributing in mangrove rehabilitation, geospatial mapping, and coastal community empowerment. Over the past few years I've had the chance to learn hands-on through the national mangrove restoration program, including with the Peatland and Mangrove Restoration Agency (BRGM) and M4CR-the Ministry of Forestry of the Republic of Indonesia.",
    "about.bio2":      "From field surveys and UAV drone operations to GIS analysis and sitting with coastal communities — I try to connect knowledge with real action, though there's still much to learn, for the sake of Indonesia's coastal ecosystems.",
    "about.org":       "Institution",
    "about.location":  "Location",
    "about.edu":       "Education",
    "about.edu_val":   "B.Sc. Agriculture (S.P.)",
    "about.email_label":"Email",
    "about.cv":        "Download CV",

    // Experience
    "exp.tag":         "Career Journey",
    "exp.title":       "Where I've Worked",
    "exp.desc":        "An extraordinary career journey has played a role in mangrove rehabilitation in Indonesia",
    "exp.full":        "Full-time",
    "exp1.pos":        "Technical Mangrove Rehabilitation Facilitator",
    "exp1.loc":        "Medan, North Sumatra",
    "exp1.d1":         "Monitoring & evaluation (M&E) of Mangrove Rehabilitation in target rehabilitation areas",
    "exp1.d2":         "Hydrological surveys to determine whether hydrological intervention is needed in rehabilitation activities",
    "exp1.d3":         "Preparation of self-managed (swakelola) mangrove rehabilitation administration with local community groups (Pokmas)",
    "exp1.d4":         "Coordinating with Local Governments, Communities, and Stakeholders",
    "exp2.pos":        "Mangrove Rehabilitation Staff (Technical and GIS)",
    "exp2.loc":        "Jakarta, Indonesia",
    "exp2.d1":         "Implementing Accelerated Mangrove Rehabilitation across Riau Islands and Bangka Belitung Islands Provinces",
    "exp2.d2":         "Spatial data processing & operations as GIS Operator (ArcGIS, QGIS, GEE)",
    "exp2.d3":         "Community empowerment & labor-intensive approach in rehabilitation",
    "exp2.d4":         "Coordinating with Local Governments, Communities, and Stakeholders",
    "exp3.period":     "Jan 2021 – Mar 2021",
    "exp3.pos":        "Research Analyst Intern",
    "exp3.loc":        "Jakarta, Indonesia",
    "exp3.d1":         "Biomolecular Detection and Identification of Bacterial OPTK on Potato Tuber Seeds from Scotland at Balai Besar Karantina Pertanian Tanjung Priok, Jakarta.",
    "exp3.d2":         "Succeeded in carrying out biomolecular detection and identification using PCR and other methods on import/export pest and disease commodities (potatoes, orchids, etc.).",
    "exp3.d3":         "Participated in every Balai's agenda like inspection of plant quarantine installations at ports and storage warehouses.",
    "exp.internship":  "Internship",
    "exp1.period":     "Jan 2025 – Present",
    "exp2.period":     "Jul 2023 – Dec 2025",

    // Skills
    "skills.tag":      "Competencies",
    "skills.title":    "Skills & Specializations",
    "skills.tools":    "Tools & Technologies",
    "skill1.title":    "Mangrove and Coastal Rehabilitation",
    "skill1.tools_label": "Equipment & Software:",
    "skill1.tools":    "GNSS/GPS Receiver (Garmin/Trimble), ArcGIS Field Maps, KoboToolbox/ODK, Measuring Tape/Haglof",
    "skill1.s1":       "Conducting high-precision field surveys and Ground Truthing (sample point validation) using GNSS instruments and ArcGIS Field Maps.",
    "skill1.s2":       "Spatial design and rehabilitation zonation planning based on Land Suitability analysis.",
    "skill1.s3":       "Monitoring Survival Rate and periodic inventory of mangrove stand health.",
    "skill1.s4":       "Identification of coastal flora taxonomy and design of appropriate ecological restoration interventions.",
    "skill2.title":    "GIS and Remote Sensing",
    "skill2.tools_label": "Equipment & Software:",
    "skill2.tools":    "ArcGIS Pro, QGIS, and GEE",
    "skill2.s1":       "Acquisition and pre-processing of medium-resolution satellite imagery (Sentinel-2/Landsat 8 & 9) using cloud computing via Google Earth Engine (GEE), including atmospheric correction and cloud masking.",
    "skill2.s2":       "Feature extraction and mangrove canopy density classification using Vegetation Indices (NDVI/MDI) and Machine Learning algorithms (e.g., Random Forest/CART) in ArcGIS Pro/QGIS.",
    "skill2.s3":       "Multitemporal Land Use/Cover Change (LULC) analysis to monitor deforestation dynamics and mangrove ecosystem degradation during the period [State the Years, e.g.: 2015-2025].",
    "skill2.s4":       "Advanced cartographic design and interactive spatial data visualization to support decision-making (Decision Support) in mangrove rehabilitation strategy.",
    "skill3.title":    "UAV / Drone Operation & Mapping",
    "skill3.tools_label": "Equipment & Software:",
    "skill3.tools":    "DJI Mavic 2 / Air 2S, DJI Phantom 4, Mission Planning App (Dronelink), Agisoft Metashape, Pix4D",
    "skill3.s1":       "Planning and executing autonomous flight mapping missions for high-resolution coastal spatial data acquisition.",
    "skill3.s2":       "Photogrammetry processing to produce ultra-resolution Orthomosaic and Digital Elevation/Surface Model (DEM/DSM).",
    "skill3.s3":       "Extraction and classification of Point Cloud data for 3D reconstruction of mangrove landscape models.",
    "skill3.s4":       "Monitoring canopy condition and micro-scale coastal vegetation health based on photogrammetry data.",
    "skill4.title":    "Community Engagement & Social Forestry",
    "skill4.tools_label": "Equipment & Software:",
    "skill4.tools":    "Google Workspace, Canva, Participatory Mapping Approach (PGIS)",
    "skill4.s1":       "Facilitation and institutional assistance for Social Forestry (KTH/LPHD) in sustainable mangrove forest management.",
    "skill4.s2":       "Local community capacity building through technical training and ecological education.",
    "skill4.s3":       "Project management, preparation of progress/performance reports, and production of comprehensive project visual documentation.",
    "skill4.s4":       "Initiation and development of Alternative Livelihood schemes based on Non-Timber Forest Products (NTFP) utilization of the mangrove ecosystem.",

    // Projects
    "proj.tag":        "Project Portfolio",
    "proj.title":      "Featured Projects",
    "proj.desc":       "Selected projects reflecting expertise and real-world impact in the field",
    "proj.filter_all": "All",
    "proj.filter_rehab":"Rehabilitation",
    "proj.filter_gis": "GIS & Mapping",
    "proj.filter_uav": "UAV",
    "proj.filter_comm":"Community",
    "proj.tag_rehab":  "Rehabilitation",
    "proj.tag_comm":   "Community",
    "p1.title":        "Large-Scale Mangrove Planting",
    "p1.desc":         "Mangrove planting and ecosystem restoration program in national target coastal areas using an ecology-based approach.",
    "p1.unit1":        "ha Area",
    "p1.unit2":        "Seedlings",
    "p2.title":        "National Mangrove Distribution Mapping",
    "p2.desc":         "Mapping and analysis of mangrove cover changes using multi-temporal satellite imagery to support restoration policy.",
    "p2.unit1":        "Provinces",
    "p2.unit2":        "Years of Data",
    "p3.title":        "Aerial Survey of Mangrove Areas",
    "p3.desc":         "Drone-based surveys to produce high-resolution orthophotos and DSMs as the basis for field work maps.",
    "p3.unit1":        "Flight Missions",
    "p3.unit2":        "GSD Resolution",
    "p4.title":        "Coastal Community Empowerment",
    "p4.desc":         "Assistance and training program for fishing and farming communities in sustainable community-based mangrove management.",
    "p4.unit1":        "Participants",
    "p4.unit2":        "Villages",
    "p5.title":        "Integrated Mangrove Monitoring System",
    "p5.desc":         "Development of a periodic mangrove condition monitoring system integrating field data, GIS, and remote sensing.",
    "p5.unit1":        "Monitoring Plots",
    "p5.unit2":        "Data Cycle",
    "p6.title":        "Field Validation via Drone & GIS",
    "p6.desc":         "Integration of drone data and GIS analysis for accurate validation of mangrove cover and identification of priority restoration areas.",
    "p6.unit1":        "Accuracy",
    "p6.unit2":        "Regions",

    // Gallery
    "gal.tag":         "Documentation",
    "gal.title":       "Field Gallery",
    "gal.desc":        "Real moments from the field — rehabilitation, surveys, and community collaboration",
    "gal.hint":        "💡 Click an image to view full size",
    "gal.filter.all":       "All",
    "gal.filter.plant":     "Planting",
    "gal.filter.survey":    "UAV Survey",
    "gal.filter.gis":       "GIS Mapping",
    "gal.filter.community": "Community",
    "gal.filter.doc":       "Documentation",

    // Education
    "edu.tag":         "Background",
    "edu.title":       "Education & Certifications",
    "edu.edu":         "Education",
    "edu.cert":        "Certifications & Training",
    "edu.deg1":        "Bachelor of Agriculture (S.P.)",
    "edu.uni1":        "Universitas Jenderal Soedirman (UNSOED), Purwokerto",
    "cert1.name":      "RPAS / UAV Pilot Certificate",
    "cert1.org":       "Official Certification Body",
    "cert2.name":      "GIS & Remote Sensing Training",
    "cert2.org":       "LAPAN / Ministry of Forestry",
    "cert3.name":      "Mangrove Rehabilitation Training",
    "cert3.org":       "BRGM – Peatland and Mangrove Restoration Agency",

    // Contact
    "contact.tag":     "Let's Connect",
    "contact.title":   "Get In Touch",
    "contact.desc":    "Open for research collaboration, consultation, or mangrove project opportunities",
    "contact.blurb":   "My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    "contact.email":   "Email",
    "contact.wa":      "WhatsApp",
    "contact.loc":     "Location",
    "form.name":       "Name",
    "form.subject":    "Subject",
    "form.message":    "Message",
    "form.send":       "Send Message",
    "form.success":    "Message sent! Thank you.",
    "form.success_name":"Message sent! Thank you, {name}.",
    "form.sending":    "Sending...",

    // Footer
    "footer.copy":     "© 2026 · Burhanuddien Robbani, S.P. — Mangrove Enthusiast",

    // Field Video
    "vid.tag":         "Field Documentation",
    "vid.title":       "Journey in the Field",
    "vid.desc":        "Footprints of mangrove rehabilitation — from UAV surveys to working alongside coastal communities.",
    "vid.note":        "Video activates once field.mp4 is added to the portfolio folder.",

    // Map (work area coverage: Jakarta, Kepri, Babel, Sumut)
    "map.tag":         "Field Coverage",
    "map.title":       "Where Do I Work?",
    "map.desc":        "Mangrove activities are documented across several regions. Click a point to see photos from that location.",
  }
};

// =========================================
// APP STATE
// =========================================
let currentLang = 'id';

// =========================================
// LOADER
// =========================================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('fade-out');
    setTimeout(() => loader && (loader.style.display = 'none'), 700);
  }, 1200);
});

// =========================================
// PARTICLES
// =========================================
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#40916C', '#52b788', '#74c69d', '#d4a843', '#b7e4c7'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 6 + 2;
    const left  = Math.random() * 100;
    const delay = Math.random() * 15;
    const dur   = Math.random() * 15 + 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      background:${color};
      animation-duration:${dur}s;
      animation-delay:${delay}s;
      opacity:0.4;
    `;
    container.appendChild(p);
  }
}
createParticles();

// =========================================
// NAVBAR SCROLL
// =========================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// =========================================
// MOBILE MENU
// =========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// =========================================
// LANGUAGE TOGGLE
// =========================================
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  try {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    applyLanguage(currentLang);
    refreshGalleryLabels();
    // Re-render section dinamis ke bahasa baru (build membaca currentLang)
    buildExperience();
    buildEducation();
    buildProjects();
    buildStats();
    animateCounters(); // jalankan ulang counter ke target (EN/ID) setelah buildStats set data-target
    // Move switch knob
    langToggle.classList.toggle('is-alt', currentLang === 'en');
    document.documentElement.setAttribute('data-lang', currentLang);
  } catch (err) {
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#b00020;color:#fff;padding:10px 14px;font:13px monospace;white-space:pre-wrap';
    d.textContent = '⚠️ Language toggle error: ' + (err && err.stack ? err.stack : err);
    (document.body || document.documentElement).appendChild(d);
    console.error(err);
  }
});

// ---- Theme toggle (light/dark) as estetik switch ----
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) themeToggle.classList.toggle('is-alt', theme === 'dark');
  try { localStorage.setItem('portfolio-theme', theme); } catch (e) {}
}
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(current);
  });
}
// restore saved preference (default light)
try {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'dark' || saved === 'light') applyTheme(saved);
} catch (e) {}

function applyLanguage(lang) {
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
}

// =========================================
// REVEAL ON SCROLL
// =========================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// =========================================
// COUNTER ANIMATION (Hero Stats)
// =========================================
function animateCounters() {
  const nums = document.querySelectorAll('.stat-num .num');
  nums.forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 20);
  });
}

// Trigger counters when hero is visible
const heroSection = document.getElementById('hero');
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    setTimeout(animateCounters, 600);
    heroObserver.disconnect();
  }
}, { threshold: 0.3 });
heroObserver.observe(heroSection);

// =========================================
// SKILL BAR ANIMATION
// =========================================
const skillSection = document.getElementById('skills');
let skillsAnimated = false;
const skillObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !skillsAnimated) {
    skillsAnimated = true;
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const w = bar.getAttribute('data-width');
      bar.style.width = w + '%';
    });
    skillObserver.disconnect();
  }
}, { threshold: 0.2 });
skillObserver.observe(skillSection);

// =========================================
// PROJECT FILTER (attached after dynamic build)
// =========================================
function attachProjectFilter() {
  if (attachProjectFilter._attached) return; // hanya attach sekali (aman saat re-render bahasa)
  attachProjectFilter._attached = true;
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectCards = document.querySelectorAll('#projectsRoot .project-card'); // query kartu terkini
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cats = card.getAttribute('data-category') || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden-filter');
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = '';
        } else {
          card.classList.add('hidden-filter');
        }
      });
    });
  });
}

// =========================================
// BUILD PROJECTS (from data.js)
// =========================================
function buildProjects() {
  const root = document.getElementById('projectsRoot');
  if (!root || !PORTFOLIO_DATA.projects) return;
  root.innerHTML = '';
  const L = currentLang === 'en';
  PORTFOLIO_DATA.projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card reveal visible';
    card.setAttribute('data-category', p.category);
    const tags = (L ? p.tags_en : p.tags_id).map(t => `<span class="proj-tag">${t}</span>`).join('');
    const stats = p.stats.map(s => `<div class="proj-stat"><span class="proj-stat-num">${s.num}</span><span>${L ? s.label_en : s.label_id}</span></div>`).join('');
    card.innerHTML = `
      <div class="project-img">
        <img src="${p.image}" alt="${L ? p.title_en : p.title_id}" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="project-tags">${tags}</div>
        <h3>${L ? p.title_en : p.title_id}</h3>
        <p>${L ? p.desc_en : p.desc_id}</p>
        <div class="project-stats">${stats}</div>
      </div>`;
    root.appendChild(card);
  });
  attachProjectFilter();
}

// =========================================
// GALLERY LIGHTBOX
// =========================================
// Bilingual caption map for gallery lightbox (keyed by category kind)
const GALLERY_CAPTIONS = {
  id: {
    "plant":     "Penanaman Mangrove",
    "survey":    "Survei UAV",
    "gis":       "Pemetaan GIS",
    "community": "Kolaborasi Komunitas",
    "aerial":    "Tampak Udara",
    "doc":       "Dokumentasi Lapangan"
  },
  en: {
    "plant":     "Mangrove Planting",
    "survey":    "UAV Survey",
    "gis":       "GIS Mapping",
    "community": "Community Collaboration",
    "aerial":    "Aerial View",
    "doc":       "Field Documentation"
  }
};
let activeGalleryItem = null;

// ---- Dynamic gallery: curated field-documentation photos ----
// Each entry: { file, cat (plant/survey/gis/community/aerial/doc), id, en (bilingual caption) }
const GALLERY_FILES = (PORTFOLIO_DATA.gallery || []);
(function buildGallery() {
  const track  = document.getElementById('sliderTrack');
  const dotsBox= document.getElementById('sliderDots');
  const capTitle = document.getElementById('sliderCapTitle');
  const capSub   = document.getElementById('sliderCapSub');
  const prevBtn  = document.getElementById('sliderPrev');
  const nextBtn  = document.getElementById('sliderNext');
  if (!track) return;

  const CAT_SUB = {
    id: { plant:'Penanaman bibit mangrove di pesisir', survey:'Survei udara menggunakan drone UAV',
          gis:'Pemetaan & analisis spasial mangrove', community:'Pendampingan kelompok masyarakat pesisir',
          aerial:'Tampak udara kawasan mangrove', doc:'Dokumentasi kegiatan lapangan' },
    en: { plant:'Mangrove seedling planting along the coast', survey:'Aerial survey using UAV drone',
          gis:'Mangrove spatial mapping & analysis', community:'Coastal community group facilitation',
          aerial:'Aerial view of mangrove area', doc:'Field activity documentation' }
  };

  let current = 0, timer = null, filtered = [];

  function render(filter) {
    filtered = GALLERY_FILES.filter(e => filter === 'all' || e.cat === filter);
    track.innerHTML = '';
    dotsBox.innerHTML = '';
    filtered.forEach((entry, i) => {
      const slide = document.createElement('div');
      slide.className = 'slider-slide';
      const img = document.createElement('img');
      img.src = 'images/' + encodeURIComponent(entry.file);
      img.alt = entry.file;
      img.loading = 'lazy';
      img.onerror = () => { slide.style.display = 'none'; };
      slide.appendChild(img);
      track.appendChild(slide);

      const dot = document.createElement('button');
      dot.className = 'slider-dot';
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.addEventListener('click', () => go(i));
      dotsBox.appendChild(dot);
    });
    current = 0;
    update();
  }

  function update() {
    const total = filtered.length;
    if (!total) return;
    current = (current + total) % total;
    track.style.transform = 'translateX(' + (-current * 100) + '%)';
    capTitle.textContent = currentLang === 'en' ? filtered[current].en : filtered[current].id;
    capSub.textContent = CAT_SUB[currentLang][filtered[current].cat] || '';
    Array.from(dotsBox.children).forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function go(i) { current = i; update(); restart(); }
  function next() { current++; update(); }
  function prev() { current--; update(); }
  function restart() { if (timer) clearInterval(timer); timer = setInterval(() => next(), 5000); }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });

  // pause on hover
  const slider = document.getElementById('gallerySlider');
  if (slider) {
    slider.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
    slider.addEventListener('mouseleave', restart);
  }

  render('all');
  restart();
})();


const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose   = document.getElementById('lightboxClose');
const lightboxOverlay = document.getElementById('lightboxOverlay');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (img) {
      activeGalleryItem = item;
      openLightbox(parseInt(item.getAttribute('data-index'), 10));
    }
  });
});

// Open lightbox by gallery index (respects current filter so prev/next stays in-view)
function openLightbox(index) {
  const visible = Array.from(document.querySelectorAll('.gallery-item'))
    .filter(el => el.style.display !== 'none');
  if (!visible.length) return;
  const item = visible[index] || visible[0];
  activeGalleryItem = item;
  const img = item.querySelector('img');
  if (!img) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  setLightboxCaption(item.getAttribute('data-label'));
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Navigate prev/next within currently visible items
function navLightbox(dir) {
  const visible = Array.from(document.querySelectorAll('.gallery-item'))
    .filter(el => el.style.display !== 'none');
  if (!visible.length || !activeGalleryItem) return;
  let pos = visible.indexOf(activeGalleryItem);
  if (pos === -1) pos = 0;
  pos = (pos + dir + visible.length) % visible.length;
  openLightbox(pos);
}

function setLightboxCaption(lbl) {
  lightboxCaption.textContent = (GALLERY_CAPTIONS[currentLang] && GALLERY_CAPTIONS[currentLang][lbl])
    ? GALLERY_CAPTIONS[currentLang][lbl] : lbl;
}

// Gallery category filter
(function initGalleryFilter() {
  const bar = document.getElementById('galleryFilter');
  if (!bar) return;
  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.getAttribute('data-filter');
    document.querySelectorAll('.gallery-item').forEach(item => {
      const show = (cat === 'all' || item.getAttribute('data-cat') === cat);
      item.style.display = show ? '' : 'none';
    });
  });
})();

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
  activeGalleryItem = null;
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', e => { e.stopPropagation(); navLightbox(-1); });
document.getElementById('lightboxNext').addEventListener('click', e => { e.stopPropagation(); navLightbox(1); });
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') navLightbox(-1);
  else if (e.key === 'ArrowRight') navLightbox(1);
});

// Keep an open lightbox caption + overlay labels in sync with the new language
function refreshGalleryLabels() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    const entry = GALLERY_FILES[parseInt(item.getAttribute('data-index'), 10)];
    if (entry) item.setAttribute('data-label', currentLang === 'en' ? entry.en : entry.id);
    const ov = item.querySelector('.gallery-item-overlay span');
    if (ov) ov.textContent = item.getAttribute('data-label');
  });
  if (activeGalleryItem) setLightboxCaption(activeGalleryItem.getAttribute('data-label'));
}

// =========================================
// CONTACT FORM (Simulated) — guarded: form removed in Brittany-style contact
// =========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    btn.textContent = i18n[currentLang]['form.sending'];
    btn.disabled = true;

    setTimeout(() => {
      const name = (contactForm.querySelector('#contact-name').value || '').trim();
      const successSpan = formSuccess.querySelector('[data-i18n]');
      const key = name ? 'form.success_name' : 'form.success';
      if (successSpan) {
        successSpan.removeAttribute('data-i18n');
        successSpan.textContent = i18n[currentLang][key].replace('{name}', name);
      }
      formSuccess.classList.remove('hidden');
      contactForm.reset();
      btn.textContent = i18n[currentLang]['form.send'];
      btn.disabled = false;
      setTimeout(() => {
        formSuccess.classList.add('hidden');
        if (successSpan) successSpan.setAttribute('data-i18n', 'form.success');
      }, 5000);
    }, 1200);
  });
}

// ---- Map / Sebaran Dokumentasi: marker -> popup foto ----
const MAP_REGIONS = {
  jakarta: { title: 'Jakarta', sub: 'Pusat BRGM — Deputi Pemberdayaan Masyarakat',
    photos: ['20260416_034518537_iOS.jpg', '20260416_033920743_iOS.jpg', 'KT Sejahtera_23112024_105851.jpg'] },
  kepri:   { title: 'Kepulauan Riau', sub: 'Rehabilitasi mangrove & operasional GIS',
    photos: ['DJI_0379.JPG', 'DJI_0381.JPG', '20230824_172149.jpg', 'IMG_9403~photo.JPG', 'IMG_9410~photo.JPG', 'IMG_9530~photo.JPG'] },
  babel:   { title: 'Kepulauan Bangka Belitung', sub: 'Rehabilitasi mangrove & pemberdayaan masyarakat',
    photos: ['IMG_9407~photo.JPG', 'IMG_9536~photo.JPG', 'IMG_9537~photo.JPG', 'IMG_9543~photo.JPG', 'IMG_9622~photo.JPG'] },
  sumut:   { title: 'Sumatera Utara', sub: 'PPIU M4CR — Langkat, Sergai, Batu Bara, Deli Serdang, Asahan, Labuhanbatu',
    photos: ['20231125_090745.jpg', '20231125_090917.jpg', 'TimePhoto_20240503_101405.jpg', 'TimePhoto_20240503_145638.jpg', 'WhatsApp Image 2023-12-21 at 6.04.47 PM.jpeg', 'WhatsApp Image 2024-07-02 at 10.16.58 AM.jpeg'] }
};
(function initMap() {
  const markers = document.querySelectorAll('.map-marker');
  const popup = document.getElementById('mapPopup');
  const pTitle = document.getElementById('mapPopupTitle');
  const pSub = document.getElementById('mapPopupSub');
  const pGrid = document.getElementById('mapPopupGrid');
  const pClose = document.getElementById('mapPopupClose');
  if (!markers.length || !popup) return;
  markers.forEach(m => {
    m.addEventListener('click', () => {
      const region = MAP_REGIONS[m.getAttribute('data-region')];
      if (!region) return;
      pTitle.textContent = region.title;
      pSub.textContent = region.sub;
      pGrid.innerHTML = '';
      region.photos.forEach(f => {
        const im = document.createElement('img');
        im.src = 'images/' + encodeURI(f);
        im.alt = region.title;
        im.loading = 'lazy';
        im.onerror = () => im.remove();
        pGrid.appendChild(im);
      });
      popup.hidden = false;
    });
  });
  if (pClose) pClose.addEventListener('click', () => { popup.hidden = true; });

  // Grid foto langsung terlihat di bawah peta
  const photosBox = document.getElementById('mapPhotos');
  if (photosBox) {
    Object.keys(MAP_REGIONS).forEach(key => {
      const region = MAP_REGIONS[key];
      const group = document.createElement('div');
      group.className = 'map-photo-group';
      const h = document.createElement('h4');
      h.textContent = region.title;
      group.appendChild(h);
      const grid = document.createElement('div');
      grid.className = 'map-photo-grid';
      region.photos.slice(0, 6).forEach(f => {
        const im = document.createElement('img');
        im.src = 'images/' + encodeURI(f);
        im.alt = region.title;
        im.loading = 'lazy';
        im.onerror = () => im.remove();
        grid.appendChild(im);
      });
      group.appendChild(grid);
      photosBox.appendChild(group);
    });
  }
})();

// =========================================
// ABOUT — foto slider + media sosial
// =========================================
// Foto profil (dari folder images/profil tentang saya). Ganti/urutkan di sini.
const ABOUT_PHOTOS = [
  'images/profil tentang saya/1000263706.jpg.jpeg',
  'images/profil tentang saya/DJI_0382.JPG',
  'images/profil tentang saya/WhatsApp Image 2026-08-16 at 9.57.30 PM.jpeg',
  'images/profil tentang saya/WhatsApp Image 2026-08-16 at 9.58.35 PM.jpeg'
];

(function buildAboutSlider() {
  const track = document.getElementById('aboutSliderTrack');
  const prev  = document.getElementById('aboutPrev');
  const next  = document.getElementById('aboutNext');
  if (!track || !ABOUT_PHOTOS.length) return;
  ABOUT_PHOTOS.forEach(src => {
    const im = document.createElement('img');
    im.src = encodeURI(src);
    im.alt = 'Burhanuddien Robbani, S.P.';
    im.loading = 'lazy';
    track.appendChild(im);
  });
  let idx = 0;
  const total = ABOUT_PHOTOS.length;
  function go(i) {
    idx = (i + total) % total;
    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
  }
  function nextSlide() { go(idx + 1); }
  if (next) next.addEventListener('click', nextSlide);
  if (prev) prev.addEventListener('click', () => go(idx - 1));
  // auto-rotate 4.5s, pause saat hover
  let timer = setInterval(nextSlide, 4500);
  const slider = document.getElementById('aboutSlider');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => { timer = setInterval(nextSlide, 4500); });
  }
})();

// Media sosial dari data.js (PORTFOLIO_DATA.contact)
(function buildAboutSocial() {
  const box = document.getElementById('aboutSocial');
  if (!box) return;
  const c = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.contact) || {};
  const ICONS = {
    email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2zm5.8 14.24c-.24.68-1.4 1.31-1.92 1.36-.5.05-.94.23-3.2-.66-2.7-1.06-4.4-3.78-4.53-3.96-.13-.18-1.06-1.41-1.06-2.69s.67-1.91.91-2.17c.24-.26.52-.33.7-.33.18 0 .36 0 .51.01.17.01.39-.06.6.46.24.57.81 1.97.88 2.11.07.14.12.3.02.48-.1.18-.15.3-.3.46-.15.16-.31.36-.45.48-.15.15-.3.3-.13.59.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.19.72-.84 1-1.13.26-.29.53-.24.89-.14.36.1 2.3.85 2.7 1 .39.15.66.22.76.34.1.12.1.71-.14 1.39z"/></svg>'
  };
  const ORDER = [
    ['instagram', c.instagram, 'Instagram'],
    ['linkedin', c.linkedin, 'LinkedIn'],
    ['github', c.github, 'GitHub'],
    ['email', c.email, 'Email'],
    ['whatsapp', c.whatsapp, 'WhatsApp']
  ];
  ORDER.forEach(([key, val, label]) => {
    if (!val) return;
    const a = document.createElement('a');
    a.href = key === 'email' ? 'mailto:' + val : val;
    a.title = label;
    a.setAttribute('aria-label', label);
    a.target = key === 'email' ? '' : '_blank';
    a.rel = 'noopener';
    a.innerHTML = ICONS[key];
    box.appendChild(a);
  });
})();

// =========================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--clr-white)';
    }
  });
}, { passive: true });

// =========================================
// GALLERY OVERLAY LABELS
// =========================================
document.querySelectorAll('.gallery-item').forEach(item => {
  const label = item.getAttribute('data-label');
  if (label) {
    const overlay = document.createElement('div');
    overlay.classList.add('gallery-item-overlay');
    overlay.innerHTML = `<span>${label}</span>`;
    item.appendChild(overlay);
  }
});

// =========================================
// BUILD EXPERIENCE (from data.js)
// =========================================
function buildExperience() {
  const root = document.getElementById('timelineRoot');
  if (!root || !PORTFOLIO_DATA.experience) return;
  root.innerHTML = '';
  const L = currentLang === 'en';
  PORTFOLIO_DATA.experience.forEach((exp, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal visible' + (i % 2 === 1 ? ' right' : '');
    item.innerHTML = `
      <div class="timeline-dot"><span>${i + 1}</span></div>
      <div class="timeline-card glass-card">
        <div class="tl-card-header">
          <div class="tl-org-logo">
            <img src="${exp.logo}" alt="Logo" />
          </div>
          <div class="tl-meta">
            <span class="tl-period">${L ? exp.period_en : exp.period_id}</span>
            <span class="tl-type">${L ? exp.type_en : exp.type_id}</span>
          </div>
        </div>
        <h3 class="tl-position">${L ? exp.position_en : exp.position_id}</h3>
        <p class="tl-org">${exp.org}</p>
        <p class="tl-location">📍 ${L ? exp.location_en : exp.location_id}</p>
        <ul class="tl-duties">
          ${(L ? exp.duties_en : exp.duties_id).map(d => `<li>${d}</li>`).join('')}
        </ul>
        <div class="tl-tags">
          ${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>`;
    root.appendChild(item);
  });
}

// =========================================
// BUILD EDUCATION + CERTIFICATIONS (from data.js)
// =========================================
function buildEducation() {
  const root = document.getElementById('eduRoot');
  if (!root || !PORTFOLIO_DATA.education) return;
  root.innerHTML = '';
  const L = currentLang === 'en';
  const edu = PORTFOLIO_DATA.education[0];
  const eduCol = document.createElement('div');
  eduCol.className = 'edu-col reveal visible';
  eduCol.innerHTML = `
    <h3 class="edu-col-title"><span>🎓</span> <span>${L ? 'Education' : 'Pendidikan'}</span></h3>
    <div class="edu-item glass-card">
      <div class="edu-icon">🏫</div>
      <div class="edu-body">
        <h4>${L ? edu.degree_en : edu.degree_id}</h4>
        <p>${edu.institution}${edu.city ? ', ' + edu.city : ''}</p>
        <span class="edu-year">${edu.year_start} – ${edu.year_end}</span>
      </div>
    </div>`;
  root.appendChild(eduCol);

  const certCol = document.createElement('div');
  certCol.className = 'edu-col reveal visible';
  let certItems = '';
  PORTFOLIO_DATA.certifications.forEach(c => {
    certItems += `
      <div class="edu-item glass-card">
        <div class="edu-icon">📜</div>
        <div class="edu-body">
          <h4>${L ? c.name_en : c.name_id}</h4>
          <p>${L ? c.issuer_en : c.issuer_id}</p>
          <span class="edu-year">${c.year}</span>
        </div>
      </div>`;
  });
  certCol.innerHTML = `
    <h3 class="edu-col-title"><span>📜</span> <span>${L ? 'Certifications & Training' : 'Sertifikasi & Pelatihan'}</span></h3>
    ${certItems}`;
  root.appendChild(certCol);
}

// =========================================
// BUILD STATS (from data.js)
// =========================================
function buildStats() {
  if (!PORTFOLIO_DATA.stats) return;
  const map = {
    years:   PORTFOLIO_DATA.stats.yearsExperience,
    uav:     PORTFOLIO_DATA.stats.projectsDone,
    regions: PORTFOLIO_DATA.stats.workRegions,
  };
  Object.keys(map).forEach(k => {
    const el = document.querySelector('.num[data-stat="' + k + '"]');
    if (el) { el.setAttribute('data-target', map[k]); el.textContent = '0'; }
  });
}

// =========================================
// INIT
// =========================================
(function initPortfolio() {
  if (typeof PORTFOLIO_DATA === 'undefined' && typeof window.PORTFOLIO_DATA === 'undefined') {
    var warn = document.createElement('div');
    warn.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:99998;background:#b00020;color:#fff;padding:10px 14px;font:13px monospace';
    warn.textContent = '⚠️ data.js tidak termuat (PORTFOLIO_DATA undefined). Buka lewat server http://localhost:8123, bukan file://.';
    (document.body || document.documentElement).appendChild(warn);
    return;
  }
  applyLanguage(currentLang);
  buildExperience();
  buildEducation();
  buildProjects();
  buildStats();
  // Section di-render dinamis SETELAH revealObserver setup → item punya .reveal (opacity:0)
  // tapi belum pernah di-observe. Tampilkan langsung agar tidak kosong di layar.
  document.querySelectorAll('#timelineRoot .reveal, #eduRoot .reveal, #projectsRoot .reveal')
    .forEach(el => el.classList.add('visible'));
  console.log('🌿 Mangrove Portfolio — Initialized');
})();
