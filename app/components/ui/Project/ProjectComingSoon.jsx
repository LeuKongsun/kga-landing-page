"use client";

import { Clock3 } from "lucide-react";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";

const ProjectComingSoon = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <main key={language} data-language-switch className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="custom-screen">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl px-4 text-center"
          >
            <span className="mb-6 inline-block rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-xs font-display font-600 uppercase tracking-wider text-brand-orange">
              {isEnglish ? "Project" : "គម្រោង"}
            </span>
            <h1 className="mb-4 text-3xl font-display font-800 leading-[1.4] text-brand-text dark:text-white md:text-5xl">
              {isEnglish ? "Training Projects by KGA" : "គម្រោងបណ្តុះបណ្តាលរបស់ KGA"}
            </h1>
            <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-brand-orange"></div>
            <p className="text-base leading-relaxed text-brand-text/60 dark:text-gray-400 md:text-lg">
              {isEnglish
                ? "Current and previous training projects will be displayed here once the project portfolio is ready."
                : "គម្រោងបណ្តុះបណ្តាលដែលបាន និងកំពុងផ្តល់ជូន នឹងត្រូវបង្ហាញនៅទីនេះនៅពេលរៀបចំរួចរាល់។"}
            </p>
          </m.div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            <m.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="tool-card group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-blue/8 bg-white dark:border-white/8 dark:bg-white/5"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue/10 via-white to-brand-orange/10 p-8 dark:from-white/10 dark:via-white/[0.03] dark:to-brand-orange/10">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange">
                      <Clock3 className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-xl font-display font-900 text-brand-text dark:text-white">
                      {isEnglish ? "Project Portfolio" : "បញ្ជីគម្រោង"}
                    </p>
                    <p className="mt-2 text-sm font-display font-700 text-brand-orange">
                      {isEnglish ? "Available for display soon" : "នឹងមានសម្រាប់បង្ហាញឆាប់ៗនេះ"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-display font-800 leading-snug text-brand-text dark:text-white">
                  {isEnglish ? "Training Projects" : "គម្រោងបណ្តុះបណ្តាល"}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-brand-text/60 dark:text-gray-400">
                  {isEnglish
                    ? "This section is reserved for KGA's past and current training project records."
                    : "ផ្នែកនេះត្រូវបានរក្សាទុកសម្រាប់បង្ហាញកំណត់ត្រាគម្រោងបណ្តុះបណ្តាលមុនៗ និងបច្ចុប្បន្នរបស់ KGA។"}
                </p>
                <span className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/10 bg-brand-blue/5 px-5 py-3 text-sm font-display font-700 text-brand-text/70 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  {isEnglish ? "Available for display soon" : "នឹងមានសម្រាប់បង្ហាញឆាប់ៗនេះ"}
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </m.article>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default ProjectComingSoon;