var dataset = ee.Image('USGS/SRTMGL1_003');
var elevation = dataset.select('elevation');
var data = dataset.clip(roi);
var SA_DEM = data.select('elevation')
print(SA_DEM,'elevation');

// Add layer Study Area DEM and Global DEM
Map.addLayer(SA_DEM, {min: 0, max: 3000}, 'StudyArea');
Map.addLayer(dataset, {min: 0, max: 3000}, 'Dataset');

// Download or export SRTM DEM to your google drive
Export.image.toDrive({
  image:SA_DEM,
  description:'SRTMDEM',
  scale:30,
  region:roi,
  maxPixels: 1e13
})