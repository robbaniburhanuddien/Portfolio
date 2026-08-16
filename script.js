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

    // Hero
    "hero.badge":      "Tersedia untuk Kolaborasi",
    "hero.title1":     "Spesialis",
    "hero.title2":     "Mangrove",
    "hero.title3":     "Indonesia",
    "hero.subtitle":   "Rehabilitasi · GIS & Remote Sensing · UAV Pilot · Community Engagement",
    "hero.desc":       "3 tahun mendedikasikan diri untuk pemulihan ekosistem mangrove Indonesia bersama BRGM dan Kementerian Kehutanan RI",
    "hero.cta1":       "Lihat Pengalaman",
    "hero.cta2":       "Hubungi Saya",
    "hero.stat1":      "Tahun Pengalaman",
    "hero.stat2":      "Proyek Selesai",
    "hero.stat3":      "Wilayah Kerja",
    "hero.scroll":     "Scroll ke bawah",

    // About
    "about.tag":       "Tentang Saya",
    "about.title":     "Siapa Saya?",
    "about.role":      "Mangrove Conservationist & Geospatial Specialist",
    "about.bio":       "Perkenalkan, saya Burhanuddien Robbani, S.P. — masih terus belajar dan ikut berkontribusi di bidang rehabilitasi mangrove, pemetaan geospasial, dan pemberdayaan masyarakat pesisir. Beberapa tahun ini saya berkesempatan belajar langsung lewat program restorasi mangrove nasional, antara lain bersama Badan Restorasi Gambut dan Mangrove (BRGM) dan Kementerian Kehutanan Republik Indonesia.",
    "about.bio2":      "Dari survei lapangan, pengoperasian drone UAV, hingga analisis GIS dan duduk bersama masyarakat pesisir — saya mencoba menyambungkan ilmu dan aksi nyata, meski masih banyak yang harus dipelajari, demi ekosistem pesisir Indonesia yang lebih baik.",
    "about.org":       "Lembaga",
    "about.location":  "Lokasi",
    "about.edu":       "Pendidikan",
    "about.edu_val":   "S1 Pertanian (S.P.)",
    "about.email_label":"Email",
    "about.cv":        "Unduh CV",

    // Experience
    "exp.tag":         "Perjalanan Karir",
    "exp.title":       "Pengalaman Kerja",
    "exp.desc":        "3 tahun dedikasi di garis terdepan konservasi mangrove Indonesia",
    "exp.full":        "Full-time",
    "exp1.pos":        "Technical Mangrove Rehabilitation Facilitator",
    "exp1.loc":        "Medan, Sumatera Utara",
    "exp1.d1":         "Monitoring & evaluasi (M&E) rehabilitasi mangrove di daerah target rehabilitasi",
    "exp1.d2":         "Survei hidrologi untuk menentukan perlu/tidaknya intervensi hidrologi pada kegiatan rehabilitasi",
    "exp1.d3":         "Penyusunan administrasi kegiatan swakelola rehabilitasi mangrove bersama kelompok masyarakat (pokmas)",
    "exp1.d4":         "Koordinasi dengan pemerintah daerah, masyarakat lokal, dan pemangku kepentingan",
    "exp2.pos":        "Staf Rehabilitasi Mangrove — Deputi Pemberdayaan Masyarakat",
    "exp2.loc":        "Jakarta, Indonesia",
    "exp2.d1":         "Melaksanakan Percepatan Rehabilitasi Mangrove di wilayah Provinsi Kepulauan Riau dan Kepulauan Bangka Belitung",
    "exp2.d2":         "Pengolahan data spasial & operasional sebagai GIS Operator (ArcGIS, QGIS, GEE)",
    "exp2.d3":         "Pendekatan pemberdayaan masyarakat & padat karya dalam rehabilitasi",
    "exp2.d4":         "Koordinasi dengan pemerintah daerah, komunitas lokal, dan pemangku kepentingan",
    "exp1.period":     "Jan 2025 – Sekarang",
    "exp2.period":     "Jul 2023 – Des 2025",

    // Skills
    "skills.tag":      "Kompetensi",
    "skills.title":    "Keahlian & Spesialisasi",
    "skills.tools":    "Tools & Teknologi",
    "skill1.title":    "Rehabilitasi Mangrove",
    "skill1.s1":       "Penanaman & Pemeliharaan",
    "skill1.s2":       "Monitoring Ekosistem",
    "skill1.s3":       "Identifikasi Spesies",
    "skill2.title":    "GIS & Remote Sensing",
    "skill2.s3":       "Citra Satelit (Sentinel/Landsat)",
    "skill3.title":    "UAV / Drone",
    "skill3.s1":       "Operasi Penerbangan",
    "skill3.s2":       "Fotogrametri & Pemetaan Udara",
    "skill3.s3":       "Pengolahan Data Orthophoto",
    "skill4.title":    "Community Engagement",
    "skill4.s1":       "Fasilitasi Komunitas",
    "skill4.s2":       "Pelatihan & Sosialisasi",
    "skill4.s3":       "Penulisan Laporan",

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
    "footer.copy":     "© 2025 · Burhanuddien Robbani, S.P. — Mangrove Specialist Indonesia",

    // Field Video
    "vid.tag":         "Dokumentasi Lapangan",
    "vid.title":       "Perjalanan di Lapangan",
    "vid.desc":        "Rekam jejak kegiatan rehabilitasi mangrove — dari survei UAV hingga bersama masyarakat pesisir.",
    "vid.note":        "Video akan aktif setelah file field.mp4 ditambahkan ke folder portofolio.",
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

    // Hero
    "hero.badge":      "Open for Collaboration",
    "hero.title1":     "Mangrove",
    "hero.title2":     "Restoration",
    "hero.title3":     "Specialist",
    "hero.subtitle":   "Rehabilitation · GIS & Remote Sensing · UAV Pilot · Community Engagement",
    "hero.desc":       "3 years dedicated to restoring Indonesia's mangrove ecosystems alongside BRGM and the Ministry of Forestry RI",
    "hero.cta1":       "View Experience",
    "hero.cta2":       "Get in Touch",
    "hero.stat1":      "Years Experience",
    "hero.stat2":      "Projects Done",
    "hero.stat3":      "Work Regions",
    "hero.scroll":     "Scroll down",

    // About
    "about.tag":       "About Me",
    "about.title":     "Who Am I?",
    "about.role":      "Mangrove Conservationist & Geospatial Specialist",
    "about.bio":       "Hello, I'm Burhanuddien Robbani, S.P. — still learning and contributing in mangrove rehabilitation, geospatial mapping, and coastal community empowerment. Over the past few years I've had the chance to learn hands-on through the national mangrove restoration program, including with the Peatland and Mangrove Restoration Agency (BRGM) and the Ministry of Forestry of the Republic of Indonesia.",
    "about.bio2":      "From field surveys and UAV drone operations to GIS analysis and sitting with coastal communities — I try to connect knowledge with real action, though there's still much to learn, for the sake of Indonesia's coastal ecosystems.",
    "about.org":       "Institution",
    "about.location":  "Location",
    "about.edu":       "Education",
    "about.edu_val":   "B.Sc. Agriculture (S.P.)",
    "about.email_label":"Email",
    "about.cv":        "Download CV",

    // Experience
    "exp.tag":         "Career Journey",
    "exp.title":       "Work Experience",
    "exp.desc":        "3 years at the forefront of mangrove conservation in Indonesia",
    "exp.full":        "Full-time",
    "exp1.pos":        "Technical Mangrove Rehabilitation Facilitator",
    "exp1.loc":        "Medan, North Sumatra",
    "exp1.d1":         "Monitoring & evaluation (M&E) of mangrove rehabilitation in target rehabilitation areas",
    "exp1.d2":         "Hydrological surveys to determine whether hydrological intervention is needed in rehabilitation activities",
    "exp1.d3":         "Preparation of self-managed (swakelola) mangrove rehabilitation administration with local community groups (pokmas)",
    "exp1.d4":         "Coordinating with local governments, communities, and stakeholders",
    "exp2.pos":        "Mangrove Rehabilitation Officer — Community Empowerment Deputy",
    "exp2.loc":        "Jakarta, Indonesia",
    "exp2.d1":         "Implementing Accelerated Mangrove Rehabilitation across Riau Islands and Bangka Belitung Islands Provinces",
    "exp2.d2":         "Spatial data processing & operations as GIS Operator (ArcGIS, QGIS, GEE)",
    "exp2.d3":         "Community empowerment & labor-intensive approach in rehabilitation",
    "exp2.d4":         "Coordinating with local governments, communities, and stakeholders",
    "exp1.period":     "Jan 2025 – Present",
    "exp2.period":     "Jul 2023 – Dec 2025",

    // Skills
    "skills.tag":      "Competencies",
    "skills.title":    "Skills & Specializations",
    "skills.tools":    "Tools & Technologies",
    "skill1.title":    "Mangrove Rehabilitation",
    "skill1.s1":       "Planting & Maintenance",
    "skill1.s2":       "Ecosystem Monitoring",
    "skill1.s3":       "Species Identification",
    "skill2.title":    "GIS & Remote Sensing",
    "skill2.s3":       "Satellite Imagery (Sentinel/Landsat)",
    "skill3.title":    "UAV / Drone",
    "skill3.s1":       "Flight Operations",
    "skill3.s2":       "Photogrammetry & Aerial Mapping",
    "skill3.s3":       "Orthophoto Data Processing",
    "skill4.title":    "Community Engagement",
    "skill4.s1":       "Community Facilitation",
    "skill4.s2":       "Training & Outreach",
    "skill4.s3":       "Report Writing",

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
    "contact.title":   "Contact Me",
    "contact.desc":    "Open for research collaboration, consultation, or mangrove project opportunities",
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
    "footer.copy":     "© 2025 · Burhanuddien Robbani, S.P. — Mangrove Specialist Indonesia",

    // Field Video
    "vid.tag":         "Field Documentation",
    "vid.title":       "Journey in the Field",
    "vid.desc":        "Footprints of mangrove rehabilitation — from UAV surveys to working alongside coastal communities.",
    "vid.note":        "Video activates once field.mp4 is added to the portfolio folder.",
  }
};

