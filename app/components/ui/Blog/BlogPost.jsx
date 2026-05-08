"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import { CATEGORIES, getRelatedPosts } from "../../../blog/_data/posts";

const categoryStyles = {
  red: "bg-red-500/15 text-red-500 border-red-500/30",
  blue: "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
  purple: "bg-purple-500/15 text-purple-500 dark:text-purple-300 border-purple-500/30",
  green: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  orange: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
};

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

const BlogPost = ({ post }) => {
  const cat = CATEGORIES.find((c) => c.slug === post.category) || CATEGORIES[0];
  const related = getRelatedPosts(post.slug, post.category, 3);

  return (
    <main className="pt-24 md:pt-32">
      <SectionWrapper>
        <article className="max-w-3xl mx-auto px-4">
          {/* ─── Back link ─── */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-text/60 dark:text-gray-400 hover:text-brand-orange transition-colors mb-8"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            ត្រឡប់ទៅ Blog
          </Link>

          {/* ─── Header ─── */}
          <m.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span
              className={`inline-block text-xs font-display font-600 px-3 py-1 rounded-full border mb-4 ${categoryStyles[cat.color]}`}
            >
              {cat.label}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
              {post.title}
            </h1>
            <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-brand-text/50 dark:text-gray-500 font-body pb-6 border-b border-brand-blue/8 dark:border-white/8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center font-display font-700 text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <span className="font-display font-600 text-brand-text dark:text-white">
                  {post.author.name}
                </span>
              </div>
              <span>•</span>
              <time>{formatDate(post.publishedAt)}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </m.header>

          {/* ─── Hero media: video or image ─── */}
          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 rounded-2xl overflow-hidden border border-brand-blue/8 dark:border-white/8"
          >
            {post.youtubeId ? (
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${post.youtubeId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : post.coverImage ? (
              <div className="relative aspect-[16/9]">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
              </div>
            ) : null}
          </m.div>

          {/* ─── Article body ─── */}
          <div className="space-y-5 mb-12">
            {post.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="text-xl md:text-2xl font-display font-700 text-brand-text dark:text-white pt-4 leading-[1.5]"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-base md:text-lg text-brand-text/80 dark:text-gray-300 leading-relaxed font-body"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "image") {
                return (
                  <figure key={i} className="my-8">
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-brand-blue/8 dark:border-white/8">
                      <Image src={block.src} alt={block.caption || ""} fill className="object-cover" />
                    </div>
                    {block.caption && (
                      <figcaption className="text-center text-sm text-brand-text/50 dark:text-gray-500 mt-3 font-body italic">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-brand-orange pl-5 py-2 italic text-base md:text-lg text-brand-text/70 dark:text-gray-400 font-body"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          {/* ─── Tags ─── */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-brand-blue/8 dark:border-white/8">
              <span className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mr-2">
                Tags:
              </span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-body px-3 py-1 rounded-full bg-brand-blue/8 dark:bg-white/8 text-brand-text/70 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* ─── Share / CTA ─── */}
          <div className="bg-brand-blue/5 dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 p-6 md:p-8 mb-16 text-center">
            <h4 className="text-lg font-display font-700 text-brand-text dark:text-white mb-2">
              ចង់រៀន GIS ជាមួយយើង?
            </h4>
            <p className="text-sm text-brand-text/60 dark:text-gray-400 font-body mb-5">
              ទាក់ទងមកយើងតាមរយៈ Telegram សម្រាប់ព័ត៌មានបន្ថែម
            </p>
            <Link
              href="https://t.me/khmergrsacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-display font-600 text-sm rounded-full shadow-md shadow-brand-orange/20 hover:bg-brand-orange/90 hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              ទំនាក់ទំនងតាម Telegram
            </Link>
          </div>
        </article>

        {/* ─── Related posts ─── */}
        {related.length > 0 && (
          <div className="custom-screen w-full">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-800 leading-[1.4] mb-3 text-brand-text dark:text-white">
                អត្ថបទពាក់ព័ន្ធ
              </h3>
              <div className="w-12 h-1 bg-brand-orange mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => {
                const rcat = CATEGORIES.find((c) => c.slug === rp.category) || CATEGORIES[0];
                return (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 overflow-hidden group flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5 dark:bg-white/5">
                      {rp.coverImage && (
                        <Image
                          src={rp.coverImage}
                          alt={rp.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <span
                        className={`absolute top-3 left-3 text-xs font-display font-600 px-2.5 py-1 rounded-full border backdrop-blur-md ${categoryStyles[rcat.color]}`}
                      >
                        {rcat.label}
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="text-base font-display font-700 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2 mb-2">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-brand-text/50 dark:text-gray-500 font-body">
                        {formatDate(rp.publishedAt)} • {rp.readTime}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </SectionWrapper>
    </main>
  );
};

export default BlogPost;