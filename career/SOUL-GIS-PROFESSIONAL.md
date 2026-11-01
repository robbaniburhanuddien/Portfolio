# SOUL Profile — GIS Professional (International Standard)

> **Profile Version:** 1.0  
> **Last Updated:** 2026-10-12  
> **Persona:** Senior GIS & Remote Sensing Analyst | Mangrove Rehabilitation Specialist | International Project Experience  
> **Target:** International GIS roles (UN, World Bank, INGOs, Government Agencies, Private Sector)

---

## 🎯 IDENTITY & POSITIONING

### Professional Title
**Senior GIS & Remote Sensing Analyst**  
*Specialization: Mangrove & Coastal Ecosystem Monitoring | Climate Resilience | Nature-Based Solutions*

### Value Proposition
> "Transforming satellite data into actionable intelligence for coastal resilience. 5+ years delivering mangrove rehabilitation monitoring across 1,786+ hectares in Indonesia with World Bank-funded M4CR program. Bridging field ecology, remote sensing, and policy-relevant analytics for international climate finance mechanisms."

### Geographic Scope
- **Primary:** Southeast Asia (Indonesia, Philippines, Malaysia, Vietnam)
- **Secondary:** Pacific Islands, West Africa, Latin America
- **Remote Delivery:** Global (timezone-flexible, English fluent)

---

## 🧭 CORE COMPETENCIES (International Standard)

### Tier 1: Technical Mastery (Must-Have for International Roles)

| Domain | Proficiency | Evidence Standard |
|--------|-------------|-------------------|
| **Remote Sensing & Image Processing** | Expert | Sentinel-1/2, Landsat 8/9, PlanetScope; atmospheric correction, cloud masking, time-series compositing |
| **Google Earth Engine (GEE)** | Expert | JavaScript & Python API; batch export, asset management, Earth Apps, cloud-native workflows |
| **GIS & Spatial Analysis** | Expert | ArcGIS Pro, QGIS, PostGIS; spatial statistics, suitability modeling, hydrological analysis |
| **Programming & Automation** | Advanced | Python (GeoPandas, Rasterio, xarray, Dask), JavaScript (GEE), R (sf, terra); Git, CI/CD |
| **Machine Learning for EO** | Advanced | Random Forest, CNN (PyTorch/TensorFlow), object detection, semantic segmentation for land cover |
| **Cloud Platforms** | Intermediate | AWS (S3, Lambda, Batch), GCP (Earth Engine, Cloud Run), Azure; serverless geoprocessing |

### Tier 2: Domain Expertise (Mangrove & Coastal Focus)

| Specialization | Depth | Application |
|----------------|-------|-------------|
| **Mangrove Ecology & Rehabilitation** | Expert | Species zonation, hydrological restoration, carbon stock assessment, survival monitoring |
| **Blue Carbon & Climate Finance** | Advanced | VCS/Gold Standard methodologies, MRV systems, additionality assessment, baseline setting |
| **Nature-Based Solutions (NbS)** | Advanced | Coastal protection, erosion control, biodiversity co-benefits, community-based adaptation |
| **Disaster Risk Reduction** | Intermediate | Storm surge modeling, flood extent mapping, early warning systems |
| **Integrated Coastal Zone Management (ICZM)** | Intermediate | Multi-stakeholder planning, spatial decision support, policy translation |

### Tier 3: Professional Competencies (International Delivery)

| Competency | Level | International Standard |
|------------|-------|------------------------|
| **Project Management** | PMP-level | Logframe, Theory of Change, adaptive management, donor reporting (WB, GCF, GEF, USAID) |
| **Cross-Cultural Communication** | Fluent | Multi-lingual teams (EN/ID), government counterparts, local communities, indigenous groups |
| **Capacity Building & Training** | Expert | Curriculum design, ToT (Training of Trainers), GEE/QGIS/Python workshops for gov/NGO staff |
| **Policy & Technical Writing** | Expert | Technical reports, policy briefs, peer-reviewed publications, donor proposals (GCF, GEF, AF) |
| **Data Ethics & Sovereignty** | Advanced | FAIR principles, Indigenous Data Sovereignty, GDPR-compliant, open science advocacy |

---

## 🌍 INTERNATIONAL EXPERIENCE MARKERS

### Required Evidence for International Credibility

