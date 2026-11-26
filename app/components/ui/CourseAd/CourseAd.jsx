'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import arcgisPro from "../../../../public/logos/arcgis-pro-single.png";
import qgis from "../../../../public/logos/qgis.png";
import { TELEGRAM_URL } from "./shared";

const icons = { arcgisPro, qgis };
const pad = (n) => String(n).padStart(2, "0");

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const Arrow = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const Check = ({ className = "" }) => (
  <svg className={`h-5 w-5 flex-shrink-0 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const CtaButton = ({ children, className = "", location }) => (
  <Link
    href={TELEGRAM_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-cta={location}
    className={`group inline-flex items-center justify-center gap-2 rounded-sm bg-brand-orange px-8 py-4 font-display font-700 text-white shadow-[0_6px_14px_-6px_rgba(255,100,52,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-hover hover:shadow-[0_10px_18px_-8px_rgba(255,100,52,0.7)] ${className}`}
  >
    {children}
    <span className="transition-transform group-hover:translate-x-1"><Arrow /></span>
  </Link>
);

const Eyebrow = ({ children, light }) => (
  <span className={`mb-4 inline-block rounded-[5px] border px-4 py-1.5 text-xs font-display font-700 uppercase tracking-wider ${light ? "border-white/20 bg-white/10 text-white" : "border-brand-orange/20 bg-brand-orange/10 text-brand-orange"}`}>
    {children}
  </span>
);

const SectionHead = ({ eyebrow, title, sub }) => (
  <m.div {...fade} className="mx-auto mb-12 max-w-2xl text-center">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-2xl font-display font-800 leading-[1.5] text-brand-text dark:text-white md:text-4xl">{title}</h2>
    <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-brand-orange" />
    {sub && <p className="mt-5 text-base leading-relaxed text-brand-text/60 dark:text-gray-400 md:text-lg">{sub}</p>}
  </m.div>
);

const CourseAd = ({ data }) => (
  <div className="pb-24 md:pb-0">
    <Hero c={data} />
    <FactsStrip c={data} />
    <Capabilities c={data} />
    <Audience c={data} />
    <Modules c={data} />
    {data.mapTypes && <MapTypes c={data} />}
    <HowItWorks c={data} />
    {data.bonus && <Bonus c={data} />}
    {data.schedules && <Schedule c={data} />}
    <Compare c={data} />
    <Proof c={data} />
    <Faq c={data} />
    <FinalCta c={data} />
    <Location c={data} />
    <StickyBar c={data} />
  </div>
);

/* ───────────── HERO ───────────── */
const Hero = ({ c }) => {
  const h = c.hero;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-deeper via-brand-blue-dark to-brand-blue pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />

      <div className="custom-screen relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Eyebrow light>{h.eyebrow}</Eyebrow>
            <span className={`mb-4 inline-flex items-center gap-2 rounded-[5px] px-4 py-1.5 text-xs font-display font-700 text-white ${c.status.open ? "bg-brand-orange" : "bg-brand-blue ring-1 ring-white/30"}`}>
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              {c.status.label}
            </span>
          </div>

          <h1 className="text-3xl font-display font-900 leading-[1.5] text-white sm:text-4xl md:text-5xl md:leading-[1.45]">
            {h.line1} <br className="hidden sm:block" />
            <span className="text-brand-orange">{h.accent}</span> {h.line2}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{h.sub}</p>

          <ul className="mt-7 space-y-3">
            {h.bullets.map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/90">
                <Check className="text-brand-orange" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton location="hero" className="text-base">{h.cta}</CtaButton>
            <a href="#curriculum" className="text-center text-sm font-display font-600 text-white/80 underline-offset-4 hover:text-white hover:underline">
              មើលអ្វីដែលអ្នកនឹងរៀន ↓
            </a>
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
            {c.trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Check className="!h-4 !w-4 text-emerald-400" />{t}</li>
            ))}
          </ul>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className={`absolute -inset-3 rounded-[15px] bg-gradient-to-br blur-2xl ${c.posterFloat ? "from-brand-orange/25 to-sky-400/20" : "from-brand-orange/50 to-sky-400/30"}`} />
          <div className={c.posterFloat ? "relative" : "relative overflow-hidden rounded-[15px] border border-white/15 bg-white shadow-2xl"}>
            {c.posterFloat ? (
              <Image src={c.poster} alt={`ប៉ូស្ទ័រវគ្គសិក្សា ${c.title}`} width={1080} height={1080} priority className="h-auto w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]" />
            ) : c.poster ? (
              <Image src={c.poster} alt={`ប៉ូស្ទ័រវគ្គសិក្សា ${c.title}`} width={1080} height={1080} priority className="h-auto w-full" />
            ) : (
              <>
                <Image src={c.gallery[1]} alt="ថ្នាក់រៀន Khmer GRS Academy" width={640} height={480} priority className="aspect-[4/5] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-blue-deeper/90 to-transparent p-5 pt-16">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-white p-2"><Image src={icons[c.icon]} alt="" className="h-full w-full object-contain" /></span>
                    <p className="text-xl font-display font-900 text-white">{c.title}</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {c.price && (
            <div className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-[10px] bg-brand-orange px-5 py-3 text-center shadow-xl sm:-left-8">
              <p className="text-[11px] font-display font-700 uppercase tracking-wide text-white/90">{c.priceNote}</p>
              <p className="text-3xl font-display font-900 leading-none text-white">{c.price}</p>
            </div>
          )}
          {(c.badges || []).map((b) => (
            <div key={b.top} className="absolute -top-4 -right-2 flex rotate-[3deg] items-center gap-2 rounded-[10px] bg-white px-4 py-2.5 shadow-xl sm:-right-6">
              <Image src={icons[c.icon]} alt="" className="h-8 w-8 object-contain" />
              <div className="text-left">
                <p className="text-[10px] font-display font-700 text-brand-orange">{b.top}</p>
                <p className="text-xs font-display font-800 text-brand-text">{b.bottom}</p>
              </div>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

/* ───────────── KEY CAPABILITIES (alternating blocks) ───────────── */
const Capabilities = ({ c }) => (
  <section className="py-16 md:py-24">
    <div className="custom-screen">
      <SectionHead eyebrow="ចំណុចពិសេស" title="ហេតុអ្វីបានជាសិស្សជ្រើសរើសវគ្គនេះ" />
      <div className="space-y-16 md:space-y-24">
        {c.capabilities.map((cap, i) => (
          <m.div key={cap.title} {...fade} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <h3 className="text-xl font-display font-800 leading-[1.6] text-brand-text dark:text-white md:text-3xl">{cap.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-text/60 dark:text-gray-400">{cap.text}</p>
              <ul className="mt-5 space-y-3">
                {cap.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-brand-text/80 dark:text-gray-300">
                    <Check className="mt-0.5 text-brand-orange" /><span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative ${i % 2 ? "lg:order-1" : ""}`}>
              <div className="absolute -inset-2 rounded-[15px] bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 blur-xl" />
              <Image src={cap.image} alt={cap.title} width={960} height={640} className="relative aspect-[3/2] w-full rounded-[10px] border border-brand-blue/10 object-cover shadow-xl dark:border-white/10" />
            </div>
          </m.div>
        ))}
      </div>
      <div className="mt-14 text-center"><CtaButton location="capabilities">{c.hero.cta}</CtaButton></div>
    </div>
  </section>
);

