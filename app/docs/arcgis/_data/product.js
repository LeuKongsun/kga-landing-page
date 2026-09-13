// KGA Toolbox for ArcGIS Pro — product-level copy for the docs section.
//
// HAND-WRITTEN. Everything else in `arcgisDocs.jsx` is generated from the
// add-in's `toolMetadata/` folder; this file is the editorial half — the
// tagline, the overview, the feature grid and the licence card — so the
// generator never overwrites it. It is re-exported from `arcgisDocs.jsx` so
// components have a single import.
//
// `version` and `arcgisMinimum` are the add-in's own manifest values
// (Config.daml: AddInInfo version / desktopVersion). Update them here when the
// add-in ships a new build, or the docs claim a version nobody has.
//
// Tool and group counts are NOT stated here — they are derived from the data in
// `arcgisDocs.jsx` (TOOL_COUNT, PAGE_COUNT) so they cannot drift from the pages
// that actually exist.

export const PRODUCT = {
  name: "KGA Toolbox for ArcGIS Pro",
  shortName: "KGA Toolbox",
  version: "2026.2.0",
  arcgisMinimum: "3.6",
  licence: { km: "ត្រូវការអាជ្ញាបណ្ណ", en: "Licence required" },

  // Overview demo. Set a YouTube id to reveal the player; null keeps it hidden.
  youtubeId: null,

  tagline: {
    km: "កម្មវិធីបន្ថែម ArcGIS Pro ដែលបន្ថែមឧបករណ៍សម្រាប់ការងារកាដាស្ត្រ គ្រប់គ្រងទិន្នន័យ និងផលិតផែនទី ដោយរៀបតាមរបារ ribbon ផ្ទាល់ខ្លួន។",
    en: "An ArcGIS Pro add-in that adds cadastral, data-management and map-production tools on a ribbon tab of its own.",
  },

  overview: [
    {
      type: "paragraph",
      text: {
        km: "KGA Toolbox បន្ថែមផ្ទាំង ribbon មួយទៅក្នុង ArcGIS Pro ដែលប្រមូលឧបករណ៍ដែលការងារកាដាស្ត្រ និងការផលិតផែនទីនៅកម្ពុជាត្រូវការជារៀងរាល់ថ្ងៃ ប៉ុន្តែ ArcGIS Pro មិនមានស្រាប់។",
        en: "KGA Toolbox adds one ribbon tab to ArcGIS Pro, collecting the tools that day-to-day cadastral and map-production work in Cambodia needs and ArcGIS Pro does not ship.",
      },
    },
    {
      type: "list",
      items: [
        {
          km: "ឧបករណ៍កាដាស្ត្រ៖ គណនា bearing និងចម្ងាយ បំបែកក្បាលដី ពិនិត្យគុណភាពរាង និងសេចក្តីពិពណ៌នាតាមផ្លូវច្បាប់",
          en: "Cadastral tools: bearing and distance traverses, parcel subdivision, shape-quality checks and metes-and-bounds legal descriptions",
        },
        {
          km: "ការនាំចេញ-នាំចូលទិន្នន័យជាមួយ Excel, KML និង CAD",
          en: "Attribute round trips through Excel, and conversion to and from KML and CAD",
        },
        {
          km: "VectorIQ — បណ្តុំឧបករណ៍គ្រប់គ្រង ជ្រើសរើស ស្រង់ចេញ និងវិភាគគុណលក្ខណៈ",
          en: "VectorIQ — the attribute suite for managing, selecting, extracting and analysing",
        },
        {
          km: "ការពិនិត្យ topology លើ geodatabase និងការរកឃើញការត្រួតគ្នា ឬចន្លោះទទេ",
          en: "Geodatabase topology checks, and overlap and gap detection",
        },
        {
          km: "សន្លឹកផែនទីដីធ្លីដែលរួចរាល់ និងទម្រង់បែបបទបែងចែកដី",
          en: "Finished land-plot map sheets and parcel division forms",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      text: {
        km: "KGA Toolbox ជាកម្មវិធីបន្ថែមឯករាជ្យ មិនមានទំនាក់ទំនង ឬការគាំទ្រពី Esri ឡើយ។ ArcGIS និង ArcGIS Pro ជាពាណិជ្ជសញ្ញារបស់ Esri។",
        en: "KGA Toolbox is an independent add-in, not affiliated with or endorsed by Esri. ArcGIS and ArcGIS Pro are trademarks of Esri.",
      },
    },
  ],

  features: [
    {
      icon: "LandPlot",
      title: { km: "ការងារកាដាស្ត្រ", en: "Cadastral workflows" },
      description: {
        km: "Bearing និងចម្ងាយ ចំណុចជ្រុង បន្ទាត់ព្រំដែន ការបែងចែកក្បាលដី និងសេចក្តីពិពណ៌នាតាមផ្លូវច្បាប់។",
        en: "Bearings and distances, corner points, boundary lines, parcel splitting and legal descriptions.",
      },
    },
    {
      icon: "Sparkles",
      title: { km: "VectorIQ", en: "VectorIQ" },
      description: {
        km: "បង្កើត fields ជាបាច់ បំពេញតម្លៃ បំបែក បម្លែងប្រភេទ និងស្ថិតិសង្ខេប។",
        en: "Batch field creation, value filling, splitting, type conversion and summary statistics.",
      },
    },
    {
      icon: "Database",
      title: { km: "គ្រប់គ្រងទិន្នន័យ", en: "Data management" },
      description: {
        km: "កែតារាងគុណលក្ខណៈ នាំចេញ-នាំចូល Excel, KML និង CAD និងបង្កើតព្រំដែន។",
        en: "Attribute-table editing, Excel, KML and CAD round trips, and boundary generation.",
      },
    },
    {
      icon: "GitBranch",
      title: { km: "ពិនិត្យ topology", en: "Topology checking" },
      description: {
        km: "បង្កើត topology លើ geodatabase រួចផ្ទៀងផ្ទាត់ការត្រួតគ្នា ចន្លោះទទេ និងចំណុចលើព្រំដែន។",
        en: "Build a geodatabase topology, then validate overlaps, gaps and points on boundaries.",
      },
    },
    {
      icon: "Tag",
      title: { km: "Quick Label", en: "Quick Label" },
      description: {
        km: "ដាក់ស្លាកផ្ទៃក្រឡា ប្រវែង bearing និងកូអរដោនេ ជាស្លាកអចិន្ត្រៃយ៍ ឬជាក្រាហ្វិកបណ្តោះអាសន្ន។",
        en: "Label areas, lengths, bearings and coordinates, as persistent label classes or temporary graphics.",
      },
    },
    {
      icon: "Map",
      title: { km: "ផលិតផែនទី", en: "Map production" },
      description: {
        km: "សន្លឹកផែនទីដីធ្លី ទម្រង់បែបបទបែងចែកដី និងស្រទាប់ផែនទីមូលដ្ឋានពីសេវាកម្មខាងក្រៅ។",
        en: "Land-plot map sheets, parcel division forms, and basemap layers from external services.",
      },
    },
  ],

  links: {
    // The product page on this site, and the toolbox site the footer links to.
    product: "/kga-toolbox",
    website: "https://toolbox.khmergrs.com",
    support: "https://t.me/khmergrsacademy",
  },

  // Installation is an add-in file, not a marketplace listing, so these are
  // steps rather than a download button to a repository.
  install: [
    {
      km: "ទាញយកឯកសារ .esriAddinX ពីទំព័រ KGA Toolbox ឬពីអ្នកចែកចាយរបស់អ្នក។",
      en: "Get the .esriAddinX file from the KGA Toolbox page or from your distributor.",
    },
    {
      km: "បិទ ArcGIS Pro រួចចុចទ្វេដងលើឯកសារ .esriAddinX ហើយបញ្ជាក់ការដំឡើង។",
      en: "Close ArcGIS Pro, double-click the .esriAddinX file, and confirm the installation.",
    },
    {
      km: "បើក ArcGIS Pro ឡើងវិញ។ ផ្ទាំង KGA Toolbox នឹងបង្ហាញនៅលើរបារ ribbon។",
      en: "Start ArcGIS Pro again. The KGA Toolbox tab appears on the ribbon.",
    },
    {
      km: "នៅក្នុងក្រុម Product ចុច About ដើម្បីពិនិត្យស្ថានភាពអាជ្ញាបណ្ណ។",
      en: "In the Product group, click About to check the licence status.",
    },
  ],

  // Almost every tool validates the licence before it runs, which is the single
  // most common cause of a tool appearing to do nothing.
  licenceNote: {
    km: "ឧបករណ៍ភាគច្រើនពិនិត្យអាជ្ញាបណ្ណមុននឹងដំណើរការ។ បើ About បង្ហាញ Not Licensed ឧបករណ៍ដែលត្រូវការអាជ្ញាបណ្ណនឹងមិនដំណើរការទេ។",
    en: "Most tools validate the licence before running. If About reads Not Licensed, no licensed tool will run.",
  },
};

export default PRODUCT;