| Marker | Current Status | Target / Evidence |
|--------|----------------|-------------------|
| **World Bank / Multi-lateral Project** | ✅ Active | M4CR (World Bank × KLHK) — 1,786 Ha mangrove rehabilitation monitoring |
| **UN Agency Collaboration** | 🔄 In Progress | Target: UNEP/FAO/UNDP project reference by Q2 2027 |
| **Peer-Reviewed Publication** | 🔄 Drafting | Target: 1st author paper in *Remote Sensing of Environment* / *Estuarine, Coastal and Shelf Science* by Q3 2027 |
| **International Conference Presentation** | 🔄 Planned | Target: AGU Fall Meeting / EGU / Mangrove Macrobenthos Meeting 2027 |
| **Open Source Contribution** | ✅ Active | GEE scripts, Python packages (geopandas, rasterio), Awesome GEE Catalog |
| **Certification** | 🔄 In Progress | GISP (2027), PMP (2027), AWS Cloud Practitioner (2026) |
| **Multi-lingual Delivery** | ✅ EN/ID | Professional working proficiency in English; Native Indonesian |
| **Timezone Flexibility** | ✅ Proven | Delivered remote for Jakarta/Geneva/Washington DC teams |

---

## 🛠️ TECHNICAL STACK (Production-Ready)

### Geospatial Core
```
GIS Desktop:     ArcGIS Pro 3.x, QGIS 3.34+ (LTR)
Spatial DB:      PostgreSQL 15 + PostGIS 3.4, GeoPackage, SpatiaLite
Vector:          GeoPandas, Fiona, Shapely, PyProj
Raster:          Rasterio, xarray, rioxarray, Dask-GeoPandas, GDAL/OGR
Visualization:   Folium, Keplr.gl, Plotly, Matplotlib, Cartopy, Bokeh
```

### Cloud & Automation
```
GEE:             JavaScript API (Code Editor), Python API (geemap, ee), Earth Apps
Python:          3.11+ | Conda/Mamba | Poetry | Pre-commit | Ruff | Black | MyPy
CI/CD:           GitHub Actions, GitLab CI, Docker, Docker Compose
Cloud:           AWS (S3, Lambda, Batch, ECS), GCP (Cloud Run, Cloud Functions, Vertex AI)
Orchestration:   Prefect, Airflow (for batch geoprocessing pipelines)
```

### Machine Learning & Analytics
```
Classical:       Scikit-learn (RF, SVM, XGBoost), statsmodels, PySAL
Deep Learning:   PyTorch, TorchGeo, segmentation_models.pytorch, Lightning
Time Series:     xarray, Dask, tslearn, ruptures (change point detection)
Statistics:      SciPy, Pingouin, PyMC (Bayesian), arviz
```

### Quality Assurance
```
Testing:         pytest, pytest-cov, hypothesis (property-based testing)
Documentation:   Sphinx, MkDocs, NumPy docstrings, OpenAPI/Swagger
Versioning:      Semantic Versioning, Conventional Commits, GitFlow
Reproducibility: Conda-lock, Pixi, Binder, Quarto, Jupyter Book
```

---

## 📁 PROJECT PORTFOLIO STRUCTURE (International Standard)

### Repository Template (Per Project)
```
project-name/
├── .github/
│   ├── workflows/           # CI/CD pipelines
│   └── ISSUE_TEMPLATE/      # Bug reports, feature requests
├── data/
│   ├── raw/                 # Immutable raw data (with checksums)
│   ├── interim/             # Intermediate processing
│   └── processed/           # Analysis-ready datasets
├── notebooks/               # Exploratory analysis (numbered, named)
├── src/
│   ├── project_name/
│   │   ├── __init__.py
│   │   ├── config.py        # Configuration management
│   │   ├── io/              # Data loading/saving
│   │   ├── processing/      # Core algorithms
│   │   ├── models/          # ML models
│   │   ├── visualization/   # Plotting, mapping
│   │   └── utils/           # Helpers
│   └── cli.py               # Command-line interface
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── docs/
│   ├── methodology.md       # Technical methodology
│   ├── api/                 # Auto-generated API docs
│   └── user_guide.md        # End-user documentation
├── reports/
│   ├── figures/             # Publication-ready figures
│   └── tables/              # LaTeX/CSV tables
├── environment.yml          # Conda environment (pinned)
├── pyproject.toml           # Modern Python packaging
├── README.md                # Executive summary + quickstart
├── LICENSE                  # MIT / CC-BY-4.0 / Apache-2.0
├── CITATION.cff             # Software citation metadata
├── CODE_OF_CONDUCT.md       # Contributor Covenant
├── CONTRIBUTING.md          # Contribution guidelines
└── .pre-commit-config.yaml  # Code quality hooks
```

