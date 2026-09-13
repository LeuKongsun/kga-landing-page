"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Cog,
  MapPin,
  MousePointerClick,
  Sliders,
  Zap,
} from "lucide-react";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/arcgis/_data/ui";
import {
  getToolBySlug,
  getGroupById,
  getToolNeighbours,
} from "../../../docs/arcgis/_data/arcgisDocs";
import DocBlocks from "./DocBlocks";
import DocsSidebar from "./DocsSidebar";
import DocsBreadcrumb from "./DocsBreadcrumb";
import ParameterTable from "./ParameterTable";
import RichText from "./RichText";
import ToolVideo from "./ToolVideo";
import LicenceCard from "./LicenceCard";

const SectionHeading = ({ id, children }) => (
  <h2
    id={id}
    className="mb-4 text-xl font-display font-700 text-brand-text dark:text-white md:text-2xl"
  >
    {children}
  </h2>
);

// The three shapes the metadata distinguishes: a real geoprocessing dialog, a
// custom window, or a ribbon button that acts immediately.
const TYPES = {
  "Geoprocessing tool": { Icon: Cog, label: UI.geoprocessingBadge },
  "Custom dialog": { Icon: MousePointerClick, label: UI.dialogBadge },
  "One-click command": { Icon: Zap, label: UI.oneClickBadge },
};

