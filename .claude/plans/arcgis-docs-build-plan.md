# Build plan — `/docs/arcgis` tool documentation

Hand this to a fresh session working in `D:\KGA Tool\kga-landing-page`.

---

## 1. What you are building

A tool-by-tool documentation section for **KGA Toolbox for ArcGIS Pro** at `/docs/arcgis`, in the same shape and visual language as the shipped QGIS docs at `/docs/qgis`.

The QGIS section is the reference implementation. Read it before writing anything:

| Piece | Path |
|---|---|
| Data | `app/docs/qgis/_data/qgisDocs.jsx` (3,265 lines), `app/docs/qgis/_data/ui.js` |
| Routes | `app/docs/qgis/page.jsx`, `app/docs/qgis/[slug]/page.jsx`, `app/docs/qgis/[slug]/not-found.jsx` |
| Components | `app/components/ui/DocsQgis/` — 9 files |

It was built from the plugin's own `toolMetadata/*.md` folder. **This job is the same job with a different metadata folder**, so the shape of the work is known; most of the risk is in the parser and in the scale.

---

## 2. Ground truth — verified, do not re-derive

### Metadata source (read-only; do NOT vendor into this repo)

```
D:\KGA Tool\kgatoolbox_addin\toolMetadata\
```

- **118 tool files** (`*.md`, excluding `README.md`), in **11 category subfolders**. QGIS was flat; this is nested — that is the main structural difference.
- `README.md` at the root is a rich index: category ordering, per-tool one-line descriptions, an Esri-system-tool exclusion table, and a "not yet implemented" list. **Use it — it is the best source for group ordering, group blurbs, and index-page copy.**

Folder → display name and count, **in the README's own display order** (use this order, not alphabetical):

| # | Folder | Display name | Files |
|---|---|---|---|
| 1 | `DataCreation` | Data Creation | 12 |
| 2 | `DataManagement` | Data Management | 23 |
| 3 | `VectorIQ` | VectorIQ | 20 |
| 4 | `QuickLabel` | Quick Label | 8 |
| 5 | `Cadastral` | Cadastral | 24 |
| 6 | `Geoprocessing` | Geoprocessing | 4 |
| 7 | `SpatialAnalysis` | Spatial Analysis | 6 |
| 8 | `TopologyCheck` | Topology Check | 4 |
| 9 | `Mapping` | Mapping | 3 |
| 10 | `Basemap` | Basemap and Go-to | 11 |
| 11 | `Product` | Product | 3 |

`Product/` holds `About.md`, `Update.md`, `WhatsNew.md` — **product pages, not tools.** The README counts them in its "118 tools" but they are not tools.

**Decided: keep `Product` as the final group** (position 11 above), so all 118 files get a page. But do not let that inflate the tool count:

- **115** is the tool number. Use it for the index stat tile, the "All N tools, grouped as they are on the ribbon" line, and any headline copy.
- **118** is the page/route number. Use it for `generateStaticParams`, the prerender count, and the slug-integrity checks.
- Derive both in the data file rather than hard-coding — e.g. `PRODUCT.toolCount = tools.filter(t => t.group !== "product").length` and `tools.length` for routes — so adding a tool later cannot make the two drift.
- Give the Product group a `summary` that says what it is (about the add-in, updates, release notes), so a reader does not expect tools there. The group card and sidebar entry should read as clearly different in kind from the ten tool groups.

### File format — uniform, verified across all 118

Every file has exactly one `# H1` and exactly these six `## ` sections, in this order:

```
# <Tool Name>
## Summary
## Usage
## Parameters
## How to use
## Licensing information
## Related tools
```

Three files additionally carry `## Environments`. Nothing else varies. A deterministic parser is viable — **write one, do not hand-transcribe 118 files.**

### Parameters section — three table variants plus a no-table case

| Header row | Files | Meaning |
|---|---|---|
| `\| Label \| Explanation \| Data Type \|` | 53 | Geoprocessing tool — real GP parameters |
| `\| Control \| Explanation \|` | 34 | Custom dialog — controls, no GP parameters |
| `\| Input \| Explanation \|` | 3 | Dialog variant |
| *(no table at all)* | 28 | One-click ribbon button (all of `Basemap/`, `QuickLabel/` displays, `Product/`, Quick Templates, …) |

- **40 files** use `(Optional)` markers in the Label cell.
- Cells use `<br><br>` and `<br>` to hold bullet runs and option lists inside a single cell. The parser must split these into block content, not dump raw `<br>` into the page.
- There is **no Default column** anywhere — unlike QGIS. Defaults are written inline in the Explanation text as `` `Meters` (default) ``.

