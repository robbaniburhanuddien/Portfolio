# 10 Portfolio Project Concepts — GIS, Remote Sensing & Mangrove Rehabilitation

**For:** Burhanuddien Robbani, S.P.
**Date:** 27 October 2026
**Purpose:** Content source for `PORTFOLIO_DATA.projects` in `script.js`
**Structure:** 5 professional projects (during employment) + 5 personal projects (self-development)

> ⚠️ **How to use:** figures marked `⚠️` must be verified against source documents before publishing. Unmarked figures come from data already present in `script.js` (831 ha, 498 ha, 772 ha, 1,000+ ha, 11 districts/cities).

---

# PART A — PROFESSIONAL PROJECTS (5)

---

## A1. UAV Mapping & Planting Direction Maps for Mangrove Rehabilitation

**Short description**
Designed and executed drone mapping missions over candidate mangrove rehabilitation sites, then processed the imagery into orthomosaics and planting direction maps. These maps were not filing-cabinet documents — they became the daily working reference for field implementation groups deciding where to plant and where not to.

**TL;DR**
- Planned flight missions and acquired imagery across priority rehabilitation sites.
- Produced high-resolution orthomosaics (GSD under 10 cm/px) as the spatial baseline.
- Delivered planting direction maps: area boundaries, effective area, plantable zones per community group.
- Output used directly by field groups as their working blueprint.
- The same dataset became the baseline for the following year's monitoring.

**Full Story**

*Context*
Mangrove rehabilitation often fails not because the seedlings are poor, but because people plant in the wrong place. Available spatial data usually sits at provincial scale — adequate for macro planning, inadequate for deciding whether a five-hectare patch is plantable. In locations with large tidal ranges, a few centimetres of elevation determines whether a seedling survives or drowns. The actual need was simple: one high-resolution map per site, readable by field staff, not only by GIS analysts.

*Role*
I owned the workflow end to end: mission planning, field acquisition, photogrammetric processing, and handover of the maps to technical teams and community groups. I was also the one who translated the maps into work instructions — not someone who delivered a file and left.

*Process*
Missions were planned in Dronelink to control overlap and altitude so that GSD stayed consistent. Acquisition used DJI Mavic/Phantom platforms with ground control points placed to give the orthomosaic a defensible coordinate reference. Processing ran in Agisoft Metashape: alignment, dense cloud, mesh, orthomosaic, DSM. Boundaries were then delineated in ArcGIS Pro/QGIS, overlaid with hydrological and existing-cover data, and ambiguous areas were checked on the ground. The final output was laid out for non-technical readers: clear legend, scale, north arrow, and an area table per group.

*Impact*
The planting direction maps narrowed the working area to zones that were genuinely plantable, so seedlings and labour were not wasted on hydrologically unsuitable ground. More importantly, the map gave a shared language to technical staff, community groups, and local government — the argument "can we plant here or not" moved from opinion to data.

---

## A2. Accelerated Mangrove Rehabilitation of 772 Hectares — Riau Islands

**Short description**
Delivered the 2023–2024 accelerated mangrove rehabilitation programme covering planting and first-year maintenance in the Riau Islands. My role sat at the technical–GIS intersection: making sure the area reported matched the area actually planted on the ground.

**TL;DR**
- 772 hectares of planting realised across Riau Islands Province.
- Over 1,000 hectares of maintenance area monitored.
- Area verification based on GIS polygons, not manual claims.
- Coordination across community groups and local government.
- Spatial realisation data became the basis for programme evaluation.

**Full Story**

*Context*
Acceleration programmes carry two conflicting pressures: speed of delivery and accountability of area. In a programme spanning hundreds of hectares and many implementing groups, a gap between "target area", "planted area", and "surviving area" is normal — but if it is never verified, that gap becomes a problem later. The challenge was building a verification mechanism tight enough to be credible without slowing field work.

*Role*
As technical and GIS staff, I was the bridge between central targets, field delivery, and reporting. I broke down targets per district, verified realisation polygons, and reconciled field data against imagery.

*Process*
The chain started by splitting provincial targets into district targets and then into implementing groups. Each group submitted location and area data; I verified it against drone and satellite imagery, checking whether the reported polygons actually fell within plantable ground. Unclear areas were inspected in the field. Cleaned data was compiled into progress reports with consistent maps and tables.

*Impact*
The 772-hectare realisation could be defended spatially, not just as a number in a report. The mechanism also surfaced useful findings: several areas reported as planted turned out to sit in unsuitable zones, and could be corrected early — before they became audit findings.

---

## A3. Hydrological Survey & Planting Layout Planning — North Sumatra

