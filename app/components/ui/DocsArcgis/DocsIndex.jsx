"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Cog,
  Database,
  GitBranch,
  Globe,
  Info,
  LandPlot,
  Layers3,
  // Aliased: the group icon would otherwise shadow the global Map used for the
  // search index below.
  Map as MapIcon,
  Mountain,
  Search,
  Shapes,
  Sparkles,
  Tag,
  X,
} from "lucide-react";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/arcgis/_data/ui";
import {
  PRODUCT,
  groups,
  tools,
  TOOL_COUNT,
} from "../../../docs/arcgis/_data/arcgisDocs";
import DocBlocks from "./DocBlocks";
import DocsSidebar from "./DocsSidebar";
import DocsBreadcrumb from "./DocsBreadcrumb";
import LicenceCard from "./LicenceCard";
import RichText from "./RichText";
import ToolVideo from "./ToolVideo";

const iconMap = {
  Shapes,
  Database,
  Sparkles,
  Tag,
  LandPlot,
  Cog,
  Mountain,
  GitBranch,
  Map: MapIcon,
  Globe,
  Info,
};

const Icon = ({ name, className }) => {
  const Component = iconMap[name] ?? Layers3;
  return <Component className={className} aria-hidden="true" />;
};

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-brand-blue/8 bg-white px-4 py-3 text-center dark:border-white/8 dark:bg-white/5">
    <p className="text-2xl font-display font-900 text-brand-orange">{value}</p>
    <p className="mt-0.5 text-xs text-brand-text/60 dark:text-gray-400">{label}</p>
  </div>
);

/** Search haystack for one tool: both languages, so a Khmer summary is findable
 *  by its English name and the other way round. */
const haystack = (tool) =>
  `${tool.name} ${tool.slug} ${t(tool.summary, "en")} ${t(tool.summary, "km")}`.toLowerCase();

