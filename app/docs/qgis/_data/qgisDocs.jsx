// KGA Toolbox for QGIS — documentation content.
//
// Every tool entry below is transcribed from the plugin's own reference docs,
// `kga_tools/toolMetadata/<slug>.md` — one file per algorithm, each carrying an
// identity header, Overview, Parameters, How to use, Outputs and Notes and
// limits. That folder is the source of truth and is deliberately NOT vendored
// into this repo; re-transcribe from it rather than editing prose here, or the
// page and the plugin drift apart.
//
// The metadata's inline Markdown is kept verbatim — **bold** for parameter and
// button labels, `code` for paths and literal values, [label](other_tool.md)
// for a sibling tool — and rendered by DocsQgis/RichText.
//
// Per tool:
//   body       Overview, as blocks. An opening line that only restated
//              `summary` was dropped, since the page prints the summary above it.
//   parameters One section per table in ## Parameters. A batch algorithm has a
//              single unnamed section; a dialog has one per tab or pane, and
//              `nameLabel` says whether the rows are Parameters or Controls.
//   outputs    The ### Outputs declared table, when the algorithm declares one.
//   usage      ## How to use.
//   results    ## Outputs — what actually lands on disk and in the project.
//   notes      ## Notes and limits.
//
// Khmer is written as an empty string wherever the translation has not been
// done; `t()` falls back to English rather than rendering a blank.
//
// `slug` MUST equal the algorithm's name() in the plugin: every algorithm ships
// helpUrl() -> https://khmergrs.com/docs/qgis/<slug>, so a slug that does not
// resolve here is a live 404 on a Help button already in users' hands.
//
// Order of `groups` and `tools` mirrors branding.py (GROUP_ORDER -> alphabetical
// -> GROUP_LAST, with ALG_ORDER pins inside each group) so the docs read in the
// same order as the toolbar and the Processing toolbox.

export const PLUGIN = {
  name: "KGA Toolbox for QGIS",
  pluginName: "KGA Toolbox",
  // Tracks `version=` in the plugin's metadata.txt.
  version: "1.1.0",
  qgisMinimum: "3.28",
  // Assigned from the data below, never typed. These numbers reach the program
  // card, the stat tiles and the page description, and they drifted out of
  // sync the first time tools were added by hand.
  toolCount: 0,
  groupCount: 0,
  price: { km: "ឥតគិតថ្លៃ", en: "Free of charge" },
  // Overview demo. Set a YouTube id to reveal the player; null keeps it hidden.
  youtubeId: null,
  tagline: {
    km: "កម្មវិធីជំនួយ QGIS ឥតគិតថ្លៃ ដែលបន្ថែមឧបករណ៍ដំណើរការ ៥៣ ជា ៨ ក្រុម",
    en: "A free QGIS plugin that adds 53 processing tools in 8 groups",
  },
  overview: [
    { type: "paragraph", text: {
      km: "KGA Toolbox ប្រមូលឧបករណ៍ដំណើរការរបស់ KGA ទាំងអស់ ទៅក្នុង provider តែមួយ ព្រមទាំងរបារឧបករណ៍ដាច់ដោយឡែកក្នុង QGIS។ វាបំពេញចន្លោះដែល QGIS មិនទាន់មាន។",
      en: "KGA Toolbox bundles the KGA processing algorithms into a single provider with a dedicated toolbar. It adds the things QGIS leaves out." } },
    { type: "list", items: [
      { km: "ការបម្លែងទៅវិញទៅមករវាង ArcGIS File Geodatabase និង GeoPackage ដែលនាំ field domains និង layer aliases ទៅជាមួយ", en: "A two-way converter between an ArcGIS File Geodatabase and a GeoPackage that carries field domains and layer aliases across" },
      { km: "កម្មវិធីកែសម្រួល field domains សម្រាប់ GeoPackage", en: "An editor for GeoPackage field domains" },
      { km: "ឧបករណ៍ append ដែលមានការផ្គូផ្គង fields ពិតប្រាកដ", en: "An append tool with a real field mapping" },
      { km: "ការនាំចេញ-នាំចូលគុណលក្ខណៈជាមួយ Excel ដោយសុវត្ថិភាព", en: "A safe attribute round trip to Excel" },
      { km: "ទម្រង់ layer package ដាច់ដោយឡែក", en: "A self-contained layer package format" },
    ] },
    { type: "note", tone: "info", text: {
      km: "KGA Toolbox ជាកម្មវិធីជំនួយឯករាជ្យ មិនមានទំនាក់ទំនង ការគាំទ្រពី Esri ឡើយ។ ArcGIS និង ArcGIS Pro ជាពាណិជ្ជសញ្ញារបស់ Esri។",
      en: "KGA Toolbox is an independent plugin, not affiliated with or endorsed by Esri. ArcGIS and ArcGIS Pro are trademarks of Esri." } },
  ],
  features: [
    { icon: "Boxes", title: { km: "ឧបករណ៍ ៥៣ ជា ៨ ក្រុម", en: "53 tools in 8 groups" },
      description: { km: "ឧបករណ៍ទាំងអស់ចុះឈ្មោះជា provider តែមួយ ដែលមានរបារឧបករណ៍ និងម៉ឺនុយផ្ទាល់ខ្លួន។", en: "Every tool registers under one provider with its own toolbar and menus." } },
    { icon: "Repeat", title: { km: "បម្លែង GDB ↔ GPKG", en: "File Geodatabase ↔ GeoPackage" },
      description: { km: "បម្លែងទាំងកន្លែងផ្ទុកម្តង ដោយនាំ domains, aliases, តារាងមិនមែន spatial, តម្លៃ Z/M និងខ្សែកោងទៅជាមួយ។", en: "Converts a whole container at a time, carrying domains, aliases, non-spatial tables, Z/M values and curves across." } },
    { icon: "Table2", title: { km: "គ្រប់គ្រង domain និងស្គីម៉ា", en: "Domain and schema management" },
      description: { km: "បងកើត កែសម្រួល នាំចេញ និងអនុវត្ត field domains ឡើងវិញលើ GeoPackage ជាច្រើន។", en: "Create, edit, export and re-apply field domains across GeoPackages." } },
    { icon: "PenLine", title: { km: "ឧបករណ៍កែសម្រួលបែប ArcGIS Pro", en: "ArcGIS Pro-style editing" },
      description: { km: "Construct Polygon, Copy Parallel, Buffer, Split into COGO Lines, Merge, Divide និង Clip ដែលមាន map tool ផ្ទាល់ខ្លួន។", en: "Construct Polygon, Copy Parallel, Buffer, Split into COGO Lines, Merge, Divide and Clip, each with its own map tool." } },
    { icon: "GitBranch", title: { km: "ពិនិត្យ topology", en: "Topology checking" },
      description: { km: "ពិនិត្យការត្រួតគ្នា ចន្លោះទទេ និងចំណុចលើព្រំដែន ជាមួយ Error Inspector សម្រាប់ដោះស្រាយ។", en: "Check overlaps, gaps and points on boundaries, with an Error Inspector to work through what they find." } },
    { icon: "FileSpreadsheet", title: { km: "ការនាំចេញ-នាំចូល Excel", en: "Excel round trip" },
      description: { km: "នាំចេញគុណលក្ខណៈជា workbook ដែលមាន dropdown រួចនាំការកែត្រឡប់មកវិញដោយសុវត្ថិភាព។", en: "Export attributes to a workbook with dropdowns, then bring the edits back safely." } },
  ],
  links: {
    pluginRepo: "https://plugins.qgis.org/plugins/kga_tools/",
    // The repo the plugin's own metadata.txt declares as `repository` and
    // `tracker`, so the page and the plugin point at the same place.
    github: "https://github.com/sophon-pro/KGAToolbox-QGIS",
    releases: "https://github.com/sophon-pro/KGAToolbox-QGIS/releases",
    issues: "https://github.com/sophon-pro/KGAToolbox-QGIS/issues",
  },
  install: [
    { km: "បើក QGIS ហើយចូលទៅ Plugins ▸ Manage and Install Plugins…", en: "Open QGIS and go to Plugins ▸ Manage and Install Plugins…" },
    { km: "ស្វែងរក “KGA Toolbox” ក្នុងផ្ទាំង All។", en: "Search for “KGA Toolbox” in the All tab." },
    { km: "ចុច Install Plugin។", en: "Click Install Plugin." },
    { km: "ឧបករណ៍នឹងបង្ហាញក្នុង Processing ▸ Toolbox ▸ KGA Toolbox និងលើរបារឧបករណ៍ KGA។", en: "The tools appear under Processing ▸ Toolbox ▸ KGA Toolbox and on the KGA toolbar." },
  ],
  installAlt: [
    { km: "ទាញយកឯកសារ .zip ចុងក្រោយពី GitHub releases។", en: "Download the latest .zip from GitHub releases." },
    { km: "ក្នុង QGIS ចូលទៅ Plugins ▸ Manage and Install Plugins ▸ Install from ZIP។", en: "In QGIS, go to Plugins ▸ Manage and Install Plugins ▸ Install from ZIP." },
    { km: "ជ្រើសឯកសារដែលបានទាញយក រួចចុច Install Plugin។", en: "Select the downloaded file and click Install Plugin." },
  ],
};

export const groups = [
  {
    id: "kgadatamanagement",
    name: "KGA Data Management",
    icon: "Database",
    label: { km: "គ្រប់គ្រងទិន្នន័យ", en: "Data Management" },
    summary: {
               km: "ឧបករណ៍សម្រាប់ផ្លាស់ទី ខ្ចប់ និងរៀបចំស្រទាប់រវាងទម្រង់ និងកន្លែងផ្ទុកផ្សេងៗ។",
               en: "Tools for moving, packaging and organising layers between formats and containers.",
             },
  },
  {
    id: "kgaschematools",
    name: "KGA Schema Tools",
    icon: "Table2",
    label: { km: "ឧបករណ៍ស្គីម៉ា", en: "Schema Tools" },
    summary: {
               km: "កំណត់ អនុវត្ត និងផ្ទៀងផ្ទាត់ field domains និងការផ្គូផ្គង fields។",
               en: "Define, apply and validate field domains and field mappings.",
             },
  },
  {
    id: "kgaeditingtools",
    name: "KGA Editing Tools",
    icon: "PenLine",
    label: { km: "ឧបករណ៍កែសម្រួល", en: "Editing Tools" },
    summary: {
               km: "ឧបករណ៍កែសម្រួលអន្តរកម្មលើផែនទី ដែលធ្វើតាមផ្ទាំង Modify Features របស់ ArcGIS Pro។",
               en: "Interactive on-map editing tools that follow ArcGIS Pro's Modify Features panes.",
             },
  },
  {
    id: "kgageometryutilities",
    name: "KGA Geometry Utilities",
    icon: "Shapes",
    label: { km: "ឧបករណ៍ធរណីមាត្រ", en: "Geometry Utilities" },
    summary: {
               km: "សម្អាត បម្លែង និងគណនាតម្លៃធរណីមាត្រលើស្រទាប់ដែលមានស្រាប់។",
               en: "Clean, convert and compute geometry values on existing layers.",
             },
  },
  {
    id: "kgatopology",
    name: "KGA Topology",
    icon: "GitBranch",
    label: { km: "ពិនិត្យ Topology", en: "Topology" },
    summary: {
               km: "ស្វែងរក ពិនិត្យ និងដោះស្រាយកំហុស topology ក្នុងទិន្នន័យ polygon និងចំណុច។",
               en: "Find, inspect and resolve topology errors in polygon and point data.",
             },
  },
  {
    id: "kgadataconversion",
    name: "KGA Data Conversion",
    icon: "Repeat",
    label: { km: "បម្លែងទិន្នន័យ", en: "Data Conversion" },
    summary: {
               km: "ការបម្លែងទៅវិញទៅមករវាង QGIS, ArcGIS, Excel និង Google Earth។",
               en: "Round trips between QGIS, ArcGIS, Excel and Google Earth.",
             },
  },
  {
    id: "kgairrigationtools",
    name: "KGA Irrigation Tools",
    icon: "Waves",
    label: { km: "ឧបករណ៍ធារាសាស្ត្រ", en: "Irrigation Tools" },
    summary: {
               km: "ការវិភាគសណ្ឋានដី និងអាងស្តុកទឹក សម្រាប់ការរចនាប្រព័ន្ធធារាសាស្ត្រ។",
               en: "Terrain and reservoir analysis for irrigation design.",
             },
  },
  {
    id: "kgamapping",
    name: "KGA Mapping",
    icon: "Map",
    label: { km: "ឧបករណ៍ផែនទី", en: "Mapping" },
    summary: {
               km: "អ្វីដែលដាក់លើទំព័រ layout — ក្រឡាចត្រង្គកូអរដោនេ និងរបារកាតាឡុកពណ៌សម្រាប់បោះពុម្ព។",
               en: "What goes onto the printed sheet — coordinate grids and legend bars for a layout.",
             },
  },
  {
    id: "kgaeditor",
    name: "KGA Editor Toolbar",
    icon: "SquarePen",
    processing: false,
    label: { km: "\u179a\u1794\u17b6\u179a\u1780\u17c2\u179f\u1798\u17d2\u179a\u17bd\u179b", en: "Editor Toolbar" },
    summary: {
               km: "\u1798\u17b6\u1793 map tools \u1795\u17d2\u1791\u17b6\u17c6\u1784 \u1793\u17b7\u1784\u1780\u17bb\u1784\u1787\u17be \u2014 \u1798\u17b7\u1793\u1798\u17c2\u1793 algorithm \u1780\u17d2\u1793\u17bb\u1784 Processing \u1791\u17c1\u17d4",
               en: "Map tools, panes and switches on the second KGA toolbar \u2014 not Processing algorithms, so they do not appear in the Geoprocessing panel or a model.",
             },
  },
  {
    id: "kgaotherfeatures",
    name: "Other Features",
    icon: "LayoutGrid",
    processing: false,
    label: { km: "\u1798\u17bb\u1781\u1784\u17b6\u179a\u1795\u17d2\u179f\u17c1\u1784\u17d7", en: "Other Features" },
    summary: {
               km: "\u1795\u17d2\u1791\u17b6\u17c6\u1784 \u1794\u1784\u17d2\u17a2\u17bd\u1785 \u1793\u17b7\u1784\u1796\u17b6\u1780\u17d2\u1799\u1794\u1789\u17d2\u1787\u17b6\u1798\u17c9\u17ba\u1793\u17bb\u1799 \u2014 \u1780\u17cf\u1798\u17b7\u1793\u1798\u17c2\u1793 algorithm \u1780\u17d2\u1793\u17bb\u1784 Processing \u178a\u17c2\u179a\u17d4",
               en: "Windows, panels and menu commands. Also not Processing algorithms, and not counted in the tool total.",
             },
  },
];

export const tools = [
  {
    slug: "add_data",
    group: "kgadatamanagement",
    name: "Add Open Data & Basemaps",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:add_data",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window and an internet connection" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Add Open Data & Basemaps",
    summary: {
      km: "ទាញយកព្រំដែនរដ្ឋបាល ផែនទីមូលដ្ឋាន ទិន្នន័យកម្ពស់ និងគម្របដី ចូលទៅក្នុងគម្រោងដោយផ្ទាល់ ដោយមិនចាំបាច់ឆ្លងកាត់ browser។",
      en: "Pull administrative boundaries, basemaps, elevation and land cover straight into the project, without the browser trip.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Pull **administrative boundaries**, **basemaps**, **elevation** and **land cover** straight into the project, without the browser trip. Pick a country and an admin level; the tool asks the data source what it publishes, shows you who produced it, which year it represents, under what licence and how many features it holds, then downloads it and adds it to the map.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "Three boundary sources ship with the tool, plus an escape hatch for anything else with a public address:",
        } },
      { type: "table", head: [{ km: "", en: "Source" }, { km: "", en: "Coverage" }, { km: "", en: "Licence" }], rows: [
        [{ km: "", en: "**geoBoundaries**" }, {
            km: "",
            en: "Global, ADM0 to ADM5 where it exists. Each country's own source and licence carried through.",
          }, { km: "", en: "Varies by country — shown before you download" }],
        [{ km: "", en: "**HDX / OCHA COD-AB**" }, {
            km: "",
            en: "The p-coded boundaries the humanitarian community agrees on, ADM0 to ADM3 or 4.",
          }, { km: "", en: "Usually CC BY-IGO" }],
        [{ km: "", en: "**Natural Earth**" }, {
            km: "",
            en: "Country and state outlines worldwide, at three generalisations, filtered to the country you pick.",
          }, { km: "", en: "Public domain" }],
        [{ km: "", en: "**Custom URL**" }, { km: "", en: "Any GeoJSON file, ArcGIS REST layer or WFS endpoint." }, { km: "", en: "Set by whoever publishes it" }],
        [{ km: "", en: "**KGA Database (Cambodia)**" }, {
            km: "",
            en: "Province, district, commune and village for Cambodia, as boundary or centre point, for any selection of units. See below.",
          }, { km: "", en: "KGA data" }],
      ] },
      { type: "subheading", text: { km: "", en: "KGA Database (Cambodia)" } },
      { type: "paragraph", text: {
          km: "",
          en: "KGA's own administrative data for Cambodia, read from a private GitHub release. It is available **only when the country is Cambodia** — for any other country the entry stays in the Data source list, greyed out, and its tooltip says why. Choosing another country while it is selected moves you back to a source that can serve that country.",
        } },
      { type: "paragraph", text: { km: "", en: "Pick what you want in four steps:" } },
      { type: "paragraph", text: {
          km: "",
          en: "1. **Admin level** — Province, District, Commune or Village. 2. **Feature type** — **Boundary (polygon)** or **Centre (point)**. Villages exist only as centre points, so choosing Village fixes this to Centre and greys the boundary choice. A few communes exist only as centres so far; they are greyed in the list when you ask for boundaries, with a tooltip saying so. 3. **Narrow it** with the Province, District and Commune drop-downs (each starts at *All*, and the next one fills in when you choose the one before). 4. **Tick the units** in the list, with the filter box above it to find one by name or code. **Tick nothing to take everything inside the drop-downs above** — a whole province's communes is one drop-down and *Add to Map*; one named district is a province, a tick and *Add to Map*.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "Names are shown in English with the Khmer name beside them. The village list needs a province chosen first (14,000 villages are too many to list at once); leaving everything unticked still adds every village inside the drop-downs.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "**What is downloaded.** The release carries one small pack per province (about 0.5 MB). The lists and counts come from a manifest, so choosing and narrowing download no geometry at all; **Add to Map** then fetches only the province packs your selection touches, checks each against its checksum, and keeps them for next time — a second add of the same area, or any other area in the same province, costs nothing and works offline. The details panel shows what is still to download before you click.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "**The access key.** The release is private, so the tool needs the KGA access key. Paste it in the **Access key** box once and click **Save key**; it is kept encrypted in the QGIS password store (QGIS may ask for its master password) and is sent to GitHub only. On a QGIS where the authentication system is disabled (Settings > Options > Authentication says so) there is no password store, so the key is kept in your QGIS profile settings instead, as plain text on your disk, and the box tells you so. Use a read-only, single-repository, expiring key and it is a small risk; enable QGIS authentication if you want it encrypted. If it expires or is revoked the box comes back with the reason, so paste the new one. **Change key** replaces a saved one.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "**New data.** When KGA publishes a new release the tool picks it up on its own within a day, or straight away with **Refresh**; the old packs are removed. Plugin updates are not needed for new data.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "The layers carry these fields, the same on every level and for both boundaries and centres, so layers from different levels join and compare without renaming:",
        } },
      { type: "table", head: [{ km: "", en: "Field" }, { km: "", en: "Meaning" }], rows: [
        [{ km: "", en: "`pro_code`, `dist_code`, `com_code`, `vil_code`" }, {
            km: "",
            en: "2-, 4-, 6- and 8-digit codes as text, with the leading zero kept. A unit carries the codes of every level above it.",
          }],
        [{ km: "", en: "`name_en`, `name_kh`" }, { km: "", en: "The unit's name in English and Khmer." }],
        [{ km: "", en: "`type_kh`, `type_en`" }, {
            km: "",
            en: "What kind of unit: Province or Capital; District, Municipality or Khan; Commune or Sangkat; Village.",
          }],
        [{ km: "", en: "`pcode`" }, { km: "", en: "`KH` + the unit's deepest code, for joining to humanitarian (OCHA) data." }],
        [{ km: "", en: "`pro_name_en`, `dist_name_en`, `com_name_en`" }, { km: "", en: "The English names of the levels above." }],
        [{ km: "", en: "`area_km2`" }, { km: "", en: "Polygons only: area, measured in UTM 48N." }],
        [{ km: "", en: "`qa_note`" }, {
            km: "",
            en: "Empty when the unit is clean; otherwise a sentence about a known issue, such as a code that was renumbered.",
          }],
      ] },
      { type: "paragraph", text: { km: "", en: "Data is in EPSG:4326." } },
      { type: "paragraph", text: {
          km: "",
          en: "**Digital elevation models** come from two more sources, chosen under the **Open digital elevation (DEM)** data type:",
        } },
      { type: "table", head: [{ km: "", en: "Source" }, { km: "", en: "Datasets" }, { km: "", en: "Account" }], rows: [
        [{ km: "", en: "**Copernicus DEM (AWS open data)**" }, { km: "", en: "GLO-30 (~30 m), GLO-90 (~90 m)" }, { km: "", en: "None" }],
        [{ km: "", en: "**OpenTopography Global DEM API**" }, {
            km: "",
            en: "Copernicus GLO-30/90, SRTM GL1/GL3 (and ellipsoidal), NASADEM, ALOS AW3D30 (and ellipsoidal), EU DTM, SRTM15+, GEBCO, GEDI L3",
          }, { km: "", en: "Free API key" }],
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "**Land cover** comes from two more, chosen under the **Open land cover (LULC)** data type. Both are 10 m, CC BY 4.0 and need no account:",
        } },
      { type: "table", head: [{ km: "", en: "Source" }, { km: "", en: "Years" }, { km: "", en: "Classes" }], rows: [
        [{
            km: "",
            en: "**Esri Land Cover* (Impact Observatory / Microsoft / Esri, Sentinel-2) - the data behind [livingatlas.arcgis.com/landcover](https://livingatlas.arcgis.com/landcover/)",
          }, {
            km: "",
            en: "Every year from 2017; the list is read from Esri's service, so a newly published year appears on its own",
          }, {
            km: "",
            en: "1 Water, 2 Trees, 4 Flooded vegetation, 5 Crops, 7 Built area, 8 Bare ground, 9 Snow/ice, 10 Clouds, 11 Rangeland",
          }],
        [{ km: "", en: "**ESA WorldCover**" }, { km: "", en: "2020 (v100), 2021 (v200)" }, {
            km: "",
            en: "10 Tree cover, 20 Shrubland, 30 Grassland, 40 Cropland, 50 Built-up, 60 Bare / sparse vegetation, 70 Snow and ice, 80 Permanent water bodies, 90 Herbaceous wetland, 95 Mangroves, 100 Moss and lichen",
          }],
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "The tool is promoted onto the KGA toolbar as its own button, next to the Domain & Schema Manager.",
        } },
      { type: "note", tone: "info", text: {
          km: "",
          en: "**Vector data arrives as a temporary scratch layer.** It lives in memory and > is lost when the project closes. Export it to a GeoPackage or shapefile to > keep it — the tool says so, and offers a **Save layer…** button, every time. > Basemaps are the exception: an XYZ layer is a reference to a URL, so it saves > into the project file normally.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "The algorithm takes no Processing parameters — running it opens the window. The controls below are the window's, and the form rearranges itself so only the ones the current choice needs are on screen.",
            } },
        ],
        rows: [
          { name: "**Data type**", type: "Combo box", default: "Administrative boundaries", description: {
            km: "",
            en: "`Administrative boundaries`, `Other vector data`, `Basemap tile layer`, `Open digital elevation (DEM)`, `Open land cover (LULC)`. Decides which sources are offered and which rows appear.",
          } },
          { name: "**Data source**", type: "Combo box", default: "geoBoundaries", description: {
            km: "",
            en: "The portal to read. A source that is listed but greyed out is one the tool knows about and cannot reach yet; its tooltip says why.",
          } },
          { name: "**Country**", type: "Editable combo box", default: "Cambodia (KHM)", description: {
            km: "",
            en: "Type to filter. Hidden for the custom sources, and for Natural Earth when its **Extent* is set to the whole world.",
          } },
          { name: "**Admin level**", type: "Combo box", default: "ADM1", description: {
            km: "",
            en: "`ADM0` country, `ADM1` province/state, `ADM2` district, `ADM3` commune/sub-district, `ADM4` village, `ADM5`. Levels the country does not publish are **shown but disabled**, so a missing ADM4 is visibly missing rather than silently absent. For the KGA database the choices are named Province, District, Commune and Village.",
          } },
          { name: "**Feature type**", type: "Combo box", default: "Boundary (polygon)", description: {
            km: "",
            en: "*KGA database only. `Boundary (polygon)` or `Centre (point)`. Villages are centre points only.",
          } },
          { name: "**Province / District / Commune**", type: "Three combo boxes", default: "All", description: {
            km: "",
            en: "*KGA database only. Narrow the units listed below; each fills in after the one before it.",
          } },
          { name: "**Units list, filter box, Tick shown, Clear ticks**", type: "List", default: "nothing ticked", description: {
            km: "",
            en: "*KGA database only. Tick the units to add. Nothing ticked means everything inside the drop-downs above.",
          } },
          { name: "**Access key**", type: "Password + **Save key* / **Change key**", default: "empty", description: {
            km: "",
            en: "*KGA database only. The key to the private KGA data release, kept encrypted in the QGIS password store, or in the profile settings when that store is disabled.",
          } },
          { name: "**Release**", type: "Combo box", default: "gbOpen", description: {
            km: "",
            en: "*geoBoundaries only. `gbOpen` has the widest coverage; `gbHumanitarian` is UN OCHA sourced; `gbAuthoritative` is UN SALB official data.",
          } },
          { name: "**Geometry**", type: "Combo box", default: "Simplified", description: {
            km: "",
            en: "*geoBoundaries only. Simplified is right for mapping and context. Take **Full detail* only when the exact boundary line matters — it can be many times larger.",
          } },
          { name: "**Extent**", type: "Combo box", default: "Selected country only", description: {
            km: "",
            en: "*Natural Earth only. Its files are worldwide; this cuts the chosen country out as the layer loads. Set it to **Whole world* for every country at once.",
          } },
          { name: "**Scale**", type: "Combo box", default: "1:10m", description: {
            km: "",
            en: "*Natural Earth only. `1:10m`, `1:50m`, `1:110m`. See the Natural Earth note below - admin 1 is only worldwide at 1:10m. The 1:10m admin 1 file is about 40 MB, downloaded once and cached.",
          } },
          { name: "**Address**", type: "Text", default: "empty", description: { km: "", en: "*Custom sources only. A `https://` address. See **Custom addresses* below." } },
          { name: "**Zoom levels**", type: "Two spin boxes", default: "the service's own range", description: { km: "", en: "*Basemaps only. Narrow the range QGIS will request tiles for." } },
          { name: "**Also add it to the Browser panel, permanently**", type: "Checkbox", default: "off", description: {
            km: "",
            en: "*Basemaps only. Writes the tile service into **XYZ Tiles* in the Browser, so it is there in every project without coming back here.",
          } },
          { name: "**Dataset**", type: "Combo box", default: "GLO-30 / COP30", description: { km: "", en: "*DEM only. The elevation model to read." } },
          { name: "**Year**", type: "Combo box", default: "the latest published", description: {
            km: "",
            en: "*Land cover only. The year the map represents. Each map summarises that whole year.",
          } },
          { name: "**API key**", type: "Password + **Remember**", default: "empty", description: {
            km: "",
            en: "*OpenTopography only. Get one free from OpenTopography. **Remember* keeps it encrypted in the QGIS password store (QGIS may ask for its master password), never in plain settings.",
          } },
          { name: "**Area**", type: "Combo box", default: "Current map extent", description: { km: "", en: "*DEM and land cover. See **Area (DEM and land cover)* below." } },
          { name: "**Draw rectangle / Draw polygon / Clear**", type: "Buttons", default: "—", description: { km: "", en: "*DEM and land cover, drawn area only. Arms a drawing tool on the map." } },
          { name: "**Layer**", type: "Layer picker", default: "the active layer", description: {
            km: "",
            en: "*DEM and land cover, layer areas only. Polygon layers for a boundary, any layer for an extent.",
          } },
          { name: "**Selected features only**", type: "Checkbox", default: "off", description: {
            km: "",
            en: "*DEM and land cover, boundary only. Clip to the selected polygons rather than all of them.",
          } },
          { name: "**Reproject to the project CRS**", type: "Checkbox", default: "off", description: {
            km: "",
            en: "*DEM and land cover. A DEM is warped with bilinear resampling; land cover with nearest-neighbour, so no class is ever invented. Off keeps the published grid exactly — EPSG:4326 for a DEM and WorldCover, the area's UTM zone for Esri Land Cover.",
          } },
          { name: "**Also add as polygons (lc_code, lc_class)**", type: "Checkbox", default: "off", description: {
            km: "",
            en: "*Land cover only. Also turn the classes into polygons, written to a GeoPackage beside the GeoTIFF (numbered, never overwriting an earlier one). Limited to 60 million pixels — about 6,000 km² at 10 m.",
          } },
          { name: "**Save to**", type: "File", default: "empty", description: {
            km: "",
            en: "*DEM and land cover. Where to write the GeoTIFF. Empty means a temporary file, deleted when QGIS closes.",
          } },
          { name: "**Layer name**", type: "Text", default: "the source's own name", description: {
            km: "",
            en: "Auto-fills from the selection and keeps following it — until you type in it, after which your text is kept.",
          } },
        ],
      },
      {
        title: { km: "", en: "Buttons" },
        nameLabel: "Button",
        blocks: [],
        rows: [
          { name: "**Add to Map**", type: "", default: "", description: { km: "", en: "Download if needed, then add the layer." } },
          { name: "**Refresh**", type: "", default: "", description: {
            km: "",
            en: "Forget what is cached for the current selection and re-read the source. Use this if a download was interrupted or the source has republished.",
          } },
          { name: "**Clear cache**", type: "", default: "", description: {
            km: "",
            en: "Delete everything the tool has downloaded. Layers already on the map are unaffected — they hold their own copy in memory.",
          } },
          { name: "**Help**", type: "", default: "", description: { km: "", en: "This page." } },
        ],
      },
      {
        title: { km: "", en: "Area (DEM and land cover)" },
        nameLabel: "Area",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "The details panel shows the area in km², its bounds, the resolution and an estimate of the output size before anything is downloaded. Requests over 700 million pixels are refused. At GLO-30 that is about 54 square degrees, or roughly 665,000 km² near the equator. OpenTopography's own limits are checked too — 450,000 km² for the 30 m datasets and 4,050,000 km² for SRTM GL3 and COP90, measured on the area's bounding box.",
            } },
          { type: "paragraph", text: {
              km: "",
              en: "For land cover the limit is 500 million pixels — about 50,000 km² at 10 m, a large province. Esri's service hands out at most 4000 × 4000 pixels per request, so the details panel also says how many requests the area takes.",
            } },
        ],
        rows: [
          { name: "**Current map extent**", type: "", default: "", description: { km: "", en: "The bounding box of what the map shows. It follows the map as you pan." } },
          { name: "**Draw a rectangle or polygon on the map**", type: "", default: "", description: {
            km: "",
            en: "Click **Draw rectangle* and drag, or **Draw polygon* and click each corner, then double-click, right-click or press Enter. Backspace removes the last corner, Escape starts again. The raster is **cut to the shape**, with NoData outside it. The shape stays on the map, dashed red, until you clear it or close the window.",
          } },
          { name: "**Clip to a polygon layer's boundary**", type: "", default: "", description: {
            km: "",
            en: "The layer's polygons (or only the selected ones) are merged and the raster is **cut to them**, with NoData outside.",
          } },
          { name: "**Extent of a layer**", type: "", default: "", description: { km: "", en: "The bounding box of any vector or raster layer." } },
        ],
      },
      {
        title: { km: "", en: "Custom addresses" },
        nameLabel: "You paste",
        blocks: [
          { type: "paragraph", text: { km: "", en: "Three shapes, told apart by the address itself:" } },
          { type: "paragraph", text: {
              km: "",
              en: "Local file paths are refused on purpose — use **Layer Export / Import** for those.",
            } },
          { type: "paragraph", text: {
              km: "",
              en: "The address is used as typed for the request, but the layer's source address and attribution are written **without a user name, password or query string**, so a token pasted as `?token=…` never travels in the project file or in an export of the layer.",
            } },
        ],
        rows: [
          { name: "`https://…/data.geojson` (or `.zip`, `.gpkg`, `.kml`)", type: "", default: "", description: { km: "", en: "Downloaded and opened with GDAL/OGR." } },
          { name: "`https://…/FeatureServer/0`", type: "", default: "", description: {
            km: "",
            en: "Queried as GeoJSON and **paged through**. A service that caps each reply at 1000 or 2000 records still arrives complete. A service that ignores paging, or has more than 50 pages of records, is refused with a message rather than returned truncated or repeated.",
          } },
          { name: "`https://…/geoserver/wfs?service=WFS`", type: "", default: "", description: { km: "", en: "Opened live by the QGIS WFS provider. This one is *not a scratch layer." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Add Open Data & Basemaps**, or press its button on the KGA toolbar." },
        { km: "", en: "Choose a **Data type** — boundaries, other vector data, a basemap, a DEM or land cover." },
        { km: "", en: "Pick the **Data source**, then the **Country** and **Admin level** (or, for a raster, the **Dataset** or **Year** and the **Area**)." },
        { km: "", en: "Read the details panel: publisher, year, licence, feature count, and for a raster the area in km² and the estimated output size." },
        { km: "", en: "Press **Add to Map**." },
        { km: "", en: "For vector data, export the scratch layer somewhere permanent before closing the project — the message bar offers **Save layer…**." },
      ] },
    ],
    results: [
      { type: "table", head: [{ km: "", en: "Data type" }, { km: "", en: "What lands in the project" }], rows: [
        [{ km: "", en: "Administrative boundaries, other vector data" }, {
            km: "",
            en: "A **memory (scratch) layer* in the source's own CRS, carrying the publisher, licence and source address in the layer's metadata. A layer whose name is already taken becomes `name (2)`.",
          }],
        [{ km: "", en: "WFS address" }, { km: "", en: "A live **WFS layer**, read from the service on demand." }],
        [{ km: "", en: "DEM" }, {
            km: "",
            en: "A **GeoTIFF raster layer* (Float32 or Int16, DEFLATE-compressed, NoData −32767) in EPSG:4326 or the project CRS, carrying its licence in the layer metadata. Written to **Save to**, or to a temporary file that QGIS deletes on exit — the message bar offers **Save layer…* for those.",
          }],
        [{ km: "", en: "Land cover" }, {
            km: "",
            en: "A **classified GeoTIFF* (Byte, DEFLATE-compressed, NoData 0) whose pixel values are the publisher's class codes, with the **class names**, the publisher's **colour table* and a **raster attribute table* — `Value`, `Count`, `lc_code`, `lc_class`, `Red`, `Green`, `Blue` — in the `.tif.aux.xml` beside it, which ArcGIS reads as well as QGIS. It opens with a paletted legend such as `2 - Trees`, saved as a `.qml` beside the file so it opens styled next time too. Written to **Save to**, or to a temporary file.",
          }],
        [{ km: "", en: "Land cover polygons" }, {
            km: "",
            en: "*Optional. A **GeoPackage* layer `landcover` with `lc_code` (integer) and `lc_class` (text), one polygon per connected patch of a class, styled with the same legend.",
          }],
        [{ km: "", en: "Basemap" }, {
            km: "",
            en: "An **XYZ raster layer* in EPSG:3857, placed at the bottom of the layer tree. Optionally also a permanent Browser entry.",
          }],
      ] },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Downloads are cached.** Adding the same boundary twice costs one download, and the second one works with the network unplugged. The cache lives under the QGIS profile directory (`kga_tools/data_cache`) and is trimmed, least recently used first, once it passes 500 MB. - **Natural Earth is worldwide files, cut down on the way in.** One download serves every country, so picking a second country afterwards costs nothing. Its admin 1 coverage is not the same at every scale, and this is the publisher's doing rather than the tool's:",
        } },
      { type: "table", head: [{ km: "", en: "ADM1 scale" }, { km: "", en: "Units" }, { km: "", en: "Countries covered" }], rows: [
        [{ km: "", en: "1:10m" }, { km: "", en: "4,596" }, { km: "", en: "251 — effectively everywhere. Cambodia has 24." }],
        [{ km: "", en: "1:50m" }, { km: "", en: "294" }, {
            km: "",
            en: "9 only: Australia, Brazil, Canada, China, Indonesia, India, Russia, USA, South Africa",
          }],
        [{ km: "", en: "1:110m" }, { km: "", en: "51" }, { km: "", en: "the USA only" }],
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "So ADM1 is greyed out at 1:50m and 1:110m for a country those files do not hold, the same way a missing geoBoundaries level is. Admin 0 is complete at all three scales. Note that Natural Earth's 24 Cambodian units are its own generalisation, not the official 25 — use geoBoundaries or HDX when the province count has to be right.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "- **One HDX download carries every level.** COD-AB publishes a single zipped shapefile holding ADM0 to ADM3 together, so switching level after the first add costs nothing. The level is picked out of the container by name, and publishers do not all agree on that name — both `khm_admin2.shp` and `xxx_admbnda_adm2_gov_20181004` are understood. - **Attribution is required by every source here**, including the basemaps. The licence is shown before the download, written into the layer's metadata, and travels with the layer when it is exported. - **Copernicus tiles are streamed, not downloaded.** They are Cloud Optimised GeoTIFFs in a public AWS bucket, so only the part inside your area crosses the network — a district out of a 48 MB tile is a few MB. Tiles over open sea do not exist; the tool knows which do from the bucket's own tile list, cached for a week. This goes through GDAL rather than QGIS's network stack; the proxy set in QGIS Options is passed across to it. - **OpenTopography downloads are cached** like the vector sources, keyed by dataset and bounding box, so asking for the same area again costs nothing. The API key is kept in the QGIS authentication database (never in plain settings), is trimmed and percent-encoded into the request, and is sent only to OpenTopography. - **A file you name is never replaced silently.** Typing the path of an existing DEM or land-cover file asks first; a file that is open in the project as a layer is refused outright. - **A polygon failure keeps the raster.** If turning land cover into polygons fails, the finished raster is still added and the message says what went wrong with the polygons. - **Land cover is kept on its own grid.** Esri Land Cover is asked for in the UTM zone of the area's centre at exactly 10 m, which is how it is published, so nothing is resampled. An area crossing a zone boundary is still one raster, in the centre's zone. WorldCover stays on its 1/12000° grid, streamed from the AWS bucket like the Copernicus DEM. Esri requests are cached per chunk, so asking again for an overlapping area costs little. - **A land-cover year that is not published yet** comes back from Esri's service as all NoData; the tool says so rather than adding an empty raster. - **The two land-cover products do not share a legend.** Esri's codes run 1 to 11 with gaps, WorldCover's 10 to 100 in tens, and their classes are defined differently. WorldCover 2020 and 2021 were also made with different algorithm versions, so a difference between them is not necessarily real change. - **Copernicus, SRTM, NASADEM and ALOS are surface models.** They follow the tops of trees and buildings. EU DTM and GEDI L3 are bare-earth. The `_E` datasets give heights above the WGS84 ellipsoid, not above sea level. - **Basemap list.** Eleven services ship with the tool:",
        } },
      { type: "table", head: [{ km: "", en: "Basemap" }, { km: "", en: "Deepest zoom" }], rows: [
        [{ km: "", en: "OpenStreetMap" }, { km: "", en: "19" }],
        [{ km: "", en: "Google Satellite, Google Satellite Hybrid" }, { km: "", en: "21" }],
        [{ km: "", en: "Google Map" }, { km: "", en: "20" }],
        [{ km: "", en: "Google Terrain, Google Terrain Hybrid" }, { km: "", en: "18" }],
        [{ km: "", en: "ESRI Topography, ESRI Imagery" }, { km: "", en: "19" }],
        [{ km: "", en: "ESRI National Geographic, ESRI Grey (Dark), ESRI Grey (Light)" }, { km: "", en: "16" }],
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "Zooming past a service's deepest level is not an error — QGIS scales the last real level up, which looks soft but keeps working. Anything not listed can be added through **Custom XYZ URL…**.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "- **The Google basemaps come with a licensing caveat.** Google's tile endpoints are not licensed for use outside Google's own APIs and SDKs, so whether a particular map or deliverable may use them is a question for whoever makes it. They are included because they are what people here use; this note is here so the decision is an informed one rather than an assumption. - **Coverage is the publisher's, not the tool's.** If geoBoundaries has no ADM4 for a country, the level is greyed out; that is the source saying it has nothing, not a failure here. Trying another release or another source is often the answer. - **The window needs the QGIS canvas** and cannot run headless or inside a Processing model. - **Network errors are reported as sentences**, not tracebacks. Everything the tool fetches through QGIS honours the proxy, SSL and authentication settings configured in QGIS Options. The tiles streamed straight from AWS (Copernicus, WorldCover) go through GDAL, which is handed the proxy only. If the tool cannot reach a source but a browser can, QGIS Options is the first place to look.",
        } },
    ],
    seeAlso: ["imagery_downloader", "layerexportimport", "raster_format_converter"],
  },
  {
    slug: "imagery_downloader",
    group: "kgadatamanagement",
    name: "Imagery Downloader",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:imagery_downloader",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window and an internet connection" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Imagery Downloader",
    summary: {
      km: "ទាញយករូបភាពផែនទីតាមអ៊ីនធឺណិតសម្រាប់តំបន់មួយ ផ្គុំជារូបភាពតែមួយដែលមានកូអរដោនេ រួចបន្ថែមទៅក្នុងផែនទី។",
      en: "Downloads web-map raster tiles for an area, stitches them into one georeferenced image and adds it to the map.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Downloads web-map raster tiles for an area, stitches them into one georeferenced image, saves it in the chosen format and CRS, and adds it to the map below the vector layers. The source list is data-driven (`core/imagery/sources.py`); the only source shipped is **Google Satellite**.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "Tiles are fetched through QGIS's network stack (proxy and authentication honoured) by a background task with a thread pool, retries with back-off and automatic slowing down when the server throttles. Tiles are written into a sparse tiled GeoTIFF work file as they arrive, and a checkpoint records which are done, so an interrupted job resumes from the same folder without re-downloading anything.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "**Imagery source**", type: "", default: "", description: { km: "", en: "Entry from the source registry." } },
          { name: "**Download extent**", type: "", default: "", description: {
            km: "",
            en: "Map canvas, layer extent, box drawn on the map, or polygon layer (bounding box downloaded, pixels outside masked; optional *Selected features only*).",
          } },
          { name: "**Zoom level**", type: "", default: "", description: {
            km: "",
            en: "Source min–max zoom; the ground resolution at the area's latitude is shown. *Auto matches the canvas scale.",
          } },
          { name: "**Output CRS**", type: "", default: "", description: {
            km: "",
            en: "Project CRS (default) or a selected CRS. EPSG:3857 is pixel-exact; others are reprojected (bilinear).",
          } },
          { name: "**Format**", type: "", default: "", description: { km: "", en: "GeoTIFF, JPEG, PNG, JPEG 2000, ECW — only those the local GDAL can write." } },
          { name: "**Build pyramids**", type: "", default: "", description: { km: "", en: "Internal overviews for GeoTIFF." } },
          { name: "**Transparent outside polygon**", type: "", default: "", description: { km: "", en: "Clip mode: transparent where the format has alpha, otherwise white." } },
          { name: "**Connections**", type: "", default: "", description: { km: "", en: "Parallel downloads, 1–16." } },
          { name: "**Output folder / File name**", type: "", default: "", description: { km: "", en: "Where the result and, if enabled, the checkpoint go." } },
          { name: "**Enable checkpoint**", type: "", default: "", description: {
            km: "",
            en: "Keep `<name>.kga_checkpoint.json` and `<name>_work.tif` so a stopped job can resume.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Imagery Downloader**, or press its button on the KGA toolbar." },
        { km: "", en: "Choose the imagery source and set the **Download extent**." },
        { km: "", en: "Pick a **Zoom level** — read the ground resolution it reports before committing." },
        { km: "", en: "Set the output CRS, format, folder and file name." },
        { km: "", en: "Press download and leave it running. If it is interrupted, start it again with the same folder and file name and it carries on." },
      ] },
    ],
    results: [
      { type: "paragraph", text: {
          km: "",
          en: "The finished image, georeferenced: embedded for GeoTIFF / JPEG 2000 / ECW; a world file (`.jgw` / `.pgw`), `.prj` and `.aux.xml` for JPEG / PNG. The layer is added to the project with the source attribution in its metadata. The work file and checkpoint are removed after a successful export.",
        } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "* Google's terms restrict bulk downloading and offline use of map tiles. The tool's Help text says so and the result layer carries Google's attribution, but **the window does not stop to ask for an acknowledgement** before it downloads. The user is responsible for having the right to use the imagery. * Extents crossing the antimeridian are rejected. Latitudes are clamped to ±85.0511°. Above 5,000,000 tiles Download is disabled. * JPEG is limited to 65,500 px per side and has no alpha (empty areas white). * ECW is offered only when GDAL has an ECW writer with an encode licence key. * The work file needs about 3 bytes per pixel of the tile mosaic in free disk space in addition to the final image. * Tests: `tests/imagery_downloader/` (tile maths, estimator, checkpoint, engine and dialog against a local fake tile server). The folder is kept locally and is not part of the repository.",
        } },
    ],
    seeAlso: ["add_data", "raster_format_converter"],
  },
  {
    slug: "satellite_imagery_archive",
    group: "kgadatamanagement",
    name: "Satellite Imagery Archive",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:satellite_imagery_archive",
    interactive: true,
    toolType: { km: "", en: "Interactive dock panel, opened as a tab beside the Catalog panel \u2014 shares the Imagery Downloader toolbar drop-down; needs the QGIS window and an internet connection" },
    processingPath: "Processing \u25b8 Toolbox \u25b8 KGA Toolbox \u25b8 KGA Data Management \u25b8 Satellite Imagery Archive",
    summary: {
      km: "\u179f\u17d2\u179c\u17c2\u1784\u179a\u1780\u1794\u178e\u17d2\u178e\u17b6\u179b\u17d0\u1799\u179a\u17bc\u1794\u1797\u17b6\u1796\u1795\u17d2\u1780\u17b6\u1799\u179a\u17a0\u17d0\u179f\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u178f\u17c6\u1794\u1793\u17cb \u1793\u17b7\u1784\u1780\u17b6\u179b\u1794\u179a\u17b7\u1785\u17d2\u1786\u17c1\u1791\u1798\u17bd\u1799 \u179a\u17bd\u1785\u1791\u17b6\u1789\u1799\u1780\u1795\u17d2\u1791\u17b6\u17c6\u1784\u178a\u17c2\u179b\u1794\u17b6\u1793\u1787\u17d2\u179a\u17be\u179f\u17d4",
      en: "Searches open imagery archives for an area and a date range, then downloads the chosen scenes clipped to the area.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Shows scene thumbnails and footprints, and downloads the chosen scenes clipped to the area as GeoTIFF or Cloud-Optimized GeoTIFF with a JSON metadata file. **Only the area is transferred**: cloud-optimised rasters are read with HTTP range requests, so a 10 \u00d7 10 km Sentinel-2 subset takes seconds rather than a whole 100 km tile. Searching, thumbnails and downloads run as background QGIS tasks." } },
      { type: "paragraph", text: { km: "", en: "It complements **[Imagery Downloader](imagery_downloader.md)**, which stitches current web-map tiles; this tool is for dated scenes with cloud and coverage figures." } },
      { type: "subheading", text: { km: "", en: "Sources" } },
      { type: "table", head: [{ km: "", en: "Source" }, { km: "", en: "Archive" }, { km: "", en: "Resolution" }, { km: "", en: "Account" }], rows: [
        [{ km: "", en: "ESA Sentinel-2 L2A (Element 84 Earth Search, AWS)" }, { km: "", en: "2015 \u2192" }, { km: "", en: "10 m" }, { km: "", en: "No" }],
        [{ km: "", en: "USGS Landsat 4\u20139 Collection 2 Level-2 (Microsoft Planetary Computer)" }, { km: "", en: "1982 \u2192" }, { km: "", en: "30 m" }, { km: "", en: "No" }],
        [{ km: "", en: "Google Earth Engine" }, { km: "", en: "1984 \u2192" }, { km: "", en: "10\u201330 m" }, { km: "", en: "Yes \u2014 `earthengine-api`, a registered Cloud project, one-time sign-in" }],
        [{ km: "", en: "OpenAerialMap" }, { km: "", en: "varies" }, { km: "", en: "cm \u2013 m" }, { km: "", en: "No (CC-BY 4.0)" }],
        [{ km: "", en: "Custom STAC catalog" }, { km: "", en: "any" }, { km: "", en: "any" }, { km: "", en: "depends" }],
      ] },
    ],
    parameters: [
      {
        title: { km: "", en: "Panel tabs" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Search", type: "", default: "", description: { km: "", en: "Source and collection; area as *Map view*, *Draw box* or *Polygon* (optionally selected features only); *Year* or *From/To*; *Max cloud*; *Min coverage* of the area; number of results." } },
          { name: "Results", type: "", default: "", description: { km: "", en: "Thumbnails with date, satellite, cloud %, area coverage, pixel size and tile. Filter by year, sort, outline footprints on the map, zoom to, select all, add a footprints layer. **Preview on map** draws up to 4 selected scenes as a temporary layer, read once at screen resolution and re-read when you zoom or pan. Not available for Earth Engine." } },
          { name: "Download", type: "", default: "", description: { km: "", en: "Band combination, resolution (native, 50 %, 25 %, 10/30/60 m), GeoTIFF or COG, *Clip to polygon shape*, output folder, add to map, `.json` metadata, quality report. A pre-download check shows expected size and warns about partial coverage, cloud and the size limit." } },
          { name: "Settings", type: "", default: "", description: { km: "", en: "Earth Engine project, Planetary Computer key (optional), custom STAC catalog, size limit, timeout." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open the panel from **KGA Data Management > Satellite Imagery Archive**, or the Imagery Downloader toolbar drop-down." },
        { km: "", en: "On **Search**, pick the source, the area and the date range, and set the cloud and coverage limits." },
        { km: "", en: "On **Results**, sort and preview the scenes; footprints are outlined on the map." },
        { km: "", en: "On **Download**, choose the band combination, resolution and format, then read the pre-download size check before starting." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "`<SRC>_<YYYYMMDD>_<scene_id>_<bands>.tif` plus a `.json` sidecar recording source, acquisition, processing and quality. **Existing files are never overwritten.**" },
        { km: "", en: "Alpha bands and masks become NoData, and reflectance scale and offset are written into the file." },
        { km: "", en: "Each file is checked after download \u2014 corrupt tiles, missing georeferencing, empty output, saturation, and a pixel comparison with the source at native resolution. A report dialog lists the results." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "Landsat and Sentinel-2 requests go to third-party servers; **their terms and rate limits apply**. Cite the data providers (Copernicus, USGS, OpenAerialMap)." },
        { km: "", en: "Google Earth Engine is optional; downloads are limited to about 32 MB each." },
        { km: "", en: "Downloads read the area in many parallel pieces; on a slow or distant connection the archive's server speed is still the limit. Reprojected, resampled or clipped outputs use GDAL's warper and are slower." },
        { km: "", en: "Output larger than the size limit \u2014 400 MP per band by default \u2014 is blocked." },
        { km: "", en: "Settings are stored under `kga_tools/historical_imagery/` in the QGIS profile." },
      ] },
    ],
    seeAlso: ["imagery_downloader", "add_data", "raster_format_converter"],
  },
  {
    slug: "create_layer_package",
    group: "kgadatamanagement",
    name: "Create Layer Package",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:create_layer_package",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — it reads the project layer tree)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Create Layer Package",
    summary: {
      km: "ខ្ចប់ស្រទាប់ រចនាបថ និងអ្វីៗដែលរចនាបថត្រូវការ ទៅក្នុងឯកសារ .kgalp តែមួយ ដែលអាចបើកបានគ្រប់ទីកន្លែង។",
      en: "Package layers, their styles and everything those styles need into one .kgalp file that opens anywhere.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Packages layers, their styles and everything those styles need into a single `.kgalp` file that opens on a machine that has never seen the data.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "A QLR file only *points at* data that has to travel beside it. A layer package *contains* it. Vector layers are copied into one GeoPackage inside the archive — field domains included — rasters are copied as their own files with their sidecars, each style is saved as a QML, and every SVG symbol and raster marker image the symbology references is collected and de-duplicated. The group structure of the Layers panel is recorded so the receiving end rebuilds it.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "Reach for it when you need to hand a styled map to a colleague, a client or a field team as one file.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Input",
        blocks: [],
        rows: [
          { name: "**Layers to package**", type: "", default: "", description: {
            km: "",
            en: "A tick-box list of the project's vector and raster layers (in Layers-panel order). **Select all* / **Clear* tick or untick the lot; **Browse...* adds layers from files on disk that are not in the project.",
          } },
          { name: "**Package only the selected features**", type: "", default: "", description: {
            km: "",
            en: "For each ticked vector layer that has a selection, package just those features. Layers without a selection go in whole.",
          } },
          { name: "**Collect SVG symbols and marker images**", type: "", default: "", description: {
            km: "",
            en: "Copies the SVG and image files the symbology points at into the package and records where they came from, so the symbols still render on the far side. On by default.",
          } },
          { name: "**Include layer metadata**", type: "", default: "", description: {
            km: "",
            en: "Stores each layer's title, abstract and identifier in the manifest. On by default.",
          } },
          { name: "**Write an HTML report beside the package**", type: "", default: "", description: {
            km: "",
            en: "Optional `<package>_report.html`: counts, a per-layer table and every warning.",
          } },
          { name: "**Layer package (.kgalp)**", type: "", default: "", description: {
            km: "",
            en: "Where to save. The extension is added if you leave it off; an existing file is replaced only after you confirm.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Load and style the layers in QGIS exactly as you want them to arrive. 2. Open **KGA Data Management > Create Layer Package**. 3. Tick the layers in the list. Group structure comes from the Layers panel, not from this list. 4. If you only want part of the data, select those features on the map first and tick **Package only the selected features**. 5. Choose where the `.kgalp` goes and press **Create**. 6. Read the message under the list. Warnings here are the ones that matter — especially fonts. 7. Send the single `.kgalp` file. The recipient opens it with **[Open Layer Package](open_layer_package.md)**.",
        } },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One `.kgalp` archive at the chosen path, holding:" },
        { km: "", en: "a GeoPackage with every vector layer (field domains preserved)," },
        { km: "", en: "each raster copied as its own file with its sidecars," },
        { km: "", en: "a QML style per layer," },
        { km: "", en: "the collected SVG and marker image files, de-duplicated," },
        { km: "", en: "a manifest recording the layers, CRSs, styles, resources and group tree." },
        { km: "", en: "An optional HTML report (`<package>_report.html`)." },
      ] },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Fonts cannot be packaged.** If a layer uses a font marker you get a warning naming the font, so you can tell the recipient what to install. Nothing else in the styling has this problem. - **The manifest is written last, on purpose.** A package interrupted halfway through has no manifest, and Open Layer Package refuses it rather than opening a half-loaded project. An interrupted run leaves a file you should delete. - Invalid layers, and layers that are neither vector nor raster, are skipped — each with a warning naming the layer. Check the count in the log against the number you ticked. - Package size is reported in the change report. Rasters dominate it; a large DEM makes a large package. - Pairs with **[Open Layer Package](open_layer_package.md)**, which is why the two sit at the top of the Data Management menu together.",
        } },
    ],
    seeAlso: ["open_layer_package"],
  },
  {
    slug: "open_layer_package",
    group: "kgadatamanagement",
    name: "Open Layer Package",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:open_layer_package",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — it adds layers to the project)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Open Layer Package",
    summary: {
      km: "ស្រាយឯកសារ .kgalp រួចបន្ថែមស្រទាប់ រចនាបថ និងរចនាសម្ព័ន្ធក្រុមរបស់វា ទៅក្នុងគម្រោងបច្ចុប្បន្ន។",
      en: "Unpack a .kgalp and add its layers, styles and group structure to the current project.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Unpacks a `.kgalp` written by **[Create Layer Package](create_layer_package.md)** and adds its layers, styles and group structure to the current project.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "The package is extracted to a real folder on disk, never to a temporary one, because the layers point at the extracted files — a temp folder would leave a project full of broken layers after the next restart. SVG and image paths inside each style are rewritten to the extracted copies, so the symbology renders the same as it did on the machine that built the package.",
        } },
      { type: "subheading", text: { km: "", en: "Browsing a package without opening it" } },
      { type: "paragraph", text: {
          km: "",
          en: "A `.kgalp` also appears in the QGIS **Browser** panel (and the Data Source Manager) like a database: expand it to list its layers, then drag a layer onto the map or double-click it. Nothing is unpacked for this — layers are read in place from inside the package (GDAL `/vsizip/`), so they are read-only and arrive with QGIS's default style.",
        } },
      { type: "paragraph", text: { km: "", en: "Right-click menu:" } },
      { type: "paragraph", text: {
          km: "",
          en: "- On the package: **Open Layer Package...** (this tool, already pointed at the file) and **[Add Layers to Layer Package...](add_to_layer_package.md)**. - On a layer: **Add to Project (with style)** unpacks the package once into `kga_package_cache` in the QGIS profile folder and loads the layer with its packaged style and SVG symbols.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "A layer loaded straight from the Browser keeps the package file open, so Windows will not let **Add Layers to Layer Package** replace it until that layer is removed from the project.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Input",
        blocks: [],
        rows: [
          { name: "**Layer package (.kgalp)**", type: "", default: "", description: { km: "", en: "The package to open." } },
          { name: "**Extract to**", type: "", default: "", description: {
            km: "",
            en: "Where the contents are unpacked. Leave it empty and a `KGA Packages/<package name>` folder is created beside the project file (or in your home folder if the project has never been saved); the box shows where.",
          } },
          { name: "**Add the layers to the project**", type: "", default: "", description: { km: "", en: "Untick to extract only, without touching the Layers panel." } },
          { name: "**Group name**", type: "", default: "", description: {
            km: "",
            en: "The Layers-panel group the layers are placed in. Defaults to the package file name.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Open **KGA Data Management > Open Layer Package**. 2. Choose the `.kgalp` you received under **Layer package**. 3. Choose an **Extract to** folder somewhere permanent — beside the project is the usual choice. Skipping this is fine; the default is also permanent. 4. Press **Open**. 5. The layers appear in a group named after the package, styled, with the group structure of the original project rebuilt. 6. Read the message under the options for warnings carried over from the packaging machine — a missing font is the common one.",
        } },
    ],
    results: [
      { type: "paragraph", text: {
          km: "",
          en: "- The extracted package on disk: a GeoPackage of vector layers, raster files, QML styles, and the collected SVG/marker resources. - The layers in the project, inside one group, with their styles applied and their symbol paths repointed at the extracted resources.",
        } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Do not extract to a temporary folder.** The layers reference the extracted files; if the folder disappears the project breaks. This is why the tool never uses a temp folder even when you leave the parameter empty. - **Fonts still have to be installed by hand.** The package carries a warning naming any font marker it could not include; it is repeated in the log here. - A package whose writing was interrupted has no manifest and is refused with a clear error, rather than opening half-loaded. - Archive entries that would be written outside the extraction folder are refused — a package cannot write elsewhere on your disk. - Layers listed in the manifest but missing from the archive are warned about and skipped; anything not mentioned by the recorded group tree is still hung off the group directly, so no layer is silently dropped.",
        } },
    ],
    seeAlso: ["create_layer_package", "add_to_layer_package"],
  },
  {
    slug: "add_to_layer_package",
    group: "kgadatamanagement",
    name: "Add Layers to Layer Package",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:add_to_layer_package",
    interactive: true,
    toolType: { km: "", en: "Interactive (opens its own window; no Processing parameters)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Add Layers to Layer Package",
    summary: {
      km: "បន្ថែមស្រទាប់ពីគម្រោង ឬពីថាស ទៅក្នុងឯកសារ .kgalp ដែលមានស្រាប់។",
      en: "Add project layers, or layers browsed from disk, to an existing .kgalp package.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Adds one or more layers to a `.kgalp` that already exists, with the same treatment **[Create Layer Package](create_layer_package.md)** gives them: vector data goes into the package GeoPackage (field domains included), rasters are copied with their sidecar files, each style is saved as a QML, and the SVG and image resources the symbology uses are collected." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Input layers", type: "Layer list", default: "—", description: { km: "", en: "The project's vector and raster layers, each with a tick box. **Select all** / **Clear** tick or untick the lot. **Browse…** adds layers from files on disk that are not in the project; a container with several layers contributes each one, ticked." } },
          { name: "Use only the selected features", type: "Boolean", default: "off", description: { km: "", en: "For every ticked vector layer that has a selection, only the selected features are added. Layers without a selection are added whole. The label counts how many ticked layers have a selection." } },
          { name: "Layer package (.kgalp)", type: "File", default: "—", description: { km: "", en: "The existing package to add to." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Add Layers to Layer Package**." },
        { km: "", en: "Tick the layers to add, or press **Browse…** for layers on disk." },
        { km: "", en: "Tick **Use only the selected features** if only a selection should go in." },
        { km: "", en: "Choose the target `.kgalp`." },
        { km: "", en: "Press **Add**. The window stays open for the next batch." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Layers already in the package are never changed or replaced. A layer with the same name as an existing one is stored beside it (`name_2`)." },
        { km: "", en: "**A zip cannot be appended to in place**, so the package is rebuilt into a temporary file and swapped in only once complete. A failure — or a package open in another program — leaves the original untouched." },
        { km: "", en: "Groups the new layers belong to in the Layers panel are merged into the package's recorded structure; a group with the same name is shared. Layers browsed from disk have no group and open at the top of the package group." },
        { km: "", en: "Fonts cannot be packaged; a layer using a font marker gives a warning naming the font." },
        { km: "", en: "The window can also be opened from the Browser: right-click a `.kgalp` and choose **Add Layers to Layer Package…**. If a layer read straight from the package is still in the project, Windows holds the file and the update is refused with a message — remove the layer and try again." },
      ] },
    ],
    seeAlso: ["create_layer_package", "open_layer_package"],
  },
  {
    slug: "duplicate_to_new_layer",
    group: "kgadatamanagement",
    name: "Duplicate to New Layer",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:duplicate_to_new_layer",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog, modeless; also on the right-click menu of vector and raster layers, below QGIS's Duplicate Layer" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Duplicate to New Layer",
    summary: {
      km: "ចម្លងស្រទាប់ព្រមទាំងទិន្នន័យរបស់វា ដូច្នេះច្បាប់ចម្លងឯករាជ្យពីច្បាប់ដើម។",
      en: "Copy a layer and its data, so the copy is fully independent of the original.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "QGIS's built-in *Duplicate Layer* adds a second layer pointing at the **same** data source, so editing or deleting features in the copy changes the original. This tool copies the data as well, so the copy is fully independent." } },
      { type: "list", items: [
        { km: "", en: "**Vector layers** are written to a GeoPackage, shapefile, File Geodatabase, GeoJSON, KML or KMZ, as you choose." },
        { km: "", en: "**Rasters** are written to a new GeoTIFF (LZW, tiled) with the same values, no-data value and data type." },
        { km: "", en: "**Memory (scratch) layers** are cloned in memory; no file is needed." },
      ] },
      { type: "paragraph", text: { km: "", en: "Symbology, labels, aliases and form settings are copied. The new layer is named `<layer> (copy)` and sits directly above the original." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Original Layer", type: "Layer combo", default: "—", description: { km: "", en: "A vector or raster layer in the project." } },
          { name: "Output Location", type: "Folder", default: "beside the original", description: { km: "", en: "The **folder** to save the copy in. The file is named `<layer>_copy` (numbered if taken), so a copy never replaces an existing file. Disabled for a memory layer." } },
          { name: "Output type", type: "Combo box", default: "GeoPackage", description: { km: "", en: "Vector: GeoPackage, Shapefile, File Geodatabase, GeoJSON, KML or KMZ. Raster: GeoTIFF, COG, IMG, PNG, JPEG, JPEG 2000 and ASCII Grid. A format this QGIS cannot write is greyed out." } },
          { name: "Extent to copy *(rasters only)*", type: "Combo box", default: "Whole raster", description: { km: "", en: "**Whole raster**, **Current map extent**, **Extent of a layer**, **Draw a rectangle or polygon** on the map, or **Boundary of a polygon layer** (optionally selected features only)." } },
          { name: "Selected features only *(vectors)*", type: "Boolean", default: "off", description: { km: "", en: "Copy just the features selected on the original layer. Available only when a vector layer has a selection; the box shows how many." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: { km: "", en: "Right-click a layer in the Layers panel and choose **Duplicate to New Layer…** (just below QGIS's *Duplicate Layer*), or open **KGA Data Management > Duplicate to New Layer**. The window stays open, so several layers can be copied in a row." } },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "A layer **filter** limits what is copied; the copy has no filter." },
        { km: "", en: "**Unsaved edits** in an edit-mode layer are included in the copy." },
        { km: "", en: "Rasters must be files on disk; WMS, XYZ and other web services are refused." },
        { km: "", en: "**Cutting a raster.** A map or layer extent, or a drawn rectangle, copies that box of whole pixels. A drawn polygon or a layer boundary also sets every pixel outside the shape to NoData: the raster's own NoData value, or `-9999` for floating-point data and `0` otherwise when it has none. An area that does not overlap the raster is refused." },
        { km: "", en: "**Format limits** are checked before anything is written: PNG takes 8- or 16-bit data and up to 4 bands, JPEG 8-bit and up to 3 bands, JPEG 2000 integer data, ASCII Grid one band. JPEG is lossy. Use GeoTIFF for anything else." },
        { km: "", en: "**Shapefile** field names are cut to 10 characters. **KML and KMZ** are written in WGS 84 (EPSG:4326), as Google Earth requires. A **File Geodatabase** copy is a new `.gdb` folder holding one layer, and its layer name is limited to letters, digits and underscores." },
        { km: "", en: "A GeoPackage source that already has its own `fid` attribute keeps it; the copy's feature-id column is called `fid_gpkg`." },
      ] },
    ],
    seeAlso: ["layerexportimport", "create_layer_package"],
  },
  {
    slug: "create_points_from_table",
    group: "kgadatamanagement",
    name: "Create Points From Table",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:create_points_from_table",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Create Points From Table",
    summary: {
      km: "បម្លែងជួរឈរកូអរដោនេក្នុងតារាង ទៅជាស្រទាប់ចំណុច។ អានឯកសារ .csv, .txt, .tsv, .xlsx, .xlsm, .xls និង .ods ដោយផ្ទាល់ពីថាស ដោយមិនចាំបាច់បញ្ចូលតារាងទៅក្នុងគម្រោងជាមុន។",
      en: "Turns the coordinate columns of a table into a point layer. Reads .csv, .txt, .tsv, .xlsx, .xlsm, .xls and .ods straight from disk — the table does not have to be added to the project first, and nothing is written back to it.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "It exists because the QGIS \"Add Delimited Text Layer\" route falls over on real survey exports: thousand separators, comma decimals, a title block above the header, a sheet that is not the first one, columns that come out as text. This tool handles those and says in the log what it did." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input Table", type: "File", default: "—", description: { km: "", en: "The table to read: `.csv`, `.txt`, `.tsv`, `.xlsx`, `.xlsm`, `.xls` or `.ods`. Multi-sheet workbooks use the first sheet unless you name another under Advanced." } },
          { name: "X Column (Easting or Longitude)", type: "String, optional", default: "`X`", description: { km: "", en: "Header of the X column; matching ignores case. Not found, or left blank, and the tool looks for `x`, `easting`, `east`, `lon`, `longitude`, `xcoord`, `coord_x`, `point_x`, `utm_e`, then logs which it used." } },
          { name: "Y Column (Northing or Latitude)", type: "String, optional", default: "`Y`", description: { km: "", en: "Same, with fallbacks `y`, `northing`, `north`, `lat`, `latitude`, `ycoord`, `coord_y`, `point_y`, `utm_n`." } },
          { name: "Z Column (Elevation, optional)", type: "String, optional", default: "empty", description: { km: "", en: "Fill it in to build a 3D PointZ layer; blank leaves the output 2D. Fallbacks are `z`, `elev`, `elevation`, `height`, `altitude`, `level`, `rl`. Rows whose Z will not parse get a Z of 0 and are counted in the log rather than dropped." } },
          { name: "Coordinate Reference System", type: "CRS", default: "`EPSG:32648`", description: { km: "", en: "The CRS the numbers **are already in**, not the one you want to end up in. `EPSG:32648` is WGS 84 / UTM zone 48N, which covers most of Cambodia; use `EPSG:4326` for degrees." } },
          { name: "Label Points With (optional)", type: "String, optional", default: "empty", description: { km: "", en: "Column to label the points with. The loaded layer arrives with labelling already on: 9 pt black, white buffer, placed around the point." } },
          { name: "Detect Numeric Columns", type: "Boolean", default: "`True`", description: { km: "", en: "Types each column as Integer, Real or Text from what is in it, so graduated symbology, statistics and the field calculator work straight away. Leading-zero codes such as `007` stay Text on purpose. Untick to make every column Text." } },
          { name: "Skip Rows With Unusable Coordinates", type: "Boolean", default: "`True`", description: { km: "", en: "On, unparseable rows are counted, left out, and the run finishes. Off, the first such row stops the run and names the offending value — which is what you want when the table is meant to be complete." } },
        ],
      },
      {
        title: { km: "", en: "Advanced" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Workbook · Worksheet", type: "String, optional", default: "empty", description: { km: "", en: "Which sheet of an Excel/ODS workbook: its name, or its position starting at 1. Blank means the first sheet. Ignored for text files." } },
          { name: "Workbook · Header Row", type: "Integer (1–1000)", default: "`1`", description: { km: "", en: "Row the column headers are on, counting from 1. Raise it for tables carrying a title block, project name or units above the real header; everything above that row is discarded." } },
          { name: "Text Files · Column Separator", type: "Enum", default: "`Auto-detect`", description: { km: "", en: "`Auto-detect`, `Comma ,`, `Semicolon ;`, `Tab`, `Pipe |`, `Space`. Auto-detect samples the first few kilobytes; set it explicitly when a one-column file or quoted text full of commas fools it. Ignored for Excel and ODS." } },
          { name: "Text Files · Character Encoding", type: "Enum", default: "`Auto-detect`", description: { km: "", en: "`Auto-detect`, `UTF-8`, `Windows-1252 (Western)`, `Windows-874 (Thai)`, `UTF-16`. Auto-detect tries UTF-8, then Windows-1252, then Latin-1, and logs which worked. Set it explicitly if Khmer or accented text comes out as mojibake — CSVs saved from Excel on Windows are usually Windows-1252." } },
          { name: "Output Point Layer", type: "Feature sink", default: "temporary layer", description: { km: "", en: "Leave it temporary to check the result first, or write straight to GeoPackage or Shapefile." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Create Points From Table**." },
        { km: "", en: "Choose the **Input Table**. Nothing needs to be loaded in QGIS first." },
        { km: "", en: "Leave **X**/**Y** at their defaults unless your headers are unusual — the tool finds the common names by itself, and the log names the column it chose." },
        { km: "", en: "Set the **Coordinate Reference System** to the system the numbers are already recorded in. This is the single most common source of a wrong result." },
        { km: "", en: "If the table carries a title block above the real header, raise **Workbook · Header Row** under *Advanced*." },
        { km: "", en: "Press **Run**, then check the log's `Format / Encoding / Separator / Worksheet` block and any warnings before trusting the points." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "A point layer (PointZ when a Z column is given) in the chosen sink." },
        { km: "", en: "Every column of the table carried across as an attribute, typed per column when *Detect Numeric Columns* is on." },
        { km: "", en: "Labelling already switched on when a label column was named — but only for a layer added to the project; writing straight to a file carries geometry and attributes, never style." },
        { km: "", en: "A log block naming the format, encoding, separator and worksheet actually used, plus counts of skipped rows." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Messy numbers are handled, with one ambiguity.** `1,407,186.000`, `1 407 186,25` and a padded ` 556120 ` all read correctly. `1407186,000` is the awkward case — 1407186.0 in Europe, 1,407,186,000 elsewhere. The decision is made once per column from whichever value in it can only be read one way, and the log names any column read as comma-decimal. Glance at that when a coordinate looks a thousand times too big." },
        { km: "", en: "**The tool warns when the numbers do not suit the CRS** — degrees-sized values under a projected CRS, or metre-sized values under a geographic one. Read the warning; it usually means the CRS parameter is wrong." },
        { km: "", en: "**Shapefile output truncates field names** to 10 characters and caps the layer at 255 columns. GeoPackage does neither." },
        { km: "", en: "`.xls` and `.ods` are read through **pandas**; `.xlsx`/`.xlsm` prefer **openpyxl** and fall back to pandas. If neither is installed in your QGIS, save the table as `.csv` instead — the error says so." },
        { km: "", en: "Skipped-row messages are capped at 25 lines, so a badly broken file does not flood the log; the total count is still reported." },
        { km: "", en: "A failed run raises an error instead of reporting success with no output." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "gpkgtoshapefiles",
    group: "kgadatamanagement",
    name: "GeoPackage to Shapefiles",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:gpkgtoshapefiles",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ GeoPackage to Shapefiles",
    summary: {
      km: "នាំចេញស្រទាប់ spatial ទាំងអស់ពី GeoPackage ទៅជាឯកសារ ESRI Shapefile ដាច់ដោយឡែក ក្នុងថតមួយ។",
      en: "Exports all spatial layers from a GeoPackage into a folder as individual ESRI Shapefiles.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Exports every spatial layer inside a GeoPackage to its own ESRI Shapefile in a folder, in one pass." } },
      { type: "paragraph", text: { km: "", en: "This is the format-of-last-resort direction: you run it when something downstream — an old survey package, a government submission template, a consultant workflow — will only accept shapefiles. Keep the GeoPackage as the master copy." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input GeoPackage", type: "File (`*.gpkg`)", default: "—", description: { km: "", en: "The container to unpack. Every spatial sublayer inside it is exported." } },
          { name: "Output folder", type: "Folder destination", default: "—", description: { km: "", en: "Where the shapefiles are written. Created if it does not exist." } },
          { name: "Field encoding", type: "String, optional", default: "`UTF-8`", description: { km: "", en: "The encoding written into each shapefile and its `.cpg` sidecar. Leave it at UTF-8 unless the consumer demands otherwise — this is what keeps Khmer attributes readable." } },
          { name: "Filename prefix (optional)", type: "String, optional", default: "empty", description: { km: "", en: "Prepended to every output file name, e.g. `2024_` giving `2024_Canal.shp`." } },
          { name: "Skip layers with no features", type: "Boolean", default: "`False`", description: { km: "", en: "On, empty layers produce no file at all." } },
          { name: "Overwrite existing shapefiles", type: "Boolean", default: "`True`", description: { km: "", en: "Off, a layer whose `.shp` already exists in the folder is skipped rather than replaced." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > GeoPackage to Shapefiles**." },
        { km: "", en: "Pick the **Input GeoPackage** and an empty **Output folder**." },
        { km: "", en: "Leave **Field encoding** at `UTF-8` unless you have been told otherwise." },
        { km: "", en: "Press **Run** and read the log: it names every layer as `ok`, `skip` (with the reason) or `FAILED`, and finishes with an `Exported | Skipped | Failed` tally." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One `.shp` per spatial layer in the chosen folder, with its `.dbf`, `.shx`, `.prj` and a `.cpg` sidecar recording the encoding." },
        { km: "", en: "Each layer keeps its own CRS — nothing is reprojected." },
        { km: "", en: "The **Output folder** path is returned to Processing." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Field names are truncated to 10 characters.** That is the DBF limit, not a choice this tool makes, and the original names cannot be recovered from the shapefile afterwards." },
        { km: "", en: "**Non-spatial tables are skipped** — a shapefile must have geometry. The log says `skip (no geometry)` for each one." },
        { km: "", en: "A shapefile holds **one geometry type** and stores date-times without full precision. Layers that rely on either lose something in the trip." },
        { km: "", en: "Layer names are sanitised for the file system: anything that is not a letter, digit, underscore or hyphen becomes an underscore, and runs of underscores are collapsed. Two layers whose names differ only in punctuation therefore collide — check the log." },
        { km: "", en: "The reverse direction is **[Shapefiles to GeoPackage](shapefilestogpkg.md)**." },
      ] },
    ],
    seeAlso: ["shapefilestogpkg"],
  },
  {
    slug: "layerexportimport",
    group: "kgadatamanagement",
    name: "Layer Export / Import",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:layerexportimport",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Layer Export / Import",
    summary: {
      km: "នាំចេញស្រទាប់វ៉ិចទ័រទាំងអស់ក្នុងគម្រោងជាដុំ និងនាំចូលស្រទាប់ពីឯកសារវ៉ិចទ័រណាមួយត្រឡប់មកវិញ។",
      en: "Bulk export the vector layers of the current project, and import layers from any vector file back into it.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Bulk-exports the vector layers of the current project to GeoPackage, Shapefile, GeoJSON, KML or CSV, and pulls layers out of any vector file back into the project — in one window, with a tick box per layer.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "QGIS can export one layer at a time through *Export > Save Features As*. This is the same job for twenty layers, with renaming on the way out and a single output folder. Because the window is **modeless** you can drag a file straight from the Browser panel onto it.",
        } },
      { type: "paragraph", text: { km: "", en: "The tool is promoted onto the KGA toolbar as its own button." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "The algorithm takes no Processing parameters — running it opens the window. The controls below are the window's.",
            } },
        ],
        rows: [],
      },
      {
        title: { km: "", en: "Tab 1 — Export Layers" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Project layer table", type: "Checkable table", default: "nothing ticked", description: {
            km: "",
            en: "The vector layers in the QGIS Layers panel. Columns: *Layer*, *Geometry*, *Features*, *Export As*. *Export As is editable, so you can rename on the way out. Double-click a row to toggle it.",
          } },
          { name: "**Select All* / **Clear All**", type: "Buttons", default: "—", description: { km: "", en: "Tick or untick every row." } },
          { name: "**Refresh from Layers Panel**", type: "Button", default: "—", description: { km: "", en: "Re-read the Layers panel after adding or removing layers in QGIS." } },
          { name: "**Output Format**", type: "Combo box", default: "GeoPackage", description: {
            km: "",
            en: "`GeoPackage (.gpkg)` — all layers in one file; `ESRI Shapefile (.shp)`, `GeoJSON (.geojson)`, `KML (.kml)`, `CSV (.csv)` — one file per layer. CSV writes attributes with geometry as WKT.",
          } },
          { name: "**GeoPackage File**", type: "Text box", default: "`export_layers.gpkg`", description: { km: "", en: "Name of the single output container. Only shown for the GeoPackage format." } },
          { name: "**Output Folder**", type: "Read-only path box", default: "empty", description: { km: "", en: "Where everything is written. Set it with **Browse Folder**." } },
          { name: "**Export selected features only**", type: "Checkbox", default: "unticked", description: { km: "", en: "Exports the current map selection of each layer instead of all its features." } },
          { name: "**Overwrite layers that already exist in the target (otherwise a numbered name is used)**", type: "Checkbox", default: "unticked", description: { km: "", en: "Off, a name clash gets a numbered suffix rather than replacing anything." } },
          { name: "**Export Checked Layers**", type: "Button", default: "—", description: { km: "", en: "Runs the export and reports a summary." } },
        ],
      },
      {
        title: { km: "", en: "Tab 2 — Import Layers" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "**Source File**", type: "Read-only path box, drop target", default: "empty", description: {
            km: "",
            en: "The file to read. Drag a `.gpkg`, `.shp`, `.geojson`, `.kml` and so on here from the Browser panel, or use **Browse File**.",
          } },
          { name: "Layer table", type: "Checkable table", default: "nothing ticked", description: {
            km: "",
            en: "The layers found inside the source. Columns: *Layer*, *Geometry*, *Features*, *Add As*. *Add As is editable, so you can rename on the way in.",
          } },
          { name: "**Select All* / **Clear All**", type: "Buttons", default: "—", description: { km: "", en: "Tick or untick every row." } },
          { name: "**Rescan File**", type: "Button", default: "—", description: { km: "", en: "Re-read the source after it changed on disk." } },
          { name: "**Add the imported layers to the project**", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Untick to scan without loading anything." } },
          { name: "**Reproject to the project CRS on import (creates a memory layer)**", type: "Checkbox", default: "unticked", description: {
            km: "",
            en: "On, each layer arrives reprojected — as a memory layer, so save it if you want to keep it.",
          } },
          { name: "**Import Checked Layers**", type: "Button", default: "—", description: { km: "", en: "Runs the import and reports a summary." } },
        ],
      },
      {
        title: { km: "", en: "Tab 3 — Save Temporary Layers" },
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "Finds the temporary (memory) layers in the Layers panel — Processing results left as *Temporary output*, scratch layers, reprojected imports — and saves them for good.",
            } },
          { type: "paragraph", text: {
              km: "",
              en: "Existing tables and files are never overwritten; a clash gets a numbered name.",
            } },
        ],
        rows: [
          { name: "Temporary layer table", type: "Checkable table", default: "every temporary layer ticked", description: {
            km: "",
            en: "Columns: *Layer*, *Geometry*, *Features*, *Save As*. The list **refreshes by itself* when a temporary layer is added, removed, renamed or edited. *Save As is editable.",
          } },
          { name: "**Select All* / **Clear All**", type: "Buttons", default: "—", description: { km: "", en: "Tick or untick every row." } },
          { name: "**Save To**", type: "Combo box", default: "**Project database**", description: {
            km: "",
            en: "`Project database (GeoPackage)` writes one table per layer into the GeoPackage; `Folder` writes one file per layer.",
          } },
          { name: "**GeoPackage**", type: "Path box", default: "the project's default database", description: { km: "", en: "Created if it does not exist." } },
          { name: "**Format* / **Folder**", type: "Combo box, path box", default: "GeoPackage, the project's default folder", description: { km: "", en: "Folder mode only. Formats: GeoPackage, Shapefile, GeoJSON." } },
          { name: "**Replace the temporary layer in the project…**", type: "Checkbox", default: "**ticked**", description: {
            km: "",
            en: "The saved layer takes the temporary one's place in the Layers panel, with its style and visibility. Untick to leave the temporary layer and add nothing.",
          } },
          { name: "**Save Checked Layers**", type: "Button", default: "—", description: { km: "", en: "Saves and reports a summary." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: { km: "", en: "**To export:**" } },
      { type: "paragraph", text: {
          km: "",
          en: "1. Open **KGA Data Management > Layer Export / Import**, or press its button on the KGA toolbar. Close the Processing window once the pane appears. 2. On **Export Layers**, tick the layers. Edit the *Export As* cell to rename one on the way out. 3. Choose the **Output Format**. GeoPackage puts everything in one file; the others write one file per layer. 4. Set the **Output Folder** with **Browse Folder**, then press **Export Checked Layers**.",
        } },
      { type: "paragraph", text: { km: "", en: "**To import:**" } },
      { type: "paragraph", text: {
          km: "",
          en: "1. Switch to **Import Layers**. 2. Drag the source file onto **Source File** from the Browser panel, or use **Browse File**. The layers it holds are listed. 3. Tick the ones you want, edit the *Add As* names if needed. 4. Tick **Reproject to the project CRS** only if you need it â€” the result is a memory layer you will have to save. 5. Press **Import Checked Layers**.",
        } },
    ],
    results: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Export:** the ticked layers written to the chosen folder — one GeoPackage holding all of them, or one file per layer for the other formats. A summary message box lists what was written, skipped and failed. - **Import:** the ticked layers added to the project, renamed as you asked, optionally reprojected.",
        } },
      { type: "paragraph", text: { km: "", en: "Nothing is returned to Processing." } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **The window stays open.** Close the Processing dialog behind it and keep working. Running the tool again while the window is open brings it forward; running it after you closed it starts clean, with the ticks, output folder and scanned file cleared. - **Reprojected imports are memory layers.** They disappear when the project closes unless you save them to a file. - **Styles do not travel here.** This tool moves data. To carry symbology, labels, aliases and forms along, use **[Spatial Data Manager](spatialdatamanager.md)** (its Export tab writes styles into the target) or **[Create Layer Package](create_layer_package.md)**. - Shapefile output truncates field names to 10 characters; CSV output keeps attributes only, with the geometry as a WKT column. - `layer_styles` and `qgis_projects` are QGIS housekeeping tables and never appear in the import list. - The tool cannot run headless or inside a model — it needs the QGIS main window.",
        } },
    ],
    seeAlso: ["spatialdatamanager", "create_layer_package"],
  },
  {
    slug: "shapefilestogpkg",
    group: "kgadatamanagement",
    name: "Shapefiles to GeoPackage",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:shapefilestogpkg",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Shapefiles to GeoPackage",
    summary: {
      km: "ប្រមូល shapefile ទាំងអស់ក្នុងថតមួយ រួចសរសេរទៅក្នុង GeoPackage តែមួយ ដោយប្រើឈ្មោះឯកសារនីមួយៗជាឈ្មោះស្រទាប់។",
      en: "Collects every shapefile in a folder and writes them into a single GeoPackage, using each file name as the layer name.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The usual reason to run it: a folder of shapefiles arrived from somewhere, and you want one file to work with, back up and hand on. It can also reproject everything to a common CRS on the way in, which is what you want when the folder is a mix of UTM zones and degrees." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input folder", type: "Folder", default: "—", description: { km: "", en: "The folder holding the shapefiles." } },
          { name: "Output GeoPackage", type: "File destination (`*.gpkg`)", default: "—", description: { km: "", en: "The container to write." } },
          { name: "File extensions (comma separated)", type: "String, optional", default: "`shp`", description: { km: "", en: "Which files to pick up. Widen it to pull in other OGR formats sitting in the same folder." } },
          { name: "Source encoding", type: "String, optional", default: "`UTF-8`", description: { km: "", en: "Applied on **read**. This is the one to get right — see the notes." } },
          { name: "Reproject all layers to (optional)", type: "CRS, optional", default: "empty", description: { km: "", en: "Leave empty to keep each layer in its own CRS. Set it to bring a mixed folder into one system." } },
          { name: "Search subfolders", type: "Boolean", default: "`False`", description: { km: "", en: "On, walks the whole tree below the input folder." } },
          { name: "Append to existing GeoPackage (keep current layers)", type: "Boolean", default: "`False`", description: { km: "", en: "On, adds to a GeoPackage that is already there instead of replacing it." } },
          { name: "Skip layers with no features", type: "Boolean", default: "`False`", description: { km: "", en: "On, an empty shapefile produces no layer." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Shapefiles to GeoPackage**." },
        { km: "", en: "Point **Input folder** at the folder and name the **Output GeoPackage**." },
        { km: "", en: "Set **Source encoding** to whatever the shapefiles actually are. If the attributes contain Khmer and there is no `.cpg` beside the `.shp`, this is almost always the setting that decides whether the text survives." },
        { km: "", en: "Set **Reproject all layers to** only if you want a single common CRS." },
        { km: "", en: "Press **Run**. The log reports each file as `ok`, `skip` or a failure, and finishes with a `Packed | Skipped | Failed` tally." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One GeoPackage containing every shapefile as a layer." },
        { km: "", en: "The **Output GeoPackage** path is returned to Processing." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Encoding is applied on read, not on write.** QGIS falls back to the system encoding when a `.cpg` sidecar is missing, and that is the usual cause of unreadable Khmer attributes. Setting it wrong here mangles the text permanently in the output." },
        { km: "", en: "**Truncated field names cannot be recovered.** If a previous shapefile export cut `Construction_Year` down to `Constructi`, that is the name that arrives in the GeoPackage. Nothing here can restore it." },
        { km: "", en: "Duplicate layer names are renamed rather than overwritten; the log says `renamed duplicate to …` when it happens." },
        { km: "", en: "The reverse direction is **[GeoPackage to Shapefiles](gpkgtoshapefiles.md)**." },
      ] },
    ],
    seeAlso: ["gpkgtoshapefiles"],
  },
  {
    slug: "spatialdatamanager",
    group: "kgadatamanagement",
    name: "Spatial Data Manager",
    icon: "Database",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:spatialdatamanager",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Management ▸ Spatial Data Manager",
    summary: {
      km: "លុប ប្តូរឈ្មោះ ឬនាំចូលស្រទាប់ជាដុំ ក្នុង GeoPackage, File Geodatabase, មូលដ្ឋានទិន្នន័យ SpatiaLite ឬថត shapefile។",
      en: "Bulk delete, rename or import layers in a GeoPackage, File Geodatabase, SpatiaLite database or shapefile folder.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Bulk delete, rename, import and export the layers of a container: a GeoPackage, a File Geodatabase, a SpatiaLite/SQLite database or a folder of shapefiles." } },
      { type: "paragraph", text: { km: "", en: "QGIS has no single place to do housekeeping on a container. Deleting twelve layers out of a GeoPackage means twelve trips through the Browser panel. This window does the whole batch against one target, and because it is **modeless** you can drag a dataset or a layer straight from the Browser panel onto it while it is open." } },
      { type: "paragraph", text: { km: "", en: "The tool is promoted onto the KGA toolbar as its own button rather than living in the Data Management dropdown, because it is where most container work starts." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: null,
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm itself takes no Processing parameters — running it opens the window. The controls below are the window's." } },
        ],
        rows: [],
      },
      {
        title: { km: "", en: "Target" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Target Database", type: "Read-only path box, drop target", default: "empty", description: { km: "", en: "The container everything acts on. Drag a `.gpkg`, `.gdb`, `.sqlite` or a folder here from the Browser panel, or use **Browse Target**." } },
          { name: "Browse Target", type: "Menu button", default: "—", description: { km: "", en: "Three ways to pick: *GeoPackage / SQLite file…*, *File Geodatabase (.gdb)…*, *Shapefile folder…*." } },
        ],
      },
      {
        title: { km: "", en: "Tab 1 — Delete Data" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Filter layers", type: "Text box", default: "empty", description: { km: "", en: "Narrows the table as you type." } },
          { name: "Layer table", type: "Checkable table", default: "nothing ticked", description: { km: "", en: "Columns: *Layer*, *Geometry*, *Features*. Double-click a row to toggle its tick." } },
          { name: "**Select All** / **Clear All**", type: "Buttons", default: "—", description: { km: "", en: "Tick or untick everything currently shown." } },
          { name: "Delete Selected", type: "Button", default: "—", description: { km: "", en: "Drops the ticked layers from the container. Asks for confirmation." } },
        ],
      },
      {
        title: { km: "", en: "Tab 2 — Rename Data" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Rename table", type: "Editable table", default: "—", description: { km: "", en: "Two columns: *Original Name* and *New Name*. Type over the second column for the layers you want renamed; leave the rest alone." } },
          { name: "Apply Renames", type: "Button", default: "—", description: { km: "", en: "Applies every changed row in one pass." } },
        ],
      },
      {
        title: { km: "", en: "Tab 3 — Import Data" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Import queue", type: "Table, drop target", default: "empty", description: { km: "", en: "Columns: *Source Layer*, *Import As*, *Source File*. Drag layers or whole datasets here from the Browser panel. The *Import As* cell is editable, so you can rename on the way in." } },
          { name: "Add Data to Import List ▾", type: "Menu button", default: "—", description: { km: "", en: "*Vector files (Shapefile, GeoJSON, KML…)*, *GeoPackage / SQLite database…*, *File Geodatabase (.gdb)…*, *Folder of shapefiles…*. Picking a container opens a layer chooser." } },
          { name: "**Remove Selected** / **Clear List**", type: "Buttons", default: "—", description: { km: "", en: "Take rows out of the queue." } },
          { name: "Overwrite layers that already exist in the target", type: "Checkbox", default: "unticked", description: { km: "", en: "Off means a name clash is skipped rather than replaced." } },
          { name: "Run Import", type: "Button", default: "—", description: { km: "", en: "Writes the whole queue into the target and reports a summary." } },
        ],
      },
      {
        title: { km: "", en: "Tab 4 — Export Layers" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Project layer table", type: "Checkable table", default: "nothing ticked", description: { km: "", en: "The layers currently in the QGIS Layers panel. Columns: *Layer*, *Geometry*, *Features*, *Styles*, *Export As*. *Export As* is editable. Double-click a row to toggle it." } },
          { name: "Refresh Layer List", type: "Button", default: "—", description: { km: "", en: "Re-reads the Layers panel after you add or remove layers in QGIS." } },
          { name: "**Select All** / **Clear All**", type: "Buttons", default: "—", description: { km: "", en: "Tick or untick every row." } },
          { name: "Export only the selected features of each layer", type: "Checkbox", default: "unticked", description: { km: "", en: "Exports the current map selection instead of the whole layer." } },
          { name: "Overwrite layers that already exist in the target", type: "Checkbox", default: "unticked", description: { km: "", en: "As above, for the export direction." } },
          { name: "Export the styles too (symbology, labels, aliases, forms, …)", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Stores every named style of each layer in the target." } },
          { name: "Also drop a .qml copy of each style beside the target", type: "Checkbox", default: "unticked", description: { km: "", en: "A portable backup of the style. Always written for shapefile targets, which have nowhere else to keep one." } },
          { name: "Export Checked Layers", type: "Button", default: "—", description: { km: "", en: "Runs the export and reports a summary." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Spatial Data Manager**, or press its button on the KGA toolbar. Close the Processing window once the pane appears." },
        { km: "", en: "Set the **Target Database**: drag a `.gpkg`, `.gdb`, `.sqlite` or a shapefile folder onto the box from the Browser panel, or use **Browse Target**." },
        { km: "", en: "Pick the tab for the job: - **1. Delete Data** — filter the list, tick the layers, press **Delete Selected**. Copy the container first; this cannot be undone. - **2. Rename Data** — type the new names into the second column and press **Apply Renames**. - **3. Import Data** — drag layers or datasets onto the queue, or use **Add Data to Import List**, edit the *Import As* names, then **Run Import**. - **4. Export Layers** — tick the project layers, leave **Export the styles too** on, then **Export Checked Layers**." },
        { km: "", en: "Read the summary box after each import or export before moving on." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Nothing is returned to Processing — the tool writes directly into the target container:" } },
      { type: "list", items: [
        { km: "", en: "**Delete** removes the ticked layers from the container." },
        { km: "", en: "**Rename** renames them in place." },
        { km: "", en: "**Import** adds the queued layers to the target." },
        { text: { km: "", en: "**Export** writes the ticked project layers into the target and, when styles are included:" }, items: [
          { km: "", en: "*GeoPackage / SpatiaLite:* into the `layer_styles` table, so QGIS re-applies the style by itself the next time the layer is added to a project;" },
          { km: "", en: "*Shapefile folder:* as a `.qml` beside each shapefile." },
        ] },
        { km: "", en: "A summary message box after each import and export lists what was written, skipped and failed." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The window stays open.** Once it appears you can close the Processing dialog behind it and carry on working on the map. Running the tool again while the window is open just brings it forward; running it after you closed it starts clean, with the target, ticks and import queue empty." },
        { km: "", en: "**Deletes are not undoable.** There is no edit session behind this — the layer is dropped from the container. Copy the container first if you are unsure." },
        { km: "", en: "`layer_styles` and `qgis_projects` are QGIS housekeeping tables, not user layers, so they never appear in the delete or rename lists." },
        { km: "", en: "Close the container in any other application first. A File Geodatabase still open in ArcGIS has a `.lock` file in its folder and cannot be modified." },
        { km: "", en: "The tool cannot run from a headless Processing session or inside a model — it needs the QGIS main window." },
        { km: "", en: "For the reverse direction — pulling layers *out* of a container into standalone files — see **[Layer Export / Import](layerexportimport.md)**, **[GeoPackage to Shapefiles](gpkgtoshapefiles.md)** and **[GeoPackage to File Geodatabase](geopackage_to_filegdb.md)**." },
      ] },
    ],
    seeAlso: ["layerexportimport", "gpkgtoshapefiles", "geopackage_to_filegdb"],
  },
  {
    slug: "append_with_mapping",
    group: "kgaschematools",
    name: "Append with Field Mapping",
    icon: "Table2",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:append_with_mapping",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — it writes into a project layer)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Schema Tools ▸ Append with Field Mapping",
    summary: {
      km: "បន្ថែម features ពីស្រទាប់មួយ ទៅក្នុងស្រទាប់មួយទៀតដែលមានស្រាប់ ដោយផ្គូផ្គង fields យ៉ាងច្បាស់លាស់។",
      en: "Append the features of one layer into another that already exists, mapping the fields explicitly on the way.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "QGIS has no good tool for this. `native:mergevectorlayers` unions schemas naively and produces a wide junk table when the sources disagree; `native:refactorfields` maps fields properly but writes a *new* layer instead of appending into one that already exists. Appending several differently-shaped sources into one master layer is a routine job, and this is the tool for it." } },
      { type: "paragraph", text: { km: "", en: "Each row of the mapping table names a field of the **target** and an expression evaluated against the **source** feature, so renaming, combining and converting all happen in one pass. Target fields with no mapping row keep their own defaults." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Source layer", type: "Vector layer", default: "—", description: { km: "", en: "Where the features come from." } },
          { name: "Target layer (appended to in place)", type: "Vector layer", default: "—", description: { km: "", en: "The layer written into. It is modified — there is no output layer." } },
          { name: "Field mapping", type: "Field mapping table, optional", default: "derived from the source", description: { km: "", en: "The same widget that powers *Refactor Fields*. Each row is a target field plus an expression over the source feature." } },
          { name: "…or a saved mapping file (overrides the table above)", type: "File (`.json`), optional", default: "empty", description: { km: "", en: "A mapping written by **[Generate Field Mapping](generate_field_mapping.md)**. When set, it wins over the table." } },
          { name: "Key field for duplicate detection", type: "Field of *target*, optional", default: "empty", description: { km: "", en: "Leave empty to skip duplicate detection entirely." } },
          { name: "When the key already exists", type: "Enum", default: "`Skip the incoming feature`", description: { km: "", en: "`Skip the incoming feature`, `Append it anyway`, `Update the existing feature`." } },
          { name: "Geometry", type: "Enum", default: "`Reproject to the target CRS`", description: { km: "", en: "`Keep as it is`, `Reproject to the target CRS`, `Reproject and force multipart`, `Drop the geometry`." } },
          { name: "Use only the selected features of the source", type: "Boolean", default: "`False`", description: { km: "", en: "Appends just the current selection." } },
          { name: "Dry run (report only, write nothing)", type: "Boolean", default: "**`True`**", description: { km: "", en: "On by default. See the notes." } },
          { name: "Change report", type: "File destination (HTML), optional", default: "not created", description: { km: "", en: "The full report as a file. Tick it in the Processing dialog to keep one." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load both layers in QGIS." },
        { km: "", en: "Open **KGA Schema Tools > Append with Field Mapping**." },
        { km: "", en: "Set **Source layer** and **Target layer**." },
        { km: "", en: "Fill in the **Field mapping** table, or point **…or a saved mapping file** at a JSON written by *Generate Field Mapping*." },
        { km: "", en: "If the target already holds some of these records, choose a **Key field** and decide what happens on a clash." },
        { km: "", en: "**Leave the dry run on and press Run.** Read the report: features read, duplicates found, every value that had to change type, and every target field left at its default." },
        { km: "", en: "Fix whatever the report flags, untick **Dry run**, and run it again for real." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "Features appended into the **target layer in place**. No new layer is created." },
        { km: "", en: "A change report — always pushed to the Processing log, and written to HTML when you ask for the *Change report* file. It carries: features read, features written, duplicates found and what was done with them, every lossy conversion, and every target field left at its default." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The dry run is on by default, on purpose.** The first run writes nothing and tells you what would happen. This is the whole safety model of the tool — do not untick it before reading a report." },
        { km: "", en: "**The mapping is checked against the target's real fields before anything is written.** A mapping naming a field the target does not have aborts the run. That mistake is the most common way an append tool silently loses data." },
        { km: "", en: "**Lossy conversions are reported, not swallowed.** QGIS will happily write a value that does not fit and leave a NULL behind. Text that is not a number, a number too large for the column, text longer than the column, a date that will not parse — each is counted and named in the report." },
        { km: "", en: "**Edit sessions are respected.** If the target is already in edit mode the features land in your edit buffer, uncommitted, so your own undo stack still owns them. Otherwise the write is committed, and rolled back whole if anything fails." },
        { km: "", en: "Pairs with **[Generate Field Mapping](generate_field_mapping.md)**, which produces the JSON this tool reads." },
      ] },
    ],
    seeAlso: ["generate_field_mapping"],
  },
  {
    slug: "apply_domain_library",
    group: "kgaschematools",
    name: "Apply Domain Library",
    icon: "Table2",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:apply_domain_library",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — it touches layers that may be open)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Schema Tools ▸ Apply Domain Library",
    summary: {
      km: "នាំចូលបណ្ណាល័យ domain — ឯកសារ JSON ដែល Domain & Schema Manager នាំចេញ — ទៅក្នុង GeoPackage ហើយភ្ជាប់ domain ទៅ fields ដែលត្រូវការ។",
      en: "Import a domain library — the JSON file the Domain & Schema Manager exports — into a GeoPackage, and attach its domains to the fields that should carry them.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "A domain is the drop-down list behind a field: *status* can only be Planned, Under Construction or Complete. Building that list once and pushing it into every GeoPackage on a project is what this tool is for. Unlike the dialog, it is a plain parameter-driven algorithm, so it works in a model, in batch mode and from `processing.run()` — the dialog is for exploring, this is for repeating." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Domain library (JSON)", type: "File (`.json`)", default: "—", description: { km: "", en: "The library to import, as exported by the Domain & Schema Manager." } },
          { name: "Target GeoPackage", type: "File (`.gpkg`)", default: "—", description: { km: "", en: "The container the domains are written into." } },
          { name: "Mode", type: "Enum", default: "`Merge — add and update, keep the rest`", description: { km: "", en: "`Merge` adds and updates domains and leaves anything the library does not mention alone. `Replace` also deletes those, so the target ends up matching the library exactly." } },
          { name: "Attach each domain to every field with a matching name", type: "Boolean", default: "`True`", description: { km: "", en: "Gives every field of the same name the same domain. The same column recurs across layers — status, owner, material — so this does the bulk of the work." } },
          { name: "Dry run (report only, write nothing)", type: "Boolean", default: "**`True`**", description: { km: "", en: "On by default. Read the report before turning it off." } },
          { name: "Change report", type: "File destination (HTML), optional", default: "not created", description: { km: "", en: "The report as a file." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Build or export a domain library with the **[Domain & Schema Manager](domain_manager.md)**." },
        { km: "", en: "Open **KGA Schema Tools > Apply Domain Library**." },
        { km: "", en: "Point **Domain library** at the JSON and **Target GeoPackage** at the container to update." },
        { km: "", en: "Choose the **Mode**. Start with `Merge`; `Replace` deletes domains the library does not mention." },
        { km: "", en: "**Leave the dry run on and press Run.** The report lists every domain that would be added, updated or deleted, and every field it would be attached to." },
        { km: "", en: "Untick **Dry run** and run again to write the changes." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The domains written into the target GeoPackage, and attached to the matching fields." },
        { km: "", en: "A change report — in the Processing log, and as HTML when you ask for the file — naming every domain added, updated or deleted and every field attachment." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The dry run is on by default.** The first run writes nothing." },
        { km: "", en: "**`Replace` deletes.** It makes the target match the library exactly, so a domain that exists only in the target is removed. Use `Merge` unless you specifically want that." },
        { km: "", en: "**Only GeoPackage targets.** The parameter accepts `.gpkg` only." },
        { km: "", en: "Close the target in ArcGIS or any other application first; a container held open elsewhere cannot be modified." },
        { km: "", en: "Use **[Validate Against Domains](validate_against_domains.md)** afterwards: attaching a domain constrains *new* edits, but existing data is never re-checked, so old values that break the new rule stay in place until you go looking for them." },
      ] },
    ],
    seeAlso: ["domain_manager", "validate_against_domains"],
  },
  {
    slug: "domain_manager",
    group: "kgaschematools",
    name: "Domain & Schema Manager",
    icon: "Table2",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:domain_manager",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Schema Tools ▸ Domain & Schema Manager",
    summary: {
      km: "បង្កើត កែសម្រួល និងប្រើឡើងវិញនូវ field domains — បញ្ជីតម្លៃដែលអនុញ្ញាតនៅកម្រិតមូលដ្ឋានទិន្នន័យ ដែលបញ្ជា value-map widget ក្នុងទម្រង់គុណលក្ខណៈ។",
      en: "Create, edit and reuse field domains — the database-level lists of allowed values that drive the value-map widget in the attribute form.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "QGIS can create a domain from the Browser panel, but not edit one afterwards, not attach one to many fields at once, and not move a set of domains between containers. This tool does all three, in three tabs: **Domains** (define them), **Assignment** (attach them), **Library** (move them)." } },
      { type: "paragraph", text: { km: "", en: "The tool is promoted onto the KGA toolbar as its own button. Opening it while a GeoPackage-backed layer is active loads that GeoPackage straight away." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: null,
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the window. The controls below are the window's." } },
        ],
        rows: [],
      },
      {
        title: { km: "", en: "Container (above the tabs)" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "GeoPackage / Geodatabase", type: "Path box, drop target", default: "the active layer's `.gpkg`, if any", description: { km: "", en: "The container being worked on. Type a path, use **Browse…**, or drag a `.gpkg` here from the Browser panel." } },
          { name: "**Browse…** / **Reload**", type: "Buttons", default: "—", description: { km: "", en: "*Reload* re-reads the container from disk." } },
          { name: "Copy container…", type: "Button (in the warning strip)", default: "—", description: { km: "", en: "Saves a copy of the **whole** GeoPackage — every layer and every domain together. Appears when it matters; see the notes." } },
        ],
      },
      {
        title: { km: "", en: "Tab 1 — Domains" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Domain list", type: "List", default: "—", description: { km: "", en: "Every domain in the container." } },
          { name: "**New** / **Duplicate** / **Delete**", type: "Buttons", default: "—", description: { km: "", en: "Define a new domain, copy the selected one under a new name, or remove it." } },
          { name: "Name", type: "Text", default: "—", description: { km: "", en: "The domain's name, as stored in the container." } },
          { name: "Description", type: "Text", default: "empty", description: { km: "", en: "Free text." } },
          { name: "Domain type", type: "Combo box", default: "`Coded values`", description: { km: "", en: "`Coded values`, `Range`, `Glob pattern`." } },
          { name: "Field type", type: "Combo box", default: "—", description: { km: "", en: "The attribute type the domain constrains." } },
          { name: "Used by", type: "Label", default: "—", description: { km: "", en: "A live count of the fields currently using this domain." } },
          { name: "*Coded values* table", type: "Table (`Code`, `Label`)", default: "—", description: { km: "", en: "With **Add**, **Remove**, **Move up**, **Move down** and **Paste list…** — the last one takes a list off the clipboard, which is how most domains actually get built." } },
          { name: "*Range* box", type: "Spin boxes and checkboxes", default: "both bounds on, both inclusive", description: { km: "", en: "**Has a minimum** / **Has a maximum** with their values, and **Minimum is included** / **Maximum is included**." } },
          { name: "*Glob pattern* box", type: "Text", default: "empty", description: { km: "", en: "A wildcard pattern such as `K-*`." } },
          { name: "**Revert** / **Save domain**", type: "Buttons", default: "—", description: { km: "", en: "Discard the edits in the form, or write the domain to the container." } },
        ],
      },
      {
        title: { km: "", en: "Tab 2 — Assignment" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Filter", type: "Text box", default: "empty", description: { km: "", en: "Narrows the grid by layer or field name." } },
          { name: "Assignment grid", type: "Table (`Layer`, `Field`, `Domain`)", default: "current state", description: { km: "", en: "Every layer and field in the container, with the domain each carries. Change the *Domain* cell to attach or detach one." } },
          { name: "Apply to all matching field names", type: "Button", default: "—", description: { km: "", en: "Gives every field with the same name as the selected row the same domain. The same column recurs across layers — status, owner, material — so this is usually what you want." } },
          { name: "**Revert** / **Apply assignments**", type: "Buttons", default: "—", description: { km: "", en: "Throw away the pending changes, or write them." } },
        ],
      },
      {
        title: { km: "", en: "Tab 3 — Library" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Include field assignments", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Export which fields use each domain, not just the domains." } },
          { name: "Export library…", type: "Button", default: "—", description: { km: "", en: "Writes this container's domains to a JSON file you can version and reuse." } },
          { name: "Mode", type: "Combo box", default: "`Merge — add and update, keep the rest`", description: { km: "", en: "Or `Replace — make this container match exactly`." } },
          { name: "Attach each domain to every field with a matching name", type: "Checkbox", default: "**ticked**", description: { km: "", en: "As on the Assignment tab, applied during the import." } },
          { name: "Preview a library…", type: "Button", default: "—", description: { km: "", en: "Reports what an import would change, writing nothing." } },
          { name: "Import a library…", type: "Button", default: "—", description: { km: "", en: "Performs the import." } },
          { name: "Result log", type: "Read-only text", default: "empty", description: { km: "", en: "Where the outcome of a preview or an import appears." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Click a layer stored in the GeoPackage you want to work on, then open **KGA Schema Tools > Domain & Schema Manager** (or press its toolbar button). That GeoPackage is loaded for you. Close the Processing window once the pane appears." },
        { km: "", en: "If it opened on nothing, drag a `.gpkg` onto the path box from the Browser panel or use **Browse…**. A large container takes a moment to read." },
        { km: "", en: "On **Domains**, press **New** and fill in the definition: name, domain type, field type, then the coded values, range or glob. **Paste list…** takes a list off the clipboard, which is the quickest way to build a coded domain. Press **Save domain**." },
        { km: "", en: "On **Assignment**, find a field and set its *Domain* cell. Then press **Apply to all matching field names** to give every same-named field across the container the same domain. Press **Apply assignments** to write them." },
        { km: "", en: "On **Library**, press **Export library…** to save the whole set as JSON you can version and reuse. To bring one in, choose the **Mode**, press **Preview a library…** first to see what would change, then **Import a library…**." },
        { km: "", en: "Run **[Validate Against Domains](validate_against_domains.md)** afterwards — the data already in the container was never checked against the new rules." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Nothing is returned to Processing — the tool writes into the container:" } },
      { type: "list", items: [
        { km: "", en: "Domains created, renamed, retyped or deleted in the GeoPackage." },
        { km: "", en: "Domain assignments written onto layer fields, so the attribute form shows the drop-down." },
        { km: "", en: "A JSON **domain library** file, when you export one. That file is what **[Apply Domain Library](apply_domain_library.md)** consumes." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Editing needs a GeoPackage.** A File Geodatabase can be read and exported to a library, but not written to." },
        { km: "", en: "**Domains belong to the whole GeoPackage, not to one layer.** Exporting a single layer with *Save Features As…* can leave its domains behind. Use **Copy container…** to share or back up the data with the domains intact — this is what the yellow strip in the window is warning about." },
        { km: "", en: "**Opening a container reads every layer's fields**, so a large container takes a noticeable moment to load. The busy overlay reports progress." },
        { km: "", en: "**The window stays open.** Close the Processing dialog behind it and keep working. Running the tool again while it is open raises it; running it after you closed it starts clean, without the previous container loaded." },
        { km: "", en: "Changing a domain does not re-check data that is already there. Run **[Validate Against Domains](validate_against_domains.md)** afterwards to find values the new rule rejects." },
        { km: "", en: "For repeating this work — in a model, in batch, or from `processing.run()` — use **[Apply Domain Library](apply_domain_library.md)** instead. The dialog is for exploring; the algorithm is for repeating." },
        { km: "", en: "The tool cannot run headless — it needs the QGIS main window." },
      ] },
    ],
    seeAlso: ["validate_against_domains", "apply_domain_library"],
  },
  {
    slug: "generate_field_mapping",
    group: "kgaschematools",
    name: "Generate Field Mapping",
    icon: "Table2",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:generate_field_mapping",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Schema Tools ▸ Generate Field Mapping",
    summary: {
      km: "កំណត់ថា field ប្រភពណាត្រូវទៅ field គោលដៅណា រួចសរសេរលទ្ធផលជាឯកសារ JSON mapping។",
      en: "Work out which source field belongs in which target field, and write the result as a JSON mapping file.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The file is in exactly the format **[Append with Field Mapping](append_with_mapping.md)** takes, so a mapping between two schemas can be saved once, kept in version control, reviewed in a diff and reused. That reuse is the part that actually saves time when the same two schemas come round every month." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Source layer", type: "Vector layer", default: "—", description: { km: "", en: "The layer whose fields are being mapped from." } },
          { name: "Target layer", type: "Vector layer", default: "—", description: { km: "", en: "The layer whose fields are being mapped to." } },
          { name: "Match field names by", type: "Enum", default: "`Fuzzy (ignore case, spaces and underscores)`", description: { km: "", en: "`Exact name`, `Case-insensitive name`, `Fuzzy (ignore case, spaces and underscores)`. Fuzzy lowercases names and strips spaces and underscores, so `Parcel_ID` finds `parcelid`." } },
          { name: "Field mapping", type: "File destination (`*.json`)", default: "—", description: { km: "", en: "Where the mapping is written." } },
          { name: "Change report", type: "File destination (HTML), optional", default: "not created", description: { km: "", en: "The match report as a file." } },
        ],
      },
    ],
    outputs: [
      { name: "Number of matched fields", type: "Number", description: { km: "", en: "How many source→target pairs were found." } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load both layers in QGIS." },
        { km: "", en: "Open **KGA Schema Tools > Generate Field Mapping**." },
        { km: "", en: "Set **Source layer** and **Target layer**, and pick a matching strategy — start with the Fuzzy default." },
        { km: "", en: "Choose where the **Field mapping** JSON goes. Somewhere you keep, not a temp folder: the point is to reuse it." },
        { km: "", en: "Press **Run** and read the report. The unmatched fields on either side are the ones to fix by hand." },
        { km: "", en: "Edit the JSON if needed, then feed it to **[Append with Field Mapping](append_with_mapping.md)** through its *…or a saved mapping file* parameter." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "A JSON mapping file, ready for *Append with Field Mapping*." },
        { km: "", en: "A report — in the Processing log, and as HTML when you ask for the file — listing the matched pairs, the unmatched source fields and the unmatched target fields." },
        { km: "", en: "The **Number of matched fields** count in the Processing results panel." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Each target field is claimed at most once**, so two source fields can never collapse onto one column." },
        { km: "", en: "**Nothing is written to either layer.** This tool only inspects schemas." },
        { km: "", en: "Unmatched fields are not an error — they are the output you care about. A field that appears in the unmatched lists needs a human decision, which is why the JSON is meant to be edited before use." },
        { km: "", en: "The mapping matches **names**, not types. A pair whose types do not fit shows up later, as a lossy conversion in the append tool's report." },
      ] },
    ],
    seeAlso: ["append_with_mapping"],
  },
  {
    slug: "validate_against_domains",
    group: "kgaschematools",
    name: "Validate Against Domains",
    icon: "Table2",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:validate_against_domains",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Schema Tools ▸ Validate Against Domains",
    summary: {
      km: "ពិនិត្យ feature នីមួយៗធៀបនឹង field domains ដែលស្រទាប់របស់វាប្រកាស ហើយរាយតម្លៃដែលបំពាន។",
      en: "Check every feature against the field domains its layer declares, and list the values that break them.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "A domain constrains new edits — but data that predates the domain, or that arrived through an import, is never re-checked. Attaching a domain does not clean up what is already there. This tool finds that data." } },
      { type: "paragraph", text: { km: "", en: "Run it after **[Apply Domain Library](apply_domain_library.md)**, after any bulk import, and before handing a dataset on." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input layer(s)", type: "Multiple vector layers", default: "—", description: { km: "", en: "The layers to check. Layers that cannot carry domains are skipped with a note." } },
          { name: "Report empty values as violations", type: "Boolean", default: "`False`", description: { km: "", en: "Off, a NULL or empty value passes. On, every empty value in a domain-constrained field is listed too." } },
          { name: "Violations", type: "Feature sink", default: "temporary layer", description: { km: "", en: "The violations table: one row per bad value." } },
          { name: "Violation locations", type: "Feature sink (point), optional", default: "not created", description: { km: "", en: "A point layer of the offending features, so you can zoom to them on the map." } },
          { name: "Change report", type: "File destination (HTML), optional", default: "not created", description: { km: "", en: "The report as a file." } },
        ],
      },
    ],
    outputs: [
      { name: "Number of violations", type: "Number", description: { km: "", en: "Total bad values found across all layers." } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the layers to check. They must be stored in a GeoPackage or File Geodatabase — nothing else can carry domains." },
        { km: "", en: "Open **KGA Schema Tools > Validate Against Domains**." },
        { km: "", en: "Pick the layers under **Input layer(s)**." },
        { km: "", en: "Tick **Violation locations** if you want to zoom to the offending features; this is usually the fastest way to fix them." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "Open the **Violations** table. Each row names the layer, feature, field, value, domain and reason." },
        { km: "", en: "Fix the values, then run it again until the count is zero." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "A **Violations** table, one row per bad value: layer, feature, field, value, domain and reason." },
        { km: "", en: "Optionally a **Violation locations** point layer for map navigation." },
        { km: "", en: "A report — in the log, and as HTML when asked for — summarising per layer." },
        { km: "", en: "The **Number of violations** count in the Processing results panel." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Only layers stored in a GeoPackage or File Geodatabase can carry domains.** Shapefiles, GeoJSON, memory layers and the rest are skipped with a note in the log, not an error — check the note before concluding a layer is clean." },
        { km: "", en: "**A clean run means the values match the domains, nothing more.** Fields with no domain attached are not checked at all; use the **[Domain & Schema Manager](domain_manager.md)** to see which fields actually carry one." },
        { km: "", en: "**Nothing is modified.** This tool only reports." },
        { km: "", en: "Empty values pass by default. Tick *Report empty values as violations* when a blank is as wrong as a bad code — which it usually is for a status field." },
      ] },
    ],
    seeAlso: ["apply_domain_library", "domain_manager"],
  },
  {
    slug: "copy_paste_feature",
    group: "kgaeditingtools",
    name: "Copy-Paste Feature",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:copy_paste_feature",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Copy-Paste Feature",
    summary: {
      km: "ចម្លង features ពីស្រទាប់មួយ រួចបិទភ្ជាប់ទៅស្រទាប់មួយទៀត ដូច Copy និង Paste Special ក្នុង ArcGIS Pro។",
      en: "Copy features from one layer and paste them into another, the way ArcGIS Pro's Copy and Paste Special do.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Copy* / *Paste Special* pair. Put features on the KGA clipboard — from the layer's selection or by clicking them on the map — then press **Paste Special** and decide where they land and what happens to their attributes and geometry on the way in." } },
      { type: "paragraph", text: { km: "", en: "Why not the QGIS clipboard? `Edit > Paste Features As` writes a *new* scratch layer, and pasting into an existing layer only works when the two schemas already line up — values under a differently-spelled field name are dropped without a word. This tool never drops a value quietly: every field that could not be carried across is either mapped explicitly or named in the paste report." } },
      { type: "paragraph", text: { km: "", en: "It leads the Editing Tools menu because it is the one that puts a feature on the map in the first place; the rest of the group works on features already there." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: null,
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the Copy window. The controls below belong to the two windows." } },
        ],
        rows: [],
      },
      {
        title: { km: "", en: "Copy window" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Copy from", type: "Layer combo", default: "the active layer", description: { km: "", en: "The source layer." } },
          { name: "Copy Selected", type: "Button", default: "—", description: { km: "", en: "Puts the layer's selected features on the KGA clipboard." } },
          { name: "Copy by Clicking", type: "Toggle button", default: "up", description: { km: "", en: "Click a feature on the map to copy it. Hold **Ctrl** or **Shift** to add to what is already on the clipboard." } },
          { name: "Clear", type: "Button", default: "—", description: { km: "", en: "Empties the clipboard." } },
          { name: "Clipboard box", type: "Label", default: "empty", description: { km: "", en: "What is currently held. The contents are outlined on the canvas." } },
          { name: "Paste Special…", type: "Button", default: "—", description: { km: "", en: "Opens the paste window below." } },
          { name: "Paste Again", type: "Button", default: "—", description: { km: "", en: "Repeats the last paste: same target layer, same field mapping." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the window." } },
        ],
      },
      {
        title: { km: "", en: "Paste Special window" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Paste into", type: "Layer combo", default: "—", description: { km: "", en: "The target layer." } },
          { name: "Attributes › Handling", type: "Combo box", default: "`Match target fields by name`", description: { km: "", en: "`Match target fields by name`, `Map fields manually`, `Do not copy attributes (use the target defaults)`." } },
          { name: "Attributes › Name matching", type: "Combo box", default: "`Names must match exactly`", description: { km: "", en: "`Names must match exactly`, `Ignore upper/lower case`, `Ignore case, spaces and underscores`. Used by the matching mode." } },
          { name: "Mapping table", type: "Table (`Target field`, `Type`, `Take value from`, `Fixed value`)", default: "derived", description: { km: "", en: "In manual mode, pick a source field per target field — or `(fixed value)` and type one, or `(leave to the target default)`." } },
          { name: "Geometry › Reproject to the target layer CRS", type: "Checkbox", default: "**ticked**", description: { km: "", en: "" } },
          { name: "Geometry › Multipart into single", type: "Combo box", default: "`Explode it into one feature per part`", description: { km: "", en: "Or `Skip the feature`. Only used when a copied feature is multipart and the target holds single-part geometry." } },
          { name: "After pasting › Select the pasted features", type: "Checkbox", default: "**ticked**", description: { km: "", en: "" } },
          { name: "After pasting › Zoom the map to them", type: "Checkbox", default: "unticked", description: { km: "", en: "" } },
          { name: "After pasting › Keep this window open after pasting", type: "Checkbox", default: "unticked", description: { km: "", en: "" } },
          { name: "**Paste** / **Close**", type: "Buttons", default: "—", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Copy-Paste Feature**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the **Copy from** layer." },
        { km: "", en: "Either select features and press **Copy Selected**, or press **Copy by Clicking** and pick them off the map (Ctrl/Shift adds)." },
        { km: "", en: "Press **Paste Special…**, choose the **Paste into** layer." },
        { km: "", en: "Decide the attribute handling. Start with *Match target fields by name* and loosen the *Name matching* if the schemas differ only in spelling; drop to *Map fields manually* when they differ in substance." },
        { km: "", en: "Press **Paste**, then read the paste report: it names every value that had to change and every field that could not be carried." },
        { km: "", en: "Use **Paste Again** to repeat the same paste into the same target." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The copied features written into the target layer, with attributes as mapped and geometry fitted to the target." },
        { km: "", en: "A **paste report** naming every converted value and every unmapped field." },
        { km: "", en: "The pasted features selected, and the map zoomed to them, if those boxes are ticked." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The target layer has to be in edit mode.** The tool offers to start editing if it is not." },
        { km: "", en: "**The clipboard holds copies, not references.** A source layer closed, edited or rolled back after the copy cannot change what gets pasted." },
        { km: "", en: "**Nothing is written outside an edit command.** One paste is one undo step." },
        { km: "", en: "**Nothing is dropped quietly.** Values that will not fit the target field are converted where that is lossless and reported where it is not — never turned into a silent NULL." },
        { km: "", en: "Geometry is fitted on the way in: reprojected, promoted to multipart or exploded into single parts, curves segmented, Z and M added or dropped. A target with no geometry column takes the attributes alone." },
        { km: "", en: "Copying more than about 2,000 features at once is flagged: it is usually a slip, and the clipboard holds them in memory until cleared." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "construct_polygon",
    group: "kgaeditingtools",
    name: "Construct Polygon",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:construct_polygon",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Construct Polygon",
    summary: {
      km: "បង្កើត polygon ពីបន្ទាត់ដែលព័ទ្ធជុំវិញវា ដូច Modify Features ▸ Construct Polygons ក្នុង ArcGIS Pro។",
      en: "Build a polygon from the lines that bound it, the way ArcGIS Pro's Modify Features > Construct Polygons does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Construct Polygons* pane. Take the lines that bound something — the courses of a parcel, the banks and end walls of a reservoir, the centrelines of a block of streets — and turn the area they enclose into a polygon feature." } },
      { type: "paragraph", text: { km: "", en: "**The lines have to close.** That is the whole condition, and the one thing this tool refuses on: courses that stop short of one another enclose nothing, and rather than writing a polygon that is not the boundary anybody drew, the tool names the loose ends and flashes them on the map." } },
      { type: "paragraph", text: { km: "", en: "What it offers beyond Pro's pane is the running verdict above the buttons: how many lines are in hand, whether they currently close, and how many polygons they would make. Whether a boundary closes is otherwise a question you only get answered by pressing the button." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "The line layer the courses are read from." } },
          { name: "Template", type: "Polygon layer combo", default: "—", description: { km: "", en: "The polygon layer the constructed polygons are created in. ArcGIS calls this the template." } },
          { name: "Tolerance", type: "Number + unit combo", default: "`0.0`", description: { km: "", en: "How far apart two line ends may be and still count as meeting. Zero demands they touch exactly, which is what a boundary built by snapping does. Raise it to close the hairline gaps a survey import leaves — and no further, or corners that are genuinely apart get pulled together." } },
          { name: "Combine the polygons into one feature", type: "Checkbox", default: "unticked", description: { km: "", en: "Only means anything when the lines enclose more than one area — a block of parcels sharing walls. Ticked they become one feature; unticked each enclosed area is its own feature, which is what ArcGIS does." } },
          { name: "Copy the attributes of the first line", type: "Checkbox", default: "unticked", description: { km: "", en: "Off by default, as in ArcGIS: a boundary is made of several courses and no one of them owns the parcel, so the polygon takes the template layer's own defaults. Tick it to carry the first clicked line's values across by field name." } },
          { name: "*Verdict line*", type: "Bold label", default: "—", description: { km: "", en: "Live: how many lines are in hand, whether they close, how many polygons they would make. Updates as you click **and as you change the Tolerance**, which is how you find the tolerance a boundary actually needs." } },
          { name: "Construct", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand. This tool **collects**: each click adds a line to the set in hand." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets the running count back to zero." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Construct Polygon**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the source line **Layer** and the **Template** polygon layer." },
        { km: "", en: "Press **Construct**. Lines already selected in the layer are taken in hand straight away." },
        { km: "", en: "Click each line of the boundary — or drag a path across them all in one gesture. Hovering a line draws in cyan what it would close together with the lines already in hand." },
        { km: "", en: "Watch the verdict line. When it says the lines close, press **Enter**." },
        { km: "", en: "If it refuses, read where the loose ends are, raise the **Tolerance** until the verdict turns, and press Enter again. **Esc** starts over." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One polygon per enclosed area in the template layer — or a single combined feature when *Combine the polygons into one feature* is ticked." },
        { km: "", en: "Attributes from the template layer's defaults, unless *Copy the attributes of the first line* is ticked." },
        { km: "", en: "**The lines themselves are not changed.**" },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**It refuses rather than guessing.** Loose ends are named and flashed on the map, and the lines stay in hand so the gap can be fixed and Enter pressed again." },
        { km: "", en: "**Tolerance is measured in the matching UTM zone** on a layer stored in degrees, so metres mean metres." },
        { km: "", en: "**Lines that cross are noded first**, so a boundary enclosing several areas gives one polygon per area." },
        { km: "", en: "**Circular arcs come back segmented.** The construction is GEOS work and GEOS has no arcs. If the arcs matter, this is the wrong tool." },
        { km: "", en: "One press is one undo step. The pane stays open while you work, and owns the map tool." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "copy_parallel",
    group: "kgaeditingtools",
    name: "Copy Parallel",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:copy_parallel",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Copy Parallel",
    summary: {
      km: "ចម្លង features បន្ទាត់ទៅម្ខាង ឬម្ខាងទៀត ដូច Modify Features ▸ Copy Parallel ក្នុង ArcGIS Pro។",
      en: "Copy line features to one side or the other, the way ArcGIS Pro's Modify Features > Copy Parallel does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Copy Parallel* pane. Set an offset distance, press **Copy Parallel**, then hover a line to see its parallel copies in cyan and click to write them." } },
      { type: "paragraph", text: { km: "", en: "A canal centre line becomes its two banks; a road centre line becomes its edge of pavement; a boundary becomes its setback." } },
      { type: "paragraph", text: { km: "", en: "What this gets right that a plain `offsetCurve` does not:" } },
      { type: "list", items: [
        { km: "", en: "**Left and right mean what they mean in Pro** — relative to the direction the line was digitized in. GEOS hands a left-hand offset back walking the other way, which without correction would reverse the COGO description of half the copies in a run." },
        { km: "", en: "**A distance is a real distance.** On a layer stored in degrees the offset is computed in the right UTM zone and brought back, so \"5 meters\" is five metres and not five degrees." },
        { km: "", en: "**Copies can land in another layer.** Pro calls that choosing a template." },
      ] },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "The line layer the sources are read from." } },
          { name: "Template", type: "Line layer combo", default: "the source layer", description: { km: "", en: "Where the copies are created — the source layer by default, which is what Copy Parallel does in ArcGIS. Sending them elsewhere matches the attributes by field name." } },
          { name: "Distance", type: "Number + unit combo", default: "`10.0`", description: { km: "", en: "The offset." } },
          { name: "Side", type: "Combo box", default: "both sides", description: { km: "", en: "Left, right or both — relative to the direction each line was digitized in." } },
          { name: "Corners", type: "Combo box", default: "`Miter`", description: { km: "", en: "How the copy turns a corner. Mitered keeps it sharp, beveled cuts it off, rounded arcs it." } },
          { name: "Number of copies", type: "Spin box (1–100)", default: "`1`", description: { km: "", en: "More than one steps outwards: the second copy sits at twice the distance, the third at three times it." } },
          { name: "Copy the source attributes", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Carries the source values across by field name." } },
          { name: "Copy Parallel", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets the running count back to zero." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Copy Parallel**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the source **Layer**, and a **Template** layer if the copies belong somewhere else." },
        { km: "", en: "Set the **Distance**, the **Side** and the **Corners**." },
        { km: "", en: "Press **Copy Parallel**." },
        { km: "", en: "Hover a line — its copies are drawn in cyan. Click to write them." },
        { km: "", en: "Or press, drag a path across several lines, and release to copy them all." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One copy per side per step, written into the template layer." },
        { km: "", en: "Source attributes carried across by field name when the box is ticked; matched by name when the template is a different layer." },
        { km: "", en: "A running count and a status line after each press." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Left and right follow the digitizing direction**, not the screen. A line drawn the other way offsets the other way — which is correct, and is what ArcGIS does." },
        { km: "", en: "**Metres mean metres** on a degrees-based layer: the offset is computed in the matching UTM zone." },
        { km: "", en: "**Each click or drag is one undo step.**" },
        { km: "", en: "The pane stays open while you work, and it owns the map tool." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "buffer_features",
    group: "kgaeditingtools",
    name: "Buffer",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:buffer_features",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Buffer",
    summary: {
      km: "បង្កើត buffer ពី features ដែលបានជ្រើស ទៅក្នុងស្រទាប់ polygon ដូច Modify Features ▸ Buffer ក្នុង ArcGIS Pro។",
      en: "Buffer the selected features into a polygon layer, the way ArcGIS Pro's Modify Features > Buffer does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Buffer* pane. Hover a feature of any geometry type, see its buffer drawn in cyan, and click to write it into a polygon layer of your choosing." } },
      { type: "paragraph", text: { km: "", en: "A well becomes its protection zone; a canal becomes its right of way; a village point becomes its service area." } },
      { type: "paragraph", text: { km: "", en: "Pro's pane is short — a template, a distance and a unit — and so is the top of this one. The end-cap and corner controls below it are QGIS's own, and they are on the pane rather than buried because a right of way that overshoots its channel by the buffer radius is a real error, not a cosmetic one." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "The source features are read from here. Any vector layer." } },
          { name: "Template", type: "Polygon layer combo", default: "the source layer when it is a polygon layer", description: { km: "", en: "The polygon layer the buffers are created in. ArcGIS calls this the template. There is no fall-back to the source: buffers are polygons and the source may be lines or points." } },
          { name: "Distance", type: "Number + unit combo", default: "`10.0`", description: { km: "", en: "How far out the buffer reaches. Must be greater than zero." } },
          { name: "Side", type: "Combo box", default: "full buffer", description: { km: "", en: "One-sided buffers only mean anything for a line; a point or a polygon is always buffered all round." } },
          { name: "End caps", type: "Combo box", default: "`Round`", description: { km: "", en: "How a buffered line ends. Round overshoots the last vertex by the buffer distance; flat stops on it." } },
          { name: "Corners", type: "Combo box", default: "`Round`", description: { km: "", en: "How the buffer turns a corner." } },
          { name: "Segments per quarter", type: "Spin box (1–64)", default: "`8`", description: { km: "", en: "Straight segments used to draw a quarter circle. Higher is smoother and heavier." } },
          { name: "Combine the buffers into one feature", type: "Checkbox", default: "unticked", description: { km: "", en: "Only means anything when a drag catches several features at once: their buffers are merged, so a chain gives one corridor rather than a stack of overlapping polygons." } },
          { name: "Copy the source attributes", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Carries the source values across by field name." } },
          { name: "Buffer", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand. It stays down while the map is in Buffer mode." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets the running count back to zero, and stops what has been written so far being off limits — so a buffer can itself be buffered." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back to the previous tool." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Buffer**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the source **Layer** and the **Template** polygon layer." },
        { km: "", en: "Set the **Distance** and its unit." },
        { km: "", en: "Press **Buffer** — the button stays down." },
        { km: "", en: "Hover a feature: its buffer is drawn in cyan. Click to write it." },
        { km: "", en: "Or press, drag a path across several features, and release to buffer them all in one go." },
        { km: "", en: "Press **Buffer** again, or **Close**, when you are done." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "Buffer polygons written into the template layer, one per source feature (or one merged corridor when *Combine* is ticked and a drag caught several)." },
        { km: "", en: "Source attributes carried across by field name when *Copy the source attributes* is on." },
        { km: "", en: "A running count and a status line in the pane after each press." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Distances are honest on a layer stored in degrees.** The buffer is computed in the matching UTM zone and brought back, so a 30 m setback is 30 m at the equator and 30 m in the north." },
        { km: "", en: "**The tool skips its own output.** A buffer contains the feature it came from, so without this the next hover would buffer that buffer, and the click after it would buffer *that* — one ring wider every time. **Reset** clears the exclusion when you genuinely want to buffer a result." },
        { km: "", en: "**One press is one undo step.** A drag across several features is still one step." },
        { km: "", en: "A combined buffer whose parts do not all overlap has to be split when the target is a single-part layer; the status line says so rather than leaving the tick box looking like it did nothing." },
        { km: "", en: "The pane stays open while you work, and it owns the map tool — the QGIS select tool is not involved." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "split_into_cogo_lines",
    group: "kgaeditingtools",
    name: "Split into COGO Lines",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:split_into_cogo_lines",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Split into COGO Lines",
    summary: {
      km: "បំបែកព្រំដែនដែលបានជ្រើស ទៅជាបន្ទាត់មួយក្នុងមួយ course ដោយមានតម្លៃ COGO ដូច Modify Features ▸ Split into COGO Lines ក្នុង ArcGIS Pro។",
      en: "Break the selected boundaries into one line per course, each with its COGO values, the way ArcGIS Pro's Modify Features > Split into COGO Lines does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Split into COGO Lines* pane. Take a boundary — a parcel polygon, a right of way, a surveyed traverse — and break it into one line feature per course, each carrying the four COGO values a deed is written in: **Direction**, **Distance**, **Radius** and **ArcLength**." } },
      { type: "paragraph", text: { km: "", en: "The parts that decide whether the result matches the survey it came from:" } },
      { type: "list", items: [
        { km: "", en: "**Arcs stay arcs.** A File Geodatabase parcel boundary holds true circular arcs. Segmenting one into chords would lengthen the boundary and lose the curve entirely, so an arc comes through as a single COGO line whose radius and arc length describe it, with Direction and Distance giving the chord — which is what chord bearing and chord distance mean on a plat." },
        { km: "", en: "**The radius is signed.** Positive turns clockwise from the start of the course, negative counter-clockwise. Reading a description back without the sign gives a mirror image of the curve." },
        { km: "", en: "**Directions say which convention they are in.** A number with no convention beside it is not a direction." },
        { km: "", en: "**Bearings are grid bearings**, measured in the projected CRS the lengths are measured in." },
      ] },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "The lines or polygons to split." } },
          { name: "Template", type: "Line layer combo", default: "—", description: { km: "", en: "The line layer the COGO lines are created in. A polygon boundary has to go somewhere else; a line layer can split into itself." } },
          { name: "Direction type", type: "Combo box", default: "`North azimuth`", description: { km: "", en: "North azimuth, south azimuth, polar or quadrant bearing. North azimuth is clockwise from north; polar is counter-clockwise from east." } },
          { name: "Direction units", type: "Combo box", default: "`Degrees minutes seconds`", description: { km: "", en: "Decimal degrees, degrees-minutes-seconds, gradians or radians. DMS is stored **packed** in a numeric field — 45°30'15\" is the number `45.3015` — and written out in full (`N45-30-15.00E`) in a text field." } },
          { name: "Distance units", type: "Combo box", default: "`Meters`", description: { km: "", en: "The unit Distance, Radius and ArcLength are written in." } },
          { name: "Keep circular arcs as single courses", type: "Checkbox", default: "**ticked**", description: { km: "", en: "On, an arc is one COGO line with a radius and an arc length. Off, it is broken into straight chords, which lengthens the boundary." } },
          { name: "Create the COGO fields if they are missing", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Adds Direction, Distance, Radius and ArcLength to the template layer. Existing fields are matched by name, ignoring case and underscores, and left alone." } },
          { name: "Copy the source attributes", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Carries the boundary's values onto every course." } },
          { name: "Delete the original feature", type: "Checkbox", default: "**ticked**", description: { km: "", en: "On — the ArcGIS default — the boundary is replaced by its courses. Off, the original is kept alongside them." } },
          { name: "Split into COGO Lines", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets the running count back to zero." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Split into COGO Lines**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the source **Layer** and the **Template** line layer." },
        { km: "", en: "Set the direction convention — **Direction type**, **Direction units** — and the **Distance units**. Get these right before you start: a number with the wrong convention behind it is not recoverable by inspection." },
        { km: "", en: "Decide whether the original boundary is replaced or kept." },
        { km: "", en: "Press **Split into COGO Lines**, then hover a boundary to see the courses in cyan and click to write them. Drag across several to do them all." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One line feature per course in the template layer, with **Direction**, **Distance**, **Radius** and **ArcLength** filled in." },
        { km: "", en: "The four COGO fields created on the template layer if they were missing." },
        { km: "", en: "The original boundary deleted, unless *Delete the original feature* is unticked." },
        { km: "", en: "Source attributes on every course when the box is ticked." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**A radius sign is meaningful.** Positive is clockwise from the start of the course. A description read back without it describes the mirror image." },
        { km: "", en: "**A text Direction field gets the full form** (`N45-30-15.00E`); a numeric one gets the packed number (`45.3015`). Choose the field type deliberately." },
        { km: "", en: "**Bearings are grid bearings**, measured in the same projected CRS as the lengths — a layer stored in degrees is taken through its UTM zone rather than having angles read off a plate carrée." },
        { km: "", en: "One press is one undo step per layer. The pane stays open while you work, and it owns the map tool." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "divide_features",
    group: "kgaeditingtools",
    name: "Divide",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:divide_features",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Divide",
    summary: {
      km: "កាត់ features ដែលបានជ្រើសជាផ្នែកៗ ដូច Modify Features ▸ Divide ក្នុង ArcGIS Pro។",
      en: "Cut the selected features into parts, the way ArcGIS Pro's Modify Features > Divide does. The pane reads differently for a line and for a polygon.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Divide* pane. Cut features into parts: a parcel into four equal shares, a long block into one-hectare plots, a canal into 500 m maintenance reaches." } },
      { type: "paragraph", text: { km: "", en: "The pane reads differently for a line and for a polygon, exactly as Pro's does, because dividing a line is about length and dividing a polygon is about area." } },
      { type: "list", items: [
        { km: "", en: "**Lines** divide into equal parts, into parts of a specified length, or into parts of a percentage of the total. A multipart line is measured end to end as one run, so a cut can fall in any of its parts." },
        { km: "", en: "**Polygons** divide into parallel strips of the asked-for area, along a direction you set. The cut positions are found by bisection rather than by formula: a real parcel has notches and holes, and no formula says where the line that leaves exactly one hectare behind it falls." },
      ] },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's; the visible set changes with the geometry type and the chosen method." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "The features to divide." } },
          { name: "Divide into", type: "Combo box", default: "`Equal parts` / `Equal areas`", description: { km: "", en: "Lines: `Equal parts`, `Specified length`, `Percentage of length`. Polygons: `Equal areas`, `Specified area`, `Percentage of area`." } },
          { name: "Number of parts", type: "Spin box (2–1000)", default: "`2`", description: { km: "", en: "Shown for the equal-parts method." } },
          { name: "Size of each part", type: "Number + unit combo", default: "`1.0`, hectares (polygon) / metres (line)", description: { km: "", en: "Shown for the specified-size method. One row that means length on a line and area on a polygon; only the matching unit combo is on screen." } },
          { name: "Percentage", type: "Number (0.0001–100)", default: "`25.0 %`", description: { km: "", en: "Shown for the percentage method." } },
          { name: "Leftover", type: "Combo box", default: "`Leave it as a final part`", description: { km: "", en: "`Leave it as a final part`, `Leave it as a first part`, `Spread it across the parts`. Spreading makes every part slightly larger than asked for, but equal." } },
          { name: "Division angle", type: "Number (−360…360 deg) + **Edge** + **Draw**", default: "`0 deg`", description: { km: "", en: "The direction the cuts run in, counter-clockwise from east — 0 cuts along horizontal lines, 90 along vertical. **Edge** takes the angle off a boundary you click on the map; **Draw** takes it off a two-click line with snapping. Both only fill in this box, so a picked angle can still be nudged by hand. Polygons only." } },
          { name: "*Angle note*", type: "Label", default: "`Typed.`", description: { km: "", en: "Says whether the current angle was typed, picked off an edge, or drawn." } },
          { name: "Copy the source attributes to every part", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Every part carries the original's values." } },
          { name: "Divide", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets the running count back to zero." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Divide**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the **Layer**. The pane rearranges itself for lines or for polygons." },
        { km: "", en: "Choose **Divide into** and fill in the number, size or percentage it asks for." },
        { km: "", en: "For a polygon, set the **Division angle**. Almost nobody knows a parcel's angle as a number, so press **Edge** and click any boundary — this parcel's, the road it fronts, the neighbour it abuts — or press **Draw** and click the two ends of a line. **Esc** goes back." },
        { km: "", en: "Decide where the **Leftover** goes. Twelve hectares divided into five-hectare plots is two plots and two hectares over; whether that is a small plot at the end, a small plot at the start, or spread so all three come out at four hectares is the difference between a legal subdivision and a redraft." },
        { km: "", en: "Press **Divide**, then hover a feature to see the cuts in cyan and click to apply them." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The feature replaced by its parts, in the same layer." },
        { km: "", en: "**The first part keeps the original feature's identity** and the rest are added beside it, so joins and relates still resolve." },
        { km: "", en: "The parts end up selected, ready for the next tool." },
        { km: "", en: "Source attributes on every part when the box is ticked." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The angle is read in the CRS the cut is made in, not the one on screen.** For a layer stored in degrees, drawn in Web Mercator and divided in hectares, those are three different things — which is why a picked edge is re-read when you switch between a real area unit and map units." },
        { km: "", en: "**Cut positions are searched for, not calculated.** Notches and holes are handled correctly because the area behind a sweeping line only ever grows, so bisection always converges." },
        { km: "", en: "One press is one undo step. The pane stays open while you work, and it owns the map tool." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "merge_features",
    group: "kgaeditingtools",
    name: "Merge",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:merge_features",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Merge",
    summary: {
      km: "បញ្ចូល features ពីរ ឬច្រើនក្នុងស្រទាប់តែមួយ ទៅជា feature តែមួយ ដូច Modify Features ▸ Merge ក្នុង ArcGIS Pro។",
      en: "Combine two or more selected features of one layer into a single feature, the way ArcGIS Pro's Modify Features > Merge does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Merge* pane. Click two or more features of one layer and combine them into a single feature. Parts that touch dissolve into one; parts that do not stay on as a multipart feature." } },
      { type: "paragraph", text: { km: "", en: "The part that matters, and that a plain dissolve leaves out, is the **attribute side**. Merging three parcels means deciding whose parcel number the survivor keeps, whose owner name, whose land use code. Pro shows the selected features, lets you pick one to preserve the attributes from, and then lets you override any single field from any of the others. So does this." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "The features must all come from one layer." } },
          { name: "Preserve the attributes of", type: "Single-select list", default: "the first feature clicked", description: { km: "", en: "The features clicked so far. The highlighted entry is marked **(preserved)**: the merged feature keeps that feature's identity and starts from its values. Clicking an entry flashes it on the map, so you know which parcel you are looking at." } },
          { name: "Field table", type: "Table (field, value)", default: "the preserved feature's values", description: { km: "", en: "Every field, with each distinct value any of the clicked features holds. Pick a different one and only that field changes." } },
          { name: "Merge", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand. This tool **collects**: it needs at least two features, so each click adds to the set in hand and Enter commits." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets the running count back to zero." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Merge**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the **Layer**." },
        { km: "", en: "Press **Merge**, then click each feature to combine — or drag a path across them all in one gesture." },
        { km: "", en: "In the list, highlight the feature whose identity and starting values the survivor should keep. Click entries to flash them on the map if you are not sure which is which." },
        { km: "", en: "Override any individual field from the table below." },
        { km: "", en: "Press **Enter** to commit. **Esc** starts over." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One feature in place of the clicked ones." },
        { km: "", en: "**The survivor keeps the preserved feature's id**, not a new one, so joins, relates and anything keyed on that id still point at something afterwards." },
        { km: "", en: "Attributes from the preserved feature, with the per-field overrides you chose." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**At least two features are needed** — the tool collects until Enter." },
        { km: "", en: "**All the features must be in one layer.** This is a merge, not a union across layers." },
        { km: "", en: "Features that do not touch produce a **multipart** feature, not an error. That is what `unaryUnion` does and what Pro does." },
        { km: "", en: "One press is one undo step. The pane stays open while you work, and it owns the map tool." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "clip_features",
    group: "kgaeditingtools",
    name: "Clip",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:clip_features",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Clip",
    summary: {
      km: "កាត់ features ដោយប្រើការជ្រើសរើសបច្ចុប្បន្ន ដូច Modify Features ▸ Clip ក្នុង ArcGIS Pro។",
      en: "Clip features with the current selection, the way ArcGIS Pro's Modify Features > Clip does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Clip* pane. Pick the features that define the cut — a road corridor, a reservoir footprint, a proposed canal — give them a buffer distance if the cut is wider than they are, and then either take that area out of everything around them or keep only that area." } },
      { type: "paragraph", text: { km: "", en: "Two things this pane insists on, because getting either wrong is expensive:" } },
      { type: "list", items: [
        { km: "", en: "**You choose what gets clipped.** Pro clips every editable layer, which is fine when one layer is open for editing and alarming when six are. The list is explicit, and every ticked layer is opened for editing before a single feature is touched — half a clip is worse than none of one." },
        { km: "", en: "**The clipping features are never clipped.** When the corridor and the parcels live in the same layer, the selected features are skipped, so the corridor does not eat itself." },
      ] },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "Where the clipping features are picked from." } },
          { name: "Buffer distance", type: "Number + unit combo", default: "`0.0`", description: { km: "", en: "How far beyond the selected features the cut reaches. Leave it at zero to clip with the features themselves." } },
          { name: "Clip", type: "Combo box", default: "`Discard the area that intersects`", description: { km: "", en: "`Discard the area that intersects` — the clip is a hole; features lose the part inside it and a feature entirely inside is removed. `Preserve the area that intersects` — the clip is a cookie cutter; each feature is reduced to the part inside it." } },
          { name: "Layers to clip", type: "Checkable list", default: "the layers already in edit mode", description: { km: "", en: "The layers whose features are clipped. Each ticked layer is opened for editing before anything is written. The list follows layers added to and removed from the project." } },
          { name: "Clip", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets the running count back to zero." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Clip**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the **Layer** the clipping features live in." },
        { km: "", en: "Tick the **Layers to clip**. Check this list carefully — it is the difference between clipping one layer and clipping six." },
        { km: "", en: "Set a **Buffer distance** if the cut is wider than the features themselves — a 12 m road corridor from a centreline means 6 m here." },
        { km: "", en: "Choose **Discard** or **Preserve**." },
        { km: "", en: "Press **Clip**, then hover a feature to see the cut boundary in cyan and click to apply it. Drag a path across several to use them all." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The ticked layers modified in place: features lose the overlap, or are reduced to it, depending on the mode." },
        { km: "", en: "Features left with nothing after a *Discard* are removed." },
        { km: "", en: "A status line reporting what each press changed." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Every ticked layer is opened for editing before anything is written.** If one of them cannot be opened, nothing is touched — a half-applied clip across six layers is far worse than a refusal." },
        { km: "", en: "**The clipping features themselves are never clipped**, so a boundary sharing a layer with its neighbours does not eat itself." },
        { km: "", en: "**Each layer's changes are one undo step** per press." },
        { km: "", en: "The cut boundary is drawn in cyan before anything is written, so you can see what a buffer distance actually produces." },
        { km: "", en: "The pane stays open while you work, and it owns the map tool." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "sequential_numbering",
    group: "kgaeditingtools",
    name: "Sequential Numbering",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:sequential_numbering",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, owns a map tool, needs the QGIS canvas" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Sequential Numbering",
    summary: {
      km: "ដាក់លេខ features ដោយចុចលើវានៅលើផែនទី ដូចផ្ទាំង Sequential Numbering ក្នុង ArcGIS Pro។",
      en: "Number features by clicking them on the map, the way ArcGIS Pro's Modify Features > Sequential Numbering pane does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Replica of the ArcGIS Pro *Modify Features > Sequential Numbering* pane. Pick a layer, a field, a start value and an increment, then click features on the map to number them." } },
      { type: "paragraph", text: { km: "", en: "This is the tool for putting manhole numbers on a sewer run, chainage on a canal, or plot numbers around a block — in the order you walk them, not the order the table happens to be in. Dragging a path across several features numbers them in the order the path crosses them, and the dashed rubber band mirrors Pro's line." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the pane. The controls below are the pane's." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "Any vector layer." } },
          { name: "Field", type: "Field combo", default: "first suitable field", description: { km: "", en: "The field the value is written to. Text and numeric fields only." } },
          { name: "Format", type: "Label", default: "`#`", description: { km: "", en: "A live preview of what the next value will look like, including prefix, suffix and padding." } },
          { name: "Start value", type: "Number (−1e9…1e9)", default: "`1`", description: { km: "", en: "Where the sequence begins." } },
          { name: "Increment", type: "Number (−1e6…1e6)", default: "`1`", description: { km: "", en: "Step between values. Negative counts down." } },
          { name: "Next value", type: "Number (−1e9…1e9)", default: "`1`", description: { km: "", en: "The value the next click will write. Editable, so you can jump the sequence mid-run." } },
          { name: "Text field options › Prefix", type: "Text", default: "empty", description: { km: "", en: "Text fields only." } },
          { name: "Text field options › Suffix", type: "Text", default: "empty", description: { km: "", en: "Text fields only." } },
          { name: "Text field options › Pad to digits", type: "Spin box (0–20)", default: "`0`", description: { km: "", en: "Zero-pads the number, so `MH-`, `7`, pad 3 gives `MH-007`." } },
          { name: "Skip features that already have a value", type: "Checkbox", default: "unticked", description: { km: "", en: "On, renumbers only the gaps and leaves existing values alone." } },
          { name: "Sequential Numbering", type: "Toggle button", default: "up", description: { km: "", en: "Puts the tool in hand. Stays down while the map is in this mode." } },
          { name: "Reset", type: "Button", default: "—", description: { km: "", en: "Sets **Next value** back to **Start value**." } },
          { name: "Close", type: "Button", default: "—", description: { km: "", en: "Closes the pane and gives the canvas back." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Editing Tools > Sequential Numbering**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the **Layer** and the **Field**." },
        { km: "", en: "Set the **Start value** and **Increment**. For a text field, add a **Prefix**, **Suffix** and **Pad to digits** — the *Format* line shows the result." },
        { km: "", en: "Tick **Skip features that already have a value** if you are filling gaps." },
        { km: "", en: "Press **Sequential Numbering**." },
        { km: "", en: "Click a feature to give it the next value, or press, drag a path across several, and release to number them in the order the path crosses them." },
        { km: "", en: "Watch **Next value** — it advances as you go, and you can type over it to jump." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The chosen field written on each clicked feature, in sequence." },
        { km: "", en: "Nothing else is changed; geometry is untouched." },
        { km: "", en: "A status line reporting what each stroke numbered." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The layer has to be in edit mode.** The tool offers to start editing if it is not." },
        { km: "", en: "**Each click or drag is one undo step**, so Ctrl+Z takes back a whole stroke — not one feature of it." },
        { km: "", en: "**Text field options are only used for a text field.** Writing to a numeric field ignores prefix, suffix and padding." },
        { km: "", en: "The pane stays open while you work and owns its map tool; this is the tool the other Editing Tools were modelled on." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "planarizelines",
    group: "kgaeditingtools",
    name: "Planarize Lines",
    icon: "PenLine",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:planarizelines",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — the in-place branch writes into a project layer)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Editing Tools ▸ Planarize Lines",
    summary: {
      km: "បំបែកបន្ទាត់នៅកន្លែងដែលកាត់គ្នា បង្កើតជាបន្ទាត់ផ្នែកតែមួយដែលគ្មានការកាត់គ្នា។ គុណលក្ខណៈពីបន្ទាត់ដើមត្រូវបានរក្សាទុក។",
      en: "Splits lines where they intersect, creating planarized single-part lines with no cross-overs. Attributes from the original lines are retained.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Splits lines where they intersect, producing planarized single-part lines with no cross-overs. Attributes from the original lines are retained on every segment.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "This is the step a network needs before it is a network: a canal layer digitized as long runs that cross each other has no node where they meet, so routing, topology checks and length-per-reach all give the wrong answer. Planarizing puts a break at every crossing.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**Input Line Layer**", type: "Feature source (line)", default: "—", description: { km: "", en: "The lines to planarize." } },
          { name: "**Planarize the input layer in place (no output layer)**", type: "Boolean", default: "`False`", description: {
            km: "",
            en: "Off, a new layer is written and the input is untouched. On, the input layer's features are replaced by the planarized ones and no output layer is produced.",
          } },
          { name: "**Planarized Output**", type: "Feature sink (line), optional", default: "temporary layer", description: { km: "", en: "Where the result goes. Ignored when the in-place box is ticked." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Open **KGA Editing Tools > Planarize Lines**. 2. Pick the **Input Line Layer**. 3. Leave the in-place box off for the first run — check the result, then decide. 4. Press **Run**. 5. To rewrite the source instead, load it in the project, tick **Planarize the input layer in place**, and run again.",
        } },
    ],
    results: [
      { type: "paragraph", text: {
          km: "",
          en: "- A line layer of single-part, non-crossing segments, each carrying the attributes of the line it came from. - In place: the input layer's features replaced by those segments, and **no** output layer.",
        } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Feature ids are not preserved**, in either mode. One input line becomes several output segments, so there is no id to keep. Joins and relates keyed on the old ids will not survive. - **In place needs a real project layer** whose provider can add and delete features — not a file path typed into the parameter, and not a read-only source. - **In place respects an edit session.** If the layer is already in edit mode the change is left in the edit buffer so you can undo it; otherwise it is committed. - The original attributes are duplicated onto every segment. A length field carried across this way is now wrong for each piece — recompute it with **[Update Geometry Fields](updategeometryfields.md)**.",
        } },
    ],
    seeAlso: ["updategeometryfields"],
  },
  {
    slug: "duplicate_checker",
    group: "kgageometryutilities",
    name: "Duplicate Checker",
    icon: "Shapes",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:duplicate_checker",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Geometry Utilities ▸ Duplicate Checker",
    summary: {
      km: "ស្វែងរក និងបង្ហាញគុណលក្ខណៈ ឬធរណីមាត្រដែលស្ទួន។",
      en: "Detects and highlights duplicate attributes or geometries.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Finds features that repeat — either the same value in a chosen field, or the same geometry — and shows you which ones they are, by selecting them or by colouring them on the map." } },
      { type: "paragraph", text: { km: "", en: "The usual use: a parcel number that was issued twice, or a point that was digitized twice on top of itself after a bad import." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the window. The controls below are the window's." } },
        ],
        rows: [
          { name: "Input Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "Any vector layer." } },
          { name: "Mode", type: "Combo box", default: "`Check Duplicate Field Value`", description: { km: "", en: "`Check Duplicate Field Value` compares one field; `Check Duplicate Geometry` compares the geometries themselves." } },
          { name: "Field", type: "Field combo", default: "first field", description: { km: "", en: "The field compared. Enabled only in field mode." } },
          { name: "Highlight Action", type: "Combo box", default: "`Select Duplicate Features`", description: { km: "", en: "`Select Duplicate Features` selects them; `Symbolize (Categorize)` recolours the whole layer." } },
          { name: "Detect and Highlight Duplicates", type: "Button", default: "—", description: { km: "", en: "Runs the check and reports the count in a message box." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Geometry Utilities > Duplicate Checker**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the **Input Layer**." },
        { km: "", en: "Choose the **Mode**: compare one field's values, or compare the geometries." },
        { km: "", en: "In field mode, pick the **Field** to compare." },
        { km: "", en: "Leave **Highlight Action** on `Select Duplicate Features` unless you deliberately want the layer restyled — the symbolize option writes a field and replaces your symbology." },
        { km: "", en: "Press **Detect and Highlight Duplicates**. A message box gives the count." },
        { km: "", en: "Open the attribute table filtered to the selection to see which records collide." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Depends on the **Highlight Action**:" } },
      { type: "list", items: [
        { km: "", en: "**Select Duplicate Features** — the duplicates end up as the layer's selection. Nothing is written; clear the selection and the run leaves no trace." },
        { km: "", en: "**Symbolize (Categorize)** — the layer gets a text field `is_dup_temp` holding `Duplicate` or `Unique` for every feature, and a categorized renderer showing duplicates in **red** and the rest in **grey**. This is a real, committed edit." },
      ] },
      { type: "paragraph", text: { km: "", en: "A message box reports how many duplicates were found, or says none were." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**`Symbolize (Categorize)` writes to the layer.** It adds the `is_dup_temp` field, fills it for **every** feature, commits the change, and replaces the layer's renderer. The existing symbology is lost. Use *Select* instead if you only want to look — and if you do symbolize, remember to delete `is_dup_temp` and restore your styling afterwards." },
        { km: "", en: "**All features of a duplicate group are flagged**, including the first one — the tool tells you which records collide, not which to delete." },
        { km: "", en: "**Geometry mode compares WKT exactly.** Two geometries that differ in vertex order, precision or ring direction are not reported as duplicates even when they draw identically." },
        { km: "", en: "Null values are grouped together: every feature with an empty field counts as a duplicate of every other one. The same applies to null geometries." },
        { km: "", en: "The whole layer is read, regardless of any selection or filter." },
        { km: "", en: "**The window stays open.** Close the Processing dialog behind it and keep working." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "geometry_conversion_dynamic",
    group: "kgageometryutilities",
    name: "Geometry Conversion",
    icon: "Shapes",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:geometry_conversion_dynamic",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Geometry Utilities ▸ Geometry Conversion",
    summary: {
      km: "បើកប្រអប់សម្រាប់បម្លែងស្រទាប់ polygon ឬបន្ទាត់ ទៅជាធរណីមាត្រសាមញ្ញជាង៖ អង្កត់ព្រំដែន ចំណុចកណ្តាល កំពូលព្រំដែន ឬកំពូលបន្ទាត់។",
      en: "Opens a dialog that converts polygon or line layers into simpler geometries: boundary segments, central points, boundary vertices or line vertices.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Explodes polygon and line layers into simpler geometries: boundary segments, central points, boundary vertices or line vertices — and writes the result wherever you want it, including straight into a GeoPackage or a File Geodatabase." } },
      { type: "paragraph", text: { km: "", en: "The four conversions cover the jobs that keep coming back: getting one line per parcel course, getting a label point that is guaranteed to fall inside its polygon, getting the vertices of a boundary as points to compare against a survey." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the window. The controls below are the window's; the option rows shown change with the mode." } },
        ],
        rows: [
          { name: "Input Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "The polygon or line layer to convert." } },
          { name: "Conversion Mode", type: "Combo box", default: "`Polygon → Two-Point Lines`", description: { km: "", en: "`Polygon → Two-Point Lines` (one 2-vertex line per boundary segment), `Polygon → Central Point`, `Polygon → Boundary Points` (one point per ring vertex), `Line → Vertices` (one point per vertex)." } },
          { name: "Include holes", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Whether interior rings contribute segments or vertices. Polygon modes." } },
          { name: "Point Method", type: "Combo box", default: "`Point on Surface`", description: { km: "", en: "`Point on Surface` is guaranteed to fall inside the polygon; `Centroid` may not, for a concave or ring-shaped one. Central-point mode." } },
          { name: "One central point per part", type: "Checkbox", default: "unticked", description: { km: "", en: "Multipart polygons get a point per part instead of one per feature. Central-point mode." } },
          { name: "Selected features only", type: "Checkbox", default: "unticked", description: { km: "", en: "Convert just the current selection." } },
          { name: "Remove duplicate geometries", type: "Checkbox", default: "unticked", description: { km: "", en: "Drops repeats — useful for boundary segments shared by two parcels, which otherwise come out twice." } },
          { name: "Add geometry fields (XY/LatLon or Length)", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Adds coordinate fields to point output, and `length_m` to line output." } },
          { name: "Store Output In", type: "Combo box", default: "`Temporary layer`", description: { km: "", en: "`Temporary layer` (in memory, nothing on disk), `Folder (ESRI Shapefile)`, `GeoPackage (.gpkg)`, `File Geodatabase (.gdb)`." } },
          { name: "Folder / Database", type: "File widget", default: "empty", description: { km: "", en: "The folder or container. Not used for a temporary layer." } },
          { name: "Output Name", type: "Text", default: "derived from the input", description: { km: "", en: "The shapefile base name, or the layer name inside the container." } },
          { name: "Run Conversion", type: "Button", default: "—", description: { km: "", en: "Runs it. A progress bar reports the pass." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Geometry Utilities > Geometry Conversion**. Close the Processing window once the pane appears." },
        { km: "", en: "Pick the **Input Layer** and the **Conversion Mode**. The option rows below change to match the mode." },
        { km: "", en: "Set the options that matter for that mode — **Include holes** for the polygon modes, **Point Method** for central points, **Remove duplicate geometries** when neighbouring polygons share boundaries." },
        { km: "", en: "Choose **Store Output In**. Start with `Temporary layer` to check the result; switch to a GeoPackage or a folder once you are happy." },
        { km: "", en: "Fill in **Folder / Database** and **Output Name** for the non-temporary destinations." },
        { km: "", en: "Press **Run Conversion**. The result is added to the project." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "A new layer holding the converted geometries, in the chosen destination, added to the project." },
        { km: "", en: "Point output carries X/Y or latitude/longitude fields, line output carries `length_m`, when *Add geometry fields* is ticked." },
        { km: "", en: "Existing layers in a GeoPackage or File Geodatabase container are left untouched — a new layer is added beside them." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**`length_m` is an ellipsoidal length in metres**, using the project ellipsoid; it falls back to planar CRS units converted to metres when no ellipsoid is set." },
        { km: "", en: "**Curved geometries are segmentised first.** A CircularString or CurvePolygon becomes straight segments before anything is exploded." },
        { km: "", en: "**Shapefile output truncates field names to 10 characters.** The generated field names are shortened up front so they stay unique, and a `.cpg` sidecar is written so UTF-8 and Khmer attributes survive the DBF." },
        { km: "", en: "**File Geodatabase output needs GDAL's OpenFileGDB driver (GDAL 3.6 or newer).** An older GDAL cannot write one." },
        { km: "", en: "**The window stays open.** Close the Processing dialog behind it and keep working." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "updategeometryfields",
    group: "kgageometryutilities",
    name: "Update Geometry Fields",
    icon: "Shapes",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:updategeometryfields",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm with **no parameters** — acts on the active layer" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Geometry Utilities ▸ Update Geometry Fields",
    summary: {
      km: "គណនា Shape_Length (ប្រវែងសម្រាប់បន្ទាត់ បរិមាត្រសម្រាប់ polygon) និង Shape_Area លើស្រទាប់សកម្ម។ បង្កើត fields បើមិនទាន់មាន។",
      en: "Silently checks the active layer. Calculates Shape_Length (length for lines, perimeter for polygons) and Shape_Area. Creates fields if missing.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Fills `Shape_Length` and `Shape_Area` on the layer currently highlighted in the Layers panel, creating the fields if they are missing." } },
      { type: "paragraph", text: { km: "", en: "These are the fields ArcGIS maintains automatically. A GeoPackage does not, so after any edit — a split, a merge, a planarize, a reshaped boundary — they are stale. This is the one-click way to bring them back in line before data goes back to an ArcGIS colleague." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: null,
        blocks: [
          { type: "paragraph", text: { km: "", en: "**None.** The tool takes no parameters at all: it reads `iface.activeLayer()` — whichever layer is highlighted in the Layers panel — and runs straight away, without showing a Processing dialog." } },
          { type: "paragraph", text: { km: "", en: "What it computes follows from the geometry type:" } },
          { type: "table",
            head: ["Layer type", "`Shape_Length`", "`Shape_Area`"],
            rows: [
              ["Line", "length", "not created"],
              ["Polygon", "perimeter", "area"],
              ["Point", "— refused —", "—"],
            ] },
        ],
        rows: [],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "**Click the layer in the Layers panel** so it is the active layer. This is the only way to choose the layer." },
        { km: "", en: "Open **KGA Geometry Utilities > Update Geometry Fields**. It runs immediately." },
        { km: "", en: "A message box reports success, or says why it refused." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "`Shape_Length` (double) created if missing and filled for every feature — length for lines, perimeter for polygons." },
        { km: "", en: "`Shape_Area` (double) created if missing and filled, for polygon layers." },
        { km: "", en: "The changes are **committed** to the layer." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**It acts on the active layer, with no confirmation.** Check which layer is highlighted before running it." },
        { km: "", en: "**The changes are committed immediately** — there is no dry run and no edit session left open to undo from." },
        { km: "", en: "**Point layers are refused** with a message: there is nothing to measure. Use **[Update X/Y or Lat/Lon Fields](updatexyfields.md)** for those." },
        { km: "", en: "**Measurements are ellipsoidal**, using the project CRS's ellipsoid, with the layer CRS as the source. The numbers therefore follow the *project* configuration, not only the layer — set the project ellipsoid deliberately." },
        { km: "", en: "Features with null or empty geometry are skipped and left as they are." },
        { km: "", en: "Existing `Shape_Length` / `Shape_Area` values are overwritten." },
        { km: "", en: "The tool cannot run headless: it needs `iface` for both the active layer and its message boxes." },
      ] },
    ],
    seeAlso: ["updatexyfields"],
  },
  {
    slug: "updatexyfields",
    group: "kgageometryutilities",
    name: "Update X/Y or Lat/Lon Fields",
    icon: "Shapes",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:updatexyfields",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — it edits the layer in place)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Geometry Utilities ▸ Update X/Y or Lat/Lon Fields",
    summary: {
      km: "គណនា POINT_X / POINT_Y (CRS បច្ចុប្បន្ន) ឬ LONGITUDE / LATITUDE (WGS 84)។ សម្រាប់បន្ទាត់ និង polygon គណនាចំណុចកណ្តាល។ បង្កើត fields បើមិនទាន់មាន។",
      en: "Updates the selected layer directly. Calculates POINT_X / POINT_Y (Current CRS) or LONGITUDE / LATITUDE (WGS 84). For lines and polygons, it calculates the centroid. Creates fields if missing.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Writes coordinate fields onto a layer: either `POINT_X` / `POINT_Y` in the layer's own CRS, or `LONGITUDE` / `LATITUDE` in WGS 84. The fields are created if they are missing." } },
      { type: "paragraph", text: { km: "", en: "This is the field-book direction: a point layer that has to go into a report, a handover spreadsheet or a GPS device needs its coordinates as attributes, not only as geometry. Lines and polygons get their centroid, which is what a \"location of this feature\" column usually means." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input Layer", type: "Vector layer (any geometry)", default: "—", description: { km: "", en: "The layer written to. It is edited in place; there is no output layer." } },
          { name: "Coordinate Format", type: "Enum", default: "`X / Y (Layer CRS)`", description: { km: "", en: "`X / Y (Layer CRS)` writes `POINT_X` / `POINT_Y` in the layer's own CRS. `Longitude / Latitude (WGS 84 / EPSG:4326)` writes `LONGITUDE` / `LATITUDE`, transforming each coordinate." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Geometry Utilities > Update X/Y or Lat/Lon Fields**." },
        { km: "", en: "Pick the **Input Layer**." },
        { km: "", en: "Choose the **Coordinate Format**. Pick Lat/Lon when the numbers are going somewhere outside this project — a report, a GPS, a spreadsheet a colleague will open." },
        { km: "", en: "Press **Run**. A message box reports what happened." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "`POINT_X` and `POINT_Y` (double), or `LONGITUDE` and `LATITUDE` (double), created if missing and filled for every feature." },
        { km: "", en: "The changes are **committed** to the layer." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Lines and polygons get their centroid**, which for a concave or ring-shaped polygon can fall outside the feature. If the point has to be inside, use **[Geometry Conversion](geometry_conversion_dynamic.md)** with *Point on Surface* instead." },
        { km: "", en: "**The changes are committed immediately** — no dry run, no edit session left to undo from." },
        { km: "", en: "**Existing values are overwritten.** The field names are fixed; the tool does not ask before reusing `POINT_X` or `LONGITUDE` if the layer already has one." },
        { km: "", en: "Running it twice with different formats leaves **both** pairs of fields on the layer." },
        { km: "", en: "Features with null or empty geometry are skipped." },
        { km: "", en: "A coordinate that cannot be transformed is reported in the log and that feature is skipped, rather than stopping the run." },
        { km: "", en: "The values are a snapshot. Move a feature afterwards and the fields are stale — run it again." },
        { km: "", en: "The tool needs `iface` for its message boxes, so it cannot run headless." },
      ] },
    ],
    seeAlso: ["geometry_conversion_dynamic"],
  },
  {
    slug: "checkoverlapsandgaps",
    group: "kgatopology",
    name: "Check Overlaps and Gaps",
    icon: "GitBranch",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:checkoverlapsandgaps",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — it adds error layers to the project)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Topology ▸ Check Overlaps and Gaps",
    summary: {
      km: "ពិនិត្យស្រទាប់ polygon រកកំហុស topology ទាំងការត្រួតគ្នា និងចន្លោះទទេ។",
      en: "Checks polygon layers for topological errors.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Checks polygon layers for the two errors that matter in a parcel or land-use dataset: polygons that **overlap** each other, and enclosed **gaps** left between them." } },
      { type: "paragraph", text: { km: "", en: "Overlaps are reported for every pair of polygons whose intersection has an area — within one layer and, when several layers are supplied, between them as well. Gaps are the enclosed holes left once every input feature is dissolved together." } },
      { type: "paragraph", text: { km: "", en: "When errors are found, two memory layers are added at the top of the Layers panel and symbolized so you can see them at a glance; **[Open Error Inspector](errorinspector.md)** then walks you through them one by one." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input polygon layer(s)", type: "Multiple vector layers (polygon)", default: "—", description: { km: "", en: "The layers to check. Non-polygon layers are skipped with a warning. The **first** layer's CRS is the one the check runs in; the rest are reprojected to it." } },
          { name: "Use selected features only (when a selection exists)", type: "Boolean", default: "`False`", description: { km: "", en: "On, a layer with a selection contributes only those features; a layer with no selection still contributes all of them." } },
          { name: "Check overlaps", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
          { name: "Check gaps", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
          { name: "Ignore errors smaller than (square map units)", type: "Number", default: "`0.000001`", description: { km: "", en: "The sliver threshold. Errors at or below it are dropped." } },
          { name: "Ignore gaps larger than (square map units, 0 = no limit)", type: "Number", default: "`0.0`", description: { km: "", en: "Upper bound for gaps, so a genuine untouched area — a lake, a forest block — is not reported as an error. `0` means no limit." } },
        ],
      },
    ],
    outputs: [
      { name: "Overlaps found", type: "Number", description: { km: "", en: "" } },
      { name: "Gaps found", type: "Number", description: { km: "", en: "" } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the polygon layers. Put the one whose CRS the check should use **first**." },
        { km: "", en: "Open **KGA Topology > Check Overlaps and Gaps**." },
        { km: "", en: "Pick the layers, and set **Ignore errors smaller than** to the precision your survey actually has — this is what separates a real overlap from floating point noise." },
        { km: "", en: "If the dataset has legitimate untouched areas, set **Ignore gaps larger than** above the largest sliver you care about and below the smallest real void." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "If errors are found, open **[Open Error Inspector](errorinspector.md)** to step through them." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "When errors are found, two memory layers are added to the top of the Layers panel:" } },
      { type: "list", items: [
        { km: "", en: "**Topology Errors - Overlaps** — one polygon per overlapping pair, fill `#FF8080` with a red outline. Fields: `error`, `layer_a`, `fid_a`, `layer_b`, `fid_b`, `area`." },
        { km: "", en: "**Topology Errors - Gaps** — one polygon per enclosed gap, no fill with a `#FF8080` outline. Fields: `error`, `gap_id`, `area`." },
      ] },
      { type: "paragraph", text: { km: "", en: "When **no** errors are found, a message box says so and any error layers left over from a previous run are removed from the Layers panel." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Gaps that open onto the outer edge of the dataset cannot be detected.** A gap is found as an interior ring of the dissolved geometry, so a void on the boundary of the study area is not enclosed and is invisible to this check." },
        { km: "", en: "**Areas are in the square map units of the first input layer**, which also defines the CRS the check runs in. Both thresholds are in those units — square degrees if that layer is geographic, which is almost never what you want." },
        { km: "", en: "**The error layers are memory layers.** They vanish when the project closes unless you save them." },
        { km: "", en: "Invalid geometries are repaired before the check (`makeValid`, falling back to a zero buffer). Features that cannot be repaired are counted in a warning and left out." },
        { km: "", en: "Every pair is compared, so the overlap check grows with the square of the feature count in dense areas. A large dataset takes time." },
      ] },
    ],
    seeAlso: ["errorinspector"],
  },
  {
    slug: "checkpointsonboundary",
    group: "kgatopology",
    name: "Check Points on Boundary Vertices",
    icon: "GitBranch",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:checkpointsonboundary",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Topology ▸ Check Points on Boundary Vertices",
    summary: {
      km: "សម្គាល់ចំណុចដែលមិនស្ថិតនៅលើកំពូលនៃស្រទាប់ព្រំដែន។",
      en: "Flags points that do not sit on a vertex of the boundary layer.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "This is the survey-reconciliation check: corner points from a field survey are supposed to coincide with the vertices of the parcel boundary drawn from them. A point that has drifted — because the boundary was edited afterwards, or because the point was digitized separately — is an error you want to find before the plan is issued." } },
      { type: "paragraph", text: { km: "", en: "Every point is tested against the vertices of the polygon or line boundary; anything further away than the snapping tolerance is written to an error layer." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Boundary layer (Polygon or Line)", type: "Feature source (polygon or line)", default: "—", description: { km: "", en: "The layer whose **vertices** define the valid positions." } },
          { name: "Point layer to check", type: "Feature source (point)", default: "—", description: { km: "", en: "The points tested." } },
          { name: "Snapping tolerance (map units)", type: "Number", default: "`0.001`", description: { km: "", en: "How far a point may sit from the nearest boundary vertex and still pass." } },
        ],
      },
    ],
    outputs: [
      { name: "Errors found", type: "Number", description: { km: "", en: "Points further from a vertex than the tolerance." } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the boundary layer and the point layer." },
        { km: "", en: "Open **KGA Topology > Check Points on Boundary Vertices**." },
        { km: "", en: "Set the **Snapping tolerance** to match the precision of the survey — for a metric CRS, `0.001` is one millimetre." },
        { km: "", en: "Press **Run**. A message box reports the outcome." },
        { km: "", en: "Review the results with **[Open Error Inspector](errorinspector.md)**, which zooms to each error and can re-run this check once the points are moved." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "A memory layer **Topology Errors - Points Not on Boundary**, with one point per failure. Fields: `error` (always `Point not on boundary`) and `point_fid`, the id of the offending point in its source layer." },
        { km: "", en: "A message box reporting how many errors were found, or saying there were none." },
        { km: "", en: "The **Errors found** count in the Processing results panel." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The tolerance is in the layer's map units.** A projected CRS means metres and a geographic CRS means degrees — `0.001` degrees is about 110 m, which is not a tolerance, it is a free pass. Check the CRS before trusting a clean result." },
        { km: "", en: "**It tests against vertices, not against the boundary line.** A point sitting exactly on a boundary *segment*, halfway between two vertices, is reported as an error. That is the intended behaviour for survey corners, and the wrong behaviour if you meant \"on the line\"." },
        { km: "", en: "**The error layer is a memory layer**; it disappears when the project closes unless you save it. Re-running replaces the previous one rather than stacking another beside it." },
        { km: "", en: "The check is one-directional: it finds points with no vertex, not vertices with no point." },
      ] },
    ],
    seeAlso: ["errorinspector"],
  },
  {
    slug: "errorinspector",
    group: "kgatopology",
    name: "Open Error Inspector",
    icon: "GitBranch",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:errorinspector",
    interactive: true,
    toolType: { km: "", en: "Interactive window — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Topology ▸ Open Error Inspector",
    summary: {
      km: "បើកបង្អួច Error Inspector ដែលរាយ features លើស្រទាប់កំហុស KGA Topology ទាំងអស់ក្នុងគម្រោង។ ជ្រើសជួរដើម្បីពង្រីកទៅកំហុសនោះ ឬដំណើរការការពិនិត្យទាំងអស់ឡើងវិញដោយ Validate All។",
      en: "Opens the Error Inspector window. It lists the features on every KGA Topology error layer in the project and keeps the list in step as checks are re-run and errors are fixed. Select a row to zoom to that error, or run every check again with Validate All.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Opens the Error Inspector: a window listing every feature on every KGA Topology error layer in the project, which stays in step as you fix errors and re-run checks." } },
      { type: "paragraph", text: { km: "", en: "Finding errors is the easy half. Working through two hundred slivers one at a time, zooming to each, fixing it, and re-running the check to see what is left — that is the half this window is for. Select a row and the map zooms to that error; press **Validate All** and every check that produced an error layer is run again with the parameters it originally used." } },
      { type: "paragraph", text: { km: "", en: "It is a plain window rather than a dock, so it can be parked beside QGIS, maximised, and left open while you edit." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the window. The controls below are the window's." } },
        ],
        rows: [
          { name: "Error table", type: "Table (`FID`, `Error Type`, `Layer Name`)", default: null, description: { km: "", en: "Every feature on every KGA error layer in the project. **Selecting a row zooms the map to that error** — no button press needed." } },
          { name: "Status line", type: "Label", default: null, description: { km: "", en: "What is currently listed, and any note about layers that cannot be re-run." } },
          { name: "Zoom to Error", type: "Button", default: null, description: { km: "", en: "Zooms to the selected row, for when you want to re-zoom without changing the selection." } },
          { name: "Refresh", type: "Button", default: null, description: { km: "", en: "Rebuilds the list by hand. It normally rebuilds itself." } },
          { name: "Validate All", type: "Button", default: null, description: { km: "", en: "Re-runs every check that produced an error layer, using the parameters it was run with." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Run **[Check Overlaps and Gaps](checkoverlapsandgaps.md)** or **[Check Points on Boundary Vertices](checkpointsonboundary.md)** first, with the inputs loaded **in the project** — see the note about repeatability below." },
        { km: "", en: "Open **KGA Topology > Open Error Inspector**. Close the Processing window once the inspector appears; move it beside QGIS so you can see the map." },
        { km: "", en: "Click a row. The map zooms to that error." },
        { km: "", en: "Fix it on the map — the list keeps itself up to date as you edit." },
        { km: "", en: "When you have worked through a batch, press **Validate All**. Every check is re-run and the list shows what is left." },
        { km: "", en: "Repeat until the list is empty." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Nothing is written by the window itself. **Validate All** re-runs the underlying checks, which replace their error layers — so the list, and the map, show what is left after your fixes." } },
      { type: "paragraph", text: { km: "", en: "A success message appears on the QGIS message bar when every check completes; a failure in one check is reported without hiding the checks after it." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The list keeps itself current.** It follows layers added to and removed from the project and edits to the error layers, collapsing bursts of signals into one rebuild so the window does not fight you while you work." },
        { km: "", en: "**Validate All needs the check to be repeatable.** Each error layer carries the algorithm id and parameters it came from. A check run over files picked straight off disk records no parameters — the layer ids would die with the Processing run — so those layers are named in the message instead. **Add the inputs to the project and run the check again** to make it repeatable from here." },
        { km: "", en: "Overlap and gap layers come from the same topology check, so **Validate All** runs it once, not twice." },
        { km: "", en: "It only lists **KGA** topology error layers — the ones written by **[Check Overlaps and Gaps](checkoverlapsandgaps.md)** and **[Check Points on Boundary Vertices](checkpointsonboundary.md)**. QGIS's own Topology Checker results are not picked up." },
        { km: "", en: "The window survives the Processing run that opened it; closing the plugin closes it." },
        { km: "", en: "The tool cannot run headless or inside a model." },
      ] },
    ],
    seeAlso: ["checkoverlapsandgaps", "checkpointsonboundary"],
  },
  {
    slug: "filegdb_to_geopackage",
    group: "kgadataconversion",
    name: "File Geodatabase to GeoPackage",
    icon: "Repeat",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:filegdb_to_geopackage",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Conversion ▸ File Geodatabase to GeoPackage",
    summary: {
      km: "ចម្លងស្រទាប់ និងតារាងទាំងអស់ពី ArcGIS File Geodatabase ទៅក្នុង GeoPackage តែមួយ ដែលអ្នកអាចកែសម្រួលបានពិតប្រាកដក្នុង QGIS។",
      en: "Copies every layer and table of an ArcGIS File Geodatabase into one GeoPackage you can actually edit in QGIS.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "This is the inbound half of the ArcGIS round trip: bring the data in, work on it, then hand it back with **[GeoPackage to File Geodatabase](geopackage_to_filegdb.md)**." } },
      { type: "paragraph", text: { km: "", en: "**What travels with the data**" } },
      { type: "list", items: [
        { km: "", en: "Coded and range **field domains**, so the drop-down lists still work." },
        { km: "", en: "Non-spatial tables, Z and M values, and true curves." },
        { km: "", en: "Layer **aliases**: an ArcGIS class called `Canal_Alignment` with the alias *Canal Alignment* arrives under the readable name." },
      ] },
      { type: "paragraph", text: { km: "", en: "**What changes** — a GeoPackage is flat, so feature datasets disappear." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "File Geodatabase (.gdb folder)", type: "Folder", default: "—", description: { km: "", en: "The `.gdb` to read. It is a folder, not a file." } },
          { name: "Output GeoPackage", type: "File destination (`*.gpkg`)", default: "—", description: { km: "", en: "The container to write." } },
          { name: "Use layer aliases as layer names", type: "Boolean", default: "`True`", description: { km: "", en: "Off, the raw class names are used instead of the readable aliases." } },
          { name: "Prefix layer names with their feature dataset", type: "Boolean", default: "`False`", description: { km: "", en: "Feature datasets do not survive into a GeoPackage. Turn this on to keep their names visible as a prefix — useful when two datasets hold same-named classes." } },
          { name: "Add the converted layers to the project", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Restore QGIS layer styles the geodatabase carries", type: "Boolean", default: "`True`", description: { km: "", en: "Reads the `KGA_layer_styles` table the reverse tool writes, so symbology comes back on a round trip." } },
        ],
      },
      {
        title: { km: "", en: "Advanced" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Only these layers (comma separated)", type: "String, optional", default: "empty (all)", description: { km: "", en: "e.g. `Roads, Canals`." } },
          { name: "Skip layers with no features", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Convert curved geometries to straight segments", type: "Boolean", default: "`False`", description: { km: "", en: "Off, true curves are preserved — a GeoPackage can hold them." } },
          { name: "Add to the existing output instead of replacing it", type: "Boolean", default: "`False`", description: { km: "", en: "Off, the output is replaced." } },
          { name: "Keep ObjectID values as GeoPackage feature ids", type: "Boolean", default: "`True`", description: { km: "", en: "Keeps the ArcGIS ObjectID as the GeoPackage fid, so a record keeps its identity across the round trip." } },
        ],
      },
    ],
    outputs: [
      { name: "Layers converted", type: "Number", description: { km: "", en: "" } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "**Close the geodatabase in ArcGIS first.**" },
        { km: "", en: "Open **KGA Data Conversion > File Geodatabase to GeoPackage**." },
        { km: "", en: "Point the input at the `.gdb` **folder** and name the output GeoPackage." },
        { km: "", en: "Leave the defaults unless you want only part of the data — then use *Only these layers* under Advanced." },
        { km: "", en: "Press **Run** and read the log: it names every layer converted, renamed or skipped." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One GeoPackage holding every layer and table of the geodatabase, with field domains, Z/M values and true curves intact." },
        { km: "", en: "Layer styles restored when the geodatabase carries a `KGA_layer_styles` table." },
        { km: "", en: "The layers added to the project when that box is ticked." },
        { km: "", en: "The **Layers converted** count." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Close the geodatabase in ArcGIS first.** A `.lock` file in the folder means it is still open there, and the log will say so." },
        { km: "", en: "**Feature datasets disappear.** A GeoPackage is flat. Use *Prefix layer names with their feature dataset* if the grouping carries meaning." },
        { km: "", en: "**Replacing a GeoPackage the project still has open** fails on Windows with a bare permission error. The tool checks first and names the layers holding it." },
        { km: "", en: "The reverse direction is **[GeoPackage to File Geodatabase](geopackage_to_filegdb.md)**. The two are pinned together at the top of the Data Conversion menu because neither makes sense read apart." },
      ] },
    ],
    seeAlso: ["geopackage_to_filegdb"],
  },
  {
    slug: "geopackage_to_filegdb",
    group: "kgadataconversion",
    name: "GeoPackage to File Geodatabase",
    icon: "Repeat",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:geopackage_to_filegdb",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Conversion ▸ GeoPackage to File Geodatabase",
    summary: {
      km: "សរសេរ GeoPackage ទាំងមូលត្រឡប់ជា ArcGIS File Geodatabase ត្រៀមប្រគល់ទៅអ្នកប្រើ ArcMap ឬ ArcGIS Pro។",
      en: "Writes a whole GeoPackage back out as an ArcGIS File Geodatabase, ready to hand to someone working in ArcMap or ArcGIS Pro.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "This is the outbound half of the ArcGIS round trip. The geodatabase gets what ArcGIS expects: an **OBJECTID** column, optional **Shape_Length** and **Shape_Area** fields, coded and range **field domains** carried over intact, and lines and polygons stored as multi-part — which is what every ArcGIS feature class is." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "GeoPackage", type: "File (`.gpkg`)", default: "—", description: { km: "", en: "The container to convert." } },
          { name: "Output File Geodatabase (.gdb folder)", type: "Folder destination", default: "—", description: { km: "", en: "The `.gdb` to write. It is a folder, not a file." } },
          { name: "Readable by", type: "Enum", default: "`Every ArcGIS version (64-bit integers become decimals)`", description: { km: "", en: "Or `ArcGIS Pro 3.2 and later (keeps 64-bit integers)`. Leave it on the compatible setting unless you know the recipient is on Pro 3.2 or newer." } },
          { name: "Put the layers in this feature dataset", type: "String, optional", default: "empty", description: { km: "", en: "Creates a feature dataset of that name and puts the layers in it." } },
          { name: "Create Shape_Length and Shape_Area fields", type: "Boolean", default: "`True`", description: { km: "", en: "The fields ArcGIS maintains itself." } },
          { name: "Carry QGIS layer styles across (adds a KGA_layer_styles table)", type: "Boolean", default: "`True`", description: { km: "", en: "ArcGIS ignores the table; the reverse tool uses it to give you your symbology back." } },
        ],
      },
      {
        title: { km: "", en: "Advanced" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Only these layers (comma separated)", type: "String, optional", default: "empty (all)", description: { km: "", en: "e.g. `Roads, Canals`." } },
          { name: "Skip layers with no features", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Convert curved geometries to straight segments", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Add to the existing output instead of replacing it", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Keep the original layer name as the ArcGIS alias", type: "Boolean", default: "`True`", description: { km: "", en: "See *Names* below." } },
          { name: "Keep GeoPackage feature ids as ObjectID values", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [
      { name: "Layers converted", type: "Number", description: { km: "", en: "" } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Finish the editing in QGIS and close anything holding the output folder." },
        { km: "", en: "Open **KGA Data Conversion > GeoPackage to File Geodatabase**." },
        { km: "", en: "Pick the **GeoPackage** and name the output `.gdb` **folder**." },
        { km: "", en: "Leave **Readable by** on *Every ArcGIS version* unless you have been told the recipient is on Pro 3.2 or later." },
        { km: "", en: "Press **Run** and read the log — every layer rename is listed there." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "A `.gdb` folder holding every layer, with OBJECTID, optional Shape_Length and Shape_Area, field domains and multi-part geometry." },
        { km: "", en: "A `KGA_layer_styles` table when styles are carried across." },
        { km: "", en: "The **Layers converted** count." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Names get rewritten.** A geodatabase table name may hold only letters, digits and underscores and may not start with a digit, so `2024 roads-final` becomes `T_2024_roads_final`. The name you started with is kept as the ArcGIS **alias** — what the coworker sees in the table of contents, and what **[File Geodatabase to GeoPackage](filegdb_to_geopackage.md)** restores when the data comes back. Every rename is listed in the log." },
        { km: "", en: "**The compatibility setting costs you 64-bit integer precision.** On *Every ArcGIS version*, 64-bit integer fields become decimals — a problem for very large ID numbers and for nothing else." },
        { km: "", en: "**Lines and polygons become multi-part**, because that is what an ArcGIS feature class is." },
        { km: "", en: "**Replacing a `.gdb` the project still has open** fails on Windows with a bare permission error. The tool checks first and names the layers holding it." },
        { km: "", en: "The reverse direction is **[File Geodatabase to GeoPackage](filegdb_to_geopackage.md)**." },
      ] },
    ],
    seeAlso: ["filegdb_to_geopackage"],
  },
  {
    slug: "attributes_to_xlsx",
    group: "kgadataconversion",
    name: "Export Attributes to Excel",
    icon: "Repeat",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:attributes_to_xlsx",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Conversion ▸ Export Attributes to Excel",
    summary: {
      km: "សរសេរគុណលក្ខណៈរបស់ស្រទាប់ ទៅជា Excel workbook ដែលមិត្តរួមការងារអាចកែបានដោយមិនចាំបាច់មាន QGIS ក្នុងទម្រង់ដែល Import Attributes from Excel អាចនាំត្រឡប់មកវិញដោយសុវត្ថិភាព។",
      en: "Write a layer's attributes to an Excel workbook a colleague can edit without QGIS, in a shape Import Attributes from Excel can bring back safely.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "This is the outbound half of the attribute round trip. The workbook is not a dump: it carries a hidden sheet recording which layer it came from, drop-downs for every field with a value map, and a locked key column, so what comes back is already valid and already matched." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input layer", type: "Vector layer", default: "—", description: { km: "", en: "The layer to export." } },
          { name: "Key field (identifies each row)", type: "Field of *Input layer*, optional", default: "empty", description: { km: "", en: "The column that identifies a record on the way back. Choose something stable and unique." } },
          { name: "Fields to export (all if left empty)", type: "Field of *Input layer*, multiple, optional", default: "empty (all)", description: { km: "", en: "" } },
          { name: "Selected features only", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Turn value maps into Excel dropdowns", type: "Boolean", default: "`True`", description: { km: "", en: "Any field with a value map — from a field domain or set by hand — becomes a drop-down in the workbook, so the data comes back already valid." } },
          { name: "Open the workbook when it is written", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
          { name: "Workbook", type: "File destination (`*.xlsx`)", default: "—", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [
      { name: "Rows written", type: "Number", description: { km: "", en: "" } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Conversion > Export Attributes to Excel**." },
        { km: "", en: "Pick the **Input layer** and a **Key field** — this is the single most important choice, because it is what matches the edited rows back." },
        { km: "", en: "Narrow **Fields to export** to what the colleague actually has to fill in. A shorter sheet comes back with fewer accidents." },
        { km: "", en: "Press **Run**. The workbook opens straight away." },
        { km: "", en: "Send it, get it back, and apply it with **[Import Attributes from Excel](xlsx_to_attributes.md)** — which already has this file and this layer filled in." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { text: { km: "", en: "An `.xlsx` workbook with:" }, items: [
          { km: "", en: "a **data** sheet — the key column first, then the fields you chose;" },
          { km: "", en: "a hidden **`_kga_meta`** sheet recording which layer it came from, so the import can tell whether a sheet belongs to the layer it is applied to;" },
          { km: "", en: "drop-downs on value-mapped columns;" },
          { km: "", en: "the key column **shaded and locked**." },
        ] },
        { km: "", en: "The **Rows written** count." },
        { km: "", en: "The file and layer remembered for the import tool." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The formatting touches need the `openpyxl` library.** Without it the workbook is written plain — no drop-downs, no locked key — and the round trip still works. The log says which happened." },
        { km: "", en: "**An edited key is a row that matches nothing on the way back.** That is why the key column is locked; do not unlock it." },
        { km: "", en: "Nothing is written back to the layer. This half is read-only." },
        { km: "", en: "Excel's habits — turning the text code `0042` into the number 42, turning a date into the serial 45231 — are handled on the way **in**, by the import tool, not prevented here." },
      ] },
    ],
    seeAlso: ["xlsx_to_attributes"],
  },
  {
    slug: "xlsx_to_attributes",
    group: "kgadataconversion",
    name: "Import Attributes from Excel",
    icon: "Repeat",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:xlsx_to_attributes",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — it writes into a project layer)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Conversion ▸ Import Attributes from Excel",
    summary: {
      km: "អនុវត្ត workbook នៃគុណលក្ខណៈដែលបានកែ ត្រឡប់ទៅស្រទាប់ដើម ដោយផ្គូផ្គងជួរតាមជួរឈរ key។",
      en: "Apply a workbook of edited attributes back onto the layer they came from, matching rows on the key column.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "**Reports first, writes second.** The report gives a per-field count and a table of changed values, old next to new, so the change can be reviewed before anything is committed — and it runs as a dry run by default." } },
      { type: "paragraph", text: { km: "", en: "The workbook and the layer are **already filled in** from your last export, so the normal round trip — export, edit in Excel, save, come back — needs no browsing. Both survive a QGIS restart, and clear themselves if the file is moved or deleted." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Workbook", type: "File (`.xlsx`)", default: "**the last exported workbook**", description: { km: "", en: "The edited sheet." } },
          { name: "Target layer", type: "Vector layer", default: "**the layer that export came from**", description: { km: "", en: "The layer written to." } },
          { name: "Key field (taken from the workbook if left empty)", type: "Field of *Target layer*, optional", default: "empty", description: { km: "", en: "Normally leave it: the workbook records which column is the key." } },
          { name: "Fields to apply (all the workbook holds if left empty)", type: "Field of *Target layer*, multiple, optional", default: "empty (all)", description: { km: "", en: "Narrow it to apply only some columns." } },
          { name: "Rows whose key is not in the layer", type: "Enum", default: "`Report them`", description: { km: "", en: "`Ignore them`, `Report them`, `Fail if there are any`." } },
          { name: "Read bare numbers in date fields as Excel day serials", type: "Boolean", default: "`True`", description: { km: "", en: "Decodes Excel's `45231` back into a date." } },
          { name: "Dry run (report only, write nothing)", type: "Boolean", default: "**`True`**", description: { km: "", en: "On by default. Turn it off deliberately." } },
          { name: "Change report", type: "File destination (HTML), optional", default: "not created", description: { km: "", en: "The report as a file. In a dry run, the report *is* the deliverable." } },
        ],
      },
    ],
    outputs: [
      { name: "Values changed", type: "Number", description: { km: "", en: "" } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Save and close the workbook in Excel." },
        { km: "", en: "Make sure the **target layer has no unsaved edits** — commit or roll back first." },
        { km: "", en: "Open **KGA Data Conversion > Import Attributes from Excel**. The workbook and layer are already filled in." },
        { km: "", en: "**Leave the dry run on and press Run.**" },
        { km: "", en: "Read the report: per-field counts, and every changed value old next to new. This is where you catch a colleague who sorted the sheet, retyped a code, or pasted a column one row out." },
        { km: "", en: "Untick **Dry run** and run again to commit." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The changed values written onto the target layer — only when the dry run is off." },
        { km: "", en: "A change report with a per-field count and a table of old-versus-new values, in the Processing log and as HTML when asked for." },
        { km: "", en: "The **Values changed** count." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The dry run is on by default, and the report is the point.** Do not untick it before reading one." },
        { km: "", en: "**The target must have no unsaved edits.** The run is refused otherwise." },
        { km: "", en: "**Excel's habits are handled, not absorbed.** A text code turned into a number comes back as text; a date turned into the serial `45231` is decoded when *Excel date serials* is on; a value that will not fit the field is **reported** rather than landing as a NULL." },
        { km: "", en: "**A workbook recording a different layer gives a warning, not a refusal** — applying a sheet to a copy is legitimate. But read the report before turning off the dry run." },
        { km: "", en: "Rows whose key is not in the layer are reported by default; set the enum to *Fail if there are any* when the sheet is supposed to match exactly." },
        { km: "", en: "The outbound half is **[Export Attributes to Excel](attributes_to_xlsx.md)**; the two are pinned together in the Data Conversion menu." },
      ] },
    ],
    seeAlso: ["attributes_to_xlsx"],
  },
  {
    slug: "export_layers_to_kml",
    group: "kgadataconversion",
    name: "Export Layers to KML",
    icon: "Repeat",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:export_layers_to_kml",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Conversion ▸ Export Layers to KML",
    summary: {
      km: "សរសេរស្រទាប់ចំណុច បន្ទាត់ និង polygon ទៅជា KML ឬ KMZ សម្រាប់ Google Earth។ ពណ៌ ស្លាក និងតារាងគុណលក្ខណៈត្រូវបានយកទៅជាមួយ ហើយ CRS ទាំងអស់ត្រូវបម្លែងទៅ WGS 84។",
      en: "Writes point, line and polygon layers to KML or KMZ for Google Earth. Layer colours, the label the layer already shows, and the attribute table all come across. Any CRS is reprojected to WGS 84 on the way out — the layers themselves are untouched.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The reason this exists rather than *Save Features As… KML*: **rotated labels**. Plain KML always draws text horizontally. This tool can render each label as a transparent PNG laid on the ground and turned to match the line, so a canal name reads along the canal the way it does on the map." } },
      { type: "subheading", text: { km: "", en: "Two ways to label" } },
      { type: "table",
        head: ["", "Placemark labels", "Rotated ground overlays"],
        rows: [
          ["Drawn as", "KML text", "Transparent PNG on the ground"],
          ["Angle", "Always horizontal", "Turned to match the line"],
          ["Size", "Constant on screen", "Fixed on the ground, in metres"],
          ["File", "`.kml`", "`.kmz` — the images ride inside"],
          ["Applies to", "Everything", "Lines; points and polygons still get placemarks"],
        ] },
      { type: "paragraph", text: { km: "", en: "Placemark labels are the safe choice and always legible. Reach for rotated overlays when the text has to read along a canal, a road or a parcel boundary." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input Layers", type: "Multiple vector layers (any geometry)", default: "—", description: { km: "", en: "" } },
          { name: "Export Selected Features Only", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Export Mode", type: "Enum", default: "`One file per layer`", description: { km: "", en: "`One file per layer` names each file after its layer. `Single combined file` puts every layer in one file, one folder each — what you want when the whole lot is going to somebody as an attachment." } },
          { name: "Combined File Name", type: "String, optional", default: "`Combined_Export`", description: { km: "", en: "Used by the combined mode." } },
          { name: "Carry Layer Labels Across", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
          { name: "Label Style", type: "Enum", default: "`Placemark labels — horizontal, constant screen size (.kml)`", description: { km: "", en: "Or `Rotated ground overlays along lines (.kmz)`." } },
          { name: "Placemark Labels · Text Scale", type: "Number (0.0–10.0)", default: "`1.0`", description: { km: "", en: "Placemark mode only." } },
          { name: "Rotated Labels · Text Height on Ground (m)", type: "Number (0.05–10000)", default: "`4.0`", description: { km: "", en: "The one control that decides how big the text looks." } },
          { name: "Rotated Labels · Perpendicular Offset (m)", type: "Number (−10000…10000)", default: "`0.0`", description: { km: "", en: "Pushes the label clear of the stroke — positive to the left of the direction the line runs, negative to the right. Scales with each tier, so the gap looks the same at every zoom." } },
          { name: "Rotated Labels · Zoom Tiers", type: "Integer (1–6)", default: "`3`", description: { km: "", en: "Each tier is a second copy 4× larger that switches on as you zoom out, keeping the text roughly the same size on screen. `1` = one fixed scale (printed-map look); `3` = parcel to district; `5` = province-wide browsing. All tiers point at the same PNG, so they cost XML, not image weight." } },
          { name: "Rotated Labels · Text Colour", type: "Colour (with opacity)", default: "white", description: { km: "", en: "" } },
          { name: "Rotated Labels · Halo Colour", type: "Colour (with opacity)", default: "black", description: { km: "", en: "" } },
          { name: "Rotated Labels · Keep Text Right-Way-Up", type: "Boolean", default: "`True`", description: { km: "", en: "Spins any label turned past vertical, so westward lines do not come out upside down." } },
          { name: "Output Folder", type: "Folder destination", default: "—", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "Advanced" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Rotated Labels · Render Resolution (px)", type: "Integer (8–256)", default: "`48`", description: { km: "", en: "Sharpness only. How big the text *looks* is set entirely by text height on ground." } },
          { name: "Rotated Labels · Font Family", type: "String, optional", default: "`Arial`", description: { km: "", en: "" } },
          { name: "Rotated Labels · Bold Text", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
          { name: "Include Attribute Balloon", type: "Boolean", default: "`True`", description: { km: "", en: "Every non-empty field goes into the balloon that opens when a feature is clicked. Turn it off for a much smaller file." } },
          { name: "Line Width (px)", type: "Integer (1–10)", default: "`2`", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Style and label the layers in QGIS first — this tool reads what is already there." },
        { km: "", en: "Open **KGA Data Conversion > Export Layers to KML**." },
        { km: "", en: "Pick the **Input Layers** and the **Output Folder**." },
        { km: "", en: "Choose the **Export Mode**: one file per layer, or one combined file to email." },
        { km: "", en: "Leave **Label Style** on placemark labels unless the text has to follow a line. If it does, set **Text Height on Ground** first — it is the control that matters — then adjust **Zoom Tiers** for the range you will browse at." },
        { km: "", en: "Press **Run**, then open the result in Google Earth and check the label size at the zoom you actually work at." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "`.kml` files (placemark labels) or `.kmz` files (rotated overlays, with the label PNGs inside), in the output folder — one per layer, or one combined." },
        { km: "", en: "Line and fill colours read from the layer's symbology." },
        { km: "", en: "An attribute balloon per feature, unless turned off." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**One colour per layer.** A categorised or graduated renderer collapses to its first symbol. Split the layer if the classes have to stay apart in Google Earth." },
        { km: "", en: "**Everything is clamped to the ground** at altitude 0. Z values are not carried across." },
        { km: "", en: "**Rotated labels are images.** Thousands of *distinct* label texts mean thousands of PNGs inside the `.kmz`. Repeated text is rendered once and shared, so it is the number of different strings that matters." },
        { km: "", en: "**Files are overwritten without asking** when the name already exists in the output folder." },
        { km: "", en: "Labels come from whatever the layer's Labels tab is set to: a field, an expression, or the first labelled rule of a rule-based setup. KML prints HTML literally, so tags are stripped and `<sup>2</sup>` becomes a real ²." },
        { km: "", en: "Each rotated label sits on the midpoint of its line, turned to the bearing of the segment containing that midpoint." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "raster_format_converter",
    group: "kgadataconversion",
    name: "Raster Format Converter",
    icon: "Repeat",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:raster_format_converter",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Data Conversion ▸ Raster Format Converter",
    summary: {
      km: "បម្លែង raster រវាង ECW, GeoTIFF, JPEG 2000, IMG, PNG និង JPEG ដោយអាចបន្តពីកន្លែងដែលបានឈប់។",
      en: "Converts a raster between ECW, GeoTIFF, JPEG 2000, IMG, PNG and JPEG — resumably.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Converts a raster from **any format GDAL can read** into **any format it can write** — ECW to GeoTIFF, GeoTIFF to JPEG 2000, IMG to GeoTIFF, and back.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "It exists for the orthophoto that is too big to convert in one go: the aerial survey that arrives as a 200 GB ECW and has to become a GeoTIFF before anything else can touch it.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "**How it survives a long run.** The source is read in square blocks. Each block is written straight to disk as a temporary GeoTIFF — GeoTIFF whatever the final format is, because it is the one format that takes reliable windowed writes — and a small `<output>.checkpoint.json` beside the output records how many blocks are down. Cancel the run, lose QGIS, lose the machine: **run it again with the same output path and it carries on from the next unfinished block.** When the last block lands they are mosaicked and written once into the chosen format, which is the fast part, because it reads local uncompressed blocks instead of decoding the original again.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "Small rasters skip all of that. Anything that fits inside one block is converted in a single pass.",
        } },
      { type: "subheading", text: { km: "", en: "How the pyramid is written" } },
      { type: "paragraph", text: {
          km: "",
          en: "Overviews are **built on the throwaway mosaic and copied into the output as it is created** (`COPY_SRC_OVERVIEWS`), not built into the finished file afterwards. Re-opening a freshly written multi-gigabyte raster for update puts hours of work under a write that can still run out of room; the mosaic is disposable, so a failure there costs a rebuild and nothing else.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "Disk space is checked three times — before the merge, before the pyramid, and again after it, when there is still the option of dropping the pyramid instead of crowding out the final write. **The pyramid and the output have to fit on the drive at the same time**, because nothing is cleaned up until the output is written. If they do not:",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "1. The pyramid is skipped and the raster is written without it. 2. Once the blocks are deleted and their space is back, it is tried again as a **sidecar `.ovr`**, with the raster opened **read-only** — so that attempt cannot touch the data even if it fails. 3. If there is still no room, the log says so and tells you the raster is complete and the pyramids can be built later.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "Erdas IMAGINE always takes the sidecar route: `COPY_SRC_OVERVIEWS` is a GeoTIFF creation option and does not apply to it.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**Source \\| Raster to convert**", type: "Raster layer", default: "—", description: {
            km: "",
            en: "A layer in the project or a file on disk: ECW, GeoTIFF, JPEG 2000, IMG, SID, PNG, JPEG — anything GDAL reads. It must be a file: a WMS or XYZ layer has nothing to convert.",
          } },
          { name: "**Output \\| Format**", type: "Enum", default: "`GeoTIFF (.tif)`", description: { km: "", en: "GeoTIFF, ECW, JPEG 2000, Erdas IMAGINE, PNG or JPEG." } },
          { name: "**Output \\| Converted raster**", type: "File destination", default: "—", description: {
            km: "",
            en: "Where to write. The extension is corrected to match the format, so the two can never disagree. **Re-run with this same path to resume.**",
          } },
          { name: "**Options \\| Compression (GeoTIFF, Erdas IMAGINE)**", type: "Enum", default: "`LZW`", description: {
            km: "",
            en: "`LZW`, `DEFLATE` and `ZSTD` are lossless, `JPEG` is lossy but small for photography, `NONE` is uncompressed. Erdas IMAGINE reads anything but `NONE` as \"compressed\". Ignored by the other formats.",
          } },
          { name: "**Options \\| Quality (ECW, JPEG 2000, JPEG)**", type: "Number 1–100", default: "`75`", description: {
            km: "",
            en: "JPEG and JPEG 2000: higher is better quality and a bigger file. **ECW reads it as a target compression ratio, where higher means a smaller file* — the opposite direction. Ignored by the other formats.",
          } },
          { name: "**Options \\| Build overviews (pyramids)**", type: "Boolean", default: "`True`", description: {
            km: "",
            en: "Pyramids down to roughly a 256 px thumbnail, so the raster draws quickly when zoomed out. Only GeoTIFF and Erdas IMAGINE can carry them; ignored for the rest. See *How the pyramid is written below — it is never edited into the finished file.",
          } },
          { name: "**Options \\| Add the result to the project**", type: "Boolean", default: "`False`", description: { km: "", en: "Load the converted raster when the run finishes." } },
        ],
      },
      {
        title: { km: "", en: "Advanced" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**Processing block size (px)**", type: "Number 512–32768", default: "`4096`", description: {
            km: "",
            en: "How much of the source is converted between checkpoints. Smaller blocks lose less work when a run is interrupted but cost more overhead; larger blocks are faster and want more memory. Changing it invalidates an existing checkpoint.",
          } },
          { name: "**GDAL threads**", type: "Enum", default: "`ALL_CPUS`", description: {
            km: "",
            en: "Threads GDAL may use for decoding and compression. Drop it below `ALL_CPUS` to leave the machine usable while a long conversion runs.",
          } },
          { name: "**Resume from an existing checkpoint**", type: "Boolean", default: "`True`", description: {
            km: "",
            en: "Off, the blocks already on disk are thrown away and the conversion starts over.",
          } },
        ],
      },
    ],
    outputs: [
      { name: "**Converted raster**", type: "File", description: { km: "", en: "The written file." } },
      { name: "**Converted raster path**", type: "String", description: { km: "", en: "Its path, after the extension was corrected." } },
      { name: "**Blocks converted**", type: "Number", description: {
        km: "",
        en: "Blocks written this run. `1` for a one-pass conversion, `0` when the run was cancelled with a checkpoint left behind.",
      } },
    ],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Open **KGA Data Conversion > Raster Format Converter**. 2. Pick the source raster and the output format, and name the output file. 3. Leave the defaults unless you have a reason: LZW is lossless, overviews are worth having, and 4096 px blocks suit most orthophotos. 4. Press **Run** and read the header the log prints first — size, band count, data type, creation options and **how much temporary disk space the blocks will need**. Stop there if that number does not fit on the drive. 5. Leave it running. The progress bar moves per block, then again through the merge and the overviews. 6. **If you have to stop it, press Cancel.** The log says which block it reached. Run it again later with the same source and output path, and it says *\"Resuming: N of M blocks were already converted\"*.",
        } },
    ],
    results: [
      { type: "paragraph", text: {
          km: "",
          en: "- The converted raster, with its georeferencing, CRS, band structure and nodata carried across by GDAL. - Internal overviews when the format can hold them and the box is ticked. - The raster added to the project when that box is ticked. - On a clean finish, the block folder, the VRT and the checkpoint are deleted. **After a cancel they are deliberately kept** — they are what resuming reads.",
        } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Writing ECW needs a Hexagon licence.** QGIS reads ECW out of the box, and the driver advertises write support, but the encoder refuses unless `ECW_ENCODE_KEY` and `ECW_ENCODE_COMPANY` are set with the key bought from Hexagon (*Settings > Options > System > Environment*, then restart QGIS). The tool checks the licence, not just the driver, when you press **Run** — GDAL would otherwise refuse at the final write, hours in. **JPEG 2000 goes through the open-source JP2OpenJPEG driver and needs no licence.** - **Budget the temporary disk space.** The blocks are LZW GeoTIFF, so roughly the uncompressed size of the source sits beside the output until the merge is done. The log prints the estimate before it starts, and checks the free space again before the final write and before the pyramid. This is the cost of being able to resume. Running out during the final write is the one failure that wastes the whole run, which is why it is checked rather than assumed. - **A pyramid is never worth risking the raster for.** Whatever happens to the overviews — skipped for space, dropped after being built, failed outright — the converted raster is complete and correct, and the log says which happened. Missing pyramids can be built any time from *Raster > Build Overviews*. - **Changing the block size or the output path starts over.** The blocks no longer line up, and the tool says so rather than mixing them. It also notices when the source file itself has changed since the checkpoint was written. - **JPEG and PNG have format limits**: JPEG takes 8-bit data, 1, 3 or 4 bands and no side over 65535 pixels; PNG takes 8- or 16-bit data and up to 4 bands. Both are checked before the run, against what the driver in *this* QGIS says it will accept. - **JPEG, JPEG 2000 and a JPEG-compressed GeoTIFF are lossy.** Converting an archive ortho into one of them throws away detail that no later conversion brings back. GeoTIFF with LZW or DEFLATE is the lossless choice. - **A source with no georeferencing** — a plain PNG or JPEG with no world file — cannot be mosaicked back from blocks, so it is converted in one pass and that run cannot be resumed. The log says so. - **Cancelling during the merge** keeps every block, so the next run only redoes the merge, which is the cheap half. The half-written output is removed, so there is never a truncated file that looks finished. A merge that fails for another reason (a full disk, say) also keeps the blocks and says so. - **A one-pass conversion cannot be resumed.** Cancelling one removes the unfinished file. - Resuming is the same idea the **[DEM Elevation Correction](demelevationcorrectionandpointsamplereport.md)** tool uses, so a long job in this toolbox behaves the same way wherever you meet one.",
        } },
    ],
    seeAlso: ["demelevationcorrectionandpointsamplereport", "imagery_downloader"],
  },
  {
    slug: "csvtodemcontour",
    group: "kgairrigationtools",
    name: "CSV to DEM and Contour",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:csvtodemcontour",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ CSV to DEM and Contour",
    summary: {
      km: "បម្លែង CSV នៃចំណុចស្ទង់ ទៅជា DEM GeoTIFF និងបន្ទាត់កម្ពស់ (Shapefile ឬ GeoPackage)។",
      en: "Converts a surveyed-point CSV into a DEM GeoTIFF and contour lines (Shapefile or GeoPackage). Interpolation methods: IDW, Linear, Cubic and Nearest; dual side-by-side CSV layouts are detected automatically.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Converts a surveyed point CSV straight into a DEM GeoTIFF and contour lines, in one pass.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "This is the small-job version of the workflow: one survey file, one interpolation pass, contours out the other end.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "**CSV columns:** `No`, `Easting`, `Northing`, `Elevation`, `Code`. A dual side-by-side layout — two blocks of columns on one sheet, as some total stations export — is detected automatically.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**Input · Point CSV**", type: "File (`*.csv`)", default: "—", description: { km: "", en: "Surveyed points, one per row." } },
          { name: "**Input · X (Easting) field**", type: "String", default: "auto", description: {
            km: "",
            en: "Pick the easting column from the CSV's header, or type a name or column number. Blank = auto-detect.",
          } },
          { name: "**Input · Y (Northing) field**", type: "String", default: "auto", description: { km: "", en: "As above, for northing." } },
          { name: "**Input · Z (Elevation) field**", type: "String", default: "auto", description: { km: "", en: "As above, for elevation. Fill all three of X, Y and Z, or none." } },
          { name: "**DEM · Interpolation method**", type: "Enum", default: "`IDW – Inverse Distance Weighting`", description: {
            km: "",
            en: "Also `Linear – Delaunay triangulation`, `Cubic – smooth surface`, `Nearest Neighbour`, `RBF – Radial basis functions (smooth)`. Each has its own settings, below.",
          } },
          { name: "**DEM · Cell size (m) [0 = auto]**", type: "Number", default: "`0.0`", description: {
            km: "",
            en: "Auto derives a cell size from the point density (minimum 0.5 m). Set it when you need a specific grid. Halving it quadruples the cell count.",
          } },
          { name: "**DEM · CRS (EPSG code)**", type: "Integer", default: "`32648`", description: {
            km: "",
            en: "The CRS the Easting/Northing values are already in; it only labels the outputs and nothing is reprojected. `32648` is WGS 84 / UTM zone 48N, which covers most of Cambodia.",
          } },
          { name: "**Contours · Generate contour lines**", type: "Boolean", default: "`True`", description: { km: "", en: "Off, only the DEM is produced." } },
          { name: "**Contours · Interval (m)**", type: "Number (min 0.01)", default: "`1.0`", description: { km: "", en: "" } },
          { name: "**Contours · Smoothing, Gaussian σ (0 = off)**", type: "Number (min 0.0), advanced", default: "`1.0`", description: {
            km: "",
            en: "Smooths the surface before contouring, so the lines are not ragged. `0` contours the raw grid. The DEM itself is unchanged.",
          } },
          { name: "**Contours · Output format**", type: "Enum, advanced", default: "`Shapefile (.shp)`", description: { km: "", en: "Or `GeoPackage (.gpkg)`." } },
          { name: "**Output · Folder**", type: "Folder destination", default: "—", description: { km: "", en: "The DEM and contours are written here, named after the CSV." } },
          { name: "**Output · Add results to the map**", type: "Boolean, advanced", default: "`True`", description: { km: "", en: "Loads the DEM and contours into the current project." } },
        ],
      },
      {
        title: { km: "", en: "Settings that change with the method" },
        nameLabel: "Method",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "The window shows only the settings of the chosen method; in the Processing form they are under *Advanced Parameters*.",
            } },
        ],
        rows: [
          { name: "**IDW**", type: "IDW · Power", default: "`2`", description: { km: "", en: "How fast influence falls with distance." } },
          { name: "", type: "IDW · Neighbours", default: "`16`", description: { km: "", en: "Nearest points averaged per cell." } },
          { name: "", type: "IDW · Search radius (m) [0 = no limit]", default: "`0`", description: {
            km: "",
            en: "Points further away are ignored; a cell with none in range takes the nearest point's height.",
          } },
          { name: "**Linear**", type: "Linear/Cubic · Fill outside the point outline", default: "on", description: { km: "", en: "Off leaves the area outside the points as NoData." } },
          { name: "**Cubic**", type: "Linear/Cubic · Fill outside the point outline", default: "on", description: { km: "", en: "As Linear." } },
          { name: "", type: "Cubic · Clamp to the surveyed height range", default: "off", description: { km: "", en: "Stops overshoot above the highest or below the lowest point." } },
          { name: "**Nearest**", type: "—", default: "", description: { km: "", en: "No settings." } },
          { name: "**RBF**", type: "RBF · Kernel", default: "`thin_plate_spline`", description: { km: "", en: "Also `cubic`, `quintic`, `linear`." } },
          { name: "", type: "RBF · Neighbours", default: "`50`", description: { km: "", en: "Nearest points per local fit." } },
          { name: "", type: "RBF · Smoothing", default: "`0`", description: { km: "", en: "`0` passes through every point; raise it for noisy or duplicated points." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Open **KGA Irrigation Tools > CSV to DEM and Contour**. A window opens. 2. Pick the point CSV. The X, Y and Z boxes fill from its header and the window reports how many points it read and their elevation range; check that range against what you expect. Choose an output folder. 3. Set the **Coordinate system** to the system the survey was recorded in. Getting this wrong is what puts the DEM in the wrong hemisphere. 4. Leave **Cell size** on `0` (auto) for the first run and look at what the auto-detected cell size gives you. 5. Choose the **Interpolation method** — `IDW` is the safe default for scattered survey points; `Linear` and `Cubic` assume a denser, more even sample. 6. Set the contour **Interval** and press **Run**.",
        } },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "In the output folder, named after the input CSV:" } },
      { type: "paragraph", text: {
          km: "",
          en: "- `{name}_DEM.tif` — the interpolated DEM as a GeoTIFF. - `{name}_Contour_{interval}m.shp` (or `.gpkg`) — the contour lines, when *Generate contour lines* is on.",
        } },
      { type: "paragraph", text: { km: "", en: "Both are added to the map canvas when that box is ticked." } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Requires numpy, pandas and scipy**, all bundled with QGIS. - **The EPSG code is the CRS the numbers are already in**, not one to reproject to. - **Smoothing changes the surface, not just the lines.** A Gaussian σ of 1 is a light touch; raise it only if the survey is noisy, and remember the contours then no longer pass exactly through the surveyed elevations. - **`Cubic` can overshoot** beyond the range of the input points at the edges of the survey, producing elevations no one measured. Check the DEM's min and max against the CSV.",
        } },
    ],
    seeAlso: ["generate_contour_roi", "reservoir_storage_analyzer"],
  },
  {
    slug: "demelevationcorrectionandpointsamplereport",
    group: "kgairrigationtools",
    name: "DEM Elevation Correction and Point Sample Report",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:demelevationcorrectionandpointsamplereport",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ DEM Elevation Correction and Point Sample Report",
    summary: {
      km: "កែតម្រូវ DEM មួយ ឬច្រើន ធៀបនឹង DEM យោងដែលអ្នកជ្រើស ហើយចេញរបាយការណ៍គំរូចំណុច។",
      en: "Corrects one or more DEMs against a reference DEM you choose, and reports how every sampled point changed.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Corrects one or more DEMs against a **Reference DEM** you choose — your LiDAR, or whatever survey you trust — optionally merges them all into one seamless raster, and builds a Statistics tab and a Visualization tab summarising correction quality and post-correction agreement.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "This is the tool for a project whose elevation data arrived from several sources at different dates and different accuracies: a LiDAR block, a drone survey, an older contour-derived grid. Each has its own vertical bias, and stitching them untreated gives steps at every seam.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "**The Reference DEM is never modified** — it is the elevation truth every other DEM is corrected toward. The other DEMs are auto-sorted from finest to coarsest resolution and **chained**: the finest is corrected directly against the Reference, the next-finest against that already-corrected result, and so on.",
        } },
      { type: "paragraph", text: { km: "", en: "The run is **resumable** via a `checkpoint.json` in the output folder." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**Input · Reference DEM**", type: "Raster layer", default: "—", description: { km: "", en: "The trusted DEM. Never modified; every other DEM is corrected toward it." } },
          { name: "**Input · DEMs to correct (1 or more)**", type: "Multiple raster layers", default: "—", description: { km: "", en: "Auto-sorted finest to coarsest and corrected in a chain." } },
          { name: "**Input · Reference NoData override**", type: "String, advanced", default: "empty", description: {
            km: "",
            en: "A number to treat as NoData in the Reference. Blank = use its own NoData value.",
          } },
          { name: "**Input · NoData overrides for the DEMs**", type: "String, advanced", default: "empty", description: {
            km: "",
            en: "Comma-separated, one value per DEM in the order you selected them, e.g. `-9999,-32768`. The count must match. Blank uses each raster's own NoData metadata.",
          } },
          { name: "**Correction · Method (all stages)**", type: "Enum", default: "`Auto - Compare All (Best CV)`", description: {
            km: "",
            en: "`Auto - Compare All (Best CV)`, `Global Offset`, `Polynomial Trend (degree 1)`, `Polynomial Trend (degree 2)`, `IDW (distance-decay)`. Auto tries them all and keeps whichever cross-validates best.",
          } },
          { name: "**Correction · Calibration stride (pixels)**", type: "Integer", default: "`4`", description: {
            km: "",
            en: "Every Nth pixel of the difference raster is used as a calibration point. Higher is faster, with fewer points.",
          } },
          { name: "**Correction · Cross-validation folds**", type: "Integer, advanced", default: "`5`", description: { km: "", en: "How the method comparison is scored." } },
          { name: "**IDW · Power**", type: "Number, advanced", default: "`2.0`", description: { km: "", en: "IDW method only (including inside Auto)." } },
          { name: "**IDW · Neighbours (k)**", type: "Integer, advanced", default: "`12`", description: { km: "", en: "Nearest calibration points averaged for each pixel." } },
          { name: "**IDW · Full-strength distance (m)**", type: "Number, advanced", default: "`3000.0`", description: {
            km: "",
            en: "Map units. Full strength within this distance of a calibration point, fading to zero at twice the distance.",
          } },
          { name: "**Merge · Merge Reference + corrected DEMs**", type: "Boolean", default: "`True`", description: { km: "", en: "Writes `MERGED_FINAL_DEM.tif`. The Reference wins, then finest to coarsest." } },
          { name: "**Merge · Extent**", type: "Enum", default: "`Reference DEM extent`", description: { km: "", en: "Or `Coarsest DEM extent (full)`." } },
          { name: "**Merge · Cell size (m)**", type: "Number", default: "`2.5`", description: { km: "", en: "" } },
          { name: "**Report · Sample stride (pixels)**", type: "Integer (min 1), advanced", default: "`20`", description: { km: "", en: "The report compares all DEMs at every Nth pixel of the Reference grid." } },
          { name: "**Report · Max sample points**", type: "Integer (min 100), advanced", default: "`200000`", description: { km: "", en: "Upper limit on sample points; the stride is raised to stay below it." } },
          { name: "**Output · Force re-run (ignore checkpoint)**", type: "Boolean, advanced", default: "`False`", description: { km: "", en: "Redo every stage even if `checkpoint.json` says it is complete." } },
          { name: "**Output · Folder**", type: "Folder destination", default: "—", description: {
            km: "",
            en: "Corrected DEMs, merged DEM, reports and `checkpoint.json` are written here. Reuse the same folder to resume.",
          } },
        ],
      },
    ],
    outputs: [
      { name: "**Merged DEM (if merge was enabled)**", type: "File", description: { km: "", en: "" } },
      { name: "**Run summary**", type: "String", description: { km: "", en: "" } },
      { name: "**Statistics**", type: "HTML", description: { km: "", en: "Appears as a tab in the Processing Results panel." } },
      { name: "**Visualization**", type: "HTML", description: { km: "", en: "Likewise." } },
    ],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Load the reference DEM and every DEM to correct. 2. Open **KGA Irrigation Tools > DEM Elevation Correction and Point Sample Report**. 3. Set the **Reference DEM** — the one you trust. It is never written to. 4. Select the DEMs to correct. Their order does not matter; they are sorted by resolution. 5. Leave the method on **Auto** for the first run and let the cross-validation pick. Look at what it chose in the Statistics tab before pinning a method. 6. Press **Run**. 7. **Open the Statistics and Visualization tabs in the Processing Results panel** — that is where the answer is, not in the log. 8. If the run is interrupted, run it again with the same settings to resume.",
        } },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "In the output folder:" } },
      { type: "paragraph", text: {
          km: "",
          en: "- `corrected_{name}.tif` — one corrected DEM per input. - `MERGED_FINAL_DEM.tif` — the seamless merge, when merging is enabled. - `statistics_report.html` and `visualization_report.html` — the two report tabs, also on disk. - `correction_report.json` — the machine-readable run record. - `checkpoint.json` — resume state. Safe to delete when finished.",
        } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **The chain matters.** Each DEM is corrected against the already-corrected one above it, so an error early in the chain propagates down. Check the Statistics tab stage by stage, not just at the end. - **Correction does not create accuracy.** It removes systematic bias relative to the reference; it cannot fix a DEM that is simply wrong in detail. - **The reports are sampled, not exhaustive.** *Report · Sample stride* and *Report · Max sample points* bound the cost; the statistics describe that sample. - **Resumable via `checkpoint.json`.** Tick *Output · Force re-run* to ignore it. - **NoData overrides must match the order you selected the DEMs in.** Getting the order wrong silently corrects against the wrong nodata mask.",
        } },
    ],
    seeAlso: ["csvtodemcontour", "raster_format_converter"],
  },
  {
    slug: "reservoir_rating_curve",
    group: "kgairrigationtools",
    name: "Reservoir Rating Curve",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:reservoir_rating_curve",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ Reservoir Rating Curve",
    summary: {
      km: "គណនាលំហូរចេញសរុបពីអាងស្តុកទឹក នៅគ្រប់កម្រិតទឹក រួចគូសខ្សែកោង stage–discharge។ មួយ CSV និងមួយ PNG ក្នុងមួយ DEM។",
      en: "Tabulates the total outflow from a reservoir at every water level between the lowest and highest DEM cell, and draws the stage-discharge curve. One CSV and one PNG per DEM.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Tabulates the **total outflow** from a reservoir at every water level between the lowest and highest DEM cell, and draws the stage–discharge curve. One CSV and one PNG per DEM.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "The DEM only sets the elevation range, and the boundary clips it. Discharge itself comes entirely from the outlet definitions — no storage routing is involved, so the curve is static. Pair it with **[Reservoir Storage Analyzer](reservoir_storage_analyzer.md)** for the volume side.",
        } },
      { type: "subheading", text: { km: "", en: "Formulas" } },
      { type: "list", items: [
        { km: "", en: "**Weir:** `Q = C × L × H^1.5`" },
        { km: "", en: "**Orifice and pipe:** `Q = Cd × A × √(2gH)`, with g = 9.81 m/s²" },
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "`H` = water level − activation elevation. An outlet contributes nothing while `H ≤ 0`, which is what puts the kinks in the total curve.",
        } },
      { type: "subheading", text: { km: "", en: "Typical coefficients" } },
      { type: "table", head: [{ km: "", en: "Outlet" }, { km: "", en: "Coefficient" }], rows: [
        [{ km: "", en: "Sharp-crested weir" }, { km: "", en: "C = 1.84" }],
        [{ km: "", en: "Broad-crested weir" }, { km: "", en: "C = 1.70" }],
        [{ km: "", en: "Ogee spillway" }, { km: "", en: "C = 2.0–2.2" }],
        [{ km: "", en: "Sharp-edged orifice or pipe" }, { km: "", en: "Cd = 0.61" }],
        [{ km: "", en: "Rounded entry" }, { km: "", en: "Cd = 0.80–0.90" }],
      ] },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**DEM Raster Layer(s)**", type: "Multiple raster layers", default: "—", description: { km: "", en: "One curve per DEM." } },
          { name: "**Reservoir Boundary (optional — leave blank for full DEM)**", type: "Vector layer, optional", default: "empty", description: { km: "", en: "" } },
          { name: "**Elevation Step (m)**", type: "Number (min 0.001)", default: "`0.1`", description: { km: "", en: "" } },
          { name: "**Outlet Definition Mode**", type: "Enum", default: "`Fixed slots — up to 3 outlets, defined below`", description: {
            km: "",
            en: "Or `CSV file — any number of outlets, from a table`. In CSV mode the three slots below are ignored.",
          } },
          { name: "**CSV Mode · Outlet Table (.csv)**", type: "File (`*.csv`), optional", default: "empty", description: { km: "", en: "Columns: `outlet_id`, `type`, `act_elev`, `LA`, `C_Cd`." } },
          { name: "**Output Folder**", type: "Folder destination", default: "—", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "Outlet slots 1, 2 and 3" },
        nameLabel: "Parameter",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "Each slot repeats the same five controls. Slot 1 is enabled by default as a weir; slots 2 and 3 are off, pre-filled as an orifice and a pipe.",
            } },
        ],
        rows: [
          { name: "**Outlet N · Enable**", type: "Boolean", default: "`True` / `False` / `False`", description: { km: "", en: "" } },
          { name: "**Outlet N · Type**", type: "Enum", default: "`Weir` / `Orifice` / `Pipe`", description: { km: "", en: "" } },
          { name: "**Outlet N · Activation Elevation (m)**", type: "Number", default: "`0.0`", description: { km: "", en: "The crest or centreline level." } },
          { name: "**Outlet N · Size — L (m) or A (m²)**", type: "Number (min 0.001)", default: "`1.0` / `0.5` / `0.3`", description: {
            km: "",
            en: "Crest width **L* in metres for a weir, or opening area **A* in m² for an orifice or pipe. **Areas are not derived for you* — enter the computed value.",
          } },
          { name: "**Outlet N · Coefficient — C or Cd**", type: "Number (min 0.001)", default: "`1.84` / `0.61` / `0.61`", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "Advanced" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**Plot · Elevation Axis Minimum (m) [0 = auto]**", type: "Number", default: "`0.0` (auto)", description: {
            km: "",
            en: "Pins the bottom of the elevation axis so several reservoirs can be compared side by side.",
          } },
          { name: "**Plot · Elevation Axis Maximum (m) [0 = auto]**", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "Pins the top of the elevation axis." } },
          { name: "**Plot · Discharge Axis Maximum (m³/s) [0 = auto]**", type: "Number", default: "`0.0` (auto)", description: {
            km: "",
            en: "Pins the right-hand end of the discharge axis; auto fits it to the computed peak.",
          } },
          { name: "**Plot · Elevation Tick Interval (m) [0 = auto]**", type: "Number", default: "`0.0` (auto)", description: {
            km: "",
            en: "Spacing of the horizontal grid lines. Q_total is marked with a cross at each, so this also sets where the read-off points sit.",
          } },
          { name: "**Plot · Discharge Tick Interval (m³/s) [0 = auto]**", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "Spacing of the vertical grid lines." } },
          { name: "**Plot · Resolution (DPI)**", type: "Integer (72–600)", default: "`150`", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "CSV table format" },
        nameLabel: "outlet_id",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "`outlet_id` must be unique — it names the output column. `type` must be exactly `Weir`, `Orifice` or `Pipe`.",
            } },
        ],
        rows: [
          { name: "1", type: "Weir", default: "40.0", description: { km: "", en: "5.00" } },
          { name: "2", type: "Orifice", default: "35.0", description: { km: "", en: "0.20" } },
          { name: "3", type: "Pipe", default: "33.5", description: { km: "", en: "0.07" } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Load the DEM and the reservoir boundary. 2. Open **KGA Irrigation Tools > Reservoir Rating Curve**. 3. Define the outlets. For up to three, fill in the slots on the form; for more, switch **Outlet Definition Mode** to CSV and supply a table. 4. Check that the **activation elevations are in the same vertical datum as the DEM.** This is the mistake that produces a flat zero curve. 5. Press **Run**. 6. To compare several reservoirs on identical axes, pin the axis ranges and tick intervals under *Advanced* and run again.",
        } },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Per DEM, in the output folder:" } },
      { type: "paragraph", text: {
          km: "",
          en: "- `rating_{DEM}_{boundary}.csv` — elevation, one column per outlet, and `Q_total`. - `rating_{DEM}_{boundary}.png` — the curve, with each outlet's contribution shaded, its activation level marked, and `Q_total` crossed at every grid line for reading off.",
        } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Activation elevations must be in the same vertical datum as the DEM.** If they all sit above the DEM's highest cell the curve comes out flat at zero, and the log warns about it. - **Areas are not derived for you.** For an orifice or pipe, `LA` is the opening area in m² — compute it from the diameter yourself. - **No storage routing.** This is a static stage–discharge relationship, not a flood-routing result. It does not tell you how long the reservoir takes to draw down. - The curve's kinks are real: they are where each outlet activates.",
        } },
    ],
    seeAlso: ["reservoir_storage_analyzer"],
  },
  {
    slug: "reservoir_storage_analyzer",
    group: "kgairrigationtools",
    name: "Reservoir Storage Analyzer",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:reservoir_storage_analyzer",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window. Replaces Storage Capacity Curve (kga:storage_capacity_curve)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ Reservoir Storage Analyzer",
    summary: {
      km: "គណនាបរិមាណទឹកដែលអាងស្តុកទឹកអាចផ្ទុកបាននៅគ្រប់កម្រិតទឹក ពី DEM របស់វា ព្រមទាំងផែនទីលិចទឹក និងផែនទីជម្រៅ។",
      en: "Works out how much water a reservoir holds at each water level, from its DEM — with inundation maps, a volume-to-level lookup and depth rasters.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Builds the **elevation–area–volume** table, draws the elevation–volume and elevation–area curves, and goes on from there to inundation maps, a volume-to-level lookup, depth rasters, and a way to make a DEM from contours." } },
      { type: "paragraph", text: { km: "", en: "All calculation is in metres, square metres and cubic metres. The saved table carries the volume in m³, 1,000 m³ and million m³, so the same file serves a design report and a map label." } },
      { type: "subheading", text: { km: "", en: "How the volume is counted" } },
      { type: "list", items: [
        { km: "", en: "**Flooded area** is the set of cells below the water level that are connected to the **lowest cell** of the DEM. Isolated pits are not counted." },
        { km: "", en: "**Natural ground:** volume = Σ (water level − ground) over the flooded area × cell area." },
        { km: "", en: "**Excavated:** the bed is `min(ground, base level)`; volume = Σ max(level − bed, 0) × cell area; soil removed = Σ max(ground − base level, 0) × cell area." },
      ] },
      { type: "subheading", text: { km: "", en: "The tabs" } },
      { type: "list", items: [
        { km: "", en: "**Curves** and **Table** — the result of *Calculate Storage*: the two curves (whole-metre levels circled) and the table behind them. Save the table as CSV and the curve as PNG, PDF or SVG." },
        { km: "", en: "**Inundation Maps** — one panel per water level on a hillshade, with depth shading, the flooded edge, background contours, scale bar, north arrow, a summary table and a footer. A4–A0, Letter, Tabloid or fit-to-content; PNG, PDF, TIFF, JPEG or SVG." },
        { km: "", en: "**Volume Lookup** — the water level (and area) for volumes you give, read from the last calculation or a CSV this tool saved. Interpolated linearly between rows." },
        { km: "", en: "**Export Rasters** — one GeoTIFF per level, clipped to the flooded area: water depth and/or bottom elevation. Summing depth × cell area reproduces the table's volume, which makes them useful for checking in other software." },
        { km: "", en: "**Contours to DEM** — interpolates a DEM from elevation contour lines (linear, cubic, inverse distance or nearest), optionally clipped to a polygon in any CRS." },
        { km: "", en: "**Log** — what each job did, and any warning." },
      ] },
    ],
    parameters: [
      {
        title: { km: "", en: "Input and settings" },
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The left panel holds the inputs shared by every tab; the tabs on the right use them." } },
        ],
        rows: [
          { name: "DEM", type: "Raster layer", default: "—", description: { km: "", en: "Elevation raster in a projected CRS in metres. **A geographic (degree) DEM is refused.** The panel shows its size, cell size, CRS and elevation range." } },
          { name: "Boundary", type: "Polygon layer, optional", default: "—", description: { km: "", en: "Only cells inside it are used." } },
          { name: "Split line / Keep", type: "Line layer, optional", default: "—", description: { km: "", en: "A line (for example a dam axis) that must cross the whole DEM. Keep the **west, east, north or south** side of it. A line that does not cut the DEM in two is ignored with a warning." } },
          { name: "From / To / Step", type: "Numbers", default: "DEM range", description: { km: "", en: "Water levels to tabulate. **DEM range** fills From and To from the lowest and highest cell." } },
          { name: "Or levels", type: "Text", default: "—", description: { km: "", en: "A list such as `40, 41.5, 43.8` used instead of From/To/Step." } },
          { name: "Surface", type: "Combo box", default: "Natural ground", description: { km: "", en: "**Natural ground** fills the DEM as it is. **Excavated to base level** lowers the ground inside the flooded area to the **base level** first, and reports the soil removed separately." } },
          { name: "Smoothing", type: "Boolean", default: "off", description: { km: "", en: "Gaussian smoothing before the calculation. It changes volumes slightly, so **leave it off for reported figures**." } },
          { name: "Volume unit", type: "Combo box", default: "million m³", description: { km: "", en: "Unit on the curve and map labels. The CSV always has all three." } },
          { name: "Folder", type: "Folder", default: "—", description: { km: "", en: "Where the table and image are saved after **Calculate Storage**." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Irrigation Tools > Reservoir Storage Analyzer**." },
        { km: "", en: "Choose the DEM — projected, in metres — and a boundary or split line if the DEM covers more than the reservoir." },
        { km: "", en: "Press **DEM range** to fill the levels, or type your own in *Or levels*." },
        { km: "", en: "Choose the surface: natural ground, or excavated to a base level." },
        { km: "", en: "Pick an output folder and press **Calculate Storage**. Press **Stop** to end the job at the next step." },
        { km: "", en: "Work through the tabs from there — maps, lookup, rasters — all using the same inputs." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "Per DEM in the output folder: `{name}_storage.csv` and `{name}_storage_curve.png`. Maps default to `{name}_inundation.png`; rasters go to a `rasters` folder." },
        { km: "", en: "CSV columns: `Water_Level_m`, `Area_m2`, `Area_ha`, `Area_km2`, `Volume_m3`, `Volume_1000m3`, `Volume_Mm3` — plus `Natural_Vol_m3` and `Excavated_Soil_m3` with the excavated surface." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The lowest cell decides which water body is counted.** A single stray low pixel outside the reservoir — a DEM artefact, a borrow pit — takes over, and the reservoir itself then reads as empty. Use a boundary polygon or split line so the lowest cell is inside the reservoir." },
        { km: "", en: "A DEM with an undeclared NoData value (such as `-9999`) is flagged in the Log when the lowest cell is below −500 m. Set the NoData value first." },
        { km: "", en: "The whole DEM is read into memory as 64-bit numbers: a very large raster needs a boundary or a coarser copy." },
        { km: "", en: "**A DEM made from contours is a model.** Interpolating between lines flattens hill tops and pits, and the area outside the outermost contour takes the nearest contour's height — clip it to the reservoir." },
        { km: "", en: "Levels cost one pass over the DEM each; more than 2,000 levels are refused." },
      ] },
      { type: "subheading", text: { km: "", en: "Migrating from Storage Capacity Curve" } },
      { type: "paragraph", text: { km: "", en: "The old tool took several DEMs in one run and wrote one chart per DEM with fixed axis settings. This one works on one DEM at a time and adds the surface option, maps, lookup and rasters. **The CSV columns changed:** `Elevation_m` is now `Water_Level_m`, `Volume_1000m3` is unchanged in meaning, and `Area_ha` is the flooded area (connected to the lowest cell) rather than every cell under the level." } },
    ],
    seeAlso: ["reservoir_rating_curve", "generate_contour_roi", "csvtodemcontour"],
  },
  {
    slug: "highest_point_per_block",
    group: "kgairrigationtools",
    name: "Paddy Irrigation Tools",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:highest_point_per_block",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ Paddy Irrigation Tools",
    summary: {
      km: "ពីរជំហានក្នុងផ្ទាំងតែមួយ៖ រកទីខ្ពស់ និងទាបនៃបំណែកស្រែនីមួយៗពី DEM រួចពិនិត្យថាតើអាចបញ្ចូលទឹកតាមទំនាញបានឬទេ។",
      en: "Two steps in one window: the high and low ground of every paddy block from a DEM, then a gravity command check from field to reservoir.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "**Step 1 — High points** finds the high (and low) ground of every paddy block from a DEM. **Step 2 — Gravity command** then asks whether every block can be irrigated by gravity: Field → TC → SC → MC → Reservoir." } },
      { type: "paragraph", text: { km: "", en: "After a run in step 1, **Next: Step 2** opens step 2 with the same block layer and the new `HighestPoints` layer filled in. Step 2 also works on its own with any block layer and any point layer — one point per block, with an elevation field." } },
      { type: "subheading", text: { km: "", en: "Step 1 — High points" } },
      { type: "paragraph", text: { km: "", en: "For every feature of the ticked block layers (polygons **or** lines) the tool finds the highest cell of a DEM and adds one point layer, `HighestPoints`, with `src_layer`, `block_fid`, the block attributes you tick, `elev`, `X`, `Y`, `Lon`, `Lat` and `Top_cells` — plus `dist_along` for lines. Tick **Lowest point** as well to get a blue `LowestPoints` layer." } },
      { type: "list", items: [
        { km: "", en: "**Polygons** count the cells whose centre is inside the polygon, like QGIS zonal statistics. **Lines** count every cell the line passes through, and the point is placed *on* the line." },
        { km: "", en: "**Combine features with the same value of** gives one point per group — per BM name, say — instead of one per feature." },
        { km: "", en: "`Top_cells` above 1 means a flat top: several cells share the highest value." },
      ] },
      { type: "subheading", text: { km: "", en: "Method (polygon blocks)" } },
      { type: "paragraph", text: { km: "", en: "For gravity irrigation design the raw highest cell is often a tree crown, hut or dike. The **High / low point method** list chooses what \"highest\" means:" } },
      { type: "list", items: [
        { km: "", en: "**Top of general slope** (default) — the DEM inside each block is ground-filtered (a morphological opening removes trees, dikes and huts narrower than the *Ground filter* window), then smoothed, so the point marks the high side of the field rather than a spike. `elev` is the **ground** elevation there, so the water level needed is never under-estimated; `Smooth_z` and `Raw_cell` are kept for comparison." },
        { km: "", en: "**Highest ground** — ground filter only." },
        { km: "", en: "**Highest DEM cell** — the raw cell, trees and dikes included. Lines always use this." },
      ] },
      { type: "paragraph", text: { km: "", en: "The two terrain methods also give each block a robust plane fit of its ground: `Slope_pct`, `Fall_m`, `Aspect` / `Flow_dir` and `Fit_R2`. **A block with a fall under 5 cm is almost level and its high/low point is weakly defined** — the log says so." } },
      { type: "subheading", text: { km: "", en: "Step 2 — Gravity command" } },
      { type: "steps", items: [
        { km: "", en: "**Field level** each block needs: `FSL_req` = top of block + field water depth." },
        { km: "", en: "**Plot-to-plot supply**: neighbouring blocks (dikes and gaps up to the tolerance are bridged). Block A can feed block B when `top_A − top_B` is at least the spill loss. *Head* blocks have no neighbour high enough and need a canal turnout." },
        { km: "", en: "**Turnouts**: the nearest point on a canal within the search distance. The canal water level needed there is `FSL_req` + turnout loss + field-channel gradient × field-channel length." },
        { km: "", en: "**Service**: blocks are processed from high to low, each served directly from a canal or plot-to-plot from a served higher neighbour." },
        { km: "", en: "**Canal levels.** *DESIGN* needs no water levels: it gives the level each canal needs at its upstream end (TC → SC → MC) and the reservoir level needed, naming the block that controls each canal. *CHECK* compares your canal water levels with the need at every turnout, junction and the reservoir." },
        { km: "", en: "With a DEM, the ground along each canal shows how far the design level is above (fill) or below (cut) the ground." },
      ] },
    ],
    parameters: [
      {
        title: { km: "", en: "Step 1 — High points" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "DEM raster / Band", type: "Raster layer", default: "—", description: { km: "", en: "The elevation raster. A DEM in degrees works but warns; reproject it to a metre CRS first." } },
          { name: "Block layers", type: "Layer list", default: "—", description: { km: "", en: "Any number of polygon and line layers, ticked in a list. *Selected features only* uses the selection of layers that have one." } },
          { name: "Zones", type: "Combo box", default: "Each feature separately", description: { km: "", en: "Or *Combine features with the same value of* a field." } },
          { name: "Clean blocks", type: "Options", default: "repair only", description: { km: "", en: "Works on a copy; your layers are not changed. Optionally snap boundaries, remove small overlaps (the shared area stays with the larger block) and fill small gaps. **Rings you drew inside a block — trees, ponds, houses — are kept as excluded areas and never filled**, so the point is searched only in the remaining area. A `Topology_issues` layer lists what was found or fixed." } },
          { name: "Point attributes", type: "Field list", default: "—", description: { km: "", en: "Fields copied from the block that holds the peak." } },
          { name: "High / low point method", type: "Combo box", default: "Top of general slope", description: { km: "", en: "See *Method* above. *Ground filter* is the width of the widest tree crown or dike to remove; *Smoothing* (10–30 m) sets how \"general\" the slope is. Needs a DEM in metres." } },
          { name: "Analysis resolution", type: "Combo box", default: "Native", description: { km: "", en: "Native, 0.5 m, 1 m, 30 m or custom. When coarsening choose *Maximum* (keeps peaks, recommended for the raw method), *Average* or *Nearest*; the terrain methods always use Average. With Maximum the point is traced back to the exact cell of the original DEM." } },
          { name: "Small-block safety", type: "Boolean", default: "—", description: { km: "", en: "Raw method only. Splits cells (values unchanged) for blocks only a few cells wide, so they still get cells." } },
          { name: "Inner buffer", type: "Number", default: "—", description: { km: "", en: "Shrinks polygons to ignore dikes, roads and canal banks on their edges; 2–5 m is typical. Ignored for lines." } },
          { name: "Find", type: "Check boxes", default: "Highest point", description: { km: "", en: "Highest point (red ▲) and/or lowest point (blue ▼)." } },
          { name: "Create", type: "Combo box", default: "Point layers only", description: { km: "", en: "Or also write `Higher_elevation`, `Elev_Min`, `Elev_Mean`, `Elev_Cells`, `MaxElev_X/Y` (and the Lowest equivalents) into the block layers, or into new copies." } },
          { name: "Save results to file", type: "Check boxes", default: "off", description: { km: "", en: "GeoPackage, Shapefile (names shortened to 10 characters) and/or Excel. Existing files are never overwritten: `_1`, `_2` … is added." } },
        ],
      },
      {
        title: { km: "", en: "Step 2 — Gravity command tabs" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Blocks", type: "Tab", default: "—", description: { km: "", en: "Block layer and name field, high-point layer and elevation field, optional DEM re-sampling, point-to-block tolerance." } },
          { name: "Field", type: "Tab", default: "—", description: { km: "", en: "Field water depth, plot-to-plot spill loss, neighbour gap tolerance, minimum shared border, prefer plot-to-plot supply." } },
          { name: "Canals", type: "Tab", default: "—", description: { km: "", en: "Canal layer, name and level field (MC / SC / TC or 1 / 2 / 3), flow direction, junction tolerance, turnout search distance, losses and gradients, DESIGN / CHECK mode." } },
          { name: "Reservoir", type: "Tab", default: "—", description: { km: "", en: "Full supply level check and an intake point that orients the main canal." } },
          { name: "Save", type: "Tab", default: "—", description: { km: "", en: "Save every result layer to a GeoPackage, with an HTML report beside it." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Irrigation Tools > Paddy Irrigation Tools**." },
        { km: "", en: "On **Step 1**, pick the DEM and tick the block layers." },
        { km: "", en: "Choose the high/low point method — leave it on *Top of general slope* unless you want the raw cell — and set the ground filter to the width of the widest tree crown or dike." },
        { km: "", en: "Tick a save format if you want the results kept; the layers are temporary otherwise." },
        { km: "", en: "Run it, then press **Next: Step 2** to carry the blocks and high points across." },
        { km: "", en: "On **Step 2**, add the canals and reservoir, choose DESIGN or CHECK, and read the report." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "Step 1: `HighestPoints` and optionally `LowestPoints`, plus `Topology_issues` when block cleaning found anything." },
        { km: "", en: "Step 2: `Command_Blocks` (Top_z, FSL_req, Head, Service, Status, Canal, Req_WL, Canal_WL, Margin_m, Supplier …), `Command_Links` (plot-to-plot arrows), `Turnouts`, `Field_channels` and `Canal_Command` (canals drawn upstream → downstream with the levels, critical block, margins and fill / cut)." },
        { km: "", en: "A plain-language report you can save as HTML." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "Block layers in edit mode cannot be written to: save and stop editing, or tick *Create new output layers*." },
        { km: "", en: "Run time grows with the number of blocks and the DEM resolution; use a coarser analysis resolution for a first pass." },
        { km: "", en: "Block cleaning needs a DEM in metres and is skipped for a DEM in degrees." },
        { km: "", en: "**The result layers are temporary until you tick a save format.**" },
        { km: "", en: "In step 2 you may move high points by hand — tick *Re-sample elevation from the DEM* so moved points get a fresh ground elevation." },
      ] },
    ],
    seeAlso: ["generate_contour_roi", "reservoir_storage_analyzer", "updatexyfields"],
  },
  {
    slug: "generate_contour_roi",
    group: "kgairrigationtools",
    name: "Generate Contour for ROI",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:generate_contour_roi",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window and an internet connection" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ Generate Contour for ROI",
    summary: {
      km: "ទាញយក Copernicus DEM ឥតគិតថ្លៃសម្រាប់តំបន់មួយ រួចគូសបន្ទាត់កម្ពស់ ព្រមទាំងដាក់រចនាបថ និងស្លាករួចស្រេច។",
      en: "Download the free Copernicus DEM for an area and contour it, styled and labelled.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Makes contour lines for any area of interest in one step. The tool downloads the free **Copernicus DEM** (30 m or 90 m, from the AWS open-data bucket — no account and no API key), cuts it to the area, traces the contours at the chosen interval and adds them to the map: dark and thick for the main contours, thin and grey for the rest, with elevation labels." } },
      { type: "paragraph", text: { km: "", en: "The job runs on a background task, so QGIS stays usable. **One progress bar covers all of it** — reading and cutting the DEM, tracing the lines, marking main and sub contours and, if ticked, smoothing." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "DEM", type: "Combo box", default: "Copernicus GLO-30", description: { km: "", en: "GLO-30 (about 30 m) or GLO-90 (about 90 m), or **Local DEM** to use one you already have: a raster layer from the project or any GDAL raster on disk. It may be in any CRS, but must have one and be north-up." } },
          { name: "Area", type: "Combo box", default: "Current map extent", description: { km: "", en: "**Whole DEM** (local DEM only), **Current map extent**, **Extent of a layer**, **Boundary of a polygon layer** (cut to the shape; optional *Selected features only*), or **Draw a rectangle or polygon** on the map." } },
          { name: "Interval", type: "Number 0.1–5000 m", default: "—", description: { km: "", en: "Vertical distance between contours. Lines fall on whole multiples of it (0, 10, 20 … for 10 m)." } },
          { name: "Main contour", type: "Number 2–20", default: "—", description: { km: "", en: "Every Nth contour is a main contour." } },
          { name: "Smooth the lines", type: "Boolean", default: "off", description: { km: "", en: "Rounds off the pixel steps (one round of corner cutting). Better looking, about twice the vertices, and the lines move by less than a pixel." } },
          { name: "Symbolize", type: "Boolean", default: "on", description: { km: "", en: "Main contours dark and thick (0.5 mm), sub contours grey and thin (0.15 mm). Untick for QGIS's default line style." } },
          { name: "Labels", type: "Combo box", default: "Main contours only", description: { km: "", en: "**Main contours only**, **All contours**, or **No labels**." } },
          { name: "Terrain surfaces", type: "Check boxes", default: "off", description: { km: "", en: "Optionally derive a **Hillshade** (lit from the north-west), **Slope** (degrees) and **Aspect** (0–360° clockwise from north) from the DEM." } },
          { name: "Add random spot height", type: "Boolean + number", default: "off", description: { km: "", en: "Scatter spot heights over the area, spread evenly rather than clumped. Each is a small black dot with its height beside it, as on a topographic map, saved as the `spot_heights` layer." } },
          { name: "Output CRS", type: "Combo box", default: "Current project CRS", description: { km: "", en: "Or **Same as the DEM** (no reprojection) or a **Specified CRS**. The DEM is published in WGS 84; for any other CRS it is warped (bilinear) and the contours are made in that CRS." } },
          { name: "Output folder", type: "Folder", default: "temporary", description: { km: "", en: "Empty means a temporary folder, which QGIS deletes when it closes." } },
          { name: "Name", type: "Text", default: "—", description: { km: "", en: "Base name: `<name>_DEM.tif` and `<name>_contours.gpkg`." } },
          { name: "Also add the DEM to the map", type: "Boolean", default: "—", description: { km: "", en: "Adds the clipped DEM with a pale elevation tint, below the vector layers." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Irrigation Tools > Generate Contour for ROI**." },
        { km: "", en: "Choose the area. For a drawn area, click *Draw rectangle* or *Draw polygon* and draw on the map." },
        { km: "", en: "Set the interval, the main-contour step, and the smoothing, symbology and label options." },
        { km: "", en: "Pick an output folder, or leave it empty for a temporary one." },
        { km: "", en: "Click **Generate contours**. Click **Stop** to cancel; nothing is added to the map." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "`<name>_contours.gpkg` — layer `contours`, in the output CRS, with `ID`, `ELEV` (metres) and `TYPE` (`main` or `sub`)." },
        { km: "", en: "`<name>_DEM.tif` — the clipped DEM, compressed, in the output CRS. Outside a drawn shape or layer boundary the DEM is NoData." },
        { km: "", en: "`<name>_hillshade.tif`, `<name>_slope.tif`, `<name>_aspect.tif` — only the ones ticked, NoData −9999 (hillshade is Byte). Slope and aspect use the Horn method; for a DEM in degrees the horizontal scale is worked out from the latitude so the values match a projected CRS." },
        { km: "", en: "Layers made from Copernicus data carry its attribution in their metadata." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Large areas.** Above about 25 million DEM pixels (roughly 150 km square at 30 m) the tool asks before it starts, with a sterner warning above 150 million, and also when the output drive is short of space. A temporary output adds to the warning because it lands on the system drive. One request is limited to 700 million pixels." },
        { km: "", en: "**Too many levels.** More than 20,000 levels — an interval of 0.1 m across a mountain range — is refused; the DEM is kept and the message says where." },
        { km: "", en: "The Copernicus DEM is a **surface** model: it follows tree tops and buildings, not bare ground. Elevations are metres above the EGM2008 geoid." },
        { km: "", en: "Attribution is required: Copernicus DEM © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the European Union and ESA." },
        { km: "", en: "Open sea has no tiles; an area entirely over open sea is reported as having nothing to contour." },
      ] },
    ],
    seeAlso: ["generate_stream_roi", "csvtodemcontour", "dem_legend_bar"],
  },
  {
    slug: "generate_stream_roi",
    group: "kgairrigationtools",
    name: "Generate River or Stream for ROI",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:generate_stream_roi",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window and an internet connection" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ Generate River or Stream for ROI",
    summary: {
      km: "ទាញយក Copernicus DEM ឥតគិតថ្លៃសម្រាប់តំបន់មួយ រួចស្រង់បណ្តាញទន្លេ និងអូរ ដោយមានចំណាត់ថ្នាក់ និងការពិនិត្យ។",
      en: "Download the free Copernicus DEM for an area and extract its river and stream network, graded and checked.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Downloads the free **Copernicus DEM**, cuts it to the area, fills its depressions, routes the water downhill, and draws a stream wherever enough ground drains through a cell. Each segment is numbered (Strahler order), measured, and **graded for confidence**; an optional comparison with OpenStreetMap or your own layer finds streams that only one network has." } },
      { type: "subheading", text: { km: "", en: "How much stream? (Detail)" } },
      { type: "paragraph", text: { km: "", en: "A cell becomes stream when at least a certain area of ground drains through it. That one number controls the whole network." } },
      { type: "table", head: [{ km: "", en: "Detail" }, { km: "", en: "Contributing area" }, { km: "", en: "Use it for" }], rows: [
        [{ km: "", en: "**Major rivers only**" }, { km: "", en: "25 km²" }, { km: "", en: "The skeleton of the drainage. Needs a large area; below about 100 km² there may be nothing this big." }],
        [{ km: "", en: "**Main streams** (default)" }, { km: "", en: "5 km²" }, { km: "", en: "The streams a map would normally show." }],
        [{ km: "", en: "**Detailed network**" }, { km: "", en: "1 km²" }, { km: "", en: "Adds smaller tributaries; good for a catchment of tens of km²." }],
        [{ km: "", en: "**Very detailed**" }, { km: "", en: "0.2 km²" }, { km: "", en: "Every gully that gathers water. Includes channels dry most of the year, and more false streams on flat ground." }],
        [{ km: "", en: "**Custom**" }, { km: "", en: "0.01–5000 km²" }, { km: "", en: "Anything in between." }],
        [{ km: "", en: "**Match a drainage density**" }, { km: "", en: "0.1–5 km/km²" }, { km: "", en: "Lets the tool pick the area. Natural catchments run roughly 0.5 (sparse) to 2 (dense)." }],
      ] },
      { type: "paragraph", text: { km: "", en: "At 30 m, 1 km² is about 1,100 cells. A threshold below 3 cells is raised to 3, and one that would make a quarter of the area \"stream\" is refused as a typo." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "DEM", type: "Combo box", default: "Copernicus GLO-30", description: { km: "", en: "GLO-30 (the one to use), GLO-90 (for a very large area), or **Local DEM**: a raster layer or a DEM file. A local DEM is read from band 1 as metres, must cover the area, and needs no internet. No Copernicus attribution is added to its layers." } },
          { name: "Area", type: "Combo box", default: "Current map extent", description: { km: "", en: "**Current map extent**, **Extent of a layer**, **Boundary of a polygon layer** (cut to the shape; optional *Selected features only*), or **Draw a rectangle or polygon** on the map." } },
          { name: "Detail", type: "Combo box", default: "Main streams", description: { km: "", en: "See the table above." } },
          { name: "Include upstream area", type: "Combo box", default: "Off", description: { km: "", en: "Off, 2, 5 or 10 km. Streams that rise outside the area are otherwise cut short at its edge and look smaller than they are. The saved DEM then includes the margin." } },
          { name: "Smooth the lines", type: "Boolean", default: "off", description: { km: "", en: "Rounds off the cell-by-cell steps. `LENGTH_M` is measured along the cell path **before** smoothing." } },
          { name: "Symbology", type: "Combo box", default: "By stream order", description: { km: "", en: "**By stream order** (blue, wider = higher order) or **By check confidence** (green High, amber Medium, red Low)." } },
          { name: "Compare with", type: "Combo box", default: "None", description: { km: "", en: "**OpenStreetMap rivers and streams** (needs internet) or **A line layer of my own** (optional *Selected features only*)." } },
          { name: "Match distance", type: "Number", default: "about three DEM cells", description: { km: "", en: "How close the other network must be for a stretch to count as matched — 90 m at 30 m." } },
          { name: "Output CRS", type: "Combo box", default: "UTM zone of the area", description: { km: "", en: "Default keeps streams, slopes and catchment areas measured in metres. Or **Current project CRS**, **WGS 84 as published**, or a **Specified CRS**." } },
          { name: "Output folder", type: "Folder", default: "temporary", description: { km: "", en: "Empty means a temporary folder, which QGIS deletes when it closes." } },
          { name: "Name", type: "Text", default: "—", description: { km: "", en: "Base name: `<name>_DEM.tif`, `<name>_streams.gpkg`, `<name>_report.txt`, and optionally `<name>_flow_accumulation.tif`." } },
          { name: "Also save the flow accumulation raster", type: "Boolean", default: "off", description: { km: "", en: "Contributing area in km² for every cell. Useful to judge the threshold or pick catchment outlets. Added to the map switched off." } },
        ],
      },
    ],
    outputs: [
      { name: "STREAM_ID, NEXT_ID", type: "Integer", description: { km: "", en: "The segment, and the one it flows into (0 at an outlet)." } },
      { name: "STRAHLER", type: "Integer", description: { km: "", en: "Strahler order: 1 for a source; two equal orders meeting make the next one up." } },
      { name: "LENGTH_M", type: "Number", description: { km: "", en: "Length along the cell path, before smoothing." } },
      { name: "UP_KM2", type: "Number", description: { km: "", en: "Ground draining to the end of the segment, in km²." } },
      { name: "ELEV_UP, ELEV_DN", type: "Number", description: { km: "", en: "Elevation at the start and end, from the depression-filled DEM." } },
      { name: "SLOPE_PCT", type: "Number", description: { km: "", en: "Fall along the segment, in percent." } },
      { name: "FILL_M", type: "Number", description: { km: "", en: "The most water the DEM had to pour into a depression to carry this stream across it." } },
      { name: "RELIEF_M", type: "Number", description: { km: "", en: "How far the stream sits below the ground around it (7 × 7 cells)." } },
      { name: "CONF, FLAGS", type: "Text", description: { km: "", en: "Confidence grade and the reasons behind it." } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Irrigation Tools > Generate River or Stream for ROI**." },
        { km: "", en: "Choose the area. For a drawn area, click *Draw rectangle* or *Draw polygon* and draw on the map." },
        { km: "", en: "Pick the detail level. Optionally add an upstream margin and a reference to compare with." },
        { km: "", en: "Pick an output folder, or leave it empty for a temporary one." },
        { km: "", en: "Click **Generate streams**. Click **Stop** to cancel; nothing is added to the map." },
        { km: "", en: "Read the report that opens when the run finishes, also under **Last report**." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "`<name>_streams.gpkg` — layer `streams`, one line per segment between junctions, with the fields listed above." },
        { km: "", en: "A `stream_check` layer when a reference was used and the networks differ: lines of `KIND` `extra` (in the DEM, not the reference) and `missed` (in the reference, not the DEM)." },
        { km: "", en: "`<name>_DEM.tif` and `<name>_report.txt`." },
      ] },
      { type: "subheading", text: { km: "", en: "Is the result any good? (Checks)" } },
      { type: "paragraph", text: { km: "", en: "A network traced from a DEM is a model of where water runs, not a survey of where streams are. **Internal checks** run on every job: `FLAT` (falls under 0.1 %), `FILLED` (crosses a depression filled by 8 m or more), `NOVALLEY` (sits less than 1 m below its surroundings) and `EDGE` (starts at the edge of the data). Two or more of the first three give **Low** confidence, one gives **Medium**, none **High**." } },
      { type: "note", tone: "info", text: { km: "", en: "**Read the numbers with care.** A reference can be incomplete — OpenStreetMap often is in the countryside — and a DEM stream can be a real gully that carries water only after rain. Agreement normally rises with stream size. **Not matching does not prove a stream wrong.**" } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Large areas.** Routing needs about 110 bytes of memory per pixel. Above about 6 million pixels (roughly 75 km square at 30 m) the tool asks before it starts, with a sterner warning above 30 million. **Above 100 million pixels it refuses** — use a smaller area or the 90 m DEM." },
        { km: "", en: "**Depressions are filled.** Every cell drains out of the area: a lake or a real closed basin is routed across, not stopped. Streams therefore cross reservoirs; look at the `FILLED` flag." },
        { km: "", en: "**Edges.** Water leaves the area at its edge, and a cut-to-shape area treats the shape's outline the same way. Streams near the edge may be missing upstream length unless an upstream margin is used." },
        { km: "", en: "The Copernicus DEM is a surface model, so a stream under dense canopy or through a built-up area can be displaced." },
        { km: "", en: "Network use: the Copernicus DEM bucket on Amazon S3, and — only with the OpenStreetMap comparison — the Overpass servers. Only the area's bounding box is sent." },
        { km: "", en: "Attribution is required: Copernicus DEM © DLR e.V. and © Airbus Defence and Space GmbH, under COPERNICUS by the European Union and ESA. OpenStreetMap data is © OpenStreetMap contributors (ODbL)." },
      ] },
    ],
    seeAlso: ["generate_contour_roi", "reservoir_storage_analyzer"],
  },
  {
    slug: "multipart_line_repair",
    group: "kgairrigationtools",
    name: "Multipart Line Repair",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:multipart_line_repair",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog \u2014 modeless, needs the QGIS window; no internet" },
    processingPath: "Processing \u25b8 Toolbox \u25b8 KGA Toolbox \u25b8 KGA Irrigation Tools \u25b8 Multipart Line Repair",
    summary: {
      km: "\u179a\u1780 \u1796\u1793\u17d2\u1799\u179b\u17cb \u1793\u17b7\u1784\u1787\u17bd\u179f\u1787\u17bb\u179b features \u1794\u1793\u17d2\u1791\u17b6\u178f\u17cb\u1796\u17a0\u17bb\u1795\u17d2\u1793\u17c2\u1780 \u178a\u17c2\u179b\u1792\u17d2\u179c\u17be\u17b2\u17d2\u1799 Merge Lines \u1798\u17b7\u1793\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a\u17d4",
      en: "Finds, explains and repairs multipart line features \u2014 the ones that make Merge Lines fail.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Canals and drains that were edited many times with Split, Trim/Extend or Reshape often end up as one feature made of several parts that do not touch *exactly*, so *Merge Lines* fails. The tool lists every true multipart feature **with the reason it is multipart**, then joins what can be joined and separates what cannot." } },
      { type: "subheading", text: { km: "", en: "What the repair does, in order" } },
      { type: "steps", items: [
        { km: "", en: "Remove duplicate vertices." },
        { km: "", en: "Drop parts shorter than **Min part length** \u2014 the slivers left by cutting." },
        { km: "", en: "Snap part end-points closer than **Snap tolerance** to their common average." },
        { km: "", en: "Dissolve overlaps (union) and merge the lines." },
      ] },
      { type: "paragraph", text: { km: "", en: "If one part is left the feature is **fixed** \u2014 same feature, same attributes. If several remain they are really separate (branches, distant pieces) and become single features with the attributes copied." } },
      { type: "note", tone: "info", text: { km: "", en: "The work runs on the GUI thread with a progress bar; **QGIS is busy until it finishes.**" } },
    ],
    parameters: [
      {
        title: { km: "", en: "Input line layers" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Layer list", type: "", default: "", description: { km: "", en: "Every line layer in the project, shown as `group / layer`. Tick the ones to check or repair. Visible layers start ticked." } },
          { name: "All / None / Visible / Refresh", type: "", default: "", description: { km: "", en: "Tick all, untick all, tick only the visible layers, or re-read the project's layers." } },
        ],
      },
      {
        title: { km: "", en: "Repair settings \u2014 used by both Check and Repair" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Snap tolerance", type: "", default: "`0.5`", description: { km: "", en: "Part end-points closer than this are snapped together. **Layer CRS units.**" } },
          { name: "Min part length", type: "", default: "`0.1`", description: { km: "", en: "Parts shorter than this are deleted; 0 keeps all. Layer CRS units." } },
          { name: "Remove duplicate vertices", type: "", default: "on", description: { km: "", en: "Step 1 of the repair." } },
          { name: "Dissolve overlapping parts (union)", type: "", default: "on", description: { km: "", en: "Step 4 of the repair; without it the parts are only collected and merged where they already touch." } },
        ],
      },
      {
        title: { km: "", en: "Check tab" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Check multipart", type: "", default: "", description: { km: "", en: "Scans the ticked layers and fills the two tables." } },
          { name: "Layer table", type: "", default: "", description: { km: "", en: "Per layer: features, multi-type, true multipart, *Fixable (\u21921)*, *Separate*, null/empty, maximum parts. Double-click a row to list its features, select them and zoom to them." } },
          { name: "Feature table", type: "", default: "", description: { km: "", en: "Per multipart feature: ID, parts, shortest part, largest gap, **Cause**, parts after repair, result. Causes are *overlap*, *tiny part*, *touching*, *small gap* (within tolerance) and *gap > tolerance*." } },
        ],
      },
      {
        title: { km: "", en: "Output tab" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Format", type: "", default: "New GeoPackage \u2014 one file per layer", description: { km: "", en: "Also *one file for all layers*, *New Shapefile*, *Temporary layers*, or **Fix in place**." } },
          { name: "Output folder / GeoPackage name / Layer suffix", type: "", default: "`_fixed`", description: { km: "", en: "Where new files go, the single-file name, and the suffix added to each new layer's name." } },
          { name: "Only layers that have multipart features", type: "", default: "", description: { km: "", en: "Skip clean layers. Always on for in place." } },
          { name: "Copy symbology and labels", type: "", default: "", description: { km: "", en: "The new layer takes the original's renderer and labelling." } },
          { name: "Add output to map (below original)", type: "", default: "", description: { km: "", en: "Adds the new layer directly under the original in the layer tree." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Run the tool; the window stays open beside the map." },
        { km: "", en: "Tick the line layers." },
        { km: "", en: "On **Repair settings**, set the tolerance and minimum length. Use a projected CRS in metres." },
        { km: "", en: "On **Check**, press **Check multipart**. Read the *Cause* and *Result* columns; if a gap that should close says *gap > tolerance*, raise the tolerance and Check again." },
        { km: "", en: "On **Output**, choose where the result goes." },
        { km: "", en: "Press **Repair / Fix multipart**. The log lists what was done per layer." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "**New file or temporary layer:** one `<name><suffix>` layer per input, every feature single-part, with the original attributes. Joined features keep theirs; parts that stay apart become extra features with the attributes copied." },
        { km: "", en: "**Fix in place:** the original layers are put in edit mode as one undoable edit. Check the result, then Save Layer Edits or Roll Back. Split-off parts are added as new features with a fresh primary key." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "Tolerance and minimum length are in the **layer's units**. The tool warns about geographic (degree) layers." },
        { km: "", en: "**A tolerance larger than the real gaps can snap parts that should stay apart.** Check first and read the *Max gap* column." },
        { km: "", en: "Only line layers are listed. Curved geometries are converted to straight segments." },
        { km: "", en: "Snapping averages the end-points within tolerance of each other, so a chain of close end-points moves together." },
        { km: "", en: "A GeoPackage output drops the old `fid` field so split parts get new ids; an existing file asks before it is overwritten, and a file loaded in QGIS cannot be overwritten." },
        { km: "", en: "A layer filter hides features from the copy: an empty result usually means a filter or an unreadable source." },
        { km: "", en: "**The result is not topology-checked**: overlaps with *other* layers are untouched." },
      ] },
    ],
    seeAlso: ["planarizelines", "duplicate_checker", "checkoverlapsandgaps"],
  },
  {
    slug: "dem_dsm_inspector",
    group: "kgairrigationtools",
    name: "DEM / DSM Inspector",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:dem_dsm_inspector",
    interactive: true,
    toolType: { km: "", en: "Interactive dock panel, opened as a tab beside the Catalog panel \u2014 needs the QGIS window; no internet" },
    processingPath: "Processing \u25b8 Toolbox \u25b8 KGA Toolbox \u25b8 KGA Irrigation Tools \u25b8 DEM / DSM Inspector",
    summary: {
      km: "\u179c\u17b7\u1793\u17b7\u1785\u17d2\u1786\u17d0\u1799\u1790\u17b6\u178f\u17be raster \u1780\u1798\u17d2\u1796\u179f\u17cb\u1787\u17b6 DEM \u178a\u17b8\u1791\u1791\u17c1 \u1783\u17d2\u179b\u17b6\u1793\u17d2\u1799 \u17ac\u1787\u17b6 DSM \u178a\u17c2\u179b\u1798\u17b6\u1793\u17a2\u17b6\u1782\u17b6\u179a \u1793\u17b7\u1784\u179a\u17bb\u1780\u17d2\u1781\u1787\u17b6\u178a\u17be\u1798\u17d4",
      en: "Diagnoses whether an elevation raster is a bare-earth DEM/DTM or a DSM with buildings and vegetation on it.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Returns a classification \u2014 DEM, DSM, PARTIALLY FILTERED DEM or INCONCLUSIVE \u2014 a confidence score and a report with eight indicators. **Use it before trusting a DEM for canal levels, contours or flow routing.** It runs on a background task and can be cancelled." } },
      { type: "paragraph", text: { km: "", en: "Uses only NumPy and GDAL, which ship with QGIS; SciPy is optional and only speeds up blob labelling." } },
      { type: "subheading", text: { km: "", en: "The eight indicators" } },
      { type: "paragraph", text: { km: "", en: "Each scores from \u22121 (bare earth) to +1 (surface objects) with a reliability weight." } },
      { type: "table", head: [{ km: "", en: "#" }, { km: "", en: "Indicator" }, { km: "", en: "DSM signature" }], rows: [
        [{ km: "", en: "1" }, { km: "", en: "Metadata and naming" }, { km: "", en: "Known surface product or a \"DSM\" keyword" }],
        [{ km: "", en: "2" }, { km: "", en: "Local height above ground (flat terrain only)" }, { km: "", en: "Many pixels above the threshold" }],
        [{ km: "", en: "3" }, { km: "", en: "Slope variance / steep edges" }, { km: "", en: "Wall-like edges in flat areas" }],
        [{ km: "", en: "4" }, { km: "", en: "Roughness asymmetry" }, { km: "", en: "Skewed upward" }],
        [{ km: "", en: "5" }, { km: "", en: "Profile spikes" }, { km: "", en: "Frequent narrow spikes" }],
        [{ km: "", en: "6" }, { km: "", en: "Structure / vegetation footprints" }, { km: "", en: "Most raised blobs are sharp-edged" }],
        [{ km: "", en: "7" }, { km: "", en: "Pairwise nDSM *(optional)*" }, { km: "", en: "The DSM is higher wherever objects stand" }],
        [{ km: "", en: "8" }, { km: "", en: "Orthophoto land-cover height test *(optional)*" }, { km: "", en: "Trees and roofs stand metres above adjacent open ground; 0.5\u20132 m means a partially filtered DTM" }],
      ] },
      { type: "paragraph", text: { km: "", en: "**Confidence is capped by what the data can prove:** \u22642 m pixels 97%, \u22645 m 94%, \u226410 m 90%, \u226420 m 85%, \u226435 m 78%, coarser 65%. A DEM verdict rests on the *absence* of objects and is capped at 85%, or 95% with a clear orthophoto result. Below 62% the result is INCONCLUSIVE, and the report lists every cap applied." } },
    ],
    parameters: [
      {
        title: { km: "", en: "Panel pages" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Layer", type: "", default: "", description: { km: "", en: "The raster, its band and a summary (real resolution, matching orthophoto). Selecting a layer clears the previous result and probes in the background whether the data are native, interpolated or resampled." } },
          { name: "Orthophoto", type: "", default: "", description: { km: "", en: "An image of the same area and its bands (NIR optional), and a building-footprint layer." } },
          { name: "Compare", type: "", default: "", description: { km: "", en: "A second elevation layer of the same area." } },
          { name: "Filter", type: "", default: "", description: { km: "", en: "Multi-scale filter windows, presets, a live preview of the windows used, and the filtered-surface / dZ layers." } },
          { name: "Settings", type: "", default: "", description: { km: "", en: "Scope (whole layer or current map extent), elevation units, tile sampling, thresholds, block grid, **Restore defaults**." } },
          { name: "Summary, Indicators, Blocks, Filter chart, Log", type: "", default: "", description: { km: "", en: "The verdict card, the report, the eight indicators, the block grid (click a block on the map to open the Block Inspector), the filter chart and the run log. Greyed out until the selected layer has a result." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Irrigation Tools > DEM / DSM Inspector**; it docks as a tab beside the Catalog." },
        { km: "", en: "Pick the elevation raster on the **Layer** page." },
        { km: "", en: "Add an orthophoto or a second elevation layer if you have one \u2014 indicators 7 and 8 need them, and they are what separate a DSM of bare land from a DEM." },
        { km: "", en: "Set the scope on **Settings**; on a mountainous scene use the current map extent over a flatter area." },
        { km: "", en: "Press **Run** in the footer and read the verdict chip, then the Indicators page." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "Reports: HTML, PDF, JSON, CSV, or **Pop out** for a full-size report." },
        { km: "", en: "Optional map layers: object-height rasters, filtered surface and dZ, a colour-coded block grid, and a **Highest cells** point layer (red \u2265 4.5 m, orange 2\u20134.5 m, green < 2 m) to check against the orthophoto. Written to a temporary folder." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**A DSM of bare land \u2014 desert, fresh fields, water \u2014 is physically identical to a DEM**; no raster-only test separates them. Add an orthophoto or a second layer." },
        { km: "", en: "Only file-based GDAL rasters are supported, not WMS/WCS." },
        { km: "", en: "Mountainous scenes leave little flat context, so confidence drops; use the map-extent scope on a flatter area." },
        { km: "", en: "Resampled rasters \u2014 Copernicus 30 m warped to 0.5 m, say \u2014 are detected and read at their real resolution. Raised house plots and mounds are treated as ground." },
        { km: "", en: "Very large roofs or continuous canopy wider than the maximum object width are detected only at their edges; raise the width for dense forest." },
      ] },
    ],
    seeAlso: ["generate_contour_roi", "demelevationcorrectionandpointsamplereport", "reservoir_storage_analyzer"],
  },
  {
    slug: "callout_label_studio",
    group: "kgamapping",
    name: "Callout Label Studio",
    icon: "Map",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:callout_label_studio",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Mapping ▸ Callout Label Studio",
    summary: {
      km: "រចនាស្លាករបស់ស្រទាប់ជា callout — បន្ទាត់នាំ កែងបត់ ព្រួញកោង និងប៉េងប៉ោងសម្ដី — ពីផ្ទាំងតែមួយ។",
      en: "Style a layer's labels as callouts — leader lines, elbows, curved arrows and balloons — from one window.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Style a layer's labels as **callouts** from one window: simple leader lines, Manhattan elbows, curved arrows and speech balloons, with the map updating as you change a setting." } },
      { type: "paragraph", text: { km: "", en: "QGIS has all four callout types, but they live in the Layer Styling panel under Labels ▸ Callouts, with the text, buffer, placement and rendering settings in other tabs. This puts them behind one form, with quick styles to start from, an organized layout that stacks the labels so leader lines never cross, and a number key for small polygons." } },
    ],
    parameters: [
      {
        title: { km: "", en: "1 — Layer and label text" },
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the window." } },
        ],
        rows: [
          { name: "Layer", type: "Layer combo", default: "the active layer", description: { km: "", en: "Point, line or polygon layers." } },
          { name: "Label with", type: "Field / expression", default: "the layer's current label field", description: { km: "", en: "A field or an expression (ε button)." } },
          { name: "Only where", type: "Expression", default: "—", description: { km: "", en: "Only matching features are labelled, e.g. `\"pop\" > 100000`." } },
        ],
      },
      {
        title: { km: "", en: "2 — Quick styles" },
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "Click a thumbnail: **Classic Leader**, **Manhattan Elbow**, **Curved Arrow**, **Speech Balloon**, **Dark Badge**, **Imagery Overlay** (yellow line, dark halo), **Survey Dashed**, **Map Inset Box**. Your own presets appear as ★ thumbnails; right-click one to delete it." } },
        ],
        rows: [],
      },
      {
        title: { km: "", en: "3 — Fine-tune" },
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The **Callout**, **Text** and **Placement** tabs hold the line, balloon, font, buffer and placement settings. A callout draws whenever a label sits away from its feature. **Organized layout** (Placement tab) stacks labels in columns or rows beside the data, sorted and swapped so leader lines never cross." } },
        ],
        rows: [
          { name: "Distance from data, Space between labels", type: "Number", default: "—", description: { km: "", en: "In millimetres on screen, or on paper when fitted to a layout." } },
          { name: "Distribute evenly", type: "Boolean", default: "—", description: { km: "", en: "Even spacing along the whole side. Off keeps each label level with its feature." } },
          { name: "Vertical text in rows", type: "Boolean", default: "—", description: { km: "", en: "Compact rows for long names." } },
          { name: "Fit for", type: "Combo box", default: "Screen", description: { km: "", en: "Screen, or a print layout map: spacing is then calculated in real paper millimetres and follows the map frame's extent." } },
          { name: "Number key", type: "Tab", default: "—", description: { km: "", en: "Each feature gets a number or letter and the names are listed in key boxes outside the data. Ordering is reading order, west to east, north to south or alphabetical; the badge sits inside the feature or outside on a leader line; the key goes right, left, below or above in 1–12 columns. **Put key in Print Layout** sends it to a layout as grouped, editable text boxes." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select the layer in the Layers panel and run **KGA Mapping > Callout Label Studio**." },
        { km: "", en: "Choose the label field or expression." },
        { km: "", en: "Click a quick style." },
        { km: "", en: "Adjust the Callout, Text and Placement tabs; watch the map." },
        { km: "", en: "Press **Apply** to keep the result and leave the window open, or **OK** to apply and close." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The layer's labeling is replaced by a rule-based or single labeling with callouts enabled. Nothing is written to disk; the style is saved with the project." },
        { km: "", en: "**Export label style (.qml)** writes the labeling category only, to reuse on other layers via *Load Style*." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Cancel restores the original labels**, but only until Apply or OK. After that the change is yours to undo." },
        { km: "", en: "**Organized layout positions are fixed for the zoom they were computed at.** Zoom to print scale first, or use *Fit for ▸ Layout* so the spacing is taken from the layout's map frame." },
        { km: "", en: "**The number key is rule-based labelling on the layer itself**, so it prints in layouts and saves with the style." },
        { km: "", en: "Moving a label by hand with the Label toolbar's *Move Label* tool is compatible with callouts; *Move Callout* drags the feature end." },
        { km: "", en: "For polygons, *Polygon anchor ▸ Pole of inaccessibility* keeps the pointer well inside odd shapes." },
        { km: "", en: "The last style used is remembered between sessions, as are your presets." },
      ] },
    ],
    seeAlso: ["kga_layer_symbol", "add_grid"],
  },
  {
    slug: "kga_layer_symbol",
    group: "kgamapping",
    name: "KGA Layer Symbol",
    icon: "Map",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:kga_layer_symbol",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless, needs the QGIS window; also a tab in Layer Properties under Symbology" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Mapping ▸ KGA Layer Symbol",
    summary: {
      km: "វិចិត្រសាលនៃនិមិត្តសញ្ញា រូបតំណាង វាយនភាព និងជម្រាលពណ៌ ដែលរៀបចំរួចជាស្រេច សម្រាប់អនុវត្តលើស្រទាប់។",
      en: "A searchable gallery of ready-made symbols, icons, textures and colour ramps to apply to a layer.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "A searchable gallery of ready-made **symbols, icons, textures and colour ramps** organised by field — hydraulics, irrigation, agriculture, land cover, cadastre, transport, geology, remote sensing, tactical and more. Pick a thumbnail and apply it to a layer; **everything is built from native QGIS symbol layers, so the result stays editable in Layer Properties.**" } },
      { type: "paragraph", text: { km: "", en: "It opens two ways: as a stand-alone window from **KGA Mapping ▸ KGA Layer Symbol**, which follows the layer selected in the Layers panel; or as a tab in **Layer Properties**, listed right under Symbology for vector layers and after the Symbology page for rasters, pinned to the layer whose properties are open." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [
          { type: "paragraph", text: { km: "", en: "The algorithm takes no Processing parameters — running it opens the window." } },
        ],
        rows: [
          { name: "Search / field / kind", type: "Filters", default: "—", description: { km: "", en: "Narrow the gallery by text, by field and by Point, Line, Polygon or Ramp." } },
          { name: "Apply to Layer / Classes", type: "Button", default: "—", description: { km: "", en: "Styles the whole layer; in the window, legend classes selected in the Layers panel style just those classes. Categorized and graduated layers keep their classes." } },
          { name: "Current style page", type: "Panel", default: "—", description: { km: "", en: "Applying a symbol or DEM ramp opens this page inside the panel: fine-tune colours, sizes, spacing and angles live. **‹ Back to styles** returns to the gallery." } },
          { name: "Undo", type: "Button", default: "—", description: { km: "", en: "Puts back the style the layer had before the last apply." } },
          { name: "Rasters", type: "Section", default: "—", description: { km: "", en: "Colour ramps — a DEM can get a hillshade; the matching field opens by the layer's name." } },
          { name: "More menu", type: "Menu", default: "—", description: { km: "", en: "Style packs (QGIS `.xml`, ArcGIS Pro `.stylx`), save to Style Manager, hillshade options, credits." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select a layer, then open **KGA Layer Symbol** from the KGA Mapping group, or open the layer's properties and choose the **KGA Layer Symbol** tab." },
        { km: "", en: "Pick a symbol and press **Apply to Layer** — in the Layer Properties tab, the dialog's **Apply** or **OK**." },
        { km: "", en: "Adjust on the Current style page, or press **Undo**." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "None written to disk. The layer's renderer is changed in place." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "In Layer Properties the tab opens on the layer's current symbol for single-symbol layers. Edit it there, or press **Change style** to pick another; **nothing changes on the layer until the dialog's own Apply or OK.**" },
        { km: "", en: "**Class-level styling needs the Layers panel**, so it is available in the window only." },
        { km: "", en: "Symbols and ramps are original works or open-licence sets; see **More ▸ Credits & Licences** for the icon libraries." },
      ] },
    ],
    seeAlso: ["callout_label_studio", "dem_legend_bar"],
  },
  {
    slug: "add_grid",
    group: "kgamapping",
    name: "Add Grid to Layout",
    icon: "Map",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:add_grid",
    interactive: true,
    toolType: { km: "", en: "Interactive dialog \u2014 modeless, needs the QGIS window and a print layout" },
    processingPath: "Processing \u25b8 Toolbox \u25b8 KGA Toolbox \u25b8 KGA Mapping \u25b8 Add Grid to Layout",
    summary: {
      km: "\u178a\u17b6\u1780\u17cb\u1780\u17d2\u179a\u17a1\u17b6\u1785\u178f\u17d2\u179a\u1784\u17d2\u1782\u1780\u17bc\u17a2\u179a\u178a\u17c4\u1793\u17c1 \u2014 \u179a\u17bd\u1798\u1791\u17b6\u17c6\u1784\u1780\u17d2\u179a\u17a1\u17b6\u1785\u178f\u17d2\u179a\u1784\u17d2\u1782 MGRS \u1796\u17c1\u1789\u179b\u17c1\u1789 \u2014 \u179b\u17be\u1795\u17c2\u1793\u1791\u17b8\u1780\u17d2\u1793\u17bb\u1784 layout \u1796\u17b8\u1795\u17d2\u1791\u17b6\u17c6\u1784\u178f\u17c2\u1798\u17bd\u1799\u17d4",
      en: "Put a coordinate grid \u2014 including a full MGRS grid \u2014 on a layout map, from one window.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Put a **coordinate grid** on a print layout map from one window." } },
      { type: "paragraph", text: {
          km: "",
          en: "QGIS can already do all of this. What it cannot do is do it quickly: the grid lives in the layout designer's item properties panel, behind *Grids*, a **+** button, a *Modify grid…* button and five collapsible sections, and the interval, the frame, the label format and each side's label orientation are in four different places. This is the same settings in one form, with a **Suggest** button that works the interval out from what the map is actually showing.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "It also edits the grids a map already has, not only new ones, so it is the faster way back in when an interval turns out wrong at print size.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "And it draws an **MGRS** grid, which QGIS cannot do at all: there is no MGRS anywhere in the QGIS API. See *The MGRS preset* below.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [
          { type: "paragraph", text: {
              km: "",
              en: "The algorithm takes no Processing parameters — running it opens the window. The controls below are the window's, and rows it does not need are hidden: the interval boxes disappear when the units are set to fit the page, the cross and marker sizes appear only for those grid types, and the frame rows go when the frame style is *No frame*.",
            } },
        ],
        rows: [],
      },
      {
        title: { km: "", en: "Which map" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "**Layout**", type: "Combo box", default: "The layout whose map is selected", description: {
            km: "",
            en: "Every print layout in the project. The **Open* button beside it opens that layout in the designer, or brings its designer to the front.",
          } },
          { name: "**Map item**", type: "Combo box", default: "The selected map", description: { km: "", en: "The map items of that layout, by name." } },
          { name: "**Reload**", type: "Button", default: "—", description: {
            km: "",
            en: "Beside Map item. Read the layouts, maps and grids again, after adding or removing one in the designer.",
          } },
          { name: "**Create New Grid / Edit Grid**", type: "Two tabs", default: "Edit when the map has a grid, otherwise Create", description: {
            km: "",
            en: "Create makes a new grid; Edit changes one the map already has. Edit is greyed out on a map with no grids. Changing the layout or map re-chooses the tab.",
          } },
          { name: "**Grid to edit**", type: "Combo box", default: "The first grid", description: {
            km: "",
            en: "*Edit Grid tab. The grids the map already has. Picking one loads its settings into the form.",
          } },
          { name: "**Grid name**", type: "Text (top of both tabs, kept in step)", default: "`Grid`", description: {
            km: "",
            en: "What the grid is called in the layout designer's grid list. A name already on that map gets ` 2` appended rather than overwriting.",
          } },
          { name: "**Grid interval**", type: "Combo box", default: "Automatic", description: {
            km: "",
            en: "Only shown while the MGRS set is armed. `Automatic` works the spacing out from the map extent; `10 km`, `1 km`, `100 m`, `10 m` and `1 m` name it instead, which is what a sheet drawn to a stated scale needs — a 1:50,000 map carries a 1 km grid whatever its extent happens to suggest.",
          } },
          { name: "**Also add**", type: "Two check boxes", default: "Both off", description: {
            km: "",
            en: "Only shown while the MGRS set is armed. **1 km mesh* adds the fine mesh of a 1:50,000 sheet; **Labels inside too* repeats the numbers against the inside of the frame.",
          } },
          { name: "**Positioning**", type: "Three toggle buttons", default: "Two strips per axis, at 1/4 and 3/4", description: {
            km: "",
            en: "Where the interior number strips go: `One strip per axis, centred`, `Two strips per axis, at 1/3 and 2/3`, or `Two strips per axis, at 1/4 and 3/4`. Shown while the MGRS set is armed or the map already has strips, and enabled once **Labels inside too* is ticked. Changing it re-places the strips already on the map.",
          } },
          { name: "**100 km letters**", type: "Combo box", default: "In the margin", description: {
            km: "",
            en: "Only shown while the MGRS set is armed. `In the margin, outside the numbers` or `Inside the map, against the frame`.",
          } },
          { name: "**Preset**", type: "Combo box (Create tab)", default: "`Start from...`", description: {
            km: "",
            en: "Fills the whole form in one pick: *Thin black graticule*, *Exterior ticks, labels outside*, *Zebra frame, labels outside*, *Lat/long graticule in degrees*, *Crosses, labels inside*. It also re-suggests the interval, because a preset can change the CRS. Below the separator sits **MGRS grid**, which is not a preset but a *set — see *The MGRS preset*.",
          } },
        ],
      },
      {
        title: { km: "", en: "Grid tab" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "**Grid type**", type: "Combo box", default: "Solid lines", description: { km: "", en: "`Solid lines`, `Crosses`, `Markers`, `Frame and labels only`." } },
          { name: "**Coordinate system**", type: "CRS selector", default: "Not set", description: {
            km: "",
            en: "Not set grids the map in its own CRS. Set it to EPSG:4326 for a latitude/longitude graticule over a projected map. Changing it re-suggests the interval.",
          } },
          { name: "**Interval units**", type: "Combo box", default: "Map units", description: {
            km: "",
            en: "`Map units`, `Millimetres on the page`, `Centimetres on the page`, `Fit the page automatically`.",
          } },
          { name: "**Interval**", type: "Two numbers + **Suggest**", default: "1000", description: {
            km: "",
            en: "X and Y spacing, in the chosen units. **Suggest* fills both with a round number — 1, 2, 2.5 or 5 times a power of ten — that cuts the map into about five columns and rows.",
          } },
          { name: "**Offset**", type: "Two numbers", default: "0", description: {
            km: "",
            en: "Shifts the grid origin, for lines that have to land on a particular coordinate.",
          } },
          { name: "**Spacing on the page**", type: "Two numbers", default: "50–100 mm", description: {
            km: "",
            en: "*Fit the page automatically only. QGIS recomputes the interval at each render so the spacing stays between these two widths.",
          } },
          { name: "**Line colour**", type: "Colour button", default: "Black", description: { km: "", en: "Opacity included. Also the marker colour." } },
          { name: "**Line width**", type: "Number", default: "0.2 mm", description: { km: "", en: "Solid lines and crosses." } },
          { name: "**Cross size**", type: "Number", default: "3 mm", description: { km: "", en: "Crosses only." } },
          { name: "**Marker size**", type: "Number", default: "2 mm", description: { km: "", en: "Markers only." } },
        ],
      },
      {
        title: { km: "", en: "Frame tab" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "**Frame style**", type: "Combo box", default: "Exterior ticks", description: {
            km: "",
            en: "`No frame`, `Zebra`, `Zebra (nautical)`, `Interior ticks`, `Exterior ticks`, `Interior and exterior ticks`, `Line border`, `Line border (nautical)`.",
          } },
          { name: "**Frame size**", type: "Number", default: "2 mm", description: { km: "", en: "How far the frame or the ticks reach out from the map." } },
          { name: "**Frame line thickness**", type: "Number", default: "0.3 mm", description: { km: "", en: "" } },
          { name: "**Frame line colour**", type: "Colour button", default: "Black", description: { km: "", en: "" } },
          { name: "**Fill colour 1 / 2**", type: "Colour buttons", default: "Black / white", description: { km: "", en: "The two zebra bands. Shown for the zebra styles only." } },
          { name: "**Draw on**", type: "Four check boxes", default: "All ticked", description: {
            km: "",
            en: "Left, Right, Top, Bottom. A frame on three sides is normal on a sheet where the fourth carries the legend.",
          } },
        ],
      },
      {
        title: { km: "", en: "Labels tab" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "**Show coordinate labels**", type: "Group check box", default: "On", description: { km: "", en: "Off leaves the lines and the frame with no numbers." } },
          { name: "**Number format**", type: "Combo box", default: "Decimal", description: {
            km: "",
            en: "`Decimal`, `Decimal with N/S/E/W`, `Degree, minute`, `Degree, minute (padded)`, `Degree, minute, second`, `Degree, minute, second (padded)`, plus four that label from an expression: `MGRS zone and band letter`, `MGRS 100 km square letter`, `MGRS principal digits` (two digits minimum, more on a grid finer than 1 km, with a raised 100 km prefix on every tenth line), `MGRS corner value` (the first line of each margin, written out in full) and `Custom expression`.",
          } },
          { name: "**UTM zone**", type: "Integer (0–60)", default: "`from the coordinate system`", description: {
            km: "",
            en: "*MGRS 100 km square letter only. Which zone the letters belong to. At 0 it is read from the grid's own CRS, which is what the MGRS preset sets.",
          } },
          { name: "**Expression**", type: "Text", default: "—", description: {
            km: "",
            en: "*Custom expression only. A QGIS expression, with `@grid_number` for the value of the line being labelled and `@grid_axis` for `'x'` or `'y'`.",
          } },
          { name: "**Label rule**", type: "Read-only text", default: "—", description: {
            km: "",
            en: "Shown for the four expression formats: exactly what will be written onto the grid. Change the interval and watch the divisor change with it.",
          } },
          { name: "**Decimals**", type: "Integer (0–12)", default: "0", description: {
            km: "",
            en: "On a degree/minute/second format, the decimals on the last part shown. **Hidden for the four expression formats* — QGIS does not consult it under a custom format, so leaving it on screen would be a control that does nothing.",
          } },
          { name: "**Distance from the frame**", type: "Number", default: "1 mm", description: { km: "", en: "" } },
          { name: "**Font**", type: "Font button", default: "The QGIS default", description: { km: "", en: "Family, size and style." } },
          { name: "**Label colour**", type: "Colour button", default: "Black", description: { km: "", en: "" } },
          { name: "**Each side**", type: "Four rows", default: "Show all, outside, horizontal", description: {
            km: "",
            en: "One row per side — Left, Right, Top, Bottom — with **Show* (`Show all`, `Latitude / Y only`, `Longitude / X only`, `Hide`), **Placement* (`Outside the frame`, `Inside the frame`) and **Orientation* (`Horizontal`, `Vertical, reading up`, `Vertical, reading down`, `Along the frame`, `Above the tick`, `On the tick`, `Under the tick`).",
          } },
          { name: "**Copy the Left row to every side**", type: "Button", default: "—", description: { km: "", en: "The common case — every side the same — in one press." } },
        ],
      },
      {
        title: { km: "", en: "Buttons" },
        nameLabel: "Button",
        blocks: [],
        rows: [
          { name: "**Add MGRS Grid (4 grids)**", type: "", default: "", description: {
            km: "",
            en: "What **Add Grid* becomes once the MGRS set is picked. One press writes every grid in the set as one undo step, then leaves the tool editing the finest of them. Picking a different layout, map or grid puts the button back before it can fire at the wrong target.",
          } },
          { name: "**Add Grid* / **Apply**", type: "", default: "", description: {
            km: "",
            en: "Writes the form to the map. On a new grid it adds one and then selects it, so the next press changes that grid instead of stacking a second one beside it — which is why the button changes its name after the first press.",
          } },
          { name: "**Remove Grid**", type: "", default: "", description: { km: "", en: "Deletes the selected grid, after asking." } },
          { name: "**Reset**", type: "", default: "", description: { km: "", en: "Every setting back to its default, then a fresh interval suggestion." } },
          { name: "**Close**", type: "", default: "", description: { km: "", en: "The grid stays; nothing is undone." } },
          { name: "**Help**", type: "", default: "", description: { km: "", en: "This page." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "The tool needs a print layout with a map item on it. Run it without one and it says so and stops — see *Notes and limits*.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "1. Open the layout in **Project > Layouts**, and click the map item to select it. 2. Back in the main window, run **KGA Mapping > Add Grid to Layout**. The window opens on that layout and that map, **in front of the layout designer** rather than behind it, so the form and the sheet are on screen together. 3. Pick a **Preset** if one is close to what you want. 4. Press **Suggest** to get a round interval for the scale the map is at. 5. Set the frame and the label sides, then press **Add Grid**. 6. Look at the sheet, change a number, press **Apply** again. Repeat until it reads right at print size.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "To change a grid the map already has, right-click it in the layout's **Contents** panel (under the map's *Grids* group) and choose **Edit…**. The window opens on the **Edit Grid** tab with that grid chosen under **Grid to edit**.",
        } },
      { type: "subheading", text: { km: "", en: "The MGRS preset" } },
      { type: "paragraph", text: {
          km: "",
          en: "A grid reference such as **48P VT 92 77** is four things: the zone number, the latitude band letter, the 100 km square letters and the numeric location. They are read off different grids, so the preset lays down four, plus up to three more you can tick on (the 1 km mesh is one grid; the interior labels are two, one for northings and one for eastings):",
        } },
      { type: "table", head: [{ km: "", en: "Grid" }, { km: "", en: "What it draws" }, { km: "", en: "What it labels" }], rows: [
        [{ km: "", en: "`MGRS zone 48P`" }, { km: "", en: "A 6° x 8° graticule in EPSG:4326" }, {
            km: "",
            en: "The zone number along the top and bottom, the band letter up the sides — **inside* the frame, since the margin is already carrying numbers",
          }],
        [{ km: "", en: "`MGRS 100 km squares`" }, { km: "", en: "A 100,000 m grid in the map's UTM zone" }, {
            km: "",
            en: "The square's column letter on the vertical lines, its row letter on the horizontal ones. **In the margin or inside the map**, your choice",
          }],
        [{ km: "", en: "`MGRS corner values`" }, { km: "", en: "Nothing — no lines, no frame" }, {
            km: "",
            en: "One label per margin: the first line's coordinate written out in full, so the short labels along the rest of the margin have something to be read against. Three parts, only the middle one full size — on a 10 km grid `¹26⁰⁰⁰⁰m.N.`, on a 1 km grid `¹²60⁰⁰⁰m.N.` for the same line. **It follows the map* — pan or zoom and it re-finds the first line by itself",
          }],
        [{ km: "", en: "`MGRS 1 km mesh` *(optional)*" }, { km: "", en: "A 1 km grid, lighter than the one above it" }, { km: "", en: "Nothing — see *Notes and limits*" }],
        [{
            km: "",
            en: "`MGRS interior northing labels` and `MGRS interior easting labels` *(optional)*",
          }, { km: "", en: "Nothing — no lines, no frame" }, {
            km: "",
            en: "The same principal digits as the fine grid, repeated against the **inside* of the frame: northings on vertical strips, eastings along horizontal ones",
          }],
        [{ km: "", en: "`MGRS 1 km` (or 10 km, 100 m…)" }, { km: "", en: "The fine grid" }, {
            km: "",
            en: "The principal digits, **never fewer than two* — `12` on a 1 km grid, `51` on a 10 km grid — with the 100 km digits raised and small on every tenth line: `78 79 ⁴80 81`",
          }],
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "1. Select the map and run the tool as above. 2. Pick **MGRS grid** from the bottom of the **Preset** list. Nothing is written yet: the button changes to **Add MGRS Grid (4 grids)**, the status line names them, and a **100 km letters** row and an **Also add** row appear beside the preset. The button's count follows what you tick. 3. Set the font, colours and frame if you want them different — everything the set does not fix for itself is taken from the form when you press Add, so a colour picked now still reaches every grid in the set. 4. Choose whether the **100 km letters** go in the margin or inside the map. Inside keeps the margin to the numbers alone, which is how a printed sheet does it. 5. Set the **Grid interval** if `Automatic` is not what the sheet needs. Tick **1 km mesh** for the fine mesh a 1:50,000 sheet carries, and **Labels inside too** to repeat the numbers against the inside of the frame. Nothing is remembered between sessions; the window opens on the defaults. 6. Press **Add MGRS Grid**. One undo step; the tool is left editing the fine grid, and the others are in the **Grid** list.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "The zone comes from the middle of the map. The interval comes from the extent unless you name one, snapped down to 10 km / 1 km / 100 m / 10 m / 1 m — name it when the sheet is drawn to a stated scale, because the extent of a 1:50,000 sheet does not always suggest the 1 km grid such a sheet should carry. Everything else follows: the margin digits, the corner label's split, and how many lines land on the page. The three margin rows are stacked by hand — digits innermost, corner values outside them, letters outside those — because QGIS measures every annotation distance from the map frame rather than from the row before it.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "For a latitude/longitude graticule over a projected map, set **Coordinate system** to EPSG:4326 on the Grid tab — the interval re-suggests itself in degrees — and set **Number format** to *Degree, minute* on the Labels tab. The *Lat/long graticule in degrees* preset does all three.",
        } },
    ],
    results: [
      { type: "paragraph", text: {
          km: "",
          en: "- A grid on the chosen map item of the chosen print layout. Nothing is written to disk; the grid is part of the layout and is saved with the project. - Adding, changing and removing are each **one undo step** in the layout designer, so Ctrl+Z there takes back exactly one press of Apply.",
        } },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **It checks there is something to grid before it opens.** A grid lives on a map item inside a print layout, so running the tool in a project with no layout — or with layouts that carry no map item — puts up a message saying which of the two is missing and how to fix it, and opens nothing. The message names the layout when there is only one. - **MGRS is written in this plugin, because QGIS has none.** There is no MGRS in the QGIS C++ or Python API, `QgsCoordinateFormatter` has no grid-reference format, and the `mgrs` Python package is not part of a QGIS install. The maths is `kga_tools/core/mgrs.py`: WGS84 only, no UPS, and checked against PROJ (the projection agrees to well under a millimetre, and every 100 km square letter matches an independent derivation) and against the standard `4QFJ 12345 67890` example. - **The GZD graticule draws nothing on most sheets.** Its lines are 6° apart across and 8° up, so on any map smaller than a zone cell — nearly all of them — there is no line to draw and no label to hang on it. The grid is still added, and is *named* for the designator it stands for, because that name is what the Grid list shows. On a single-zone sheet, put `48P` in a layout label instead. - **Above 84° N and below 80° S there is no MGRS grid.** Those latitudes use UPS, which has its own letters and is not something this tool draws. The preset refuses and says so. - **One sheet, one zone.** All the grids use the zone at the middle of the map. A map crossing a zone boundary is gridded anyway and warned about, in the window and in the Processing log, but the numbers and the 100 km letters are right only inside that centre zone. That is a property of MGRS, not of this tool. - **The Norway and Svalbard zones are handled for the letters, not for the graticule.** The reference and the 100 km letters know that south-west Norway is zone 32 and that Svalbard runs 31/33/35/37. The GZD *graticule* still draws plain 6° cells, because a label expression on the x axis is handed only a longitude and can never know which band it is being drawn at. - **The labels are an expression, so they survive without the plugin.** They are written as QGIS's own *Custom* annotation format with self-contained expression text — there is no registered function to go missing when the project is opened elsewhere. The cost is that QGIS's **Decimals** setting stops applying, which is why that row is hidden for these formats. - **The margin never prints a single digit.** A 10 km grid only needs one digit to be unambiguous inside a 100 km square, but a margin of bare single digits reads as a ruler rather than as coordinates, and no printed sheet does it — so the labels are floored at two. Two digits span 1000 km, which is wider than a UTM zone, so the second one costs nothing. A 1 km grid reads `58 59 60 61 62` and a 10 km grid `44 45 46 47`, which is the convention on a 1:50,000 sheet. - **The raised 100 km digits are Unicode superscripts.** `⁴80` is a superscript four followed by an ordinary 80 — QGIS gives a grid one font per label, so there is no way to set part of it smaller. ArcGIS Pro can, because its dynamic text takes `<FNT size>` runs; this is the closest QGIS gets, and it carries the same information. Nearly every font has these glyphs, but a font that does not will draw boxes; change the label font if you see them. - **The corner label is split by the interval, not by the hundred kilometre.** Its large digits are exactly what the margin prints beside every other line, so the two read as the same number; the small digits in front are everything above them and the small digits behind everything below. Change the interval and the split moves with it — `¹26⁰⁰⁰⁰m.N.` on a 10 km grid becomes `¹²60⁰⁰⁰m.N.` on a 1 km one, for the very same line. - **The corner label follows the map.** It draws no lines and no frame; it exists only to put one full coordinate at the start of each margin, and it finds that line by reading the map's own extent every time the layout is drawn. Pan or zoom and it re-finds the first line on its own, with no need to press Apply — the same behaviour as ArcGIS Pro's *Corner Grid Labels*. The one exception is a grid whose coordinate system differs from the map's: the extent is then in the wrong units to compare a grid line against, so the first line is worked out when the grid is written and *does* go stale until the next Apply. Keeping the map in the same UTM zone as the grid avoids it, and the MGRS preset already does. - **The 1 km mesh carries no numbers.** A second row of labels would land in the same margin row as the first and overlap it, and at 1 km spacing on anything wider than a 1:50,000 sheet there are far too many of them to read — a whole country comes out as a solid tint, which the tool warns about. The mesh is there to measure against, not to name. When the automatic interval is already 1 km the mesh would be a duplicate, so it is skipped and the status line says so. - **Interior labels are a grid of their own.** QGIS gives one grid a single label position per side, so repeating the numbers inside the frame needs a second grid rather than a second setting — which is also how Pro does it, with its separate *InteriorLabels* component. - **Finer grids keep their full precision.** Below 1 km the digits go up with the step — three on a 100 m grid, four on 10 m, five on 1 m — so a reference read off the sheet is still unique within its 100 km square. - **The principal digits follow the interval and are rebuilt on every Apply.** Change a 1 km grid to 100 m and the labels go from two digits to three by themselves. An interval that is not an MGRS step is rounded **down** for the labels — a 2.5 km grid is labelled to the kilometre — because rounding up would print the same number on two neighbouring lines. - **Fit the page automatically cannot carry MGRS digits.** QGIS recomputes that interval at every render and the expression cannot follow it, so the combination is refused. - **The letters and the digits are two rows in the margin**, because they are two grids and QGIS gives each grid one label per line. The letters are pushed further out than the digits by about a line of text; a large font may need the *Distance from the frame* on the 100 km grid nudged by hand. - **An MGRS format with no UTM zone falls back to plain numbers** rather than printing a blank margin, and the status line says it has. Set the grid's **Coordinate system** to a UTM zone, or type the zone in yourself. - **The interval is in the grid's CRS, not the map's.** Switching the coordinate system to EPSG:4326 with an interval of 1000 left over from a metre grid means 1000 degrees, and draws nothing at all. The tool re-suggests the interval whenever the CRS changes, so this only bites if you then type a metre value back in. An interval of zero is refused with a message. - **Labels outside the frame draw beyond the map item's rectangle.** They can overrun a neighbouring item or the edge of the page; the map item itself does not grow to make room. Move the map in a little, or set **Placement** to inside. - **Latitude and longitude are QGIS's words** for the two families of line. On a projected grid they mean northing and easting, and *Latitude / Y only* on the left side is the usual choice either way. - **The window is modeless and reads the project when it opens.** Add a layout or a map while it is open and press **Reload** to see it. Selecting a different map in the designer and re-running the tool also re-reads it. - **The window follows the layout it is working on.** It parents itself to the designer showing that layout, so it stays in front of the sheet; picking a different layout in the combo moves it to that layout's designer, and a layout with no designer open leaves it on the QGIS main window. **Closing that designer closes this window with it** — re-run the tool to get it back. Nothing is lost: the grid is already on the map. Pick it under **Grid** to load its settings again; the form itself opens on the defaults, because nothing is remembered between sessions. - **Fit the page automatically** ignores the interval boxes entirely: QGIS computes a fresh interval at every render so the spacing on paper stays between the two widths given. That means the numbers on the sheet change when the map's scale does, which is what makes it useful for an atlas. - Only **print layouts** are offered. A report is not a layout the tool can put a grid on.",
        } },
    ],
    seeAlso: ["dem_legend_bar"],
  },
  {
    slug: "dem_legend_bar",
    group: "kgamapping",
    name: "DEM Legend Bar",
    icon: "Map",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:dem_legend_bar",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Mapping ▸ DEM Legend Bar",
    summary: {
      km: "បង្កើតរូបភាព PNG នៃរបារកាតាឡុកពណ៌ សម្រាប់ raster DEM។",
      en: "Generates a colour legend bar PNG for one or more DEM rasters.",
    },
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "Generates a hypsometric legend bar as a PNG for one or more DEM rasters — the elevation colour ramp with tick marks and labels that goes beside a map in a report or on a plan sheet.",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "QGIS's own legend for a continuous raster is not built for print. This writes a standalone image you place in a layout, a Word document or a drawing, at the DPI you need.",
        } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "**Input · DEM raster layer(s)**", type: "Multiple raster layers", default: "—", description: {
            km: "",
            en: "One legend bar is produced per DEM, from that layer's own minimum and maximum elevation.",
          } },
          { name: "**Style · Colour scheme**", type: "Enum", default: "`from_qgis`", description: {
            km: "",
            en: "`from_qgis` (copy the colour ramp of each layer's current QGIS style), or a fixed ramp: `YlGn_r`, `turbo`, `jet`, `RdYlBu_r`, `terrain`, `plasma`, `viridis`, `gist_earth`.",
          } },
          { name: "**Style · Legend title**", type: "String", default: "`Elevation (m)`", description: { km: "", en: "Text printed beside the bar." } },
          { name: "**Style · Number of ticks (approx.)**", type: "Number", default: "`7`", description: {
            km: "",
            en: "About this many labels. Steps are round numbers, so the count can differ slightly.",
          } },
          { name: "**Font · Family**", type: "String, advanced", default: "`Times New Roman`", description: { km: "", en: "" } },
          { name: "**Font · Tick label size (pt)**", type: "Number, advanced", default: "`9`", description: { km: "", en: "" } },
          { name: "**Font · Title size (pt)**", type: "Number, advanced", default: "`10`", description: { km: "", en: "" } },
          { name: "**Output · Resolution (DPI)**", type: "Enum", default: "`150 (Fast)`", description: {
            km: "",
            en: "Also `300 (Balanced)` and `600 (High Quality)`. Use 300 or 600 for anything that will be printed; the image is 4 times larger at 600.",
          } },
          { name: "**Output · Folder**", type: "Folder destination", default: "—", description: { km: "", en: "Where the PNGs are written." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: {
          km: "",
          en: "1. Load the DEM(s) and, if you want the map's own colours, style them first. 2. Open **KGA Mapping > DEM Legend Bar**. 3. Pick the DEMs and an output folder. 4. Leave **Colour scheme** on `from_qgis` to match the map exactly; pick a named ramp only when you want the legend to differ from the layer. 5. Set the **Resolution (DPI)** to match the destination — 150 for screen, 300 or 600 for print. 6. Press **Run**, then place the PNGs in your layout.",
        } },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One PNG legend bar per input DEM, in the output folder, at the chosen DPI." },
      ] },
    ],
    notes: [
      { type: "paragraph", text: {
          km: "",
          en: "- **Tick placement is auto-adaptive** from the DEM's elevation range, so the labels land on round numbers rather than on the exact minimum and maximum: - flat terrain (range ≤ 30 m) → 5 m steps - hills (≤ 300 m) → 50 m steps - mountain → 100, 200 or 500 m steps",
        } },
      { type: "paragraph", text: {
          km: "",
          en: "**Number of ticks** is a target, not a guarantee: the result is clamped to between 4 and 10 ticks. - `from_qgis` reads the layer's current renderer, so restyling the DEM changes the legend — regenerate it after any styling change. - The font must be installed on this machine; an unavailable family falls back silently.",
        } },
    ],
    seeAlso: ["add_grid"],
  },
  {
    slug: "create_features",
    group: "kgaeditor",
    name: "Create Features",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Interactive dockable pane. Needs QGIS 3.44 or newer; enabled only while Edit Session is On" },
    processingPath: "KGA Editor toolbar ▸ Create Features",
    summary: {
      km: "ផ្ទាំងសម្រាប់គូសបង្កើត feature ថ្មីពី template របស់ស្រទាប់នីមួយៗ ក្នុងរចនាបថ Create Features របស់ ArcGIS Pro។",
      en: "A docked pane in the style of ArcGIS Pro's Create Features: pick a template, pick a construction tool, and draw.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Every point, line and polygon layer that can take new features lists its **templates**; pick one, pick a construction tool, and draw on the map. New features get the template's attribute values and look. The pane docks on the right, in the same tab group as the Processing Toolbox and the Catalog." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Templates tab", type: "Tab", default: "—", description: { km: "", en: "One group per layer that is switched on in the Layers panel. A Categorized layer has one template per category, a Rule-based layer one per simple rule, any other layer a single template." } },
          { name: "Favorites tab", type: "Tab", default: "—", description: { km: "", en: "Templates you starred (right-click ▸ Add to Favorites). Saved with the project." } },
          { name: "Search", type: "Text", default: "—", description: { km: "", en: "Matches the template name, layer name, description and tags." } },
          { name: "Funnel button", type: "Filter", default: "all", description: { km: "", en: "Show all templates, or only point, line or polygon templates." } },
          { name: "View button", type: "Menu", default: "—", description: { km: "", en: "Group by Layer, Geometry Type, Tag or nothing; collapse or expand all groups; Help." } },
          { name: "Construction tools", type: "Buttons", default: "—", description: { km: "", en: "Point; Line, Right Angle Line, Freehand Line; Polygon, Rectangle, Right Angle Polygon, Circle, Ellipse, Freehand Polygon." } },
          { name: "Blue arrow", type: "Button", default: "—", description: { km: "", en: "Template properties: name, description, tags, default tool, default attribute values." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Turn **Edit Session** On, then click **Create Features** on the KGA Editor toolbar." },
        { km: "", en: "Click a template. Its construction tools appear under it and the first one is armed." },
        { km: "", en: "Click on the map. Right-click for the construction menu (Parallel, Perpendicular, Direction, Distance, Absolute X,Y, Delta X,Y …). Double-click, Enter or F2 finishes a line or polygon; Rectangle, Circle and Ellipse finish by themselves; Freehand finishes when you release the mouse." },
        { km: "", en: "Save with **Save Edits** on the KGA Editor toolbar, or QGIS's Save Layer Edits." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "The pane draws on the template's layer; **it never changes the active layer.**" },
        { km: "", en: "Creating a feature starts editing the layer when it is not in edit mode." },
        { km: "", en: "A category with no value is listed as `<Null>` and leaves the field empty; graduated renderers give one template for the layer." },
        { km: "", en: "Template edits are stored in the layer, so they travel with the project; favorites live in the project." },
        { km: "", en: "**Not supported:** \"Avoid overlap\", topological editing, curved segments, Z values (saved as 0)." },
        { km: "", en: "Closing the pane puts the tool away; switching to another tab does not." },
        { km: "", en: "*Not affiliated with or endorsed by Esri. ArcGIS is a trademark of Esri.*" },
      ] },
    ],
    seeAlso: ["modify_features", "open_feature_attribute", "add_quick_template"],
  },
  {
    slug: "modify_features",
    group: "kgaeditor",
    name: "Modify Features",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Docked pane with map tools and commands. Needs QGIS 3.44 or newer; follows the Edit Session switch" },
    processingPath: "KGA Editor toolbar ▸ Modify Features",
    summary: {
      km: "ផ្ទាំងដែលធ្វើតាម Modify Features របស់ ArcGIS Pro ដោយមានឧបករណ៍ ៣២ រៀបជាប្រភេទ។",
      en: "A replica of ArcGIS Pro's Modify Features pane: 32 tools in categories of icon tiles.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Tools are grouped in categories of icon tiles, with a search box and **All Tools** / **Favorites** tabs. Clicking a tile opens the tool inside the pane — options, buttons, a back arrow — and arms its map tool on the canvas. The buttons at the right of the tabs show the tools as a grid of tiles (default) or as a list; the choice is remembered." } },
      { type: "subheading", text: { km: "", en: "The 32 tools" } },
      { type: "table", head: [{ km: "", en: "Category" }, { km: "", en: "Tools" }], rows: [
        [{ km: "", en: "**Alignment**" }, { km: "", en: "Move, Rotate, Scale, Move To" }],
        [{ km: "", en: "**Reshape**" }, { km: "", en: "Edit Vertices, Reshape, Replace Geometry, Extend or Trim, Fillet, Generalize, Line Intersection, Reverse Direction, Change Line Length" }],
        [{ km: "", en: "**Divide**" }, { km: "", en: "Split, Divide, Clip, Explode, Planarize" }],
        [{ km: "", en: "**Construct**" }, { km: "", en: "Merge, Buffer, Copy Parallel, Construct Polygons, Offset, Points On Line, Points On Polygon Boundary, Copy Paste" }],
        [{ km: "", en: "**Attributes**" }, { km: "", en: "Sequential Numbering, Transfer Attributes" }],
        [{ km: "", en: "**COGO**" }, { km: "", en: "Traverse, Update COGO, Cul-de-sac, Split Into COGO Lines" }],
      ] },
      { type: "paragraph", text: { km: "", en: "Divide, Clip, Planarize, Merge, Buffer, Copy Parallel, Construct Polygons, Sequential Numbering and Split Into COGO Lines are the KGA tools of the same names, opened inside the pane." } },
    ],
    parameters: [],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Turn **Edit Session** On, then press **Modify Features** on the KGA Editor toolbar." },
        { km: "", en: "Find a tool by category or by the search box, and click its tile." },
        { km: "", en: "Select features if the page asks you to. A banner reads **Change the selection.**; click it to pick features again, and the list below shows what is selected." },
        { km: "", en: "Set the options and press the tool's button — **Move To**, say — or draw on the map." },
        { km: "", en: "Press the back arrow to return to the tile list." },
      ] },
      { type: "paragraph", text: { km: "", en: "**Favorites.** Right-click a tile ▸ *Add to favorites* and the tool gets a button on the KGA Editor toolbar. Drag a favorite to reorder. The list is kept in your QGIS settings, so it is the same in every project." } },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Edits go to the edit buffer; **nothing is saved until you press Save on the toolbar.**" },
        { km: "", en: "Move, Rotate and Scale: a plain click selects a feature, a drag anywhere transforms the selection. Move To takes absolute, delta, or direction-and-distance values; a map click only fills them in." },
        { km: "", en: "Edit Vertices lists the vertices of the selected feature in the map CRS and lets you type new X and Y." },
        { km: "", en: "Distances and areas on a layer in degrees are worked in the matching UTM zone." },
      ] },
    ],
    seeAlso: ["create_features", "open_feature_attribute", "merge_features", "divide_features"],
  },
  {
    slug: "modify_move",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Alignment",
    name: "Move",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Alignment ▸ Move",
    summary: {
               km: "ផ្លាស់ទី features ដែលបានជ្រើស ដោយអូសលើផែនទី ឬដោយវាយបញ្ចូលចម្ងាយ។",
               en: "Moves the selected features by dragging them on the map, or by a typed offset.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**dX (map units)**", type: "", default: "", description: { km: "", en: "Offset along X, in the map CRS." } },
          { name: "**dY (map units)**", type: "", default: "", description: { km: "", en: "Offset along Y, in the map CRS." } },
          { name: "**Anchor**", type: "", default: "", description: {
            km: "",
            en: "The centre of the selection unless set with **Set on the map**. Snaps to vertices, edges and midpoints.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Turn **Edit Session** On and open **Modify Features > Alignment > Move**." },
        {
          km: "",
          en: "Press on a feature and drag. It is selected for you and follows the mouse; release to apply. Click empty map to clear the selection, or drag there to select several (Shift adds, Ctrl removes).",
        },
        { km: "", en: "Or type **dX** and **dY** on the page and press **Move by this offset**." },
        {
          km: "",
          en: "To move from a set point, press **Set on the map** in the anchor group and click the map; **Reset** goes back to the centre of the selection.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "A live preview is drawn on rubber bands before anything is written." },
        {
          km: "",
          en: "Works on the selected features of every editable layer shown on the map; layers in other CRSs follow along.",
        },
        { km: "", en: "One undoable edit per layer. Ctrl+Z or **Discard Edits** undoes it." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_rotate",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Alignment",
    name: "Rotate",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Alignment ▸ Rotate",
    summary: {
               km: "បង្វិល features ដែលបានជ្រើសជុំវិញចំណុចយោង ដោយអូស ឬដោយវាយបញ្ចូលមុំ។",
               en: "Rotates the selected features about an anchor, by dragging or by a typed angle.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Counter-clockwise**", type: "", default: "", description: { km: "", en: "The angle to rotate by, in degrees (-360 to 360)." } },
          { name: "**Anchor**", type: "", default: "", description: {
            km: "",
            en: "Centre of the selection unless **Set on the map** places it elsewhere; **Reset** goes back to the centre.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the features (or click one while the tool is active and nothing is selected).",
        },
        {
          km: "",
          en: "A red anchor marks the centre of the selection. Drag around it on the map, or type an angle on the page.",
        },
        {
          km: "",
          en: "Release to write the rotation, or press **Rotate by this angle** for a typed one.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Works in the map CRS and is converted back to each layer's CRS." },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_scale",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Alignment",
    name: "Scale",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Alignment ▸ Scale",
    summary: {
               km: "ពង្រីក ឬបង្រួម features ដែលបានជ្រើសជុំវិញចំណុចយោង ដោយអូស ឬដោយវាយបញ្ចូលមេគុណ។",
               en: "Scales the selected features about an anchor, by dragging away from or towards it, or by a typed factor.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Factor (2 = twice as big)**", type: "", default: "", description: { km: "", en: "Scale factor; 0.5 halves the size." } },
          { name: "**Anchor**", type: "", default: "", description: {
            km: "",
            en: "Centre of the selection unless **Set on the map** places it elsewhere; **Reset** goes back to the centre.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select the features." },
        {
          km: "",
          en: "Drag away from the red anchor to enlarge or towards it to shrink, or type a factor on the page.",
        },
        {
          km: "",
          en: "Release to write the result, or press **Scale by this factor** for a typed one.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Works in the map CRS and is converted back to each layer's CRS." },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_move_to",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Alignment",
    name: "Move To",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Alignment ▸ Move To",
    summary: {
               km: "ផ្លាស់ទីការជ្រើសរើសទៅទីតាំងមួយ ដូចផ្ទាំង Move To របស់ ArcGIS Pro។",
               en: "Moves the selection to a location, laid out like the Move To pane of ArcGIS Pro. A map click only fills in the values; the **Move To** button applies them.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Absolute**", type: "", default: "", description: {
            km: "",
            en: "Puts the anchor at **X, Y**. The anchor is the centre of the selection unless you set it.",
          } },
          { name: "**Delta**", type: "", default: "", description: { km: "", en: "Moves by **dX, dY**." } },
          { name: "**Direction/Distance**", type: "", default: "", description: {
            km: "",
            en: "Moves a **Distance** along a **Direction** (degrees clockwise from north). Units show as the CRS abbreviation.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the features. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose a **Method** and type its values, or click the map to fill them in. A preview shows the result.",
        },
        { km: "", en: "Press **Move To** (it stays disabled until there is a non-zero move)." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "The default X, Y are refilled when the selection or anchor changes." },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_edit_vertices",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Edit Vertices",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Edit Vertices",
    summary: {
               km: "កែកំពូលរបស់ feature លើផែនទី ឬក្នុងតារាង ដូចផ្ទាំង Edit Vertices របស់ ArcGIS Pro។",
               en: "Edits the vertices of a feature on the map or in a table, laid out like the Edit Vertices pane of ArcGIS Pro. It is KGA's own tool, so selecting and editing are one flow.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**# / X / Y table**", type: "", default: "", description: {
            km: "",
            en: "The vertices of the feature picked in the list, in the map CRS. Edit X or Y in a cell.",
          } },
          { name: "**Copy**", type: "", default: "", description: { km: "", en: "Copies the table to the clipboard." } },
          { name: "**Change the selection.**", type: "", default: "", description: {
            km: "",
            en: "Use this button to pick features by dragging; a plain drag on empty map picks vertices.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Click a feature: it is selected and its vertices show as handles." },
        {
          km: "",
          en: "Drag a handle to move that vertex (it snaps to the features around). Double-click a segment to add a vertex.",
        },
        {
          km: "",
          en: "Drag a box on empty map to choose the vertices inside it (hold Alt for a freehand lasso; Shift adds, Ctrl removes). Chosen vertices are orange.",
        },
        {
          km: "",
          en: "Press **Delete** to remove the chosen vertices, else the vertex under the mouse, else the rows selected in the table.",
        },
        {
          km: "",
          en: "Or edit the **table** at the bottom: type a new X or Y in a cell to move that vertex; select rows and press the red cross to delete them.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "A line needs at least 2 vertices and a polygon ring 3; deleting more is refused.",
        },
        {
          km: "",
          en: "Z and M values are kept when a vertex moves; a polygon's closing vertex moves with the first.",
        },
        {
          km: "",
          en: "The table follows the map: a drag, undo or redo updates it, and the vertex of the selected row is circled on the map.",
        },
        {
          km: "",
          en: "Every change is one undoable edit written in the layer's own CRS. Esc first drops the chosen vertices.",
        },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_reshape",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Reshape",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Reshape",
    summary: {
               km: "គូសបន្ទាត់លើ features ដើម្បីកែរូបរាងរបស់វា ដូចផ្ទាំង Reshape របស់ ArcGIS Pro។",
               en: "Draws a line over features to reshape them, laid out like the Reshape pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Show Preview**", type: "", default: "", description: { km: "", en: "Draws the reshaped features while you move the mouse." } },
          { name: "**Allow reshaping without a selection**", type: "", default: "", description: { km: "", en: "With nothing selected, reshapes every editable feature the line crosses." } },
          { name: "**Reshape with single intersection**", type: "", default: "", description: {
            km: "",
            en: "Lets one crossing reshape a line: the shorter side is trimmed and the line continues along the sketch. Needs a selected line.",
          } },
          { name: "**Choose result on finish**", type: "", default: "", description: {
            km: "",
            en: "When the sketch cuts a polygon in pieces, click the piece to keep. Unticked, the piece with the longest perimeter is kept.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the features. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        { km: "", en: "Click points on the map to draw the new edge over the features." },
        {
          km: "",
          en: "Finish with the **Finish** button, right-click or Enter. Backspace removes the last point and Esc cancels.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "While sketching, right-click for **Parallel** and **Perpendicular** (keys **P** and **R**): the next segment is locked to an edge. See the Notes in [Replace Geometry](modify_replace_geometry.md).",
        },
        {
          km: "",
          en: "Only editable layers shown on the map are changed. One undoable edit per layer.",
        },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_replace_geometry",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Replace Geometry",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Replace Geometry",
    summary: {
               km: "ជំនួសរូបរាងរបស់ features ដែលបានជ្រើស ដោយរូបរាងថ្មីដែលអ្នកគូស។",
               en: "Replaces the shape of the selected features with a new one you draw, laid out like the Replace Geometry pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Sketch menu**", type: "", default: "", description: {
            km: "",
            en: "Right-click while sketching: Finish Sketch, Parallel (P), Perpendicular (R), Clear Constraint, Delete Sketch.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the features. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Click the **Replace Polygon / Line / Point** tile and draw the new shape: click its points (a dashed outline and green vertices show it, with snapping).",
        },
        { km: "", en: "Finish with right-click or Enter. The selected features take that shape." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "**Parallel / Perpendicular** lock the next segment to an edge of any feature or of the sketch. Right-click with the mouse over an edge to use it at once, or hover and click the edge. A thin cyan guide shows the locked direction; the lock is used up by the next click.",
        },
        { km: "", en: "Needs at least 3 points for a polygon and 2 for a line." },
        { km: "", en: "Attributes are kept; only the geometry changes." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_extend_trim",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Extend or Trim",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Extend or Trim",
    summary: {
               km: "ពន្លូតបន្ទាត់ទៅ feature ជិតបំផុត ឬកាត់វាឲ្យខ្លីវិញ។",
               en: "Extends a line to the nearest feature or trims it back, laid out like the Extend or Trim pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Recalculate COGO attributes**", type: "", default: "", description: {
            km: "",
            en: "After a change, rewrites the line's COGO fields (direction, distance...) from its geometry.",
          } },
          { name: "**Allow Extend or Trim without a selection**", type: "", default: "", description: { km: "", en: "With nothing selected, any editable line you click is changed." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the lines. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        { km: "", en: "Choose a tile: **Extend or Trim**, **Extend** or **Trim**." },
        {
          km: "",
          en: "Hover a line. A grey preview shows the part that would be removed (thick) or the extension (dashed).",
        },
        {
          km: "",
          en: "Click to do it. Lines change to the nearest other feature shown on the map.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Only selected lines change unless no selection is allowed." },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_fillet",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Fillet",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Fillet",
    summary: {
               km: "ភ្ជាប់បន្ទាត់ពីរដោយធ្នូ ដូចផ្ទាំង Fillet របស់ ArcGIS Pro។",
               en: "Joins two lines with an arc, laid out like the Fillet pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Fixed Radius**", type: "", default: "", description: {
            km: "",
            en: "Rounds every corner with the same radius, typed in the project's distance unit. Unticked, the mouse sets the radius.",
          } },
          { name: "**Trim or extend the lines to the arc**", type: "", default: "", description: { km: "", en: "Trims or extends both lines to meet the arc." } },
          { name: "**Add the arc as a new feature**", type: "", default: "", description: {
            km: "",
            en: "Adds the connecting arc as a new feature. If both options are off, nothing happens.",
          } },
          { name: "**Start over**", type: "", default: "", description: { km: "", en: "Forgets the first line (Esc or right-click does the same)." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Click the first line, then the second. Both lines and the arc are previewed (the arc dashed).",
        },
        {
          km: "",
          en: "With **Fixed Radius** off the mouse sets the radius: the arc touches the second line where you click.",
        },
        { km: "", en: "Click to finish." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Only single-part lines (or polygon edges) can be joined." },
        { km: "", en: "Click the part of each line you want to keep." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_generalize",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Generalize",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Command in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Generalize",
    summary: {
               km: "លុប ធ្វើឲ្យរលូន ឬបន្ថែមកំពូលក្នុងបន្ទាត់ និងពហុកោណដែលបានជ្រើស។",
               en: "Removes, smooths or adds vertices in the selected lines and polygons, laid out like the Generalize pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Simplify**", type: "", default: "", description: {
            km: "",
            en: "Removes vertices that move the shape by less than the **Maximum Allowable Offset**.",
          } },
          { name: "**Smooth**", type: "", default: "", description: {
            km: "",
            en: "A smooth curve through the vertices; the offset is how far a chord of it may lie from the curve.",
          } },
          { name: "**Densify**", type: "", default: "", description: {
            km: "",
            en: "Adds vertices: one at most a **Distance** apart, or, for curved segments, within an Offset / Angle.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select lines or polygons (the Select tool is in hand from the start)." },
        { km: "", en: "Choose a **Method** and set its value in a unit of your choice." },
        {
          km: "",
          en: "Tick **Show Preview** to see the result (blue line, vertices as dots), then press **Generalize**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Every run is one undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_line_intersection",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Line Intersection",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Line Intersection",
    summary: {
               km: "កាត់ ឬពន្លូតបន្ទាត់ពីរឲ្យជួបគ្នានៅជ្រុងរបស់វា។",
               en: "Trims or extends two lines to meet at their corner, laid out like the Line Intersection pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Recalculate COGO attributes**", type: "", default: "", description: { km: "", en: "Rewrites the lines' COGO fields from their geometry afterwards." } },
          { name: "**Create new lines when extending**", type: "", default: "", description: {
            km: "",
            en: "An extended line keeps its shape; the extension is added as a new line instead.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Click the first line (grey), then hover the second: the result is previewed, with a blue dot at the intersection.",
        },
        {
          km: "",
          en: "Lines that cross are cut in two there, so two crossing lines become four. Lines that do not meet are extended until they do.",
        },
        {
          km: "",
          en: "Press **Tab** to try another crossing when there are several, then click or press Enter.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Only single-part editable lines can be used." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_reverse_direction",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Reverse Direction",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Reverse Direction",
    summary: {
               km: "បង្វែរទិសដៅបន្ទាត់ ដូចផ្ទាំង Reverse Direction របស់ ArcGIS Pro។",
               en: "Turns a line around, laid out like the Reverse Direction pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Reverse topmost line**", type: "", default: "", description: { km: "", en: "Reverses the line on top where lines overlap." } },
          { name: "**Choose from overlapping lines**", type: "", default: "", description: { km: "", en: "Where lines overlap, pick which one to reverse from a list." } },
          { name: "**Choose component part of a multipart line**", type: "", default: "", description: { km: "", en: "Reverses only the part you click, not all parts." } },
          { name: "**Recalculate COGO Direction attribute**", type: "", default: "", description: { km: "", en: "Rewrites the line's COGO fields from its new direction." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Hover an editable line: arrows show the way it runs." },
        { km: "", en: "Click it to reverse it. Ctrl+Z undoes it." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Only editable lines are listed." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_change_line_length",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Reshape",
    name: "Change Line Length",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Command in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Reshape ▸ Change Line Length",
    summary: {
               km: "កំណត់ប្រវែងបន្ទាត់ដែលបានជ្រើស ដោយរក្សាចុងម្ខាងនៅនឹងកន្លែង។",
               en: "Sets the length of the selected lines, keeping one end where it is, laid out like the Change Line Length pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Preserve location of**", type: "", default: "", description: {
            km: "",
            en: "**First Vertex** or **Last Vertex** stays where it is; the other end is cut back along the line (shorter) or continued straight on in the direction of its last segment (longer).",
          } },
          { name: "**Proportion geometry using existing COGO**", type: "", default: "", description: {
            km: "",
            en: "Scales the whole line about the preserved vertex so every segment changes by the same factor. Needs the layer's COGO Distance field.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select the lines." },
        {
          km: "",
          en: "Choose **Change Length to:** (a new total) or **Change Length by:** (an amount), and give a value and unit.",
        },
        { km: "", en: "Choose which end to preserve: **First Vertex** or **Last Vertex**." },
        {
          km: "",
          en: "Tick **Show Preview** to see the new lines dashed over the old, then press **Change Length**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Only single-part lines change." },
        {
          km: "",
          en: "Lengths are measured on the ground when the project has an ellipsoid, else flat in map units.",
        },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_split",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Divide",
    name: "Split",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Divide ▸ Split",
    summary: {
               km: "បំបែក features ដោយបន្ទាត់ដែលគូស ឬដោយ features ផ្សេងទៀត។",
               en: "Splits features with a drawn line or with other features, laid out like the Split pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Allow splitting without a selection**", type: "", default: "", description: { km: "", en: "With nothing selected, splits every editable feature the line crosses." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "**Interactive:** select features, then click the points of a line across them. Right-click, double-click or Enter splits; Backspace removes the last point; Esc cancels.",
        },
        {
          km: "",
          en: "**By Feature:** pick **Input Features** (lines, or polygons whose outline cuts) and **Target Features** (what gets split) with their **Select** buttons, then press **Split**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "Pieces keep the attributes of the feature they came from (QGIS's own split).",
        },
        {
          km: "",
          en: "One undoable edit per layer. Ctrl+Z and Ctrl+Y undo and redo the splits in every layer they touched; the split layer becomes the active layer.",
        },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_divide",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Divide",
    name: "Divide",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Divide ▸ Divide",
    summary: {
               km: "ចែកពហុកោណជាផ្នែកៗតាមផ្ទៃ សមាមាត្រ ឬទទឹង និងចែកបន្ទាត់តាមចម្ងាយ ចំនួនស្មើគ្នា ឬភាគរយ។",
               en: "Divides polygons into parts by area, proportion or width, or lines by distance, equal parts or percentage. The page changes with what is selected.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Proportional Area**", type: "", default: "", description: { km: "", en: "N parts that each hold 1/N of the polygon." } },
          { name: "**Equal Area**", type: "", default: "", description: {
            km: "",
            en: "Parts of a given area from the start side; the rest stays as the remaining polygon, or is shared out equally between the parts.",
          } },
          { name: "**Equal Width**", type: "", default: "", description: {
            km: "",
            en: "Parts of a given width from the start side; the rest stays, or is merged into the last part.",
          } },
          { name: "**Lines: Distance**", type: "", default: "", description: {
            km: "",
            en: "Cuts the line at the distances in a table, with repetitions; the rest can be shared out.",
          } },
          { name: "**Lines: Equal Parts / Percentage**", type: "", default: "", description: { km: "", en: "Number of parts, or a percentage, from the start or the end of the line." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select polygons or lines. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose a **Method**, then the **Direction** (a polygon edge or a drawn line; **Switch** picks the side to start from).",
        },
        {
          km: "",
          en: "Enter the values, check the information bar (it shows the areas), tick **Show Preview**, then press **Divide**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "The dividing lines run parallel to the direction. The first part keeps the original feature; the others are new features with the same attributes.",
        },
        {
          km: "",
          en: "Areas and lengths are measured on the ground when the project has an ellipsoid, else flat.",
        },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_clip",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Divide",
    name: "Clip",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Divide ▸ Clip",
    summary: {
               km: "កាត់បន្ទាត់ និងពហុកោណដោយប្រើ features ផ្សេងទៀត។",
               en: "Clips lines and polygons with other features, laid out like the Clip pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Buffer Distance**", type: "", default: "", description: {
            km: "",
            en: "Points and lines clip through the buffer around them, so they need a distance above 0; polygons may be grown by it too.",
          } },
          { name: "**Discard (Remainder)**", type: "", default: "", description: {
            km: "",
            en: "Removes the part of each target inside the clip area. **Keep coincident** keeps a line's part that runs along the clip boundary.",
          } },
          { name: "**Preserve**", type: "", default: "", description: { km: "", en: "Keeps only the part inside the clip area." } },
          { name: "**Contain**", type: "", default: "", description: { km: "", en: "Deletes the targets outside the clip area; the others stay as they are." } },
          { name: "**Split**", type: "", default: "", description: {
            km: "",
            en: "Keeps both: the part inside and the part outside become separate features.",
          } },
          { name: "**Clip all editable features**", type: "", default: "", description: {
            km: "",
            en: "Clips every editable line and polygon the clip area touches instead of the Target Features.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Pick the **Input Features** (the clip features: points, lines or polygons) and the **Target Features** (lines or polygons that get clipped) with their Select buttons.",
        },
        { km: "", en: "Set a **Buffer Distance** and choose **When clipping features**." },
        { km: "", en: "Press **Clip**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "New pieces copy the attributes. One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_explode",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Divide",
    name: "Explode",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Divide ▸ Explode",
    summary: {
               km: "បំបែក features ពហុផ្នែកទៅជាផ្នែកតែមួយ ឬដកផ្នែកតែមួយចេញពីវា។",
               en: "Breaks multi-part features into single parts, or pulls single parts out of them. Works on multi-part features only.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Keep original features**", type: "", default: "", description: {
            km: "",
            en: "Leaves the multi-part features as they are and adds every part as a new feature.",
          } },
          { name: "**Allow explode without selection**", type: "", default: "", description: { km: "", en: "With nothing selected, click any part of an editable multi-part feature." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "**Features tab:** select multi-part features and press **Explode**. Each part becomes a feature of its own. The button is enabled only while every selected feature is multi-part (a single-part one is flagged: unselect it).",
        },
        {
          km: "",
          en: "**Parts tab:** hover a part on the map (it is outlined) and click it to make it a feature of its own.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "New features copy the attributes; primary key and unique fields get fresh values.",
        },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_planarize",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Divide",
    name: "Planarize",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Divide ▸ Planarize",
    summary: {
               km: "កាត់បន្ទាត់ដែលបានជ្រើសនៅកន្លែងដែលវាកាត់គ្នា។",
               en: "Cuts the selected lines where they cross each other, laid out like the Planarize pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Cluster Tolerance**", type: "", default: "", description: {
            km: "",
            en: "Lines cross or end on another selected line within this distance are cut there.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the lines. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        { km: "", en: "Set the **Cluster Tolerance** in the project's distance unit." },
        { km: "", en: "Press **Planarize**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "Every selected line is cut where it crosses another selected line, or where another selected line ends on it, so no two lines cross without a vertex.",
        },
        {
          km: "",
          en: "The first piece keeps the original feature; the other pieces are new features with the same attributes (primary key and unique fields get fresh values).",
        },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_merge",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Merge",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Merge",
    summary: {
               km: "បញ្ចូល features ទៅជាតែមួយ ដូចផ្ទាំង Merge របស់ ArcGIS Pro។",
               en: "Merges features into one, laid out like the Merge pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Existing Feature**", type: "", default: "", description: {
            km: "",
            en: "The features become the preserved one: it gets the combined shape and the attribute values shown, and the others are deleted. Click a row to preserve another.",
          } },
          { name: "**New Feature**", type: "", default: "", description: {
            km: "",
            en: "A new feature with the combined shape and those values is added (to the template layer if **Use Template** is on).",
          } },
          { name: "**Keep original features**", type: "", default: "", description: { km: "", en: "New Feature tab: leaves the originals in place." } },
          { name: "**Features to merge**", type: "", default: "", description: { km: "", en: "One row per feature, with buttons to flash it on the map or unselect it." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the features. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        { km: "", en: "Choose the tab: **Existing Feature** or **New Feature**." },
        {
          km: "",
          en: "Check the **Merged Feature Attributes** (type a value to change it), then press **Merge**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "The shape is the union: touching parts dissolve, others stay as parts of a multi-part feature.",
        },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_buffer",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Buffer",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Buffer",
    summary: {
               km: "បង្កើត buffer ពី features ដែលបានជ្រើស ជាពហុកោណ ឬជាបន្ទាត់ព្រំ។",
               en: "Buffers the selected features into polygons or outlines, laid out like the Buffer pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Buffer Distance**", type: "", default: "", description: {
            km: "",
            en: "How far out from each selected feature (points, lines and polygons), in a unit of your choice.",
          } },
          { name: "**Rings**", type: "", default: "", description: {
            km: "",
            en: "Several buffers, each one Buffer Distance further out. A polygon template gets them as separate bands (ring 2 is the area between the first and second buffer).",
          } },
          { name: "**Dissolve**", type: "", default: "", description: {
            km: "",
            en: "The buffers of all selected features become one shape. Off: one shape per feature.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the features. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose the **Template**: the layer that receives the buffers. A polygon layer gets polygons; a line layer gets the outlines.",
        },
        {
          km: "",
          en: "Set the **Buffer Distance**, **Rings** and **Dissolve**, tick **Show Preview**, then press **Buffer**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "The new features take the template layer's default attribute values and are selected afterwards.",
        },
        { km: "", en: "One undoable edit." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_copy_parallel",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Copy Parallel",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Copy Parallel",
    summary: {
               km: "ចម្លងបន្ទាត់ដែលបានជ្រើសនៅចម្ងាយមួយ ទៅម្ខាង ឬទាំងសងខាង។",
               en: "Copies the selected lines at a distance, on one or both sides, laid out like the Copy Parallel pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Distance / Repetitions**", type: "", default: "", description: { km: "", en: "Repetition k is copied at k x Distance." } },
          { name: "**Side**", type: "", default: "", description: {
            km: "",
            en: "Both, Left or Right of the line's direction. Arrows on the selected lines in the preview show which way Left and Right refer to.",
          } },
          { name: "**Corners**", type: "", default: "", description: { km: "", en: "Mitered, Rounded or Beveled." } },
          { name: "**Use Template / Keep source attribute values**", type: "", default: "", description: {
            km: "",
            en: "Make the copies in the template layer, and carry the source attribute values across.",
          } },
          { name: "**Remove self-intersecting loops**", type: "", default: "", description: { km: "", en: "Drops the loops an offset makes on the inside of a tight bend." } },
          { name: "**Align the direction of connected lines**", type: "", default: "", description: { km: "", en: "Ticked by default." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the lines. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose the **Template** (the line layer that receives the copies, and whether they keep the source attribute values).",
        },
        {
          km: "",
          en: "Choose **Copy to separate features** or **Copy to a single feature**, set the **Distance** and **Repetitions**, then the **Side** and **Corners**.",
        },
        { km: "", en: "Tick **Show Preview**, then press **Copy**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "The preview draws the copies in olive. The new lines are selected afterwards.",
        },
        { km: "", en: "One undoable edit." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_construct_polygons",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Construct Polygons",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Construct Polygons",
    summary: {
               km: "បង្កើតពហុកោណពីបន្ទាត់ដែលបានជ្រើស ដែលព័ទ្ធជុំវិញផ្ទៃមួយ។",
               en: "Builds polygons from the selected lines that enclose an area, laid out like the Construct Polygons pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Cluster Tolerance**", type: "", default: "", description: {
            km: "",
            en: "Line ends that stop short of another line by no more than this are joined to it.",
          } },
          { name: "**Use existing features in target**", type: "", default: "", description: {
            km: "",
            en: "Lets the outlines of polygons already in the template layer close areas too, and leaves out any polygon that is already there.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the lines. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose the **Template**: the editable polygon layer that receives the polygons.",
        },
        { km: "", en: "Set the **Cluster Tolerance**, then press **Construct**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "The lines are joined where they cross or meet and every closed area becomes a polygon. Lines that do not close an area are ignored.",
        },
        {
          km: "",
          en: "New polygons take the template's default attribute values and are selected afterwards.",
        },
        { km: "", en: "One undoable edit." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_offset",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Offset",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Offset",
    summary: {
               km: "បង្កើតចំណុចតាមបណ្តោយបន្ទាត់យោង ដោយកំណត់ចម្ងាយតាមបណ្តោយ និងចម្ងាយទៅចំហៀង។",
               en: "Creates points along a reference line, each at a distance along it and a distance to its side, laid out like the Offset pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Distance**", type: "", default: "", description: {
            km: "",
            en: "Distance along the line (counted from Start from). A row beyond End at is left out.",
          } },
          { name: "**Offset**", type: "", default: "", description: {
            km: "",
            en: "Distance to the side of the line. A negative offset goes to the other side.",
          } },
          { name: "**Side**", type: "", default: "", description: { km: "", en: "None puts the point on the line; Left or Right of the line's direction." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Choose the reference line: **Interactive** (draw it with the Two-Point Line tool, or pick a line with the Trace Line tool) or **By Feature** (the first selected line feature).",
        },
        {
          km: "",
          en: "Optionally set the **Range**: *Start from* and *End at*, distances along the line. The bar shows the line's length.",
        },
        { km: "", en: "Fill the **Values** table: one point per row." },
        {
          km: "",
          en: "Choose the **Template** (the editable point layer), tick **Show Preview**, then press **Create**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "The reference line is drawn in blue with an arrow showing its direction." },
        {
          km: "",
          en: "The new points take the template's default attribute values and are selected afterwards.",
        },
        { km: "", en: "One undoable edit." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_points_along_line",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Points On Line",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Points On Line",
    summary: {
               km: "បង្កើតចំណុចតាមបណ្តោយបន្ទាត់ដែលបានជ្រើស ឬគូរ៖ ចំនួនចំណុច ចម្ងាយស្មើគ្នា ឬតារាងចម្ងាយ។",
               en: "Constructs points along a selected or drawn line: a number of points, an equal distance, or a table of distances, laid out like the Create Points Along Line pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Number of Points**", type: "", default: "", description: { km: "", en: "That many points, spaced equally between the two ends of the line (the ends are not counted; use the Additional Points for them)." } },
          { name: "**Equal Distance**", type: "", default: "", description: { km: "", en: "A point every *Distance* from the Orientation end, as many as fit on the line. A point exactly at the far end counts." } },
          { name: "**Distances**", type: "", default: "", description: { km: "", en: "The table: each row is a *Distance* and a *Number of Points* - that many points, that far apart, one row after the other from the Orientation end. **Remaining Length** is what is left of the line (red when the rows run past its end)." } },
          { name: "**Orientation**", type: "", default: "", description: { km: "", en: "From Start or From End: which end the distances are counted from. The arrows on the line show its direction." } },
          { name: "**Additional Points**", type: "", default: "", description: { km: "", en: "Also a point at the start and / or at the end of the line." } },
          { name: "**Unit**", type: "", default: "", description: { km: "", en: "The unit of Line Length and of the distances you type (m, km, ft, yd, mi)." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Choose the line: **Select Line** (the first selected line feature; click or drag on the map) or **Draw Line** (click the points of a path; right-click, double-click or Enter finishes it)." },
        { km: "", en: "Choose the **Target point layer** (an editable point layer)." },
        { km: "", en: "Choose the unit and one of the three tabs, and fill it in. **Line Length** shows the length of the line." },
        { km: "", en: "Tick **At start of line** and / or **At end of line** for extra points at the ends." },
        { km: "", en: "Tick **Show Preview** to see the points on the map, then press **Create**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Draw Line: Backspace removes the last point, Esc starts again, and a click after the path is finished starts a new one." },
        { km: "", en: "Lengths and distances are measured on the ground when the project has an ellipsoid (what `$length` reports), else flat in the map's units. A line with true curves is measured flat." },
        { km: "", en: "A multi-part line uses its first part." },
        { km: "", en: "The new points take the target layer's default attribute values and are selected afterwards." },
        { km: "", en: "One undoable edit. Needs **Edit Session** On; only editable layers shown on the map are changed." },
      ] },
    ],
    seeAlso: ["modify_offset"],
  },
  {
    slug: "modify_points_on_polygon_boundary",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Points On Polygon Boundary",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Points On Polygon Boundary",
    summary: {
               km: "បង្កើតចំណុចនៅលើព្រំប្រទល់ប៉ូលីហ្គោនដែលបានជ្រើស៖ ចំនួនចំណុច ចម្ងាយស្មើគ្នា ឬតារាងចម្ងាយ ពីចំណុចចាប់ផ្តើម។",
               en: "Constructs points on the boundary of a selected polygon - not at its vertices: a number all the way round, an equal distance or a table of distances from a starting point.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Number of Points**", type: "", default: "", description: { km: "", en: "That many points spaced equally all the way round the boundary. No starting point is needed: the first point is at the starting point if you picked one, else at the polygon's first vertex." } },
          { name: "**Equal Distance**", type: "", default: "", description: { km: "", en: "A point every *Distance* from the starting point, going round the chosen way." } },
          { name: "**Distances**", type: "", default: "", description: { km: "", en: "The table: each row is a *Distance* and a *Number of Points* - that many points, that far apart, one row after the other from the starting point. **Remaining Length** is what is left of the boundary (red when the rows run past it)." } },
          { name: "**Starting point**", type: "", default: "", description: { km: "", en: "Click one of the polygon's vertices, or any point of its edge. Needed for Equal Distance and Distances; optional for Number of Points. **Clear Start** forgets it." } },
          { name: "**Direction**", type: "", default: "", description: { km: "", en: "Clockwise or Counter-clockwise: which way round the boundary the distances are counted. Blue arrows on the boundary show it." } },
          { name: "**Add a point at the starting point**", type: "", default: "", description: { km: "", en: "Also a point on the starting point itself (Equal Distance and Distances; with Number of Points the first point is always there)." } },
          { name: "**Unit**", type: "", default: "", description: { km: "", en: "The unit of Boundary Length and of the distances you type (m, km, ft, yd, mi)." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select a polygon (**Change the selection.**: click or drag on the map)." },
        { km: "", en: "Choose the **Target point layer** (an editable point layer) and the unit." },
        { km: "", en: "Choose one of the three tabs and fill it in. **Boundary Length** shows the length of the outer boundary." },
        { km: "", en: "For Equal Distance and Distances, click a vertex or any point of the polygon's edge to set the starting point (the green square). Choose the **Direction**." },
        { km: "", en: "Tick **Show Preview** to see the points on the map, then press **Create**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Snapping the starting point:** while you hover the selected polygon a magenta mark shows what a click would pick - a square on a vertex, a double triangle on the middle of an edge, an X on the edge itself. This works whether or not the project's snapping is on." },
        { km: "", en: "Only the **outer boundary** is used. Holes are ignored (the first part of a multi-part polygon)." },
        { km: "", en: "A point that would land back on the starting point after the full circle is not made twice." },
        { km: "", en: "Lengths and distances are measured on the ground when the project has an ellipsoid (what `$length` reports), else flat in the map's units." },
        { km: "", en: "The new points take the target layer's default attribute values and are selected afterwards." },
        { km: "", en: "One undoable edit. Needs **Edit Session** On; only editable layers shown on the map are changed." },
      ] },
    ],
    seeAlso: ["modify_points_along_line"],
  },
  {
    slug: "modify_copy_paste",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Construct",
    name: "Copy Paste",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Construct ▸ Copy Paste",
    summary: {
               km: "ឧបករណ៍ Copy-Paste Feature ដែលដំណើរការនៅក្នុងផ្ទាំង Modify Features។",
               en: "The Copy-Paste Feature tool inside the pane. It shares its clipboard and paste engine with the Copy-Paste Feature window, so what is copied here can be pasted there and the other way round.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Clear clipboard**", type: "", default: "", description: { km: "", en: "Empties the clipboard." } },
          { name: "**Paste Special fields**", type: "", default: "", description: { km: "", en: "Target layer, how attributes carry across, and geometry options." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "**Copy tab:** select features (select mode stays on), choose the **Layer** if features of several layers are selected, then press **Copy**. The copied features are outlined on the map.",
        },
        {
          km: "",
          en: "**Paste tab:** set the Paste Special fields (target layer, how attributes carry across, geometry options), then press **Paste**, or **Paste again** for the same target and mapping.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "A blue bar tells what is on the clipboard; a green bar reports what was pasted.",
        },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_sequential_numbering",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Attributes",
    name: "Sequential Numbering",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Attributes ▸ Sequential Numbering",
    summary: {
               km: "ដាក់លេខ features តាមលំដាប់ដែលបន្ទាត់គូសកាត់វា។",
               en: "Numbers features in the order a drawn line crosses them, laid out like the Sequential Numbering pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Format**", type: "", default: "", description: {
            km: "",
            en: "For a text field: the text around the number, with # standing for it. \"A-###\" gives A-001, A-002 ... (as many # as digits; a lone # means no padding). Greyed out for a number field.",
          } },
          { name: "**Start value**", type: "", default: "", description: {
            km: "",
            en: "The first number. It moves on to the next number after each run, so the next line carries on from there.",
          } },
          { name: "**Increment**", type: "", default: "", description: { km: "", en: "The step; a negative value counts down." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Choose the **Layer** (editable) and the **Field** (number or text)." },
        { km: "", en: "Set the **Format**, the **Start value** and the **Increment**." },
        {
          km: "",
          en: "Draw a line across the features: click its points, then right-click, double-click or Enter. A single click numbers the one feature under it.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Values longer than a text field allows are cut to its length." },
        { km: "", en: "One undoable edit per run." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_transfer_attributes",
    group: "kgaeditor",
    parent: "modify_features",
    category: "Attributes",
    name: "Transfer Attributes",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ Attributes ▸ Transfer Attributes",
    summary: {
               km: "ចម្លងតម្លៃគុណលក្ខណៈពី feature មួយ ទៅ feature មួយទៀត។",
               en: "Copies attribute values from one feature to another, laid out like the Transfer Attributes pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Field list**", type: "", default: "", description: {
            km: "",
            en: "Every field with the same name in both layers is copied. Untick a field on the page to leave it out.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Click a **source** feature, then click a **target** feature. A tip beside the cursor names the step and the source.",
        },
        {
          km: "",
          en: "The values go across and the tool is ready for the next source. Right-click or Esc goes back to choosing a source.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "Values are converted to the target field's type. The primary key, unique and calculated fields are never touched.",
        },
        {
          km: "",
          en: "A green strip says \"Attribute transfer completed.\" One undoable edit per transfer.",
        },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_traverse",
    group: "kgaeditor",
    parent: "modify_features",
    category: "COGO",
    name: "Traverse",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ COGO ▸ Traverse",
    summary: {
               km: "គូសបន្ទាត់ COGO ពីទិស និងចម្ងាយដែលវាយបញ្ចូល។",
               en: "Draws COGO lines from typed directions and distances, laid out like the Traverse pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Direction**", type: "", default: "", description: {
            km: "",
            en: "In the direction type and units of the COGO settings (north azimuth 45-30-00, quadrant N45-30-00E ...).",
          } },
          { name: "**Distance**", type: "", default: "", description: {
            km: "",
            en: "In the distance unit of the settings (map units when none is chosen). With a Radius it is the length of the chord.",
          } },
          { name: "**Radius**", type: "", default: "", description: { km: "", en: "Positive turns clockwise, negative counter-clockwise; empty = straight." } },
          { name: "**One feature per course, with its COGO values**", type: "", default: "", description: {
            km: "",
            en: "Each course is a line carrying its Direction, Distance, Radius and ArcLength. Off, the traverse is one connected line.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Choose the **Template**: the editable line layer the lines are made in." },
        {
          km: "",
          en: "Click the **start point** on the map (it snaps; a green square marks it) or type it.",
        },
        {
          km: "",
          en: "Fill in the **Courses** table, one row per course: Direction, Distance and, for a curve, Radius. \"Click to add new row.\" adds one. Each course starts where the one before ends.",
        },
        {
          km: "",
          en: "Set the COGO settings, tick **Show Preview** to see the traverse in blue, then press **Create**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "The new lines are selected afterwards. One undoable edit." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_update_cogo",
    group: "kgaeditor",
    parent: "modify_features",
    category: "COGO",
    name: "Update COGO",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ COGO ▸ Update COGO",
    summary: {
               km: "សរសេរ fields COGO របស់បន្ទាត់ដែលបានជ្រើសឡើងវិញ ពីធរណីមាត្ររបស់វា។",
               en: "Rewrites the COGO fields of the selected lines from their geometry, laid out like the Update COGO pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Create the COGO fields if they are missing**", type: "", default: "", description: {
            km: "",
            en: "Adds Direction, Distance, Radius and ArcLength when the layer lacks them.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select the lines. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose the COGO settings: **Direction type**, **Direction units** and **Distance units**.",
        },
        { km: "", en: "Press **Update**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "A single course gives its own direction and distance (an arc also its radius and arc length). A line with several vertices gets the chord from its first to its last point and its full length.",
        },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_cul_de_sac",
    group: "kgaeditor",
    parent: "modify_features",
    category: "COGO",
    name: "Cul-de-sac",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ COGO ▸ Cul-de-sac",
    summary: {
               km: "បន្ថែមកន្លែងបត់ត្រឡប់នៅចុងផ្លូវ ដូចផ្ទាំង Cul-de-sac របស់ ArcGIS Pro។",
               en: "Adds a turnaround at the end of a street, laid out like the Cul-de-sac pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Street width**", type: "", default: "", description: {
            km: "",
            en: "The street's two edges (kerbs) lie half this width either side of the line.",
          } },
          { name: "**Radius**", type: "", default: "", description: { km: "", en: "Radius of the turnaround circle, centred on the end of the street." } },
          { name: "**Return radius**", type: "", default: "", description: { km: "", en: "Radius of the curve joining the circle to each kerb, tangent to both." } },
          { name: "**Use Template**", type: "", default: "", description: {
            km: "",
            en: "Creates the outline in the template layer. Off: in the selected line's own layer.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select a line. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose the **Template** (the editable layer the outline is made in) and the **Side**: **Start of line** or **End of line**. Black arrows on the selected lines show which way they run.",
        },
        {
          km: "",
          en: "Set **Street width**, **Radius** and **Return radius** (each in its own distance unit), tick **Show Preview**, then press **Create**.",
        },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "The outline is one line (a closed ring in a polygon layer)." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "modify_split_cogo_lines",
    group: "kgaeditor",
    parent: "modify_features",
    category: "COGO",
    name: "Split Into COGO Lines",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Map tool in the Modify Features pane (not a Processing algorithm)" },
    processingPath: "KGA Editor toolbar ▸ Modify Features ▸ COGO ▸ Split Into COGO Lines",
    summary: {
               km: "បំបែកបន្ទាត់ ឬព្រំពហុកោណនៅកំពូលរបស់វា ទៅជាបន្ទាត់ COGO។",
               en: "Splits lines, or polygon boundaries, at their vertices into COGO lines, laid out like the Split Into COGO Lines pane of ArcGIS Pro.",
             },
    body: [],
    parameters: [
      {
        title: null,
        nameLabel: "Option",
        blocks: [],
        rows: [
          { name: "**Use Template**", type: "", default: "", description: {
            km: "",
            en: "On: the new lines go into the template layer (an editable line layer). Off: lines are split in their own layer.",
          } },
          { name: "**Split lines with existing COGO attributes**", type: "", default: "", description: {
            km: "",
            en: "Lines that already have a Direction and a Distance are left alone unless this is ticked.",
          } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        {
          km: "",
          en: "Select lines or polygons. The **Change the selection.** banner switches to select mode: click or drag on the map (Shift adds, Ctrl removes, empty map clears). The list under it shows what is selected.",
        },
        {
          km: "",
          en: "Choose the **Template** if the new lines should go into a line layer (a polygon boundary needs one).",
        },
        { km: "", en: "Press **Split**." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        {
          km: "",
          en: "Each straight run and each arc becomes a line of its own carrying its Direction, Distance, Radius and ArcLength. The direction convention and units are the shared COGO settings.",
        },
        {
          km: "",
          en: "A line that was split is replaced by its courses; a polygon is kept. New lines copy the attributes of the feature they came from.",
        },
        { km: "", en: "One undoable edit per layer." },
        {
          km: "",
          en: "Needs **Edit Session** On; only editable layers shown on the map are changed.",
        },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "open_feature_attribute",
    group: "kgaeditor",
    name: "Open Feature Attribute",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Interactive dockable pane. Needs QGIS 3.44 or newer. Works with Edit Session On or Off" },
    processingPath: "KGA Editor toolbar ▸ Open Feature Attribute",
    summary: {
      km: "ជ្រើស feature លើផែនទី រួចកែគុណលក្ខណៈរបស់វាភ្លាម ដោយមិនចាំបាច់បើកតារាងគុណលក្ខណៈ។",
      en: "Select a feature on the map and type into its attributes right there: no attribute table, no hunting for the row.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "A docked pane inspired by the attribute-editing workflow in desktop GIS such as ArcGIS Pro. The pane docks on the right, in the same tab group as the Processing Toolbox and KGA Geoprocessing." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Selection tab", type: "Tab", default: "—", description: { km: "", en: "The selected features, grouped by layer, from any selection tool. Click a feature to edit it (it is outlined on the map). Click the layer line to edit all its selected features at once." } },
          { name: "Layers tab", type: "Tab", default: "—", description: { km: "", en: "Choose a layer, then pick any feature from the list of all its features. The arrows step to the previous or next feature; the play button steps through them automatically, and its arrow sets what happens on the map (nothing, Flash, Pan To, Zoom To). **Browsing never changes the map selection.**" } },
          { name: "Change the selection.", type: "Map tool", default: "—", description: { km: "", en: "The pane's own map tool. Click a feature or drag a rectangle; Shift adds, Ctrl removes, N picks the next overlapping feature. The arrow offers Rectangle, Polygon, Freehand, Circle and Line." } },
          { name: "Attributes tab", type: "Tab", default: "—", description: { km: "", en: "The fields of the chosen feature. Click a value to type; Enter or Tab saves and moves to the next editable field; Esc cancels. Domains and booleans use a drop-down, dates a date picker. Empty means `<Null>`. Read-only fields are grey." } },
          { name: "Geometry tab", type: "Tab", default: "—", description: { km: "", en: "The vertices of one feature, grouped by part and ring. Edit X, Y (Z, M) in place; the vertex is marked on the map. The copy button copies the selected vertex, or all of them, as tab-separated Vertex, X, Y columns." } },
          { name: "Auto Apply", type: "Boolean", default: "On", description: { km: "", en: "On: each value goes into the layer's edit buffer as soon as you finish typing it. Off: **Apply** and **Cancel** appear, and pending values are also applied when you pick another feature." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Click **Open Feature Attribute** on the KGA Editor toolbar, or under KGA Toolbox ▸ KGA Editor. The pane opens and the selection tool is armed." },
        { km: "", en: "Click a feature on the map, or right-click a feature and choose **Attribute** (above Copy Coordinate) to open the pane on it." },
        { km: "", en: "Click a value, type, press Enter." },
        { km: "", en: "Save with **Save Edits**, or QGIS's Save Layer Edits. Ctrl+Z undoes a value." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "If the layer is not in edit mode the pane starts editing it; nothing is saved until you save." },
        { km: "", en: "**Wrong input** — letters in a number, text longer than the field, a broken layer rule — turns the row red and is not written." },
        { km: "", en: "Editing several features at once shows a value only when all of them share it; differing values are blank, and a value you type is set on every feature." },
        { km: "", en: "A layer whose source cannot be edited is shown read-only." },
        { km: "", en: "Very large selections list the first 1000 features per layer; the count beside the layer is the real total." },
        { km: "", en: "*Not affiliated with or endorsed by Esri. ArcGIS is a trademark of Esri.*" },
      ] },
    ],
    seeAlso: ["create_features", "modify_features", "attributes_to_xlsx"],
  },
  {
    slug: "quick_labeling",
    group: "kgaeditor",
    name: "Quick Labeling",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Toggle button with a right-click window. Needs QGIS 3.44 or newer. Works with Edit Session On or Off and never edits data" },
    processingPath: "KGA Editor toolbar \u25b8 Quick Labeling",
    summary: {
      km: "\u178a\u17b6\u1780\u17cb\u179f\u17d2\u179b\u17b6\u1780\u179b\u17be\u179f\u17d2\u179a\u1791\u17b6\u1794\u17cb\u179f\u1780\u1798\u17d2\u1798\u178a\u17c4\u1799\u1785\u17bb\u1785\u178f\u17c2\u1798\u17d2\u178f\u1784 \u17a0\u17be\u1799\u1780\u17c2\u1796\u17bb\u1798\u17d2\u1796 \u1791\u17c6\u17a0\u17c6 \u1796\u178e\u17cc \u1793\u17b7\u1784\u1791\u17b8\u178f\u17b6\u17c6\u1784\u1796\u17b8\u1795\u17d2\u1791\u17b6\u17c6\u1784\u178f\u17bc\u1785\u1798\u17bd\u1799\u17d4",
      en: "Labels the active layer with one click, with font, size, colour and placement in a small right-click window.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The button is a **switch for the layer's labels, whoever set them**: it is pressed whenever the active layer shows labels \u2014 from this button, Layer Properties \u25b8 Labels, the Layer Styling panel or **[Callout Label Studio](callout_label_studio.md)** \u2014 and follows them when they are switched on or off there." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Field", type: "", default: "", description: { km: "", en: "The label field, or the expression button to write an expression." } },
          { name: "Font, Style, Size, Colour", type: "", default: "Regular", description: { km: "", en: "Font family, style, size in points and colour." } },
          { name: "Halo", type: "", default: "off", description: { km: "", en: "Tick the box, then choose the halo size and colour. White, 1 pt by default." } },
          { name: "Position", type: "", default: "", description: { km: "", en: "Choices follow the geometry. Points: Around point, Above, Below, Left, Right, Over point, Cartographic. Lines: Parallel, Above line, Below line, On line, Curved, Horizontal. Polygons: Around centroid, Over centroid, Horizontal, Free (angled), Along perimeter, Outside polygon. **The last choice is remembered separately for points, lines and polygons.**" } },
          { name: "Offset", type: "", default: "", description: { km: "", en: "Pushes the label away from the feature, in points. Greyed out for positions with nothing to offset." } },
          { name: "Offset X / Y", type: "", default: "", description: { km: "", en: "Point layers only. Shifts a label placed Above, Below, Left, Right or Over the point, added to Offset." } },
          { name: "Round to 2 decimals, Add 'm', Add 'm\u00b2'", type: "", default: "", description: { km: "", en: "Shown when the field is numeric. The label expression is written into the Field box for you. An empty value shows no label, not a lone unit. Editing the expression yourself unticks the boxes and keeps your expression." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select a layer in the Layers panel and click **Quick Labeling**. The layer is labelled with a random field \u2014 a text field when there is one \u2014 in the font, size and colour you used last." },
        { km: "", en: "**Right-click** the button, only while a quick label is on, to open the small window. Every change applies as you make it; there is no OK button." },
        { km: "", en: "Click the pressed button again to turn the labels off." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Turning off gives back the labels the layer had before.** Labels from Layer Properties or Callout Label Studio are only switched off; their settings stay on the layer." },
        { km: "", en: "Each layer keeps its own state; the window follows you to the next layer that has a quick label." },
        { km: "", en: "A quick label is an ordinary single-label setting, so Layer Properties \u25b8 Labels shows and refines it. A layer saved in a project reopens with the button pressed." },
        { km: "", en: "Layers without attributes (tables, rasters) cannot be labelled; the button is greyed out for them." },
        { km: "", en: "The superscript 2 is `char(178)`. **Use a Unicode font** \u2014 a legacy-encoded Khmer font such as Khmer MEF1 draws a stray letter for that character." },
      ] },
    ],
    seeAlso: ["quick_symbology", "callout_label_studio", "open_feature_attribute"],
  },
  {
    slug: "quick_symbology",
    group: "kgaeditor",
    name: "Quick Symbology",
    icon: "SquarePen",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Button that opens a small window. Needs QGIS 3.44 or newer. Works with Edit Session On or Off and never edits data" },
    processingPath: "KGA Editor toolbar \u25b8 Quick Symbology",
    summary: {
      km: "\u178a\u17c4\u17c7\u179a\u1785\u1793\u17b6\u179f\u17d2\u179a\u1791\u17b6\u1794\u17cb\u1780\u17d2\u1793\u17bb\u1784\u1795\u17d2\u1791\u17b6\u17c6\u1784\u178f\u17bc\u1785\u1798\u17bd\u1799\u2014 \u1793\u17b7\u1798\u17b7\u178f\u17d2\u178f\u179f\u1789\u17d2\u1789\u17b6\u178f\u17c2\u1798\u17bd\u1799 \u17ac\u1798\u17bd\u1799\u1796\u178e\u17cc\u1780\u17d2\u1793\u17bb\u1784\u1798\u17bd\u1799\u178f\u1798\u17d2\u179b\u17c3\u1793\u17c3 field\u17d4",
      en: "Restyles the selected layer in a small window: one symbol, one colour per value of a field, or just one class.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Changes apply as you make them; there is no OK button. Click the button again to close the window, which follows the active layer." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Fill Color, Outline Color, Outline width", type: "", default: "", description: { km: "", en: "For a plain layer, with a **Preview**. Line layers show just Color and Width." } },
          { name: "Unique Value symbol", type: "", default: "off", description: { km: "", en: "Turn on for one class per value of a field." } },
          { name: "Field", type: "", default: "", description: { km: "", en: "The field to classify, or the expression button." } },
          { name: "Color Scheme", type: "", default: "", description: { km: "", en: "The colour ramp the classes take their colours from." } },
          { name: "Classes", type: "", default: "", description: { km: "", en: "Class, Value and Label. Double-click a label to rename it, or a swatch to edit that class's symbol." } },
          { name: "+ (green)", type: "", default: "", description: { km: "", en: "Opens *Select values to add*: the values that are not classes yet, each with the colour it would get. **Options** selects all, clears the selection or adds every value." } },
          { name: "Down / up arrows", type: "", default: "", description: { km: "", en: "Move the selected classes. **All other values** is always last and cannot be moved or removed." } },
          { name: "Drop shadow", type: "", default: "", description: { km: "", en: "A soft shadow under the whole layer's shapes. Kept when you switch between single symbol and unique values; an existing drop shadow keeps its settings." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Select a layer and click **Quick Symbology** (palette icon)." },
        { km: "", en: "Set the fill, outline and width for a plain layer, watching the preview." },
        { km: "", en: "Turn on **Unique Value symbol** for one class per value of a field, then pick the field and the colour scheme." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Select one class of a unique-value layer in the Layers panel and the button opens **straight on that class's symbol**; the back arrow returns to the class list." },
        { km: "", en: "Switching *Unique Value symbol* off gives back the single symbol the layer had." },
        { km: "", en: "**Up to 100 classes are made automatically**; if the field has more values, add the rest with **+**." },
        { km: "", en: "A layer with another renderer (graduated, rule-based \u2026) is left alone until you turn Unique Value symbol on or press **Use a single symbol**. Symbols built from layers other than simple fill, marker or line only take a fill colour here." },
      ] },
    ],
    seeAlso: ["quick_labeling", "kga_layer_symbol"],
  },
  {
    slug: "layer_auto_sort",
    group: "kgaotherfeatures",
    name: "Layer Auto-Sort",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: false,
    toolType: { km: "", en: "Background feature with a menu and a settings window; no toolbar button. Needs QGIS 3.30 or newer" },
    processingPath: "KGA Toolbox menu ▸ Layer Auto-Sort",
    summary: {
      km: "រៀបផ្ទាំង Layers តាមប្រភេទទិន្នន័យ — ចំណុច បន្ទាត់ ពហុកោណ រាស្ទ័រ ហើយ basemap នៅក្រោមគេ — ដោយស្វ័យប្រវត្តិ។",
      en: "Orders the Layers panel by data type — points, lines, polygons, rasters, web basemaps last — in the background.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "ArcGIS Pro keeps its table of contents tidy by data type, so nothing is hidden under a basemap. Layer Auto-Sort does the same for the QGIS Layers panel. **Each new layer is placed at the top of its own type band as it is added**, so a basemap or other web raster added later lands at the bottom instead of on top. What is already there can be sorted on demand." } },
      { type: "paragraph", text: { km: "", en: "Default order, top to bottom: annotation layers, tables (no geometry), points, lines, polygons, vector layers of unknown geometry, vector tiles, point clouds, 3D tiles, mesh layers, local rasters (DEM, orthophoto, imagery), and last web rasters and basemaps (WMS, WMTS, XYZ, WCS, ArcGIS)." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Sort Layers by Type", type: "Menu command", default: "—", description: { km: "", en: "KGA Toolbox ▸ Layer Auto-Sort, and the Layers panel right-click menu. Sorts every group and the top level." } },
          { name: "Sort Group by Type", type: "Menu command", default: "—", description: { km: "", en: "Layers panel right-click menu on a group. Sorts only that group and the groups inside it." } },
          { name: "Auto-sort New Layers", type: "Switch", default: "On", description: { km: "", en: "While On, a layer you add goes to the top of its type band inside the group it was added to." } },
          { name: "Order list", type: "Drag list", default: "see above", description: { km: "", en: "Drag the types up or down; the top of the list is the top of the Layers panel. **Restore Defaults** resets it." } },
          { name: "Also sort the Layer Order panel", type: "Boolean", default: "On", description: { km: "", en: "Applies the same order to the Layer Order panel when *Control rendering order* is on." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Nothing to do for new layers: they are placed as they are added." },
        { km: "", en: "To tidy what is already there, choose **Sort Layers by Type** from the Layers panel right-click menu or the Layer Auto-Sort submenu." },
        { km: "", en: "To stop the automatic placement, untick **Auto-sort New Layers**." },
        { km: "", en: "To use a different order, open **Layer Sort Settings**, drag the types, and press OK." },
      ] },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Sorting is **stable**: layers of the same type keep the order they already had. Groups keep their position; only the layers around them are arranged." },
        { km: "", en: "**A saved project is never reordered when it opens.** Only layers added afterwards are placed." },
        { km: "", en: "Every way of adding a layer is covered — Browser and Catalog, Add Data, Processing results, other plugins. Moving a layer yourself is never undone, and opening a layer package keeps the order recorded in the package." },
        { km: "", en: "Moving a layer never removes it from the project. Visibility, expansion and properties are kept, and the selected layer stays selected." },
        { km: "", en: "When several layers are added at once (a multi-file drop), the layers of one type may end up in reverse of the order they were added in." },
        { km: "", en: "The order and the switches are stored in the QGIS user profile, **not in the project**." },
        { km: "", en: "If the stand-alone plugin \"Layer Auto-Sort\" (`layer_autosort`) is installed, KGA Toolbox leaves its own copy out and says so, so layers are not sorted twice." },
      ] },
    ],
    seeAlso: ["kga_settings", "catalog_and_workspaces"],
  },
  {
    slug: "catalog_and_workspaces",
    group: "kgaotherfeatures",
    name: "Catalog and Workspaces",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Dock panel. Needs QGIS 3.36 or newer; left out on older versions" },
    processingPath: "KGA Toolbox toolbar ▸ Catalog, and the Project menu",
    summary: {
      km: "Catalog បែប ArcGIS Pro សម្រាប់ QGIS ដែលរក្សាទិន្នន័យគម្រោងក្នុងថត workspace តែមួយ។",
      en: "ArcGIS Pro's Catalog for QGIS, keeping a project's data together in one workspace folder.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "It replaces the Browser panel — switched off the first time, and you can switch it back on whenever you like — and keeps a project's data together in one **workspace** folder." } },
      { type: "subheading", text: { km: "", en: "Catalog tabs" } },
      { type: "list", items: [
        { km: "", en: "**Project** — Maps, Toolboxes, Databases, Layouts and Folders of the open project." },
        { km: "", en: "**Connections** — GeoPackage, PostgreSQL, WMS, XYZ Tiles, ArcGIS REST and the other QGIS connections." },
        { km: "", en: "**Computer** — Home, This PC, Network." },
        { km: "", en: "**Favorites** — items you pinned." },
      ] },
      { type: "paragraph", text: { km: "", en: "Every item is a real QGIS Browser item: drag layers onto the map, double-click to add, and use QGIS's own right-click menus plus KGA's Add to Map, Copy and Paste." } },
      { type: "subheading", text: { km: "", en: "Workspace" } },
      { type: "paragraph", text: { km: "", en: "A workspace is a folder holding `<Name>.qgz`, `Default.gpkg`, a `Toolbox` folder and a `Layouts` folder." } },
      { type: "subheading", text: { km: "", en: "Output goes to the project" } },
      { type: "paragraph", text: { km: "", en: "Like Pro's default geodatabase, every tool's output starts in the project: layers in a new table of the default database, files and folders in the default folder. Names are `<Tool>_<Input>`, never reuse an existing table or file, and follow the input layer. **This covers QGIS's Processing tools as well as KGA's.** Change any field and your choice is kept. Turn it off in Settings ▸ Projects." } },
    ],
    parameters: [
      {
        title: { km: "", en: "Workspace commands" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Project ▸ Set Workspace", type: "Menu command", default: "—", description: { km: "", en: "Pick a folder and a name; creates the workspace for the open project. Untitled work is moved in." } },
          { name: "Project ▸ Open Workspace", type: "Menu command", default: "—", description: { km: "", en: "Open an existing workspace." } },
          { name: "Make Default", type: "Right-click", default: "—", description: { km: "", en: "On a database or folder: sets where tool output goes." } },
          { name: "Attach Folder / Attach Database", type: "Right-click", default: "—", description: { km: "", en: "Attach any folder or database to the project; **Remove from Project** detaches it." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "list", items: [
        { km: "", en: "**Toolbox:** scripts placed there are read as QGIS script tools and listed under Toolboxes." },
        { km: "", en: "**Layouts and Maps:** the project's print layouts and maps are listed as shortcuts (`.kgalayout`, `.kgamap`); double-click to open one." },
        { km: "", en: "**Untitled:** a project with no workspace yet works in a scratch folder. **Set Workspace** moves its data into the new workspace. At start-up, unsaved scratch data from an earlier session is offered back with Recover or Discard, and scratch folders older than 7 days are removed. Only the data comes back, not the unsaved map layout." },
      ] },
      { type: "paragraph", text: { km: "", en: "**Saving.** Save and Save As ask whether to save as a workspace or as a traditional `.qgz` when the project is new or not in a workspace yet. Settings ▸ Catalog can make the answer fixed. A project that already has a file is simply saved." } },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Closing or opening another project through QGIS's own prompts still saves a plain `.qgz`." },
        { km: "", en: "Converting an existing `.qgz` and sharing a workspace are in **[Project Packages](project_packages.md)**." },
      ] },
    ],
    seeAlso: ["project_packages", "browser_copy_paste", "kga_settings"],
  },
  {
    slug: "project_packages",
    group: "kgaotherfeatures",
    name: "Project Packages",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Dialogs. Part of the Catalog (QGIS 3.36 or newer)" },
    processingPath: "Project menu ▸ Share Workspace, Import Project Package, Convert Project to Workspace",
    summary: {
      km: "ផ្លាស់ទីគម្រោង QGIS រវាងកុំព្យូទ័រ ឬចូលទៅក្នុង workspace ដោយមិនធ្វើឲ្យផ្លូវស្រទាប់ដាច់។",
      en: "Move a QGIS project between computers, or into a workspace, without broken layer paths.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The model is ArcGIS Pro's project package." } },
      { type: "table", head: [{ km: "", en: "Command" }, { km: "", en: "What it does" }], rows: [
        [{ km: "", en: "**Share Workspace**" }, { km: "", en: "Writes the open project as one `.kgapp` file" }],
        [{ km: "", en: "**Import Project Package**" }, { km: "", en: "Unpacks a `.kgapp` into a workspace you choose. Also on the right-click menu of a `.kgapp` in the Browser or Catalog" }],
        [{ km: "", en: "**Convert Project to Workspace**" }, { km: "", en: "Turns the open `.qgz` into a workspace, with relative paths" }],
      ] },
      { type: "subheading", text: { km: "", en: "Share Workspace" } },
      { type: "list", items: [
        { km: "", en: "**Everything:** the map, layouts, and every file and table in the project folder and databases." },
        { km: "", en: "**Map data only:** the layers in the map plus the data they need — joined and related tables, value-relation lookups, layout atlas and table layers, virtual-layer inputs, layers named in expressions." },
        { km: "", en: "Data from outside the project is copied in (vector into `Default.gpkg`, rasters into `commondata/`). Scratch and CSV layers are saved as tables. Symbol SVGs and layout pictures travel too." },
        { km: "", en: "An **analysis table** lists every layer, what will happen to it and why, before anything is written. Layers whose source is lost are flagged *not shared* and kept in the project so styles and layouts survive." },
        { km: "", en: "Packages carry a name, summary, tags, author, credits, use limitations and a thumbnail. **Passwords are never packaged.**" },
      ] },
    ],
    parameters: [],
    outputs: [],
    usage: [
      { type: "paragraph", text: { km: "", en: "**Import.** Every file is checked against its checksum. Unsafe paths and newer package formats are refused, and layers that still do not load are reported." } },
      { type: "paragraph", text: { km: "", en: "**Convert Project to Workspace** shows every layer and what will happen to its data, then builds a new workspace folder: data beside the project keeps its place, data from anywhere else is copied into `Default.gpkg` or `commondata/`. The original project and data are left untouched. A project already in a workspace is refused." } },
      { type: "paragraph", text: { km: "", en: "**Ask on open.** Opening a traditional project asks whether to convert it first. **Yes** asks where to put the workspace and opens it; **No** opens the project as before. Turn the question off in Settings ▸ Catalog or the Catalog menu." } },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Package layout: `manifest.json` (per-file size and sha256), `thumbnail.png`, and `project/` (`<Name>.qgz`, `Default.gpkg`, `Toolbox/`, `Layouts/`, `resources/`, `commondata/`)." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "PostGIS, WFS and other remote layers stay connections unless you tick the option to copy a snapshot of their data." },
        { km: "", en: "A layer that cannot be shared is listed in the analysis; **nothing is silently dropped.**" },
      ] },
    ],
    seeAlso: ["catalog_and_workspaces", "create_layer_package", "open_layer_package"],
  },
  {
    slug: "browser_copy_paste",
    group: "kgaotherfeatures",
    name: "Browser Copy and Paste",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Context-menu commands with a small options window" },
    processingPath: "Browser / Catalog right-click menu",
    summary: {
      km: "ចម្លងទិន្នន័យក្នុង Browser រួចបិទភ្ជាប់ទៅកន្លែងផ្សេង ដូច Catalog របស់ ArcGIS Pro។",
      en: "Copy data in the Browser and paste it somewhere else, the way ArcGIS Pro's Catalog does.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "File Geodatabase domains, aliases and OBJECTID travel with the data." } },
      { type: "table", head: [{ km: "", en: "Item" }, { km: "", en: "Where" }, { km: "", en: "What it does" }], rows: [
        [{ km: "", en: "**Add to Map**" }, { km: "", en: "Layers, GeoPackages, File Geodatabases" }, { km: "", en: "Adds the selection to the project. Layers that cannot be copied (web services, meshes, point clouds) can still be added" }],
        [{ km: "", en: "**Copy**" }, { km: "", en: "Layers, GeoPackages, File Geodatabases" }, { km: "", en: "Holds the selection. A whole GeoPackage or geodatabase copies every layer in it" }],
        [{ km: "", en: "**Paste**" }, { km: "", en: "Folders, GeoPackages, File Geodatabases" }, { km: "", en: "Writes the held data. Greyed out until something is copied" }],
        [{ km: "", en: "**Paste as Shapefile**" }, { km: "", en: "Folders" }, { km: "", en: "Pastes straight to shapefiles" }],
      ] },
      { type: "subheading", text: { km: "", en: "Paste targets" } },
      { type: "list", items: [
        { km: "", en: "**Folder:** as shapefile, GeoJSON, GeoPackage or File Geodatabase, as you choose." },
        { km: "", en: "**GeoPackage or File Geodatabase:** added as new tables." },
        { km: "", en: "Rasters paste only into folders, as GeoTIFF." },
      ] },
      { type: "paragraph", text: { km: "", en: "When a name already exists you choose **Keep both** (adds `_2`), **Replace the existing one** or **Skip it**. The choices are remembered." } },
    ],
    parameters: [],
    outputs: [],
    usage: [],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "A layer with a subset filter, or from PostGIS or delimited text, is written through a scratch GeoPackage first." },
        { km: "", en: "Shapefile field names are cut to 10 characters, so a long name is shortened — GDAL says so in the log." },
        { km: "", en: "**Pasting into a File Geodatabase that ArcGIS has locked is refused.**" },
      ] },
    ],
    seeAlso: ["catalog_and_workspaces", "data_explorer", "spatialdatamanager"],
  },
  {
    slug: "data_explorer",
    group: "kgaotherfeatures",
    name: "Data Explorer",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Dock panel. Needs QGIS 3.44 or newer; shortcut Ctrl+Alt+I" },
    processingPath: "KGA Toolbox toolbar ▸ Data Explorer",
    summary: {
      km: "ផ្ទាំងរុករកទិន្នន័យបែប media browser សម្រាប់មើល ស្វែងរក មើលជាមុន និងនាំចូលទិន្នន័យភូមិសាស្ត្រ។",
      en: "A media-browser style dock to browse, search, preview and ingest geodata.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Modelled on Premiere Pro's Media Browser. Browse a folder tree, preview a dataset, read its metadata, then bring it into the project." } },
      { type: "list", items: [
        { km: "", en: "**Browse and preview:** folder tree, file list and a preview with a live thumbnail, a Metadata tab and the first 50 rows of the Attributes tab. GeoPackages, KML, geodatabases and Excel files expand to pick layers." },
        { km: "", en: "**Search:** results appear as you type, ranked, with a *Why it matched* column. A background index of layers, fields, CRS and extent finds a layer inside a geodatabase or a column inside a GeoPackage. Supports `OR`, `-word`, `\"phrases\"`, wildcards and filters such as `type:raster`, `crs:32648`, `size>100mb`, `modified:7d`. Ctrl+F searches, F1 shows the syntax." },
        { km: "", en: "**Ingest:** copy a dataset with its sidecar files, or convert it — vectors to GeoPackage, FlatGeobuf, Shapefile, GeoJSON or Parquet; rasters to Cloud Optimized GeoTIFF or tiled GeoTIFF — with optional reprojection to the project CRS. Presets can be saved and shared as JSON." },
        { km: "", en: "**Proxies:** build overviews and a low-resolution proxy for big rasters without touching the original, and toggle between proxy and full resolution." },
        { km: "", en: "**Rename:** the **Rename** button opens a tab that renames the selected datasets in place, or saves renamed copies to another folder. Shapefile parts and sidecar files move together, tables inside a GeoPackage or File Geodatabase can be renamed, name clashes are caught before anything is touched, and project layers are re-pointed at the new file." },
        { km: "", en: "**Export from the preview:** the **Export** drop-down in the preview window cuts the current view, a drawn rectangle or polygon, the layer extent, or the polygons of a project layer (selected, else all) to a new file; rasters are masked to the polygon. The original is never modified." },
        { km: "", en: "**Interpret:** override CRS, encoding, NoData, feature filter and layer name, or set the CSV delimiter and X/Y or WKT columns, with a preview." },
        { km: "", en: "**Bins:** group layers by type, by folder or your own; *Import Folder as Bin* mirrors sub-folders." },
        { km: "", en: "**Background work:** ingest runs as a cancellable QGIS task. Provenance is written to the layer's metadata history." },
      ] },
    ],
    parameters: [],
    outputs: [],
    usage: [],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The original data is never modified.**" },
        { km: "", en: "The search index lives in the QGIS profile and re-reads only files that changed." },
      ] },
    ],
    seeAlso: ["catalog_and_workspaces", "browser_copy_paste", "add_data"],
  },
  {
    slug: "ui_manager",
    group: "kgaotherfeatures",
    name: "Panels and Toolbars Manager",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Dock panel, tabbed with the Catalog; shortcut Ctrl+Alt+P (rebindable in Settings \u25b8 Keyboard Shortcuts)" },
    processingPath: "KGA Toolbox toolbar \u25b8 Panels and Toolbars Manager",
    summary: {
      km: "\u1787\u17c6\u1793\u17bd\u179f\u1798\u17c9\u17ba\u1793\u17bb\u1799\u17a2\u1780\u17d2\u179f\u179a Panels / Toolbars \u2014 \u1795\u17d2\u1791\u17b6\u17c6\u1784 \u1793\u17b7\u1784\u179a\u1794\u17b6\u179a\u17a7\u1794\u1780\u179a\u178e\u17cd\u1793\u17b8\u1798\u17bd\u1799\u17d7\u1787\u17b6\u1780\u17b6\u178f \u178a\u17c2\u179b\u1794\u17be\u1780\u1793\u17b7\u1784\u1794\u17b7\u1791\u178a\u17c4\u1799\u1785\u17bb\u1785\u178f\u17c2\u1798\u17d2\u178f\u1784\u17d4",
      en: "A visual replacement for the right-click Panels / Toolbars text menu: every one is a card you toggle with one click.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Every panel and toolbar in the QGIS window, **including those added by other plugins**, is a card." } },
      { type: "list", items: [
        { km: "", en: "**Cards:** toolbars show a strip of their real tool icons; panels show a snapshot taken the first time they are open and kept on disk, so a closed panel still has a preview. Hover a snapshot to enlarge it." },
        { km: "", en: "**Search by tool name:** typing `buffer` finds the toolbar that contains a Buffer tool and says so." },
        { km: "", en: "**Filters:** Panels / Toolbars, All / Open / Hidden, Compact rows. *Show all* and *Hide all* act only on the items currently listed." },
        { km: "", en: "**Layouts:** save the current workspace \u2014 positions and visibility \u2014 under a name, apply it in one click, and export or import layouts as JSON to give a whole class the same workspace." },
        { km: "", en: "**Always current:** the list rebuilds itself when a plugin adds or removes a panel or toolbar, and follows the light or dark QGIS theme." },
      ] },
    ],
    parameters: [],
    outputs: [],
    usage: [],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Applying a layout **never hides the Panels and Toolbars Manager itself**." },
        { km: "", en: "Snapshots of a widget are only possible while it is on screen." },
      ] },
    ],
    seeAlso: ["kga_settings", "maps_and_layouts", "data_explorer"],
  },
  {
    slug: "maps_and_layouts",
    group: "kgaotherfeatures",
    name: "Map Tabs and Layout Tools",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Window features. Map tabs are Off by default" },
    processingPath: "Settings ▸ Appearance ▸ Map tabs; KGA Layout toolbar in the Layout Designer",
    summary: {
      km: "ផែនទី និង layout ជា tab ដូច ArcGIS Pro ព្រមទាំងផ្ទាំង Contents, Layout Guides និងព្រួញទិសខ្មែរ។",
      en: "Maps and layouts as tabs, a Contents panel, Layout Guides and Khmer North Arrows.",
    },
    body: [
      { type: "subheading", text: { km: "", en: "Map tabs" } },
      { type: "paragraph", text: { km: "", en: "ArcGIS Pro's maps and layouts in one tab bar above the canvas. Turn it on in **Settings ▸ Appearance ▸ Map tabs**." } },
      { type: "list", items: [
        { km: "", en: "One project can hold several **maps**, each with its own layers, extent, rotation and CRS. A map is a top-level group in the Layers panel; new layers land in the active map. **Organize this project into Map tabs** turns an existing project into maps." },
        { km: "", en: "Print layouts open as **tabs** in the main window instead of a separate Layout Designer." },
        { km: "", en: "Each map is also saved as a map theme, so a layout map frame can show any map. Adding a map frame asks which map it should show, with a preview card per map." },
        { km: "", en: "A layout tab shows a **Contents** panel in place of the Layers panel: every item on the page, and under a map frame the layers of its map, which can be switched on and off without leaving the layout." },
        { km: "", en: "Maps and layouts can be brought in from another project. The Catalog lists them as `.kgamap` and `.kgalayout` shortcuts." },
        { km: "", en: "**Duplicate a map** and the copy gets its own copy of every layer, as in Pro, so changing symbology or labels in the copy does not change the original." },
        { km: "", en: "Layout map frames follow layer style changes automatically; **Refresh Layout** on the KGA Layout toolbar redraws the frames and side panels on demand." },
        { km: "", en: "The strip keeps the top dock area to itself: other panels cannot be docked above it." },
        { km: "", en: "Everything is stored in the `.qgz`, so **a project opened without the plugin shows one group per map.**" },
      ] },
      { type: "subheading", text: { km: "", en: "KGA Layout toolbar" } },
      { type: "table", head: [{ km: "", en: "Button" }, { km: "", en: "What it does" }], rows: [
        [{ km: "", en: "**Layout Guides**" }, { km: "", en: "A panel that lays guides on the page. Step 1: margins from the page edge. Step 2: divide the area inside the margins into columns and rows, with an optional space between and centre lines. Or give exact distances such as `50, 120` from a margin. Guides update while you type; *Show guides* and *Snap to guides* switch them. Values are in millimetres" }],
        [{ km: "", en: "**Add Grid**" }, { km: "", en: "Opens [Add Grid to Layout](add_grid.md). To change a grid a map already has, right-click it in the Contents panel and choose Edit…" }],
        [{ km: "", en: "**Refresh Layout**" }, { km: "", en: "Redraws the map frames and the layer panels with the latest layer symbology" }],
        [{ km: "", en: "**Khmer North Arrows**" }, { km: "", en: "Pick a group, topic and colour, then double-click an arrow: it is inserted in the layout and linked to the layout's map, so it follows the map rotation. Styles: Khmer North Arrow, Esri North, Esri North Khmer" }],
      ] },
    ],
    parameters: [],
    outputs: [],
    usage: [],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Map tabs move the Layout Designer into the main window. Keyboard shortcuts that exist in both (Ctrl+S, Ctrl+Z, Delete) are switched off for whichever one is not on screen." },
        { km: "", en: "Switching map tabs turns the other maps' groups off and hides them in the Layers panel." },
      ] },
    ],
    seeAlso: ["add_grid", "kga_settings", "callout_label_studio"],
  },
  {
    slug: "clip_basemap",
    group: "kgaotherfeatures",
    name: "Clip Basemap by Boundary",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Window" },
    processingPath: "KGA Toolbox toolbar ▸ Clip Basemap by Boundary",
    summary: {
      km: "បង្ហាញផែនទីមូលដ្ឋានតែនៅក្នុងព្រំដែនមួយ ដោយមិនទាញយក ឬសរសេរអ្វីទៅថាសឡើយ។",
      en: "Show a basemap only inside a boundary. Nothing is downloaded or written to disk.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "So a map keeps its satellite or street background just where you need it. A mask layer, filled with the map background colour, covers everything outside the boundary, just above the basemap in the Layers panel." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Boundary", type: "Layer / extent / drawn", default: "—", description: { km: "", en: "A polygon layer, a layer or map extent, or a rectangle or polygon you draw on the map." } },
          { name: "Basemap", type: "Combo box", default: "—", description: { km: "", en: "A preset such as Google Satellite or OpenStreetMap, or a raster layer already in the project." } },
          { name: "Clip", type: "Button", default: "—", description: { km: "", en: "Applies the boundary to the basemap." } },
          { name: "Remove Clip", type: "Button", default: "—", description: { km: "", en: "Shows the whole basemap again." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: { km: "", en: "**Add Quick Basemap** — the toolbar drop-down and menu — adds an OSM, Google or ESRI basemap in one click. The same XYZ Tiles connections are listed in the Browser. A connection you edit or delete is not put back." } },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "Needs an internet connection for the basemap tiles." },
        { km: "", en: "The window stays open beside the map, so the boundary can be changed and clipped again." },
      ] },
    ],
    seeAlso: ["add_data", "imagery_downloader"],
  },
  {
    slug: "zoom_to_location",
    group: "kgaotherfeatures",
    name: "Zoom to Location",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Window" },
    processingPath: "KGA Toolbox toolbar \u25b8 Zoom to Location",
    summary: {
      km: "\u1795\u17d2\u179b\u17b6\u179f\u17cb\u1791\u17b8\u1795\u17c2\u1793\u1791\u17b8\u1791\u17c5\u1791\u17b8\u178f\u17b6\u17c6\u1784\u1798\u17bd\u1799 \u178a\u17c4\u1799\u1787\u17d2\u179a\u17be\u179f\u178f\u17b6\u1798\u1794\u178e\u17d2\u178f\u17b6\u1787\u17b6\u1790\u17d2\u1793\u17b6\u1780\u17cb \u2014 \u1794\u17d2\u179a\u1791\u17c1\u179f \u1781\u17c1\u178f\u17d2\u178f \u179f\u17d2\u179a\u17bb\u1780 \u17788\u17bb\u17c6 \u2014 \u17ac\u179c\u17b6\u1799\u1794\u1789\u17d2\u1785\u17bc\u179b\u1780\u17bc\u17a2\u179a\u178a\u17c4\u1793\u17c1\u17d4",
      en: "Move the map to a place by picking continent, country, province, district, commune and village \u2014 or by typing a coordinate.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Each list is filled from the one above it, and **you can stop at any rung**: pick only a country to see the whole country, or go down to one commune. The button sits next to **[Clip Basemap by Boundary](clip_basemap.md)** on the KGA Toolbox toolbar." } },
      { type: "subheading", text: { km: "", en: "Where the data comes from" } },
      { type: "list", items: [
        { km: "", en: "**Provinces, districts, communes:** geoBoundaries (gbOpen, simplified), levels ADM1 to ADM3. It does not say which district is in which province, so the window works that out from the shapes. **Boundaries are the published ones, which can differ from the official ones** \u2014 check the layer's metadata for the licence." },
        { km: "", en: "**Villages:** OpenStreetMap contributors (ODbL), through the Overpass API. Coverage varies a lot by country and area; an empty list means OpenStreetMap has no named village there, not that there are none." },
        { km: "", en: "**Continents and countries:** the country list and extents that ship with the plugin and QGIS." },
      ] },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Continent, Country", type: "", default: "Asia", description: { km: "", en: "Built in, so they open instantly and work offline." } },
          { name: "Province, District, Commune", type: "", default: "", description: { km: "", en: "The first, second and third admin level of the country. Each is a check list: tick several and the list below holds the places of all of them. A list is greyed out when the country publishes no boundaries at that level." } },
          { name: "Village", type: "", default: "", description: { km: "", en: "A check list of the villages OpenStreetMap places inside the ticked communes, or districts when the country has no communes. Only named villages are listed." } },
          { name: "Basemap", type: "", default: "", description: { km: "", en: "A preset such as Google Satellite, a basemap already in the project, or **No basemap**. It is added to the map when it is not there yet." } },
          { name: "Clip basemap for the area? (by extent)", type: "", default: "off", description: { km: "", en: "Show the basemap only inside the box around the place. **Remove Clip** in Clip Basemap by Boundary undoes it." } },
          { name: "Add the location data to map?", type: "", default: "off", description: { km: "", en: "Add the place as a layer: its outline, or a point for a village or a coordinate. A continent has no outline to add." } },
          { name: "Or type coordinate", type: "", default: "", description: { km: "", en: "Latitude, longitude in decimal degrees, for example `11.5972, 104.8887`. `11.5972N 104.8887E` also works. **When this box is filled in it is used instead of the lists.**" } },
          { name: "Zoom To", type: "", default: "", description: { km: "", en: "Moves the map to fit every place ticked in the deepest list that has a tick, and flashes the outlines." } },
        ],
      },
    ],
    outputs: [],
    usage: [],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Needs an internet connection** for provinces, districts, communes and villages. Boundary files are cached in the QGIS profile, so a country you have used opens quickly and works offline. Villages are cached for a week." },
        { km: "", en: "Villages are looked up in the background, so the window never freezes. The Village list stays greyed out when OpenStreetMap has no named village for the area." },
        { km: "", en: "The first time a country's districts or communes are opened, **the file for the whole country is downloaded**." },
        { km: "", en: "A village or typed coordinate is framed with a box about 2 km across." },
        { km: "", en: "If the map's coordinate system cannot show the place \u2014 a UTM zone far from it \u2014 the window says so; change the project CRS, for example to EPSG:4326 or EPSG:3857." },
      ] },
    ],
    seeAlso: ["clip_basemap", "add_data", "catalog_and_workspaces"],
  },
  {
    slug: "kga_settings",
    group: "kgaotherfeatures",
    name: "KGA Settings and Check for Update",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Dialogs. Settings are stored in the QGIS profile (KGA/settings/), not in the project" },
    processingPath: "KGA Toolbox menu ▸ Settings, Check for Update",
    summary: {
      km: "តម្លៃលំនាំដើមសម្រាប់គម្រោងថ្មី ការជ្រើសរើសបែប Pro ទំព័រចាប់ផ្តើម ស្បែក និង Shape_Length / Shape_Area។",
      en: "New-project defaults, Pro-style selection and Layers panel, start page, theme, and Shape_Length / Shape_Area.",
    },
    body: [
      { type: "subheading", text: { km: "", en: "Projects" } },
      { type: "table", head: [{ km: "", en: "Setting" }, { km: "", en: "Default" }], rows: [
        [{ km: "", en: "Default location for new workspaces" }, { km: "", en: "`Documents\\\\KGA Toolbox Project`" }],
        [{ km: "", en: "Default CRS of new projects" }, { km: "", en: "EPSG:32648, WGS 84 / UTM zone 48N" }],
        [{ km: "", en: "Save tool output in the project default database and folder" }, { km: "", en: "On" }],
        [{ km: "", en: "Keep Shape_Length and Shape_Area up to date on project database layers" }, { km: "", en: "On" }],
        [{ km: "", en: "Add a basemap to every new project" }, { km: "", en: "On, Google Terrain Hybrid" }],
        [{ km: "", en: "Zoom new projects to a country" }, { km: "", en: "On, Cambodia" }],
      ] },
      { type: "subheading", text: { km: "", en: "Appearance" } },
      { type: "list", items: [
        { km: "", en: "Match QGIS to the computer's light or dark mode — **Off**." },
        { km: "", en: "Show selected features in ArcGIS Pro style: symbol kept, bright cyan outline — **On**." },
        { km: "", en: "Show the Layers panel in ArcGIS Pro style: filled-triangle expanders, roomier rows, light-blue selection — **On**." },
        { km: "", en: "Map tabs, with three sub-options — **Off**. See **[Map Tabs and Layout Tools](maps_and_layouts.md)**." },
        { km: "", en: "**Smooth navigation (ArcGIS Pro style)** — **On**. Animated wheel zoom under the cursor, kinetic pan glide after a Pan-tool or middle-button drag, continuous arrow-key pan and smooth Page Up / Page Down zoom, and an underlay that fills the edges while zooming out. Sub-options: zoom smoothness (110 ms), glide length (325 ms), keyboard, underlay." },
        { km: "", en: "Show the KGA start page instead of the QGIS welcome page — **On**." },
        { km: "", en: "Remember the toolbars and panels that are enabled — **Off**." },
      ] },
      { type: "subheading", text: { km: "", en: "Shape_Length and Shape_Area" } },
      { type: "paragraph", text: { km: "", en: "On line and polygon layers in the project databases, these fields are added and recalculated whenever a feature is created or edited, as a File Geodatabase does. **Values are planar, in the units of the layer's CRS.** *Layer ▸ Add Shape_Length / Shape_Area Fields* does it for the selected layer on demand." } },
    ],
    parameters: [],
    outputs: [],
    usage: [
      { type: "paragraph", text: { km: "", en: "**Start page.** Shown when no project is open. *New:* Map, Workspace, Import Package, and templates from the profile's `project_templates` folder. *Open:* recent projects as cards, with find, sort, grid or list, and a \"…\" menu." } },
      { type: "paragraph", text: { km: "", en: "**Check for Update** opens a window that asks `api.github.com` for the latest release of the plugin's repository and says whether yours is current. Only when you open it; **no project data is sent.**" } },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "New-project settings apply to **new projects only**; an opened project is never changed." },
        { km: "", en: "The basemap needs an internet connection." },
        { km: "", en: "The cyan selection and Pro Layers panel styles can be turned off to get the standard QGIS look back." },
        { km: "", en: "**Smooth navigation** adds a right-button drag on the Pan tool: up zooms in, down zooms out, about the point you pressed (about 2× per 115 px). A right-click without dragging does nothing, as before." },
        { km: "", en: "The animation runs at the refresh rate of the screen the map is on, and works through event filters on each map canvas — turning it off removes them and QGIS navigates as before." },
      ] },
    ],
    seeAlso: ["catalog_and_workspaces", "maps_and_layouts", "layer_auto_sort"],
  },
  {
    slug: "add_quick_template",
    group: "kgaotherfeatures",
    name: "Add Quick Template",
    icon: "LayoutGrid",
    status: "full",
    youtubeId: null,
    algorithmId: null,
    interactive: true,
    toolType: { km: "", en: "Interactive dialog — modeless" },
    processingPath: "KGA Toolbox toolbar ▸ Add Quick Template",
    summary: {
      km: "បង្កើតស្រទាប់ចំណុច បន្ទាត់ ឬពហុកោណទទេ ដែលមាន fields ស្តង់ដារ ក្នុងពីរបីចុច។",
      en: "Create an empty point, line or polygon layer with standard fields, in a few clicks.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The window stays open, so several layers can be made one after another." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Layer name", type: "Text", default: "Point / Line / Polygon Template", description: { km: "", en: "Defaults to match the geometry, until you type your own." } },
          { name: "Geometry", type: "Combo box", default: "Point", description: { km: "", en: "Point, Line or Polygon. **The layer is always multipart** (MultiPoint, MultiLineString, MultiPolygon), as in ArcGIS Pro, so a feature can have several parts whenever it needs them." } },
          { name: "CRS", type: "CRS selector", default: "EPSG:32648", description: { km: "", en: "WGS 84 / UTM zone 48N by default; use the button beside it to choose another." } },
          { name: "Use the default fields", type: "Boolean", default: "—", description: { km: "", en: "Adds `name`, `id`, `note` and one measurement: `xy` (point), `length_m` (line) or `area_m2` (polygon). The measurement fills itself in when a feature is drawn, using `$x`/`$y`, `$length` or `$area`." } },
          { name: "Copy the field format from a layer", type: "Layer input", default: "—", description: { km: "", en: "Pick a project layer, drag one in from the Layers panel, the Browser or a file manager, or use *Browse…* or *Browse GDB…*. Its fields are listed with checkboxes; only the ticked ones are created. Fields the format maintains itself (`fid`, `OBJECTID`, `Shape_Area` …) are listed but off." } },
          { name: "Save as", type: "Combo box", default: "Temporary layer", description: { km: "", en: "Or Shapefile, GeoPackage or File Geodatabase, with a file path. File Geodatabase needs GDAL 3.6 or newer." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: { km: "", en: "The two field options switch each other off; with both off the layer has no attribute fields." } },
    ],
    results: [],
    notes: [
      { type: "list", items: [
        { km: "", en: "`$length` and `$area` follow the project's distance and area units, so the `_m` / `_m2` fields are in metres **only when the project is set to metres**." },
        { km: "", en: "In a GeoPackage, Shapefile or File Geodatabase the draw-time expressions are stored in the QGIS project, not in the file." },
        { km: "", en: "A Shapefile cuts field names to 10 characters; the window warns first." },
        { km: "", en: "Saving into an existing GeoPackage or geodatabase adds the layer, replacing one of the same name." },
      ] },
    ],
    seeAlso: ["create_features", "create_points_from_table", "duplicate_to_new_layer"],
  },
];

/**
 * Groups that document things which are not Processing algorithms. Their pages
 * exist and are linked, but they are not counted as tools: the plugin's own
 * README counts 53 tools, and so must the stat tile.
 */
export const NON_PROCESSING_GROUPS = ["kgaeditor", "kgaotherfeatures"];

const isProcessing = (item) => !NON_PROCESSING_GROUPS.includes(item.group ?? item.id);

// Derived, never typed. `toolCount` is what the plugin calls a tool;
// `pageCount` is how many pages this section actually serves.
PLUGIN.toolCount = tools.filter(isProcessing).length;
PLUGIN.groupCount = groups.filter(isProcessing).length;
PLUGIN.pageCount = tools.length;

export const SLUGS = tools.map((tool) => tool.slug);

export const getToolBySlug = (slug) => tools.find((tool) => tool.slug === slug);
export const getGroupById = (id) => groups.find((group) => group.id === id);

/**
 * A group's own entries. Sub-tools (the 30 inside the Modify Features pane)
 * carry a `parent` and hang off that page instead of sitting beside it, so they
 * are left out here and the group listing stays the length the plugin says.
 */
export const getToolsInGroup = (id) =>
  tools.filter((tool) => tool.group === id && !tool.parent);

/** The sub-tools of one page, in metadata order. */
export const getChildren = (slug) => tools.filter((tool) => tool.parent === slug);

/** The sub-tools of one page, grouped by the pane category they sit in. */
export const getChildrenByCategory = (slug) => {
  const out = [];
  for (const child of getChildren(slug)) {
    const last = out[out.length - 1];
    if (last && last.category === child.category) last.items.push(child);
    else out.push({ category: child.category, items: [child] });
  }
  return out;
};

/** Previous/next within the tool's own group, so paging never jumps groups. */
export const getToolNeighbours = (slug) => {
  const tool = getToolBySlug(slug);
  if (!tool) return { prev: null, next: null };
  // A sub-tool pages among its fellow sub-tools, never out into the group.
  const siblings = tool.parent ? getChildren(tool.parent) : getToolsInGroup(tool.group);
  const index = siblings.findIndex((item) => item.slug === slug);
  return { prev: siblings[index - 1] ?? null, next: siblings[index + 1] ?? null };
};

// A mistyped slug is the one failure that 404s a Help button already shipped in
// the plugin, so shout about it in development. Stripped from production builds.
if (process.env.NODE_ENV !== "production") {
  const duplicates = SLUGS.filter((slug, i) => SLUGS.indexOf(slug) !== i);
  if (duplicates.length) console.error("[qgisDocs] duplicate slugs:", duplicates);

  const orphans = tools.filter((tool) => !groups.some((group) => group.id === tool.group));
  if (orphans.length) console.error("[qgisDocs] unknown group:", orphans.map((tool) => tool.slug));

  const empty = groups.filter((group) => !tools.some((tool) => tool.group === group.id));
  if (empty.length) console.error("[qgisDocs] empty groups:", empty.map((group) => group.id));
}
