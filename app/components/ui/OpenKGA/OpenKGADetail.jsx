"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import {
  getDatasetBySlug,
  getRelatedDatasets,
  TOPIC_CATEGORIES,
  LICENSES,
} from "../../../openkga/_data/datasets";

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

const OpenKGADetail = ({ slug }) => {
  const dataset = getDatasetBySlug(slug);

  if (!dataset) {
    return (
      <main className="pt-32 pb-20">
        <SectionWrapper>
          <div className="custom-screen text-center">
            <h1 className="text-3xl font-display font-800 text-brand-text dark:text-white mb-4">
              មិនរកឃើញទិន្នន័យ
            </h1>
            <Link
              href="/openkga"
              className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-orange"
            >
              ← ត្រលប់ទៅ OpenKGA
            </Link>
          </div>
        </SectionWrapper>
      </main>
    );
  }

  const cat = TOPIC_CATEGORIES.find((c) => c.slug === dataset.category) || TOPIC_CATEGORIES[0];
  const license = LICENSES[dataset.license];
  const related = getRelatedDatasets(dataset.slug, dataset.category, 3);

  return (
    <main className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="custom-screen">
          {/* Back link */}
          <Link
            href="/openkga"
            className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-text/60 dark:text-gray-400 hover:text-brand-orange transition-colors mb-6"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            OpenKGA
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            {/* Main column */}
            <m.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-w-0"
            >
              {/* Cover */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-brand-blue/5 dark:bg-white/5">
                {dataset.coverImage && (
                  <Image
                    src={dataset.coverImage}
                    alt={dataset.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <span
                  className={`absolute top-4 left-4 text-xs font-display font-600 px-3 py-1.5 rounded-full border backdrop-blur-md ${categoryStyles[cat.color]}`}
                >
                  {cat.label}
                </span>
              </div>

              {/* Title + meta */}
              <h1 className="text-3xl md:text-4xl font-display font-800 leading-[1.3] text-brand-text dark:text-white mb-4">
                {dataset.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-brand-text/50 dark:text-gray-500 font-body mb-6">
                <span>Updated {formatDate(dataset.lastUpdated)}</span>
                <span>•</span>
                <span>{dataset.fileSize}</span>
                <span>•</span>
                <span>{dataset.fileFormat}</span>
              </div>

              <p className="text-base md:text-lg text-brand-text/70 dark:text-gray-300 leading-relaxed font-body mb-8">
                {dataset.excerpt}
              </p>

              {/* Description blocks */}
              {dataset.description && (
                <div className="space-y-4 mb-10">
                  {dataset.description.map((block, idx) => {
                    if (block.type === "heading") {
                      return (
                        <h2
                          key={idx}
                          className="text-xl md:text-2xl font-display font-700 text-brand-text dark:text-white mt-6 mb-2"
                        >
                          {block.text}
                        </h2>
                      );
                    }
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={idx}
                          className="text-base text-brand-text/70 dark:text-gray-300 leading-relaxed font-body"
                        >
                          {block.text}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              )}

              {/* Tags */}
              {dataset.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-6 border-t border-brand-blue/8 dark:border-white/8">
                  {dataset.tags.map((tag) => (
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

            {/* Sidebar with download + metadata */}
            <m.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:sticky lg:top-28 lg:self-start space-y-4"
            >
              {/* Download card */}
              <div className="bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 p-6">
                <Link
                  href={dataset.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-orange text-white text-sm font-display font-700 rounded-full hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transition-all mb-4"
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v8.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 12.586V4a1 1 0 011-1z" clipRule="evenodd" />
                    <path d="M3 17a1 1 0 100 2h14a1 1 0 100-2H3z" />
                  </svg>
                  Download ({dataset.fileSize})
                </Link>

                <h4 className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3">
                  ព័ត៌មានទិន្នន័យ
                </h4>
                <dl className="space-y-3 text-sm font-body">
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Format</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {dataset.fileFormat}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">File size</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {dataset.fileSize}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Last updated</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {formatDate(dataset.lastUpdated)}
                    </dd>
                  </div>
                  {dataset.crs && (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">CRS</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {dataset.crs}
                      </dd>
                    </div>
                  )}
                  {dataset.featureCount && (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Features</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {dataset.featureCount.toLocaleString()}
                      </dd>
                    </div>
                  )}
                  {dataset.source && (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">Source</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {dataset.source}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">License</dt>
                    <dd>
                      {license?.url ? (
                        <Link
                          href={license.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-orange font-display font-600 hover:underline"
                        >
                          {license.label}
                        </Link>
                      ) : (
                        <span className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                          {dataset.license}
                        </span>
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </m.aside>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-brand-blue/8 dark:border-white/8">
              <h3 className="text-2xl font-display font-700 text-brand-text dark:text-white mb-6">
                ទិន្នន័យពាក់ព័ន្ធ
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((d) => {
                  const rcat = TOPIC_CATEGORIES.find((c) => c.slug === d.category) || TOPIC_CATEGORIES[0];
                  return (
                    <Link
                      key={d.slug}
                      href={`/openkga/${d.slug}`}
                      className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 overflow-hidden group flex flex-col"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5 dark:bg-white/5">
                        {d.coverImage && (
                          <Image
                            src={d.coverImage}
                            alt={d.title}
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
                        <h4 className="text-base font-display font-700 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                          {d.title}
                        </h4>
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

export default OpenKGADetail;
