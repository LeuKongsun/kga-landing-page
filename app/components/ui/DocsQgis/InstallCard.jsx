"use client";

import { Download, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/qgis/_data/ui";
import { PLUGIN } from "../../../docs/qgis/_data/qgisDocs";

/**
 * Install instructions and outbound links.
 *
 * The plugin itself is distributed from the QGIS Plugin Repository and GitHub
 * releases; nothing is hosted in this repo, so every route out of here is an
 * external link.
 */
const InstallCard = ({ compact = false }) => {
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
            km: `ត្រូវការ QGIS ${PLUGIN.qgisMinimum} ឬថ្មីជាងនេះ។`,
            en: `Requires QGIS ${PLUGIN.qgisMinimum} or newer.`,
          },
          language,
        )}
      </p>

      <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-brand-text/70 marker:font-display marker:font-700 marker:text-brand-orange dark:text-gray-300">
        {PLUGIN.install.map((step, index) => (
          <li key={index}>{t(step, language)}</li>
        ))}
      </ol>

      {!compact && (
        <>
          <h3 className="mb-2 mt-6 text-sm font-display font-700 text-brand-text dark:text-white">
            {t(UI.installZip, language)}
          </h3>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-brand-text/70 marker:font-display marker:font-700 marker:text-brand-orange dark:text-gray-300">
            {PLUGIN.installAlt.map((step, index) => (
              <li key={index}>{t(step, language)}</li>
            ))}
          </ol>
        </>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={PLUGIN.links.pluginRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-display font-600 text-white shadow-md shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {t(UI.pluginRepo, language)}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        <a
          href={PLUGIN.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-2.5 text-sm font-display font-600 text-brand-text transition-colors hover:border-brand-orange/40 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          {t(UI.viewOnGithub, language)}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default InstallCard;
