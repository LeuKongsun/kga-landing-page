"use client";

import Link from "next/link";
import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/qgis/_data/ui";
import {
  groups,
  getToolsInGroup,
  getChildren,
  getToolBySlug,
} from "../../../docs/qgis/_data/qgisDocs";

const linkBase =
  "block rounded-lg px-2 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60";
const linkActive = "bg-brand-orange/10 font-display font-700 text-brand-orange";
const linkIdle =
  "text-brand-text/65 hover:bg-brand-blue/5 hover:text-brand-orange dark:text-gray-400 dark:hover:bg-white/5";

/**
 * One tool in the group list. A tool with sub-tools — only Modify Features so
 * far — becomes its own disclosure, so the 32 tools of the pane sit under it
 * rather than flooding the group.
 */
const ToolItem = ({ tool, activeSlug }) => {
  const isActive = tool.slug === activeSlug;
  const children = getChildren(tool.slug);

  const link = (
    <Link
      href={`/docs/qgis/${tool.slug}`}
      aria-current={isActive ? "page" : undefined}
      className={`${linkBase} ${isActive ? linkActive : linkIdle}`}
    >
      <span lang="en">{tool.name}</span>
    </Link>
  );

  if (!children.length) return <li>{link}</li>;

  const hasActiveChild = children.some((child) => child.slug === activeSlug);

  return (
    <li>
      <details open={isActive || hasActiveChild}>
        <summary className="cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60">
          {link}
        </summary>
        <ul className="mt-0.5 space-y-0.5 border-l border-brand-blue/10 pl-3 dark:border-white/10">
          {children.map((child) => (
            <li key={child.slug}>
              <Link
                href={`/docs/qgis/${child.slug}`}
                aria-current={child.slug === activeSlug ? "page" : undefined}
                className={`${linkBase} ${child.slug === activeSlug ? linkActive : linkIdle}`}
              >
                <span lang="en">{child.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};

/**
 * Group / tool navigation, shared by the index and the detail pages.
 *
 * - mode "anchors" (index): jumps to each group section on the same page.
 * - mode "links" (detail): every group expands to its tools.
 *
 * Built on native <details>/<summary> so keyboard and screen-reader disclosure
 * behaviour comes for free and no open/closed state has to be tracked.
 */
const DocsSidebar = ({ mode = "anchors", activeSlug = null, activeGroupId = null }) => {
  const { language } = useLanguage();
  const isAnchors = mode === "anchors";
  // A sub-tool's own group comes from its parent, so the right group opens.
  const activeGroup = activeGroupId ?? getToolBySlug(activeSlug)?.group ?? null;

  return (
    <nav
      aria-label={t(UI.docsTitle, language)}
      className="hidden lg:block lg:sticky lg:top-28 lg:self-start"
    >
      <Link
        href="/docs/qgis"
        className="mb-3 inline-flex items-center rounded-lg px-2 py-1 text-sm font-display font-700 text-brand-text transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:text-white"
      >
        {t(UI.allTools, language)}
      </Link>

      <ul className="space-y-1">
        {groups.map((group) => {
          const toolsInGroup = getToolsInGroup(group.id);
          const isActiveGroup = group.id === activeGroup;

          return (
            <li key={group.id}>
              {isAnchors ? (
                <a
                  href={`#group-${group.id}`}
                  className="block rounded-lg px-2 py-1.5 text-sm text-brand-text/70 transition-colors hover:bg-brand-blue/5 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:text-gray-300 dark:hover:bg-white/5"
                >
                  <span lang="en">{group.name}</span>
                </a>
              ) : (
                <details open={isActiveGroup} className="group/details">
                  <summary className="cursor-pointer list-none rounded-lg px-2 py-1.5 text-sm font-display font-600 text-brand-text/80 transition-colors hover:bg-brand-blue/5 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 dark:text-gray-200 dark:hover:bg-white/5">
                    <span lang="en">{group.name}</span>
                  </summary>
                  <ul className="mt-1 space-y-0.5 border-l border-brand-blue/10 pl-3 dark:border-white/10">
                    {toolsInGroup.map((tool) => (
                      <ToolItem key={tool.slug} tool={tool} activeSlug={activeSlug} />
                    ))}
                  </ul>
                </details>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DocsSidebar;