**Short description**
Combined field hydrological surveys with GIS analysis to determine whether hydrological intervention was needed and how planting layouts should be arranged. The results formed the technical basis for 831 hectares of planting and 498 hectares of first-year maintenance in North Sumatra.

**TL;DR**
- Hydrological surveys across intertidal zones to read actual site conditions.
- Identification of areas requiring intervention (channels, breakwaters, elevation adjustment).
- Planting layouts arranged per hydrological zone rather than a uniform grid.
- Supported realisation of 831 ha planting and 498 ha maintenance.
- Reduced failure risk from waterlogging and wave erosion.

**Full Story**

*Context*
Mangrove is an ecosystem tightly bound to hydrology. Seedlings planted in zones with excessive inundation, unsuitable salinity, or excessive wave energy will die even when planted with correct technique. Unfortunately, planning is often simplified into "divide the block evenly" — easy to budget, not always matched to field conditions.

*Role*
I ran the hydrological surveys and translated the results into layout plans. My position was technical rehabilitation facilitator: the one who measures, analyses, and then explains the recommendation to implementing teams and community groups.

*Process*
Surveys covered hydrological parameters at points representing site variation, complemented by substrate notes and existing vegetation indicators. Field data was overlaid with drone-derived DSM and tidal data to build zones: directly plantable, requiring treatment, and better left alone. Layouts were then arranged per block, including species and spacing.

*Impact*
Layouts became site-specific rather than a repeated generic pattern, contributing to the 831-hectare planting and 498-hectare first-year maintenance. For the longer term, the intervention recommendations gave the programme a technical basis for explaining why certain areas require additional treatment.

---

## A4. Drone-Imagery-Based Monitoring & Evaluation

**Short description**
Built a monitoring and evaluation workflow that turns drone imagery into field decisions: which areas need infilling, which need intensive maintenance, and which are on track. Not a photo report — a measurable, actionable one.

**TL;DR**
- Periodic M&E cycles with drone imagery as the primary data source.
- Detection of planting failure areas and infilling requirements.
- Spatial data translated into concrete action recommendations.
- Evaluation reports for implementing teams and stakeholders.
- Measurable baseline for first-year maintenance.

**Full Story**

*Context*
M&E in rehabilitation programmes often stops at administrative formality: photo before, photo after, report. Yet the value of M&E lies in harder questions — what percentage survived, in which zones mortality concentrated, and why. Without spatial data, those questions can only be answered by estimate.

*Role*
I ran spatial M&E: designing observation points, acquiring imagery, processing it, and compiling findings. I was also the one who brought those findings back to implementing teams in language they could act on.

*Process*
Observations were taken on plots representing variation across planting zones. Drone imagery was processed into orthomosaics and compared against the planting baseline to detect cover change. Low-cover areas were examined more closely — wave action, sedimentation, pests, or genuine planting failure. Findings were compiled per implementing group so that recommendations were specific rather than generic.

*Impact*
Corrective action could be taken earlier, while the cost of fixing was still low. Evaluation reports became more credible because every claim was backed by imagery and coordinates. For my own practice, the workflow became a replicable framework for other sites.

---

## A5. Community Group Facilitation & Self-Managed Administration

**Short description**
Accompanied community groups running rehabilitation activities on a self-managed (swakelola) basis — from administration and work SOPs through to reporting. This is the part that rarely appears on a map and rarely makes it into a portfolio, yet it is exactly where community-based programmes most often fail.

**TL;DR**
- Institutional accompaniment for field-level community implementing groups.
- Preparation of self-managed administration in line with programme rules.
- Early socialisation of SOPs, workflows, and project targets.
- Coordination with local government and area-holding authorities.
- Capacity building so groups can run the activity cycle themselves.

**Full Story**

*Context*
Community-based rehabilitation programmes rest on an assumption that is not always tested: that community groups are ready to run technical and administrative work at scale. In practice, many groups can plant but struggle to compile accountability documents, and many facilitators are patient with technical work but not with paperwork. When administration stalls, field activity stops with it.

*Role*
I acted as facilitator: accompanying groups through delivery, helping them build administration, and making sure they understood not only what to do but why.

*Process*
Work began with socialisation of workflow and targets, then moved into group activity planning. I accompanied the preparation of self-managed documents, verified compliance, and helped groups understand the reporting mechanism. On the technical side, groups were trained to read planting direction maps and to record field results consistently.

*Impact*
Accompanied groups ran the activity cycle with greater independence — from planning through reporting. The side effect was often more important: when groups felt involved in decisions, planting and maintenance success tended to improve, because ownership cannot be bought with incentives.

---

# PART B — PERSONAL / SELF-DEVELOPMENT PROJECTS (5)

---

## B1. Mangrove NDVI Time-Series for North Sumatra & Riau Islands with Google Earth Engine (2020–2026)

