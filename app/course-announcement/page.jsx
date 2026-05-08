'use client'
import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import argis from "../../public/logos/arcgis.png";
import arcgisPro from "../../public/logos/arcgis-pro-single.png";
import qgis from "../../public/logos/qgis.png";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";

const CourseAnnouncement = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const announcements = [
    // ─── ArcGIS Pro (full detail content provided) ───
    {
      icon: arcgisPro,
      alt: "arcgisPro",
      title: "ArcGIS Pro",
      tagline: "វគ្គសិក្សាជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ និងការផលិតផែនទី",
      batch: "ជំនាន់ថ្មី ឆ្នាំ២០២៦",
      status: "កំពុងបើកចុះឈ្មោះ",
      statusType: "open",
      startDate: "៩ ឧសភា ២០២៦",
      duration: "—",
      schedule: "ច័ន្ទ - អង្គារ - ពុធ / សៅរ៍ - អាទិត្យ",
      time: "១៨:៣០ - ២០:៣០ / ០៨:០០ - ១១:០០",
      mode: "ថ្នាក់ផ្ទាល់ + Online",
      seats: "កន្លែងមានកំណត់",
      price: "១៣៩ $",
      highlights: [
        "ទទួលបាន KGA Toolbox License រយៈពេល ១ឆ្នាំ ឥតគិតថ្លៃ",
        "សិក្សាលើមូលដ្ឋានគ្រឹះ GIS ពីដំបូង",
        "ផលិតផែនទីតាមស្តង់ដារ និងទាក់ទាញ",
        "អនុវត្តលើ Tools សំខាន់ៗរបស់ ArcGIS Pro",
        "វិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សា",
      ],
      // ─── DETAIL CONTENT ───
      detail: {
        heroBadge: "ការផ្តល់ជូនពិសេស",
        heroTitle: "វគ្គសិក្សាជំនាញគ្រប់គ្រងទិន្នន័យភូមិសាស្ត្រ និងការផលិតផែនទី",
        heroSubtitle:
          "ចុះឈ្មោះថ្ងៃនេះ ទទួលបានកញ្ចប់ KGA Toolbox License រយៈពេល ១ឆ្នាំពេញ ដោយឥតគិតថ្លៃ!",
        poster: "/posters/arcgis-pro-2026.png", // ← put your poster image here
        schedules: [
          {
            mode: "វគ្គសិក្សាអនឡាញ",
            modeType: "online",
            days: "ច័ន្ទ • អង្គារ • ពុធ",
            startDate: "១១ ឧសភា ២០២៦",
            time: "១៨:៣០ - ២០:៣០ យប់",
          },
          {
            mode: "វគ្គសិក្សាផ្ទាល់",
            modeType: "in-person",
            days: "សៅរ៍ • អាទិត្យ",
            startDate: "៩ ឧសភា ២០២៦",
            time: "០៨:០០ - ១១:០០ ព្រឹក",
          },
        ],
        curriculum: [
          "សិក្សាលើមូលដ្ឋានគ្រឹះ GIS",
          "សិក្សាពីការបង្កើត និងការប្រើប្រាស់ទិន្នន័យ Vector",
          "សិក្សាពីការគ្រប់គ្រង និងការវិភាគទិន្នន័យ Raster",
          "អនុវត្តប្រើប្រាស់ Tools សំខាន់ៗ ក្នុងកម្មវិធី ArcGIS Pro",
          "សិក្សា និងអនុវត្តការគ្រប់គ្រងទិន្នន័យ",
          "សិក្សា និងអនុវត្តការផលិតផែនទីតាមស្តង់ដារ និងទាក់ទាញ",
          "រៀនប្រើប្រាស់លទ្ធផល សម្រាប់ការងារជាក់ស្តែង",
        ],
        bonus: {
          title: "ការផ្តល់ជូនពិសេស",
          items: [
            "កញ្ចប់ License KGA Toolbox រយៈពេល ១ឆ្នាំពេញ ឥតគិតថ្លៃ",
            "ឯកសារបង្រៀន និងទិន្នន័យអនុវត្ត",
            "ការគាំទ្រពីគ្រូបង្រៀនពេញមួយវគ្គសិក្សា",
          ],
          note: "*ការផ្តល់ជូនពិសេសនេះ សម្រាប់តែអ្នកចុះឈ្មោះក្នុងកាលវិភាគខាងលើប៉ុណ្ណោះ",
          link: {
            label: "ទស្សនាមាតិកា KGA Toolbox",
            url: "https://www.khmergrs.com/kga-toolbox",
          },
        },
        contacts: [
          { label: "ទូរស័ព្ទ", value: "081 373 833", href: "tel:+855813738339" },
          { label: "Telegram", value: "t.me/khmergrsacademy", href: "https://t.me/khmergrsacademy" },
          { label: "Website", value: "khmergrs.com", href: "https://www.khmergrs.com" },
        ],
        closingNote:
          "ពង្រឹងសមត្ថភាពផ្នែកភូមិសាស្ត្រឌីជីថលជាមួយយើង ដើម្បីអនាគតការងារកាន់តែប្រសើរ!",
      },
    },

    // ─── ArcGIS (placeholder - awaiting detail content) ───
    {
      icon: argis,
      alt: "argis",
      title: "ArcGIS",
      batch: "ជំនាន់ថ្មី ឆ្នាំ២០២៦",
      status: "កំពុងបើកចុះឈ្មោះ",
      statusType: "open",
      startDate: "១៥ មិថុនា ២០២៦",
      duration: "៨ សប្តាហ៍",
      schedule: "ច័ន្ទ - ពុធ - សុក្រ",
      time: "១៨:០០ - ២០:០០",
      mode: "ថ្នាក់ផ្ទាល់ + Online",
      seats: "១៥ កន្លែង",
      price: "១២៩ $",
      highlights: [
        "បង្កើតផែនទីពីកម្រិតដំបូង",
        "វិភាគទិន្នន័យភូមិសាស្ត្រ (Spatial Analysis)",
        "កិច្ចការផ្ទះ និងគម្រោងជាក់ស្តែង",
        "វិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សា",
      ],
      detail: null, // ← awaiting content
    },

    // ─── QGIS (placeholder - awaiting detail content) ───
    {
      icon: qgis,
      alt: "qgis",
      title: "QGIS",
      batch: "ជំនាន់ថ្មី ឆ្នាំ២០២៦",
      status: "នឹងបើកចុះឈ្មោះ",
      statusType: "upcoming",
      startDate: "១ កក្កដា ២០២៦",
      duration: "៦ សប្តាហ៍",
      schedule: "អង្គារ - ព្រហស្បតិ៍",
      time: "១៨:៣០ - ២០:៣០",
      mode: "ថ្នាក់ផ្ទាល់ + Online",
      seats: "១៥ កន្លែង",
      price: "១២៩ $",
      highlights: [
        "ប្រើប្រាស់ QGIS ដោយឥតគិតថ្លៃ",
        "រៀនពីការគ្រប់គ្រងទិន្នន័យ",
        "ផែនទីសម្រាប់ការងារជាក់ស្តែង",
        "ឯកសារបង្រៀនជា PDF",
        "វិញ្ញាបនបត្របញ្ចប់វគ្គសិក្សា",
      ],
      detail: null,
    },
  ];

  const statusStyles = {
    open: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    upcoming:
      "bg-brand-blue/15 text-brand-blue dark:text-blue-300 border-brand-blue/30 dark:border-blue-300/30",
    closed: "bg-gray-500/15 text-gray-400 border-gray-500/30",
  };

  return (
    <main className="pt-24 md:pt-32">
      <SectionWrapper>
        <div className="flex flex-col justify-center items-center">
          {/* ───── Hero / Title ───── */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl px-4"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-display font-600 tracking-wider uppercase rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              ការប្រកាសវគ្គសិក្សា
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-800 leading-[1.4] mb-4 text-brand-text dark:text-white">
              វគ្គសិក្សាដែលកំពុង និងនឹងបើក
            </h1>
            <div className="w-16 h-1.5 bg-brand-orange mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-brand-text/60 dark:text-gray-400 leading-relaxed font-body">
              ស្វែងរកវគ្គសិក្សាដែលត្រូវនឹងតម្រូវការរបស់អ្នក។
              យើងបើកវគ្គសិក្សាថ្មីៗជាប្រចាំ ដើម្បីបម្រើដល់សិស្សគ្រប់កម្រិត។
            </p>
          </m.div>

          {/* ───── Announcement Cards ───── */}
          <div className="custom-screen w-full">
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {announcements.map((item, idx) => (
                <m.li
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="tool-card bg-white dark:bg-white/5 rounded-2xl border border-brand-blue/8 dark:border-white/8 p-6 relative overflow-hidden group flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue dark:bg-brand-orange rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 relative rounded-xl bg-brand-blue/8 dark:bg-brand-orange/10 flex items-center justify-center p-3">
                      <Image src={item.icon} alt={item.alt} className="w-full h-full object-contain" />
                    </div>
                    <span
                      className={`text-xs font-display font-600 px-3 py-1.5 rounded-full border ${statusStyles[item.statusType]}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-700 mb-1 text-brand-text dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-body text-brand-text/50 dark:text-gray-500 mb-5">
                    {item.batch}
                  </p>

                  <div className="space-y-3 mb-5 pb-5 border-b border-brand-blue/8 dark:border-white/8">
                    <InfoRow label="ថ្ងៃចាប់ផ្តើម" value={item.startDate} />
                    <InfoRow label="រយៈពេល" value={item.duration} />
                    <InfoRow label="ថ្ងៃរៀន" value={item.schedule} />
                    <InfoRow label="ម៉ោងរៀន" value={item.time} />
                    <InfoRow label="ទម្រង់រៀន" value={item.mode} />
                    <InfoRow label="ចំនួនកន្លែង" value={item.seats} />
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-display font-600 uppercase tracking-wider text-brand-text/40 dark:text-gray-500 mb-3">
                      អ្វីដែលអ្នកនឹងទទួលបាន
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-brand-text/70 dark:text-gray-400 font-body leading-relaxed"
                        >
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div>
                      <p className="text-xs font-body text-brand-text/40 dark:text-gray-500">តម្លៃ</p>
                      <p className="text-2xl font-display font-800 text-brand-text dark:text-white">
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedCourse(item)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full font-display font-600 text-sm bg-brand-blue/10 dark:bg-white/8 text-brand-text dark:text-white hover:bg-brand-blue/15 dark:hover:bg-white/12 transition-all duration-300"
                      >
                        មើលព័ត៌មានលម្អិត
                      </button>
                      <Link
                        href="https://t.me/khmergrsacademy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full font-display font-600 text-sm transition-all duration-300 ${
                          item.statusType === "open"
                            ? "bg-brand-orange text-white hover:bg-brand-orange/90 hover:-translate-y-0.5 shadow-md shadow-brand-orange/20"
                            : "bg-brand-blue/10 dark:bg-white/8 text-brand-text dark:text-white hover:bg-brand-blue/15 dark:hover:bg-white/12"
                        }`}
                      >
                        {item.statusType === "open" ? "ចុះឈ្មោះ" : "កក់ទុក"}
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </m.li>
              ))}
            </ul>
          </div>

          {/* ───── Bottom CTA Banner ───── */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="custom-screen w-full mt-20"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue/90 dark:from-white/5 dark:to-white/10 border border-brand-blue/20 dark:border-white/8 p-8 md:p-12 text-center">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-orange/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-orange/5 blur-3xl"></div>

              <div className="relative">
                <h3 className="text-2xl md:text-4xl font-display font-800 leading-[1.4] mb-4 text-white">
                  មិនទាន់ប្រាកដថាគួរជ្រើសរើសវគ្គសិក្សាមួយណា?
                </h3>
                <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 font-body leading-relaxed">
                  ទាក់ទងមកយើងតាមរយៈ Telegram យើងនឹងជួយណែនាំវគ្គសិក្សាដែលត្រូវនឹងគោលដៅ និងកម្រិតរបស់អ្នក។
                </p>
                <Link
                  href="https://t.me/khmergrsacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white font-display font-600 rounded-full shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  ទំនាក់ទំនងតាម Telegram
                </Link>
              </div>
            </div>
          </m.div>
        </div>
      </SectionWrapper>

      {/* ───── Course Detail Modal ───── */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        statusStyles={statusStyles}
      />
    </main>
  );
};

/* ═════════════════════════════════════════════════════
   MODAL
   ═════════════════════════════════════════════════════ */
const CourseDetailModal = ({ course, onClose, statusStyles }) => {
  return (
    <AnimatePresence>
      {course && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

          {/* Modal panel */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-[#0B1929] rounded-2xl border border-brand-blue/8 dark:border-white/8 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange z-10"></div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-blue/10 dark:bg-white/8 backdrop-blur hover:bg-brand-blue/15 dark:hover:bg-white/15 text-brand-text dark:text-white flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Scrollable body */}
            <div className="overflow-y-auto custom-scrollbar">
              {course.detail ? (
                <FullDetailContent course={course} statusStyles={statusStyles} />
              ) : (
                <PlaceholderContent course={course} statusStyles={statusStyles} />
              )}
            </div>

            {/* Sticky footer */}
            <div className="border-t border-brand-blue/8 dark:border-white/8 bg-white dark:bg-[#0B1929] p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-body text-brand-text/40 dark:text-gray-500">តម្លៃ</p>
                <p className="text-xl md:text-2xl font-display font-800 text-brand-text dark:text-white">
                  {course.price}
                </p>
              </div>
              <Link
                href="https://t.me/khmergrsacademy"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-600 text-sm transition-all duration-300 ${
                  course.statusType === "open"
                    ? "bg-brand-orange text-white hover:bg-brand-orange/90 hover:-translate-y-0.5 shadow-md shadow-brand-orange/20"
                    : "bg-brand-blue/10 dark:bg-white/8 text-brand-text dark:text-white hover:bg-brand-blue/15 dark:hover:bg-white/12"
                }`}
              >
                {course.statusType === "open" ? "ចុះឈ្មោះឥឡូវនេះ" : "កក់ទុក"}
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

/* ─── Full detail content (when course.detail exists) ─── */
const FullDetailContent = ({ course, statusStyles }) => {
  const d = course.detail;

  return (
    <div className="p-6 md:p-10 pt-10 md:pt-12">
      {/* Hero header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
        <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-brand-blue/8 dark:bg-brand-orange/10 flex items-center justify-center p-3">
          <Image src={course.icon} alt={course.alt} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-xs font-display font-600 px-3 py-1 rounded-full border mb-3 ${statusStyles[course.statusType]}`}>
            {course.status}
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-800 leading-[1.4] text-brand-text dark:text-white mb-2">
            {d.heroTitle}
          </h2>
          <p className="text-sm md:text-base font-body text-brand-text/60 dark:text-gray-400 leading-relaxed">
            {d.heroSubtitle}
          </p>
        </div>
      </div>

      <div className="w-12 h-1 bg-brand-orange rounded-full mb-8"></div>

      {/* Optional poster image */}
      {d.poster && (
        <div className="mb-8 rounded-xl overflow-hidden border border-brand-blue/8 dark:border-white/8">
          <Image
            src={d.poster}
            alt={`${course.title} poster`}
            width={1080}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Schedule cards */}
      <SectionTitle>កាលវិភាគចូលរៀន</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-2 mb-10">
        {d.schedules.map((s, i) => (
          <div
            key={i}
            className="relative bg-brand-blue/5 dark:bg-white/5 rounded-xl border border-brand-blue/8 dark:border-white/8 p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-display font-600 px-2.5 py-1 rounded-full ${
                  s.modeType === "online"
                    ? "bg-brand-blue/15 text-brand-blue dark:text-blue-300"
                    : "bg-brand-orange/15 text-brand-orange"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                {s.mode}
              </span>
            </div>
            <div className="space-y-1.5">
              <DetailRow label="ថ្ងៃរៀន" value={s.days} />
              <DetailRow label="ចាប់ផ្តើម" value={s.startDate} />
              <DetailRow label="ម៉ោង" value={s.time} />
            </div>
          </div>
        ))}
      </div>

      {/* Curriculum */}
      <SectionTitle>មាតិកាសង្ខេប</SectionTitle>
      <ul className="space-y-3 mb-10">
        {d.curriculum.map((c, i) => (
          <li
            key={i}
            className="flex items-start gap-3 p-4 bg-brand-blue/5 dark:bg-white/5 rounded-xl border border-brand-blue/8 dark:border-white/8"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center text-xs font-display font-700">
              {i + 1}
            </span>
            <span className="text-sm md:text-base text-brand-text/80 dark:text-gray-300 font-body leading-relaxed pt-0.5">
              {c}
            </span>
          </li>
        ))}
      </ul>

      {/* Bonus / Special offer */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange/80 p-6 md:p-8 mb-10">
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 blur-3xl"></div>

        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-xs font-display font-700 uppercase tracking-wider text-white/90">
              {d.bonus.title}
            </p>
          </div>
          <ul className="space-y-2.5 mb-4">
            {d.bonus.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm md:text-base text-white font-body leading-relaxed">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {d.bonus.note && (
            <p className="text-xs text-white/80 italic font-body mb-4">{d.bonus.note}</p>
          )}
          {d.bonus.link && (
            <Link
              href={d.bonus.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-white hover:gap-2.5 transition-all underline-offset-4 hover:underline"
            >
              {d.bonus.link.label}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Contacts */}
      <SectionTitle>ទំនាក់ទំនង</SectionTitle>
      <div className="grid gap-3 sm:grid-cols-3 mb-8">
        {d.contacts.map((c, i) => (
          <Link
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue/5 dark:bg-white/5 rounded-xl border border-brand-blue/8 dark:border-white/8 p-4 hover:border-brand-orange/30 transition-colors group"
          >
            <p className="text-xs font-body text-brand-text/50 dark:text-gray-500 mb-1">{c.label}</p>
            <p className="text-sm font-display font-600 text-brand-text dark:text-white group-hover:text-brand-orange transition-colors break-all">
              {c.value}
            </p>
          </Link>
        ))}
      </div>

      {/* Closing note */}
      {d.closingNote && (
        <p className="text-center text-sm md:text-base font-display font-600 text-brand-text/70 dark:text-gray-400 italic px-4">
          {d.closingNote}
        </p>
      )}
    </div>
  );
};

/* ─── Placeholder for courses without detail content yet ─── */
const PlaceholderContent = ({ course, statusStyles }) => (
  <div className="p-6 md:p-10 pt-10 md:pt-12">
    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
      <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-brand-blue/8 dark:bg-brand-orange/10 flex items-center justify-center p-3">
        <Image src={course.icon} alt={course.alt} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`inline-block text-xs font-display font-600 px-3 py-1 rounded-full border mb-2 ${statusStyles[course.statusType]}`}>
          {course.status}
        </span>
        <h2 className="text-2xl md:text-3xl font-display font-800 leading-[1.4] text-brand-text dark:text-white">
          {course.title}
        </h2>
        <p className="text-sm font-body text-brand-text/50 dark:text-gray-500">{course.batch}</p>
      </div>
    </div>

    <div className="w-12 h-1 bg-brand-orange rounded-full mb-6"></div>

    <div className="bg-brand-blue/5 dark:bg-white/5 border border-dashed border-brand-blue/20 dark:border-white/10 rounded-xl p-6 text-center mb-6">
      <p className="text-sm font-body text-brand-text/60 dark:text-gray-400">
        ខ្លឹមសារលម្អិតរបស់វគ្គសិក្សា <strong>{course.title}</strong> នឹងត្រូវបន្ថែមឆាប់ៗនេះ។
      </p>
    </div>

    <SectionTitle>ព័ត៌មានវគ្គសិក្សា</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-brand-blue/5 dark:bg-white/5 rounded-xl p-5 mb-6">
      <DetailRow label="ថ្ងៃចាប់ផ្តើម" value={course.startDate} />
      <DetailRow label="រយៈពេល" value={course.duration} />
      <DetailRow label="ថ្ងៃរៀន" value={course.schedule} />
      <DetailRow label="ម៉ោងរៀន" value={course.time} />
      <DetailRow label="ទម្រង់រៀន" value={course.mode} />
      <DetailRow label="ចំនួនកន្លែង" value={course.seats} />
    </div>

    <SectionTitle>អ្វីដែលអ្នកនឹងទទួលបាន</SectionTitle>
    <ul className="space-y-2">
      {course.highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-brand-text/70 dark:text-gray-400 font-body leading-relaxed">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{h}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ─── Helpers ─── */
const SectionTitle = ({ children }) => (
  <h3 className="text-base md:text-lg font-display font-700 mb-4 text-brand-text dark:text-white flex items-center gap-2">
    <span className="w-1 h-5 bg-brand-orange rounded-full"></span>
    {children}
  </h3>
);

const InfoRow = ({ label, value }) => (
  <div className="flex items-center justify-between gap-3">
    <span className="text-xs font-body text-brand-text/50 dark:text-gray-500">{label}</span>
    <span className="text-sm font-display font-600 text-brand-text dark:text-white text-right">{value}</span>
  </div>
);

const DetailRow = ({ label, value }) => (
  <div className="flex items-start justify-between gap-3">
    <span className="text-xs font-body text-brand-text/50 dark:text-gray-500 flex-shrink-0">{label}</span>
    <span className="text-sm font-display font-600 text-brand-text dark:text-white text-right">{value}</span>
  </div>
);

export default CourseAnnouncement;