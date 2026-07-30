export const PROJECT_STATUSES = [
  { slug: "all", label: { km: "ទាំងអស់", en: "All" } },
  { slug: "current", label: { km: "កំពុងដំណើរការ", en: "Current" } },
  { slug: "completed", label: { km: "បានបញ្ចប់", en: "Completed" } },
];

export const PROJECT_CATEGORIES = [
  { slug: "all", label: { km: "គម្រោងទាំងអស់", en: "All Projects" } },
  { slug: "social-affairs", label: { km: "សង្គមកិច្ច", en: "Social Affairs" } },
  { slug: "agriculture", label: { km: "កសិកម្ម", en: "Agriculture" } },
  { slug: "land-administration", label: { km: "រដ្ឋបាលដីធ្លី", en: "Land Administration" } },
  { slug: "infrastructure", label: { km: "ហេដ្ឋារចនាសម្ព័ន្ធ", en: "Infrastructure" } },
  { slug: "logistics", label: { km: "ភស្តុភារ", en: "Logistics" } },
];

export const projects = [
  {
    slug: "mosvy-arcgis-pro-data-management-map-creation",
    status: "completed",
    sortDate: "2023-08-01",
    category: "social-affairs",
    coverImage:
      "/kga_training_project/MoSVY_Training_pictures/photo_2026-07-29_14-45-50.jpg",
    coverMode: "photo",
    partnerOrClient:
      "Ministry of Social Affairs, Veterans and Youth Rehabilitation (MoSVY)",
    participantCount: 17,
    deliveryMode: "on-site",
    software: "ArcGIS Pro",
    trainingTopics: [
      "Spatial Data Management",
      "Map Creation",
      "Basic Spatial Analysis",
      "Geodatabase Management",
    ],
    tags: ["ArcGIS Pro", "social affairs", "spatial data", "map production"],
    km: {
      title:
        "មូលដ្ឋានគ្រឹះ ArcGIS Pro សម្រាប់ការគ្រប់គ្រងទិន្នន័យ និងការបង្កើតផែនទី",
      partnerOrClient:
        "ក្រសួងសង្គមកិច្ច អតីតយុទ្ធជន និងយុវនីតិសម្បទា (MoSVY)",
      dateRange: "សីហា ២០២៣",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាលជាក់ស្តែងអំពីការគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ ការបង្ហាញទិន្នន័យ និងការបង្កើតផែនទីសម្រាប់វិស័យសង្គមកិច្ច។",
      overview:
        "កម្មវិធីនេះជួយឱ្យមន្ត្រីជំនាញប្រើ ArcGIS Pro ដើម្បីរៀបចំ កែសម្រួល គ្រប់គ្រង និងវិភាគទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នាដែលពាក់ព័ន្ធនឹងសេវាសង្គម និងសហគមន៍ងាយរងគ្រោះ។",
      description: [
        { type: "heading", text: "អំពីការបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមបានសិក្សាពីការបង្កើតផែនទីដែលមានគុណភាពវិជ្ជាជីវៈ ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យភូមិសាស្ត្រ និងការវិភាគលំហកម្រិតមូលដ្ឋាន ដើម្បីគាំទ្រការធ្វើផែនការ ការរាយការណ៍ និងការសម្រេចចិត្តផ្អែកលើភស្តុតាង។",
        },
        { type: "heading", text: "ការអនុវត្តក្នុងវិស័យសង្គមកិច្ច" },
        {
          type: "paragraph",
          text:
            "លំហាត់អនុវត្តផ្តោតលើទិន្នន័យសេវាសង្គម អ្នកទទួលផល និងព្រំប្រទល់រដ្ឋបាល ដើម្បីជួយកំណត់តំបន់អាទិភាព និងកែលម្អការបែងចែកធនធាន។",
        },
      ],
      outcomes: [
        "គ្រប់គ្រងទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នាក្នុង ArcGIS Pro",
        "បង្កើតផែនទីច្បាស់លាស់សម្រាប់ការធ្វើផែនការ និងរបាយការណ៍",
        "អនុវត្តការវិភាគលំហមូលដ្ឋានដើម្បីកំណត់តំបន់ងាយរងគ្រោះ",
        "បញ្ចូលព័ត៌មានភូមិសាស្ត្រទៅក្នុងការតាមដាន និងការសម្រេចចិត្ត",
      ],
    },
    en: {
      title: "Basic ArcGIS Pro for Data Management and Map Creation",
      partnerOrClient:
        "Ministry of Social Affairs, Veterans and Youth Rehabilitation (MoSVY)",
      dateRange: "August 2023",
      deliveryModeLabel: "On-site",
      excerpt:
        "Practical training in geospatial data management, visualization, and map creation for professionals working in the social affairs sector.",
      overview:
        "This program equipped professionals with practical ArcGIS Pro skills to organize, edit, manage, and analyze spatial and attribute data related to social services and vulnerable communities.",
      description: [
        { type: "heading", text: "Training Focus" },
        {
          type: "paragraph",
          text:
            "Participants learned to create professional maps, manage geospatial databases, and perform basic spatial analysis to support planning, reporting, and evidence-based decision-making.",
        },
        { type: "heading", text: "Social Affairs Application" },
        {
          type: "paragraph",
          text:
            "Hands-on exercises used data related to social services, beneficiaries, and administrative boundaries to identify priority areas and improve resource allocation.",
        },
      ],
      outcomes: [
        "Manage spatial and attribute data in ArcGIS Pro",
        "Create clear maps for planning and reporting",
        "Apply basic spatial analysis to identify vulnerable areas",
        "Integrate geospatial information into monitoring and decision-making",
      ],
    },
  },
  {
    slug: "sbk-arcgis-pro-agricultural-data-spatial-analysis",
    status: "completed",
    sortDate: "2024-02-01",
    category: "agriculture",
    coverImage: null,
    coverMode: "online",
    partnerOrClient: "Dau Tu Saigon Binh (SBK) Co., Ltd.",
    participantCount: 5,
    deliveryMode: "online",
    software: "ArcGIS Pro",
    trainingTopics: [
      "Agricultural GIS",
      "Spatial Analysis",
      "Field Operations",
      "Imagery and Remote Sensing",
      "3D Visualization",
    ],
    tags: ["ArcGIS Pro", "agriculture", "remote sensing", "online training"],
    km: {
      title:
        "មូលដ្ឋានគ្រឹះ ArcGIS Pro សម្រាប់ការគ្រប់គ្រងទិន្នន័យកសិកម្ម និងការវិភាគទិន្នន័យ",
      partnerOrClient: "ក្រុមហ៊ុន Dau Tu Saigon Binh (SBK) Co., Ltd.",
      dateRange: "កុម្ភៈ ២០២៤",
      deliveryModeLabel: "បណ្តុះបណ្តាលតាមអនឡាញ",
      excerpt:
        "ការបណ្តុះបណ្តាលតាមអនឡាញអំពី ArcGIS Pro សម្រាប់ការធ្វើផែនការកសិកម្ម ការគ្រប់គ្រងដី និងការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យលំហ។",
      overview:
        "កម្មវិធីនេះផ្តល់ចំណេះដឹង និងជំនាញអនុវត្ត ArcGIS Pro ដល់អ្នកជំនាញផ្នែកអភិវឌ្ឍន៍កសិកម្ម ការគ្រប់គ្រងដី និងធនធានធម្មជាតិ។",
      description: [
        { type: "heading", text: "អំពីការបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមបានសិក្សាពីការរៀបចំមូលដ្ឋានទិន្នន័យភូមិសាស្ត្រ ការបង្កើតផែនទី ការវិភាគលំហ និងការប្រមូលទិន្នន័យទីវាលដោយប្រើបច្ចេកវិទ្យា GIS ចល័ត។",
        },
        { type: "heading", text: "ការអនុវត្តក្នុងវិស័យកសិកម្ម" },
        {
          type: "paragraph",
          text:
            "មាតិកាបានគ្របដណ្តប់លើការកែច្នៃរូបភាពផ្កាយរណប ការតាមដានដំណាំ ការធ្វើផែនការប្រើប្រាស់ដី ប្រព័ន្ធស្រោចស្រព និងការបង្ហាញទិន្នន័យជា 2D និង 3D។",
        },
      ],
      outcomes: [
        "គ្រប់គ្រងទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នាសម្រាប់គម្រោងកសិកម្ម",
        "អនុវត្តការវិភាគភាពសមស្របនៃដី និងការតាមដានធនធានកសិកម្ម",
        "ប្រើ GIS ចល័តសម្រាប់ការប្រមូល និងធ្វើសមកាលកម្មទិន្នន័យទីវាល",
        "វិភាគរូបភាពផ្កាយរណប និងបង្កើតការបង្ហាញទិន្នន័យ 3D",
      ],
    },
    en: {
      title:
        "Basic ArcGIS Pro for Agricultural Data Management and Spatial Analysis",
      partnerOrClient: "Dau Tu Saigon Binh (SBK) Co., Ltd.",
      dateRange: "February 2024",
      deliveryModeLabel: "Online",
      excerpt:
        "Online ArcGIS Pro training for agricultural planning, land management, and spatial-data-supported decision-making.",
      overview:
        "This program provided practical ArcGIS Pro knowledge for professionals involved in agricultural development, land management, and natural resource management.",
      description: [
        { type: "heading", text: "Training Focus" },
        {
          type: "paragraph",
          text:
            "Participants learned to organize geospatial databases, create maps, perform spatial analysis, and collect field data through mobile GIS workflows.",
        },
        { type: "heading", text: "Agricultural Application" },
        {
          type: "paragraph",
          text:
            "The modules covered satellite imagery, crop monitoring, land-use and irrigation planning, and agricultural visualization in 2D and 3D environments.",
        },
      ],
      outcomes: [
        "Manage spatial and attribute data for agricultural projects",
        "Evaluate land suitability and monitor agricultural resources",
        "Use mobile GIS for field data collection and synchronization",
        "Analyze satellite imagery and create 3D visualizations",
      ],
    },
  },
  {
    slug: "kampong-chhnang-arcgis-pro-land-administration",
    status: "completed",
    sortDate: "2025-05-01",
    category: "land-administration",
    coverImage:
      "/kga_training_project/KCH_Government_training_pictures/photo_2026-07-29_15-04-38.jpg",
    coverMode: "photo",
    partnerOrClient: "Kampong Chhnang Provincial Administration",
    participantCount: 15,
    deliveryMode: "on-site",
    software: "ArcGIS Pro",
    trainingTopics: [
      "Land Administration",
      "Geodatabase Management",
      "Data QA/QC",
      "Operational Mapping",
    ],
    tags: ["ArcGIS Pro", "land administration", "cadastral data", "QA/QC"],
    km: {
      title:
        "មូលដ្ឋានគ្រឹះ ArcGIS Pro សម្រាប់ការគ្រប់គ្រងទិន្នន័យក្នុងគម្រោងរដ្ឋបាលដីធ្លី",
      partnerOrClient: "រដ្ឋបាលខេត្តកំពង់ឆ្នាំង",
      dateRange: "ឧសភា ២០២៥",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាល ArcGIS Pro សម្រាប់ការបង្កើត កែសម្រួល និងត្រួតពិនិត្យគុណភាពទិន្នន័យដីធ្លី និងសុរិយោដី។",
      overview:
        "កម្មវិធីនេះពង្រឹងជំនាញ GIS សម្រាប់កម្មវិធីអនុវិស័យរដ្ឋបាលដីធ្លី ដោយផ្តោតលើលំហូរការងារទិន្នន័យលំហ និងគុណភាពព័ត៌មានសុរិយោដី។",
      description: [
        { type: "heading", text: "ការគ្រប់គ្រងទិន្នន័យដីធ្លី" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមបានអនុវត្តការបង្កើត feature ការកែសម្រួល attribute ការគ្រប់គ្រង geodatabase និងការផលិតផែនទីសម្រាប់គាំទ្រការចុះបញ្ជីដីធ្លី។",
        },
        { type: "heading", text: "ការធានា និងត្រួតពិនិត្យគុណភាព" },
        {
          type: "paragraph",
          text:
            "ការបណ្តុះបណ្តាលបានណែនាំការត្រួតពិនិត្យ topology, attribute, geometry, feature ស្ទួន ទំនាក់ទំនងលំហ និងភាពត្រឹមត្រូវនៃកូអរដោនេ។",
        },
      ],
      outcomes: [
        "បង្កើត និងថែទាំទិន្នន័យដីធ្លី និងសុរិយោដី",
        "គ្រប់គ្រង geodatabase និងសំណុំទិន្នន័យ GIS តាមស្តង់ដារ",
        "រកឃើញ និងកែកំហុសទិន្នន័យលំហ និង attribute",
        "ផលិតផែនទីប្រតិបត្តិការប្រចាំថ្ងៃសម្រាប់ការងារទីវាល",
      ],
    },
    en: {
      title:
        "Foundation of Using ArcGIS Pro for Data Management in Land Administration Projects",
      partnerOrClient: "Kampong Chhnang Provincial Administration",
      dateRange: "May 2025",
      deliveryModeLabel: "On-site",
      excerpt:
        "ArcGIS Pro training for creating, editing, managing, and quality-checking land administration and cadastral data.",
      overview:
        "This program strengthened GIS skills for the Land Administration Sub-Sector Program, focusing on spatial-data workflows and the quality of cadastral information.",
      description: [
        { type: "heading", text: "Land Data Management" },
        {
          type: "paragraph",
          text:
            "Participants practiced feature creation, attribute editing, geodatabase management, and map production to support land registration activities.",
        },
        { type: "heading", text: "Quality Assurance and Control" },
        {
          type: "paragraph",
          text:
            "The training introduced topology, attribute, geometry, duplicate-feature, spatial-relationship, and coordinate-accuracy validation methods.",
        },
      ],
      outcomes: [
        "Create and maintain land administration and cadastral data",
        "Manage geodatabases and standardized GIS datasets",
        "Identify and correct spatial and attribute data errors",
        "Produce daily operational maps for field activities",
      ],
    },
  },
  {
    slug: "tcm-sewage-drainage-maintenance-gis-training",
    status: "current",
    sortDate: "2026-07-05",
    category: "infrastructure",
    coverImage:
      "/kga_training_project/TCM_Training_Pictures/photo_2026-07-30_08-48-05.jpg",
    coverMode: "photo",
    partnerOrClient: "TCM Engineering Company Ltd.",
    participantCount: 5,
    deliveryMode: "on-site",
    software: "ArcGIS Pro",
    trainingTopics: [
      "Infrastructure Asset Management",
      "Field Inspection",
      "Preventive Maintenance",
      "GIS Dashboards",
    ],
    tags: ["ArcGIS Pro", "sewage", "drainage", "asset management"],
    km: {
      title:
        "វគ្គបណ្តុះបណ្តាលស្តីពីការថែទាំប្រព័ន្ធលូទឹកស្អុយ និងប្រព័ន្ធលូបង្ហូរទឹក ដោយប្រើ ArcGIS Pro",
      partnerOrClient: "ក្រុមហ៊ុន TCM Engineering Company Ltd.",
      dateRange: "៥ កក្កដា ២០២៦",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាល GIS និង ArcGIS Pro សម្រាប់ការគ្រប់គ្រង ការត្រួតពិនិត្យ និងការថែទាំទ្រព្យសម្បត្តិប្រព័ន្ធលូ និងបង្ហូរទឹក។",
      overview:
        "កម្មវិធីនេះបញ្ចូលគោលការណ៍ GIS ជាមួយលំហាត់អនុវត្ត ដើម្បីកែលម្អការគ្រប់គ្រងទ្រព្យសម្បត្តិហេដ្ឋារចនាសម្ព័ន្ធ និងការធ្វើផែនការថែទាំ។",
      description: [
        { type: "heading", text: "លំហូរការងារ GIS សម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមបានអនុវត្តការបង្កើត និងកែសម្រួលទិន្នន័យ vector ការគ្រប់គ្រង attribute ការស្វែងរកទិន្នន័យ និងការធ្វើផែនទីបណ្តាញលូ និងបង្ហូរទឹក។",
        },
        { type: "heading", text: "ការត្រួតពិនិត្យ និងថែទាំ" },
        {
          type: "paragraph",
          text:
            "មាតិកាបានគ្របដណ្តប់លើការត្រួតពិនិត្យទីវាល ការកំណត់បញ្ហាហេដ្ឋារចនាសម្ព័ន្ធ ការបញ្ចូលទិន្នន័យទៅមូលដ្ឋានទិន្នន័យកណ្ដាល និងការធ្វើផែនការថែទាំបង្ការ។",
        },
      ],
      outcomes: [
        "បង្កើត និងថែទាំទិន្នន័យទ្រព្យសម្បត្តិប្រព័ន្ធលូ និងបង្ហូរទឹក",
        "អនុវត្តការត្រួតពិនិត្យទីវាល និងកំណត់បញ្ហាហេដ្ឋារចនាសម្ព័ន្ធ",
        "បញ្ចូលទិន្នន័យទីវាលទៅមូលដ្ឋានទិន្នន័យ GIS កណ្ដាល",
        "បង្កើតផែនទី dashboard និងរបាយការណ៍សម្រាប់ការថែទាំ",
      ],
    },
    en: {
      title: "On-Site Sewage & Drainage System Maintenance Training",
      partnerOrClient: "TCM Engineering Company Ltd.",
      dateRange: "5 July 2026",
      deliveryModeLabel: "On-site",
      excerpt:
        "GIS and ArcGIS Pro training for managing, inspecting, and maintaining sewage and drainage system assets.",
      overview:
        "This program combined GIS fundamentals with practical exercises to improve infrastructure asset management and preventive-maintenance planning.",
      description: [
        { type: "heading", text: "Infrastructure GIS Workflow" },
        {
          type: "paragraph",
          text:
            "Participants practiced vector-data creation and editing, attribute management, querying, and mapping for sewage and drainage network assets.",
        },
        { type: "heading", text: "Inspection and Maintenance" },
        {
          type: "paragraph",
          text:
            "The training covered field inspections, infrastructure fault identification, centralized database integration, and preventive-maintenance planning.",
        },
      ],
      outcomes: [
        "Create and maintain sewage and drainage asset data",
        "Conduct field inspections and identify infrastructure faults",
        "Integrate field data into a centralized GIS database",
        "Create maps, dashboards, and maintenance reports",
      ],
    },
  },
  {
    slug: "jica-qgis-logistics-project-monitoring",
    status: "current",
    sortDate: "2026-07-29",
    category: "logistics",
    coverImage:
      "/kga_training_project/JICA_Ttraining_Pictures/photo_2026-07-30_08-46-26.jpg",
    coverMode: "photo",
    partnerOrClient: "Oriental Consultants Global Co., Ltd.",
    fundingAgency: "Japan International Cooperation Agency (JICA)",
    participantCount: 7,
    deliveryMode: "on-site",
    software: "QGIS",
    trainingTopics: [
      "Logistics Infrastructure",
      "Spatial Data Management",
      "WKT Data Integration",
      "Project Monitoring Dashboards",
    ],
    tags: ["QGIS", "JICA", "logistics", "project monitoring"],
    km: {
      title:
        "ការពង្រឹងសមត្ថភាពលើការប្រើប្រាស់ QGIS សម្រាប់ការគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ និងការតាមដានគម្រោងភស្តុភារ",
      partnerOrClient: "Oriental Consultants Global Co., Ltd.",
      fundingAgency: "ទីភ្នាក់ងារសហប្រតិបត្តិការអន្តរជាតិជប៉ុន (JICA)",
      dateRange: "២៩ កក្កដា ២០២៦",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាល QGIS សម្រាប់ការគ្រប់គ្រងទិន្នន័យហេដ្ឋារចនាសម្ព័ន្ធដឹកជញ្ជូន និងការរៀបចំទិន្នន័យសម្រាប់ dashboard តាមដានគម្រោង។",
      overview:
        "កម្មវិធីនេះពង្រឹងជំនាញ QGIS សម្រាប់ការគ្រប់គ្រងទិន្នន័យលំហ និងការតាមដានគម្រោងភស្តុភារ ដោយមានការគាំទ្រថវិកាពី JICA។",
      description: [
        { type: "heading", text: "ការគ្រប់គ្រងទិន្នន័យភស្តុភារ" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមបានអនុវត្តការបង្កើត និងកែសម្រួលទិន្នន័យ vector ការគ្រប់គ្រង attribute ការស្វែងរក និងវិភាគលំហ និងការធ្វើផែនទីសម្រាប់ផ្លូវ ស្ពាន និងទីតាំងភស្តុភារ។",
        },
        { type: "heading", text: "ការតភ្ជាប់ទៅប្រព័ន្ធតាមដាន" },
        {
          type: "paragraph",
          text:
            "ការបណ្តុះបណ្តាលបានបង្ហាញពីការបម្លែង feature ទៅទម្រង់ WKT ការរៀបចំទិន្នន័យតាមស្តង់ដារ និងការតភ្ជាប់ជាមួយ Excel, Google Sheets និង dashboard តាមដានគម្រោង។",
        },
      ],
      outcomes: [
        "បង្កើត និងថែទាំទិន្នន័យផ្លូវ ស្ពាន និងហេដ្ឋារចនាសម្ព័ន្ធភស្តុភារ",
        "អនុវត្ត spatial query និង vector analysis សម្រាប់ការតាមដានគម្រោង",
        "បម្លែងទិន្នន័យ GIS ទៅទម្រង់ WKT សម្រាប់ភ្ជាប់មូលដ្ឋានទិន្នន័យ",
        "ផលិតផែនទីពីរភាសា និងសំណុំទិន្នន័យសម្រាប់ dashboard",
      ],
    },
    en: {
      title:
        "Capacity Building on QGIS for Spatial Data Management and Logistics Project Monitoring",
      partnerOrClient: "Oriental Consultants Global Co., Ltd.",
      fundingAgency: "Japan International Cooperation Agency (JICA)",
      dateRange: "29 July 2026",
      deliveryModeLabel: "On-site",
      excerpt:
        "QGIS training for managing transportation infrastructure data and preparing dashboard-ready datasets for project monitoring.",
      overview:
        "This JICA-funded program strengthened QGIS skills for spatial-data management and logistics project monitoring.",
      description: [
        { type: "heading", text: "Logistics Data Management" },
        {
          type: "paragraph",
          text:
            "Participants practiced vector creation and editing, attribute management, spatial querying and analysis, and mapping for roads, bridges, and logistics facilities.",
        },
        { type: "heading", text: "Monitoring-System Integration" },
        {
          type: "paragraph",
          text:
            "The training covered WKT conversion, standardized data preparation, and integration with Excel, Google Sheets, and project-monitoring dashboards.",
        },
      ],
      outcomes: [
        "Create and maintain roads, bridges, and logistics infrastructure data",
        "Apply spatial queries and vector analysis to project monitoring",
        "Convert GIS features to WKT for database integration",
        "Produce bilingual maps and dashboard-ready datasets",
      ],
    },
  },
];

export function getLocalizedProject(project, language = "km") {
  if (!project) return null;
  const localized = project[language] || project.km || project.en;
  return {
    ...project,
    ...localized,
  };
}

export function getLocalizedProjects(language = "km") {
  return [...projects]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .map((project) => getLocalizedProject(project, language));
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug, category, limit = 3) {
  const sameCategory = projects.filter(
    (project) => project.slug !== slug && project.category === category
  );
  const otherProjects = projects.filter(
    (project) => project.slug !== slug && project.category !== category
  );

  return [...sameCategory, ...otherProjects].slice(0, limit);
}

export function getProjectStatusLabel(slug, language = "km") {
  return (
    PROJECT_STATUSES.find((status) => status.slug === slug)?.label?.[language] ||
    slug
  );
}

export function getProjectCategoryLabel(slug, language = "km") {
  return (
    PROJECT_CATEGORIES.find((category) => category.slug === slug)?.label?.[
      language
    ] || slug
  );
}
