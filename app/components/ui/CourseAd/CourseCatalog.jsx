'use client'
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import arcgisPro from "../../../../public/logos/arcgis-pro-single.png";
import qgis from "../../../../public/logos/qgis.png";
import { TELEGRAM_URL, contacts } from "./shared";
import { arcgisProBasic, arcgisProAdvanced, qgisBasic } from "./courses";

const icons = { arcgisPro, qgis };
const courses = [arcgisProBasic, arcgisProAdvanced, qgisBasic];

// Short "who is this for" lines, taken from each course's own hero copy.
const forWho = {
  "arcgis-pro-basic": "សម្រាប់អ្នកចាប់ផ្តើមពីសូន្យ",
  "arcgis-pro-advanced": "សម្រាប់អ្នកដែលចេះ ArcGIS Pro ហើយ",
  "qgis-basic": "សម្រាប់អ្នកចង់ប្រើកម្មវិធីឥតគិតថ្លៃ",
};

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

const Check = () => (
  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-brand-orange" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const Eyebrow = ({ children, light }) => (
  <span className={`mb-4 inline-block rounded-[5px] border px-4 py-1.5 text-xs font-display font-700 uppercase tracking-wider ${light ? "border-white/20 bg-white/10 text-white" : "border-brand-orange/20 bg-brand-orange/10 text-brand-orange"}`}>
    {children}
  </span>
);

