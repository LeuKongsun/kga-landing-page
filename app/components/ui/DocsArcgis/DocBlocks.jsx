"use client";

import { AlertTriangle, CheckCircle2, Info, OctagonAlert } from "lucide-react";
import { useLanguage } from "../../LanguageProvider";
import { t } from "../../../docs/arcgis/_data/ui";
import RichText from "./RichText";

/**
 * Anchor id for a heading block.
 *
 * Derived from the ENGLISH text so "On this page" links keep working when the
 * reader switches language mid-page.
 */
export const headingId = (block, index) => {
  const base = t(block.text, "en")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base ? `section-${base}` : `section-${index}`;
};

const toneStyles = {
  info: {
    Icon: Info,
    wrap: "border-brand-blue/20 bg-brand-blue/[0.06] dark:border-blue-300/25 dark:bg-blue-300/10",
    icon: "text-brand-blue dark:text-blue-300",
  },
  warning: {
    Icon: AlertTriangle,
    wrap: "border-amber-500/30 bg-amber-500/10 dark:border-amber-400/30 dark:bg-amber-400/10",
    icon: "text-amber-600 dark:text-amber-300",
  },
  danger: {
    Icon: OctagonAlert,
    wrap: "border-red-500/30 bg-red-500/10 dark:border-red-400/30 dark:bg-red-400/10",
    icon: "text-red-600 dark:text-red-300",
  },
};

/**
 * A blockquote from the metadata. The add-in's own convention (stated in the
 * toolMetadata README) is that a blockquote marks a prerequisite or a warning
 * that decides whether the tool will run at all, so these are never decorative.
 */
