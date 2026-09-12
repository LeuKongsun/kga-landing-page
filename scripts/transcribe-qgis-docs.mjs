// Re-transcribe the KGA Toolbox for QGIS tool pages from the plugin's own
// reference docs.
//
// The plugin ships one Markdown file per algorithm in
// `kga_tools/toolMetadata/<name>.md`, each with an identity header, Overview,
// Parameters, How to use, Outputs and Notes and limits. That folder is the
// source of truth for the tool pages; it is deliberately NOT vendored into this
// repo, so this script reads it from wherever the plugin checkout lives and
// rewrites the `tools` array in app/docs/qgis/_data/qgisDocs.jsx.
//
//   node scripts/transcribe-qgis-docs.mjs [path/to/kga_tools/toolMetadata]
//   node scripts/transcribe-qgis-docs.mjs --check      # CI: fail if stale
//
// The path may also come from KGA_TOOL_METADATA; it defaults to the sibling
// plugin checkout, which is where it sits on the machines that do this work.
//
// WHAT IT PRESERVES, and why the script is safe to re-run:
//
//   * The tool list itself. Slugs, groups, names, icons, Processing paths,
//     summaries and video ids are NOT derived from the metadata — they are read
//     back out of the existing data file and written through unchanged. A tool
//     added to the plugin therefore needs a hand-written entry here first; the
//     script fills in its content, it does not invent its identity. Order is
//     preserved too, and it mirrors branding.py.
//
//   * Khmer translations. Every prose field is a { km, en } pair, and the
//     metadata is English only. Rather than blanking the Khmer on each run, the
//     script indexes the existing file by English string and carries the
//     matching Khmer across. Translating a paragraph and then re-running this
//     keeps the translation, as long as the English it was written against has
//     not changed. Translations whose English HAS changed are reported at the
//     end so they can be redone rather than silently lost.
//
// The metadata's inline Markdown (**bold**, `code`, [label](other_tool.md)) is
// copied through verbatim and rendered by DocsQgis/RichText, so the data file
// stays a faithful copy of the metadata rather than a lossy paraphrase.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const TARGET = path.join(root, "app", "docs", "qgis", "_data", "qgisDocs.jsx");

const args = process.argv.slice(2);
const checkOnly = args.includes("--check");
const positional = args.find((arg) => !arg.startsWith("--"));
const SRC =
  positional ??
  process.env.KGA_TOOL_METADATA ??
  path.join(root, "..", "PlugIn for QGIS", "kga_tools", "toolMetadata");

// ---------------------------------------------------------------------------
// Markdown
// ---------------------------------------------------------------------------

// Some metadata files were saved through a cp1252 round trip. Undo the double
// encoding rather than shipping "Browseâ€¦" to the page.
const demojibake = (s) =>
  s
    .replace(/â€¦/g, "…")
    .replace(/â€”/g, "—")
    .replace(/â€“/g, "–")
    .replace(/â€™/g, "’")
    .replace(/â€œ/g, "“")
    .replace(/â€/g, "”")
    .replace(/â€˜/g, "‘")
    .replace(/â€º/g, "›")
    .replace(/Â/g, "");

const clean = (s) => String(s ?? "").replace(/\s+/g, " ").trim();

const norm = (s) =>
  String(s)
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/** A table row, honouring `\|` as a literal pipe inside a cell. */
const splitRow = (line) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split(/(?<!\\)\|/)
    .map((cell) => cell.replace(/\\\|/g, "|").trim());

const isTableSep = (line) => /^\|[\s:|-]+\|$/.test(line.trim()) && line.includes("-");

/**
 * Markdown -> the block array the page renders: paragraph, list, steps, table
 * and subheading. Inline markup is left in the text for RichText to handle.
 */
