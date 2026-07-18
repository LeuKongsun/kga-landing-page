"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import {
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
  getLocalizedProjects,
  getProjectCategoryLabel,
  getProjectStatusLabel,
  projects,
} from "../../../project/_data/projects";

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

const ProjectListing = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const localizedProjects = useMemo(() => getLocalizedProjects(language), [language]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    let result = localizedProjects;
    if (activeCategory !== "all") result = result.filter((project) => project.category === activeCategory);
    if (activeStatus !== "all") result = result.filter((project) => project.status === activeStatus);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(q) ||
          project.excerpt.toLowerCase().includes(q) ||
          project.partnerOrClient.toLowerCase().includes(q) ||
          project.trainingTopics.some((topic) => topic.toLowerCase().includes(q)) ||
          project.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, activeStatus, localizedProjects, searchQuery]);

  const overviewStats = [
    [isEnglish ? "Projects" : "គម្រោង", projects.length],
    [isEnglish ? "Training Areas" : "ផ្នែកបណ្តុះបណ្តាល", PROJECT_CATEGORIES.length - 1],
    [isEnglish ? "Participants" : "អ្នកចូលរួម", `${projects.reduce((sum, project) => sum + project.participantCount, 0)}+`],
  ];

  return (
    <main key={language} data-language-switch className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="flex flex-col items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 max-w-3xl px-4"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              {isEnglish ? "Project" : "គម្រោង"}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
              {isEnglish ? "Training Projects by KGA" : "គម្រោងបណ្តុះបណ្តាលរបស់ KGA"}
            </h1>
            <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
              {isEnglish
                ? "An overview of current and previous training projects delivered by Khmer GRS Academy for students, professionals, and organizations."
                : "ទំព័រនេះបង្ហាញសេចក្តីសង្ខេបអំពីគម្រោងបណ្តុះបណ្តាលដែល Khmer GRS Academy បាន និងកំពុងផ្តល់ជូនសិស្ស អ្នកជំនាញ និងអង្គការផ្សេងៗ។"}
            </p>
          </m.div>

          <div className="custom-screen w-full mb-10">
            <div className="grid gap-3 sm:grid-cols-3">
              {overviewStats.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-brand-blue/8 bg-white p-5 text-center dark:border-white/8 dark:bg-white/5"
                >
                  <div className="text-2xl font-display font-900 text-brand-text dark:text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-display font-700 uppercase tracking-wider text-brand-text/45 dark:text-gray-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="custom-screen w-full mb-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = activeCategory === category.slug;
                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setActiveCategory(category.slug)}
                    className={`px-4 md:px-5 py-2 rounded-full text-sm font-display font-600 transition-all ${
                      isActive
                        ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                        : "bg-brand-blue/8 dark:bg-white/5 text-brand-text/70 dark:text-gray-300 hover:bg-brand-blue/15 dark:hover:bg-white/10"
                    }`}
                  >
                    {category.label[language]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="custom-screen w-full mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {PROJECT_STATUSES.map((status) => {
                const isActive = activeStatus === status.slug;
                return (
                  <button
                    key={status.slug}
                    type="button"
                    onClick={() => setActiveStatus(status.slug)}
                    className={`px-3 py-1.5 rounded-md text-xs font-display font-600 transition-all border ${
                      isActive
                        ? "bg-brand-blue/10 text-brand-blue dark:bg-blue-300/10 dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30"
                        : "bg-transparent text-brand-text/50 dark:text-gray-500 border-brand-blue/8 dark:border-white/8 hover:border-brand-blue/30 dark:hover:border-blue-300/30"
                    }`}
                  >
                    {status.label[language]}
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
                    {isEnglish ? "Search" : "ស្វែងរក"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder={isEnglish ? "Search projects..." : "ស្វែងរកគម្រោង..."}
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
                    {isEnglish ? "Project Type" : "ប្រភេទគម្រោង"}
                  </label>
                  <ul className="space-y-1">
                    {PROJECT_CATEGORIES.map((category) => {
                      const count =
                        category.slug === "all"
                          ? projects.length
                          : projects.filter((project) => project.category === category.slug).length;
                      const isActive = activeCategory === category.slug;
                      return (
                        <li key={category.slug}>
                          <button
                            type="button"
                            onClick={() => setActiveCategory(category.slug)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-body transition-colors ${
                              isActive
                                ? "bg-brand-orange/10 text-brand-orange font-display font-600"
                                : "text-brand-text/70 dark:text-gray-400 hover:bg-brand-blue/8 dark:hover:bg-white/5"
                            }`}
                          >
                            <span>{category.label[language]}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-brand-orange/20" : "bg-brand-blue/8 dark:bg-white/8"}`}>
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
                      {isEnglish ? "Need Training?" : "ត្រូវការបណ្តុះបណ្តាល?"}
                    </h4>
                    <p className="text-xs text-white/70 mb-4 font-body leading-relaxed">
                      {isEnglish
                        ? "Contact KGA to discuss a custom GIS training project for your team."
                        : "ទាក់ទង KGA ដើម្បីពិភាក្សាគម្រោងបណ្តុះបណ្តាល GIS សម្រាប់ក្រុមការងាររបស់អ្នក។"}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-600 px-4 py-2 bg-brand-orange text-white rounded-full hover:bg-brand-orange/90 transition-colors"
                    >
                      {isEnglish ? "Contact Us" : "ទាក់ទងយើង"}
                    </Link>
                  </div>
                </div>
              </aside>

              <div id="project-list" className="scroll-mt-28">
                {filteredProjects.length === 0 ? (
                  <div className="bg-brand-blue/5 dark:bg-white/5 border border-dashed border-brand-blue/20 dark:border-white/10 rounded-2xl p-12 text-center">
                    <p className="text-base font-display font-600 text-brand-text/60 dark:text-gray-400 mb-2">
                      {isEnglish ? "No projects match your search criteria" : "មិនមានគម្រោងត្រូវនឹងលក្ខខណ្ឌស្វែងរក"}
                    </p>
                    <p className="text-sm text-brand-text/40 dark:text-gray-500 font-body">
                      {isEnglish ? "Try changing your search term or filters." : "សូមព្យាយាមផ្លាស់ប្តូរពាក្យស្វែងរក ឬប្រភេទគម្រោង។"}
                    </p>
                  </div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {filteredProjects.map((project, idx) => (
                        <m.article
                          key={project.slug}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
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
                            <Link href={`/project/${project.slug}`}>
                              <h3 className="text-lg font-display font-700 mb-2 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                                {project.title}
                              </h3>
                            </Link>

                            <p className="text-sm text-brand-text/60 dark:text-gray-400 leading-relaxed font-body mb-4 line-clamp-3 flex-1">
                              {project.excerpt}
                            </p>

                            <div className="grid grid-cols-2 gap-2 text-xs font-body mb-4 pb-4 border-b border-brand-blue/8 dark:border-white/8">
                              <div>
                                <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Period" : "រយៈពេល"}</div>
                                <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                  {project.dateRange}
                                </div>
                              </div>
                              <div>
                                <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Participants" : "អ្នកចូលរួម"}</div>
                                <div className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                                  {project.participantCount}
                                </div>
                              </div>
                              {project.status !== "current" ? (
                                <div className="col-span-2">
                                  <div className="text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Partner / Client" : "ដៃគូ / អតិថិជន"}</div>
                                  <div className="text-brand-text/80 dark:text-gray-300 font-display font-600 line-clamp-1">
                                    {project.partnerOrClient}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                            {project.status === "current" ? (
                              <div className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/8 px-6 py-3 text-sm font-display font-700 text-brand-text/65 transition-colors dark:border-white/15 dark:bg-white/5 dark:text-gray-300">
                                {availabilityMessage}
                                <Clock className="h-4 w-4" aria-hidden="true" />
                              </div>
                            ) : (
                              <Link
                                href={`/project/${project.slug}`}
                                className="mt-auto inline-flex items-center justify-center gap-1.5 text-sm font-display font-600 px-3 py-2 rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 shadow-sm shadow-brand-orange/20 transition-all"
                              >
                                {isEnglish ? "Details" : "មើលព័ត៌មានលម្អិត"}
                              </Link>
                            )}
                          </div>
                        </m.article>
                      ))}
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

export default ProjectListing;
