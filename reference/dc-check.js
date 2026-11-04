
(function () {
"use strict";

/* ============================================================
   i18n
   ============================================================ */
const T = {
  kh: {
    back: "កម្មវិធី", subtitle: "បង្កើតទិន្នន័យ GIS ពី CSV",
    s1: "នាំចូល CSV", pickCsv: "ជ្រើសឯកសារ CSV", csvHint: "ឬអូសឯកសារមកទីនេះ",
    clearCsv: "សម្អាតឯកសារ CSV",
    s2: "ជួរកូអរដោនេ និង CRS", xField: "ជួរ X", yField: "ជួរ Y", crs: "ប្រព័ន្ធកូអរដោនេ",
    customCrs: "បញ្ចូលលេខ EPSG ដោយខ្លួនឯង", plot: "បង្ហាញចំណុចលើផែនទី",
    s3: "គូសទិន្នន័យ", point: "ចំណុច", line: "ខ្សែ", polygon: "ពហុកោណ",
    editMode: "កែទីតាំងកំពូល", dragMode: "ផ្លាស់ទី",
    autoSplit: "បំបែកខ្សែតាមកំពូល",
    toPolygon: "ខ្សែ → ពហុកោណ", snap: "ខ្ទាស់ចំណុច (Snap)", basemap: "ផែនទីមូលដ្ឋាន",
    drawHint: "គូសលើផែនទី។ ចុចពីរដងលើចំណុចចុងក្រោយដើម្បីបញ្ចប់។",
    layers: "ស្រទាប់ទិន្នន័យ", noFeatures: "មិនទាន់មានស្រទាប់ទេ — សូមបង្កើតស្រទាប់ថ្មី ឬបង្ហាញចំណុចពី CSV។",
    csvLayer: "ចំណុចពី CSV",
    newLayer: "បង្កើតស្រទាប់ថ្មី", newLayerPlus: "+ បង្កើតស្រទាប់ថ្មី",
    layerName: "ឈ្មោះស្រទាប់", geomType: "ប្រភេទធរណីមាត្រ", layerCrs: "ប្រព័ន្ធកូអរដោនេ",
    createLayer: "បង្កើត",
    crsNote: "CRS ត្រូវបានរក្សាទុកជាព័ត៌មានស្រទាប់។ ការនាំចេញនៅតែជា WGS 84 (EPSG:4326)។",
    layerNeedName: "សូមបញ្ចូលឈ្មោះស្រទាប់។", layerDup: "ឈ្មោះស្រទាប់នេះមានរួចហើយ។",
    layerNeedEpsg: "សូមបញ្ចូលលេខ EPSG។",
    layerCreated: "បានបង្កើតស្រទាប់",
    pickLayer: "គូសទៅក្នុងស្រទាប់ណា?",
    pickHint: "ជ្រើសស្រទាប់គោលដៅ រួចគូសលើផែនទី។",
    pickPolyHint: "ជ្រើសស្រទាប់ពហុកោណដែលនឹងទទួលរូបរាងថ្មីនេះ។",
    noLayerOfKind: "មិនទាន់មានស្រទាប់ប្រភេទនេះទេ — សូមបង្កើតមួយជាមុនសិន។",
    drawingInto: "កំពុងគូសទៅក្នុង",
    delLayerHint: "ស្រទាប់នេះ និងទិន្នន័យទាំងអស់ក្នុងវានឹងត្រូវលុប។ មិនអាចត្រឡប់វិញបានទេ។",
    emptyLayer: "មិនទាន់មានទិន្នន័យក្នុងស្រទាប់នេះទេ។",
    featCount: "ទិន្នន័យ",
    showLayer: "បង្ហាញលើផែនទី", hideLayer: "លាក់ពីផែនទី",
    showLabel: "បង្ហាញស្លាកលើផែនទី", hideLabel: "លាក់ស្លាក",
    remove: "លុប", cancel: "បោះបង់",
    openTable: "បើកតារាងគុណលក្ខណៈ", renameHint: "ចុចខាងស្ដាំដើម្បីប្ដូរឈ្មោះ",
    addField: "+ ជួរថ្មី", newField: "បង្កើតជួរថ្មី", fieldName: "ឈ្មោះជួរ", fieldType: "ប្រភេទទិន្នន័យ",
    addFieldGo: "បន្ថែម", removeField: "លុបជួរនេះ",
    fieldForLayer: "ជួរនេះនឹងបន្ថែមទៅស្រទាប់៖",
    fieldNeedName: "សូមបញ្ចូលឈ្មោះជួរ។", fieldDup: "ឈ្មោះជួរនេះមានរួចហើយ។",
    noFields: "មិនទាន់មានជួរគុណលក្ខណៈទេ។ ចុច «+ ជួរថ្មី» ដើម្បីបង្កើតជួរដំបូង។",
    attrOf: "គុណលក្ខណៈ", features: "ទិន្នន័យ",
    tText: "អក្សរ", tInt: "ចំនួនគត់", tDouble: "ចំនួនទសភាគ", tDate: "កាលបរិច្ឆេទ", tBool: "បាទ/ទេ",
    confirmDelete: "លុបមែនទេ?",
    delHint: "វានឹងត្រូវលុបចេញ។ មិនអាចត្រឡប់វិញបានទេ។",
    delCsvHint: "ចំណុចដែលបានបង្ហាញនឹងត្រូវលុបចេញពីផែនទី។ តារាង CSV នៅដដែល — អ្នកអាចបង្ហាញវាឡើងវិញបាន។",
    s4: "នាំចេញ", separate: "ដាច់ដោយឡែក", oneZip: "ជា ZIP តែមួយ",
    exportBtn: "នាំចេញទិន្នន័យ", exportDb: "នាំចេញជាមូលដ្ឋានទិន្នន័យ (.gpkg)",
    exportHint: "ឯកសារទាំងអស់នាំចេញក្នុងប្រព័ន្ធ WGS 84 (EPSG:4326)។ File GDB នាំចេញជា XML Workspace Document ដែលនាំចូលទៅ File Geodatabase តាម ArcGIS ៖ Import > XML Workspace Document។",
    preview: "តារាងទិន្នន័យ",
    emptyTable: "នាំចូលឯកសារ CSV ដើម្បីមើលតារាង។ បន្ទាប់មកកំណត់ជួរ X និង Y រួចជ្រើស CRS។",
    points: "ចំណុច", lines: "ខ្សែ", polygons: "ពហុកោណ", rows: "ជួរ",
    ready: "រួចរាល់", loading: "កំពុងផ្ទុកបណ្ណាល័យ…", libFail: "ផ្ទុកបណ្ណាល័យមិនបានសម្រេច។",
    needCsv: "សូមនាំចូលឯកសារ CSV ជាមុនសិន។",
    needXY: "សូមជ្រើសជួរ X និង Y ជាមុនសិន។",
    noData: "គ្មានទិន្នន័យសម្រាប់នាំចេញ។", noFormat: "សូមជ្រើសទម្រង់នាំចេញយ៉ាងតិចមួយ។",
    plotted: "បានបង្ហាញចំណុច", invalid: "ជួរមិនត្រឹមត្រូវ", noValid: "គ្មានចំណុចត្រឹមត្រូវ។ សូមពិនិត្យជួរ X, Y និង CRS។",
    crsFail: "រកមិនឃើញនិយមន័យ EPSG នេះទេ។", resolving: "កំពុងស្វែងរកនិយមន័យ EPSG…",
    parsing: "កំពុងអានឯកសារ…", parseFail: "អានឯកសារ CSV មិនបានសម្រេច។",
    exported: "នាំចេញរួចរាល់", files: "ឯកសារ", building: "កំពុងបង្កើតមូលដ្ឋានទិន្នន័យ…",
    shpFail: "បង្កើត Shapefile មិនបានសម្រេច។", gpkgFail: "បង្កើត GeoPackage មិនបានសម្រេច។",
    tables: "តារាង", drawn: "គូស", ptsShort: "ចំណុច",
    leaveWarn: "ការងាររបស់អ្នកមិនទាន់បានរក្សាទុកទេ។ បើចាកចេញ ឬផ្ទុកទំព័រឡើងវិញ ទិន្នន័យទាំងអស់នឹងបាត់បង់។ តើអ្នកចង់ចាកចេញមែនទេ?",
    csvCleared: "បានសម្អាតឯកសារ CSV។",
    splitDone: "បានបំបែកខ្សែជា", segments: "ផ្នែក",
    needLine: "សូមជ្រើសខ្សែមួយក្នុងបញ្ជីជាមុនសិន។",
    tooFewPts: "ត្រូវការកំពូលយ៉ាងតិច ៣ ដើម្បីបង្កើតពហុកោណ។",
    converted: "បានបំប្លែងខ្សែបិទទៅជាពហុកោណ។",
    convertedOpen: "ខ្សែនេះមិនទាន់បិទទេ — បានភ្ជាប់ចំណុចដើម និងចំណុចចុង រួចបង្កើតជាពហុកោណ។",
    tooManyLabels: "ចំណុចច្រើនពេក មិនអាចបង្ហាញលេខសម្គាល់បានទេ (អតិបរមា ៥០០)។",
    gdbFail: "បង្កើតឯកសារ File GDB មិនបានសម្រេច។"
  },
  en: {
    back: "Programs", subtitle: "Create GIS data from CSV",
    s1: "Import CSV", pickCsv: "Choose a CSV file", csvHint: "or drop a file here",
    clearCsv: "Clear the CSV",
    s2: "Coordinate fields & CRS", xField: "X field", yField: "Y field", crs: "Coordinate system",
    customCrs: "Enter an EPSG code…", plot: "Plot points on map",
    s3: "Digitize", point: "Point", line: "Line", polygon: "Polygon",
    editMode: "Edit vertices", dragMode: "Move",
    autoSplit: "Split line at vertices",
    toPolygon: "Line → Polygon", snap: "Snap to vertices", basemap: "Basemap",
    drawHint: "Draw on the map. Double-click the last vertex to finish.",
    layers: "Layers", noFeatures: "No layers yet — create a layer, or plot a CSV.",
    csvLayer: "CSV points",
    newLayer: "New layer", newLayerPlus: "+ New layer",
    layerName: "Layer name", geomType: "Geometry type", layerCrs: "Coordinate system",
    createLayer: "Create",
    crsNote: "The CRS is kept as layer metadata. Files are still exported in WGS 84 (EPSG:4326).",
    layerNeedName: "Give the layer a name.", layerDup: "A layer with that name already exists.",
    layerNeedEpsg: "Enter an EPSG code.",
    layerCreated: "Layer created",
    pickLayer: "Draw into which layer?",
    pickHint: "Pick the target layer, then draw on the map.",
    pickPolyHint: "Pick the polygon layer that receives the new shape.",
    noLayerOfKind: "No layer of that geometry type yet — create one first.",
    drawingInto: "Drawing into",
    delLayerHint: "The layer and every feature in it will be deleted. This cannot be undone.",
    emptyLayer: "No features in this layer yet.",
    featCount: "features",
    showLayer: "Show on map", hideLayer: "Hide from map",
    showLabel: "Show label on map", hideLabel: "Hide label",
    remove: "Delete", cancel: "Cancel",
    openTable: "Open attribute table", renameHint: "Right-click to rename",
    addField: "+ Field", newField: "New field", fieldName: "Field name", fieldType: "Data type",
    addFieldGo: "Add field", removeField: "Delete this field",
    fieldForLayer: "The field is added to the layer:",
    fieldNeedName: "Give the field a name.", fieldDup: "A field with that name already exists.",
    noFields: "No attribute fields yet. Use “+ Field” to create the first one.",
    attrOf: "Attributes", features: "features",
    tText: "Text", tInt: "Integer", tDouble: "Decimal", tDate: "Date", tBool: "Yes/No",
    confirmDelete: "Delete this?",
    delHint: "It will be removed from the map. This cannot be undone.",
    delCsvHint: "The plotted points are removed from the map. The imported table stays, so you can plot them again.",
    s4: "Export", separate: "Separate files", oneZip: "One ZIP",
    exportBtn: "Export data", exportDb: "Export as database (.gpkg)",
    exportHint: "All files are exported in WGS 84 (EPSG:4326). File GDB is written as an XML Workspace Document — in ArcGIS, import it into a File Geodatabase with Import > XML Workspace Document.",
    preview: "Table preview",
    emptyTable: "Import a CSV to see the table. Then set the X and Y fields and pick a CRS.",
    points: "points", lines: "lines", polygons: "polygons", rows: "rows",
    ready: "ready", loading: "loading libraries…", libFail: "Library load failed.",
    needCsv: "Import a CSV file first.",
    needXY: "Select the X and Y fields first.",
    noData: "Nothing to export yet.", noFormat: "Pick at least one export format.",
    plotted: "Plotted", invalid: "invalid rows", noValid: "No valid points. Check the X, Y fields and the CRS.",
    crsFail: "Could not resolve that EPSG code.", resolving: "resolving EPSG definition…",
    parsing: "reading file…", parseFail: "Could not read the CSV file.",
    exported: "Export finished", files: "file(s)", building: "building database…",
    shpFail: "Could not build the Shapefile.", gpkgFail: "Could not build the GeoPackage.",
    tables: "tables", drawn: "drawn", ptsShort: "pts",
    leaveWarn: "Your work has not been saved. Leaving or reloading this page will discard everything. Leave anyway?",
    csvCleared: "CSV cleared.",
    splitDone: "Line split into", segments: "segments",
    needLine: "Select a line in the list first.",
    tooFewPts: "A polygon needs at least 3 vertices.",
    converted: "Closed line converted to a polygon.",
    convertedOpen: "That line was open — its ends were joined to close the polygon.",
    tooManyLabels: "Too many points to label (max 500).",
    gdbFail: "Could not build the File GDB document."
  }
};

const FORMATS = [
  { id: "shp", label: "Shapefile" },
  { id: "gdb", label: "File GDB (XML)" },
  { id: "csv", label: "CSV / WKT" },
  { id: "geojson", label: "GeoJSON" },
  { id: "kml", label: "KML" }
];

const MAX_PREVIEW_ROWS = 300;
const MAX_LABELS = 500;

/* ============================================================
   State
   ============================================================ */
const S = {
  lang: "kh",
  fileName: "", headers: [], types: {}, rows: [], idField: "",
  xField: "", yField: "", crs: "EPSG:4326", customEpsg: "",
  points: [], markers: [], pointsVisible: true,
  // a layer owns a geometry kind, a CRS and an attribute schema; features are its rows
  layers: [], layerSeq: 0, drawTarget: null,
  features: [], selected: null, seq: 0,
  tableView: { kind: "csv", id: null },
  snap: true, basemap: "osm", tool: null, editMode: false, dragMode: false,
  autoSplit: false, showIds: false,
  fmt: { csv: true, geojson: false, kml: false, shp: false, gdb: false },
  mode: "separate"
};

const layerIndex = {};
let map, baseOsm, baseSat, baseTopo, pointsLayer, drawLayer, measureLayer;

const $ = (id) => document.getElementById(id);
const t = () => T[S.lang];

/* ============================================================
   Theme + language
   ============================================================ */
const SUN = '<path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>';
const MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';

function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  $("themeIcon").innerHTML = dark ? SUN : MOON;
  try { localStorage.setItem("kga-dc-theme", dark ? "dark" : "light"); } catch (e) {}
}

function applyLang() {
  const d = t();
  document.documentElement.lang = S.lang === "kh" ? "km" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const k = el.getAttribute("data-i18n-title");
    if (d[k] !== undefined) el.title = d[k];
  });
  // hover tooltips on the floating map toolbar
  document.querySelectorAll("[data-i18n-tip]").forEach((el) => {
    const k = el.getAttribute("data-i18n-tip");
    if (d[k] !== undefined) { el.setAttribute("data-tip", d[k]); el.setAttribute("aria-label", d[k]); }
  });
  $("mapTools").setAttribute("aria-label", d.s3);
  $("clearCsv").title = d.clearCsv;
  $("langKh").classList.toggle("on", S.lang === "kh");
  $("langEn").classList.toggle("on", S.lang === "en");
  $("libStatus").textContent = libsReady ? d.ready : d.loading;
  syncBaseTip();
  if (S.fileName) $("fileRows").textContent = S.rows.length + " " + d.rows;
  if (!$("layerScrim").hidden) renderGeomRow();
  renderFeatureList();
  renderPreviewMeta();
  try { localStorage.setItem("kga-dc-lang", S.lang); } catch (e) {}
}

