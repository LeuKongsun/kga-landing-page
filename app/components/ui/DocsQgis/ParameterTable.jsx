"use client";

import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/qgis/_data/ui";
import DocBlocks from "./DocBlocks";
import RichText from "./RichText";

/**
 * The parameter tables for one tool.
 *
 * `sections` mirrors the metadata file: a batch algorithm is one unnamed
 * section, while an interactive tool has one per tab or pane ("Tab 2 —
 * Assignment", "Advanced", "Outlet slots 1, 2 and 3"), each able to carry a
 * paragraph or a sample table of its own ahead of the grid.
 *
 * The name column is headed **Parameter** for an algorithm and **Control** for
 * a dialog, which is the distinction the metadata draws and the one that tells
 * a reader whether to expect a Processing dialog or a window.
 */
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
          const isControls = /control/i.test(section.nameLabel ?? "");
          const nameHeading = t(isControls ? UI.colControl : UI.colName, language);
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
                  <table className="w-full min-w-[680px] text-left text-sm">
                    <caption id={captionId} className="sr-only">
                      {`${t(UI.parameters, "en")}${toolName ? ` for ${toolName}` : ""}${
                        section.title ? ` — ${t(section.title, "en")}` : ""
                      }`}
                    </caption>
                    <thead className="bg-brand-blue/[0.04] dark:bg-white/5">
                      <tr>
                        <th
                          scope="col"
                          className="w-[26%] px-4 py-3 font-display font-700 text-brand-text dark:text-white"
                        >
                          {nameHeading}
                        </th>
                        <th
                          scope="col"
                          className="w-[18%] px-4 py-3 font-display font-700 text-brand-text dark:text-white"
                        >
                          {t(UI.colType, language)}
                        </th>
                        <th
                          scope="col"
                          className="w-[16%] px-4 py-3 font-display font-700 text-brand-text dark:text-white"
                        >
                          {t(UI.colDefault, language)}
                        </th>
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
                          </th>
                          <td className="px-4 py-3 text-xs leading-relaxed text-brand-text/70 dark:text-gray-300">
                            <RichText value={row.type} />
                          </td>
                          <td className="px-4 py-3 text-xs leading-relaxed text-brand-text/70 dark:text-gray-300">
                            {row.default ? <RichText value={row.default} /> : "—"}
                          </td>
                          <td className="px-4 py-3 leading-relaxed text-brand-text/70 dark:text-gray-300">
                            <RichText value={row.description} />
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

/** The algorithm's declared Processing outputs — name, type, description. */
export const OutputTable = ({ rows = [], toolName = "" }) => {
  const { language } = useLanguage();
  if (!rows.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-display font-700 text-brand-text dark:text-white">
        {t(UI.outputsDeclared, language)}
      </h3>
      <div
        role="region"
        aria-labelledby="outputs-declared-caption"
        tabIndex={0}
        className="overflow-x-auto rounded-2xl border border-brand-blue/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/8"
      >
        <table className="w-full min-w-[560px] text-left text-sm">
          <caption id="outputs-declared-caption" className="sr-only">
            {`${t(UI.outputsDeclared, "en")}${toolName ? ` for ${toolName}` : ""}`}
          </caption>
          <thead className="bg-brand-blue/[0.04] dark:bg-white/5">
            <tr>
              <th scope="col" className="w-[28%] px-4 py-3 font-display font-700 text-brand-text dark:text-white">
                {t(UI.colName, language)}
              </th>
              <th scope="col" className="w-[20%] px-4 py-3 font-display font-700 text-brand-text dark:text-white">
                {t(UI.colType, language)}
              </th>
              <th scope="col" className="px-4 py-3 font-display font-700 text-brand-text dark:text-white">
                {t(UI.colDesc, language)}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-blue/8 dark:divide-white/8">
            {rows.map((row, i) => (
              <tr key={`${row.name}-${i}`} className="align-top">
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-display font-700 text-brand-text dark:text-white"
                >
                  <span lang="en">
                    <RichText value={row.name} />
                  </span>
                </th>
                <td className="px-4 py-3 text-xs leading-relaxed text-brand-text/70 dark:text-gray-300">
                  <RichText value={row.type} />
                </td>
                <td className="px-4 py-3 leading-relaxed text-brand-text/70 dark:text-gray-300">
                  <RichText value={row.description} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParameterTable;
