"use client";

import Link from "next/link";
import { useLanguage } from "../../LanguageProvider";
import { t } from "../../../docs/qgis/_data/ui";
import { SLUGS } from "../../../docs/qgis/_data/qgisDocs";

/**
 * Inline Markdown for the docs copy.
 *
 * The tool text is transcribed verbatim from the plugin's own
 * `kga_tools/toolMetadata/<name>.md`, which leans on **bold** for the parameter
 * and button labels, `code` for paths and literal values, and
 * `[label](other_tool.md)` to point at a sibling tool. Rendering that markup is
 * what keeps a paragraph of five button names readable, so it is parsed here
 * rather than stripped on the way in — the data file stays a faithful copy of
 * the metadata.
 *
 * Deliberately only these four: no headings, no nesting inside links. Anything
 * else falls through as plain text.
 *
 * Bold and italic parse their own contents, because the metadata routinely
 * wraps a link or a literal in one — **`True`**, **[Open Layer
 * Package](open_layer_package.md)** — and a non-recursive pass would print the
 * markup instead of rendering it.
 */

// One pass, one regex: link | bold | italic | code. Order matters — `**` has to
// be tried before `*` or every bold marker reads as two empty italics.
const TOKEN =
  /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(?<![\w*])\*([^*\n]+)\*(?!\w)|`([^`]+)`/g;

/** `other_tool.md` -> `/docs/qgis/other_tool`, anything else stays as written. */
const resolveHref = (href) => {
  const local = /^([a-z0-9_]+)\.md$/.exec(href);
  if (local && SLUGS.includes(local[1])) return `/docs/qgis/${local[1]}`;
  return href;
};

const Code = ({ children }) => (
  <code className="rounded bg-brand-blue/[0.07] px-1 py-0.5 font-mono text-[0.9em] text-brand-text/85 dark:bg-white/10 dark:text-gray-100">
    {children}
  </code>
);

const parse = (text) => {
  const nodes = [];
  let last = 0;
  let match;

  // `exec` on a /g regex is stateful, and parse() calls itself for the inside
  // of a bold or italic run, so each level keeps its own cursor.
  const token = new RegExp(TOKEN.source, TOKEN.flags);
  while ((match = token.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const [, linkText, href, bold, italic, code] = match;

    if (linkText !== undefined) {
      const resolved = resolveHref(href);
      const internal = resolved.startsWith("/");
      const className =
        "font-600 text-brand-orange underline decoration-brand-orange/30 underline-offset-2 transition-colors hover:text-brand-orange-hover hover:decoration-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60";
      nodes.push(
        internal ? (
          <Link key={nodes.length} href={resolved} className={className}>
            <span lang="en">{linkText}</span>
          </Link>
        ) : (
          <a
            key={nodes.length}
            href={resolved}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            <span lang="en">{linkText}</span>
          </a>
        ),
      );
    } else if (bold !== undefined) {
      nodes.push(
        <strong key={nodes.length} className="font-display font-700 text-brand-text dark:text-white">
          {parse(bold)}
        </strong>,
      );
    } else if (italic !== undefined) {
      nodes.push(<em key={nodes.length}>{parse(italic)}</em>);
    } else if (code !== undefined) {
      nodes.push(<Code key={nodes.length}>{code}</Code>);
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
};

const RichText = ({ value }) => {
  const { language } = useLanguage();
  const text = t(value, language);
  if (!text) return null;
  return <>{parse(text)}</>;
};

export default RichText;
