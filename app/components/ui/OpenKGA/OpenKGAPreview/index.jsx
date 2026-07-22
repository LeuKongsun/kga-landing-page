"use client";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { PlayCircle } from "lucide-react";
import SectionWrapper from "../../../SectionWrapper";
import DatasetStats from "../DatasetStats";
import DatasetShareButton from "../DatasetShareButton";
import {
  datasets,
  TOPIC_CATEGORIES,
  LICENSES,
} from "../../../../openkga/_data/datasets";

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
  TOPIC_CATEGORIES.find((c) => c.slug === slug) || TOPIC_CATEGORIES[0];

const OpenKGAPreview = () => {
  const latestDatasets = [...datasets]
    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
    .slice(0, 3);

  return (
    <SectionWrapper>
      <div className="custom-screen">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto px-4"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            OpenKGA
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
            ទិន្នន័យ GIS បើកចំហ
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
            ទិន្នន័យ GIS ឥតគិតថ្លៃសម្រាប់ការសិក្សា ស្រាវជ្រាវ និងការអនុវត្តជាក់ស្តែង។
          </p>
        </m.div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestDatasets.map((ds, idx) => {
            const cat = getCategoryMeta(ds.category);
            const license = LICENSES[ds.license];
            return (
              <m.article
                key={ds.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
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

                  <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-3 line-clamp-2 flex-1">
                    {ds.excerpt}
                  </p>

                  {ds.demoUrl && (
                    <Link
                      href={ds.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-flex w-fit items-center gap-1.5 text-xs font-display font-700 text-brand-orange hover:underline"
                    >
                      មើលវីដេអូបង្ហាញ
                      <PlayCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  )}

                  <DatasetStats slug={ds.slug} className="mb-4" />

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
                    <DatasetShareButton
                      slug={ds.slug}
                      title={ds.title}
                      className="h-10 w-10 shrink-0 bg-white dark:bg-white/5"
                    />
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>

        {/* See more button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/openkga"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-sm font-display font-600 rounded-full hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
          >
            មើលទិន្នន័យទាំងអស់
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </m.div>
      </div>
    </SectionWrapper>
  );
};

export default OpenKGAPreview;
