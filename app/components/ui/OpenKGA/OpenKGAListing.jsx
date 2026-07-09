"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import DatasetStats from "./DatasetStats";
import {
  datasets,
  TOPIC_CATEGORIES,
  FORMATS,
  LICENSES,
} from "../../../openkga/_data/datasets";

const categoryStyles = {
  red: "bg-red-500/15 text-red-500 border-red-500/30",
  blue: "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
  purple: "bg-purple-500/15 text-purple-500 dark:text-purple-300 border-purple-500/30",
  green: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  orange: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
};

const ITEMS_PER_PAGE = 12;

const parsePageNumber = (value) => {
  const page = Number.parseInt(value ?? "1", 10);
  return Number.isInteger(page) && page > 0 ? page : 1;
};

const getPaginationItems = (currentPage, totalPages) => {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);

  const items = [1];
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) items.push("start-ellipsis");
  for (let page = start; page <= end; page += 1) items.push(page);
  if (end < totalPages - 1) items.push("end-ellipsis");
  items.push(totalPages);

  return items;
};
const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const OpenKGAListing = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFormat, setActiveFormat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(() =>
    parsePageNumber(searchParams.get("page"))
  );
  const previousFilters = useRef({ activeCategory, activeFormat, searchQuery });

  const updatePageUrl = useCallback(
    (page) => {
      const params = new URLSearchParams(searchParams.toString());
      if (page > 1) params.set("page", String(page));
      else params.delete("page");

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const filteredDatasets = useMemo(() => {
    let result = datasets;
    if (activeCategory !== "all") result = result.filter((d) => d.category === activeCategory);
    if (activeFormat !== "all") result = result.filter((d) => d.format === activeFormat);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.excerpt.toLowerCase().includes(q) ||
          d.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, activeFormat, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredDatasets.length / ITEMS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);
  const paginatedDatasets = useMemo(() => {
    const start = (activePage - 1) * ITEMS_PER_PAGE;
    return filteredDatasets.slice(start, start + ITEMS_PER_PAGE);
  }, [activePage, filteredDatasets]);
  const paginationItems = getPaginationItems(activePage, totalPages);

  useEffect(() => {
    const requestedPage = parsePageNumber(searchParams.get("page"));
    const page = Math.min(requestedPage, totalPages);
    setCurrentPage(page);

    const rawPage = searchParams.get("page");
    const isCanonical = page === 1 ? rawPage === null : rawPage === String(page);
    if (!isCanonical) updatePageUrl(page);
  }, [searchParams, totalPages, updatePageUrl]);

  useEffect(() => {
    const previous = previousFilters.current;
    const filtersChanged =
      previous.activeCategory !== activeCategory ||
      previous.activeFormat !== activeFormat ||
      previous.searchQuery !== searchQuery;

    previousFilters.current = { activeCategory, activeFormat, searchQuery };
    if (!filtersChanged) return;

    setCurrentPage(1);
    updatePageUrl(1);
  }, [activeCategory, activeFormat, searchQuery, updatePageUrl]);

  const changePage = (page) => {
    if (page === activePage || page < 1 || page > totalPages) return;
    setCurrentPage(page);
    updatePageUrl(page);
    document.getElementById("openkga-datasets")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const getCategoryMeta = (slug) =>
    TOPIC_CATEGORIES.find((c) => c.slug === slug) || TOPIC_CATEGORIES[0];

  return (
    <main className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="flex flex-col items-center">
          {/* ───── Hero ───── */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl px-4"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              OpenKGA
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
              ទិន្នន័យ GIS បើកចំហ
            </h1>
            <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
              ទិន្នន័យ GIS ឥតគិតថ្លៃសម្រាប់ការសិក្សា ស្រាវជ្រាវ និងការអនុវត្តជាក់ស្តែង។
            </p>
          </m.div>

          {/* ───── Topic Tabs ───── */}
          <div className="custom-screen w-full mb-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {TOPIC_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-4 md:px-5 py-2 rounded-full text-sm font-display font-600 transition-all ${
                      isActive
                        ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                        : "bg-brand-blue/8 dark:bg-white/5 text-brand-text/70 dark:text-gray-300 hover:bg-brand-blue/15 dark:hover:bg-white/10"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ───── Format Tabs ───── */}
          <div className="custom-screen w-full mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {FORMATS.map((fmt) => {
                const isActive = activeFormat === fmt.slug;
                return (
                  <button
                    key={fmt.slug}
                    onClick={() => setActiveFormat(fmt.slug)}
                    className={`px-3 py-1.5 rounded-md text-xs font-display font-600 transition-all border ${
                      isActive
                        ? "bg-brand-blue/10 text-brand-blue dark:bg-blue-300/10 dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30"
                        : "bg-transparent text-brand-text/50 dark:text-gray-500 border-brand-blue/8 dark:border-white/8 hover:border-brand-blue/30 dark:hover:border-blue-300/30"
                    }`}
                  >
                    {fmt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ───── Main Layout ───── */}
          <div className="custom-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
                <div>
                  <label className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-2 block">
                    ស្វែងរក
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="ស្វែងរកទិន្នន័យ..."
                      className="w-full px-4 py-2.5 pl-10 text-sm bg-white dark:bg-white/5 border border-brand-blue/8 dark:border-white/8 rounded-xl text-brand-text dark:text-white placeholder:text-brand-text/40 dark:placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors font-body"
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text/40 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3 block">
                    ប្រភេទទិន្នន័យ
                  </label>
                  <ul className="space-y-1">
                    {TOPIC_CATEGORIES.map((cat) => {
                      const count =
                        cat.slug === "all"
                          ? datasets.length
                          : datasets.filter((d) => d.category === cat.slug).length;
                      const isActive = activeCategory === cat.slug;
                      return (
                        <li key={cat.slug}>
                          <button
                            onClick={() => setActiveCategory(cat.slug)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-body transition-colors ${
                              isActive
                                ? "bg-brand-orange/10 text-brand-orange font-display font-600"
                                : "text-brand-text/70 dark:text-gray-400 hover:bg-brand-blue/8 dark:hover:bg-white/5"
                            }`}
                          >
                            <span>{cat.label}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                isActive ? "bg-brand-orange/20" : "bg-brand-blue/8 dark:bg-white/8"
                              }`}
                            >
                              {count}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <label className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3 block">
                    ទម្រង់ឯកសារ
                  </label>
                  <ul className="space-y-1">
                    {FORMATS.map((fmt) => {
                      const count =
                        fmt.slug === "all"
                          ? datasets.length
                          : datasets.filter((d) => d.format === fmt.slug).length;
                      const isActive = activeFormat === fmt.slug;
                      return (
                        <li key={fmt.slug}>
                          <button
                            onClick={() => setActiveFormat(fmt.slug)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-body transition-colors ${
                              isActive
                                ? "bg-brand-blue/10 text-brand-blue dark:bg-blue-300/10 dark:text-blue-300 font-display font-600"
                                : "text-brand-text/70 dark:text-gray-400 hover:bg-brand-blue/8 dark:hover:bg-white/5"
                            }`}
                          >
                            <span>{fmt.label}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                isActive ? "bg-brand-blue/20 dark:bg-blue-300/20" : "bg-brand-blue/8 dark:bg-white/8"
                              }`}
                            >
                              {count}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Sidebar info card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue/90 dark:from-white/5 dark:to-white/10 border border-brand-blue/20 dark:border-white/8 p-5">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-orange/15 blur-2xl"></div>
                  <div className="relative">
                    <h4 className="text-base font-display font-700 text-white mb-2">
                      រួមចំណែកទិន្នន័យ
                    </h4>
                    <p className="text-xs text-white/70 mb-4 font-body leading-relaxed">
                      មានទិន្នន័យដែលចង់ចែករំលែក? ទាក់ទងមកយើង
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-600 px-4 py-2 bg-brand-orange text-white rounded-full hover:bg-brand-orange/90 transition-colors"
                    >
                      ទាក់ទងយើង
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Datasets grid */}
              <div id="openkga-datasets" className="scroll-mt-28">
                {filteredDatasets.length === 0 ? (
                  <div className="bg-brand-blue/5 dark:bg-white/5 border border-dashed border-brand-blue/20 dark:border-white/10 rounded-2xl p-12 text-center">
                    <p className="text-base font-display font-600 text-brand-text/60 dark:text-gray-400 mb-2">
                      មិនមានទិន្នន័យត្រូវនឹងលក្ខខណ្ឌស្វែងរក
                    </p>
                    <p className="text-sm text-brand-text/40 dark:text-gray-500 font-body">
                      សូមព្យាយាមផ្លាស់ប្តូរពាក្យស្វែងរក ឬប្រភេទ។
                    </p>
                  </div>
                ) : (
                  <>
                    <AnimatePresence mode="popLayout">
                      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {paginatedDatasets.map((ds, idx) => {
                        const cat = getCategoryMeta(ds.category);
                        const license = LICENSES[ds.license];
                        return (
                          <m.article
                            key={ds.slug}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 overflow-hidden group flex flex-col"
                          >
                            <Link href={`/openkga/${ds.slug}`} className="block">
                              <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5 dark:bg-white/5">
                                {ds.coverImage && (
                                  <Image
                                    src={ds.coverImage}
                                    alt={ds.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                )}
                                <span
                                  className={`absolute top-3 left-3 text-xs font-display font-600 px-2.5 py-1 rounded-full border backdrop-blur-md ${categoryStyles[cat.color]}`}
                                >
                                  {cat.label}
                                </span>
                                <span className="absolute top-3 right-3 text-xs font-display font-600 px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-md">
                                  {ds.fileFormat.split(" ")[0]}
                                </span>
                              </div>
                            </Link>

                            <div className="p-5 flex flex-col flex-1">
                              <Link href={`/openkga/${ds.slug}`}>
                                <h3 className="text-lg font-display font-700 mb-2 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                                  {ds.title}
                                </h3>
                              </Link>

                              <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-4 line-clamp-2 flex-1">
                                {ds.excerpt}
                              </p>

                              <DatasetStats slug={ds.slug} className="mb-4" />

                              {/* Meta grid */}
                              <div className="grid grid-cols-2 gap-2 text-xs font-body mb-4 pb-4 border-b border-brand-blue/8 dark:border-white/8">
                                <div>
                                  <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">Size</div>
                                  <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                    {ds.fileSize}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">Updated</div>
                                  <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                    {formatDate(ds.lastUpdated)}
                                  </div>
                                </div>
                                <div className="col-span-2">
                                  <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">License</div>
                                  <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                    {license?.label || ds.license}
                                  </div>
                                </div>
                              </div>

                              {/* Buttons */}
                              <div className="flex gap-2 mt-auto">
                                <Link
                                  href={`/openkga/${ds.slug}`}
                                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-display font-600 px-3 py-2 rounded-full border border-brand-blue/20 dark:border-white/10 text-brand-text/80 dark:text-gray-300 hover:border-brand-orange/30 hover:text-brand-orange transition-all"
                                >
                                  Details
                                </Link>
                                <Link
                                  href={ds.downloadUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-display font-600 px-3 py-2 rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 shadow-sm shadow-brand-orange/20 transition-all"
                                >
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v8.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 12.586V4a1 1 0 011-1z" clipRule="evenodd" />
                                    <path d="M3 17a1 1 0 100 2h14a1 1 0 100-2H3z" />
                                  </svg>
                                  Download
                                </Link>
                              </div>
                            </div>
                          </m.article>
                        );
                      })}
                      </div>
                    </AnimatePresence>

                    {totalPages > 1 && (
                      <nav
                        aria-label="Dataset pagination"
                        className="mt-10 flex flex-wrap items-center justify-center gap-2"
                      >
                        <button
                          type="button"
                          onClick={() => changePage(activePage - 1)}
                          disabled={activePage === 1}
                          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-brand-blue/20 bg-white px-4 text-sm font-display font-600 text-brand-text/75 transition-all hover:border-brand-orange/40 hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-brand-orange/40 dark:hover:text-brand-orange"
                        >
                          <span aria-hidden="true">←</span>
                          <span>មុន</span>
                        </button>

                        {paginationItems.map((item) =>
                          typeof item === "number" ? (
                            <button
                              key={item}
                              type="button"
                              onClick={() => changePage(item)}
                              aria-label={`Page ${item}`}
                              aria-current={item === activePage ? "page" : undefined}
                              className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-display font-700 transition-all ${
                                item === activePage
                                  ? "border-brand-orange bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                                  : "border-brand-blue/20 bg-white text-brand-text/70 hover:border-brand-orange/40 hover:text-brand-orange dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                              }`}
                            >
                              {item}
                            </button>
                          ) : (
                            <span
                              key={item}
                              aria-hidden="true"
                              className="inline-flex h-10 min-w-8 items-center justify-center text-sm font-display font-700 text-brand-text/35 dark:text-gray-600"
                            >
                              …
                            </span>
                          )
                        )}

                        <button
                          type="button"
                          onClick={() => changePage(activePage + 1)}
                          disabled={activePage === totalPages}
                          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-brand-blue/20 bg-white px-4 text-sm font-display font-600 text-brand-text/75 transition-all hover:border-brand-orange/40 hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-brand-orange/40 dark:hover:text-brand-orange"
                        >
                          <span>បន្ទាប់</span>
                          <span aria-hidden="true">→</span>
                        </button>
                      </nav>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default OpenKGAListing;
