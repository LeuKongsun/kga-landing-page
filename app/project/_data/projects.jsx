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
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "យាប ម៉ាលីណូ ប្រធានការិយាល័យ",
      dateRange: "សីហា ២០២៣",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាលជាក់ស្តែងអំពីការគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ ការបង្ហាញទិន្នន័យ និងការបង្កើតផែនទីសម្រាប់វិស័យសង្គមកិច្ច។",
      overview:
        "កម្មវិធីបណ្តុះបណ្តាលនេះណែនាំអ្នកចូលរួមអំពីគោលគំនិតមូលដ្ឋាន និងការអនុវត្តជាក់ស្តែងនៃ ArcGIS Pro សម្រាប់ការគ្រប់គ្រងទិន្នន័យលំហ ការបង្ហាញទិន្នន័យ និងការផលិតផែនទី។ វគ្គសិក្សានេះត្រូវបានរៀបចំឡើងជាពិសេសសម្រាប់អ្នកជំនាញដែលធ្វើការក្នុងវិស័យសង្គមកិច្ច ដោយផ្តល់ជូនអ្នកចូលរួមនូវជំនាញក្នុងការរៀបចំ កែសម្រួល គ្រប់គ្រង និងវិភាគទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នាដែលពាក់ព័ន្ធនឹងសេវាសង្គម និងសហគមន៍ងាយរងគ្រោះ។",
      description: [
        { type: "heading", text: "អំពីការបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមសិក្សាពីរបៀបបង្កើតផែនទីដែលមានគុណភាពវិជ្ជាជីវៈ គ្រប់គ្រងមូលដ្ឋានទិន្នន័យភូមិសាស្ត្រ អនុវត្តការវិភាគលំហកម្រិតមូលដ្ឋាន និងផលិតប្លង់ផែនទីដែលផ្តល់ព័ត៌មានគាំទ្រដល់ការធ្វើផែនការ ការរាយការណ៍ និងការសម្រេចចិត្តផ្អែកលើភស្តុតាង។ ការបណ្តុះបណ្តាលនេះផ្តោតលើការអនុវត្តជាក់ស្តែងក្នុងការងារសង្គមកិច្ច ដែលអាចឱ្យស្ថាប័នកែលម្អការផ្តល់សេវា ការបែងចែកធនធាន និងការតាមដានកម្មវិធីផ្អែកលើសហគមន៍។",
        },
      ],
      objectives: [
        "ស្ថាបនាចំណេះដឹងមូលដ្ឋាន និងជំនាញអនុវត្តក្នុងការប្រើប្រាស់ ArcGIS Pro សម្រាប់ការគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ។",
        "អភិវឌ្ឍសមត្ថភាពក្នុងការបង្កើតផែនទីដែលត្រឹមត្រូវ ផ្តល់ព័ត៌មាន និងមានគុណភាពវិជ្ជាជីវៈសម្រាប់កម្មវិធីសង្គមកិច្ច និងការអភិវឌ្ឍសហគមន៍។",
        "ពង្រឹងសមត្ថភាពអ្នកចូលរួមក្នុងការរៀបចំ និងថែទាំសំណុំទិន្នន័យលំហដែលពាក់ព័ន្ធនឹងសេវាសង្គម អ្នកទទួលផល និងព្រំប្រទល់រដ្ឋបាល។",
        "ណែនាំបច្ចេកទេសវិភាគលំហកម្រិតមូលដ្ឋាន ដើម្បីកំណត់តំបន់ងាយរងគ្រោះ និងតំបន់អាទិភាព ដែលគាំទ្រដល់អន្តរាគមន៍ទាន់ពេលវេលា និងការបែងចែកធនធានប្រកបដោយប្រសិទ្ធភាព។",
        "ពង្រឹងការសម្រេចចិត្ត តាមរយៈការបញ្ចូលព័ត៌មានភូមិសាស្ត្រទៅក្នុងដំណើរការធ្វើផែនការ ការតាមដាន និងការរាយការណ៍។",
        "កែលម្អសមត្ថភាពរបស់ក្រសួងក្នុងការឆ្លើយតបយ៉ាងឆាប់រហ័សចំពោះបញ្ហាសង្គម តាមរយៈការវិភាគ និងការបង្ហាញផ្អែកលើទីតាំង។",
      ],
      modules: [
        "មូលដ្ឋានគ្រឹះ ArcGIS Pro និងគោលគំនិតភូមិសាស្ត្រ",
        "ការគ្រប់គ្រងទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នា",
        "ការកែសម្រួលទិន្នន័យសេវាសង្គម និងការរៀបចំ Geodatabase",
        "ការផលិតផែនទី និងការរចនាប្លង់",
        "ការវិភាគលំហមូលដ្ឋាន និងការធ្វើផែនទីភាពងាយរងគ្រោះ",
        "ការតាមដានផ្អែកលើទីតាំង និងការបញ្ចូលទៅក្នុងការរាយការណ៍",
      ],
    },
    en: {
      title: "Basic ArcGIS Pro for Data Management and Map Creation",
      partnerOrClient:
        "Ministry of Social Affairs, Veterans and Youth Rehabilitation (MoSVY)",
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "Yeap Malyno, Chief of Office",
      dateRange: "August 2023",
      deliveryModeLabel: "On-site",
      excerpt:
        "Practical training in geospatial data management, visualization, and map creation for professionals working in the social affairs sector.",
      overview:
        "This training program introduces participants to the fundamental concepts and practical applications of ArcGIS Pro for spatial data management, visualization, and map production. Designed specifically for professionals working in the social affairs sector, the course equips trainees with the skills to organize, edit, manage, and analyze spatial and attribute data related to social services and vulnerable communities.",
      description: [
        { type: "heading", text: "About the Training" },
        {
          type: "paragraph",
          text:
            "Participants learn how to create professional-quality maps, manage geospatial databases, perform basic spatial analysis, and produce informative map layouts that support planning, reporting, and evidence-based decision-making. The training emphasizes real-world applications in social work, enabling organizations to improve service delivery, resource allocation, and monitoring of community-based programs.",
        },
      ],
      objectives: [
        "Build foundational knowledge and practical skills in using ArcGIS Pro for geospatial data management.",
        "Develop the ability to create accurate, informative, and professional maps for social affairs and community development programs.",
        "Strengthen participants' capacity to organize and maintain spatial datasets related to social services, beneficiaries, and administrative boundaries.",
        "Introduce basic spatial analysis techniques to identify vulnerable and priority areas, supporting timely interventions and effective resource allocation.",
        "Enhance decision-making by integrating geospatial information into planning, monitoring, and reporting processes.",
        "Improve the Ministry's ability to respond quickly to social issues through location-based analysis and visualization.",
      ],
      modules: [
        "ArcGIS Pro Foundations & Geospatial Concepts",
        "Spatial & Attribute Data Management",
        "Social Services Data Editing & Geodatabase Organization",
        "Map Production & Layout Design",
        "Basic Spatial Analysis & Vulnerability Mapping",
        "Location-Based Monitoring & Reporting Integration",
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
        "មូលដ្ឋានគ្រឹះ ArcGIS Pro សម្រាប់ការគ្រប់គ្រងទិន្នន័យកសិកម្ម និងការវិភាគលំហ",
      partnerOrClient: "ក្រុមហ៊ុន Dau Tu Saigon Binh (SBK) Co., Ltd.",
      trainer: "Khmer GRS Academy (KGA)",
      dateRange: "កុម្ភៈ ២០២៤",
      deliveryModeLabel: "បណ្តុះបណ្តាលតាមអនឡាញ",
      excerpt:
        "ការបណ្តុះបណ្តាលតាមអនឡាញអំពី ArcGIS Pro សម្រាប់ការធ្វើផែនការកសិកម្ម ការគ្រប់គ្រងដី និងការសម្រេចចិត្តដោយផ្អែកលើទិន្នន័យលំហ។",
      overview:
        "កម្មវិធីបណ្តុះបណ្តាលនេះផ្តល់ជូនអ្នកចូលរួមនូវចំណេះដឹងគ្រប់ជ្រុងជ្រោយ និងជំនាញអនុវត្តក្នុងការប្រើប្រាស់ ArcGIS Pro ដើម្បីគាំទ្រដល់ការធ្វើផែនការ ការគ្រប់គ្រង និងការសម្រេចចិត្តផ្នែកកសិកម្មសម័យទំនើប។ វគ្គសិក្សានេះត្រូវបានរៀបចំឡើងសម្រាប់អ្នកជំនាញដែលពាក់ព័ន្ធនឹងការអភិវឌ្ឍកសិកម្ម ការគ្រប់គ្រងដី និងការគ្រប់គ្រងធនធានធម្មជាតិ ដោយអាចឱ្យពួកគេគ្រប់គ្រងទិន្នន័យលំហប្រកបដោយប្រសិទ្ធភាព និងបំប្លែងវាទៅជាព័ត៌មានមានតម្លៃសម្រាប់កសិកម្មប្រកបដោយចីរភាព។",
      description: [
        { type: "heading", text: "អំពីការបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមសិក្សាពីការរៀបចំ និងថែទាំមូលដ្ឋានទិន្នន័យភូមិសាស្ត្រ ការបង្កើតផែនទីគុណភាពខ្ពស់ ការអនុវត្តការវិភាគលំហ ការប្រមូល និងគ្រប់គ្រងទិន្នន័យទីវាលដោយប្រើបច្ចេកវិទ្យា GIS ចល័ត ការកែច្នៃរូបភាពផ្កាយរណប និងទិន្នន័យចម្លងពីចម្ងាយ និងការបង្ហាញព័ត៌មានកសិកម្មទាំងក្នុងបរិយាកាស 2D និង 3D។ តាមរយៈលំហាត់អនុវត្ត និងសេណារីយ៉ូកសិកម្មជាក់ស្តែង ការបណ្តុះបណ្តាលនេះបង្ហាញពីរបៀបដែល GIS អាចកែលម្អការតាមដានដំណាំ ការធ្វើផែនការប្រើប្រាស់ដី ការគ្រប់គ្រងប្រព័ន្ធស្រោចស្រព និងប្រសិទ្ធភាពប្រតិបត្តិការទូទៅ។",
        },
      ],
      objectives: [
        "អភិវឌ្ឍជំនាញមូលដ្ឋាន និងជំនាញអនុវត្តក្នុងការប្រើប្រាស់ ArcGIS Pro សម្រាប់កម្មវិធី GIS ផ្នែកកសិកម្ម។",
        "ស្ថាបនាសមត្ថភាពក្នុងការគ្រប់គ្រង កែសម្រួល និងថែទាំទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នាសម្រាប់គម្រោងកសិកម្ម។",
        "ផលិតផែនទីប្រកបដោយវិជ្ជាជីវៈ ដែលបង្ហាញព័ត៌មានកសិកម្មប្រកបដោយប្រសិទ្ធភាព និងគាំទ្រដល់ការធ្វើផែនការ និងការរាយការណ៍។",
        "អនុវត្តបច្ចេកទេសវិភាគលំហ និងវិទ្យាសាស្ត្រទិន្នន័យ ដើម្បីវាយតម្លៃភាពសមស្របនៃដី តាមដានធនធានកសិកម្ម និងគាំទ្រការសម្រេចចិត្តផ្អែកលើភស្តុតាង។",
        "ប្រើប្រាស់លំហូរការងារ GIS ចល័ត សម្រាប់ការប្រមូលទិន្នន័យទីវាល ការត្រួតពិនិត្យ និងការធ្វើសមកាលកម្មទិន្នន័យប្រកបដោយប្រសិទ្ធភាព។",
        "កែច្នៃ និងវិភាគរូបភាពផ្កាយរណប និងទិន្នន័យចម្លងពីចម្ងាយ ដើម្បីតាមដានស្ថានភាពដំណាំ ការប្រើប្រាស់ដី រុក្ខជាតិ និងការប្រែប្រួលបរិស្ថាន។",
        "បង្កើតការបង្ហាញ 3D អន្តរកម្ម និងអនុវត្តការវិភាគលំហ ដើម្បីយល់កាន់តែច្បាស់អំពីទេសភាពកសិកម្ម និងគាំទ្រដល់ការធ្វើផែនការគម្រោង។",
        "កែលម្អប្រសិទ្ធភាពស្ថាប័ន តាមរយៈការបញ្ចូលបច្ចេកវិទ្យា GIS ទៅក្នុងការគ្រប់គ្រងកសិកម្ម និងដំណើរការសម្រេចចិត្ត។",
      ],
      modules: [
        "ការគ្រប់គ្រងទិន្នន័យ",
        "ការធ្វើផែនទី",
        "ការវិភាគលំហ និងវិទ្យាសាស្ត្រទិន្នន័យ",
        "ប្រតិបត្តិការទីវាល",
        "រូបភាពផ្កាយរណប និងការចម្លងពីចម្ងាយ",
        "ការបង្ហាញ និងការវិភាគ 3D",
      ],
    },
    en: {
      title:
        "Basic ArcGIS Pro for Agricultural Data Management and Spatial Analysis",
      partnerOrClient: "Dau Tu Saigon Binh (SBK) Co., Ltd.",
      trainer: "Khmer GRS Academy (KGA)",
      dateRange: "February 2024",
      deliveryModeLabel: "Online",
      excerpt:
        "Online ArcGIS Pro training for agricultural planning, land management, and spatial-data-supported decision-making.",
      overview:
        "This training program provides participants with comprehensive knowledge and practical skills in using ArcGIS Pro to support modern agricultural planning, management, and decision-making. The course is designed for professionals involved in agricultural development, land management, and natural resource management, enabling them to effectively manage spatial data and transform it into valuable information for sustainable agriculture.",
      description: [
        { type: "heading", text: "About the Training" },
        {
          type: "paragraph",
          text:
            "Participants learn to organize and maintain geospatial databases, create high-quality maps, perform spatial analysis, collect and manage field data using mobile GIS technologies, process satellite imagery and remote sensing data, and visualize agricultural information in both 2D and 3D environments. Through hands-on exercises and real-world agricultural scenarios, the training demonstrates how GIS can improve crop monitoring, land-use planning, irrigation management, and overall operational efficiency.",
        },
      ],
      objectives: [
        "Develop fundamental and practical skills in using ArcGIS Pro for agricultural GIS applications.",
        "Build the capacity to manage, edit, and maintain spatial and attribute data for agricultural projects.",
        "Produce professional maps that effectively communicate agricultural information and support planning and reporting.",
        "Apply spatial analysis and data science techniques to evaluate land suitability, monitor agricultural resources, and support evidence-based decision-making.",
        "Utilize mobile GIS workflows for efficient field data collection, inspection, and data synchronization.",
        "Process and analyze satellite imagery and remote sensing data to monitor crop conditions, land use, vegetation, and environmental changes.",
        "Create interactive 3D visualizations and perform spatial analytics to better understand agricultural landscapes and support project planning.",
        "Improve organizational efficiency by integrating GIS technologies into agricultural management and decision-making processes.",
      ],
      modules: [
        "Data Management",
        "Mapping",
        "Spatial Analysis & Data Science",
        "Field Operations",
        "Imagery & Remote Sensing",
        "3D Visualization & Analytics",
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
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "H.E. សាន យូ អភិបាលរង",
      dateRange: "ឧសភា ២០២៥",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាល ArcGIS Pro សម្រាប់ការបង្កើត កែសម្រួល និងត្រួតពិនិត្យគុណភាពទិន្នន័យដីធ្លី និងសុរិយោដី។",
      overview:
        "ការបណ្តុះបណ្តាលនេះផ្តល់ជូនអ្នកចូលរួមនូវមូលដ្ឋានគ្រឹះរឹងមាំអំពីគោលគំនិតប្រព័ន្ធព័ត៌មានភូមិសាស្ត្រ (GIS) និងជំនាញអនុវត្តក្នុងការប្រើប្រាស់ ArcGIS Pro សម្រាប់កម្មវិធីអនុវិស័យរដ្ឋបាលដីធ្លី (LASSP)។ វគ្គសិក្សានេះត្រូវបានរៀបចំឡើងដើម្បីផ្តល់ជូនអ្នកចូលរួមនូវចំណេះដឹង និងបច្ចេកទេសចាំបាច់ក្នុងការបង្កើត កែសម្រួល ធ្វើបច្ចុប្បន្នភាព រៀបចំ និងគ្រប់គ្រងទិន្នន័យលំហប្រកបដោយប្រសិទ្ធភាព ដើម្បីគាំទ្រដល់សកម្មភាពចុះបញ្ជីដីធ្លី និងកែលម្អគុណភាពព័ត៌មានសុរិយោដី។",
      description: [
        { type: "heading", text: "អំពីការបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "អ្នកចូលរួមនឹងទទួលបានបទពិសោធន៍ជាក់ស្តែងក្នុងលំហូរការងារគ្រប់គ្រងទិន្នន័យលំហ រួមមានការបង្កើត feature ការកែសម្រួល attribute ការគ្រប់គ្រង geodatabase និងការផលិតផែនទី។ ការបណ្តុះបណ្តាលនេះក៏ផ្តោតលើការធានាគុណភាព និងការត្រួតពិនិត្យគុណភាពទិន្នន័យ (QA/QC) ផងដែរ ដោយណែនាំវិធីសាស្ត្រផ្ទៀងផ្ទាត់ផ្សេងៗ ដូចជាការផ្ទៀងផ្ទាត់ topology ការត្រួតពិនិត្យភាពស៊ីសង្វាក់នៃ attribute ការផ្ទៀងផ្ទាត់ geometry ការរកឃើញ feature ស្ទួន ការផ្ទៀងផ្ទាត់ទំនាក់ទំនងលំហ និងការវាយតម្លៃភាពត្រឹមត្រូវនៃកូអរដោនេ។ លើសពីនេះ អ្នកចូលរួមនឹងរៀនពីរបៀបផលិតផែនទីប្រតិបត្តិការប្រចាំថ្ងៃ ដើម្បីគាំទ្រដល់ការស្ទង់ទីវាល ការចុះបញ្ជីដីធ្លី និងការអនុវត្តគម្រោង។",
        },
        {
          type: "paragraph",
          text:
            "បន្ទាប់ពីបញ្ចប់ការបណ្តុះបណ្តាល អ្នកចូលរួមនឹងអាចអនុវត្ត ArcGIS Pro ប្រកបដោយប្រសិទ្ធភាព ដើម្បីពង្រឹងភាពត្រឹមត្រូវ ភាពស៊ីសង្វាក់ និងប្រសិទ្ធភាពនៃការគ្រប់គ្រងទិន្នន័យលំហក្នុងគម្រោងរដ្ឋបាលដីធ្លី។",
        },
      ],
      objectives: [
        "ផ្តល់ជូនអ្នកចូលរួមនូវមូលដ្ឋានគ្រឹះរឹងមាំអំពីគោលគំនិត GIS និងការគ្រប់គ្រងទិន្នន័យលំហ។",
        "អភិវឌ្ឍជំនាញអនុវត្តក្នុងការប្រើប្រាស់ ArcGIS Pro សម្រាប់រដ្ឋបាលដីធ្លី និងការគ្រប់គ្រងទិន្នន័យសុរិយោដី។",
        "អាចឱ្យអ្នកចូលរួមបង្កើត កែសម្រួល ធ្វើបច្ចុប្បន្នភាព រៀបចំ និងថែទាំទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នាប្រកបដោយប្រសិទ្ធភាព។",
        "ពង្រឹងសមត្ថភាពអ្នកចូលរួមក្នុងការគ្រប់គ្រង geodatabase និងថែទាំសំណុំទិន្នន័យ GIS តាមស្តង់ដារ។",
        "ណែនាំការអនុវត្តល្អបំផុតសម្រាប់ការធានា និងត្រួតពិនិត្យគុណភាពទិន្នន័យ GIS (QA/QC) រួមមានការផ្ទៀងផ្ទាត់ topology ការផ្ទៀងផ្ទាត់ attribute ការផ្ទៀងផ្ទាត់ geometry ការរកឃើញ feature ស្ទួន ការត្រួតពិនិត្យភាពស៊ីសង្វាក់លំហ និងការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវនៃកូអរដោនេ។",
        "ផ្តល់ជូនអ្នកចូលរួមនូវជំនាញក្នុងការកំណត់ វិភាគ និងកែតម្រូវកំហុសទិន្នន័យលំហ និង attribute។",
        "បណ្តុះបណ្តាលអ្នកចូលរួមឱ្យបង្កើតផែនទីប្រតិបត្តិការប្រចាំថ្ងៃប្រកបដោយវិជ្ជាជីវៈ ដើម្បីគាំទ្រដល់ការចុះបញ្ជីដីធ្លី និងសកម្មភាពទីវាល។",
        "កែលម្អប្រសិទ្ធភាព ភាពត្រឹមត្រូវ និងភាពស៊ីសង្វាក់នៃលំហូរការងារ GIS ក្នុងកម្មវិធីអនុវិស័យរដ្ឋបាលដីធ្លី។",
        "លើកកម្ពស់ការអនុវត្ត GIS តាមស្តង់ដារ ដើម្បីគាំទ្រដល់ការសម្រេចចិត្តដែលអាចទុកចិត្តបាន និងការគ្រប់គ្រងទិន្នន័យលំហរយៈពេលវែង។",
      ],
      modules: [
        "មូលដ្ឋានគ្រឹះ GIS និងគោលគំនិតទិន្នន័យសុរិយោដី",
        "ការបង្កើត Feature និងការកែសម្រួល Attribute សម្រាប់ការចុះបញ្ជីដីធ្លី",
        "ការគ្រប់គ្រង Geodatabase និងការធ្វើស្តង់ដារទិន្នន័យ",
        "ការធានា និងត្រួតពិនិត្យគុណភាពទិន្នន័យ (QA/QC និង Topology)",
        "ការកំណត់កំហុសលំហ និងលំហូរការងារកែតម្រូវទិន្នន័យ",
        "ការផលិតផែនទីប្រតិបត្តិការសម្រាប់ការស្ទង់ទីវាល",
      ],
    },
    en: {
      title:
        "Foundation of Using ArcGIS Pro for Data Management in Land Administration Projects",
      partnerOrClient: "Kampong Chhnang Provincial Administration",
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "H.E. San You, Deputy Governor",
      dateRange: "May 2025",
      deliveryModeLabel: "On-site",
      excerpt:
        "ArcGIS Pro training for creating, editing, managing, and quality-checking land administration and cadastral data.",
      overview:
        "This training provides participants with a solid foundation in Geographic Information Systems (GIS) concepts and practical skills in using ArcGIS Pro for the Land Administration Sub-Sector Program (LASSP). The course is designed to equip trainees with the knowledge and techniques required to efficiently create, edit, update, organize, and manage spatial data to support land registration activities and improve the quality of cadastral information.",
      description: [
        { type: "heading", text: "About the Training" },
        {
          type: "paragraph",
          text:
            "Participants will gain hands-on experience in spatial data management workflows, including feature creation, attribute editing, geodatabase management, and map production. The training also emphasizes data quality assurance and quality control (QA/QC) by introducing various validation methods such as topology validation, attribute consistency checks, geometry validation, duplicate feature detection, spatial relationship verification, and coordinate accuracy assessment. In addition, trainees will learn how to produce daily operational maps to support field surveys, land registration, and project implementation.",
        },
        {
          type: "paragraph",
          text:
            "Upon completion of the training, participants will be able to apply ArcGIS Pro effectively to enhance the accuracy, consistency, and efficiency of spatial data management within land administration projects.",
        },
      ],
      objectives: [
        "Provide participants with a strong foundation in GIS concepts and spatial data management.",
        "Develop practical skills in using ArcGIS Pro for land administration and cadastral data management.",
        "Enable participants to create, edit, update, organize, and maintain spatial and attribute data efficiently.",
        "Strengthen participants' ability to manage geodatabases and maintain standardized GIS datasets.",
        "Introduce best practices for GIS data quality assurance and quality control (QA/QC), including topology validation, attribute validation, geometry validation, duplicate feature detection, spatial consistency checks, and coordinate accuracy verification.",
        "Equip participants with the skills to identify, analyze, and correct spatial and attribute data errors.",
        "Train participants to create professional daily operational maps to support land registration and field activities.",
        "Improve the efficiency, accuracy, and consistency of GIS workflows within the Land Administration Sub-Sector Program.",
        "Promote standardized GIS practices to support reliable decision-making and long-term spatial data management.",
      ],
      modules: [
        "GIS Fundamentals & Cadastral Data Concepts",
        "Feature Creation & Attribute Editing for Land Registration",
        "Geodatabase Management & Data Standardization",
        "Data Quality Assurance & Quality Control (QA/QC & Topology)",
        "Spatial Error Identification & Data Correction Workflows",
        "Operational Map Production for Field Surveys",
      ],
    },
  },
  {
    slug: "tcm-sewage-drainage-maintenance-gis-training",
    status: "completed",
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
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "ពៅ នរាជសត្យា ប្រធានផ្នែកហិរញ្ញវត្ថុ",
      dateRange: "៥ កក្កដា ២០២៦",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាល GIS និង ArcGIS Pro សម្រាប់ការគ្រប់គ្រង ការត្រួតពិនិត្យ និងការថែទាំទ្រព្យសម្បត្តិប្រព័ន្ធលូ និងបង្ហូរទឹក។",
      overview:
        "ការបណ្តុះបណ្តាលនេះត្រូវបានរៀបចំឡើងដើម្បីផ្តល់ជូនអ្នកចូលរួមនូវចំណេះដឹង និងជំនាញអនុវត្តចាំបាច់ក្នុងការប្រើប្រាស់ប្រព័ន្ធព័ត៌មានភូមិសាស្ត្រ (GIS) និង ArcGIS Pro សម្រាប់ការគ្រប់គ្រង ការត្រួតពិនិត្យ និងការថែទាំទ្រព្យសម្បត្តិប្រព័ន្ធលូទឹកស្អុយ និងប្រព័ន្ធបង្ហូរទឹក។ វគ្គសិក្សានេះរួមបញ្ចូលគ្នានូវមូលដ្ឋានគ្រឹះ GIS ជាមួយលំហាត់អនុវត្ត ដើម្បីអាចឱ្យអ្នកចូលរួមបង្កើត កែសម្រួល គ្រប់គ្រង និងវិភាគទិន្នន័យលំហដែលគាំទ្រដល់ការគ្រប់គ្រងទ្រព្យសម្បត្តិហេដ្ឋារចនាសម្ព័ន្ធ។",
      description: [
        { type: "heading", text: "អំពីការបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "ពេញមួយកម្មវិធីបណ្តុះបណ្តាលរយៈពេលប្រាំបីថ្ងៃ អ្នកចូលរួមនឹងរៀនអំពីចំណុចប្រទាក់ ArcGIS Pro គំរូទិន្នន័យ GIS ការបង្កើតទិន្នន័យ vector ការគ្រប់គ្រង attribute ការស្វែងរកទិន្នន័យលំហ និងការបង្ហាញផែនទី។ វគ្គសិក្សានេះក៏ផ្តោតលើការធ្វើឌីជីថលទ្រព្យសម្បត្តិបណ្តាញលូ និងបង្ហូរទឹក ការអនុវត្តការត្រួតពិនិត្យទីវាលផ្អែកលើ GIS ការកំណត់បញ្ហាហេដ្ឋារចនាសម្ព័ន្ធ និងការបញ្ចូលទិន្នន័យដែលប្រមូលបានពីទីវាលទៅក្នុងមូលដ្ឋានទិន្នន័យ GIS កណ្ដាល។",
        },
        {
          type: "paragraph",
          text:
            "លើសពីនេះ អ្នកចូលរួមនឹងទទួលបានបទពិសោធន៍ជាក់ស្តែងក្នុងការធ្វើផែនការថែទាំបង្ការ ការអភិវឌ្ឍ dashboard របស់ GIS ការគ្រប់គ្រងទិន្នន័យ និងការរាយការណ៍។ ការបណ្តុះបណ្តាលនេះបញ្ចប់ដោយគម្រោងអនុវត្តជាក់ស្តែងនៅទីវាល ដែលអនុញ្ញាតឱ្យអ្នកចូលរួមអនុវត្តចំណេះដឹង និងជំនាញដែលទទួលបានពេញមួយវគ្គសិក្សា ក្នុងលំហូរការងារគ្រប់គ្រងទ្រព្យសម្បត្តិជាក់ស្តែង។",
        },
        {
          type: "paragraph",
          text:
            "បន្ទាប់ពីបញ្ចប់ការបណ្តុះបណ្តាល អ្នកចូលរួមនឹងអាចប្រើប្រាស់ ArcGIS Pro ប្រកបដោយប្រសិទ្ធភាព ដើម្បីកែលម្អប្រសិទ្ធភាព ភាពត្រឹមត្រូវ និងភាពជឿជាក់នៃការគ្រប់គ្រង ការត្រួតពិនិត្យ ការថែទាំ និងការសម្រេចចិត្តលើទ្រព្យសម្បត្តិប្រព័ន្ធលូ និងបង្ហូរទឹក។",
        },
      ],
      objectives: [
        "ផ្តល់ជូនអ្នកចូលរួមនូវការយល់ដឹងមូលដ្ឋានអំពីគោលគំនិត GIS និងបរិយាកាស ArcGIS Pro។",
        "អភិវឌ្ឍជំនាញអនុវត្តក្នុងការបង្កើត កែសម្រួល និងគ្រប់គ្រងទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នា។",
        "ណែនាំទម្រង់ទិន្នន័យ GIS ផ្សេងៗ រួមមាន geodatabase, shapefile និង feature class។",
        "អាចឱ្យអ្នកចូលរួមធ្វើឌីជីថល និងថែទាំទ្រព្យសម្បត្តិបណ្តាញលូ និងបង្ហូរទឹកដោយប្រើ ArcGIS Pro។",
        "ស្ថាបនាសមត្ថភាពក្នុងការស្វែងរកទិន្នន័យ ការជ្រើសរើស feature និងការបង្ហាញតាមបែបផែនទីសាស្ត្រដោយប្រើ GIS។",
        "ផ្តល់ជូនអ្នកចូលរួមនូវជំនាញក្នុងការអនុវត្តការត្រួតពិនិត្យទីវាលផ្អែកលើ GIS និងការកំណត់បញ្ហាហេដ្ឋារចនាសម្ព័ន្ធ។",
        "បង្ហាញពីរបៀបបញ្ចូលទិន្នន័យដែលប្រមូលបានពីទីវាលទៅក្នុងមូលដ្ឋានទិន្នន័យ GIS កណ្ដាល សម្រាប់ការគ្រប់គ្រងទ្រព្យសម្បត្តិ។",
        "ណែនាំការធ្វើផែនការថែទាំបង្ការ និងការកត់ត្រាទិន្នន័យ ដោយប្រើឧបករណ៍ និង dashboard របស់ GIS។",
        "អភិវឌ្ឍសមត្ថភាពអ្នកចូលរួមក្នុងការផលិតផែនទី និងរបាយការណ៍ត្រឹមត្រូវ ដើម្បីគាំទ្រដល់សកម្មភាពប្រតិបត្តិការ និងការថែទាំ។",
        "ពង្រឹងសមត្ថភាពអ្នកចូលរួមក្នុងការអនុវត្តបច្ចេកវិទ្យា GIS ដើម្បីកែលម្អប្រសិទ្ធភាព ភាពត្រឹមត្រូវ និងចីរភាពនៃការគ្រប់គ្រងប្រព័ន្ធលូ និងបង្ហូរទឹក។",
      ],
      modules: [
        "មូលដ្ឋានគ្រឹះ ArcGIS Pro និងគំរូទិន្នន័យហេដ្ឋារចនាសម្ព័ន្ធ",
        "ការធ្វើឌីជីថល និងការគ្រប់គ្រងទ្រព្យសម្បត្តិបណ្តាញ",
        "ការត្រួតពិនិត្យទីវាលផ្អែកលើ GIS និងការកំណត់បញ្ហា",
        "ការបញ្ចូលមូលដ្ឋានទិន្នន័យកណ្ដាល និងការធ្វើសមកាលកម្មទិន្នន័យ",
        "ការធ្វើផែនការថែទាំបង្ការ និងការអភិវឌ្ឍ Dashboard របស់ GIS",
        "គម្រោងអនុវត្តនៅទីវាល និងការរាយការណ៍ហេដ្ឋារចនាសម្ព័ន្ធ",
      ],
    },
    en: {
      title: "On-Site Sewage & Drainage System Maintenance Training",
      partnerOrClient: "TCM Engineering Company Ltd.",
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "Pov Nareachsatya, Finance Manager",
      dateRange: "5 July 2026",
      deliveryModeLabel: "On-site",
      excerpt:
        "GIS and ArcGIS Pro training for managing, inspecting, and maintaining sewage and drainage system assets.",
      overview:
        "This training is designed to provide participants with the knowledge and practical skills required to use Geographic Information Systems (GIS) and ArcGIS Pro for the management, inspection, and maintenance of sewage and drainage system assets. The course combines GIS fundamentals with hands-on exercises to enable participants to create, edit, manage, and analyze spatial data that supports infrastructure asset management.",
      description: [
        { type: "heading", text: "About the Training" },
        {
          type: "paragraph",
          text:
            "Throughout the eight-day training program, participants will learn the ArcGIS Pro interface, GIS data models, vector data creation, attribute management, spatial queries, and map visualization. The course also focuses on digitizing sewage and drainage network assets, conducting GIS-based field inspections, identifying infrastructure faults, and integrating field-collected data into a centralized GIS database.",
        },
        {
          type: "paragraph",
          text:
            "In addition, participants will gain practical experience in preventive maintenance planning, GIS dashboard development, data management, and reporting. The training concludes with a field-based practical project, allowing participants to apply the knowledge and skills acquired throughout the course in a real-world asset management workflow.",
        },
        {
          type: "paragraph",
          text:
            "Upon completion of the training, participants will be able to utilize ArcGIS Pro effectively to improve the efficiency, accuracy, and reliability of sewage and drainage asset management, inspection, maintenance, and decision-making.",
        },
      ],
      objectives: [
        "Provide participants with a fundamental understanding of GIS concepts and the ArcGIS Pro environment.",
        "Develop practical skills in creating, editing, and managing spatial and attribute data.",
        "Introduce different GIS data formats, including geodatabases, shapefiles, and feature classes.",
        "Enable participants to digitize and maintain sewage and drainage network assets using ArcGIS Pro.",
        "Build competency in data querying, feature selection, and cartographic visualization using GIS.",
        "Equip participants with the skills to perform GIS-based field inspections and identify infrastructure faults.",
        "Demonstrate how to integrate field-collected data into a centralized GIS database for asset management.",
        "Introduce preventive maintenance planning and recordkeeping using GIS tools and dashboards.",
        "Develop participants' ability to produce accurate maps and reports to support operational and maintenance activities.",
        "Strengthen participants' capacity to apply GIS technology to improve the efficiency, accuracy, and sustainability of sewage and drainage system management.",
      ],
      modules: [
        "ArcGIS Pro Essentials & Infrastructure Data Models",
        "Digitizing & Managing Network Assets",
        "GIS-Based Field Inspection & Fault Identification",
        "Centralized Database Integration & Data Synchronization",
        "Preventive Maintenance Planning & GIS Dashboard Development",
        "Applied Field Project & Infrastructure Reporting",
      ],
    },
  },
  {
    slug: "jica-qgis-logistics-project-monitoring",
    status: "completed",
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
      partnerOrClient: "Oriental Consultants Global Co., Ltd. (OCG)",
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "លោក Manabu Owada ប្រធានគ្រប់គ្រងគម្រោង",
      fundingAgency: "ទីភ្នាក់ងារសហប្រតិបត្តិការអន្តរជាតិជប៉ុន (JICA)",
      dateRange: "២៩ កក្កដា ២០២៦",
      deliveryModeLabel: "បណ្តុះបណ្តាលផ្ទាល់",
      excerpt:
        "ការបណ្តុះបណ្តាល QGIS សម្រាប់ការគ្រប់គ្រងទិន្នន័យហេដ្ឋារចនាសម្ព័ន្ធដឹកជញ្ជូន និងការរៀបចំទិន្នន័យសម្រាប់ dashboard តាមដានគម្រោង។",
      overview:
        "ការបណ្តុះបណ្តាលនេះត្រូវបានរៀបចំឡើងដើម្បីផ្តល់ជូនអ្នកចូលរួមនូវចំណេះដឹង និងជំនាញអនុវត្តចាំបាច់ក្នុងការប្រើប្រាស់ QGIS សម្រាប់ការគ្រប់គ្រងទិន្នន័យលំហ និងការតាមដានគម្រោងភស្តុភារ។ វគ្គសិក្សានេះផ្តោតលើការអនុវត្តប្រព័ន្ធព័ត៌មានភូមិសាស្ត្រ (GIS) ដើម្បីគាំទ្រដល់គម្រោងហេដ្ឋារចនាសម្ព័ន្ធដឹកជញ្ជូន និងភស្តុភារ តាមរយៈការអភិវឌ្ឍសំណុំទិន្នន័យលំហត្រឹមត្រូវ និងការរៀបចំវាសម្រាប់ការតភ្ជាប់ជាមួយ dashboard តាមដានគម្រោង។",
      description: [
        { type: "heading", text: "អំពីការបណ្តុះបណ្តាល" },
        {
          type: "paragraph",
          text:
            "ពេញមួយកម្មវិធីបណ្តុះបណ្តាលរយៈពេលដប់ថ្ងៃ អ្នកចូលរួមនឹងរៀនអំពីមូលដ្ឋានគ្រឹះនៃ GIS និង QGIS រួមមានរចនាសម្ព័ន្ធទិន្នន័យលំហ ការបង្កើត និងកែសម្រួលទិន្នន័យ vector ការគ្រប់គ្រង attribute ការស្វែងរកទិន្នន័យលំហ ការវិភាគ vector និងការបង្ហាញតាមបែបផែនទីសាស្ត្រ។ អ្នកចូលរួមក៏នឹងរៀនពីរបៀបរៀបចំសំណុំទិន្នន័យលំហតាមស្តង់ដារ បម្លែង feature របស់ GIS ទៅជាទម្រង់ Well-Known Text (WKT) និងតភ្ជាប់ព័ត៌មានលំហជាមួយមូលដ្ឋានទិន្នន័យគម្រោង និងវេទិកា dashboard សម្រាប់តាមដានគម្រោងហេដ្ឋារចនាសម្ព័ន្ធភស្តុភារ។",
        },
        {
          type: "paragraph",
          text:
            "ការបណ្តុះបណ្តាលនេះផ្តោតលើលំហូរការងារជាក់ស្តែងសម្រាប់ការគ្រប់គ្រងទិន្នន័យលំហពាក់ព័ន្ធនឹងការដឹកជញ្ជូន រួមមានផ្លូវ ស្ពាន ទីតាំងភស្តុភារ ច្រករបៀងដឹកជញ្ជូន និងទ្រព្យសម្បត្តិហេដ្ឋារចនាសម្ព័ន្ធផ្សេងទៀត។ អ្នកចូលរួមនឹងទទួលបានបទពិសោធន៍ជាក់ស្តែងក្នុងការបង្កើតសំណុំទិន្នន័យសម្រាប់ dashboard ការថែរក្សាគុណភាពទិន្នន័យ ការផលិតផែនទីពីរភាសា (ខ្មែរ និងអង់គ្លេស) និងការគាំទ្រដល់ការតាមដានគម្រោង តាមរយៈការបង្ហាញ និងការរាយការណ៍ផ្អែកលើ GIS។",
        },
        {
          type: "paragraph",
          text:
            "នៅចុងបញ្ចប់នៃការបណ្តុះបណ្តាល អ្នកចូលរួមនឹងអាចគ្រប់គ្រងទិន្នន័យ GIS ប្រកបដោយប្រសិទ្ធភាព រៀបចំព័ត៌មានលំហសម្រាប់ dashboard គម្រោងភស្តុភារ និងផលិតផែនទី និងសំណុំទិន្នន័យប្រកបដោយវិជ្ជាជីវៈ ដែលគាំទ្រដល់ការធ្វើផែនការ ការអនុវត្ត ការតាមដាន និងការសម្រេចចិត្តក្នុងវិស័យភស្តុភារ។",
        },
      ],
      objectives: [
        "ផ្តល់ជូនអ្នកចូលរួមនូវមូលដ្ឋានគ្រឹះរឹងមាំអំពីគោលគំនិត GIS និងបរិយាកាស QGIS សម្រាប់កម្មវិធីភស្តុភារ និងការដឹកជញ្ជូន។",
        "អភិវឌ្ឍជំនាញអនុវត្តក្នុងការបង្កើត កែសម្រួល និងគ្រប់គ្រងទិន្នន័យលំហ និងទិន្នន័យពិពណ៌នាដោយប្រើ QGIS។",
        "អាចឱ្យអ្នកចូលរួមធ្វើឌីជីថល និងថែទាំសំណុំទិន្នន័យហេដ្ឋារចនាសម្ព័ន្ធដឹកជញ្ជូន និងភស្តុភារ រួមមានផ្លូវ ស្ពាន ទីតាំងភស្តុភារ និងច្រករបៀងដឹកជញ្ជូន។",
        "ស្ថាបនាសមត្ថភាពក្នុងការអនុវត្ត spatial query និងការវិភាគទិន្នន័យ vector ដើម្បីគាំទ្រដល់ការធ្វើផែនការភស្តុភារ និងការតាមដានគម្រោង។",
        "បណ្តុះបណ្តាលអ្នកចូលរួមឱ្យអនុវត្ត symbology ការដាក់ស្លាក និងស្តង់ដារផែនទីសាស្ត្រប្រកបដោយវិជ្ជាជីវៈ សម្រាប់ការធ្វើផែនទីពាក់ព័ន្ធនឹងភស្តុភារ។",
        "អភិវឌ្ឍសមត្ថភាពអ្នកចូលរួមក្នុងការបម្លែងសំណុំទិន្នន័យ GIS ទៅជាទម្រង់ Well-Known Text (WKT) សម្រាប់ការតភ្ជាប់ជាមួយមូលដ្ឋានទិន្នន័យគម្រោង និងកម្មវិធី dashboard។",
        "ផ្តល់ជូនអ្នកចូលរួមនូវជំនាញក្នុងការរៀបចំ និងគ្រប់គ្រងសំណុំទិន្នន័យ GIS ដែលតភ្ជាប់យ៉ាងរលូនជាមួយ Excel, Google Sheets និង dashboard តាមដានគម្រោង។",
        "ពង្រឹងសមត្ថភាពអ្នកចូលរួមក្នុងការផលិតផែនទីពីរភាសា (ខ្មែរ និងអង់គ្លេស) ប្រកបដោយវិជ្ជាជីវៈ សម្រាប់ការរាយការណ៍ ការធ្វើផែនការ និងគោលបំណងប្រតិបត្តិការ។",
        "ផ្តល់បទពិសោធន៍ជាក់ស្តែងក្នុងការអនុវត្តលំហូរការងារ GIS ពេញលេញ ចាប់ពីការបង្កើតទិន្នន័យលំហ និងការត្រួតពិនិត្យគុណភាព រហូតដល់សំណុំទិន្នន័យសម្រាប់ dashboard និងការបង្ហាញ។",
        "លើកកម្ពស់ការអនុវត្តការគ្រប់គ្រងទិន្នន័យ GIS តាមស្តង់ដារ ដែលកែលម្អភាពត្រឹមត្រូវ ភាពស៊ីសង្វាក់ និងប្រសិទ្ធភាពនៃការតាមដានហេដ្ឋារចនាសម្ព័ន្ធភស្តុភារ និងការគ្រប់គ្រងគម្រោង។",
        "ពង្រឹងសមត្ថភាពអ្នកចូលរួមក្នុងការគាំទ្រដល់ការធ្វើផែនការផ្អែកលើភស្តុតាង ការតាមដានវឌ្ឍនភាព និងការសម្រេចចិត្តសម្រាប់គម្រោងអភិវឌ្ឍន៍ភស្តុភារ និងការដឹកជញ្ជូន។",
      ],
      modules: [
        "មូលដ្ឋានគ្រឹះ QGIS និងរចនាសម្ព័ន្ធទិន្នន័យលំហភស្តុភារ",
        "ការធ្វើឌីជីថលហេដ្ឋារចនាសម្ព័ន្ធដឹកជញ្ជូន និងភស្តុភារ",
        "Spatial Query និងការវិភាគ Vector សម្រាប់ភស្តុភារ",
        "ការបម្លែង WKT និងការតភ្ជាប់ទិន្នន័យទៅ Dashboard",
        "ផែនទីសាស្ត្រពីរភាសា និងការរចនាប្លង់ (ខ្មែរ និងអង់គ្លេស)",
        "លំហូរការងារតាមដាន GIS ពេញលេញ និងការត្រួតពិនិត្យគុណភាព",
      ],
    },
    en: {
      title:
        "Capacity Building on QGIS for Spatial Data Management and Logistics Project Monitoring",
      partnerOrClient: "Oriental Consultants Global Co., Ltd. (OCG)",
      trainer: "Khmer GRS Academy (KGA)",
      clientRepresentative: "Mr. Manabu Owada, Project Manager",
      fundingAgency: "Japan International Cooperation Agency (JICA)",
      dateRange: "29 July 2026",
      deliveryModeLabel: "On-site",
      excerpt:
        "QGIS training for managing transportation infrastructure data and preparing dashboard-ready datasets for project monitoring.",
      overview:
        "This training is designed to provide participants with the knowledge and practical skills required to use QGIS for spatial data management and logistics project monitoring. The course focuses on applying Geographic Information Systems (GIS) to support transportation and logistics infrastructure projects by developing accurate spatial datasets and preparing them for integration with project monitoring dashboards.",
      description: [
        { type: "heading", text: "About the Training" },
        {
          type: "paragraph",
          text:
            "Throughout the ten-day training program, participants will learn the fundamentals of GIS and QGIS, including spatial data structures, vector data creation and editing, attribute management, spatial querying, vector analysis, and cartographic visualization. Participants will also learn how to prepare standardized spatial datasets, convert GIS features into Well-Known Text (WKT) format, and integrate spatial information with project databases and dashboard platforms for monitoring logistics infrastructure projects.",
        },
        {
          type: "paragraph",
          text:
            "The training emphasizes practical workflows for managing transportation-related spatial data, including roads, bridges, logistics facilities, transport corridors, and other infrastructure assets. Participants will gain hands-on experience in creating dashboard-ready datasets, maintaining data quality, producing bilingual maps (Khmer and English), and supporting project monitoring through GIS-based visualization and reporting.",
        },
        {
          type: "paragraph",
          text:
            "By the end of the training, participants will be able to efficiently manage GIS data, prepare spatial information for logistics project dashboards, and produce professional maps and datasets that support planning, implementation, monitoring, and decision-making within the logistics sector.",
        },
      ],
      objectives: [
        "Provide participants with a solid foundation in GIS concepts and the QGIS environment for logistics and transportation applications.",
        "Develop practical skills in creating, editing, and managing spatial and attribute data using QGIS.",
        "Enable participants to digitize and maintain transportation and logistics infrastructure datasets, including roads, bridges, logistics facilities, and transport corridors.",
        "Build competency in performing spatial queries and vector data analysis to support logistics planning and project monitoring.",
        "Train participants to apply professional symbology, labeling, and cartographic standards for logistics-related mapping.",
        "Develop participants' ability to convert GIS datasets into Well-Known Text (WKT) format for integration with project databases and dashboard applications.",
        "Equip participants with the skills to prepare and manage GIS datasets that integrate seamlessly with Excel, Google Sheets, and project monitoring dashboards.",
        "Strengthen participants' ability to produce professional bilingual maps (Khmer and English) for reporting, planning, and operational purposes.",
        "Provide hands-on experience in implementing a complete GIS workflow, from spatial data creation and quality control to dashboard-ready datasets and visualization.",
        "Promote standardized GIS data management practices that improve the accuracy, consistency, and efficiency of logistics infrastructure monitoring and project management.",
        "Enhance participants' capacity to support evidence-based planning, progress monitoring, and decision-making for logistics and transportation development projects.",
      ],
      modules: [
        "QGIS Foundations & Logistics Spatial Data Structures",
        "Transportation & Logistics Infrastructure Digitization",
        "Spatial Queries & Vector Analysis for Logistics",
        "WKT Conversion & Dashboard Data Integration",
        "Bilingual Cartography & Layout Design (Khmer & English)",
        "End-to-End GIS Monitoring Workflow & Quality Control",
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
