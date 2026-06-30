// Mock OpenKGA datasets. Replace with CMS / DB / API fetcher when ready.
// Shape mirrors blog posts so components stay consistent.

// Topic categories
export const TOPIC_CATEGORIES = [
  { slug: "all", label: "ទាំងអស់", color: "orange" },
  { slug: "boundary", label: "ព្រំដែនរដ្ឋបាល", color: "blue" },
  { slug: "transport", label: "ផ្លូវ និងដឹកជញ្ជូន", color: "purple" },
  { slug: "hydrology", label: "ទន្លេ និងបឹង", color: "green" },
  { slug: "landuse", label: "ការប្រើប្រាស់ដី", color: "orange" },
  { slug: "demographics", label: "ប្រជាសាស្ត្រ", color: "red" },
];

// File format filters
export const FORMATS = [
  { slug: "all", label: "ទាំងអស់" },
  { slug: "shapefile", label: "Shapefile" },
  { slug: "geojson", label: "GeoJSON" },
  { slug: "kml", label: "KML" },
  { slug: "raster", label: "Raster Map" },
  { slug: "geotiff", label: "GeoTIFF" },
  { slug: "csv", label: "CSV" },
  { slug: "pdf", label: "PDF" },
];

// Licenses (re-used in cards & detail page)
export const LICENSES = {
  "open-source": { label: "Open Source", url: null },
  "not-specified": { label: "Not specified", url: null },
  "copyright-2023": { label: "Copyright © 2023", url: null },
  "cc-by": { label: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/" },
  "cc-by-sa": { label: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0/" },
  "cc-zero": { label: "CC0 (Public Domain)", url: "https://creativecommons.org/publicdomain/zero/1.0/" },
  "odbl": { label: "ODbL", url: "https://opendatacommons.org/licenses/odbl/" },
};

export const datasets = [
  {
    slug: "cambodia-province-boundary-2026",
    category: "boundary",
    format: "shapefile",
    title: "ព្រំដែនរាជធានី-ខេត្តកម្ពុជា ឆ្នាំ ២០២៦",
    excerpt:
      "ទិន្នន័យព្រំដែនរដ្ឋបាលថ្នាក់រាជធានី-ខេត្តនៃប្រទេសកម្ពុជា មាន ២៦ ប៉ូលីហ្គោន (រាជធានី-ខេត្ត ២៥ និងបឹងទន្លេសាប ១)។",
    coverImage: "/SharedDataThumbnail/cam_province_boundary.jpg",
    fileSize: "2.1 MB",
    fileFormat: "Shapefile (.shp)",
    lastUpdated: "2026-06-30",
    license: "open-source",
    downloadUrl: "https://drive.google.com/file/d/1I2S0kii2MBIlnZPOhwNDaEVzKYxtgRK9/view?usp=sharing",
    source: "MLMUPC",
    crs: "WGS 84 / UTM Zone 48N (EPSG:32648)",
    featureCount: 26,
    description: [
      { type: "paragraph", text: "សំណុំទិន្នន័យនេះជាប៉ូលីហ្គោនព្រំដែនរដ្ឋបាលនៃរាជធានី និងខេត្តទាំង ២៥ របស់ប្រទេសកម្ពុជា ព្រមទាំងប៉ូលីហ្គោនបឹងទន្លេសាប។" },
      { type: "paragraph", text: "ទិន្នន័យត្រូវបានផ្តល់ដោយក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់ (MLMUPC) ហើយប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N។" },
      { type: "heading", text: "Attributes" },
      { type: "paragraph", text: "តារាងគុណលក្ខណៈរួមមាន៖ លេខកូដរាជធានី-ខេត្ត (Pro_Code), ឈ្មោះជាភាសាខ្មែរ (Name_Kh), ឈ្មោះសរសេរជាអក្សរឡាតាំង (Name_Li), ឈ្មោះជាភាសាអង់គ្លេស (Name_En), ប្រភេទរដ្ឋបាល (Class), ប្រវែងបរិមាត្រ (Shape_Leng) និងផ្ទៃក្រឡា (Shape_Area)។" },
    ],
    tags: ["boundary", "administrative", "cambodia", "MLMUPC"],
  },
  {
    slug: "cambodia-district-commune-boundaries-2026",
    category: "boundary",
    format: "shapefile",
    title: "ព្រំដែនស្រុក និងឃុំ-សង្កាត់កម្ពុជា ឆ្នាំ ២០២៦",
    excerpt:
      "ទិន្នន័យព្រំដែនរដ្ឋបាលមាន ២១៧ ប៉ូលីហ្គោនថ្នាក់ស្រុក និង ១,៧៥៦ ប៉ូលីហ្គោនថ្នាក់ឃុំ។",
    coverImage: "/SharedDataThumbnail/cam_dist_com_boundary.jpg",
    fileSize: "16.8 MB",
    fileFormat: "Shapefile (.shp)",
    lastUpdated: "2026-06-30",
    license: "open-source",
    downloadUrl: "https://drive.google.com/file/d/1CgFqoiBt9m2iUesFEEnxHIIkAY-kGkc-/view?usp=sharing",
    source: "N/A",
    crs: "WGS 84 / UTM Zone 48N (EPSG:32648)",
    featureCount: 1973,
    description: [
      { type: "paragraph", text: "សំណុំទិន្នន័យនេះមានពីរស្រទាប់៖ District_Boundary ចំនួន ២១៧ ប៉ូលីហ្គោន និង Commune_poly ចំនួន ១,៧៥៦ ប៉ូលីហ្គោន។" },
      { type: "paragraph", text: "ស្រទាប់ទាំងពីរប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N ហើយប្រភពដើមមិនត្រូវបានបញ្ជាក់។" },
      { type: "heading", text: "Layers and attributes" },
      { type: "paragraph", text: "District_Boundary រួមមាន Pro_Code, Dist_Code, Name_Kh, Name_En, Name_Kh_Lm និង Class។ Commune_poly រួមមាន Class, Pro_Code, Dist_Code, Com_Code, Name_Kh, Name_En និង Name_Kh_Lm។" },
    ],
    tags: ["boundary", "district", "commune", "cambodia"],
  },
  {
    slug: "phnom-penh-roads-network",
    category: "transport",
    format: "shapefile",
    title: "បណ្តាញផ្លូវភ្នំពេញ",
    excerpt:
      "ទិន្នន័យបណ្តាញផ្លូវក្នុងរាជធានីភ្នំពេញចំនួន ៩,៤៣៧ ខ្សែ ដែលបានទាញយកពី OpenStreetMap (OSM)។",
    coverImage: "/SharedDataThumbnail/road_pp.jpg",
    fileSize: "1.1 MB",
    fileFormat: "Shapefile (.shp)",
    lastUpdated: "2026-06-30",
    license: "open-source",
    downloadUrl: "https://drive.google.com/file/d/136nj9ZOSfYqitCYN9SwwBglQtx2nJu89/view?usp=sharing",
    source: "OpenStreetMap (OSM)",
    crs: "WGS 84 / UTM Zone 48N (EPSG:32648)",
    featureCount: 9437,
    description: [
      { type: "paragraph", text: "សំណុំទិន្នន័យនេះបង្ហាញបណ្តាញផ្លូវក្នុងរាជធានីភ្នំពេញជាទម្រង់បន្ទាត់ (polyline)។" },
      { type: "paragraph", text: "ទិន្នន័យមានប្រភពពី OpenStreetMap (OSM) និងប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N។" },
      { type: "heading", text: "Attributes" },
      { type: "paragraph", text: "តារាងគុណលក្ខណៈរួមមាន osm_id, highway, tracktype, ref, name, name_km, name_en, oneway, surface, source និង Shape_Leng។" },
    ],
    tags: ["roads", "phnom penh", "osm"],
  },
  {
    slug: "cambodia-major-rivers",
    category: "hydrology",
    format: "shapefile",
    title: "ទន្លេសំខាន់ៗនៅកម្ពុជា",
    excerpt: "ទិន្នន័យផ្ទៃទឹកនៃទន្លេ និងដងទឹកសំខាន់ៗនៅប្រទេសកម្ពុជា មាន ៨៩ ប៉ូលីហ្គោន។",
    coverImage: "/SharedDataThumbnail/cam_major_river.jpg",
    fileSize: "1.5 MB",
    fileFormat: "Shapefile (.shp)",
    lastUpdated: "2026-06-30",
    license: "open-source",
    downloadUrl: "https://drive.google.com/file/d/1AjqG4Bgb3nn4sFduNSSt98fzEJKeTMuf/view?usp=sharing",
    source: "N/A",
    crs: "WGS 84 / UTM Zone 48N (EPSG:32648)",
    featureCount: 89,
    description: [
      { type: "paragraph", text: "សំណុំទិន្នន័យនេះបង្ហាញផ្ទៃទឹកនៃទន្លេ និងដងទឹកសំខាន់ៗនៅប្រទេសកម្ពុជា ជាទម្រង់ប៉ូលីហ្គោន។" },
      { type: "paragraph", text: "ទិន្នន័យប្រើប្រព័ន្ធកូអរដោនេ WGS 84 / UTM Zone 48N ហើយប្រភពដើមមិនត្រូវបានបញ្ជាក់។" },
      { type: "heading", text: "Attributes" },
      { type: "paragraph", text: "តារាងគុណលក្ខណៈរួមមានប្រវែងបរិមាត្រ (Shape_Leng) និងផ្ទៃក្រឡា (Shape_Area)។" },
    ],
    tags: ["rivers", "hydrology", "cambodia"],
  },
  {
    slug: "phnom-penh-land-use-master-plan-2035",
    category: "landuse",
    format: "raster",
    title: "ប្លង់គោលប្រើប្រាស់ដីរាជធានីភ្នំពេញ ឆ្នាំ ២០៣៥",
    excerpt:
      "ផែនទីប្លង់គោលប្រើប្រាស់ដីរាជធានីភ្នំពេញ ឆ្នាំគោលដៅ ២០៣៥ បង្ហាញតំបន់ប្រើប្រាស់ដី បណ្តាញដឹកជញ្ជូន និងគម្រោងអភិវឌ្ឍន៍សំខាន់ៗ។",
    coverImage: "/SharedDataThumbnail/phnom-penh-land-use-master-plan-2035.jpg",
    fileSize: "2.9 MB",
    fileFormat: "Raster map (JPEG)",
    lastUpdated: "2026-06-30",
    license: "not-specified",
    downloadUrl: "https://drive.google.com/file/d/1yfNRPYl2PC0-tGzSFXGrAXXxAI6Jd3wW/view?usp=sharing",
    source: "Phnom Penh Capital Administration / MLMUPC",
    crs: "UTM Zone 48N grid (datum not specified)",
    featureCount: null,
    description: [
      { type: "paragraph", text: "ផែនទីរ៉ាស្ទ័រនេះបង្ហាញចក្ខុវិស័យប្រើប្រាស់ដីរាជធានីភ្នំពេញរហូតដល់ឆ្នាំ ២០៣៥ រួមមានតំបន់ទីក្រុង តំបន់បៃតង តំបន់ទឹក បណ្តាញដឹកជញ្ជូន និងតំបន់អភិវឌ្ឍន៍។" },
      { type: "heading", text: "Map information" },
      { type: "paragraph", text: "ទំហំរូបភាព 4,927 × 3,479 pixels, 300 DPI, មាត្រដ្ឋាន 1:50,000 និងក្រឡាចត្រង្គ 1 សង់ទីម៉ែត្រ ស្មើ 500 ម៉ែត្រ។ ផែនទីបង្ហាញក្រឡាចត្រង្គ UTM Zone 48N ប៉ុន្តែមិនបានបញ្ជាក់ datum នៅលើរូបភាពដែលបានផ្តល់។" },
    ],
    tags: ["landuse", "master plan", "phnom penh", "raster", "2035"],
  },
  {
    slug: "gazetteer-of-cambodia-2023",
    category: "boundary",
    format: "pdf",
    title: "សៀវភៅបញ្ជីរាយនាមភូមិសាស្ត្រកម្ពុជា ឆ្នាំ ២០២៣",
    excerpt:
      "សៀវភៅរាយនាមភូមិសាស្ត្រកម្ពុជា ឆ្នាំ ២០២៣ មានឈ្មោះជាភាសាខ្មែរ ឈ្មោះសរសេរជាអក្សរឡាតាំង លេខសម្គាល់ និងកូអរដោនេភូមិសាស្ត្រ។",
    coverImage: "/SharedDataThumbnail/book of admin location of cambodia.png",
    fileSize: "8.6 MB",
    fileFormat: "PDF (.pdf)",
    lastUpdated: "2023-10-25",
    license: "copyright-2023",
    downloadUrl: "https://drive.google.com/file/d/1KUI5SW25zH3j-d-60dkQI9Hmhrh5X4Z5/view?usp=sharing",
    source: "Geography Department, General Department of Cadastre and Geography, MLMUPC",
    crs: null,
    featureCount: 16480,
    description: [
      { type: "paragraph", text: "សៀវភៅ Gazetteer of Cambodia បោះពុម្ពខែតុលា ឆ្នាំ ២០២៣ មាន ៤៩៩ ទំព័រ និងរៀបចំដោយនាយកដ្ឋានភូមិសាស្ត្រ នៃអគ្គនាយកដ្ឋានសុរិយោដី និងភូមិសាស្ត្រ ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់។" },
      { type: "paragraph", text: "ឯកសារនេះផ្តល់ឈ្មោះជាភាសាខ្មែរ និងអក្សរឡាតាំង លេខសម្គាល់ ព្រមទាំងកូអរដោនេភូមិសាស្ត្រនៃទីតាំងរដ្ឋបាល។" },
      { type: "heading", text: "Administrative coverage" },
      { type: "paragraph", text: "គ្របដណ្តប់រាជធានី-ខេត្ត ២៥, ក្រុង-ស្រុក-ខណ្ឌ ២០៨, ឃុំ-សង្កាត់ ១,៦៥២ និងភូមិ ១៤,៥៩៥ សរុប ១៦,៤៨០ ទីតាំង។" },
    ],
    tags: ["gazetteer", "administrative", "place names", "cambodia", "2023"],
  },
  {
    slug: "cambodia-borders-kml",
    category: "boundary",
    format: "kml",
    title: "ព្រំដែនកម្ពុជា (KML for Google Earth)",
    excerpt:
      "ឯកសារ KML ដែលអាចបើកដោយ Google Earth មានព្រំដែនជាតិ និងខេត្ត។",
    coverImage: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=800&fit=crop",
    fileSize: "1.8 MB",
    fileFormat: "KML (.kml)",
    lastUpdated: "2026-02-18",
    license: "cc-zero",
    downloadUrl: "https://example.com/downloads/cambodia-borders.kml",
    source: "KGA",
    crs: "WGS 84 (EPSG:4326)",
    featureCount: 26,
    description: [
      { type: "paragraph", text: "ឯកសារ KML នេះអាចបើកដោយផ្ទាល់ក្នុង Google Earth ឬ Google My Maps។" },
    ],
    tags: ["kml", "google earth", "boundary"],
  },
];

export const getDatasetBySlug = (slug) => datasets.find((d) => d.slug === slug);
export const getRelatedDatasets = (slug, category, limit = 3) =>
  datasets.filter((d) => d.slug !== slug && d.category === category).slice(0, limit);