const DocsIndex = () => {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState(null);
  // 118 cards re-filtered on every keystroke: defer the expensive pass so
  // typing stays responsive while the list catches up.
  const deferredQuery = useDeferredValue(query);

  // Built once: the haystack for 118 tools does not change between renders.
  const searchIndex = useMemo(
    () => new Map(tools.map((tool) => [tool.slug, haystack(tool)])),
    [],
  );

  const matches = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    return tools.filter((tool) => {
      if (activeGroup && tool.group !== activeGroup) return false;
      if (!needle) return true;
      return (searchIndex.get(tool.slug) ?? "").includes(needle);
    });
  }, [deferredQuery, activeGroup, searchIndex]);

  const isFiltering = deferredQuery.trim().length > 0 || activeGroup !== null;
  const matchedSlugs = useMemo(() => new Set(matches.map((tool) => tool.slug)), [matches]);

  return (
    // data-language-switch is functional, not cosmetic: it stops the global
    // LanguageProvider DOM walker from rewriting text React owns on this page.
    <main className="pt-24 md:pt-32" data-language-switch>
      <SectionWrapper>
        <div className="custom-screen">
          <DocsBreadcrumb />

          {/* framer-motion on the header only. Animating 118 cards on scroll
              would cost far more than it adds. */}
          <m.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12"
          >
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-brand-orange/30 bg-brand-orange/15 px-3 py-1 text-xs font-display font-600 text-brand-orange">
                  {t({ km: "ឧបករណ៍ ArcGIS Pro", en: "ArcGIS Pro Add-in" }, language)}
                </span>
                <span className="rounded-full border border-brand-blue/25 bg-brand-blue/10 px-3 py-1 text-xs font-display font-600 text-brand-blue dark:text-blue-300">
                  {t(PRODUCT.licence, language)}
                </span>
              </div>

              <h1 className="text-3xl font-display font-900 leading-tight text-brand-text dark:text-white md:text-5xl">
                KGA <span className="text-brand-orange">Toolbox</span>{" "}
                <span className="font-700 text-brand-text/55 dark:text-gray-400">for ArcGIS Pro</span>
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-text/70 dark:text-gray-300 md:text-lg">
                {t(PRODUCT.tagline, language)}
              </p>

              <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat value={TOOL_COUNT} label={t(UI.toolsLabel, language)} />
                <Stat value={groups.length} label={t(UI.groupsLabel, language)} />
                <Stat
                  value={`Pro ${PRODUCT.arcgisMinimum}+`}
                  label={t(UI.requiresLabel, language)}
                />
                <Stat value={PRODUCT.version} label={t(UI.versionLabel, language)} />
              </div>
            </div>

            {/* 2560x1600, so the frame is 16/10 and nothing gets cropped.
                `priority` because it is the LCP element on wide screens, where
                it sits beside the h1 rather than below it. */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-brand-blue/8 bg-brand-light shadow-sm dark:border-white/8 dark:bg-white/5">
              <Image
                src="/images/kga-toolbox.png"
                alt={t(
                  {
                    km: "ផ្ទាំង ribbon របស់ KGA Toolbox នៅក្នុង ArcGIS Pro",
                    en: "The KGA Toolbox ribbon tab in ArcGIS Pro",
                  },
                  language,
                )}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
          </m.header>

          <ToolVideo youtubeId={PRODUCT.youtubeId} title={PRODUCT.name} />

          <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
            <DocsSidebar mode="anchors" />

            <div className="min-w-0">
              {/* Overview */}
              <section aria-labelledby="overview-heading" className="mb-12">
                <h2
                  id="overview-heading"
                  className="mb-4 text-2xl font-display font-800 text-brand-text dark:text-white"
                >
                  {t(UI.overview, language)}
                </h2>
                <DocBlocks blocks={PRODUCT.overview} />
              </section>

              {/* Features */}
              <section aria-labelledby="features-heading" className="mb-12">
                <h2
                  id="features-heading"
                  className="mb-5 text-2xl font-display font-800 text-brand-text dark:text-white"
                >
                  {t(UI.features, language)}
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {PRODUCT.features.map((feature, index) => (
                    <li
                      key={index}
                      className="rounded-2xl border border-brand-blue/8 bg-white p-5 dark:border-white/8 dark:bg-white/5"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange">
                        <Icon name={feature.icon} className="h-5 w-5" />
                      </div>
                      <h3 className="mb-1 font-display font-700 text-brand-text dark:text-white">
                        {t(feature.title, language)}
                      </h3>
                      <p className="text-sm leading-relaxed text-brand-text/65 dark:text-gray-400">
                        {t(feature.description, language)}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Install and licence */}
              <div className="mb-12">
                <LicenceCard />
              </div>

              {/* Tools, by group */}
              <h2
                id="tools-heading"
                className="mb-2 text-2xl font-display font-800 text-brand-text dark:text-white"
              >
                {t(UI.toolsHeading, language)}
              </h2>
              <p className="mb-5 text-sm text-brand-text/60 dark:text-gray-400">
                {t(
                  {
                    km: `ឧបករណ៍ទាំង ${TOOL_COUNT} រៀបតាមក្រុមដូចនៅលើរបារ ribbon។ ចុចលើឧបករណ៍ណាមួយដើម្បីមើលលម្អិត។`,
                    en: `All ${TOOL_COUNT} tools, grouped as they are on the ribbon. Select any tool for its full page.`,
                  },
                  language,
                )}
              </p>

              {/* Filter. The one thing the QGIS index did not need: 118 cards
                  across 11 groups is too long to scan. */}
              <div className="mb-6 space-y-3">
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-text/40 dark:text-gray-500"
                    aria-hidden="true"
                  />
                  <label htmlFor="tool-search" className="sr-only">
                    {t(UI.searchLabel, language)}
                  </label>
                  <input
                    id="tool-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t(UI.searchPlaceholder, language)}
                    className="w-full rounded-full border border-brand-blue/12 bg-white py-2.5 pl-9 pr-10 text-sm text-brand-text placeholder:text-brand-text/40 focus-visible:border-brand-orange/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:placeholder:text-gray-500"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-brand-text/45 transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:text-gray-500"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">{t(UI.clearSearch, language)}</span>
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    aria-pressed={activeGroup === null}
                    onClick={() => setActiveGroup(null)}
                    className={`rounded-full border px-3 py-1 text-xs font-display font-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 ${
                      activeGroup === null
                        ? "border-brand-orange/40 bg-brand-orange/15 text-brand-orange"
                        : "border-brand-blue/12 bg-white text-brand-text/65 hover:border-brand-orange/30 hover:text-brand-orange dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                    }`}
                  >
                    {t(UI.allGroups, language)}
                  </button>
                  {groups.map((group) => (
                    <button
                      key={group.id}
                      type="button"
                      aria-pressed={activeGroup === group.id}
                      onClick={() =>
                        setActiveGroup((current) => (current === group.id ? null : group.id))
                      }
                      className={`rounded-full border px-3 py-1 text-xs font-display font-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 ${
                        activeGroup === group.id
                          ? "border-brand-orange/40 bg-brand-orange/15 text-brand-orange"
                          : "border-brand-blue/12 bg-white text-brand-text/65 hover:border-brand-orange/30 hover:text-brand-orange dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                      }`}
                    >
                      <span lang="en">{group.name}</span>
                    </button>
                  ))}
                </div>

                {/* aria-live so a screen reader hears the count change as the
                    query narrows, rather than silently losing the list. */}
                <p
                  aria-live="polite"
                  className="text-xs text-brand-text/55 dark:text-gray-400"
                >
                  {isFiltering
                    ? `${matches.length} ${t(UI.resultCount, language)}`
                    : " "}
                </p>
              </div>

              {isFiltering && matches.length === 0 && (
                <p className="rounded-2xl border border-dashed border-brand-blue/20 px-4 py-8 text-center text-sm text-brand-text/60 dark:border-white/15 dark:text-gray-400">
                  {t(UI.noMatches, language)}
                </p>
              )}

              {groups.map((group) => {
                const groupTools = tools.filter(
                  (tool) => tool.group === group.id && matchedSlugs.has(tool.slug),
                );
                if (!groupTools.length) return null;
                const isProduct = group.id === "product";

                return (
                  <section
                    key={group.id}
                    id={`group-${group.id}`}
                    aria-labelledby={`group-${group.id}-heading`}
                    className="mb-12"
                  >
                    <div className="mb-1 flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border ${
                          isProduct
                            ? "border-brand-text/15 bg-brand-text/5 text-brand-text/60 dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
                            : "border-brand-blue/15 bg-brand-blue/5 text-brand-blue dark:border-white/10 dark:bg-white/5 dark:text-blue-300"
                        }`}
                      >
                        <Icon name={group.icon} className="h-4.5 w-4.5" />
                      </div>
                      <h3
                        id={`group-${group.id}-heading`}
                        className="text-xl font-display font-800 text-brand-text dark:text-white"
                      >
                        <span lang="en">{group.name}</span>
                      </h3>
                      <span className="rounded-full bg-brand-blue/5 px-2 py-0.5 text-xs text-brand-text/60 dark:bg-white/5 dark:text-gray-400">
                        {groupTools.length}
                      </span>
                      {/* Product holds About, Update and What's New — pages
                          about the add-in, not tools. Said plainly so the
                          count above and the 115 in the stat tile agree. */}
                      {isProduct && (
                        <span className="rounded-full border border-brand-text/15 px-2 py-0.5 text-[11px] text-brand-text/55 dark:border-white/15 dark:text-gray-400">
                          {t(UI.productGroupNote, language)}
                        </span>
                      )}
                    </div>

                    {/* RichText, not t(): the Quick Label blurb distinguishes
                        the **Show** tools from the **Display** ones, and this
                        is a plain <p>, so a link here could not nest. Tool
                        summaries are plain text and stay that way — a card is
                        itself a link. */}
                    <p className="mb-5 text-sm leading-relaxed text-brand-text/65 dark:text-gray-400">
                      <RichText value={group.summary} />
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {groupTools.map((tool) => (
                        <li key={tool.slug}>
                          <Link
                            href={`/docs/arcgis/${tool.slug}`}
                            className="tool-card group flex h-full flex-col rounded-2xl border border-brand-blue/8 bg-white p-4 transition-colors hover:border-brand-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/8 dark:bg-white/5"
                          >
                            <div className="mb-1.5 flex items-start justify-between gap-2">
                              <h4 className="font-display font-700 leading-snug text-brand-text transition-colors group-hover:text-brand-orange dark:text-white">
                                <span lang="en">{tool.name}</span>
                              </h4>
                              {tool.status === "planned" && (
                                <span
                                  className="mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-300"
                                  title={t(UI.plannedBadge, "en")}
                                >
                                  <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span className="sr-only">{t(UI.plannedBadge, language)}</span>
                                </span>
                              )}
                            </div>
                            <p className="text-sm leading-relaxed text-brand-text/65 dark:text-gray-400">
                              {t(tool.summary, language)}
                            </p>
                            <span className="mt-3 inline-flex items-center gap-1 text-xs font-display font-600 text-brand-orange opacity-0 transition-opacity group-hover:opacity-100">
                              {t(UI.docsShort, language)}
                              <ArrowRight className="h-3 w-3" aria-hidden="true" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}

              {process.env.NODE_ENV !== "production" && (
                <p className="mt-8 rounded-xl border border-dashed border-brand-blue/20 px-4 py-2 font-mono text-xs text-brand-text/50 dark:border-white/15 dark:text-gray-500">
                  dev only — {tools.length} pages · {TOOL_COUNT} tools ·{" "}
                  {tools.filter((x) => x.status === "planned").length} planned ·{" "}
                  {tools.filter((x) => x.summary?.km).length}/{tools.length} translated ·{" "}
                  {tools.filter((x) => x.youtubeId).length} with video
                </p>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default DocsIndex;
