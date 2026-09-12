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
  version: "0.1.0",
  qgisMinimum: "3.28",
  toolCount: 41,
  groupCount: 7,
  price: { km: "ឥតគិតថ្លៃ", en: "Free of charge" },
  // Overview demo. Set a YouTube id to reveal the player; null keeps it hidden.
  youtubeId: null,
  tagline: {
    km: "កម្មវិធីជំនួយ QGIS ឥតគិតថ្លៃ ដែលបន្ថែមឧបករណ៍ដំណើរការ ៤១ ជា ៧ ក្រុម",
    en: "A free QGIS plugin that adds 41 processing tools in 7 groups",
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
    { icon: "Boxes", title: { km: "ឧបករណ៍ ៤១ ជា ៧ ក្រុម", en: "41 tools in 7 groups" },
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
];

export const tools = [
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
      { type: "paragraph", text: { km: "", en: "Packages layers, their styles and everything those styles need into a single `.kgalp` file that opens on a machine that has never seen the data." } },
      { type: "paragraph", text: { km: "", en: "A QLR file only *points at* data that has to travel beside it. A layer package *contains* it. Vector layers are copied into one GeoPackage inside the archive — field domains included — rasters are copied as their own files with their sidecars, each style is saved as a QML, and every SVG symbol and raster marker image the symbology references is collected and de-duplicated. The group structure of the Layers panel is recorded so the receiving end rebuilds it." } },
      { type: "paragraph", text: { km: "", en: "Reach for it when you need to hand a styled map to a colleague, a client or a field team as one file." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Layers to package", type: "Multiple map layers", default: "—", description: { km: "", en: "The vector and raster layers to include. Anything that is neither is skipped with a warning." } },
          { name: "Package only the selected features", type: "Boolean", default: "`False`", description: { km: "", en: "Package just the current selection of each vector layer instead of all its features." } },
          { name: "Collect SVG symbols and marker images", type: "Boolean", default: "`True`", description: { km: "", en: "Copies the SVG and image files the symbology points at into the package and records where they came from, so the symbols still render on the far side." } },
          { name: "Include layer metadata", type: "Boolean", default: "`True`", description: { km: "", en: "Stores each layer's title, abstract and identifier in the manifest." } },
          { name: "Layer package", type: "File destination", default: "—", description: { km: "", en: "The `.kgalp` to write. The extension is appended if you leave it off." } },
          { name: "Package report", type: "File destination (HTML)", default: "not created", description: { km: "", en: "Optional run report: counts, a per-layer table and every warning. Tick it in the Processing dialog to produce one." } },
        ],
      },
    ],
    outputs: [
      { name: "Layers packaged", type: "Number", description: { km: "", en: "Vector plus raster layers actually written (skipped layers are not counted)." } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load and style the layers in QGIS exactly as you want them to arrive." },
        { km: "", en: "Open **KGA Data Management > Create Layer Package**." },
        { km: "", en: "Click the **…** button beside *Layers to package* and tick the layers. Group structure comes from the Layers panel, not from this list." },
        { km: "", en: "If you only want part of the data, select those features on the map first and tick **Package only the selected features**." },
        { km: "", en: "Choose where the `.kgalp` goes and press **Run**." },
        { km: "", en: "Read the log. Warnings here are the ones that matter — especially fonts." },
        { km: "", en: "Send the single `.kgalp` file. The recipient opens it with **[Open Layer Package](open_layer_package.md)**." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { text: { km: "", en: "One `.kgalp` archive at the chosen path, holding:" }, items: [
          { km: "", en: "a GeoPackage with every vector layer (field domains preserved)," },
          { km: "", en: "each raster copied as its own file with its sidecars," },
          { km: "", en: "a QML style per layer," },
          { km: "", en: "the collected SVG and marker image files, de-duplicated," },
          { km: "", en: "a manifest recording the layers, CRSs, styles, resources and group tree." },
        ] },
        { km: "", en: "An optional HTML **Package report**." },
        { km: "", en: "The **Layers packaged** count in the Processing results panel." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Fonts cannot be packaged.** If a layer uses a font marker you get a warning naming the font, so you can tell the recipient what to install. Nothing else in the styling has this problem." },
        { km: "", en: "**The manifest is written last, on purpose.** A package interrupted halfway through has no manifest, and Open Layer Package refuses it rather than opening a half-loaded project. An interrupted run leaves a file you should delete." },
        { km: "", en: "Invalid layers, and layers that are neither vector nor raster, are skipped — each with a warning naming the layer. Check the count in the log against the number you ticked." },
        { km: "", en: "Package size is reported in the change report. Rasters dominate it; a large DEM makes a large package." },
        { km: "", en: "Pairs with **[Open Layer Package](open_layer_package.md)**, which is why the two sit at the top of the Data Management menu together." },
      ] },
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
      { type: "paragraph", text: { km: "", en: "The package is extracted to a real folder on disk, never to a temporary one, because the layers point at the extracted files — a temp folder would leave a project full of broken layers after the next restart. SVG and image paths inside each style are rewritten to the extracted copies, so the symbology renders the same as it did on the machine that built the package." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Layer package", type: "File (`.kgalp`)", default: "—", description: { km: "", en: "The package to open." } },
          { name: "Extract to", type: "Folder destination", default: "not created", description: { km: "", en: "Where the contents are unpacked. Leave it empty and a `KGA Packages/<package name>` folder is created beside the project file (or in your home folder if the project has never been saved); the log says where everything went." } },
          { name: "Add the layers to the project", type: "Boolean", default: "`True`", description: { km: "", en: "Untick to extract only, without touching the Layers panel." } },
          { name: "Group name (the package name if empty)", type: "String", default: "empty", description: { km: "", en: "The Layers-panel group the layers are placed in. Defaults to the package file name." } },
        ],
      },
    ],
    outputs: [
      { name: "Extraction folder", type: "String", description: { km: "", en: "The folder the package was unpacked into." } },
      { name: "Layers added", type: "Number", description: { km: "", en: "How many layers reached the project. `0` when *Add the layers to the project* is off." } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Open Layer Package**." },
        { km: "", en: "Point **Layer package** at the `.kgalp` you received." },
        { km: "", en: "Choose an **Extract to** folder somewhere permanent — beside the project is the usual choice. Skipping this is fine; the default is also permanent." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "The layers appear in a group named after the package, styled, with the group structure of the original project rebuilt." },
        { km: "", en: "Read the log for warnings carried over from the packaging machine — a missing font is the common one." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "The extracted package on disk: a GeoPackage of vector layers, raster files, QML styles, and the collected SVG/marker resources." },
        { km: "", en: "The layers in the project, inside one group, with their styles applied and their symbol paths repointed at the extracted resources." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Do not extract to a temporary folder.** The layers reference the extracted files; if the folder disappears the project breaks. This is why the tool never uses a temp folder even when you leave the parameter empty." },
        { km: "", en: "**Fonts still have to be installed by hand.** The package carries a warning naming any font marker it could not include; it is repeated in the log here." },
        { km: "", en: "A package whose writing was interrupted has no manifest and is refused with a clear error, rather than opening half-loaded." },
        { km: "", en: "Archive entries that would be written outside the extraction folder are refused — a package cannot write elsewhere on your disk." },
        { km: "", en: "Layers listed in the manifest but missing from the archive are warned about and skipped; anything not mentioned by the recorded group tree is still hung off the group directly, so no layer is silently dropped." },
      ] },
    ],
    seeAlso: ["create_layer_package"],
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
      { type: "paragraph", text: { km: "", en: "Bulk-exports the vector layers of the current project to GeoPackage, Shapefile, GeoJSON, KML or CSV, and pulls layers out of any vector file back into the project — in one window, with a tick box per layer." } },
      { type: "paragraph", text: { km: "", en: "QGIS can export one layer at a time through *Export > Save Features As*. This is the same job for twenty layers, with renaming on the way out and a single output folder. Because the window is **modeless** you can drag a file straight from the Browser panel onto it." } },
      { type: "paragraph", text: { km: "", en: "The tool is promoted onto the KGA toolbar as its own button." } },
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
        title: { km: "", en: "Tab 1 — Export Layers" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Project layer table", type: "Checkable table", default: "nothing ticked", description: { km: "", en: "The vector layers in the QGIS Layers panel. Columns: *Layer*, *Geometry*, *Features*, *Export As*. *Export As* is editable, so you can rename on the way out. Double-click a row to toggle it." } },
          { name: "**Select All** / **Clear All**", type: "Buttons", default: "—", description: { km: "", en: "Tick or untick every row." } },
          { name: "Refresh from Layers Panel", type: "Button", default: "—", description: { km: "", en: "Re-read the Layers panel after adding or removing layers in QGIS." } },
          { name: "Output Format", type: "Combo box", default: "GeoPackage", description: { km: "", en: "`GeoPackage (.gpkg)` — all layers in one file; `ESRI Shapefile (.shp)`, `GeoJSON (.geojson)`, `KML (.kml)`, `CSV (.csv)` — one file per layer. CSV writes attributes with geometry as WKT." } },
          { name: "GeoPackage File", type: "Text box", default: "`export_layers.gpkg`", description: { km: "", en: "Name of the single output container. Only shown for the GeoPackage format." } },
          { name: "Output Folder", type: "Read-only path box", default: "empty", description: { km: "", en: "Where everything is written. Set it with **Browse Folder**." } },
          { name: "Export selected features only", type: "Checkbox", default: "unticked", description: { km: "", en: "Exports the current map selection of each layer instead of all its features." } },
          { name: "Overwrite layers that already exist in the target (otherwise a numbered name is used)", type: "Checkbox", default: "unticked", description: { km: "", en: "Off, a name clash gets a numbered suffix rather than replacing anything." } },
          { name: "Export Checked Layers", type: "Button", default: "—", description: { km: "", en: "Runs the export and reports a summary." } },
        ],
      },
      {
        title: { km: "", en: "Tab 2 — Import Layers" },
        nameLabel: "Control",
        blocks: [],
        rows: [
          { name: "Source File", type: "Read-only path box, drop target", default: "empty", description: { km: "", en: "The file to read. Drag a `.gpkg`, `.shp`, `.geojson`, `.kml` and so on here from the Browser panel, or use **Browse File**." } },
          { name: "Layer table", type: "Checkable table", default: "nothing ticked", description: { km: "", en: "The layers found inside the source. Columns: *Layer*, *Geometry*, *Features*, *Add As*. *Add As* is editable, so you can rename on the way in." } },
          { name: "**Select All** / **Clear All**", type: "Buttons", default: "—", description: { km: "", en: "Tick or untick every row." } },
          { name: "Rescan File", type: "Button", default: "—", description: { km: "", en: "Re-read the source after it changed on disk." } },
          { name: "Add the imported layers to the project", type: "Checkbox", default: "**ticked**", description: { km: "", en: "Untick to scan without loading anything." } },
          { name: "Reproject to the project CRS on import (creates a memory layer)", type: "Checkbox", default: "unticked", description: { km: "", en: "On, each layer arrives reprojected — as a memory layer, so save it if you want to keep it." } },
          { name: "Import Checked Layers", type: "Button", default: "—", description: { km: "", en: "Runs the import and reports a summary." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "paragraph", text: { km: "", en: "**To export:**" } },
      { type: "steps", items: [
        { km: "", en: "Open **KGA Data Management > Layer Export / Import**, or press its button on the KGA toolbar. Close the Processing window once the pane appears." },
        { km: "", en: "On **1. Export Layers**, tick the layers. Edit the *Export As* cell to rename one on the way out." },
        { km: "", en: "Choose the **Output Format**. GeoPackage puts everything in one file; the others write one file per layer." },
        { km: "", en: "Set the **Output Folder** with **Browse Folder**, then press **Export Checked Layers**." },
      ] },
      { type: "paragraph", text: { km: "", en: "**To import:**" } },
      { type: "steps", items: [
        { km: "", en: "Switch to **2. Import Layers**." },
        { km: "", en: "Drag the source file onto **Source File** from the Browser panel, or use **Browse File**. The layers it holds are listed." },
        { km: "", en: "Tick the ones you want, edit the *Add As* names if needed." },
        { km: "", en: "Tick **Reproject to the project CRS** only if you need it — the result is a memory layer you will have to save." },
        { km: "", en: "Press **Import Checked Layers**." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "**Export:** the ticked layers written to the chosen folder — one GeoPackage holding all of them, or one file per layer for the other formats. A summary message box lists what was written, skipped and failed." },
        { km: "", en: "**Import:** the ticked layers added to the project, renamed as you asked, optionally reprojected." },
      ] },
      { type: "paragraph", text: { km: "", en: "Nothing is returned to Processing." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The window stays open.** Close the Processing dialog behind it and keep working. Running the tool again while the window is open brings it forward; running it after you closed it starts clean, with the ticks, output folder and scanned file cleared." },
        { km: "", en: "**Reprojected imports are memory layers.** They disappear when the project closes unless you save them to a file." },
        { km: "", en: "**Styles do not travel here.** This tool moves data. To carry symbology, labels, aliases and forms along, use **[Spatial Data Manager](spatialdatamanager.md)** (its Export tab writes styles into the target) or **[Create Layer Package](create_layer_package.md)**." },
        { km: "", en: "Shapefile output truncates field names to 10 characters; CSV output keeps attributes only, with the geometry as a WKT column." },
        { km: "", en: "`layer_styles` and `qgis_projects` are QGIS housekeeping tables and never appear in the import list." },
        { km: "", en: "The tool cannot run headless or inside a model — it needs the QGIS main window." },
      ] },
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
    slug: "planarizelines",
    group: "kgageometryutilities",
    name: "Planarize Lines",
    icon: "Shapes",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:planarizelines",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm (runs on the GUI thread — the in-place branch writes into a project layer)" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Geometry Utilities ▸ Planarize Lines",
    summary: {
      km: "បំបែកបន្ទាត់នៅកន្លែងដែលកាត់គ្នា បង្កើតជាបន្ទាត់ផ្នែកតែមួយដែលគ្មានការកាត់គ្នា។ គុណលក្ខណៈពីបន្ទាត់ដើមត្រូវបានរក្សាទុក។",
      en: "Splits lines where they intersect, creating planarized single-part lines with no cross-overs. Attributes from the original lines are retained.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "This is the step a network needs before it is a network: a canal layer digitized as long runs that cross each other has no node where they meet, so routing, topology checks and length-per-reach all give the wrong answer. Planarizing puts a break at every crossing." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input Line Layer", type: "Feature source (line)", default: "—", description: { km: "", en: "The lines to planarize." } },
          { name: "Planarize the input layer in place (no output layer)", type: "Boolean", default: "`False`", description: { km: "", en: "Off, a new layer is written and the input is untouched. On, the input layer's features are replaced by the planarized ones and no output layer is produced." } },
          { name: "Planarized Output", type: "Feature sink (line), optional", default: "temporary layer", description: { km: "", en: "Where the result goes. Ignored when the in-place box is ticked." } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Geometry Utilities > Planarize Lines**." },
        { km: "", en: "Pick the **Input Line Layer**." },
        { km: "", en: "Leave the in-place box off for the first run — check the result, then decide." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "To rewrite the source instead, load it in the project, tick **Planarize the input layer in place**, and run again." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "A line layer of single-part, non-crossing segments, each carrying the attributes of the line it came from." },
        { km: "", en: "In place: the input layer's features replaced by those segments, and **no** output layer." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Feature ids are not preserved**, in either mode. One input line becomes several output segments, so there is no id to keep. Joins and relates keyed on the old ids will not survive." },
        { km: "", en: "**In place needs a real project layer** whose provider can add and delete features — not a file path typed into the parameter, and not a read-only source." },
        { km: "", en: "**In place respects an edit session.** If the layer is already in edit mode the change is left in the edit buffer so you can undo it; otherwise it is committed." },
        { km: "", en: "The original attributes are duplicated onto every segment. A length field carried across this way is now wrong for each piece — recompute it with **[Update Geometry Fields](updategeometryfields.md)**." },
      ] },
    ],
    seeAlso: ["updategeometryfields"],
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
      { type: "paragraph", text: { km: "", en: "Converts a surveyed point CSV straight into a DEM GeoTIFF and contour lines, in one pass." } },
      { type: "paragraph", text: { km: "", en: "This is the small-job version of the workflow: one survey file, one interpolation pass, contours out the other end. For a large survey, a resumable run, or a DEM you already have, use **[DEM and Contour Tool](demcontourtool.md)** instead — it is the same job with tiling, checkpointing and a DEM-only mode." } },
      { type: "paragraph", text: { km: "", en: "**CSV columns:** `No`, `Easting`, `Northing`, `Elevation`, `Code`. A dual side-by-side layout — two blocks of columns on one sheet, as some total stations export — is detected automatically." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Input Point CSV", type: "File (`*.csv`)", default: "—", description: { km: "", en: "The survey file." } },
          { name: "Output Folder", type: "Folder destination", default: "—", description: { km: "", en: "" } },
          { name: "DEM Resolution (m) [0 = auto-detect]", type: "Number, optional", default: "`0.0`", description: { km: "", en: "Auto-detect derives a cell size from the point spacing. Set it when you need a specific grid." } },
          { name: "Interpolation Method", type: "Enum", default: "`IDW`", description: { km: "", en: "`IDW`, `Linear`, `Cubic`, `Nearest Neighbour`." } },
          { name: "CRS – EPSG Code", type: "Integer", default: "`32648`", description: { km: "", en: "The CRS the Easting/Northing values are already in. `32648` is WGS 84 / UTM zone 48N, which covers most of Cambodia." } },
          { name: "Generate Contour Lines", type: "Boolean", default: "`True`", description: { km: "", en: "Off, only the DEM is produced." } },
          { name: "Contour Interval (m)", type: "Number (min 0.01)", default: "`1.0`", description: { km: "", en: "" } },
          { name: "Contour Smoothing – Gaussian σ (0 = off)", type: "Number (min 0.0)", default: "`1.0`", description: { km: "", en: "Smooths the surface before contouring, so the lines are not ragged. `0` contours the raw grid." } },
          { name: "Contour Output Format", type: "Enum", default: "`Shapefile (.shp)`", description: { km: "", en: "Or `GeoPackage (.gpkg)`." } },
          { name: "Add output layers to QGIS map canvas", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Irrigation Tools > CSV to DEM and Contour**." },
        { km: "", en: "Pick the **Input Point CSV** and an **Output Folder**." },
        { km: "", en: "Set the **CRS – EPSG Code** to the system the survey was recorded in. Getting this wrong is what puts the DEM in the wrong hemisphere." },
        { km: "", en: "Leave **DEM Resolution** at `0` for the first run and look at what the auto-detected cell size gives you." },
        { km: "", en: "Choose the **Interpolation Method** — `IDW` is the safe default for scattered survey points; `Linear` and `Cubic` assume a denser, more even sample." },
        { km: "", en: "Set the **Contour Interval** and press **Run**." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "In the output folder, named after the input CSV:" } },
      { type: "list", items: [
        { km: "", en: "`{name}_DEM.tif` — the interpolated DEM as a GeoTIFF." },
        { km: "", en: "`{name}_Contour_{interval}m.shp` (or `.gpkg`) — the contour lines, when *Generate Contour Lines* is on." },
      ] },
      { type: "paragraph", text: { km: "", en: "Both are added to the map canvas when that box is ticked." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Requires numpy, pandas and scipy**, all bundled with QGIS." },
        { km: "", en: "**The EPSG code is the CRS the numbers are already in**, not one to reproject to." },
        { km: "", en: "**Smoothing changes the surface, not just the lines.** A Gaussian σ of 1 is a light touch; raise it only if the survey is noisy, and remember the contours then no longer pass exactly through the surveyed elevations." },
        { km: "", en: "**`Cubic` can overshoot** beyond the range of the input points at the edges of the survey, producing elevations no one measured. Check the DEM's min and max against the CSV." },
        { km: "", en: "For a large survey, a run you need to resume, or a DEM you already have, use **[DEM and Contour Tool](demcontourtool.md)**." },
      ] },
    ],
    seeAlso: ["demcontourtool"],
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
      { type: "paragraph", text: { km: "", en: "Corrects one or more DEMs against a **Reference DEM** you choose — your LiDAR, or whatever survey you trust — optionally merges them all into one seamless raster, and builds a Statistics tab and a Visualization tab summarising correction quality and post-correction agreement." } },
      { type: "paragraph", text: { km: "", en: "This is the tool for a project whose elevation data arrived from several sources at different dates and different accuracies: a LiDAR block, a drone survey, an older contour-derived grid. Each has its own vertical bias, and stitching them untreated gives steps at every seam." } },
      { type: "paragraph", text: { km: "", en: "**The Reference DEM is never modified** — it is the elevation truth every other DEM is corrected toward. The other DEMs are auto-sorted from finest to coarsest resolution and **chained**: the finest is corrected directly against the Reference, the next-finest against that already-corrected result, and so on." } },
      { type: "paragraph", text: { km: "", en: "The run is **resumable** via a `checkpoint.json` in the output folder." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Reference DEM (the elevation truth -- never modified)", type: "Raster layer", default: "—", description: { km: "", en: "" } },
          { name: "Reference DEM NoData override (blank = use its own NoData)", type: "String, optional", default: "empty", description: { km: "", en: "" } },
          { name: "DEMs to correct against the reference (1 or more)", type: "Multiple raster layers", default: "—", description: { km: "", en: "Auto-sorted finest to coarsest and corrected in a chain." } },
          { name: "NoData overrides (comma-separated, matching DEM order)", type: "String, optional", default: "empty", description: { km: "", en: "One value per DEM, in the order you selected them. Blank uses each raster's own NoData metadata." } },
          { name: "Correction method (all stages)", type: "Enum", default: "`Auto - Compare All (Best CV)`", description: { km: "", en: "`Auto - Compare All (Best CV)`, `Global Offset`, `Polynomial Trend (degree 1)`, `Polynomial Trend (degree 2)`, `IDW (distance-decay)`. Auto tries them all and keeps whichever cross-validates best." } },
          { name: "IDW power", type: "Number", default: "`2.0`", description: { km: "", en: "IDW method only." } },
          { name: "IDW neighbors (k)", type: "Integer", default: "`12`", description: { km: "", en: "IDW method only." } },
          { name: "IDW full-strength distance (m)", type: "Number", default: "`3000.0`", description: { km: "", en: "Beyond this the correction fades out." } },
          { name: "Cross-validation folds", type: "Integer", default: "`5`", description: { km: "", en: "How the method comparison is scored." } },
          { name: "Calibration subsample stride", type: "Integer", default: "`4`", description: { km: "", en: "Every Nth pixel is used to fit the correction. Raise it for a faster, coarser fit." } },
          { name: "Merge finest DEM + all corrected DEMs", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
          { name: "Merge extent", type: "Enum", default: "`Reference DEM extent`", description: { km: "", en: "Or `Coarsest DEM extent (full)`." } },
          { name: "Merge resolution (m)", type: "Number", default: "`2.5`", description: { km: "", en: "" } },
          { name: "Report sample stride (for Statistics/Visualization tabs)", type: "Integer (min 1)", default: "`20`", description: { km: "", en: "" } },
          { name: "Report max sample points", type: "Integer (min 100)", default: "`200000`", description: { km: "", en: "" } },
          { name: "Force re-run everything (ignore checkpoint.json)", type: "Boolean", default: "`False`", description: { km: "", en: "" } },
          { name: "Output folder", type: "Folder destination", default: "—", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [
      { name: "Merged DEM (if merge was enabled)", type: "File", description: { km: "", en: "" } },
      { name: "Run summary", type: "String", description: { km: "", en: "" } },
      { name: "Statistics", type: "HTML", description: { km: "", en: "Appears as a tab in the Processing Results panel." } },
      { name: "Visualization", type: "HTML", description: { km: "", en: "Likewise." } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the reference DEM and every DEM to correct." },
        { km: "", en: "Open **KGA Irrigation Tools > DEM Elevation Correction and Point Sample Report**." },
        { km: "", en: "Set the **Reference DEM** — the one you trust. It is never written to." },
        { km: "", en: "Select the DEMs to correct. Their order does not matter; they are sorted by resolution." },
        { km: "", en: "Leave the method on **Auto** for the first run and let the cross-validation pick. Look at what it chose in the Statistics tab before pinning a method." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "**Open the Statistics and Visualization tabs in the Processing Results panel** — that is where the answer is, not in the log." },
        { km: "", en: "If the run is interrupted, run it again with the same settings to resume." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "In the output folder:" } },
      { type: "list", items: [
        { km: "", en: "`corrected_{name}.tif` — one corrected DEM per input." },
        { km: "", en: "`MERGED_FINAL_DEM.tif` — the seamless merge, when merging is enabled." },
        { km: "", en: "`statistics_report.html` and `visualization_report.html` — the two report tabs, also on disk." },
        { km: "", en: "`correction_report.json` — the machine-readable run record." },
        { km: "", en: "`checkpoint.json` — resume state. Safe to delete when finished." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The chain matters.** Each DEM is corrected against the already-corrected one above it, so an error early in the chain propagates down. Check the Statistics tab stage by stage, not just at the end." },
        { km: "", en: "**Correction does not create accuracy.** It removes systematic bias relative to the reference; it cannot fix a DEM that is simply wrong in detail." },
        { km: "", en: "**The reports are sampled, not exhaustive.** *Report sample stride* and *Report max sample points* bound the cost; the statistics describe that sample." },
        { km: "", en: "**Resumable via `checkpoint.json`.** Tick *Force re-run* to ignore it." },
        { km: "", en: "**NoData overrides must match the order you selected the DEMs in.** Getting the order wrong silently corrects against the wrong nodata mask." },
        { km: "", en: "For a per-point table across several DEMs, use **[DEM Point Sample Export to Excel](dempointsampleexport.md)**, which is the same sampling in spreadsheet form." },
      ] },
    ],
    seeAlso: ["dempointsampleexport"],
  },
  {
    slug: "dem_legend_bar",
    group: "kgairrigationtools",
    name: "DEM Legend Bar",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:dem_legend_bar",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ DEM Legend Bar",
    summary: {
      km: "បង្កើតរូបភាព PNG នៃរបារកាតាឡុកពណ៌ សម្រាប់ raster DEM។",
      en: "Generates a colour legend bar PNG for one or more DEM rasters.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Generates a hypsometric legend bar as a PNG for one or more DEM rasters — the elevation colour ramp with tick marks and labels that goes beside a map in a report or on a plan sheet." } },
      { type: "paragraph", text: { km: "", en: "QGIS's own legend for a continuous raster is not built for print. This writes a standalone image you place in a layout, a Word document or a drawing, at the DPI you need." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "DEM Raster Layer(s)", type: "Multiple raster layers", default: "—", description: { km: "", en: "One legend bar is produced per DEM." } },
          { name: "Color Scheme", type: "Enum", default: "`from_qgis`", description: { km: "", en: "`from_qgis` (reuse the layer's own ramp), `YlGn_r`, `turbo`, `jet`, `RdYlBu_r`, `terrain`, `plasma`, `viridis`, `gist_earth`." } },
          { name: "Legend DPI (150=Fast | 300=Balanced | 600=HQ)", type: "Enum", default: "`150 (Fast)`", description: { km: "", en: "Also `300 (Balanced)` and `600 (High Quality)`. Use 300 or 600 for anything that will be printed." } },
          { name: "Output Folder", type: "Folder destination", default: "—", description: { km: "", en: "Where the PNGs are written." } },
          { name: "Number of Ticks", type: "Integer (3–20)", default: "`7`", description: { km: "", en: "" } },
          { name: "Legend Title", type: "String", default: "`Elevation (m)`", description: { km: "", en: "" } },
          { name: "Font Family", type: "String", default: "`Times New Roman`", description: { km: "", en: "" } },
          { name: "Font Tick Size", type: "Integer (6–24)", default: "`9`", description: { km: "", en: "" } },
          { name: "Font Title Size", type: "Integer (6–24)", default: "`10`", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the DEM(s) and, if you want the map's own colours, style them first." },
        { km: "", en: "Open **KGA Irrigation Tools > DEM Legend Bar**." },
        { km: "", en: "Pick the DEMs and an output folder." },
        { km: "", en: "Leave **Color Scheme** on `from_qgis` to match the map exactly; pick a named ramp only when you want the legend to differ from the layer." },
        { km: "", en: "Set the **Legend DPI** to match the destination — 150 for screen, 300 or 600 for print." },
        { km: "", en: "Press **Run**, then place the PNGs in your layout." },
      ] },
    ],
    results: [
      { type: "list", items: [
        { km: "", en: "One PNG legend bar per input DEM, in the output folder, at the chosen DPI." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { text: { km: "", en: "**Tick placement is auto-adaptive** from the DEM's elevation range, so the labels land on round numbers rather than on the exact minimum and maximum:" }, items: [
          { km: "", en: "flat terrain (range ≤ 30 m) → 5 m steps" },
          { km: "", en: "hills (≤ 300 m) → 50 m steps" },
          { km: "", en: "mountain → 100, 200 or 500 m steps" },
        ] },
      ] },
      { type: "paragraph", text: { km: "", en: "**Number of Ticks** is a target, not a guarantee: the result is clamped to between 4 and 10 ticks." } },
      { type: "list", items: [
        { km: "", en: "`from_qgis` reads the layer's current renderer, so restyling the DEM changes the legend — regenerate it after any styling change." },
        { km: "", en: "The font must be installed on this machine; an unavailable family falls back silently." },
      ] },
    ],
    seeAlso: [],
  },
  {
    slug: "dempointsampleexport",
    group: "kgairrigationtools",
    name: "DEM Point Sample Export to Excel",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:dempointsampleexport",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ DEM Point Sample Export to Excel",
    summary: {
      km: "យកគំរូ DEM ចាប់ពី ២ ឡើងទៅ នៅចំណុចក្នុងក្រឡាចត្រង្គទៀងទាត់ រួចនាំចេញមួយជួរក្នុងមួយចំណុចទៅ Excel។",
      en: "Samples 2 or more DEMs (e.g. a reference DEM plus one or more corrected DEMs) at a regular grid of points and exports one row per point to Excel: X, Y, one elevation column per DEM, a Zone column (which DEMs have valid data there), and difference columns vs. the finest reference DEM and vs.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The use case is checking agreement between elevation sources — a reference DEM plus the corrected DEMs from **[DEM Elevation Correction](demelevationcorrectionandpointsamplereport.md)** — in a spreadsheet you can sort, filter and hand to someone who does not use QGIS." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "DEM layers to sample (2 or more)", type: "Multiple raster layers", default: "—", description: { km: "", en: "The order you select them in is the column order, and the finest is used as the reference for the difference columns." } },
          { name: "NoData overrides (comma-separated, matching DEM order)", type: "String, optional", default: "empty", description: { km: "", en: "One value per DEM, in selection order. Blank uses each raster's own NoData metadata." } },
          { name: "Pixel stride (sample every Nth pixel)", type: "Integer (min 1)", default: "`20`", description: { km: "", en: "" } },
          { name: "Max rows (Excel limit is ~1,048,576)", type: "Integer (min 1)", default: "`1000000`", description: { km: "", en: "" } },
          { name: "Output file name", type: "String", default: "`dem_point_samples.xlsx`", description: { km: "", en: "" } },
          { name: "Output folder", type: "Folder destination", default: "—", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [
      { name: "Exported Excel (or CSV) file", type: "File", description: { km: "", en: "" } },
      { name: "Run summary", type: "String", description: { km: "", en: "" } },
    ],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the DEMs to compare — the reference first is the clearest habit." },
        { km: "", en: "Open **KGA Irrigation Tools > DEM Point Sample Export to Excel**." },
        { km: "", en: "Select the DEMs, set the **Pixel stride**, and name the output." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "Open the workbook and sort on a difference column — the largest disagreements are where the elevation sources actually conflict." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "One workbook in the output folder with a row per sampled point:" } },
      { type: "table",
        head: ["Column", "Meaning"],
        rows: [
          ["`X`, `Y`", "Sample location"],
          ["one column per DEM", "Elevation there, or blank where that DEM has NoData"],
          ["`Zone`", "Which DEMs have valid data at this point"],
          ["difference columns", "Against the finest reference DEM, and against each DEM's immediately-finer neighbour"],
        ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Excel caps at about 1,048,576 rows per sheet.** The **stride is increased automatically** if the requested sampling would exceed the row limit you set, so a run always produces a readable file — but the grid may then be coarser than you asked for. The run summary says what stride was actually used." },
        { km: "", en: "**Very large outputs may be written as CSV instead**; the declared output is named \"Excel (or CSV) file\" for that reason." },
        { km: "", en: "**NoData overrides must match the order you selected the DEMs in.**" },
        { km: "", en: "A blank elevation cell means NoData at that point, not zero. The `Zone` column is there so you can filter to points where every DEM has data before comparing." },
        { km: "", en: "This tool only reports. It never modifies a DEM." },
      ] },
    ],
    seeAlso: ["demelevationcorrectionandpointsamplereport"],
  },
  {
    slug: "demcontourtool",
    group: "kgairrigationtools",
    name: "DEM and Contour Tool",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:demcontourtool",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ DEM and Contour Tool",
    summary: {
      km: "ឧបករណ៍ពីរមុខងារ៖ បម្លែង CSV ទៅ DEM និងបន្ទាត់កម្ពស់ ឬបង្កើតបន្ទាត់កម្ពស់ពី DEM ដែលមានស្រាប់។",
      en: "Two modes in one dialog: interpolate a surveyed-point CSV into a DEM and contours, or generate contours from an existing DEM.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "The production version of the CSV-to-contour workflow: two modes, tiled contour generation, and a checkpoint file so an interrupted run picks up where it left off." } },
      { type: "list", items: [
        { km: "", en: "**Mode A — CSV → DEM → Contour.** Interpolates surveyed points into a DEM GeoTIFF, then contours it." },
        { km: "", en: "**Mode B — DEM → Contour only.** Skips interpolation and contours a DEM you already have." },
      ] },
      { type: "paragraph", text: { km: "", en: "Contours are generated in row tiles and progress is written to `checkpoint.json` in the output folder after every tile. A run that is interrupted — a crash, a closed laptop, a cancelled job — continues automatically when you run it again with the same DEM, output folder and parameters. And every field is remembered between runs, so resuming needs no retyping." } },
      { type: "paragraph", text: { km: "", en: "For a small one-off survey, **[CSV to DEM and Contour](csvtodemcontour.md)** is the simpler tool." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [
          { type: "paragraph", text: { km: "", en: "Every parameter except *Force re-run* is remembered from your last run and pre-filled. The defaults below are what you get on a first run." } },
        ],
        rows: [
          { name: "Input Mode", type: "Enum", default: "`Mode A — CSV → DEM → Contour`", description: { km: "", en: "Or `Mode B — DEM → Contour only`." } },
          { name: "Input Point CSV [Mode A only]", type: "File (`*.csv`), optional", default: "remembered", description: { km: "", en: "Single-layout and dual side-by-side CSV formats are both supported." } },
          { name: "DEM Resolution (m) [Mode A — 0 = auto-detect]", type: "Number, optional", default: "`0.0`", description: { km: "", en: "" } },
          { name: "Interpolation Method [Mode A only]", type: "Enum", default: "`Auto-detect`", description: { km: "", en: "`Auto-detect` (analyses point count and density), `IDW` (dense surveys), `Linear` (fast, moderate point counts), `Cubic` (smooth surfaces, wide spacing), `Nearest` (very sparse or classified data)." } },
          { name: "CRS — EPSG Code [Mode A only]", type: "Integer", default: "`32648`", description: { km: "", en: "WGS 84 / UTM zone 48N — Cambodia." } },
          { name: "Input DEM Raster [Mode B only]", type: "Raster layer, optional", default: "remembered", description: { km: "", en: "" } },
          { name: "Output Folder", type: "Folder destination", default: "remembered", description: { km: "", en: "Also where `checkpoint.json` lives." } },
          { name: "Generate Contour Lines", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
          { name: "Contour Interval (m)", type: "Number (min 0.01)", default: "`1.0`", description: { km: "", en: "" } },
          { name: "Contour Smoothing — Gaussian σ (0 = off)", type: "Number (min 0.0)", default: "`1.0`", description: { km: "", en: "" } },
          { name: "Contour Output Format", type: "Enum", default: "`GeoPackage`", description: { km: "", en: "Shapefile or GeoPackage." } },
          { name: "Tile height (rows)", type: "Integer (min 100)", default: "`3000`", description: { km: "", en: "Rows per tile. Lower it if memory is tight; raise it for fewer, larger tiles." } },
          { name: "Tile overlap (rows)", type: "Integer (min 1)", default: "`30`", description: { km: "", en: "Overlap between tiles, so contour lines join cleanly across the seams." } },
          { name: "Force re-run everything (ignore checkpoint.json in output folder)", type: "Boolean", default: "**`False`, always**", description: { km: "", en: "The one field that is never remembered." } },
          { name: "Add output layers to QGIS map canvas", type: "Boolean", default: "`True`", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Open **KGA Irrigation Tools > DEM and Contour Tool**." },
        { km: "", en: "Pick the **Input Mode**. Mode A starts from a survey CSV; Mode B starts from an existing DEM." },
        { km: "", en: "Fill in the parameters that mode needs — the others are ignored." },
        { km: "", en: "Press **Run**. Progress is reported tile by tile." },
        { km: "", en: "**If the run is interrupted, simply run it again** with the same DEM, output folder and parameters. The log says how many tiles were already done." },
        { km: "", en: "If you changed something the checkpoint should not survive, tick **Force re-run**." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "In the output folder:" } },
      { type: "list", items: [
        { km: "", en: "`{name}_DEM.tif` — the interpolated DEM (Mode A only)." },
        { km: "", en: "`{name}_Contour_{interval}m.gpkg` or `.shp` — the contour lines." },
        { km: "", en: "`checkpoint.json` — resume state: a fingerprint of the inputs plus the tiles completed. Safe to delete once you are finished." },
      ] },
      { type: "paragraph", text: { km: "", en: "Layers are added to the canvas when that box is ticked." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**The checkpoint is keyed on a fingerprint of the inputs.** Change the DEM, the interval, the smoothing or the tiling and the checkpoint is treated as stale and the work restarts. A checkpoint written by an older version of the script is also discarded." },
        { km: "", en: "**Force re-run always resets to unchecked**, so a resumed run never silently throws away completed tiles." },
        { km: "", en: "**Requires numpy, pandas, scipy and GDAL/OGR/OSR**, all bundled with QGIS. Contours use a tiled `gdal.ContourGenerateEx` with row-block streaming, which is what makes a large DEM possible at all." },
        { km: "", en: "**This is the one algorithm with no `helpUrl()`**, so the Help button in the Processing dialog has nothing to open." },
        { km: "", en: "Settings are remembered through QSettings, per QGIS profile — a different profile starts with the plain defaults." },
      ] },
    ],
    seeAlso: ["csvtodemcontour"],
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
      { type: "paragraph", text: { km: "", en: "The DEM only sets the elevation range, and the boundary clips it. Discharge itself comes entirely from the outlet definitions — no storage routing is involved, so the curve is static. Pair it with **[Storage Capacity Curve](storage_capacity_curve.md)** for the volume side." } },
      { type: "subheading", text: { km: "", en: "Formulas" } },
      { type: "list", items: [
        { km: "", en: "**Weir:** `Q = C × L × H^1.5`" },
        { km: "", en: "**Orifice and pipe:** `Q = Cd × A × √(2gH)`, with g = 9.81 m/s²" },
      ] },
      { type: "paragraph", text: { km: "", en: "`H` = water level − activation elevation. An outlet contributes nothing while `H ≤ 0`, which is what puts the kinks in the total curve." } },
      { type: "subheading", text: { km: "", en: "Typical coefficients" } },
      { type: "table",
        head: ["Outlet", "Coefficient"],
        rows: [
          ["Sharp-crested weir", "C = 1.84"],
          ["Broad-crested weir", "C = 1.70"],
          ["Ogee spillway", "C = 2.0–2.2"],
          ["Sharp-edged orifice or pipe", "Cd = 0.61"],
          ["Rounded entry", "Cd = 0.80–0.90"],
        ] },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "DEM Raster Layer(s)", type: "Multiple raster layers", default: "—", description: { km: "", en: "One curve per DEM." } },
          { name: "Reservoir Boundary (optional — leave blank for full DEM)", type: "Vector layer, optional", default: "empty", description: { km: "", en: "" } },
          { name: "Elevation Step (m)", type: "Number (min 0.001)", default: "`0.1`", description: { km: "", en: "" } },
          { name: "Outlet Definition Mode", type: "Enum", default: "`Fixed slots — up to 3 outlets, defined below`", description: { km: "", en: "Or `CSV file — any number of outlets, from a table`. In CSV mode the three slots below are ignored." } },
          { name: "CSV Mode · Outlet Table (.csv)", type: "File (`*.csv`), optional", default: "empty", description: { km: "", en: "Columns: `outlet_id`, `type`, `act_elev`, `LA`, `C_Cd`." } },
          { name: "Output Folder", type: "Folder destination", default: "—", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "Outlet slots 1, 2 and 3" },
        nameLabel: "Parameter",
        blocks: [
          { type: "paragraph", text: { km: "", en: "Each slot repeats the same five controls. Slot 1 is enabled by default as a weir; slots 2 and 3 are off, pre-filled as an orifice and a pipe." } },
        ],
        rows: [
          { name: "Outlet N · Enable", type: "Boolean", default: "`True` / `False` / `False`", description: { km: "", en: "" } },
          { name: "Outlet N · Type", type: "Enum", default: "`Weir` / `Orifice` / `Pipe`", description: { km: "", en: "" } },
          { name: "Outlet N · Activation Elevation (m)", type: "Number", default: "`0.0`", description: { km: "", en: "The crest or centreline level." } },
          { name: "Outlet N · Size — L (m) or A (m²)", type: "Number (min 0.001)", default: "`1.0` / `0.5` / `0.3`", description: { km: "", en: "Crest width **L** in metres for a weir, or opening area **A** in m² for an orifice or pipe. **Areas are not derived for you** — enter the computed value." } },
          { name: "Outlet N · Coefficient — C or Cd", type: "Number (min 0.001)", default: "`1.84` / `0.61` / `0.61`", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "Advanced" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Plot · Elevation Axis Minimum / Maximum (m)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot · Discharge Axis Maximum (m³/s)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot · Elevation Tick Interval (m)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot · Discharge Tick Interval (m³/s)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot · Resolution (DPI)", type: "Integer (72–600)", default: "`150`", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "CSV table format" },
        nameLabel: null,
        blocks: [
          { type: "table",
            head: ["outlet_id", "type", "act_elev", "LA", "C_Cd"],
            rows: [
              ["1", "Weir", "40.0", "5.00", "1.84"],
              ["2", "Orifice", "35.0", "0.20", "0.61"],
              ["3", "Pipe", "33.5", "0.07", "0.61"],
            ] },
          { type: "paragraph", text: { km: "", en: "`outlet_id` must be unique — it names the output column. `type` must be exactly `Weir`, `Orifice` or `Pipe`." } },
        ],
        rows: [],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the DEM and the reservoir boundary." },
        { km: "", en: "Open **KGA Irrigation Tools > Reservoir Rating Curve**." },
        { km: "", en: "Define the outlets. For up to three, fill in the slots on the form; for more, switch **Outlet Definition Mode** to CSV and supply a table." },
        { km: "", en: "Check that the **activation elevations are in the same vertical datum as the DEM.** This is the mistake that produces a flat zero curve." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "To compare several reservoirs on identical axes, pin the axis ranges and tick intervals under *Advanced* and run again." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Per DEM, in the output folder:" } },
      { type: "list", items: [
        { km: "", en: "`rating_{DEM}_{boundary}.csv` — elevation, one column per outlet, and `Q_total`." },
        { km: "", en: "`rating_{DEM}_{boundary}.png` — the curve, with each outlet's contribution shaded, its activation level marked, and `Q_total` crossed at every grid line for reading off." },
      ] },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Activation elevations must be in the same vertical datum as the DEM.** If they all sit above the DEM's highest cell the curve comes out flat at zero, and the log warns about it." },
        { km: "", en: "**Areas are not derived for you.** For an orifice or pipe, `LA` is the opening area in m² — compute it from the diameter yourself." },
        { km: "", en: "**No storage routing.** This is a static stage–discharge relationship, not a flood-routing result. It does not tell you how long the reservoir takes to draw down." },
        { km: "", en: "The curve's kinks are real: they are where each outlet activates." },
      ] },
    ],
    seeAlso: ["storage_capacity_curve"],
  },
  {
    slug: "storage_capacity_curve",
    group: "kgairrigationtools",
    name: "Storage Capacity Curve",
    icon: "Waves",
    status: "full",
    youtubeId: null,
    algorithmId: "kga:storage_capacity_curve",
    interactive: false,
    toolType: { km: "", en: "Batch algorithm" },
    processingPath: "Processing ▸ Toolbox ▸ KGA Toolbox ▸ KGA Irrigation Tools ▸ Storage Capacity Curve",
    summary: {
      km: "គណនាមាឌ និងផ្ទៃ ធៀបនឹងកម្ពស់ សម្រាប់ DEM មួយ ឬច្រើន។",
      en: "Calculates volume and area against elevation for one or more DEMs, with optional boundary clipping and full control over the plot axes.",
    },
    body: [
      { type: "paragraph", text: { km: "", en: "Calculates **volume and area against elevation** for a reservoir from its DEM, and plots the pair of curves engineers call the storage capacity curve." } },
      { type: "paragraph", text: { km: "", en: "It is the first number anyone asks for about a reservoir: how much water does it hold at each water level, and how much surface does it flood. The tool steps the water level from the DEM's low point upward, counting cells below each level, and writes both the table and the chart." } },
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "DEM Raster Layer(s)", type: "Multiple raster layers", default: "—", description: { km: "", en: "One curve is produced per DEM, so several design options can be compared in one run." } },
          { name: "Boundary Layer (optional — leave blank for full DEM)", type: "Vector layer, optional", default: "empty", description: { km: "", en: "Restricts the calculation to the reservoir footprint. Leave it blank to use the whole DEM." } },
          { name: "Elevation Step (m)", type: "Number (min 0.01)", default: "`0.1`", description: { km: "", en: "The vertical increment. Smaller gives a smoother curve and a longer run." } },
          { name: "Output Folder", type: "Folder destination", default: "—", description: { km: "", en: "" } },
        ],
      },
      {
        title: { km: "", en: "Plot axis controls — all optional, `0` means auto" },
        nameLabel: "Parameter",
        blocks: [],
        rows: [
          { name: "Plot: Elevation Y-axis Minimum (m)", type: "Number", default: "`0.0` (auto from DEM)", description: { km: "", en: "" } },
          { name: "Plot: Elevation Y-axis Maximum (m)", type: "Number", default: "`0.0` (auto from DEM)", description: { km: "", en: "" } },
          { name: "Plot: Volume X-axis Maximum (1,000 m³)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot: Area X-axis Maximum (ha)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot: Elevation Y-axis Tick Interval (m)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot: Volume X-axis Tick Interval (1,000 m³)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
          { name: "Plot: Area X-axis Tick Interval (ha)", type: "Number", default: "`0.0` (auto)", description: { km: "", en: "" } },
        ],
      },
    ],
    outputs: [],
    usage: [
      { type: "steps", items: [
        { km: "", en: "Load the DEM, and a polygon of the reservoir footprint if you have one." },
        { km: "", en: "Open **KGA Irrigation Tools > Storage Capacity Curve**." },
        { km: "", en: "Pick the DEM(s), the **Boundary Layer**, and an output folder." },
        { km: "", en: "Leave **Elevation Step** at `0.1` m for a first run; raise it if the DEM is large and the run is slow." },
        { km: "", en: "Press **Run**." },
        { km: "", en: "To compare several DEMs on the same axes — or to match a chart you produced earlier — set the axis maxima and tick intervals by hand and run again. The info bar on the chart shows which axes are custom and which are auto." },
      ] },
    ],
    results: [
      { type: "paragraph", text: { km: "", en: "Per DEM, in the output folder:" } },
      { type: "list", items: [
        { km: "", en: "`volume_{name}.csv` — elevation, area and volume at each step." },
        { km: "", en: "`graph_{name}.png` — the chart, with volume and area plotted against elevation." },
      ] },
      { type: "paragraph", text: { km: "", en: "The chart carries an info bar saying which axes were set by hand and which were derived automatically." } },
    ],
    notes: [
      { type: "list", items: [
        { km: "", en: "**Units on the chart are engineering units, not SI**: volume in thousands of cubic metres, area in hectares. The CSV holds the same numbers." },
        { km: "", en: "**The DEM's horizontal units must be metres.** Volume is computed from cell area, so a DEM in degrees gives a meaningless answer. Reproject to the UTM zone first." },
        { km: "", en: "**The result is only as good as the DEM.** Voids, NoData holes inside the footprint, and pits all change the count. Consider running **[DEM Elevation Correction and Point Sample Report](demelevationcorrectionandpointsamplereport.md)** first if you are merging survey sources." },
        { km: "", en: "A smaller **Elevation Step** multiplies the run time; `0.1` m is usually fine." },
        { km: "", en: "The axis controls only affect the chart. The CSV always holds the full range." },
        { km: "", en: "For the discharge side of the same reservoir — how much goes *out* at each level — see **[Reservoir Rating Curve](reservoir_rating_curve.md)**." },
      ] },
    ],
    seeAlso: ["demelevationcorrectionandpointsamplereport", "reservoir_rating_curve"],
  },
];

export const SLUGS = tools.map((tool) => tool.slug);

export const getToolBySlug = (slug) => tools.find((tool) => tool.slug === slug);
export const getGroupById = (id) => groups.find((group) => group.id === id);
export const getToolsInGroup = (id) => tools.filter((tool) => tool.group === id);

/** Previous/next within the tool's own group, so paging never jumps groups. */
export const getToolNeighbours = (slug) => {
  const tool = getToolBySlug(slug);
  if (!tool) return { prev: null, next: null };
  const siblings = getToolsInGroup(tool.group);
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