// =========================================
// APP STATE
// =========================================
let currentLang = 'id';
let countersAnimated = false;

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
  currentLang = currentLang === 'id' ? 'en' : 'id';
  applyLanguage(currentLang);
  refreshGalleryLabels();
  // Move switch knob
  langToggle.classList.toggle('is-alt', currentLang === 'en');
  document.documentElement.setAttribute('data-lang', currentLang);
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
  if (countersAnimated) return;
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
  countersAnimated = true;
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
// PROJECT FILTER
// =========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
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
const GALLERY_FILES = [
  // Planting (Penanaman Mangrove)
  { file: "IMG_9403~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  { file: "IMG_9410~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  { file: "IMG_9530~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  { file: "IMG_9536~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  { file: "IMG_9537~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  { file: "IMG_9543~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  { file: "IMG_9622~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  { file: "IMG_9436~photo.JPG",               cat: "plant",     id: "Penanaman Mangrove",          en: "Mangrove Planting" },
  // UAV Survey (Survei UAV)
  { file: "DJI_0379.JPG",                     cat: "survey",    id: "Survei UAV",                  en: "UAV Survey" },
  { file: "DJI_0381.JPG",                     cat: "survey",    id: "Survei UAV",                  en: "UAV Survey" },
  { file: "DJI_0382.JPG",                     cat: "survey",    id: "Survei UAV",                  en: "UAV Survey" },
  { file: "GOPR0278.JPG",                     cat: "survey",    id: "Survei UAV",                  en: "UAV Survey" },
  { file: "GOPR0321.JPG",                     cat: "survey",    id: "Survei UAV",                  en: "UAV Survey" },
  { file: "GOPR0366.JPG",                     cat: "survey",    id: "Survei UAV",                  en: "UAV Survey" },
  // GIS Mapping (Pemetaan GIS)
  { file: "IMG_9401~photo.JPG",               cat: "gis",       id: "Pemetaan GIS",               en: "GIS Mapping" },
  { file: "IMG_9402~photo.JPG",               cat: "gis",       id: "Pemetaan GIS",               en: "GIS Mapping" },
  { file: "IMG_9404~photo.JPG",               cat: "gis",       id: "Pemetaan GIS",               en: "GIS Mapping" },
  { file: "IMG_9405~photo.JPG",               cat: "gis",       id: "Pemetaan GIS",               en: "GIS Mapping" },
  { file: "IMG_9406~photo.JPG",               cat: "gis",       id: "Pemetaan GIS",               en: "GIS Mapping" },
  { file: "IMG_9518~photo.JPG",               cat: "gis",       id: "Pemetaan GIS",               en: "GIS Mapping" },
  // Community Collaboration (Kolaborasi Komunitas)
  { file: "KT Sejahtera_23112024_105851.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  { file: "KT Sejahtera_23112024_105855.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  { file: "KT Sejahtera_23112024_105859.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  { file: "KT Sejahtera_23112024_113852.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  { file: "KT Sejahtera_23112024_113900.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  { file: "KT Sejahtera_23112024_113906.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  { file: "KT Sejahtera_23112024_114030.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  { file: "KT Sejahtera_23112024_114040.jpg", cat: "community", id: "Kolaborasi Komunitas",       en: "Community Collaboration" },
  // Aerial View (Tampak Udara)
  { file: "DJI_0026.JPG",                     cat: "aerial",    id: "Tampak Udara",                en: "Aerial View" },
  { file: "DJI_0030.JPG",                     cat: "aerial",    id: "Tampak Udara",                en: "Aerial View" },
  { file: "DJI_0342.JPG",                     cat: "aerial",    id: "Tampak Udara",                en: "Aerial View" },
  // Field Documentation (Dokumentasi Lapangan)
  { file: "20231125_090745.jpg",              cat: "doc",       id: "Dokumentasi Lapangan",        en: "Field Documentation" },
  { file: "20231125_090917.jpg",              cat: "doc",       id: "Dokumentasi Lapangan",        en: "Field Documentation" },
  { file: "20230824_172149.jpg",              cat: "doc",       id: "Dokumentasi Lapangan",        en: "Field Documentation" },
  { file: "TimePhoto_20240503_101405.jpg",    cat: "doc",       id: "Dokumentasi Lapangan",        en: "Field Documentation" }
];
(function buildGallery() {
  const track  = document.getElementById('sliderTrack');
  const dotsBox= document.getElementById('sliderDots');
  const capTitle = document.getElementById('sliderCapTitle');
  const capSub   = document.getElementById('sliderCapSub');
  const prevBtn  = document.getElementById('sliderPrev');
  const nextBtn  = document.getElementById('sliderNext');
  const filterBox= document.getElementById('galleryFilter');
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
  if (filterBox) filterBox.querySelectorAll('.filter-btn').forEach(b => {
    b.addEventListener('click', () => {
      filterBox.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      render(b.getAttribute('data-filter'));
      restart();
    });
  });

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
// CONTACT FORM (Simulated)
// =========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

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
// SMOOTH ACTIVE NAV HIGHLIGHT
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
// INIT
// =========================================
applyLanguage(currentLang);
console.log('🌿 Mangrove Portfolio — Initialized');
