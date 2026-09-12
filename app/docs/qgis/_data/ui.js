// Chrome strings and the language helper for the QGIS docs section.
//
// These pages deliberately bypass LanguageProvider's DOM walker: it translates
// by matching whole text nodes against an exact Khmer->English table, which is
// fine for a handful of card labels and unworkable across documentation prose.
// Every docs root carries `data-language-switch` so the walker skips it, and the
// content is rendered from { km, en } pairs through `t()` instead.

/**
 * Resolve a content field for the active language.
 *
 * A field is either a language-neutral plain string (tool names, QGIS parameter
 * labels, CRS codes) or a { km, en } pair. The fallback chain ends at `en` on
 * purpose: body copy transcribed from the plugin starts out English-only, and
 * showing it in English beats showing an empty paragraph while the Khmer is
 * still being written.
 */
export const t = (value, lang = "km") => {
  if (typeof value === "string") return value;
  if (!value) return "";
  // Deliberately `||`, not `??`: an unwritten translation is stored as "", and
  // an empty string has to fall through to the next language rather than
  // rendering an empty paragraph.
  return value[lang] || value.en || value.km || "";
};

export const UI = {
  docsTitle: { km: "ឯកសារណែនាំ KGA Toolbox for QGIS", en: "KGA Toolbox for QGIS Documentation" },
  docsShort: { km: "ឯកសារណែនាំ", en: "Documentation" },
  allTools: { km: "ឧបករណ៍ទាំងអស់", en: "All tools" },
  backToIndex: { km: "ត្រឡប់ទៅឯកសារណែនាំ", en: "Back to documentation" },
  onThisPage: { km: "នៅលើទំព័រនេះ", en: "On this page" },
  overview: { km: "ទិដ្ឋភាពទូទៅ", en: "Overview" },
  features: { km: "លក្ខណៈពិសេស", en: "Features" },
  install: { km: "ការដំឡើង", en: "Installation" },
  installZip: { km: "ដំឡើងពីឯកសារ ZIP", en: "Install from ZIP" },
  toolsHeading: { km: "ឧបករណ៍", en: "Tools" },
  parameters: { km: "ប៉ារ៉ាម៉ែត្រ", en: "Parameters" },
  outputs: { km: "លទ្ធផល", en: "Outputs" },
  notes: { km: "កំណត់សម្គាល់", en: "Notes" },
  demoVideo: { km: "វីដេអូបង្ហាញ", en: "Demo video" },
  seeAlso: { km: "មើលផងដែរ", en: "See also" },
  previous: { km: "មុន", en: "Previous" },
  next: { km: "បន្ទាប់", en: "Next" },
  whereToFind: { km: "រកឃើញនៅឯណា", en: "Where to find it" },
  summaryOnly: { km: "សង្ខេប", en: "Summary only" },
  stubNotice: {
    km: "ឯកសារលម្អិតសម្រាប់ឧបករណ៍នេះកំពុងរៀបចំ។ សង្ខេបខាងលើមកពីកម្មវិធីជំនួយផ្ទាល់។",
    en: "Full documentation for this tool is being written. The summary above comes from the plugin itself.",
  },
  notFound: { km: "រកមិនឃើញឧបករណ៍នេះទេ", en: "Tool not found" },
  notFoundBody: {
    km: "ឯកសារណែនាំសម្រាប់ឧបករណ៍នេះមិនទាន់មានទេ។ សូមមើលបញ្ជីឧបករណ៍ទាំងអស់ ឬរាយការណ៍បញ្ហា។",
    en: "There is no documentation at this address yet. Browse the full tool list, or report it on the issue tracker.",
  },
  reportIssue: { km: "រាយការណ៍បញ្ហា", en: "Report an issue" },
  viewOnGithub: { km: "មើលលើ GitHub", en: "View on GitHub" },
  pluginRepo: { km: "ឃ្លាំងកម្មវិធីជំនួយ QGIS", en: "QGIS Plugin Repository" },
  toolsLabel: { km: "ឧបករណ៍", en: "tools" },
  groupsLabel: { km: "ក្រុម", en: "groups" },
  versionLabel: { km: "កំណែ", en: "Version" },
  requiresLabel: { km: "ត្រូវការ", en: "Requires" },
  colName: { km: "ឈ្មោះ", en: "Name" },
  colType: { km: "ប្រភេទ", en: "Type" },
  colRequired: { km: "ចាំបាច់", en: "Required" },
  colDefault: { km: "តម្លៃលំនាំដើម", en: "Default" },
  colDesc: { km: "ការពិពណ៌នា", en: "Description" },
  colControl: { km: "ផ្ទាំងគ្រប់គ្រង", en: "Control" },
  yes: { km: "បាទ/ចាស", en: "Yes" },
  no: { km: "ទេ", en: "No" },

  // Tool page section headings and the identity card.
  howToUse: { km: "របៀបប្រើ", en: "How to use" },
  notesAndLimits: { km: "កំណត់សម្គាល់ និងដែនកំណត់", en: "Notes and limits" },
  outputsDeclared: { km: "លទ្ធផលដែលប្រកាស", en: "Outputs declared" },
  whatYouGet: { km: "អ្វីដែលអ្នកទទួលបាន", en: "What you get" },
  algorithmId: { km: "លេខសម្គាល់ algorithm", en: "Algorithm ID" },
  toolType: { km: "ប្រភេទឧបករណ៍", en: "Type" },
  interactiveBadge: { km: "ផ្ទាំងអន្តរកម្ម", en: "Interactive dialog" },
  batchBadge: { km: "ដំណើរការជាបាច់", en: "Batch algorithm" },
};