function baseLabel() {
  return S.basemap === "osm" ? "OSM" : S.basemap === "sat" ? "Satellite" : "Topo";
}

/**
 * The map toolbar owns the left gutter. When the map pane is short — a small
 * window, or the table splitter dragged down — a single column would run past
 * the bottom edge, so fold it into two.
 */
function fitTools() {
  const wrap = document.querySelector(".mapwrap");
  const el = $("mapTools");
  if (!wrap || !el) return;
  el.classList.remove("two");
  const avail = wrap.clientHeight - 55; // 11px top offset + the coordinate HUD below
  if (el.offsetHeight > avail) el.classList.add("two");
}

/** The basemap button is icon-only, so the active basemap lives in its tooltip. */
function syncBaseTip() {
  $("baseBtn").setAttribute("data-tip", t().basemap + ": " + baseLabel());
  $("baseBtn").setAttribute("aria-label", t().basemap + ": " + baseLabel());
}

/** Anything the user would lose on a reload or a navigation away. */
function hasWork() {
  return S.rows.length > 0 || S.features.length > 0 || S.layers.length > 0;
}

function setStatus(msg, isError) {
  const el = $("status");
  el.textContent = msg || "";
  el.classList.toggle("err", !!isError);
}

/* ============================================================
   Boot
   ============================================================ */
let libsReady = false;

function waitForLibs(tries) {
  tries = tries || 0;
  const ok = window.L && window.L.PM && window.proj4 && window.Papa && window.turf;
  if (ok) {
    libsReady = true;
    $("libStatus").textContent = t().ready;
    initMap();
    $("loader").classList.add("hide");
    setTimeout(() => $("loader").remove(), 400);
    return;
  }
  if (tries > 200) {
    $("libStatus").textContent = "error";
    setStatus(t().libFail, true);
    $("loader").classList.add("hide");
    return;
  }
  setTimeout(() => waitForLibs(tries + 1), 100);
}

/* ============================================================
   Map
   ============================================================ */
function initMap() {
  // zoom sits top-right so the digitize toolbar gets the whole left gutter
  map = L.map("map", { center: [12.5657, 104.991], zoom: 7, preferCanvas: true, zoomControl: false });
  L.control.zoom({ position: "topright" }).addTo(map);

  baseOsm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  baseSat = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19, attribution: "Esri, Maxar, Earthstar Geographics"
  });
  baseTopo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17, attribution: "&copy; OpenTopoMap (CC-BY-SA), &copy; OpenStreetMap contributors"
  });

  pointsLayer = L.layerGroup().addTo(map);
  drawLayer = L.featureGroup().addTo(map);
  measureLayer = L.layerGroup().addTo(map);

  L.control.scale({ imperial: false, position: "bottomright" }).addTo(map);

  map.pm.setGlobalOptions(globalOpts());
  map.pm.setPathOptions({ color: "#FF6434", fillColor: "#FF6434", fillOpacity: .18, weight: 3 });

  map.on("pm:create", onCreate);
  map.on("pm:drawstart", () => { document.body.classList.remove("nav-open"); });
  map.on("mousemove", (e) => {
    $("mapHud").textContent = e.latlng.lat.toFixed(6) + ", " + e.latlng.lng.toFixed(6);
  });

  setTimeout(() => map.invalidateSize(), 200);

  // Window resize alone is not enough: the map box also changes with the
  // splitter, the mobile drawer and font loading. Without this the canvas
  // renderer can keep the size it had at init and clip drawn geometry.
  if (window.ResizeObserver) {
    new ResizeObserver(() => { map.invalidateSize(); fitTools(); }).observe(document.getElementById("map"));
  }
}

function globalOpts(color) {
  const c = color || BRAND;
  return {
    snappable: S.snap, snapDistance: 20, layerGroup: drawLayer, allowSelfIntersection: true,
    markerStyle: {
      icon: L.divIcon({
        className: "",
        html: '<div class="kga-pin" style="background:' + c + '"></div>',
        iconSize: [13, 13], iconAnchor: [6.5, 6.5]
      })
    }
  };
}

/* ============================================================
   Layers

   A layer is the unit the user creates, names, gives a CRS and exports; the
   shapes drawn into it are its rows. Nothing is drawable until one exists.
   ============================================================ */
const BRAND = "#FF6434";

/* Distinct hues so two layers never read as the same data on the map. */
const LAYER_COLORS = [
  "#FF6434", "#244C8F", "#1F9D55", "#B02AA0", "#0E9AA7",
  "#D97706", "#7C3AED", "#B02A2A", "#0F766E", "#4D7C0F"
];

const pathStyle = (kind, color) => kind === "polygon"
  ? { color: color, fillColor: color, fillOpacity: .18, weight: 3 }
  : { color: color, weight: 3 };

const findLayer = (id) => S.layers.find((l) => l.id === id) || null;
const layerOf = (f) => (f ? findLayer(f.layerId) : null);
const featuresOf = (id) => S.features.filter((f) => f.layerId === id);

function createLayer(name, kind, crs) {
  const lyr = {
    id: "L" + (++S.layerSeq),
    name: name,
    kind: kind,
    crs: crs || "EPSG:4326",
    color: LAYER_COLORS[S.layerSeq % LAYER_COLORS.length],
    visible: true,
    expanded: true,
    fields: []
  };
  S.layers.push(lyr);
  return lyr;
}

function removeLayer(id) {
  featuresOf(id).forEach((f) => {
    const ly = layerIndex[f.id];
    if (ly) { drawLayer.removeLayer(ly); delete layerIndex[f.id]; }
    if (S.selected === f.id) S.selected = null;
  });
  S.features = S.features.filter((f) => f.layerId !== id);
  S.layers = S.layers.filter((l) => l.id !== id);
  if (S.drawTarget === id) { S.drawTarget = null; disarmDraw(); }
  if (S.tableView.id === id) S.tableView = { kind: "csv", id: null };
  renderFeatureList();
  renderTable();
  updateLabels();
}

/** Put a freshly created/derived shape under app management, inside a layer. */
function registerFeature(layer, lyr) {
  const id = "f" + (++S.seq);
  layer.__id = id;
  layerIndex[id] = layer;
  layer.on("click", () => selectFeature(id, false));
  layer.on("pm:edit", () => remeasure(id));
  layer.on("pm:dragend", () => remeasure(id));
  if (lyr.kind !== "point" && layer.setStyle) layer.setStyle(pathStyle(lyr.kind, lyr.color));
  S.features.push({
    id: id, layerId: lyr.id, kind: lyr.kind, name: "", visible: true, showLabel: false, attrs: {},
    measure: measure(layer.toGeoJSON())
  });
  return id;
}

/** Show/hide the whole CSV marker set. Same contract as setFeatureVisible. */
function setPointsVisible(visible) {
  S.pointsVisible = visible;
  if (!map || !pointsLayer) return;
  if (visible) { if (!map.hasLayer(pointsLayer)) pointsLayer.addTo(map); }
  else if (map.hasLayer(pointsLayer)) map.removeLayer(pointsLayer);
}

/** Drop the plotted markers but keep the table, so "Plot" can rebuild them. */
function clearPlottedPoints() {
  if (pointsLayer) pointsLayer.clearLayers();
  S.points = [];
  S.markers = [];
  if (S.selected === CSV_LAYER_ID) S.selected = null;
  setPointsVisible(true);
  renderFeatureList();
  updateLabels();
}

/**
 * Show/hide one feature on the map. The record and its geometry stay put — this
 * only detaches the layer from the map, so exports are unaffected. A feature is
 * on the map only when both it and its layer are shown.
 */
function setFeatureVisible(f, visible) {
  f.visible = visible;
  applyFeatureVisible(f);
}

/** Toggle a whole layer: every feature in it follows, its own flag untouched. */
function setLayerVisible(lyr, visible) {
  lyr.visible = visible;
  featuresOf(lyr.id).forEach(applyFeatureVisible);
}

function applyFeatureVisible(f) {
  const lyr = layerOf(f);
  const visible = f.visible && (!lyr || lyr.visible);
  const ly = layerIndex[f.id];
  if (!ly) return;

  if (visible) {
    if (!drawLayer.hasLayer(ly)) drawLayer.addLayer(ly);
    // a layer re-added while a global mode is live needs its handles rebuilt
    if (S.editMode) { map.pm.disableGlobalEditMode(); map.pm.enableGlobalEditMode(); }
    else if (S.dragMode) { map.pm.disableGlobalDragMode(); map.pm.enableGlobalDragMode(); }
  } else {
    // drop any live edit handles first, or their vertex markers get orphaned
    if (ly.pm && ly.pm.enabled && ly.pm.enabled()) ly.pm.disable();
    if (drawLayer.hasLayer(ly)) drawLayer.removeLayer(ly);
  }
}

