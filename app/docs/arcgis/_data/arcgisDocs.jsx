// KGA Toolbox for ArcGIS Pro — documentation content.
//
// GENERATED from the add-in's own reference docs,
// `kgatoolbox_addin/toolMetadata/<Category>/<Tool>.md` — one file per tool,
// each carrying Summary, Usage, Parameters, How to use, Licensing information
// and Related tools. That folder is the source of truth and is deliberately NOT
// vendored into this repo; re-generate from it rather than editing prose here,
// or the page and the add-in drift apart.
//
// The metadata's inline Markdown is kept verbatim — **bold** for parameter and
// button labels, `code` for literal values and field names,
// [label](../Category/Tool.md) for a sibling tool — and rendered by
// DocsArcgis/RichText, which resolves those relative links to /docs/arcgis/<slug>.
//
// SLUG SCHEME (a contract: the add-in's Help buttons will point at these).
//   kebab-case of the metadata file's basename, flat — no category prefix,
//   because the category is already a data field and a nested URL would need a
//   catch-all route. Split on lower|digit→upper, upper→upper+lower,
//   letter→digit and digit→letter, then lowercase:
//     Cadastral/BearingDistanceCalculator.md → bearing-distance-calculator
//     DataManagement/IDBasedCSVExporter.md   → id-based-csv-exporter
//   Basenames are unique across all 118 files, so no category prefix is needed;
//   the generator asserts that, and the dev-only guard at the bottom re-checks it.
//
// LANGUAGE. Body prose is a plain string, which `t()` treats as
// language-neutral and renders as-is; `summary` is a { km, en } pair because it
// is what the index cards and the sidebar read, and it is translated first.
// To translate any other string, replace it with a { km, en } pair in place.
//
// COUNTS. `PRODUCT.toolCount` (115) excludes the Product group, which holds
// product pages rather than tools; `tools.length` (118) is the number of routes.
// Both are derived, never hard-coded, so adding a tool cannot make them drift.
//
// Per tool:
//   summary      The first paragraph of ## Summary.
//   body         The rest of ## Summary.
//   usage        ## Usage — prose, bullets and the free-standing tables that
//                sit inside them.
//   parameters   One section per table in ## Parameters. `nameLabel` is the
//                metadata's own first-column heading (Label for a geoprocessing
//                tool, Control or Input for a dialog) and `showType` says
//                whether that table carried a Data Type column at all.
//   steps        ## How to use.
//   licensing    ## Licensing information.
//   environments ## Environments, on the three tools that declare one.
//   seeAlso      ## Related tools, resolved to slugs.

// PRODUCT is editorial copy, not metadata, so it lives in a hand-written file
// this generator never touches. Re-exported here so components have one import.
export { PRODUCT } from "./product";

export const groups = [
  {
    id: "datacreation",
    name: "Data Creation",
    icon: "Shapes",
    summary: {
      km: "ការបង្កើតស្រទាប់ថ្មី និងការបម្លែងរវាងប្រភេទធរណីមាត្រ។",
      en: "Creating layers and converting between geometry types."
    }
  },
  {
    id: "datamanagement",
    name: "Data Management",
    icon: "Database",
    summary: {
      km: "ការកែគុណលក្ខណៈ ការពិនិត្យគុណភាពលក្ខណៈ ការនាំចេញ-នាំចូល Excel និង KML និងការបង្កើតព្រំដែន។",
      en: "Attribute editing, feature quality checks, Excel and KML round trips, boundary generation."
    }
  },
  {
    id: "vectoriq",
    name: "VectorIQ",
    icon: "Sparkles",
    summary: {
      km: "បណ្តុំឧបករណ៍គុណលក្ខណៈ និងការវិភាគ — គ្រប់គ្រង ជ្រើសរើស ស្រង់ចេញ វិភាគ និងគណនា។",
      en: "The attribute and analysis suite — manage, select, extract, analyze, calculate."
    }
  },
  {
    id: "quicklabel",
    name: "Quick Label",
    icon: "Tag",
    summary: {
      km: "ការដាក់ស្លាកធរណីមាត្រ។ ឧបករណ៍ **Show** បង្កើតថ្នាក់ស្លាកអចិន្ត្រៃយ៍ ចំណែកឧបករណ៍ **Display** គូសក្រាហ្វិកបណ្តោះអាសន្ន។",
      en: "Geometry labelling. The **Show** tools create persistent label classes; the **Display** tools draw temporary overlays."
    }
  },
  {
    id: "cadastral",
    name: "Cadastral",
    icon: "LandPlot",
    summary: {
      km: "ឧបករណ៍ផ្តោតលើក្បាលដី៖ ព្រំដែន ការបែងចែក ការត្រួតពិនិត្យគុណភាព និងលទ្ធផលកាដាស្ត្រ។",
      en: "Parcel-focused tools: boundaries, subdivision, quality control, and cadastral deliverables."
    }
  },
  {
    id: "geoprocessing",
    name: "Geoprocessing",
    icon: "Cog",
    summary: {
      km: "ឧបករណ៍គ្របដណ្តប់ និងការបម្លែងប្រព័ន្ធកូអរដោនេ។",
      en: "Coverage tools and coordinate system conversion."
    }
  },
  {
    id: "spatialanalysis",
    name: "Spatial Analysis",
    icon: "Mountain",
    summary: {
      km: "ភូមិសណ្ឋាន ទម្រង់កម្ពស់ និងការគណនាទិសដៅ និងចម្ងាយ។",
      en: "Terrain, elevation profiles, and direction/distance calculation."
    }
  },
  {
    id: "topologycheck",
    name: "Topology Check",
    icon: "GitBranch",
    summary: {
      km: "ការបង្កើត និងផ្ទៀងផ្ទាត់ topology នៃ geodatabase។",
      en: "Geodatabase topology creation and validation."
    }
  },
  {
    id: "mapping",
    name: "Mapping",
    icon: "Map",
    summary: {
      km: "សន្លឹកផែនទី និងទម្រង់បែបបទដែលរួចរាល់។",
      en: "Finished map sheets and forms."
    }
  },
  {
    id: "basemap",
    name: "Basemap and Go-to",
    icon: "Globe",
    summary: {
      km: "ស្រទាប់ក្រឡាផែនទីមូលដ្ឋាន និងតំណភ្ជាប់ទៅសេវាកម្មផែនទីខាងក្រៅ។",
      en: "Basemap tile layers and links out to external map services."
    }
  },
  {
    id: "product",
    name: "Product",
    icon: "Info",
    summary: {
      km: "ស្ថានភាពអាជ្ញាបណ្ណ ការធ្វើបច្ចុប្បន្នភាព និងកំណត់ត្រាចេញផ្សាយ។",
      en: "Licence status, updates, and release notes."
    }
  }
];

export const tools = [
  {
    slug: "create-line-layer",
    group: "datacreation",
    name: "Create Line Layer",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Create Line",
    actsOn: [],
    summary: {
      km: "បង្កើត feature class ខ្សែថ្មីទទេក្នុង geodatabase ឬ feature dataset ព្រមទាំងអាចកំណត់វាលគុណលក្ខណៈមួយចំនួនក្នុងជំហានតែមួយ។",
      en: "Creates a new empty line feature class in a geodatabase or feature dataset, with an optional set of attribute fields defined in a single pass."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool to stand up a line layer before digitizing. Because the field list, coordinate system, and Z/M properties are all set on one dialog, the layer is ready to edit as soon as the tool finishes — no follow-up trip to the **Fields** view."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The **Output Workspace** and **Output Coordinate System** parameters are pre-populated from the current project's default geodatabase and the active map's spatial reference. Override either one if the new layer belongs elsewhere.",
          "Attribute fields are optional. Leave **Add attribute fields?** unchecked to create a layer with only the system-managed fields (`OBJECTID`, `SHAPE`, `SHAPE_Length`), then add fields later.",
          "When **Add attribute fields?** is checked, the **Enter field name, type, and length** value table becomes available. Add one row per field. **Field Length** applies only to text fields and is ignored for numeric, date, and binary types.",
          "Z-values and M-values cannot be added to a feature class after it is created. If the layer will store elevation or linear-referencing measures, set **Include Z Value?** or **Include M Value?** now.",
          "Use **Template Datasets** to copy the field schema of one or more existing datasets into the new layer. Fields defined in the value table are added in addition to the template fields.",
          "The output is added to the active map by default. Uncheck **Add output to map?** for batch or intermediate datasets."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset in which the new line feature class is created. Defaults to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Enter Line Name",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the output line feature class. Default is `Line_Layer`."
              }
            ]
          },
          {
            name: "Feature Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The geometry type of the output. Preset to `Line` for this tool. Change it to create a point or polygon layer instead without switching tools."
              },
              {
                type: "list",
                items: [
                  "`Point`",
                  "`Line`",
                  "`Polygon`"
                ]
              }
            ]
          },
          {
            name: "Output Coordinate System",
            optional: false,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The spatial reference of the output feature class. Defaults to the active map's coordinate system."
              }
            ]
          },
          {
            name: "Add attribute fields?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables the field definition table."
              },
              {
                type: "list",
                items: [
                  "Checked — The **Enter field name, type, and length** parameter is enabled.",
                  "Unchecked (default) — The layer is created with system fields only."
                ]
              }
            ]
          },
          {
            name: "Enter field name, type, and length",
            optional: true,
            type: "Value Table",
            description: [
              {
                type: "paragraph",
                text: "The attribute fields to create, one row per field."
              },
              {
                type: "list",
                items: [
                  "**Field Name** — The field name.",
                  "**Field Type** — The field data type.",
                  "**Field Length** — The character length. Applies to text fields only."
                ]
              }
            ]
          },
          {
            name: "Add output to map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether the new layer is added to the active map."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — The layer is added to the map.",
                  "Unchecked — The feature class is created but not added."
                ]
              }
            ]
          },
          {
            name: "Include Z Value?",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Whether the output stores Z-values (elevation). Cannot be changed after creation. Default is `No`."
              }
            ]
          },
          {
            name: "Include M Value?",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Whether the output stores M-values (linear measures). Cannot be changed after creation. Default is `No`."
              }
            ]
          },
          {
            name: "Template Datasets",
            optional: true,
            type: "Table View (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more existing datasets whose field schema is copied into the output."
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Line Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The new line feature class."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, click **Create Line**.",
          "Confirm **Output Workspace**. The project's default geodatabase is filled in automatically.",
          "Type a name in **Enter Line Name**.",
          "Confirm **Output Coordinate System**, or click the globe button to choose a different one.",
          "To define attribute fields now, check **Add attribute fields?** and add one row per field in the table below it.",
          "If the layer needs to store elevation or measure values, expand **Additional Properties** and set **Include Z Value?** or **Include M Value?**.",
          "Click **Run**. The layer is created and added to the active map."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [
      {
        type: "paragraph",
        text: "This tool honors the **Current Workspace**, **Output Coordinate System**, and **Output has Z/M values** geoprocessing environment settings."
      }
    ],
    seeAlso: [
      "create-point-layer",
      "create-polygon-layer",
      "quick-template-line"
    ]
  },
  {
    slug: "create-point-layer",
    group: "datacreation",
    name: "Create Point Layer",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Create Point",
    actsOn: [],
    summary: {
      km: "បង្កើត feature class ចំណុចថ្មីទទេក្នុង geodatabase ឬ feature dataset ព្រមទាំងអាចកំណត់វាលគុណលក្ខណៈមួយចំនួនក្នុងជំហានតែមួយ។",
      en: "Creates a new empty point feature class in a geodatabase or feature dataset, with an optional set of attribute fields defined in a single pass."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool to stand up a point layer before digitizing. Because the field list, coordinate system, and Z/M properties are all set on one dialog, the layer is ready to edit as soon as the tool finishes — no follow-up trip to the **Fields** view."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The **Output Workspace** and **Output Coordinate System** parameters are pre-populated from the current project's default geodatabase and the active map's spatial reference. Override either one if the new layer belongs elsewhere.",
          "Attribute fields are optional. Leave **Add attribute fields?** unchecked to create a layer with only the system-managed fields (`OBJECTID`, `SHAPE`), then add fields later.",
          "When **Add attribute fields?** is checked, the **Enter field name, type, and length** value table becomes available. Add one row per field. **Field Length** applies only to text fields and is ignored for numeric, date, and binary types.",
          "Z-values and M-values cannot be added to a feature class after it is created. If the layer will store elevation or linear-referencing measures, set **Include Z Value?** or **Include M Value?** now.",
          "Use **Template Datasets** to copy the field schema of one or more existing datasets into the new layer. Fields defined in the value table are added in addition to the template fields.",
          "The output is added to the active map by default. Uncheck **Add output to map?** for batch or intermediate datasets."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset in which the new point feature class is created. Defaults to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Enter Point Name",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the output point feature class. Default is `Point_Layer`."
              }
            ]
          },
          {
            name: "Feature Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The geometry type of the output. Preset to `Point` for this tool. Change it to create a line or polygon layer instead without switching tools."
              },
              {
                type: "list",
                items: [
                  "`Point`",
                  "`Line`",
                  "`Polygon`"
                ]
              }
            ]
          },
          {
            name: "Output Coordinate System",
            optional: false,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The spatial reference of the output feature class. Defaults to the active map's coordinate system."
              }
            ]
          },
          {
            name: "Add attribute fields?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables the field definition table."
              },
              {
                type: "list",
                items: [
                  "Checked — The **Enter field name, type, and length** parameter is enabled.",
                  "Unchecked (default) — The layer is created with system fields only."
                ]
              }
            ]
          },
          {
            name: "Enter field name, type, and length",
            optional: true,
            type: "Value Table",
            description: [
              {
                type: "paragraph",
                text: "The attribute fields to create, one row per field."
              },
              {
                type: "list",
                items: [
                  "**Field Name** — The field name.",
                  "**Field Type** — The field data type.",
                  "**Field Length** — The character length. Applies to text fields only."
                ]
              }
            ]
          },
          {
            name: "Add output to map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether the new layer is added to the active map."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — The layer is added to the map.",
                  "Unchecked — The feature class is created but not added."
                ]
              }
            ]
          },
          {
            name: "Include Z Value?",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Whether the output stores Z-values (elevation). Cannot be changed after creation. Default is `No`."
              }
            ]
          },
          {
            name: "Include M Value?",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Whether the output stores M-values (linear measures). Cannot be changed after creation. Default is `No`."
              }
            ]
          },
          {
            name: "Template Datasets",
            optional: true,
            type: "Table View (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more existing datasets whose field schema is copied into the output."
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Point Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The new point feature class."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, click **Create Point**.",
          "Confirm **Output Workspace**. The project's default geodatabase is filled in automatically.",
          "Type a name in **Enter Point Name**.",
          "Confirm **Output Coordinate System**, or click the globe button to choose a different one.",
          "To define attribute fields now, check **Add attribute fields?** and add one row per field in the table below it.",
          "If the layer needs to store elevation or measure values, expand **Additional Properties** and set **Include Z Value?** or **Include M Value?**.",
          "Click **Run**. The layer is created and added to the active map."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [
      {
        type: "paragraph",
        text: "This tool honors the **Current Workspace**, **Output Coordinate System**, and **Output has Z/M values** geoprocessing environment settings."
      }
    ],
    seeAlso: [
      "create-line-layer",
      "create-polygon-layer",
      "quick-template-point"
    ]
  },
  {
    slug: "create-polygon-layer",
    group: "datacreation",
    name: "Create Polygon Layer",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Create Polygon",
    actsOn: [],
    summary: {
      km: "បង្កើត feature class ពហុកោណថ្មីទទេក្នុង geodatabase ឬ feature dataset ព្រមទាំងអាចកំណត់វាលគុណលក្ខណៈមួយចំនួនក្នុងជំហានតែមួយ។",
      en: "Creates a new empty polygon feature class in a geodatabase or feature dataset, with an optional set of attribute fields defined in a single pass."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool to stand up a polygon layer before digitizing. Because the field list, coordinate system, and Z/M properties are all set on one dialog, the layer is ready to edit as soon as the tool finishes — no follow-up trip to the **Fields** view."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The **Output Workspace** and **Output Coordinate System** parameters are pre-populated from the current project's default geodatabase and the active map's spatial reference. Override either one if the new layer belongs elsewhere.",
          "Attribute fields are optional. Leave **Add attribute fields?** unchecked to create a layer with only the system-managed fields (`OBJECTID`, `SHAPE`, `SHAPE_Length`, `SHAPE_Area`), then add fields later.",
          "When **Add attribute fields?** is checked, the **Enter field name, type, and length** value table becomes available. Add one row per field. **Field Length** applies only to text fields and is ignored for numeric, date, and binary types.",
          "Z-values and M-values cannot be added to a feature class after it is created. If the layer will store elevation or linear-referencing measures, set **Include Z Value?** or **Include M Value?** now.",
          "Use **Template Datasets** to copy the field schema of one or more existing datasets into the new layer. Fields defined in the value table are added in addition to the template fields.",
          "The output is added to the active map by default. Uncheck **Add output to map?** for batch or intermediate datasets."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset in which the new polygon feature class is created. Defaults to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Enter Polygon Name",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the output polygon feature class. Default is `Polygon_Layer`."
              }
            ]
          },
          {
            name: "Feature Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The geometry type of the output. Preset to `Polygon` for this tool. Change it to create a point or line layer instead without switching tools."
              },
              {
                type: "list",
                items: [
                  "`Point`",
                  "`Line`",
                  "`Polygon`"
                ]
              }
            ]
          },
          {
            name: "Output Coordinate System",
            optional: false,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The spatial reference of the output feature class. Defaults to the active map's coordinate system."
              }
            ]
          },
          {
            name: "Add attribute fields?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables the field definition table."
              },
              {
                type: "list",
                items: [
                  "Checked — The **Enter field name, type, and length** parameter is enabled.",
                  "Unchecked (default) — The layer is created with system fields only."
                ]
              }
            ]
          },
          {
            name: "Enter field name, type, and length",
            optional: true,
            type: "Value Table",
            description: [
              {
                type: "paragraph",
                text: "The attribute fields to create, one row per field."
              },
              {
                type: "list",
                items: [
                  "**Field Name** — The field name.",
                  "**Field Type** — The field data type.",
                  "**Field Length** — The character length. Applies to text fields only."
                ]
              }
            ]
          },
          {
            name: "Add output to map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether the new layer is added to the active map."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — The layer is added to the map.",
                  "Unchecked — The feature class is created but not added."
                ]
              }
            ]
          },
          {
            name: "Include Z Value?",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Whether the output stores Z-values (elevation). Cannot be changed after creation. Default is `No`."
              }
            ]
          },
          {
            name: "Include M Value?",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Whether the output stores M-values (linear measures). Cannot be changed after creation. Default is `No`."
              }
            ]
          },
          {
            name: "Template Datasets",
            optional: true,
            type: "Table View (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more existing datasets whose field schema is copied into the output."
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Polygon Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The new polygon feature class."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, click **Create Polygon**.",
          "Confirm **Output Workspace**. The project's default geodatabase is filled in automatically.",
          "Type a name in **Enter Polygon Name**.",
          "Confirm **Output Coordinate System**, or click the globe button to choose a different one.",
          "To define attribute fields now, check **Add attribute fields?** and add one row per field in the table below it.",
          "If the layer needs to store elevation or measure values, expand **Additional Properties** and set **Include Z Value?** or **Include M Value?**.",
          "Click **Run**. The layer is created and added to the active map."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [
      {
        type: "paragraph",
        text: "This tool honors the **Current Workspace**, **Output Coordinate System**, and **Output has Z/M values** geoprocessing environment settings."
      }
    ],
    seeAlso: [
      "create-point-layer",
      "create-line-layer",
      "quick-template-polygon"
    ]
  },
  {
    slug: "migrate-data-from-mdb",
    group: "datacreation",
    name: "Migrate Data from MDB",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Conversion Tool ▸ Migrate Data from MDB",
    actsOn: [],
    summary: {
      km: "បម្លែង personal geodatabase (.mdb) ទៅជា file geodatabase (.gdb) ឬបម្លែងត្រឡប់មកវិញ ដោយប្រើឯកសារ XML workspace ជាទម្រង់បញ្ជូន។",
      en: "Converts a personal geodatabase (.mdb) to a file geodatabase (.gdb), or a file geodatabase back to a personal geodatabase, using an XML workspace document as the transfer format."
    },
    body: [
      {
        type: "paragraph",
        text: "ArcGIS Pro cannot read or write personal geodatabases at all. This tool bridges that gap by delegating the `.mdb` side of the conversion to ArcMap's Python 2.7 interpreter while you drive it from the Pro ribbon."
      }
    ],
    usage: [
      {
        type: "note",
        tone: "warning",
        text: "**Prerequisite — ArcMap Python 2.7 is required.** The tool cannot run without it. It searches for `python.exe` under `C:\\Python27\\ArcGIS<version>` and `C:\\Python27\\ArcGISx64<version>` for ArcMap 10.1 through 10.8. If ArcMap is installed somewhere non-standard, set the `ARCMAP_PYTHON` environment variable to the full path of its `python.exe`. When the interpreter is not found, the **Conversion direction** parameter shows a warning on the dialog and the tool fails at run time with an error."
      },
      {
        type: "list",
        items: [
          "Conversion runs through **Export XML Workspace Document** followed by **Import XML Workspace Document**. Both schema and data are carried across.",
          "**Source path (.mdb or .gdb)** is a plain text parameter, not a browse control. Pro's workspace validation rejects `.mdb` paths outright, so the path must be pasted or dragged in as text. Surrounding quotation marks are stripped automatically.",
          {
            text: "The dialog validates the source path as you type:",
            items: [
              "A path that does not exist produces an error.",
              "A path whose extension does not match the chosen direction produces a warning — for example, selecting the `.mdb` → `.gdb` direction and supplying a `.gdb` source."
            ]
          },
          "**Output name (no extension)** takes the bare name. The correct extension is appended based on the conversion direction.",
          "Because the conversion is driven by an external Python 2.7 process, progress is reported one phase at a time rather than as a continuous percentage."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Conversion direction",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The direction of the conversion."
              },
              {
                type: "list",
                items: [
                  "`Personal GDB (.mdb) -> File GDB (.gdb)` (default)",
                  "`File GDB (.gdb) -> Personal GDB (.mdb)`"
                ]
              }
            ]
          },
          {
            name: "Source path (.mdb or .gdb)",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The full path of the source geodatabase, entered as text. Paste or drag the path in; a browse dialog cannot be used for `.mdb`. Enclosing quotation marks are removed automatically."
              }
            ]
          },
          {
            name: "Output folder",
            optional: false,
            type: "Folder",
            description: [
              {
                type: "paragraph",
                text: "The folder that receives the converted geodatabase."
              }
            ]
          },
          {
            name: "Output name (no extension)",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the output geodatabase, without a file extension. The extension is added according to **Conversion direction**."
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output geodatabase",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The full path of the geodatabase produced by the conversion."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm ArcMap is installed, or that `ARCMAP_PYTHON` points to an ArcMap Python 2.7 `python.exe`.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Conversion Tool** gallery and click **Migrate Data from MDB**.",
          "Set **Conversion direction**.",
          "In **Source path (.mdb or .gdb)**, paste the full path of the source geodatabase. Check the dialog for a warning that the extension does not match the chosen direction.",
          "Set **Output folder** and type a bare name in **Output name (no extension)**.",
          "Click **Run**. The tool reports each conversion phase as it progresses."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "copy-parcel-to-gdb",
      "database-structure-builder",
      "batch-export"
    ]
  },
  {
    slug: "point-to-polygon",
    group: "datacreation",
    name: "Point To Polygon",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Conversion Tool ▸ Point To Polygon",
    actsOn: [],
    summary: {
      km: "បង្កើតពហុកោណពីសំណុំចំណុចព្រំដែនដែលបានតម្រៀបតាមលំដាប់។ ចំណុចអាចមកពីស្រទាប់ចំណុចដែលមានស្រាប់ ឬពីតារាង CSV នៃកូអរដោនេ X/Y។",
      en: "Builds polygon features from an ordered set of boundary points. The points may come from an existing point feature layer or from a CSV table of X/Y coordinates."
    },
    body: [
      {
        type: "paragraph",
        text: "The tool connects the points into a closed line in the order given by the **Point Order Field**, then converts that line into a polygon. This is the standard route for turning a field survey — a list of numbered corner coordinates — into a parcel polygon."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Point order matters. The tool traverses points in ascending order of **Point Order Field**, so that field must contain a clean sequence (1, 2, 3, …) per plot. An out-of-sequence value produces a self-crossing boundary and the polygon will fail to close correctly.",
          "**Point Order Field** accepts short and long integer fields only. If the survey sequence is stored as text, convert it first with [Value Type Converter](../VectorIQ/ValueTypeConverter.md).",
          "To read coordinates from a CSV or Excel table, check **Input Point is CSV?**. The **X Field**, **Y Field**, and **Input Coordinate System** parameters are then enabled and required — a plain coordinate table carries no spatial reference of its own, so the coordinate system must be stated explicitly.",
          "When the input is already a point feature layer, leave **Input Point is CSV?** unchecked. **X Field**, **Y Field**, and **Input Coordinate System** are ignored and the layer's own spatial reference is used.",
          "Output names are derived from the input name:"
        ]
      },
      {
        type: "table",
        head: [
          "Output",
          "Name pattern"
        ],
        rows: [
          [
            "Polygon",
            "`polygon_from_<input>`"
          ],
          [
            "Line",
            "`Line_from_<input>` (CSV input: `line_from_<input>_Line`)"
          ],
          [
            "Point",
            "`<input>_Point` (CSV input only)"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Check **Create Point and/or Line?** to keep the intermediate line — and, for CSV input, the generated point feature class — as permanent datasets. Left unchecked, only the polygon is retained."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Point is CSV?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Declares that the input is a coordinate table rather than a point feature layer."
              },
              {
                type: "list",
                items: [
                  "Checked — **X Field**, **Y Field**, and **Input Coordinate System** are enabled and required.",
                  "Unchecked (default) — The input is treated as a point feature layer."
                ]
              }
            ]
          },
          {
            name: "Input Point Data",
            optional: false,
            type: "Feature Layer; Table View",
            description: [
              {
                type: "paragraph",
                text: "The point features or coordinate table that supplies the boundary vertices."
              }
            ]
          },
          {
            name: "X Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding the X (easting or longitude) coordinate. Required when **Input Point is CSV?** is checked. Numeric fields only."
              }
            ]
          },
          {
            name: "Y Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding the Y (northing or latitude) coordinate. Required when **Input Point is CSV?** is checked. Numeric fields only."
              }
            ]
          },
          {
            name: "Input Coordinate System",
            optional: true,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The spatial reference the X/Y values are expressed in. Required when **Input Point is CSV?** is checked."
              }
            ]
          },
          {
            name: "Point ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying the polygon each point belongs to. Points sharing an ID are assembled into one polygon, so one run can build many polygons at once."
              }
            ]
          },
          {
            name: "Point Order Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field defining the traversal order of points around each boundary. Short or long integer only."
              }
            ]
          },
          {
            name: "Create Point and/or Line?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Retains the intermediate datasets."
              },
              {
                type: "list",
                items: [
                  "Checked — The line feature class (and the point feature class, for CSV input) is kept and added to the map.",
                  "Unchecked (default) — Only the polygon output is kept."
                ]
              }
            ]
          },
          {
            name: "Output workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the outputs."
              }
            ]
          },
          {
            name: "Add output to map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether the outputs are added to the active map."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — Outputs are added.",
                  "Unchecked — Outputs are created but not added."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Polygon",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The polygon feature class built from the boundary points, named `polygon_from_<input>`."
              }
            ]
          },
          {
            name: "Output Line",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The closed boundary line, retained only when **Create Point and/or Line?** is checked."
              }
            ]
          },
          {
            name: "Output Point",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The point feature class generated from the coordinate table, for CSV input with **Create Point and/or Line?** checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "From an existing point layer"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Conversion Tool** gallery and click **Point To Polygon**.",
          "Set **Input Point Data** to the boundary point layer.",
          "Set **Point ID Field** to the field that groups points by parcel or plot.",
          "Set **Point Order Field** to the integer field holding the corner sequence.",
          "Set **Output workspace**.",
          "Click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "From a CSV coordinate table"
      },
      {
        type: "steps",
        items: [
          "Add the CSV to the project so it appears in the **Standalone Tables** section of the **Contents** pane.",
          "Open **Point To Polygon** and check **Input Point is CSV?**.",
          "Set **Input Point Data** to the table, then set **X Field** and **Y Field**.",
          "Set **Input Coordinate System** to the coordinate system the survey was recorded in. This step is required — the tool cannot infer it from a table.",
          "Set **Point ID Field** and **Point Order Field**.",
          "Check **Create Point and/or Line?** if you want the generated points kept as a feature class.",
          "Set **Output workspace** and click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "polygon-to-boundary-point",
      "boundary-xy-to-excel",
      "quick-landplot-1"
    ]
  },
  {
    slug: "polygon-to-boundary-point",
    group: "datacreation",
    name: "Polygon To Boundary Point",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Conversion Tool ▸ Polygon To Boundary Point",
    actsOn: [],
    summary: {
      km: "បម្លែងចំណុចកំពូលនៃស្រទាប់ពហុកោណមួយ ឬច្រើន ទៅជា feature class ចំណុច ដោយលុបចំណុចស្ទួន និងដាក់លេខរៀងតាមលំដាប់។",
      en: "Converts the vertices of one or more polygon layers into point feature classes, removing duplicate vertices and numbering the results sequentially."
    },
    body: [
      {
        type: "paragraph",
        text: "Each input polygon layer produces its own point feature class. Use this tool to extract parcel corner points for coordinate listings, survey reports, or boundary-point labelling."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool accepts multiple polygon layers in one run. Each input produces a separate output named `<input>_to_point`.",
          "Coincident vertices are removed. A polygon's closing vertex repeats its start vertex, and adjacent parcels share corners; the tool deletes identical geometries so each physical corner appears once.",
          "A `LONG` field named `ID` is added to every output and populated with a sequential number starting at 1, giving each boundary point a stable label.",
          "The `ORIG_FID` field left behind by the vertex-extraction step is removed automatically.",
          "Check **Drop Unrelated Fields?** to produce a minimal point layer. All attribute fields inherited from the polygon are deleted except the geometry and system fields (`Shape`, `OID`, `FID`, `OBJECTID`, `Shape_Area`, `Shape_Length`). The `ID` field is still added afterwards.",
          "Because duplicate vertices are removed, the point count will be lower than the polygon's raw vertex count. This is expected."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Boundary Polygon",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more polygon layers whose vertices are converted to points. Each layer produces its own output."
              }
            ]
          },
          {
            name: "Drop Unrelated Fields?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether polygon attributes are carried into the point output."
              },
              {
                type: "list",
                items: [
                  "Checked — All inherited attribute fields are deleted, leaving geometry, system fields, and the new `ID` field.",
                  "Unchecked (default) — Polygon attributes are retained on each point."
                ]
              }
            ]
          },
          {
            name: "Output workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the point feature classes."
              }
            ]
          },
          {
            name: "Add output to map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether the outputs are added to the active map."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — Outputs are added.",
                  "Unchecked — Outputs are created but not added."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Point Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "One point feature class per input layer, named `<input>_to_point`, containing deduplicated boundary vertices with a sequential `ID` field."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Conversion Tool** gallery and click **Polygon To Boundary Point**.",
          "In **Input Boundary Polygon**, select one or more polygon layers.",
          "Check **Drop Unrelated Fields?** if you only need corner geometry and an ID.",
          "Set **Output workspace**.",
          "Click **Run**. One point feature class is created per input layer."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "generate-boundary-point",
      "point-to-polygon",
      "corner-point-builder",
      "coordinate-listing"
    ]
  },
  {
    slug: "polygon-to-central-point",
    group: "datacreation",
    name: "Polygon To Central Point",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Conversion Tool ▸ Polygon To Central Point",
    actsOn: [],
    summary: {
      km: "បង្កើតចំណុចមួយនៅចំកណ្តាលពហុកោណនីមួយៗ ព្រមទាំងអាចគណនាកូអរដោនេចូលក្នុងវាលគុណលក្ខណៈ និងនាំចេញជាតារាងដាច់ដោយឡែក។",
      en: "Creates a single point at the centre of each polygon feature, optionally calculating the point's coordinates into attribute fields and exporting them as a standalone table."
    },
    body: [
      {
        type: "paragraph",
        text: "Centre points are used for placing parcel labels, joining polygon attributes to a point-based dataset, and producing a coordinate listing of parcel centroids."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The point is placed at the polygon's centroid. For a concave or multipart polygon the centroid can fall outside the polygon's own boundary; inspect the result if the parcel shapes are irregular.",
          "Check **Drop unrelated fields except ID field?** to produce a minimal point layer carrying only the field named in **Choose ID Field**. Leave it unchecked to inherit every polygon attribute.",
          {
            text: "**Calculate XY or LatLon** adds coordinate fields to the output point:",
            items: [
              "For a projected input, X/Y fields are populated in the layer's own projected units.",
              "For a geographic input, latitude and longitude fields are populated in decimal degrees."
            ]
          },
          "**Export Coordinate as Table?** writes the same coordinate values to a standalone table, which is the convenient form for handing coordinates to a spreadsheet or a report. Set **Specify Output Table** to control where it lands.",
          "This tool produces one point per polygon. To extract every boundary vertex instead, use [Polygon To Boundary Point](PolygonToBoundaryPoint.md)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The polygon layer whose centre points are generated."
              }
            ]
          },
          {
            name: "Drop unrelated fields except ID field?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls which polygon attributes reach the output."
              },
              {
                type: "list",
                items: [
                  "Checked — Only the field named in **Choose ID Field** is retained.",
                  "Unchecked (default) — All polygon attributes are inherited."
                ]
              }
            ]
          },
          {
            name: "Choose ID Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The identifier field carried through to the point output. Required when **Drop unrelated fields except ID field?** is checked."
              }
            ]
          },
          {
            name: "Output Point Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The point feature class to create."
              }
            ]
          },
          {
            name: "Calculate XY or LatLon",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Adds and populates coordinate fields on the output point."
              },
              {
                type: "list",
                items: [
                  "Checked — Coordinate fields are added; projected inputs get X/Y, geographic inputs get latitude/longitude.",
                  "Unchecked (default) — No coordinate fields are added."
                ]
              }
            ]
          },
          {
            name: "Export Coordinate as Table?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Writes the calculated coordinates to a standalone table in addition to the point feature class."
              },
              {
                type: "list",
                items: [
                  "Checked — **Specify Output Table** is enabled.",
                  "Unchecked (default) — No table is written."
                ]
              }
            ]
          },
          {
            name: "Specify Output Table",
            optional: true,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The standalone table that receives the coordinate values. Required when **Export Coordinate as Table?** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Conversion Tool** gallery and click **Polygon To Central Point**.",
          "Set **Input Feature** to the polygon layer.",
          "For a label-ready point layer, check **Drop unrelated fields except ID field?** and set **Choose ID Field** to the parcel number field.",
          "Set **Output Point Feature Class**.",
          "To record coordinates, check **Calculate XY or LatLon**. To also receive them as a table, check **Export Coordinate as Table?** and set **Specify Output Table**.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "generate-polygon-central-point",
      "polygon-to-boundary-point",
      "polygon-to-map-series"
    ]
  },
  {
    slug: "polygon-to-line-multiple",
    group: "datacreation",
    name: "Polygon To Line (multiple)",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Conversion Tool ▸ Polygon To Line (multiple)",
    actsOn: [],
    summary: {
      km: "បម្លែងព្រំដែននៃស្រទាប់ពហុកោណមួយ ឬច្រើន ទៅជា feature class ខ្សែ ដោយដំណើរការគ្រប់ស្រទាប់ដែលបានជ្រើសក្នុងការរត់តែម្តង។",
      en: "Converts the boundaries of one or more polygon layers into line feature classes, processing every selected layer in a single run."
    },
    body: [
      {
        type: "paragraph",
        text: "Unlike a single-input conversion, this tool is built for batch work: point it at ten parcel layers and it produces ten boundary-line layers, named consistently."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Each input layer produces its own line feature class in the output location. Output names are formed from the input name plus a suffix.",
          "The default suffix is applied automatically. To use your own, check **Change Output Suffix** and type the text in **Enter Suffix**.",
          "Check **Preserve Fields** to carry the polygon attributes onto the resulting lines. Left unchecked, the output lines carry geometry and system fields only.",
          "Boundaries shared between two adjacent polygons are produced once per polygon, so a shared parcel edge appears as two coincident lines. If you need a single topologically clean line per shared edge, use [Boundary Line Builder](../Cadastral/BoundaryLineBuilder.md) instead, which is parcel-aware."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more polygon layers to convert. Each produces its own line output."
              }
            ]
          },
          {
            name: "Output Location",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the line feature classes."
              }
            ]
          },
          {
            name: "Preserve Fields",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether polygon attributes are carried onto the output lines."
              },
              {
                type: "list",
                items: [
                  "Checked — Attributes are preserved.",
                  "Unchecked (default) — Only geometry and system fields are written."
                ]
              }
            ]
          },
          {
            name: "Change Output Suffix",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables a custom suffix for output names."
              },
              {
                type: "list",
                items: [
                  "Checked — **Enter Suffix** is enabled.",
                  "Unchecked (default) — The built-in suffix is used."
                ]
              }
            ]
          },
          {
            name: "Enter Suffix",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The text appended to each input name to form its output name. Required when **Change Output Suffix** is checked."
              }
            ]
          },
          {
            name: "Add output to map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether the outputs are added to the active map."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — Outputs are added.",
                  "Unchecked — Outputs are created but not added."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Line Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "One line feature class per input polygon layer."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Conversion Tool** gallery and click **Polygon To Line (multiple)**.",
          "In **Input Feature**, select every polygon layer you want converted.",
          "Set **Output Location**.",
          "Check **Preserve Fields** if the lines need the polygon attributes.",
          "To control naming, check **Change Output Suffix** and type a suffix in **Enter Suffix**.",
          "Click **Run**. One line feature class is created per input layer."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "generate-boundary-line",
      "boundary-line-builder",
      "polygon-to-boundary-point"
    ]
  },
  {
    slug: "polygon-to-map-series",
    group: "datacreation",
    name: "Polygon to Map Series",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Conversion Tool ▸ Polygon to Map Series",
    actsOn: [],
    summary: {
      km: "បង្កើតទិន្នន័យចំណុច និងខ្សែដែលចាំបាច់សម្រាប់ស៊េរីផែនទីក្បាលដី ពីស្រទាប់ពហុកោណតែមួយ ដោយគណនាកូអរដោនេចំណុចព្រំដែនជាឯកតា projected ឬ geographic តាមតម្រូវការ។",
      en: "Generates the point and line datasets a parcel map series needs from a single polygon layer, calculating boundary-point coordinates in projected or geographic units as required."
    },
    body: [
      {
        type: "paragraph",
        text: "A map series sheet typically shows a parcel outline, its numbered corner points, and a coordinate table. This tool produces the corner points and boundary lines together, with attribute control over which output inherits the parcel's fields."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The input must be a polygon layer. The **Choose ID Field** value links every generated point and line back to its parent parcel.",
          "**Output Point Feature Class** is always produced. The line output is optional — check **Create Line from Polygon?** to enable **Output Line Feature Class**.",
          "**Preserve Attribute for?** controls which outputs inherit the polygon's attribute fields. The list of available choices adapts to whether line output is enabled:"
        ]
      },
      {
        type: "table",
        head: [
          "Choice",
          "Effect"
        ],
        rows: [
          [
            "`Output Point and Line`",
            "Both outputs inherit the parcel attributes"
          ],
          [
            "`Output Point`",
            "Only the point output inherits them"
          ],
          [
            "`Output Line`",
            "Only the line output inherits them"
          ],
          [
            "`None`",
            "Neither output inherits them; only the ID field is carried"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Calculate XY?** and **Calculate LatLon?** are independent. Check both to write projected coordinates and decimal-degree coordinates into the same point output — useful when one sheet has to report both.",
          "When the input polygon lives in a geodatabase, **Output Line Feature Class** is pre-filled as `<input>_line` in the same workspace."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Polygon Feature",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel polygon layer that drives the map series. Polygon geometry only."
              }
            ]
          },
          {
            name: "Choose ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The parcel identifier field. Carried onto every generated point and line so outputs can be related back to the parcel."
              }
            ]
          },
          {
            name: "Output Point Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The boundary-point feature class to create."
              }
            ]
          },
          {
            name: "Create Line from Polygon?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables line output."
              },
              {
                type: "list",
                items: [
                  "Checked — **Output Line Feature Class** is enabled.",
                  "Unchecked (default) — No line output is produced."
                ]
              }
            ]
          },
          {
            name: "Output Line Feature Class",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The boundary-line feature class to create. Required when **Create Line from Polygon?** is checked. Defaults to `<input>_line`."
              }
            ]
          },
          {
            name: "Preserve Attribute for?",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Selects which outputs inherit the polygon's attribute fields. Available choices depend on whether line output is enabled."
              },
              {
                type: "list",
                items: [
                  "`Output Point and Line`",
                  "`Output Point`",
                  "`Output Line`",
                  "`None`"
                ]
              }
            ]
          },
          {
            name: "Calculate XY?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Adds and populates projected X/Y coordinate fields on the point output."
              }
            ]
          },
          {
            name: "Calculate LatLon?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Adds and populates latitude and longitude fields, in decimal degrees, on the point output."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Conversion Tool** gallery and click **Polygon to Map Series**.",
          "Set **Input Polygon Feature** to the parcel layer.",
          "Set **Choose ID Field** to the parcel number field.",
          "Set **Output Point Feature Class**.",
          "To also produce boundary lines, check **Create Line from Polygon?** and confirm **Output Line Feature Class**.",
          "Set **Preserve Attribute for?** according to which output needs the parcel attributes.",
          "Check **Calculate XY?**, **Calculate LatLon?**, or both, depending on what the map sheet must report.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "polygon-to-boundary-point",
      "polygon-to-central-point",
      "coordinate-listing",
      "quick-landplot-1"
    ]
  },
  {
    slug: "quick-template-line",
    group: "datacreation",
    name: "Quick Template — Line Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Line Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters."
      }
    ],
    summary: {
      km: "បង្កើតស្រទាប់ខ្សែដែលរួចរាល់សម្រាប់គូស ក្នុង geodatabase លំនាំដើមរបស់គម្រោង ជាមួយស្គីម៉ាបីវាលថេរ រួចបន្ថែមទៅផែនទី ដោយមិនចាំបាច់បំពេញផ្ទាំងណាមួយ។",
      en: "Creates a ready-to-digitise line layer in the project's default geodatabase with a fixed three-field schema, and adds it to the active map — with no dialog to complete."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Create Line Layer](CreateLineLayer.md) asks you to choose a workspace, a name, a coordinate system, and a field list, this tool decides all of that for you. Use it when you need somewhere to draw right now."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**No parameters, no dialog.** Clicking the button creates the layer and adds it to the map immediately.",
          "The layer is created in the **project's default geodatabase**, named `Line_Template`. If that name is taken, a numeric suffix is appended, so repeated clicks produce `Line_Template`, `Line_Template_1`, and so on rather than failing.",
          "The coordinate system is taken from the **active map**. If there is no active map, WGS 84 is used as a fallback.",
          "Every template layer gets the same three fields: This schema is fixed and cannot be changed from the button. To choose your own fields, use [Create Line Layer](CreateLineLayer.md) instead."
        ]
      },
      {
        type: "table",
        head: [
          "Field",
          "Type",
          "Length",
          "Alias"
        ],
        rows: [
          [
            "`Name`",
            "Text",
            "255",
            "Name"
          ],
          [
            "`ID`",
            "Long integer",
            "—",
            "ID"
          ],
          [
            "`Note`",
            "Text",
            "255",
            "Note"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "If there is no map open, the tool offers to create one. Accept the prompt, and the new map is created before the layer is added.",
          "Because the name, location, and schema are all decided automatically, these layers suit sketching, tracing, and scratch work. For data that will be delivered, create the layer with a proper name and schema from the start."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Open the map you want to draw in, so the template layer picks up its coordinate system.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Line Layer**.",
          "If prompted that no map is open, choose to create one.",
          "The `Line_Template` layer appears in the **Contents** pane, ready to edit.",
          "Start digitising. Fill in `Name`, `ID`, and `Note` as you go, or later in the attribute table."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "create-line-layer",
      "quick-template-point",
      "quick-template-polygon",
      "add-multiple-fields"
    ]
  },
  {
    slug: "quick-template-point",
    group: "datacreation",
    name: "Quick Template — Point Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Point Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters."
      }
    ],
    summary: {
      km: "បង្កើតស្រទាប់ចំណុចដែលរួចរាល់សម្រាប់គូស ក្នុង geodatabase លំនាំដើមរបស់គម្រោង ជាមួយស្គីម៉ាបីវាលថេរ រួចបន្ថែមទៅផែនទី ដោយមិនចាំបាច់បំពេញផ្ទាំងណាមួយ។",
      en: "Creates a ready-to-digitise point layer in the project's default geodatabase with a fixed three-field schema, and adds it to the active map — with no dialog to complete."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Create Point Layer](CreatePointLayer.md) asks you to choose a workspace, a name, a coordinate system, and a field list, this tool decides all of that for you. Use it when you need somewhere to draw right now."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**No parameters, no dialog.** Clicking the button creates the layer and adds it to the map immediately.",
          "The layer is created in the **project's default geodatabase**, named `Point_Template`. If that name is taken, a numeric suffix is appended, so repeated clicks produce `Point_Template`, `Point_Template_1`, and so on rather than failing.",
          "The coordinate system is taken from the **active map**. If there is no active map, WGS 84 is used as a fallback.",
          "Every template layer gets the same three fields: This schema is fixed and cannot be changed from the button. To choose your own fields, use [Create Point Layer](CreatePointLayer.md) instead."
        ]
      },
      {
        type: "table",
        head: [
          "Field",
          "Type",
          "Length",
          "Alias"
        ],
        rows: [
          [
            "`Name`",
            "Text",
            "255",
            "Name"
          ],
          [
            "`ID`",
            "Long integer",
            "—",
            "ID"
          ],
          [
            "`Note`",
            "Text",
            "255",
            "Note"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "If there is no map open, the tool offers to create one. Accept the prompt, and the new map is created before the layer is added.",
          "Because the name, location, and schema are all decided automatically, these layers suit sketching, tracing, and scratch work. For data that will be delivered, create the layer with a proper name and schema from the start."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Open the map you want to draw in, so the template layer picks up its coordinate system.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Point Layer**.",
          "If prompted that no map is open, choose to create one.",
          "The `Point_Template` layer appears in the **Contents** pane, ready to edit.",
          "Start digitising. Fill in `Name`, `ID`, and `Note` as you go, or later in the attribute table."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "create-point-layer",
      "quick-template-line",
      "quick-template-polygon",
      "add-multiple-fields"
    ]
  },
  {
    slug: "quick-template-polygon",
    group: "datacreation",
    name: "Quick Template — Polygon Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Polygon Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters."
      }
    ],
    summary: {
      km: "បង្កើតស្រទាប់ពហុកោណដែលរួចរាល់សម្រាប់គូស ក្នុង geodatabase លំនាំដើមរបស់គម្រោង ជាមួយស្គីម៉ាបីវាលថេរ រួចបន្ថែមទៅផែនទី ដោយមិនចាំបាច់បំពេញផ្ទាំងណាមួយ។",
      en: "Creates a ready-to-digitise polygon layer in the project's default geodatabase with a fixed three-field schema, and adds it to the active map — with no dialog to complete."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Create Polygon Layer](CreatePolygonLayer.md) asks you to choose a workspace, a name, a coordinate system, and a field list, this tool decides all of that for you. Use it when you need somewhere to draw right now."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**No parameters, no dialog.** Clicking the button creates the layer and adds it to the map immediately.",
          "The layer is created in the **project's default geodatabase**, named `Polygon_Template`. If that name is taken, a numeric suffix is appended, so repeated clicks produce `Polygon_Template`, `Polygon_Template_1`, and so on rather than failing.",
          "The coordinate system is taken from the **active map**. If there is no active map, WGS 84 is used as a fallback.",
          "Every template layer gets the same three fields: This schema is fixed and cannot be changed from the button. To choose your own fields, use [Create Polygon Layer](CreatePolygonLayer.md) instead."
        ]
      },
      {
        type: "table",
        head: [
          "Field",
          "Type",
          "Length",
          "Alias"
        ],
        rows: [
          [
            "`Name`",
            "Text",
            "255",
            "Name"
          ],
          [
            "`ID`",
            "Long integer",
            "—",
            "ID"
          ],
          [
            "`Note`",
            "Text",
            "255",
            "Note"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "If there is no map open, the tool offers to create one. Accept the prompt, and the new map is created before the layer is added.",
          "Because the name, location, and schema are all decided automatically, these layers suit sketching, tracing, and scratch work. For data that will be delivered, create the layer with a proper name and schema from the start."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Open the map you want to draw in, so the template layer picks up its coordinate system.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Polygon Layer**.",
          "If prompted that no map is open, choose to create one.",
          "The `Polygon_Template` layer appears in the **Contents** pane, ready to edit.",
          "Start digitising. Fill in `Name`, `ID`, and `Note` as you go, or later in the attribute table."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "create-polygon-layer",
      "quick-template-point",
      "quick-template-line",
      "add-multiple-fields"
    ]
  },
  {
    slug: "add-raster-to-map",
    group: "datamanagement",
    name: "Add Raster To Map",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Add Raster To Map",
    actsOn: [],
    summary: {
      km: "បន្ថែម raster ទៅផែនទី ដោយអាចកាត់តាមវិសាលភាព ឬតាមពហុកោណព្រំដែនជាមុន ជាមួយការមើលជាមុនផ្ទាល់ និងការគ្រប់គ្រងទម្រង់លទ្ធផល និង NoData ពេញលេញ។",
      en: "Adds a raster to the map, optionally cropping it to an extent or a boundary polygon first, with a live preview and full control over the output format and NoData handling."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "**Input Raster** is browsed to rather than picked from the map, so a raster need not already be in the project.",
          "**Processing Mode** determines whether the raster is added as-is or cropped on the way in.",
          "The **Extent / Boundary Settings** section offers several ways to define the crop: **Reset** returns the extent to its default and **Refresh** re-reads it."
        ]
      },
      {
        type: "table",
        head: [
          "Control",
          "Defines the crop from"
        ],
        rows: [
          [
            "**XMin** / **YMin** / **XMax** / **YMax**",
            "Typed coordinates"
          ],
          [
            "**Use Map View**",
            "The current map extent"
          ],
          [
            "**Use Raster Extent**",
            "The raster's own full extent"
          ],
          [
            "**Use drawn boundary from preview**",
            "A boundary drawn in the preview pane"
          ],
          [
            "**Use selected polygons only**",
            "The polygons currently selected in the map"
          ]
        ]
      },
      {
        type: "list",
        items: [
          {
            text: "Two options refine a polygon-based crop:",
            items: [
              "**Dissolve boundary before crop** merges the boundary polygons into one before cropping, which avoids a ragged result where several polygons abut.",
              "**Maintain clipping extent from boundary** keeps the output extent tied to the boundary rather than snapping out to the raster grid."
            ]
          },
          "**Use input raster NoData value** carries the source raster's NoData value into the output, so transparent areas stay transparent rather than becoming black or zero.",
          "**Output Settings** control where and how the result is written — **Project geodatabase**, **Same as source**, or **Custom** — together with an **Output name** and a **Format**.",
          {
            text: "Three options govern what happens on a repeat run:",
            items: [
              "**Overwrite if output already exists** replaces an existing output file.",
              "**Replace existing layer in map with same name** swaps the layer in the map rather than adding a duplicate.",
              "**Also add original raster to map** adds the uncropped source alongside the result, for comparison."
            ]
          },
          "**Display NoData as transparent** sets the layer's display so NoData areas show through. This is a display property, not a change to the data.",
          "The **Preview** pane, with its **100%** and **1:1** controls, shows the raster and any boundary before processing. Use it — cropping the wrong extent from a large raster is slow to discover and slow to undo."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Input Raster",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The raster file to add. Browsed to rather than picked from the map."
              }
            ]
          },
          {
            name: "Processing Mode",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Whether the raster is added as-is or cropped."
              }
            ]
          },
          {
            name: "XMin** / **YMin** / **XMax** / **YMax",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The crop extent, as typed coordinates."
              }
            ]
          },
          {
            name: "Use Map View",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Sets the extent from the current map view."
              }
            ]
          },
          {
            name: "Use Raster Extent",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Sets the extent from the raster's own extent."
              }
            ]
          },
          {
            name: "Reset** / **Refresh",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Resets the extent to default; re-reads the current extent."
              }
            ]
          },
          {
            name: "Use drawn boundary from preview",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Crops to a boundary drawn in the preview pane."
              }
            ]
          },
          {
            name: "Use selected polygons only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Crops to the polygons currently selected in the map."
              }
            ]
          },
          {
            name: "Dissolve boundary before crop",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Merges the boundary polygons into one before cropping."
              }
            ]
          },
          {
            name: "Maintain clipping extent from boundary",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Keeps the output extent tied to the boundary rather than the raster grid."
              }
            ]
          },
          {
            name: "Use input raster NoData value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Carries the source NoData value into the output."
              }
            ]
          },
          {
            name: "Project geodatabase** / **Same as source** / **Custom",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The output location."
              }
            ]
          },
          {
            name: "Output name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The name of the output raster."
              }
            ]
          },
          {
            name: "Format",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The output raster format."
              }
            ]
          },
          {
            name: "Overwrite if output already exists",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces an existing output file."
              }
            ]
          },
          {
            name: "Replace existing layer in map with same name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Swaps the layer in the map instead of adding a duplicate."
              }
            ]
          },
          {
            name: "Also add original raster to map",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds the uncropped source alongside the result."
              }
            ]
          },
          {
            name: "Display NoData as transparent",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Sets the layer display so NoData areas are transparent."
              }
            ]
          },
          {
            name: "Preview",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Shows the raster and boundary before processing."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Add Raster To Map**.",
          "Browse to the raster in **Input Raster**.",
          "Set **Processing Mode** according to whether the raster needs cropping.",
          "To crop to a boundary, select the boundary polygons in the map and check **Use selected polygons only**, then check **Dissolve boundary before crop**.",
          "To crop to an extent instead, click **Use Map View**, or type the coordinates.",
          "Check **Use input raster NoData value** and **Display NoData as transparent** so the edges stay clean.",
          "Check the **Preview** pane and confirm the boundary is where you expect.",
          "Set the output location, **Output name**, and **Format**.",
          "Check **Replace existing layer in map with same name** if you are re-running.",
          "Run the tool."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-google-satellite-layer",
      "clip-basemap-by-boundary",
      "elevation-profile-from-line-path",
      "spot-height"
    ]
  },
  {
    slug: "apply-excel-edits",
    group: "datamanagement",
    name: "Apply Excel Edits",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: null,
    actsOn: [],
    summary: {
      km: "អាន workbook ដែលបង្កើតដោយ Edit in Excel រួចរុញតម្លៃដែលបានកែ ត្រឡប់ចូល feature class ដើមវិញ។",
      en: "Reads the workbook produced by Edit in Excel and pushes the changed values back into the original feature class."
    },
    body: [
      {
        type: "paragraph",
        text: "This is step 3 of the Excel round trip. It cannot be used on its own — it requires an active editing session started by [Edit in Excel](EditInExcel.md), and reports *\"No active Excel editing session found.\"* otherwise."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Save and close the workbook in Excel before applying.** An open workbook may be locked or hold unsaved changes, and the apply step reads the file from disk.",
          "Rows are matched back to features by `OBJECTID`. If the workbook's columns were added, removed, or reordered, or the `OBJECTID` values were altered, the match fails or — worse — writes values to the wrong features. Edit values in place only.",
          "Two [Settings](ExcelEditorSettings.md) options govern how the apply step behaves, and both are worth setting before you rely on this tool:"
        ]
      },
      {
        type: "table",
        head: [
          "Setting",
          "Effect"
        ],
        rows: [
          [
            "**Create backup before applying edits**",
            "Backs up the feature class first. Leave this on — it is the only straightforward way back from a bad apply."
          ],
          [
            "**Skip invalid rows (otherwise abort all)**",
            "Decides whether a bad row is skipped or the whole apply is abandoned"
          ]
        ]
      },
      {
        type: "list",
        items: [
          {
            text: "**Skip invalid rows** is a real trade-off: Leave it unchecked when the edit must be all-or-nothing; check it when a few known-bad rows should not block a large legitimate edit.",
            items: [
              "**Checked** — valid rows are written and invalid ones are reported and skipped. You get most of the edit, but the data ends up partly updated, and you must act on the skipped rows.",
              "**Unchecked** — the entire apply aborts on the first invalid row, leaving the feature class exactly as it was. Nothing is half-done, but nothing is applied either."
            ]
          },
          "Review the report after the run. It states what was applied and what was skipped."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Input",
        showType: false,
        blocks: [
          {
            type: "paragraph",
            text: "This tool has no dialog. It acts on the active Excel editing session, using the options in [Settings](ExcelEditorSettings.md)."
          }
        ],
        rows: [
          {
            name: "Active editing session",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The session started by [Edit in Excel](EditInExcel.md). Required."
              }
            ]
          },
          {
            name: "Create backup before applying edits",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "From [Settings](ExcelEditorSettings.md). Backs up the feature class first."
              }
            ]
          },
          {
            name: "Skip invalid rows (otherwise abort all)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "From [Settings](ExcelEditorSettings.md). Skips bad rows, or aborts the whole apply."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm **Create backup before applying edits** is enabled in [Settings](ExcelEditorSettings.md).",
          "In Excel, save the workbook and close it.",
          "In ArcGIS Pro, on the **KGA Toolbox** tab, in the **Necessary Edit Tools** group, open the **Edit in Excel** menu and click **Apply Excel Edits**.",
          "Read the report. Note any rows that were skipped.",
          "Check the attribute table and confirm the values are as intended.",
          "If rows were skipped, correct them in the workbook and apply again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "edit-in-excel",
      "excel-editor-settings",
      "edit-table"
    ]
  },
  {
    slug: "batch-add-field",
    group: "datamanagement",
    name: "Batch Add Field",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Attribute ▸ Batch Add Field",
    actsOn: [],
    summary: {
      km: "បន្ថែមវាលដូចគ្នាទៅ feature class និងតារាងជាច្រើនក្នុងពេលតែមួយ។",
      en: "Adds the same field to many feature classes and tables at once."
    },
    body: [
      {
        type: "paragraph",
        text: "Adding one field to twenty layers through the **Fields** view takes twenty passes. This tool does it in one, which matters when a schema change has to reach a whole dataset consistently."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Features or Tables** accepts both feature layers and standalone tables, and they may be mixed in one run.",
          "One field is added per run. To add several fields, run the tool once per field — or use [Add multiple Fields](../VectorIQ/AddMultipleFields.md), which adds a whole set of fields to one layer in a single pass."
        ]
      },
      {
        type: "table",
        head: [
          "Need",
          "Tool"
        ],
        rows: [
          [
            "One field → many layers",
            "**Batch Add Field** (this tool)"
          ],
          [
            "Many fields → one layer",
            "[Add multiple Fields](../VectorIQ/AddMultipleFields.md)"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "If the field name already exists in one of the inputs, that input is reported and skipped rather than overwritten.",
          "**Choose Field Type** offers the six common types. Text field length is not a parameter here, so the default length applies; use [Add multiple Fields](../VectorIQ/AddMultipleFields.md) when the text length must be specified.",
          "Field names must satisfy the rules of the target workspace. Shapefile field names are limited to 10 characters, so a longer name will fail for shapefile inputs while succeeding for geodatabase ones."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Features or Tables",
            optional: false,
            type: "Feature Layer; Table View (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more feature layers or standalone tables to receive the new field. Types may be mixed."
              }
            ]
          },
          {
            name: "Enter New Field Name",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the field to add. Must satisfy the naming rules of every target workspace — 10 characters maximum for shapefiles."
              }
            ]
          },
          {
            name: "Choose Field Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The data type of the new field."
              },
              {
                type: "list",
                items: [
                  "`TEXT`",
                  "`LONG`",
                  "`SHORT`",
                  "`FLOAT`",
                  "`DOUBLE`",
                  "`DATE`"
                ]
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Attribute** menu and click **Batch Add Field**.",
          "In **Input Features or Tables**, select every layer and table that needs the field.",
          "Type the field name in **Enter New Field Name**. Keep it to 10 characters if any input is a shapefile.",
          "Set **Choose Field Type**.",
          "Click **Run**, then check the messages for inputs that were skipped because the field already existed."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-multiple-fields",
      "add-value-to-fields",
      "default-value-filler",
      "rename-field",
      "database-structure-builder"
    ]
  },
  {
    slug: "boundary-xy-to-excel",
    group: "datamanagement",
    name: "Boundary XY to Excel",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Attribute ▸ Boundary XY to Excel",
    actsOn: [],
    summary: {
      km: "បំបែកព្រំដែនពហុកោណជាជួរដេកមួយក្នុងមួយកូអរដោនេកំពូល រួចបើកលទ្ធផលភ្លាមក្នុង Microsoft Excel ជា CSV ឬ XLSX។",
      en: "Explodes polygon boundaries into a row per vertex coordinate and opens the result immediately in Microsoft Excel, as CSV or XLSX."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Coordinate Listing](../Cadastral/CoordinateListing.md) writes a file you then go and find, this tool hands the coordinates straight to Excel — the fastest route from a parcel on screen to a coordinate table you can work on."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Anchor field** is required. It is the identifier copied onto every vertex row, and it is what lets the rows be grouped back into parcels. It is always included in the output, whatever else you select.",
          "Attribute inclusion is controlled in two steps: **Attribute Inclusion** sets the broad policy, and **Custom Field Selection** picks individual fields when you want a specific subset.",
          "**Coordinate Options** hold the choices that matter for how the table reads:"
        ]
      },
      {
        type: "table",
        head: [
          "Option",
          "Effect"
        ],
        rows: [
          [
            "**Decimal precision**",
            "Decimal places written for each coordinate"
          ],
          [
            "**Repeat first vertex as last row (close ring)**",
            "Writes the start vertex again at the end, so the ring closes explicitly"
          ],
          [
            "**Remove duplicate consecutive vertices**",
            "Drops repeated points"
          ],
          [
            "**Include Vertex Sequence column**",
            "Numbers the vertices in traversal order"
          ],
          [
            "**Include interior rings (holes)**",
            "Includes the vertices of holes as well as the outer boundary"
          ],
          [
            "**Include centroid coordinate per feature**",
            "Adds the parcel centroid"
          ],
          [
            "**Include ring direction (CW / CCW) column**",
            "Records whether each ring is clockwise or anticlockwise"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Repeat first vertex as last row** is a format decision, not a cosmetic one. A survey table that must close explicitly needs it; one that will be re-imported to rebuild the polygon usually should not have it, since the duplicate row creates a repeated vertex.",
          "**Include ring direction** is a diagnostic worth using on suspect data. Ring direction encodes whether a ring is an outer boundary or a hole; an unexpected direction points to a geometry problem.",
          "**Include interior rings (holes)** must be checked for parcels with internal exclusions, or the excluded areas are silently missing from the coordinate table.",
          "**Output Format** offers **CSV (fastest)** or **XLSX (better formatting)**. Choose CSV for a large layer or for onward import; XLSX when the table is the deliverable.",
          "Microsoft Excel must be installed for the file to open automatically."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Anchor field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Required. The identifier copied onto every vertex row. Always included in the output."
              }
            ]
          },
          {
            name: "Attribute Inclusion",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The policy for which attribute fields are carried into the output."
              }
            ]
          },
          {
            name: "Custom Field Selection",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Individual fields to include. The anchor field is included automatically."
              }
            ]
          },
          {
            name: "Decimal precision",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The number of decimal places written for each coordinate."
              }
            ]
          },
          {
            name: "Repeat first vertex as last row (close ring)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the start vertex again at the end of each ring."
              }
            ]
          },
          {
            name: "Remove duplicate consecutive vertices",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Drops repeated consecutive points."
              }
            ]
          },
          {
            name: "Include Vertex Sequence column",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds a column numbering the vertices in traversal order."
              }
            ]
          },
          {
            name: "Include interior rings (holes)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Includes hole vertices as well as the outer boundary."
              }
            ]
          },
          {
            name: "Include centroid coordinate per feature",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds the centroid coordinate for each feature."
              }
            ]
          },
          {
            name: "Include ring direction (CW / CCW) column",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Records each ring's direction — a useful geometry diagnostic."
              }
            ]
          },
          {
            name: "CSV (fastest)** / **XLSX (better formatting)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The output format."
              }
            ]
          },
          {
            name: "OK",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates the table and opens it in Excel."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Select the polygon layer in the **Contents** pane. To export a subset, select those features on the map first.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Attribute** menu and click **Boundary XY to Excel**.",
          "Set **Anchor field** to the parcel number or other identifier.",
          "Set the attribute inclusion policy, and pick specific fields in **Custom Field Selection** if needed.",
          "Under **Coordinate Options**, set **Decimal precision** to match the survey's real precision.",
          "Check **Include Vertex Sequence column** so the traversal order is explicit.",
          "Check **Include interior rings (holes)** if any parcel has an internal exclusion.",
          "Check **Repeat first vertex as last row** only if the table format requires an explicit closing row.",
          "Choose **CSV** for a large layer or **XLSX** for a deliverable, then click **OK**. Excel opens with the result."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "coordinate-listing",
      "polygon-to-boundary-point",
      "display-point-xy-and-id",
      "id-based-csv-exporter",
      "edit-in-excel"
    ]
  },
  {
    slug: "copy-features",
    group: "datamanagement",
    name: "Copy Features",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Copy Features",
    actsOn: [],
    summary: {
      km: "ចម្លងលក្ខណៈទៅ feature class ថ្មី ឬបន្ថែមទៅស្រទាប់ដែលមានស្រាប់ ដោយអាចប្តូរប្រភេទធរណីមាត្រតាមផ្លូវ — centroid កំពូល ខ្សែព្រំដែន ឬចំណុចចុង។",
      en: "Copies features to a new feature class or appends them to an existing layer, optionally deriving a different geometry type on the way — centroids, vertices, boundary lines, or endpoint markers."
    },
    body: [
      {
        type: "paragraph",
        text: "This is more than a copy: the geometry conversion options make it a quick way to derive points from polygons or lines without running a separate conversion tool."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The **Source** section reports what will be copied — **Layer**, **Geometry**, **Features**, and **Selected** counts — so the scope is visible before you run. **Use only selected features** limits the copy to the current selection.",
          "There are two destinations, and they behave differently: Appending to an existing layer adds rows to data you already have; there is no undo short of deleting the appended features. Copy to a new feature class when in doubt."
        ]
      },
      {
        type: "table",
        head: [
          "Destination",
          "Behaviour"
        ],
        rows: [
          [
            "**Copy to New Feature Class**",
            "Creates a new dataset. **Output location** offers **Project default geodatabase**, **Same as source location**, or **Specify new output location...**, with an **Output name**."
          ],
          [
            "**Copy to Existing Layer**",
            "Appends into the **Target layer**. The target's schema must be able to accept the incoming features."
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Geometry conversion options** are the useful part. Rather than copying geometry unchanged, the output can be derived from it: **From polygons:** **From lines:**"
        ]
      },
      {
        type: "table",
        head: [
          "Option",
          "Produces"
        ],
        rows: [
          [
            "**Center point (centroid)**",
            "One point per polygon"
          ],
          [
            "**Vertex points**",
            "One point per boundary vertex"
          ],
          [
            "**Single closed boundary line**",
            "One closed line per polygon"
          ]
        ]
      },
      {
        type: "table",
        head: [
          "Option",
          "Produces"
        ],
        rows: [
          [
            "**Split lines at vertices**",
            "One line per segment"
          ],
          [
            "**Start point** / **End point** / **Midpoint**",
            "A single marker point per line"
          ],
          [
            "**Vertices**",
            "One point per vertex"
          ],
          [
            "**Both start and end**",
            "Two points per line"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Connect by selection order** and **Connect by ObjectID ascending** decide the order points are joined in when building a line. This matters: selection order lets you control the traverse by clicking the points in sequence, while ObjectID order follows the stored feature order, which may not be the geographic order at all. Use selection order when building a boundary from surveyed points.",
          "**Calculate X and Y coordinate** adds and populates coordinate fields on a point output, saving a separate calculate-geometry step."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer:** / **Geometry:** / **Features:** / **Selected:",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Read-only summary of the source layer and its feature counts."
              }
            ]
          },
          {
            name: "Use only selected features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Copies only the features currently selected in the map."
              }
            ]
          },
          {
            name: "Copy to New Feature Class",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Creates a new dataset for the copy."
              }
            ]
          },
          {
            name: "Output location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "**Project default geodatabase**, **Same as source location**, or **Specify new output location...**."
              }
            ]
          },
          {
            name: "Browse...",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Browses for a custom output location."
              }
            ]
          },
          {
            name: "Output name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The name of the new feature class."
              }
            ]
          },
          {
            name: "Copy to Existing Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Appends the features into an existing layer instead."
              }
            ]
          },
          {
            name: "Target layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer that receives the appended features."
              }
            ]
          },
          {
            name: "Center point (centroid)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Polygon input: one point per polygon centroid."
              }
            ]
          },
          {
            name: "Vertex points",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Polygon input: one point per boundary vertex."
              }
            ]
          },
          {
            name: "Single closed boundary line",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Polygon input: one closed line per polygon."
              }
            ]
          },
          {
            name: "Split lines at vertices",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Line input: one line per segment."
              }
            ]
          },
          {
            name: "Start point** / **End point** / **Midpoint",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Line input: a single marker point per line."
              }
            ]
          },
          {
            name: "Vertices",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Line input: one point per vertex."
              }
            ]
          },
          {
            name: "Both start and end",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Line input: two points per line."
              }
            ]
          },
          {
            name: "Connect by selection order",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Joins points in the order they were selected."
              }
            ]
          },
          {
            name: "Connect by ObjectID ascending",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Joins points in stored feature order."
              }
            ]
          },
          {
            name: "Calculate X and Y coordinate",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds and populates coordinate fields on a point output."
              }
            ]
          },
          {
            name: "Run",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Performs the copy."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Copy features to a new feature class"
      },
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the source layer. To copy a subset, select those features on the map.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Copy Features**.",
          "Check the **Source** summary, and check **Use only selected features** if appropriate.",
          "Choose **Copy to New Feature Class**, set the **Output location** and **Output name**.",
          "Click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "Derive centroids from polygons"
      },
      {
        type: "steps",
        items: [
          "Open the tool with the polygon layer selected.",
          "Choose **Copy to New Feature Class** and set the output.",
          "Select **Center point (centroid)**.",
          "Check **Calculate X and Y coordinate** if the coordinates are needed as attributes.",
          "Click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "Build a line through surveyed points"
      },
      {
        type: "steps",
        items: [
          "Select the points on the map, clicking them in the order the line should follow.",
          "Open the tool and check **Use only selected features**.",
          "Choose **Connect by selection order**, not **Connect by ObjectID ascending**.",
          "Set the output and click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "polygon-to-central-point",
      "polygon-to-boundary-point",
      "generate-line-vertices",
      "point-to-polygon",
      "batch-export"
    ]
  },
  {
    slug: "detect-overlap-across-layer",
    group: "datamanagement",
    name: "Detect Overlap Across Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Feature ▸ Detect Overlap Across Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layers selected in the **Contents** pane."
      }
    ],
    summary: {
      km: "រកផ្ទៃពហុកោណដែលត្រួតគ្នារវាងស្រទាប់ពីរ ឬច្រើនដែលបានជ្រើស រួចបង្កើតស្រទាប់កំហុសសម្រាប់លទ្ធផល។",
      en: "Finds polygon areas that overlap between two or more selected layers, creating an error layer for the results."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. It acts on the layers selected in the **Contents** pane, so select every layer to be compared before clicking.",
          "Overlaps found between the layers are written to an error layer named **Overlap Across Layer Errors**.",
          "Cross-layer overlap is usually a different question from within-layer overlap. A parcel layer must not overlap itself, but a building layer legitimately sits inside a parcel layer. Use this tool where two layers describe the *same* kind of thing — two communes' parcel sets meeting at a shared border, or a new survey against the existing cadastre.",
          "For faults within a single layer, use [Detect Overlap/Gap](DetectOverlapGap.md), which also finds gaps.",
          "No geodatabase topology is created, so this works on shapefiles and on data outside a feature dataset. The trade-off is that there is no error inspector and no way to mark an overlap as an accepted exception — for that, use [Boundary Overlap](../TopologyCheck/BoundaryOverlapCheck.md)."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the polygon layers to compare — hold Ctrl to select more than one.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Feature** menu and click **Detect Overlap Across Layer**.",
          "Wait for the run to finish. The **Overlap Across Layer Errors** layer is added to the map.",
          "Work through the reported overlaps, deciding in each case which layer holds the correct geometry."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "detect-overlap-gap",
      "boundary-overlap-check",
      "parcel-overlap-check",
      "boundary-conflict-check"
    ]
  },
  {
    slug: "detect-overlap-gap",
    group: "datamanagement",
    name: "Detect Overlap/Gap",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Feature ▸ Detect Overlap/Gap",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane."
      }
    ],
    summary: {
      km: "រកផ្ទៃត្រួតគ្នា និងចន្លោះទទេរវាងលក្ខណៈក្នុងស្រទាប់តែមួយ ដោយសម្គាល់លក្ខណៈមានបញ្ហា និងបង្កើតស្រទាប់កំហុសសម្រាប់វា។",
      en: "Finds overlapping areas and gaps between features within a single layer, flagging the offending features and creating error layers for them."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it as a first-pass quality check on a parcel layer before building a topology."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. It acts on the layer selected in the **Contents** pane.",
          "Two kinds of fault are found in one pass, and each gets its own error layer:"
        ]
      },
      {
        type: "table",
        head: [
          "Error layer",
          "Records"
        ],
        rows: [
          [
            "**Overlap Errors**",
            "Areas claimed by more than one feature"
          ],
          [
            "**Gap Errors**",
            "Areas enclosed by features but belonging to none"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "A flag field — `KGA Overlap Flag` — is written onto the input layer, marking each feature as an **Overlap Feature** or a **Regular Feature**, so the layer itself can be symbolised or queried by fault status.",
          "Gaps are the fault that is easy to miss visually. An overlap often shows as a darker patch where two symbols stack; a gap is a thin sliver of background that reads as a boundary line. This tool finds them geometrically rather than by eye.",
          "This tool works **within** one layer. For faults *between* two layers, use [Detect Overlap Across Layer](DetectOverlapAcrossLayer.md)."
        ]
      },
      {
        type: "table",
        head: [
          "Scope",
          "Tool"
        ],
        rows: [
          [
            "Within one layer",
            "**Detect Overlap/Gap** (this tool)"
          ],
          [
            "Between layers",
            "[Detect Overlap Across Layer](DetectOverlapAcrossLayer.md)"
          ],
          [
            "Persistent, reviewable topology",
            "[Topology Check](../TopologyCheck/TopologyCheck.md)"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Unlike [Topology Check](../TopologyCheck/TopologyCheck.md), no geodatabase topology is created, so this works on shapefiles and on data outside a feature dataset — but there is no error inspector and no way to mark a fault as an accepted exception."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the polygon layer to check.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Feature** menu and click **Detect Overlap/Gap**.",
          "Wait for the run to finish. The **Overlap Errors** and **Gap Errors** layers are added to the map.",
          "Work through the **Overlap Errors** layer first — an overlap means two records claim the same ground.",
          "Then work through **Gap Errors**. Decide for each whether it is a genuine unrecorded area or a digitising error to be closed.",
          "Use the `KGA Overlap Flag` field on the input layer to symbolise or query the flagged features."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "detect-overlap-across-layer",
      "parcel-overlap-check",
      "topology-check",
      "shape-quality-check",
      "find-duplicate"
    ]
  },
  {
    slug: "edit-table",
    group: "datamanagement",
    name: "Edit Table",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Necessary Edit Tools ▸ Edit in Excel ▸ Edit Table",
    actsOn: [],
    summary: {
      km: "បើកកម្មវិធីកែតារាងគុណលក្ខណៈដាច់ដោយឡែក ដែលមានការជ្រើសវាល ការត្រងជួរដេក និងសកម្មភាពនាំចេញដាច់ដោយឡែកសម្រាប់តារាង និងលក្ខណៈ។",
      en: "Opens a dedicated attribute table editor with field selection, row filtering, and separate export actions for the table and the features."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "The editor is a standalone window rather than the docked attribute table, so it can be sized and positioned independently and kept open beside the map.",
          "**Display Data** controls which fields are shown. **Field**, with **Select All** and **Clear**, chooses them — useful on a wide table where only a handful of fields are being edited.",
          "**Query Feature?** enables **Query**, which filters the displayed rows. The label states the scope plainly: it filters *the displayed rows*, not the layer. Unlike [Filter Selection](FilterSelection.md), which applies a definition query affecting the whole project, this filter is local to the editor window.",
          "Edits are staged. **Save Edit** commits them and **Revert** discards them, so a mistaken change can be undone as long as it has not been saved.",
          "Two export actions do different things:"
        ]
      },
      {
        type: "table",
        head: [
          "Action",
          "Writes"
        ],
        rows: [
          [
            "**Export Table**",
            "The attribute rows, without geometry"
          ],
          [
            "**Export Feature**",
            "The features, geometry included"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Refresh** re-reads the layer, picking up changes made elsewhere in the project.",
          "For bulk attribute entry, Excel is often faster — see [Edit in Excel](EditInExcel.md), which round-trips the table through a spreadsheet."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer whose attribute table is opened."
              }
            ]
          },
          {
            name: "Refresh",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Re-reads the layer, picking up external changes."
              }
            ]
          },
          {
            name: "Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The fields to display. **Select All** and **Clear** toggle the whole list."
              }
            ]
          },
          {
            name: "Query Feature?",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Enables the row filter."
              }
            ]
          },
          {
            name: "Query",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The filter expression limiting the displayed rows. Local to this window."
              }
            ]
          },
          {
            name: "Data Display",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The editable grid of rows."
              }
            ]
          },
          {
            name: "Save Edit",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Commits the staged edits."
              }
            ]
          },
          {
            name: "Revert",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Discards the staged edits."
              }
            ]
          },
          {
            name: "Export Table",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Exports the attribute rows, without geometry."
              }
            ]
          },
          {
            name: "Export Feature",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Exports the features, including geometry."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Necessary Edit Tools** group, open the **Edit in Excel** menu's parent group and click **Edit Table**.",
          "Set **Layer**.",
          "Under **Field**, click **Clear** and then select only the fields you need, to reduce the grid to a workable width.",
          "To work on a subset, check **Query Feature?** and enter a **Query**.",
          "Edit the values in the grid.",
          "Click **Save Edit** to commit, or **Revert** to discard.",
          "Use **Export Table** or **Export Feature** if the result needs to be written out."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "edit-in-excel",
      "select-to-enter-value",
      "add-value-to-fields",
      "filter-selection"
    ]
  },
  {
    slug: "edit-in-excel",
    group: "datamanagement",
    name: "Edit in Excel",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Necessary Edit Tools ▸ Edit in Excel ▸ Edit in Excel",
    actsOn: [],
    summary: {
      km: "នាំចេញតារាងគុណលក្ខណៈរបស់ស្រទាប់ដែលបានជ្រើស ទៅជា workbook Excel សម្រាប់កែសម្រួល។ ការកែត្រូវរុញត្រឡប់ចូល feature class វិញដោយ Apply Excel Edits។",
      en: "Exports the selected feature layer's attribute table to an Excel workbook for editing. The changes are pushed back to the feature class afterwards with Apply Excel Edits."
    },
    body: [
      {
        type: "paragraph",
        text: "This is a **three-button round trip**, and the buttons must be used in order:"
      },
      {
        type: "table",
        head: [
          "Step",
          "Button"
        ],
        rows: [
          [
            "1",
            "**Edit in Excel** (this tool) — export the table"
          ],
          [
            "2",
            "Edit the workbook in Excel and save it"
          ],
          [
            "3",
            "[Apply Excel Edits](ApplyExcelEdits.md) — push the changes back"
          ]
        ]
      },
      {
        type: "paragraph",
        text: "[Settings](ExcelEditorSettings.md) configures how both ends of the round trip behave."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**A feature layer must be selected in the Contents pane.** The button is governed by the `esri_mapping_featureLayerSelectedCondition` condition and is disabled otherwise, with the tooltip *\"Select a feature layer in the Contents pane to enable this tool.\"*",
          "The workbook is written to the export location configured in [Settings](ExcelEditorSettings.md), or to the system temp directory if none is set. For work spanning more than one session, set a real folder — a file in the temp directory can be cleared by the operating system.",
          "**Do not add, delete, or reorder columns in the workbook**, and do not change the `OBJECTID` values. The apply step matches rows back to features by `OBJECTID`; altering the structure breaks that correspondence. Edit the values in place only.",
          "[Settings](ExcelEditorSettings.md) can show the `OBJECTID` column as read-only and apply domain value dropdowns in Excel, which keeps entry within the permitted values.",
          "The **Max records** setting caps how many rows are exported. Check it before exporting a large layer — a cap set below the layer's row count means you are editing only part of the data.",
          "Only one editing session is tracked at a time. Complete or abandon a round trip before starting another."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Input",
        showType: false,
        blocks: [
          {
            type: "paragraph",
            text: "This tool has no dialog. It acts on the Contents-pane layer selection, using the options in [Settings](ExcelEditorSettings.md)."
          }
        ],
        rows: [
          {
            name: "Contents-pane selection",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The feature layer to export. One feature layer must be selected."
              }
            ]
          },
          {
            name: "Export location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "From [Settings](ExcelEditorSettings.md). Defaults to the system temp directory."
              }
            ]
          },
          {
            name: "Show OBJECTID column",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "From [Settings](ExcelEditorSettings.md)."
              }
            ]
          },
          {
            name: "Apply domain value dropdowns in Excel",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "From [Settings](ExcelEditorSettings.md)."
              }
            ]
          },
          {
            name: "Max records",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "From [Settings](ExcelEditorSettings.md). `0` means unlimited."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Open [Settings](ExcelEditorSettings.md) and set a real **Export Location**. Confirm **Max records** is `0` or above the layer's row count.",
          "In the **Contents** pane, select the feature layer.",
          "On the **KGA Toolbox** tab, in the **Necessary Edit Tools** group, open the **Edit in Excel** menu and click **Edit in Excel**.",
          "The workbook is created and opened. Edit the attribute values in place.",
          "Do not add, remove, or reorder columns, and leave the `OBJECTID` values untouched.",
          "Save and close the workbook.",
          "Return to ArcGIS Pro and click [Apply Excel Edits](ApplyExcelEdits.md)."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "apply-excel-edits",
      "excel-editor-settings",
      "edit-table",
      "boundary-xy-to-excel"
    ]
  },
  {
    slug: "export-to-cad",
    group: "datamanagement",
    name: "Export to CAD",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Conversion Tool ▸ Export to CAD",
    actsOn: [],
    summary: {
      km: "នាំចេញស្រទាប់ដែលបានជ្រើសក្នុងផ្ទាំង Contents ទៅជាឯកសារ DWG, DXF ឬ DGN ដោយបម្លែងស្លាកដែលមើលឃើញទៅជា annotation ជាមុន ដើម្បីឱ្យអក្សរនៅគង់វង្ស។",
      en: "Exports the layers selected in the Contents pane to a DWG, DXF, or DGN file, converting each layer's visible labels to annotation first so the text survives the export."
    },
    body: [
      {
        type: "paragraph",
        text: "A plain CAD export drops labels entirely — labels are a dynamic rendering property, and CAD has no equivalent. This tool converts them to annotation features beforehand, so the text arrives in the drawing."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Select the layers in the Contents pane before clicking.** The tool exports the current Contents-pane layer selection; there is no layer list on a dialog. Only feature layers are exported.",
          "Clicking the button opens a **Save As** dialog for the output file. The format follows the extension you choose:"
        ]
      },
      {
        type: "table",
        head: [
          "Extension",
          "CAD version written"
        ],
        rows: [
          [
            "`.dwg` (default)",
            "AutoCAD 2018 (`DWG_R2018`)"
          ],
          [
            "`.dxf`",
            "DXF 2018 (`DXF_R2018`)"
          ],
          [
            "`.dgn`",
            "MicroStation V8 (`DGN_V8`)"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Label-to-annotation conversion happens per layer, and only where it is needed.** A layer is inspected first, and is converted only if it is visible, has labelling enabled, and has at least one enabled label class. A layer with labelling switched off is exported without a conversion step.",
          "**The annotation scale matters, and it is taken from the map.** Annotation is scale-dependent — once converted, text size is fixed relative to ground units. The scale is resolved in this order: 1. The map's **reference scale**, if one is set. 2. The current **camera scale** — that is, the scale the map happens to be displayed at. 3. `1:1000`, as a fallback. This is the one thing to get right before exporting. If the map has no reference scale, the text in the CAD file is sized for whatever zoom level you happened to be at when you clicked. **Set the map's reference scale to the intended plot scale first**, and the annotation will be sized correctly.",
          "Conversion work is done in a temporary file geodatabase named `cad_export_temp.gdb`, which is deleted afterwards. The annotation feature classes are intermediate products, not additions to your project.",
          "The tool reports how many annotation feature classes it created, along with a log of what happened per layer.",
          "The tool reports an error if there is no active map view, or if no feature layers are selected."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Input",
        showType: false,
        blocks: [
          {
            type: "paragraph",
            text: "This tool has no geoprocessing dialog. It acts on the Contents-pane layer selection and prompts for one output path."
          }
        ],
        rows: [
          {
            name: "Contents-pane selection",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The feature layers to export. Select them before clicking the button."
              }
            ]
          },
          {
            name: "Save As path",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The output CAD file. The extension (`.dwg`, `.dxf`, or `.dgn`) determines the format written. Defaults to `.dwg`."
              }
            ]
          },
          {
            name: "Map reference scale",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Read from the map, not entered on a dialog. Determines annotation text size. Set it before exporting."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Set the map's **reference scale** to the scale the drawing will be plotted at. This determines how large the annotation text will be — do it before exporting, not after.",
          "Confirm each layer's labelling is switched on and configured as you want it to appear. Only visible, enabled labels are converted.",
          "In the **Contents** pane, select the feature layers to export.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Conversion Tool** gallery and click **Export to CAD**.",
          "In the **Save As** dialog, choose a folder, type a file name, and pick the extension for the CAD format you need.",
          "Click **Save** and wait for the export to finish.",
          "Read the report. It states how many annotation feature classes were created and what happened to each layer.",
          "Open the file in the CAD application and confirm the text is present and correctly sized."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "label-control",
      "kml-handler",
      "batch-export",
      "migrate-data-from-mdb"
    ]
  },
  {
    slug: "filter-selection",
    group: "datamanagement",
    name: "Filter Selection",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Feature ▸ Query Feature ▸ Filter Selection",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the current map selection."
      }
    ],
    summary: {
      km: "បង្កើត definition query ពីលក្ខណៈដែលកំពុងជ្រើសលើផែនទី ដើម្បីឱ្យស្រទាប់បង្ហាញតែលក្ខណៈទាំងនោះ។ ចុចម្តងទៀតដើម្បីលុប query និងបង្ហាញទាំងអស់វិញ។",
      en: "Builds a definition query from the features currently selected in the map, so the layer displays only those features. Clicking the button again clears the query and shows everything."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "**This is a toggle.** The first click builds a definition query from the selection; the second click removes it.",
          "Select the features you want to isolate **before** clicking. The tool reads the current selection and writes it into the layer's definition query.",
          "The result is a **definition query**, not a selection. That distinction matters: Because a definition query hides the other features from everything — geoprocessing tools, attribute tables, exports, and the layout — it is the right way to work on a subset, and also an easy thing to forget you have applied."
        ]
      },
      {
        type: "table",
        head: [
          "",
          "Selection",
          "Definition query"
        ],
        rows: [
          [
            "Survives clicking elsewhere",
            "No",
            "Yes"
          ],
          [
            "Other tools see only these features",
            "No",
            "Yes"
          ],
          [
            "Shown in layer properties",
            "No",
            "Yes"
          ],
          [
            "Affects printing and export",
            "No",
            "Yes"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "A layer with a definition query applied shows only part of its data. If a later tool reports a suspiciously low feature count, check whether a filter is still in place — clicking this button again clears it.",
          "The query replaces any definition query already on the layer. Note the existing query before using the tool if the layer already had one you need to keep."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Select the features you want to isolate, using any selection tool.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Feature** menu, point to **Query Feature**, and click **Filter Selection**.",
          "The layer now displays only the selected features.",
          "Do the work that needs the subset.",
          "Click **Filter Selection** again to clear the query and restore the full display."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "smart-select",
      "parcel-overlap-check",
      "smart-extract"
    ]
  },
  {
    slug: "find-duplicate",
    group: "datamanagement",
    name: "Find Duplicate",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Feature ▸ Find Duplicate",
    actsOn: [],
    summary: {
      km: "រកលក្ខណៈស្ទួនតាមតម្លៃគុណលក្ខណៈ ឬតាមធរណីមាត្រ រួចជ្រើស បន្លិច ពង្រីកទៅរក នាំចេញ ឬលុបវា។",
      en: "Finds duplicate features by attribute value or by geometry, then selects, highlights, zooms to, exports, or deletes them."
    },
    body: [
      {
        type: "paragraph",
        text: "Duplicate *field values* and duplicate *geometry* are different problems, and this tool handles both from one dock pane."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool opens as a **dock pane**, so it stays open beside the map while you work through the results.",
          "**Detection Mode** decides what counts as a duplicate: These catch different faults. A parcel digitised twice has duplicate geometry but may have two different parcel numbers; two parcels mistakenly given the same number have duplicate values but different geometry. Run both modes."
        ]
      },
      {
        type: "table",
        head: [
          "Mode",
          "Finds"
        ],
        rows: [
          [
            "`Duplicate Field Value`",
            "Features sharing the same value in the field chosen under **Field Options**"
          ],
          [
            "`Duplicate Geometry`",
            "Features whose shapes coincide, within the **Tolerance** set under **Geometry Options**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Include NULL values** decides whether features with no value are treated as duplicates of one another. Usually leave it unchecked — two features that are both simply unrecorded are not really duplicates, and including nulls can swamp the result.",
          "**Tolerance** (in map units) applies to geometry mode. Two shapes are rarely numerically identical after editing, so a small tolerance is needed to catch real duplicates. Start small and increase it only if known duplicates are being missed — too large a tolerance starts matching genuinely distinct neighbouring features.",
          "The **Actions** are deliberately ordered from safe to destructive:"
        ]
      },
      {
        type: "table",
        head: [
          "Action",
          "Effect"
        ],
        rows: [
          [
            "**Find Duplicates**",
            "Runs the detection and lists the results"
          ],
          [
            "**Select Features**",
            "Selects the duplicates in the map"
          ],
          [
            "**Highlight**",
            "Highlights them on the map"
          ],
          [
            "**Zoom To**",
            "Zooms to a duplicate so it can be inspected"
          ],
          [
            "**Export Duplicates**",
            "Writes the duplicates out as a record"
          ],
          [
            "**Delete Duplicates**",
            "Permanently removes them"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Use Delete Duplicates with care.** Export the duplicates first, so there is a record of what was removed, and inspect a sample with **Zoom To** before deleting — a \"duplicate\" by geometry may be a legitimate stacked feature such as a building over a parcel."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer to examine."
              }
            ]
          },
          {
            name: "Detection Mode",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "`Duplicate Field Value` or `Duplicate Geometry`."
              }
            ]
          },
          {
            name: "Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field tested for repeated values. Field-value mode only."
              }
            ]
          },
          {
            name: "Include NULL values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Treats features with no value as duplicates of one another."
              }
            ]
          },
          {
            name: "Tolerance",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The coincidence tolerance, in map units. Geometry mode only."
              }
            ]
          },
          {
            name: "Find Duplicates",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Runs the detection."
              }
            ]
          },
          {
            name: "Select Features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Selects the duplicates in the map."
              }
            ]
          },
          {
            name: "Highlight",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Highlights the duplicates."
              }
            ]
          },
          {
            name: "Zoom To",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Zooms to a duplicate for inspection."
              }
            ]
          },
          {
            name: "Export Duplicates",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the duplicates to a new dataset."
              }
            ]
          },
          {
            name: "Delete Duplicates",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Permanently deletes the duplicates."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Feature** menu and click **Find Duplicate**. The dock pane opens.",
          "Set **Layer**.",
          "Set **Detection Mode** to `Duplicate Field Value` and choose the **Field**. Leave **Include NULL values** unchecked.",
          "Click **Find Duplicates**, then **Select Features** to see them on the map.",
          "Click **Export Duplicates** to keep a record before changing anything.",
          "Use **Zoom To** to inspect several results and confirm they are genuine duplicates.",
          "Fix them by editing, or click **Delete Duplicates** if removal is appropriate.",
          "Switch **Detection Mode** to `Duplicate Geometry`, set a small **Tolerance**, and repeat — this catches a different class of fault."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "duplicate-finder",
      "detect-overlap-gap",
      "parcel-number-audit",
      "id-generator"
    ]
  },
  {
    slug: "generate-boundary-line",
    group: "datamanagement",
    name: "Generate Boundary Line",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Generate Boundary Line",
    actsOn: [],
    summary: {
      km: "បង្កើតខ្សែព្រំដែនពីស្រទាប់ពហុកោណ ដោយនាំវាលសម្គាល់ដែលបានជ្រើសទៅលើខ្សែនីមួយៗ និងអាចបំបែកព្រំដែននៅគ្រប់ចំណុចកំពូល។",
      en: "Creates boundary line features from a polygon layer, carrying a chosen identifier field onto each line, with the option to split the boundary at every vertex."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "**Select the input polygon layer in the Contents pane before clicking.** The button reads the Contents-pane selection and opens the dialog on that layer.",
          "All five **Generate** tools share one dialog; each opens it with a different title and a different set of options enabled:"
        ]
      },
      {
        type: "table",
        head: [
          "Tool",
          "Produces",
          "Extra options shown"
        ],
        rows: [
          [
            "[Generate Boundary Point](GenerateBoundaryPoint.md)",
            "Points at the polygon vertices",
            "Point options"
          ],
          [
            "[Generate Boundary Line](GenerateBoundaryLine.md)",
            "Boundary lines",
            "Line options, including split at vertices"
          ],
          [
            "[Generate Boundary Point and Line](GenerateBoundaryPointAndLine.md)",
            "Both, in one run",
            "Point and line options"
          ],
          [
            "[Generate Polygon Central Point](GeneratePolygonCentralPoint.md)",
            "One point per polygon centroid",
            "Point options"
          ],
          [
            "[Generate Line Vertices](GenerateLineVertices.md)",
            "Points at the vertices of a line layer",
            "Line-vertex options"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Anchor field (feature ID to carry over)** is the field copied onto every generated feature, linking each output back to its parent. Set it — without it the outputs cannot be related to the source features, which is usually the whole point of generating them.",
          "**Features to process** chooses between **Process all features** and **Process selected features only**. The selected-features option is the way to generate outputs for one parcel without regenerating the whole layer.",
          "**Remove duplicate point geometry** deduplicates coincident points. A polygon's closing vertex repeats its start vertex, and adjacent features share corners, so without this option each physical corner appears more than once. Leave it on unless you deliberately need one point per feature per corner.",
          "**Output storage location** offers **Store output in default project geodatabase** or **Choose specific output location**, with **Browse...** for the latter.",
          {
            text: "**Line options** are shown for this tool, including **Split lines at vertices**. The choice determines what a single output feature represents: Split output is also the input shape expected by segment-level labelling and by [Bearing Distance Calc](../Cadastral/BearingDistanceCalculator.md).",
            items: [
              "**Not split** — one line per polygon boundary, which suits boundary symbology.",
              "**Split at vertices** — one line per boundary segment, which is what you need if each segment must carry its own bearing, distance, or label."
            ]
          }
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Input polygon layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The source layer, taken from the Contents-pane selection."
              }
            ]
          },
          {
            name: "Process all features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output for every feature in the layer."
              }
            ]
          },
          {
            name: "Process selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output only for the features currently selected in the map."
              }
            ]
          },
          {
            name: "Anchor field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The identifier field copied onto every generated feature, linking it back to its parent."
              }
            ]
          },
          {
            name: "Line options",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Options governing the generated lines, including **Split lines at vertices**."
              }
            ]
          },
          {
            name: "Remove duplicate point geometry",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Deduplicates coincident points, so a shared corner yields one point."
              }
            ]
          },
          {
            name: "Store output in default project geodatabase",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Choose specific output location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to a location you browse to."
              }
            ]
          },
          {
            name: "OK",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates the output."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the polygon layer.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Generate Boundary Line**.",
          "Confirm the layer shown in **Input polygon layer**.",
          "Choose **Process all features**, or select features on the map first and choose **Process selected features only**.",
          "Set **Anchor field** to the identifier that should travel with each generated feature.",
          "Under **Line options**, decide whether to **Split lines at vertices** — split if each segment needs its own attributes, unsplit for boundary symbology.",
          "Leave **Remove duplicate point geometry** checked.",
          "Choose the **Output storage location**.",
          "Click **OK**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "polygon-to-line-multiple",
      "boundary-line-builder",
      "generate-boundary-point-and-line",
      "bearing-distance-calculator"
    ]
  },
  {
    slug: "generate-boundary-point",
    group: "datamanagement",
    name: "Generate Boundary Point",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Generate Boundary Point",
    actsOn: [],
    summary: {
      km: "បង្កើតចំណុចនៅគ្រប់កំពូលនៃស្រទាប់ពហុកោណ ដោយនាំវាលសម្គាល់ដែលបានជ្រើសទៅលើចំណុចនីមួយៗ។",
      en: "Creates point features at every vertex of a polygon layer, carrying a chosen identifier field onto each point."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the interactive equivalent of [Polygon To Boundary Point](../DataCreation/PolygonToBoundaryPoint.md) — it works on the layer selected in the Contents pane and offers per-run control over which features are processed."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Select the input polygon layer in the Contents pane before clicking.** The button reads the Contents-pane selection and opens the dialog on that layer.",
          "All five **Generate** tools share one dialog; each opens it with a different title and a different set of options enabled:"
        ]
      },
      {
        type: "table",
        head: [
          "Tool",
          "Produces",
          "Extra options shown"
        ],
        rows: [
          [
            "[Generate Boundary Point](GenerateBoundaryPoint.md)",
            "Points at the polygon vertices",
            "Point options"
          ],
          [
            "[Generate Boundary Line](GenerateBoundaryLine.md)",
            "Boundary lines",
            "Line options, including split at vertices"
          ],
          [
            "[Generate Boundary Point and Line](GenerateBoundaryPointAndLine.md)",
            "Both, in one run",
            "Point and line options"
          ],
          [
            "[Generate Polygon Central Point](GeneratePolygonCentralPoint.md)",
            "One point per polygon centroid",
            "Point options"
          ],
          [
            "[Generate Line Vertices](GenerateLineVertices.md)",
            "Points at the vertices of a line layer",
            "Line-vertex options"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Anchor field (feature ID to carry over)** is the field copied onto every generated feature, linking each output back to its parent. Set it — without it the outputs cannot be related to the source features, which is usually the whole point of generating them.",
          "**Features to process** chooses between **Process all features** and **Process selected features only**. The selected-features option is the way to generate outputs for one parcel without regenerating the whole layer.",
          "**Remove duplicate point geometry** deduplicates coincident points. A polygon's closing vertex repeats its start vertex, and adjacent features share corners, so without this option each physical corner appears more than once. Leave it on unless you deliberately need one point per feature per corner.",
          "**Output storage location** offers **Store output in default project geodatabase** or **Choose specific output location**, with **Browse...** for the latter."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Input polygon layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The source layer, taken from the Contents-pane selection."
              }
            ]
          },
          {
            name: "Process all features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output for every feature in the layer."
              }
            ]
          },
          {
            name: "Process selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output only for the features currently selected in the map."
              }
            ]
          },
          {
            name: "Anchor field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The identifier field copied onto every generated feature, linking it back to its parent."
              }
            ]
          },
          {
            name: "Point options",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Options governing the generated points."
              }
            ]
          },
          {
            name: "Remove duplicate point geometry",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Deduplicates coincident points, so a shared corner yields one point."
              }
            ]
          },
          {
            name: "Store output in default project geodatabase",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Choose specific output location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to a location you browse to."
              }
            ]
          },
          {
            name: "OK",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates the output."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the polygon layer.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Generate Boundary Point**.",
          "Confirm the layer shown in **Input polygon layer**.",
          "Choose **Process all features**, or select features on the map first and choose **Process selected features only**.",
          "Set **Anchor field** to the identifier that should travel with each generated feature.",
          "Leave **Remove duplicate point geometry** checked.",
          "Choose the **Output storage location**.",
          "Click **OK**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "polygon-to-boundary-point",
      "generate-boundary-line",
      "generate-boundary-point-and-line",
      "corner-point-builder",
      "boundary-xy-to-excel"
    ]
  },
  {
    slug: "generate-boundary-point-and-line",
    group: "datamanagement",
    name: "Generate Boundary Point and Line",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Generate Boundary Point and Line",
    actsOn: [],
    summary: {
      km: "បង្កើតទាំងចំណុចព្រំដែន និងខ្សែព្រំដែនពីស្រទាប់ពហុកោណក្នុងការរត់តែម្តង ដោយនាំវាលសម្គាល់ដែលបានជ្រើសទៅលើគ្រប់លទ្ធផល។",
      en: "Creates both boundary points and boundary lines from a polygon layer in a single run, carrying a chosen identifier field onto every output feature."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this rather than running the point and line tools separately — one pass guarantees both outputs share the same anchor field values and the same processing scope."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Select the input polygon layer in the Contents pane before clicking.** The button reads the Contents-pane selection and opens the dialog on that layer.",
          "All five **Generate** tools share one dialog; each opens it with a different title and a different set of options enabled:"
        ]
      },
      {
        type: "table",
        head: [
          "Tool",
          "Produces",
          "Extra options shown"
        ],
        rows: [
          [
            "[Generate Boundary Point](GenerateBoundaryPoint.md)",
            "Points at the polygon vertices",
            "Point options"
          ],
          [
            "[Generate Boundary Line](GenerateBoundaryLine.md)",
            "Boundary lines",
            "Line options, including split at vertices"
          ],
          [
            "[Generate Boundary Point and Line](GenerateBoundaryPointAndLine.md)",
            "Both, in one run",
            "Point and line options"
          ],
          [
            "[Generate Polygon Central Point](GeneratePolygonCentralPoint.md)",
            "One point per polygon centroid",
            "Point options"
          ],
          [
            "[Generate Line Vertices](GenerateLineVertices.md)",
            "Points at the vertices of a line layer",
            "Line-vertex options"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Anchor field (feature ID to carry over)** is the field copied onto every generated feature, linking each output back to its parent. Set it — without it the outputs cannot be related to the source features, which is usually the whole point of generating them.",
          "**Features to process** chooses between **Process all features** and **Process selected features only**. The selected-features option is the way to generate outputs for one parcel without regenerating the whole layer.",
          "**Remove duplicate point geometry** deduplicates coincident points. A polygon's closing vertex repeats its start vertex, and adjacent features share corners, so without this option each physical corner appears more than once. Leave it on unless you deliberately need one point per feature per corner.",
          "**Output storage location** offers **Store output in default project geodatabase** or **Choose specific output location**, with **Browse...** for the latter.",
          "Both **Point options** and **Line options** are available, so the points and the lines can be configured independently in the same run.",
          "The two outputs are the usual pairing for a cadastral map sheet: lines for the boundary symbology, points for the numbered corners."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Input polygon layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The source layer, taken from the Contents-pane selection."
              }
            ]
          },
          {
            name: "Process all features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output for every feature in the layer."
              }
            ]
          },
          {
            name: "Process selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output only for the features currently selected in the map."
              }
            ]
          },
          {
            name: "Anchor field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The identifier field copied onto every generated feature, linking it back to its parent."
              }
            ]
          },
          {
            name: "Point options",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Options governing the generated points."
              }
            ]
          },
          {
            name: "Line options",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Options governing the generated lines, including **Split lines at vertices**."
              }
            ]
          },
          {
            name: "Remove duplicate point geometry",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Deduplicates coincident points, so a shared corner yields one point."
              }
            ]
          },
          {
            name: "Store output in default project geodatabase",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Choose specific output location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to a location you browse to."
              }
            ]
          },
          {
            name: "OK",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates the output."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the polygon layer.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Generate Boundary Point and Line**.",
          "Confirm the layer shown in **Input polygon layer**.",
          "Choose **Process all features**, or select features on the map first and choose **Process selected features only**.",
          "Set **Anchor field** to the identifier that should travel with each generated feature.",
          "Configure **Point options** and **Line options** for each output.",
          "Leave **Remove duplicate point geometry** checked.",
          "Choose the **Output storage location**.",
          "Click **OK**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "generate-boundary-point",
      "generate-boundary-line",
      "polygon-to-map-series",
      "boundary-line-builder"
    ]
  },
  {
    slug: "generate-line-vertices",
    group: "datamanagement",
    name: "Generate Line Vertices",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Generate Line Vertices",
    actsOn: [],
    summary: {
      km: "បង្កើតចំណុចនៅគ្រប់កំពូលនៃស្រទាប់ខ្សែ ដោយនាំវាលសម្គាល់ដែលបានជ្រើសទៅលើចំណុចនីមួយៗ។",
      en: "Creates point features at every vertex of a line layer, carrying a chosen identifier field onto each point."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the line-input counterpart of [Generate Boundary Point](GenerateBoundaryPoint.md) — use it to extract the vertices of a road centreline, a survey traverse, or a boundary line layer."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Select the input line layer in the Contents pane before clicking.** The button reads the Contents-pane selection and opens the dialog on that layer.",
          "All five **Generate** tools share one dialog; each opens it with a different title and a different set of options enabled:"
        ]
      },
      {
        type: "table",
        head: [
          "Tool",
          "Produces",
          "Extra options shown"
        ],
        rows: [
          [
            "[Generate Boundary Point](GenerateBoundaryPoint.md)",
            "Points at the polygon vertices",
            "Point options"
          ],
          [
            "[Generate Boundary Line](GenerateBoundaryLine.md)",
            "Boundary lines",
            "Line options, including split at vertices"
          ],
          [
            "[Generate Boundary Point and Line](GenerateBoundaryPointAndLine.md)",
            "Both, in one run",
            "Point and line options"
          ],
          [
            "[Generate Polygon Central Point](GeneratePolygonCentralPoint.md)",
            "One point per polygon centroid",
            "Point options"
          ],
          [
            "[Generate Line Vertices](GenerateLineVertices.md)",
            "Points at the vertices of a line layer",
            "Line-vertex options"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Anchor field (feature ID to carry over)** is the field copied onto every generated feature, linking each output back to its parent. Set it — without it the outputs cannot be related to the source features, which is usually the whole point of generating them.",
          "**Features to process** chooses between **Process all features** and **Process selected features only**. The selected-features option is the way to generate outputs for one parcel without regenerating the whole layer.",
          "**Remove duplicate point geometry** deduplicates coincident points. A polygon's closing vertex repeats its start vertex, and adjacent features share corners, so without this option each physical corner appears more than once. Leave it on unless you deliberately need one point per feature per corner.",
          "**Output storage location** offers **Store output in default project geodatabase** or **Choose specific output location**, with **Browse...** for the latter.",
          "**A single line feature layer must be selected in the Contents pane.** The ribbon button is disabled otherwise, with the tooltip *\"Select a single line feature layer in the Contents pane.\"*",
          "Line-vertex options are shown in place of the polygon point and line options."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Input line layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The source layer, taken from the Contents-pane selection."
              }
            ]
          },
          {
            name: "Process all features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output for every feature in the layer."
              }
            ]
          },
          {
            name: "Process selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output only for the features currently selected in the map."
              }
            ]
          },
          {
            name: "Anchor field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The identifier field copied onto every generated feature, linking it back to its parent."
              }
            ]
          },
          {
            name: "Line vertex options",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Options governing the points generated at the line vertices."
              }
            ]
          },
          {
            name: "Remove duplicate point geometry",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Deduplicates coincident points, so a shared corner yields one point."
              }
            ]
          },
          {
            name: "Store output in default project geodatabase",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Choose specific output location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to a location you browse to."
              }
            ]
          },
          {
            name: "OK",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates the output."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the line layer.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Generate Line Vertices**.",
          "Confirm the layer shown in **Input line layer**.",
          "Choose **Process all features**, or select features on the map first and choose **Process selected features only**.",
          "Set **Anchor field** to the identifier that should travel with each generated feature.",
          "Leave **Remove duplicate point geometry** checked.",
          "Choose the **Output storage location**.",
          "Click **OK**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "generate-boundary-point",
      "generate-boundary-line",
      "display-length-and-vertex",
      "copy-features"
    ]
  },
  {
    slug: "generate-polygon-central-point",
    group: "datamanagement",
    name: "Generate Polygon Central Point",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Generate Polygon Central Point",
    actsOn: [],
    summary: {
      km: "បង្កើតចំណុចមួយនៅចំកណ្តាលពហុកោណនីមួយៗ ដោយនាំវាលសម្គាល់ដែលបានជ្រើសទៅលើចំណុចនីមួយៗ។",
      en: "Creates a single point at the centre of each polygon, carrying a chosen identifier field onto each point."
    },
    body: [
      {
        type: "paragraph",
        text: "Centre points are used for parcel labelling and for joining polygon attributes to a point-based dataset."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Select the input polygon layer in the Contents pane before clicking.** The button reads the Contents-pane selection and opens the dialog on that layer.",
          "All five **Generate** tools share one dialog; each opens it with a different title and a different set of options enabled:"
        ]
      },
      {
        type: "table",
        head: [
          "Tool",
          "Produces",
          "Extra options shown"
        ],
        rows: [
          [
            "[Generate Boundary Point](GenerateBoundaryPoint.md)",
            "Points at the polygon vertices",
            "Point options"
          ],
          [
            "[Generate Boundary Line](GenerateBoundaryLine.md)",
            "Boundary lines",
            "Line options, including split at vertices"
          ],
          [
            "[Generate Boundary Point and Line](GenerateBoundaryPointAndLine.md)",
            "Both, in one run",
            "Point and line options"
          ],
          [
            "[Generate Polygon Central Point](GeneratePolygonCentralPoint.md)",
            "One point per polygon centroid",
            "Point options"
          ],
          [
            "[Generate Line Vertices](GenerateLineVertices.md)",
            "Points at the vertices of a line layer",
            "Line-vertex options"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Anchor field (feature ID to carry over)** is the field copied onto every generated feature, linking each output back to its parent. Set it — without it the outputs cannot be related to the source features, which is usually the whole point of generating them.",
          "**Features to process** chooses between **Process all features** and **Process selected features only**. The selected-features option is the way to generate outputs for one parcel without regenerating the whole layer.",
          "**Remove duplicate point geometry** deduplicates coincident points. A polygon's closing vertex repeats its start vertex, and adjacent features share corners, so without this option each physical corner appears more than once. Leave it on unless you deliberately need one point per feature per corner.",
          "**Output storage location** offers **Store output in default project geodatabase** or **Choose specific output location**, with **Browse...** for the latter.",
          "One point is produced per polygon, not one per vertex. To extract every boundary vertex instead, use [Generate Boundary Point](GenerateBoundaryPoint.md).",
          "For a concave or multipart polygon, the centroid can fall outside the polygon's own boundary. Check the result where the parcel shapes are irregular."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Input polygon layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The source layer, taken from the Contents-pane selection."
              }
            ]
          },
          {
            name: "Process all features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output for every feature in the layer."
              }
            ]
          },
          {
            name: "Process selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates output only for the features currently selected in the map."
              }
            ]
          },
          {
            name: "Anchor field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The identifier field copied onto every generated feature, linking it back to its parent."
              }
            ]
          },
          {
            name: "Point options",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Options governing the generated points."
              }
            ]
          },
          {
            name: "Remove duplicate point geometry",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Deduplicates coincident points, so a shared corner yields one point."
              }
            ]
          },
          {
            name: "Store output in default project geodatabase",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Choose specific output location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the output to a location you browse to."
              }
            ]
          },
          {
            name: "OK",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Generates the output."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the polygon layer.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Generate Polygon Central Point**.",
          "Confirm the layer shown in **Input polygon layer**.",
          "Choose **Process all features**, or select features on the map first and choose **Process selected features only**.",
          "Set **Anchor field** to the identifier that should travel with each generated feature.",
          "Leave **Remove duplicate point geometry** checked.",
          "Choose the **Output storage location**.",
          "Click **OK**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "polygon-to-central-point",
      "generate-boundary-point",
      "label-control"
    ]
  },
  {
    slug: "id-based-csv-exporter",
    group: "datamanagement",
    name: "ID-Based CSV Exporter",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Attribute ▸ ID-Based CSV Exporter",
    actsOn: [],
    summary: {
      km: "បំបែកតារាងគុណលក្ខណៈជាឯកសារ CSV ដាច់ដោយឡែក មួយឯកសារក្នុងមួយតម្លៃឯកត្តនៃវាល ID ដែលបានជ្រើស ព្រមទាំងអាចបន្ថែមជួរឈរកំណត់សម្គាល់ថេរទៅគ្រប់ជួរដេក។",
      en: "Splits an attribute table into separate CSV files, one per unique value of a chosen ID field, optionally adding a constant remark column to every row."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool to produce one file per commune, per village, or per parcel group from a single combined table — the usual form for handing data to separate recipients."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "One CSV is written per distinct value in **Choose ID Field**. A field with 300 distinct values produces 300 files, so check the field's value count before running.",
          "**Choose ID Field** is bound to the input, so its list updates when **Input feature layer or table** changes.",
          "The field's values become part of the file names. A field containing characters that are not valid in file names, or values differing only by case, can produce unusable or colliding names — prefer a clean code field over free text.",
          "**Output Location** is the folder that receives the files.",
          "**Add Remark Column** appends a constant column to every row of every file. Set **Column Name** for its heading and **Value** for the text written into each row — useful for stamping a delivery batch, a date, or a source note into the exported data.",
          "Input may be a feature layer, a table view, or a standalone table. When the input is a feature layer, only the attributes are exported; geometry is not written to CSV."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input feature layer or table",
            optional: false,
            type: "Feature Layer; Table View; Table",
            description: [
              {
                type: "paragraph",
                text: "The source of the attribute rows. Geometry is not exported."
              }
            ]
          },
          {
            name: "Choose ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field whose distinct values determine how the rows are split. One CSV is written per distinct value, and the values form part of the file names."
              }
            ]
          },
          {
            name: "Output Location",
            optional: false,
            type: "Workspace",
            description: [
              {
                type: "paragraph",
                text: "The folder that receives the CSV files."
              }
            ]
          },
          {
            name: "Add Remark Column",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Appends a constant column to every exported row."
              },
              {
                type: "list",
                items: [
                  "Checked — **Column Name** and **Value** are enabled.",
                  "Unchecked (default) — No extra column is added."
                ]
              }
            ]
          },
          {
            name: "Column Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The heading of the constant column. Required when **Add Remark Column** is checked."
              }
            ]
          },
          {
            name: "Value",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The text written into the constant column on every row. Required when **Add Remark Column** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Open the attribute table and check how many distinct values the ID field holds — that is how many files will be created.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Attribute** menu and click **ID-Based CSV Exporter**.",
          "Set **Input feature layer or table**.",
          "Set **Choose ID Field** to a clean code field whose values are safe as file names.",
          "Set **Output Location** to an empty folder.",
          "To stamp a batch note into every row, check **Add Remark Column** and set **Column Name** and **Value**.",
          "Click **Run**, then check the output folder for the expected number of files."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "batch-export",
      "boundary-xy-to-excel",
      "edit-in-excel",
      "pivot-table-builder"
    ]
  },
  {
    slug: "import-kml-file",
    group: "datamanagement",
    name: "Import KML file",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Import KML file",
    actsOn: [],
    summary: {
      km: "នាំចូលព្រំដែន KML មើលកូអរដោនេជាមុនក្នុងតារាង រួចបង្កើតលក្ខណៈចំណុច ខ្សែ ឬពហុកោណពីវា ឬនាំចេញកូអរដោនេជា CSV។",
      en: "Imports a KML boundary, previews its coordinates in a table, and generates point, line, or polygon features from them — or exports the coordinates as CSV."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [KML Handler](KMLHandler.md) is a general two-way converter, this tool is built for one job: turning a KML boundary into cadastral geometry, with the coordinates shown before anything is created."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**The preview table is the point of this tool.** Before generating anything, the coordinates are listed with these columns: Check the table before generating. A KML from a phone or a web tool often contains more than the boundary you want, and **SourceType** and **SourceName** are how you tell which points came from where."
        ]
      },
      {
        type: "table",
        head: [
          "Column",
          "Contents"
        ],
        rows: [
          [
            "**PointID**",
            "The point identifier"
          ],
          [
            "**Longitude** / **Latitude**",
            "The coordinate, as read from the KML"
          ],
          [
            "**SourceType** / **SourceName**",
            "What KML element the point came from, and its name"
          ],
          [
            "**GroupName**",
            "The grouping the point belongs to"
          ],
          [
            "**VertexID**",
            "The vertex number within its ring"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Source CRS** is fixed at **WGS 1984 / EPSG:4326**, because that is what KML always uses. **Output CRS** is the coordinate system the generated features are written in — set it to your project's projected system, or the output arrives in degrees and cannot be measured.",
          "Three generation actions produce different geometry from the same coordinates: The point order in the table determines the shape of the line and polygon. Check the **VertexID** ordering before generating a polygon — out-of-order points produce a self-crossing boundary."
        ]
      },
      {
        type: "table",
        head: [
          "Action",
          "Produces"
        ],
        rows: [
          [
            "**Generate Point**",
            "One point per coordinate row"
          ],
          [
            "**Generate Line**",
            "A line through the points"
          ],
          [
            "**Generate Polygon**",
            "A closed polygon from the points"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Export CSV** writes the coordinate table out without generating features, which is useful for checking the values against a survey record.",
          "**Base name** names the outputs. **Store output in default project geodatabase** or **Choose location** sets where they go."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "KML:",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The KML file being imported."
              }
            ]
          },
          {
            name: "Source CRS:",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Fixed at **WGS 1984 / EPSG:4326** — the coordinate system KML always uses."
              }
            ]
          },
          {
            name: "Output CRS:",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system the generated features are written in. Set this to your project's projected system."
              }
            ]
          },
          {
            name: "Base name:",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The base name for the generated outputs."
              }
            ]
          },
          {
            name: "Store output in default project geodatabase",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the outputs to the project's default geodatabase."
              }
            ]
          },
          {
            name: "Choose location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the outputs to a location you browse to."
              }
            ]
          },
          {
            name: "PointID** / **Longitude** / **Latitude** / **SourceType** / **SourceName** / **GroupName** / **VertexID",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Preview table columns showing the coordinates and where each point came from."
              }
            ]
          },
          {
            name: "Generate Point",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Creates one point per coordinate row."
              }
            ]
          },
          {
            name: "Generate Line",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Creates a line through the points, in table order."
              }
            ]
          },
          {
            name: "Generate Polygon",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Creates a closed polygon from the points, in table order."
              }
            ]
          },
          {
            name: "Export CSV",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the coordinate table to CSV without generating features."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **Import KML file**.",
          "Choose the KML file. The preview table fills with its coordinates.",
          "Read the table. Use **SourceType** and **SourceName** to confirm the points came from the boundary you intended, not from some other element in the file.",
          "Check the **VertexID** ordering, especially if you intend to generate a polygon.",
          "Set **Output CRS** to your project's projected coordinate system.",
          "Type a **Base name** and choose the output location.",
          "Click **Generate Polygon**, **Generate Line**, or **Generate Point** as needed.",
          "If you want the coordinates as a file as well, click **Export CSV**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "kml-handler",
      "point-to-polygon",
      "generate-boundary-point",
      "boundary-xy-to-excel"
    ]
  },
  {
    slug: "kml-handler",
    group: "datamanagement",
    name: "KML Handler",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ KML Handler",
    actsOn: [],
    summary: {
      km: "បម្លែងឯកសារ KML និង KMZ ទៅជាស្រទាប់ GIS និងបម្លែងស្រទាប់ GIS ត្រឡប់ទៅជា KML ឬ KMZ វិញ ជាមួយប្រព័ន្ធកូអរដោនេគោលដៅ និងកំណត់ហេតុដំណើរការ។",
      en: "Converts KML and KMZ files into GIS layers, and GIS layers back into KML or KMZ, with a target coordinate system and a processing log."
    },
    body: [
      {
        type: "paragraph",
        text: "The window handles both directions, so it is the general-purpose KML tool. For importing a boundary with a coordinate preview and a choice of output geometry, use [Import KML file](ImportKMLFile.md) instead."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The window has two independent halves:"
        ]
      },
      {
        type: "table",
        head: [
          "Section",
          "Direction",
          "Action button"
        ],
        rows: [
          [
            "**KML/KMZ to GIS Layer**",
            "KML or KMZ in, feature layer out",
            "**Run Extraction**"
          ],
          [
            "**GIS Layer to KML/KMZ**",
            "Feature layer in, KML or KMZ out",
            "**Run Conversion**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "For import, **Select input** browses to the KML or KMZ file, **Select output** sets where the layer is written, and **Output format** and **Target CRS** are set under **Configure settings**.",
          "**Target CRS matters on import.** KML is always in WGS 84 geographic coordinates — that is fixed by the format. Set **Target CRS** to the projected system your project works in, or the imported layer arrives in degrees and cannot be measured or used with the metre-based tools.",
          "For export, **Save as KMZ** chooses between KML and KMZ. KMZ is a compressed single file, which is the better choice for sharing; plain KML is uncompressed and human-readable.",
          "Exported KML is reprojected to WGS 84 automatically, as the format requires. A projected source layer therefore changes coordinate system on the way out — this is normal, not an error.",
          "The **Processing Log** records what happened. Read it after a run: KML is a loose format and a file can contain geometry types, nested folders, or styling that do not map cleanly onto a feature class, and the log is where those problems are reported.",
          "**Height** is available where KML elevation values need handling."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Select input",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The KML or KMZ file to import. Import section."
              }
            ]
          },
          {
            name: "Select output",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Where the imported layer is written. Import section."
              }
            ]
          },
          {
            name: "Output format",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The format of the imported output. Import section."
              }
            ]
          },
          {
            name: "Target CRS",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system the imported layer is written in. Set this to your project's projected system."
              }
            ]
          },
          {
            name: "Height",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Handling for KML elevation values."
              }
            ]
          },
          {
            name: "Run Extraction",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Runs the KML/KMZ to GIS layer conversion."
              }
            ]
          },
          {
            name: "Save as KMZ",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes a compressed KMZ instead of a plain KML. Export section."
              }
            ]
          },
          {
            name: "Run Conversion",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Runs the GIS layer to KML/KMZ conversion."
              }
            ]
          },
          {
            name: "Processing Log",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The record of what happened during the run."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Import a KML or KMZ file"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open the **Quick Template** menu and click **KML Handler**.",
          "In the **KML/KMZ to GIS Layer** section, click **Browse...** beside **Select input** and choose the file.",
          "Set **Select output**.",
          "Under **Configure settings**, set **Output format** and set **Target CRS** to your project's projected coordinate system.",
          "Click **Run Extraction**.",
          "Read the **Processing Log** and check that everything you expected was imported."
        ]
      },
      {
        type: "subheading",
        text: "Export a layer to KML or KMZ"
      },
      {
        type: "steps",
        items: [
          "Open the tool and use the **GIS Layer to KML/KMZ** section.",
          "Choose the layer to export.",
          "Check **Save as KMZ** for a single compressed file, or leave it clear for plain KML.",
          "Click **Run Conversion**, then read the **Processing Log**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "import-kml-file",
      "to-google-earth-pro",
      "to-kga-geodigitizer",
      "export-to-cad"
    ]
  },
  {
    slug: "khmer-font-converter",
    group: "datamanagement",
    name: "Khmer Font Converter",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Attribute ▸ Khmer Font Converter",
    actsOn: [],
    summary: {
      km: "បម្លែងអក្សរខ្មែរក្នុងវាលគុណលក្ខណៈរវាង Unicode និងលេខកូដចាស់ Limon ដោយសរសេរលទ្ធផលទៅវាលដែលមានស្រាប់ ឬទៅវាលថ្មី។",
      en: "Converts Khmer text in an attribute field between Unicode and legacy Limon encoding, writing the result to an existing field or to a new one."
    },
    body: [
      {
        type: "paragraph",
        text: "Legacy Khmer data was encoded for the Limon font family, where Khmer characters occupy Latin code points. Such text displays as Latin gibberish in any modern application unless the Limon font happens to be applied. This tool converts between the two encodings so the data becomes searchable, sortable, and portable."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          {
            text: "**Choose Converter** sets the direction:",
            items: [
              "`Unicode to Legacy` (default) — converts modern Unicode Khmer into Limon encoding, for delivery to a system that still expects it.",
              "`Legacy to Unicode` — converts Limon-encoded text into Unicode. This is the direction that rescues old data."
            ]
          },
          "Both **Select source field** and **Select target field** are restricted to text fields.",
          {
            text: "**Create new target field?** decides where the output goes:",
            items: [
              "**Checked** — A new field named in **New target field name** receives the converted text, and the source field is left untouched. Always prefer this on a first run: it preserves the original, lets you compare the two side by side, and costs only a field.",
              "**Unchecked** — The existing field named in **Select target field** is overwritten."
            ]
          },
          "Converting in the wrong direction produces text that is not recoverable by simply converting back, because the two encodings are not a clean round trip for every character. Keeping the source field intact is the safeguard.",
          "After a `Legacy to Unicode` conversion, set the layer's label and symbol fonts to a Unicode Khmer typeface (for example, `Khmer OS` or `Hanuman`); the Limon font will no longer render the converted text correctly."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Choose Converter",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The conversion direction. Default is `Unicode to Legacy`."
              },
              {
                type: "list",
                items: [
                  "`Unicode to Legacy` — Unicode Khmer into Limon encoding",
                  "`Legacy to Unicode` — Limon-encoded text into Unicode"
                ]
              }
            ]
          },
          {
            name: "Input table",
            optional: false,
            type: "Feature Layer; Table View; Table",
            description: [
              {
                type: "paragraph",
                text: "The feature layer or table holding the text to convert."
              }
            ]
          },
          {
            name: "Select source field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The text field holding the text to convert. Text fields only."
              }
            ]
          },
          {
            name: "Create new target field?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects where the converted text is written."
              },
              {
                type: "list",
                items: [
                  "Checked — A new field named in **New target field name** is created; the source is preserved.",
                  "Unchecked (default) — The field in **Select target field** is overwritten."
                ]
              }
            ]
          },
          {
            name: "New target field name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the new field to create. Required when **Create new target field?** is checked."
              }
            ]
          },
          {
            name: "Select target field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The existing text field to overwrite. Required when **Create new target field?** is unchecked. Text fields only."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Attribute** menu and click **Khmer Font Converter**.",
          "Set **Choose Converter** to the required direction — `Legacy to Unicode` to modernise old data.",
          "Set **Input table** and **Select source field**.",
          "Check **Create new target field?** and type a name in **New target field name**, so the original text is preserved.",
          "Click **Run**.",
          "Open the attribute table and compare the new field against the source. If the result is wrong, the direction was probably reversed — the source field is still intact, so simply run again with the other direction.",
          "For a `Legacy to Unicode` conversion, set the layer's label font to a Unicode Khmer typeface such as `Khmer OS` or `Hanuman`."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "value-type-converter",
      "attribute-value-combiner",
      "value-splitter",
      "label-control"
    ]
  },
  {
    slug: "select-to-enter-value",
    group: "datamanagement",
    name: "Select To Enter Value",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Attribute ▸ Select To Enter Value",
    actsOn: [],
    summary: {
      km: "ដាក់តម្លៃទៅវាលដែលបានជ្រើស សម្រាប់លក្ខណៈដែលអ្នករើសលើផែនទី ជាមួយការមើលការជ្រើសជាមុន និងអាចប្រើកន្សោមជំនួសតម្លៃវាយផ្ទាល់។",
      en: "Assigns a value to a chosen field for the features you pick on the map, with a preview of the selection and an optional expression instead of a typed value."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the tool for attributing features as you identify them visually — clicking the parcels that belong to one owner, or the points that failed inspection, and stamping the value on all of them at once."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The workflow is selection-driven. **Select To Input Value** picks the features on the map; **Selected Feature Preview** shows what is currently selected, so you can confirm before writing.",
          "**Value** takes the value to write. **Use Expression** switches to expression entry instead, with **Expression...** opening the builder and **Active expression:** showing what is in force.",
          "For a boolean field, **True** and **False** buttons set the value directly.",
          "**Set Null Value** writes null. This is how a field is deliberately cleared — leaving **Value** blank is not equivalent, since an empty text value is not null.",
          {
            text: "**Overwrite existing value** governs what happens where the field already holds data:",
            items: [
              "**Checked** — existing values are replaced.",
              "**Unchecked** — populated fields are left alone, so only empty ones are filled. Use this to fill gaps without disturbing already-verified data."
            ]
          },
          "Check **Selected Feature Preview** before clicking **Apply Value**. A stray click on the map adds a feature to the selection, and the preview is where that becomes visible.",
          "For writing a value to a whole layer rather than a picked set, use [Add value to fields](../VectorIQ/AddValueToFields.md). For filling nulls from a computed strategy, use [Default Value Filler](../VectorIQ/DefaultValueFiller.md)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer to edit."
              }
            ]
          },
          {
            name: "Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field that receives the value."
              }
            ]
          },
          {
            name: "Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The value to write."
              }
            ]
          },
          {
            name: "Overwrite existing value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces values already present. Unchecked, only empty fields are filled."
              }
            ]
          },
          {
            name: "Set Null Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes null, clearing the field."
              }
            ]
          },
          {
            name: "Use Expression",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Derives the value from an expression rather than a typed value."
              }
            ]
          },
          {
            name: "Expression...",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Opens the expression builder."
              }
            ]
          },
          {
            name: "Active expression:",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Shows the expression currently in force."
              }
            ]
          },
          {
            name: "True** / **False",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Sets a boolean value directly."
              }
            ]
          },
          {
            name: "Select To Input Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Activates map selection for picking the features."
              }
            ]
          },
          {
            name: "Selected Feature Preview",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Lists the features currently selected. Check this before applying."
              }
            ]
          },
          {
            name: "Apply Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the value to the selected features."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Attribute** menu and click **Select To Enter Value**.",
          "Set **Layer** and **Field**.",
          "Type the value in **Value**, or check **Use Expression** and click **Expression...** to build one.",
          "To protect existing data, leave **Overwrite existing value** unchecked.",
          "Click **Select To Input Value** and click the features on the map.",
          "Check **Selected Feature Preview** and confirm it lists exactly the features you intended.",
          "Click **Apply Value**.",
          "Repeat for the next value, picking a different set of features."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-value-to-fields",
      "default-value-filler",
      "attribute-reclassifier",
      "edit-table"
    ]
  },
  {
    slug: "excel-editor-settings",
    group: "datamanagement",
    name: "Settings (Excel Editor)",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Necessary Edit Tools ▸ Edit in Excel ▸ Settings",
    actsOn: [],
    summary: {
      km: "កំណត់រចនាសម្ព័ន្ធការនាំចេញ-នាំចូល Excel — កន្លែងសរសេរ workbook អ្វីដែលវាផ្ទុក និងរបៀបផ្ទៀងផ្ទាត់ការកែពេលអនុវត្ត។",
      en: "Configures the Excel attribute editing round trip — where workbooks are written, what they contain, and how edits are validated when applied."
    },
    body: [
      {
        type: "paragraph",
        text: "These settings govern the behaviour of [Edit in Excel](EditInExcel.md) and [Apply Excel Edits](ApplyExcelEdits.md). Set them once before using either."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Export Location** is the folder workbooks are written to. Leaving it empty uses the system temp directory, as the dialog notes. Set a real folder for work that spans more than one session — the operating system can clear temp files, taking an in-progress edit with them.",
          "**Export Options** shape the workbook:"
        ]
      },
      {
        type: "table",
        head: [
          "Option",
          "Effect"
        ],
        rows: [
          [
            "**Show OBJECTID column (read-only)**",
            "Includes `OBJECTID` as a read-only column. Worth enabling: it makes visible the key the apply step matches on, so it is obvious that those values must not be edited."
          ],
          [
            "**Apply domain value dropdowns in Excel**",
            "Turns coded-value domains into Excel dropdowns, keeping entry within the permitted values and preventing rows the apply step would reject."
          ],
          [
            "**Max records (0 = unlimited)**",
            "Caps the exported row count. **Check this before exporting a large layer** — a cap below the layer's row count means only part of the data is exported, and only that part will be edited."
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Import Options** govern the apply step:"
        ]
      },
      {
        type: "table",
        head: [
          "Option",
          "Effect"
        ],
        rows: [
          [
            "**Create backup before applying edits**",
            "Backs up the feature class before writing. Leave this on — it is the practical way back from a bad apply."
          ],
          [
            "**Skip invalid rows (otherwise abort all)**",
            "Unchecked, the whole apply aborts on the first invalid row and the feature class is untouched. Checked, valid rows are written and bad ones reported, leaving the data partly updated."
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Reset Defaults** restores the original settings.",
          "The two most consequential choices are **Max records** (which can silently limit what you export) and **Skip invalid rows** (which decides whether a failed apply leaves the data whole or partly changed)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Export Location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The folder workbooks are written to. Empty means the system temp directory."
              }
            ]
          },
          {
            name: "Browse...",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Browses for the export folder."
              }
            ]
          },
          {
            name: "Show OBJECTID column (read-only)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Includes `OBJECTID` in the workbook as a read-only column."
              }
            ]
          },
          {
            name: "Apply domain value dropdowns in Excel",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Renders coded-value domains as Excel dropdowns."
              }
            ]
          },
          {
            name: "Max records (0 = unlimited)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The maximum number of rows exported. `0` means no limit."
              }
            ]
          },
          {
            name: "Create backup before applying edits",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Backs up the feature class before the apply step writes to it."
              }
            ]
          },
          {
            name: "Skip invalid rows (otherwise abort all)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Skips invalid rows instead of aborting the whole apply."
              }
            ]
          },
          {
            name: "Reset Defaults",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restores the original settings."
              }
            ]
          },
          {
            name: "OK",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Saves the settings."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Necessary Edit Tools** group, open the **Edit in Excel** menu and click **Settings**.",
          "Click **Browse...** and set an **Export Location** in a real folder, not the temp directory.",
          "Check **Show OBJECTID column (read-only)** and **Apply domain value dropdowns in Excel**.",
          "Set **Max records** to `0` unless you deliberately want to cap the export.",
          "Check **Create backup before applying edits**.",
          "Leave **Skip invalid rows** unchecked for an all-or-nothing apply, or check it to let a large edit proceed past a few bad rows.",
          "Click **OK**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "edit-in-excel",
      "apply-excel-edits",
      "edit-table"
    ]
  },
  {
    slug: "add-multiple-fields",
    group: "vectoriq",
    name: "Add multiple Fields",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Manage ▸ Add multiple Fields",
    actsOn: [],
    summary: {
      km: "បង្កើតវាលគុណលក្ខណៈជាច្រើនលើស្រទាប់តែមួយក្នុងជំហានតែមួយ ដោយគ្រប់គ្រងឈ្មោះ ប្រភេទ ប្រវែង alias និងលក្ខណៈ nullable របស់វាលនីមួយៗពេញលេញ។",
      en: "Creates several attribute fields on one layer in a single pass, with full control over each field's name, type, length, alias, and nullability."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "Fields are defined in the **Fields To Create** grid, one row per field. Use **Add Row** and **Remove Row** to build the list.",
          "Each row carries five properties:"
        ]
      },
      {
        type: "table",
        head: [
          "Column",
          "Explanation"
        ],
        rows: [
          [
            "**Name**",
            "The field name, subject to the target workspace's naming rules"
          ],
          [
            "**Type**",
            "The field data type"
          ],
          [
            "**Length**",
            "The character length; applies to text fields only and is ignored for other types"
          ],
          [
            "**Alias**",
            "The display name shown in the attribute table and in labels"
          ],
          [
            "**Nullable**",
            "Whether the field accepts null values"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "The **Alias** column is the reason to prefer this tool over the standard **Fields** view for bulk work: a descriptive alias can be set at creation time rather than added afterwards, and aliases are what appear in the attribute table and pop-ups.",
          "Field names must satisfy the target workspace's rules. Shapefiles limit names to 10 characters; geodatabases are far more permissive. If the layer is a shapefile, keep names short and put the readable text in **Alias**.",
          "This tool adds many fields to **one** layer. To add one field to **many** layers, use [Batch Add Field](../DataManagement/BatchAddField.md)."
        ]
      },
      {
        type: "table",
        head: [
          "Need",
          "Tool"
        ],
        rows: [
          [
            "Many fields → one layer",
            "**Add multiple Fields** (this tool)"
          ],
          [
            "One field → many layers",
            "[Batch Add Field](../DataManagement/BatchAddField.md)"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Setting **Nullable** to false on a field commits you to supplying a value for every existing feature as well as every new one — check that the layer's existing rows can satisfy that before disallowing nulls."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Target Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table that receives the new fields."
              }
            ]
          },
          {
            name: "Fields To Create",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The grid of field definitions — **Name**, **Type**, **Length**, **Alias**, **Nullable** — one row per field."
              }
            ]
          },
          {
            name: "Add Row",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds an empty field definition row."
              }
            ]
          },
          {
            name: "Remove Row",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Deletes the selected row."
              }
            ]
          },
          {
            name: "Create Fields",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Creates every field defined in the grid."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Manage**, and click **Add multiple Fields**.",
          "Set **Target Layer**.",
          "Click **Add Row** and fill in the field's **Name** and **Type**.",
          "For a text field, set **Length**. Set a readable **Alias**, and clear **Nullable** only if every existing row can hold a value.",
          "Repeat for each field.",
          "Click **Create Fields**, then **Close**.",
          "Populate the new fields with [Add value to fields](AddValueToFields.md) or [Default Value Filler](DefaultValueFiller.md)."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "batch-add-field",
      "rename-field",
      "add-value-to-fields",
      "default-value-filler",
      "database-structure-builder"
    ]
  },
  {
    slug: "add-value-to-fields",
    group: "vectoriq",
    name: "Add value to fields",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Manage ▸ Add value to fields",
    actsOn: [],
    summary: {
      km: "សរសេរតម្លៃចូលទៅវាលមួយ ឬច្រើនពេញស្រទាប់ ទាំងជាតម្លៃថេរដែលវាយផ្ទាល់ ឬជាលទ្ធផលនៃកន្សោម។",
      en: "Writes a value into one or more fields across a layer, either as a typed constant or as the result of an expression."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it to stamp a batch code, a survey date, or a source note onto many features at once."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Field Selector** chooses which fields receive the value, so several fields can be populated in one pass.",
          "**Value** takes the constant to write. The **fx** button switches to expression entry, so the value can be derived from other fields rather than typed.",
          "**Set null value** writes null instead of a value. This is the way to clear a field deliberately — leaving **Value** blank is not the same thing, since an empty text value is not null.",
          "**Treat empty text as null** converts an empty string to null as it is written.",
          {
            text: "**Overwrite existing values** governs what happens where the field already holds data:",
            items: [
              "**Checked** — existing values are replaced.",
              "**Unchecked** — populated fields are left alone, so only empty ones are filled. Use this to fill in gaps without disturbing verified data."
            ]
          },
          "**Use selected features only** limits the operation to the current selection.",
          "There is no undo. With **Overwrite existing values** checked and no selection, the tool rewrites the field for every feature in the layer. Test on a selection first.",
          "To fill nulls using a computed strategy — a mean, a median, or the value of the nearest feature — use [Default Value Filler](DefaultValueFiller.md) instead."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Target Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to operate on."
              }
            ]
          },
          {
            name: "Field Selector",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The fields that receive the value."
              }
            ]
          },
          {
            name: "Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The constant to write. The **fx** button switches to expression entry."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the operation to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Overwrite existing values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces values already present. Unchecked, only empty fields are filled."
              }
            ]
          },
          {
            name: "Set null value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes null instead of a value, deliberately clearing the field."
              }
            ]
          },
          {
            name: "Treat empty text as null",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Converts an empty string to null as it is written."
              }
            ]
          },
          {
            name: "Add Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the values."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Manage**, and click **Add value to fields**.",
          "Set **Target Layer**.",
          "Choose the fields in **Field Selector**.",
          "Type the value in **Value**, or click **fx** to build an expression.",
          "To fill only the gaps and protect existing data, leave **Overwrite existing values** unchecked.",
          "Select a few features and check **Use selected features only** for a trial run, then click **Add Value**.",
          "Verify the result, then clear the selection and run for the whole layer."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "default-value-filler",
      "select-to-enter-value",
      "add-multiple-fields",
      "id-generator",
      "attribute-reclassifier"
    ]
  },
  {
    slug: "attribute-reclassifier",
    group: "vectoriq",
    name: "Attribute Reclassifier",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Analyze ▸ Attribute Reclassifier",
    actsOn: [],
    summary: {
      km: "ផ្គូផ្គងតម្លៃគុណលក្ខណៈចាស់ទៅតម្លៃថ្មីតាមរយៈតារាងវិធាន ដោយសរសេរតម្លៃដែលបានចាត់ថ្នាក់ឡើងវិញចូលទៅវាលគោលដៅ។",
      en: "Maps old attribute values to new ones through a rule table, writing the reclassified values into a target field."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it to consolidate categories, apply a code lookup, or bring inconsistent legacy values into a controlled vocabulary."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Rules are defined in the **Rules** grid, one row per mapping, with an **Old Value** and a **New Value**.",
          "**Populate Value** opens a picker listing the distinct values actually present in the **Source Field**, with **Select All** and **Clear**. Use it rather than typing the old values by hand — it guarantees the rules match the real data, including the trailing spaces and inconsistent capitalisation that hand-typed rules miss.",
          "**Copy** and **Paste** move rules between runs, so a mapping table can be reused across layers. **Remove Row** deletes a rule.",
          "**Unmatched values** decides what happens to a value with no rule. Decide this deliberately: leaving unmatched values as they are preserves data the rules did not anticipate, while clearing them produces a clean controlled vocabulary at the cost of losing anything you forgot to map.",
          "**Source Field** supplies the values and **Target Field** receives them. Using a separate target field keeps the original values available for checking, which is worth doing on a first pass.",
          "**Overwrite existing target values** governs whether populated target values are replaced.",
          "**Use selected features only** restricts the operation to the current map selection."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to operate on."
              }
            ]
          },
          {
            name: "Source Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field supplying the values to reclassify."
              }
            ]
          },
          {
            name: "Target Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field receiving the reclassified values."
              }
            ]
          },
          {
            name: "Rules",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The mapping grid — **Old Value** to **New Value**, one row per rule."
              }
            ]
          },
          {
            name: "Populate Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Opens a picker listing the distinct values present in **Source Field**, with **Select All** and **Clear**."
              }
            ]
          },
          {
            name: "Copy** / **Paste",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Copies the rule set out and back in, for reuse across layers."
              }
            ]
          },
          {
            name: "Remove Row",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Deletes the selected rule."
              }
            ]
          },
          {
            name: "Unmatched values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "How values with no matching rule are handled."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the operation to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Overwrite existing target values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces values already present in the target field."
              }
            ]
          },
          {
            name: "Apply",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the reclassified values."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Create a target field to receive the new values, using [Add multiple Fields](AddMultipleFields.md).",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Analyze**, and click **Attribute Reclassifier**.",
          "Set **Layer**, **Source Field**, and **Target Field**.",
          "Click **Populate Value**, click **Select All**, and confirm — the grid now lists every value actually present.",
          "Fill in the **New Value** for each rule.",
          "Set **Unmatched values** according to whether unmapped values should be kept or cleared.",
          "Click **Apply**.",
          "Compare the source and target fields in the attribute table. Click **Copy** to save the rule set for the next layer."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-value-to-fields",
      "value-splitter",
      "attribute-value-combiner",
      "statistics-summary",
      "khmer-font-converter"
    ]
  },
  {
    slug: "attribute-value-combiner",
    group: "vectoriq",
    name: "Attribute Value Combiner",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Manage ▸ Attribute Value Combiner",
    actsOn: [],
    summary: {
      km: "ភ្ជាប់តម្លៃនៃវាលជាច្រើនចូលទៅវាលអក្សរតែមួយ ជាមួយសញ្ញាបំបែកដែលបានជ្រើស និងការមើលជាមុនផ្ទាល់។",
      en: "Joins the values of several fields into one text field, with a chosen separator and a live preview."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it to build a composite key, a full address from its parts, or a display string for labelling — without writing a field calculator expression."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Output Field** lists only **editable text fields**, as the dialog states. The combined value is text, so a numeric or date field cannot receive it. Create a text field first with [Add multiple Fields](AddMultipleFields.md).",
          "**Source Fields** is the ordered list of fields to join. The **All** and **Clear** buttons select and deselect the whole list.",
          "**Separator** is the text placed between values — a space, a hyphen, a slash, or nothing at all.",
          "**Empty Values** and **Skip empty source values** control what happens when a source field is null. With **Skip empty source values** checked, a missing part does not leave a stranded separator behind, so `Village--District` becomes `Village-District`. Leave it unchecked only when the position of each part must be preserved.",
          "The **Preview** pane shows the combined result for real features before anything is written. Check it — it is where a wrong separator or a wrong field order becomes obvious.",
          "**Overwrite existing output values** governs whether populated output values are replaced or left alone.",
          "**Use selected features only** limits the operation to the current selection, which is the safe way to test.",
          "The combined value is a snapshot, not a live expression. Editing a source field afterwards does not update the output field — run the tool again. If you need a value that always tracks its sources, build a label expression with [Label Control](../QuickLabel/LabelControl.md) instead."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Target Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to operate on."
              }
            ]
          },
          {
            name: "Output Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The text field that receives the combined value. Only editable text fields are listed."
              }
            ]
          },
          {
            name: "Source Fields",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The ordered list of fields to join. **All** and **Clear** select and deselect everything."
              }
            ]
          },
          {
            name: "Separator",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The text inserted between values."
              }
            ]
          },
          {
            name: "Skip empty source values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Omits null sources rather than leaving a stranded separator."
              }
            ]
          },
          {
            name: "Preview",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "A live preview of the combined result for real features."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the operation to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Overwrite existing output values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces values already present in the output field."
              }
            ]
          },
          {
            name: "Combine Attributes",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the combined values."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Create a text field long enough for the combined result, using [Add multiple Fields](AddMultipleFields.md).",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Manage**, and click **Attribute Value Combiner**.",
          "Set **Target Layer** and **Output Field**.",
          "Select the fields to join in **Source Fields**, in the order they should appear.",
          "Type the **Separator**.",
          "Check **Skip empty source values** so missing parts do not leave stray separators.",
          "Check the **Preview** pane against what you expected.",
          "Click **Combine Attributes**, then **Close**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "value-splitter",
      "add-multiple-fields",
      "id-generator",
      "label-control"
    ]
  },
  {
    slug: "batch-export",
    group: "vectoriq",
    name: "Batch Export",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Extract ▸ Batch Export",
    actsOn: [],
    summary: {
      km: "នាំចេញស្រទាប់ ឬតារាងជាច្រើនទៅទីតាំងដែលបានជ្រើសក្នុងការរត់តែម្តង ជាមួយបុព្វបទ និងបច្ច័យឈ្មោះរួម។",
      en: "Exports several layers or tables to a chosen location in one run, with a common name prefix and suffix."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "**Available Layer** lists the layers and tables in the map. **Select All** and **Clear** select and deselect the whole list.",
          "**Name Prefix** and **Name Suffix** are applied to every exported name. Use them to mark a batch — a date, a version, or a delivery code — so the exports are distinguishable from the source data and from earlier batches.",
          "**Use selected feature only** exports just the features currently selected in each layer, rather than the whole layer. Note this applies per layer: a layer with no selection exports in full.",
          "**Add exported layer to map?** adds each export to the current map. Leave it unchecked for a large batch, which would otherwise fill the **Contents** pane.",
          "To split a single table into many files by an ID field, use [ID-Based CSV Exporter](../DataManagement/IDBasedCSVExporter.md) instead — that is a different operation from exporting many layers."
        ]
      },
      {
        type: "table",
        head: [
          "Need",
          "Tool"
        ],
        rows: [
          [
            "Many layers → many datasets",
            "**Batch Export** (this tool)"
          ],
          [
            "One table → many CSV files by ID",
            "[ID-Based CSV Exporter](../DataManagement/IDBasedCSVExporter.md)"
          ],
          [
            "One layer → one filtered feature class",
            "[Smart Extract](SmartExtract.md)"
          ]
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Available Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layers and tables available to export. **Select All** and **Clear** toggle the whole list."
              }
            ]
          },
          {
            name: "Output Location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The workspace or folder that receives the exports."
              }
            ]
          },
          {
            name: "Name Prefix",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Text placed before each exported name."
              }
            ]
          },
          {
            name: "Name Suffix",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Text placed after each exported name."
              }
            ]
          },
          {
            name: "Use selected feature only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Exports only the features selected in each layer. A layer with no selection exports in full."
              }
            ]
          },
          {
            name: "Add exported layer to map?",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds each exported dataset to the current map."
              }
            ]
          },
          {
            name: "Export",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Runs the export."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Extract**, and click **Batch Export**.",
          "Tick the layers to export in **Available Layer**, or click **Select All**.",
          "Set **Output Location**.",
          "Type a **Name Prefix** or **Name Suffix** to mark the batch.",
          "For a large batch, leave **Add exported layer to map?** unchecked.",
          "Click **Export**, then **Close**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "smart-extract",
      "id-based-csv-exporter",
      "copy-parcel-to-gdb",
      "clip-multiple"
    ]
  },
  {
    slug: "database-structure-builder",
    group: "vectoriq",
    name: "Database Structure Builder",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Database Structure Builder",
    actsOn: [],
    summary: {
      km: "រចនា និងបង្កើតរចនាសម្ព័ន្ធ geodatabase ទាំងមូលពីផ្ទាំងតែមួយ — feature dataset, feature class និងតារាង — ឬរកឃើញរចនាសម្ព័ន្ធ geodatabase ដែលមានស្រាប់ រួចពង្រីកវា។",
      en: "Designs and builds a whole geodatabase structure from one interface — feature datasets, feature classes, and tables — or detects an existing geodatabase's structure and extends it."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Create Polygon Layer](../DataCreation/CreatePolygonLayer.md) makes one feature class, this tool builds the container and everything in it."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool opens as a **dock pane**, so it stays open while you build the structure up.",
          "**Mode** selects what the tool does, and it governs which parameters are available:"
        ]
      },
      {
        type: "table",
        head: [
          "Mode",
          "Purpose",
          "Parameters enabled"
        ],
        rows: [
          [
            "**Create New Structure**",
            "Build a new geodatabase from scratch",
            "**Database Name**, **Output Folder**, **Create New Geodatabase**"
          ],
          [
            "**Extend Existing Structure**",
            "Add to a geodatabase that already exists",
            "**Geodatabase Source**, **Browse**, **Detect Structure**, **Refresh Structure**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "In **Extend Existing Structure** mode, click **Detect Structure** first. It reads the existing geodatabase and populates the grids, so additions are made against what is really there rather than against an assumption. **Refresh Structure** re-reads it after an external change.",
          "**Feature Datasets** are managed with **Add Feature Dataset**, **Import Feature Dataset**, and **Remove**. Each carries a **Feature Dataset Name**, a **Coordinate System** / **CRS**, and a **Status**. Getting the feature dataset right matters beyond tidiness: a geodatabase topology can only contain feature classes from a single feature dataset, so grouping the layers that must be validated together is what makes [Topology Check](../TopologyCheck/TopologyCheck.md) possible later.",
          "**Feature Classes / Tables** are managed with **Add Feature Class**, **Add Table**, and **Import Feature/Table**. Each row has a **Name**, a **Geometry Type**, and a **Store In** value naming the feature dataset that holds it.",
          "**Import KML/KMZ** is present on the dialog but **not implemented** — it is disabled and reports *\"Import KML/KMZ will be available in a future update.\"* Use [KML Handler](../DataManagement/KMLHandler.md) to bring KML data in.",
          {
            text: "Two options apply to the whole run:",
            items: [
              "**Add created layers to current map** adds everything created to the active map.",
              "**Overwrite existing items** replaces items that already exist. Leave this unchecked when extending a populated geodatabase — overwriting a feature class discards its data."
            ]
          },
          "**Run** builds the structure as designed."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Mode",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "**Create New Structure** or **Extend Existing Structure**."
              }
            ]
          },
          {
            name: "Geodatabase Source",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The existing geodatabase to extend. Extend mode only."
              }
            ]
          },
          {
            name: "Browse",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Browses for the geodatabase or output folder."
              }
            ]
          },
          {
            name: "Detect Structure",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Reads the existing geodatabase and populates the grids. Extend mode only."
              }
            ]
          },
          {
            name: "Refresh Structure",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Re-reads the existing geodatabase after an external change."
              }
            ]
          },
          {
            name: "Database Name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The name of the new geodatabase. Create mode only."
              }
            ]
          },
          {
            name: "Output Folder",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The folder for the new geodatabase. Create mode only."
              }
            ]
          },
          {
            name: "Create New Geodatabase",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Creates the geodatabase. Create mode only."
              }
            ]
          },
          {
            name: "Feature Datasets",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The feature datasets to create, each with **Feature Dataset Name**, **Coordinate System** / **CRS**, and **Status**."
              }
            ]
          },
          {
            name: "Add Feature Dataset** / **Import Feature Dataset** / **Remove",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Manage the feature dataset list."
              }
            ]
          },
          {
            name: "Feature Classes / Tables",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The feature classes and tables to create, each with **Name**, **Geometry Type**, and **Store In**."
              }
            ]
          },
          {
            name: "Add Feature Class** / **Add Table** / **Import Feature/Table",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Manage the feature class and table list."
              }
            ]
          },
          {
            name: "Import KML/KMZ",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Not implemented in this release; the control is disabled."
              }
            ]
          },
          {
            name: "Add created layers to current map",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds everything created to the active map."
              }
            ]
          },
          {
            name: "Overwrite existing items",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces items that already exist. Discards their data."
              }
            ]
          },
          {
            name: "Run",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Builds the structure."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Build a new geodatabase"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu and click **Database Structure Builder**.",
          "Set **Mode** to **Create New Structure**.",
          "Type a **Database Name** and set the **Output Folder**.",
          "Click **Add Feature Dataset**, name it, and set its **Coordinate System**. Group together the layers that will need to be validated as one topology.",
          "Click **Add Feature Class** for each layer, setting its **Name**, **Geometry Type**, and the **Store In** feature dataset. Use **Add Table** for non-spatial tables.",
          "Check **Add created layers to current map**.",
          "Click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "Extend an existing geodatabase"
      },
      {
        type: "steps",
        items: [
          "Open the tool and set **Mode** to **Extend Existing Structure**.",
          "Set **Geodatabase Source** with **Browse**.",
          "Click **Detect Structure** and wait for the grids to populate.",
          "Add the new feature datasets, feature classes, or tables.",
          "Leave **Overwrite existing items** unchecked, so existing data is not discarded.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-multiple-fields",
      "create-polygon-layer",
      "lmap-layer",
      "topology-check",
      "kml-handler"
    ]
  },
  {
    slug: "default-value-filler",
    group: "vectoriq",
    name: "Default Value Filler",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Attribute ▸ Default Value Filler",
    actsOn: [],
    summary: {
      km: "បំពេញតម្លៃទទេក្នុងវាល ដោយប្រើយុទ្ធសាស្ត្រដែលបានជ្រើស — តម្លៃថេរ មធ្យម មធ្យមភាគ តម្លៃមុន ឬតម្លៃនៃលក្ខណៈជិតបំផុត — ជាមួយតារាងពិនិត្យបង្ហាញច្បាស់នូវអ្វីដែលនឹងផ្លាស់ប្តូរ មុនពេលសរសេរ។",
      en: "Fills null values in a field using a chosen strategy — a constant, the mean, the median, the previous value, or the value of the nearest feature — with a review grid showing exactly what will change before anything is written."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Add value to fields](AddValueToFields.md) writes a value you supply, this tool derives the value from the data itself."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool opens as a **dock pane** rather than a modal window, so it can stay open beside the map while you work.",
          "**Filling Strategy** determines where the replacement value comes from:"
        ]
      },
      {
        type: "table",
        head: [
          "Strategy",
          "Replacement value",
          "Suits"
        ],
        rows: [
          [
            "`Constant`",
            "The value typed into **Constant Value**",
            "A known default, such as a status code"
          ],
          [
            "`Mean`",
            "The arithmetic mean of the field's non-null values",
            "Numeric data without significant outliers"
          ],
          [
            "`Median`",
            "The middle value of the field's non-null values",
            "Numeric data with outliers — a single extreme value distorts the mean but not the median"
          ],
          [
            "`Forward Fill`",
            "The previous non-null value in feature order",
            "Ordered data where a blank means \"same as above\""
          ],
          [
            "`Nearest Feature`",
            "The value of the geographically nearest feature that has one",
            "Spatially correlated attributes, such as a commune name or a land-use class"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "`Mean` and `Median` apply to numeric fields only. `Forward Fill` depends on feature order, so confirm that order is meaningful before relying on it.",
          "**The workflow is Analyze → review → Fill → Save.** This is the important thing about this tool: 1. **Analyze** inspects the field and populates the grid, listing each affected row with its **OID**, **Current Value**, and the **Action** to be taken. 2. Review that grid. Nothing has been written yet. 3. **Fill Nulls** applies the strategy. 4. **Save Edits** commits the changes to the data. Because the changes are staged as edits, they can be discarded before saving — use ArcGIS Pro's **Discard** if the result is wrong.",
          "**Select Nulls** selects the features with null values in the map, so they can be inspected geographically before any filling. A cluster of nulls in one area often points to a data-collection gap rather than something to be filled statistically.",
          "**Treat empty text as null** includes empty strings among the values considered null. Without it, a field full of empty strings appears to have no nulls at all.",
          "**Use selected features only** limits the operation to the current selection.",
          "Filling a null replaces \"unknown\" with an estimate. For anything that will be reported or relied on, record which values were derived rather than observed."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Input Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to operate on."
              }
            ]
          },
          {
            name: "Field Selector",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field whose nulls are filled."
              }
            ]
          },
          {
            name: "Filling Strategy",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The source of the replacement value — `Constant`, `Mean`, `Median`, `Forward Fill`, or `Nearest Feature`."
              }
            ]
          },
          {
            name: "Constant Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The value to write. Used with the `Constant` strategy."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the operation to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Treat empty text as null",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Counts empty strings as null."
              }
            ]
          },
          {
            name: "Analyze",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Inspects the field and fills the review grid. Writes nothing."
              }
            ]
          },
          {
            name: "Select Nulls",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Selects the features holding null values, for inspection on the map."
              }
            ]
          },
          {
            name: "Fill Nulls",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Applies the chosen strategy as a staged edit."
              }
            ]
          },
          {
            name: "Save Edits",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Commits the staged edits to the data."
              }
            ]
          },
          {
            name: "OID** / **Current Value** / **Action",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Review grid columns showing each affected row and what will happen to it."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Attribute** menu and click **Default Value Filler**. The dock pane opens.",
          "Set **Input Layer** and choose the field in **Field Selector**.",
          "Check **Treat empty text as null** if blanks are stored as empty strings.",
          "Click **Select Nulls** and look at where they fall on the map. If they cluster, consider whether filling is appropriate at all.",
          "Choose a **Filling Strategy**. Prefer `Median` over `Mean` where the data has outliers; choose `Nearest Feature` for spatially correlated attributes.",
          "Click **Analyze** and read the grid. Confirm the **Action** column is what you intend for every row.",
          "Click **Fill Nulls**.",
          "Check the result, then click **Save Edits** to commit — or discard the edits if the result is wrong."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-value-to-fields",
      "select-to-enter-value",
      "statistics-summary",
      "nearest-feature-distance"
    ]
  },
  {
    slug: "direction-selector",
    group: "vectoriq",
    name: "Direction Selector",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Select ▸ Direction Selector",
    actsOn: [],
    summary: {
      km: "ជ្រើសរើសខ្សែដែលទិស azimuth ខាងជើងស្ថិតក្នុងចន្លោះមុំដែលបានកំណត់ ជាមួយកម្រិតល្អៀង។",
      en: "Selects line features whose north azimuth direction falls within a given angular range, with a tolerance."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it to isolate the roads running roughly east–west, or to find the parcel boundaries that do not follow the prevailing survey grid."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**From Angle** and **To Angle** define the azimuth range, measured as a north azimuth — 0° is north, 90° is east, 180° is south, 270° is west.",
          "**Tolerance** widens the range at both ends, so a range of 88° to 92° with a tolerance of 3° effectively tests 85° to 95°.",
          "**Line direction matters.** A line digitised west-to-east has an azimuth of 90°; the same line digitised east-to-west has an azimuth of 270°. If a search returns fewer features than expected, test the opposite range as well — or search both.",
          {
            text: "**Selection Mode** controls how the result combines with the existing selection: `Add To Selection` is how a two-pass search is built: run 85°–95°, then run 265°–275° adding to the selection, and you have every roughly east–west line regardless of digitising direction.",
            items: [
              "`New Selection` (default) — replaces the current selection",
              "`Add To Selection` — adds to it"
            ]
          },
          "**Use selected feature** restricts the test to the features currently selected, so a large selection can be narrowed down.",
          "Only line layers are accepted."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Line Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The line layer to test."
              }
            ]
          },
          {
            name: "From Angle",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The start of the north azimuth range, in degrees."
              }
            ]
          },
          {
            name: "To Angle",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The end of the north azimuth range, in degrees."
              }
            ]
          },
          {
            name: "Tolerance",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The angular tolerance applied at both ends of the range."
              }
            ]
          },
          {
            name: "Selection Mode",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "`New Selection` replaces the current selection; `Add To Selection` adds to it."
              }
            ]
          },
          {
            name: "Use selected feature",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Tests only the features currently selected, narrowing an existing selection."
              }
            ]
          },
          {
            name: "Select",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Applies the selection."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Select**, and click **Direction Selector**.",
          "Set **Line Layer**.",
          "Enter the azimuth range in **From Angle** and **To Angle** — for example, 85 to 95 for roughly east-running lines.",
          "Set **Tolerance**.",
          "Leave **Selection Mode** at `New Selection` and click **Select**.",
          "To catch lines digitised in the opposite direction, change the range to the reciprocal bearings (265 to 275 in this example), set **Selection Mode** to `Add To Selection`, and click **Select** again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "direction-analyzer",
      "smart-select",
      "display-line-bearing-and-direction",
      "bearing-distance-calculator"
    ]
  },
  {
    slug: "feature-percentage",
    group: "vectoriq",
    name: "Feature Percentage",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Calculation ▸ Feature Percentage",
    actsOn: [],
    summary: {
      km: "គណនាចំណែករបស់លក្ខណៈនីមួយៗធៀបនឹងសរុបជាភាគរយ ដោយសរសេរលទ្ធផលចូលវាលដែលមានស្រាប់ ឬវាលថ្មីដែលបង្កើតភ្លាម។",
      en: "Calculates each feature's share of the total as a percentage, writing the result into an existing field or a new one created on the spot."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Percent Coverage](../Geoprocessing/PercentCoverage.md) reports one figure per layer, this tool writes a percentage onto every feature — the per-parcel share of a commune's area, for instance."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Output Field** receives the percentage. Check **Create new field** to have the tool create it, which enables **Field name**, **Type**, **Length**, and **New Field Alias**.",
          "**Decimal Places** controls rounding and must be between **0 and 8**. A value outside that range is rejected with the message *\"Decimal places must be between 0 and 8.\"*",
          "**Add % notation for text fields** appends a `%` symbol to the value. It is only available when the output field is a text field, and the dialog disables it otherwise. The choice has a consequence worth weighing: a numeric field holds a value you can sum, sort, and symbolise on, but displays as a bare number; a text field with `%` reads correctly in a table but cannot be used in calculations. Choose numeric unless the field exists purely for display.",
          "Percentages are computed from geometry, so the layer should be in a projected coordinate system."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer whose features are measured."
              }
            ]
          },
          {
            name: "Output Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field that receives the percentage."
              }
            ]
          },
          {
            name: "Create new field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Creates the output field, enabling **Field name**, **Type**, **Length**, and **New Field Alias**."
              }
            ]
          },
          {
            name: "Field name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The name of the new field."
              }
            ]
          },
          {
            name: "Type",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The data type of the new field."
              }
            ]
          },
          {
            name: "Length",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The character length, for a text field."
              }
            ]
          },
          {
            name: "New Field Alias",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The display name of the new field."
              }
            ]
          },
          {
            name: "Decimal Places",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The number of decimal places. Must be between 0 and 8."
              }
            ]
          },
          {
            name: "Add % notation for text fields",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Appends a `%` symbol. Available only for text output fields."
              }
            ]
          },
          {
            name: "Calculate",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the percentages."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Calculation**, and click **Feature Percentage**.",
          "Set **Layer**.",
          "Check **Create new field**, then set **Field name**, **Type**, and **New Field Alias**. Choose a numeric type unless the field is only for display.",
          "Set **Decimal Places** between 0 and 8.",
          "If you chose a text field and want the symbol shown, check **Add % notation for text fields**.",
          "Click **Calculate**, then **Close**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "percent-coverage",
      "statistics-summary",
      "shape-metrics",
      "add-multiple-fields"
    ]
  },
  {
    slug: "geo-dashboard",
    group: "vectoriq",
    name: "GeoDashboard",
    status: "planned",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: null,
    actsOn: [
      {
        type: "paragraph",
        text: "None. The tool collects no input in this release."
      }
    ],
    summary: {
      km: "គ្រោងផ្តល់ផ្ទាំង dashboard អន្តរកម្មសម្រាប់មើលឃើញ និងវិភាគទិន្នន័យ។",
      en: "Intended to provide an interactive dashboard for data visualisation and analysis."
    },
    body: [
      {
        type: "note",
        tone: "warning",
        text: "**This tool is not yet implemented.** Clicking it displays the message *\"GeoDashboard will be available in a future update.\"* and nothing else happens. It is documented here because the button appears on the ribbon."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The button is present at the top of the **VectorIQ** menu but performs no work in this release.",
          "No parameters are collected and no dashboard is shown — only the notice above."
        ]
      },
      {
        type: "subheading",
        text: "Achieving the same result today"
      },
      {
        type: "paragraph",
        text: "Until the dashboard ships, the same questions can be answered with the tools that do work:"
      },
      {
        type: "table",
        head: [
          "Need",
          "Use instead"
        ],
        rows: [
          [
            "Descriptive statistics for a field",
            "[Statistics Summary](StatisticsSummary.md)"
          ],
          [
            "Statistics grouped by a category",
            "[Pivot Table Builder](PivotTableBuilder.md)"
          ],
          [
            "Geometry statistics for a layer",
            "[Shape Metrics](ShapeMetrics.md)"
          ],
          [
            "Feature counts across layers",
            "[Feature Counter](../Cadastral/FeatureCounter.md)"
          ],
          [
            "Coverage percentages",
            "[Percent Coverage](../Geoprocessing/PercentCoverage.md)"
          ],
          [
            "Charts and interactive views",
            "ArcGIS Pro's own **Charts** and **Dashboards**"
          ]
        ]
      },
      {
        type: "paragraph",
        text: "Both [Statistics Summary](StatisticsSummary.md) and [Shape Metrics](ShapeMetrics.md) have a **Copy card** button, and [Pivot Table Builder](PivotTableBuilder.md) has **Export Pivot**, so a reporting summary can be assembled from them without the dashboard."
      }
    ],
    parameters: [],
    steps: [
      {
        type: "paragraph",
        text: "There is no working procedure in this release. See *Achieving the same result today* above."
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Not applicable — the tool performs no licensed work in this release."
      }
    ],
    environments: [],
    seeAlso: [
      "statistics-summary",
      "pivot-table-builder",
      "shape-metrics",
      "feature-counter"
    ]
  },
  {
    slug: "id-generator",
    group: "vectoriq",
    name: "ID Generator",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Manage ▸ ID Generator",
    actsOn: [],
    summary: {
      km: "បំពេញវាលដោយលេខសម្គាល់តាមលំដាប់ ដែលបង្កើតពីតម្លៃចាប់ផ្តើម ជំហាន ការបំពេញលេខសូន្យ និងបុព្វបទ-បច្ច័យតាមជម្រើស។",
      en: "Populates a field with sequential identifiers, built from a start value, a step, zero padding, and an optional prefix and suffix."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it to number parcels, boundary points, or survey marks in a consistent scheme."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The identifier is assembled as `Prefix` + zero-padded number + `Suffix`. For example, a start of `1`, a **Pad Width** of `3`, a prefix of `P-`, and no suffix produces `P-001`, `P-002`, `P-003`.",
          "**Pad Width** is the reason to use this tool rather than a plain counter. Zero padding makes identifiers sort correctly as text: without it, `10` sorts before `2`. Set the width to accommodate the largest number you expect — a width of `3` runs out at 999.",
          "**Step** allows gaps in the sequence. A step of `10` yields 10, 20, 30, leaving room for later insertions.",
          "**Use selected features only** limits numbering to the current selection. This is how a subset is renumbered without disturbing the rest — but note that the sequence restarts from **Start** for the selection, so check that the numbers it produces do not collide with existing ones.",
          "The numbering order follows the layer's feature order. If the identifiers must run in a particular geographic sequence, sort or renumber accordingly — the tool does not order features spatially.",
          "Existing values in the target field are replaced. Confirm the field is the right one before generating, and consider running [Duplicate Finder](../Cadastral/DuplicateFinder.md) afterwards to verify uniqueness."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Target Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to number."
              }
            ]
          },
          {
            name: "Target Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field that receives the generated identifiers. Existing values are replaced."
              }
            ]
          },
          {
            name: "Start",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The first number in the sequence."
              }
            ]
          },
          {
            name: "Step",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The increment between consecutive numbers. Use a value above 1 to leave gaps."
              }
            ]
          },
          {
            name: "Pad Width",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The total digit width, zero-padded on the left, so identifiers sort correctly as text."
              }
            ]
          },
          {
            name: "Prefix",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Text placed before the number."
              }
            ]
          },
          {
            name: "Suffix",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Text placed after the number."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Numbers only the features currently selected in the map. The sequence restarts from **Start**."
              }
            ]
          },
          {
            name: "Generate IDs",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the identifiers."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Create or choose the target field. A text field is required if you use a prefix, suffix, or padding.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Manage**, and click **ID Generator**.",
          "Set **Target Layer** and **Target Field**.",
          "Set **Start** and **Step**.",
          "Set **Pad Width** wide enough for the largest number you expect.",
          "Type a **Prefix** and **Suffix** if the scheme calls for them.",
          "Click **Generate IDs**, then **Close**.",
          "Run [Duplicate Finder](../Cadastral/DuplicateFinder.md) to confirm the identifiers are unique."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "duplicate-finder",
      "parcel-number-audit",
      "add-value-to-fields",
      "attribute-value-combiner"
    ]
  },
  {
    slug: "nearest-feature-distance",
    group: "vectoriq",
    name: "Nearest Feature Distance",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Select ▸ Nearest Feature Distance",
    actsOn: [],
    summary: {
      km: "រកលក្ខណៈជិតបំផុតក្នុងស្រទាប់មួយទៀត សម្រាប់លក្ខណៈនីមួយៗក្នុងស្រទាប់ប្រភព ក្នុងចម្ងាយអតិបរមាដែលកំណត់ រួចជ្រើស ឬនាំចេញលទ្ធផល។",
      en: "Finds, for each feature in a source layer, the nearest feature in another layer within a maximum distance, and selects or exports the results."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it to find the parcels within reach of a road, the buildings nearest a water point, or the features that have no neighbour inside a threshold."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Source Layer** holds the features being measured from; **Near Layer** holds the features being measured to.",
          "**Maximum Distance** caps the search. A source feature with no near-layer feature inside that distance is simply not matched — which makes this a useful way to find isolated features, by looking at what is *not* selected.",
          "Distances are measured in the layers' coordinate system units, so both layers should be in a projected coordinate system. Distances from a geographic coordinate system are in degrees and vary with latitude.",
          "**Selection Mode** controls how the result combines with the existing selection — `New Selection` or `Add To Selection`.",
          {
            text: "Two independent restrictions narrow what is considered: Combine them to answer a specific question, such as the distance from one chosen parcel to a particular road segment.",
            items: [
              "**Use selected source feature** — measure only from the currently selected source features",
              "**Use selected near feature** — measure only to the currently selected near features"
            ]
          },
          "**Export Features** writes the result as a new dataset rather than only selecting it."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Source Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer whose features are measured from."
              }
            ]
          },
          {
            name: "Near Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer whose features are measured to."
              }
            ]
          },
          {
            name: "Maximum Distance",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The search limit, in the layers' coordinate system units. Source features with no match inside this distance are not selected."
              }
            ]
          },
          {
            name: "Selection Mode",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "`New Selection` replaces the current selection; `Add To Selection` adds to it."
              }
            ]
          },
          {
            name: "Use selected source feature",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Measures only from the currently selected source features."
              }
            ]
          },
          {
            name: "Use selected near feature",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Measures only to the currently selected near features."
              }
            ]
          },
          {
            name: "Export Features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the result to a new dataset."
              }
            ]
          },
          {
            name: "Select",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Applies the result as a map selection."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm both layers use a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Select**, and click **Nearest Feature Distance**.",
          "Set **Source Layer** and **Near Layer**.",
          "Set **Maximum Distance**.",
          "Set **Selection Mode** and click **Select**.",
          "To find isolated features instead, invert the selection afterwards — what was not matched is what has no neighbour within the distance.",
          "To keep the result, click **Export Features**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "parcel-adjacency",
      "smart-select",
      "direction-selector",
      "multi-ring-buffer",
      "default-value-filler"
    ]
  },
  {
    slug: "pivot-table-builder",
    group: "vectoriq",
    name: "Pivot Table Builder",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Analyze ▸ Pivot Table Builder",
    actsOn: [],
    summary: {
      km: "ចាត់ក្រុមលក្ខណៈតាមវាលមួយ រួចរាយការណ៍ស្ថិតិពេញលេញលើវាលមួយទៀត ជាតារាង pivot ដែលអាចនាំចេញបាន។",
      en: "Groups features by one field and reports a full set of statistics on another, as a pivot table that can be exported."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the grouped counterpart to [Statistics Summary](StatisticsSummary.md): one row per category, rather than one overall figure."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Group Field** defines the categories — one output row per distinct value. **Value Field** supplies the numbers being summarised.",
          "Every group gets the same columns:"
        ]
      },
      {
        type: "table",
        head: [
          "Column",
          "Meaning"
        ],
        rows: [
          [
            "**Group**",
            "The **Group Field** value"
          ],
          [
            "**Count**",
            "Rows in the group"
          ],
          [
            "**Values**",
            "Rows with a non-null value"
          ],
          [
            "**Nulls** / **Null %**",
            "Rows with no value, in absolute and percentage terms"
          ],
          [
            "**Sum** / **Average**",
            "The total and the mean"
          ],
          [
            "**Minimum** / **Maximum** / **Range**",
            "The extremes and their span"
          ],
          [
            "**Median**",
            "The middle value"
          ],
          [
            "**Variance** / **Std. Dev.**",
            "The spread"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**The Null %** column is the one to read first. A group whose values are mostly null has statistics based on very few rows, and its average is not comparable with a well-populated group's. The column exists so that this is visible rather than hidden.",
          "Choose a **Group Field** with a manageable number of distinct values. Grouping by a near-unique field such as a parcel number produces one row per feature and tells you nothing.",
          "**Use selected features only** restricts the pivot to the current map selection.",
          "**Build Pivot** computes the table; **Export Pivot** writes it out for use in a report or spreadsheet."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to summarise."
              }
            ]
          },
          {
            name: "Group Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field defining the groups. One output row per distinct value."
              }
            ]
          },
          {
            name: "Value Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The numeric field being summarised within each group."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the pivot to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Build Pivot",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Computes the pivot table."
              }
            ]
          },
          {
            name: "Export Pivot",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the pivot table out."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Analyze**, and click **Pivot Table Builder**.",
          "Set **Layer**.",
          "Set **Group Field** to a category field with a reasonable number of distinct values — a land-use class or a village code, not a parcel number.",
          "Set **Value Field** to the number being summarised.",
          "Click **Build Pivot**.",
          "Check the **Null %** column. Discount any group whose values are largely missing.",
          "Click **Export Pivot** to take the result into a spreadsheet or report."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "statistics-summary",
      "percent-coverage",
      "feature-counter",
      "id-based-csv-exporter"
    ]
  },
  {
    slug: "rename-field",
    group: "vectoriq",
    name: "Rename Field",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Manage ▸ Rename Field",
    actsOn: [],
    summary: {
      km: "ប្តូរឈ្មោះវាល ឬប្តូរ alias របស់វា លើស្រទាប់តែមួយ។",
      en: "Renames a field or changes its alias on a single layer."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "**New Field Name** changes the actual field name. **New Alias (optional)** changes only the display name.",
          "Prefer changing the **alias** where possible. The field name is what expressions, joins, symbology, label expressions, definition queries, and any external script refer to — renaming it breaks every one of those references silently. The alias changes only what is displayed, so nothing breaks."
        ]
      },
      {
        type: "table",
        head: [
          "Goal",
          "Change"
        ],
        rows: [
          [
            "Make the attribute table readable",
            "**New Alias (optional)** — safe"
          ],
          [
            "Conform to a delivery specification",
            "**New Field Name** — check dependents first"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Before renaming a field, check whether the layer has label expressions, definition queries, joins, or symbology that reference it. Those will need updating by hand afterwards.",
          "System-managed fields such as `OBJECTID`, `SHAPE`, `SHAPE_Length`, and `SHAPE_Area` cannot be renamed.",
          "Leaving **New Alias (optional)** blank leaves the existing alias unchanged."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Target Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table holding the field."
              }
            ]
          },
          {
            name: "Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field to rename."
              }
            ]
          },
          {
            name: "New Field Name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The new field name. Subject to the workspace's naming rules — 10 characters maximum for shapefiles."
              }
            ]
          },
          {
            name: "New Alias (optional)",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The new display name. Leave blank to keep the current alias."
              }
            ]
          },
          {
            name: "Apply Change",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Applies the rename."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Check whether anything references the field — label expressions, definition queries, joins, symbology, external scripts.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Manage**, and click **Rename Field**.",
          "Set **Target Layer** and **Field**.",
          "If you only need a readable heading, type it into **New Alias (optional)** and leave **New Field Name** as it is.",
          "To change the real name, type it into **New Field Name**.",
          "Click **Apply Change**, then **Close**.",
          "If you changed the name, update anything that referenced the old one."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "field-formatter",
      "add-multiple-fields",
      "value-type-converter"
    ]
  },
  {
    slug: "shape-metrics",
    group: "vectoriq",
    name: "Shape Metrics",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Analyze ▸ Shape Metrics",
    actsOn: [],
    summary: {
      km: "រាយការណ៍ស្ថិតិធរណីមាត្ររបស់ស្រទាប់ជាកាតដែលអាចចម្លងបាន — ចំនួន ផ្ទៃក្រឡា ប្រវែង បរិមាត្រ ចំនួនកំពូល និងផ្នែក វិសាលភាព ភាពបង្រួម និងសមាមាត្របំពេញ។",
      en: "Reports geometry statistics for a layer as a copyable card — counts, areas, lengths, perimeters, vertex and part counts, extent, compactness, and fill ratio."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Statistics Summary](StatisticsSummary.md) summarises an attribute field, this tool summarises the geometry itself."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The card groups its metrics by what they describe:"
        ]
      },
      {
        type: "table",
        head: [
          "Group",
          "Metrics"
        ],
        rows: [
          [
            "Counts",
            "**Features**, **Parts**, **Multipart**, **Edges**, **Segments**"
          ],
          [
            "Area",
            "**Total Area**, **Average Area**, **Min Area**, **Max Area**"
          ],
          [
            "Length",
            "**Total Length**, **Average Length**, **Min Length**, **Max Length**"
          ],
          [
            "Perimeter",
            "**Perimeter**, **Avg Perimeter**, **Min Perimeter**, **Max Perimeter**"
          ],
          [
            "Segment size",
            "**Avg Edge**, **Avg Segment**"
          ],
          [
            "Extent",
            "**Extent Width**, **Extent Height**, **Extent Area**, **Extent Center X**, **Extent Center Y**, **Average X**, **Average Y**"
          ],
          [
            "Shape quality",
            "**Compactness**, **Fill Ratio**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          {
            text: "Several of these are diagnostics rather than descriptions:",
            items: [
              "**Multipart** counts features made of more than one piece. An unexpected multipart count in a parcel layer usually means two separate areas share one record — often an editing accident.",
              "**Fill Ratio** compares total feature area against the extent area. A very low ratio means the features occupy a small part of a large extent, which can indicate a stray feature far from the rest of the data.",
              "**Compactness** flags elongated or convoluted geometry.",
              "**Avg Segment** against **Avg Edge** indicates how densely the geometry is digitised."
            ]
          },
          "Areas and lengths are in the layer's coordinate system units, so run the tool on a projected layer for meaningful figures.",
          "**Use selected features only** restricts the metrics to the current map selection.",
          "**Copy card** puts the whole card on the clipboard.",
          "This tool reports aggregate figures. To flag individual features that fail a quality threshold, use [Shape Quality Check](../Cadastral/ShapeQualityCheck.md)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The feature layer to measure."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the metrics to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Analyze",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Computes the metrics."
              }
            ]
          },
          {
            name: "Copy card",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Copies the card to the clipboard."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Analyze**, and click **Shape Metrics**.",
          "Set **Layer**.",
          "Click **Analyze**.",
          "Check **Multipart** — anything above zero in a parcel layer is worth investigating.",
          "Check **Fill Ratio** — a very low value suggests a stray feature far from the rest.",
          "Click **Copy card** to record the figures."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "shape-quality-check",
      "statistics-summary",
      "min-width-check",
      "detect-overlap-gap"
    ]
  },
  {
    slug: "smart-extract",
    group: "vectoriq",
    name: "Smart Extract",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Extract ▸ Smart Extract",
    actsOn: [],
    summary: {
      km: "ស្រង់លក្ខណៈពីស្រទាប់មួយចូលទៅ feature class ថ្មី ដោយអាចត្រងតាម query គុណលក្ខណៈពហុលក្ខខណ្ឌ។",
      en: "Extracts features from one layer into a new feature class, optionally filtered by a multi-condition attribute query."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "The dialog states the scope plainly: *extract one feature layer to a new feature class*. For several layers at once, use [Batch Export](BatchExport.md).",
          "**Use attribute query** enables the condition builder. Left unchecked, the whole layer — or the current selection — is extracted.",
          "The condition builder is the same as in [Smart Select](SmartSelect.md). Conditions are combined with **And/Or**, and each compares a **Field** using an **Operator** against either a typed **Value** or another **Compare Field**.",
          "Available operators: `Equals`, `Not Equals`, `Greater Than`, `Greater Or Equal`, `Less Than`, `Less Or Equal`, `Contains`, `Starts With`, `Ends With`, `Is Null`, `Is Not Null`",
          "**Use selected features only** restricts the extraction to the current map selection. It combines with the attribute query — the result is the features that are both selected and match the conditions.",
          "**Select** applies the query as a map selection so it can be checked before extracting. Use it: it is much quicker to correct a condition than to delete an unwanted output.",
          "**Output Location** and **Output Feature Class Name** set where the result is written."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Source Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer to extract from."
              }
            ]
          },
          {
            name: "Use attribute query",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Enables the condition builder. Unchecked, the whole layer (or the selection) is extracted."
              }
            ]
          },
          {
            name: "Add Condition",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds a condition row."
              }
            ]
          },
          {
            name: "And/Or",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "How each condition combines with the previous one."
              }
            ]
          },
          {
            name: "Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field tested by the condition."
              }
            ]
          },
          {
            name: "Operator",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The comparison — `Equals`, `Not Equals`, `Greater Than`, `Greater Or Equal`, `Less Than`, `Less Or Equal`, `Contains`, `Starts With`, `Ends With`, `Is Null`, `Is Not Null`."
              }
            ]
          },
          {
            name: "Compare To",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Whether to compare against a typed **Value** or another **Compare Field**."
              }
            ]
          },
          {
            name: "Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The literal value to compare against."
              }
            ]
          },
          {
            name: "Compare Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field to compare against."
              }
            ]
          },
          {
            name: "Output Location",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The workspace that receives the new feature class."
              }
            ]
          },
          {
            name: "Output Feature Class Name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The name of the new feature class."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts extraction to the current map selection, in addition to the query."
              }
            ]
          },
          {
            name: "Select",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Applies the query as a map selection, without extracting."
              }
            ]
          },
          {
            name: "Extract",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the matching features to the new feature class."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Extract**, and click **Smart Extract**.",
          "Set **Source Layer**.",
          "To filter, check **Use attribute query**, then click **Add Condition** and build the test.",
          "Click **Select** and confirm the highlighted features are the ones you want.",
          "Set **Output Location** and **Output Feature Class Name**.",
          "Click **Extract**, then **Close**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "smart-select",
      "batch-export",
      "clip-multiple",
      "filter-selection"
    ]
  },
  {
    slug: "smart-select",
    group: "vectoriq",
    name: "Smart Select",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Select ▸ Smart Select",
    actsOn: [],
    summary: {
      km: "បង្កើត query គុណលក្ខណៈពហុលក្ខខណ្ឌជាមួយតក្កវិជ្ជា And/Or រួចជ្រើសលក្ខណៈដែលត្រូវគ្នា ឬនាំចេញវាទៅ feature class ឬតារាងថ្មី។",
      en: "Builds a multi-condition attribute query with And/Or logic, then selects the matching features or exports them to a new feature class or table."
    },
    body: [
      {
        type: "paragraph",
        text: "The condition builder compares a field against a typed value or against **another field** — a comparison the standard Select By Attributes dialog cannot express without hand-written SQL."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Conditions are added with **Add Condition** and combined with the **And/Or** column, so several tests can be chained.",
          "Each condition has four parts:"
        ]
      },
      {
        type: "table",
        head: [
          "Part",
          "Explanation"
        ],
        rows: [
          [
            "**Field**",
            "The field being tested"
          ],
          [
            "**Operator**",
            "The comparison to apply"
          ],
          [
            "**Compare To**",
            "Whether the right-hand side is a typed **Value** or another **Compare Field**"
          ],
          [
            "**Value** / **Compare Field**",
            "The value to compare against, or the field to compare against"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "The **Compare To** switch is what makes this tool worth using: setting it to **Compare Field** compares two fields on the same feature — finding rows where a recorded area disagrees with a calculated one, for instance.",
          "Available operators: `Equals`, `Not Equals`, `Greater Than`, `Greater Or Equal`, `Less Than`, `Less Or Equal`, `Contains`, `Starts With`, `Ends With`, `Is Null`, `Is Not Null`",
          "`Is Null` and `Is Not Null` take no value. They are the reliable way to find missing data — an equality test against an empty string does not find true nulls.",
          "**Selection Mode** controls how the result combines with any existing selection — a new selection, or added to the current one.",
          {
            text: "Results can be selected in the map or exported. **Output** offers three destinations:",
            items: [
              "**Project default geodatabase**",
              "**Same source location** — beside the source data",
              "**Specify output** — a path you browse to"
            ]
          },
          "**Export Selected Features** writes a feature class; **Export Selected Table** writes a table without geometry.",
          "**Select** applies the query without exporting, which is the quick way to confirm the conditions match what you expect before writing anything."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer to query."
              }
            ]
          },
          {
            name: "Selection Mode",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "How the result combines with the existing selection."
              }
            ]
          },
          {
            name: "Conditions",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The list of query conditions, combined with **And/Or**."
              }
            ]
          },
          {
            name: "Add Condition",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Adds a condition row."
              }
            ]
          },
          {
            name: "Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field tested by the condition."
              }
            ]
          },
          {
            name: "Operator",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The comparison — `Equals`, `Not Equals`, `Greater Than`, `Greater Or Equal`, `Less Than`, `Less Or Equal`, `Contains`, `Starts With`, `Ends With`, `Is Null`, `Is Not Null`."
              }
            ]
          },
          {
            name: "Compare To",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Whether to compare against a typed **Value** or another **Compare Field**."
              }
            ]
          },
          {
            name: "Value",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The literal value to compare against."
              }
            ]
          },
          {
            name: "Compare Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field to compare against, for field-to-field comparison."
              }
            ]
          },
          {
            name: "Output",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The export destination — **Project default geodatabase**, **Same source location**, or **Specify output**."
              }
            ]
          },
          {
            name: "Output Name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The name of the exported dataset."
              }
            ]
          },
          {
            name: "Select",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Applies the query as a map selection without exporting."
              }
            ]
          },
          {
            name: "Export Selected Features",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the matching features to a new feature class."
              }
            ]
          },
          {
            name: "Export Selected Table",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the matching rows to a new table, without geometry."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Select**, and click **Smart Select**.",
          "Set **Layer** and **Selection Mode**.",
          "Click **Add Condition**, then choose the **Field** and **Operator**.",
          "Set **Compare To** to **Value** and type the value, or to **Compare Field** and choose the field to compare against.",
          "Add further conditions and set each **And/Or** as needed.",
          "Click **Select** and check the selection on the map.",
          "If the result is right, choose an **Output** destination, set **Output Name**, and click **Export Selected Features** or **Export Selected Table**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "smart-extract",
      "direction-selector",
      "nearest-feature-distance",
      "filter-selection",
      "batch-export"
    ]
  },
  {
    slug: "statistics-summary",
    group: "vectoriq",
    name: "Statistics Summary",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Analyze ▸ Statistics Summary",
    actsOn: [],
    summary: {
      km: "សង្ខេបវាលលេខមួយ ដោយរាយការណ៍ចំនួនកំណត់ត្រា ចំនួនតម្លៃទទេ និងស្ថិតិពិពណ៌នាពេញលេញ ជាកាតដែលអាចចម្លងបាន។",
      en: "Summarises one numeric field, reporting record counts, null counts, and the full set of descriptive statistics as a copyable card."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "The dialog states the scope: *summarize values in one numeric attribute field*. **Numeric Field** lists numeric fields only.",
          "The card reports:"
        ]
      },
      {
        type: "table",
        head: [
          "Metric",
          "Meaning"
        ],
        rows: [
          [
            "**Records**",
            "Total rows considered"
          ],
          [
            "**Valid Values**",
            "Rows with a non-null value — the count the statistics are actually based on"
          ],
          [
            "**Nulls**",
            "Rows with no value"
          ],
          [
            "**Minimum** / **Maximum** / **Range**",
            "The extremes and their span"
          ],
          [
            "**Average**",
            "The arithmetic mean"
          ],
          [
            "**Median**",
            "The middle value"
          ],
          [
            "**Variance** / **Std Dev**",
            "The spread"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Read Records against Valid Values first.** A large gap between them means the statistics describe only part of the data, and the average in particular may not represent the layer at all. Fill or investigate the nulls before quoting the figures — [Default Value Filler](DefaultValueFiller.md) reports and fills them.",
          "Compare **Average** and **Median**. A large difference between the two indicates skew or outliers, in which case the median is the more honest summary.",
          "**Use selected features only** restricts the summary to the current map selection, which is how a statistic is produced for one district or one group of parcels.",
          "**Copy card** puts the whole summary on the clipboard, ready to paste into a report.",
          "For statistics grouped by a category field rather than a single overall summary, use [Pivot Table Builder](PivotTableBuilder.md)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to summarise."
              }
            ]
          },
          {
            name: "Numeric Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The numeric field to summarise."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the summary to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Analyze",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Computes the summary."
              }
            ]
          },
          {
            name: "Copy card",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Copies the summary to the clipboard."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Analyze**, and click **Statistics Summary**.",
          "Set **Layer** and **Numeric Field**.",
          "To summarise a subset, select those features on the map and check **Use selected features only**.",
          "Click **Analyze**.",
          "Check **Valid Values** against **Records**. If many rows are null, treat the statistics with caution.",
          "Compare **Average** and **Median** — a large gap means the data is skewed.",
          "Click **Copy card** to take the summary into a report."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "pivot-table-builder",
      "shape-metrics",
      "default-value-filler",
      "feature-counter"
    ]
  },
  {
    slug: "value-splitter",
    group: "vectoriq",
    name: "Value Splitter",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Manage ▸ Value Splitter",
    actsOn: [],
    summary: {
      km: "បំបែកតម្លៃវាលមួយនៅត្រង់សញ្ញាបំបែក រួចសរសេរផ្នែកនីមួយៗចូលទៅវាលលទ្ធផលជាច្រើន តាមលំដាប់ដែលអ្នកកំណត់។",
      en: "Splits one field's value at a delimiter and writes the resulting parts into several output fields, in an order you control."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the reverse of [Attribute Value Combiner](AttributeValueCombiner.md) — use it to break a combined code, a full name, or a concatenated address into its components."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Delimiter** is the character the value is split at. Choose it carefully: a value containing the delimiter inside one of its parts will split into more pieces than expected.",
          "Output fields are chosen from **Available Fields** and arranged in **Selected Output Order**. The order matters — the first part of the split goes to the first field in the list, the second to the second, and so on. Use **Up**, **Down**, and **Remove** to arrange them.",
          {
            text: "**When Parts Are Missing** and **Clear missing output parts** control what happens when a value yields fewer parts than there are output fields:",
            items: [
              "**Clear missing output parts** checked — the surplus output fields are emptied, so no stale value from a previous run is left behind. This is normally what you want.",
              "Unchecked — the surplus fields keep whatever they already held, which can leave misleading data from an earlier split."
            ]
          },
          "**Overwrite existing output values** governs whether populated output fields are replaced.",
          "**Use selected features only** limits the operation to the current selection — the safe way to test the delimiter and the field order.",
          "Check a sample of results in the attribute table before running on the whole layer. Inconsistent source formatting is the usual cause of misaligned parts, and it is easier to spot in a handful of rows."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Target Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table to operate on."
              }
            ]
          },
          {
            name: "Source Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field whose value is split."
              }
            ]
          },
          {
            name: "Output Fields",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The fields receiving the parts. **Available Fields** lists the candidates; **All** and **Clear** select and deselect everything."
              }
            ]
          },
          {
            name: "Selected Output Order",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The ordered list of output fields. The first part of the split goes to the first field. Arrange with **Up**, **Down**, and **Remove**."
              }
            ]
          },
          {
            name: "Delimiter",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The character the source value is split at."
              }
            ]
          },
          {
            name: "Clear missing output parts",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Empties surplus output fields when a value yields fewer parts than there are fields, preventing stale values."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the operation to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Overwrite existing output values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces values already present in the output fields."
              }
            ]
          },
          {
            name: "Split Values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes the split parts."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Create the output fields you need, using [Add multiple Fields](AddMultipleFields.md).",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Manage**, and click **Value Splitter**.",
          "Set **Target Layer** and **Source Field**.",
          "Type the **Delimiter**.",
          "Choose the output fields and arrange them in **Selected Output Order** so they match the order of the parts.",
          "Check **Clear missing output parts**.",
          "Select a few features and check **Use selected features only**, then click **Split Values** and inspect the result.",
          "Clear the selection and run again for the whole layer."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "attribute-value-combiner",
      "add-multiple-fields",
      "value-type-converter",
      "attribute-reclassifier"
    ]
  },
  {
    slug: "value-type-converter",
    group: "vectoriq",
    name: "Value Type Converter",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ VectorIQ ▸ Manage ▸ Value Type Converter",
    actsOn: [],
    summary: {
      km: "ចម្លងតម្លៃពីវាលមួយចូលទៅវាលមួយទៀតដែលមានប្រភេទទិន្នន័យខុសគ្នា ដោយបម្លែងតម្លៃនីមួយៗតាមផ្លូវ។",
      en: "Copies values from one field into another of a different data type, converting each value as it goes."
    },
    body: [
      {
        type: "paragraph",
        text: "A field's type cannot be changed in place. The way to turn a text field of numbers into a real numeric field is to create a numeric field and convert the values across — which is what this tool does."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Source Field** supplies the values; **Target Field** receives the converted ones. The source is left untouched, so the original values remain available if the conversion is not what you expected.",
          "Create the target field first, with the type you want, using [Add multiple Fields](AddMultipleFields.md).",
          {
            text: "**Overwrite existing target values** governs what happens where the target already holds data:",
            items: [
              "**Checked** — existing target values are replaced.",
              "**Unchecked** — populated target values are left alone, so only empty ones are filled."
            ]
          },
          "**Treat empty text as null** decides how an empty string is handled. Checked, an empty text value becomes null in the target rather than a zero or an empty string — which is usually what you want, since a genuine blank is not the number zero.",
          "**Use selected features only** limits the conversion to the current map selection. Use it to test the conversion on a handful of features before committing to the whole layer.",
          "Values that cannot be converted — letters in a field destined to be numeric, for example — are reported rather than silently written as zero. Review the report; those rows need cleaning before a second pass.",
          "Converting from a wider type to a narrower one loses precision: a double into a long integer truncates the decimals irrecoverably in the target. The source field still holds the original, so check the result before deleting it."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [],
        rows: [
          {
            name: "Target Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The layer or table holding both fields."
              }
            ]
          },
          {
            name: "Source Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field whose values are converted. Left unchanged."
              }
            ]
          },
          {
            name: "Target Field",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The existing field, of the desired type, that receives the converted values."
              }
            ]
          },
          {
            name: "Use selected features only",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Restricts the conversion to the features currently selected in the map."
              }
            ]
          },
          {
            name: "Overwrite existing target values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Replaces values already present in the target field. Unchecked, only empty target values are filled."
              }
            ]
          },
          {
            name: "Treat empty text as null",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Writes null into the target where the source is an empty string, rather than a zero or empty value."
              }
            ]
          },
          {
            name: "Convert Values",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "Runs the conversion."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Create the target field with the type you want, using [Add multiple Fields](AddMultipleFields.md).",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **VectorIQ** menu, point to **Manage**, and click **Value Type Converter**.",
          "Set **Target Layer**, **Source Field**, and **Target Field**.",
          "Check **Treat empty text as null** so blanks do not become zeros.",
          "Select a few features in the map and check **Use selected features only** for a trial run.",
          "Click **Convert Values** and inspect the result in the attribute table.",
          "Clear the selection, uncheck **Use selected features only**, check **Overwrite existing target values**, and run again for the whole layer.",
          "Review the report for values that could not be converted, clean those rows, and run again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-multiple-fields",
      "rename-field",
      "khmer-font-converter",
      "value-splitter"
    ]
  },
  {
    slug: "display-area",
    group: "quicklabel",
    name: "Display Area",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Display Area",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane, and on the current feature selection."
      }
    ],
    summary: {
      km: "គូសផ្ទៃក្រឡានៃពហុកោណនីមួយៗជាក្រាហ្វិកបណ្តោះអាសន្នលើស្រទាប់ពហុកោណដែលបានជ្រើស។",
      en: "Draws the area of each polygon as temporary graphics over the selected polygon layer."
    },
    body: [
      {
        type: "note",
        tone: "warning",
        text: "**These graphics are temporary.** They are map overlays, not labels. They are **not** saved with the project and they disappear as soon as the layer selection changes, the active map view changes, or the active tool changes. For labelling that persists and prints, use [Show Area](ShowArea.md), which creates a real label class."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Clicking the button draws the overlay immediately. There is no dialog.",
          "**Exactly one polygon layer must be selected in the Contents pane.** If nothing suitable is selected the button is disabled, and clicking it with the wrong selection reports *\"Select a polygon feature layer.\"*",
          "**The layer must use a projected coordinate system.** A layer in a geographic coordinate system is rejected with the message *\"Layer must be in a projected coordinate system\"* — areas in square degrees would be meaningless. Project the layer first, or use [Show Area](ShowArea.md), whose geodesic fallback handles unprojected layers.",
          "**The current feature selection is honoured.** If features are selected in the map, only those get the overlay; with nothing selected, every feature in the layer is drawn. Select a handful of features first when working on a dense layer, or the display becomes unreadable.",
          "Overlays clear automatically when you change layer selection, switch map view, or pick a different tool. Run the tool again to redraw them."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the single polygon layer you want to inspect.",
          "Optionally select a few features in the map, to limit the overlay to those.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Display Area**.",
          "Read the values on the map. They clear when you change selection, map, or tool."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "show-area",
      "display-length-and-vertex",
      "label-control"
    ]
  },
  {
    slug: "display-length-and-vertex",
    group: "quicklabel",
    name: "Display Length and Vertex",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Display Length and Vertex",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane, and on the current feature selection."
      }
    ],
    summary: {
      km: "គូសប្រវែងនៃគែមនីមួយៗ ព្រមទាំងលេខសម្គាល់កំពូល ជាក្រាហ្វិកបណ្តោះអាសន្នលើស្រទាប់ពហុកោណ ឬខ្សែដែលបានជ្រើស។",
      en: "Draws the length of each edge together with the vertex identifiers as temporary graphics over the selected polygon or line layer."
    },
    body: [
      {
        type: "note",
        tone: "warning",
        text: "**These graphics are temporary.** They are map overlays, not labels. They are **not** saved with the project and they disappear as soon as the layer selection changes, the active map view changes, or the active tool changes. For labelling that persists and prints, use [Show Length](ShowLength.md), which creates a real label class."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Clicking the button draws the overlay immediately. There is no dialog.",
          "**Exactly one polygon or line layer must be selected in the Contents pane.** If nothing suitable is selected the button is disabled, and clicking it with the wrong selection reports *\"Select a polygon or line feature layer.\"*",
          "**The layer must use a projected coordinate system.** A layer in a geographic coordinate system is rejected with the message *\"Layer must be in a projected coordinate system\"*, since edge lengths in degrees would be meaningless.",
          "**The current feature selection is honoured.** If features are selected in the map, only those get the overlay; with nothing selected, every feature in the layer is drawn. Select a handful of features first when working on a dense layer, or the display becomes unreadable.",
          "Overlays clear automatically when you change layer selection, switch map view, or pick a different tool. Run the tool again to redraw them.",
          "Both polygon and line layers are accepted. For a polygon, each boundary edge is annotated; for a line, each segment is.",
          "This is the tool for checking digitised geometry against a survey sheet — every edge length and vertex number is visible at once, without creating any fields or labels."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the single polygon or line layer you want to inspect.",
          "Optionally select a few features in the map, to limit the overlay to those.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Display Length and Vertex**.",
          "Read the values on the map. They clear when you change selection, map, or tool."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "show-length",
      "display-area",
      "bearing-distance-calculator",
      "triangulation-builder"
    ]
  },
  {
    slug: "display-line-bearing-and-direction",
    group: "quicklabel",
    name: "Display Line Bearing and Direction",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Display Line Bearing and Direction",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane, and on the current feature selection."
      }
    ],
    summary: {
      km: "គូស bearing និងទិសដៅនៃខ្សែនីមួយៗ ជាក្រាហ្វិកបណ្តោះអាសន្នលើស្រទាប់ខ្សែដែលបានជ្រើស។",
      en: "Draws the bearing and direction of each line as temporary graphics over the selected line layer."
    },
    body: [
      {
        type: "note",
        tone: "warning",
        text: "**These graphics are temporary.** They are map overlays, not labels. They are **not** saved with the project and they disappear as soon as the layer selection changes, the active map view changes, or the active tool changes. For labelling that persists and prints, use [Bearing Distance Calc](../Cadastral/BearingDistanceCalculator.md), which writes the values into a permanent table and line layer."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Clicking the button draws the overlay immediately. There is no dialog.",
          "**Exactly one line layer must be selected in the Contents pane.** If nothing suitable is selected the button is disabled, and clicking it with the wrong selection reports *\"Select a line feature layer.\"*",
          "**The layer must use a projected coordinate system.** Bearings computed in a geographic coordinate system are not survey quantities.",
          "**The current feature selection is honoured.** If features are selected in the map, only those get the overlay; with nothing selected, every feature in the layer is drawn. Select a handful of features first when working on a dense layer, or the display becomes unreadable.",
          "Overlays clear automatically when you change layer selection, switch map view, or pick a different tool. Run the tool again to redraw them.",
          "Line direction determines the bearing reported. A line digitised in the opposite direction shows a bearing 180° away from the expected value — if a bearing reads back to front, flip the line rather than doubting the tool."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the single line layer you want to inspect.",
          "Optionally select a few features in the map, to limit the overlay to those.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Display Line Bearing and Direction**.",
          "Read the values on the map. They clear when you change selection, map, or tool."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "bearing-distance-calculator",
      "display-length-and-vertex",
      "direction-distance",
      "legal-description-builder"
    ]
  },
  {
    slug: "display-point-xy-and-id",
    group: "quicklabel",
    name: "Display Point XY and ID",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Display Point XY and ID",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane, and on the current feature selection."
      }
    ],
    summary: {
      km: "គូសកូអរដោនេ XY និង ID នៃចំណុចនីមួយៗ ជាក្រាហ្វិកបណ្តោះអាសន្នលើស្រទាប់ចំណុចដែលបានជ្រើស។",
      en: "Draws the XY coordinates and ID of each point as temporary graphics over the selected point layer."
    },
    body: [
      {
        type: "note",
        tone: "warning",
        text: "**These graphics are temporary.** They are map overlays, not labels. They are **not** saved with the project and they disappear as soon as the layer selection changes, the active map view changes, or the active tool changes. For labelling that persists and prints, use [Show Point ID](ShowPointID.md), which writes into the layer's label class."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Clicking the button draws the overlay immediately. There is no dialog.",
          "**Exactly one point layer must be selected in the Contents pane.** If nothing suitable is selected the button is disabled, and clicking it with the wrong selection reports *\"Select a point feature layer.\"*",
          "**The layer must use a projected coordinate system.** Coordinates are read in the layer's own coordinate system.",
          "**The current feature selection is honoured.** If features are selected in the map, only those get the overlay; with nothing selected, every feature in the layer is drawn. Select a handful of features first when working on a dense layer, or the display becomes unreadable.",
          "Overlays clear automatically when you change layer selection, switch map view, or pick a different tool. Run the tool again to redraw them.",
          "This is the quickest way to read off boundary point coordinates during checking, without opening the attribute table. For a permanent record, use [Coordinate Listing](../Cadastral/CoordinateListing.md) or [Boundary XY to Excel](../DataManagement/BoundaryXYToExcel.md)."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the single point layer you want to inspect.",
          "Optionally select a few features in the map, to limit the overlay to those.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Display Point XY and ID**.",
          "Read the values on the map. They clear when you change selection, map, or tool."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "show-point-id",
      "coordinate-listing",
      "boundary-xy-to-excel",
      "corner-point-builder"
    ]
  },
  {
    slug: "label-control",
    group: "quicklabel",
    name: "Label Control",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "Custom dialog",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Label Control",
    actsOn: [],
    summary: {
      km: "បើកកម្មវិធីបង្កើតកន្សោមស្លាកជាទម្រង់មើលឃើញ ដែលផ្សំស្លាក Arcade ច្រើនបន្ទាត់ពីវាល និងអនុគមន៍ ជាមួយការមើលជាមុនផ្ទាល់ និងការគ្រប់គ្រងពុម្ពអក្សរ ទំហំ និងពណ៌តាមផ្នែក។",
      en: "Opens a visual label expression builder that composes a multi-line Arcade label from fields and functions, with a live preview and per-segment font, size, and colour control."
    },
    body: [
      {
        type: "paragraph",
        text: "ArcGIS Pro's own label expression box is a plain text editor — you write Arcade by hand and find out whether it works by applying it. This tool builds the expression from a row-based interface, previews the rendered result as you go, and lets each segment carry its own formatting."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The dialog is organised around a list of **expression rows**. Each row contributes one segment of the finished label, and the rows are joined in order.",
          "Rows are managed with the buttons beside the list:"
        ]
      },
      {
        type: "table",
        head: [
          "Control",
          "Effect"
        ],
        rows: [
          [
            "**＋ Click to add new expression line** / **+ New**",
            "Adds a row"
          ],
          [
            "**↑** / **↓**",
            "Moves a row up or down, changing segment order"
          ],
          [
            "**Duplicate**",
            "Copies a row, keeping its formatting"
          ],
          [
            "**✕**",
            "Removes a row"
          ],
          [
            "**Reset**",
            "Clears the builder"
          ],
          [
            "**Reload from layer**",
            "Reads the expression currently on the layer back into the builder"
          ],
          [
            "**Copy**",
            "Copies the generated Arcade expression to the clipboard"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Concatenation mode** controls how each row joins to the next: `NewLine` is how a stacked label — parcel number above area, for example — is built."
        ]
      },
      {
        type: "table",
        head: [
          "Mode",
          "Joins with"
        ],
        rows: [
          [
            "`NoSpace`",
            "Nothing — segments run together"
          ],
          [
            "`Space`",
            "A single space"
          ],
          [
            "`Custom`",
            "Text you supply"
          ],
          [
            "`NewLine`",
            "A line break, producing a stacked multi-line label"
          ],
          [
            "`Tab`",
            "A tab"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Functions** are available per row and cover the usual label needs: `DefaultValue` is worth noting — it substitutes a fallback where a field is null, which avoids the blank and `<Null>` labels that plague real data. Use `Superscript (sup)` for units such as m²."
        ]
      },
      {
        type: "table",
        head: [
          "Group",
          "Functions"
        ],
        rows: [
          [
            "Text",
            "`Concatenate`, `Left`, `Right`, `Find`, `Replace`, `Trim`, `Upper`, `Lower`, `Proper`, `Length`, `Text`"
          ],
          [
            "Numeric",
            "`Round`, `Ceil`, `Floor`, `Count`"
          ],
          [
            "Date",
            "`Year`, `Month`, `Hour`, `Minute`"
          ],
          [
            "Logic",
            "`When`, `Decode`, `DefaultValue`"
          ],
          [
            "Formatting",
            "`Superscript (sup)`, `Subscript (sub)`"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Formatting** can be set globally — **Global Font Name**, **Global Size**, **Global Style**, **Global Color** — and then overridden on individual rows, so one segment can be bold or coloured while the rest stays plain. For Khmer text, choose a Unicode Khmer font such as `Khmer OS` or `Hanuman`.",
          "**Label Class** selects which of the layer's label classes the expression is written to, so existing label classes need not be disturbed. **Label Position** sets the placement.",
          "The **Preview** pane renders the label as it will appear, segment formatting included. Check it before applying — it catches null-value and spacing problems that are invisible in the raw expression.",
          "**Labeling** applies the expression to the chosen label class and turns labelling on.",
          "Unlike [Show Area](ShowArea.md) and the **Display** tools, this builder writes a normal label class. The result is saved with the project, prints, and can be edited afterwards in the standard **Labeling** ribbon."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Control",
        showType: false,
        blocks: [
          {
            type: "paragraph",
            text: "This tool opens a window rather than a geoprocessing dialog. Its controls are:"
          }
        ],
        rows: [
          {
            name: "Layer",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The feature layer to label."
              }
            ]
          },
          {
            name: "Label Class",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The label class the expression is written to."
              }
            ]
          },
          {
            name: "Label Position",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The label placement option."
              }
            ]
          },
          {
            name: "Source",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The field or function inserted into the current row."
              }
            ]
          },
          {
            name: "Expression rows",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The ordered segments making up the label, each with its own function, concatenation mode, and optional formatting override."
              }
            ]
          },
          {
            name: "Global Font Name",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The default font for all segments. Choose a Unicode Khmer face for Khmer text."
              }
            ]
          },
          {
            name: "Global Size",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The default text size."
              }
            ]
          },
          {
            name: "Global Style",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The default text style."
              }
            ]
          },
          {
            name: "Global Color",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The default text colour."
              }
            ]
          },
          {
            name: "Current Label Expression",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "The generated Arcade expression, read-only. Use **Copy** to take it elsewhere."
              }
            ]
          },
          {
            name: "Preview",
            optional: false,
            type: "",
            description: [
              {
                type: "paragraph",
                text: "A live rendering of the finished label."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, select the layer to label.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Label Control**.",
          "Confirm **Layer** and choose the **Label Class** to write to.",
          "Click **＋ Click to add new expression line** and pick a field in **Source**.",
          "Add further rows for each segment. Set each row's concatenation mode — use `NewLine` where the label should stack onto a second line.",
          "Apply a function to a row where the raw field value is not what you want — `Round` for an area, `DefaultValue` to avoid a blank label, `Superscript (sup)` for a unit.",
          "Set **Global Font Name**, **Global Size**, **Global Style**, and **Global Color**, then override individual rows as needed.",
          "Check the **Preview** pane. Confirm null values and spacing look right.",
          "Click **Labeling** to apply the expression and switch labelling on."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "show-area",
      "show-length",
      "display-area",
      "display-length-and-vertex",
      "khmer-font-converter",
      "attribute-value-combiner"
    ]
  },
  {
    slug: "show-area",
    group: "quicklabel",
    name: "Show Area",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Show Area",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane."
      }
    ],
    summary: {
      km: "បិទ-បើកការដាក់ស្លាកផ្ទៃក្រឡាពហុកោណលើស្រទាប់ដែលបានជ្រើស ដោយប្រើកន្សោម Arcade ដែលគណនាពេលគូស។",
      en: "Toggles polygon area labelling on the selected polygon layer, using an Arcade expression evaluated at draw time."
    },
    body: [
      {
        type: "paragraph",
        text: "Unlike the **Display Area** tool, which draws temporary graphics, this tool creates a real label class — so the labels are saved with the project, honour label placement settings, and print."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**This is a toggle.** Click once to turn the labelling on, click again to turn it off. There is no dialog.",
          "**A polygon layer must be selected in the Contents pane.** The button is disabled otherwise, and its tooltip says why:"
        ]
      },
      {
        type: "table",
        head: [
          "Condition",
          "Tooltip"
        ],
        rows: [
          [
            "No map open",
            "*No active map view.*"
          ],
          [
            "Nothing selected",
            "*Select a polygon feature layer in the Contents pane.*"
          ],
          [
            "Selection is not a feature layer",
            "*Selected item is not a feature layer.*"
          ],
          [
            "Wrong geometry type",
            "*Show Area requires a polygon layer.*"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**No fields are created and the schema is untouched.** The value is computed from the geometry by an Arcade expression each time the map draws, so it stays correct after an edit and works identically on geodatabase feature classes and shapefiles.",
          "The expression adapts to the layer's coordinate system: Because the geographic case falls back to a geodesic calculation in square metres, the labels stay meaningful even on an unprojected layer — where a plain planar area would be in square degrees."
        ]
      },
      {
        type: "table",
        head: [
          "Layer coordinate system",
          "Arcade expression"
        ],
        rows: [
          [
            "Projected",
            "`Area($feature)` — in the layer's own square units"
          ],
          [
            "Geographic",
            "`AreaGeodetic($feature, 'square-meters')` — geodesic area in square metres"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Labelling is applied through a dedicated label class named `KGA_ShowArea`. While it is active, the layer's other label classes are hidden so the area labels are not competing with existing labels. Toggling the tool off removes the class and restores the previous label visibility exactly as it was.",
          "Because the label is an expression rather than a stored value, it cannot be exported to a table or joined. To store the value as an attribute, use **Calculate Geometry** (on the **Calculation** gallery) instead."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, click the polygon layer to select it.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Show Area**.",
          "The labels appear on the map.",
          "To remove them, select the same layer and click **Show Area** again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "display-area",
      "show-length",
      "label-control"
    ]
  },
  {
    slug: "show-length",
    group: "quicklabel",
    name: "Show Length",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Show Length",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane."
      }
    ],
    summary: {
      km: "បិទ-បើកការដាក់ស្លាកប្រវែងខ្សែលើស្រទាប់ខ្សែដែលបានជ្រើស ដោយប្រើកន្សោម Arcade ដែលគណនាពេលគូស។",
      en: "Toggles line length labelling on the selected line layer, using an Arcade expression evaluated at draw time."
    },
    body: [
      {
        type: "paragraph",
        text: "Unlike the **Display Length and Vertex** tool, which draws temporary graphics, this tool creates a real label class — so the labels are saved with the project, honour label placement settings, and print."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**This is a toggle.** Click once to turn the labelling on, click again to turn it off. There is no dialog.",
          "**A line layer must be selected in the Contents pane.** The button is disabled otherwise, and its tooltip says why:"
        ]
      },
      {
        type: "table",
        head: [
          "Condition",
          "Tooltip"
        ],
        rows: [
          [
            "No map open",
            "*No active map view.*"
          ],
          [
            "Nothing selected",
            "*Select a line feature layer in the Contents pane.*"
          ],
          [
            "Selection is not a feature layer",
            "*Selected item is not a feature layer.*"
          ],
          [
            "Wrong geometry type",
            "*Show Length requires a line layer.*"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**No fields are created and the schema is untouched.** The value is computed from the geometry by an Arcade expression each time the map draws, so it stays correct after an edit and works identically on geodatabase feature classes and shapefiles.",
          "The expression adapts to the layer's coordinate system: The geodesic fallback keeps the labels meaningful on an unprojected layer, where a planar length would be in degrees."
        ]
      },
      {
        type: "table",
        head: [
          "Layer coordinate system",
          "Arcade expression"
        ],
        rows: [
          [
            "Projected",
            "`Length($feature)` — in the layer's own units"
          ],
          [
            "Geographic",
            "`LengthGeodetic($feature, 'meters')` — geodesic length in metres"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Labelling is applied through a dedicated label class named `KGA_ShowLength`. While it is active, the layer's other label classes are hidden. Toggling the tool off removes the class and restores the previous label visibility exactly as it was.",
          "Because the label is an expression rather than a stored value, it cannot be exported to a table or joined. To store the value as an attribute, use **Calculate Geometry** (on the **Calculation** gallery) instead."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, click the line layer to select it.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Show Length**.",
          "The labels appear on the map.",
          "To remove them, select the same layer and click **Show Length** again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "display-length-and-vertex",
      "show-area",
      "label-control"
    ]
  },
  {
    slug: "show-point-id",
    group: "quicklabel",
    name: "Show Point ID",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Management ▸ Quick Label ▸ Show Point ID",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the layer selected in the **Contents** pane."
      }
    ],
    summary: {
      km: "បិទ-បើកការដាក់ស្លាក ID លើស្រទាប់ចំណុចដែលបានជ្រើស ដោយសរសេរជាន់ថ្នាក់ស្លាកទីមួយរបស់ស្រទាប់ឡើងវិញ ជំនួសឱ្យការបន្ថែមថ្នាក់ស្លាកថ្មី។",
      en: "Toggles ID labelling on the selected point layer by rewriting the layer's first label class, rather than adding a new one."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "**This is a toggle.** Click once to apply the ID labelling, click again to restore what was there before.",
          "**A point layer must be selected in the Contents pane.** The button is disabled otherwise, and its tooltip says why:"
        ]
      },
      {
        type: "table",
        head: [
          "Condition",
          "Tooltip"
        ],
        rows: [
          [
            "No map open",
            "*No active map view.*"
          ],
          [
            "Nothing selected",
            "*Select a point feature layer in the Contents pane.*"
          ],
          [
            "Selection is not a feature layer",
            "*Selected item is not a feature layer.*"
          ],
          [
            "Wrong geometry type",
            "*Show Point ID requires a point layer.*"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**This tool differs from [Show Area](ShowArea.md) and [Show Length](ShowLength.md).** Those add a new, dedicated label class. This one takes over the layer's first existing label class — creating one named `Class 1` if the layer has none — and marks it with the expression title `KGA_ShowPointID`. The practical effect is that any label expression already on that first class is replaced while the tool is active. The original expression, title, and engine are remembered and put back when you toggle the tool off, so nothing is lost — but do not expect your existing labels to keep showing alongside the IDs.",
          "The label uses an Arcade expression built from the layer's ID field, so no field is created and the schema is untouched."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "In the **Contents** pane, click the point layer to select it.",
          "On the **KGA Toolbox** tab, in the **Data Management** group, open the **Quick Label** menu and click **Show Point ID**.",
          "The point IDs appear on the map, replacing whatever the layer's first label class was showing.",
          "To restore the original labelling, select the same layer and click **Show Point ID** again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "display-point-xy-and-id",
      "show-area",
      "show-length",
      "label-control"
    ]
  },
  {
    slug: "bearing-distance-calculator",
    group: "cadastral",
    name: "Bearing Distance Calc",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Bearing Distance Calc",
    actsOn: [],
    summary: {
      km: "គណនា bearing និងចម្ងាយនៃផ្នែកព្រំដែននីមួយៗជុំវិញក្បាលដីនីមួយៗ ដោយបង្កើតតារាង traverse, feature class ខ្សែនៃគែម និងឯកសារអក្សរពិពណ៌នាតាមផ្លូវច្បាប់។",
      en: "Computes the bearing and distance of every boundary segment around each parcel, producing a traverse table, a line feature class of the edges, and a legal description text file."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the classic survey traverse: walking the parcel boundary corner to corner and recording each leg's direction and length."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Three outputs are produced from one run, and all three are required parameters:"
        ]
      },
      {
        type: "table",
        head: [
          "Output",
          "Use"
        ],
        rows: [
          [
            "**Output Traverse Table**",
            "The tabular leg-by-leg bearing and distance list"
          ],
          [
            "**Output Edge Lines**",
            "Each boundary segment as its own line feature, attributed with its bearing and distance"
          ],
          [
            "**Output Legal Description Text File**",
            "A plain-text metes-and-bounds description"
          ]
        ]
      },
      {
        type: "list",
        items: [
          {
            text: "**Bearing Format** selects how bearings are expressed:",
            items: [
              "`Decimal Degrees` (default) — for calculation and spreadsheets.",
              "`DMS` — degrees, minutes, seconds, as used on titles and legal documents."
            ]
          },
          "**Distance Unit Label** sets the unit the distances are labelled with. The tool does not reproject — the label must match the units of the parcel layer's coordinate system. Labelling a layer in metres as `Feet` produces numerically correct but wrongly labelled output.",
          "The parcel layer must be in a projected coordinate system. Bearings and distances taken from a geographic coordinate system are not survey quantities.",
          "**Output Edge Lines** is the layer to label when a map sheet must show a bearing and distance against each boundary line. See [Display Line Bearing and Direction](../QuickLabel/DisplayLineBearingAndDirection.md) for map labelling from existing geometry."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer whose boundaries are traversed. Must use a projected coordinate system."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel. Carried onto every output so legs can be grouped by parcel."
              }
            ]
          },
          {
            name: "Distance Unit Label",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The unit label applied to the distances. Must match the units of the input's coordinate system."
              },
              {
                type: "list",
                items: [
                  "`Millimeters`",
                  "`Centimeters`",
                  "`Meters` (default)",
                  "`Kilometers`",
                  "`Inches`",
                  "`Feet`",
                  "`Yards`",
                  "`Miles`"
                ]
              }
            ]
          },
          {
            name: "Bearing Format",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "How bearings are expressed. Default is `Decimal Degrees`."
              },
              {
                type: "list",
                items: [
                  "`Decimal Degrees`",
                  "`DMS` — degrees, minutes, seconds"
                ]
              }
            ]
          },
          {
            name: "Output Traverse Table",
            optional: false,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The table listing each boundary leg with its bearing and distance."
              }
            ]
          },
          {
            name: "Output Edge Lines",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "A line feature class in which each boundary segment is a separate feature, attributed with its bearing and distance."
              }
            ]
          },
          {
            name: "Output Legal Description Text File",
            optional: false,
            type: "File",
            description: [
              {
                type: "paragraph",
                text: "A plain-text metes-and-bounds description of each parcel boundary."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Bearing Distance Calc**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Distance Unit Label** to the unit the layer's coordinate system actually uses.",
          "Set **Bearing Format** — choose `DMS` for legal documents, `Decimal Degrees` for calculation.",
          "Set all three outputs: **Output Traverse Table**, **Output Edge Lines**, and **Output Legal Description Text File**.",
          "Click **Run**.",
          "Add **Output Edge Lines** to the map and label it to annotate each boundary with its bearing and distance."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "legal-description-builder",
      "coordinate-listing",
      "boundary-line-builder",
      "display-line-bearing-and-direction",
      "direction-distance"
    ]
  },
  {
    slug: "boundary-conflict-check",
    group: "cadastral",
    name: "Boundary Conflict Check",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Boundary Conflict Check",
    actsOn: [],
    summary: {
      km: "ប្រៀបធៀបព្រំដែនរួមនៃក្បាលដីជាប់គ្នា រួចសម្គាល់កន្លែងដែលក្បាលដីទាំងពីរមិនត្រូវគ្នា — bearing ខុសគ្នា ប្រវែងខុសគ្នា ឬកូអរដោនេជ្រុងមិនដូចគ្នា។",
      en: "Compares the shared boundaries of adjacent parcels and flags places where the two parcels disagree — a bearing that differs, a length that differs, or a corner coordinate that does not match."
    },
    body: [
      {
        type: "paragraph",
        text: "Two neighbouring parcels should describe their common boundary identically. Where they do not, one of the two surveys is wrong, and the discrepancy will surface later as an overlap or a gap. This tool finds those disagreements before they do."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Three independent tolerances control what counts as a conflict. Each has a survey-realistic default:"
        ]
      },
      {
        type: "table",
        head: [
          "Parameter",
          "Default",
          "Flags"
        ],
        rows: [
          [
            "**Bearing Tolerance (degree)**",
            "`1.0`",
            "Shared edges whose bearings differ by more than this"
          ],
          [
            "**Length Tolerance (m)**",
            "`0.1`",
            "Shared edges whose lengths differ by more than this"
          ],
          [
            "**Coordinate Tolerance (m)**",
            "`0.05`",
            "Corner points that should coincide but are further apart than this"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Tighten the tolerances for high-precision survey data and loosen them for digitised legacy mapping. Tolerances set too tight on old data flood the output with noise; set too loose, real conflicts are missed.",
          "**Input Parcel Layer** accepts polygon layers only.",
          "**Spatial Reference** is optional. Leave it blank to work in the input layer's own coordinate system. The layer should already be projected — the length and coordinate tolerances are expressed in metres, which is meaningless against a geographic coordinate system.",
          "The output is a feature class of the conflict locations, which can be symbolised and worked through as a correction list."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to check. Polygon geometry only."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel. Used to report which parcel pair is in conflict."
              }
            ]
          },
          {
            name: "Output Conflict Layer",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The feature class recording each detected conflict."
              }
            ]
          },
          {
            name: "Bearing Tolerance (degree)",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The largest bearing difference accepted on a shared edge before it is flagged. Default is `1.0`."
              }
            ]
          },
          {
            name: "Length Tolerance (m)",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The largest length difference accepted on a shared edge before it is flagged. Default is `0.1`."
              }
            ]
          },
          {
            name: "Coordinate Tolerance (m)",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The largest separation accepted between corner points that should coincide. Default is `0.05`."
              }
            ]
          },
          {
            name: "Spatial Reference",
            optional: true,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system used for the comparison. Leave blank to use the input layer's own."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system in metres.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Boundary Conflict Check**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Output Conflict Layer**.",
          "Review the three tolerances. Accept the defaults for standard survey data; loosen them for digitised legacy mapping.",
          "Click **Run**.",
          "Add the output to the map and work through the flagged locations, correcting whichever of the two parcels is in error."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "parcel-overlap-check",
      "parcel-adjacency",
      "bearing-distance-calculator",
      "shape-quality-check",
      "boundary-overlap-check"
    ]
  },
  {
    slug: "boundary-line-builder",
    group: "cadastral",
    name: "Boundary Line Builder",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Boundary Line Builder",
    actsOn: [],
    summary: {
      km: "បម្លែងពហុកោណក្បាលដីទៅជា feature class ខ្សែព្រំដែន ដែលជាស្រទាប់ខ្សែចាំបាច់សម្រាប់និមិត្តសញ្ញា និងការដាក់ស្លាកព្រំដែនលើផែនទីកាដាស្ត្រ។",
      en: "Converts parcel polygons into a boundary line feature class, producing the line layer a cadastral map needs for boundary symbology and labelling."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "**Input Parcel Feature** accepts polygon layers only.",
          "Use this tool rather than a generic polygon-to-line conversion when the result must behave as a cadastral boundary layer — it is parcel-aware, so the output relates back to the parcels it came from.",
          "For straightforward batch conversion of several polygon layers to lines, without cadastral semantics, use [Polygon To Line (multiple)](../DataCreation/PolygonToLineMultiple.md) instead.",
          "If each boundary segment must carry its own bearing and distance as attributes, use [Bearing Distance Calc](BearingDistanceCalculator.md), whose **Output Edge Lines** is the segment-level equivalent of this tool's output."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Feature",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel polygon layer to convert. Polygon geometry only."
              }
            ]
          },
          {
            name: "Output Boundary Line Feature",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The boundary line feature class to create."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Boundary Line Builder**.",
          "Set **Input Parcel Feature** to the parcel polygon layer.",
          "Set **Output Boundary Line Feature**.",
          "Click **Run**.",
          "Add the output to the map and apply the boundary line symbology the map sheet requires."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "bearing-distance-calculator",
      "corner-point-builder",
      "triangulation-builder",
      "polygon-to-line-multiple",
      "generate-boundary-line"
    ]
  },
  {
    slug: "coordinate-listing",
    group: "cadastral",
    name: "Coordinate Listing",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Coordinate Listing",
    actsOn: [],
    summary: {
      km: "នាំចេញកូអរដោនេជ្រុងព្រំដែននៃក្បាលដីនីមួយៗទៅ Excel, CSV ឬរបាយការណ៍ស្ទង់ដែលមានទម្រង់ ព្រមទាំងអាចបង្កើត feature class ចំណុចនៃជ្រុងដដែល។",
      en: "Exports the boundary corner coordinates of each parcel to Excel, CSV, or a formatted survey report, optionally creating a point feature class of the same corners."
    },
    body: [
      {
        type: "paragraph",
        text: "The coordinate listing is the tabular half of a parcel record — the numbered corner coordinates that accompany the map sheet."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Output Format** determines what is written: Choose `Survey Report` when the file itself is the deliverable; choose `CSV` when the coordinates feed another system."
        ]
      },
      {
        type: "table",
        head: [
          "Choice",
          "Output"
        ],
        rows: [
          [
            "`CSV` (default)",
            "A plain comma-separated file, for import elsewhere"
          ],
          [
            "`Excel`",
            "A workbook, ready to print or hand over"
          ],
          [
            "`Survey Report`",
            "A formatted report laid out as a survey document"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Coordinate Precision** is the number of decimal places, defaulting to `3` — millimetre precision for a layer in metres. Raising it does not add accuracy the survey never had; lowering it to `2` or `3` keeps the listing honest about the data's real precision.",
          "Check **Export point features?** to also create a point feature class of the corners, set in **Output Point Feature Class**. This is the geometry equivalent of the listing, useful for checking the corners against the mapped boundary.",
          "**Input Parcel Layer** accepts polygon layers only and should be in a projected coordinate system, so the listed coordinates are ground coordinates rather than degrees."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer whose corners are listed. Polygon geometry only."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel, used to group the coordinate rows."
              }
            ]
          },
          {
            name: "Output Format",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The form of the output file. Default is `CSV`."
              },
              {
                type: "list",
                items: [
                  "`Excel`",
                  "`CSV`",
                  "`Survey Report`"
                ]
              }
            ]
          },
          {
            name: "Output Coordinate Table",
            optional: false,
            type: "File",
            description: [
              {
                type: "paragraph",
                text: "The output file path."
              }
            ]
          },
          {
            name: "Coordinate Precision",
            optional: false,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "The number of decimal places written for each coordinate. Default is `3`."
              }
            ]
          },
          {
            name: "Export point features?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Also creates a point feature class of the corner points."
              },
              {
                type: "list",
                items: [
                  "Checked — **Output Point Feature Class** is enabled.",
                  "Unchecked (default) — Only the file is written."
                ]
              }
            ]
          },
          {
            name: "Output Point Feature Class",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The corner point feature class. Required when **Export point features?** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Coordinate Listing**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Output Format** — `Survey Report` for a deliverable document, `Excel` for a printable table, `CSV` for onward import.",
          "Set **Output Coordinate Table** to the output file path.",
          "Set **Coordinate Precision** to reflect the survey's real precision.",
          "To cross-check the corners on the map, check **Export point features?** and set **Output Point Feature Class**.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "corner-point-builder",
      "boundary-xy-to-excel",
      "bearing-distance-calculator",
      "polygon-to-boundary-point"
    ]
  },
  {
    slug: "copy-parcel-to-gdb",
    group: "cadastral",
    name: "Copy Parcel To GDB",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Copy Parcel To GDB",
    actsOn: [],
    summary: {
      km: "ចម្លងគ្រប់ feature class ពី geodatabase ឬ feature dataset ប្រភព ទៅ geodatabase គោលដៅ ដោយរក្សាឈ្មោះ feature class ដដែល។",
      en: "Copies every feature class from a source geodatabase or feature dataset into a target geodatabase, preserving the feature class names."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool to consolidate scattered parcel data into one geodatabase — the prerequisite for building a geodatabase topology, which requires all participating feature classes to sit in a single feature dataset."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Database or Feature Dataset** is the source. Give a geodatabase to copy everything it holds, or a feature dataset to copy just that dataset's contents.",
          "**Output Location** is the target geodatabase. Feature class names are carried across unchanged.",
          "A feature class whose name already exists in the target will conflict. Copy into an empty geodatabase, or check the target's contents first.",
          "This is the usual preparation step before [Topology Check](../TopologyCheck/TopologyCheck.md) and [Boundary Overlap](../TopologyCheck/BoundaryOverlapCheck.md), both of which require their inputs to live in one feature dataset."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Database or Feature Dataset",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The source geodatabase or feature dataset whose feature classes are copied."
              }
            ]
          },
          {
            name: "Output Location",
            optional: false,
            type: "Workspace",
            description: [
              {
                type: "paragraph",
                text: "The target geodatabase that receives the copies."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Copy Parcel To GDB**.",
          "Set **Input Database or Feature Dataset** to the source.",
          "Set **Output Location** to the target geodatabase. Prefer an empty one to avoid name conflicts.",
          "Click **Run**.",
          "If the copies are destined for a topology check, move them into a single feature dataset in the target geodatabase."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "topology-check",
      "batch-export",
      "migrate-data-from-mdb",
      "database-structure-builder"
    ]
  },
  {
    slug: "corner-point-builder",
    group: "cadastral",
    name: "Corner Point Builder",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Corner Point Builder",
    actsOn: [],
    summary: {
      km: "បង្កើតចំណុចនៅគ្រប់ជ្រុងព្រំដែននៃក្បាលដីនីមួយៗ ដោយនាំលេខសម្គាល់ក្បាលដីទៅលើចំណុច។",
      en: "Generates a point feature at every boundary corner of each parcel, carrying the parcel identifier through to the points."
    },
    body: [
      {
        type: "paragraph",
        text: "Corner points are the surveyed marks a parcel record refers to. Because each point keeps its parent parcel's ID, the output can be joined back to the parcel, labelled per parcel, and checked against a coordinate listing."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Parcel Layer** accepts polygon layers only.",
          "**Output Spatial Reference** is optional. Leave it blank to keep the input layer's coordinate system; set it to produce corner points in a different system without reprojecting the parcels themselves — useful when the coordinate record must be delivered in a particular projection.",
          "This tool is parcel-aware: every output point carries its **Parcel ID Field** value. If all you need is deduplicated vertices from one or more layers, with no parcel linkage, [Polygon To Boundary Point](../DataCreation/PolygonToBoundaryPoint.md) is the simpler choice.",
          "Where two parcels share a corner, that location yields one point per parcel — each attributed to its own parcel. That is deliberate: a shared corner belongs to both records."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer whose corners are extracted. Polygon geometry only."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel. Carried onto every generated corner point."
              }
            ]
          },
          {
            name: "Output Corner Points",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The corner point feature class to create."
              }
            ]
          },
          {
            name: "Output Spatial Reference",
            optional: true,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system of the output points. Leave blank to use the input layer's own."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Corner Point Builder**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Output Corner Points**.",
          "If the coordinate record must be delivered in a different projection, set **Output Spatial Reference**. Otherwise leave it blank.",
          "Click **Run**.",
          "Add the output to the map and label it with the parcel ID or a point number as required."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "coordinate-listing",
      "polygon-to-boundary-point",
      "point-on-boundary",
      "display-point-xy-and-id"
    ]
  },
  {
    slug: "direction-analyzer",
    group: "cadastral",
    name: "Direction Analyzer",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Direction Analyzer",
    actsOn: [],
    summary: {
      km: "កំណត់ទិសដៅលេចធ្លោនៃក្បាលដីនីមួយៗ រួចសរសេរលទ្ធផលទៅតារាងសង្ខេប ព្រមទាំងអាចរក្សាទុកជាវាលលើស្រទាប់ក្បាលដី។",
      en: "Determines the predominant orientation of each parcel and writes the result to a summary table, optionally storing it as a field on the parcel layer."
    },
    body: [
      {
        type: "paragraph",
        text: "Parcel orientation shows how a block was laid out — whether plots face a road consistently, and where a parcel breaks the prevailing pattern."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Parcel Layer** accepts polygon layers only.",
          "**Add Field to Layer?** is unchecked by default, so the tool writes only the summary table and leaves the parcel layer untouched. Check it to add the orientation as an attribute field, which allows the parcels to be symbolised or labelled by direction directly.",
          "Orientation is derived from geometry, so run the tool on a projected layer. Angles computed in a geographic coordinate system are distorted by latitude.",
          "A near-square or highly irregular parcel has no meaningful predominant direction; treat the reported value for such parcels with caution."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to analyse. Polygon geometry only."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel in the summary table."
              }
            ]
          },
          {
            name: "Output Summary Table",
            optional: false,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The table recording each parcel's predominant orientation."
              }
            ]
          },
          {
            name: "Add Field to Layer?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Also stores the orientation on the parcel layer as an attribute field."
              },
              {
                type: "list",
                items: [
                  "Checked — The field is added and populated, allowing symbology and labelling by direction.",
                  "Unchecked (default) — Only the summary table is written."
                ]
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Direction Analyzer**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Output Summary Table**.",
          "To symbolise the parcels by orientation afterwards, check **Add Field to Layer?**.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "min-width-check",
      "shape-quality-check",
      "direction-selector",
      "shape-metrics"
    ]
  },
  {
    slug: "duplicate-finder",
    group: "cadastral",
    name: "Duplicate Finder",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Duplicate Finder",
    actsOn: [],
    summary: {
      km: "រកតម្លៃស្ទួនក្នុងវាលលេខក្បាលដី រួចអាចជ្រើស ដាក់ស្លាក និងបន្លិចតម្លៃស្ទួនលើផែនទី ដើម្បីងាយរកទីតាំង និងកែតម្រូវ។",
      en: "Finds repeated values in a parcel number field, then optionally selects, labels, and highlights the duplicates on the map so they can be located and corrected."
    },
    body: [
      {
        type: "paragraph",
        text: "Parcel numbers must be unique. Duplicates arise from copy-paste digitising, from merging datasets, and from renumbering — and they break every join and report that depends on the number."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Field to Check** is the field tested for repeated values, normally the parcel number field.",
          "Three display options work together to make duplicates visible on the map:"
        ]
      },
      {
        type: "table",
        head: [
          "Parameter",
          "Effect"
        ],
        rows: [
          [
            "**Select duplicate and Labelling?**",
            "Selects the duplicate features and turns labelling on"
          ],
          [
            "**Labelling for duplicate only?**",
            "Restricts labels to the duplicates, so the map is not cluttered by every parcel number"
          ],
          [
            "**Highlight duplicate?**",
            "Applies a highlight symbol to the duplicates"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Checking **Labelling for duplicate only?** automatically enables **Select duplicate and Labelling?** — labelling only the duplicates requires them to be identified first.",
          "The tool reports duplicates; it does not renumber them. Correcting the numbers is a manual editing step, or use [ID Generator](../VectorIQ/IDGenerator.md) to renumber a set systematically.",
          "For duplicate detection on any layer and field, including duplicate *geometry* rather than duplicate attributes, use [Find Duplicate](../DataManagement/FindDuplicate.md)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Feature to check",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to examine."
              }
            ]
          },
          {
            name: "Field to Check",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field tested for repeated values — normally the parcel number field."
              }
            ]
          },
          {
            name: "Select duplicate and Labelling?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects the duplicate features and enables labelling."
              }
            ]
          },
          {
            name: "Labelling for duplicate only?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Restricts labels to the duplicate features only. Enabling this also enables **Select duplicate and Labelling?**."
              }
            ]
          },
          {
            name: "Highlight duplicate?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Applies a highlight symbol to the duplicate features."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Duplicate Finder**.",
          "Set **Input Feature to check** to the parcel layer.",
          "Set **Field to Check** to the parcel number field.",
          "Check **Select duplicate and Labelling?**, **Labelling for duplicate only?**, and **Highlight duplicate?** so the duplicates stand out on the map.",
          "Click **Run**.",
          "Zoom to the selection and correct the duplicated numbers, either by editing directly or with [ID Generator](../VectorIQ/IDGenerator.md)."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "find-duplicate",
      "parcel-number-audit",
      "id-generator",
      "field-formatter"
    ]
  },
  {
    slug: "feature-counter",
    group: "cadastral",
    name: "Feature Counter",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Feature Counter",
    actsOn: [],
    summary: {
      km: "រាប់ចំនួនលក្ខណៈក្នុងស្រទាប់មួយ ឬច្រើន រួចរាយការណ៍សរុប ព្រមទាំងអាចសរសេរទៅឯកសារ CSV។",
      en: "Counts the features in one or more layers and reports the totals, optionally writing them to a CSV file."
    },
    body: [
      {
        type: "paragraph",
        text: "A feature count is the simplest completeness check on a delivery: does the parcel layer hold the number of parcels the schedule says it should?"
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Features to count** accepts multiple layers, so a whole batch can be counted in one run with the results side by side.",
          "If a layer has a selection or a definition query applied, the count reflects what the layer currently shows, not the full feature class. Clear both before counting if you need the true total.",
          "Check **Write to CSV File?** and set **Output CSV file** to keep the counts as a file. Left unchecked, the counts appear only in the tool messages."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Features to count",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more layers whose features are counted."
              }
            ]
          },
          {
            name: "Write to CSV File?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Writes the counts to a CSV file."
              },
              {
                type: "list",
                items: [
                  "Checked — **Output CSV file** is enabled.",
                  "Unchecked (default) — Counts appear in the tool messages only."
                ]
              }
            ]
          },
          {
            name: "Output CSV file",
            optional: true,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The CSV file receiving the counts. Required when **Write to CSV File?** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Clear any selections and definition queries on the layers to be counted.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Feature Counter**.",
          "In **Input Features to count**, select the layers.",
          "To keep a record, check **Write to CSV File?** and set **Output CSV file**.",
          "Click **Run** and read the totals in the tool messages."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "statistics-summary",
      "pivot-table-builder",
      "parcel-number-audit"
    ]
  },
  {
    slug: "field-formatter",
    group: "cadastral",
    name: "Field Formatter",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Field Formatter",
    actsOn: [],
    summary: {
      km: "ផ្ទៀងផ្ទាត់ និងធ្វើឱ្យទម្រង់វាលក្បាលដីស្តង់ដារតាមលក្ខណៈបច្ចេកទេសដែលតម្រូវ ដោយកែស្រទាប់ដោយផ្ទាល់ ឬសរសេរច្បាប់ចម្លងដែលបានកែទៅ workspace ផ្សេង។",
      en: "Validates and standardises parcel field formats against the required specification, updating the layers in place or writing corrected copies to a different workspace."
    },
    body: [
      {
        type: "paragraph",
        text: "Cadastral delivery specifications state exactly what each field must be called, what type it must have, and how long it must be. This tool brings a batch of layers into line."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Feature** accepts multiple layers and processes them all against the same specification.",
          {
            text: "**Output update feature class to difference workspace?** decides where the result goes:",
            items: [
              "**Unchecked (default)** — The input layers are updated in place. There is no undo; make a backup first.",
              "**Checked** — Corrected copies are written to **Output Workspace**, leaving the originals untouched."
            ]
          },
          "**Output Workspace** accepts only a local geodatabase or a feature dataset — the parameter filters to `LocalDatabase` and `FeatureDataset`. A plain folder cannot be used as the target, because shapefile field naming cannot hold the required schema.",
          "Run this tool before [Parcel Cleaner](ParcelCleaner.md) if the field names and types are wrong, and after it if only the content needs standardising — Field Formatter fixes the schema, Parcel Cleaner fixes the contents."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more parcel layers to validate and standardise."
              }
            ]
          },
          {
            name: "Output update feature class to difference workspace?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects copy or in-place mode."
              },
              {
                type: "list",
                items: [
                  "Checked — Corrected copies are written to **Output Workspace**.",
                  "Unchecked (default) — The input layers are updated in place, with no undo."
                ]
              }
            ]
          },
          {
            name: "Output Workspace?",
            optional: true,
            type: "Workspace",
            description: [
              {
                type: "paragraph",
                text: "The target for the corrected copies. Must be a local geodatabase or a feature dataset; folders are not accepted. Required when the copy option is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Back up the parcel layers, or plan to use the copy option.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Field Formatter**.",
          "In **Input Feature**, select the parcel layers to standardise.",
          "Check **Output update feature class to difference workspace?** and set **Output Workspace** to a geodatabase or feature dataset, so the originals are preserved.",
          "Click **Run**, then review the messages for fields that could not be corrected automatically."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "parcel-cleaner",
      "lmap-layer",
      "rename-field",
      "value-type-converter",
      "database-structure-builder"
    ]
  },
  {
    slug: "lmap-layer",
    group: "cadastral",
    name: "LMAP Layer",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ LMAP Layer",
    actsOn: [],
    summary: {
      km: "បង្កើតស្រទាប់ពហុកោណដោយប្រើស្គីម៉ាវាល LMAP ស្តង់ដារដែល MLMUPC តម្រូវ ឬនាំចេញស្រទាប់ដែលមានស្រាប់ចូលទៅស្គីម៉ានោះ ជាមួយការដាក់លេខក្បាលដីស្វ័យប្រវត្តិ កាលបរិច្ឆេទបញ្ចូល និងការទប់ស្កាត់ UPRN ស្ទួន។",
      en: "Creates a polygon layer using the standard LMAP field schema required by MLMUPC, or exports existing layers into that schema, with automatic parcel numbering, entry dates, and duplicate UPRN prevention."
    },
    body: [
      {
        type: "paragraph",
        text: "LMAP is the field format Cambodia's Ministry of Land Management, Urban Planning and Construction requires for cadastral submissions. This tool produces data already in that schema rather than retrofitting it afterwards."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Export Feature?** switches the tool between its two modes: All parameters are marked optional because which ones apply depends on the mode."
        ]
      },
      {
        type: "table",
        head: [
          "Mode",
          "Parameters used"
        ],
        rows: [
          [
            "**Unchecked — create**",
            "**Output New LMAP feature**, **Output Coordinate System**"
          ],
          [
            "**Checked — export**",
            "**Input Features to Export**, **Output workspace**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Prevent Duplicate UPRNs** guards the unique parcel reference number. A duplicate UPRN invalidates a submission, so keep this enabled unless there is a specific reason not to. The tool ensures Global IDs exist on the feature class to support the check.",
          "**Auto Calculate parcel_no?** populates the `parcel_no` field automatically, and **Auto Entry Date** stamps the entry date field. Both save manual attribute entry and remove the transcription errors that come with it.",
          "**Digitizer's Name** records the responsible digitiser, as the specification requires.",
          "**Output Coordinate System** applies when creating a new layer. Set it to the coordinate system the submission requires — for Cambodia, normally WGS 1984 UTM Zone 48N.",
          "Feature class names are validated when exporting; a name that does not meet geodatabase rules is reported."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Export Feature?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects the mode."
              },
              {
                type: "list",
                items: [
                  "Checked — Existing layers are exported into the LMAP schema, using **Input Features to Export** and **Output workspace**.",
                  "Unchecked (default) — A new empty LMAP layer is created, using **Output New LMAP feature** and **Output Coordinate System**."
                ]
              }
            ]
          },
          {
            name: "Output New LMAP feature",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The new LMAP polygon feature class to create. Used in create mode."
              }
            ]
          },
          {
            name: "Output Coordinate System",
            optional: true,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system of the new layer. Used in create mode."
              }
            ]
          },
          {
            name: "Digitizer's Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The digitiser's name, recorded as the specification requires."
              }
            ]
          },
          {
            name: "Prevent Duplicate UPRNs",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enforces uniqueness of the parcel reference number. Keep enabled — a duplicate UPRN invalidates a submission."
              }
            ]
          },
          {
            name: "Auto Calculate parcel_no?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Populates the `parcel_no` field automatically."
              }
            ]
          },
          {
            name: "Auto Entry Date",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Stamps the entry date field automatically."
              }
            ]
          },
          {
            name: "Input Features to Export",
            optional: true,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "The layers to export into the LMAP schema. Used in export mode."
              }
            ]
          },
          {
            name: "Output workspace",
            optional: true,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset receiving the exported layers. Used in export mode."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Create a new LMAP layer"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **LMAP Layer**.",
          "Leave **Export Feature?** unchecked.",
          "Set **Output New LMAP feature** to the feature class to create.",
          "Set **Output Coordinate System** to the coordinate system the submission requires.",
          "Type the digitiser's name in **Digitizer's Name**.",
          "Check **Prevent Duplicate UPRNs**, **Auto Calculate parcel_no?**, and **Auto Entry Date**.",
          "Click **Run**, then digitise into the new layer."
        ]
      },
      {
        type: "subheading",
        text: "Export existing layers into the LMAP schema"
      },
      {
        type: "steps",
        items: [
          "Open the tool and check **Export Feature?**.",
          "In **Input Features to Export**, select the layers to convert.",
          "Set **Output workspace**.",
          "Set **Digitizer's Name** and the automatic-field options as above.",
          "Click **Run**, then review any name validation messages."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "field-formatter",
      "parcel-cleaner",
      "create-polygon-layer",
      "database-structure-builder"
    ]
  },
  {
    slug: "legal-description-builder",
    group: "cadastral",
    name: "Legal Description Builder",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Legal Description Builder",
    actsOn: [],
    summary: {
      km: "បង្កើតសេចក្តីពិពណ៌នាតាមផ្លូវច្បាប់បែប metes-and-bounds សម្រាប់ក្បាលដីនីមួយៗ ដោយសរសេរទៅឯកសារអក្សរ និងអាចរក្សាទុកលើស្រទាប់ក្បាលដីជាគុណលក្ខណៈ។",
      en: "Generates a metes-and-bounds legal description for each parcel, written to a text file and optionally stored on the parcel layer as an attribute."
    },
    body: [
      {
        type: "paragraph",
        text: "A legal description walks the boundary from a defined starting corner, stating each leg's bearing and distance in prose. This tool produces that text directly from the geometry."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Starting Point Method** chooses which corner the description begins at: Use a compass-based method for a stable, reproducible description. `first` depends on the digitising order and can change if the geometry is edited, so the same parcel may produce a different description after a reshape."
        ]
      },
      {
        type: "table",
        head: [
          "Choice",
          "Starting corner"
        ],
        rows: [
          [
            "`northernmost` (default)",
            "The corner furthest north"
          ],
          [
            "`southernmost`",
            "The corner furthest south"
          ],
          [
            "`easternmost`",
            "The corner furthest east"
          ],
          [
            "`westernmost`",
            "The corner furthest west"
          ],
          [
            "`first`",
            "The polygon's own first vertex, as stored"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Add Description Field** is checked by default. It writes the generated text into a field on the parcel layer, so the description travels with the feature and can be used in labels, pop-ups, and joins — not just in the output file.",
          "**Output Text File** receives the descriptions. If the path is typed without an extension, `.txt` is appended automatically.",
          "**Input Parcel Layer** accepts polygon layers only, and should be in a projected coordinate system so bearings and distances are survey quantities."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to describe. Polygon geometry only."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel, used to head each description."
              }
            ]
          },
          {
            name: "Starting Point Method",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The corner at which each boundary description begins. Default is `northernmost`."
              },
              {
                type: "list",
                items: [
                  "`northernmost`",
                  "`southernmost`",
                  "`easternmost`",
                  "`westernmost`",
                  "`first` — the polygon's stored first vertex"
                ]
              }
            ]
          },
          {
            name: "Output Text File",
            optional: false,
            type: "File",
            description: [
              {
                type: "paragraph",
                text: "The text file receiving the descriptions. A `.txt` extension is added if none is given."
              }
            ]
          },
          {
            name: "Add Description Field",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Writes the generated description into a field on the parcel layer."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — The field is added and populated.",
                  "Unchecked — The description is written only to the text file."
                ]
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Legal Description Builder**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Starting Point Method**. Leave it at `northernmost` unless the descriptions must begin at a specific corner.",
          "Set **Output Text File**.",
          "Leave **Add Description Field** checked so the text is also stored on the parcel.",
          "Click **Run**, then open the text file to review the descriptions."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "bearing-distance-calculator",
      "coordinate-listing",
      "corner-point-builder"
    ]
  },
  {
    slug: "min-width-check",
    group: "cadastral",
    name: "Min Width Check",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Min Width Check",
    actsOn: [],
    summary: {
      km: "វាស់ទទឹងអប្បបរមានៃក្បាលដីនីមួយៗ រួចសម្គាល់ក្បាលដីដែលតូចជាងកម្រិតកំណត់ ដោយប្រើការប៉ាន់តាមចតុកោណព័ទ្ធ ឬការគណនាជាក់លាក់បែប rotating calipers។",
      en: "Measures the minimum width of each parcel and flags those narrower than a stated threshold, using either a bounding-rectangle approximation or an exact rotating-calipers calculation."
    },
    body: [
      {
        type: "paragraph",
        text: "Minimum-width rules appear in subdivision regulations and building codes. A parcel that satisfies its area requirement can still be unbuildable because it is too narrow."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Width Method** trades speed against exactness: Use `Rotating Calipers` for compliance checking on irregular parcels — the bounding-rectangle method can pass a parcel that a true width measurement would fail."
        ]
      },
      {
        type: "table",
        head: [
          "Choice",
          "Behaviour"
        ],
        rows: [
          [
            "`Minimum Bounding Rectangle` (default)",
            "Approximates width as the short side of the parcel's minimum bounding rectangle. Fast, and correct for rectangular parcels. Overstates the width of an L-shaped or tapering parcel, because the rectangle ignores the narrow waist."
          ],
          [
            "`Rotating Calipers`",
            "Computes the true minimum width across all orientations. Slower on large datasets, but correct for irregular shapes."
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Minimum Width (meters)** defaults to `10`. The value is interpreted in metres, so the parcel layer should be in a projected coordinate system using metres.",
          "**Input Parcel Layer** accepts polygon layers only.",
          "The output feature class carries the measured width and the pass/fail flag, so it can be symbolised to show non-compliant parcels directly."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to measure. Polygon geometry only."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel in the output."
              }
            ]
          },
          {
            name: "Minimum Width (meters)",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The width threshold below which a parcel is flagged. Default is `10`."
              }
            ]
          },
          {
            name: "Output Feature Class",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The feature class recording each parcel's measured width and whether it meets the threshold."
              }
            ]
          },
          {
            name: "Width Method",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "How the minimum width is computed. Default is `Minimum Bounding Rectangle`."
              },
              {
                type: "list",
                items: [
                  "`Minimum Bounding Rectangle` — fast approximation; overstates width on irregular shapes",
                  "`Rotating Calipers` — exact minimum width across all orientations"
                ]
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system in metres.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Min Width Check**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Minimum Width (meters)** to the regulatory threshold.",
          "Set **Output Feature Class**.",
          "Set **Width Method**. For compliance checking on irregular parcels, choose `Rotating Calipers`.",
          "Click **Run**.",
          "Add the output to the map and symbolise by the flag field to see the non-compliant parcels."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "shape-quality-check",
      "parcel-split-optimizer",
      "direction-analyzer",
      "shape-metrics"
    ]
  },
  {
    slug: "network-builder",
    group: "cadastral",
    name: "Network Builder",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Network Builder",
    actsOn: [],
    summary: {
      km: "បង្កើតក្រាបភ្ជាប់គ្នាពីស្រទាប់ក្បាលដី ដោយបង្កើត feature class node នៅជ្រុង, feature class edge តាមព្រំដែន និងតារាងជាប់គ្នាភ្ជាប់ក្បាលដី។",
      en: "Builds a connected graph from a parcel layer, producing a node feature class at the corners, an edge feature class along the boundaries, and an adjacency table linking parcels."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Parcel Adjacency](ParcelAdjacency.md) answers \"which parcels touch\", this tool produces the full topological structure — the corners, the boundary segments between them, and the parcel relationships — as three related datasets."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Three datasets are written into **Output Workspace**, named by the three name parameters:"
        ]
      },
      {
        type: "table",
        head: [
          "Dataset",
          "Default name",
          "Contents"
        ],
        rows: [
          [
            "Nodes",
            "`ParcelNodes`",
            "Points at the parcel corners"
          ],
          [
            "Edges",
            "`ParcelEdges`",
            "Lines along the parcel boundaries"
          ],
          [
            "Adjacency table",
            "`ParcelAdjacency`",
            "Parcel-to-parcel relationships"
          ]
        ]
      },
      {
        type: "list",
        items: [
          {
            text: "**Snap Tolerance** defaults to `0.01` and is the critical parameter. Corners of adjacent parcels are almost never numerically identical; the tolerance decides how close is close enough to be treated as one node. Set it just above the coordinate scatter in the data. For clean survey data `0.01` metres is appropriate; for digitised legacy mapping a larger value may be necessary.",
            items: [
              "Too small — corners that should coincide become separate nodes and the graph is disconnected.",
              "Too large — genuinely distinct corners collapse into one node and parcels appear adjacent when they are not."
            ]
          },
          "**Input Parcel Layer** accepts polygon layers only, and must use a projected coordinate system so the snap tolerance is a ground distance.",
          "The three output names must not collide with existing datasets in the output workspace."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to convert into a graph. Polygon geometry only."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel, carried into the edges and adjacency table."
              }
            ]
          },
          {
            name: "Output Workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the three outputs."
              }
            ]
          },
          {
            name: "Snap Tolerance",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The distance within which nearby corners are treated as a single node, in the layer's coordinate system units. Default is `0.01`."
              }
            ]
          },
          {
            name: "Output Nodes Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the node feature class. Default is `ParcelNodes`."
              }
            ]
          },
          {
            name: "Output Edges Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the edge feature class. Default is `ParcelEdges`."
              }
            ]
          },
          {
            name: "Output Adjacency Table Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the adjacency table. Default is `ParcelAdjacency`."
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Nodes FC",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The generated node feature class."
              }
            ]
          },
          {
            name: "Output Edges FC",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The generated edge feature class."
              }
            ]
          },
          {
            name: "Output Adjacency Table",
            optional: false,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The generated adjacency table."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Network Builder**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Output Workspace**.",
          "Set **Snap Tolerance**. Keep `0.01` for clean survey data; increase it for digitised legacy mapping.",
          "Accept the three default output names, or change them if the workspace already holds datasets with those names.",
          "Click **Run**.",
          "Inspect the node layer. Clusters of several nodes where one corner should be indicate the snap tolerance is too small — raise it and run again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "parcel-adjacency",
      "corner-point-builder",
      "boundary-line-builder",
      "boundary-conflict-check"
    ]
  },
  {
    slug: "parcel-overlap-check",
    group: "cadastral",
    name: "Overlap Check",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Topology ▸ Overlap Check",
    actsOn: [],
    summary: {
      km: "រកក្បាលដីដែលត្រួតគ្នាពេញស្រទាប់មួយ ឬច្រើន ព្រមទាំងអាចត្រងផែនទីឱ្យបង្ហាញតែលក្ខណៈដែលត្រួតគ្នា ដើម្បីងាយរកទីតាំង និងកែតម្រូវ។",
      en: "Finds overlapping parcels across one or more layers and optionally filters the map to show only the overlapping features, making them easy to locate and fix."
    },
    body: [
      {
        type: "paragraph",
        text: "Parcels must not overlap — an overlap means two records claim the same ground. This check needs no geodatabase topology, so it runs on shapefiles and on data outside a feature dataset."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Features** accepts multiple polygon layers. Overlaps are found both within each layer and between the layers supplied.",
          "**Show only the overlap parcels?** applies a definition query so the map displays nothing but the overlapping features. This is the practical way to work through the corrections — everything else is hidden.",
          "**Redisplay all parcels** clears that filter and restores the full display. Run the tool with only this option checked to undo a previous filtering.",
          "Unlike [Boundary Overlap](../TopologyCheck/BoundaryOverlapCheck.md) and [Topology Check](../TopologyCheck/TopologyCheck.md), this tool creates no persistent topology, so it leaves nothing behind in the geodatabase. The trade-off is that there is no error inspector and no way to mark an overlap as an accepted exception.",
          "Resolve overlaps before running [Parcel Adjacency](ParcelAdjacency.md) or [Percent Coverage](../Geoprocessing/PercentCoverage.md) — both give misleading results on overlapping data."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Features",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more parcel layers to check. Polygon geometry only. Overlaps are found within and between layers."
              }
            ]
          },
          {
            name: "Show only the overlap parcels?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Applies a definition query so the map shows only the overlapping features."
              }
            ]
          },
          {
            name: "Redisplay all parcels",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Clears the definition query and restores the full display. Check this alone to undo a previous filter."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Find and isolate overlaps"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Topology** gallery and click **Overlap Check**.",
          "In **Input Features**, select the parcel layers to check.",
          "Check **Show only the overlap parcels?**.",
          "Click **Run**. The map now shows only the overlapping parcels.",
          "Work through them, editing the geometry to remove each overlap."
        ]
      },
      {
        type: "subheading",
        text: "Restore the full display"
      },
      {
        type: "steps",
        items: [
          "Open the tool again.",
          "Set **Input Features** to the same layers.",
          "Check **Redisplay all parcels** and leave **Show only the overlap parcels?** unchecked.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "detect-overlap-gap",
      "detect-overlap-across-layer",
      "topology-check",
      "boundary-conflict-check",
      "filter-selection"
    ]
  },
  {
    slug: "parcel-adjacency",
    group: "cadastral",
    name: "Parcel Adjacency",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Parcel Adjacency",
    actsOn: [],
    summary: {
      km: "បង្កើតតារាងអ្នកជិតខាង ដែលកត់ត្រាថាក្បាលដីណាប៉ះនឹងក្បាលដីណា ព្រមទាំងអាចរួមបញ្ចូលប្រវែងព្រំដែនរួមនីមួយៗ។",
      en: "Builds a neighbour table recording which parcels touch which, optionally with the length of each shared boundary."
    },
    body: [
      {
        type: "paragraph",
        text: "An adjacency table is the foundation for neighbour notification lists, boundary dispute analysis, and any question of the form \"which parcels border this one\"."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          {
            text: "**Adjacency Type** decides what counts as adjacent: For neighbour notification, `Shared Edge` is usually correct; a diagonal corner touch is not a shared boundary in practice.",
            items: [
              "`Shared Edge` (default) — Parcels are neighbours only if they share a boundary segment. Two parcels meeting at a single corner point are *not* neighbours.",
              "`Shared Edge or Corner` — Corner-only contact also counts."
            ]
          },
          {
            text: "**Write Both Directions** controls table symmetry: Check it when the table will be joined or queried by parcel; leave it unchecked for a compact pair list.",
            items: [
              "**Unchecked (default)** — Each pair is written once. Parcel A → B appears, but not B → A. Compact, but a lookup on a given parcel must search both columns.",
              "**Checked** — Each pair is written twice, once in each direction. The table is twice the size, but a query on one parcel column returns all its neighbours."
            ]
          },
          "**Include Shared Boundary Length** is on by default and records the length of each shared boundary in the layer's coordinate system units. This is what distinguishes a substantial common boundary from a few centimetres of incidental contact.",
          "Run [Parcel Overlap Check](ParcelOverlapCheck.md) first. Overlapping parcels produce misleading adjacency results, because an overlap is reported as shared boundary."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to analyse."
              }
            ]
          },
          {
            name: "Parcel ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field identifying each parcel. Its values populate both parcel columns of the output table."
              }
            ]
          },
          {
            name: "Output Neighbor Table",
            optional: false,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The table recording the adjacency pairs."
              }
            ]
          },
          {
            name: "Adjacency Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "What counts as adjacency. Default is `Shared Edge`."
              },
              {
                type: "list",
                items: [
                  "`Shared Edge` — a shared boundary segment is required",
                  "`Shared Edge or Corner` — corner-only contact also counts"
                ]
              }
            ]
          },
          {
            name: "Write Both Directions",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether each pair is written once or twice."
              },
              {
                type: "list",
                items: [
                  "Checked — Both A→B and B→A rows are written.",
                  "Unchecked (default) — Each pair appears once."
                ]
              }
            ]
          },
          {
            name: "Include Shared Boundary Length",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Records the length of each shared boundary, in the layer's coordinate system units."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — Shared length is included.",
                  "Unchecked — Only the pair is recorded."
                ]
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Run [Parcel Overlap Check](ParcelOverlapCheck.md) and resolve any overlaps.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Parcel Adjacency**.",
          "Set **Input Parcel Layer** and **Parcel ID Field**.",
          "Set **Output Neighbor Table**.",
          "Set **Adjacency Type** — leave it at `Shared Edge` unless corner contact must count.",
          "Check **Write Both Directions** if the table will be queried by parcel.",
          "Leave **Include Shared Boundary Length** checked so short incidental contacts can be filtered out later.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "network-builder",
      "boundary-conflict-check",
      "parcel-overlap-check",
      "nearest-feature-distance"
    ]
  },
  {
    slug: "parcel-cleaner",
    group: "cadastral",
    name: "Parcel Cleaner",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Parcel Cleaner",
    actsOn: [],
    summary: {
      km: "ធ្វើឱ្យទិន្នន័យក្បាលដីស្តង់ដារសម្រាប់ការប្រគល់ — លុបវាលដែលមិនតម្រូវ បោះត្រាឈ្មោះអ្នកគូស ផ្ទៀងផ្ទាត់វាលកាលបរិច្ឆេទ និងអាចដកព័ត៌មានម្ចាស់ដី — ដោយកែផ្ទាល់ ឬបង្កើតច្បាប់ចម្លងស្អាត។",
      en: "Standardises parcel datasets for delivery — dropping fields that are not required, stamping the digitiser's name, validating date fields, and optionally excluding owner information — either in place or as a clean copy."
    },
    body: [
      {
        type: "paragraph",
        text: "Parcel data assembled during digitising accumulates working fields, inconsistent dates, and personal information that must not be handed on. This tool brings a batch of layers to a consistent, deliverable state in one run."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          {
            text: "**Clean and Copy?** decides whether the inputs are modified in place or copied:",
            items: [
              "**Checked** — Cleaned copies are written to **Output Workspace**, leaving the originals untouched. This is the safe option.",
              "**Unchecked** — The input layers are modified in place. There is no undo; make a backup first."
            ]
          },
          "**Input Features** accepts multiple polygon layers and processes them all.",
          "**Exclude Owner field** removes the owner field from the output. Use it when producing a dataset for onward distribution, so personal information is not shared beyond its intended recipient.",
          "**Drop unrequired fields?** removes working fields that are not part of the standard parcel schema.",
          "**Check date field?** validates the date fields and reports values that are malformed or out of range.",
          "**Digitizer's Name** stamps the responsible digitiser into the data, which is the usual requirement for traceability on a cadastral delivery.",
          "**Change Suffix** and **Enter Suffix** control output naming when copying. Use them to mark a batch — for example, a `_clean` suffix — so cleaned outputs are distinguishable from the source."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Clean and Copy?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects copy or in-place mode."
              },
              {
                type: "list",
                items: [
                  "Checked — Cleaned copies are written to **Output Workspace**; the originals are untouched.",
                  "Unchecked — The input layers are modified in place, with no undo."
                ]
              }
            ]
          },
          {
            name: "Input Features",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more parcel layers to clean. Polygon geometry only."
              }
            ]
          },
          {
            name: "Digitizer's Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The digitiser's name, stamped into the data for traceability."
              }
            ]
          },
          {
            name: "Drop unrequired fields?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Removes working fields that are not part of the standard parcel schema."
              }
            ]
          },
          {
            name: "Check date field?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Validates the date fields and reports malformed or out-of-range values."
              }
            ]
          },
          {
            name: "Output Workspace",
            optional: true,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the cleaned copies. Required when **Clean and Copy?** is checked."
              }
            ]
          },
          {
            name: "Exclude Owner field",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Removes the owner field from the output. Use when the dataset will be distributed onward."
              }
            ]
          },
          {
            name: "Change Suffix",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables a custom suffix on output names."
              },
              {
                type: "list",
                items: [
                  "Checked — **Enter Suffix** is enabled.",
                  "Unchecked — Default naming is used."
                ]
              }
            ]
          },
          {
            name: "Enter Suffix",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The suffix appended to each output name. Required when **Change Suffix** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Parcel Cleaner**.",
          "Check **Clean and Copy?** and set **Output Workspace**, so the originals are preserved.",
          "In **Input Features**, select every parcel layer in the batch.",
          "Type the responsible digitiser's name in **Digitizer's Name**.",
          "Check **Drop unrequired fields?** and **Check date field?**.",
          "If the output will be distributed beyond the immediate recipient, check **Exclude Owner field**.",
          "To mark the batch, check **Change Suffix** and type a suffix such as `_clean`.",
          "Click **Run**, then review any date validation messages reported."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "field-formatter",
      "lmap-layer",
      "shape-quality-check",
      "copy-parcel-to-gdb"
    ]
  },
  {
    slug: "parcel-number-audit",
    group: "cadastral",
    name: "Parcel Number Audit",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Parcel Number Audit",
    actsOn: [],
    summary: {
      km: "វិភាគវាលលេខក្បាលដីពេញស្រទាប់មួយ ឬច្រើន រកលំនាំដាក់លេខ ចន្លោះខ្វះ និងភាពមិនស៊ីគ្នា ព្រមទាំងអាចសរសេរលទ្ធផលទៅរបាយការណ៍អក្សរ។",
      en: "Analyses a parcel number field across one or more layers for numbering patterns, gaps, and inconsistencies, optionally writing the findings to a text report."
    },
    body: [
      {
        type: "paragraph",
        text: "Parcel numbering usually follows a scheme. This tool checks whether the data actually obeys it — finding the gaps in a sequence, the values that break the format, and the inconsistencies between layers."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Features** accepts multiple layers, so a whole commune's worth of parcel layers can be audited against the same numbering scheme in one run.",
          "**Choose Field to check** is the parcel number field. The audit is only as meaningful as this choice — pointing it at a working field rather than the official number produces a report about nothing.",
          "Check **Generate Report?** and set **Output Report (.txt)** to keep the findings as a file. Left unchecked, the results appear only in the tool messages and are lost when the dialog closes. For a documented audit, always request the report.",
          "This tool reports on patterns and gaps. To find outright duplicate numbers, use [Duplicate Finder](DuplicateFinder.md), which also selects and highlights them on the map."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Features",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more parcel layers to audit."
              }
            ]
          },
          {
            name: "Choose Field to check",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The parcel number field to analyse."
              }
            ]
          },
          {
            name: "Generate Report?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Writes the findings to a text file."
              },
              {
                type: "list",
                items: [
                  "Checked — **Output Report (.txt)** is enabled.",
                  "Unchecked (default) — Findings appear in the tool messages only."
                ]
              }
            ]
          },
          {
            name: "Output Report (.txt)",
            optional: true,
            type: "Text File",
            description: [
              {
                type: "paragraph",
                text: "The text file receiving the audit report. Required when **Generate Report?** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Parcel Number Audit**.",
          "In **Input Features**, select every parcel layer to be audited.",
          "Set **Choose Field to check** to the official parcel number field.",
          "Check **Generate Report?** and set **Output Report (.txt)**.",
          "Click **Run**, then open the report and work through the gaps and inconsistencies it lists."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "duplicate-finder",
      "field-formatter",
      "id-generator",
      "statistics-summary"
    ]
  },
  {
    slug: "parcel-split-optimizer",
    group: "cadastral",
    name: "Parcel Split Optimizer",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Parcel Split Optimizer",
    actsOn: [],
    summary: {
      km: "រៀបចំទីតាំងក្បាលដីបំបែកដោយស្វ័យប្រវត្តិក្នុងក្បាលដីមេ ដោយគោរពដែនកំណត់ទំហំ ចម្ងាយថយពីផ្លូវ និងវិធានទទឹងមុខ និងជម្រៅអប្បបរមា ដោយប្រើក្បួនរៀបចំមួយក្នុងចំណោមបួន។",
      en: "Automatically lays out subdivision lots inside a parent parcel, respecting lot size limits, road setbacks, and minimum frontage and depth rules, using one of four layout algorithms."
    },
    body: [
      {
        type: "paragraph",
        text: "Where [Parcel Split Tool](ParcelSplitTool.md) applies a division rule you specify, this tool solves the layout: give it the constraints and it finds a lot arrangement that satisfies them."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Subdivision Method** selects the layout algorithm, and the choice matters more than any other single setting:"
        ]
      },
      {
        type: "table",
        head: [
          "Method",
          "Behaviour"
        ],
        rows: [
          [
            "`Legacy_Frontage` (default)",
            "Lays lots out along road frontage. The most realistic for typical street-fronting subdivisions."
          ],
          [
            "`Grid`",
            "A regular grid of lots. Efficient on rectangular parcels, poor on irregular ones."
          ],
          [
            "`Voronoi`",
            "Lots grown from seed points. Handles irregular parcels but produces non-rectangular lots."
          ],
          [
            "`Genetic`",
            "A search-based optimiser. Can find better layouts on awkward parcels, at the cost of a considerably longer run time."
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Input Road Access** is optional but effectively required for `Legacy_Frontage`, which needs road geometry to lay lots against. Without it, the method has no frontage to work from.",
          "Parameters are grouped into categories on the dialog:"
        ]
      },
      {
        type: "table",
        head: [
          "Category",
          "Controls"
        ],
        rows: [
          [
            "**Subdivision Setting**",
            "Minimum and maximum lot size, zoning type"
          ],
          [
            "**Setback Setting**",
            "Road, side, and rear setbacks"
          ],
          [
            "**Lot Rule**",
            "Minimum frontage, minimum and maximum depth"
          ],
          [
            "**Frontage Analysis**",
            "Road search distance, frontage buffer"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Maximum Depth** defaults to `0`, which means unlimited. Set an actual value to prevent unusably deep lots on a large parcel.",
          "**Road Search Distance** defaults to `150` — how far the tool looks for a road to front lots against. Increase it if the parcel sits back from the road; the default may find no frontage at all for a deep rural parcel.",
          "**Frontage Buffer** defaults to `5` and sets the tolerance used when deciding what counts as road frontage.",
          "Constraints can conflict. A minimum lot size, minimum frontage, minimum depth, and generous setbacks may together be unsatisfiable inside the parent parcel — relax one of them if the result contains few or no lots.",
          "**Output Subdivision Lines** is optional and writes the lot boundary lines as a separate layer, for symbolising the layout."
        ]
      }
    ],
    parameters: [
      {
        title: "Input and output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parent Parcel",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel to subdivide. Polygon geometry only."
              }
            ]
          },
          {
            name: "Input Road Access",
            optional: true,
            type: "Feature Set",
            description: [
              {
                type: "paragraph",
                text: "The road centreline or edge geometry lots are fronted against. Polyline geometry only. Effectively required for `Legacy_Frontage`."
              }
            ]
          },
          {
            name: "Subdivision Method",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The layout algorithm. Default is `Legacy_Frontage`."
              },
              {
                type: "list",
                items: [
                  "`Grid`",
                  "`Voronoi`",
                  "`Genetic`",
                  "`Legacy_Frontage`"
                ]
              }
            ]
          },
          {
            name: "Output Subdivision Lots",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The lot feature class to create."
              }
            ]
          },
          {
            name: "Output Subdivision Lines",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The lot boundary lines, as a separate feature class."
              }
            ]
          }
        ]
      },
      {
        title: "Subdivision Setting",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Minimum Lot Size",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The smallest permitted lot area."
              }
            ]
          },
          {
            name: "Maximum Lot Size",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The largest permitted lot area."
              }
            ]
          },
          {
            name: "Zoning Type",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The zoning category applied to the layout. Default is `Residential`."
              },
              {
                type: "list",
                items: [
                  "`Residential`",
                  "`Commercial`",
                  "`Mixed`"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Setback Setting",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Road Setback",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The setback from the road frontage."
              }
            ]
          },
          {
            name: "Side Setback",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The setback from the side boundaries."
              }
            ]
          },
          {
            name: "Rear Setback",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The setback from the rear boundary."
              }
            ]
          }
        ]
      },
      {
        title: "Lot Rule",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Minimum Frontage",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The minimum road frontage each lot must have."
              }
            ]
          },
          {
            name: "Minimum Depth",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The minimum depth each lot must have."
              }
            ]
          },
          {
            name: "Maximum Depth",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The maximum lot depth. Default is `0`, meaning unlimited."
              }
            ]
          }
        ]
      },
      {
        title: "Frontage Analysis",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Road Search Distance",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "How far to search for road geometry to front lots against. Default is `150`."
              }
            ]
          },
          {
            name: "Frontage Buffer",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The tolerance used when determining road frontage. Default is `5`."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Add the parent parcel and the road layer to the map.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Parcel Split Optimizer**.",
          "Set **Input Parent Parcel**, and set **Input Road Access** to the road geometry.",
          "Leave **Subdivision Method** as `Legacy_Frontage` for a street-fronting layout.",
          "Under **Subdivision Setting**, set **Minimum Lot Size**, optionally **Maximum Lot Size**, and the **Zoning Type**.",
          "Under **Setback Setting**, enter the road, side, and rear setbacks required by the local rules.",
          "Under **Lot Rule**, set **Minimum Frontage** and **Minimum Depth**. Set **Maximum Depth** if deep lots must be prevented.",
          "Under **Frontage Analysis**, increase **Road Search Distance** if the parcel sits well back from the road.",
          "Set **Output Subdivision Lots**, and **Output Subdivision Lines** if you want the boundary lines separately.",
          "Click **Run**. If few or no lots are produced, relax one of the constraints — most often the minimum lot size or the setbacks — and run again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "parcel-split-tool",
      "min-width-check",
      "parcel-division-form",
      "trim-parcel-by-road-parallel"
    ]
  },
  {
    slug: "parcel-split-tool",
    group: "cadastral",
    name: "Parcel Split Tool",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Parcel Split Tool",
    actsOn: [],
    summary: {
      km: "បំបែកក្បាលដីតាមផ្ទៃស្មើគ្នា តាមចម្ងាយរបារថេរ តាមសមាមាត្រកំណត់ ឬតាមខ្សែដែលអ្នកគូស ជាមួយការគ្រប់គ្រងទិសចាប់ផ្តើម និងរបៀបដោះស្រាយផ្នែកសល់។",
      en: "Subdivides parcels by equal area, by fixed strip distance, by a stated ratio, or along a user-drawn line, with control over which side the split starts from and how any remainder is handled."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the manual-control counterpart to [Parcel Split Optimizer](ParcelSplitOptimizer.md): you specify the division rule, and the tool applies it exactly."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Subdivision Method** determines which of the remaining parameters apply:"
        ]
      },
      {
        type: "table",
        head: [
          "Method",
          "Parameters used"
        ],
        rows: [
          [
            "`AREA_EQUAL` (default)",
            "**Number of divided Parts**, or **Target Part Area**"
          ],
          [
            "`DISTANCE`",
            "**Strip Distance**"
          ],
          [
            "`PROPORTIONAL`",
            "**Part Ratios**"
          ],
          [
            "`USER_LINE`",
            "**Split Line**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**AREA_EQUAL** divides the parcel into equally sized parts. Give either **Number of divided Parts** (to get that many equal parts) or **Target Part Area** (to get as many parts of that size as fit).",
          "**PROPORTIONAL** uses **Part Ratios** — a list of relative shares, such as `2,1,1` for parts of one half and two quarters. Ratios are relative, not absolute areas.",
          "**USER_LINE** cuts along the geometry in **Split Line**, which must be a polyline layer. Draw the cut line first, then run the tool.",
          "**Guide Line** is an optional polyline that steers the direction of the split for the area and distance methods, so the division lines run parallel to a road or an existing boundary rather than along an arbitrary axis.",
          "**Split from** sets which side the division starts at, defaulting to `NORTH`. It has a direct effect on the result — splitting the same parcel from `NORTH` and from `EAST` produces different parts of equal area but different shape.",
          {
            text: "**Remainder Handling** applies when the parcel does not divide exactly: Use `KEEP_REMAINDER` when each part must meet an exact area; use `DISTRIBUTE_TO_PARTS` when no undersized offcut is acceptable.",
            items: [
              "`KEEP_REMAINDER` (default) — the leftover area stays as its own smaller part.",
              "`DISTRIBUTE_TO_PARTS` — the leftover is spread across the parts, so all parts are slightly larger than nominal."
            ]
          }
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to subdivide. Polygon geometry only."
              }
            ]
          },
          {
            name: "Subdivision Method",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The division rule. Default is `AREA_EQUAL`."
              },
              {
                type: "list",
                items: [
                  "`AREA_EQUAL` — equal-area parts",
                  "`DISTANCE` — fixed-width strips",
                  "`PROPORTIONAL` — parts sized by ratio",
                  "`USER_LINE` — cut along a drawn line"
                ]
              }
            ]
          },
          {
            name: "Number of divided Parts",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "How many parts to create. Used with `AREA_EQUAL`."
              }
            ]
          },
          {
            name: "Strip Distance",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The width of each strip. Used with `DISTANCE`."
              }
            ]
          },
          {
            name: "Guide Line",
            optional: true,
            type: "Feature Set",
            description: [
              {
                type: "paragraph",
                text: "A polyline steering the direction of the division lines, so they run parallel to a road or boundary. Polyline geometry only."
              }
            ]
          },
          {
            name: "Split Line",
            optional: true,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The line along which the parcel is cut. Required for `USER_LINE`. Polyline geometry only."
              }
            ]
          },
          {
            name: "Part Ratios",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The relative shares for each part, such as `2,1,1`. Required for `PROPORTIONAL`."
              }
            ]
          },
          {
            name: "Split from",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The side the division starts from. Default is `NORTH`."
              },
              {
                type: "list",
                items: [
                  "`NORTH`, `SOUTH`, `EAST`, `WEST`",
                  "`NORTH-EAST`, `NORTH-WEST`, `SOUTH-EAST`, `SOUTH-WEST`"
                ]
              }
            ]
          },
          {
            name: "Target Part Area",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The area each part should have. An alternative to **Number of divided Parts** for `AREA_EQUAL`."
              }
            ]
          },
          {
            name: "Remainder Handling",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "How leftover area is treated when the parcel does not divide exactly. Default is `KEEP_REMAINDER`."
              },
              {
                type: "list",
                items: [
                  "`KEEP_REMAINDER` — the leftover becomes its own smaller part",
                  "`DISTRIBUTE_TO_PARTS` — the leftover is spread across all parts"
                ]
              }
            ]
          },
          {
            name: "Output Parcels",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The subdivided parcel feature class to create."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Divide into equal parts"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Parcel Split Tool**.",
          "Set **Input Parcel Layer**.",
          "Leave **Subdivision Method** as `AREA_EQUAL` and set **Number of divided Parts**.",
          "Set **Split from** to the side the division should start at.",
          "Optionally set **Guide Line** so the division lines run parallel to a road.",
          "Set **Remainder Handling** and **Output Parcels**, then click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "Divide along a drawn line"
      },
      {
        type: "steps",
        items: [
          "Digitise the cut line into a polyline layer.",
          "Open the tool and set **Subdivision Method** to `USER_LINE`.",
          "Set **Split Line** to the polyline layer.",
          "Set **Output Parcels** and click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "Divide by ratio"
      },
      {
        type: "steps",
        items: [
          "Open the tool and set **Subdivision Method** to `PROPORTIONAL`.",
          "Type the shares into **Part Ratios** — for example, `2,1,1`.",
          "Set **Split from**, **Output Parcels**, and click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "parcel-split-optimizer",
      "parcel-division-form",
      "min-width-check"
    ]
  },
  {
    slug: "shape-quality-check",
    group: "cadastral",
    name: "Shape Quality Check",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Shape Quality Check",
    actsOn: [],
    summary: {
      km: "ពិនិត្យក្បាលដីនីមួយៗធៀបនឹងកម្រិតគុណភាពធរណីមាត្របួន — ផ្ទៃអប្បបរមា ទទឹងអប្បបរមា ភាពបង្រួមអប្បបរមា និងមុំស្រួច — រួចសរសេរស្រទាប់សម្គាល់បង្ហាញថាក្បាលដីណាធ្លាក់ការធ្វើតេស្តណា។",
      en: "Checks every parcel against four geometry quality thresholds — minimum area, minimum width, minimum compactness, and spike angle — and writes a flagged layer identifying which parcels fail which test."
    },
    body: [
      {
        type: "paragraph",
        text: "Sliver polygons, needle-thin offcuts, and spike vertices are the usual residue of digitising and of overlay operations. This tool finds them all in one pass."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "Four independent thresholds each catch a different defect:"
        ]
      },
      {
        type: "table",
        head: [
          "Parameter",
          "Default",
          "Catches"
        ],
        rows: [
          [
            "**Minimum Area**",
            "`10`",
            "Slivers and offcuts too small to be real parcels"
          ],
          [
            "**Minimum Width**",
            "`1`",
            "Needle-thin polygons that may have adequate area but no usable width"
          ],
          [
            "**Minimum Compactness (0-1)**",
            "`0.05`",
            "Highly elongated or convoluted shapes"
          ],
          [
            "**Spike Angle Threshold (degree)**",
            "`5`",
            "Vertices forming a near-zero angle — the classic digitising spike"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Minimum Compactness** is a ratio from 0 to 1, where 1 is a perfect circle. The default of `0.05` is deliberately permissive and flags only severely degenerate shapes; raise it toward `0.2`–`0.3` to catch merely awkward parcels as well. Legitimate long riverside or roadside strips are genuinely elongated and will be flagged as compactness rises — expect to review, not simply delete, what this test reports.",
          "**Minimum Area** and **Minimum Width** are in the layer's coordinate system units, so the layer should be projected.",
          "**Add Result to Map** is checked by default, so the flagged layer is added to the map ready for inspection.",
          "Every parcel is written to the output, not just the failures — the flags record which tests each parcel failed. Symbolise or filter on the flag fields to isolate the problems."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to check. Polygon geometry only."
              }
            ]
          },
          {
            name: "Output Flagged Layer",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The output feature class carrying the quality flags."
              }
            ]
          },
          {
            name: "Minimum Area",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The area below which a parcel is flagged, in the layer's coordinate system units. Default is `10`."
              }
            ]
          },
          {
            name: "Minimum Width",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The width below which a parcel is flagged, in the layer's coordinate system units. Default is `1`."
              }
            ]
          },
          {
            name: "Minimum Compactness (0-1)",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The compactness ratio below which a parcel is flagged, where 1 is a perfect circle. Default is `0.05`."
              }
            ]
          },
          {
            name: "Spike Angle Threshold (degree)",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The vertex angle below which a spike is flagged. Default is `5`."
              }
            ]
          },
          {
            name: "Add Result to Map",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Adds the flagged layer to the active map."
              },
              {
                type: "list",
                items: [
                  "Checked (default) — The layer is added.",
                  "Unchecked — The feature class is created but not added."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The flagged layer as added to the map."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the parcel layer uses a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Shape Quality Check**.",
          "Set **Input Parcel Layer** and **Output Flagged Layer**.",
          "Review the four thresholds. The defaults find severe defects; tighten **Minimum Compactness** toward `0.2` to catch awkward shapes as well.",
          "Leave **Add Result to Map** checked.",
          "Click **Run**.",
          "Symbolise or filter the output on its flag fields, and review each flagged parcel before correcting it — an elongated riverside strip may be perfectly legitimate."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "min-width-check",
      "parcel-cleaner",
      "boundary-conflict-check",
      "shape-metrics",
      "detect-overlap-gap"
    ]
  },
  {
    slug: "triangulation-builder",
    group: "cadastral",
    name: "Triangulation Builder",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Cadastral Tools ▸ Triangulation Builder",
    actsOn: [],
    summary: {
      km: "បង្កើតខ្សែត្រីកោណកាត់ពហុកោណក្បាលដី — ជាអង្កត់ទ្រូងដែលបំបែកក្បាលដីនីមួយៗជាត្រីកោណ។",
      en: "Generates triangulation lines across parcel polygons — the diagonals that break each parcel into triangles."
    },
    body: [
      {
        type: "paragraph",
        text: "Triangulation is the traditional way to compute and verify parcel area by hand: split the polygon into triangles, measure each, and sum them. The lines also document the geometric basis of an area calculation on a survey sheet."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Parcel Feature** accepts the parcel polygon layer.",
          "Both parameters carry the label **Input Parcel Feature** on the dialog. The first is the input polygon layer; the second is the output line feature class. Read them in order — the second is the output, despite its label.",
          "The output is a line feature class of the triangulation diagonals, ready to symbolise on a survey sheet."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Parcel Feature",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel polygon layer to triangulate."
              }
            ]
          },
          {
            name: "Input Parcel Feature *(output)*",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The triangulation line feature class to create. Despite the label, this parameter is the output."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Triangulation Builder**.",
          "Set the first **Input Parcel Feature** parameter to the parcel polygon layer.",
          "Set the second **Input Parcel Feature** parameter to the output line feature class path.",
          "Click **Run**.",
          "Add the output to the map and symbolise the triangulation lines as the survey sheet requires."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "boundary-line-builder",
      "bearing-distance-calculator",
      "coordinate-listing",
      "display-length-and-vertex"
    ]
  },
  {
    slug: "trim-parcel-by-road-buffer",
    group: "cadastral",
    name: "Using buffer method (Trim Parcel by Road)",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Trim Parcels ▸ Using buffer method",
    actsOn: [],
    summary: {
      km: "កាត់ព្រំដែនក្បាលដីថយមកត្រឹមគែមច្រករបៀងផ្លូវ ដែលបង្កើតដោយ buffer ខ្សែកណ្តាលផ្លូវ ដោយដកផ្ទៃក្បាលដីណាដែលត្រួតលើផ្លូវ។",
      en: "Trims parcel boundaries back to the edge of a road corridor created by buffering a road centreline, removing any parcel area that overlaps the road."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the simpler of the two trim methods. It buffers the centreline rather than constructing true parallel offsets, which is faster to set up but less exact at junctions."
      }
    ],
    usage: [
      {
        type: "note",
        tone: "warning",
        text: "**The width parameter here is a half-width.** **Road Width (Half of total distance)** takes half the total road width — for a 10 m road, enter `5 Meters`. This differs from [Using parallel method](TrimParcelByRoadParallel.md), where the width parameters take the *total* width. Mixing the two conventions produces a corridor either half or double the intended size."
      },
      {
        type: "list",
        items: [
          {
            text: "**Road Width Type** decides where the width comes from:",
            items: [
              "`Linear Unit` (default) — a single half-width from **Road Width (Half of total distance)**.",
              "`Field` — a per-road width from **Field contains Road Width (Full)**. Note that this field holds the **full** width, not the half-width."
            ]
          },
          {
            text: "**End Type** controls how the corridor terminates:",
            items: [
              "`FLAT` (default) — the buffer is squared off at the line ends, which is correct where a road continues beyond the study area.",
              "`ROUND` — the buffer is capped with a semicircle, which extends the corridor past the end of the centreline."
            ]
          },
          "Because the corridor is a buffer, junctions are rounded rather than mitred. Where junction geometry must be exact, use [Using parallel method](TrimParcelByRoadParallel.md) instead.",
          "**Trim the input Land Parcel** decides whether the parcel layer is modified in place or a new trimmed layer is written to **Output Trimmed Land Parcel**. Work on a copy until the result has been checked.",
          "**Ouput Road Edge?** writes the corridor edge to **Output road edge feature**, and **Append Road Edge to Input Road Layer?** adds those edges into the input road layer."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Trim the input Land Parcel",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Modifies the input parcel layer in place instead of writing a new one."
              },
              {
                type: "list",
                items: [
                  "Checked — The input geometry is trimmed in place.",
                  "Unchecked — The result is written to **Output Trimmed Land Parcel**."
                ]
              }
            ]
          },
          {
            name: "Input Land Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to trim. Polygon geometry only."
              }
            ]
          },
          {
            name: "Input Road Center Layer",
            optional: false,
            type: "Feature Set",
            description: [
              {
                type: "paragraph",
                text: "The road centreline to buffer. Polyline geometry only."
              }
            ]
          },
          {
            name: "Road Width Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Where the corridor width comes from. Default is `Linear Unit`."
              },
              {
                type: "list",
                items: [
                  "`Linear Unit` — a half-width from **Road Width (Half of total distance)**",
                  "`Field` — a full width from **Field contains Road Width (Full)**"
                ]
              }
            ]
          },
          {
            name: "Road Width (Half of total distance)",
            optional: true,
            type: "Linear Unit",
            description: [
              {
                type: "paragraph",
                text: "**Half** the total road width. For a 10 m road, enter `5 Meters`. Default is `0 Meters`. Used with `Linear Unit`."
              }
            ]
          },
          {
            name: "Field contains Road Width (Full)",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding each road's **full** width. Used with `Field`. Long, short, double, or float."
              }
            ]
          },
          {
            name: "End Type",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "How the corridor terminates at the ends of the centreline. Default is `FLAT`."
              },
              {
                type: "list",
                items: [
                  "`FLAT` — squared off at the line end",
                  "`ROUND` — capped with a semicircle"
                ]
              }
            ]
          },
          {
            name: "Output Trimmed Land Parcel",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The trimmed parcel feature class. Required when **Trim the input Land Parcel** is unchecked."
              }
            ]
          },
          {
            name: "Ouput Road Edge?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Writes the corridor edge as a separate feature class."
              },
              {
                type: "list",
                items: [
                  "Checked — **Output road edge feature** is enabled.",
                  "Unchecked — No road edge is written."
                ]
              }
            ]
          },
          {
            name: "Output road edge feature",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The corridor edge feature class. Required when **Ouput Road Edge?** is checked. The path is pre-filled from the input road layer's workspace."
              }
            ]
          },
          {
            name: "Append Road Edge to Input Road Layer?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Appends the generated road edge into the input road layer."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Make a copy of the parcel layer if you intend to trim in place.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Trim Parcels** gallery and click **Using buffer method**.",
          "Set **Input Land Parcel Layer** and **Input Road Center Layer**.",
          {
            text: "Set **Road Width Type**:",
            items: [
              "For a uniform road, keep `Linear Unit` and enter **half** the total width in **Road Width (Half of total distance)**.",
              "For varying widths, choose `Field` and set **Field contains Road Width (Full)** to a field holding the full width."
            ]
          },
          "Set **End Type** — `FLAT` where the road continues past the study area.",
          "Leave **Trim the input Land Parcel** unchecked and set **Output Trimmed Land Parcel** for a first run.",
          "To keep the corridor edge, check **Ouput Road Edge?** and confirm **Output road edge feature**.",
          "Click **Run**, then check the junctions. If rounded junction geometry is unacceptable, switch to [Using parallel method](TrimParcelByRoadParallel.md)."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "trim-parcel-by-road-parallel",
      "multi-ring-buffer",
      "parcel-overlap-check"
    ]
  },
  {
    slug: "trim-parcel-by-road-parallel",
    group: "cadastral",
    name: "Using parallel method (Trim Parcel by Road)",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Trim Parcels ▸ Using parallel method",
    actsOn: [],
    summary: {
      km: "កាត់ព្រំដែនក្បាលដីថយមកត្រឹមគែមច្រករបៀងផ្លូវ ដែលបានមកពីខ្សែកណ្តាលផ្លូវ ដោយសាងគែមច្រករបៀងជាបន្ទាត់ស្របពិតប្រាកដ ជាមួយជ្រុងបែប mitre ឬ bevel។",
      en: "Trims parcel boundaries back to the edge of a road corridor derived from a road centreline, constructing the corridor edge as true parallel offsets with mitred or bevelled corners."
    },
    body: [
      {
        type: "paragraph",
        text: "Parcels digitised from imagery routinely overlap the road reserve. This tool removes the overlap so parcels meet the road edge precisely."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "This is the parallel-offset method. The corridor edge is built by offsetting the centreline, which produces clean, correctly mitred corners at road junctions. Compare with [Using buffer method](TrimParcelByRoadBuffer.md), which buffers the centreline instead — simpler, but rounded or clipped at junctions.",
          {
            text: "**Road Width Type** decides where the corridor width comes from:",
            items: [
              "`Constant Width` (default) — one width for the whole network, from **Constant Road Width (Total Width)**.",
              "`Width Field` — a per-road width read from **Road Width Field (Total Width)**."
            ]
          },
          "Both width parameters take the **total** road width, not the half-width. The tool offsets by half the stated value on each side. (Note that the buffer-method tool takes a *half* width — the two are not interchangeable.)",
          {
            text: "**Corner Style** controls junction geometry:",
            items: [
              "`Miter` (default) — offsets are extended to meet at a sharp point. Correct for most junctions, but produces a long spike at very acute angles.",
              "`Bevel` — the corner is cut off at the distance given in **Bevel Distance from corner** (default `5 Meters`), which is the safer choice where roads meet at sharp angles."
            ]
          },
          "**Trim the input land parcel?** decides whether the parcel layer is modified in place or a new trimmed layer is written to **Output Trimmed Parcels**. Trimming in place overwrites the original geometry — work on a copy until the result has been checked.",
          "Additional Properties holds three fine-tuning parameters:"
        ]
      },
      {
        type: "table",
        head: [
          "Parameter",
          "Default",
          "Purpose"
        ],
        rows: [
          [
            "**Snap Tolerance**",
            "`0.01 Meters`",
            "How close geometry must be to snap together"
          ],
          [
            "**Extend Distance**",
            "`1 Meters`",
            "How far corridor edges are extended to close junctions"
          ],
          [
            "**Sliver Area Threshold**",
            "`1`",
            "Offcuts smaller than this are discarded rather than left as slivers"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "Two optional outputs record the corridor itself: **Output Road Edge** (the edge lines) and **Output Road Polygon** (the corridor area). **Append road edge to road centreline?** adds the generated edges back into the road layer."
        ]
      }
    ],
    parameters: [
      {
        title: "Input",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Trim the input land parcel?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Modifies the input parcel layer in place instead of writing a new one."
              },
              {
                type: "list",
                items: [
                  "Checked — The input geometry is trimmed in place.",
                  "Unchecked — The result is written to **Output Trimmed Parcels**."
                ]
              }
            ]
          },
          {
            name: "Input Parcel Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer to trim. Polygon geometry only."
              }
            ]
          },
          {
            name: "Input Road Centerline Layer",
            optional: false,
            type: "Feature Set",
            description: [
              {
                type: "paragraph",
                text: "The road centreline the corridor is offset from. Polyline geometry only."
              }
            ]
          },
          {
            name: "Road Width Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Where the corridor width comes from. Default is `Constant Width`."
              },
              {
                type: "list",
                items: [
                  "`Constant Width`",
                  "`Width Field`"
                ]
              }
            ]
          },
          {
            name: "Constant Road Width (Total Width)",
            optional: true,
            type: "Linear Unit",
            description: [
              {
                type: "paragraph",
                text: "The total road width, applied to the whole network. Default is `0 Meters`. Used with `Constant Width`."
              }
            ]
          },
          {
            name: "Road Width Field (Total Width)",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding each road's total width. Used with `Width Field`. Long, short, float, or double."
              }
            ]
          },
          {
            name: "Corner Style",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Junction corner geometry. Default is `Miter`."
              },
              {
                type: "list",
                items: [
                  "`Miter` — offsets meet at a point",
                  "`Bevel` — the corner is cut off"
                ]
              }
            ]
          },
          {
            name: "Bevel Distance from corner",
            optional: true,
            type: "Linear Unit",
            description: [
              {
                type: "paragraph",
                text: "How far back the corner is cut when **Corner Style** is `Bevel`. Default is `5 Meters`."
              }
            ]
          }
        ]
      },
      {
        title: "Additional Properties",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Snap Tolerance",
            optional: false,
            type: "Linear Unit",
            description: [
              {
                type: "paragraph",
                text: "The distance within which geometry is snapped together. Default is `0.01 Meters`."
              }
            ]
          },
          {
            name: "Extend Distance",
            optional: false,
            type: "Linear Unit",
            description: [
              {
                type: "paragraph",
                text: "How far corridor edges are extended to close junctions. Default is `1 Meters`."
              }
            ]
          },
          {
            name: "Sliver Area Threshold",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Offcuts smaller than this area are discarded instead of being left as slivers. Default is `1`."
              }
            ]
          }
        ]
      },
      {
        title: "Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Append road edge to road centreline?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Appends the generated road edge lines into the input road layer."
              }
            ]
          },
          {
            name: "Output Road Edge",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The generated corridor edge lines."
              }
            ]
          },
          {
            name: "Output Road Polygon",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The corridor area as a polygon. Listed under **Optional Outputs** on the dialog."
              }
            ]
          },
          {
            name: "Output Trimmed Parcels",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The trimmed parcel feature class. Required when **Trim the input land parcel?** is unchecked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Make a copy of the parcel layer if you intend to trim in place.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Trim Parcels** gallery and click **Using parallel method**.",
          "Set **Input Parcel Layer** and **Input Road Centerline Layer**.",
          {
            text: "Set **Road Width Type**:",
            items: [
              "For a uniform road width, keep `Constant Width` and enter the **total** width in **Constant Road Width (Total Width)**.",
              "For varying widths, choose `Width Field` and set **Road Width Field (Total Width)**."
            ]
          },
          "Set **Corner Style**. Use `Bevel` with a suitable **Bevel Distance from corner** if roads meet at acute angles.",
          "Leave **Trim the input land parcel?** unchecked and set **Output Trimmed Parcels** for a first run.",
          "To keep the corridor geometry, set **Output Road Edge** and **Output Road Polygon**.",
          "Click **Run**, then inspect the junctions for spikes or slivers. Adjust **Corner Style**, **Extend Distance**, or **Sliver Area Threshold** and run again if needed."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "trim-parcel-by-road-buffer",
      "parcel-split-optimizer",
      "multi-ring-buffer",
      "parcel-overlap-check"
    ]
  },
  {
    slug: "clip-multiple",
    group: "geoprocessing",
    name: "Clip Multiple",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Coverage Tools ▸ Clip Multiple",
    actsOn: [],
    summary: {
      km: "កាត់ស្រទាប់លក្ខណៈជាច្រើនតាមព្រំដែនពហុកោណតែមួយក្នុងការរត់តែម្តង ដោយសរសេរលទ្ធផលកាត់មួយក្នុងមួយស្រទាប់បញ្ចូល។",
      en: "Clips many feature layers by a single polygon boundary in one run, writing one clipped output per input layer."
    },
    body: [
      {
        type: "paragraph",
        text: "The standard clip tool handles one input at a time. This tool takes a whole list — roads, buildings, land use, hydrology — and clips them all to the same study area."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input feature to clip** accepts layers of any geometry type, and they may be mixed. Points, lines, and polygons can be clipped in the same run.",
          "**Input clip feature** must be a polygon layer. It defines the boundary that all inputs are clipped to.",
          "Each input produces its own output feature class in **Output Location**, named after the input layer.",
          "If the clip boundary contains multiple polygons, the inputs are clipped to the union of them all.",
          "Attributes are preserved on the clipped features. Geometry is cut at the boundary, so a line or polygon crossing the boundary is truncated there."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input feature to clip",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more layers to clip. Any geometry type; types may be mixed in one run."
              }
            ]
          },
          {
            name: "Input clip feature",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The polygon layer defining the clip boundary. Polygon geometry only."
              }
            ]
          },
          {
            name: "Output Location",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the clipped outputs."
              }
            ]
          }
        ]
      },
      {
        title: "Derived Output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Clipped Feature Classes",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "One clipped feature class per input layer."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Add the layers to clip and the boundary polygon to the map.",
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu, point to **Coverage Tools**, and click **Clip Multiple**.",
          "In **Input feature to clip**, select every layer to be clipped.",
          "Set **Input clip feature** to the study-area polygon.",
          "Set **Output Location**.",
          "Click **Run**. One clipped feature class is created per input."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "percent-coverage",
      "multi-ring-buffer",
      "smart-extract"
    ]
  },
  {
    slug: "indian-to-wgs-84-utm-converter",
    group: "geoprocessing",
    name: "Indian to WGS84 UTM Converter",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ CRS ▸ Indian to WGS84 UTM Converter",
    actsOn: [],
    summary: {
      km: "បម្លែងស្រទាប់ពហុកោណរវាងប្រព័ន្ធកូអរដោនេ Indian 1960 / Indian datum ដែលប្រើក្នុងទិន្នន័យកាដាស្ត្រកម្ពុជាចាស់ និង WGS 1984 UTM ដោយអនុវត្តការបម្លែង datum ដែលសមស្របនឹងគូនោះ។",
      en: "Reprojects a polygon layer between the Indian 1960 / Indian datum coordinate systems used in legacy Cambodian cadastral data and WGS 1984 UTM, applying the datum transformation appropriate to the pair."
    },
    body: [
      {
        type: "paragraph",
        text: "Legacy parcel data recorded on the Indian datum will not overlay modern WGS 84 imagery correctly — the shift is tens to hundreds of metres. This tool performs the conversion with the correct transformation rather than a plain reprojection."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Polygon Layer** is the layer to convert. Its current coordinate system is read automatically and shown in **Input Coordinate System**, which is bound to the input layer.",
          "Confirm **Input Coordinate System** before running. If the layer's metadata declares the wrong coordinate system — common in older shapefiles where the `.prj` file was copied from elsewhere — the conversion will silently produce wrong results. Set the declared coordinate system correctly first, using the Esri **Define Projection** tool (available on the ribbon from the **CRS** gallery), then run this tool.",
          "**Output Coordinate System** is the target. For Cambodian work this is normally WGS 1984 UTM Zone 48N.",
          "Reprojecting does not change the data's accuracy — it changes its frame of reference. A conversion cannot recover survey precision the original data never had."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Polygon Layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The layer to reproject."
              }
            ]
          },
          {
            name: "Input Coordinate System",
            optional: false,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system the input data is currently in. Read from the input layer; confirm it matches reality before running."
              }
            ]
          },
          {
            name: "Output Feature Layer",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The reprojected feature class to create."
              }
            ]
          },
          {
            name: "Output Coordinate System",
            optional: false,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The target coordinate system — typically WGS 1984 UTM Zone 48N for Cambodia."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Add the legacy layer to the map.",
          "Check the layer's declared coordinate system in **Layer Properties → Source**. If it is wrong or missing, correct it with **Define Projection** before continuing.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **CRS** gallery and click **Indian to WGS84 UTM Converter**.",
          "Set **Input Polygon Layer**. Confirm the value filled into **Input Coordinate System**.",
          "Set **Output Feature Layer**.",
          "Set **Output Coordinate System** to the target — for example, WGS 1984 UTM Zone 48N.",
          "Click **Run**, then overlay the result on satellite imagery to confirm it now registers correctly."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: []
  },
  {
    slug: "multi-ring-buffer",
    group: "geoprocessing",
    name: "Multi Ring Buffer",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Coverage Tools ▸ Multi Ring Buffer",
    actsOn: [],
    summary: {
      km: "បង្កើត buffer ជារង្វង់រួមកណ្តាលជាបន្តបន្ទាប់ជុំវិញលក្ខណៈបញ្ចូល ដោយចម្ងាយរង្វង់អាចស្មើគ្នា ឬរាយច្បាស់លាស់។",
      en: "Creates a series of concentric buffer rings around input features, with the ring distances either evenly spaced or listed explicitly."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool for distance-band analysis — proximity zones around a road, service catchments around a facility, or setback bands around a protected area."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          {
            text: "**Buffer Distance Type** decides where the buffer distance comes from:",
            items: [
              "`Linear Unit` — a single distance typed into **Buffer Distance**, applied to every feature.",
              "`Field` — a per-feature distance read from the field named in **Choose Field**. Use this when each feature has its own buffer width."
            ]
          },
          {
            text: "Ring spacing is controlled by **Equal ring interval?**:",
            items: [
              "**Checked** — Rings are spaced evenly. **Number of ring** and **Buffer Distance** together determine the spacing.",
              "**Unchecked** — Supply the ring distances explicitly in **Specify ring interval**, as a list of values."
            ]
          },
          "**Dissolve Type** determines how overlapping rings are handled: For distance-band analysis where each band must be counted once, choose a dissolve option — otherwise overlapping rings double-count area."
        ]
      },
      {
        type: "table",
        head: [
          "Choice",
          "Effect"
        ],
        rows: [
          [
            "`No Dissolve` (default)",
            "Every ring of every feature is kept as a separate polygon; rings from neighbouring features overlap"
          ],
          [
            "`Dissolve all output features into a single feature`",
            "All rings merge into one multipart polygon"
          ],
          [
            "`Dissolve features using the listed fields' unique values or combination of values`",
            "Rings merge per unique attribute value"
          ]
        ]
      },
      {
        type: "list",
        items: [
          {
            text: "**Side Type (for line input)** and **End Type (for line input)** apply only when the input is a line layer and are ignored for point and polygon inputs.",
            items: [
              "**Side Type** — `FULL` buffers both sides, `LEFT` and `RIGHT` buffer one side, `OUTSIDE_ONLY` excludes the area inside the input polygon.",
              "**End Type** — `FLAT` squares off the line ends; `ROUND` caps them with a semicircle."
            ]
          }
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The layer to buffer. Points, lines, or polygons."
              }
            ]
          },
          {
            name: "Output Buffered Feature",
            optional: false,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The buffer ring feature class to create."
              }
            ]
          },
          {
            name: "Buffer Distance Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Where buffer distances come from."
              },
              {
                type: "list",
                items: [
                  "`Linear Unit` — one distance for all features, from **Buffer Distance**",
                  "`Field` — a per-feature distance, from **Choose Field**"
                ]
              }
            ]
          },
          {
            name: "Number of ring",
            optional: false,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "How many concentric rings to create."
              }
            ]
          },
          {
            name: "Equal ring interval?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects even or explicit ring spacing."
              },
              {
                type: "list",
                items: [
                  "Checked — Rings are spaced evenly.",
                  "Unchecked — Ring distances are listed in **Specify ring interval**."
                ]
              }
            ]
          },
          {
            name: "Specify ring interval",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The explicit ring distances. Used when **Equal ring interval?** is unchecked."
              }
            ]
          },
          {
            name: "Buffer Distance",
            optional: true,
            type: "Linear Unit",
            description: [
              {
                type: "paragraph",
                text: "The buffer distance and its unit. Used when **Buffer Distance Type** is `Linear Unit`. Default is `0 Meters`."
              }
            ]
          },
          {
            name: "Choose Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding the per-feature buffer distance. Used when **Buffer Distance Type** is `Field`. Long, short, float, double, or text."
              }
            ]
          },
          {
            name: "Dissolve Type",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "How overlapping rings are combined. Default is `No Dissolve`."
              },
              {
                type: "list",
                items: [
                  "`No Dissolve`",
                  "`Dissolve all output features into a single feature`",
                  "`Dissolve features using the listed fields' unique values or combination of values`"
                ]
              }
            ]
          },
          {
            name: "Side Type (for line input)",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Which side of a line is buffered. Line input only."
              },
              {
                type: "list",
                items: [
                  "`FULL`",
                  "`LEFT`",
                  "`RIGHT`",
                  "`OUTSIDE_ONLY`"
                ]
              }
            ]
          },
          {
            name: "End Type (for line input)",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "How line ends are capped. Line input only."
              },
              {
                type: "list",
                items: [
                  "`FLAT`",
                  "`ROUND`"
                ]
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu, point to **Coverage Tools**, and click **Multi Ring Buffer**.",
          "Set **Input Feature** and **Output Buffered Feature**.",
          {
            text: "Set **Buffer Distance Type**:",
            items: [
              "For one distance across all features, choose `Linear Unit` and set **Buffer Distance**.",
              "For per-feature distances, choose `Field` and set **Choose Field**."
            ]
          },
          "Set **Number of ring**.",
          "For evenly spaced rings, check **Equal ring interval?**. For specific distances, leave it unchecked and list them in **Specify ring interval**.",
          "If the bands will be used for area or count statistics, set **Dissolve Type** to a dissolve option so overlapping rings are not double-counted.",
          "For line input, set **Side Type** and **End Type**.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "percent-coverage",
      "clip-multiple",
      "trim-parcel-by-road-buffer"
    ]
  },
  {
    slug: "percent-coverage",
    group: "geoprocessing",
    name: "Percent Coverage",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Coverage Tools ▸ Percent Coverage",
    actsOn: [],
    summary: {
      km: "គណនាសមាមាត្រនៃផ្ទៃព្រំដែនដែលគ្របដណ្តប់ដោយស្រទាប់គ្របនីមួយៗ ក្នុងចំណោមមួយ ឬច្រើន។",
      en: "Calculates what proportion of a boundary area is covered by each of one or more overlay layers."
    },
    body: [
      {
        type: "paragraph",
        text: "Point the tool at a commune boundary and a set of land-use layers, and it reports the percentage of the commune occupied by each — the standard summary line for a land-use or coverage report."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Feature** accepts multiple layers. Each is measured independently against the same boundary, so one run produces a coverage figure per layer.",
          "**Input Boundary Feature** supplies the denominator — the total area against which coverage is expressed.",
          "Areas are computed from the layers' geometry, so the input must be in a projected coordinate system. A geographic coordinate system yields areas in square degrees and the resulting percentages will be wrong.",
          "Coverage is measured per layer, not per feature. If two features *within the same input layer* overlap each other, the overlapping area is counted twice and the reported percentage can exceed 100%. Run [Detect Overlap/Gap](../DataManagement/DetectOverlapGap.md) first if the input layers may contain self-overlaps.",
          "For a per-feature percentage rather than a per-layer total, use [Feature Percentage](../VectorIQ/FeaturePercentage.md)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more layers whose coverage of the boundary is calculated. Each is reported separately."
              }
            ]
          },
          {
            name: "Input Boundary Feature",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The layer defining the total area — the denominator of the percentage."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm every layer is in a projected coordinate system.",
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu, point to **Coverage Tools**, and click **Percent Coverage**.",
          "In **Input Feature**, select the overlay layers to measure.",
          "Set **Input Boundary Feature** to the boundary that defines the total area.",
          "Click **Run** and read the coverage percentages in the tool messages."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "feature-percentage",
      "clip-multiple",
      "statistics-summary",
      "feature-counter"
    ]
  },
  {
    slug: "cut-fill",
    group: "spatialanalysis",
    name: "Cut Fill",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Cut Fill",
    actsOn: [],
    summary: {
      km: "បង្កើតផ្ទៃកម្ពស់ពីទិន្នន័យស្ទង់ជាចំណុច ឬបន្ទាត់កម្ពស់ ប្រៀបធៀបនឹងកម្រិតរចនាគោលដៅ រួចបង្កើត raster កាត់-បំពេញ បង្ហាញកន្លែងត្រូវដកដី និងកន្លែងត្រូវបំពេញដី។",
      en: "Builds an elevation surface from point survey or contour data, compares it against a target design level, and produces a cut-and-fill raster showing where material must be removed and where it must be added."
    },
    body: [
      {
        type: "paragraph",
        text: "Optionally outputs the interpolated surface raster and a contour line feature class from the same run."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Point Survey** accepts point or polyline features. Points are survey spot levels; polylines are existing contour lines. Either can drive the surface.",
          "**Choose Z field** must be a numeric field holding elevation. The tool reads the field's value range and pre-fills **Minimum Elevation** and **Maximum Elevation** from the data, so those two parameters normally need no editing. Override them to clamp the surface to a narrower range.",
          "**Specify Cut Fill elevation** is the design level the surface is compared against. Cells above it are cut; cells below it are fill.",
          "**Specify Surface Cell Size** controls the resolution of the interpolated surface. A small cell size over a large boundary produces a very large raster and a long run time. Match the cell size to the survey point spacing — interpolating far below the data density adds no real detail.",
          "**Input Boundary** clips the interpolation to the project area. Without it, interpolation would extrapolate well beyond the surveyed extent.",
          {
            text: "Two optional outputs come from the same interpolation, so requesting them costs almost nothing extra:",
            items: [
              "**Also generate Surface Raster?** writes the interpolated elevation surface.",
              "**Generate Contour** writes contour lines at the interval given in **Specify Contour Interval**."
            ]
          }
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Point Survey",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The survey data used to build the surface. Point features (spot levels) or polyline features (contours)."
              }
            ]
          },
          {
            name: "Choose Z field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The numeric field holding elevation values. Short, long, float, or double."
              }
            ]
          },
          {
            name: "Minimum Elevation",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The lower bound of the surface. Pre-filled from the minimum value found in **Choose Z field**."
              }
            ]
          },
          {
            name: "Maximum Elevation",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The upper bound of the surface. Pre-filled from the maximum value found in **Choose Z field**."
              }
            ]
          },
          {
            name: "Specify Surface Cell Size",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The cell size of the interpolated surface, in the input's coordinate system units."
              }
            ]
          },
          {
            name: "Input Boundary",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The polygon that clips the interpolated surface to the project area. Polygon geometry only."
              }
            ]
          },
          {
            name: "Specify Cut Fill elevation",
            optional: false,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The design or target elevation that the surface is compared against."
              }
            ]
          },
          {
            name: "Output Cut-Fill Raster",
            optional: false,
            type: "Raster Dataset",
            description: [
              {
                type: "paragraph",
                text: "The raster recording cut and fill volumes per cell."
              }
            ]
          },
          {
            name: "Also generate Surface Raster?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Writes the interpolated elevation surface as a separate raster."
              },
              {
                type: "list",
                items: [
                  "Checked — **Output Surface Raster** is enabled.",
                  "Unchecked (default) — Only the cut-fill raster is written."
                ]
              }
            ]
          },
          {
            name: "Output Surface Raster",
            optional: true,
            type: "Raster Dataset",
            description: [
              {
                type: "paragraph",
                text: "The interpolated elevation surface. Required when **Also generate Surface Raster?** is checked."
              }
            ]
          },
          {
            name: "Generate Contour",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Writes contour lines derived from the interpolated surface."
              },
              {
                type: "list",
                items: [
                  "Checked — **Specify Contour Interval** and **Output Contour Line** are enabled.",
                  "Unchecked (default) — No contours are written."
                ]
              }
            ]
          },
          {
            name: "Specify Contour Interval",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The vertical interval between contour lines. Required when **Generate Contour** is checked."
              }
            ]
          },
          {
            name: "Output Contour Line",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The contour line feature class. Required when **Generate Contour** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Add the survey point or contour layer and the project boundary polygon to the map.",
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu and click **Cut Fill**.",
          "Set **Input Point Survey** and **Choose Z field**. Check that **Minimum Elevation** and **Maximum Elevation** have been filled in from the data.",
          "Set **Specify Surface Cell Size** to suit the survey point spacing.",
          "Set **Input Boundary** to the project area polygon.",
          "Type the design level in **Specify Cut Fill elevation**.",
          "Set **Output Cut-Fill Raster**.",
          "To also keep the surface or contours, check **Also generate Surface Raster?** or **Generate Contour** and complete the enabled parameters.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "spot-height",
      "elevation-profile-from-line-path"
    ]
  },
  {
    slug: "direction-distance",
    group: "spatialanalysis",
    name: "Direction Distance",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Direction Distance",
    actsOn: [],
    summary: {
      km: "គណនា bearing និងចម្ងាយរវាងចំណុចពីរ ទាំងពីកូអរដោនេវាយផ្ទាល់ក្នុងផ្ទាំង ឬជាបាច់ពីតារាងគូកូអរដោនេ។",
      en: "Calculates the bearing and distance between two points, either from coordinates typed directly into the dialog or in batch from a table of coordinate pairs."
    },
    body: [
      {
        type: "paragraph",
        text: "The tool works in both latitude/longitude and projected X/Y, and reports bearings as north azimuth, quadrant bearing, or both."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          {
            text: "The tool has two modes, selected with **Calculate in table?**:",
            items: [
              "**Unchecked (single pair)** — Type the four coordinate values into **X-Coordinate of Start Point** through **Y-Coordinate of End Point**. The result is reported in the tool messages.",
              "**Checked (batch)** — Supply **Input Table** holding coordinate pairs and **Specify output table** to receive the calculated bearings and distances."
            ]
          },
          {
            text: "**Coordinate Type** must match the values supplied. Setting it to `Projected X/Y` while entering degrees, or the reverse, produces results that look plausible but are wrong by orders of magnitude.",
            items: [
              "`Latitude/Longitude` — values in decimal degrees; distance is computed on the ellipsoid.",
              "`Projected X/Y` — values in projected units; distance is computed on the plane."
            ]
          },
          {
            text: "**Distance Unit** and **Bearing Unit** each offer a combined option that reports two forms side by side: Choose a combined option when the same result must be read by different audiences.",
            items: [
              "`Meters - Kilometers` reports both metres and kilometres.",
              "`NAz - Quadrant (DMS)` reports both north azimuth and quadrant bearing."
            ]
          }
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Calculate in table?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects batch mode."
              },
              {
                type: "list",
                items: [
                  "Checked — **Input Table** and **Specify output table** are used; the coordinate boxes are ignored.",
                  "Unchecked (default) — The four coordinate boxes are used for a single calculation."
                ]
              }
            ]
          },
          {
            name: "Coordinate Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The kind of coordinates supplied. Must match the input values."
              },
              {
                type: "list",
                items: [
                  "`Latitude/Longitude` — decimal degrees",
                  "`Projected X/Y` — projected units"
                ]
              }
            ]
          },
          {
            name: "X-Coordinate of Start Point",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The X or longitude value of the start point. Single-pair mode only."
              }
            ]
          },
          {
            name: "Y-Coordinate of Start Point",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The Y or latitude value of the start point. Single-pair mode only."
              }
            ]
          },
          {
            name: "X-Coordinate of End Point",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The X or longitude value of the end point. Single-pair mode only."
              }
            ]
          },
          {
            name: "Y-Coordinate of End Point",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "The Y or latitude value of the end point. Single-pair mode only."
              }
            ]
          },
          {
            name: "Input Table",
            optional: true,
            type: "Feature Layer; Table View",
            description: [
              {
                type: "paragraph",
                text: "A table or feature layer holding the coordinate pairs to process. Required in batch mode."
              }
            ]
          },
          {
            name: "Specify output table",
            optional: true,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The table that receives the calculated bearings and distances. Required in batch mode."
              }
            ]
          },
          {
            name: "Distance Unit",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The unit the distance is reported in."
              },
              {
                type: "list",
                items: [
                  "`Meters - Kilometers` — both",
                  "`Meters`",
                  "`Kilometers`"
                ]
              }
            ]
          },
          {
            name: "Bearing Unit",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The form the bearing is reported in."
              },
              {
                type: "list",
                items: [
                  "`NAz - Quadrant (DMS)` — both",
                  "`NAz` — north azimuth",
                  "`Quadrant (DMS)` — quadrant bearing in degrees, minutes, seconds"
                ]
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Single pair"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu and click **Direction Distance**.",
          "Leave **Calculate in table?** unchecked.",
          "Set **Coordinate Type** to match the coordinates you will enter.",
          "Type the start and end coordinates into the four boxes.",
          "Set **Distance Unit** and **Bearing Unit**.",
          "Click **Run** and read the result in the tool messages."
        ]
      },
      {
        type: "subheading",
        text: "Batch from a table"
      },
      {
        type: "steps",
        items: [
          "Open the tool and check **Calculate in table?**.",
          "Set **Coordinate Type**.",
          "Set **Input Table** to the table of coordinate pairs.",
          "Set **Specify output table**.",
          "Set **Distance Unit** and **Bearing Unit**, then click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "from-reference-point-direction-calculation",
      "bearing-distance-calculator"
    ]
  },
  {
    slug: "elevation-profile-from-point-path",
    group: "spatialanalysis",
    name: "Elevation Profile From Point Path",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Create Profile ▸ Elevation Profile From Point Path",
    actsOn: [],
    summary: {
      km: "បង្កើតតារាងក្រាហ្វិកទម្រង់កម្ពស់ពីសំណុំចំណុចស្ទង់ដែលមានតម្លៃកម្ពស់ស្រាប់ ដោយតម្រៀបតាមផ្លូវដោយវាលសម្គាល់។",
      en: "Generates an elevation profile chart from a set of survey points that already carry elevation values, ordered along a path by an identifier field."
    },
    body: [
      {
        type: "paragraph",
        text: "Unlike the line-path version, this tool needs no elevation raster — the heights come from an attribute field. Use it to plot a levelling run, a chainage survey, or any point sequence where elevation was measured in the field."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Point Path** accepts point features only. The profile visits points in ascending order of **Choose ID Field**, so that field must hold a clean sequence along the path. A gap or a repeated value distorts the horizontal axis.",
          "**Choose Z Field** supplies the elevation for each point. No raster sampling takes place, so the profile is exactly as accurate as the surveyed values.",
          "**Output Chart** must be a `.png` or `.jpg` file. The chart is an image, not a layer — it is not added to the map.",
          "Horizontal distance is computed from the point geometry, so run the tool on a projected layer. Distances derived from a geographic coordinate system are in degrees and will not match the axis label.",
          "All styling parameters sit behind **Additional Chart Properties?** and are identical to those of [Elevation Profile from Line Path](ElevationProfileFromLinePath.md). Leave the checkbox clear to accept the defaults."
        ]
      }
    ],
    parameters: [
      {
        title: "Required input and output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Point Path",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The point features forming the profile path. Point geometry only."
              }
            ]
          },
          {
            name: "Choose ID Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field defining the order in which points are visited along the path."
              }
            ]
          },
          {
            name: "Choose Z Field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding each point's elevation."
              }
            ]
          },
          {
            name: "Output Chart",
            optional: false,
            type: "File",
            description: [
              {
                type: "paragraph",
                text: "The image file to write. Must be `.png` or `.jpg`."
              }
            ]
          },
          {
            name: "Additional Chart Properties?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables the styling parameters below."
              },
              {
                type: "list",
                items: [
                  "Checked — All chart styling categories are enabled.",
                  "Unchecked (default) — Defaults are used."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Chart Surround",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Customize Figure Size",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The figure size in inches, as `WIDTHxHEIGHT`. Default is `10x5`."
              }
            ]
          },
          {
            name: "Chart Title",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The chart title. Default is `Elevation Profile`."
              }
            ]
          },
          {
            name: "X Axis Title",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The horizontal axis label. Default is `Distance (m)`."
              }
            ]
          },
          {
            name: "Y Axis Title",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The vertical axis label. Default is `Elevation (m)`."
              }
            ]
          },
          {
            name: "Choose Font",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The typeface for title and labels. Includes Latin faces (`Arial`, `Calibri`, `Roboto`, `Times New Roman`, and others) and Khmer faces (`Battambang`, `Bayon`, `Chenla`, `Content`, `Dangrek`, `Hanuman`, `Kantumruy`, `Khmer OS`, `Khmer OS Muol`, `Moulpali`). Default is `Arial`."
              }
            ]
          },
          {
            name: "Title Size",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Title font size in points. Default is `14`."
              }
            ]
          },
          {
            name: "Axis Label Size",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Axis label font size in points. Default is `11`."
              }
            ]
          },
          {
            name: "Enable Legend?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Draws a legend on the chart."
              }
            ]
          }
        ]
      },
      {
        title: "Graph Properties",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Line Width",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Profile line width. Default is `1`."
              }
            ]
          },
          {
            name: "Line Graph Style",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Profile line style — `solid` (default), `dashed`, `dash-dot`, `dotted`."
              }
            ]
          },
          {
            name: "Line Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Profile line colour. Offers a standard palette plus terrain-themed and ArcGIS-themed colours and a colourblind-safe set. Default is `Blue`."
              }
            ]
          },
          {
            name: "Add Point Marker?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Draws a marker at each surveyed point. Useful here, since every vertex is a real observation."
              }
            ]
          },
          {
            name: "Point Marker Style",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Marker shape — `point`, `pixel`, `circle`, `square`, `diamond`, `triangle up/down/left/right`, `pentagon`, `hexagone 1`, `hexagon 2`, `star`, `plus`. Default is `circle`."
              }
            ]
          },
          {
            name: "Marker Size",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "Marker size. Default is `2`."
              }
            ]
          }
        ]
      },
      {
        title: "Chart Properties",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Background Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The chart background scheme. Default is `White – Light Gray`."
              }
            ]
          },
          {
            name: "Add X Axis Grid?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Draws vertical grid lines."
              }
            ]
          },
          {
            name: "Line Grid Style",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Grid line style — `solid`, `dashed`, `dash-dot`, `dotted`. Default is `dashed`."
              }
            ]
          },
          {
            name: "Grid Width",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Grid line width. Default is `0.25`."
              }
            ]
          },
          {
            name: "Line Grid Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Grid colour — `Light Gray`, `Soft Gray`, `Subtle Gray`, `Very Light Gray`, `Cool Gray`, `Warm Gray`. Default is `Light Gray`."
              }
            ]
          }
        ]
      },
      {
        title: "Fill Under Graph",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Fill Area Under Graph?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Shades the area beneath the profile line."
              }
            ]
          },
          {
            name: "Fill Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The shading colour. Includes light, pastel, and dark-mode-friendly options. Default is `Soft Amber`."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the point layer is in a projected coordinate system and that its elevation field is populated.",
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu, point to **Create Profile**, and click **Elevation Profile From Point Path**.",
          "Set **Input Point Path** to the survey point layer.",
          "Set **Choose ID Field** to the chainage or point-number field that orders the path.",
          "Set **Choose Z Field** to the elevation field.",
          "Set **Output Chart** to a `.png` or `.jpg` path.",
          "To style the chart, check **Additional Chart Properties?**. Checking **Add Point Marker?** is worthwhile here, since each vertex is an actual observation.",
          "Click **Run**, then open the image file."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "elevation-profile-from-line-path",
      "spot-height"
    ]
  },
  {
    slug: "elevation-profile-from-line-path",
    group: "spatialanalysis",
    name: "Elevation Profile from Line Path",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Create Profile ▸ Elevation Profile from Line Path",
    actsOn: [],
    summary: {
      km: "បង្កើតតារាងក្រាហ្វិកទម្រង់កម្ពស់តាមបណ្តោយខ្សែ ដោយយកកម្ពស់ពី raster កម្ពស់ រួចសរសេរលទ្ធផលជារូបភាព PNG ឬ JPG។",
      en: "Generates an elevation profile chart along a line, sampling heights from an elevation raster and writing the result as a PNG or JPG image."
    },
    body: [
      {
        type: "paragraph",
        text: "The chart is fully styleable from the tool dialog — fonts (including Khmer typefaces), colours, grid, markers, and fill under the curve — so the output can be dropped straight into a report or map layout without editing in a graphics package."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Line Feature** accepts polyline features only. The profile follows the line's geometry from its start vertex to its end vertex, so line direction determines which end appears on the left of the chart. Flip the line if the profile reads backwards.",
          "**Input Elevation Raster** must cover the full length of the line. Sections of the line beyond the raster produce gaps in the profile.",
          "**Output Chart** must be a `.png` or `.jpg` file. The chart is an image, not a layer — it is not added to the map.",
          "All styling parameters sit behind **Additional Chart Properties?**. Leave it unchecked to accept the defaults, which produce a clean blue profile on a light background at 10×5 inches.",
          "**Customize Figure Size** takes a `WIDTHxHEIGHT` string in inches — for example, `10x5`. A larger figure gives more room for axis labels on a long profile.",
          "For Khmer-language reports, set **Choose Font** to one of the Khmer typefaces in the list (`Battambang`, `Bayon`, `Hanuman`, `Khmer OS`, `Khmer OS Muol`, and others). The chosen font applies to the title and axis labels.",
          "Axis titles default to metric labels — `Distance (m)` and `Elevation (m)`. Change them to match the raster's actual vertical units if it is not in metres; the tool does not convert units."
        ]
      }
    ],
    parameters: [
      {
        title: "Required input and output",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Line Feature",
            optional: false,
            type: "Feature Set",
            description: [
              {
                type: "paragraph",
                text: "The line along which elevation is sampled. Polyline geometry only."
              }
            ]
          },
          {
            name: "Input Elevation Raster",
            optional: false,
            type: "Raster Layer",
            description: [
              {
                type: "paragraph",
                text: "The elevation raster sampled to build the profile. Must cover the line."
              }
            ]
          },
          {
            name: "Output Chart",
            optional: false,
            type: "File",
            description: [
              {
                type: "paragraph",
                text: "The image file to write. Must be `.png` or `.jpg`."
              }
            ]
          },
          {
            name: "Additional Chart Properties?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Enables the styling parameters below."
              },
              {
                type: "list",
                items: [
                  "Checked — All chart styling categories are enabled.",
                  "Unchecked (default) — Defaults are used."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Chart Surround",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Customize Figure Size",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The figure size in inches, as `WIDTHxHEIGHT`. Default is `10x5`."
              }
            ]
          },
          {
            name: "Chart Title",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The chart title. Default is `Elevation Profile`."
              }
            ]
          },
          {
            name: "X Axis Title",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The horizontal axis label. Default is `Distance (m)`."
              }
            ]
          },
          {
            name: "Y Axis Title",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The vertical axis label. Default is `Elevation (m)`."
              }
            ]
          },
          {
            name: "Choose Font",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The typeface for title and labels. Includes Latin faces (`Arial`, `Calibri`, `Roboto`, `Times New Roman`, and others) and Khmer faces (`Battambang`, `Bayon`, `Chenla`, `Content`, `Dangrek`, `Hanuman`, `Kantumruy`, `Khmer OS`, `Khmer OS Muol`, `Moulpali`). Default is `Arial`."
              }
            ]
          },
          {
            name: "Title Size",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Title font size in points. Default is `14`."
              }
            ]
          },
          {
            name: "Axis Label Size",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Axis label font size in points. Default is `11`."
              }
            ]
          },
          {
            name: "Enable Legend?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Draws a legend on the chart."
              }
            ]
          }
        ]
      },
      {
        title: "Graph Properties",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Line Width",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Profile line width. Default is `1`."
              }
            ]
          },
          {
            name: "Line Graph Style",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Profile line style."
              },
              {
                type: "list",
                items: [
                  "`solid` (default)",
                  "`dashed`",
                  "`dash-dot`",
                  "`dotted`"
                ]
              }
            ]
          },
          {
            name: "Line Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Profile line colour. Offers a standard palette plus terrain-themed and ArcGIS-themed colours and a colourblind-safe set. Default is `Blue`."
              }
            ]
          },
          {
            name: "Add Point Marker?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Draws a marker at each sampled point."
              }
            ]
          },
          {
            name: "Point Marker Style",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Marker shape — `point`, `pixel`, `circle`, `square`, `diamond`, `triangle up/down/left/right`, `pentagon`, `hexagone 1`, `hexagon 2`, `star`, `plus`. Default is `circle`."
              }
            ]
          },
          {
            name: "Marker Size",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "Marker size. Default is `2`."
              }
            ]
          }
        ]
      },
      {
        title: "Chart Properties",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Background Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The chart background scheme. Default is `White – Light Gray`."
              }
            ]
          },
          {
            name: "Add X Axis Grid?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Draws vertical grid lines."
              }
            ]
          },
          {
            name: "Line Grid Style",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Grid line style — `solid`, `dashed`, `dash-dot`, `dotted`. Default is `dashed`."
              }
            ]
          },
          {
            name: "Grid Width",
            optional: true,
            type: "Double",
            description: [
              {
                type: "paragraph",
                text: "Grid line width. Default is `0.25`."
              }
            ]
          },
          {
            name: "Line Grid Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "Grid colour — `Light Gray`, `Soft Gray`, `Subtle Gray`, `Very Light Gray`, `Cool Gray`, `Warm Gray`. Default is `Light Gray`."
              }
            ]
          }
        ]
      },
      {
        title: "Fill Under Graph",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Fill Area Under Graph?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Shades the area beneath the profile line, giving the familiar cross-section look."
              }
            ]
          },
          {
            name: "Fill Color",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The shading colour. Includes light, pastel, and dark-mode-friendly options. Default is `Soft Amber`."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Add the elevation raster to the map.",
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu, point to **Create Profile**, and click **Elevation Profile from Line Path**.",
          "For **Input Line Feature**, either choose an existing polyline layer or digitise the profile line directly on the map using the feature-set control on the dialog.",
          "Set **Input Elevation Raster**.",
          "Set **Output Chart** to a `.png` or `.jpg` path.",
          "To style the chart, check **Additional Chart Properties?** and adjust the categories as needed. For a Khmer-language report, set **Choose Font** to a Khmer typeface.",
          "Click **Run**, then open the image file."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "elevation-profile-from-point-path",
      "spot-height",
      "cut-fill"
    ]
  },
  {
    slug: "from-reference-point-direction-calculation",
    group: "spatialanalysis",
    name: "From Reference Point Direction Calculation",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ From Reference Point Direction Calculation",
    actsOn: [],
    summary: {
      km: "គណនាចម្ងាយ និង bearing ពីចំណុចយោងមួយដែលបានជ្រើស ទៅចំណុចផ្សេងទៀតទាំងអស់ក្នុងស្រទាប់ដដែល ដោយសរសេរលទ្ធផលទៅតារាងដាច់ដោយឡែក។",
      en: "Calculates the distance and bearing from one selected reference point to every other point in the same layer, writing the results to a standalone table."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool for radial survey work — setting out from a single control point, or reporting the direction and distance of a set of features relative to a datum mark."
      }
    ],
    usage: [
      {
        type: "note",
        tone: "warning",
        text: "**Exactly one point must be selected in the map before the tool runs.** That selected point is the reference. The tool raises an error if nothing is selected, or if more than one point is selected."
      },
      {
        type: "list",
        items: [
          {
            text: "Bearings are reported in three forms at once, so the output table suits both engineering and legal-description workflows:",
            items: [
              "`BearingDeg` — decimal degrees",
              "`BearingDMS` — degrees, minutes, seconds",
              "`QBearing` — quadrant bearing (for example, N 45° 30′ 00″ E)"
            ]
          },
          "The output table is overwritten. If a table already exists at the **Output table** path, it is deleted and recreated.",
          "Distances are computed in the point layer's own coordinate system units. Run the tool on a projected layer; distances taken from a geographic coordinate system are expressed in degrees and are not meaningful as ground distance.",
          "Only point layers are accepted in **Input point layer**."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input point layer",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The point layer containing both the reference point and the target points. Point geometry only. One feature must be selected in the map to act as the reference."
              }
            ]
          },
          {
            name: "Output table",
            optional: false,
            type: "Table",
            description: [
              {
                type: "paragraph",
                text: "The standalone table that receives the results. An existing table at this path is deleted and replaced."
              }
            ]
          },
          {
            name: "Select field",
            optional: false,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The identifier field used to label the reference point and each target point in the output table."
              }
            ]
          }
        ]
      },
      {
        title: "Output table schema",
        nameLabel: null,
        showType: false,
        blocks: [
          {
            type: "table",
            head: [
              "Field",
              "Type",
              "Explanation"
            ],
            rows: [
              [
                "`RefValue`",
                "Text (100)",
                "The **Select field** value of the reference point"
              ],
              [
                "`TargetValue`",
                "Text (100)",
                "The **Select field** value of the target point"
              ],
              [
                "`Distance`",
                "Double",
                "Distance from reference to target, in the layer's coordinate system units"
              ],
              [
                "`BearingDeg`",
                "Double",
                "Bearing in decimal degrees"
              ],
              [
                "`BearingDMS`",
                "Text (50)",
                "Bearing in degrees, minutes, seconds"
              ],
              [
                "`QBearing`",
                "Text (80)",
                "Quadrant bearing"
              ],
              [
                "`Direction`",
                "Text (10)",
                "Cardinal or quadrant direction code"
              ],
              [
                "`RefX`, `RefY`",
                "Double",
                "Coordinates of the reference point"
              ],
              [
                "`TargetX`, `TargetY`",
                "Double",
                "Coordinates of the target point"
              ]
            ]
          }
        ],
        rows: []
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Add the point layer to the map and confirm it uses a projected coordinate system.",
          "Using the **Select** tool, click the single point that will serve as the reference. Confirm the **Contents** pane reports one selected feature.",
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu and click **From Reference Point Direction Calculation**.",
          "Set **Input point layer** to the layer holding the selection.",
          "Set **Output table** to the table to create.",
          "Set **Select field** to the point identifier field — typically a point number or name.",
          "Click **Run**. One row is written per target point."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "direction-distance",
      "bearing-distance-calculator",
      "direction-selector"
    ]
  },
  {
    slug: "spot-height",
    group: "spatialanalysis",
    name: "Spot Height",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Spatial Analysis ▸ Spatial Analysis ▸ Spot Height",
    actsOn: [],
    summary: {
      km: "យកតម្លៃកម្ពស់ពី raster រួចសរសេរទៅលក្ខណៈចំណុច ទាំងដោយបង្កើតចំណុចរាយពេញតំបន់សិក្សា ឬដោយបំពេញកម្ពស់ទៅលើចំណុចដែលមានស្រាប់។",
      en: "Samples elevation values from a raster and writes them to point features, either by generating a set of points distributed across a study area or by populating elevation onto points you already have."
    },
    body: [
      {
        type: "paragraph",
        text: "Spot heights are the labelled elevation marks on a topographic sheet. This tool produces them without manual digitising and elevation lookup."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          {
            text: "The tool has two modes, selected with **Use Existing Point?**:",
            items: [
              "**Unchecked (generate points)** — Supply **Input Study Area** and **Number of Spot Height**. The tool distributes that many points across the study area polygon and samples elevation at each one.",
              "**Checked (use existing points)** — Supply **Input Existing Point Feature**. The tool samples elevation at the existing point locations. **Number of Spot Height** is ignored."
            ]
          },
          "**Input Elevation Raster Layer** must cover the study area or point extent. Points falling outside the raster receive no elevation value.",
          "**Input Study Area** accepts polygon features only; **Input Existing Point Feature** accepts point features only.",
          "**Number of Spot Height** controls point density, not spacing. A large study area with a small count produces widely separated spot heights.",
          "Elevation values carry the vertical units of the source raster. The tool does not convert between feet and metres."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Use Existing Point?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects the input mode."
              },
              {
                type: "list",
                items: [
                  "Checked — Elevation is sampled at the locations in **Input Existing Point Feature**.",
                  "Unchecked (default) — Points are generated inside **Input Study Area**."
                ]
              }
            ]
          },
          {
            name: "Input Study Area",
            optional: true,
            type: "Feature Set",
            description: [
              {
                type: "paragraph",
                text: "The polygon defining where spot heights are generated. Required when **Use Existing Point?** is unchecked. Polygon geometry only."
              }
            ]
          },
          {
            name: "Input Existing Point Feature",
            optional: true,
            type: "Feature Set",
            description: [
              {
                type: "paragraph",
                text: "The point features to populate with elevation. Required when **Use Existing Point?** is checked. Point geometry only."
              }
            ]
          },
          {
            name: "Input Elevation Raster Layer",
            optional: true,
            type: "Raster Layer",
            description: [
              {
                type: "paragraph",
                text: "The elevation raster sampled for Z values. Must cover the area of interest."
              }
            ]
          },
          {
            name: "Number of Spot Height",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "How many spot height points to generate. Used only when **Use Existing Point?** is unchecked."
              }
            ]
          },
          {
            name: "Output Spot Height Feature Class",
            optional: true,
            type: "Feature Class",
            description: [
              {
                type: "paragraph",
                text: "The point feature class that receives the sampled elevation values."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Generate spot heights across an area"
      },
      {
        type: "steps",
        items: [
          "Add the elevation raster and a study-area polygon to the map.",
          "On the **KGA Toolbox** tab, in the **Spatial Analysis** group, open the **Spatial Analysis** menu and click **Spot Height**.",
          "Leave **Use Existing Point?** unchecked.",
          "Set **Input Study Area** to the boundary polygon.",
          "Set **Input Elevation Raster Layer**.",
          "Set **Number of Spot Height** to the number of marks the sheet needs.",
          "Set **Output Spot Height Feature Class** and click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "Populate elevation onto existing points"
      },
      {
        type: "steps",
        items: [
          "Open the tool and check **Use Existing Point?**.",
          "Set **Input Existing Point Feature** to the point layer.",
          "Set **Input Elevation Raster Layer**.",
          "Set **Output Spot Height Feature Class** and click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "elevation-profile-from-line-path",
      "cut-fill"
    ]
  },
  {
    slug: "boundary-overlap-check",
    group: "topologycheck",
    name: "Boundary Overlap Check",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Topology ▸ Boundary Overlap",
    actsOn: [],
    summary: {
      km: "បង្កើត topology geodatabase ថ្មីក្នុង feature dataset រួចផ្ទៀងផ្ទាត់ស្រទាប់ព្រំដែនពហុកោណពីរធៀបគ្នា ដោយរាយការណ៍កន្លែងដែលវាត្រួតគ្នា។",
      en: "Creates a new geodatabase topology inside a feature dataset and validates two polygon boundary layers against each other, reporting where they overlap."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool to check one administrative boundary against another — a commune layer against a district layer, or a new survey boundary against the existing cadastral extent."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Input Feature Dataset** must be the feature dataset that contains both boundary layers. A geodatabase topology cannot span feature datasets, so both inputs must already live there.",
          "The tool creates a topology named by **New Topology Name**, defaulting to `new_topology`. Give it a meaningful name when several checks will coexist in the same feature dataset; the name must be unique within the dataset.",
          "Both **Input Boundary 1** and **Input Boundary 2** must be polygon layers.",
          "The check is between the two layers. To find overlaps *within* a single layer, use [Parcel Overlap Check](../Cadastral/ParcelOverlapCheck.md) or [Detect Overlap/Gap](../DataManagement/DetectOverlapGap.md).",
          "The topology is left in the geodatabase after the run so the errors can be inspected, filtered, and marked as exceptions in the error inspector."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Feature Dataset",
            optional: false,
            type: "Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The feature dataset in which the topology is created. Must contain both boundary layers."
              }
            ]
          },
          {
            name: "New Topology Name",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the topology to create. Must be unique within the feature dataset. Default is `new_topology`."
              }
            ]
          },
          {
            name: "Input Boundary 1",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The first boundary layer. Polygon geometry only."
              }
            ]
          },
          {
            name: "Input Boundary 2",
            optional: false,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The second boundary layer, checked against the first. Polygon geometry only."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm both boundary layers reside in the same feature dataset of a file geodatabase.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Topology** gallery and click **Boundary Overlap**.",
          "Set **Input Feature Dataset** to the feature dataset holding the layers.",
          "Type a descriptive name in **New Topology Name**.",
          "Set **Input Boundary 1** and **Input Boundary 2**.",
          "Click **Run**.",
          "Open the new topology in the **Catalog** pane and review the reported overlaps in the error inspector."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "topology-check",
      "point-on-boundary",
      "detect-overlap-across-layer",
      "parcel-overlap-check"
    ]
  },
  {
    slug: "add-feature-class-to-topology",
    group: "topologycheck",
    name: "FC To Topology",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Topology ▸ FC To Topology",
    actsOn: [],
    summary: {
      km: "បន្ថែម feature class ពហុកោណមួយ ឬច្រើនទៅ topology geodatabase ដែលមានស្រាប់ រួចផ្ទៀងផ្ទាត់វា ព្រមទាំងអាចបន្ថែមវិធានត្រួតគ្នាតាមផ្លូវ។",
      en: "Adds one or more polygon feature classes to an existing geodatabase topology and validates it, optionally adding the overlap rule as it goes."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this tool to extend a topology already in use — for example, when a new commune's parcel layer arrives and must join the quality-control set — rather than rebuilding the topology from scratch."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The feature classes being added must live in the **same feature dataset** as the target topology. A geodatabase topology cannot span feature datasets.",
          "All inputs must be polygon feature classes. The **Input Feature Classes** parameter filters the layer list to polygons.",
          "Check **Check overlap boundary?** to add the \"must not overlap\" rule for the feature classes being added. Leave it unchecked to add the feature classes to the topology without imposing that rule — useful when the layer legitimately contains overlapping features.",
          "Validation runs after the feature classes are added, so errors from the new data are reported immediately.",
          "To create a topology from nothing, use [Topology Check](TopologyCheck.md) instead."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Input Topology",
            optional: false,
            type: "Topology",
            description: [
              {
                type: "paragraph",
                text: "The existing geodatabase topology to extend."
              }
            ]
          },
          {
            name: "Check overlap boundary?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Controls whether the overlap rule is applied to the feature classes being added."
              },
              {
                type: "list",
                items: [
                  "Checked — The \"must not overlap\" rule is added and validated.",
                  "Unchecked (default) — The feature classes are added without that rule."
                ]
              }
            ]
          },
          {
            name: "Input Feature Classes",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more polygon feature classes to add. Must reside in the same feature dataset as the topology."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm the feature classes to add are in the same feature dataset as the target topology.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Topology** gallery and click **FC To Topology**.",
          "Set **Input Topology** to the existing topology.",
          "Check **Check overlap boundary?** if the added layers must not contain overlaps.",
          "In **Input Feature Classes**, select the polygon feature classes to add.",
          "Click **Run**, then review the results in the topology's error inspector."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "topology-check",
      "boundary-overlap-check",
      "point-on-boundary"
    ]
  },
  {
    slug: "point-on-boundary",
    group: "topologycheck",
    name: "Point On Boundary",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Topology ▸ Point On Boundary",
    actsOn: [],
    summary: {
      km: "ផ្ទៀងផ្ទាត់ថាចំណុចព្រំដែនស្ថិតនៅលើព្រំដែនក្បាលដីរបស់វាពិតប្រាកដ ដោយប្រើ topology geodatabase និងវិធាន “point must be covered by boundary”។",
      en: "Validates that boundary points lie exactly on the boundary of their parcel polygons, using a geodatabase topology and the \"point must be covered by boundary\" rule."
    },
    body: [
      {
        type: "paragraph",
        text: "A boundary point that has drifted off the polygon edge — by a fraction of a millimetre or by metres — breaks the correspondence between the coordinate listing and the mapped parcel. This tool finds those points."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          {
            text: "The tool works in two modes, selected with **New Topology?**:",
            items: [
              "**Checked** — A new topology is created for the check. **Input Point Feature** and **Input Boundary Feature** are used to identify the layers.",
              "**Unchecked** — An existing topology is reused. Supply **Input Topology**."
            ]
          },
          "Every parameter is marked optional because which ones are needed depends on the mode. In practice:"
        ]
      },
      {
        type: "table",
        head: [
          "Mode",
          "Required in practice"
        ],
        rows: [
          [
            "New topology",
            "**Input Point Feature**, **Input Boundary Feature**"
          ],
          [
            "Existing topology",
            "**Input Topology**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Input Point Feature** accepts point layers only; **Input Boundary Feature** accepts polygon layers only.",
          "Both layers must live in the same feature dataset as the topology.",
          "The rule tests coincidence within the topology's cluster tolerance. A point that looks coincident on screen can still fail if it is off by more than that tolerance — zoom to the reported error before assuming it is a false positive."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "New Topology?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Selects the mode."
              },
              {
                type: "list",
                items: [
                  "Checked — A new topology is created from **Input Point Feature** and **Input Boundary Feature**.",
                  "Unchecked — The existing topology named in **Input Topology** is used."
                ]
              }
            ]
          },
          {
            name: "Input Topology",
            optional: true,
            type: "Topology",
            description: [
              {
                type: "paragraph",
                text: "The existing geodatabase topology to validate. Used when **New Topology?** is unchecked."
              }
            ]
          },
          {
            name: "Input Point Feature",
            optional: true,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The boundary point layer to test. Point geometry only. Used when **New Topology?** is checked."
              }
            ]
          },
          {
            name: "Input Boundary Feature",
            optional: true,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The parcel polygon layer whose boundary the points must lie on. Polygon geometry only. Used when **New Topology?** is checked."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "Create a new topology for the check"
      },
      {
        type: "steps",
        items: [
          "Confirm the point and polygon layers are in the same feature dataset.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Topology** gallery and click **Point On Boundary**.",
          "Check **New Topology?**.",
          "Set **Input Point Feature** to the boundary point layer.",
          "Set **Input Boundary Feature** to the parcel polygon layer.",
          "Click **Run**, then review the reported errors in the error inspector."
        ]
      },
      {
        type: "subheading",
        text: "Reuse an existing topology"
      },
      {
        type: "steps",
        items: [
          "Open the tool and leave **New Topology?** unchecked.",
          "Set **Input Topology** to the existing topology.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "topology-check",
      "add-feature-class-to-topology",
      "polygon-to-boundary-point",
      "corner-point-builder"
    ]
  },
  {
    slug: "topology-check",
    group: "topologycheck",
    name: "Topology Check",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Geoprocessing ▸ Topology ▸ Topology Check",
    actsOn: [],
    summary: {
      km: "បង្កើត topology geodatabase ពី feature class ពហុកោណមួយ ឬច្រើន រួចផ្ទៀងផ្ទាត់វា ដោយរាយការណ៍កំហុសធរណីមាត្រដូចជាការត្រួតគ្នា និងចន្លោះទទេ។",
      en: "Creates a geodatabase topology from one or more polygon feature classes and validates it, reporting geometry errors such as overlaps and gaps."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the entry point for quality control on parcel data: it builds the topology, adds the rules, and runs validation in one step, rather than requiring the multi-stage setup the standard geodatabase workflow demands."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "All inputs must be polygon feature classes. The **Input Feature** parameter filters the layer list to polygons.",
          "A geodatabase topology can only contain feature classes that live in the **same feature dataset**. If the inputs are spread across different feature datasets or sit at the root of a geodatabase, the tool cannot build the topology. Move them into a common feature dataset first — [Copy Parcel To GDB](../Cadastral/CopyParcelToGDB.md) is a convenient way to do that.",
          "Shapefiles cannot participate in a topology. Inputs must be geodatabase feature classes.",
          "**Output Topology** is created inside the feature dataset that holds the inputs.",
          "After the run, open the topology's error inspector in ArcGIS Pro to review, filter, and mark exceptions. The tool creates and validates the topology; triaging individual errors remains a manual review step.",
          "For a check that does not create a persistent topology, use [Detect Overlap/Gap](../DataManagement/DetectOverlapGap.md) or [Parcel Overlap Check](../Cadastral/ParcelOverlapCheck.md) instead."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Output Topology",
            optional: false,
            type: "Topology",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase topology to create. Created in the feature dataset containing the inputs."
              }
            ]
          },
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer (multiple)",
            description: [
              {
                type: "paragraph",
                text: "One or more polygon feature classes to add to the topology. All must reside in the same feature dataset."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Confirm every feature class to be checked lives in the same feature dataset of a file geodatabase.",
          "On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Topology** gallery and click **Topology Check**.",
          "Set **Output Topology** to the topology name to create.",
          "In **Input Feature**, select the polygon feature classes to validate.",
          "Click **Run**.",
          "In the **Catalog** pane, open the new topology and use the error inspector to review the errors found."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-feature-class-to-topology",
      "boundary-overlap-check",
      "point-on-boundary",
      "detect-overlap-gap"
    ]
  },
  {
    slug: "parcel-division-form",
    group: "mapping",
    name: "Parcel Division Form",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Mapping ▸ Mapping ▸ Parcel Division",
    actsOn: [],
    summary: {
      km: "បង្កើតទម្រង់បែបបទបែងចែកក្បាលដីពេញលេញ ពីធរណីមាត្រក្បាលដីមុន និងក្រោយការបែងចែក រួមជាមួយព័ត៌មានរដ្ឋបាល ម្ចាស់កម្មសិទ្ធិ និងការអនុម័តដែលបញ្ចូលក្នុងផ្ទាំង។",
      en: "Produces a completed parcel division form from the before-division and after-division parcel geometry, together with the administrative, ownership, and approval details entered on the dialog."
    },
    body: [
      {
        type: "paragraph",
        text: "Parcel subdivision in Cambodia requires a standardised form listing the original parcel, the resulting parts, the land address, adjacent landowners, and thumbprint approvals. This tool assembles that form from the map and typed input rather than from manual transcription."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Before Division Parcel (if more, select only one)** takes the original parcel. If the layer holds many parcels, select exactly one in the map before running — the form describes a single division event.",
          "**After Division Parcel** takes the layer holding the resulting parts. **Choose Divided Part Field** identifies which field distinguishes one part from another, and the tool counts the parts from it to fill **Number of Division** automatically.",
          "Both parcel parameters accept polygon layers only.",
          "Check **Generate Parcel Dimension?** to include boundary dimensions on the form.",
          "The remaining parameters are grouped into collapsible categories on the dialog. All are optional — fill in what the form requires and leave the rest blank:"
        ]
      },
      {
        type: "table",
        head: [
          "Category",
          "Contents"
        ],
        rows: [
          [
            "**Division Information**",
            "Number of divisions and the names of up to three accepters"
          ],
          [
            "**Land Address**",
            "Province, district, commune, and village names"
          ],
          [
            "**Adjacent Landowner Information**",
            "Landowner names on the northern, southern, eastern, and western sides"
          ],
          [
            "**Right Thumbprint Approval**",
            "Names of up to four approving persons"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "The **Land Address** drop-downs are populated from the project data, so the district, commune, and village choices narrow as the province is selected."
        ]
      }
    ],
    parameters: [
      {
        title: "Parcel geometry",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Request Person",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The name of the person requesting the division."
              }
            ]
          },
          {
            name: "Before Division Parcel (if more, select only one)",
            optional: true,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The original parcel. Polygon geometry only. Select exactly one feature in the map if the layer holds several."
              }
            ]
          },
          {
            name: "After Division Parcel",
            optional: true,
            type: "Feature Layer",
            description: [
              {
                type: "paragraph",
                text: "The layer holding the parcels resulting from the division. Polygon geometry only."
              }
            ]
          },
          {
            name: "Choose Divided Part Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field distinguishing each divided part. Used to count the parts."
              }
            ]
          },
          {
            name: "Generate Parcel Dimension?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Includes boundary dimensions on the generated form."
              }
            ]
          }
        ]
      },
      {
        title: "Division Information",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Number of Division",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "How many parts the parcel was divided into. Counted automatically from **Choose Divided Part Field**."
              }
            ]
          },
          {
            name: "Name of 1st Accepter",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The first accepter's name."
              }
            ]
          },
          {
            name: "Name of 2nd Accepter",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The second accepter's name."
              }
            ]
          },
          {
            name: "Name of 3rd Accepter",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The third accepter's name."
              }
            ]
          }
        ]
      },
      {
        title: "Land Address",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Province Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The province. Choices are populated from the project data."
              }
            ]
          },
          {
            name: "District Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The district, narrowed by the selected province."
              }
            ]
          },
          {
            name: "Commune Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The commune, narrowed by the selected district."
              }
            ]
          },
          {
            name: "Village Name",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The village, narrowed by the selected commune."
              }
            ]
          }
        ]
      },
      {
        title: "Adjacent Landowner Information",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Northern Adjacent Landowner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner to the north."
              }
            ]
          },
          {
            name: "Southern Adjacent Landowner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner to the south."
              }
            ]
          },
          {
            name: "Eastern Adjacent Landowner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner to the east."
              }
            ]
          },
          {
            name: "Western Adjacent Landowner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner to the west."
              }
            ]
          }
        ]
      },
      {
        title: "Right Thumbprint Approval",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "1st Approved Person",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The first approving person's name."
              }
            ]
          },
          {
            name: "2nd Approved Person",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The second approving person's name."
              }
            ]
          },
          {
            name: "3rd Approved Person",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The third approving person's name."
              }
            ]
          },
          {
            name: "4th Approved Person",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The fourth approving person's name."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "Add both the original parcel layer and the divided-parcel layer to the map.",
          "If the original layer contains more than one parcel, select the single parcel being divided.",
          "On the **KGA Toolbox** tab, in the **Mapping** group, open the **Mapping** menu and click **Parcel Division**.",
          "Type the requester's name in **Request Person**.",
          "Set **Before Division Parcel** and **After Division Parcel**.",
          "Set **Choose Divided Part Field**, then confirm **Number of Division** under **Division Information** has been counted correctly.",
          "Expand **Land Address** and choose the province, district, commune, and village.",
          "Expand **Adjacent Landowner Information** and **Right Thumbprint Approval** and fill in the names the form requires.",
          "Click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "parcel-split-tool",
      "parcel-split-optimizer",
      "quick-landplot-1",
      "legal-description-builder"
    ]
  },
  {
    slug: "quick-landplot-1",
    group: "mapping",
    name: "Quick Landplot 1",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Mapping ▸ Mapping ▸ Quick Landplot ▸ Quick Landplot 1",
    actsOn: [],
    summary: {
      km: "បង្កើតសន្លឹកផែនទីដីធ្លីពេញលេញ — ផែនទីមេ ផែនទីបង្ហាញទីតាំង ក្រឡាចត្រង្គ ចំណងជើង និងអាសយដ្ឋានដី — ពីស្រទាប់ក្បាលដីដែលមានស្រាប់ តារាងកូអរដោនេ CSV ឬស្រទាប់ចំណុចព្រំដែនដែលមានស្រាប់។",
      en: "Generates a finished land plot map sheet — main map, indicator map, grid, title, and land address — from an existing parcel layer, a CSV coordinate table, or an existing boundary point layer."
    },
    body: [
      {
        type: "paragraph",
        text: "The land plot sheet is the standard deliverable for a single-parcel survey. This tool builds the whole layout in one run instead of assembling it by hand."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Choose Input Type** determines which of the following parameters apply:"
        ]
      },
      {
        type: "table",
        head: [
          "Input type",
          "Parameters used"
        ],
        rows: [
          [
            "`Existing Parcel Feature` (default)",
            "**Input Feature**, **Plot ID (required, if more than 1 plot)**"
          ],
          [
            "`CSV Table`",
            "**Input Feature**, **X Field**, **Y Field**, **Output Coordinate System**, **Point ID Field**, **Plot ID**"
          ],
          [
            "`Existing Boundary Point`",
            "**Input Feature**, **Point ID Field**, **Plot ID**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "For `CSV Table` input, **Output Coordinate System** must be set explicitly — a coordinate table carries no spatial reference of its own and the tool cannot infer it.",
          "**Plot ID (required, if more than 1 plot)** groups input records into separate plots. Leave it unset only when the input describes a single plot; otherwise every record is treated as belonging to one parcel and the geometry will be wrong.",
          "**Map Title** and **Land Address** are pre-filled with Khmer template text, which you overwrite with the actual title and address. The defaults are placeholders, not finished captions.",
          {
            text: "Two grid intervals are set independently: Match them to the parcel size; a 50-unit grid over a very large parcel produces unreadably dense grid lines.",
            items: [
              "**Main Map Grid Interval** — default `50`, for the detailed parcel view.",
              "**Indicator Map Grid Interval** — default `100`, for the smaller locator map."
            ]
          },
          "Check **Open Map?** to have the finished layout opened after the run.",
          "For a version that adds satellite or raster imagery beneath the parcel, use [Quick Landplot 2](QuickLandplot2.md)."
        ]
      }
    ],
    parameters: [
      {
        title: null,
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Choose Input Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The form the input data takes. Default is `Existing Parcel Feature`."
              },
              {
                type: "list",
                items: [
                  "`Existing Parcel Feature`",
                  "`CSV Table`",
                  "`Existing Boundary Point`"
                ]
              }
            ]
          },
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer; Table View",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer, coordinate table, or boundary point layer supplying the geometry."
              }
            ]
          },
          {
            name: "X Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding the X coordinate. Used for `CSV Table` input."
              }
            ]
          },
          {
            name: "Y Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding the Y coordinate. Used for `CSV Table` input."
              }
            ]
          },
          {
            name: "Output Coordinate System",
            optional: true,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system of the X/Y values. Required for `CSV Table` input."
              }
            ]
          },
          {
            name: "Point ID Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field numbering the boundary points around each plot."
              }
            ]
          },
          {
            name: "Plot ID (required, if more than 1 plot)",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field grouping records into separate plots. Required whenever the input contains more than one plot."
              }
            ]
          },
          {
            name: "Output Workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the generated datasets."
              }
            ]
          },
          {
            name: "Map Title",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The sheet title. Pre-filled with Khmer placeholder text; replace it with the actual title."
              }
            ]
          },
          {
            name: "Land Address",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The land address caption. Pre-filled with Khmer placeholder text; replace it with the actual address."
              }
            ]
          },
          {
            name: "Main Map Grid Interval",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "The grid interval on the main map, in map units. Default is `50`."
              }
            ]
          },
          {
            name: "Indicator Map Grid Interval",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "The grid interval on the indicator map, in map units. Default is `100`."
              }
            ]
          },
          {
            name: "Open Map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Opens the generated layout when the run finishes."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "subheading",
        text: "From an existing parcel layer"
      },
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Mapping** group, open the **Mapping** menu, point to **Quick Landplot**, and click **Quick Landplot 1**.",
          "Leave **Choose Input Type** set to `Existing Parcel Feature`.",
          "Set **Input Feature** to the parcel layer.",
          "If the layer contains more than one parcel, set **Plot ID**.",
          "Set **Output Workspace**.",
          "Replace the placeholder text in **Map Title** and **Land Address**.",
          "Adjust **Main Map Grid Interval** and **Indicator Map Grid Interval** to suit the parcel size.",
          "Check **Open Map?** and click **Run**."
        ]
      },
      {
        type: "subheading",
        text: "From a CSV coordinate table"
      },
      {
        type: "steps",
        items: [
          "Add the CSV to the project so it appears under **Standalone Tables**.",
          "Open the tool and set **Choose Input Type** to `CSV Table`.",
          "Set **Input Feature** to the table, then set **X Field** and **Y Field**.",
          "Set **Output Coordinate System** — this is required for table input.",
          "Set **Point ID Field** and, if the table holds more than one plot, **Plot ID**.",
          "Complete the output, title, and grid parameters as above, then click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "quick-landplot-2",
      "parcel-division-form",
      "point-to-polygon",
      "polygon-to-map-series"
    ]
  },
  {
    slug: "quick-landplot-2",
    group: "mapping",
    name: "Quick Landplot 2",
    status: "full",
    youtubeId: null,
    interactive: false,
    toolType: "Geoprocessing tool",
    ribbonPath: "KGA Toolbox ▸ Mapping ▸ Mapping ▸ Quick Landplot ▸ Quick Landplot 2",
    actsOn: [],
    summary: {
      km: "បង្កើតសន្លឹកផែនទីដីធ្លីលើផ្ទាំងខាងក្រោយជារូបភាពផ្កាយរណប ឬ raster ដោយបន្ថែមចំណងជើងម្ចាស់ដីជាប់គ្នាទាំងបួនជ្រុង។",
      en: "Generates a land plot map sheet over a satellite or raster imagery backdrop, adding adjacent-landowner captions on all four sides."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the imagery-backed variant of [Quick Landplot 1](QuickLandplot1.md). Use it when the sheet must show the parcel in its real surroundings — buildings, tracks, vegetation — rather than on a blank ground."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "**Choose Input Type** works the same as in Quick Landplot 1:"
        ]
      },
      {
        type: "table",
        head: [
          "Input type",
          "Parameters used"
        ],
        rows: [
          [
            "`Existing Parcel Feature` (default)",
            "**Input Feature**, **Plot ID**"
          ],
          [
            "`CSV Table`",
            "**Input Feature**, **X Field**, **Y Field**, **Output Coordinate System**, **Point ID Field**, **Plot ID**"
          ],
          [
            "`Existing Boundary Point`",
            "**Input Feature**, **Point ID Field**, **Plot ID**"
          ]
        ]
      },
      {
        type: "list",
        items: [
          {
            text: "**Basemap type** selects the backdrop:",
            items: [
              "`Basemap` (default) — an online basemap chosen in **Choose basemap**. Requires an internet connection at run time.",
              "`Existing Raster Imagery` — a raster already in the project, set in **Input raster imagery**. Use this for offline work or for a commissioned orthophoto."
            ]
          },
          "**Choose basemap** offers Google Satellite and Google Satellite Hybrid alongside the full Esri basemap set — imagery, topographic, street, canvas, and cartographic styles. The default is `Google Satellite`.",
          "For `CSV Table` input, **Output Coordinate System** must be set explicitly.",
          "**Map Title** and **Land Address** are pre-filled with Khmer placeholder text containing dotted blanks. Replace the dotted sections with the real name, village, commune, district, province, and area figures.",
          "The four **Adjacent owners** parameters add landowner captions to the north, south, east, and west of the parcel on the sheet. All are optional; leave any side blank if it is not required."
        ]
      }
    ],
    parameters: [
      {
        title: "Input",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Choose Input Type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The form the input data takes. Default is `Existing Parcel Feature`."
              },
              {
                type: "list",
                items: [
                  "`Existing Parcel Feature`",
                  "`CSV Table`",
                  "`Existing Boundary Point`"
                ]
              }
            ]
          },
          {
            name: "Input Feature",
            optional: false,
            type: "Feature Layer; Table View",
            description: [
              {
                type: "paragraph",
                text: "The parcel layer, coordinate table, or boundary point layer supplying the geometry."
              }
            ]
          },
          {
            name: "X Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding the X coordinate. Used for `CSV Table` input."
              }
            ]
          },
          {
            name: "Y Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field holding the Y coordinate. Used for `CSV Table` input."
              }
            ]
          },
          {
            name: "Output Coordinate System",
            optional: true,
            type: "Spatial Reference",
            description: [
              {
                type: "paragraph",
                text: "The coordinate system of the X/Y values. Required for `CSV Table` input."
              }
            ]
          },
          {
            name: "Point ID Field",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field numbering the boundary points around each plot."
              }
            ]
          },
          {
            name: "Plot ID (required, if more than 1 plot)",
            optional: true,
            type: "Field",
            description: [
              {
                type: "paragraph",
                text: "The field grouping records into separate plots. Required whenever the input contains more than one plot."
              }
            ]
          },
          {
            name: "Output Workspace",
            optional: false,
            type: "Workspace; Feature Dataset",
            description: [
              {
                type: "paragraph",
                text: "The geodatabase or feature dataset that receives the generated datasets."
              }
            ]
          }
        ]
      },
      {
        title: "Backdrop",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Basemap type",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The source of the imagery backdrop. Default is `Basemap`."
              },
              {
                type: "list",
                items: [
                  "`Basemap` — an online basemap; requires internet access",
                  "`Existing Raster Imagery` — a raster already in the project"
                ]
              }
            ]
          },
          {
            name: "Choose basemap",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The online basemap to use. Includes `Google Satellite` (default) and `Goolge Satellite Hybrid`, plus the Esri set: `Imagery`, `Imagery Hybrid`, `Streets`, `Topographic`, `OpenStreetMap Style`, `Navigation`, `Streets (Night)`, `Terrain with Labels`, `Light Gray Canvas`, `Dark Gray Canvas`, `Outdoor`, `Oceans`, `National Geographic Style Map`, `Charted Territory Map`, `Community Map`, `Navigation (Dark)`, `Newspaper Map`, `Human Geography Map`, `Human Geography Dark Map`, `Modern Antique Map`, `Mid-Century Map`, `Nova Map`, `Colored Pencil Map`, `Firefly Imagery Hybrid`, `Blueprint`, `Topographic (Vector)`, `Environment Map`, `Enhanced Contrast Map`, `Enhanced Contrast Dark Map`, `Navigation (Places)`, `Navigation (Dark - Places)`."
              }
            ]
          },
          {
            name: "Input raster imagery",
            optional: true,
            type: "Raster Layer",
            description: [
              {
                type: "paragraph",
                text: "The raster used as the backdrop. Required when **Basemap type** is `Existing Raster Imagery`."
              }
            ]
          }
        ]
      },
      {
        title: "Sheet layout",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "Map Title",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The sheet title. Pre-filled with Khmer placeholder text; replace the dotted blanks."
              }
            ]
          },
          {
            name: "Land Address",
            optional: false,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The land address caption, including the area figure. Pre-filled with Khmer placeholder text; replace the dotted blanks."
              }
            ]
          },
          {
            name: "Main Map Grid Interval",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "The grid interval on the main map, in map units. Default is `50`."
              }
            ]
          },
          {
            name: "Indicator Map Grid Interval",
            optional: true,
            type: "Long",
            description: [
              {
                type: "paragraph",
                text: "The grid interval on the indicator map, in map units. Default is `100`."
              }
            ]
          },
          {
            name: "Open Map?",
            optional: true,
            type: "Boolean",
            description: [
              {
                type: "paragraph",
                text: "Opens the generated layout when the run finishes."
              }
            ]
          }
        ]
      },
      {
        title: "Adjacent owners",
        nameLabel: "Label",
        showType: true,
        blocks: [],
        rows: [
          {
            name: "North Adjacent Owner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner caption placed to the north."
              }
            ]
          },
          {
            name: "South Adjacent Owner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner caption placed to the south."
              }
            ]
          },
          {
            name: "East Adjacent Owner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner caption placed to the east."
              }
            ]
          },
          {
            name: "West Adjacent Owner",
            optional: true,
            type: "String",
            description: [
              {
                type: "paragraph",
                text: "The landowner caption placed to the west."
              }
            ]
          }
        ]
      }
    ],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Mapping** group, open the **Mapping** menu, point to **Quick Landplot**, and click **Quick Landplot 2**.",
          "Set **Choose Input Type** and complete the matching input parameters.",
          "Set **Output Workspace**.",
          {
            text: "Choose the backdrop:",
            items: [
              "For an online basemap, leave **Basemap type** as `Basemap` and pick one in **Choose basemap**. Confirm you have internet access.",
              "For offline or commissioned imagery, set **Basemap type** to `Existing Raster Imagery` and set **Input raster imagery**."
            ]
          },
          "Replace the placeholder text in **Map Title** and **Land Address**.",
          "Adjust the two grid intervals to suit the parcel size.",
          "Expand **Adjacent owners** and fill in the landowner names for each side that requires one.",
          "Check **Open Map?** and click **Run**."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "quick-landplot-1",
      "add-google-satellite-layer",
      "clip-basemap-by-boundary",
      "parcel-division-form"
    ]
  },
  {
    slug: "add-google-hybrid-satellite-layer",
    group: "basemap",
    name: "Add Google Hybrid Satellite Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Add Basemap ▸ Add Google Hybrid Satellite Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It adds the tile layer to the active map."
      }
    ],
    summary: {
      km: "បន្ថែមរូបភាពផ្កាយរណបរបស់ Google ដែលមានស្លាកទីតាំង និងខ្សែផ្លូវគូសពីលើ ទៅផែនទីជាស្រទាប់ក្រឡា XYZ។",
      en: "Adds Google's satellite imagery with place labels and road lines drawn over it to the active map as an XYZ tile layer."
    },
    body: [
      {
        type: "paragraph",
        text: "The labels make this the better choice for orientation and for checking that you are working in the right village or along the right road. For tracing features, the unlabelled [Add Google Satellite Layer](AddGoogleSatelliteLayer.md) is clearer."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. Clicking it creates the tile layer and adds it to the active map immediately.",
          "The layer is added with the name **Google Hybrid Satellite layer**. It arrives at the top of the drawing order, so move it to the bottom of the **Contents** pane to use it as a backdrop beneath your own layers.",
          "The tiles are served from Google's tile endpoint `https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}`. An internet connection is required whenever the map draws — the tiles are streamed, not stored in the project.",
          "Tiles are served in Web Mercator. ArcGIS Pro reprojects them on the fly when the map uses another coordinate system, which can soften the imagery slightly at large scales.",
          "Because this is a tile layer rather than a raster dataset, it cannot be used as the input to raster geoprocessing tools. To analyse imagery, add a raster dataset with [Add Raster To Map](../DataManagement/AddRasterToMap.md) instead.",
          "Review Google's terms of service before using these tiles in published maps or commercial deliverables.",
          "The tool reports an error if there is no active map."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Open or activate the map that needs the backdrop.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open **Quick Template**, point to **Add Basemap**, and click **Add Google Hybrid Satellite Layer**.",
          "In the **Contents** pane, drag the new **Google Hybrid Satellite layer** layer to the bottom of the drawing order."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-google-satellite-layer",
      "add-google-map-layer",
      "add-google-terrain-layer",
      "quick-landplot-2"
    ]
  },
  {
    slug: "add-google-map-layer",
    group: "basemap",
    name: "Add Google Map Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Add Basemap ▸ Add Google Map Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It adds the tile layer to the active map."
      }
    ],
    summary: {
      km: "បន្ថែមផែនទីផ្លូវស្តង់ដាររបស់ Google ទៅផែនទីជាស្រទាប់ក្រឡា XYZ។",
      en: "Adds Google's standard road map to the active map as an XYZ tile layer."
    },
    body: [
      {
        type: "paragraph",
        text: "A cartographic street map rather than imagery. Use it when the backdrop should show the road network and place names clearly, without the visual noise of aerial photography."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. Clicking it creates the tile layer and adds it to the active map immediately.",
          "The layer is added with the name **Google Map layer**. It arrives at the top of the drawing order, so move it to the bottom of the **Contents** pane to use it as a backdrop beneath your own layers.",
          "The tiles are served from Google's tile endpoint `https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}`. An internet connection is required whenever the map draws — the tiles are streamed, not stored in the project.",
          "Tiles are served in Web Mercator. ArcGIS Pro reprojects them on the fly when the map uses another coordinate system, which can soften the imagery slightly at large scales.",
          "Because this is a tile layer rather than a raster dataset, it cannot be used as the input to raster geoprocessing tools. To analyse imagery, add a raster dataset with [Add Raster To Map](../DataManagement/AddRasterToMap.md) instead.",
          "Review Google's terms of service before using these tiles in published maps or commercial deliverables.",
          "The tool reports an error if there is no active map."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Open or activate the map that needs the backdrop.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open **Quick Template**, point to **Add Basemap**, and click **Add Google Map Layer**.",
          "In the **Contents** pane, drag the new **Google Map layer** layer to the bottom of the drawing order."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-google-satellite-layer",
      "add-google-hybrid-satellite-layer",
      "add-google-terrain-layer",
      "to-google-map"
    ]
  },
  {
    slug: "add-google-satellite-layer",
    group: "basemap",
    name: "Add Google Satellite Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Add Basemap ▸ Add Google Satellite Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It adds the tile layer to the active map."
      }
    ],
    summary: {
      km: "បន្ថែមរូបភាពផ្កាយរណបរបស់ Google ដោយគ្មានស្លាក ឬផ្លូវ ទៅផែនទីជាស្រទាប់ក្រឡា XYZ។",
      en: "Adds Google's satellite imagery, without labels or roads to the active map as an XYZ tile layer."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this layer for digitising from imagery, where labels and road lines would obscure the features being traced. For imagery with place names and roads drawn over it, use [Add Google Hybrid Satellite Layer](AddGoogleHybridSatelliteLayer.md) instead."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. Clicking it creates the tile layer and adds it to the active map immediately.",
          "The layer is added with the name **Google Satellite layer**. It arrives at the top of the drawing order, so move it to the bottom of the **Contents** pane to use it as a backdrop beneath your own layers.",
          "The tiles are served from Google's tile endpoint `https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}`. An internet connection is required whenever the map draws — the tiles are streamed, not stored in the project.",
          "Tiles are served in Web Mercator. ArcGIS Pro reprojects them on the fly when the map uses another coordinate system, which can soften the imagery slightly at large scales.",
          "Because this is a tile layer rather than a raster dataset, it cannot be used as the input to raster geoprocessing tools. To analyse imagery, add a raster dataset with [Add Raster To Map](../DataManagement/AddRasterToMap.md) instead.",
          "Review Google's terms of service before using these tiles in published maps or commercial deliverables.",
          "The tool reports an error if there is no active map."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Open or activate the map that needs the backdrop.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open **Quick Template**, point to **Add Basemap**, and click **Add Google Satellite Layer**.",
          "In the **Contents** pane, drag the new **Google Satellite layer** layer to the bottom of the drawing order."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-google-hybrid-satellite-layer",
      "add-google-map-layer",
      "add-google-terrain-layer",
      "add-raster-to-map",
      "quick-landplot-2"
    ]
  },
  {
    slug: "add-google-terrain-layer",
    group: "basemap",
    name: "Add Google Terrain Layer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Data Creation ▸ Quick Template ▸ Add Basemap ▸ Add Google Terrain Layer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It adds the tile layer to the active map."
      }
    ],
    summary: {
      km: "បន្ថែមផែនទីភូមិសណ្ឋានរបស់ Google ដែលមានស្រមោលបង្ហាញកម្ពស់ ទៅផែនទីជាស្រទាប់ក្រឡា XYZ។",
      en: "Adds Google's terrain map, with shaded relief and contour-like hill shading to the active map as an XYZ tile layer."
    },
    body: [
      {
        type: "paragraph",
        text: "Use this layer to see the shape of the land behind your data. It is a cartographic rendering, not elevation data — for slope, contours, or profiles you need a digital elevation model, not this layer."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. Clicking it creates the tile layer and adds it to the active map immediately.",
          "The layer is added with the name **Google Terrain layer**. It arrives at the top of the drawing order, so move it to the bottom of the **Contents** pane to use it as a backdrop beneath your own layers.",
          "The tiles are served from Google's tile endpoint `https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}`. An internet connection is required whenever the map draws — the tiles are streamed, not stored in the project.",
          "Tiles are served in Web Mercator. ArcGIS Pro reprojects them on the fly when the map uses another coordinate system, which can soften the imagery slightly at large scales.",
          "Because this is a tile layer rather than a raster dataset, it cannot be used as the input to raster geoprocessing tools. To analyse imagery, add a raster dataset with [Add Raster To Map](../DataManagement/AddRasterToMap.md) instead.",
          "Review Google's terms of service before using these tiles in published maps or commercial deliverables.",
          "The tool reports an error if there is no active map."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Open or activate the map that needs the backdrop.",
          "On the **KGA Toolbox** tab, in the **Data Creation** group, open **Quick Template**, point to **Add Basemap**, and click **Add Google Terrain Layer**.",
          "In the **Contents** pane, drag the new **Google Terrain layer** layer to the bottom of the drawing order."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "add-google-satellite-layer",
      "add-google-map-layer",
      "elevation-profile-from-line-path",
      "spot-height"
    ]
  },
  {
    slug: "clip-basemap-by-boundary",
    group: "basemap",
    name: "Clip Basemap By Boundary",
    status: "planned",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: null,
    actsOn: [
      {
        type: "paragraph",
        text: "None. The tool collects no input in this release."
      }
    ],
    summary: {
      km: "គ្រោងកាត់ការបង្ហាញផែនទីមូលដ្ឋានតាមស្រទាប់ព្រំដែនដែលបានកំណត់។",
      en: "Intended to clip the basemap display to a specified boundary layer."
    },
    body: [
      {
        type: "note",
        tone: "warning",
        text: "**This tool is not yet implemented.** Clicking it displays the message *\"This feature will be available in a future update.\"* and nothing else happens. It is documented here because the button appears on the ribbon."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The button is present on the **Quick Template** menu but performs no work in this release.",
          "No parameters are collected and no dialog is shown — only the notice above."
        ]
      },
      {
        type: "subheading",
        text: "Achieving the same result today"
      },
      {
        type: "paragraph",
        text: "Until the tool ships, the display can be limited to a boundary by other means:"
      },
      {
        type: "list",
        items: [
          "**Clip the map frame.** In a layout, set the map frame's extent to the boundary layer, which limits what the frame draws.",
          "**Mask with a layer.** Add a polygon layer covering everything outside the boundary and place it above the basemap, so only the area of interest shows through.",
          "**Clip an actual raster.** If the backdrop is a raster dataset rather than a tile layer, clip it with **Clip Raster** or **Extract By Mask** from the **Basic Tool → Raster Tool** menu. Note that this does not work on the Google tile layers, which are streamed rather than stored."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "paragraph",
        text: "There is no working procedure in this release. See *Achieving the same result today* above."
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Not applicable — the tool performs no licensed work in this release."
      }
    ],
    environments: [],
    seeAlso: [
      "add-google-satellite-layer",
      "add-raster-to-map",
      "clip-multiple"
    ]
  },
  {
    slug: "to-google-earth-pro",
    group: "basemap",
    name: "To Google Earth Pro",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Go-to ▸ Maps ▸ To Google Earth Pro",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the active map view."
      }
    ],
    summary: {
      km: "នាំចេញទិដ្ឋភាពផែនទីបច្ចុប្បន្នជា KML រួចបើកវាក្នុងកម្មវិធី Google Earth Pro លើកុំព្យូទ័រ។",
      en: "Exports the current map view to KML and opens it in the Google Earth Pro desktop application."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the only Go-to tool that carries your actual layers across. The others open a website at the map location; this one hands Google Earth Pro the features themselves, so the data is draped over the imagery in 3D."
      }
    ],
    usage: [
      {
        type: "note",
        tone: "warning",
        text: "**Google Earth Pro must be installed.** The tool looks for `googleearth.exe` in the standard install locations: * `C:\\Program Files\\Google\\Google Earth Pro\\client\\googleearth.exe` * `C:\\Program Files (x86)\\Google\\Google Earth Pro\\client\\googleearth.exe` If it is installed elsewhere, the tool cannot launch it."
      },
      {
        type: "list",
        items: [
          "The tool has no dialog. It writes KML files into a bridge folder under `KGA_Toolbox\\GoogleEarthBridge` in the user profile, then launches Google Earth Pro on them.",
          "The KML is a snapshot. Editing the features in ArcGIS Pro afterwards does not update what Google Earth Pro is showing — run the tool again to refresh.",
          "Layers are exported in WGS 84, as KML requires. Data in a projected coordinate system is reprojected during export.",
          "The tool reports an error if there is no active map view."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Zoom and pan the map to the area you want to open.",
          "On the **KGA Toolbox** tab, in the unnamed **Go-to** group, open the **Maps** gallery and click **To Google Earth Pro**.",
          "The map view is exported to KML and Google Earth Pro opens with the features draped over the imagery.",
          "To refresh after editing, run the tool again."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "to-google-earth-web",
      "kml-handler",
      "import-kml-file"
    ]
  },
  {
    slug: "to-google-earth-web",
    group: "basemap",
    name: "To Google Earth Web",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Go-to ▸ Maps ▸ To Google Earth Web",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the active map view."
      }
    ],
    summary: {
      km: "បើក Google Earth Web ក្នុងកម្មវិធីរុករកលំនាំដើម នៅលើទិដ្ឋភាពផែនទីបច្ចុប្បន្ន ជាមួយកម្ពស់មើលដែលបានមកពីមាត្រដ្ឋានផែនទី។",
      en: "Opens Google Earth Web in the default browser, positioned over the current map view with a viewing altitude derived from the map scale."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it for a quick three-dimensional look at the terrain and buildings around the area you are mapping."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. It projects the map centre to WGS 84 and builds a Google Earth Web URL containing the latitude, longitude, altitude, and viewing distance.",
          "Unlike [To Google Map](ToGoogleMap.md), the current map extent does influence the view — the altitude and distance are derived from it, so Google Earth opens at a comparable scale.",
          "An internet connection and a browser that supports Google Earth Web are required.",
          "The tool reports an error if there is no active map view."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Zoom and pan the map to the area you want to open.",
          "On the **KGA Toolbox** tab, in the unnamed **Go-to** group, open the **Maps** gallery and click **To Google Earth Web**.",
          "Google Earth Web opens in the default browser, positioned over the map centre."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "to-google-earth-pro",
      "to-google-map",
      "to-open-street-map"
    ]
  },
  {
    slug: "to-google-map",
    group: "basemap",
    name: "To Google Map",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Go-to ▸ Maps ▸ To Google Map",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the active map view."
      }
    ],
    summary: {
      km: "បើក Google Maps ក្នុងកម្មវិធីរុករកលំនាំដើម ដោយផ្តោតលើកណ្តាលទិដ្ឋភាពផែនទីបច្ចុប្បន្ន។",
      en: "Opens Google Maps in the default browser, centred on the current map view."
    },
    body: [
      {
        type: "paragraph",
        text: "Use it to check what the current location looks like on Google's base data, or to obtain a shareable Google Maps link for a location you are working on."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. It takes the centre point of the active map view, projects it to WGS 84, and opens Google Maps at that latitude and longitude.",
          "Only the centre point is passed — the map scale is not carried across, so Google Maps opens at its own default zoom.",
          "An internet connection and a default browser are required.",
          "The tool reports an error if there is no active map view, or if the map centre cannot be projected to WGS 84."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Zoom and pan the map to the area you want to open.",
          "On the **KGA Toolbox** tab, in the unnamed **Go-to** group, open the **Maps** gallery and click **To Google Map**.",
          "Google Maps opens in the default browser at the map centre."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "to-google-earth-web",
      "to-google-earth-pro",
      "to-open-street-map",
      "add-google-map-layer"
    ]
  },
  {
    slug: "to-kga-geodigitizer",
    group: "basemap",
    name: "To KGA-Geodigitizer",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Go-to ▸ Maps ▸ To KGA-Geodigitizer",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the active map view."
      }
    ],
    summary: {
      km: "បើកគេហទំព័រ KGA-Geodigitizer នៅវិសាលភាពផែនទីបច្ចុប្បន្ន ហើយបង្កើតការធ្វើសមកាលកម្មឯកសារទ្វេទិស ដើម្បីឱ្យលក្ខណៈដែលគូសក្នុងកម្មវិធីរុករក ចូលមក geodatabase របស់គម្រោងដោយស្វ័យប្រវត្តិ។",
      en: "Opens the KGA-Geodigitizer website at the current map extent and establishes a two-way file sync, so features digitised in the browser are imported automatically into the active project geodatabase."
    },
    body: [
      {
        type: "paragraph",
        text: "Unlike the other Go-to buttons, which simply open a website at the map location, this one keeps a live link: draw in the browser, and the features appear in ArcGIS Pro."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. Clicking it reads the active map's extent, projects it to WGS 84, and opens `https://www.khmergrs.com/geodigitizer` centred on that location.",
          "**How the sync works.** The website writes a GeoJSON payload into a sync folder; a file watcher in ArcGIS Pro detects it and imports the features into the project geodatabase. The exchange uses sentinel files so a partially written payload is never imported:"
        ]
      },
      {
        type: "table",
        head: [
          "File",
          "Role"
        ],
        rows: [
          [
            "`kga_sync.geojson`",
            "The feature payload"
          ],
          [
            "`kga_sync.writing`",
            "Present while the website is writing; import is held off"
          ],
          [
            "`kga_sync.ready`",
            "Written when the payload is complete; import is triggered by this file"
          ],
          [
            "`kga_sync.heartbeat`",
            "Touched every second by ArcGIS Pro, so the website can tell the add-in is listening"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "**Save the project first.** The sync folder is resolved when sync starts: a saved project gets a `kga_sync` folder inside its home folder. An unsaved project falls back to a temporary location, so the link is less predictable. Save the project before clicking the button.",
          "The sync folder path is passed to the website as a URL parameter, so the browser page knows where to write. Both applications must therefore be on the same machine — this does not work with the website open on a phone or another computer.",
          "A previous implementation used a TCP connection, which Chrome now blocks under its Private Network Access rules. The file-based approach exists to work around that, which is why a shared local folder is required.",
          "The button reports an error if there is no active map, if the extent cannot be projected, or if the sync folder cannot be created."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Save the ArcGIS Pro project, so the sync folder is created inside the project's home folder.",
          "Zoom the map to the area you intend to digitise.",
          "On the **KGA Toolbox** tab, in the unnamed **Go-to** group, open the **Maps** gallery and click **To KGA-Geodigitizer**.",
          "The KGA-Geodigitizer site opens in the default browser, centred on the map extent. Allow the sync folder to be created if prompted.",
          "Digitise features in the browser and use the site's save or sync action.",
          "The features are imported into the active project geodatabase automatically. Switch back to ArcGIS Pro to see them."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "to-google-map",
      "kml-handler",
      "import-kml-file"
    ]
  },
  {
    slug: "to-living-atlas",
    group: "basemap",
    name: "To Living Atlas",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Go-to ▸ Maps ▸ To Living Atlas",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the active map view."
      }
    ],
    summary: {
      km: "បើកកម្មវិធីរុករកផែនទី ArcGIS Living Atlas of the World ក្នុងកម្មវិធីរុករកលំនាំដើម សម្រាប់ស្វែងរកផែនទី និងទិន្នន័យផ្លូវការដើម្បីបន្ថែមទៅគម្រោង។",
      en: "Opens the ArcGIS Living Atlas of the World map browser in the default browser, for finding authoritative maps and datasets to add to a project."
    },
    body: [
      {
        type: "paragraph",
        text: "Living Atlas is Esri's curated collection of basemaps, imagery, boundaries, and thematic layers."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog and does not use the map extent. It opens the Living Atlas browse page directly, filtered to maps.",
          "This differs from the other Go-to tools, which all pass the current map location to their target. Living Atlas is a catalogue, not a map view, so there is no location to pass.",
          "An internet connection and a default browser are required. Signing in with an ArcGIS account gives access to subscriber content."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Zoom and pan the map to the area you want to open.",
          "On the **KGA Toolbox** tab, in the unnamed **Go-to** group, open the **Maps** gallery and click **To Living Atlas**.",
          "The Living Atlas browse page opens in the default browser.",
          "Find a layer and add it to the project through the **Catalog** pane or the **Add Data** dialog."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "to-open-street-map",
      "add-google-satellite-layer",
      "add-raster-to-map"
    ]
  },
  {
    slug: "to-open-street-map",
    group: "basemap",
    name: "To OpenStreetMap",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Go-to ▸ Maps ▸ To OpenStreetMap",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters. It acts on the active map view."
      }
    ],
    summary: {
      km: "បើក OpenStreetMap ក្នុងកម្មវិធីរុករកលំនាំដើម ដោយផ្តោតលើកណ្តាលទិដ្ឋភាពផែនទីបច្ចុប្បន្ន និងកម្រិតពង្រីកដែលបានមកពីមាត្រដ្ឋានផែនទី ជាមួយសញ្ញាសម្គាល់នៅចំកណ្តាល។",
      en: "Opens OpenStreetMap in the default browser, centred on the current map view and at a zoom level derived from the map scale, with a marker at the map centre."
    },
    body: [
      {
        type: "paragraph",
        text: "Useful for checking community-mapped detail — road names, tracks, and points of interest — against your own data."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. It projects the map centre to WGS 84 and builds an OpenStreetMap URL carrying the marker position and a zoom level derived from the current map scale.",
          "The map scale is carried across, so OpenStreetMap opens at a comparable zoom rather than a default one.",
          "An internet connection and a default browser are required.",
          "The tool reports an error if there is no active map view, or if projection to WGS 84 fails."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Zoom and pan the map to the area you want to open.",
          "On the **KGA Toolbox** tab, in the unnamed **Go-to** group, open the **Maps** gallery and click **To OpenStreetMap**.",
          "OpenStreetMap opens in the default browser with a marker at the map centre."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "Requires an active KGA Toolbox license. The tool validates the license before running."
      }
    ],
    environments: [],
    seeAlso: [
      "to-google-map",
      "to-google-earth-web",
      "to-living-atlas"
    ]
  },
  {
    slug: "about",
    group: "product",
    name: "About",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Product ▸ About",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters."
      }
    ],
    summary: {
      km: "បើកផ្ទាំង About ដែលបង្ហាញកំណែ KGA Toolbox ដែលបានដំឡើង ស្ថានភាពអាជ្ញាបណ្ណ និងព័ត៌មានទំនាក់ទំនងសម្រាប់ជំនួយ។",
      en: "Opens the About window, showing the installed KGA Toolbox version, the license status, and contact details for support."
    },
    body: [
      {
        type: "paragraph",
        text: "This is the first place to look when a tool refuses to run: almost every tool in the toolbox validates the license before it does anything, so an expired or missing license explains most unexplained failures."
      }
    ],
    usage: [
      {
        type: "list",
        items: [
          "The window reports three license facts: All three read `Not Licensed` when no valid license is present."
        ]
      },
      {
        type: "table",
        head: [
          "Field",
          "Meaning"
        ],
        rows: [
          [
            "**Registered to**",
            "The name the license was issued to"
          ],
          [
            "**License**",
            "The license type or status"
          ],
          [
            "**Expired Date**",
            "When the license lapses"
          ]
        ]
      },
      {
        type: "list",
        items: [
          "The **Version** shown is the installed add-in version. Quote it in any support request.",
          "**Visit our sites** links open the Khmer GRS Academy web pages in the default browser.",
          "**Contact Admin** gives the support telephone number and contact links.",
          "The window is informational. It does not activate or renew a license — contact the administrator using the details shown."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Product** group, click **About**.",
          "Check the **License Information** section. If it reads `Not Licensed`, no licensed tool will run.",
          "Note the **Version** number before contacting support.",
          "Close the window with the **✕** button."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "This tool runs without a license — it is how license status is checked."
      }
    ],
    environments: [],
    seeAlso: [
      "update",
      "whats-new"
    ]
  },
  {
    slug: "update",
    group: "product",
    name: "Update",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Product ▸ Update",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters."
      }
    ],
    summary: {
      km: "ពិនិត្យថាតើមានកំណែ KGA Toolbox ថ្មីជាងនេះឬទេ ហើយបើមាន នឹងស្នើឱ្យទាញយក និងដំឡើង។",
      en: "Checks whether a newer version of KGA Toolbox is available and, if so, offers to download and install it."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "Clicking the button starts a check immediately. There is no dialog to fill in.",
          "The check is not silent: the result is reported whether or not an update was found, so clicking the button always tells you something. (The same check also runs automatically in the background, where it reports only when an update exists.)",
          "When an update is available, a download progress window appears while the new version is retrieved.",
          "An internet connection is required. The check fails with a message if the update service cannot be reached.",
          "ArcGIS Pro normally needs to be restarted for a newly installed add-in version to take effect."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "Save your project, since installing an update may require restarting ArcGIS Pro.",
          "On the **KGA Toolbox** tab, in the **Product** group, click **Update**.",
          "Wait for the check to finish. The result is reported either way.",
          "If an update is offered, accept it and let the download complete.",
          "Restart ArcGIS Pro, then confirm the new version in [About](About.md)."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "This tool runs without a license."
      }
    ],
    environments: [],
    seeAlso: [
      "about",
      "whats-new"
    ]
  },
  {
    slug: "whats-new",
    group: "product",
    name: "What's New",
    status: "full",
    youtubeId: null,
    interactive: true,
    toolType: "One-click command",
    ribbonPath: "KGA Toolbox ▸ Product ▸ What's New",
    actsOn: [
      {
        type: "paragraph",
        text: "This tool has no parameters."
      }
    ],
    summary: {
      km: "បើកទំព័រផលិតផល KGA Toolbox ក្នុងកម្មវិធីរុករកលំនាំដើម ជាកន្លែងផ្សាយកំណត់ត្រាចេញផ្សាយសម្រាប់កំណែបច្ចុប្បន្ន។",
      en: "Opens the KGA Toolbox product page in the default browser, where the release notes for the current version are published."
    },
    body: [],
    usage: [
      {
        type: "list",
        items: [
          "The tool has no dialog. Clicking it opens `https://www.khmergrs.com/kga-toolbox` in the default browser.",
          "The notes are published on the web rather than bundled with the add-in, so the page always reflects the latest release — which may be newer than the version installed. Check the installed version in [About](About.md) before assuming a described feature is present.",
          "An internet connection and a default browser are required."
        ]
      }
    ],
    parameters: [],
    steps: [
      {
        type: "steps",
        items: [
          "On the **KGA Toolbox** tab, in the **Product** group, click **What's New**.",
          "The product page opens in the default browser.",
          "Compare the version described there against the one shown in [About](About.md). If the page is ahead, run [Update](Update.md)."
        ]
      }
    ],
    licensing: [
      {
        type: "paragraph",
        text: "This tool runs without a license."
      }
    ],
    environments: [],
    seeAlso: [
      "about",
      "update"
    ]
  }
];

// Metadata basename -> slug, for DocsArcgis/RichText.
//
// The prose above keeps the metadata's own relative links verbatim
// (`LegalDescriptionBuilder.md`, `../QuickLabel/DisplayLineBearingAndDirection.md`),
// so the data file stays a faithful copy of the source. This is the lookup that
// turns either form into `/docs/arcgis/<slug>` at render time. It is emitted by
// the generator rather than recomputed in JS, so the slug rule exists once.

export const FILE_SLUGS = {
  CreateLineLayer: "create-line-layer",
  CreatePointLayer: "create-point-layer",
  CreatePolygonLayer: "create-polygon-layer",
  MigrateDataFromMDB: "migrate-data-from-mdb",
  PointToPolygon: "point-to-polygon",
  PolygonToBoundaryPoint: "polygon-to-boundary-point",
  PolygonToCentralPoint: "polygon-to-central-point",
  PolygonToLineMultiple: "polygon-to-line-multiple",
  PolygonToMapSeries: "polygon-to-map-series",
  QuickTemplateLine: "quick-template-line",
  QuickTemplatePoint: "quick-template-point",
  QuickTemplatePolygon: "quick-template-polygon",
  AddRasterToMap: "add-raster-to-map",
  ApplyExcelEdits: "apply-excel-edits",
  BatchAddField: "batch-add-field",
  BoundaryXYToExcel: "boundary-xy-to-excel",
  CopyFeatures: "copy-features",
  DetectOverlapAcrossLayer: "detect-overlap-across-layer",
  DetectOverlapGap: "detect-overlap-gap",
  EditTable: "edit-table",
  EditInExcel: "edit-in-excel",
  ExportToCAD: "export-to-cad",
  FilterSelection: "filter-selection",
  FindDuplicate: "find-duplicate",
  GenerateBoundaryLine: "generate-boundary-line",
  GenerateBoundaryPoint: "generate-boundary-point",
  GenerateBoundaryPointAndLine: "generate-boundary-point-and-line",
  GenerateLineVertices: "generate-line-vertices",
  GeneratePolygonCentralPoint: "generate-polygon-central-point",
  IDBasedCSVExporter: "id-based-csv-exporter",
  ImportKMLFile: "import-kml-file",
  KMLHandler: "kml-handler",
  KhmerFontConverter: "khmer-font-converter",
  SelectToEnterValue: "select-to-enter-value",
  ExcelEditorSettings: "excel-editor-settings",
  AddMultipleFields: "add-multiple-fields",
  AddValueToFields: "add-value-to-fields",
  AttributeReclassifier: "attribute-reclassifier",
  AttributeValueCombiner: "attribute-value-combiner",
  BatchExport: "batch-export",
  DatabaseStructureBuilder: "database-structure-builder",
  DefaultValueFiller: "default-value-filler",
  DirectionSelector: "direction-selector",
  FeaturePercentage: "feature-percentage",
  GeoDashboard: "geo-dashboard",
  IDGenerator: "id-generator",
  NearestFeatureDistance: "nearest-feature-distance",
  PivotTableBuilder: "pivot-table-builder",
  RenameField: "rename-field",
  ShapeMetrics: "shape-metrics",
  SmartExtract: "smart-extract",
  SmartSelect: "smart-select",
  StatisticsSummary: "statistics-summary",
  ValueSplitter: "value-splitter",
  ValueTypeConverter: "value-type-converter",
  DisplayArea: "display-area",
  DisplayLengthAndVertex: "display-length-and-vertex",
  DisplayLineBearingAndDirection: "display-line-bearing-and-direction",
  DisplayPointXYAndID: "display-point-xy-and-id",
  LabelControl: "label-control",
  ShowArea: "show-area",
  ShowLength: "show-length",
  ShowPointID: "show-point-id",
  BearingDistanceCalculator: "bearing-distance-calculator",
  BoundaryConflictCheck: "boundary-conflict-check",
  BoundaryLineBuilder: "boundary-line-builder",
  CoordinateListing: "coordinate-listing",
  CopyParcelToGDB: "copy-parcel-to-gdb",
  CornerPointBuilder: "corner-point-builder",
  DirectionAnalyzer: "direction-analyzer",
  DuplicateFinder: "duplicate-finder",
  FeatureCounter: "feature-counter",
  FieldFormatter: "field-formatter",
  LMAPLayer: "lmap-layer",
  LegalDescriptionBuilder: "legal-description-builder",
  MinWidthCheck: "min-width-check",
  NetworkBuilder: "network-builder",
  ParcelOverlapCheck: "parcel-overlap-check",
  ParcelAdjacency: "parcel-adjacency",
  ParcelCleaner: "parcel-cleaner",
  ParcelNumberAudit: "parcel-number-audit",
  ParcelSplitOptimizer: "parcel-split-optimizer",
  ParcelSplitTool: "parcel-split-tool",
  ShapeQualityCheck: "shape-quality-check",
  TriangulationBuilder: "triangulation-builder",
  TrimParcelByRoadBuffer: "trim-parcel-by-road-buffer",
  TrimParcelByRoadParallel: "trim-parcel-by-road-parallel",
  ClipMultiple: "clip-multiple",
  IndianToWGS84UTMConverter: "indian-to-wgs-84-utm-converter",
  MultiRingBuffer: "multi-ring-buffer",
  PercentCoverage: "percent-coverage",
  CutFill: "cut-fill",
  DirectionDistance: "direction-distance",
  ElevationProfileFromPointPath: "elevation-profile-from-point-path",
  ElevationProfileFromLinePath: "elevation-profile-from-line-path",
  FromReferencePointDirectionCalculation: "from-reference-point-direction-calculation",
  SpotHeight: "spot-height",
  BoundaryOverlapCheck: "boundary-overlap-check",
  AddFeatureClassToTopology: "add-feature-class-to-topology",
  PointOnBoundary: "point-on-boundary",
  TopologyCheck: "topology-check",
  ParcelDivisionForm: "parcel-division-form",
  QuickLandplot1: "quick-landplot-1",
  QuickLandplot2: "quick-landplot-2",
  AddGoogleHybridSatelliteLayer: "add-google-hybrid-satellite-layer",
  AddGoogleMapLayer: "add-google-map-layer",
  AddGoogleSatelliteLayer: "add-google-satellite-layer",
  AddGoogleTerrainLayer: "add-google-terrain-layer",
  ClipBasemapByBoundary: "clip-basemap-by-boundary",
  ToGoogleEarthPro: "to-google-earth-pro",
  ToGoogleEarthWeb: "to-google-earth-web",
  ToGoogleMap: "to-google-map",
  ToKGAGeodigitizer: "to-kga-geodigitizer",
  ToLivingAtlas: "to-living-atlas",
  ToOpenStreetMap: "to-open-street-map",
  About: "about",
  Update: "update",
  WhatsNew: "whats-new"
};

export const SLUGS = tools.map((tool) => tool.slug);

/** Tools only. The Product group holds product pages, not tools. */
export const TOOL_COUNT = tools.filter((tool) => tool.group !== "product").length;
/** Every metadata file gets a page, Product included: this is the route count. */
export const PAGE_COUNT = tools.length;

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

// The generator asserts all of this before writing the file; this re-checks it
// after any hand edit, since a bad slug is a 404 on a link already published.
// Stripped from production builds.
if (process.env.NODE_ENV !== "production") {
  const duplicates = SLUGS.filter((slug, i) => SLUGS.indexOf(slug) !== i);
  if (duplicates.length) console.error("[arcgisDocs] duplicate slugs:", duplicates);

  const orphans = tools.filter((tool) => !groups.some((group) => group.id === tool.group));
  if (orphans.length) console.error("[arcgisDocs] unknown group:", orphans.map((t) => t.slug));

  const empty = groups.filter((group) => !tools.some((tool) => tool.group === group.id));
  if (empty.length) console.error("[arcgisDocs] empty groups:", empty.map((g) => g.id));

  const dangling = tools.flatMap((tool) =>
    (tool.seeAlso ?? [])
      .filter((slug) => !SLUGS.includes(slug))
      .map((slug) => `${tool.slug} -> ${slug}`),
  );
  if (dangling.length) console.error("[arcgisDocs] dangling seeAlso:", dangling);
}
