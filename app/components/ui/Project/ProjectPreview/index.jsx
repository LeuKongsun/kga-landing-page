"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import { m } from "framer-motion";
import SectionWrapper from "../../../SectionWrapper";
import { useLanguage } from "../../../LanguageProvider";
import {
  getLocalizedProjects,
  getProjectCategoryLabel,
  getProjectStatusLabel,
} from "../../../../project/_data/projects";

const statusStyles = {
  current: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  completed: "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
};

const categoryStyles = {
  "gis-foundation": "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
  "professional-gis": "bg-purple-500/15 text-purple-500 dark:text-purple-300 border-purple-500/30",
  "data-management": "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  "organization-training": "bg-red-500/15 text-red-500 border-red-500/30",
};

const availabilityMessage = "Available for display soon.";

const getProjectYear = (dateRange) => {
  const years = String(dateRange).match(/\d{4}/g);
  return years ? Math.max(...years.map(Number)) : 0;
};

const ProjectPreview = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const latestProjects = useMemo(
    () =>
      getLocalizedProjects(language)
        .sort((a, b) => getProjectYear(b.dateRange) - getProjectYear(a.dateRange))
        .slice(0, 3),
    [language]
  );

  return (
    <SectionWrapper>
      <div key={language} data-language-switch className="custom-screen">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto px-4"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            {isEnglish ? "Project" : "គម្រោង"}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
            {isEnglish ? "Recent Projects from KGA" : "គម្រោងថ្មីៗពី KGA"}
          </h2>
          <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
            {isEnglish
              ? "Current and completed GIS training projects for students, professionals, and organizations."
              : "គម្រោងបណ្តុះបណ្តាល GIS ដែលកំពុងដំណើរការ និងបានបញ្ចប់ សម្រាប់សិស្ស អ្នកជំនាញ និងអង្គការ។"}
          </p>
        </m.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestProjects.map((project, idx) => (
            <m.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              data-language-switch
              className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 overflow-hidden group flex flex-col"
            >
              <Link href={`/project/${project.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5 dark:bg-white/5">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <span
                    className={`absolute top-3 left-3 text-xs font-display font-600 px-2.5 py-1 rounded-full border backdrop-blur-md ${categoryStyles[project.category]}`}
                  >
                    {getProjectCategoryLabel(project.category, language)}
                  </span>
                  <span
                    className={`absolute top-3 right-3 text-xs font-display font-600 px-2.5 py-1 rounded-md border backdrop-blur-md ${statusStyles[project.status]}`}
                  >
                    {getProjectStatusLabel(project.status, language)}
                  </span>
                </div>
              </Link>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-brand-text/50 dark:text-gray-500 font-body mb-3">
                  <span>{project.dateRange}</span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.participantCount}
                  </span>
                </div>

                <Link href={`/project/${project.slug}`}>
                  <h3 className="text-lg font-display font-700 mb-2 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-4 line-clamp-3 flex-1">
                  {project.excerpt}
                </p>

                {project.status === "current" ? (
                  <div className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/8 px-6 py-3 text-sm font-display font-700 text-brand-text/65 transition-colors dark:border-white/15 dark:bg-white/5 dark:text-gray-300">
                    {availabilityMessage}
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-2 text-xs font-body text-brand-text/50 dark:text-gray-500 mb-4 pb-4 border-b border-brand-blue/8 dark:border-white/8">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>

                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 text-sm font-display font-600 px-3 py-2 rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 shadow-sm shadow-brand-orange/20 transition-all mt-auto"
                    >
                      {isEnglish ? "View Details" : "មើលព័ត៌មានលម្អិត"}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </>
                )}
              </div>
            </m.article>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-sm font-display font-600 rounded-full hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transition-all"
          >
            {isEnglish ? "View All Projects" : "មើលគម្រោងទាំងអស់"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </m.div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectPreview;
