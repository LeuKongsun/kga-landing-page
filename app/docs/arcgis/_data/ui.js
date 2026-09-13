// Chrome strings for the ArcGIS Pro docs section.
//
// Content strings live in `arcgisDocs.jsx` (generated) and `product.js`
// (hand-written); this file is only the furniture — section headings, table
// column labels, badges and navigation.
//
// `t()` is the shared resolver from components/ui/docsLang.js, re-exported so
// components in DocsArcgis/ have a single import for both.

export { t } from "../../../components/ui/docsLang";

export const UI = {
  docsTitle: {
    km: "ឯកសារណែនាំ KGA Toolbox for ArcGIS Pro",
    en: "KGA Toolbox for ArcGIS Pro Documentation",
  },
  docsShort: { km: "ឯកសារណែនាំ", en: "Documentation" },
  allTools: { km: "ឧបករណ៍ទាំងអស់", en: "All tools" },
  backToIndex: { km: "ត្រឡប់ទៅឯកសារណែនាំ", en: "Back to documentation" },
  onThisPage: { km: "នៅលើទំព័រនេះ", en: "On this page" },
  overview: { km: "ទិដ្ឋភាពទូទៅ", en: "Overview" },
  features: { km: "លក្ខណៈពិសេស", en: "Features" },
  install: { km: "ការដំឡើង", en: "Installation" },
  toolsHeading: { km: "ឧបករណ៍", en: "Tools" },

  // Tool page sections, in the order the metadata files use.
  parameters: { km: "ប៉ារ៉ាម៉ែត្រ", en: "Parameters" },
  usage: { km: "ការប្រើប្រាស់", en: "Usage" },
  howToUse: { km: "របៀបប្រើ", en: "How to use" },
  licensing: { km: "ព័ត៌មានអាជ្ញាបណ្ណ", en: "Licensing information" },
  environments: { km: "បរិស្ថានដំណើរការ", en: "Environments" },
  seeAlso: { km: "មើលផងដែរ", en: "See also" },
  demoVideo: { km: "វីដេអូបង្ហាញ", en: "Demo video" },

  previous: { km: "មុន", en: "Previous" },
  next: { km: "បន្ទាប់", en: "Next" },
  whereToFind: { km: "រកឃើញនៅឯណា", en: "Where to find it" },
  toolType: { km: "ប្រភេទឧបករណ៍", en: "Type" },

  // Parameter table columns. There is no Default column anywhere in the ArcGIS
  // metadata — defaults are written inline in the Explanation text.
  colName: { km: "ឈ្មោះ", en: "Label" },
  colControl: { km: "ផ្ទាំងគ្រប់គ្រង", en: "Control" },
  colInput: { km: "ទិន្នន័យបញ្ចូល", en: "Input" },
  colType: { km: "ប្រភេទទិន្នន័យ", en: "Data Type" },
  colDesc: { km: "ការពិពណ៌នា", en: "Explanation" },
  optional: { km: "ជម្រើស", en: "Optional" },

  // Tool-type badges, matching the three shapes the metadata distinguishes.
  geoprocessingBadge: { km: "ឧបករណ៍ដំណើរការ", en: "Geoprocessing tool" },
  dialogBadge: { km: "ផ្ទាំងអន្តរកម្ម", en: "Custom dialog" },
  oneClickBadge: { km: "ពាក្យបញ្ជាចុចម្តង", en: "One-click command" },

  plannedBadge: { km: "មិនទាន់មាន", en: "Not yet implemented" },
  plannedNotice: {
    km: "ឧបករណ៍នេះបង្ហាញនៅលើរបារ ribbon ប៉ុន្តែមិនទាន់ដំណើរការនៅក្នុងកំណែនេះទេ។ ទំព័រនេះពន្យល់ពីគោលបំណង និងអ្វីដែលគួរប្រើជំនួស។",
    en: "This tool appears on the ribbon but does not run in this release. The page explains what it is intended to do and what to use instead.",
  },

  // Index page.
  toolsLabel: { km: "ឧបករណ៍", en: "tools" },
  groupsLabel: { km: "ក្រុម", en: "groups" },
  versionLabel: { km: "កំណែ", en: "Version" },
  requiresLabel: { km: "ត្រូវការ", en: "Requires" },
  searchLabel: { km: "ស្វែងរកឧបករណ៍", en: "Search tools" },
  searchPlaceholder: { km: "វាយឈ្មោះ ឬពាក្យគន្លឹះ…", en: "Type a tool name or keyword…" },
  clearSearch: { km: "សម្អាត", en: "Clear" },
  allGroups: { km: "ក្រុមទាំងអស់", en: "All groups" },
  noMatches: { km: "រកមិនឃើញឧបករណ៍ដែលត្រូវនឹងការស្វែងរក", en: "No tools match that search" },
  resultCount: { km: "លទ្ធផល", en: "matching" },
  productGroupNote: {
    km: "ទំព័រអំពីផលិតផល មិនមែនជាឧបករណ៍ទេ។",
    en: "Product pages, not tools.",
  },

  notFound: { km: "រកមិនឃើញឧបករណ៍នេះទេ", en: "Tool not found" },
  notFoundBody: {
    km: "ឯកសារណែនាំសម្រាប់ឧបករណ៍នេះមិនទាន់មានទេ។ សូមមើលបញ្ជីឧបករណ៍ទាំងអស់ ឬទាក់ទងផ្នែកជំនួយ។",
    en: "There is no documentation at this address. Browse the full tool list, or contact support.",
  },
  contactSupport: { km: "ទាក់ទងផ្នែកជំនួយ", en: "Contact support" },
  productPage: { km: "ទំព័រផលិតផល", en: "Product page" },
  licenceRequired: { km: "ត្រូវការអាជ្ញាបណ្ណ", en: "Licence required" },
};

export default UI;
