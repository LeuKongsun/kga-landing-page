"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import { posts, CATEGORIES } from "../../../blog/_data/posts";

const categoryStyles = {
  red: "bg-red-500/15 text-red-500 border-red-500/30",
  blue: "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
  purple: "bg-purple-500/15 text-purple-500 dark:text-purple-300 border-purple-500/30",
  green: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  orange: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
};

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let result = activeCategory === "all" ? posts : posts.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const getCategoryMeta = (slug) => CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];

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

          {/* ───── Category Tabs (top) ───── */}
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

          {/* ───── Main Layout: Sidebar + Posts ───── */}
          <div className="custom-screen w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
              {/* ─── Sidebar ─── */}
              <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
                {/* Search */}
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

                {/* Sidebar category filter */}
                <div>
                  <label className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3 block">
                    ប្រភេទ
                  </label>
                  <ul className="space-y-1">
                    {CATEGORIES.map((cat) => {
                      const count =
                        cat.slug === "all"
                          ? posts.length
                          : posts.filter((p) => p.category === cat.slug).length;
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
                                isActive
                                  ? "bg-brand-orange/20"
                                  : "bg-brand-blue/8 dark:bg-white/8"
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

                {/* CTA card in sidebar */}
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
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* ─── Posts grid ─── */}
              <div>
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
                  <AnimatePresence mode="popLayout">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {filteredPosts.map((post, idx) => {
                        const cat = getCategoryMeta(post.category);
                        return (
                          <m.article
                            key={post.slug}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
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
                                {/* Video play badge */}
                                {post.category === "video" && (
                                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/40 group-hover:scale-110 transition-transform">
                                      <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                      </svg>
                                    </div>
                                  </div>
                                )}
                                {/* Category pill */}
                                <span
                                  className={`absolute top-3 left-3 text-xs font-display font-600 px-2.5 py-1 rounded-full border backdrop-blur-md ${categoryStyles[cat.color]}`}
                                >
                                  {cat.label}
                                </span>
                              </div>
                            </Link>

                            <div className="p-5 flex flex-col flex-1">
                              <div className="flex items-center gap-3 text-xs text-brand-text/50 dark:text-gray-500 font-body mb-3">
                                <time>{formatDate(post.publishedAt)}</time>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>

                              <Link href={`/blog/${post.slug}`}>
                                <h3 className="text-lg font-display font-700 mb-2 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                                  {post.title}
                                </h3>
                              </Link>

                              <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-4 line-clamp-3 flex-1">
                                {post.excerpt}
                              </p>

                              <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-orange hover:gap-2.5 transition-all mt-auto"
                              >
                                អានបន្ថែម
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </Link>
                            </div>
                          </m.article>
                        );
                      })}
                    </div>
                  </AnimatePresence>
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