This maps onto the existing `ParameterTable` contract, which already switches its first column heading between **Name** and **Control** via `section.nameLabel`. You will need to additionally **hide the Type column** for the `Control | Explanation` variant and **always hide Default** for ArcGIS.

### Cross-references

`## Related tools` uses relative links: `LegalDescriptionBuilder.md` (same folder) and `../QuickLabel/DisplayLineBearingAndDirection.md` (another folder). Both forms must resolve to `/docs/arcgis/<slug>`. See §6.

### No help-URL contract

I grepped the whole add-in: **nothing references `khmergrs.com/docs`.** Unlike QGIS — where 40 algorithms hard-coded `helpUrl()` and the slugs were non-negotiable — **the ArcGIS slugs are yours to choose.**

That is freedom now and a contract later, so pick a scheme and write it down in the data file header, because the add-in's Help buttons will eventually point at it.

**Recommended scheme:** kebab-case of the file's basename, flat (no category prefix).
`Cadastral/BearingDistanceCalculator.md` → `bearing-distance-calculator` → `/docs/arcgis/bearing-distance-calculator`

Flat because the category is already a data field and a nested URL would need `[...slug]`. **Assert slug uniqueness across all 118 in the parser** — two folders could hold the same basename (`TopologyCheck/TopologyCheck.md` is one to watch). If a collision appears, prefix only the colliding one and record why.

### What already exists

- `app/docs/arcgis/page.jsx` + `app/components/ui/DocsArcgis/DocsArcgisPlaceholder.jsx` — a "documentation in progress" shell.
- `public/kga-toolbox.html` links to `/docs/arcgis` in **2 places**. That is why the placeholder exists; the route must never 404.
- The placeholder's `page.jsx` sets `robots: { index: false, follow: true }` with a comment saying to remove it when content lands. **Remove it.**
- `next.config.mjs` needs **no change** — `/docs/arcgis` is a real app route and the `rewrites()` array only matches three exact literals.

---

## 3. Architecture decision: copy-adapt, do not abstract

**Copy `app/components/ui/DocsQgis/*` into `app/components/ui/DocsArcgis/` and adapt.** Do not refactor the QGIS components into a shared, parameterised library.

Why:
- The QGIS docs shipped last week (`4750da1`, `c77d3b0`, merged in `d80d656`). Refactoring working, shipped, user-facing code to serve a second consumer buys duplication-avoidance at the cost of regression risk in the thing that already works.
- This is the *second* instance, not the third. The real commonality is not yet known — and the diffs below are substantial enough that a shared component would end up as a pile of `if (product === 'arcgis')`.
- The two products genuinely differ: parameter-table shape, licensing section, ribbon path vs Processing path, no `algorithmId`, no free-plugin install card, 118 tools vs 41.

**The one thing to share:** `t()` from `app/docs/qgis/_data/ui.js`. It is a plain `{ km, en }` resolver with nothing QGIS-specific in it, and `DocsArcgisPlaceholder.jsx` already imports it with a comment saying exactly that. Keep doing that, or — cleaner — move `t()` to `app/components/ui/docsLang.js` and re-export from the QGIS `ui.js` so nothing breaks. Either is fine; do not duplicate the function.

After both sections are live and stable, extracting shared primitives is a reasonable follow-up. Not now.

---

## 4. File tree

```
app/docs/arcgis/page.jsx                          (REPLACE the placeholder's import)
app/docs/arcgis/[slug]/page.jsx                   NEW
app/docs/arcgis/[slug]/not-found.jsx              NEW
app/docs/arcgis/_data/arcgisDocs.jsx              NEW  — generated, then hand-edited
app/docs/arcgis/_data/ui.js                       NEW  — ArcGIS UI strings; import t() from shared

app/components/ui/DocsArcgis/DocsIndex.jsx        NEW  (adapt DocsQgis/DocsIndex.jsx)
app/components/ui/DocsArcgis/ToolDetail.jsx       NEW  (adapt)
app/components/ui/DocsArcgis/DocsSidebar.jsx      NEW  (adapt)
app/components/ui/DocsArcgis/DocBlocks.jsx        NEW  (adapt — near-identical)
app/components/ui/DocsArcgis/ParameterTable.jsx   NEW  (adapt — most changed)
app/components/ui/DocsArcgis/RichText.jsx         NEW  (adapt — new href resolver)
app/components/ui/DocsArcgis/DocsBreadcrumb.jsx   NEW  (adapt)
app/components/ui/DocsArcgis/ToolVideo.jsx        NEW  (copy verbatim, change import path)
app/components/ui/DocsArcgis/DocsArcgisPlaceholder.jsx   DELETE once the index ships
```

