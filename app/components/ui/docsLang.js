// The language resolver shared by every documentation section.
//
// The docs pages deliberately bypass LanguageProvider's DOM walker: it
// translates by matching whole text nodes against an exact Khmer->English
// table, which is fine for a handful of card labels and unworkable across
// documentation prose. Every docs root carries `data-language-switch` so the
// walker skips it, and the content is rendered from { km, en } pairs through
// `t()` instead.
//
// This lives outside any one product's folder because there is nothing
// product-specific in it: `/docs/qgis` and `/docs/arcgis` both re-export it
// from their own `ui.js` rather than keeping a second copy.

/**
 * Resolve a content field for the active language.
 *
 * A field is either a language-neutral plain string (tool names, parameter
 * labels, CRS codes, and body prose that has not been translated yet) or a
 * { km, en } pair. The fallback chain ends at `en` on purpose: body copy
 * transcribed from the plugin or add-in starts out English-only, and showing it
 * in English beats showing an empty paragraph while the Khmer is still being
 * written.
 */
export const t = (value, lang = "km") => {
  if (typeof value === "string") return value;
  if (!value) return "";
  // Deliberately `||`, not `??`: an unwritten translation is stored as "", and
  // an empty string has to fall through to the next language rather than
  // rendering an empty paragraph.
  return value[lang] || value.en || value.km || "";
};

export default t;
