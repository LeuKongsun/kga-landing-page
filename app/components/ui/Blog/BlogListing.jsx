"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import BlogShareButton from "./BlogShareButton";
import { useLanguage } from "../../LanguageProvider";
import { getLocalizedPosts, CATEGORIES } from "../../../blog/_data/posts";

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

const BlogListing = () => {
  const { language } = useLanguage();
  const localizedPosts = useMemo(() => getLocalizedPosts(language), [language]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(() =>
    parsePageNumber(searchParams.get("page"))
  );
  const previousFilters = useRef({ activeCategory, searchQuery });

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

  const filteredPosts = useMemo(() => {
    let result = activeCategory === "all" ? localizedPosts : localizedPosts.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, localizedPosts, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / ITEMS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);
  const paginatedPosts = useMemo(() => {
    const start = (activePage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [activePage, filteredPosts]);
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
      previous.searchQuery !== searchQuery;

    previousFilters.current = { activeCategory, searchQuery };
    if (!filtersChanged) return;

    setCurrentPage(1);
    updatePageUrl(1);
  }, [activeCategory, searchQuery, updatePageUrl]);

  const changePage = (page) => {
    if (page === activePage || page < 1 || page > totalPages) return;
    setCurrentPage(page);
    updatePageUrl(page);
    document.getElementById("blog-posts")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getCategoryMeta = (slug) => CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];

  return (
    <main className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="flex flex-col items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-3xl px-4"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
              មាតិកា និងព័ត៌មាន GIS
            </h1>
            <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
              វីដេអូ tutorials, tips & tricks, និងព័ត៌មានថ្មីៗស្តីពីពិភព GIS។
            </p>
          </m.div>

          <div className="custom-screen w-full mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {CATEGORIES.map((cat) => {
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

          <div className="custom-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
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
                      placeholder="ស្វែងរកអត្ថបទ..."
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
                    ប្រភេទ
                  </label>
                  <ul className="space-y-1">
                    {CATEGORIES.map((cat) => {
                      const count =
                        cat.slug === "all"
                          ? localizedPosts.length
                          : localizedPosts.filter((p) => p.category === cat.slug).length;
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

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue/90 dark:from-white/5 dark:to-white/10 border border-brand-blue/20 dark:border-white/8 p-5">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-orange/15 blur-2xl"></div>
                  <div className="relative">
                    <h4 className="text-base font-display font-700 text-white mb-2">
                      ចូលរួមជាមួយយើង
                    </h4>
                    <p className="text-xs text-white/70 mb-4 font-body leading-relaxed">
                      តាមដានព័ត៌មានថ្មីៗតាមរយៈ Telegram
                    </p>
                    <Link
                      href="https://t.me/khmergisacademychannel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-600 px-4 py-2 bg-brand-orange text-white rounded-full hover:bg-brand-orange/90 transition-colors"
                    >
                      Telegram Channel
                    </Link>
                  </div>
                </div>
              </aside>

              <div id="blog-posts" className="scroll-mt-28">
                {filteredPosts.length === 0 ? (
                  <div className="bg-brand-blue/5 dark:bg-white/5 border border-dashed border-brand-blue/20 dark:border-white/10 rounded-2xl p-12 text-center">
                    <p className="text-base font-display font-600 text-brand-text/60 dark:text-gray-400 mb-2">
                      មិនមានអត្ថបទត្រូវនឹងលក្ខខណ្ឌស្វែងរក
                    </p>
                    <p className="text-sm text-brand-text/40 dark:text-gray-500 font-body">
                      សូមព្យាយាមផ្លាស់ប្តូរពាក្យស្វែងរក ឬប្រភេទ។
                    </p>
                  </div>
                ) : (
                  <>
                    <AnimatePresence mode="popLayout">
                      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {paginatedPosts.map((post, idx) => {
                          const cat = getCategoryMeta(post.category);
                          return (
                            <m.article
                              key={post.slug}
                              layout
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.4, delay: idx * 0.05 }}
                              data-language-switch
                              className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 overflow-hidden group flex flex-col"
                            >
                              <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5 dark:bg-white/5">
                                  {post.coverImage && (
                                    <Image
                                      src={post.coverImage}
                                      alt={post.title}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                  )}
                                  {post.category === "video" && (
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                      <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/40 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                      </div>
                                    </div>
                                  )}
                                  <span
                                    className={`absolute top-3 left-3 text-xs font-display font-600 px-2.5 py-1 rounded-full border backdrop-blur-md ${categoryStyles[cat.color]}`}
                                  >
                                    {cat.label}
                                  </span>
                                  <span className="absolute top-3 right-3 text-xs font-display font-600 px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-md">
                                    {post.youtubeId ? "Video" : "Article"}
                                  </span>
                                </div>
                              </Link>

                              <div className="p-5 flex flex-col flex-1">
                                <Link href={`/blog/${post.slug}`}>
                                  <h3 className="text-lg font-display font-700 mb-2 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                                    {post.title}
                                  </h3>
                                </Link>

                                <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-4 line-clamp-2 flex-1">
                                  {post.excerpt}
                                </p>

                                <div className="grid grid-cols-2 gap-2 text-xs font-body mb-4 pb-4 border-b border-brand-blue/8 dark:border-white/8">
                                  <div>
                                    <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">Published</div>
                                    <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                      {formatDate(post.publishedAt)}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">Read time</div>
                                    <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                      {post.readTime}
                                    </div>
                                  </div>
                                  <div className="col-span-2">
                                    <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">Author</div>
                                    <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                      {post.author.name}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex gap-2 mt-auto">
                                  <BlogShareButton
                                    slug={post.slug}
                                    title={post.title}
                                    showLabel
                                    buttonLabel="Share"
                                    className="flex-1 bg-white px-3 py-2 text-sm font-display font-600 dark:bg-white/5"
                                  />
                                  <Link
                                    href={`/blog/${post.slug}`}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-sm font-display font-600 px-3 py-2 rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 shadow-sm shadow-brand-orange/20 transition-all"
                                  >
                                    {post.youtubeId ? "Watch" : "Read"}
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
                        aria-label="Blog pagination"
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

export default BlogListing;
