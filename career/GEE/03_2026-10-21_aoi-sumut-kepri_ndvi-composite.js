// ============================================================
// Vertex x Robbani — Sesi 21 Okt 2026
// AOI Sumut + kepri | Cloud mask SCL | NDVI composite 2020-2026
// Change detection 2021 -> 2024 | Export GeoTIFF 10 m EPSG:4326
// Paste di code.earthengine.google.com -> Run
// ============================================================

// 1. AOI: Sumatera Utara + Kepulauan Riau (GAUL 2015 level1)
var aoi = ee.FeatureCollection('FAO/GAUL/2015/level1')
  .filter(ee.Filter.inList('ADM1_NAME', ['Sumatera Utara', 'Kepulauan Riau']))
  .union().geometry();
Map.centerObject(aoi, 6);

// 2. Sentinel-2 SR Harmonized 2020-2026, cloud < 20%
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(aoi)
  .filterDate('2020-01-01', '2027-01-01')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20));

// 3. Cloud mask via SCL (tersedia penuh 2020-2026).
//    PENTING: QA60 kosong 25 Jan 2022 - 28 Feb 2024, QA_PIXEL tidak ada di S2.
//    Untuk timeline 2020-2026 wajib pakai SCL.
function maskS2(img) {
  var scl = img.select('SCL');
  var clear = scl.eq(4).or(scl.eq(5)).or(scl.eq(6)).or(scl.eq(7)); // 4 veg, 5 non-veg, 6 air, 7 unclassified
  var s = img.updateMask(clear).multiply(0.0001);
  return s.addBands([
    s.normalizedDifference(['B8', 'B4']).rename('NDVI'),
    s.normalizedDifference(['B3', 'B11']).rename('MNDWI')
  ]);
}
var s2i = s2.map(maskS2);

// 3b. Ambil hanya band yang dipakai (perringan komputasi, hindari median band QA).
//     WAJIB sertakan NDVI + MNDWI, kalau tidak maka hilang di select.
var BANDS = ['B2', 'B3', 'B4', 'B8', 'B11', 'NDVI', 'MNDWI'];
var s2i = s2i.select(BANDS);

// 4. Composite median tahunan 2020-2026 (indeks 0=2020 ... 6=2026)
var annual = ee.List.sequence(2020, 2026).map(function(y) {
  return s2i.filter(ee.Filter.calendarRange(y, y, 'year')).median().clip(aoi);
});
var c21 = ee.Image(annual.get(1));   // 2021
var c24 = ee.Image(annual.get(4));   // 2024

// 5. Tampilan
var ndviVis = {min: 0, max: 0.8, palette: ['red', 'yellow', 'green', 'darkgreen']};
Map.addLayer(c21.select('NDVI'), ndviVis, 'NDVI 2021', true);
Map.addLayer(c24.select('NDVI'), ndviVis, 'NDVI 2024', false);

// 6. Mask mangrove: NDVI > 0.4 (sehat) DAN MNDWI < 0 (bukan air)
function mangrove(c) {
  return c.updateMask(c.select('NDVI').gt(0.4).and(c.select('MNDWI').lt(0)));
}

// 7. Change detection 2021 -> 2024: gain >= +0.1, loss <= -0.1
var chg = c24.select('NDVI').subtract(c21.select('NDVI'))
  .updateMask(mangrove(c21).select('NDVI').mask().or(mangrove(c24).select('NDVI').mask()));
var cls = chg.gte(0.1).multiply(1).add(chg.lte(-0.1).multiply(2)).rename('cls');
Map.addLayer(cls, {min: 0, max: 2, palette: ['white', 'green', 'red']}, 'Gain/Loss 21-24', false);
Map.addLayer(ee.Image().byte().paint(aoi, 1, 3), {palette: ['yellow']}, 'AOI', false);

// 8. Luas mangrove sehat (ha): 1 x pixelArea, hanya di area lolos mask
var pxHa = ee.Image.pixelArea().divide(10000);
function mangroveHa(c) {
  return mangrove(c).select('NDVI').mask().multiply(pxHa)
    .reduceRegion({reducer: ee.Reducer.sum(), geometry: aoi, scale: 10, maxPixels: 1e13})
    .get('NDVI');
}
print('Mangrove sehat 2021 (ha):', mangroveHa(c21));
print('Mangrove sehat 2024 (ha):', mangroveHa(c24));

// 9. EXPORT: Tasks > Create EXPORT (image) > GeoTIFF > Drive
//    Image: c21 / c24, Region: aoi, Scale: 10, CRS: EPSG:4326
//    File: ndvi_2021_sumut_kepri.tif / ndvi_2024_sumut_kepri.tif