function onCreate(e) {
  const layer = e.layer;
  const lyr = findLayer(S.drawTarget);

  // the target layer is chosen before the tool arms; if it went away, so does the shape
  if (!lyr) {
    drawLayer.removeLayer(layer);
    setStatus(t().noLayerOfKind, true);
    disarmDraw();
    syncToolButtons();
    return;
  }

  if (lyr.kind === "line" && S.autoSplit) {
    const parts = splitAtVertices(layer, lyr);
    if (parts > 1) setStatus(t().splitDone + " " + parts + " " + t().segments);
  } else {
    S.selected = registerFeature(layer, lyr);
  }
  lyr.expanded = true;

  S.tool = null;
  if (map.pm.globalDrawModeEnabled()) map.pm.disableDraw();
  syncToolButtons();
  renderFeatureList();
  renderTable();
  updateLabels();
}

/** Replace a drawn polyline with one 2-point segment per pair of vertices. */
function splitAtVertices(layer, lyr) {
  const coords = layer.toGeoJSON().geometry.coordinates;
  if (coords.length < 3) {
    S.selected = registerFeature(layer, lyr);
    return 1;
  }
  drawLayer.removeLayer(layer);
  let last = null;
  for (let i = 0; i < coords.length - 1; i++) {
    const seg = L.polyline(
      [[coords[i][1], coords[i][0]], [coords[i + 1][1], coords[i + 1][0]]],
      pathStyle("line", lyr.color)
    );
    drawLayer.addLayer(seg);
    last = registerFeature(seg, lyr);
  }
  S.selected = last;
  return coords.length - 1;
}

/**
 * Build a polygon from the selected line.
 *
 * Geoman ends a line *on* its first vertex without duplicating it, so a
 * literally closed ring is rare in practice. A line whose ends already meet is
 * de-duplicated; an open line is joined end-to-end and the status line says so.
 */
function lineToPolygon() {
  const rec = S.features.find((f) => f.id === S.selected);
  if (!rec || rec.kind !== "line") { setStatus(t().needLine, true); return; }

  // the polygon has to land in a polygon layer, so ask which one before converting
  chooseLayer("polygon", t().pickPolyHint, (target) => convertLineTo(rec, target));
}

function convertLineTo(rec, target) {
  const src = layerIndex[rec.id];
  if (!src) return;

  let coords = src.toGeoJSON().geometry.coordinates;
  const a = coords[0], b = coords[coords.length - 1];
  // ~1 m at the equator — snapping makes an exact match the common case
  const closed = Math.abs(a[0] - b[0]) < 1e-5 && Math.abs(a[1] - b[1]) < 1e-5;
  if (closed) coords = coords.slice(0, -1);

  if (coords.length < 3) { setStatus(t().tooFewPts, true); return; }

  const poly = L.polygon(coords.map((c) => [c[1], c[0]]), pathStyle("polygon", target.color));
  drawLayer.addLayer(poly);

  const name = rec.name, attrs = rec.attrs, showLabel = rec.showLabel;
  removeFeature(rec.id);
  S.selected = registerFeature(poly, target);

  // carry over the line's name and any attribute the target layer also declares
  const newRec = S.features[S.features.length - 1];
  newRec.name = name;
  newRec.showLabel = showLabel;
  target.fields.forEach((fd) => {
    if (attrs[fd.name] !== undefined) newRec.attrs[fd.name] = attrs[fd.name];
  });
  target.expanded = true;

  renderFeatureList();
  renderTable();
  updateLabels();
  setStatus(closed ? t().converted : t().convertedOpen);
}

function measure(gj) {
  try {
    if (gj.geometry.type === "Point") return "";
    if (gj.geometry.type === "Polygon") {
      const a = turf.area(gj);
      return a > 1e6 ? (a / 1e6).toFixed(3) + " km²" : Math.round(a) + " m²";
    }
    const l = turf.length(gj, { units: "kilometers" });
    return l >= 1 ? l.toFixed(3) + " km" : Math.round(l * 1000) + " m";
  } catch (err) { return ""; }
}

function remeasure(id) {
  const layer = layerIndex[id];
  const rec = S.features.find((f) => f.id === id);
  if (!layer || !rec) return;
  rec.measure = measure(layer.toGeoJSON());
  renderFeatureList();
  updateLabels();
}

/**
 * Anchor a line's label on its longest segment: midpoint plus the screen angle
 * of that segment. Web Mercator scales uniformly, so an angle measured at any
 * fixed zoom holds at every zoom — no need to recompute while panning.
 */
function segmentAnchor(latlngs) {
  const pts = latlngs.map((ll) => map.project(ll, 0));
  let best = -1, bi = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const d = pts[i].distanceTo(pts[i + 1]);
    if (d > best) { best = d; bi = i; }
  }
  const p1 = pts[bi], p2 = pts[bi + 1];
  let angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
  // keep text upright rather than letting it read upside down
  if (angle > 90) angle -= 180;
  else if (angle < -90) angle += 180;
  return {
    latlng: map.unproject(L.point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2), 0),
    angle: angle
  };
}

function measureLabel(latlng, text, angle) {
  const html =
    '<div class="wrap"><div class="rot"' +
    (angle ? ' style="transform:rotate(' + angle.toFixed(1) + 'deg)"' : "") +
    ">" + escHtml(text) + "</div></div>";
  L.marker(latlng, {
    interactive: false,
    keyboard: false,
    icon: L.divIcon({ className: "kga-mlabel", html: html, iconSize: [0, 0], iconAnchor: [0, 0] })
  }).addTo(measureLayer);
}

/** Permanent map labels: IDs on CSV points, length/area on drawn features. */
function updateLabels() {
  if (!map) return;
  measureLayer.clearLayers();

  // labels are per feature: the list's tag button owns the flag
  S.features.forEach((f) => {
    const ly = layerIndex[f.id];
    const lyr = layerOf(f);
    if (!ly || !f.showLabel || !f.measure || !f.visible || (lyr && !lyr.visible)) return;
    if (f.kind === "line") {
      const lls = ly.getLatLngs();
      const flat = Array.isArray(lls[0]) ? lls[0] : lls;
      if (flat.length < 2) return;
      const a = segmentAnchor(flat);
      measureLabel(a.latlng, f.measure, a.angle);
    } else if (f.kind === "polygon") {
      // area sits inside the shape, so upright reads better than rotated
      measureLabel(ly.getCenter(), f.measure, 0);
    }
  });

  const show = S.showIds && S.pointsVisible && S.points.length <= MAX_LABELS;
  S.points.forEach((p) => {
    const mk = S.markers[p.i];
    if (!mk) return;
    if (show) {
      const v = S.idField ? p.attrs[S.idField] : p.i + 1;
      mk.bindTooltip(String(v == null ? p.i + 1 : v), {
        // the halo has no padding of its own, so clear the marker manually
        permanent: true, direction: "top", offset: [0, -7], className: "kga-tip"
      });
    } else if (mk.getTooltip()) {
      mk.unbindTooltip();
    }
  });
}

/* ============================================================
   Delete confirmation
   ============================================================ */
let pendingDelete = null;

/** Ask before dropping a layer. `run` fires only on an explicit confirm. */
function askDelete(name, hint, run) {
  pendingDelete = run;
  $("confirmName").textContent = name;
  $("confirmHint").textContent = hint;
  $("confirmScrim").hidden = false;
  $("confirmNo").focus();
}

/** New-field dialog, scoped to the layer whose table is open. */
function openFieldDialog() {
  const lyr = findLayer(S.tableView.id);
  if (!lyr) return;
  const d = t();
  const sel = $("fieldType");
  sel.innerHTML = FIELD_TYPES.map((ty) =>
    '<option value="' + ty.id + '">' + escHtml(d[ty.key]) + "</option>").join("");
  $("fieldFor").textContent = d.fieldForLayer + " " + (lyr.name || lyr.id);
  $("fieldName").value = "";
  $("fieldErr").hidden = true;
  $("fieldScrim").hidden = false;
  $("fieldName").focus();
}

function submitField() {
  const lyr = findLayer(S.tableView.id);
  if (!lyr) return;
  const d = t();
  const name = $("fieldName").value.trim();
  const err = $("fieldErr");
  if (!name) { err.textContent = d.fieldNeedName; err.hidden = false; return; }
  if (lyr.fields.some((fd) => fd.name.toLowerCase() === name.toLowerCase())) {
    err.textContent = d.fieldDup; err.hidden = false; return;
  }
  $("fieldScrim").hidden = true;
  addField(lyr, name, $("fieldType").value);
}

function closeConfirm(confirmed) {
  if ($("confirmScrim").hidden) return;
  $("confirmScrim").hidden = true;
  const run = pendingDelete;
  pendingDelete = null;
  if (confirmed && run) run();
}

/** Labels on the CSV layer, capped so a huge table cannot bury the basemap. */
function togglePointLabels() {
  if (!S.showIds && S.points.length > MAX_LABELS) {
    setStatus(t().tooManyLabels, true);
    return;
  }
  S.showIds = !S.showIds;
  syncToolButtons();
  renderFeatureList();
  updateLabels();
}

/** One drawn feature's label, independent of every other layer. */
function toggleFeatureLabel(f) {
  f.showLabel = !f.showLabel;
  renderFeatureList();
  updateLabels();
}

function selectFeature(id, zoom) {
  S.selected = S.selected === id ? null : id;
  if (S.selected && zoom !== false) {
    const ly = layerIndex[S.selected];
    if (ly && ly.getBounds && ly.getBounds().isValid()) map.fitBounds(ly.getBounds().pad(.4));
    // reveal the row in its layer rather than leaving the selection hidden
    const lyr = layerOf(S.features.find((f) => f.id === S.selected));
    if (lyr) lyr.expanded = true;
  }
  renderFeatureList();
  if (S.tableView.kind === "layer") renderTable();
}

function removeFeature(id) {
  const ly = layerIndex[id];
  if (ly) { drawLayer.removeLayer(ly); delete layerIndex[id]; }
  S.features = S.features.filter((f) => f.id !== id);
  if (S.selected === id) S.selected = null;
  renderFeatureList();
  renderTable();
  updateLabels();
}

/** "Closed line → Polygon" only applies to a selected line. */
function syncToPolyBtn() {
  const rec = S.features.find((f) => f.id === S.selected);
  $("toPolyBtn").disabled = !rec || rec.kind !== "line";
}

/* ============================================================
   New-layer dialog
   ============================================================ */
let layerDialogKind = "point";
let layerDialogThen = null;   // what to do with the layer once it exists

/**
 * Open the create-layer form. `kind` preselects a geometry type — the draw
 * tools pass their own — and `then` runs with the new layer, which is how
 * "no layer yet, make one and start drawing" stays a single gesture.
 */
function openLayerDialog(kind, then) {
  const d = t();
  layerDialogKind = kind || "point";
  layerDialogThen = then || null;

  renderGeomRow();
  $("layerName").value = suggestLayerName(layerDialogKind);
  $("layerCrs").value = S.crs === "custom" ? "EPSG:4326" : S.crs;
  $("layerEpsg").value = "";
  $("layerEpsg").hidden = true;
  $("layerErr").hidden = true;
  $("layerScrim").hidden = false;
  $("layerName").focus();
  $("layerName").select();
}

/** "points 1", "lines 2" … first free ordinal for the kind. */
function suggestLayerName(kind) {
  const base = { point: "points", line: "lines", polygon: "polygons" }[kind];
  let n = 1;
  while (S.layers.some((l) => l.name.toLowerCase() === base + "_" + n)) n++;
  return base + "_" + n;
}

function renderGeomRow() {
  const d = t();
  const row = $("geomRow");
  row.innerHTML = "";
  ["point", "line", "polygon"].forEach((k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "geombtn" + (layerDialogKind === k ? " on" : "");
    b.innerHTML = GLYPHS[k] + "<span></span>";
    b.querySelector("span").textContent = d[k];
    b.addEventListener("click", () => {
      const auto = $("layerName").value === suggestLayerName(layerDialogKind);
      layerDialogKind = k;
      // only re-suggest a name the user has not touched
      if (auto) $("layerName").value = suggestLayerName(k);
      renderGeomRow();
    });
    row.appendChild(b);
  });
}

function submitLayer() {
  const d = t();
  const err = $("layerErr");
  const name = $("layerName").value.trim();
  if (!name) { err.textContent = d.layerNeedName; err.hidden = false; return; }
  if (S.layers.some((l) => l.name.toLowerCase() === name.toLowerCase())) {
    err.textContent = d.layerDup; err.hidden = false; return;
  }

  let crs = $("layerCrs").value;
  if (crs === "custom") {
    const code = ($("layerEpsg").value || "").replace(/[^0-9]/g, "");
    if (!code) { err.textContent = d.layerNeedEpsg; err.hidden = false; return; }
    crs = "EPSG:" + code;
  }

  $("layerScrim").hidden = true;
  const lyr = createLayer(name, layerDialogKind, crs);
  const then = layerDialogThen;
  layerDialogThen = null;

  S.tableView = { kind: "layer", id: lyr.id };
  renderFeatureList();
  renderTable();
  setStatus(d.layerCreated + " — " + name + " (" + d[lyr.kind] + ", " + crs + ")");
  if (then) then(lyr);
}

