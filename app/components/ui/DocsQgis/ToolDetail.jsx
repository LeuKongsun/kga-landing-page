"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Hash, Info, MapPin, MousePointerClick, Terminal } from "lucide-react";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/qgis/_data/ui";
import {
  getToolBySlug,
  getGroupById,
  getToolNeighbours,
} from "../../../docs/qgis/_data/qgisDocs";
import DocBlocks from "./DocBlocks";
import DocsSidebar from "./DocsSidebar";
import DocsBreadcrumb from "./DocsBreadcrumb";
import ParameterTable, { OutputTable } from "./ParameterTable";
import RichText from "./RichText";
import ToolVideo from "./ToolVideo";
import InstallCard from "./InstallCard";

const SectionHeading = ({ id, children }) => (
  <h2
    id={id}
    className="mb-4 text-xl font-display font-700 text-brand-text dark:text-white md:text-2xl"
  >
    {children}
  </h2>
);

const ToolDetail = ({ slug }) => {
  const { language } = useLanguage();

  const tool = getToolBySlug(slug);
  if (!tool) return null;

  const group = getGroupById(tool.group);
  const { prev, next } = getToolNeighbours(slug);

  const hasParameters = (tool.parameters ?? []).some(
    (section) => section.rows?.length || section.blocks?.length,
  );
  const hasResults = tool.outputs?.length > 0 || tool.results?.length > 0;

  // The tool pages share one fixed shape — the five sections of the metadata
  // file — so "On this page" is built from what this tool actually has rather
  // than from headings scattered through the body.
  const sections = [
    tool.body?.length && { id: "section-overview", label: UI.overview },
    hasParameters && { id: "section-parameters", label: UI.parameters },
    tool.usage?.length && { id: "section-how-to-use", label: UI.howToUse },
    hasResults && { id: "section-outputs", label: UI.outputs },
    tool.notes?.length && { id: "section-notes", label: UI.notesAndLimits },
  ].filter(Boolean);

  const TypeIcon = tool.interactive ? MousePointerClick : Terminal;

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
                    href={`/docs/qgis#group-${group.id}`}
                    className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-display font-600 text-brand-blue transition-colors hover:border-brand-orange/40 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/10 dark:bg-white/5 dark:text-blue-300"
                  >
                    <span lang="en">{group.name}</span>
                  </Link>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/10 bg-brand-blue/[0.04] px-3 py-1 text-xs font-display font-600 text-brand-text/65 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  <TypeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {t(tool.interactive ? UI.interactiveBadge : UI.batchBadge, language)}
                </span>
                {tool.status !== "full" && (
                  <span className="rounded-full bg-brand-blue/5 px-2.5 py-1 text-[11px] text-brand-text/55 dark:bg-white/5 dark:text-gray-400">
                    {t(UI.summaryOnly, language)}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-display font-900 leading-tight text-brand-text dark:text-white md:text-4xl">
                <span lang="en">{tool.name}</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-brand-text/75 dark:text-gray-300 md:text-lg">
                {t(tool.summary, language)}
              </p>

              {(tool.processingPath || tool.algorithmId) && (
                <dl className="mt-6 grid gap-4 rounded-2xl border border-brand-blue/8 bg-brand-blue/[0.03] p-4 dark:border-white/8 dark:bg-white/5 sm:grid-cols-2">
                  {tool.processingPath && (
                    <div className="sm:col-span-2">
                      <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {t(UI.whereToFind, language)}
                      </dt>
                      <dd className="overflow-x-auto whitespace-nowrap font-mono text-sm text-brand-text/80 dark:text-gray-200">
                        {tool.processingPath}
                      </dd>
                    </div>
                  )}

                  {tool.algorithmId && (
                    <div>
                      <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
                        <Hash className="h-3.5 w-3.5" aria-hidden="true" />
                        {t(UI.algorithmId, language)}
                      </dt>
                      <dd className="font-mono text-sm text-brand-text/80 dark:text-gray-200">
                        {tool.algorithmId}
                      </dd>
                    </div>
                  )}

                  {tool.toolType && (
                    <div>
                      <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
                        <TypeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {t(UI.toolType, language)}
                      </dt>
                      <dd className="text-sm leading-relaxed text-brand-text/80 dark:text-gray-200">
                        <RichText value={tool.toolType} />
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {tool.body?.length > 0 && (
                <section aria-labelledby="section-overview" className="mt-10 scroll-mt-28">
                  <SectionHeading id="section-overview">{t(UI.overview, language)}</SectionHeading>
                  <DocBlocks blocks={tool.body} />
                </section>
              )}

              <ParameterTable sections={tool.parameters} toolName={tool.name} />

              {tool.usage?.length > 0 && (
                <section
                  id="section-how-to-use"
                  aria-labelledby="how-to-use-heading"
                  className="mt-12 scroll-mt-28"
                >
                  <SectionHeading id="how-to-use-heading">{t(UI.howToUse, language)}</SectionHeading>
                  <DocBlocks blocks={tool.usage} />
                </section>
              )}

              {hasResults && (
                <section
                  id="section-outputs"
                  aria-labelledby="outputs-heading"
                  className="mt-12 scroll-mt-28"
                >
                  <SectionHeading id="outputs-heading">{t(UI.outputs, language)}</SectionHeading>
                  <div className="space-y-6">
                    <OutputTable rows={tool.outputs} toolName={tool.name} />
                    {tool.results?.length > 0 && (
                      <div className="space-y-3">
                        {tool.outputs?.length > 0 && (
                          <h3 className="text-lg font-display font-700 text-brand-text dark:text-white">
                            {t(UI.whatYouGet, language)}
                          </h3>
                        )}
                        <DocBlocks blocks={tool.results} />
                      </div>
                    )}
                  </div>
                </section>
              )}

              {tool.notes?.length > 0 && (
                <section
                  id="section-notes"
                  aria-labelledby="notes-heading"
                  className="mt-12 scroll-mt-28"
                >
                  <SectionHeading id="notes-heading">{t(UI.notesAndLimits, language)}</SectionHeading>
                  <DocBlocks blocks={tool.notes} marker="info" />
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
                            href={`/docs/qgis/${other.slug}`}
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

              {tool.status !== "full" && (
                <div className="mt-10 flex gap-3 rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.06] p-4 dark:border-blue-300/25 dark:bg-blue-300/10">
                  <Info
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue dark:text-blue-300"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-brand-text/80 dark:text-gray-200">
                    {t(UI.stubNotice, language)}
                  </p>
                </div>
              )}

              <nav
                aria-label="Pagination"
                className="mt-12 grid gap-3 border-t border-brand-blue/8 pt-6 sm:grid-cols-2 dark:border-white/8"
              >
                {prev ? (
                  <Link
                    href={`/docs/qgis/${prev.slug}`}
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
                    href={`/docs/qgis/${next.slug}`}
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
                href="/docs/qgis"
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
              <InstallCard compact />
            </aside>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default ToolDetail;