const Callout = ({ tone = "info", children }) => {
  const { Icon, wrap, icon } = toneStyles[tone] ?? toneStyles.info;
  return (
    <div className={`flex gap-3 rounded-2xl border p-4 ${wrap}`}>
      <Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${icon}`} aria-hidden="true" />
      <p className="text-sm leading-relaxed text-brand-text/80 dark:text-gray-200">{children}</p>
    </div>
  );
};

const markers = {
  check: { Icon: CheckCircle2, className: "text-brand-orange" },
  info: { Icon: Info, className: "text-brand-blue dark:text-blue-300" },
};

/**
 * One bullet. A metadata bullet may carry its own indented sub-bullets — the
 * option list under a mode switch, the columns a report writes — so a second
 * level is rendered rather than flattened into the parent sentence.
 */
const ListItem = ({ item, marker }) => {
  const { Icon, className } = markers[marker] ?? markers.check;
  const nested = item?.items ?? [];
  const text = nested.length || item?.text !== undefined ? item.text : item;

  return (
    <li className="text-base leading-relaxed text-brand-text/70 dark:text-gray-300">
      <span className="flex gap-2">
        <Icon className={`mt-1 h-4 w-4 flex-shrink-0 ${className}`} aria-hidden="true" />
        <span>
          <RichText value={text} />
        </span>
      </span>
      {nested.length > 0 && (
        <ul className="mt-2 ml-6 space-y-1.5 border-l border-brand-blue/10 pl-4 dark:border-white/10">
          {nested.map((child, i) => (
            <li key={i} className="text-[0.95rem] leading-relaxed text-brand-text/65 dark:text-gray-400">
              <RichText value={child} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

/**
 * A free-standing table from the metadata — the output matrices, the "use
 * instead" tables, the mode comparisons. Parameter tables do NOT come through
 * here; they are `ParameterTable`.
 */
const BlockTable = ({ block }) => (
  <div
    role="region"
    tabIndex={0}
    className="overflow-x-auto rounded-2xl border border-brand-blue/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/8"
  >
    <table className="w-full text-left text-sm">
      <thead className="bg-brand-blue/[0.04] dark:bg-white/5">
        <tr>
          {(block.head ?? []).map((cell, i) => (
            <th
              key={i}
              scope="col"
              className="whitespace-nowrap px-4 py-3 font-display font-700 text-brand-text dark:text-white"
            >
              <RichText value={cell} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-brand-blue/8 dark:divide-white/8">
        {(block.rows ?? []).map((row, i) => (
          <tr key={i} className="align-top">
            {row.map((cell, j) => (
              <td
                key={j}
                className={`px-4 py-3 leading-relaxed text-brand-text/70 dark:text-gray-300 ${
                  j === 0 ? "font-display font-600 text-brand-text dark:text-white" : ""
                }`}
              >
                <RichText value={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/**
 * The same block vocabulary at table-cell scale.
 *
 * A parameter's Explanation routinely holds a sentence followed by the list of
 * values the control accepts, held in the metadata behind `<br><br>` and
 * `<br>`. The parser splits those into real blocks; this renders them without
 * the outer spacing and base font size that would blow a table row apart.
 */
export const CellBlocks = ({ blocks = [] }) => {
  if (!blocks.length) return null;
  return (
    <div className="space-y-2">
      {blocks.map((block, index) => {
        if (block.type === "list") {
          return (
            <ul key={index} className="ml-4 list-disc space-y-1 marker:text-brand-orange/60">
              {(block.items ?? []).map((item, i) => (
                <li key={i} className="leading-relaxed">
                  <RichText value={item?.text ?? item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="leading-relaxed">
            <RichText value={block.text} />
          </p>
        );
      })}
    </div>
  );
};

/**
 * Renders the block array used by every tool's `body`, `usage`, `steps`,
 * `licensing` and `environments`. Unknown block types are skipped rather than
 * thrown on, so adding a type to the data file cannot break a page that has not
 * been updated yet.
 */
const DocBlocks = ({ blocks = [], marker = "check" }) => {
  const { language } = useLanguage();

  if (!blocks.length) return null;

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                id={headingId(block, index)}
                className="mb-2 mt-8 text-xl font-display font-700 text-brand-text dark:text-white md:text-2xl"
              >
                {t(block.text, language)}
              </h2>
            );

          case "subheading":
            return (
              <h3
                key={index}
                className="mb-1 mt-6 text-lg font-display font-700 text-brand-text dark:text-white"
              >
                <RichText value={block.text} />
              </h3>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="font-body text-base leading-relaxed text-brand-text/70 dark:text-gray-300"
              >
                <RichText value={block.text} />
              </p>
            );

          case "list":
            return (
              <ul key={index} className="space-y-2 pl-1">
                {(block.items ?? []).map((item, i) => (
                  <ListItem key={i} item={item} marker={marker} />
                ))}
              </ul>
            );

          case "steps":
            return (
              <ol
                key={index}
                className="list-decimal space-y-2.5 pl-6 text-base leading-relaxed text-brand-text/70 marker:font-display marker:font-700 marker:text-brand-orange dark:text-gray-300"
              >
                {(block.items ?? []).map((item, i) => (
                  <li key={i} className="pl-1">
                    <RichText value={item?.text ?? item} />
                    {/* A step can carry its own sub-bullets — the fields a
                        dialog tab exposes, the files a run writes. */}
                    {item?.items?.length > 0 && (
                      <ul className="mt-2 space-y-1.5 border-l border-brand-blue/10 pl-4 dark:border-white/10">
                        {item.items.map((child, j) => (
                          <li
                            key={j}
                            className="text-[0.95rem] leading-relaxed text-brand-text/65 dark:text-gray-400"
                          >
                            <RichText value={child} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            );

          case "note":
            return (
              <Callout key={index} tone={block.tone}>
                <RichText value={block.text} />
              </Callout>
            );

          case "table":
            return <BlockTable key={index} block={block} />;

          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-xl border border-brand-blue/8 bg-brand-blue/[0.03] p-4 font-mono text-sm text-brand-text/80 dark:border-white/8 dark:bg-white/5 dark:text-gray-200"
              >
                <code>{t(block.text, language)}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default DocBlocks;