/* ============================================================
   Layer picker
   ============================================================ */
let pickThen = null;

/**
 * Ask which layer of `kind` a shape belongs to, then hand it to `then`. With no
 * layer of that kind yet the create form opens instead, prefilled — the answer
 * to "where does this go" is the same either way.
 */
function chooseLayer(kind, hint, then) {
  const d = t();
  const cands = S.layers.filter((l) => l.kind === kind);
  if (!cands.length) {
    setStatus(d.noLayerOfKind, true);
    openLayerDialog(kind, then);
    return;
  }

  pickThen = then;
  $("pickHint").textContent = hint || d.pickHint;
  $("pickNew").onclick = () => {
    $("pickScrim").hidden = true;
    const run = pickThen;
    pickThen = null;
    openLayerDialog(kind, run);
  };

  const box = $("pickList");
  box.innerHTML = "";
  cands.forEach((l) => {
    const n = featuresOf(l.id).length;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pickbtn" + (S.drawTarget === l.id ? " on" : "");
    b.innerHTML =
      '<span class="glyph" style="color:' + l.color + '">' + GLYPHS[l.kind] + "</span>" +
      '<span class="nm"></span><span class="meta"></span>';
    b.querySelector(".nm").textContent = l.name;
    b.querySelector(".meta").textContent = n + " · " + l.crs;
    b.addEventListener("click", () => {
      $("pickScrim").hidden = true;
      const run = pickThen;
      pickThen = null;
      if (run) run(l);
    });
    box.appendChild(b);
  });

  $("pickScrim").hidden = false;
}

function closePick() {
  $("pickScrim").hidden = true;
  pickThen = null;
}

/* ============================================================
   Tools
   ============================================================ */
const PM_SHAPE = { point: "Marker", line: "Line", polygon: "Polygon" };

function disarmDraw() {
  if (map && map.pm.globalDrawModeEnabled()) map.pm.disableDraw();
  S.tool = null;
}

/**
 * Draw tools no longer mint a layer of their own: each one asks which existing
 * layer of that geometry type receives the shape, then arms Geoman with that
 * layer's colour.
 */
function toggleTool(kind) {
  if (!map) return;
  if (S.tool === kind) { disarmDraw(); syncToolButtons(); return; }

  chooseLayer(kind, null, (lyr) => armDraw(lyr));
}

function armDraw(lyr) {
  if (!map || !lyr) return;
  if (S.editMode) { map.pm.disableGlobalEditMode(); S.editMode = false; }
  if (S.dragMode) { map.pm.disableGlobalDragMode(); S.dragMode = false; }
  if (map.pm.globalDrawModeEnabled()) map.pm.disableDraw();

  S.drawTarget = lyr.id;
  map.pm.setGlobalOptions(globalOpts(lyr.color));
  map.pm.setPathOptions(pathStyle(lyr.kind, lyr.color));
  map.pm.enableDraw(PM_SHAPE[lyr.kind]);
  S.tool = lyr.kind;

  syncToolButtons();
  renderFeatureList();
  setStatus(t().drawingInto + " — " + lyr.name);
}

function syncToolButtons() {
  $("toolPoint").classList.toggle("on", S.tool === "point");
  $("toolLine").classList.toggle("on", S.tool === "line");
  $("toolPoly").classList.toggle("on", S.tool === "polygon");
  $("editBtn").classList.toggle("on", S.editMode);
  $("dragBtn").classList.toggle("on", S.dragMode);
  $("snapBtn").classList.toggle("on", S.snap);
  $("splitBtn").classList.toggle("on", S.autoSplit);
  // the drawing hint only earns its space while a draw tool is armed
  $("mapHint").classList.toggle("show", S.tool !== null);
  syncToPolyBtn();
}

/* ============================================================
   CSV import
   ============================================================ */
function handleFile(file) {
  if (!file) return;
  setStatus(t().parsing);
  Papa.parse(file, {
    header: true,
    skipEmptyLines: "greedy",
    dynamicTyping: false,
    complete: function (res) {
      const headers = (res.meta.fields || []).filter(Boolean);
      const rows = res.data || [];
      if (!headers.length) { setStatus(t().parseFail, true); return; }

      const types = {};
      headers.forEach((h) => {
        let num = 0, seen = 0;
        for (let i = 0; i < Math.min(rows.length, 200); i++) {
          const v = rows[i][h];
          if (v === undefined || v === null || v === "") continue;
          seen++;
          if (!isNaN(parseFloat(v)) && isFinite(v)) num++;
        }
        types[h] = seen && num / seen > .9 ? "number" : "text";
      });

      const guess = (re) => headers.find((h) => re.test(String(h).trim())) || "";
      const xf = guess(/^(x|lon|lng|long|longitude|easting|east|e)$/i);
      const yf = guess(/^(y|lat|latitude|northing|north|n)$/i);

      // add a stable sequential ID column so every row can be labelled and joined
      const taken = headers.map((h) => String(h).toLowerCase());
      let idName = "id";
      if (taken.indexOf("id") >= 0) {
        idName = "kga_id";
        let n = 2;
        while (taken.indexOf(idName) >= 0) idName = "kga_id_" + n++;
      }
      rows.forEach((r, i) => { r[idName] = String(i + 1); });
      headers.unshift(idName);
      types[idName] = "auto id";

      S.fileName = file.name;
      S.headers = headers;
      S.rows = rows;
      S.types = types;
      S.idField = idName;
      S.xField = xf;
      S.yField = yf;

      $("fileChip").hidden = false;
      $("fileName").textContent = file.name;
      $("fileRows").textContent = rows.length + " " + t().rows;

      renderFieldOptions();
      renderTable();
      setStatus(file.name + " — " + rows.length + " " + t().rows);
    },
    error: function () { setStatus(t().parseFail, true); }
  });
}

function clearCsv() {
  S.fileName = "";
  S.headers = [];
  S.rows = [];
  S.types = {};
  S.idField = "";
  S.xField = "";
  S.yField = "";
  S.points = [];
  S.markers = [];
  if (pointsLayer) pointsLayer.clearLayers();
  if (S.selected === CSV_LAYER_ID) S.selected = null;
  setPointsVisible(true);

  $("fileChip").hidden = true;
  $("fileName").textContent = "";
  $("fileRows").textContent = "";
  $("csvInput").value = "";

  renderFieldOptions();
  renderTable();
  renderFeatureList();
  setStatus(t().csvCleared);
}

function renderFieldOptions() {
  ["xField", "yField"].forEach((key) => {
    const sel = $(key);
    sel.innerHTML = '<option value="">—</option>' +
      S.headers.map((h) => '<option value="' + escAttr(h) + '">' + escHtml(h) + "</option>").join("");
    sel.value = S[key] || "";
  });
}

/* ============================================================
   Table pane: the CSV preview, or one drawn kind's attributes
   ============================================================ */

/** GIS-flavoured field types, mapped to the input that edits them. */
const FIELD_TYPES = [
  { id: "text", key: "tText", input: "text" },
  { id: "integer", key: "tInt", input: "number" },
  { id: "double", key: "tDouble", input: "number" },
  { id: "date", key: "tDate", input: "date" },
  { id: "boolean", key: "tBool", input: "checkbox" }
];

const typeDef = (id) => FIELD_TYPES.find((x) => x.id === id) || FIELD_TYPES[0];

/** Point the pane at the CSV rows, or at the layer whose table button was hit. */
function openTable(id) {
  if (id === CSV_LAYER_ID) S.tableView = { kind: "csv", id: null };
  else {
    if (!findLayer(id)) return;
    S.tableView = { kind: "layer", id: id };
  }
  renderFeatureList();
  renderTable();
}

/** Fall back to the CSV view when the open layer is deleted. */
function syncTableView() {
  if (S.tableView.kind !== "layer") return;
  if (!findLayer(S.tableView.id)) S.tableView = { kind: "csv", id: null };
}

function renderTable() {
  syncTableView();
  const d = t();
  const lyr = S.tableView.kind === "layer" ? findLayer(S.tableView.id) : null;

  $("addFieldBtn").hidden = !lyr;
  $("paneTitle").textContent = lyr ? d.attrOf + " · " + lyr.name : d.preview;

  if (lyr) renderAttrTable(lyr);
  else renderCsvTable();
}

/**
 * One layer's attribute table: its features are the rows, its declared fields
 * the columns. That pair is exactly what lands in a single Shapefile or
 * GeoPackage table on export.
 */
