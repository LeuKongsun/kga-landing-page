"use client";

import Link from "next/link";
import { ExternalLink, KeyRound, LifeBuoy, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/arcgis/_data/ui";
import { PRODUCT } from "../../../docs/arcgis/_data/arcgisDocs";

/**
 * Installation and licence, for the ArcGIS Pro add-in.
 *
 * Deliberately not the QGIS docs' InstallCard: that one points at the QGIS
 * Plugin Repository and a GitHub release, which is the right shape for a free
 * plugin and the wrong one here. This add-in is installed from an .esriAddinX
 * file and validates a licence before almost every tool runs — which, per
 * Product/About.md, is the single most common reason a tool appears to do
 * nothing — so the licence note is the part that earns its place.
 */
const LicenceCard = ({ compact = false }) => {
  const { language } = useLanguage();

  return (
    <section
      aria-labelledby="install-heading"
      className="rounded-2xl border border-brand-blue/8 bg-white p-6 dark:border-white/8 dark:bg-white/5"
    >
      <h2
        id="install-heading"
        className="mb-1 text-xl font-display font-700 text-brand-text dark:text-white"
      >
        {t(UI.install, language)}
      </h2>
      <p className="mb-4 text-sm text-brand-text/60 dark:text-gray-400">
        {t(
          {
            km: `ត្រូវការ ArcGIS Pro ${PRODUCT.arcgisMinimum} ឬថ្មីជាងនេះ។`,
            en: `Requires ArcGIS Pro ${PRODUCT.arcgisMinimum} or newer.`,
          },
          language,
        )}
      </p>

      <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-brand-text/70 marker:font-display marker:font-700 marker:text-brand-orange dark:text-gray-300">
        {PRODUCT.install.map((step, index) => (
          <li key={index}>{t(step, language)}</li>
        ))}
      </ol>

      <div className="mt-5 flex gap-3 rounded-xl border border-amber-500/25 bg-amber-500/[0.08] p-3 dark:border-amber-400/25 dark:bg-amber-400/10">
        <KeyRound
          className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-300"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-brand-text/80 dark:text-gray-200">
          {t(PRODUCT.licenceNote, language)}
        </p>
      </div>

      {!compact && (
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-blue/8 px-3 py-2 dark:border-white/8">
            <dt className="flex items-center gap-1.5 text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {t(UI.licenceRequired, language)}
            </dt>
            <dd className="mt-1 text-sm text-brand-text/80 dark:text-gray-200">
              {t(PRODUCT.licence, language)}
            </dd>
          </div>
          <div className="rounded-xl border border-brand-blue/8 px-3 py-2 dark:border-white/8">
            <dt className="text-xs font-display font-700 uppercase tracking-wide text-brand-text/55 dark:text-gray-400">
              {t(UI.versionLabel, language)}
            </dt>
            <dd className="mt-1 font-mono text-sm text-brand-text/80 dark:text-gray-200">
              {PRODUCT.version}
            </dd>
          </div>
        </dl>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={PRODUCT.links.product}
          className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-display font-600 text-white shadow-md shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60"
        >
          {t(UI.productPage, language)}
        </Link>
        <a
          href={PRODUCT.links.support}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-2.5 text-sm font-display font-600 text-brand-text transition-colors hover:border-brand-orange/40 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
        >
          <LifeBuoy className="h-4 w-4" aria-hidden="true" />
          {t(UI.contactSupport, language)}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default LicenceCard;