function parseBlocks(lines) {
  const blocks = [];
  let i = 0;
  const n = lines.length;

  while (i < n) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.trim().startsWith("|") && i + 1 < n && isTableSep(lines[i + 1])) {
      const head = splitRow(line);
      i += 2;
      const rows = [];
      while (i < n && lines[i].trim().startsWith("|")) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", head, rows });
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < n) {
        const l = lines[i];
        if (/^\d+\.\s/.test(l)) {
          items.push(l.replace(/^\d+\.\s+/, "").trim());
          i++;
        } else if (/^\s+\S/.test(l) && items.length) {
          items[items.length - 1] += " " + l.trim();
          i++;
        } else break;
      }
      blocks.push({ type: "steps", items });
      continue;
    }

    // Bullets, with the one level of nesting the metadata actually uses.
    if (/^[-*]\s/.test(line)) {
      const items = [];
      while (i < n) {
        const l = lines[i];
        if (/^[-*]\s/.test(l)) {
          items.push({ text: l.replace(/^[-*]\s+/, "").trim(), items: [] });
          i++;
        } else if (/^\s{2,}[-*]\s/.test(l) && items.length) {
          items[items.length - 1].items.push(l.trim().replace(/^[-*]\s+/, ""));
          i++;
        } else if (/^\s+\S/.test(l) && items.length) {
          const last = items[items.length - 1];
          if (last.items.length) last.items[last.items.length - 1] += " " + l.trim();
          else last.text += " " + l.trim();
          i++;
        } else break;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    if (/^###\s/.test(line)) {
      blocks.push({ type: "subheading", text: line.replace(/^###\s+/, "").trim() });
      i++;
      continue;
    }

    const buf = [];
    while (
      i < n &&
      lines[i].trim() &&
      !/^[-*]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !lines[i].trim().startsWith("|") &&
      !/^#{2,3}\s/.test(lines[i])
    ) {
      buf.push(lines[i].trim());
      i++;
    }
    if (buf.length) blocks.push({ type: "paragraph", text: buf.join(" ") });
  }

  return blocks;
}

/** One metadata file: its identity header plus its `##` sections. */
function parseFile(slug) {
  const file = path.join(SRC, `${slug}.md`);
  if (!fs.existsSync(file)) throw new Error(`no metadata for "${slug}" at ${file}`);

  const raw = demojibake(fs.readFileSync(file, "utf8")).replace(/\r\n/g, "\n");
  const lines = raw.split("\n");

  const meta = {};
  for (const line of lines.slice(0, 12)) {
    if (!line.trim().startsWith("|") || isTableSep(line)) continue;
    const cells = splitRow(line);
    if (cells.length < 2) continue;
    const key = cells[0].replace(/\*\*/g, "").trim();
    if (key) meta[key] = cells[1].trim();
  }

  const sections = [];
  let current = null;
  for (const line of lines) {
    if (/^##\s/.test(line)) {
      current = { name: line.replace(/^##\s+/, "").trim(), lines: [] };
      sections.push(current);
    } else if (current) current.lines.push(line);
  }

  const blocksOf = (name) => {
    const section = sections.find((s) => s.name.toLowerCase() === name.toLowerCase());
    return section ? parseBlocks(section.lines) : [];
  };

  return { meta, raw, blocksOf };
}

// ---------------------------------------------------------------------------
// Transcription
// ---------------------------------------------------------------------------

// A table under ## Parameters is a parameter table only if it is shaped like
// one. The others — a CSV layout sample, the weir coefficients, the geometry
// matrix — stay as blocks and render as plain tables.
const NAME_COLS = ["Parameter", "Control", "Option", "Setting"];
const isParamTable = (block) =>
  block.type === "table" &&
  NAME_COLS.some((name) => norm(block.head[0] ?? "") === norm(name)) &&
  block.head.some((head) => norm(head) === "type");

const cellOf = (row, head, names) => {
  for (const name of names) {
    let i = head.findIndex((h) => norm(h) === norm(name));
    // "Slot 1 / 2 / 3 default" still means Default.
    if (i < 0) i = head.findIndex((h) => norm(h).includes(norm(name)));
    if (i >= 0) return clean(row[i]);
  }
  return "";
};

/** The table already renders the name in bold; drop a wrapping **…**. */
const stripWrapBold = (s) => {
  const match = /^\*\*([^*]+)\*\*$/.exec(String(s).trim());
  return match ? match[1] : s;
};

function transcribe(tool) {
  const md = parseFile(tool.slug);

  // ## Parameters -> one section per table, with ### Outputs declared lifted
  // out into its own list.
  const sections = [];
  let outputsTable = null;
  let current = { title: null, blocks: [], table: null };
  let inOutputsDeclared = false;

  for (const block of md.blocksOf("Parameters")) {
    if (block.type === "subheading") {
      if (/outputs declared/i.test(block.text)) {
        inOutputsDeclared = true;
        continue;
      }
      inOutputsDeclared = false;
      if (current.blocks.length || current.table) sections.push(current);
      current = { title: block.text, blocks: [], table: null };
      continue;
    }
    if (inOutputsDeclared) {
      if (block.type === "table") outputsTable = block;
      continue;
    }
    if (isParamTable(block)) {
      if (current.table) {
        sections.push(current);
        current = { title: current.title, blocks: [], table: null };
      }
      current.table = block;
    } else current.blocks.push(block);
  }
  if (current.blocks.length || current.table) sections.push(current);

  const parameters = sections
    .map((section) => {
      const head = section.table?.head ?? [];
      const rows = (section.table?.rows ?? []).map((row) => ({
        name: stripWrapBold(clean(cellOf(row, head, NAME_COLS) || row[0])),
        type: cellOf(row, head, ["Type"]),
        default: cellOf(row, head, ["Default"]) || null,
        description: cellOf(row, head, ["Description", "What it does"]),
      }));
      return {
        title: section.title,
        nameLabel: clean(head[0] ?? "") || null,
        blocks: section.blocks,
        rows,
      };
    })
    .filter((section) => section.rows.length || section.blocks.length);

  const outputs = outputsTable
    ? outputsTable.rows.map((row) => ({
        name: stripWrapBold(clean(cellOf(row, outputsTable.head, ["Output"]) || row[0])),
        type: cellOf(row, outputsTable.head, ["Type"]),
        description: cellOf(row, outputsTable.head, ["Description"]),
      }))
    : [];

  // See also: the sibling tools this file links to, in order of appearance.
  const seeAlso = [];
  for (const match of md.raw.matchAll(/\]\(([a-z0-9_]+)\.md\)/g)) {
    if (match[1] !== tool.slug && !seeAlso.includes(match[1])) seeAlso.push(match[1]);
  }

  return {
    ...tool,
    status: "full",
    algorithmId: clean(md.meta["Algorithm ID"]).replace(/`/g, ""),
    interactive: /interactive/i.test(md.meta["Type"] ?? ""),
    toolType: clean(md.meta["Type"]),
    body: md.blocksOf("Overview"),
    parameters,
    outputs,
    usage: md.blocksOf("How to use"),
    results: md.blocksOf("Outputs"),
    notes: md.blocksOf("Notes and limits"),
    seeAlso: seeAlso.slice(0, 6),
  };
}

// ---------------------------------------------------------------------------
// The page prints `summary` above the Overview, so an Overview that opens by
// restating it reads as the same sentence twice.
// ---------------------------------------------------------------------------

const stem = (word) => word.replace(/ies$/, "y").replace(/(es|s)$/, "");
const words = (s) =>
  String(s)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*`]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .map(stem)
    .filter(Boolean);

/** Dice coefficient over stemmed words: 1 is the same sentence, 0 shares none. */
const similarity = (a, b) => {
  const A = new Set(a);
  const B = new Set(b);
  let shared = 0;
  for (const word of A) if (B.has(word)) shared++;
  return (2 * shared) / (A.size + B.size);
};

const RESTATES = 0.75;

function dropRestatedOpening(tool) {
  const first = tool.body[0];
  if (!first || first.type !== "paragraph") return;
  const summary = words(tool.summary.en);

  if (similarity(words(first.text), summary) >= RESTATES) {
    tool.body.shift();
    return;
  }

  const sentences = first.text.split(/(?<=\.)\s+/);
  if (sentences.length < 2 || similarity(words(sentences[0]), summary) < RESTATES) return;

  // Keep what follows, unless that is in the summary too and would read as a
  // fragment on its own.
  const rest = sentences.slice(1).join(" ").trim();
  if (rest && similarity(words(rest), summary) < RESTATES) first.text = rest;
  else tool.body.shift();
}

// ---------------------------------------------------------------------------
// Khmer carry-over
// ---------------------------------------------------------------------------

/**
 * Index every { km, en } pair in the existing file by its English string.
 *
 * `summary` is skipped: it is carried through whole, km and en together, so it
 * never needs looking up and counting it here would report every summary as an
 * unused translation.
 */
function collectKhmer(value, into = new Map()) {
  if (!value || typeof value !== "object") return into;
  if (Array.isArray(value)) {
    for (const item of value) collectKhmer(item, into);
    return into;
  }
  if (typeof value.en === "string" && typeof value.km === "string" && value.km) {
    if (!into.has(value.en)) into.set(value.en, value.km);
  }
  for (const [key, item] of Object.entries(value)) {
    if (key !== "summary") collectKhmer(item, into);
  }
  return into;
}

// ---------------------------------------------------------------------------
// Emit
// ---------------------------------------------------------------------------

const q = (s) => JSON.stringify(String(s ?? ""));
const indent = (n) => " ".repeat(n);

function makeEmitter(khmer, used) {
  // Prose carries a Khmer slot so a translation can land later; `t()` falls
  // back to English until it does.
  const pair = (en) => {
    const km = khmer.get(en) ?? "";
    if (km) used.add(en);
    return `{ km: ${q(km)}, en: ${q(en)} }`;
  };

  const emitItem = (item, pad) => {
    if (typeof item === "string") return `${indent(pad)}${pair(item)},`;
    if (!item.items?.length) return `${indent(pad)}${pair(item.text)},`;
    const children = item.items.map((child) => `${indent(pad + 2)}${pair(child)},`).join("\n");
    return `${indent(pad)}{ text: ${pair(item.text)}, items: [\n${children}\n${indent(pad)}] },`;
  };

  const emitBlock = (block, pad) => {
    const p = indent(pad);
    switch (block.type) {
      case "paragraph":
        return `${p}{ type: "paragraph", text: ${pair(block.text)} },`;
      case "list":
      case "steps": {
        const items = block.items.map((item) => emitItem(item, pad + 2)).join("\n");
        return `${p}{ type: "${block.type}", items: [\n${items}\n${p}] },`;
      }
      case "subheading":
        return `${p}{ type: "subheading", text: ${pair(block.text)} },`;
      case "table": {
        const head = block.head.map(q).join(", ");
        const rows = block.rows
          .map((row) => `${indent(pad + 4)}[${row.map(q).join(", ")}],`)
          .join("\n");
        return `${p}{ type: "table",\n${indent(pad + 2)}head: [${head}],\n${indent(pad + 2)}rows: [\n${rows}\n${indent(pad + 2)}] },`;
      }
      default:
        return "";
    }
  };

  const emitBlocks = (blocks, pad) =>
    blocks.length
      ? `[\n${blocks.map((b) => emitBlock(b, pad + 2)).filter(Boolean).join("\n")}\n${indent(pad)}]`
      : "[]";

  const emitParameters = (sections) => {
    if (!sections.length) return "[]";
    const body = sections
      .map((section) =>
        [
          `${indent(6)}{`,
          `${indent(8)}title: ${section.title ? pair(section.title) : "null"},`,
          `${indent(8)}nameLabel: ${section.nameLabel ? q(section.nameLabel) : "null"},`,
          `${indent(8)}blocks: ${emitBlocks(section.blocks, 8)},`,
          `${indent(8)}rows: ${
            section.rows.length
              ? `[\n${section.rows
                  .map(
                    (row) =>
                      `${indent(10)}{ name: ${q(row.name)}, type: ${q(row.type)}, default: ${
                        row.default ? q(row.default) : "null"
                      }, description: ${pair(row.description)} },`,
                  )
                  .join("\n")}\n${indent(8)}]`
              : "[]"
          },`,
          `${indent(6)}},`,
        ].join("\n"),
      )
      .join("\n");
    return `[\n${body}\n${indent(4)}]`;
  };

  const emitOutputs = (rows) =>
    rows.length
      ? `[\n${rows
          .map(
            (row) =>
              `${indent(6)}{ name: ${q(row.name)}, type: ${q(row.type)}, description: ${pair(
                row.description,
              )} },`,
          )
          .join("\n")}\n${indent(4)}]`
      : "[]";

  return (tool) =>
    [
      `  {`,
      `    slug: ${q(tool.slug)},`,
      `    group: ${q(tool.group)},`,
      `    name: ${q(tool.name)},`,
      `    icon: ${q(tool.icon)},`,
      `    status: "full",`,
      `    youtubeId: ${tool.youtubeId ? q(tool.youtubeId) : "null"},`,
      `    algorithmId: ${q(tool.algorithmId)},`,
      `    interactive: ${tool.interactive},`,
      `    toolType: ${pair(tool.toolType)},`,
      `    processingPath: ${q(tool.processingPath)},`,
      `    summary: {`,
      `      km: ${q(tool.summary.km)},`,
      `      en: ${q(tool.summary.en)},`,
      `    },`,
      `    body: ${emitBlocks(tool.body, 4)},`,
      `    parameters: ${emitParameters(tool.parameters)},`,
      `    outputs: ${emitOutputs(tool.outputs)},`,
      `    usage: ${emitBlocks(tool.usage, 4)},`,
      `    results: ${emitBlocks(tool.results, 4)},`,
      `    notes: ${emitBlocks(tool.notes, 4)},`,
      `    seeAlso: [${tool.seeAlso.map(q).join(", ")}],`,
      `  },`,
    ].join("\n");
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

/** Import the data file. Node will not import .jsx, so stage it as .mjs. */
async function loadExisting(source) {
  const staged = path.join(
    await fs.promises.mkdtemp(path.join(os.tmpdir(), "kga-docs-")),
    "qgisDocs.mjs",
  );
  await fs.promises.writeFile(staged, source, "utf8");
  try {
    return await import(`file://${staged.replace(/\\/g, "/")}`);
  } finally {
    await fs.promises.rm(path.dirname(staged), { recursive: true, force: true });
  }
}

if (!fs.existsSync(SRC)) {
  console.error(`Tool metadata not found: ${SRC}`);
  console.error("Pass the path to kga_tools/toolMetadata, or set KGA_TOOL_METADATA.");
  process.exit(1);
}

const source = fs.readFileSync(TARGET, "utf8");
const existing = await loadExisting(source);

const khmer = collectKhmer(existing.tools);
const used = new Set();
const emitTool = makeEmitter(khmer, used);

const tools = existing.tools.map((tool) => {
  const next = transcribe(tool);
  dropRestatedOpening(next);
  return next;
});

const missing = existing.SLUGS.filter(
  (slug) => !fs.existsSync(path.join(SRC, `${slug}.md`)),
);
if (missing.length) {
  console.error(`No metadata file for: ${missing.join(", ")}`);
  process.exit(1);
}

const orphanSlugs = tools.flatMap((tool) =>
  tool.seeAlso.filter((slug) => !existing.SLUGS.includes(slug)).map((slug) => `${tool.slug} -> ${slug}`),
);
if (orphanSlugs.length) {
  console.warn(`See-also links to unknown tools: ${orphanSlugs.join(", ")}`);
}

const block = `export const tools = [\n${tools.map(emitTool).join("\n")}\n];`;
const start = source.indexOf("export const tools = [");
const end = source.indexOf("\n];", start) + "\n];".length;
if (start < 0 || end <= start) {
  console.error("Could not find the tools array in app/docs/qgis/_data/qgisDocs.jsx.");
  process.exit(1);
}
const next = source.slice(0, start) + block + source.slice(end);

const rows = tools.reduce(
  (total, tool) => total + tool.parameters.reduce((n, section) => n + section.rows.length, 0),
  0,
);
const stale = [...khmer.keys()].filter((en) => !used.has(en));

if (checkOnly) {
  if (next === source) {
    console.log(`app/docs/qgis/_data/qgisDocs.jsx is in sync with ${path.relative(root, SRC)}.`);
    process.exit(0);
  }
  console.error(
    "app/docs/qgis/_data/qgisDocs.jsx is out of date — run scripts/transcribe-qgis-docs.mjs.",
  );
  process.exit(1);
}

fs.writeFileSync(TARGET, next, "utf8");

console.log(
  `Transcribed ${tools.length} tools (${rows} parameter rows) from ${path.relative(root, SRC)}.`,
);
console.log(`Carried ${used.size} Khmer translations across.`);
if (stale.length) {
  // These were translated against English the metadata no longer contains, so
  // the Khmer is gone from the file and the passage needs retranslating.
  console.warn(`\n${stale.length} Khmer translation(s) dropped — their English changed:`);
  for (const en of stale.slice(0, 10)) console.warn(`  - ${en.slice(0, 100)}`);
  if (stale.length > 10) console.warn(`  ... and ${stale.length - 10} more`);
}
if (next === source) console.log("No change — the page already matched the metadata.");
