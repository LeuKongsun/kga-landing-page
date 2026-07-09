"use client";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import SectionWrapper from "../../../SectionWrapper";
import BlogStats from "../BlogStats";
import { useLanguage } from "../../../LanguageProvider";
import { getLocalizedCategoryLabel, getLocalizedPosts, CATEGORIES } from "../../../../blog/_data/posts";

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

const getCategoryMeta = (slug) =>
  CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];

const BlogPreview = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const latestPosts = useMemo(
    () =>
      getLocalizedPosts(language)
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 3),
    [language]
  );
  const getCategoryLabel = (slug) => getLocalizedCategoryLabel(slug, language);

  return (
    <SectionWrapper>
      <div key={language} data-language-switch className="custom-screen">
        {/* ───── Section Header ───── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto px-4"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
            {isEnglish ? "Latest Content from KGA" : "មាតិកាថ្មីៗ ពី KGA"}
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
            {isEnglish ? "Video tutorials, tips and tricks, and the latest GIS news." : "វីដេអូ tutorials, tips & tricks, និងព័ត៌មានថ្មីៗស្តីពីពិភព GIS។"}
          </p>
        </m.div>

        {/* ───── Posts Grid ───── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, idx) => {
            const cat = getCategoryMeta(post.category);
            return (
              <m.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
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
                      {getCategoryLabel(cat.slug)}
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

                  <BlogStats slug={post.slug} views={post.views} shares={post.shares} className="mb-4" />

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-orange hover:gap-2.5 transition-all mt-auto"
                  >
                    {isEnglish ? "Read More" : "អានបន្ថែម"}
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </m.article>
            );
          })}
        </div>

        {/* ───── See More Button ───── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-sm font-display font-600 rounded-full hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
          >
            {isEnglish ? "View All Articles" : "មើលអត្ថបទទាំងអស់"}
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </m.div>
      </div>
    </SectionWrapper>
  );
};

export default BlogPreview;
