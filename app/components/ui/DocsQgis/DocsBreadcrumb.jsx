"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/qgis/_data/ui";

const crumbLink =
  "rounded px-1 transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60";

const DocsBreadcrumb = ({ group, tool }) => {
  const { language } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-text/60 dark:text-gray-400">
        <li>
          <Link href="/program" className={crumbLink}>
            {t({ km: "កម្មវិធី", en: "Programs" }, language)}
          </Link>
        </li>
        <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
        <li>
          <Link href="/docs/qgis" className={crumbLink}>
            {t(UI.docsShort, language)}
          </Link>
        </li>
        {group && (
          <>
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
            <li>
              <Link href={`/docs/qgis#group-${group.id}`} className={crumbLink}>
                <span lang="en">{group.name}</span>
              </Link>
            </li>
          </>
        )}
        {tool && (
          <>
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
            <li aria-current="page" className="px-1 font-display font-600 text-brand-text dark:text-white">
              <span lang="en">{tool.name}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default DocsBreadcrumb;