const ToolDetail = ({ slug }) => {
  const { language } = useLanguage();

  const tool = getToolBySlug(slug);
  if (!tool) return null;

  const group = getGroupById(tool.group);
  const { prev, next } = getToolNeighbours(slug);

  const hasParameters = (tool.parameters ?? []).some(
    (section) => section.rows?.length || section.blocks?.length,
  );
  const type = TYPES[tool.toolType] ?? TYPES["Custom dialog"];
  const TypeIcon = type.Icon;

  // The tool pages share one fixed shape — the sections of the metadata file —
  // so "On this page" is built from what this tool actually has rather than
  // from headings scattered through the body. Order matches the page.
  const sections = [
    tool.body?.length && { id: "section-overview", label: UI.overview },
    tool.usage?.length && { id: "section-usage", label: UI.usage },
    hasParameters && { id: "section-parameters", label: UI.parameters },
    tool.steps?.length && { id: "section-how-to-use", label: UI.howToUse },
    tool.environments?.length && { id: "section-environments", label: UI.environments },
    tool.licensing?.length && { id: "section-licensing", label: UI.licensing },
  ].filter(Boolean);

  return (
    // See DocsIndex: data-language-switch keeps the global DOM walker off this tree.
    <main className="pt-24 md:pt-32" data-language-switch>
      <SectionWrapper>
        <div className="custom-screen">
          <DocsBreadcrumb group={group} tool={tool} />

          <div className="grid gap-10 lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_220px]">
            <DocsSidebar mode="links" activeSlug={tool.slug} activeGroupId={tool.group} />

            <article className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {group && (
                  <Link
                    href={`/docs/arcgis#group-${group.id}`}
                    className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-display font-600 text-brand-blue transition-colors hover:border-brand-orange/40 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/10 dark:bg-white/5 dark:text-blue-300"
                  >
                    <span lang="en">{group.name}</span>
                  </Link>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/10 bg-brand-blue/[0.04] px-3 py-1 text-xs font-display font-600 text-brand-text/65 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  <TypeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {t(type.label, language)}
                </span>
                {tool.status === "planned" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-xs font-display font-600 text-amber-700 dark:text-amber-300">
                    <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                    {t(UI.plannedBadge, language)}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-display font-900 leading-tight text-brand-text dark:text-white md:text-4xl">
                <span lang="en">{tool.name}</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-brand-text/75 dark:text-gray-300 md:text-lg">
                {t(tool.summary, language)}
              </p>

              {tool.status === "planned" && (
                <div className="mt-6 flex gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 dark:border-amber-400/30 dark:bg-amber-400/10">
                  <AlertTriangle
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-brand-text/80 dark:text-gray-200">
                    {t(UI.plannedNotice, language)}
                  </p>
                </div>
              )}

              {(tool.ribbonPath || tool.actsOn?.length > 0) && (
                <dl className="mt-6 space-y-4 rounded-2xl border border-brand-blue/8 bg-brand-blue/[0.03] p-4 dark:border-white/8 dark:bg-white/5">
                  {tool.ribbonPath && (
                    <div>
                      <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {t(UI.whereToFind, language)}
                      </dt>
                      {/* The ribbon trail, read straight out of the tool's own
                          "How to use" step. Scrolls rather than wraps, so the
                          arrows stay legible on a phone. */}
                      <dd className="overflow-x-auto whitespace-nowrap font-mono text-sm text-brand-text/80 dark:text-gray-200">
                        <span lang="en">{tool.ribbonPath}</span>
                      </dd>
                    </div>
                  )}

                  {/* A one-click command has no parameter table, only a
                      sentence saying what it acts on — the active map view, the
                      layer selected in the Contents pane. That belongs here
                      beside the ribbon path, not under a Parameters heading
                      with nothing else below it. */}
                  {tool.actsOn?.length > 0 && (
                    <div>
                      <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
                        <Sliders className="h-3.5 w-3.5" aria-hidden="true" />
                        {t(UI.parameters, language)}
                      </dt>
                      <dd className="text-sm leading-relaxed text-brand-text/80 dark:text-gray-200">
                        {tool.actsOn.map((block, i) => (
                          <p key={i} className={i ? "mt-1" : undefined}>
                            <RichText value={block.text} />
                          </p>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {tool.body?.length > 0 && (
                <section aria-labelledby="overview-heading" id="section-overview" className="mt-10 scroll-mt-28">
                  <SectionHeading id="overview-heading">{t(UI.overview, language)}</SectionHeading>
                  <DocBlocks blocks={tool.body} />
                </section>
              )}

              {tool.usage?.length > 0 && (
                <section aria-labelledby="usage-heading" id="section-usage" className="mt-12 scroll-mt-28">
                  <SectionHeading id="usage-heading">{t(UI.usage, language)}</SectionHeading>
                  <DocBlocks blocks={tool.usage} />
                </section>
              )}

              <ParameterTable sections={tool.parameters} toolName={tool.name} />

              {tool.steps?.length > 0 && (
                <section
                  id="section-how-to-use"
                  aria-labelledby="how-to-use-heading"
                  className="mt-12 scroll-mt-28"
                >
                  <SectionHeading id="how-to-use-heading">{t(UI.howToUse, language)}</SectionHeading>
                  <DocBlocks blocks={tool.steps} />
                </section>
              )}

              {/* Three tools declare geoprocessing environment settings; the
                  section is absent everywhere else rather than empty. */}
              {tool.environments?.length > 0 && (
                <section
                  id="section-environments"
                  aria-labelledby="environments-heading"
                  className="mt-12 scroll-mt-28"
                >
                  <SectionHeading id="environments-heading">
                    {t(UI.environments, language)}
                  </SectionHeading>
                  <DocBlocks blocks={tool.environments} marker="info" />
                </section>
              )}

              {tool.licensing?.length > 0 && (
                <section
                  id="section-licensing"
                  aria-labelledby="licensing-heading"
                  className="mt-12 scroll-mt-28"
                >
                  <SectionHeading id="licensing-heading">{t(UI.licensing, language)}</SectionHeading>
                  <DocBlocks blocks={tool.licensing} marker="info" />
                </section>
              )}

              {/* Renders nothing until a YouTube id is set on this tool. */}
              <ToolVideo youtubeId={tool.youtubeId} title={tool.name} />

              {tool.seeAlso?.length > 0 && (
                <section aria-labelledby="see-also-heading" className="mt-12">
                  <h2
                    id="see-also-heading"
                    className="mb-3 text-xl font-display font-700 text-brand-text dark:text-white"
                  >
                    {t(UI.seeAlso, language)}
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {tool.seeAlso.map((otherSlug) => {
                      const other = getToolBySlug(otherSlug);
                      if (!other) return null;
                      return (
                        <li key={otherSlug}>
                          <Link
                            href={`/docs/arcgis/${other.slug}`}
                            className="inline-flex rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1.5 text-sm text-brand-text/75 transition-colors hover:border-brand-orange/40 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                          >
                            <span lang="en">{other.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}

              <nav
                aria-label="Pagination"
                className="mt-12 grid gap-3 border-t border-brand-blue/8 pt-6 sm:grid-cols-2 dark:border-white/8"
              >
                {prev ? (
                  <Link
                    href={`/docs/arcgis/${prev.slug}`}
                    className="group rounded-2xl border border-brand-blue/8 p-4 transition-colors hover:border-brand-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/8"
                  >
                    <span className="flex items-center gap-1.5 text-xs text-brand-text/55 dark:text-gray-400">
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      {t(UI.previous, language)}
                    </span>
                    <span className="mt-1 block font-display font-700 text-brand-text transition-colors group-hover:text-brand-orange dark:text-white">
                      <span lang="en">{prev.name}</span>
                    </span>
                  </Link>
                ) : (
                  <span />
                )}

                {next && (
                  <Link
                    href={`/docs/arcgis/${next.slug}`}
                    className="group rounded-2xl border border-brand-blue/8 p-4 text-right transition-colors hover:border-brand-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/8 sm:col-start-2"
                  >
                    <span className="flex items-center justify-end gap-1.5 text-xs text-brand-text/55 dark:text-gray-400">
                      {t(UI.next, language)}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="mt-1 block font-display font-700 text-brand-text transition-colors group-hover:text-brand-orange dark:text-white">
                      <span lang="en">{next.name}</span>
                    </span>
                  </Link>
                )}
              </nav>

              <Link
                href="/docs/arcgis"
                className="mt-8 inline-flex items-center gap-2 text-sm font-display font-600 text-brand-orange transition-colors hover:text-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t(UI.backToIndex, language)}
              </Link>
            </article>

            <aside className="hidden xl:block xl:sticky xl:top-28 xl:self-start">
              {sections.length > 0 && (
                <nav aria-label={t(UI.onThisPage, "en")} className="mb-6">
                  <p className="mb-2 text-xs font-display font-700 uppercase tracking-wide text-brand-text/50 dark:text-gray-500">
                    {t(UI.onThisPage, language)}
                  </p>
                  <ul className="space-y-1 border-l border-brand-blue/10 pl-3 dark:border-white/10">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="block rounded px-1 py-0.5 text-sm text-brand-text/60 transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:text-gray-400"
                        >
                          {t(section.label, language)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              <LicenceCard compact />
            </aside>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default ToolDetail;
