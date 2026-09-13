"use client";

import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/arcgis/_data/ui";
import DocBlocks, { CellBlocks } from "./DocBlocks";
import RichText from "./RichText";

/**
 * The parameter tables for one tool.
 *
 * `sections` mirrors the metadata file: a geoprocessing tool is usually one
 * unnamed section, sometimes followed by a "Derived Output" one; a dialog has
 * one per tab or pane ("Setback Setting", "Chart Properties", "Divide by
 * ratio"), each able to carry a paragraph or a table of its own ahead of the
 * grid.
 *
 * Three things differ from the QGIS equivalent, all of them driven by the
 * source rather than by taste:
 *
 * - There is no Default column. The ArcGIS metadata has none; defaults are
 *   written inline in the Explanation as `` `Meters` (default) ``.
 * - The first column is headed Label, Control or Input, copying the metadata's
 *   own heading. That distinction is the one that tells a reader whether to
 *   expect a geoprocessing dialog or a custom window.
 * - The Data Type column only exists on the Label variant, so it is dropped
 *   entirely for the others rather than shipping a run of blank cells.
 */

const HEADINGS = { Label: UI.colName, Control: UI.colControl, Input: UI.colInput };

const ParameterTable = ({ sections = [], toolName = "" }) => {
  const { language } = useLanguage();

  const usable = sections.filter((section) => section.rows?.length || section.blocks?.length);
  if (!usable.length) return null;

  return (
    <section aria-labelledby="parameters-heading" className="mt-12 scroll-mt-28" id="section-parameters">
      <h2
        id="parameters-heading"
        className="mb-4 text-xl font-display font-700 text-brand-text dark:text-white md:text-2xl"
      >
        {t(UI.parameters, language)}
      </h2>

      <div className="space-y-6">
        {usable.map((section, index) => {
          const nameHeading = t(HEADINGS[section.nameLabel] ?? UI.colName, language);
          // `showType` records whether the source table had a Data Type column
          // at all; the row check catches a table that has one but never fills
          // it, since an empty column reads as a broken table.
          const showType =
            section.showType && (section.rows ?? []).some((row) => row.type);
          const captionId = `parameters-${index}`;

          return (
            <div key={index} className="space-y-3">
              {section.title && (
                <h3 className="mt-2 text-lg font-display font-700 text-brand-text dark:text-white">
                  <RichText value={section.title} />
                </h3>
              )}

              {section.blocks?.length > 0 && <DocBlocks blocks={section.blocks} />}

              {section.rows?.length > 0 && (
                // role=region + tabIndex keeps a horizontally scrolling table
                // reachable by keyboard, which is the usual miss on docs tables.
                <div
                  role="region"
                  aria-labelledby={captionId}
                  tabIndex={0}
                  className="overflow-x-auto rounded-2xl border border-brand-blue/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/8"
                >
                  <table
                    className={`w-full text-left text-sm ${
                      showType ? "min-w-[680px]" : "min-w-[520px]"
                    }`}
                  >
                    <caption id={captionId} className="sr-only">
                      {`${t(UI.parameters, "en")}${toolName ? ` for ${toolName}` : ""}${
                        section.title ? ` — ${t(section.title, "en")}` : ""
                      }`}
                    </caption>
                    <thead className="bg-brand-blue/[0.04] dark:bg-white/5">
                      <tr>
                        <th
                          scope="col"
                          className={`px-4 py-3 font-display font-700 text-brand-text dark:text-white ${
                            showType ? "w-[26%]" : "w-[30%]"
                          }`}
                        >
                          {nameHeading}
                        </th>
                        {showType && (
                          <th
                            scope="col"
                            className="w-[20%] px-4 py-3 font-display font-700 text-brand-text dark:text-white"
                          >
                            {t(UI.colType, language)}
                          </th>
                        )}
                        <th
                          scope="col"
                          className="px-4 py-3 font-display font-700 text-brand-text dark:text-white"
                        >
                          {t(UI.colDesc, language)}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-blue/8 dark:divide-white/8">
                      {section.rows.map((row, i) => (
                        <tr key={`${row.name}-${i}`} className="align-top">
                          <th
                            scope="row"
                            className="px-4 py-3 text-left font-display font-700 text-brand-text dark:text-white"
                          >
                            <span lang="en">
                              <RichText value={row.name} />
                            </span>
                            {/* The metadata marks these `(Optional)` in the
                                label itself; lifted out so the name stays
                                readable and the signal stays visible. */}
                            {row.optional && (
                              <span className="mt-1 block text-[11px] font-body font-400 text-brand-text/50 dark:text-gray-400">
                                {t(UI.optional, language)}
                              </span>
                            )}
                          </th>
                          {showType && (
                            <td className="px-4 py-3 text-xs leading-relaxed text-brand-text/70 dark:text-gray-300">
                              {row.type ? <RichText value={row.type} /> : "—"}
                            </td>
                          )}
                          <td className="px-4 py-3 leading-relaxed text-brand-text/70 dark:text-gray-300">
                            <CellBlocks blocks={row.description} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ParameterTable;
