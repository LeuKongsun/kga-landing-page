"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Layers3,
  Map,
  PanelTop,
  Sparkles,
  Wrench,
} from "lucide-react";
import { m } from "framer-motion";
import SectionWrapper from "../../SectionWrapper";
import { programs } from "./data";

const iconMap = {
  toolbox: Wrench,
  geodigitizer: Map,
  geolayout: PanelTop,
};

const ProgramTitle = ({ program, className = "" }) => (
  <span className={className}>
    {program.name.startsWith("KGA ") ? (
      <>
        KGA <span className="text-brand-orange">{program.accent}</span>
      </>
    ) : (
      <>{program.name}</>
    )}
  </span>
);

const ProgramMedia = ({ program, priority = false, className = "" }) => {
  if (program.image) {
    return (
      <Image
        src={program.image}
        alt={program.name}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 48vw, (min-width: 768px) 50vw, 100vw"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue/10 via-white to-brand-orange/10 p-8 dark:from-white/10 dark:via-white/[0.03] dark:to-brand-orange/10">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-orange/25 bg-brand-orange/10 text-brand-orange">
          <Clock3 className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="mt-5 text-xl font-display font-900 text-brand-text dark:text-white">
          {program.name}
        </p>
        <p className="mt-2 text-sm font-display font-700 text-brand-orange">
          នឹងមាននៅពេលអនាគត
        </p>
      </div>
    </div>
  );
};

const ProgramCard = ({ program, index }) => {
  const cardMedia = (
    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 dark:from-white/5 dark:to-white/10">
      <ProgramMedia program={program} className="transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute left-3 top-3 rounded-full border border-brand-orange/30 bg-brand-orange/15 px-2.5 py-1 text-xs font-display font-600 text-brand-orange backdrop-blur-md">
        {program.badge}
      </span>
    </div>
  );

  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="tool-card group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-blue/8 bg-white dark:border-white/8 dark:bg-white/5"
    >
      {program.href ? (
        <Link href={program.href} className="block" aria-label={program.cta}>
          {cardMedia}
        </Link>
      ) : (
        cardMedia
      )}

      <div className="flex flex-1 flex-col p-6">
        {program.href ? (
          <Link href={program.href}>
            <h3 className="mb-2 text-2xl font-display font-800 leading-snug text-brand-text transition-colors group-hover:text-brand-orange dark:text-white">
              <ProgramTitle program={program} />
            </h3>
          </Link>
        ) : (
          <h3 className="mb-2 text-2xl font-display font-800 leading-snug text-brand-text dark:text-white">
            <ProgramTitle program={program} />
          </h3>
        )}

        <p className="mb-3 text-sm font-display font-600 text-brand-text/80 dark:text-gray-300">
          {program.tagline}
        </p>

        <p className="mb-5 text-sm leading-relaxed text-brand-text/60 dark:text-gray-400">
          {program.description}
        </p>

        <ul className="mb-6 space-y-2">
          {program.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-brand-text/70 dark:text-gray-300"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {program.href ? (
          <Link
            href={program.href}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-display font-600 text-white shadow-md shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/30"
          >
            {program.cta}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <span className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/10 bg-brand-blue/5 px-5 py-3 text-sm font-display font-700 text-brand-text/70 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            {program.cta}
            <Clock3 className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
      </div>
    </m.article>
  );
};

export const ProgramGrid = () => (
  <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
    {programs.map((program, index) => (
      <ProgramCard key={program.name} program={program} index={index} />
    ))}
  </div>
);

const SelectorCard = ({ program, index, active, onSelect, onKeyDown, buttonRef }) => {
  const Icon = iconMap[program.icon] || Layers3;

  return (
    <button
      ref={buttonRef}
      id={`program-tab-${program.id}`}
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={`program-panel-${program.id}`}
      tabIndex={active ? 0 : -1}
      onClick={() => onSelect(index)}
      onKeyDown={(event) => onKeyDown(event, index)}
      className={`group flex min-h-[116px] w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange/60 ${
        active
          ? "border-brand-orange/60 bg-white shadow-xl shadow-brand-orange/10 dark:border-brand-orange/70 dark:bg-white/10"
          : "border-brand-blue/10 bg-white/70 hover:border-brand-orange/30 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
      }`}
    >
      <span
        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border transition-colors ${
          active
            ? "border-brand-orange/30 bg-brand-orange/15 text-brand-orange"
            : "border-brand-blue/10 bg-brand-blue/5 text-brand-text/70 group-hover:text-brand-orange dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
        }`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-base font-display font-800 text-brand-text dark:text-white md:text-lg">
          {program.name}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-brand-text/60 dark:text-gray-400">
          {program.platform}
        </span>
      </span>
    </button>
  );
};

function ProgramShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const activeProgram = programs[activeIndex] || programs[0];

  const overviewStats = useMemo(
    () => [
      ["កម្មវិធីសកម្ម", `${programs.length}`],
      ["ការងារ GIS", "ផលិតកម្ម"],
      ["គោលដៅ", "ប្រើប្រាស់ជាក់ស្តែង"],
    ],
    []
  );

  const handleKeyDown = (event, index) => {
    const lastIndex = programs.length - 1;
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = index === lastIndex ? 0 : index + 1;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex;
    else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <SectionWrapper className="pt-32 md:pt-36">
      <div className="custom-screen">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-xs font-display font-600 uppercase tracking-wider text-brand-orange">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              កម្មវិធី
            </span>
            <h1 className="max-w-3xl text-4xl font-display font-900 leading-[1.25] text-brand-text dark:text-white md:text-5xl lg:text-6xl">
              កម្មវិធីរបស់ KGA សម្រាប់ការងារ GIS ជាក់ស្តែង
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-text/65 dark:text-gray-300 md:text-lg">
              កម្មវិធី និងឧបករណ៍ដែលបង្កើតឡើងសម្រាប់អ្នកជំនាញ GIS ដើម្បីបង្កើនល្បឿន ភាពងាយស្រួល និងគុណភាពការងារ។ ជ្រើសកម្មវិធីខាងក្រោម ដើម្បីមើលព័ត៌មានលម្អិតមុនចូលទៅកាន់ទំព័ររបស់កម្មវិធីនីមួយៗ។
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {overviewStats.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-brand-blue/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="text-xs font-display font-700 uppercase tracking-wider text-brand-orange">
                    {label}
                  </div>
                  <div className="mt-2 text-lg font-display font-800 text-brand-text dark:text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </m.div>

          <m.div
            key={activeProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-orange/10 blur-3xl dark:bg-brand-orange/15" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-2xl shadow-brand-blue/10 dark:border-white/10 dark:bg-white/[0.05] dark:shadow-black/30">
              <div className="relative aspect-[16/10]">
                <ProgramMedia program={activeProgram} priority />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-blue/10 p-5 dark:border-white/10">
                <div>
                  <p className="text-xs font-display font-700 uppercase tracking-wider text-brand-orange">
                    កំពុងមើល
                  </p>
                  <p className="mt-1 text-xl font-display font-800 text-brand-text dark:text-white">
                    {activeProgram.name}
                  </p>
                </div>
                <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1.5 text-sm font-display font-700 text-brand-orange">
                  {activeProgram.badge}
                </span>
              </div>
            </div>
          </m.div>
        </div>

        <div className="mt-12" role="tablist" aria-label="ជ្រើសរើសកម្មវិធី KGA">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => (
              <SelectorCard
                key={program.id}
                program={program}
                index={index}
                active={activeIndex === index}
                onSelect={setActiveIndex}
                onKeyDown={handleKeyDown}
                buttonRef={(node) => {
                  tabRefs.current[index] = node;
                }}
              />
            ))}
          </div>
        </div>

        <m.section
          key={activeProgram.id}
          id={`program-panel-${activeProgram.id}`}
          role="tabpanel"
          aria-labelledby={`program-tab-${activeProgram.id}`}
          tabIndex={0}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 rounded-3xl border border-brand-blue/10 bg-white p-6 shadow-xl shadow-brand-blue/5 outline-none dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1.5 text-xs font-display font-700 uppercase tracking-wider text-brand-orange">
                  {activeProgram.platform}
                </span>
                <span className="text-sm text-brand-text/55 dark:text-gray-400">
                  {activeProgram.badge}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-display font-900 leading-tight text-brand-text dark:text-white md:text-4xl">
                {activeProgram.name}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-text/70 dark:text-gray-300 md:text-lg">
                {activeProgram.details}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {activeProgram.highlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-2xl border border-brand-blue/10 bg-brand-light/70 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                      <div>
                        <h3 className="font-display font-800 text-brand-text dark:text-white">
                          {highlight.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-text/60 dark:text-gray-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6 dark:bg-brand-orange/10">
              <p className="text-xs font-display font-700 uppercase tracking-wider text-brand-orange">
                ទៅកាន់កម្មវិធី
              </p>
              <h3 className="mt-4 text-2xl font-display font-900 text-brand-text dark:text-white">
                {activeProgram.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-text/65 dark:text-gray-300">
                {activeProgram.overview}
              </p>
              <ul className="mt-6 space-y-3">
                {activeProgram.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-brand-text/70 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              {activeProgram.href ? (
                <Link
                  href={activeProgram.href}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-display font-700 text-white shadow-md shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/30"
                >
                  {activeProgram.primaryActionLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : (
                <span className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-blue/10 bg-white/70 px-5 py-3 text-sm font-display font-700 text-brand-text/70 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  {activeProgram.primaryActionLabel}
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </aside>
          </div>
        </m.section>
      </div>
    </SectionWrapper>
  );
}

export default function Programs({ preview = false }) {
  if (!preview) return <ProgramShowcase />;

  return (
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
            កម្មវិធី
          </span>
          <h2 className="mb-4 text-3xl font-display font-800 leading-[1.4] text-brand-text dark:text-white md:text-4xl">
            កម្មវិធីរបស់ KGA
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-brand-orange"></div>
          <p className="text-base leading-relaxed text-brand-text/60 dark:text-gray-400 md:text-lg">
            កម្មវិធី និងឧបករណ៍ដែលបង្កើតឡើងសម្រាប់អ្នកជំនាញ GIS ដើម្បីបង្កើនល្បឿន ភាពងាយស្រួល និងគុណភាពការងារ។
          </p>
        </m.div>

        <ProgramGrid />

        <div className="mt-10 flex justify-center">
          <Link
            href="/program"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/10 bg-white px-6 py-3 text-sm font-display font-700 text-brand-text shadow-sm transition-all hover:border-brand-orange/30 hover:text-brand-orange dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            មើលកម្មវិធីទាំងអស់
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}