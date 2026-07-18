export const PROJECT_STATUSES = [
  { slug: "all", label: { km: "ទាំងអស់", en: "All" }, color: "orange" },
  { slug: "current", label: { km: "កំពុងដំណើរការ", en: "Current" }, color: "green" },
  { slug: "completed", label: { km: "បានបញ្ចប់", en: "Completed" }, color: "blue" },
];

export const PROJECT_CATEGORIES = [
  { slug: "all", label: { km: "គម្រោងទាំងអស់", en: "All Projects" }, color: "orange" },
  { slug: "gis-foundation", label: { km: "GIS មូលដ្ឋាន", en: "GIS Foundation" }, color: "blue" },
  { slug: "professional-gis", label: { km: "GIS វិជ្ជាជីវៈ", en: "Professional GIS" }, color: "purple" },
  { slug: "data-management", label: { km: "គ្រប់គ្រងទិន្នន័យ", en: "Data Management" }, color: "green" },
  { slug: "organization-training", label: { km: "បណ្តុះបណ្តាលអង្គការ", en: "Organization Training" }, color: "red" },
];

export const projects = [
  {
    slug: "arcgis-pro-foundation-organization-training",
    status: "current",
    category: "professional-gis",
    coverImage: "/gallery/1.jpg",
    dateRange: "2026",
    location: "Phnom Penh, Cambodia",
    partnerOrClient: "Placeholder Organization Partner",
    participantCount: 24,
    trainingTopics: ["ArcGIS Pro", "Spatial Analysis", "Map Production", "GIS Data Management"],
    tags: ["ArcGIS Pro", "training", "professional GIS", "map production"],
    km: {
      title: "គម្រោងបណ្តុះបណ្តាល ArcGIS Pro សម្រាប់អង្គការ",
      excerpt:
        "គម្រោងបណ្តុះបណ្តាលជំនាញ ArcGIS Pro សម្រាប់ក្រុមការងារអង្គការ ដោយផ្តោតលើការផលិតផែនទី ការវិភាគទិន្នន័យ និងការគ្រប់គ្រងទិន្នន័យ GIS។",
      overview:
        "គម្រោងនេះត្រូវបានរៀបចំឡើងដើម្បីជួយក្រុមការងារបង្កើនសមត្ថភាពប្រើប្រាស់ ArcGIS Pro ក្នុងការងារផែនទីប្រចាំថ្ងៃ និងការសម្រេចចិត្តផ្អែកលើទិន្នន័យភូមិសាស្ត្រ។",
      description: [
        { type: "heading", text: "គោលបំណងបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមរៀនពីការរៀបចំ project, ការគ្រប់គ្រង layer, ការបង្កើតផែនទីត្រឹមត្រូវ និងការប្រើប្រាស់ geoprocessing tools សំខាន់ៗសម្រាប់ការងារអនុវត្ត។",
        },
        { type: "heading", text: "វិធីសាស្ត្របង្រៀន" },
        {
          type: "paragraph",
          text:
            "ថ្នាក់រៀនប្រើការអនុវត្តជាក់ស្តែងជាចម្បង ដោយមានលំហាត់ផ្អែកលើទិន្នន័យគំរូ និង workflow ដែលស្រដៀងនឹងការងារពិតរបស់អ្នកចូលរួម។",
        },
      ],
      outcomes: [
        "បង្កើត និងរៀបចំផែនទីដោយប្រើ ArcGIS Pro",
        "អនុវត្ត spatial analysis សម្រាប់សំណួរការងារជាក់ស្តែង",
        "រៀបចំទិន្នន័យ GIS ឱ្យមានស្តង់ដារ និងងាយចែករំលែក",
      ],
    },
    en: {
      title: "ArcGIS Pro Training Project for an Organization",
      excerpt:
        "A professional ArcGIS Pro training project for an organization team, focused on map production, spatial analysis, and GIS data management.",
      overview:
        "This project helps a working team strengthen practical ArcGIS Pro skills for daily mapping tasks and geospatial data-driven decision making.",
      description: [
        { type: "heading", text: "Training Objective" },
        {
          type: "paragraph",
          text:
            "Participants learn project setup, layer management, accurate map production, and essential geoprocessing tools for practical GIS workflows.",
        },
        { type: "heading", text: "Teaching Approach" },
        {
          type: "paragraph",
          text:
            "The course is built around hands-on practice, sample datasets, and workflows similar to the participants' real operational needs.",
        },
      ],
      outcomes: [
        "Create and organize maps with ArcGIS Pro",
        "Apply spatial analysis to practical work questions",
        "Prepare standardized GIS data for sharing and reuse",
      ],
    },
  },
  {
    slug: "qgis-foundation-university-students",
    status: "completed",
    category: "gis-foundation",
    coverImage: "/gallery/4.jpg",
    dateRange: "2025",
    location: "Phnom Penh, Cambodia",
    partnerOrClient: "Placeholder Student Cohort",
    participantCount: 32,
    trainingTopics: ["QGIS", "GIS Fundamentals", "Vector Data", "Cartography"],
    tags: ["QGIS", "students", "GIS foundation", "cartography"],
    km: {
      title: "គម្រោងបណ្តុះបណ្តាល QGIS មូលដ្ឋានសម្រាប់និស្សិត",
      excerpt:
        "វគ្គបណ្តុះបណ្តាល QGIS មូលដ្ឋានសម្រាប់និស្សិត ដែលចាប់ផ្តើមពីគំនិត GIS រហូតដល់ការបង្កើតផែនទី និងការគ្រប់គ្រងទិន្នន័យ vector។",
      overview:
        "គម្រោងនេះជួយនិស្សិតចាប់ផ្តើមជាមួយ GIS ដោយប្រើ QGIS ដែលជាកម្មវិធីឥតគិតថ្លៃ និងអាចអនុវត្តបានក្នុងការសិក្សា និងការងារស្រាវជ្រាវ។",
      description: [
        { type: "heading", text: "ខ្លឹមសារសំខាន់" },
        {
          type: "paragraph",
          text:
            "មាតិកាគ្របដណ្តប់លើគោលការណ៍ GIS, coordinate reference systems, vector data, attribute table, symbology, labeling និង layout map។",
        },
        { type: "heading", text: "ការអនុវត្ត" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមអនុវត្តលើលំហាត់តូចៗជាបន្តបន្ទាប់ ដើម្បីបង្កើតជំនាញពីមូលដ្ឋានទៅកាន់លទ្ធផលផែនទីដែលអាចប្រើប្រាស់បាន។",
        },
      ],
      outcomes: [
        "យល់ពីគំនិត GIS និងប្រព័ន្ធកូអរដោនេ",
        "បង្កើត និងកែសម្រួលទិន្នន័យ vector ក្នុង QGIS",
        "ផលិតផែនទីមូលដ្ឋានសម្រាប់របាយការណ៍ និងការសិក្សា",
      ],
    },
    en: {
      title: "QGIS Foundation Training Project for University Students",
      excerpt:
        "A beginner-friendly QGIS training project for students, moving from GIS concepts to map creation and vector data management.",
      overview:
        "This project helps students begin practical GIS work with QGIS, a free platform they can continue using for study and research.",
      description: [
        { type: "heading", text: "Core Content" },
        {
          type: "paragraph",
          text:
            "The training covers GIS principles, coordinate reference systems, vector data, attribute tables, symbology, labeling, and map layouts.",
        },
        { type: "heading", text: "Practice" },
        {
          type: "paragraph",
          text:
            "Participants complete progressive exercises that build from basic concepts to usable map outputs.",
        },
      ],
      outcomes: [
        "Understand GIS concepts and coordinate systems",
        "Create and edit vector data in QGIS",
        "Produce basic maps for reports and study work",
      ],
    },
  },
  {
    slug: "gis-data-management-public-sector",
    status: "completed",
    category: "data-management",
    coverImage: "/gallery/7.jpg",
    dateRange: "2024",
    location: "Cambodia",
    partnerOrClient: "Placeholder Public Sector Team",
    participantCount: 18,
    trainingTopics: ["Data Cleaning", "Geodatabase", "Topology", "Quality Control"],
    tags: ["data management", "topology", "quality control", "geodatabase"],
    km: {
      title: "គម្រោងបណ្តុះបណ្តាលការគ្រប់គ្រងទិន្នន័យ GIS",
      excerpt:
        "គម្រោងបណ្តុះបណ្តាលសម្រាប់ក្រុមការងារផ្នែកសាធារណៈ ដោយផ្តោតលើការរៀបចំ សម្អាត និងត្រួតពិនិត្យគុណភាពទិន្នន័យ GIS។",
      overview:
        "គម្រោងនេះផ្តោតលើការកែលម្អ workflow គ្រប់គ្រងទិន្នន័យ ដើម្បីឱ្យទិន្នន័យមានភាពត្រឹមត្រូវ ស្របស្តង់ដារ និងងាយស្រួលប្រើបន្ត។",
      description: [
        { type: "heading", text: "បញ្ហាដែលត្រូវដោះស្រាយ" },
        {
          type: "paragraph",
          text:
            "ក្រុមការងារត្រូវការវិធីសាស្ត្រដែលច្បាស់លាស់សម្រាប់រៀបចំ dataset, ពិនិត្យ topology errors, បំពេញ attribute និងរៀបចំទិន្នន័យសម្រាប់ចែករំលែក។",
        },
        { type: "heading", text: "លំហូរការងារ" },
        {
          type: "paragraph",
          text:
            "ការបណ្តុះបណ្តាលបង្ហាញពីការរៀបចំ folder structure, naming convention, geodatabase, topology rules និង quality-control checklist។",
        },
      ],
      outcomes: [
        "រៀបចំ dataset ឱ្យមានស្តង់ដារច្បាស់លាស់",
        "រកឃើញ និងកែសម្រួលកំហុស topology",
        "បង្កើត checklist សម្រាប់ការត្រួតពិនិត្យគុណភាពទិន្នន័យ",
      ],
    },
    en: {
      title: "GIS Data Management Training Project",
      excerpt:
        "A public-sector training project focused on organizing, cleaning, and quality-checking GIS data.",
      overview:
        "This project improves data management workflows so spatial data becomes more accurate, standardized, and reusable.",
      description: [
        { type: "heading", text: "Problem to Solve" },
        {
          type: "paragraph",
          text:
            "The team needed a clearer method for organizing datasets, checking topology errors, completing attributes, and preparing data for sharing.",
        },
        { type: "heading", text: "Workflow" },
        {
          type: "paragraph",
          text:
            "The training introduces folder structures, naming conventions, geodatabases, topology rules, and quality-control checklists.",
        },
      ],
      outcomes: [
        "Organize datasets with clear standards",
        "Find and correct topology errors",
        "Create a checklist for GIS data quality control",
      ],
    },
  },
  {
    slug: "remote-sensing-and-mapping-workshop",
    status: "completed",
    category: "organization-training",
    coverImage: "/gallery/12.jpg",
    dateRange: "2023",
    location: "Cambodia",
    partnerOrClient: "Placeholder Training Partner",
    participantCount: 20,
    trainingTopics: ["Remote Sensing", "Satellite Imagery", "Land Cover", "Map Layout"],
    tags: ["remote sensing", "satellite imagery", "mapping", "land cover"],
    km: {
      title: "គម្រោងសិក្ខាសាលា Remote Sensing និងការផលិតផែនទី",
      excerpt:
        "សិក្ខាសាលាអនុវត្តស្តីពីការប្រើប្រាស់រូបភាពផ្កាយរណប ការបកស្រាយ land cover និងការផលិតផែនទីសម្រាប់ការងារគម្រោង។",
      overview:
        "គម្រោងនេះផ្តល់ការណែនាំជាក់ស្តែងដល់អ្នកចូលរួមក្នុងការយល់ពីទិន្នន័យ satellite image និងការប្រើប្រាស់វាសម្រាប់ការវិភាគ និងបង្ហាញលទ្ធផលផែនទី។",
      description: [
        { type: "heading", text: "មាតិកាសិក្ខាសាលា" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមរៀនពីប្រភពរូបភាពផ្កាយរណប ការរៀបចំ image, ការបកស្រាយ land cover និងការបង្កើត map layout សម្រាប់បង្ហាញលទ្ធផល។",
        },
        { type: "heading", text: "លទ្ធផលអនុវត្ត" },
        {
          type: "paragraph",
          text:
            "នៅចុងសិក្ខាសាលា អ្នកចូលរួមអាចរៀបចំផែនទីសាមញ្ញពីរូបភាពផ្កាយរណប និងពន្យល់អំពីលទ្ធផលដែលបានបង្ហាញ។",
        },
      ],
      outcomes: [
        "យល់ពីប្រភព និងប្រភេទរូបភាពផ្កាយរណប",
        "អនុវត្តការបកស្រាយ land cover មូលដ្ឋាន",
        "បង្កើតផែនទីសម្រាប់បង្ហាញលទ្ធផល remote sensing",
      ],
    },
    en: {
      title: "Remote Sensing and Map Production Workshop",
      excerpt:
        "A practical workshop on satellite imagery, land-cover interpretation, and project-ready map production.",
      overview:
        "This workshop introduces participants to satellite image data and how to use it for analysis and map-based communication.",
      description: [
        { type: "heading", text: "Workshop Content" },
        {
          type: "paragraph",
          text:
            "Participants learn about satellite imagery sources, image preparation, land-cover interpretation, and map layouts for communicating results.",
        },
        { type: "heading", text: "Practical Output" },
        {
          type: "paragraph",
          text:
            "By the end of the workshop, participants can prepare simple satellite-image maps and explain the information shown in them.",
        },
      ],
      outcomes: [
        "Understand common satellite imagery sources and types",
        "Practice basic land-cover interpretation",
        "Create maps for remote-sensing outputs",
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
  return projects.map((project) => getLocalizedProject(project, language));
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug, category, limit = 3) {
  return projects
    .filter((project) => project.slug !== slug && project.category === category)
    .slice(0, limit);
}

export function getProjectStatusLabel(slug, language = "km") {
  return PROJECT_STATUSES.find((status) => status.slug === slug)?.label?.[language] || slug;
}

export function getProjectCategoryLabel(slug, language = "km") {
  return PROJECT_CATEGORIES.find((category) => category.slug === slug)?.label?.[language] || slug;
}