**Short description**
Built an independent Google Earth Engine pipeline to monitor mangrove NDVI dynamics across North Sumatra and the Riau Islands from 2020 to 2026. The goal was to test one proposition: that vegetation condition change can be read continuously without going to the field every month.

**TL;DR**
- Sentinel-2 Surface Reflectance Harmonized with QA60/SCL cloud masking.
- Annual composites 2020–2026 for North Sumatra and Riau Islands AOIs.
- NDVI computation plus trend classification: improving, stable, declining.
- GeoTIFF export and per-AOI statistics.
- Modular script reusable for other locations.

**Full Story**

*Context*
The monitoring I do professionally depends on field visits and drone mapping — accurate but expensive and discontinuous. Meanwhile Sentinel-2 imagery is free and revisits every five days. The question: how far can free data carry part of the monitoring load? I wanted to answer that myself rather than rely on literature claims.

*Role*
Entirely self-directed: framing the question, writing the script, testing, and evaluating results. No team, no external deadline — only the need to understand a tool that will only become more relevant.

*Process*
The chain: define AOIs in North Sumatra and Riau Islands, filter the Sentinel-2 collection per year, apply cloud masking, build annual median composites, compute NDVI, and extract per-AOI statistics. For trends, I compared values across years and classified pixels into three categories. The most time-consuming part was not programming but debugging: deprecated APIs, collections lacking an SCL band, and `maxPixels` limits that made exports fail without a clear error message.

*Impact*
I now have a pipeline that can be rerun for any location by swapping the AOI. More than that, I understand its limits: NDVI is good for relative change but cannot separate mangrove from other vegetation without supporting data. That understanding is what lets me explain results to non-technical audiences without overstating them.

---

## B2. Mangrove Canopy Density Classification with Random Forest

**Short description**
Trained a Random Forest model to classify mangrove canopy density from a combination of Sentinel-2 spectral indices and field training data. An experiment to answer: how far can machine learning replace visual interpretation, and at what point does it start to fail?

**TL;DR**
- Spectral features: NDVI, NDWI, SAVI, and mangrove-specific indices.
- Training data from field plots and drone imagery interpretation.
- Three-class output: dense, moderate, sparse.
- Validation via confusion matrix and overall accuracy.
- Analysis of which features contribute most.

**Full Story**

*Context*
Manual canopy density classification is locally consistent but not scalable and vulnerable to analyst subjectivity. Machine learning offers a way out and a trap at the same time: a model with high accuracy at one site can fail completely at another because of differences in atmosphere, substrate, or species composition.

*Role*
Independent, from training data preparation through model evaluation. I deliberately did it myself so I would understand every stage rather than simply calling a classifier.

*Process*
Training data came from two sources: field plots and interpretation of orthomosaics that carry higher resolution than Sentinel-2. Features were built from several spectral indices to give the model enough information without overfitting. Models were trained in Google Earth Engine and in Python, then evaluated with confusion matrices. The most instructive part was inspecting errors: the "moderate" class was most often confused, because spectrally it genuinely sits between two extremes.

*Impact*
I have a repeatable method and, more importantly, an understanding of its uncertainty. For portfolio and interview purposes, the project shows I can not only run a classification but also explain when its output deserves trust.

---

## B3. Interactive WebGIS of Rehabilitation Site Distribution

**Short description**
Built a lightweight WebGIS displaying the distribution of rehabilitation sites, activity status, and field photos in a single interactive map. Created to answer a simple question that is surprisingly hard to answer: "where have I actually worked?"

**TL;DR**
- Interactive map built on Leaflet and GeoJSON, no backend.
- Layers for sites, activity status, and field photos.
- Informative popups with concise metadata per site.
- Responsive and openable from a phone.
- Static deployment with no server cost.

**Full Story**

*Context*
After three years working across districts, my site data was scattered across project shapefiles, field notes, photo folders, and memory. When I had to explain my working footprint to someone else — or to myself while building a portfolio — there was no single source to open. A small problem, but one that keeps getting in the way if left alone.

*Role*
Independent, from data consolidation through deployment. I also decided what was appropriate to display and what was not, since some site data is sensitive or belongs to institutions.

*Process*
The first step was consolidation: gathering coordinates and metadata from various sources into one table. Then conversion to GeoJSON with a consistent structure. The interface was built with Leaflet — chosen because it is lightweight and needs no build tooling. Popups were designed to show information that is actually useful: site name, year, activity type, and one photo.

*Impact*
I have a single page I can open at any time to explain my working footprint visually. For the portfolio, it also serves as technical evidence: not only can I produce maps in desktop GIS, I can serve them on the web.

---

## B4. UAV Orthomosaic Accuracy Assessment against Ground Control Points