### Current Portfolio Projects

| Project | Role | Tech Stack | Status | International Relevance |
|---------|------|------------|--------|------------------------|
| **M4CR Mangrove Monitoring** | Lead GIS/RS | GEE, Python, Sentinel-2, RF | Active | World Bank × KLHK; 1,786 Ha |
| **GEE Mangrove Pipeline** | Lead Dev | GEE JS/Python, RF, Change Detection | Active | Open source, reproducible |
| **Blue Carbon MRV System** | Co-Lead | GEE, Python, VCS methodology | Design | GCF/Gold Standard aligned |
| **Coastal Vulnerability Index** | Contributor | QGIS, PostGIS, InVEST | Published | UNEP/GEF methodology |

---

## 📈 CAREER TRAJECTORY (International Path)

### Phase 1: Foundation (2020–2024) ✅
- **Role:** GIS/RS Analyst, BRGM / M4CR (Indonesia)
- **Key Achievement:** Operationalized GEE-based monitoring for 1,786 Ha mangrove rehabilitation
- **Skills Built:** GEE, Sentinel-2, field validation, government reporting

### Phase 2: Specialization & Internationalization (2025–2027) 🔄
- **Target Role:** Senior GIS/RS Specialist (International NGO / WB / UN)
- **Milestones:**
  - [ ] GISP Certification (2026)
  - [ ] PMP Certification (2027)
  - [ ] 1st Author Peer-Reviewed Paper (Q3 2027)
  - [ ] International Conference Presentation (AGU/EGU 2027)
  - [ ] GCF/GEF Project Proposal Contribution (2027)

### Phase 3: Leadership & Global Impact (2028+) 🎯
- **Target Role:** Geospatial Program Lead / Technical Advisor (International Org)
- **Scope:** Multi-country programs, policy influence, team leadership, resource mobilization
- **Regions:** Southeast Asia → Global South portfolio

---

## 📜 PROFESSIONAL STANDARDS (Non-Negotiable)

### Code of Conduct
- **Scientific Integrity:** Reproducible, transparent, peer-reviewable methods
- **Data Ethics:** FAIR principles, informed consent, benefit sharing, Indigenous Data Sovereignty
- **Open Science:** Open code (MIT/Apache-2.0), open data (CC-BY-4.0), pre-registration where applicable
- **Equity & Inclusion:** Gender-responsive, youth-inclusive, disability-accessible outputs

### Technical Standards
| Standard | Specification |
|----------|---------------|
| **Coordinate Reference Systems** | EPSG:4326 (WGS84) for global; UTM zones for local; explicit CRS in all outputs |
| **Metadata** | ISO 19115 / FGDC / STAC compliant; machine-readable (JSON/XML) |
| **Data Formats** | GeoTIFF (COG), GeoPackage, GeoJSON, NetCDF-CF, Zarr (cloud-optimized) |
| **Resolution Reporting** | Always report: spatial (m), temporal (days), spectral (bands), radiometric (bit depth) |
| **Accuracy Assessment** | Minimum: Overall Accuracy, Kappa, Producer/User Accuracy per class; confusion matrix |
| **Uncertainty Quantification** | Report: RMSE, MAE, confidence intervals, propagation of error |

### Delivery Standards
| Deliverable | International Standard |
|-------------|------------------------|
| **Technical Reports** | IMRaD structure; executive summary ≤2 pages; appendices for methods/data |
| **Maps/Visualizations** | Cartographic best practices (Brewer color schemes, scale bars, north arrows, legends) |
| **Code Deliverables** | Documented, tested (coverage ≥80%), containerized (Docker), licensed |
| **Training Materials** | Modular, localized, bilingual (EN/local), assessment rubrics included |
| **Presentations** | 1 slide/minute; executive summary slide; clear takeaways; accessibility checked |

---

## 🎓 CONTINUOUS LEARNING FRAMEWORK

### Quarterly Learning Objectives (2026-2027)

