/**
 * ============================================================
 *  MANGROVE PORTFOLIO — DATA.JS
 *  Database terpusat UNTUK SEMUA informasi (identity, contact,
 *  education, certifications, stats, experience, projects, gallery).
 *  Sejak migrasi, halaman di-render dari sini (lihat script.js:
 *  buildExperience / buildProjects).
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
  // PENGALAMAN KERJA — urut dari terbaru ke terlama
  // field logo = file di images/logo/ (box putih di timeline)
  // ============================================================
  experience: [
    {
      id:         "exp1",
      period_id:  "Jan 2025 – Present",
      period_en:  "Jan 2025 – Present",
      duration:   "1y 9m",
      position_id:"Technical Mangrove Rehabilitation Facilitator",
      position_en:"Technical Mangrove Rehabilitation Facilitator",
      org:        "PPIU M4CR Sumatera Utara — Ministry of Forestry",
      org_short:   "M4CR – Ministry of Forestry",
      location_id:"Medan, Sumatera Utara",
      location_en:"Medan, North Sumatra",
      type_id:    "Contract",
      type_en:    "Contract",
      logo:       "images/logo/m4cr-logo.png",
      duties_id: [
        "Mengeksekusi perencanaan berbasis GIS dan analisis sistem hidrologi menggunakan UAV dan survei lapangan guna memitigasi risiko gangguan ekologi dan mengoptimalkan tata letak penanaman.",
        "Melaksanakan Monitoring dan Evaluasi (Monev) komprehensif melalui citra drone, menerjemahkan data spasial menjadi keputusan lapangan yang taktis dan laporan evaluasi bagi tim pelaksana.",
        "Melaksanakan proyek ketahanan pesisir berskala besar selama 2025–2026, sukses merealisasikan penanaman seluas 831 hektare dan pemeliharaan tahun pertama seluas 498 hektare ekosistem mangrove di Provinsi Sumatera Utara.",
      ],
      duties_en: [
        "Executed GIS-based planning and hydrological analysis using UAVs and field surveys to assess ecological disruptions and optimize mangrove rehabilitation layouts.",
        "Performed rigorous Monitoring and Evaluation (M&E) via drone imagery, translating complex spatial data into tactical field decisions and actionable evaluation reports for implementing teams.",
        "Conducted large-scale coastal resilience projects across 2025–2026, successfully driving the planting of 831 hectares and the first-year maintenance of 498 hectares of mangrove ecosystems across North Sumatera.",
      ],
      tags: ["M&E", "GIS", "UAV", "Hydrology", "Rehabilitation"],
    },
    {
      id:         "exp2",
      period_id:  "Jul 2023 – Dec 2024",
      period_en:  "Jul 2023 – Dec 2024",
      duration:   "1y 6m",
      position_id:"Staf Rehabilitasi Mangrove (Teknis dan GIS)",
      position_en:"Mangrove Rehabilitation Staff (Technical and GIS)",
      org:        "Peatland and Mangrove Restoration Agency",
      org_short:   "Peatland and Mangrove Restoration Agency",
      location_id:"Jakarta, Indonesia",
      location_en:"Jakarta, Indonesia",
      type_id:    "Contract",
      type_en:    "Contract",
      logo:       "images/logo/brgm-logo.png",
      duties_id: [
        "Menyusun pemetaan UAV dengan pengolahan orthomosaic untuk mengidentifikasi, menginventarisasi, dan mengevaluasi lokasi rehabilitasi mangrove di Provinsi Kepulauan Riau.",
        "Menganalisis data spasial untuk menyusun peta arahan penanaman yang menjadi panduan operasional utama bagi kelompok pelaksana.",
        "Melaksanakan percepatan rehabilitasi mangrove (2023–2024), mengawasi penanaman seluas 772 hektare dan pemeliharaan lebih dari 1.000 hektare di Kepulauan Riau.",
        "Melaksanakan sosialisasi strategis kepada pemangaku kepentingan, memastikan kelompok pelaksana memahami alur kerja, SOP, dan target proyek sejak awal hingga penyelesaian.",
      ],
      duties_en: [
        "Produced UAV drone mapping and orthomosaic processing to accurately identify, inventory, and assess potential mangrove rehabilitation sites across the Riau Islands Province.",
        "Analyzed spatial data to author targeted planting direction maps, serving as the primary operational blueprint for local implementing groups.",
        "Executed the acceleration of mangrove rehabilitation (2023–2024), overseeing the successful planting of 772 hectares and the maintenance of over 1,000 hectares at Riau Islands Province.",
        "Facilitated strategic stakeholder socialization, ensuring local implementing groups fully understood operational workflows, SOPs, and project targets from initiation to completion.",
      ],
      tags: ["UAV", "GIS", "Rehabilitation", "Stakeholder"],
    },
    {
      id:         "exp3",
      period_id:  "Jan 2021 – Mar 2021",
      period_en:  "Jan 2021 – Mar 2021",
      duration:   "3m",
      position_id:"Intern Research Analyst",
      position_en:"Research Analyst Intern",
      org:        "Agricultural Quarantine Center of Tanjung Priok — Ministry of Agriculture",
      org_short:   "Agricultural Quarantine Center of Tanjung Priok",
      location_id:"Jakarta, Indonesia",
      location_en:"Jakarta, Indonesia",
      type_id:    "Internship",
      type_en:    "Internship",
      logo:       "images/logo/kementan-logo.png",
      duties_id: [
        "Melaksanakan deteksi dan identifikasi biomolekuler (PCR) OPTK bakteri pada komoditas ekspor-impor, memastikan kepatuhan biosekuriti yang ketat pada bibit kentang Skotlandia dan anggrek.",
        "Mendukung inspeksi kepatuhan secara menyeluruh pada instalasi karantina tumbuhan di pelabuhan dan gudang penyimpanan guna menjaga standar keselamatan pertanian.",
        "Menyusun laporan penelitian spesifik terkait identifikasi biomolekuler hama dan penyakit pertanian, memberikan kontribusi data yang valid bagi basis data karantina instansi.",
      ],
      duties_en: [
        "Executed biomolecular detection and identification (PCR) of bacterial OPTK on import-export commodities, ensuring strict biosecurity compliance for Scottish potato tuber seeds and orchids.",
        "Assisted in comprehensive compliance inspections of plant quarantine installations at major ports and storage warehouses to maintain agricultural safety standards.",
        "Produced a specialized research report on the biomolecular identification of agricultural pests and diseases, contributing valuable data to the agency's quarantine database.",
      ],
      tags: ["Biomolecular", "PCR", "Quarantine", "Pests and Diseases"],
    },
  ],

  // ============================================================
  // PROYEK UNGGULAN
  // ============================================================
  projects: [
    {
      id: "p1",
      category: "rehabilitasi",
      year: "2025",
      image: "images/IMG_9403~photo.JPG",
      title_id: "Penanaman Mangrove Skala Besar",
      title_en: "Large-Scale Mangrove Planting",
      tldr_id: "Rehabilitasi 500+ ha mangrove pesisir dengan pendekatan ekologi dan pemantauan spasial.",
      tldr_en: "Restored 500+ ha of coastal mangrove through ecology-based planting and spatial monitoring.",
      desc_id:  "Program penanaman dan pemulihan ekosistem mangrove di wilayah pesisir target nasional dengan pendekatan berbasis ekologi.",
      desc_en:  "Mangrove planting and ecosystem restoration program in national target coastal areas using an ecology-based approach.",
      tags_id: ["Rehabilitation"],
      tags_en: ["Rehabilitation"],
      stats: [
        { num: "500+", label_id: "ha Area", label_en: "ha Area" },
        { num: "10K+", label_id: "Bibit",   label_en: "Seedlings" },
      ],
    },
    {
      id: "p2",
      category: "gis",
      year: "2024",
      image: "images/DJI_0381.JPG",
      title_id: "Pemetaan Distribusi Mangrove Nasional",
      title_en: "National Mangrove Distribution Mapping",
      tldr_id: "Pemetaan tutupan mangrove multi-temporal dengan GIS dan citra satelit untuk mendukung kebijakan restorasi.",
      tldr_en: "Multi-temporal mangrove cover mapping with GIS and satellite imagery to support restoration policy.",
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
      year: "2023",
      image: "images/DJI_0379.JPG",
      title_id: "Survei Aerial Kawasan Mangrove",
      title_en: "Aerial Survey of Mangrove Areas",
      tldr_id: "Survei drone untuk orthophoto dan DSM resolusi tinggi sebagai basis peta kerja lapangan.",
      tldr_en: "Drone surveys producing high-resolution orthophotos and DSMs as the basis for field work maps.",
      desc_id:  "Pelaksanaan survei menggunakan drone untuk menghasilkan orthophoto dan DSM beresolusi tinggi sebagai basis peta kerja lapangan.",
      desc_en:  "Drone-based surveys to produce high-resolution orthophotos and DSMs as the basis for field work maps.",
      tags_id: ["Remote Sensing"],
      tags_en: ["Remote Sensing"],
      stats: [
        { num: "20+", label_id: "Misi Terbang", label_en: "Flight Missions" },
        { num: "2cm", label_id: "Resolusi GSD", label_en: "GSD Resolution" },
      ],
    },
    {
      id: "p4",
      category: "community",
      year: "2024",
      image: "images/KT_Sejahtera_23112024_105851.jpg",
      title_id: "Pemberdayaan Masyarakat Pesisir",
      title_en: "Coastal Community Empowerment",
      tldr_id: "Pendampingan dan pelatihan masyarakat pesisir untuk pengelolaan mangrove berbasis komunitas.",
      tldr_en: "Coastal community mentoring and training for community-based mangrove management.",
      desc_id:  "Program pendampingan dan pelatihan masyarakat nelayan dan petani pesisir dalam pengelolaan mangrove berbasis komunitas berkelanjutan.",
      desc_en:  "Assistance and training program for fishing and farming communities in sustainable community-based mangrove management.",
      tags_id: ["Community"],
      tags_en: ["Community"],
      stats: [
        { num: "500+", label_id: "Peserta", label_en: "Participants" },
        { num: "15+", label_id: "Desa",    label_en: "Villages" },
      ],
    },
    {
      id: "p5",
      category: "gis rehabilitasi",
      year: "2026",
      image: "images/20260416_034518537_iOS.jpg",
      title_id: "Sistem Monitoring Mangrove Terpadu",
      title_en: "Integrated Mangrove Monitoring System",
      tldr_id: "Sistem pemantauan mangrove berkala yang memadukan data lapangan, GIS, dan penginderaan jauh.",
      tldr_en: "Periodic mangrove monitoring system combining field data, GIS, and remote sensing.",
      desc_id:  "Pengembangan sistem pemantauan kondisi mangrove secara berkala menggunakan integrasi data lapangan, GIS, dan penginderaan jauh.",
      desc_en:  "Development of a periodic mangrove condition monitoring system integrating field data, GIS, and remote sensing.",
      tags_id: ["GIS", "Remote Sensing"],
      tags_en: ["GIS", "Remote Sensing"],
      stats: [
        { num: "12",         label_id: "Plot Monitoring", label_en: "Monitoring Plots" },
        { num: "Semi-annual", label_id: "Siklus Data",    label_en: "Data Cycle" },
      ],
    },

  ],


};

// ============================================================
// AUTO-INJECT KONTAK KE HALAMAN (email, whatsapp, linkedin, location)
// Section lain (experience/education/projects/gallery/stats) di-render
// oleh script.js (buildExperience/buildProjects).
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
      email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
      whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>'
    };
    const LINKS = [
      { key:'linkedin', href: PORTFOLIO_DATA.contact.linkedin, title:'LinkedIn' },
      { key:'instagram', href: PORTFOLIO_DATA.contact.instagram, title:'Instagram' },
      { key:'github', href: PORTFOLIO_DATA.contact.github, title:'GitHub' },
      { key:'whatsapp', href: 'https://wa.me/6281226768040', title:'WhatsApp' },
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
    "about.bio": "Halo, saya masih belajar dan berkontribusi dalam rehabilitasi mangrove, pemetaan geospasial, dan pemberdayaan masyarakat pesisir. Selama beberapa tahun terakhir, saya berkesempatan belajar langsung melalui program restorasi mangrove nasional, termasuk bersama Badan Restorasi Gambut dan Mangrove (BRGM) serta M4CR–Kementerian Kehutanan.",
    "about.bio2": "Analis spasial yang teliti dengan 3 tahun pengalaman mendukung proyek ekosistem pesisir skala besar melalui pemetaan UAV dan perencanaan GIS. Terampil menerjemahkan citra drone dan data hidrologi menjadi cetak biru yang jelas dan dapat diterapkan oleh tim pelaksana. Saya pekerja tim yang kolaboratif, dengan semangat belajar tinggi untuk mempertajam keterampilan teknis dan mendukung pengambilan keputusan berbasis data dalam kehutanan berkelanjutan serta inisiatif karbon biru. — Saya berusaha menghubungkan pengetahuan dengan tindakan nyata, meski masih banyak yang harus dipelajari, demi ekosistem pesisir Indonesia.",
    "hero.scroll": "Scroll ke bawah",
    "proj.filter_clear": "Clear",
    "proj.filter_year": "Tahun",
  },
  en: {
    "about.bio": "Hello, I'm still learning and contributing in mangrove rehabilitation, geospatial mapping, and coastal community empowerment. Over the past few years I've had the chance to learn hands-on through the national mangrove restoration program, including with the Peatland and Mangrove Restoration Agency and M4CR–the Ministry of Forestry.",
    "about.bio2": "Detail-oriented spatial analyst with 3 years of experience supporting large-scale coastal ecosystem projects through UAV mapping and GIS planning. Proficient in translating drone imagery and hydrological data into clear, actionable blueprints for implementing groups. A collaborative team player with a strong eagerness to learn, refine technical skills, and support data-driven decision-making in sustainable forestry and blue carbon initiatives. — I try to connect knowledge with real action, though there's still much to learn, for the sake of Indonesia's coastal ecosystems.",
    "hero.scroll": "Scroll down",
    "proj.filter_clear": "Clear",
    "proj.filter_year": "Year",
  }
};

// =========================================
// APP STATE
// =========================================
let currentLang = 'en';

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
    // Re-render section dinamis ke bahasa baru (build membaca currentLang)
    buildExperience();
    buildProjects();
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
// PROJECT FILTER (attached after dynamic build)
// =========================================
const PROJECT_TAG_SET = ['Rehabilitation', 'GIS', 'Remote Sensing', 'Community'];
let activeProjectTags = new Set();

function getSelectedYears() {
  return Array.from(document.querySelectorAll('#yearPanel input[type="checkbox"]:checked'))
    .map(cb => cb.value);
}

function updateYearToggleLabel() {
  const btn = document.getElementById('yearToggle');
  if (!btn) return;
  const years = getSelectedYears();
  const L = currentLang === 'en';
  btn.textContent = years.length ? years.join(', ') : (L ? 'All Years' : 'Semua Tahun');
}

const FILTER_EASE = 'cubic-bezier(0.22, 0.61, 0.36, 1)';
let filterPendingFinish = null;

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function applyProjectFilters() {
  const grid = document.getElementById('projectsRoot');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.project-card'));
  if (!cards.length) return;

  const selectedYears = getSelectedYears();
  const keep = [];
  const drop = [];

  cards.forEach(card => {
    const tags = (card.getAttribute('data-tags') || '').split('|').filter(Boolean);
    const year = card.getAttribute('data-year') || '';
    const tagOK = activeProjectTags.size === 0 || tags.some(t => activeProjectTags.has(t));
    const yearOK = selectedYears.length === 0 || selectedYears.indexOf(year) !== -1;
    (tagOK && yearOK ? keep : drop).push(card);
  });

  // Finish any filter still mid-animation so rapid clicks never stack.
  if (filterPendingFinish) {
    clearTimeout(filterPendingFinish.timer);
    filterPendingFinish.run();
    filterPendingFinish = null;
  }

  const first = new Map();
  cards.forEach(c => {
    if (!c.classList.contains('hidden-filter')) first.set(c, c.getBoundingClientRect());
  });

  const leaving = drop.filter(c => !c.classList.contains('hidden-filter'));

  const commit = () => {
    drop.forEach(c => { c.classList.remove('is-leaving'); c.classList.add('hidden-filter'); });
    keep.forEach(c => c.classList.remove('hidden-filter'));

    if (prefersReducedMotion()) return;

    cards.forEach(c => {
      if (c.classList.contains('hidden-filter')) return;
      const from = first.get(c);
      const to = c.getBoundingClientRect();

      if (!from || from.width === 0) {
        c.animate(
          [{ opacity: 0, transform: 'scale(0.96)' }, { opacity: 1, transform: 'none' }],
          { duration: 320, easing: FILTER_EASE }
        );
        return;
      }
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      c.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }],
        { duration: 380, easing: FILTER_EASE }
      );
    });
  };

  if (!leaving.length || prefersReducedMotion()) {
    commit();
    return;
  }

  leaving.forEach(c => c.classList.add('is-leaving'));
  const timer = setTimeout(() => {
    filterPendingFinish = null;
    commit();
  }, 200);
  filterPendingFinish = { timer, run: commit };
}

function buildProjectFilterControls() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const tag = chip.getAttribute('data-tag');
    chip.classList.toggle('active', activeProjectTags.has(tag));
    chip.onclick = () => {
      if (activeProjectTags.has(tag)) activeProjectTags.delete(tag);
      else activeProjectTags.add(tag);
      chip.classList.toggle('active', activeProjectTags.has(tag));
      applyProjectFilters();
    };
  });

  const panel = document.getElementById('yearPanel');
  const toggle = document.getElementById('yearToggle');
  if (panel && !panel.dataset.built) {
    const years = Array.from(new Set((PORTFOLIO_DATA.projects || [])
      .map(p => String(p.year || '')).filter(Boolean)))
      .sort((a, b) => String(b).localeCompare(String(a)));
    panel.innerHTML = years.map(y =>
      '<label class="year-check"><input type="checkbox" value="' + y + '"><span>' + y + '</span></label>'
    ).join('');
    panel.dataset.built = '1';
    panel.addEventListener('change', () => { updateYearToggleLabel(); applyProjectFilters(); });
  }
  if (toggle) {
    toggle.onclick = (e) => {
      e.stopPropagation();
      const open = !panel.hidden;
      panel.hidden = open;
      toggle.setAttribute('aria-expanded', String(!open));
    };
  }
  if (panel && !panel.dataset.outside) {
    panel.dataset.outside = '1';
    document.addEventListener('click', (e) => {
      if (panel.hidden) return;
      if (!e.target.closest('.filter-year')) {
        panel.hidden = true;
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  updateYearToggleLabel();

  const clearBtn = document.getElementById('filterClear');
  if (clearBtn) {
    clearBtn.onclick = () => {
      activeProjectTags.clear();
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('#yearPanel input[type="checkbox"]').forEach(cb => { cb.checked = false; });
      updateYearToggleLabel();
      applyProjectFilters();
    };
  }
}

function openProjectDialog(p) {
  const dlg = document.getElementById('projectDialog');
  if (!dlg || !p) return;
  const L = currentLang === 'en';
  const q = sel => dlg.querySelector(sel);
  const body = dlg.querySelector('.proj-dialog-body');

  // ---- isi konten ----
  q('[data-dialog="title"]').textContent = L ? p.title_en : p.title_id;
  q('[data-dialog="short"]').textContent = L ? (p.short_en || p.desc_en || '') : (p.short_id || p.desc_id || '');

  // meta = tag chips lalu year (urutan sama dengan v3)
  const tg = (L ? p.tags_en : p.tags_id) || [];
  let metaHtml = tg.map(t => '<span class="proj-dialog-tag">' + t + '</span>').join('');
  if (p.year) metaHtml += '<span class="proj-dialog-year">' + p.year + '</span>';
  q('[data-dialog="meta"]').innerHTML = metaHtml;

  // TL;DR
  q('[data-dialog="tldr"]').textContent = L ? (p.tldr_en || '') : (p.tldr_id || '');
  const bs = L ? (p.bullets_en || []) : (p.bullets_id || []);
  const ul = q('[data-dialog="bullets"]');
  ul.innerHTML = bs.map(b => '<li>' + b + '</li>').join('');
  ul.style.display = bs.length ? '' : 'none';

  // Full stories: Context / Roles / Process / Impact
  const bl = L ? (p.blocks_en || []) : (p.blocks_id || []);
  q('[data-dialog="blocks"]').innerHTML = bl.map(b =>
    '<div class="proj-dialog-block"><dt>' + b.label + '</dt><dd>' + b.text + '</dd></div>').join('');

  // ---- galeri ----
  const track   = document.getElementById('projectDialogTrack');
  const prevBtn = document.getElementById('projectDialogPrev');
  const nextBtn = document.getElementById('projectDialogNext');
  const dotsBox = document.getElementById('projectDialogDots');
  const counter = document.getElementById('projectDialogCount');
  const gal     = document.getElementById('projectDialogGallery');
  const images  = (p.images && p.images.length) ? p.images : (p.image ? [p.image] : []);

  track.innerHTML = images.map(src =>
    '<div class="proj-dialog-slide"><img src="' + src + '" alt="" decoding="async" /></div>').join('');
  dotsBox.innerHTML = images.map((_, i) =>
    '<button class="proj-dialog-dot' + (i === 0 ? ' on' : '') + '" role="tab" aria-selected="' +
    (i === 0) + '" aria-label="Foto ' + (i + 1) + '"></button>').join('');

  // ---- carousel (persis v3) ----
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0, timer = null, hovered = false, manual = false;

  function render() {
    track.style.transform = 'translateX(' + (-index * 100) + '%)';
    Array.from(dotsBox.children).forEach((d, i) => {
      d.classList.toggle('on', i === index);
      d.setAttribute('aria-selected', String(i === index));
    });
    counter.textContent = (index + 1) + ' / ' + images.length;
  }
  function goTo(i) { index = (i + images.length) % images.length; render(); }
  function stopAuto() { if (timer) { clearInterval(timer); timer = null; } }
  function startAuto() {
    if (reduce || manual || images.length < 2) return;
    stopAuto();
    timer = setInterval(() => { if (!hovered && !document.hidden) goTo(index + 1); }, 5000);
  }
  function userNav(i) { manual = true; stopAuto(); goTo(i); }

  prevBtn.onclick = () => userNav(index - 1);
  nextBtn.onclick = () => userNav(index + 1);
  Array.from(dotsBox.children).forEach((d, i) => { d.onclick = () => userNav(i); });

  gal.onmouseenter = () => { hovered = true; };
  gal.onmouseleave = () => { hovered = false; };
  gal.onfocusin = () => { hovered = true; };
  gal.onfocusout = () => { hovered = false; };
  gal.onkeydown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); userNav(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); userNav(index + 1); }
  };
  let touchX = null;
  gal.ontouchstart = (e) => { touchX = e.touches[0].clientX; };
  gal.ontouchend = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) userNav(index + (dx < 0 ? 1 : -1));
    touchX = null;
  };

  // ---- tabs (tanpa resize; body yang scroll) ----
  const tabTldr   = document.getElementById('projTabTldr');
  const tabFull   = document.getElementById('projTabFull');
  const panelTldr = document.getElementById('projPanelTldr');
  const panelFull = document.getElementById('projPanelFull');

  function selectTab(which) {
    const isTldr = which === 'tldr';
    tabTldr.setAttribute('aria-selected', String(isTldr));
    tabFull.setAttribute('aria-selected', String(!isTldr));
    panelTldr.hidden = !isTldr;
    panelFull.hidden = isTldr;

    const active = isTldr ? panelTldr : panelFull;
    active.style.animation = 'none';
    void active.offsetWidth;
    active.style.animation = '';

    body.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }
  tabTldr.onclick = () => selectTab('tldr');
  tabFull.onclick = () => selectTab('full');
  selectTab('tldr');

  // ---- state awal galeri (persis v3) ----
  render();
  if (images.length < 2) {
    prevBtn.hidden = nextBtn.hidden = dotsBox.hidden = counter.hidden = true;
  } else {
    prevBtn.hidden = nextBtn.hidden = dotsBox.hidden = counter.hidden = false;
    startAuto();
  }

  // ---- buka ----
  if (typeof dlg.showModal === 'function') {
    if (dlg.open) dlg.close();
    body.scrollTo({ top: 0, behavior: 'auto' });
    document.body.style.overflow = 'hidden';
    dlg.showModal();
  } else {
    dlg.setAttribute('open', '');
  }
}

function initProjectDialog() {
  const dlg = document.getElementById('projectDialog');
  if (!dlg) return;
  const closeBtn = document.getElementById('projectDialogClose');
  if (closeBtn) closeBtn.addEventListener('click', () => { if (dlg.close) dlg.close(); });
  dlg.addEventListener('click', e => {
    if (e.target === dlg) { if (dlg.close) dlg.close(); }
  });
  dlg.addEventListener('close', () => { document.body.style.overflow = ''; });
}

// =========================================
// BUILD PROJECTS (from data.js)
// =========================================
// Ambil maksimal N kalimat pertama (dipakai kartu proyek)
function firstSentences(text, max) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  const parts = clean.match(/[^.!?]+[.!?]+/g);
  if (!parts || !parts.length) return clean;
  return parts.slice(0, max || 2).join(' ').trim();
}

function buildProjects() {
  const root = document.getElementById('projectsRoot');
  if (!root || !PORTFOLIO_DATA.projects) return;
  root.innerHTML = '';
  const L = currentLang === 'en';
  PORTFOLIO_DATA.projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card reveal visible';
    card.setAttribute('data-category', p.category || '');
    card.setAttribute('data-year', p.year || '');
    card.setAttribute('data-tags', (L ? p.tags_en : p.tags_id).join('|'));
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', (L ? 'Open details: ' : 'Buka detail: ') + (L ? p.title_en : p.title_id));
    const tags = (L ? p.tags_en : p.tags_id).map(t => `<span class="proj-tag">${t}</span>`).join('');
    const yearChip = p.year ? `<span class="project-year">${p.year}</span>` : '';
    const stats = p.stats.map(st => `<div class="proj-stat"><span class="proj-stat-num">${st.num}</span><span class="proj-stat-lbl">${L ? st.label_en : st.label_id}</span></div>`).join('');
    const desc = firstSentences(L ? p.desc_en : p.desc_id, 2);
    card.innerHTML = `
      <div class="project-img">
        <img src="${p.image}" alt="${L ? p.title_en : p.title_id}" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="project-meta">${tags}${yearChip}</div>
        <h3>${L ? p.title_en : p.title_id}</h3>
        <p>${desc}</p>
        <div class="project-stats">${stats}</div>
        <button type="button" class="project-open">${L ? 'More Detail' : 'Detail Proyek'} <span>&rarr;</span></button>
      </div>`;
    card.addEventListener('click', () => openProjectDialog(p));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectDialog(p); }
    });
    root.appendChild(card);
  });
  buildProjectFilterControls();
  applyProjectFilters();
  initProjectDialog();
}

// =========================================
// BUILD EXPERIENCE (from data.js)
// =========================================
function buildExperience() {
  const root = document.getElementById('timelineRoot');
  if (!root || !PORTFOLIO_DATA.experience) return;
  root.innerHTML = '';
  const L = currentLang === 'en';
  // Tabs (left) + panel (right)
  const tabs = document.createElement('div');
  tabs.className = 'exp-tabs';
  const panel = document.createElement('div');
  panel.className = 'exp-panel';
  PORTFOLIO_DATA.experience.forEach((exp, i) => {
    const tab = document.createElement('button');
    tab.className = 'exp-tab' + (i === 0 ? ' active' : '');
    tab.setAttribute('data-idx', i);
    tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tab.innerHTML = `<span class="exp-tab-org">${exp.org_short}</span>`;
    tabs.appendChild(tab);
  });
  root.appendChild(tabs);
  root.appendChild(panel);
  const renderPanel = (i) => {
    const exp = PORTFOLIO_DATA.experience[i];
    panel.innerHTML = `
      <div class="exp-card glass-card">
        <div class="tl-card-header">
          <div class="tl-org-logo"><img src="${exp.logo}" alt="Logo" /></div>
          <div class="tl-meta">
            <span class="tl-period">${L ? exp.period_en : exp.period_id} (${exp.duration})</span>
            <span class="tl-type">${L ? exp.type_en : exp.type_id}</span>
          </div>
        </div>
        <h3 class="tl-position">${L ? exp.position_en : exp.position_id}</h3>
        <p class="tl-org">${exp.org}</p>
        <p class="tl-location">📍 ${L ? exp.location_en : exp.location_id}</p>
        <ul class="tl-duties">
          ${(L ? exp.duties_en : exp.duties_id).map(d => `<li>${d}</li>`).join('')}
        </ul>
        <div class="tl-tags">${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>`;
  };
  renderPanel(0);
  tabs.querySelectorAll('.exp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.querySelectorAll('.exp-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      renderPanel(parseInt(tab.getAttribute('data-idx'), 10));
    });
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
  buildProjects();
  // Sync <html> lang/data-lang agar konsisten dengan currentLang (default = en)
  document.documentElement.setAttribute('data-lang', currentLang);
  document.documentElement.setAttribute('lang', currentLang);
  // Section di-render dinamis SETELAH revealObserver setup → item punya .reveal (opacity:0)
  // tapi belum pernah di-observe. Tampilkan langsung agar tidak kosong di layar.
  document.querySelectorAll('#timelineRoot .reveal, #projectsRoot .reveal')
    .forEach(el => el.classList.add('visible'));
  console.log('🌿 Mangrove Portfolio — Initialized');
})();
