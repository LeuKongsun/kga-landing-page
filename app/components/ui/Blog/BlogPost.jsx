"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import BlogShareButton from "./BlogShareButton";
import { useLanguage } from "../../LanguageProvider";
import { CATEGORIES, getLocalizedPost, getRelatedPosts } from "../../../blog/_data/posts";

const categoryStyles = {
  red: "bg-red-500/15 text-red-500 border-red-500/30",
  blue: "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
  purple: "bg-purple-500/15 text-purple-500 dark:text-purple-300 border-purple-500/30",
  green: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  orange: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
};

const formatDate = (iso, month = "short") => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month, year: "numeric" });
};

const BlogPost = ({ post: sourcePost }) => {
  const { language } = useLanguage();
  const post = getLocalizedPost(sourcePost, language);
  const showFullCoverImage = post.coverDisplay === "contain";
  const cat = CATEGORIES.find((c) => c.slug === post.category) || CATEGORIES[0];
  const related = getRelatedPosts(sourcePost.slug, sourcePost.category, 3).map((item) =>
    getLocalizedPost(item, language)
  );

  return (
    <main className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="custom-screen">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-text/60 dark:text-gray-400 hover:text-brand-orange transition-colors mb-6"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            <m.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-w-0"
              data-language-switch
            >
              <div
                className={`relative rounded-2xl overflow-hidden mb-6 bg-brand-blue/5 dark:bg-white/5 border border-brand-blue/8 dark:border-white/8 ${
                  showFullCoverImage ? "aspect-square" : "aspect-[16/9]"
                }`}
                style={showFullCoverImage ? { aspectRatio: "1 / 1" } : undefined}
              >
                {post.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${post.youtubeId}`}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className={showFullCoverImage ? "object-contain" : "object-cover"}
                    priority
                  />
                ) : null}
                <span
                  className={`absolute top-4 left-4 text-xs font-display font-600 px-3 py-1.5 rounded-full border backdrop-blur-md ${categoryStyles[cat.color]}`}
                >
                  {cat.label}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-800 leading-[1.3] text-brand-text dark:text-white mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-brand-text/50 dark:text-gray-500 font-body mb-6">
                <span>{post.author.name}</span>
                <span>•</span>
                <time>{formatDate(post.publishedAt)}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <p className="text-base md:text-lg text-brand-text/70 dark:text-gray-300 leading-relaxed font-body mb-8">
                {post.excerpt}
              </p>

              <div className="space-y-5 mb-10">
                {post.content.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={i}
                        className="text-xl md:text-2xl font-display font-700 text-brand-text dark:text-white mt-6 mb-2 leading-[1.5]"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "heading3") {
                    return (
                      <h3
                        key={i}
                        className="text-lg md:text-xl font-display font-700 text-brand-text dark:text-white mt-5 mb-1 leading-[1.5]"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={i}
                        className="text-base text-brand-text/70 dark:text-gray-300 leading-relaxed font-body"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "code") {
                    return (
                      <pre
                        key={i}
                        className="overflow-x-auto rounded-xl border border-brand-blue/10 bg-brand-blue/5 px-4 py-3 text-sm text-brand-text/75 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                      >
                        <code>{block.text}</code>
                      </pre>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul
                        key={i}
                        className="list-disc space-y-2 pl-6 text-base text-brand-text/70 dark:text-gray-300 leading-relaxed font-body"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "table") {
                    return (
                      <div
                        key={i}
                        className="my-8 overflow-x-auto rounded-xl border border-brand-blue/10 dark:border-white/10"
                      >
                        <table className="min-w-full divide-y divide-brand-blue/10 text-left text-sm font-body dark:divide-white/10">
                          <thead className="bg-brand-blue/5 dark:bg-white/5">
                            <tr>
                              {block.headers.map((header) => (
                                <th
                                  key={header}
                                  scope="col"
                                  className="px-4 py-3 font-display font-700 text-brand-text dark:text-white"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-brand-blue/8 dark:divide-white/8">
                            {block.rows.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={`${rowIndex}-${cellIndex}`}
                                    className="px-4 py-3 text-brand-text/70 dark:text-gray-300"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (block.type === "image") {
                    return (
                      <figure key={i} className="my-8">
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-brand-blue/8 dark:border-white/8 bg-brand-blue/5 dark:bg-white/5">
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

              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-6 border-t border-brand-blue/8 dark:border-white/8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-display font-600 px-3 py-1 rounded-full bg-brand-blue/8 dark:bg-white/5 text-brand-text/60 dark:text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </m.article>

            <m.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:sticky lg:top-28 lg:self-start space-y-4"
            >
              <div className="bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 p-6">
                <BlogShareButton
                  slug={post.slug}
                  title={post.title}
                  showLabel
                  buttonLabel="Share Article"
                  className="w-full border-transparent bg-brand-orange px-4 py-3 text-sm font-display font-700 text-white shadow-md shadow-brand-orange/20 hover:border-transparent hover:bg-brand-orange/90 hover:text-white hover:shadow-lg hover:shadow-brand-orange/30 dark:border-transparent dark:text-white dark:hover:border-transparent dark:hover:text-white mb-5"
                />

                <h4 className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3">
                  Article info
                </h4>
                <dl className="space-y-3 text-sm font-body">
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Type</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {post.youtubeId ? "Video" : "Article"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Category</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {cat.label}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Published</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {formatDate(post.publishedAt, "long")}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Read time</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {post.readTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Author</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {post.author.name}
                    </dd>
                  </div>
                </dl>
              </div>
            </m.aside>
          </div>

          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-brand-blue/8 dark:border-white/8">
              <h3 className="text-2xl font-display font-700 text-brand-text dark:text-white mb-6">
                អត្ថបទពាក់ព័ន្ធ
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rp) => {
                  const rcat = CATEGORIES.find((c) => c.slug === rp.category) || CATEGORIES[0];
                  return (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      data-language-switch
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
                      <div className="p-4">
                        <h4 className="text-base font-display font-700 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2 mb-3">
                          {rp.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-brand-text/50 dark:text-gray-500 font-body">
                          <time>{formatDate(rp.publishedAt)}</time>
                          <span>•</span>
                          <span>{rp.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default BlogPost;
