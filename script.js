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
    "about.bio":       "Saya adalah Burhanuddien Robbani, S.P., seorang profesional di bidang rehabilitasi ekosistem mangrove, pemetaan geospasial, dan pemberdayaan masyarakat pesisir. Selama 3 tahun terakhir, saya berkontribusi aktif dalam program restorasi mangrove nasional di bawah naungan Badan Restorasi Gambut dan Mangrove (BRGM) dan Kementerian Kehutanan Republik Indonesia.",
    "about.bio2":      "Dengan keahlian multidisiplin — survei lapangan, pengoperasian drone UAV, analisis GIS, hingga koordinasi komunitas lokal — saya berkomitmen untuk menjembatani ilmu pengetahuan dengan aksi nyata demi kelestarian ekosistem pesisir Indonesia.",
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
    "exp1.pos":        "Field Coordinator – Mangrove Rehabilitation",
    "exp1.loc":        "Pesisir Sumatera Utara & Riau",
    "exp1.d1":         "Koordinasi kegiatan penanaman dan pemeliharaan mangrove di wilayah target restorasi nasional",
    "exp1.d2":         "Pelaksanaan monitoring dan evaluasi kondisi ekosistem mangrove menggunakan metode transek",
    "exp1.d3":         "Pengoperasian drone UAV untuk pemetaan dan survei aerial kawasan mangrove",
    "exp1.d4":         "Koordinasi dengan pemerintah daerah, komunitas lokal, dan pemangku kepentingan",
    "exp2.pos":        "GIS & Remote Sensing Specialist",
    "exp2.loc":        "Jakarta & Medan",
    "exp2.d1":         "Analisis tutupan lahan dan perubahan ekosistem mangrove menggunakan citra satelit (Sentinel-2, Landsat)",
    "exp2.d2":         "Pembuatan peta tematik distribusi dan kondisi mangrove skala nasional",
    "exp2.d3":         "Pengolahan data penginderaan jauh menggunakan ArcGIS, QGIS, dan Google Earth Engine",
    "exp2.d4":         "Penyusunan laporan teknis geospasial sebagai dasar kebijakan restorasi",
    "exp3.pos":        "Community Engagement Officer",
    "exp3.loc":        "Pesisir Sumatera (Sumut, Riau, Sumsel)",
    "exp3.d1":         "Fasilitasi pelatihan dan pendampingan masyarakat pesisir dalam pengelolaan mangrove berbasis komunitas",
    "exp3.d2":         "Pelaksanaan sosialisasi program restorasi mangrove nasional kepada kelompok masyarakat lokal",
    "exp3.d3":         "Koordinasi dan pembentukan kelompok tani/nelayan peduli mangrove di wilayah target",
    "exp3.d4":         "Dokumentasi dan pelaporan kegiatan pemberdayaan masyarakat kepada pemangku kepentingan",

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

    // Footer
    "footer.copy":     "© 2025 · Burhanuddien Robbani, S.P. — Mangrove Specialist Indonesia",
  },

  en: {
    // Nav
    "nav.about":       "About",
    "nav.experience":  "Experience",
    "nav.skills":      "Skills",
    "nav.projects":    "Projects",
    "nav.gallery":     "Gallery",
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
    "about.bio":       "I am Burhanuddien Robbani, S.P., a professional in mangrove ecosystem rehabilitation, geospatial mapping, and coastal community empowerment. Over the past 3 years, I have actively contributed to the national mangrove restoration program under the Peatland and Mangrove Restoration Agency (BRGM) and the Ministry of Forestry of the Republic of Indonesia.",
    "about.bio2":      "With multidisciplinary expertise — field surveys, UAV drone operations, GIS analysis, and local community coordination — I am committed to bridging science and real-world action for the sustainability of Indonesia's coastal ecosystems.",
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
    "exp1.pos":        "Field Coordinator – Mangrove Rehabilitation",
    "exp1.loc":        "North Sumatera & Riau Coast",
    "exp1.d1":         "Coordinating mangrove planting and maintenance activities in national restoration target areas",
    "exp1.d2":         "Conducting monitoring and evaluation of mangrove ecosystem conditions using transect methods",
    "exp1.d3":         "Operating UAV drones for aerial mapping and surveying of mangrove areas",
    "exp1.d4":         "Coordinating with local governments, communities, and stakeholders",
    "exp2.pos":        "GIS & Remote Sensing Specialist",
    "exp2.loc":        "Jakarta & Medan",
    "exp2.d1":         "Land cover analysis and mangrove ecosystem change monitoring using satellite imagery (Sentinel-2, Landsat)",
    "exp2.d2":         "Production of thematic maps of national mangrove distribution and condition",
    "exp2.d3":         "Remote sensing data processing using ArcGIS, QGIS, and Google Earth Engine",
    "exp2.d4":         "Preparation of geospatial technical reports as a basis for restoration policy",
    "exp3.pos":        "Community Engagement Officer",
    "exp3.loc":        "Sumatran Coast (North Sumatra, Riau, South Sumatra)",
    "exp3.d1":         "Facilitation of training and assistance for coastal communities in community-based mangrove management",
    "exp3.d2":         "Socialization of the national mangrove restoration program to local community groups",
    "exp3.d3":         "Coordination and formation of mangrove-aware farmer/fisherman groups in target areas",
    "exp3.d4":         "Documentation and reporting of community empowerment activities to stakeholders",

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

    // Footer
    "footer.copy":     "© 2025 · Burhanuddien Robbani, S.P. — Mangrove Specialist Indonesia",
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
  // Keep an open lightbox caption in sync with the new language
  if (activeGalleryItem && !lightbox.classList.contains('hidden')) {
    const lbl = activeGalleryItem.getAttribute('data-label') || '';
    lightboxCaption.textContent = (GALLERY_CAPTIONS[currentLang] && GALLERY_CAPTIONS[currentLang][lbl]) ? GALLERY_CAPTIONS[currentLang][lbl] : lbl;
  }
  // Swap active/inactive display
  const active   = langToggle.querySelector('.lang-active');
  const inactive = langToggle.querySelector('.lang-inactive');
  active.textContent   = currentLang.toUpperCase();
  inactive.textContent = currentLang === 'id' ? 'EN' : 'ID';
  document.documentElement.setAttribute('data-lang', currentLang);
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
// COUNTER ANIMATION (Hero Stats)
// =========================================
function animateCounters() {
  if (countersAnimated) return;
  const nums = document.querySelectorAll('.stat-num');
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
// Bilingual caption map for gallery lightbox (keyed by Indonesian data-label)
const GALLERY_CAPTIONS = {
  id: {
    "Penanaman Mangrove": "Penanaman Mangrove",
    "Survei UAV":          "Survei UAV",
    "Pemetaan GIS":        "Pemetaan GIS",
    "Community Meeting":   "Community Meeting",
    "Aerial View":         "Aerial View",
    "Transek Mangrove":    "Transek Mangrove"
  },
  en: {
    "Penanaman Mangrove": "Mangrove Planting",
    "Survei UAV":          "UAV Survey",
    "Pemetaan GIS":        "GIS Mapping",
    "Community Meeting":   "Community Meeting",
    "Aerial View":         "Aerial View",
    "Transek Mangrove":    "Transect Survey"
  }
};
let activeGalleryItem = null;

const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose   = document.getElementById('lightboxClose');
const lightboxOverlay = document.getElementById('lightboxOverlay');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      const lbl = item.getAttribute('data-label') || '';
      activeGalleryItem = item;
      lightboxCaption.textContent = (GALLERY_CAPTIONS[currentLang] && GALLERY_CAPTIONS[currentLang][lbl]) ? GALLERY_CAPTIONS[currentLang][lbl] : lbl;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
  activeGalleryItem = null;
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// =========================================
// CONTACT FORM (Simulated)
// =========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type="submit"]');
  const origText = btn.textContent;
  btn.textContent = currentLang === 'id' ? 'Mengirim...' : 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    formSuccess.classList.remove('hidden');
    contactForm.reset();
    btn.textContent = origText;
    btn.disabled = false;
    setTimeout(() => formSuccess.classList.add('hidden'), 5000);
  }, 1200);
});

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
