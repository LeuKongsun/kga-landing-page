// KGA Toolbox for QGIS — release notes.
//
// Parsed from the plugin's own release_note/v*.md, into the same block
// vocabulary DocBlocks renders for the tool pages, so the notes get the
// section styling, tables and inline Markdown the rest of the docs use.
//
// Newest first: the page shows releases[0] by default.

export const releases = [
  {
    version: "1.1.0",
    date: "2026-11-22",
    // Width and height are the file's own, so the page reserves the right box
    // and the screenshot is never cropped.
    image: {
      src: "/images/release-notes/v1.1.0.png",
      width: 2557,
      height: 1597,
      alt: {
        km: "QGIS ជាមួយ KGA Toolbox 1.1.0៖ ផ្ទាំង Modify Features ពពុះ bag នៅលើផែនទី និង Data Explorer",
        en: "QGIS running KGA Toolbox 1.1.0: the Modify Features pane, the bag bubbles on the map, and Data Explorer",
      },
    },
    dateLabel: { km: "២២ វិច្ឆិកា ២០២៦", en: "22 November 2026" },
    title: { km: "ផ្ទាំងអណ្តែត ការរុករករលូន និង QGIS 4", en: "Bags, smooth navigation and QGIS 4" },
    tagline: {
               km: "បន្ថែមឧបករណ៍ធរណីមាត្រ ធារាសាស្ត្រ និងរូបភាពថ្មី ព្រមទាំងផ្ទាំងអណ្តែតនៅលើរបារឧបករណ៍ KGA Layer ថ្មី និងការរុករកបែប ArcGIS Pro។ ឥឡូវដំណើរការលើ QGIS 4.2 ផងដែរ។",
               en: "KGA Toolbox 1.1.0 adds new geometry, irrigation and imagery tools, a set of floating \"bags\" with a new KGA Layer toolbar, and ArcGIS Pro-style navigation. It also runs on QGIS 4.2 as well as 3.x. QGIS 3.28 to 4.x is supported.",
             },
    // Pinned, like every other release. Verified against the plugin: 1.1.0
    // registers 58 algorithms with a helpUrl. Left unpinned it would read the
    // live PLUGIN.toolCount, so adding 1.2.0 would retroactively restate this
    // release's count.
    toolCount: 58,
    qgis: "3.28 – 4.x",
    facts: [],
    body: [
      { type: "heading", text: { km: "", en: "Highlights" } },
      { type: "list", items: [
        { text: {
          km: "",
          en: "**KGA Layer toolbar (Ctrl+Alt+L)** with a Layer Bag, Label Bag, Symbol Bag, Layer Colors and Tool Bag. Each bag is a small floating panel that shrinks into a bubble on the map.",
        }, items: [
            {
              km: "",
              en: "**Layer Bag:** follows the selected layer. It shows the attribute table, fields, statistics and labels, and has the Layer Colors wheel for live recolouring.",
            },
            {
              km: "",
              en: "**Tool Bag:** keeps your favourite tools from any toolbar, menu or Processing, in list or grid layout.",
            },
        ] },
        {
          km: "",
          en: "**Smooth navigation, as in ArcGIS Pro:** animated wheel zoom, kinetic pan glide, smooth arrow-key pan and Page Up / Page Down zoom. It is on by default and can be turned off in Settings > Appearance.",
        },
        { km: "", en: "**QGIS 4.2 support:** the plugin has been tested on both QGIS 3.44 and 4.2." },
      ] },
      { type: "heading", text: { km: "", en: "New tools" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Strip Lines and Point Grid** (Geometry Utilities): strip lines, point grids, and grids of squares, hexagons, triangles and other regular shapes. They are measured in metres in the UTM zone under the area.",
        },
        {
          km: "",
          en: "**Point to Geometry Converter** and **Sliver and Spike Cleaner** (Geometry Utilities).",
        },
        {
          km: "",
          en: "**Multipart Line Repair** (Irrigation tools): finds multipart canal and drain lines, explains why they are multipart and repairs them.",
        },
        {
          km: "",
          en: "**DEM / DSM Inspector:** tells a bare-earth DEM from a surface model, with a confidence score, a block map and a report.",
        },
        {
          km: "",
          en: "**Satellite Imagery Archive** (in the Imagery Downloader drop-down): search Sentinel-2, Landsat, OpenAerialMap and any STAC catalog by date and cloud cover, and download only your area.",
        },
        {
          km: "",
          en: "**Panels and Toolbars Manager:** a searchable switcher for every panel and toolbar, with saved layouts.",
        },
        {
          km: "",
          en: "**Zoom to Location** and **Go To XY:** jump to a place from open data or to a typed coordinate.",
        },
      ] },
      { type: "heading", text: { km: "", en: "New and improved in the editor and the map" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Create Features:** a floating sketch toolbar over the map, with line, arc, trace and construction segment types (right angle, intersection, distance-distance, along and offset).",
        },
        {
          km: "",
          en: "**Modify Features:** Points On Line and Points On Polygon Boundary, bringing it to 32 tools. Tools can be shown as a grid or a list.",
        },
        {
          km: "",
          en: "**Quick Labeling and Quick Symbology:** label or restyle a layer in one click. They moved to the new KGA Layer toolbar.",
        },
        { km: "", en: "**Vertices and Nodes view** and a map **Grid**, both display only." },
        { km: "", en: "**Hold C and drag** to pan while digitizing." },
        { km: "", en: "**Map Cursor:** choose a custom cursor for the map tools." },
        { km: "", en: "**Toolbar magnify:** toolbar buttons grow under the mouse, like a dock." },
        { km: "", en: "**Genie or Classic animation:** tool windows open out of their toolbar button." },
        {
          km: "",
          en: "**Data Explorer:** Copy, Cut, Paste, drag-and-drop move and Delete of datasets, converting between shapefile, GeoPackage and geodatabase. It also has a Rename tab and an Export drop-down that cuts by a drawn area, a layer extent or a polygon layer.",
        },
        {
          km: "",
          en: "**Add Grid to Layout:** Create New Grid and Edit Grid tabs. You can also right-click a grid in the Contents panel and choose Edit.",
        },
        {
          km: "",
          en: "**Map tabs:** a duplicated map gets its own layer copies, layout frames follow style changes, and there is a new Refresh Layout button.",
        },
        {
          km: "",
          en: "**Scratch layers:** when a project closes, you are asked whether to save its scratch (memory) layers into the project GeoPackage.",
        },
        {
          km: "",
          en: "**Layers panel:** dragging layers shows a compact badge, and you can paste layers onto the map or drop them on a map tab.",
        },
      ] },
      { type: "heading", text: { km: "", en: "Changes to know about" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Map tabs are now on by default.** Turn them off in Settings > Appearance > Map tabs.",
        },
        {
          km: "",
          en: "**Quick Labeling and Quick Symbology** moved from the KGA Editor toolbar to the new KGA Layer toolbar. The Bags drop-down moved there from the KGA Toolbox toolbar.",
        },
      ] },
      { type: "heading", text: { km: "", en: "Performance" } },
      { type: "list", items: [
        {
          km: "",
          en: "Faster with large data and during long sessions: animation objects no longer pile up, and attribute scans no longer freeze QGIS.",
        },
        {
          km: "",
          en: "Faster Pro-style selection while panning, and a quicker Editable Layers list when many layers are loaded.",
        },
      ] },
      { type: "heading", text: { km: "", en: "Fixes" } },
      { type: "list", items: [
        { km: "", en: "Callout Label Studio no longer labels a layer just because you chose it." },
        {
          km: "",
          en: "**QGIS 4:** the KGA start page shows again, and tool outputs default to the project GeoPackage and folder again. A date can be edited in Open Feature Attribute. A right-click with the Pan tool opens the map menu when smooth navigation is on. Imagery Downloader no longer waits about 30 seconds before building the image.",
        },
        { km: "", en: "Qt6 compatibility cleanups across the plugin." },
      ] },
      { type: "heading", text: { km: "", en: "Notes" } },
      { type: "list", items: [
        {
          km: "",
          en: "Network use is disclosed in the plugin description. These features connect online: Add Open Data, Imagery Downloader, Satellite Imagery Archive, Go To XY, Zoom to Location and Check for Update.",
        },
        { km: "", en: "Reference pages for every tool are in `toolMetadata/`." },
      ] },
    ],
  },
  {
    version: "1.0.0",
    date: "2026-10-25",
    dateLabel: { km: "២៥ តុលា ២០២៦", en: "25 October 2026" },
    title: { km: "កំណែស្ថិរភាពដំបូង", en: "First stable release" },
    tagline: {
               km: "កំណែស្ថិរភាពដំបូង ដែលប្តូរ KGA Toolbox ពីបណ្តុំឧបករណ៍ដំណើរការ ទៅជាបរិស្ថានការងារពេញលេញបែប ArcGIS Pro៖ របារកែសម្រួល Catalog និង workspace កញ្ចប់គម្រោង និងឧបករណ៍ធារាសាស្ត្រថ្មី។",
               en: "1.0.0 is the first stable release. It turns KGA Toolbox from a set of processing tools into a working environment modelled on ArcGIS Pro: editing toolbar, Catalog and workspaces, project packages, a Pro-style look, and new irrigation and Cambodia data tools. The plugin goes from 45 to **50 algorithms**.",
             },
    toolCount: 50,
    qgis: "3.28 – 4.99",
    facts: [
      { label: "Prepared", value: "25 October 2026" },
      { label: "Previous release", value: "0.2.0" },
      { label: "QGIS", value: "3.28 – 4.99" },
      { label: "Licence", value: "MIT" },
    ],
    body: [
      { type: "heading", text: { km: "", en: "Highlights" } },
      { type: "list", items: [
        {
          km: "",
          en: "**KGA Editor toolbar** — Edit Session, Create Features, Modify Features (30 tools) and Open Feature Attribute. QGIS 3.44+.",
        },
        {
          km: "",
          en: "**Catalog and workspaces** — Pro's Catalog pane for QGIS; one folder per project; tool output lands in the project. QGIS 3.36+.",
        },
        {
          km: "",
          en: "**Project packages** — Share Workspace to one `.kgapp`, Import Project Package, Convert Project to Workspace.",
        },
        {
          km: "",
          en: "**Pro look and feel** — Start page, cyan selection, Pro-style Layers panel, optional map tabs, light/dark theme.",
        },
        {
          km: "",
          en: "**Irrigation and hydrology** — Generate Contour and River or Stream for ROI from the free Copernicus DEM; Reservoir Storage Analyzer.",
        },
        {
          km: "",
          en: "**Cambodia admin data** — KGA Database source: province to village boundaries and centres.",
        },
      ] },
      { type: "heading", text: { km: "", en: "New" } },
      { type: "paragraph", text: { km: "", en: "**Editing (KGA Editor toolbar)**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Edit Session** — edit without Start/Stop Editing; select, move, split, delete across all editable layers; one Save / Discard. Starts Off.",
        },
        {
          km: "",
          en: "**Create Features** — templates pane with construction tools and a right-click construction menu.",
        },
        {
          km: "",
          en: "**Modify Features** — Pro's pane: Alignment, Reshape, Divide, Construct, Attributes, COGO; favorites on the toolbar.",
        },
        {
          km: "",
          en: "**Open Feature Attribute** — pane to select features and type into their attributes.",
        },
        {
          km: "",
          en: "**Overlapping features** — a popup switches the selection between features under one click.",
        },
      ] },
      { type: "paragraph", text: { km: "", en: "**Project and data management**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Catalog panel** with Project, Connections, Computer and Favorites tabs; **Set / Open Workspace**; scratch *Untitled* project with recovery.",
        },
        {
          km: "",
          en: "**Output goes to the project** — a new table in the default database, or the default folder, for QGIS's and KGA's tools.",
        },
        {
          km: "",
          en: "**Share Workspace / Import Project Package / Convert Project to Workspace**, with a layer analysis and checksums. Opening a plain `.qgz` offers to convert it.",
        },
        { km: "", en: "**Save / Save As** ask workspace or traditional `.qgz`." },
        {
          km: "",
          en: "**Browser Copy and Paste**, **Add to Map**, **Duplicate to New Layer**, **Quick Template**, **Add Layers to Layer Package**.",
        },
        {
          km: "",
          en: "**Data Explorer** — media-browser dock to browse, search, preview and ingest geodata. QGIS 3.44+.",
        },
        { km: "", en: "**Layer Auto-Sort** — points, lines, polygons, rasters, basemaps last." },
        { km: "", en: "**Shape_Length / Shape_Area** kept up to date on project database layers." },
      ] },
      { type: "paragraph", text: { km: "", en: "**Open data**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**KGA Database (Cambodia)** in Add Open Data: province, district, commune and village, as boundary or centre.",
        },
        { km: "", en: "**Clip Basemap by Boundary** and **Add Quick Basemap**." },
      ] },
      { type: "paragraph", text: { km: "", en: "**Irrigation and mapping**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Generate Contour for ROI**, **Generate River or Stream for ROI** (graded, optional OpenStreetMap check), **Reservoir Storage Analyzer**, Paddy Irrigation Tools (high point per block, gravity command check).",
        },
        {
          km: "",
          en: "**Callout Label Studio** (also a mode in Layer Properties > Labels) and **KGA Layer Symbol** gallery.",
        },
        {
          km: "",
          en: "**Layout tools:** Layout Guides, Khmer North Arrows, New Layout dialog, map tabs with a Contents panel.",
        },
      ] },
      { type: "paragraph", text: { km: "", en: "**Settings and updates**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**KGA Toolbox > Settings**: new-project location, CRS, basemap and start extent; Save choice; Appearance switches.",
        },
        { km: "", en: "**Check for Update** from the KGA Toolbox menu." },
      ] },
      { type: "heading", text: { km: "", en: "Improved" } },
      { type: "list", items: [
        {
          km: "",
          en: "CSV to DEM/Contour: choose X, Y, Z fields; delimiter and column names auto-detected.",
        },
        {
          km: "",
          en: "DEM Legend Bar, DEM Elevation Correction, Raster Format Converter, Reservoir Rating Curve: grouped parameters, help on every field, clearer help pages.",
        },
        {
          km: "",
          en: "Documentation: a page for every tool and feature in `toolMetadata/`, covering all 50 algorithms.",
        },
      ] },
      { type: "heading", text: { km: "", en: "Removed — action needed" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Storage Capacity Curve** (`kga:storage_capacity_curve`) → use **Reservoir Storage Analyzer**.",
        },
        {
          km: "",
          en: "**DEM and Contour Tool** (`kga:demcontourtool`) → use **CSV to DEM and Contour**, or QGIS's Contour tool for a DEM you already have.",
        },
      ] },
      { type: "paragraph", text: { km: "", en: "Domain Manager is off the toolbar but still in the menu." } },
      { type: "heading", text: { km: "", en: "Network use and privacy" } },
      { type: "paragraph", text: {
          km: "",
          en: "Only on request: Add Open Data (geoBoundaries, HDX, Natural Earth, OpenStreetMap, Google and Esri tiles, Copernicus DEM and ESA WorldCover on Amazon S3, Esri Living Atlas, OpenTopography with your own key), Imagery Downloader, Generate Contour and River tools (Overpass only if the OpenStreetMap check is ticked), Clip Basemap, the KGA Database (api.github.com, key in the QGIS password store), and Check for Update. Nothing runs in the background and no project data is uploaded.",
        } },
      { type: "heading", text: { km: "", en: "Things to know" } },
      { type: "list", items: [
        {
          km: "",
          en: "The KGA Database needs the data release published and an access key entered once; until then the source shows as not connected.",
        },
        { km: "", en: "Google Satellite tiles are subject to Google's terms of service." },
        {
          km: "",
          en: "Map tabs, light/dark theme matching and remembered toolbars are **Off** by default.",
        },
        { km: "", en: "Edit Session starts **Off**." },
      ] },
      { type: "heading", text: { km: "", en: "Upgrading from 0.2.0" } },
      { type: "list", items: [
        {
          km: "",
          en: "Install over 0.2.0 from the Plugin Manager or *Install from ZIP*. Existing algorithm ids are unchanged except the two removed above.",
        },
        {
          km: "",
          en: "The Browser panel is replaced by the Catalog the first time (QGIS 3.36+); switch the Browser back on from View > Panels.",
        },
        {
          km: "",
          en: "Minimum QGIS is still **3.28**; the Catalog needs 3.36, the Editor toolbar and Data Explorer 3.44.",
        },
      ] },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-10-01",
    dateLabel: { km: "១ តុលា ២០២៦", en: "1 October 2026" },
    title: { km: "ទិន្នន័យបើកចំហ រូបភាពផ្កាយរណប និង MGRS", en: "Open data, imagery and MGRS" },
    tagline: {
               km: "ការចេញផ្សាយធំបំផុតចាប់តាំងពីកំណែដំបូង៖ ឧបករណ៍ថ្មី ៤ ក្រុម KGA Mapping ថ្មី និងការត្រួតពិនិត្យសុវត្ថិភាព QGIS 4 និងកំហុសទាំងស្រុង។",
               en: "0.2.0 is the biggest release since the first one. It adds four new tools — **Add Open Data & Basemaps**, **Imagery Downloader**, **Add Grid to Layout** (with the first MGRS support QGIS has ever had) and **Raster Format Converter** — a new **KGA Mapping** toolbar group, and a security, QGIS 4 (Qt 6) and bug-fix pass over everything new before release. The plugin goes from 41 to **45 algorithms**.",
             },
    toolCount: 45,
    qgis: "3.28 – 4.99",
    facts: [
      { label: "Prepared", value: "1 October 2026" },
      { label: "Previous release", value: "0.1.0" },
      { label: "QGIS", value: "3.28 – 4.99" },
      { label: "Licence", value: "MIT" },
    ],
    body: [
      { type: "heading", text: { km: "", en: "Highlights" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Open data in one window** — Administrative boundaries, basemaps, elevation (DEM) and land cover, with publisher, licence and size shown *before* anything downloads.",
        },
        {
          km: "",
          en: "**Web imagery to GeoTIFF** — Stitch web-map tiles for any area into one georeferenced image, in the project CRS, with resume after interruption.",
        },
        {
          km: "",
          en: "**MGRS on print layouts** — Zone and band, 100 km square letters and principal digits — drawn as editable layout grids.",
        },
        {
          km: "",
          en: "**Hours-long conversions survive crashes** — The Raster Format Converter works in blocks, checkpoints each one, and picks up where it left off.",
        },
        {
          km: "",
          en: "**Release-ready security** — Bandit findings: **20 → 0**. Qt 6 enum scan: **0** findings. 176 automated tests pass.",
        },
      ] },
      { type: "heading", text: { km: "", en: "New tools" } },
      { type: "subheading", text: { km: "", en: "1. Add Open Data & Basemaps  (`kga:add_data`, group *KGA Data Management*)" } },
      { type: "paragraph", text: { km: "", en: "One window for getting reference data into a project." } },
      { type: "paragraph", text: { km: "", en: "**Administrative boundaries**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**geoBoundaries** — global ADM0–ADM5 where published; release series gbOpen / gbHumanitarian / gbAuthoritative; simplified or full-detail geometry.",
        },
        {
          km: "",
          en: "**HDX / OCHA COD-AB** — the p-coded humanitarian boundaries. One download carries every level, so switching level afterwards is free.",
        },
        {
          km: "",
          en: "**Natural Earth** — 1:10m, 1:50m, 1:110m; ADM0 and ADM1; one country or the whole world.",
        },
        {
          km: "",
          en: "**Custom address** — a GeoJSON/ZIP/GPKG/KML file, an **ArcGIS REST** layer (paged through so a capped service still arrives complete) or a **WFS** endpoint.",
        },
        {
          km: "",
          en: "Result is a scratch layer carrying the publisher, licence and source address in its metadata; the tool says plainly that it must be exported to keep.",
        },
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "**Basemaps** — eleven XYZ services (OpenStreetMap, Google ×5, Esri ×5) plus a custom XYZ URL; optionally saved into the Browser panel. Added at the bottom of the layer tree.",
        } },
      { type: "paragraph", text: { km: "", en: "**Elevation (DEM)**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Copernicus GLO-30 / GLO-90 on AWS** — no account. Streamed with HTTP range requests: only the blocks inside your area cross the network.",
        },
        {
          km: "",
          en: "**OpenTopography** — 13 datasets (SRTM, NASADEM, ALOS, EU DTM, GEBCO, SRTM15+, GEDI L3 …) with a free API key kept in the **QGIS authentication database**.",
        },
        {
          km: "",
          en: "Choose the area as the **map extent**, a **rectangle/polygon drawn on the map**, a **polygon layer's boundary** (clip) or **any layer's extent**. Optional reprojection to the project CRS. Size and request limits are checked before the request is made.",
        },
      ] },
      { type: "paragraph", text: { km: "", en: "**Land cover**" } },
      { type: "list", items: [
        {
          km: "",
          en: "**Esri 10 m annual land cover** (Sentinel-2, 2017 onward) and **ESA WorldCover 10 m** (2020, 2021). No account.",
        },
        {
          km: "",
          en: "The GeoTIFF arrives **classified**: class codes, the publisher's colour table, category names and a raster attribute table (`lc_code`, `lc_class`, count, RGB) readable by QGIS and ArcGIS. Optional **polygon GeoPackage** with `lc_code` / `lc_class`.",
        },
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "**Housekeeping** — downloads are cached under the QGIS profile (500 MB cap, least-recently-used trimmed); the QGIS proxy is honoured; a layer that is already open in the project can never be overwritten.",
        } },
      { type: "subheading", text: { km: "", en: "2. Imagery Downloader  (`kga:imagery_downloader`, group *KGA Data Management*)" } },
      { type: "paragraph", text: {
          km: "",
          en: "Downloads web-map tiles for an area and stitches them into one georeferenced image.",
        } },
      { type: "list", items: [
        {
          km: "",
          en: "**Area:** map canvas, a layer's extent, a box drawn on the map, or a polygon layer to clip to (pixels outside are masked).",
        },
        {
          km: "",
          en: "**Output:** GeoTIFF, JPEG, PNG, JPEG 2000, or ECW (only where your GDAL can write it); project CRS by default (EPSG:3857 is pixel-exact; other CRSs are reprojected).",
        },
        {
          km: "",
          en: "**Before you commit:** tile count, image size, ground resolution, estimated download and file size, free-disk check, and a sample-tile probe that spots blank areas.",
        },
        {
          km: "",
          en: "**Runs in the background** (a QGIS task): parallel connections (1–16), retries with back-off, and automatic slow-down when the server throttles.",
        },
        {
          km: "",
          en: "**Resume:** tiles land in a sparse work file with a checkpoint, so a stopped, crashed or throttled job continues without re-downloading anything.",
        },
        {
          km: "",
          en: "Ships with one source, **Google Satellite** (see *Things to know* for the terms-of-service caveat).",
        },
      ] },
      { type: "subheading", text: { km: "", en: "3. Add Grid to Layout  (`kga:add_grid`, new group *KGA Mapping*)" } },
      { type: "paragraph", text: {
          km: "",
          en: "Puts a coordinate grid on a print-layout map from one window instead of five panels.",
        } },
      { type: "list", items: [
        {
          km: "",
          en: "Five presets (thin graticule, exterior ticks, zebra, degree graticule, crosses with inside labels), **automatic interval** from the map's own extent, and **editing of the grids a map already has**. Every change is one undo step in the layout designer.",
        },
        {
          km: "",
          en: "**MGRS** — which QGIS has no support for — laid down as four linked grids (zone and band, 100 km square letters, corner values, principal digits), with an optional 1 km mesh and interior label strips.",
        },
        {
          km: "",
          en: "Handles the **Norway and Svalbard** zone exceptions, warns when a map spans more than one UTM zone, and builds labels as plain expressions so a project still renders correctly for someone *without* the plugin.",
        },
      ] },
      { type: "subheading", text: {
          km: "",
          en: "4. Raster Format Converter  (`kga:raster_format_converter`, group *KGA Data Conversion*)",
        } },
      { type: "paragraph", text: { km: "", en: "Built for orthophotos large enough that a conversion runs for hours." } },
      { type: "list", items: [
        { km: "", en: "Converts between **GeoTIFF, ECW, JPEG 2000, Erdas IMAGINE, PNG and JPEG**." },
        {
          km: "",
          en: "Reads the source in blocks (4096 px by default), writes each to disk and records progress in a checkpoint. **Cancel, crash or lose power, then run again with the same output path** — it carries on from the next unfinished block. The blocks are mosaicked and written once at the end.",
        },
        {
          km: "",
          en: "**Disk space is checked three times** — before the merge, before the pyramid and after it. Overviews are built into the output as it is written, or as a sidecar `.ovr` if there is no room.",
        },
        {
          km: "",
          en: "**ECW licence is checked up front** (the Hexagon encoder refuses at the final write — hours in — if its key is missing). JPEG/PNG band-count, bit-depth and size limits are checked before the run.",
        },
      ] },
      { type: "heading", text: { km: "", en: "Changes to existing tools" } },
      { type: "list", items: [
        {
          km: "",
          en: "**New group \"KGA Mapping\"** — *DEM Legend Bar* moves into it (algorithm id `dem_legend_bar` is unchanged, so models and scripts keep working).",
        },
        {
          km: "",
          en: "**Duplicate Checker** — flags now work on **Shapefile layers**. The helper field is renamed `dup_status` (10 characters; the old 11-character name was truncated by DBF so the symbology pointed at a field that did not exist). A failed edit/commit is now reported instead of ignored.",
        },
        {
          km: "",
          en: "**Layer packages** carry picture markers that are embedded in the style (`base64:`) without trying to copy them as files.",
        },
        {
          km: "",
          en: "**Toolbar** retries once if the first launch after QGIS starts fails, and always logs the full traceback.",
        },
        {
          km: "",
          en: "**Plugin unload** now also closes the new windows (Add Data, Imagery Downloader, Add Grid), so nothing is left on the canvas.",
        },
        {
          km: "",
          en: "**Domain & Schema Manager** now shares its busy overlay with the new tools (no behaviour change).",
        },
        { km: "", en: "**About dialog, README and metadata** describe the new tools." },
      ] },
      { type: "heading", text: { km: "", en: "Pre-release review: what was found and fixed" } },
      { type: "paragraph", text: {
          km: "",
          en: "Before tagging, every new tool was reviewed line by line and then **exercised against live services and real GDAL/QGIS objects**. Findings were fixed, and each one has a regression test.",
        } },
      { type: "subheading", text: { km: "", en: "Bugs" } },
      { type: "table", head: [{ km: "", en: "Severity" }, { km: "", en: "Where" }, { km: "", en: "Problem" }, { km: "", en: "Fix" }], rows: [
          [{ km: "", en: "**High**" }, { km: "", en: "Add Data → Custom ArcGIS URL" }, {
  km: "",
  en: "**Large layers were silently truncated.** ArcGIS reports \"more records available\" under `properties` for GeoJSON replies; the tool looked only at the top level, so it kept the first page and stopped (verified live: a county layer returned 2,000 of 3,000+ features).",
}, { km: "", en: "Both locations are read." }],
          [{ km: "", en: "Medium" }, { km: "", en: "Add Data → Custom ArcGIS URL" }, {
  km: "",
  en: "A server that ignores paging would have been queried 50 times and stacked 50 identical copies. A non-collection reply crashed with an `AttributeError`.",
}, {
  km: "",
  en: "Repeated pages are detected and refused with a plain message; bad replies give a sentence. A layer over the 50-page limit is refused rather than returned partial.",
}],
          [{ km: "", en: "Medium" }, { km: "", en: "Raster Format Converter" }, {
  km: "",
  en: "**Cancelling during the final merge raised a raw `RuntimeError`** (GDAL raises, it does not return, when its progress callback aborts) and left a half-written output that looked finished. The one-pass path had the same defect.",
}, {
  km: "",
  en: "Cancel and real failures are told apart; partial output is removed, blocks and checkpoint are kept, messages are plain. A block that cannot be written names itself and saves progress.",
}],
          [{ km: "", en: "Medium" }, { km: "", en: "Add Data (DEM / land cover)" }, { km: "", en: "A path typed into *Save to* **overwrote an existing file with no prompt**." }, { km: "", en: "Asks before replacing; a file open in the project is still refused." }],
          [{ km: "", en: "Medium" }, { km: "", en: "Add Data → land-cover polygons" }, {
  km: "",
  en: "Any polygonising failure other than the expected one threw away a finished raster and left a half-written GeoPackage.",
}, {
  km: "",
  en: "The raster is always added; the polygon error is reported; the partial file is deleted.",
}],
          [{ km: "", en: "Low" }, { km: "", en: "Imagery Downloader" }, {
  km: "",
  en: "One unexpected error in a download worker would abort the whole job without saving a checkpoint.",
}, { km: "", en: "A bad tile is counted as a failed tile." }],
          [{ km: "", en: "Low" }, { km: "", en: "Imagery Downloader" }, {
  km: "",
  en: "With *checkpoint off*, a throttled stop deleted the work folder while telling the user \"progress is saved\".",
}, { km: "", en: "Progress is kept for throttled stops." }],
        ] },
      { type: "subheading", text: { km: "", en: "Security" } },
      { type: "paragraph", text: {
          km: "",
          en: "Static scan (**bandit: 20 findings → 0**, no `# nosec` anywhere) plus manual review:",
        } },
      { type: "list", items: [
        {
          km: "",
          en: "**XML from a remote server** (OpenTopography errors) was parsed with the standard-library XML parser, which is open to entity-expansion attacks → replaced with a bounded pattern match (tested against an entity bomb).",
        },
        {
          km: "",
          en: "**SQL built from text** (land-cover class names) → a constant statement over a small lookup table; nothing is ever spliced into SQL.",
        },
        {
          km: "",
          en: "**API key** — trimmed and percent-encoded into the request, so a pasted trailing space or `&` can neither break the call nor add parameters. Stored only in the QGIS authentication database.",
        },
        {
          km: "",
          en: "**Credentials and tokens in pasted URLs** (`user:pass@…`, `?token=…`) were copied into layer attribution and source metadata, which travel with the project and every export → stripped from everything written down (the request itself still uses the full address).",
        },
        {
          km: "",
          en: "**Cache integrity** — JSON/GeoJSON cache files are written atomically, so a crash or full disk can never leave a truncated file that the cache would later trust.",
        },
        {
          km: "",
          en: "**Silent `except … pass` / `continue` handlers** (16 sites) now use `contextlib.suppress`; retry jitter uses the system random generator.",
        },
        {
          km: "",
          en: "Reviewed and found sound: zip extraction (path-traversal guarded), no `eval`/`exec`/`pickle`/`subprocess`/`shell=True`, no disabled TLS verification, GDAL config options restored after every use, filename validation (no traversal), no secrets or personal paths in the repository.",
        },
      ] },
      { type: "subheading", text: { km: "", en: "Qt 6 / QGIS 4 compatibility" } },
      { type: "paragraph", text: {
          km: "",
          en: "A purpose-built scan resolves every `Class.Member` against the real PyQt5/QGIS classes and flags enum values reached through the class (the spelling PyQt6 removed). It was validated against deliberate bad examples before being trusted.",
        } },
      { type: "list", items: [
        { km: "", en: "**Result: 0 findings across all 87 modules.**" },
        {
          km: "",
          en: "Fixed: the Imagery Downloader's clip-polygon mode used `QgsWkbTypes.GeometryType.PolygonGeometry`, which QGIS 4 removed — it would have failed on QGIS 4. It now uses `Qgis.GeometryType.Polygon`.",
        },
        {
          km: "",
          en: "Also clean: no `exec_()`, `QRegExp`, `QDesktopWidget`, unscoped `Qt.*`/`QMessageBox.*` members, removed `QButtonGroup`/`QComboBox` signal overloads, or `QVariant`-typed `QgsField` calls.",
        },
      ] },
      { type: "heading", text: { km: "", en: "Verification" } },
      { type: "table", head: [{ km: "", en: "Check" }, { km: "", en: "Result" }], rows: [
          [{ km: "", en: "Bandit (34,786 lines)" }, { km: "", en: "**0 issues** (was 20)" }],
          [{ km: "", en: "flake8 syntax / undefined names" }, { km: "", en: "**0**" }],
          [{ km: "", en: "Qt 6 enum scan" }, { km: "", en: "**0**" }],
          [{ km: "", en: "Import every module (87)" }, { km: "", en: "**0 failures**" }],
          [{ km: "", en: "Algorithms registered from the built zip" }, { km: "", en: "**45 / 45**, each with a help page" }],
          [{ km: "", en: "Plugin install simulation from the zip (`classFactory` → `initGui` → `unload`)" }, { km: "", en: "Loads, registers, unloads cleanly" }],
          [{ km: "", en: "Automated tests (QGIS 3.44.12)" }, {
  km: "",
  en: "**176 passed** — 112 existing editing tests, 46 Imagery Downloader, 12 Open Data, 6 Raster Converter",
}],
          [{ km: "", en: "MGRS engine" }, {
  km: "",
  en: "Matches PROJ to **0.000000 m** over 3,000 random points in both hemispheres; every 100 km letter agrees with an independent derivation; Norway/Svalbard exceptions and band edges verified; the standard `4QFJ 12345 67890` example reproduces",
}],
          [{ km: "", en: "Add Grid" }, {
  km: "",
  en: "Every MGRS interval × letter placement × 1 km mesh × interior strips combination builds, round-trips and removes; nine awkward maps (tiny, huge, near-global, Greenwich, Norway, antimeridian, southern hemisphere, geographic, Web Mercator) all build",
}],
          [{ km: "", en: "Live Add Data run" }, {
  km: "",
  en: "geoBoundaries, HDX and Natural Earth (Cambodia ADM1), three basemaps, a Copernicus DEM (values 7.5–27.5 m over Phnom Penh), and both land-cover sources with polygons — **13 / 13**",
}],
          [{ km: "", en: "Raster Converter run" }, {
  km: "",
  en: "Pixel-exact output, cancel + resume, cancel during merge, block-size change, format limits, extension fix-up — **18 / 18**",
}],
        ] },
      { type: "paragraph", text: {
          km: "",
          en: "New regression tests live in `tests/open_data/` and `tests/raster_format_converter/` (alongside the existing `tests/imagery_downloader/`); the ArcGIS paging test was confirmed to fail against the old behaviour.",
        } },
      { type: "heading", text: { km: "", en: "Network use and privacy" } },
      { type: "paragraph", text: {
          km: "",
          en: "Only **Add Open Data & Basemaps** and **Imagery Downloader** use the network, and only when you ask for data. They contact geoBoundaries, HDX, Natural Earth (via GitHub), OpenStreetMap, Google and Esri tile services, the Copernicus DEM and ESA WorldCover buckets on Amazon S3, Esri's Living Atlas land-cover service, OpenTopography, and any address you type. **OpenTopography is the only source that needs an account**; your free API key is kept in the QGIS authentication database and sent only to OpenTopography. The only information sent is what a request needs — a country code, the bounding box of the area, or tile numbers. No project data is uploaded and nothing runs in the background. (The 0.2.0 `metadata.txt` disclosure was corrected to say all of this.)",
        } },
      { type: "heading", text: { km: "", en: "Things to know" } },
      { type: "list", items: [
        {
          km: "",
          en: "**QGIS 4 / PyQt 6 has not been run on a real QGIS 4.** The QGIS 4 installs on the development machine are installer stubs with no Python. Compatibility is established by the static scan and by using scoped enums throughout; please test on a real QGIS 4 build when one is available.",
        },
        {
          km: "",
          en: "**Google imagery and basemaps.** Google's terms restrict bulk downloading of map tiles and use outside Google's own APIs. The Imagery Downloader's Help text and the tool page say so and the result layer carries Google's attribution, but the window does **not** stop to ask for an acknowledgement before downloading; whether a given use is permitted is the user's responsibility.",
        },
        {
          km: "",
          en: "**ECW writing needs a Hexagon licence** (`ECW_ENCODE_KEY` and `ECW_ENCODE_COMPANY`). Without it ECW is hidden from the Imagery Downloader and refused up front by the converter. JPEG 2000 uses the open-source OpenJPEG driver and needs nothing.",
        },
        {
          km: "",
          en: "**Add Open Data runs DEM and land-cover downloads on the GUI thread** behind a cancellable progress dialog; very large areas will hold the window. (The Imagery Downloader runs in the background.) Requests are capped (700 M pixels for DEM, 500 M for land cover, 60 M for polygons).",
        },
        {
          km: "",
          en: "**Streamed AWS tiles** (Copernicus, WorldCover) go through GDAL, which is given the QGIS proxy but not QGIS's SSL exceptions. Everything fetched through QGIS honours all of QGIS's network settings.",
        },
        { km: "", en: "**Areas crossing the antimeridian** are not supported for DEM or imagery." },
        {
          km: "",
          en: "**MGRS** is UTM-based (80°S–84°N); polar UPS is not drawn. A map spanning several zones is gridded for the centre zone and says so.",
        },
        {
          km: "",
          en: "**Natural Earth Cambodia has 24 ADM1 units** (its own generalisation, not the official 25) — use geoBoundaries or HDX when the count must be right.",
        },
        {
          km: "",
          en: "**Housekeeping, unchanged from 0.1.0:** 29 harmless unused-import notes (pyflakes) remain in older modules, identical to the released baseline, and several older modules enable `gdal.UseExceptions()` process-wide at load (as do the new imagery and converter modules).",
        },
      ] },
      { type: "heading", text: { km: "", en: "Upgrading from 0.1.0" } },
      { type: "list", items: [
        {
          km: "",
          en: "Install over 0.1.0 from the Plugin Manager or *Install from ZIP*. Algorithm ids of existing tools are unchanged; the toolbar gains the new tools and the **KGA Mapping** group.",
        },
        {
          km: "",
          en: "The Duplicate Checker adds a `dup_status` field (not `is_dup_temp`). A leftover `is_dup_temp` field from 0.1.0 is not removed automatically.",
        },
        {
          km: "",
          en: "Downloaded data is cached in `<QGIS profile>/kga_tools/data_cache`; **Clear cache** in the Add Data window empties it.",
        },
        { km: "", en: "Minimum QGIS is still **3.28**." },
      ] },
      { type: "heading", text: { km: "", en: "Release checklist" } },
      { type: "steps", items: [
        { km: "", en: "Tag `v0.2.0` on the commit that carries this note." },
        {
          km: "",
          en: "Build `kga_tools.zip` with `package.bat` (single `metadata.txt`, 185 files, ~1.2 MB).",
        },
        {
          km: "",
          en: "Upload to plugins.qgis.org and confirm the Security, Flake8 and Qt 6 tabs read zero.",
        },
      ] },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-09-11",
    dateLabel: { km: "១១ កញ្ញា ២០២៦", en: "11 September 2026" },
    title: { km: "ការចេញផ្សាយជាសាធារណៈលើកដំបូង", en: "First public release" },
    tagline: {
               km: "ការចេញផ្សាយជាសាធារណៈលើកដំបូង ដែលប្រមូលឧបករណ៍ដំណើរការរបស់ KGA ទៅក្នុង provider តែមួយ ព្រមទាំងរបារឧបករណ៍ផ្ទាល់ខ្លួន។",
               en: "First public release. Requires **QGIS 3.28 or newer**.",
             },
    toolCount: 41,
    qgis: "3.28+",
    facts: [],
    body: [
      { type: "paragraph", text: {
          km: "",
          en: "KGA Toolbox bundles the KGA processing algorithms into a single provider with a toolbar of its own, and adds the things QGIS leaves out:",
        } },
      { type: "list", items: [
        {
          km: "",
          en: "a two-way converter between an ArcGIS File Geodatabase and a GeoPackage that carries field domains and layer aliases across",
        },
        { km: "", en: "an editor for GeoPackage field domains" },
        { km: "", en: "an append tool with a real field mapping" },
        { km: "", en: "a safe attribute round-trip to Excel" },
        { km: "", en: "a self-contained layer package format" },
        { km: "", en: "topology checks with an error inspector" },
        {
          km: "",
          en: "a set of interactive editing tools modelled on the ArcGIS Pro Modify Features pane",
        },
      ] },
      { type: "heading", text: { km: "", en: "Install" } },
      { type: "steps", items: [
        { km: "", en: "Download `kga_tools.zip` from the assets below." },
        {
          km: "",
          en: "In QGIS: **Plugins → Manage and Install Plugins → Install from ZIP**, pick the file.",
        },
        { km: "", en: "Under **Installed**, enable **KGA Toolbox**." },
      ] },
      { type: "paragraph", text: {
          km: "",
          en: "The tools appear in the Processing Toolbox under **KGA Toolbox** and on a toolbar of their own. Every algorithm carries a **Help** button that opens its page in the documentation bundled with the plugin.",
        } },
      { type: "heading", text: { km: "", en: "What's in it" } },
      { type: "paragraph", text: {
          km: "",
          en: "41 algorithms in seven groups: KGA Data Management, KGA Schema Tools, KGA Editing Tools, KGA Geometry Utilities, KGA Topology, KGA Data Conversion and KGA Irrigation Tools.",
        } },
      { type: "subheading", text: { km: "", en: "Conversion" } },
      { type: "list", items: [
        {
          km: "",
          en: "File Geodatabase ⇄ GeoPackage, a whole container at a time. Field domains, non-spatial tables, Z/M values and curves travel with the data.",
        },
        {
          km: "",
          en: "Layer names are made legal for the target format and the original is kept as the ArcGIS alias, so the round trip gives the names back.",
        },
        {
          km: "",
          en: "The geodatabase side gets `OBJECTID`, optional `Shape_Length` / `Shape_Area` and an optional feature dataset; QGIS styles can ride along in a `KGA_layer_styles` table.",
        },
        {
          km: "",
          en: "Shapefile and GeoPackage converters, KML export with labels, and a self-contained layer package format.",
        },
      ] },
      { type: "subheading", text: { km: "", en: "Schema" } },
      { type: "list", items: [
        { km: "", en: "Domain & Schema Manager for GeoPackage field domains." },
        { km: "", en: "Append with Field Mapping." },
        { km: "", en: "A safe attribute round-trip to Excel." },
      ] },
      { type: "subheading", text: { km: "", en: "Topology" } },
      { type: "list", items: [
        {
          km: "",
          en: "Line and point checks with an Error Inspector that lists the errors a check wrote, zooms to each one and re-runs the check.",
        },
        { km: "", en: "Planarize Lines, with the option to rewrite the input layer in place." },
        { km: "", en: "Duplicate Checker, Update Geometry Fields, Update X/Y or Lat/Lon Fields." },
      ] },
      { type: "subheading", text: { km: "", en: "Editing" } },
      { type: "paragraph", text: {
          km: "",
          en: "Each tool is a modeless dialog with a map tool of its own: hover a feature to see the result drawn in cyan, click to write it, or drag a path across several to do them all — one undo step per click or drag.",
        } },
      { type: "list", items: [
        {
          km: "",
          en: "**Copy Parallel** offsets lines left, right or both ways with mitered, beveled or rounded corners, and keeps the digitized direction that decides which side is which.",
        },
        {
          km: "",
          en: "**Split into COGO Lines** breaks a boundary into one line per course carrying Direction, Distance, Radius and ArcLength, in any of the four ArcGIS direction types and four direction units. Circular arcs stay single courses with a signed radius rather than being chorded.",
        },
        {
          km: "",
          en: "**Merge** combines features with a per-field value chooser and keeps the preserved feature's id.",
        },
        {
          km: "",
          en: "**Divide** cuts lines by length and polygons into equal-area strips along a chosen direction.",
        },
        {
          km: "",
          en: "**Construct Polygon** writes the polygon a set of lines encloses, naming and flashing the loose ends when they do not close.",
        },
        {
          km: "",
          en: "**Copy-Paste Feature** fits geometry to the target on the way in and reports every value that had to be converted rather than leaving a silent `NULL`.",
        },
        { km: "", en: "Also **Buffer**, **Clip** and **Sequential Numbering**." },
      ] },
      { type: "subheading", text: { km: "", en: "Irrigation" } },
      { type: "paragraph", text: {
          km: "",
          en: "DEM & Contour Tool, CSV to DEM/contour, hypsometric map, reservoir rating curve, storage capacity curve, and DEM elevation correction with a point sample report.",
        } },
      { type: "heading", text: { km: "", en: "Notes" } },
      { type: "list", items: [
        {
          km: "",
          en: "Distances and areas are honest on a layer stored in degrees: the work is done in the matching UTM zone and brought back.",
        },
        {
          km: "",
          en: "Algorithm ids change from `script:<name>` to `kga:<name>`. Any saved models or Python scripts calling the old ids need updating.",
        },
        { km: "", en: "Import errors are written to the **Log Messages** panel under **KGA Toolbox**." },
      ] },
    ],
  },
];

export const getRelease = (version) => releases.find((r) => r.version === version);
export const LATEST = releases[0];

if (process.env.NODE_ENV !== "production") {
  const seen = releases.map((r) => r.version);
  const dupes = seen.filter((v, i) => seen.indexOf(v) !== i);
  if (dupes.length) console.error("[releaseNotes] duplicate versions:", dupes);
  const undated = releases.filter((r) => !r.date);
  if (undated.length) console.error("[releaseNotes] missing date:", undated.map((r) => r.version));
}
