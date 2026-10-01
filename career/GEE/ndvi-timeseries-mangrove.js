/**
 * NDVI Time-Series Monitoring - Rehabilitasi Mangrove
 * Google Earth Engine | Robbani (BRGM / PPIU M4CR SUMUT)
 *
 * Aim: Monitoring rehabilitasi mangrove (Kepri & Bangka Belitung)
 * Output: Peta NDVI + composite tahunan 2015-2025
 *
 * HOW TO USE:
 * 1. Open https://code.earthengine.google.com
 * 2. Paste this script
 * 3. Edit AOI below (or keep default = Sumatera Utara)
 * 4. Click Run -> map appears
 * 5. Screenshot and send to Vertex for review
 */

// ============================================================
// 1. AOI (Area of Interest)
// ============================================================
// Default: Sumatera Utara coastal belt. Replace with your work area AOI.
var AOI = ee.Geometry.Rectangle([98.0, 1.5, 100.5, 4.5]);
Map.centerObject(AOI, 8);

// ============================================================
// 2. SENTINEL-2 C1 (HARMONIZED) + CLOUD MASKING
// ============================================================
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(AOI)
  .filterDate('2015-01-01', '2026-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// Cloud mask: QA_PIXEL bit 0 (opaque) + bit 1 (cirrus) + bit 2 (cloud shadow)
var cloudMaskS2 = function(image) {
  var clear = image.select('QA_PIXEL')
                      .bitwiseAnd(parseInt('111', 2))
                      .eq(0);
  return image.updateMask(clear)
            .multiply(0.0001)
            .copyProperties(image, ['system:time_start']);
};

// ============================================================
// 3. INDICES: NDVI, EVI, MNDWI, MVI
// ============================================================
function addIndices(image) {
  var nir = image.select('B8');
  var red = image.select('B4');
  var green = image.select('B3');
  var blue = image.select('B2');
  var swir1 = image.select('B11');

  var NDVI = image.expression('(NIR - RED) / (NIR + RED)', {
    'NIR': nir, 'RED': red
  }).rename('NDVI');

  var EVI = image.expression(
    '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))',
    {'NIR': nir, 'RED': red, 'BLUE': blue}
  ).rename('EVI');

  var MNDWI = image.expression('(G - SWIR) / (G + SWIR)', {
    'G': green, 'SWIR': swir1
  }).rename('MNDWI');

  var MVI = image.expression('((NIR - G).abs() / (SWIR - G).abs())', {
    'NIR': nir, 'G': green, 'SWIR': swir1
  }).rename('MVI');

  return image.addBands([NDVI, EVI, MNDWI, MVI]);
}

var s2Idx = s2.map(cloudMaskS2).map(addIndices);

// ============================================================
// 4. TIME-SERIES COMPOSITE BY YEAR
// ============================================================
var years = ee.List.sequence(2015, 2025);
var annual = years.map(function(y) {
  var yColl = s2Idx.filter(ee.Filter.calendarRange(y, y, 'year'));
  return yColl.reduce(ee.Reducer.median()).addBands(
    ee.Image.constant(y).rename('year')
  );
});
var annualComposite = ee.ImageCollection(annual).toBands();

// ============================================================
// 5. MAP DISPLAY
// ============================================================
var ndviVis = {min: 0, max: 0.8, palette: ['red', 'yellow', 'green', 'darkgreen']};

var latest = s2Idx.filterDate('2025-01-01', '2026-12-31').first();
Map.addLayer(latest.select('NDVI'), ndviVis, 'NDVI 2025-2026', false);

var y2025 = annualComposite.select('NDVI_2025');
Map.addLayer(y2025, ndviVis, 'NDVI 2025 (annual median)', true);

Map.addLayer(ee.Image().byte().paint(ee.Image().geometry(), 1, 3),
             {palette: ['red']}, 'AOI outline', false);

// ============================================================
// 6. EXPORT SETUP
// ============================================================
// Tasks -> Create EXPORT (image) -> GeoTIFF -> Drive
print('=== EXPORT INSTRUCTIONS ===');
print('1. Tab "Tasks" -> "Create EXPORT (image)"');
print('2. Description: ndvi_timeseries_mangrove_2015_2025');
print('3. Image: annualComposite, Region: AOI, Scale: 10 m');
print('4. File format: GeoTIFF -> Drive');
print('AOI area (ha):', AOI.area(10000));

// ============================================================
// 7. QUICK STATS
// ============================================================
var stats = annualComposite.select('NDVI_2025').reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: AOI,
  scale: 500,
  maxPixels: 1e9
}).get('NDVI_2025');
print('Mean NDVI 2025 in AOI:', stats);
