"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Database,
  FileSpreadsheet,
  GitBranch,
  Layers3,
  PenLine,
  Repeat,
  Shapes,
  Table2,
  Waves,
} from "lucide-react";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/qgis/_data/ui";
import { PLUGIN, groups, tools, getToolsInGroup } from "../../../docs/qgis/_data/qgisDocs";
import DocBlocks from "./DocBlocks";
import DocsSidebar from "./DocsSidebar";
import DocsBreadcrumb from "./DocsBreadcrumb";
import InstallCard from "./InstallCard";
import ToolVideo from "./ToolVideo";

const iconMap = {
  Database,
  Table2,
  PenLine,
  Shapes,
  GitBranch,
  Repeat,
  Waves,
  Boxes,
  FileSpreadsheet,
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

const DocsIndex = () => {
  const { language } = useLanguage();

  return (
    // data-language-switch is functional, not cosmetic: it stops the global
    // LanguageProvider DOM walker from rewriting text React owns on this page.
    <main className="pt-24 md:pt-32" data-language-switch>
      <SectionWrapper>
        <div className="custom-screen">
          <DocsBreadcrumb />

          <m.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12"
          >
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-brand-orange/30 bg-brand-orange/15 px-3 py-1 text-xs font-display font-600 text-brand-orange">
                  {t({ km: "កម្មវិធីជំនួយ QGIS", en: "QGIS Plugin" }, language)}
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-display font-600 text-emerald-700 dark:text-emerald-300">
                  {t(PLUGIN.price, language)}
                </span>
              </div>

              <h1 className="text-3xl font-display font-900 leading-tight text-brand-text dark:text-white md:text-5xl">
                KGA <span className="text-brand-orange">Toolbox</span>{" "}
                <span className="font-700 text-brand-text/55 dark:text-gray-400">for QGIS</span>
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-text/70 dark:text-gray-300 md:text-lg">
                {t(PLUGIN.tagline, language)}
              </p>

              <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat value={PLUGIN.toolCount} label={t(UI.toolsLabel, language)} />
                <Stat value={PLUGIN.groupCount} label={t(UI.groupsLabel, language)} />
                <Stat value={`QGIS ${PLUGIN.qgisMinimum}+`} label={t(UI.requiresLabel, language)} />
                <Stat value={`v${PLUGIN.version}`} label={t(UI.versionLabel, language)} />
              </div>
            </div>

            {/* The source file is 2560x1600, so the frame is 16/10 and nothing
                gets cropped. `priority` because it is the LCP element on wide
                screens, where it sits beside the h1 rather than below it. */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-brand-blue/8 bg-brand-light shadow-sm dark:border-white/8 dark:bg-white/5">
              <Image
                src="/images/kga-toolbox-cover.png"
                alt={t(
                  {
                    km: "ក្រុមឧបករណ៍ KGA Toolbox នៅក្នុង Processing Toolbox របស់ QGIS",
                    en: "The KGA Toolbox groups shown in the QGIS Processing Toolbox",
                  },
                  language
                )}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
          </m.header>

          <ToolVideo youtubeId={PLUGIN.youtubeId} title={PLUGIN.name} />

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
                <DocBlocks blocks={PLUGIN.overview} />
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
                  {PLUGIN.features.map((feature, index) => (
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

              {/* Install */}
              <div className="mb-12">
                <InstallCard />
              </div>

              {/* Tools, by group */}
              <h2
                id="tools-heading"
                className="mb-2 text-2xl font-display font-800 text-brand-text dark:text-white"
              >
                {t(UI.toolsHeading, language)}
              </h2>
              <p className="mb-8 text-sm text-brand-text/60 dark:text-gray-400">
                {t(
                  {
                    km: `ឧបករណ៍ទាំង ${PLUGIN.toolCount} រៀបតាមក្រុមដូចក្នុង QGIS។ ចុចលើឧបករណ៍ណាមួយដើម្បីមើលលម្អិត។`,
                    en: `All ${PLUGIN.toolCount} tools, grouped as they are in QGIS. Select any tool for its full page.`,
                  },
                  language,
                )}
              </p>

              {groups.map((group) => {
                const groupTools = getToolsInGroup(group.id);
                if (!groupTools.length) return null;

                return (
                  <section
                    key={group.id}
                    id={`group-${group.id}`}
                    aria-labelledby={`group-${group.id}-heading`}
                    className="mb-12"
                  >
                    <div className="mb-1 flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-brand-blue/15 bg-brand-blue/5 text-brand-blue dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
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
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-brand-text/65 dark:text-gray-400">
                      {t(group.summary, language)}
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {groupTools.map((tool) => (
                        <li key={tool.slug}>
                          <Link
                            href={`/docs/qgis/${tool.slug}`}
                            className="tool-card group flex h-full flex-col rounded-2xl border border-brand-blue/8 bg-white p-4 transition-colors hover:border-brand-orange/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/8 dark:bg-white/5"
                          >
                            <div className="mb-1.5 flex items-start justify-between gap-2">
                              <h4 className="font-display font-700 leading-snug text-brand-text transition-colors group-hover:text-brand-orange dark:text-white">
                                <span lang="en">{tool.name}</span>
                              </h4>
                              {tool.status !== "full" && (
                                <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-blue/5 px-2 py-0.5 text-[10px] text-brand-text/55 dark:bg-white/5 dark:text-gray-400">
                                  {t(UI.summaryOnly, language)}
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
                  dev only — {tools.filter((x) => x.status === "full").length}/{tools.length} full ·{" "}
                  {tools.filter((x) => x.status === "draft").length} draft ·{" "}
                  {tools.filter((x) => x.status === "stub").length} stub ·{" "}
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
