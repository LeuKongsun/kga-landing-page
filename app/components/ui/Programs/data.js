export const programs = [
  {
    id: "toolbox",
    name: "KGA Toolbox for ArcGIS Pro",
    // Kept short for the tab selector, which has a fixed-height row.
    shortName: "KGA Toolbox",
    accent: "Toolbox",
    // Rendered muted after the accent, so the two Toolbox cards stay distinct
    // without painting the whole platform name orange.
    suffix: "for ArcGIS Pro",
    icon: "toolbox",
    // `logo` wins over `icon` in the selector tab. Square PNG on a
    // transparent background, so it sits on the tile in either theme.
    logo: "/images/kga-toolbox-logo.png",
    badge: "ឧបករណ៍ ArcGIS Pro",
    platform: "ArcGIS Pro",
    tagline: "ឧបករណ៍ GIS កម្រិតវិស្វកម្មសម្រាប់ ArcGIS Pro",
    overview:
      "KGA Toolbox ជួយកាត់បន្ថយការងារដដែលៗ ពង្រឹងគុណភាពទិន្នន័យ និងបង្កើនល្បឿនការផលិតផែនទីសម្រាប់អ្នកជំនាញ GIS។",
    description:
      "បណ្តុំឧបករណ៍សម្រាប់កម្មវិធី ArcGIS Pro ពីការគ្រប់គ្រងទិន្នន័យធម្មតា រហូតដល់ការផលិតផែនទីកម្រិតជំនាញ។",
    details:
      "កម្មវិធីនេះត្រូវបានបង្កើតឡើងសម្រាប់ការងារ GIS ប្រចាំថ្ងៃ និងការងារផលិតកម្មដែលត្រូវការភាពត្រឹមត្រូវ។ វាជួយសម្រួលលំហូរការងារផែនទីកាដាស្ត្រ ការត្រួតពិនិត្យ topology ការរៀបចំទិន្នន័យ និងការធ្វើស្វ័យប្រវត្តិកម្មក្នុង ArcGIS Pro។",
    features: [
      "ការងារផែនទីកាដាស្ត្រ",
      "ពិនិត្យគុណភាពទិន្នន័យ",
      "ស្វ័យប្រវត្តិកម្មលំហូរការងារ",
      "ភ្ជាប់ជាមួយ ArcGIS Pro",
    ],
    highlights: [
      {
        title: "ផលិតផែនទីលឿនជាងមុន",
        description: "កាត់បន្ថយជំហានធ្វើដដែលៗក្នុងការរៀបចំទិន្នន័យ និង layout។",
      },
      {
        title: "គ្រប់គ្រងគុណភាពទិន្នន័យ",
        description: "ជួយពិនិត្យកំហុស និងរក្សាស្តង់ដារទិន្នន័យ GIS។",
      },
      {
        title: "បង្កើត workflow ជាប្រព័ន្ធ",
        description: "ធ្វើឱ្យក្រុមការងារអាចអនុវត្តលំហូរការងារដូចគ្នា។",
      },
      {
        title: "សម្រាប់អ្នកជំនាញ GIS",
        description: "រចនាសម្រាប់ការងារផលិតកម្ម ផែនទីដីធ្លី និងការវិភាគទិន្នន័យ។",
      },
    ],
    image: "/images/kga-toolbox.png",
    href: "/kga-toolbox",
    cta: "មើល KGA Toolbox for ArcGIS Pro",
    primaryActionLabel: "មើល KGA Toolbox for ArcGIS Pro",
  },
  {
    id: "toolbox-qgis",
    name: "KGA Toolbox for QGIS",
    shortName: "KGA Toolbox (QGIS)",
    accent: "Toolbox",
    suffix: "for QGIS",
    icon: "qgis",
    logo: "/images/kga-toolbox-qgis-logo.png",
    badge: "កម្មវិធីជំនួយ QGIS",
    platform: "QGIS",
    isFree: true,
    tagline: "កម្មវិធីជំនួយ QGIS ឥតគិតថ្លៃ ដែលមានឧបករណ៍ ៤១",
    overview:
      "KGA Toolbox for QGIS ជាកម្មវិធីជំនួយឥតគិតថ្លៃ ដែលបន្ថែមឧបករណ៍ដំណើរការ ៤១ ទៅក្នុង QGIS សម្រាប់ការគ្រប់គ្រងទិន្នន័យ ស្គីម៉ា ការកែសម្រួល topology និងការបម្លែងទម្រង់ទិន្នន័យ។",
    description:
      "កម្មវិធីជំនួយឥតគិតថ្លៃសម្រាប់ QGIS 3.28 ឬថ្មីជាងនេះ ដែលបន្ថែមឧបករណ៍ដំណើរការ ៤១ ជា ៧ ក្រុម ព្រមទាំងរបារឧបករណ៍ដាច់ដោយឡែក។",
    details:
      "កម្មវិធីជំនួយនេះបំពេញចន្លោះដែល QGIS មិនទាន់មាន៖ ការបម្លែងទៅវិញទៅមករវាង ArcGIS File Geodatabase និង GeoPackage ដោយរក្សា field domains និង aliases ការកែសម្រួល domain ក្នុង GeoPackage ការ append ជាមួយ field mapping ពិតប្រាកដ ការនាំចេញ-នាំចូលគុណលក្ខណៈជាមួយ Excel និងទម្រង់ layer package ដាច់ដោយឡែក។",
    features: [
      "ឧបករណ៍ ៤១ ជា ៧ ក្រុម",
      "បម្លែង File Geodatabase ↔ GeoPackage",
      "គ្រប់គ្រង domain និងស្គីម៉ា",
      "ពិនិត្យ topology និងកំហុសទិន្នន័យ",
    ],
    highlights: [
      {
        title: "ឥតគិតថ្លៃទាំងស្រុង",
        description: "ដំឡើងពីឃ្លាំងកម្មវិធីជំនួយ QGIS ដោយមិនគិតថ្លៃ។",
      },
      {
        title: "ធ្វើការជាមួយ ArcGIS បានរលូន",
        description: "បម្លែង File Geodatabase និង GeoPackage ដោយរក្សា domains និង aliases។",
      },
      {
        title: "ឧបករណ៍កែសម្រួលបែប ArcGIS Pro",
        description: "Construct Polygon, Copy Parallel, Buffer, Merge, Divide និង Clip។",
      },
      {
        title: "មានឯកសារណែនាំពេញលេញ",
        description: "ឧបករណ៍នីមួយៗមានទំព័រណែនាំ ភ្ជាប់ដោយផ្ទាល់ពីប៊ូតុង Help ក្នុង QGIS។",
      },
    ],
    // 16:10, so it fits the featured panel exactly; the 16:9 grid card crops a
    // little off the top and bottom, which the centred QGIS window survives.
    image: "/images/kga-toolbox-cover.png",
    href: "/docs/qgis",
    cta: "មើលឯកសារ KGA Toolbox for QGIS",
    primaryActionLabel: "មើលឯកសារ KGA Toolbox for QGIS",
  },
  {
    id: "geodigitizer",
    name: "KGA Geodigitizer",
    accent: "Geodigitizer",
    icon: "geodigitizer",
    logo: "/images/kga-geodigitizer-logo.png",
    badge: "Web-GIS",
    platform: "Web-GIS",
    tagline: "គូសបង្កើតទិន្នន័យ GIS បានលឿន និងងាយស្រួល",
    overview:
      "KGA Geodigitizer ផ្តល់ផ្ទាំង Web-GIS ងាយប្រើ សម្រាប់គូសបង្កើតទិន្នន័យចំណុច ខ្សែ និងពហុកោណ ដោយមិនចាំបាច់រៀបចំកម្មវិធីស្មុគស្មាញ។",
    description:
      "Web-GIS សម្រាប់គូសបង្កើតទិន្នន័យ GIS ដូចជា ចំណុច ខ្សែ និងពហុកោណ បានលឿន និងមានភាពងាយស្រួល។",
    details:
      "កម្មវិធីនេះសមស្របសម្រាប់អ្នកដែលត្រូវការបង្កើតទិន្នន័យ GIS ពី browser ដោយផ្តោតលើភាពងាយស្រួល ល្បឿន និងលទ្ធផលដែលអាចយកទៅប្រើបន្តក្នុងការងារ GIS។",
    features: [
      "គូសទិន្នន័យបានងាយស្រួល",
      "បង្កើតទិន្នន័យបានលឿន",
      "លទ្ធផលមានភាពត្រឹមត្រូវ",
      "ផ្ទាំងប្រើប្រាស់ងាយយល់",
    ],
    highlights: [
      {
        title: "ចាប់ផ្តើមបានលឿន",
        description: "បើកតាម browser ហើយចាប់ផ្តើមគូសទិន្នន័យបានភ្លាមៗ។",
      },
      {
        title: "គាំទ្រទម្រង់ GIS សំខាន់ៗ",
        description: "បង្កើតចំណុច ខ្សែ និងពហុកោណសម្រាប់ការងារផែនទី។",
      },
      {
        title: "ងាយស្រួលសម្រាប់ក្រុមការងារ",
        description: "ផ្ទាំងប្រើប្រាស់រៀបចំឱ្យងាយយល់សម្រាប់អ្នកប្រើថ្មី។",
      },
      {
        title: "ប្រើបានក្នុងការងារជាក់ស្តែង",
        description: "ជួយប្រមូល និងរៀបចំទិន្នន័យដំបូងសម្រាប់គម្រោង GIS។",
      },
    ],
    image: "/images/kga-geodigitizer.png",
    href: "/geodigitizer",
    cta: "មើល KGA Geodigitizer",
    primaryActionLabel: "មើល KGA Geodigitizer",
  },
  {
    id: "geolayout-studio",
    name: "GeoLayout Studio",
    accent: "GeoLayout Studio",
    icon: "geolayout",
    logo: "/images/kga-geolayout-studio-logo.png",
    badge: "Web-GIS",
    platform: "Web-GIS",
    tagline: "នឹងមាននៅពេលអនាគត",
    overview: "GeoLayout Studio នឹងមាននៅពេលអនាគត។",
    description: "នឹងមាននៅពេលអនាគត។",
    details: "GeoLayout Studio នឹងមាននៅពេលអនាគត។ ព័ត៌មានលម្អិតនឹងត្រូវបានបន្ថែមនៅពេលក្រោយ។",
    features: ["នឹងមាននៅពេលអនាគត"],
    highlights: [
      {
        title: "នឹងមាននៅពេលអនាគត",
        description: "ព័ត៌មានលម្អិតនឹងត្រូវបានបន្ថែមនៅពេលក្រោយ។",
      },
    ],
    image: null,
    href: null,
    cta: "នឹងមាននៅពេលអនាគត",
    primaryActionLabel: "នឹងមាននៅពេលអនាគត",
    isComingSoon: true,
  },
];