function renderAttrTable(lyr) {
  const wrap = $("tableWrap");
  const d = t();
  const fields = lyr.fields;
  const rows = featuresOf(lyr.id);

  if (!fields.length) {
    wrap.innerHTML = '<div class="nofields"><p>' + escHtml(d.noFields) + "</p></div>";
    renderPreviewMeta();
    return;
  }

  const table = document.createElement("table");
  table.className = "attr";

  const thead = document.createElement("thead");
  const htr = document.createElement("tr");
  htr.innerHTML = '<th class="auto"><span class="h">feature</span><span class="ty">name</span></th>';
  fields.forEach((fd) => {
    const th = document.createElement("th");
    const ty = FIELD_TYPES.find((x) => x.id === fd.type) || FIELD_TYPES[0];
    th.innerHTML =
      '<div class="hwrap"><span class="h"></span>' +
      '<button type="button" class="fx"><svg viewBox="0 0 24 24"><path d="M6 6 18 18M18 6 6 18"/></svg></button></div>' +
      '<span class="ty">' + escHtml(d[ty.key]) + "</span>";
    th.querySelector(".h").textContent = fd.name;
    const fx = th.querySelector(".fx");
    fx.title = d.removeField;
    fx.addEventListener("click", () =>
      askDelete(fd.name, d.delHint, () => removeField(lyr, fd.name)));
    htr.appendChild(th);
  });
  thead.appendChild(htr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  rows.forEach((f, i) => {
    const tr = document.createElement("tr");
    if (f.id === S.selected) tr.className = "sel";

    const head = document.createElement("td");
    head.className = "ro";
    head.textContent = f.name || (d[f.kind + "s"] + " " + (i + 1));
    tr.appendChild(head);

    fields.forEach((fd) => {
      const td = document.createElement("td");
      td.appendChild(attrInput(f, fd));
      tr.appendChild(td);
    });

    tr.addEventListener("click", () => selectFeature(f.id, false));
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  wrap.innerHTML = "";
  wrap.appendChild(table);
  const sel = wrap.querySelector("tr.sel");
  if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: "nearest" });
  renderPreviewMeta();
}

/** One editable cell, typed by its field definition. */
function attrInput(f, fd) {
  const ty = typeDef(fd.type);
  const el = document.createElement("input");
  el.className = "acell";
  el.type = ty.input;
  if (fd.type === "integer") el.step = "1";
  if (fd.type === "double") el.step = "any";

  const v = f.attrs[fd.name];
  if (ty.input === "checkbox") el.checked = v === true;
  else el.value = v === undefined || v === null ? "" : String(v);

  const commit = () => {
    if (ty.input === "checkbox") { f.attrs[fd.name] = el.checked; return; }
    const raw = el.value.trim();
    if (raw === "") { delete f.attrs[fd.name]; return; }
    if (fd.type === "integer") {
      const n = parseInt(raw, 10);
      f.attrs[fd.name] = isFinite(n) ? n : raw;
    } else if (fd.type === "double") {
      const n = parseFloat(raw);
      f.attrs[fd.name] = isFinite(n) ? n : raw;
    } else {
      f.attrs[fd.name] = raw;
    }
  };
  el.addEventListener("change", commit);
  el.addEventListener("blur", commit);
  el.addEventListener("click", (e) => e.stopPropagation());
  return el;
}

function addField(lyr, name, type) {
  lyr.fields.push({ name: name, type: type });
  renderTable();
}

function removeField(lyr, name) {
  lyr.fields = lyr.fields.filter((fd) => fd.name !== name);
  featuresOf(lyr.id).forEach((f) => { delete f.attrs[name]; });
  renderTable();
}

function renderCsvTable() {
  const wrap = $("tableWrap");
  if (!S.rows.length) {
    wrap.innerHTML = '<div class="tableempty"><p data-i18n="emptyTable">' + escHtml(t().emptyTable) + "</p></div>";
    renderPreviewMeta();
    return;
  }
  const shown = S.rows.slice(0, MAX_PREVIEW_ROWS);
  let html = "<table><thead><tr>";
  S.headers.forEach((h) => {
    const cls = h === S.xField || h === S.yField ? "xy" : h === S.idField ? "auto" : "";
    html += '<th class="' + cls + '"><span class="h">' + escHtml(h) +
      '</span><span class="ty">' + (S.types[h] || "text") + "</span></th>";
  });
  html += "</tr></thead><tbody>";
  shown.forEach((r, i) => {
    html += '<tr data-row="' + i + '">';
    S.headers.forEach((h) => {
      const v = r[h];
      html += "<td>" + (v === "" || v === undefined || v === null ? "—" : escHtml(String(v))) + "</td>";
    });
    html += "</tr>";
  });
  html += "</tbody></table>";
  wrap.innerHTML = html;

  wrap.querySelectorAll("tbody tr").forEach((tr) => {
    tr.addEventListener("click", () => {
      const i = parseInt(tr.getAttribute("data-row"), 10);
      wrap.querySelectorAll("tbody tr.hit").forEach((x) => x.classList.remove("hit"));
      tr.classList.add("hit");
      const p = S.points.find((pt) => pt.i === i);
      if (p && map) {
        map.setView([p.lat, p.lon], Math.max(map.getZoom(), 15));
        if (S.markers[p.i]) S.markers[p.i].openPopup();
      }
    });
  });
  renderPreviewMeta();
}

function renderPreviewMeta() {
  const d = t();
  if (S.tableView.kind === "layer") {
    const lyr = findLayer(S.tableView.id);
    const n = lyr ? featuresOf(lyr.id).length : 0;
    $("previewMeta").textContent = n + " " + d.features + (lyr ? " · " + lyr.crs : "");
    return;
  }
  $("previewMeta").textContent = S.rows.length
    ? Math.min(MAX_PREVIEW_ROWS, S.rows.length) + " / " + S.rows.length + " " + d.rows
    : "—";
}

/* ============================================================
   CRS handling
   ============================================================ */
const UTM = (z, south) => "+proj=utm +zone=" + z + (south ? " +south" : "") + " +datum=WGS84 +units=m +no_defs";

proj4.defs("EPSG:32647", UTM(47));
proj4.defs("EPSG:32648", UTM(48));
proj4.defs("EPSG:3148", "+proj=utm +zone=48 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs");
proj4.defs("EPSG:3149", "+proj=utm +zone=49 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs");
proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +no_defs");

async function resolveCrs() {
  if (S.crs !== "custom") return S.crs;
  const code = (S.customEpsg || "").replace(/[^0-9]/g, "");
  if (!code) return null;
  const key = "EPSG:" + code;
  if (proj4.defs(key)) return key;

  const n = parseInt(code, 10);
  if (n >= 32601 && n <= 32660) { proj4.defs(key, UTM(n - 32600)); return key; }
  if (n >= 32701 && n <= 32760) { proj4.defs(key, UTM(n - 32700, true)); return key; }

  setStatus(t().resolving);
  try {
    const r = await fetch("https://epsg.io/" + code + ".proj4");
    if (!r.ok) return null;
    const def = (await r.text()).trim();
    if (!def.startsWith("+proj")) return null;
    proj4.defs(key, def);
    return key;
  } catch (err) { return null; }
}

/* ============================================================
   Plot points
   ============================================================ */
async function plotPoints() {
  if (!S.rows.length) { setStatus(t().needCsv, true); return; }
  if (!S.xField || !S.yField) { setStatus(t().needXY, true); return; }

  const from = await resolveCrs();
  if (!from) { setStatus(t().crsFail, true); return; }

  pointsLayer.clearLayers();
  S.points = [];
  S.markers = [];
  setPointsVisible(true); // a re-plot always comes back visible
  let bad = 0;

  S.rows.forEach((r, i) => {
    const x = parseFloat(r[S.xField]);
    const y = parseFloat(r[S.yField]);
    if (!isFinite(x) || !isFinite(y)) { bad++; return; }

    let lon = x, lat = y;
    if (from !== "EPSG:4326") {
      try { const o = proj4(from, "EPSG:4326", [x, y]); lon = o[0]; lat = o[1]; }
      catch (err) { bad++; return; }
    }
    if (!isFinite(lon) || !isFinite(lat) || Math.abs(lat) > 90 || Math.abs(lon) > 180) { bad++; return; }

    const rec = { lon: lon, lat: lat, attrs: r, i: i };
    S.points.push(rec);
    const mk = L.circleMarker([lat, lon], {
      radius: 5, color: "#244C8F", weight: 1.5, fillColor: "#FF6434", fillOpacity: .9
    }).bindPopup(() => popupHtml(r)).addTo(pointsLayer);
    S.markers[i] = mk;
  });

  if (!S.points.length) { setStatus(t().noValid, true); renderFeatureList(); return; }

  map.fitBounds(L.latLngBounds(S.points.map((p) => [p.lat, p.lon])).pad(.15));
  renderFeatureList();
  updateLabels();
  setStatus(t().plotted + " " + S.points.length + " / " + S.rows.length +
    (bad ? " · " + bad + " " + t().invalid : ""));
}

function popupHtml(r) {
  return Object.keys(r).map((k) =>
    "<b>" + escHtml(k) + "</b>: " + escHtml(r[k] === "" || r[k] == null ? "—" : String(r[k]))
  ).join("<br>");
}

/* ============================================================
   Rendering: features + counts + formats
   ============================================================ */
const GLYPH_LINE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19 20 5"/></svg>';
const GLYPH_POLY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3 21 10 17.5 20 6.5 20 3 10z"/></svg>';
const GLYPH_POINT = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>';
const GLYPHS = { point: GLYPH_POINT, polygon: GLYPH_POLY, line: GLYPH_LINE };

/* A luggage-tag glyph: today it toggles id/length/area, later whatever else a
   layer can say about itself. */
const GLYPH_TAG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">' +
  '<path d="M3.5 11.5V3.5h8l9 9-8 8z"/><circle cx="7.6" cy="7.6" r="1.5" fill="currentColor" stroke="none"/></svg>';

const GLYPH_X =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
  '<path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"/></svg>';

/** The tag button that ends every layer row. */
function labelButton(on, onClick) {
  const d = t();
  const b = document.createElement("button");
  b.type = "button";
  b.className = "lblbtn" + (on ? " on" : "");
  b.setAttribute("aria-pressed", on ? "true" : "false");
  b.title = on ? d.hideLabel : d.showLabel;
  b.innerHTML = GLYPH_TAG;
  b.addEventListener("click", (e) => { e.stopPropagation(); onClick(); });
  return b;
}

const GLYPH_TABLE =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">' +
  '<rect x="3.5" y="4.5" width="17" height="15" rx="1.6"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>';

/** Opens this layer's attribute table in the preview pane. */
function tableButton(on, onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "tblbtn" + (on ? " on" : "");
  b.setAttribute("aria-pressed", on ? "true" : "false");
  b.title = t().openTable;
  b.innerHTML = GLYPH_TABLE;
  b.addEventListener("click", (e) => { e.stopPropagation(); onClick(); });
  return b;
}

/**
 * Right-click a row to rename it: the label becomes an input in place. Enter or
 * a click elsewhere commits, Escape puts the old name back.
 */
function startRename(f, row, fallback) {
  const lbl = row.querySelector(".lbl");
  if (!lbl) return;
  const input = document.createElement("input");
  input.type = "text";
  input.className = "rename";
  input.value = f.name || "";
  input.placeholder = fallback;
  lbl.replaceWith(input);
  input.focus();
  input.select();

  // a layer carries a schema, and its name has to stay unique and non-empty;
  // a feature may go nameless and fall back to its ordinal
  const isLayer = !!f.fields;

  let done = false;
  const finish = (save) => {
    if (done) return;
    done = true;
    const v = input.value.trim();
    if (save && !isLayer) f.name = v;
    if (save && isLayer && v && !S.layers.some((l) => l !== f && l.name.toLowerCase() === v.toLowerCase())) {
      f.name = v;
    }
    renderFeatureList();
    renderTable();
  };
  input.addEventListener("click", (e) => e.stopPropagation());
  input.addEventListener("blur", () => finish(true));
  input.addEventListener("keydown", (e) => {
    e.stopPropagation();
    if (e.key === "Enter") finish(true);
    else if (e.key === "Escape") finish(false);
  });
}

/** The × that closes out every layer row. Always asks before it acts. */
function deleteButton(onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "delbtn";
  b.title = t().remove;
  b.innerHTML = GLYPH_X;
  b.addEventListener("click", (e) => { e.stopPropagation(); onClick(); });
  return b;
}

/** Reserved layer id for the CSV plot — it is not one of S.features. */
const CSV_LAYER_ID = "csv";

/**
 * The CSV plot is a layer like any other: one row for the whole marker set,
 * named after the file, with the same visibility toggle as a drawn feature.
 */
function csvLayerItem() {
  const d = t();
  const active = S.selected === CSV_LAYER_ID;

  const item = document.createElement("div");
  item.className = "fitem" + (active ? " on" : "") + (S.pointsVisible ? "" : " hidden-layer");

  const wrap = document.createElement("div");
  wrap.className = "rowwrap";

  const vis = document.createElement("button");
  vis.type = "button";
  vis.className = "vis" + (S.pointsVisible ? " on" : "");
  vis.setAttribute("role", "checkbox");
  vis.setAttribute("aria-checked", S.pointsVisible ? "true" : "false");
  vis.title = S.pointsVisible ? d.hideLayer : d.showLayer;
  vis.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>';
  vis.addEventListener("click", (e) => {
    e.stopPropagation();
    setPointsVisible(!S.pointsVisible);
    renderFeatureList();
    updateLabels();
  });

  const row = document.createElement("button");
  row.type = "button";
  row.className = "row";
  row.innerHTML =
    '<span class="glyph">' + GLYPH_POINT + "</span>" +
    '<span class="lbl"></span><span class="ms mono">' + S.points.length + " " + escHtml(d.ptsShort) + "</span>";
  row.querySelector(".lbl").textContent = S.fileName || d.csvLayer;
  row.addEventListener("click", () => {
    S.selected = active ? null : CSV_LAYER_ID;
    if (S.selected && map) {
      const b = L.latLngBounds(S.points.map((p) => [p.lat, p.lon]));
      if (b.isValid()) map.fitBounds(b.pad(.15));
    }
    renderFeatureList();
  });

  wrap.appendChild(vis);
  wrap.appendChild(row);
  wrap.appendChild(labelButton(S.showIds, togglePointLabels));
  wrap.appendChild(tableButton(S.tableView.kind === "csv", () => openTable(CSV_LAYER_ID)));
  wrap.appendChild(deleteButton(() =>
    askDelete(S.fileName || d.csvLayer, d.delCsvHint, clearPlottedPoints)));
  item.appendChild(wrap);

  return item;
}

const GLYPH_CARET =
  '<svg viewBox="0 0 24 24"><path d="M9 5.5 16.5 12 9 18.5"/></svg>';

/** The fold arrow in front of a layer row. */
function caretButton(lyr, count) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "caret" + (lyr.expanded && count ? " open" : "") + (count ? "" : " empty");
  b.innerHTML = GLYPH_CARET;
  b.setAttribute("aria-expanded", lyr.expanded && count ? "true" : "false");
  b.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!count) return;
    lyr.expanded = !lyr.expanded;
    renderFeatureList();
  });
  return b;
}

/** The shared show/hide checkbox, used by both layer and feature rows. */
function visButton(on, extra, onClick) {
  const d = t();
  const b = document.createElement("button");
  b.type = "button";
  b.className = "vis" + (on ? " on" : "") + (extra ? " " + extra : "");
  b.setAttribute("role", "checkbox");
  b.setAttribute("aria-checked", on ? "true" : "false");
  b.title = on ? d.hideLayer : d.showLayer;
  b.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>';
  b.addEventListener("click", (e) => { e.stopPropagation(); onClick(); });
  return b;
}

/** One feature inside a layer: the geometry the user actually drew. */
function featureRow(f, fallback) {
  const d = t();
  const wrap = document.createElement("div");
  wrap.className = "rowwrap" + (S.selected === f.id ? " on" : "");

  const row = document.createElement("button");
  row.type = "button";
  row.className = "row";
  row.innerHTML =
    '<span class="glyph tint"></span><span class="lbl"></span>' +
    '<span class="ms mono">' + escHtml(f.measure || "") + "</span>";
  const lyr = layerOf(f);
  const glyph = row.querySelector(".glyph");
  glyph.innerHTML = GLYPHS[f.kind];
  if (lyr) glyph.style.color = lyr.color;
  row.querySelector(".lbl").textContent = f.name || fallback;
  row.title = d.renameHint;
  row.addEventListener("click", () => selectFeature(f.id, true));
  row.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    startRename(f, row, fallback);
  });

  wrap.appendChild(visButton(f.visible, "", () => {
    setFeatureVisible(f, !f.visible);
    renderFeatureList();
    updateLabels();
  }));
  wrap.appendChild(row);
  wrap.appendChild(labelButton(f.showLabel, () => toggleFeatureLabel(f)));
  wrap.appendChild(deleteButton(() =>
    askDelete(f.name || fallback, d.delHint, () => removeFeature(f.id))));
  return wrap;
}