Keep the parser in the scratchpad, not the repo — the metadata folder is external and the data file is the committed artifact. (The QGIS build did the same.)

---

## 5. Data contract

Mirror the QGIS shape so the components port with minimal edits. Current QGIS tool keys, verified:

`slug, group, name, icon, status, youtubeId, algorithmId, interactive, toolType, processingPath, summary, body, parameters, outputs, usage, results, notes, seeAlso`

ArcGIS variant — the deltas:

| Field | ArcGIS treatment |
|---|---|
| `slug` | kebab-case basename (§2) |
| `group` | folder name lower-cased, e.g. `datacreation`, `quicklabel` |
| `name` | the `# H1` text, verbatim |
| `ribbonPath` | **replaces `processingPath`.** Extract from the `## How to use` step that names the ribbon location (`On the **KGA Toolbox** tab, in the **Geoprocessing** group, open the **Cadastral Tools** gallery and click **Bearing Distance Calc**`). If no step names it, leave `null` and let the card hide. |
| `algorithmId` | **drop** — no equivalent |
| `interactive` | `true` when the Parameters table is `Control`/`Input`, or when there is no table |
| `toolType` | `Geoprocessing tool` / `Custom dialog` / `One-click command` |
| `licensing` | **NEW** — block array from `## Licensing information` |
| `body` | blocks from `## Summary` (first paragraph becomes `summary`, the rest is body) |
| `usage` | blocks from `## Usage` **and** `## How to use`. Keep them as two sections — `usage` (prose/bullets) and a `steps` block from How to use — or merge; decide once and be consistent |
| `parameters` | `[{ title, nameLabel, blocks, rows: [{ name, type, description }] }]` — **no `default`** |
| `environments` | **NEW**, 3 files only — block array, render only when present |
| `seeAlso` | slugs resolved from `## Related tools` links |
| `outputs`, `results`, `notes` | no ArcGIS source section — keep the keys as `[]` so the ported components do not need edits, or strip them from both data and component together |
| `status` | `full` when the file yielded parameters + usage; `draft` otherwise |
| `youtubeId` | **`null` for every tool.** Same hidden-until-set slot as QGIS |

Also carry, at module level: `PRODUCT` (name, version, tool count, group count, ArcGIS Pro minimum version, links), `groups[]`, `tools[]`, `SLUGS`, and the same helpers — `getToolBySlug`, `getGroupById`, `getToolsInGroup`, `getToolNeighbours`.

Keep the dev-only integrity guard from `qgisDocs.jsx` (duplicate slugs, unknown group, empty group) and **add a slug-collision assertion** in the parser itself.

---

## 6. The parser — the main new work

Write it in Python in the scratchpad, emitting `arcgisDocs.jsx`. The QGIS build did exactly this; the generator lives at
`C:\Users\Putin\AppData\Local\Temp\claude\D--KGA-Tool-kga-landing-page\03043133-cacf-4448-b1cf-24c569f69f92\scratchpad\gen.py`
(may be cleaned up — treat as reference, not dependency).

What it must handle:

1. **Split on `^## `** into the six known sections. Assert all six exist per file; fail loudly on any file that does not match rather than silently emitting a stub.
2. **Markdown → block array**, reusing the QGIS block vocabulary so `DocBlocks` ports unchanged:
   `heading`, `subheading`, `paragraph`, `list` (with nested `items`), `steps`, `note` (`tone: info|warning|danger`), `table` (`{head, rows}`), `code`.
3. **Parameter tables** → `rows`. Strip `(Optional)` from the Label into the type/required signal. **Split `<br><br>` and `<br>` inside a cell** into a paragraph plus a bullet list — those option lists are the bulk of the useful content and must not render as literal `<br>`.
4. **Free-standing tables** inside `## Usage` (see `Cadastral/BearingDistanceCalculator.md`, which has an output table inside a bullet) → a `table` block. `DocBlocks` already renders these via `BlockTable`.
5. **Related tools** → resolve `X.md` and `../Cat/X.md` to slugs; **drop links that resolve to nothing** and report them.
6. **Preserve inline Markdown verbatim** — `**bold**`, `` `code` ``, `*italic*`, `[label](target.md)`. Do **not** strip it. `RichText` parses it at render time, which is what keeps a paragraph of five button names readable. The data file stays a faithful copy of the metadata.

