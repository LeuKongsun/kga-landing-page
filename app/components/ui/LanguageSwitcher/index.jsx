"use client";

import { useLanguage } from "../../LanguageProvider";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      data-language-switch
      role="group"
      aria-label="Language"
      className="inline-flex items-center p-0.5 rounded-lg border border-brand-blue/15 dark:border-white/10 bg-brand-blue/[0.04] dark:bg-white/[0.04]"
    >
      {[
        { code: "km", label: "ខ្មែរ" },
        { code: "en", label: "EN" },
      ].map((option) => {
        const active = language === option.code;
        return (
          <button
            key={option.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLanguage(option.code)}
            className={`min-w-8 rounded-md px-2 py-1.5 text-[11px] font-display font-700 transition-all ${
              active
                ? "bg-brand-blue dark:bg-brand-orange text-white shadow-sm"
                : "text-brand-text/55 dark:text-white/55 hover:text-brand-blue dark:hover:text-brand-orange"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;