const CourseCatalog = () => (
  <div>
    {/* ───── Hero ───── */}
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-deeper via-brand-blue-dark to-brand-blue pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />
      <div className="custom-screen relative text-center">
        <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow light>ការប្រកាសវគ្គសិក្សា</Eyebrow>
          <h1 className="mx-auto max-w-3xl text-3xl font-display font-900 leading-[1.5] text-white sm:text-4xl md:text-5xl md:leading-[1.45]">
            ជ្រើសរើសវគ្គសិក្សា <span className="text-brand-orange">GIS</span> ដែលត្រូវនឹងអ្នក
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            ពីមូលដ្ឋានគ្រឹះ រហូតដល់ស្វ័យប្រវត្តិកម្មដោយ Python។ រៀនផ្ទាល់ ឬអនឡាញ ជាមួយក្រុមគ្រូ Khmer GRS Academy។
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            {["ថ្នាក់ផ្ទាល់ + អនឡាញ", "វិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សា", "ឯកសារបង្រៀន"].map((t) => (
              <span key={t} className="flex items-center gap-2 rounded-[5px] bg-white/10 px-4 py-2 ring-1 ring-white/15">
                <svg className="h-4 w-4 text-brand-orange" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </m.div>
      </div>
    </section>

    {/* ───── Course cards ───── */}
    <section className="py-16 md:py-24">
      <div className="custom-screen">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => {
            const href = `/course-announcement/${c.slug}`;
            const open = c.status.open;
            return (
              <m.article
                key={c.slug}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-[15px] border border-brand-blue/10 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >
                <Link href={href} className="relative block overflow-hidden bg-gradient-to-br from-brand-blue-deeper via-brand-blue-dark to-brand-blue" aria-label={c.title}>
                  {c.poster ? (
                    <Image src={c.poster} alt={`ប៉ូស្ទ័រវគ្គសិក្សា ${c.title}`} width={1080} height={1080} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <>
                      <Image src={c.gallery[1]} alt="ថ្នាក់រៀន Khmer GRS Academy" width={640} height={640} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-blue-deeper/90 to-transparent p-5 pt-20">
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-white p-2"><Image src={icons[c.icon]} alt="" className="h-full w-full object-contain" /></span>
                          <p className="text-xl font-display font-900 text-white">{c.title}</p>
                        </div>
                      </div>
                    </>
                  )}
                  <span className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-[5px] px-3 py-1.5 text-xs font-display font-700 text-white shadow-md ${open ? "bg-brand-orange" : "bg-brand-blue ring-1 ring-white/30"}`}>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                    {c.status.label}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[5px] bg-brand-blue/8 p-2 dark:bg-brand-orange/10">
                      <Image src={icons[c.icon]} alt="" className="h-full w-full object-contain" />
                    </span>
                    <div>
                      <h2 className="text-xl font-display font-900 leading-[1.4] text-brand-text dark:text-white">{c.title}</h2>
                      <p className="text-xs font-display font-700 text-brand-orange">{forWho[c.slug]}</p>
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-[1.9] text-brand-text/65 dark:text-gray-400">{c.hero.sub}</p>

                  <ul className="mt-4 space-y-2 border-t border-brand-blue/8 pt-4 dark:border-white/8">
                    {c.hero.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm leading-[1.7] text-brand-text/80 dark:text-gray-300">
                        <Check />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between gap-3 rounded-[10px] bg-brand-blue/[0.05] px-4 py-3 dark:bg-white/5">
                    {c.price ? (
                      <div>
                        <p className="text-[11px] font-display font-700 text-brand-text/50 dark:text-gray-500">{c.priceNote}</p>
                        <p className="text-2xl font-display font-900 leading-none text-brand-orange">{c.price}</p>
                      </div>
                    ) : (
                      <p className="text-sm font-display font-700 text-brand-text dark:text-white">សូមទាក់ទងសួរតម្លៃ</p>
                    )}
                    {c.freeGift && <p className="max-w-[55%] text-right text-xs font-display font-700 leading-[1.6] text-brand-blue dark:text-sky-300">+ {c.freeGift}</p>}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-6">
                    <Link href={href}
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-sm bg-brand-orange px-6 py-3.5 font-display font-700 text-white shadow-[0_6px_14px_-6px_rgba(255,100,52,0.6)] transition-all hover:-translate-y-0.5 hover:bg-brand-orange-hover">
                      មើលព័ត៌មានលម្អិត
                      <span className="transition-transform group-hover/btn:translate-x-1"><Arrow /></span>
                    </Link>
                    <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" data-cta={`catalog-${c.slug}`}
                      className="inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-display font-700 text-brand-blue ring-2 ring-brand-blue/20 transition-all hover:bg-brand-blue/5 hover:ring-brand-blue/40 dark:text-white dark:ring-white/20 dark:hover:bg-white/10">
                      {open ? "ចុះឈ្មោះតាម Telegram" : "កក់ទុកតាម Telegram"}
                    </Link>
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>

    {/* ───── Help choosing ───── */}
    <section className="pb-16 md:pb-24">
      <div className="custom-screen">
        <m.div {...fade} className="relative overflow-hidden rounded-[15px] bg-gradient-to-br from-brand-blue-deeper via-brand-blue-dark to-brand-blue p-6 sm:p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          <div className="relative text-center">
            <h2 className="mx-auto max-w-3xl text-2xl font-display font-900 leading-[1.5] text-white sm:text-3xl md:text-4xl md:leading-[1.45]">
              មិនទាន់ប្រាកដថាគួរជ្រើសរើសវគ្គសិក្សាមួយណា?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              ទាក់ទងមកយើងតាម Telegram យើងនឹងជួយណែនាំវគ្គសិក្សាដែលត្រូវនឹងគោលដៅ និងកម្រិតរបស់អ្នក។
            </p>
            <div className="mt-8 flex justify-center">
              <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" data-cta="catalog-final"
                className="group inline-flex items-center justify-center gap-3 rounded-sm bg-brand-orange px-9 py-4 text-base font-display font-800 text-white shadow-[0_6px_14px_-6px_rgba(255,100,52,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-hover">
                ទំនាក់ទំនងតាម Telegram
                <span className="transition-transform group-hover:translate-x-1"><Arrow /></span>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm">
              {contacts.map((ct) => (
                <Link key={ct.label} href={ct.href} target={ct.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-white/80 transition-colors hover:text-brand-orange">
                  <span className="text-white/50">{ct.label}:</span> <span className="font-display font-700">{ct.value}</span>
                </Link>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  </div>
);

export default CourseCatalog;
