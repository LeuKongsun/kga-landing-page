"use client";

import Link from "next/link";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import {
  getLocalizedProject,
  getProjectBySlug,
  getProjectCategoryLabel,
  getProjectStatusLabel,
  getRelatedProjects,
} from "../../../project/_data/projects";
import ProjectCover from "./ProjectCover";

const statusStyles = {
  current: "bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/30",
  completed: "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
};

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

const ProjectDetail = ({ slug }) => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const sourceProject = getProjectBySlug(slug);
  const project = getLocalizedProject(sourceProject, language);

  if (!project) {
    return (
      <main className="pt-32 pb-20">
        <SectionWrapper>
          <div className="custom-screen text-center">
            <h1 className="text-3xl font-display font-800 text-brand-text dark:text-white mb-4">
              {isEnglish ? "Project not found" : "មិនរកឃើញគម្រោង"}
            </h1>
            <Link
              href="/project"
              className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-orange"
            >
              {isEnglish ? "Back to Project" : "ត្រឡប់ទៅគម្រោង"}
            </Link>
          </div>
        </SectionWrapper>
      </main>
    );
  }

  const related = getRelatedProjects(project.slug, project.category, 3).map((item) =>
    getLocalizedProject(item, language)
  );
  const summaryItems = [
    project.dateRange,
    project.location,
    `${project.participantCount} ${
      isEnglish ? "participants" : "អ្នកចូលរួម"
    }`,
    project.deliveryModeLabel,
    project.software,
  ].filter(Boolean);

  return (
    <main key={language} data-language-switch className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="custom-screen">
          <Link
            href="/project"
            className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-brand-text/60 dark:text-gray-400 hover:text-brand-orange transition-colors mb-6"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {isEnglish ? "Project" : "គម្រោង"}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            <m.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-w-0"
              data-language-switch
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-brand-blue/5 dark:bg-white/5 border border-brand-blue/8 dark:border-white/8">
                <ProjectCover
                  project={project}
                  priority
                  sizes="(min-width: 1024px) 70vw, 100vw"
                />
                <span
                  className={`absolute top-4 left-4 text-xs font-display font-600 px-3 py-1.5 rounded-full border backdrop-blur-md ${categoryStyles[project.category]}`}
                >
                  {getProjectCategoryLabel(project.category, language)}
                </span>
                <span
                  className={`absolute top-4 right-4 text-xs font-display font-600 px-3 py-1.5 rounded-md border backdrop-blur-md ${statusStyles[project.status]}`}
                >
                  {getProjectStatusLabel(project.status, language)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-800 leading-[1.3] text-brand-text dark:text-white mb-4">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-brand-text/50 dark:text-gray-500 font-body mb-6">
                {summaryItems.map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-3">
                    {index > 0 ? <span aria-hidden="true">•</span> : null}
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              <p className="text-base md:text-lg text-brand-text/70 dark:text-gray-300 leading-relaxed font-body mb-8">
                {project.overview}
              </p>

              <div className="space-y-5 mb-10">
                {project.description.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-xl md:text-2xl font-display font-700 text-brand-text dark:text-white mt-6 mb-2 leading-[1.5]"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-base text-brand-text/70 dark:text-gray-300 leading-relaxed font-body"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {project.objectives?.length > 0 && (
                <div className="mb-10 rounded-2xl border border-brand-blue/8 bg-brand-blue/5 p-6 dark:border-white/8 dark:bg-white/5">
                  <h2 className="text-xl font-display font-800 text-brand-text dark:text-white mb-4">
                    {isEnglish
                      ? "Objectives of the Training"
                      : "គោលបំណងនៃការបណ្តុះបណ្តាល"}
                  </h2>
                  <ul className="space-y-3">
                    {project.objectives.map((objective) => (
                      <li key={objective} className="flex items-start gap-3 text-sm text-brand-text/70 dark:text-gray-300 leading-relaxed">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-orange flex-shrink-0"></span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.modules?.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-xl font-display font-800 text-brand-text dark:text-white mb-4">
                    {isEnglish ? "Training Modules" : "មុខវិជ្ជាបណ្តុះបណ្តាល"}
                  </h2>
                  <ol className="grid gap-3 sm:grid-cols-2">
                    {project.modules.map((moduleName, index) => (
                      <li
                        key={moduleName}
                        className="flex items-start gap-3 rounded-xl border border-brand-blue/8 bg-white p-4 dark:border-white/8 dark:bg-white/5"
                      >
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-xs font-display font-700 text-brand-orange">
                          {index + 1}
                        </span>
                        <span className="text-sm font-display font-600 text-brand-text/80 dark:text-gray-300 leading-relaxed">
                          {moduleName}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {project.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-6 border-t border-brand-blue/8 dark:border-white/8">
                  {project.tags.map((tag) => (
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
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-orange text-white text-sm font-display font-700 rounded-full hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transition-all mb-5"
                >
                  {isEnglish ? "Discuss Training" : "ពិភាក្សាគម្រោងបណ្តុះបណ្តាល"}
                </Link>

                <h4 className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3">
                  {isEnglish ? "Project Information" : "ព័ត៌មានគម្រោង"}
                </h4>
                <dl className="space-y-3 text-sm font-body">
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Status" : "ស្ថានភាព"}</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {getProjectStatusLabel(project.status, language)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Category" : "ប្រភេទ"}</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {getProjectCategoryLabel(project.category, language)}
                    </dd>
                  </div>
                  {project.dateRange ? (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Period" : "រយៈពេល"}</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {project.dateRange}
                      </dd>
                    </div>
                  ) : null}
                  {project.location ? (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Location" : "ទីតាំង"}</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {project.location}
                      </dd>
                    </div>
                  ) : null}
                  {project.trainer ? (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Trainer" : "គ្រូបណ្តុះបណ្តាល"}</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {project.trainer}
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Partner / Client" : "ដៃគូ / អតិថិជន"}</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {project.partnerOrClient}
                    </dd>
                  </div>
                  {project.clientRepresentative ? (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Represented By" : "តំណាងដោយ"}</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {project.clientRepresentative}
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Participants" : "អ្នកចូលរួម"}</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {project.participantCount}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Delivery" : "ទម្រង់"}</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {project.deliveryModeLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Software" : "កម្មវិធី"}</dt>
                    <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                      {project.software}
                    </dd>
                  </div>
                  {project.fundingAgency ? (
                    <div>
                      <dt className="text-xs text-brand-text/40 dark:text-gray-500 mb-0.5">{isEnglish ? "Funding Agency" : "ស្ថាប័នផ្តល់ថវិកា"}</dt>
                      <dd className="text-brand-text/80 dark:text-gray-300 font-display font-600">
                        {project.fundingAgency}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>

              <div className="bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 p-6">
                <h4 className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3">
                  {isEnglish ? "Training Topics" : "ប្រធានបទបណ្តុះបណ្តាល"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.trainingTopics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-display font-600 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </m.aside>
          </div>

          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-brand-blue/8 dark:border-white/8">
              <h3 className="text-2xl font-display font-700 text-brand-text dark:text-white mb-6">
                {isEnglish ? "Related Projects" : "គម្រោងពាក់ព័ន្ធ"}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/project/${item.slug}`}
                    data-language-switch
                    className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 overflow-hidden group flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue/5 dark:bg-white/5">
                      <ProjectCover
                        project={item}
                        imageClassName="transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className={`absolute top-3 left-3 text-xs font-display font-600 px-2.5 py-1 rounded-full border backdrop-blur-md ${categoryStyles[item.category]}`}
                      >
                        {getProjectCategoryLabel(item.category, language)}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-display font-700 text-brand-text dark:text-white leading-snug group-hover:text-brand-orange transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-text/50 dark:text-gray-500 font-body">
                        {item.software} • {item.participantCount} {isEnglish ? "participants" : "អ្នកចូលរួម"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default ProjectDetail;