/**
 * A layer row and, folded under it, the features drawn into it. The layer owns
 * visibility, the attribute table and deletion; a feature row keeps its own
 * label toggle and delete so single shapes are still reachable.
 */
function layerItem(lyr) {
  const d = t();
  const kids = featuresOf(lyr.id);
  const kindLabel = { point: d.points, line: d.lines, polygon: d.polygons };
  const armed = S.drawTarget === lyr.id && S.tool !== null;

  const item = document.createElement("div");
  item.className = "fitem" + (armed ? " on" : "") + (lyr.visible ? "" : " hidden-layer");

  const wrap = document.createElement("div");
  wrap.className = "rowwrap";

  const row = document.createElement("button");
  row.type = "button";
  row.className = "row";
  row.innerHTML =
    '<span class="glyph tint"></span><span class="lbl"></span>' +
    '<span class="crs mono"></span>' +
    '<span class="ms mono">' + kids.length + "</span>";
  const glyph = row.querySelector(".glyph");
  glyph.innerHTML = GLYPHS[lyr.kind];
  glyph.style.color = lyr.color;
  row.querySelector(".lbl").textContent = lyr.name;
  row.querySelector(".crs").textContent = lyr.crs.replace("EPSG:", "");
  row.title = d.renameHint;
  // clicking the layer body folds it; renaming stays on the context menu
  row.addEventListener("click", () => {
    if (kids.length) { lyr.expanded = !lyr.expanded; renderFeatureList(); }
  });
  row.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    startRename(lyr, row, lyr.name);
  });

  wrap.appendChild(caretButton(lyr, kids.length));
  wrap.appendChild(visButton(lyr.visible, "lyr", () => {
    setLayerVisible(lyr, !lyr.visible);
    renderFeatureList();
    updateLabels();
  }));
  wrap.appendChild(row);
  wrap.appendChild(tableButton(S.tableView.id === lyr.id, () => openTable(lyr.id)));
  wrap.appendChild(deleteButton(() =>
    askDelete(lyr.name, d.delLayerHint, () => removeLayer(lyr.id))));
  item.appendChild(wrap);

  if (lyr.expanded && kids.length) {
    const box = document.createElement("div");
    box.className = "kids";
    kids.forEach((f, i) => box.appendChild(featureRow(f, kindLabel[f.kind] + " " + (i + 1))));
    item.appendChild(box);
  }

  return item;
}

function renderFeatureList() {
  const box = $("featureList");
  box.innerHTML = "";
  $("featureEmpty").hidden = S.layers.length > 0 || S.points.length > 0;

  if (S.points.length) box.appendChild(csvLayerItem());
  S.layers.forEach((lyr) => box.appendChild(layerItem(lyr)));

  syncToPolyBtn();
}

function renderFormatChips() {
  const box = $("fmtChips");
  box.innerHTML = "";
  FORMATS.forEach((f) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (S.fmt[f.id] ? " on" : "");
    b.textContent = f.label;
    b.addEventListener("click", () => {
      S.fmt[f.id] = !S.fmt[f.id];
      b.classList.toggle("on", S.fmt[f.id]);
    });
    box.appendChild(b);
  });
}

/* ============================================================
   GeoJSON assembly
   ============================================================ */
/**
 * Every field declared for the kind, so all features of a kind export with the
 * same column set — a blank cell has to travel as an empty value, not a gap.
 */
function attrsFor(f, lyr) {
  const out = {};
  (lyr ? lyr.fields : []).forEach((fd) => {
    const v = f.attrs[fd.name];
    out[fd.name] = v === undefined || v === null
      ? (fd.type === "boolean" ? false : "")
      : v;
  });
  return out;
}

function layerGeoJSON(lyr) {
  const feats = featuresOf(lyr.id).map((f, i) => {
    const layer = layerIndex[f.id];
    if (!layer) return null;
    const gj = layer.toGeoJSON();
    gj.properties = Object.assign({
      fid: f.id,
      name: f.name || (lyr.kind + " " + (i + 1)),
      layer: lyr.name,
      crs: lyr.crs,
      measure: f.measure || ""
    }, attrsFor(f, lyr));
    return gj;
  }).filter(Boolean);
  return { type: "FeatureCollection", features: feats };
}

function pointsGeoJSON() {
  return {
    type: "FeatureCollection",
    features: S.points.map((p, i) => ({
      type: "Feature",
      properties: Object.assign({ fid: "p" + (i + 1) }, p.attrs),
      geometry: { type: "Point", coordinates: [p.lon, p.lat] }
    }))
  };
}

const GEOM_WKT = { point: "POINT", line: "LINESTRING", polygon: "POLYGON" };

/** A filename/table-safe version of a layer name, kept unique across the set. */
function safeName(name, used) {
  let s = String(name).trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  if (!s) s = "layer";
  if (used[s] === undefined) { used[s] = 1; return s; }
  return s + "_" + (++used[s]);
}

/** One entry per exportable table: the CSV plot, then every drawn layer. */
function layerSet() {
  const out = [];
  const used = {};
  if (S.points.length) out.push({ name: safeName("points", used), gj: pointsGeoJSON(), geom: "POINT" });
  S.layers.forEach((lyr) => {
    const gj = layerGeoJSON(lyr);
    if (gj.features.length) out.push({ name: safeName(lyr.name, used), gj: gj, geom: GEOM_WKT[lyr.kind] });
  });
  return out;
}

/* ============================================================
   Writers: WKT / CSV / KML
   ============================================================ */
function toWkt(g) {
  const c = (a) => a[0] + " " + a[1];
  if (g.type === "Point") return "POINT (" + c(g.coordinates) + ")";
  if (g.type === "LineString") return "LINESTRING (" + g.coordinates.map(c).join(", ") + ")";
  if (g.type === "Polygon") return "POLYGON (" + g.coordinates.map((r) => "(" + r.map(c).join(", ") + ")").join(", ") + ")";
  if (g.type === "MultiLineString") return "MULTILINESTRING (" + g.coordinates.map((l) => "(" + l.map(c).join(", ") + ")").join(", ") + ")";
  if (g.type === "MultiPolygon") return "MULTIPOLYGON (" + g.coordinates.map((p) => "(" + p.map((r) => "(" + r.map(c).join(", ") + ")").join(", ") + ")").join(", ") + ")";
  return "";
}

function propKeys(gj) {
  const keys = [];
  gj.features.forEach((f) => Object.keys(f.properties || {}).forEach((k) => {
    if (keys.indexOf(k) < 0) keys.push(k);
  }));
  return keys;
}

