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
  { slug: "geotiff", label: "GeoTIFF" },
  { slug: "csv", label: "CSV" },
];

// Licenses (re-used in cards & detail page)
export const LICENSES = {
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
    title: "ព្រំដែនខេត្តកម្ពុជា ឆ្នាំ ២០២៦",
    excerpt:
      "ទិន្នន័យព្រំដែនរដ្ឋបាលនៃខេត្តទាំង ២៥ នៃព្រះរាជាណាចក្រកម្ពុជា ធ្វើបច្ចុប្បន្នភាពឆ្នាំ ២០២៦។",
    coverImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop",
    fileSize: "12.4 MB",
    fileFormat: "Shapefile (.shp)",
    lastUpdated: "2026-04-20",
    license: "cc-by",
    downloadUrl: "https://example.com/downloads/cambodia-provinces-2026.zip",
    source: "NCDD / KGA",
    crs: "WGS 84 (EPSG:4326)",
    featureCount: 25,
    description: [
      { type: "paragraph", text: "ទិន្នន័យនេះផ្តល់នូវព្រំដែនរដ្ឋបាលពេញលេញនៃខេត្តទាំង ២៥ ក្នុងព្រះរាជាណាចក្រកម្ពុជា។" },
      { type: "paragraph", text: "ត្រូវបានធ្វើបច្ចុប្បន្នភាពដោយផ្អែកលើទិន្នន័យផ្លូវការពីគណៈកម្មាធិការជាតិសម្រាប់ការអភិវឌ្ឍប្រជាធិបតេយ្យតាមមូលដ្ឋាន។" },
      { type: "heading", text: "Attributes" },
      { type: "paragraph", text: "ឯកសារនេះរួមមានឈ្មោះខេត្ត (PROV_NAME), កូដ ISO (ISO_CODE), ផ្ទៃដី (AREA_KM2) និង ប្រជាជន (POP_2025)។" },
    ],
    tags: ["boundary", "administrative", "cambodia"],
  },
  {
    slug: "phnom-penh-roads-network",
    category: "transport",
    format: "geojson",
    title: "បណ្តាញផ្លូវភ្នំពេញ",
    excerpt:
      "បណ្តាញផ្លូវពេញលេញនៃក្រុងភ្នំពេញ រួមទាំងផ្លូវធំ ផ្លូវតូច និងព័ត៌មានចរាចរណ៍មូលដ្ឋាន។",
    coverImage: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?w=1200&h=800&fit=crop",
    fileSize: "8.1 MB",
    fileFormat: "GeoJSON (.geojson)",
    lastUpdated: "2026-04-12",
    license: "odbl",
    downloadUrl: "https://example.com/downloads/phnom-penh-roads.geojson",
    source: "OpenStreetMap / KGA",
    crs: "WGS 84 (EPSG:4326)",
    featureCount: 14823,
    description: [
      { type: "paragraph", text: "បណ្តាញផ្លូវរបស់រាជធានីភ្នំពេញដែលត្រូវបាន extract ពី OpenStreetMap និងសម្អាតដោយក្រុមការងារ KGA។" },
      { type: "heading", text: "ប្រភេទផ្លូវ" },
      { type: "paragraph", text: "Motorway, primary, secondary, tertiary, residential, និង service roads។" },
    ],
    tags: ["roads", "phnom penh", "osm"],
  },
  {
    slug: "tonle-sap-watershed",
    category: "hydrology",
    format: "shapefile",
    title: "តំបន់ប្រមូលទឹកទន្លេសាប",
    excerpt: "ព្រំដែនតំបន់ប្រមូលទឹក (watershed) នៃប្រព័ន្ធទន្លេសាប រួមមានដៃទន្លេសំខាន់ៗ។",
    coverImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&h=800&fit=crop",
    fileSize: "24.7 MB",
    fileFormat: "Shapefile (.shp)",
    lastUpdated: "2026-03-28",
    license: "cc-by-sa",
    downloadUrl: "https://example.com/downloads/tonle-sap-watershed.zip",
    source: "MRC / KGA",
    crs: "WGS 84 / UTM Zone 48N (EPSG:32648)",
    featureCount: 47,
    description: [
      { type: "paragraph", text: "ទិន្នន័យនេះកំណត់អត្តសញ្ញាណតំបន់ប្រមូលទឹកធំៗ និងតូចៗនៃប្រព័ន្ធទន្លេសាបដ៏ធំ។" },
    ],
    tags: ["watershed", "tonle sap", "hydrology"],
  },
  {
    slug: "cambodia-landuse-2025",
    category: "landuse",
    format: "geotiff",
    title: "ផែនទីការប្រើប្រាស់ដីកម្ពុជា ឆ្នាំ ២០២៥",
    excerpt:
      "Raster ការចាត់ថ្នាក់ការប្រើប្រាស់ដីពេញលេញនៃប្រទេសកម្ពុជាជាមួយ resolution ៣០ម៉ែត្រ។",
    coverImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop",
    fileSize: "342 MB",
    fileFormat: "GeoTIFF (.tif)",
    lastUpdated: "2026-03-15",
    license: "cc-by",
    downloadUrl: "https://example.com/downloads/cambodia-landuse-2025.tif",
    source: "Landsat 9 / KGA Processing",
    crs: "WGS 84 / UTM Zone 48N (EPSG:32648)",
    featureCount: null,
    description: [
      { type: "paragraph", text: "Raster ការចាត់ថ្នាក់ការប្រើប្រាស់ដីបានធ្វើឡើងពី Landsat 9 imagery។" },
      { type: "heading", text: "Classes" },
      { type: "paragraph", text: "Forest, cropland, urban, water, bare land, និង wetland។" },
    ],
    tags: ["landuse", "raster", "landsat"],
  },
  {
    slug: "khmer-village-points-2026",
    category: "demographics",
    format: "csv",
    title: "ភូមិកម្ពុជាជាមួយប្រជាជន",
    excerpt:
      "ចំណុចភូមិទាំងអស់នៃកម្ពុជាជាមួយព័ត៌មានប្រជាជនពីជំរឿនឆ្នាំ ២០២៥។",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    fileSize: "5.2 MB",
    fileFormat: "CSV (.csv)",
    lastUpdated: "2026-03-05",
    license: "cc-by",
    downloadUrl: "https://example.com/downloads/cambodia-villages-2026.csv",
    source: "NIS / KGA",
    crs: "WGS 84 (EPSG:4326)",
    featureCount: 14302,
    description: [
      { type: "paragraph", text: "ឯកសារ CSV នេះមានចំណុច centroid នៃភូមិទាំងអស់ជាមួយឈ្មោះភាសាខ្មែរ ឈ្មោះភាសាអង់គ្លេស និងព័ត៌មានប្រជាជន។" },
    ],
    tags: ["villages", "population", "census"],
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