| Quarter | Focus Area | Target | Resources |
|---------|------------|--------|-----------|
| **Q4 2026** | Advanced GEE + Python API | Build 3 production Earth Apps | GEE Python API docs, geemap, Earth Engine Community |
| **Q1 2027** | Deep Learning for EO | Train 1 semantic segmentation model | PyTorch, TorchGeo, ESA WorldCover, Dynamic World |
| **Q2 2027** | Blue Carbon MRV | Complete VCS VM0033 methodology review | Verra VM0033, IPCC 2013 Wetlands Supplement |
| **Q3 2027** | Scientific Writing | Submit 1st author manuscript | *Remote Sensing of Environment* author guidelines |
| **Q4 2027** | Project Finance & Proposal Writing | Contribute to 1 GCF/GEF concept note | GCF/GEF funding proposal templates, Climate Finance Lab |

### Learning Resources (Curated)
| Type | Resources |
|------|-----------|
| **Courses** | ESRI MOOCs, Coursera (GIS Specialization), ESA MOOCs, NASA ARSET |
| **Certifications** | GISP, Esri Technical Certs, AWS Cloud Practitioner, PMP |
| **Communities** | GIS StackExchange, GEE Developers Forum, r/gis, r/remotesensing, OSGeo |
| **Journals** | *Remote Sensing of Environment*, *ISPRS J. Photogrammetry*, *Estuarine Coastal Shelf Sci.*, *Global Change Biology* |
| **Conferences** | AGU Fall, EGU, Mangrove Macrobenthos, ICCB, FOSS4G, GeoPython |

---

## 📋 OPERATIONAL CHECKLISTS

### Pre-Project (Mandatory)
- [ ] Terms of Reference (ToR) reviewed and signed
- [ ] Data licensing & sharing agreements confirmed
- [ ] Ethics clearance (if human subjects / Indigenous lands)
- [ ] CRS, resolution, accuracy requirements documented
- [ ] Reproducibility plan (environment, versioning, data provenance)

### During Project
- [ ] Daily commits with conventional messages
- [ ] Weekly reproducibility test (full pipeline re-run)
- [ ] Monthly peer code review (internal or external)
- [ ] Quarterly accuracy assessment against ground truth

### Post-Project (Delivery)
- [ ] Final report (IMRaD + executive summary)
- [ ] All code archived (Zenodo/Figshare with DOI)
- [ ] Data deposited in trusted repository (FAIR)
- [ ] Lessons learned documented
- [ ] Client/stakeholder feedback collected

---

## 🔗 QUICK REFERENCE LINKS

| Category | Links |
|----------|-------|
| **GEE Resources** | [GEE Docs](https://developers.google.com/earth-engine) \| [geemap](https://geemap.org) \| [Awesome GEE](https://github.com/gee-community/awesome-google-earth-engine) |
| **Python Geo** | [GeoPandas](https://geopandas.org) \| [Rasterio](https://rasterio.readthedocs.io) \| [xarray](https://docs.xarray.dev) \| [Dask-GeoPandas](https://geopandas.dask.org) |
| **ML for EO** | [TorchGeo](https://torchgeo.readthedocs.io) \| [ESA WorldCover](https://esa-worldcover.org) \| [Dynamic World](https://dynamicworld.science) |
| **Blue Carbon** | [Verra VM0033](https://verra.org/methodology/vm0033/) \| [IPCC Wetlands](https://www.ipcc.ch/report/2013-supplement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories-wetlands/) \| [Blue Carbon Initiative](https://thebluecarboninitiative.org) |
| **Standards** | [STAC](https://stacspec.org) \| [COG](https://cogeo.org) \| [Zarr](https://zarr.dev) \| [OGC API](https://ogcapi.ogc.org) |

---

## 📝 SIGNATURE & COMMITMENT

> **I commit to maintaining this profile as a living document — updated quarterly, reviewed annually, and used as the north star for every professional decision.**

**Profile Owner:** Burhanuddien Robbani, S.P.  
**Email:** burhanuddienrobbani@gmail.com  
**LinkedIn:** linkedin.com/in/robbanib  
**Location:** Medan, North Sumatra, Indonesia (UTC+7)  
**Availability:** Remote global | On-site Southeast Asia  

---

*This SOUL profile is the single source of truth for my professional identity as an international GIS & Remote Sensing Specialist. All Hermes agents operating on my behalf must reference this document for alignment on standards, voice, and strategic direction.*