/* ───────────── MAP TYPES (own section) ───────────── */
const MapTypes = ({ c }) => (
  <section className="py-16 md:py-24">
    <div className="custom-screen">
      <MapShowcase data={c.mapTypes} />
    </div>
  </section>
);

/* ───────────── MAP SHOWCASE (vertical tabs + preview) ───────────── */
const MapShowcase = ({ data }) => {
  const [active, setActive] = useState(0);
  const item = data.items[active];
  return (
    <div>
      <SectionHead eyebrow="ឧទាហរណ៍ផែនទី" title={data.title} sub={data.sub} />
      <m.div {...fade} className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <div role="tablist" aria-orientation="vertical" aria-label="ប្រភេទផែនទី" className="grid grid-cols-8 gap-1.5 sm:gap-2 lg:flex lg:flex-col lg:gap-3">
          {data.items.map((it, i) => {
            const on = active === i;
            return (
              <button key={it.tab} role="tab" aria-selected={on} aria-label={`${it.tab} (${it.en})`} onClick={() => setActive(i)}
                className={`flex min-w-0 items-center justify-center rounded-[5px] px-0 py-2 text-left transition-all lg:justify-start lg:gap-4 lg:px-5 lg:py-5 ${on ? "bg-brand-orange text-white shadow-[0_6px_14px_-6px_rgba(255,100,52,0.6)]" : "bg-brand-blue/[0.06] text-brand-text hover:bg-brand-blue/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"}`}>
                <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-display font-800 ${on ? "bg-white/25 text-white" : "bg-white text-brand-orange dark:bg-white/10"}`}>{pad(i + 1)}</span>
                <span className="hidden lg:block">
                  <span className="block font-display font-800 leading-[1.5]">{it.tab}</span>
                  <span className={`block text-xs ${on ? "text-white/80" : "text-brand-text/50 dark:text-gray-500"}`}>{it.en}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div role="tabpanel" className="flex items-center justify-center rounded-[15px] border border-brand-blue/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-white/5 md:p-6">
          <m.div key={active} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
            className="w-full overflow-hidden rounded-[10px]">
            <p className="mb-3 text-center font-display font-800 leading-[1.6] text-brand-text dark:text-white lg:hidden">
              {item.tab} <span className="block text-xs font-400 text-brand-text/55 dark:text-gray-400">{item.en}</span>
            </p>
            <Image src={item.image} alt={item.en} width={1600} height={1130} sizes="(min-width: 1024px) 800px, 100vw" className="aspect-[4/3] w-full object-contain" />
          </m.div>
        </div>
      </m.div>
    </div>
  );
};

/* ───────────── HOW IT WORKS (timeline) ───────────── */
const HowItWorks = ({ c }) => (
  <section className="py-16 md:py-24">
    <div className="custom-screen">
      <SectionHead eyebrow="របៀបចុះឈ្មោះ" title="៥ ជំហានងាយៗ ដើម្បីចាប់ផ្តើម" sub="ចាប់ពីផ្ញើសារ ដល់ថ្ងៃទទួលវិញ្ញាបនបត្រ យើងនៅជាមួយអ្នកគ្រប់ជំហាន។" />

      <ol className="relative mx-auto max-w-md lg:grid lg:max-w-none lg:grid-cols-5 lg:gap-6">
        {/* connector line: vertical on mobile, horizontal on desktop */}
        <span aria-hidden className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-orange via-brand-orange/40 to-brand-blue/30 lg:left-[10%] lg:right-[10%] lg:top-7 lg:bottom-auto lg:h-0.5 lg:w-auto lg:bg-gradient-to-r" />

        {c.steps.map((st, i) => {
          const last = i === c.steps.length - 1;
          return (
            <m.li key={st.title} {...fade} transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center">
              <span className={`relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-xl font-display font-900 shadow-lg ring-4 ring-brand-light dark:ring-[#0B1929] ${last ? "bg-brand-orange text-white shadow-brand-orange/40" : "bg-white text-brand-orange dark:bg-[#12263d]"} border-2 border-brand-orange`}>
                {i + 1}
              </span>
              <div className="flex-1 rounded-[10px] border border-brand-blue/8 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/8 dark:bg-white/5 lg:mt-6 lg:w-full">
                <h3 className="text-base font-display font-800 leading-[1.6] text-brand-text dark:text-white">{st.title}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-brand-text/65 dark:text-gray-400">{st.text}</p>
              </div>
            </m.li>
          );
        })}
      </ol>

      <div className="mt-12 text-center">
        <CtaButton location="steps">{c.hero.cta}</CtaButton>
        <p className="mt-3 text-sm text-brand-text/50 dark:text-gray-500">ជំហានទី ១ ចំណាយពេលតែ ១ នាទី</p>
      </div>
    </div>
  </section>
);

/* ───────────── COMPARE ───────────── */
const Compare = ({ c }) => (
  <section className="bg-brand-blue/[0.04] py-16 dark:bg-white/[0.02] md:py-24">
    <div className="custom-screen max-w-4xl">
      <SectionHead eyebrow="ប្រៀបធៀប" title="រៀនខ្លួនឯង ឬរៀនជាមួយ KGA?" />
      <m.div {...fade} className="overflow-hidden rounded-[10px] border border-brand-blue/10 bg-white shadow-lg dark:border-white/10 dark:bg-white/5">
        <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-brand-blue text-sm font-display font-700 text-white">
          <div className="p-4" />
          <div className="p-4 text-left text-white/70">រៀនដោយខ្លួនឯង</div>
          <div className="bg-brand-orange p-4 text-left">រៀនជាមួយ KGA</div>
        </div>
        {c.compare.map(([label, alone, kga]) => (
          <div key={label} className="grid grid-cols-[0.8fr_1fr_1fr] border-t border-brand-blue/8 text-sm dark:border-white/10">
            <div className="flex items-center justify-center p-4 text-center font-display font-700 text-brand-text dark:text-white">{label}</div>
            <div className="flex items-center justify-start gap-2 p-4 text-left text-brand-text/55 dark:text-gray-500"><span className="text-red-400">✕</span>{alone}</div>
            <div className="flex items-center justify-start gap-2 bg-brand-orange/5 p-4 text-left font-600 text-brand-text dark:text-gray-200"><Check className="mt-0.5 !h-4 !w-4 text-emerald-500" />{kga}</div>
          </div>
        ))}
      </m.div>
    </div>
  </section>
);

/* ───────────── QUICK FACTS ───────────── */
const FactsStrip = ({ c }) => (
  <section className="relative z-10 -mt-1 bg-white shadow-sm dark:bg-[#0F2236]">
    <div className="custom-screen grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4">
      {c.facts.map(([big, small], i) => (
        <m.div key={big} {...fade} transition={{ duration: 0.4, delay: i * 0.08 }} className="border-brand-blue/10 px-4 text-center md:border-r md:last:border-r-0 dark:border-white/10">
          <p className="text-xl font-display font-900 text-brand-blue dark:text-white md:text-2xl">{big}</p>
          <p className="mt-1 text-sm text-brand-text/60 dark:text-gray-400">{small}</p>
        </m.div>
      ))}
    </div>
  </section>
);

/* ───────────── WHO IT'S FOR (tabs + why it matters) ───────────── */
const Audience = ({ c }) => {
  const [active, setActive] = useState(0);
  const item = c.audience.items[active];
  return (
    <section className="py-16 md:py-24">
      <div className="custom-screen">
        <SectionHead eyebrow="សម្រាប់អ្នកណា?" title={c.audience.title} sub={c.audience.sub} />

        <m.div {...fade}>
          <div role="tablist" aria-label="សម្រាប់អ្នកណា" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {c.audience.items.map((a, i) => {
              const on = active === i;
              return (
                <button key={a.title} role="tab" aria-selected={on} onClick={() => setActive(i)}
                  className={`rounded-[5px] px-4 py-4 text-center font-display font-800 leading-[1.6] transition-all md:py-5 ${on ? "bg-brand-orange text-white shadow-[0_6px_14px_-6px_rgba(255,100,52,0.6)]" : "bg-brand-blue/[0.06] text-brand-text hover:bg-brand-blue/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"}`}>
                  {a.title}
                </button>
              );
            })}
          </div>

          <m.div key={active} role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
            className="mt-4 grid gap-8 rounded-[15px] border border-brand-blue/10 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-white/5 md:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div>
              <span className="text-xs font-display font-700 uppercase tracking-wider text-brand-orange">ហេតុអ្វីសំខាន់</span>
              <h3 className="mt-2 text-xl font-display font-800 leading-[1.6] text-brand-text dark:text-white md:text-2xl">{item.why.heading}</h3>
              <p className="mt-4 text-base leading-[1.9] text-brand-text/70 dark:text-gray-300">{item.why.text}</p>
            </div>
            <div className="rounded-[10px] bg-brand-orange/[0.07] p-6 dark:bg-white/5">
              <p className="text-sm font-display font-800 text-brand-text dark:text-white">អ្វីដែលអ្នកនឹងទទួលបាន</p>
              <ul className="mt-4 space-y-4">
                {item.why.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-brand-text/80 dark:text-gray-300">
                    <Check className="mt-0.5 text-brand-orange" />
                    <span className="leading-[1.8]">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

/* ───────────── CURRICULUM ───────────── */
const Modules = ({ c }) => (
  <section id="curriculum" className="bg-brand-blue/[0.04] py-16 dark:bg-white/[0.02] md:py-24">
    <div className="custom-screen">
      <SectionHead eyebrow="មាតិកាវគ្គសិក្សា" title={c.modules.title} sub={c.modules.sub} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {c.modules.items.map((mod, i) => (
          <m.div key={mod.title} {...fade} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="relative overflow-hidden rounded-[10px] border border-brand-blue/8 bg-white p-6 shadow-sm dark:border-white/8 dark:bg-white/5">
            <span className="absolute -right-2 -top-4 select-none text-7xl font-display font-900 text-brand-orange/10">{pad(i + 1)}</span>
            <div className="relative">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[5px] bg-brand-blue text-sm font-display font-800 text-white">{pad(i + 1)}</span>
              <h3 className="mt-4 text-lg font-display font-800 text-brand-text dark:text-white">{mod.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {mod.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm leading-relaxed text-brand-text/75 dark:text-gray-300">
                    <Check className="mt-0.5 !h-4 !w-4 text-brand-orange" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        ))}
      </div>

      <m.div {...fade} className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <span className="text-sm font-display font-700 text-brand-text/60 dark:text-gray-400">ឧបករណ៍ដែលអ្នកនឹងប្រើ៖</span>
        {c.tools.map((t) => (
          <span key={t} className="rounded-[5px] border border-brand-blue/15 bg-white px-4 py-1.5 text-sm font-display font-600 text-brand-text shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">{t}</span>
        ))}
      </m.div>

    </div>
  </section>
);

/* ───────────── BONUS ───────────── */
const Bonus = ({ c }) => {
  const b = c.bonus;
  return (
    <section className="py-16 md:py-24">
      <div className="custom-screen">
        <m.div {...fade} className="relative overflow-hidden rounded-[15px] bg-gradient-to-br from-brand-orange to-[#ff8a5c] p-6 md:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-[5px] bg-white px-4 py-1.5 text-xs font-display font-800 uppercase tracking-wider text-brand-orange">ការផ្តល់ជូនពិសេស</span>
              <h2 className="mt-5 text-2xl font-display font-900 leading-[1.5] text-white md:text-4xl">{b.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-white/90">{b.text}</p>
              <ul className="mt-6 space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-white">
                    <Check className="mt-0.5" />
                    <span className="font-body">{it}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs italic text-white/80">{b.note}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" data-cta="bonus"
                  className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-display font-800 text-brand-orange shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  ទទួលយកការផ្តល់ជូននេះ <Arrow />
                </Link>
                <Link href={b.link} target="_blank" rel="noopener noreferrer" className="text-sm font-display font-600 text-white underline-offset-4 hover:underline">
                  ទស្សនា KGA Toolbox
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[10px] border-4 border-white/30 shadow-2xl">
              <Image src={b.image} alt="KGA Toolbox" width={1280} height={800} className="h-auto w-full" />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

/* ───────────── SCHEDULE ───────────── */
const Schedule = ({ c }) => (
  <section className="bg-brand-blue/[0.04] py-16 dark:bg-white/[0.02] md:py-24">
    <div className="custom-screen">
      <SectionHead eyebrow="កាលវិភាគ" title="ជ្រើសរើសទម្រង់រៀនដែលស័ក្តិសមនឹងអ្នក" sub={`${c.seats} — ចុះឈ្មោះមុន ទទួលបានកន្លែងមុន។`} />
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {c.schedules.map((s, i) => {
          const online = s.type === "online";
          return (
            <m.div key={s.mode} {...fade} transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[10px] border border-brand-blue/10 bg-white p-7 shadow-lg dark:border-white/10 dark:bg-white/5">
              <div className={`absolute left-0 top-0 h-1.5 w-full ${online ? "bg-brand-blue" : "bg-brand-orange"}`} />
              <span className={`inline-flex items-center gap-2 rounded-[5px] px-3 py-1 text-xs font-display font-700 ${online ? "bg-brand-blue/10 text-brand-blue dark:text-blue-300" : "bg-brand-orange/10 text-brand-orange"}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />{s.mode}
              </span>
              <p className="mt-4 text-xl font-display font-800 text-brand-text dark:text-white">{s.days}</p>
              <p className="mt-1 text-sm text-brand-text/60 dark:text-gray-400">{s.hint}</p>
              <dl className="mt-5 space-y-3 border-t border-brand-blue/8 pt-5 text-sm dark:border-white/10">
                <div className="flex justify-between gap-4"><dt className="text-brand-text/50 dark:text-gray-500">ចាប់ផ្តើម</dt><dd className="font-display font-700 text-brand-text dark:text-white">{s.start}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-brand-text/50 dark:text-gray-500">ម៉ោងរៀន</dt><dd className="font-display font-700 text-brand-text dark:text-white">{s.time}</dd></div>
              </dl>
            </m.div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <CtaButton location="schedule">កក់កន្លែងរបស់អ្នក</CtaButton>
      </div>
    </div>
  </section>
);

/* ───────────── SOCIAL PROOF ───────────── */
const Proof = ({ c }) => (
  <section className="py-16 md:py-24">
    <div className="custom-screen">
      <SectionHead eyebrow="សំឡេងពីសិស្សពិតៗ" title="អ្វីដែលសិស្សរបស់យើងនិយាយ" />
      <div className="grid gap-6 md:grid-cols-3">
        {c.testimonials.map((t, i) => (
          <m.figure key={t.name} {...fade} transition={{ duration: 0.45, delay: i * 0.1 }}
            className="flex flex-col rounded-[10px] border border-brand-blue/8 bg-white p-6 shadow-sm dark:border-white/8 dark:bg-white/5">
            <div className="mb-3 text-brand-orange" aria-label="5 stars">★★★★★</div>
            <blockquote className="flex-1 text-sm leading-[1.9] text-brand-text/80 dark:text-gray-300">“{t.quote}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-blue/8 pt-4 dark:border-white/10">
              <Image src={t.avatar} alt={t.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-display font-800 text-brand-text dark:text-white">{t.name}</p>
                <p className="text-xs text-brand-text/50 dark:text-gray-500">{t.role}</p>
              </div>
            </figcaption>
          </m.figure>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3 md:gap-5">
        {c.gallery.map((src, i) => (
          <m.div key={src} {...fade} transition={{ duration: 0.45, delay: i * 0.1 }} className="overflow-hidden rounded-[10px]">
            <Image src={src} alt="ថ្នាក់រៀន Khmer GRS Academy" width={640} height={480} className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" />
          </m.div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────────── FAQ (two columns) ───────────── */
const Faq = ({ c }) => {
  const half = Math.ceil(c.faqs.length / 2);
  const columns = [c.faqs.slice(0, half), c.faqs.slice(half)];
  return (
    <section className="bg-brand-blue/[0.04] py-16 dark:bg-white/[0.02] md:py-24">
      <div className="custom-screen">
        <SectionHead eyebrow="សំណួរគេសួរញឹកញាប់" title="នៅមានចម្ងល់?" />
        <div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">
          {columns.map((col, ci) => (
            <div key={ci} className="space-y-3 md:space-y-4">
              {col.map((f) => (
                <details key={f.q} className="group rounded-[10px] border border-brand-blue/8 bg-white p-5 open:shadow-lg dark:border-white/8 dark:bg-white/5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-700 leading-[1.7] text-brand-text dark:text-white">
                    {f.q}
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-lg leading-none text-brand-orange transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 rounded-r-[5px] border-l-[3px] border-brand-orange bg-brand-orange/[0.06] py-3 pl-4 pr-4 text-[15px] leading-[1.9] text-brand-text/90 dark:bg-brand-orange/10 dark:text-gray-200">{f.a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────── FINAL CTA ───────────── */
const TelegramIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PinIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const contactIcons = { Telegram: TelegramIcon, "ទូរស័ព្ទ": PhoneIcon, Website: GlobeIcon };

const FinalCta = ({ c }) => {
  const phone = c.contacts.find((ct) => ct.href.startsWith("tel:"));
  return (
    <section className="py-16 md:py-24">
      <div className="custom-screen">
        <m.div {...fade} className="relative overflow-hidden rounded-[15px] bg-gradient-to-br from-brand-blue-deeper via-brand-blue-dark to-brand-blue p-6 sm:p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />

          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-[5px] bg-white/10 px-4 py-1.5 text-xs font-display font-700 text-white ring-1 ring-white/20">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
              {c.seats}
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-display font-900 leading-[1.5] text-white sm:text-3xl md:text-5xl md:leading-[1.45]">
              {c.final.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{c.final.sub}</p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" data-cta="final"
                className="group inline-flex items-center justify-center gap-3 rounded-sm bg-brand-orange px-9 py-4 text-base font-display font-800 text-white shadow-[0_6px_14px_-6px_rgba(255,100,52,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-hover">
                <TelegramIcon />
                {c.final.cta}
                <span className="transition-transform group-hover:translate-x-1"><Arrow /></span>
              </Link>
              {phone && (
                <Link href={phone.href} data-cta="final-call"
                  className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-base font-display font-700 text-white ring-2 ring-white/30 transition-all hover:bg-white/10 hover:ring-white/60">
                  <PhoneIcon />
                  ហៅ {phone.value}
                </Link>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm">
              {c.contacts.map((ct) => {
                const Icon = contactIcons[ct.label];
                return (
                  <Link key={ct.label} href={ct.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display font-600 text-white/70 transition-colors hover:text-white">
                    {Icon && <Icon />}
                    {ct.value}
                  </Link>
                );
              })}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

/* ───────────── SCHOOL LOCATION ───────────── */
const Location = ({ c }) => {
  const l = c.location;
  const rows = [
    { label: "អាសយដ្ឋាន", value: l.address, href: l.mapsUrl, Icon: PinIcon },
    { label: "ទូរស័ព្ទ", value: l.phone.value, href: l.phone.href, Icon: PhoneIcon },
    { label: "អ៊ីមែល", value: l.email.value, href: l.email.href, Icon: MailIcon },
  ];
  return (
    <section className="bg-brand-blue/[0.04] py-16 dark:bg-white/[0.02] md:py-24">
      <div className="custom-screen">
        <SectionHead eyebrow="ទីតាំងសាលា" title={`មកជួបយើងនៅ ${l.name}`} sub="អាសយដ្ឋាន និងព័ត៌មានទំនាក់ទំនងរបស់សាលា។ សូមទាក់ទងមកយើងជាមុនមុនពេលអ្នកមកដល់។" />

        <m.div {...fade} className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col rounded-[15px] border border-brand-blue/10 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-white/5 md:p-8">
            <ul className="space-y-6">
              {rows.map(({ label, value, href, Icon }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[5px] bg-brand-orange/10 text-brand-orange"><Icon /></span>
                  <div className="min-w-0">
                    <p className="text-xs font-display font-700 uppercase tracking-wider text-brand-text/50 dark:text-gray-500">{label}</p>
                    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="mt-1 block break-words font-display font-700 leading-[1.7] text-brand-text transition-colors hover:text-brand-orange dark:text-white">
                      {value}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <Link href={l.mapsUrl} target="_blank" rel="noopener noreferrer" data-cta="directions"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-orange px-6 py-4 font-display font-700 text-white shadow-[0_6px_14px_-6px_rgba(255,100,52,0.6)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-hover lg:mt-auto">
              <PinIcon />
              បើកក្នុង Google Maps
            </Link>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-[15px] border border-brand-blue/10 bg-white shadow-lg dark:border-white/10 dark:bg-white/5 lg:min-h-[420px]">
            <iframe title="ទីតាំង Khmer GRS Academy" src={l.embed} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[320px] w-full border-0 lg:min-h-[420px]" />
          </div>
        </m.div>
      </div>
    </section>
  );
};

/* ───────────── Sticky mobile CTA ───────────── */
const StickyBar = ({ c }) => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-blue/10 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur md:hidden dark:border-white/10 dark:bg-[#0B1929]/95">
    <div className="flex items-center gap-3">
      <div className="leading-tight">
        <p className="text-xs text-brand-text/60 dark:text-gray-400">{c.title}</p>
        {c.price && <p className="text-xl font-display font-900 text-brand-orange">{c.price}</p>}
      </div>
      <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" data-cta="sticky"
        className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-brand-orange py-3 font-display font-700 text-white shadow-md">
        {c.hero.cta} <Arrow />
      </Link>
    </div>
  </div>
);

export default CourseAd;
