"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowLeft, CalendarDays, Boxes, Layers3, Tag } from "lucide-react";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/qgis/_data/ui";
import { PLUGIN } from "../../../docs/qgis/_data/qgisDocs";
import { releases } from "../../../docs/qgis/_data/releaseNotes";
import DocBlocks from "./DocBlocks";
import DocsBreadcrumb from "./DocsBreadcrumb";

/** `#v1.1.0` in the address bar selects that release, so a note is linkable. */
const versionFromHash = () => {
  if (typeof window === "undefined") return null;
  const raw = decodeURIComponent(window.location.hash.replace(/^#v?/, ""));
  return releases.some((release) => release.version === raw) ? raw : null;
};

/** The headline facts of one release, built from the data rather than the prose. */
const ReleaseFacts = ({ release }) => {
  const { language } = useLanguage();

  // Every shipped release pins its own count, so the history stays fixed as
  // later releases are added. The live total is only a fallback for an entry
  // written before its count is known.
  const toolCount = release.toolCount ?? PLUGIN.toolCount;

  // "Prepared" and "QGIS" are already shown as their own facts below; the rest
  // of the parsed line (previous release, licence) is worth keeping.
  const extra = (release.facts ?? []).filter(
    (fact) => !/^(prepared|qgis)$/i.test(fact.label),
  );

  const items = [
    { Icon: CalendarDays, label: t(UI.released, language), value: t(release.dateLabel, language) },
    { Icon: Layers3, label: "QGIS", value: release.qgis },
    { Icon: Boxes, label: t(UI.toolsLabel, language), value: toolCount },
    ...extra.map((fact) => ({ Icon: Tag, label: fact.label, value: fact.value })),
  ];

  return (
    <dl className="mt-6 grid gap-3 rounded-2xl border border-brand-blue/8 bg-brand-blue/[0.03] p-4 dark:border-white/8 dark:bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ Icon, label, value }) => (
        <div key={label}>
          <dt className="mb-1 flex items-center gap-1.5 text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span lang={/^[a-z0-9 .+–-]+$/i.test(label) ? "en" : undefined}>{label}</span>
          </dt>
          <dd className="text-sm font-display font-600 text-brand-text dark:text-white">
            <span lang="en">{value}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
};

const ReleaseNotes = () => {
  const { language } = useLanguage();
  const [active, setActive] = useState(releases[0].version);

  // Read the hash after mount so the server and the first client render agree.
  useEffect(() => {
    const fromHash = versionFromHash();
    if (fromHash) setActive(fromHash);

    const onHashChange = () => {
      const next = versionFromHash();
      if (next) setActive(next);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const select = (version) => {
    setActive(version);
    // replaceState keeps the link shareable without pushing a history entry
    // per click and without the jump a real anchor would cause.
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#v${version}`);
    }
  };

  const release = releases.find((item) => item.version === active) ?? releases[0];

  return (
    // data-language-switch keeps the global DOM walker off text React renders.
    <main className="pt-24 md:pt-32" data-language-switch>
      <SectionWrapper>
        <div className="custom-screen">
          <DocsBreadcrumb
            tool={{ name: t(UI.releaseNotes, language), slug: "release-notes" }}
          />

          <m.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-3xl"
          >
            <h1 className="text-3xl font-display font-900 leading-tight text-brand-text dark:text-white md:text-5xl">
              {t(UI.releaseNotes, language)}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-text/70 dark:text-gray-300 md:text-lg">
              {t(UI.releaseNotesLead, language)}
            </p>
          </m.header>

          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            {/* Version rail */}
            {/* min-w-0: without it this grid child sizes to the rail's content
                and the whole page scrolls sideways on a phone, instead of the
                rail scrolling inside itself. */}
            <nav
              aria-label={t(UI.allReleases, language)}
              className="min-w-0 lg:sticky lg:top-28 lg:self-start"
            >
              <p className="mb-3 text-xs font-display font-700 uppercase tracking-wide text-brand-text/50 dark:text-gray-500">
                {t(UI.allReleases, language)}
              </p>

              {/* Horizontal on small screens, a stacked timeline from lg up. */}
              <ul className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
                {releases.map((item, index) => {
                  const isActive = item.version === release.version;
                  return (
                    <li key={item.version} className="flex-shrink-0 lg:flex-shrink">
                      <button
                        type="button"
                        onClick={() => select(item.version)}
                        aria-current={isActive ? "true" : undefined}
                        className={`w-full rounded-2xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 ${
                          isActive
                            ? "border-brand-orange/50 bg-brand-orange/10"
                            : "border-brand-blue/8 bg-white hover:border-brand-orange/30 dark:border-white/8 dark:bg-white/5"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`font-display font-800 ${
                              isActive ? "text-brand-orange" : "text-brand-text dark:text-white"
                            }`}
                          >
                            <span lang="en">{`v${item.version}`}</span>
                          </span>
                          {index === 0 && (
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-display font-600 text-emerald-700 dark:text-emerald-300">
                              {t(UI.latest, language)}
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block whitespace-nowrap text-xs text-brand-text/55 lg:whitespace-normal dark:text-gray-400">
                          {t(item.dateLabel, language)}
                        </span>
                        <span className="mt-1 hidden text-sm leading-snug text-brand-text/70 lg:block dark:text-gray-300">
                          {t(item.title, language)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/docs/qgis"
                className="mt-4 hidden items-center gap-2 text-sm font-display font-600 text-brand-orange transition-colors hover:text-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 lg:inline-flex"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t(UI.backToDocs, language)}
              </Link>
            </nav>

            {/* The selected release. `key` restarts the fade on each switch. */}
            <article key={release.version} className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-brand-orange/30 bg-brand-orange/15 px-3 py-1 text-xs font-display font-600 text-brand-orange">
                  <span lang="en">{`v${release.version}`}</span>
                </span>
                {release.version === releases[0].version && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-display font-600 text-emerald-700 dark:text-emerald-300">
                    {t(UI.latest, language)}
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-display font-900 leading-tight text-brand-text dark:text-white md:text-3xl">
                {t(release.title, language)}
              </h2>

              <p className="mt-3 text-base leading-relaxed text-brand-text/75 dark:text-gray-300">
                {t(release.tagline, language)}
              </p>

              <ReleaseFacts release={release} />

              {!release.facts?.length && release.version === "0.1.0" && (
                <p className="mt-3 text-xs leading-relaxed text-brand-text/50 dark:text-gray-500">
                  {t(UI.dateApprox, language)}
                </p>
              )}

              {release.image && (
                <figure className="mt-10">
                  {/* No fixed-ratio box and no object-cover: the intrinsic size
                      is given, so the whole screenshot scales to the column
                      width and nothing is cropped. */}
                  <Image
                    src={release.image.src}
                    alt={t(release.image.alt, language)}
                    width={release.image.width}
                    height={release.image.height}
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    priority
                    className="h-auto w-full rounded-2xl border border-brand-blue/8 bg-brand-light dark:border-white/8 dark:bg-white/5"
                  />
                </figure>
              )}

              <div className="mt-10">
                <DocBlocks blocks={release.body} />
              </div>

              <Link
                href="/docs/qgis"
                className="mt-12 inline-flex items-center gap-2 text-sm font-display font-600 text-brand-orange transition-colors hover:text-brand-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t(UI.backToDocs, language)}
              </Link>
            </article>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default ReleaseNotes;