Report at the end: per-category counts, slug collisions, unresolved cross-links, files that fell back to a stub. Eyeball that report before accepting the output.

---

## 7. Component adaptations

Most files are a copy with import paths changed (`../../../docs/qgis/_data/…` → `.../arcgis/...`). The real diffs:

**`RichText.jsx`** — replace `resolveHref`. QGIS matches `^([a-z0-9_]+)\.md$` against QGIS `SLUGS`. ArcGIS must handle both `Tool.md` and `../Category/Tool.md`, map basename → slug through a lookup built from `tools`, and fall through unchanged when there is no match.

**`ParameterTable.jsx`** — the most-changed file:
- Drop the Default column entirely.
- Hide the Type column when the section is a `Control`/`Input` variant (`nameLabel` already drives the first column heading; extend that logic).
- Keep `role="region" tabIndex={0}` on the scroll wrapper and the `sr-only` caption.
- `OutputTable` has no ArcGIS source — delete it, or keep it unused and note why.

**`DocsIndex.jsx`** — this is where 118 tools bite:
- 11 groups × up to 24 cards is a very long page. **Add a client-side filter** (a text input over tool name + summary, plus group chips). This is the one feature the QGIS index did not need and this one does.
- The QGIS index has a hero image at `/images/kga-toolbox-cover.png`. There is **no ArcGIS equivalent in `public/images/`** — either produce one or drop the image half of the header grid. Do not point `<Image>` at a file that does not exist.
- The install card is wrong for ArcGIS (it is an add-in with a licence, not a free plugin repo listing). Replace with an install/licence card built from `Product/About.md` and the README, or drop it.
- **Keep framer-motion on the header only.** Do not animate 118 cards on scroll.

**`ToolDetail.jsx`** — swap the Processing/algorithm-ID identity card for ribbon path + tool type; add the Licensing section; add Environments (render only when present); `sections` for "On this page" is built from what the tool actually has — extend that list with the new sections.

**`DocsSidebar.jsx`** — near-identical; native `<details>` per group, `hidden lg:block`. With 11 groups, default every group closed except the active one.

---

## 8. Routes

Copy `app/docs/qgis/[slug]/page.jsx` structurally: `generateStaticParams()` over `tools`, `generateMetadata({ params })` with `await params` (Next 15), `notFound()` on unknown slug, thin client component.

**Use an absolute, apex-hosted canonical** — this bit the QGIS build:

```js
alternates: { canonical: `https://khmergrs.com/docs/arcgis/${tool.slug}` }
```

`app/layout.js:19` sets `metadataBase` to `https://www.khmergrs.com` (**with `www`**). A relative canonical emits the www form. Keep the apex form consistent with `/docs/qgis`.

And in `app/docs/arcgis/page.jsx`: **delete `robots: { index: false, follow: true }`** once real content ships.

---

## 9. Integration points

1. **Delete `DocsArcgisPlaceholder.jsx`** and point `app/docs/arcgis/page.jsx` at the new `DocsIndex`.
2. **Programs card.** `app/components/ui/Programs/data.js` entry `[0]` (`id: "toolbox"`, *KGA Toolbox for ArcGIS Pro*) has `href: "/kga-toolbox"`. Leave that as the product page. Consider a secondary "Documentation" link, matching how the QGIS card points at `/docs/qgis`. If you add visible Khmer copy, add the matching `TRANSLATION_ENTRIES` pair — see §10.
3. **Footer.** `app/components/ui/Footer/index.jsx` `productLinks` already has `QGIS Plugin Docs`. Add `ArcGIS Pro Docs → /docs/arcgis` beside it.
4. **`public/kga-toolbox.html`** already links `/docs/arcgis` twice. Nothing to change — just do not break the route.

---

## 10. Language strategy

Same as QGIS, and it is deliberate:

- Content is `{ km, en }` pairs in the data file, rendered through `t()` — **not** through `LanguageProvider`'s DOM walker, which matches whole text nodes against an exact Khmer→English table and is unworkable for documentation prose.
- **Every docs root must carry `data-language-switch`.** This is functional, not cosmetic: without it the `MutationObserver` in `LanguageProvider.jsx:387` walks every text node React writes on each re-render.
- `t()` uses `||`, not `??`, so an unwritten `""` Khmer string falls through to English instead of rendering an empty paragraph. **Do not "fix" this to `??`.**
- Ship **English-first**: body copy is a faithful transcription of the metadata, which is English. Hand-write Khmer `summary` for each tool so cards and search read naturally in Khmer, and let body prose fall through to English until translated. That is what `/docs/qgis` does today.
- 118 Khmer summaries is roughly 3× the QGIS effort. Budget for it, and do it in one focused pass after the scaffold resolves — breadth before depth, exactly as the QGIS build sequenced it.
- Anywhere an English tool name sits inside Khmer prose, wrap it `<span lang="en">`. Use `leading-relaxed` on all docs prose; avoid `line-clamp` on Khmer (clipped descenders).

---

## 11. Verification

```bash
npm run build          # must prerender exactly 118 /docs/arcgis/[slug] paths + the index
                       # (115 tools + the 3 Product pages — see §2)
npx next lint --dir app
```

Then, on the built output — this is more reliable than the dev server:

```bash
# canonical correctness across every page
D=.next/server/app/docs/arcgis
for f in $D/*.html; do
  s=$(basename "$f" .html)
  grep -o 'rel="canonical" href="[^"]*"' "$f" | head -1
done

# the video slot must be invisible everywhere
grep -l '<iframe' $D/*.html   # expect NO matches from the docs' own ToolVideo
```

Browser checks (`preview_start` with the `kga-dev` launch config):

| URL | Confirm |
|---|---|
| `/docs/arcgis` | 11 group sections, 118 card links, stat tile reads **115 tools**, Product group last and visibly not a tool group, filter works, no video block |
| `/docs/arcgis/bearing-distance-calculator` | breadcrumb, ribbon path, parameter table with Data Type, Related-tools chips resolve, prev/next stay inside the group |
| a `Control`-variant tool (e.g. `DataManagement/EditTable`) | first column reads **Control**, Type column hidden |
| a no-table tool (e.g. `Basemap/ToOpenStreetMap`) | Parameters section absent entirely, not an empty shell |
| any page | KM⇄EN swaps prose, no flicker, no duplicated text; light⇄dark both legible |
| any page @375px | sidebar hidden, tables scroll inside their own container, no page-level horizontal overflow |

**Slug integrity** — the QGIS equivalent of this check is what guaranteed no shipped Help button 404s. There is no help-URL contract yet for ArcGIS, so instead assert: every `seeAlso` slug resolves, and every metadata file produced exactly one page.

---

## 12. Gotchas carried over from the QGIS build

Real problems hit last time. Do not rediscover them:

- **Dev server, stale webpack cache.** After regenerating the data file, `next dev` can throw `__webpack_modules__[moduleId] is not a function` / `Cannot find module for page` and serve a `missing required error components, refreshing…` stub that still returns **HTTP 200**. It is a cache artifact, not your code. Stop the server, `rm -rf .next`, rebuild. **A 200 status is not proof a page rendered** — assert on content.
- **Screenshots come back blank** when the app window is hidden, especially after a scroll. The DOM is fine. Verify with `read_page` / `get_page_text` / `javascript_tool` instead of fighting the compositor.
- **Empty columns look broken.** Hide a table column when every row's value is empty rather than shipping a run of blank cells.
- **`scroll-behavior: smooth`** is on globally — a JS `scrollIntoView` followed immediately by a screenshot captures mid-animation. Use `behavior:'instant'`.
- `[id] { scroll-margin-top: 100px }` already exists in `globals.css`, so `#group-…` anchors clear the fixed navbar with no new CSS.
- Derive heading anchor ids from the **English** text so "On this page" links survive a language switch.
- The site Footer contains `youtube.com` links — a naive `grep youtube` over built HTML will false-positive when you are checking that no demo video rendered. Grep for `<iframe`.

---

## 13. Suggested sequencing

1. Read the QGIS implementation end to end. Read `toolMetadata/README.md` and three tool files across different variants (`Cadastral/BearingDistanceCalculator.md`, a `Control` one, a no-table one).
2. Write the parser; iterate until its report is clean (no collisions, no unresolved links, no unexpected stubs).
3. Emit `arcgisDocs.jsx`; validate it parses (`cp` to `.mjs` and `node -e "import(...)"`).
4. Port the components; get one tool page rendering correctly before doing the index.
5. Build the index with the filter.
6. Wire the routes, delete the placeholder, drop `robots.index:false`, add the footer link.
7. `npm run build` + the verification table.
8. Khmer summaries in one pass.

Ship the scaffold before the prose. Every tool resolving with an English summary beats half the tools being perfect.