**Short description**
Tested how accurate orthomosaics produced by Metashape and Pix4D are when validated against surveyed GCPs. A small study answering a question that comes up constantly in the field but is rarely answered with numbers: how much should we trust drone-derived coordinates?

**TL;DR**
- GNSS-surveyed GCPs used as ground truth.
- Horizontal and vertical RMSE comparison between software.
- Metashape versus Pix4D on the same dataset.
- Effect of GCP count and distribution on accuracy.
- Mission setup recommendations for rehabilitation work.

**Full Story**

*Context*
Drone maps are routinely used to define area boundaries and compute extent, yet rarely does anyone ask how large the error is. In rehabilitation work, a one-metre boundary error can translate into tens of hectares of discrepancy once multiplied along a coastline. Without accuracy figures, the claim "this map is accurate" is only an assumption.

*Role*
Independent. I designed the test, acquired the data, processed it in two software packages, and ran the calculations myself.

*Process*
I placed GCPs in a planned distribution, measured their coordinates with GNSS, then processed the same dataset in Metashape and Pix4D under equivalent settings. Results were compared against GCP coordinates to compute horizontal and vertical RMSE. I also tested variations in GCP count to see how much it mattered — a practical question, since field conditions often limit both time and access.

*Impact*
I have numbers rather than assumptions about achievable accuracy. Professionally, this lets me recommend mission setups that are proportionate: not over-engineered for coarse work, not under-specified for work that needs precision.

---

## B5. Mangrove Blue Carbon Stock Estimation from NDVI and Allometric Equations

**Short description**
Estimated mangrove biomass and carbon stock by combining Sentinel-2 NDVI with diameter-based allometric equations. A deliberate exercise to enter the blue carbon space — an area I believe will only grow in importance over the coming years.

**TL;DR**
- NDVI as a proxy for above-ground biomass.
- Genus-specific allometric equations for mangrove.
- Biomass-to-carbon conversion using a carbon fraction.
- Estimated tonnes of carbon per hectare per site.
- Simple uncertainty analysis and explicit limitations.

**Full Story**

*Context*
Blue carbon is one of the main reasons mangrove receives attention far disproportionate to its area compared with terrestrial ecosystems. Yet the ability to quantify it is not automatically held by people who work in the field. I saw this gap as an opportunity: someone who can plant mangrove and also estimate its carbon is far rarer than someone who can do only one.

*Role*
Independent, entirely self-taught. I read the literature, selected equations, and ran the calculations with full awareness that the output is a rough estimate, not an auditable figure.

*Process*
The chain: gather allometric equations available for mangrove genera common in Indonesia, select those best matched to data I could access, extract Sentinel-2 NDVI as a cover proxy, compute biomass, convert to carbon using a standard carbon fraction, and express it per hectare. I also derived an uncertainty range from the variation across the equations used.

*Impact*
I have an initial framework I can develop further — and an honest understanding of its limits. Career-wise, it gives me a shared vocabulary with people working in blue carbon, so I can enter that conversation as a participant rather than an observer.

---

# VERIFICATION NOTES

Before publishing, double-check:

| Item | Source | Status |
|------|--------|--------|
| 831 ha planting, North Sumatra | `script.js` exp1 duties | ✅ in data |
| 498 ha maintenance, North Sumatra | `script.js` exp1 duties | ✅ in data |
| 772 ha planting, Riau Islands | `script.js` exp2 duties | ✅ in data |
| 1,000+ ha maintenance, Riau Islands | `script.js` exp2 duties | ✅ in data |
| 11 districts/cities | `script.js` stats | ✅ in data |
| Number of UAV flight missions | — | ⚠️ no confirmed figure |
| Number of community groups accompanied | — | ⚠️ check programme reports |
| Start dates of personal projects | — | ⚠️ align with actual dates |

**Consistency note:** the figures 334 ha (P0) + 636 ha (P1) in the earlier CV notes do not match the 831 ha in `script.js`. This is likely a difference between target and realisation, or a difference in geographic scope. A decision is needed on which figure to use so that the CV and the portfolio do not tell two different stories.

---

# CURATION RECOMMENDATION

From the 10 projects above, feature **six** on the portfolio page:

1. **A1** — UAV Mapping & Planting Direction Maps *(most visual, easiest to demo)*
2. **A3** — Hydrological Survey & Layout Planning *(most technical, shows depth)*
3. **A2** — Accelerated Rehabilitation 772 ha *(strongest numbers)*
4. **B1** — NDVI Time-Series with GEE *(shows initiative and modern skills)*
5. **B5** — Blue Carbon Estimation *(differentiator for international roles)*
6. **B3** — Interactive WebGIS *(live-demoable, proof of a finished product)*

The remaining four stay as interview material and can live in a "project archive" page if needed.
