# Pipeline 5 Peta — GEE Mangrove Monitoring

## Overview
Pipeline ini menghasilkan 5 peta untuk monitoring rehabilitasi mangrove BRGM 2021-2024.

## Map 1: Baseline NDVI 2021
- Input: Sentinel-2 SR Harmonized, filter 2021-01-01 to 2021-12-31, cloud < 20%
- Output: GeoTIFF 10m, CRS EPSG:4326
- Script: career/GEE/ndvi-timeseries-mangrove.js

## Map 2: Post-Rehab NDVI 2024
- Input: Sentinel-2 SR Harmonized, filter 2024-01-01 to 2024-12-31, cloud < 20%
- Output: GeoTIFF 10m, CRS EPSG:4326

## Map 3: Change Detection (Gain/Loss)
- Input: NDVI 2024 minus NDVI 2021
- Threshold: gain >= +0.1 (recovered), loss <= -0.1 (degraded)
- Output: GeoTIFF 10m, 3 classes (gain/loss/stable)

## Map 4: Time-Series NDVI 2020-2026
- Input: Annual median NDVI 2020-2026
- Output: GeoTIFF stack, 7 bands (one per year)

## Map 5: Dashboard (GEE App)
- Input: All maps above
- Output: Interactive web app URL

## Pipeline Script
```javascript
// Step 1: AOI
var aoi = ee.FeatureCollection('FAO/GAUL/2015/level1')
  .filter(ee.Filter.inList('ADM1_NAME', ['Sumatera Utara']))
  .union();

// Step 2: Load Sentinel-2
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(aoi)
  .filterDate('2020-01-01', '2026-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// Step 3: Cloud mask via SCL
// PENTING: QA60 berlubang 25 Jan 2022 - 28 Feb 2024, QA_PIXEL tidak ada di S2.
// Timeline 2020-2026 WAJIB masking via SCL.
function maskS2(img) {
  var scl = img.select('SCL');
  var clear = scl.eq(4).or(scl.eq(5)).or(scl.eq(6)).or(scl.eq(7));
  return img.updateMask(clear).divide(10000);
}
var s2clean = s2.map(maskS2);

// Step 4: NDVI function
function addNDVI(img) {
  return img.addBands(
    img.normalizedDifference(['B8', 'B4']).rename('NDVI'));
}

// Step 5: Annual composite
var years = ee.List.sequence(2020, 2026);
var annual = ee.ImageCollection(years.map(function(y) {
  return s2clean.filter(ee.Filter.calendarRange(y, y, 'year'))
    .median().clip(aoi)
    .normalizedDifference(['B8', 'B4'])
    .rename('NDVI_' + y);
}));

// Step 6: Change detection
var ndvi2021 = annual.filter(ee.Filter.inList('system:band_name', ['NDVI_2021'])).first();
var ndvi2024 = annual.filter(ee.Filter.inList('system:band_name', ['NDVI_2024'])).first();
var change = ndvi2024.subtract(ndvi2021).clip(aoi);

// Step 7: Visualize
Map.addLayer(ndvi2021, {min:0, max:0.8, palette:['red','yellow','green']}, 'NDVI 2021');
Map.addLayer(ndvi2024, {min:0, max:0.8, palette:['red','yellow','green']}, 'NDVI 2024');
Map.addLayer(change, {min:-0.3, max:0.3, palette:['brown','white','green']}, 'Change');
```