function toCsv(gj) {
  const keys = propKeys(gj);
  const esc = (v) => '"' + String(v === undefined || v === null ? "" : v).replace(/"/g, '""') + '"';
  const head = keys.concat(["wkt"]).map(esc).join(",");
  const body = gj.features.map((f) =>
    keys.map((k) => esc(f.properties[k])).concat([esc(toWkt(f.geometry))]).join(","));
  return "﻿" + [head].concat(body).join("\r\n");
}

function toKml(gj, name) {
  const esc = (s) => String(s === undefined || s === null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const cs = (a) => a.map((p) => p[0] + "," + p[1] + ",0").join(" ");
  const geom = (g) => {
    if (g.type === "Point") return "<Point><coordinates>" + g.coordinates[0] + "," + g.coordinates[1] + ",0</coordinates></Point>";
    if (g.type === "LineString") return "<LineString><tessellate>1</tessellate><coordinates>" + cs(g.coordinates) + "</coordinates></LineString>";
    if (g.type === "Polygon") {
      let s = "<Polygon><outerBoundaryIs><LinearRing><coordinates>" + cs(g.coordinates[0]) + "</coordinates></LinearRing></outerBoundaryIs>";
      for (let i = 1; i < g.coordinates.length; i++) {
        s += "<innerBoundaryIs><LinearRing><coordinates>" + cs(g.coordinates[i]) + "</coordinates></LinearRing></innerBoundaryIs>";
      }
      return s + "</Polygon>";
    }
    return "";
  };
  const marks = gj.features.map((f) => {
    const p = f.properties || {};
    const data = Object.keys(p).map((k) =>
      '<Data name="' + esc(k) + '"><value>' + esc(p[k]) + "</value></Data>").join("");
    return "<Placemark><name>" + esc(p.name || p.fid || "") + "</name><ExtendedData>" +
      data + "</ExtendedData>" + geom(f.geometry) + "</Placemark>";
  }).join("\n");
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>' + esc(name) + "</name>\n" +
    marks + "\n</Document></kml>";
}

/* ============================================================
   Writer: Esri XML Workspace Document (File GDB interchange)

   A .gdb is a proprietary binary directory that cannot be written from a
   browser. ArcGIS reads this XML through
   Catalog > right-click a File Geodatabase > Import > XML Workspace Document,
   which materialises the feature classes inside the .gdb.
   ============================================================ */
const ESRI_WKT_4326 =
  'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],' +
  'PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],AUTHORITY["EPSG",4326]]';

const ESRI_SHAPE = { POINT: "esriGeometryPoint", LINESTRING: "esriGeometryPolyline", POLYGON: "esriGeometryPolygon" };

function esriSpatialRef() {
  return "<SpatialReference xsi:type='esri:GeographicCoordinateSystem'>" +
    "<WKT>" + escXml(ESRI_WKT_4326) + "</WKT>" +
    "<XOrigin>-400</XOrigin><YOrigin>-400</YOrigin><XYScale>11258999068426.238</XYScale>" +
    "<ZOrigin>-100000</ZOrigin><ZScale>10000</ZScale>" +
    "<MOrigin>-100000</MOrigin><MScale>10000</MScale>" +
    "<XYTolerance>8.983152841195215e-09</XYTolerance><ZTolerance>0.001</ZTolerance><MTolerance>0.001</MTolerance>" +
    "<HighPrecision>true</HighPrecision><LeftLongitude>-180</LeftLongitude>" +
    "<WKID>4326</WKID><LatestWKID>4326</LatestWKID>" +
    "</SpatialReference>";
}

function escXml(s) {
  return String(s === undefined || s === null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    // strip control characters XML 1.0 cannot carry
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

/** Field names must be <= 64 chars, alphanumeric/underscore, not starting with a digit. */
function gdbFieldName(k, used) {
  let n = String(k).replace(/[^A-Za-z0-9_]/g, "_").slice(0, 60);
  if (!n || /^[0-9]/.test(n)) n = "F_" + n;
  let base = n, i = 2;
  while (used.indexOf(n.toLowerCase()) >= 0) n = base.slice(0, 57) + "_" + i++;
  used.push(n.toLowerCase());
  return n;
}

function esriFieldArray(fields) {
  let s = "<Fields xsi:type='esri:Fields'><FieldArray xsi:type='esri:ArrayOfField'>";
  fields.forEach((f) => {
    s += "<Field xsi:type='esri:Field'>" +
      "<Name>" + escXml(f.name) + "</Name>" +
      "<Type>" + f.type + "</Type>" +
      "<IsNullable>" + (f.name === "OBJECTID" ? "false" : "true") + "</IsNullable>" +
      "<Length>" + f.length + "</Length>" +
      "<Precision>" + (f.type === "esriFieldTypeOID" ? 10 : 0) + "</Precision>" +
      "<Scale>0</Scale>" +
      "<Required>" + (f.name === "OBJECTID" || f.name === "Shape" ? "true" : "false") + "</Required>" +
      "<Editable>" + (f.name === "OBJECTID" ? "false" : "true") + "</Editable>" +
      "<AliasName>" + escXml(f.name) + "</AliasName>" +
      "<ModelName>" + escXml(f.name) + "</ModelName>" +
      (f.type === "esriFieldTypeGeometry"
        ? "<GeometryDef xsi:type='esri:GeometryDef'>" +
          "<AvgNumPoints>0</AvgNumPoints><GeometryType>" + f.shape + "</GeometryType>" +
          "<HasM>false</HasM><HasZ>false</HasZ>" + esriSpatialRef() + "</GeometryDef>"
        : "") +
      "</Field>";
  });
  return s + "</FieldArray></Fields>";
}

function esriEnvelope(box, tag) {
  return "<" + tag + " xsi:type='esri:EnvelopeN'>" +
    "<XMin>" + box[0] + "</XMin><YMin>" + box[1] + "</YMin>" +
    "<XMax>" + box[2] + "</XMax><YMax>" + box[3] + "</YMax>" +
    esriSpatialRef() + "</" + tag + ">";
}

function esriPointArray(coords) {
  let s = "<PointArray xsi:type='esri:ArrayOfPoint'>";
  coords.forEach((c) => {
    s += "<Point xsi:type='esri:PointN'><X>" + c[0] + "</X><Y>" + c[1] + "</Y>" + esriSpatialRef() + "</Point>";
  });
  return s + "</PointArray>";
}

function esriGeometry(g) {
  const box = geomBbox(g);
  if (g.type === "Point") {
    return "<Value xsi:type='esri:PointN'><X>" + g.coordinates[0] + "</X><Y>" + g.coordinates[1] + "</Y>" +
      esriSpatialRef() + "</Value>";
  }
  if (g.type === "LineString") {
    return "<Value xsi:type='esri:PolylineN'><HasID>false</HasID><HasZ>false</HasZ><HasM>false</HasM>" +
      esriEnvelope(box, "Extent") +
      "<PathArray xsi:type='esri:ArrayOfPath'><Path xsi:type='esri:Path'>" +
      esriPointArray(g.coordinates) + "</Path></PathArray>" +
      esriSpatialRef() + "</Value>";
  }
  if (g.type === "Polygon") {
    let rings = "";
    g.coordinates.forEach((r) => {
      rings += "<Ring xsi:type='esri:Ring'>" + esriPointArray(r) + "</Ring>";
    });
    return "<Value xsi:type='esri:PolygonN'><HasID>false</HasID><HasZ>false</HasZ><HasM>false</HasM>" +
      esriEnvelope(box, "Extent") +
      "<RingArray xsi:type='esri:ArrayOfRing'>" + rings + "</RingArray>" +
      esriSpatialRef() + "</Value>";
  }
  return "<Value xsi:nil='true'/>";
}

function buildEsriWorkspaceXml(layers) {
  let defs = "";
  let data = "";

  layers.forEach((lyr, li) => {
    const shape = ESRI_SHAPE[lyr.geom];
    const used = ["objectid", "shape"];
    const attrs = propKeys(lyr.gj).map((k) => ({ key: k, name: gdbFieldName(k, used) }));

    const fields = [{ name: "OBJECTID", type: "esriFieldTypeOID", length: 4 }]
      .concat([{ name: "Shape", type: "esriFieldTypeGeometry", length: 0, shape: shape }])
      .concat(attrs.map((a) => ({ name: a.name, type: "esriFieldTypeString", length: 255 })));

    let box = [Infinity, Infinity, -Infinity, -Infinity];
    lyr.gj.features.forEach((f) => { box = geomBbox(f.geometry, box); });

    defs +=
      "<DataElement xsi:type='esri:DEFeatureClass'>" +
      "<CatalogPath>/FC=" + escXml(lyr.name) + "</CatalogPath>" +
      "<Name>" + escXml(lyr.name) + "</Name>" +
      "<MetadataRetrieved>false</MetadataRetrieved>" +
      "<DatasetType>esriDTFeatureClass</DatasetType>" +
      "<DSID>" + (li + 1) + "</DSID>" +
      "<Versioned>false</Versioned><CanVersion>false</CanVersion>" +
      "<ConfigurationKeyword></ConfigurationKeyword>" +
      "<HasOID>true</HasOID><OIDFieldName>OBJECTID</OIDFieldName>" +
      esriFieldArray(fields) +
      "<Indexes xsi:type='esri:Indexes'><IndexArray xsi:type='esri:ArrayOfIndex'/></Indexes>" +
      "<CLSID>{52353152-891A-11D0-BEC6-00805F7C4268}</CLSID><EXTCLSID></EXTCLSID>" +
      "<RelationshipClassNames xsi:type='esri:Names'/>" +
      "<AliasName>" + escXml(lyr.name) + "</AliasName><ModelName></ModelName>" +
      "<HasGlobalID>false</HasGlobalID><GlobalIDFieldName></GlobalIDFieldName>" +
      "<RasterFieldName></RasterFieldName>" +
      "<ExtensionProperties xsi:type='esri:PropertySet'><PropertyArray xsi:type='esri:ArrayOfPropertySetProperty'/></ExtensionProperties>" +
      "<ControllerMemberships xsi:type='esri:ArrayOfControllerMembership'/>" +
      "<EditorTrackingEnabled>false</EditorTrackingEnabled>" +
      "<CreatorFieldName></CreatorFieldName><CreatedAtFieldName></CreatedAtFieldName>" +
      "<EditorFieldName></EditorFieldName><EditedAtFieldName></EditedAtFieldName>" +
      "<IsTimeInUTC>true</IsTimeInUTC>" +
      "<FeatureType>esriFTSimple</FeatureType>" +
      "<ShapeType>" + shape + "</ShapeType>" +
      "<ShapeFieldName>Shape</ShapeFieldName>" +
      "<HasM>false</HasM><HasZ>false</HasZ><HasSpatialIndex>true</HasSpatialIndex>" +
      "<AreaFieldName></AreaFieldName><LengthFieldName></LengthFieldName>" +
      esriEnvelope(isFinite(box[0]) ? box : [0, 0, 0, 0], "Extent") +
      esriSpatialRef() +
      "</DataElement>";

    let records = "";
    lyr.gj.features.forEach((f, i) => {
      let vals = "<Value xsi:type='xs:int'>" + (i + 1) + "</Value>" + esriGeometry(f.geometry);
      attrs.forEach((a) => {
        const v = (f.properties || {})[a.key];
        vals += v === undefined || v === null || v === ""
          ? "<Value xsi:nil='true'/>"
          : "<Value xsi:type='xs:string'>" + escXml(v) + "</Value>";
      });
      records += "<Record xsi:type='esri:Record'><Values xsi:type='esri:ArrayOfValue'>" + vals + "</Values></Record>";
    });

    data +=
      "<DatasetData xsi:type='esri:TableData'>" +
      "<DatasetName>" + escXml(lyr.name) + "</DatasetName>" +
      "<DatasetType>esriDTFeatureClass</DatasetType>" +
      "<Data xsi:type='esri:RecordSet'>" +
      esriFieldArray(fields) +
      "<Records xsi:type='esri:ArrayOfRecord'>" + records + "</Records>" +
      "</Data></DatasetData>";
  });

  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    "<esri:Workspace xmlns:esri='http://www.esri.com/schemas/ArcGIS/10.1' " +
    "xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' " +
    "xmlns:xs='http://www.w3.org/2001/XMLSchema'>" +
    "<WorkspaceDefinition xsi:type='esri:WorkspaceDefinition'>" +
    "<WorkspaceType>esriLocalDatabaseWorkspace</WorkspaceType><Version></Version>" +
    "<Domains xsi:type='esri:ArrayOfDomain'/>" +
    "<DatasetDefinitions xsi:type='esri:ArrayOfDataElement'>" + defs + "</DatasetDefinitions>" +
    "</WorkspaceDefinition>" +
    "<WorkspaceData xsi:type='esri:WorkspaceData'>" + data + "</WorkspaceData>" +
    "</esri:Workspace>";
}

/* ============================================================
   Writer: WKB + GeoPackage
   ============================================================ */
function ByteWriter() {
  this.buf = new Uint8Array(4096);
  this.dv = new DataView(this.buf.buffer);
  this.p = 0;
}
ByteWriter.prototype.ensure = function (n) {
  if (this.p + n <= this.buf.length) return;
  let len = this.buf.length;
  while (len < this.p + n) len *= 2;
  const nb = new Uint8Array(len);
  nb.set(this.buf);
  this.buf = nb;
  this.dv = new DataView(nb.buffer);
};
ByteWriter.prototype.u8 = function (v) { this.ensure(1); this.dv.setUint8(this.p, v); this.p += 1; };
ByteWriter.prototype.u32 = function (v) { this.ensure(4); this.dv.setUint32(this.p, v, true); this.p += 4; };
ByteWriter.prototype.i32 = function (v) { this.ensure(4); this.dv.setInt32(this.p, v, true); this.p += 4; };
ByteWriter.prototype.f64 = function (v) { this.ensure(8); this.dv.setFloat64(this.p, v, true); this.p += 8; };
ByteWriter.prototype.bytes = function (u8) { this.ensure(u8.length); this.buf.set(u8, this.p); this.p += u8.length; };
ByteWriter.prototype.done = function () { return this.buf.slice(0, this.p); };

const WKB_TYPE = { Point: 1, LineString: 2, Polygon: 3, MultiPoint: 4, MultiLineString: 5, MultiPolygon: 6 };

function writeWkbGeom(w, g) {
  w.u8(1); // little endian
  w.u32(WKB_TYPE[g.type] || 0);
  const ring = (r) => { w.u32(r.length); r.forEach((c) => { w.f64(c[0]); w.f64(c[1]); }); };

  if (g.type === "Point") { w.f64(g.coordinates[0]); w.f64(g.coordinates[1]); return; }
  if (g.type === "LineString") { ring(g.coordinates); return; }
  if (g.type === "Polygon") { w.u32(g.coordinates.length); g.coordinates.forEach(ring); return; }
  if (g.type === "MultiPoint" || g.type === "MultiLineString" || g.type === "MultiPolygon") {
    const single = { MultiPoint: "Point", MultiLineString: "LineString", MultiPolygon: "Polygon" }[g.type];
    w.u32(g.coordinates.length);
    g.coordinates.forEach((c) => writeWkbGeom(w, { type: single, coordinates: c }));
  }
}

function geomBbox(g, box) {
  box = box || [Infinity, Infinity, -Infinity, -Infinity];
  const walk = (a) => {
    if (typeof a[0] === "number") {
      if (a[0] < box[0]) box[0] = a[0];
      if (a[1] < box[1]) box[1] = a[1];
      if (a[0] > box[2]) box[2] = a[0];
      if (a[1] > box[3]) box[3] = a[1];
    } else a.forEach(walk);
  };
  walk(g.coordinates);
  return box;
}

function gpkgBlob(g, srsId) {
  const box = geomBbox(g);
  const w = new ByteWriter();
  w.u8(0x47); w.u8(0x50);          // magic "GP"
  w.u8(0);                          // version 0
  w.u8(0x01 | (1 << 1));            // little endian + envelope [minx,maxx,miny,maxy]
  w.i32(srsId);
  w.f64(box[0]); w.f64(box[2]); w.f64(box[1]); w.f64(box[3]);
  writeWkbGeom(w, g);
  return w.done();
}

const WGS84_WKT = 'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4326"]]';

async function buildGeoPackage(layers) {
  const SQL = await initSqlJs({
    locateFile: (f) => "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/" + f
  });
  const db = new SQL.Database();

  db.run("PRAGMA application_id = 1196444487;");
  db.run("PRAGMA user_version = 10200;");

  db.run(
    "CREATE TABLE gpkg_spatial_ref_sys (" +
    "srs_name TEXT NOT NULL, srs_id INTEGER NOT NULL PRIMARY KEY, organization TEXT NOT NULL," +
    "organization_coordsys_id INTEGER NOT NULL, definition TEXT NOT NULL, description TEXT);"
  );
  const srs = db.prepare("INSERT INTO gpkg_spatial_ref_sys VALUES (?,?,?,?,?,?);");
  srs.run(["Undefined cartesian SRS", -1, "NONE", -1, "undefined", "undefined cartesian coordinate reference system"]);
  srs.run(["Undefined geographic SRS", 0, "NONE", 0, "undefined", "undefined geographic coordinate reference system"]);
  srs.run(["WGS 84 geodetic", 4326, "EPSG", 4326, WGS84_WKT, "longitude/latitude coordinates in decimal degrees on the WGS 84 spheroid"]);
  srs.free();

  db.run(
    "CREATE TABLE gpkg_contents (" +
    "table_name TEXT NOT NULL PRIMARY KEY, data_type TEXT NOT NULL, identifier TEXT UNIQUE," +
    "description TEXT DEFAULT '', last_change DATETIME NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))," +
    "min_x DOUBLE, min_y DOUBLE, max_x DOUBLE, max_y DOUBLE, srs_id INTEGER," +
    "CONSTRAINT fk_gc_r_srs_id FOREIGN KEY (srs_id) REFERENCES gpkg_spatial_ref_sys(srs_id));"
  );
  db.run(
    "CREATE TABLE gpkg_geometry_columns (" +
    "table_name TEXT NOT NULL, column_name TEXT NOT NULL, geometry_type_name TEXT NOT NULL," +
    "srs_id INTEGER NOT NULL, z TINYINT NOT NULL, m TINYINT NOT NULL," +
    "CONSTRAINT pk_geom_cols PRIMARY KEY (table_name, column_name));"
  );

  const q = (s) => '"' + String(s).replace(/"/g, "") + '"';

  layers.forEach((lyr) => {
    const keys = propKeys(lyr.gj).filter((k) => k.toLowerCase() !== "fid" && k.toLowerCase() !== "geom");
    const cols = keys.map((k) => q(k) + " TEXT");
    db.run("CREATE TABLE " + q(lyr.name) + " (fid INTEGER PRIMARY KEY AUTOINCREMENT, geom " +
      lyr.geom + (cols.length ? ", " + cols.join(", ") : "") + ");");

    const insert = db.prepare(
      "INSERT INTO " + q(lyr.name) + " (geom" + (keys.length ? ", " + keys.map(q).join(", ") : "") +
      ") VALUES (" + ["?"].concat(keys.map(() => "?")).join(", ") + ");"
    );

    let box = [Infinity, Infinity, -Infinity, -Infinity];
    lyr.gj.features.forEach((f) => {
      box = geomBbox(f.geometry, box);
      const vals = [gpkgBlob(f.geometry, 4326)];
      keys.forEach((k) => {
        const v = (f.properties || {})[k];
        vals.push(v === undefined || v === null ? null : String(v));
      });
      insert.run(vals);
    });
    insert.free();

    db.run("INSERT INTO gpkg_contents (table_name, data_type, identifier, description, min_x, min_y, max_x, max_y, srs_id) VALUES (?,?,?,?,?,?,?,?,?);",
      [lyr.name, "features", lyr.name, "Created with KGA Data Creation", box[0], box[1], box[2], box[3], 4326]);
    db.run("INSERT INTO gpkg_geometry_columns VALUES (?,?,?,?,?,?);",
      [lyr.name, "geom", lyr.geom, 4326, 0, 0]);
  });

  const bytes = db.export();
  db.close();
  return bytes;
}

/* ============================================================
   Download helpers
   ============================================================ */
function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 2000);
}

async function shpZipBlob(gj, name) {
  if (!window.shpwrite) return null;
  try {
    const out = await shpwrite.zip(gj, {
      folder: name,
      outputType: "blob",
      compression: "DEFLATE",
      types: { point: name, polyline: name, polygon: name }
    });
    return out instanceof Blob ? out : new Blob([out], { type: "application/zip" });
  } catch (err) {
    console.error(err);
    return null;
  }
}

/* ============================================================
   Export
   ============================================================ */
async function runExport() {
  const layers = layerSet();
  if (!layers.length) { setStatus(t().noData, true); return; }
  const picked = FORMATS.filter((f) => S.fmt[f.id]).map((f) => f.id);
  if (!picked.length) { setStatus(t().noFormat, true); return; }

  $("exportBtn").disabled = true;
  try {
    const files = [];
    for (const lyr of layers) {
      if (S.fmt.csv) {
        files.push({ name: lyr.name + ".csv", blob: new Blob([toCsv(lyr.gj)], { type: "text/csv;charset=utf-8" }) });
      }
      if (S.fmt.geojson) {
        files.push({ name: lyr.name + ".geojson", blob: new Blob([JSON.stringify(lyr.gj, null, 2)], { type: "application/geo+json" }) });
      }
      if (S.fmt.kml) {
        files.push({ name: lyr.name + ".kml", blob: new Blob([toKml(lyr.gj, lyr.name)], { type: "application/vnd.google-earth.kml+xml" }) });
      }
      if (S.fmt.shp) {
        const z = await shpZipBlob(lyr.gj, lyr.name);
        if (z) files.push({ name: lyr.name + "_shp.zip", blob: z });
        else setStatus(t().shpFail, true);
      }
    }

    // one workspace document carries every feature class
    if (S.fmt.gdb) {
      try {
        const xml = buildEsriWorkspaceXml(layers);
        files.push({
          name: "kga_data_creation_gdb.xml",
          blob: new Blob([xml], { type: "application/xml;charset=utf-8" })
        });
      } catch (err) {
        console.error(err);
        setStatus(t().gdbFail, true);
      }
    }

    if (!files.length) { setStatus(t().noData, true); return; }

    if (S.mode === "zip" && window.JSZip) {
      const zip = new JSZip();
      files.forEach((f) => zip.file(f.name, f.blob));
      const blob = await zip.generateAsync({ type: "blob" });
      download(blob, "kga_data_creation.zip");
    } else {
      files.forEach((f, i) => setTimeout(() => download(f.blob, f.name), i * 400));
    }
    setStatus(t().exported + " — " + files.length + " " + t().files);
  } catch (err) {
    console.error(err);
    setStatus(String(err && err.message ? err.message : err), true);
  } finally {
    $("exportBtn").disabled = false;
  }
}

async function exportGpkg() {
  const layers = layerSet();
  if (!layers.length) { setStatus(t().noData, true); return; }
  if (!window.initSqlJs) { setStatus("sql.js not loaded.", true); return; }

  $("gpkgBtn").disabled = true;
  setStatus(t().building);
  try {
    const bytes = await buildGeoPackage(layers);
    download(new Blob([bytes], { type: "application/geopackage+sqlite3" }), "kga_data_creation.gpkg");
    setStatus(t().exported + " — kga_data_creation.gpkg (" + layers.length + " " + t().tables + ")");
  } catch (err) {
    console.error(err);
    setStatus(t().gpkgFail + " " + (err && err.message ? err.message : ""), true);
  } finally {
    $("gpkgBtn").disabled = false;
  }
}

/* ============================================================
   Escaping
   ============================================================ */
function escHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
function escAttr(s) { return escHtml(s); }

/* ============================================================
   Wiring
   ============================================================ */
function wire() {
  // language
  $("langKh").addEventListener("click", () => { S.lang = "kh"; applyLang(); });
  $("langEn").addEventListener("click", () => { S.lang = "en"; applyLang(); });

  // theme
  $("themeBtn").addEventListener("click", () => {
    applyTheme(!document.documentElement.classList.contains("dark"));
  });

  // mobile drawer
  $("menuBtn").addEventListener("click", () => document.body.classList.toggle("nav-open"));
  $("scrim").addEventListener("click", () => document.body.classList.remove("nav-open"));

  // warn before losing unsaved work
  window.addEventListener("beforeunload", (e) => {
    if (!hasWork()) return;
    e.preventDefault();
    e.returnValue = "";
  });
  document.querySelector(".topbar .back").addEventListener("click", (e) => {
    if (hasWork() && !window.confirm(t().leaveWarn)) e.preventDefault();
  });

  // file input + drag & drop
  $("csvInput").addEventListener("change", (e) => {
    handleFile(e.target.files && e.target.files[0]);
    e.target.value = "";
  });
  $("clearCsv").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearCsv();
  });
  const drop = $("drop");
  ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => {
    e.preventDefault(); drop.classList.add("over");
  }));
  ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, (e) => {
    e.preventDefault(); drop.classList.remove("over");
  }));
  drop.addEventListener("drop", (e) => {
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) handleFile(f);
  });

  // fields + CRS
  $("xField").addEventListener("change", (e) => { S.xField = e.target.value; renderTable(); });
  $("yField").addEventListener("change", (e) => { S.yField = e.target.value; renderTable(); });
  $("crs").addEventListener("change", (e) => {
    S.crs = e.target.value;
    $("customEpsg").hidden = S.crs !== "custom";
  });
  $("customEpsg").addEventListener("input", (e) => { S.customEpsg = e.target.value; });
  $("plotBtn").addEventListener("click", plotPoints);

  // delete confirmation
  $("confirmNo").addEventListener("click", () => closeConfirm(false));
  $("confirmYes").addEventListener("click", () => closeConfirm(true));
  $("confirmScrim").addEventListener("mousedown", (e) => {
    if (e.target === $("confirmScrim")) closeConfirm(false);
  });

  // attribute fields
  $("addFieldBtn").addEventListener("click", openFieldDialog);
  $("fieldNo").addEventListener("click", () => { $("fieldScrim").hidden = true; });
  $("fieldYes").addEventListener("click", submitField);
  $("fieldScrim").addEventListener("mousedown", (e) => {
    if (e.target === $("fieldScrim")) $("fieldScrim").hidden = true;
  });
  $("fieldName").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); submitField(); }
  });

  // new layer
  $("newLayerBtn").addEventListener("click", () => openLayerDialog(layerDialogKind, null));
  $("layerNo").addEventListener("click", () => { $("layerScrim").hidden = true; layerDialogThen = null; });
  $("layerYes").addEventListener("click", submitLayer);
  $("layerScrim").addEventListener("mousedown", (e) => {
    if (e.target === $("layerScrim")) { $("layerScrim").hidden = true; layerDialogThen = null; }
  });
  $("layerCrs").addEventListener("change", (e) => {
    $("layerEpsg").hidden = e.target.value !== "custom";
    if (e.target.value === "custom") $("layerEpsg").focus();
  });
  $("layerName").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); submitLayer(); }
  });
  $("layerEpsg").addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); submitLayer(); }
  });

  // layer picker
  $("pickNo").addEventListener("click", closePick);
  $("pickScrim").addEventListener("mousedown", (e) => {
    if (e.target === $("pickScrim")) closePick();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeConfirm(false);
    $("fieldScrim").hidden = true;
    $("layerScrim").hidden = true;
    layerDialogThen = null;
    closePick();
  });

  // tools
  $("toolPoint").addEventListener("click", () => toggleTool("point"));
  $("toolLine").addEventListener("click", () => toggleTool("line"));
  $("toolPoly").addEventListener("click", () => toggleTool("polygon"));
  $("splitBtn").addEventListener("click", () => {
    S.autoSplit = !S.autoSplit;
    syncToolButtons();
  });
  $("toPolyBtn").addEventListener("click", lineToPolygon);
  $("editBtn").addEventListener("click", () => {
    if (!map) return;
    if (S.tool) { map.pm.disableDraw(); S.tool = null; }
    if (S.dragMode) { map.pm.disableGlobalDragMode(); S.dragMode = false; }
    S.editMode = !S.editMode;
    if (S.editMode) map.pm.enableGlobalEditMode(); else map.pm.disableGlobalEditMode();
    syncToolButtons();
  });
  $("dragBtn").addEventListener("click", () => {
    if (!map) return;
    if (S.tool) { map.pm.disableDraw(); S.tool = null; }
    if (S.editMode) { map.pm.disableGlobalEditMode(); S.editMode = false; }
    S.dragMode = !S.dragMode;
    if (S.dragMode) map.pm.enableGlobalDragMode(); else map.pm.disableGlobalDragMode();
    syncToolButtons();
  });
  $("snapBtn").addEventListener("click", () => {
    S.snap = !S.snap;
    if (map) map.pm.setGlobalOptions(globalOpts());
    syncToolButtons();
  });
  $("baseBtn").addEventListener("click", () => {
    if (!map) return;
    const order = ["osm", "sat", "topo"];
    const cur = { osm: baseOsm, sat: baseSat, topo: baseTopo };
    const next = order[(order.indexOf(S.basemap) + 1) % order.length];
    map.removeLayer(cur[S.basemap]);
    cur[next].addTo(map);
    cur[next].bringToBack();
    S.basemap = next;
    syncBaseTip();
  });

  // export
  $("modeSep").addEventListener("click", () => {
    S.mode = "separate";
    $("modeSep").classList.add("on"); $("modeZip").classList.remove("on");
  });
  $("modeZip").addEventListener("click", () => {
    S.mode = "zip";
    $("modeZip").classList.add("on"); $("modeSep").classList.remove("on");
  });
  $("exportBtn").addEventListener("click", runExport);
  $("gpkgBtn").addEventListener("click", exportGpkg);

  // splitter
  const pane = $("tablePane");
  const splitter = $("splitter");
  let dragging = false;
  const onMove = (clientY) => {
    const main = pane.parentElement;
    const rect = main.getBoundingClientRect();
    const h = Math.min(Math.max(clientY - rect.top, 90), rect.height - 140);
    pane.style.flex = "0 0 " + h + "px";
    if (map) map.invalidateSize();
    fitTools();
  };
  splitter.addEventListener("mousedown", (e) => {
    dragging = true; splitter.classList.add("drag"); e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => { if (dragging) onMove(e.clientY); });
  window.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false; splitter.classList.remove("drag");
  });
  splitter.addEventListener("touchstart", () => { dragging = true; }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (dragging && e.touches[0]) { onMove(e.touches[0].clientY); e.preventDefault(); }
  }, { passive: false });
  window.addEventListener("touchend", () => { dragging = false; });

  window.addEventListener("resize", () => { if (map) map.invalidateSize(); fitTools(); });
}

/* ============================================================
   Start
   ============================================================ */
try {
  const savedTheme = localStorage.getItem("kga-dc-theme");
  const savedLang = localStorage.getItem("kga-dc-lang");
  if (savedTheme === "dark") applyTheme(true);
  if (savedLang === "en" || savedLang === "kh") S.lang = savedLang;
} catch (e) {}

wire();
renderFormatChips();
applyLang();
syncToolButtons();
fitTools();
waitForLibs();

})();
