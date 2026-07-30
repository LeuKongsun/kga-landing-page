"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Laptop,
  Users,
} from "lucide-react";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import {
  getLocalizedProjects,
  getProjectCategoryLabel,
  getProjectStatusLabel,
  projects,
} from "../../../project/_data/projects";
import ProjectCover from "./ProjectCover";

const categoryStyles = {
  "social-affairs":
    "border-sky-300/50 bg-sky-50/90 text-sky-700 dark:border-sky-300/25 dark:bg-sky-400/15 dark:text-sky-200",
  agriculture:
    "border-green-300/50 bg-green-50/90 text-green-700 dark:border-green-300/25 dark:bg-green-400/15 dark:text-green-200",
  "land-administration":
    "border-violet-300/50 bg-violet-50/90 text-violet-700 dark:border-violet-300/25 dark:bg-violet-400/15 dark:text-violet-200",
  infrastructure:
    "border-amber-300/50 bg-amber-50/90 text-amber-700 dark:border-amber-300/25 dark:bg-amber-400/15 dark:text-amber-200",
  logistics:
    "border-cyan-300/50 bg-cyan-50/90 text-cyan-700 dark:border-cyan-300/25 dark:bg-cyan-400/15 dark:text-cyan-200",
};

const ProjectListing = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const localizedProjects = getLocalizedProjects(language);
  const participantTotal = projects.reduce(
    (sum, project) => sum + project.participantCount,
    0
  );
  const platformTotal = new Set(projects.map((project) => project.software)).size;
  const overviewStats = [
    [isEnglish ? "Training Projects" : "គម្រោងបណ្តុះបណ្តាល", projects.length],
    [isEnglish ? "Participants" : "អ្នកចូលរួម", participantTotal],
    [isEnglish ? "GIS Platforms" : "កម្មវិធី GIS", platformTotal],
  ];

  return (
    <main key={language} data-language-switch className="pt-24 pb-20 md:pt-32">
      <SectionWrapper>
        <div className="custom-screen">
          <m.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl px-4 text-center"
          >
            <span className="inline-block rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-xs font-display font-700 uppercase text-brand-orange">
              {isEnglish ? "Project" : "គម្រោង"}
            </span>
            <h1 className="mt-5 text-3xl font-display font-800 leading-[1.4] text-brand-text dark:text-white md:text-5xl">
              {isEnglish
                ? "Professional Training Projects"
                : "គម្រោងបណ្តុះបណ្តាលវិជ្ជាជីវៈ"}
            </h1>
            <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-brand-orange" />
            <p className="mt-6 text-base font-body leading-relaxed text-brand-text/65 dark:text-gray-300 md:text-lg">
              {isEnglish
                ? "Explore GIS training delivered by Khmer GRS Academy for government institutions, private companies, and development partners."
                : "ស្វែងយល់ពីការបណ្តុះបណ្តាល GIS ដែល Khmer GRS Academy បានផ្តល់ជូនស្ថាប័នរដ្ឋ ក្រុមហ៊ុនឯកជន និងដៃគូអភិវឌ្ឍន៍។"}
            </p>
          </m.header>

          <m.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-10 grid max-w-4xl grid-cols-3 border-y border-brand-blue/10 py-5 dark:border-white/10"
          >
            {overviewStats.map(([label, value], index) => (
              <div
                key={label}
                className={`px-2 text-center ${
                  index > 0 ? "border-l border-brand-blue/10 dark:border-white/10" : ""
                }`}
              >
                <dd className="text-2xl font-display font-900 text-brand-text dark:text-white md:text-3xl">
                  {value}
                </dd>
                <dt className="mt-1 text-xs font-display font-700 text-brand-text/50 dark:text-gray-400 md:text-sm">
                  {label}
                </dt>
              </div>
            ))}
          </m.dl>

          <section
            aria-label={isEnglish ? "Training projects" : "គម្រោងបណ្តុះបណ្តាល"}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {localizedProjects.map((project, index) => (
                <m.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-40px" }}
                  data-language-switch
                  className="min-w-0"
                >
                  <Link
                    href={`/project/${project.slug}`}
                    aria-label={`${isEnglish ? "View details for" : "មើលព័ត៌មានលម្អិតអំពី"} ${project.title}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-blue/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-orange/40 dark:hover:shadow-black/20"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5 dark:bg-white/5">
                      <ProjectCover
                        project={project}
                        imageClassName="transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-xs font-display font-700 backdrop-blur-md ${
                          categoryStyles[project.category]
                        }`}
                      >
                        {getProjectCategoryLabel(project.category, language)}
                      </span>
                      <span className="absolute right-3 top-3 rounded-md border border-white/40 bg-brand-blue/80 px-2.5 py-1 text-xs font-display font-700 text-white backdrop-blur-md dark:border-white/20">
                        {getProjectStatusLabel(project.status, language)}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center justify-between gap-3 text-xs font-display font-700">
                        <span className="inline-flex items-center gap-2 text-brand-orange">
                          <Laptop
                            className="h-4 w-4 flex-none"
                            aria-hidden="true"
                          />
                          <span>{project.software}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-brand-text/50 dark:text-gray-400">
                          <CalendarDays
                            className="h-4 w-4 flex-none"
                            aria-hidden="true"
                          />
                          <span>{project.dateRange}</span>
                        </span>
                      </div>

                      <h2 className="mt-3 line-clamp-2 text-lg font-display font-800 leading-[1.45] text-brand-text transition-colors group-hover:text-brand-orange dark:text-white">
                        {project.title}
                      </h2>

                      <p className="mt-3 line-clamp-2 text-sm font-body leading-relaxed text-brand-text/60 dark:text-gray-400">
                        {project.excerpt}
                      </p>

                      <div className="mt-5 space-y-3 border-t border-brand-blue/8 pt-4 text-sm dark:border-white/8">
                        <div className="flex items-start gap-2.5">
                          <Building2
                            className="mt-0.5 h-4 w-4 flex-none text-brand-text/40 dark:text-gray-500"
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-body text-brand-text/40 dark:text-gray-500">
                              {isEnglish ? "Client" : "អតិថិជន"}
                            </p>
                            <p className="line-clamp-2 font-display font-600 leading-snug text-brand-text/75 dark:text-gray-300">
                              {project.partnerOrClient}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2">
                            <Users
                              className="h-4 w-4 flex-none text-brand-text/40 dark:text-gray-500"
                              aria-hidden="true"
                            />
                            <div>
                              <p className="text-xs font-body text-brand-text/40 dark:text-gray-500">
                                {isEnglish ? "Participants" : "អ្នកចូលរួម"}
                              </p>
                              <p className="font-display font-700 text-brand-text/80 dark:text-gray-300">
                                {project.participantCount}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-body text-brand-text/40 dark:text-gray-500">
                              {isEnglish ? "Delivery" : "ទម្រង់"}
                            </p>
                            <p className="font-display font-700 text-brand-text/80 dark:text-gray-300">
                              {project.deliveryModeLabel}
                            </p>
                          </div>
                        </div>
                      </div>

                      <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-display font-700 text-white shadow-sm shadow-brand-orange/20 transition-colors group-hover:bg-brand-orange/90">
                        {isEnglish ? "Details" : "មើលព័ត៌មានលម្អិត"}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </m.article>
              ))}
            </div>
          </section>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default ProjectListing;
