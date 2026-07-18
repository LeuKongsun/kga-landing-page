"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Compass,
  Database,
  GraduationCap,
  Handshake,
  Layers3,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import SectionWrapper from "../../SectionWrapper";
import { useLanguage } from "../../LanguageProvider";
import kgaLogo from "../../../../public/icons/kga-logo.svg";

const copy = {
  en: {
    eyebrow: "About Khmer GRS Academy",
    title: "Cambodia's geospatial education and technology hub",
    lead: "Khmer GRS Academy is dedicated to Geographic Information Systems, Remote Sensing, and geospatial technologies. Founded in 2020, KGA makes professional geospatial education accessible through the Khmer language while maintaining international standards.",
    intro: "Today, KGA brings together education, software development, open data, research, and professional consulting to support students, government agencies, private companies, NGOs, and GIS professionals across Cambodia.",
    logoAlt: "Khmer GRS Academy logo",
    ctaCourses: "Explore Courses",
    ctaOpen: "OpenKGA Resources",
    ctaProject: "Recent Projects",
    ctaContact: "Contact KGA",
    stats: [
      ["2020", "Founded"],
      ["GIS", "Core expertise"],
      ["Khmer", "Learning language"],
    ],
    missionEyebrow: "Our Mission",
    missionTitle: "Transform knowledge into practical workplace skills.",
    mission: "We believe geospatial technology should not be limited to specialists. Our mission is to empower Cambodian professionals with practical GIS knowledge, industry-standard workflows, and modern technologies that solve real-world problems.",
    missionPoints: [
      "Practical GIS knowledge for real workplace needs",
      "Khmer-language access with international standards",
      "Courses, tools, tutorials, and resources built for applied skill",
    ],
    whatTitle: "What We Do",
    whatLead: "KGA has grown beyond a traditional training center into a complete geospatial ecosystem.",
    pillars: [
      ["Professional GIS Education", "Project-based training with real datasets and workflows used in government, engineering, environmental management, utilities, agriculture, land administration, and urban planning."],
      ["GIS Software Development", "Productivity tools for ArcGIS Pro, workflow automation, cadastral mapping, topology validation, data quality assurance, conversion, and data management."],
      ["Open Geospatial Resources", "Through OpenKGA, we publish datasets, tutorials, technical articles, documentation, workflow guides, and GIS best practices for Cambodia's growing GIS community."],
      ["GIS Consulting & Services", "We help organizations with GIS databases, spatial data collection, cleaning, quality control, automation, cartography, spatial analysis, remote sensing, and customized solutions."],
    ],
    trainingTitle: "Training Areas",
    trainingLead: "Our courses build practical competence step by step, from beginner foundations to professional workflows.",
    training: ["ArcGIS Pro", "ArcGIS", "QGIS", "Remote Sensing", "Google Earth Engine", "Spatial Analysis", "Python & ArcPy Automation", "Cartography and Map Production", "GIS Database Design", "Enterprise GIS Workflows"],
    philosophyEyebrow: "Our Teaching Philosophy",
    philosophyTitle: "Learning GIS should mirror real GIS practice.",
    philosophy: "Rather than teaching isolated software functions, we teach complete workflows that students can confidently apply in their careers.",
    philosophyPoints: ["Industry-standard workflows", "Hands-on laboratory exercises", "Real-world case studies", "Professional data management", "Automation and productivity", "Critical thinking and problem solving", "Continuous curriculum improvement"],
    innovationTitle: "Continuous Innovation",
    innovation: "The geospatial industry evolves rapidly, and so do we. KGA invests in new GIS software, educational content, online learning, emerging geospatial technologies, AI in GIS workflows, and Cambodia's digital transformation.",
    communityTitle: "Building Cambodia's Geospatial Community",
    community: "Our vision extends beyond classrooms. We aim to build a strong community where GIS professionals, students, researchers, developers, and organizations learn from one another, share knowledge, and collaborate on Cambodia's geographic challenges.",
    visionEyebrow: "Our Vision",
    visionTitle: "To become Cambodia's leading geospatial education and technology platform.",
    vision: "We empower individuals and organizations through professional GIS training, innovative software solutions, and accessible geospatial knowledge.",
    visionAction: "Start a Conversation",
  },
  km: {
    eyebrow: "អំពី Khmer GRS Academy",
    title: "មជ្ឈមណ្ឌលអប់រំ និងបច្ចេកវិទ្យាភូមិសាស្ត្រឌីជីថលនៅកម្ពុជា",
    lead: "Khmer GRS Academy ផ្តោតលើប្រព័ន្ធព័ត៌មានភូមិសាស្ត្រ GIS, Remote Sensing និងបច្ចេកវិទ្យាភូមិសាស្ត្រឌីជីថល។ បង្កើតឡើងក្នុងឆ្នាំ 2020 KGA ធ្វើឱ្យការអប់រំភូមិសាស្ត្រវិជ្ជាជីវៈអាចចូលដំណើរការបានតាមរយៈភាសាខ្មែរ និងរក្សាស្តង់ដារអន្តរជាតិ។",
    intro: "សព្វថ្ងៃនេះ KGA រួមបញ្ចូលការអប់រំ ការអភិវឌ្ឍកម្មវិធី ទិន្នន័យបើកចំហ ការស្រាវជ្រាវ និងសេវាកម្មប្រឹក្សាវិជ្ជាជីវៈ ដើម្បីគាំទ្រសិស្ស ស្ថាប័នរដ្ឋ ក្រុមហ៊ុនឯកជន អង្គការ និងអ្នកជំនាញ GIS នៅកម្ពុជា។",
    logoAlt: "ឡូហ្គោ Khmer GRS Academy",
    ctaCourses: "មើលវគ្គសិក្សា",
    ctaOpen: "ធនធាន OpenKGA",
    ctaProject: "គម្រោងថ្មីៗ",
    ctaContact: "ទាក់ទង KGA",
    stats: [
      ["2020", "ឆ្នាំបង្កើត"],
      ["GIS", "ជំនាញស្នូល"],
      ["ខ្មែរ", "ភាសាសិក្សា"],
    ],
    missionEyebrow: "បេសកកម្មរបស់យើង",
    missionTitle: "បម្លែងចំណេះដឹងទៅជាជំនាញអនុវត្តក្នុងការងារ។",
    mission: "យើងជឿថាបច្ចេកវិទ្យាភូមិសាស្ត្រឌីជីថលមិនគួរត្រូវបានកំណត់សម្រាប់តែអ្នកជំនាញនោះទេ។ បេសកកម្មរបស់យើងគឺផ្តល់អំណាចដល់អ្នកជំនាញកម្ពុជាជាមួយចំណេះដឹង GIS អនុវត្ត លំហូរការងារតាមស្តង់ដារឧស្សាហកម្ម និងបច្ចេកវិទ្យាទំនើបសម្រាប់ដោះស្រាយបញ្ហាពិត។",
    missionPoints: [
      "ចំណេះដឹង GIS អនុវត្តសម្រាប់តម្រូវការការងារពិត",
      "ការសិក្សាជាភាសាខ្មែរ ជាមួយស្តង់ដារអន្តរជាតិ",
      "វគ្គសិក្សា ឧបករណ៍ មេរៀន និងធនធានសម្រាប់ជំនាញអនុវត្ត",
    ],
    whatTitle: "អ្វីដែលយើងធ្វើ",
    whatLead: "KGA បានក្លាយជាប្រព័ន្ធអេកូស៊ីស្ទែមភូមិសាស្ត្រឌីជីថលមួយ ដែលលើសពីមជ្ឈមណ្ឌលបណ្តុះបណ្តាលធម្មតា។",
    pillars: [
      ["ការអប់រំ GIS វិជ្ជាជីវៈ", "ការបណ្តុះបណ្តាលផ្អែកលើគម្រោងអនុវត្ត ដោយប្រើទិន្នន័យពិត និងលំហូរការងារដែលប្រើក្នុងវិស័យរដ្ឋ វិស្វកម្ម បរិស្ថាន កសិកម្ម រដ្ឋបាលដីធ្លី និងផែនការទីក្រុង។"],
      ["ការអភិវឌ្ឍកម្មវិធី GIS", "ឧបករណ៍បង្កើនផលិតភាពសម្រាប់ ArcGIS Pro ការធ្វើស្វ័យប្រវត្តិកម្ម ការងារផែនទីកាដាស្ត្រ ការត្រួតពិនិត្យ topology ការធានាគុណភាពទិន្នន័យ និងការគ្រប់គ្រងទិន្នន័យ។"],
      ["ធនធានភូមិសាស្ត្របើកចំហ", "តាមរយៈ OpenKGA យើងផ្សព្វផ្សាយទិន្នន័យ មេរៀន អត្ថបទបច្ចេកទេស ឯកសារ មគ្គុទ្ទេសក៍លំហូរការងារ និងការអនុវត្តល្អៗសម្រាប់សហគមន៍ GIS នៅកម្ពុជា។"],
      ["សេវាកម្មប្រឹក្សា និងវិជ្ជាជីវៈ GIS", "យើងជួយអង្គការនានាជាមួយមូលដ្ឋានទិន្នន័យ GIS ការប្រមូលទិន្នន័យលំហ ការសម្អាត និងត្រួតពិនិត្យគុណភាព ការធ្វើស្វ័យប្រវត្តិកម្ម ផលិតផែនទី វិភាគលំហ និង Remote Sensing។"],
    ],
    trainingTitle: "ផ្នែកបណ្តុះបណ្តាល",
    trainingLead: "វគ្គសិក្សារបស់យើងបង្កើតសមត្ថភាពអនុវត្តជាដំណាក់កាល ចាប់ពីមូលដ្ឋានដល់លំហូរការងារវិជ្ជាជីវៈ។",
    training: ["ArcGIS Pro", "ArcGIS", "QGIS", "Remote Sensing", "Google Earth Engine", "Spatial Analysis", "Python & ArcPy Automation", "Cartography and Map Production", "GIS Database Design", "Enterprise GIS Workflows"],
    philosophyEyebrow: "ទស្សនៈបង្រៀនរបស់យើង",
    philosophyTitle: "ការរៀន GIS គួរតែស្រដៀងនឹងការអនុវត្ត GIS ក្នុងការងារពិត។",
    philosophy: "យើងមិនបង្រៀនតែមុខងារកម្មវិធីដាច់ដោយឡែកនោះទេ។ យើងបង្រៀនលំហូរការងារពេញលេញ ដែលសិស្សអាចយកទៅប្រើក្នុងអាជីពដោយមានទំនុកចិត្ត។",
    philosophyPoints: ["លំហូរការងារតាមស្តង់ដារឧស្សាហកម្ម", "លំហាត់អនុវត្តផ្ទាល់", "ករណីសិក្សាពិតប្រាកដ", "ការគ្រប់គ្រងទិន្នន័យវិជ្ជាជីវៈ", "ស្វ័យប្រវត្តិកម្ម និងផលិតភាព", "ការគិតវិភាគ និងដោះស្រាយបញ្ហា", "ការកែលម្អកម្មវិធីសិក្សាបន្តបន្ទាប់"],
    innovationTitle: "នវានុវត្តន៍បន្តបន្ទាប់",
    innovation: "ឧស្សាហកម្មភូមិសាស្ត្រឌីជីថលផ្លាស់ប្តូរយ៉ាងលឿន ហើយយើងក៏បន្តអភិវឌ្ឍដូចគ្នា។ KGA វិនិយោគលើកម្មវិធី GIS ថ្មីៗ មាតិកាអប់រំ ការសិក្សាអនឡាញ បច្ចេកវិទ្យាថ្មីៗ AI ក្នុងលំហូរការងារ GIS និងការផ្លាស់ប្តូរឌីជីថលនៅកម្ពុជា។",
    communityTitle: "កសាងសហគមន៍ភូមិសាស្ត្រឌីជីថលនៅកម្ពុជា",
    community: "ចក្ខុវិស័យរបស់យើងលើសពីថ្នាក់រៀន។ យើងចង់កសាងសហគមន៍ដែលអ្នកជំនាញ GIS សិស្ស អ្នកស្រាវជ្រាវ អ្នកអភិវឌ្ឍ និងអង្គការនានាអាចរៀនពីគ្នា ចែករំលែកចំណេះដឹង និងសហការដោះស្រាយបញ្ហាភូមិសាស្ត្ររបស់កម្ពុជា។",
    visionEyebrow: "ចក្ខុវិស័យរបស់យើង",
    visionTitle: "ក្លាយជាវេទិកាអប់រំ និងបច្ចេកវិទ្យាភូមិសាស្ត្រឌីជីថលឈានមុខគេនៅកម្ពុជា។",
    vision: "យើងផ្តល់អំណាចដល់បុគ្គល និងអង្គការតាមរយៈការបណ្តុះបណ្តាល GIS វិជ្ជាជីវៈ ដំណោះស្រាយកម្មវិធីនវានុវត្តន៍ និងចំណេះដឹងភូមិសាស្ត្រដែលងាយចូលដំណើរការ។",
    visionAction: "ចាប់ផ្តើមពិភាក្សា",
  },
};

const pillarIcons = [GraduationCap, BrainCircuit, Database, Handshake];
const storyIcons = [Lightbulb, Users];

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}

function SectionHeader({ eyebrow, title, lead, align = "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-xs font-display font-700 uppercase tracking-[0.18em] text-brand-orange">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-800 leading-[1.35] text-brand-text dark:text-white md:text-4xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-base leading-8 text-brand-text/70 dark:text-gray-300 md:text-lg">{lead}</p> : null}
    </div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const text = copy[language === "en" ? "en" : "km"];

  return (
    <div data-language-switch className="overflow-hidden pt-24">
      <section className="grid-bg">
        <div className="custom-screen grid gap-10 py-16 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <FadeIn className="max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-brand-blue/10 bg-white/70 px-4 py-1.5 text-xs font-display font-700 uppercase tracking-[0.18em] text-brand-blue shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-blue-200">
              {text.eyebrow}
            </span>
            <h1 className="font-display text-4xl font-900 leading-[1.22] text-brand-text dark:text-white md:text-6xl">
              {text.title}
            </h1>
            <p className="mt-6 text-lg leading-9 text-brand-text/75 dark:text-gray-200">{text.lead}</p>
            <p className="mt-4 text-base leading-8 text-brand-text/65 dark:text-gray-300">{text.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/courses" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-display font-700 text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange-hover">
                {text.ctaCourses}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/project" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-6 py-3 text-sm font-display font-700 text-brand-orange transition-colors hover:bg-brand-orange hover:text-white">
                {text.ctaProject}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/openkga" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/15 bg-white/70 px-6 py-3 text-sm font-display font-700 text-brand-blue transition-colors hover:border-brand-orange/40 hover:text-brand-orange dark:border-white/10 dark:bg-white/5 dark:text-white">
                {text.ctaOpen}
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-brand-blue/10 bg-white/80 p-6 shadow-2xl shadow-brand-blue/10 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20">
              <div className="flex items-center gap-5 border-b border-brand-blue/10 pb-6 dark:border-white/10">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-blue/5 p-4 dark:bg-white/10">
                  <Image src={kgaLogo} alt={text.logoAlt} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-sm font-display font-700 uppercase tracking-[0.2em] text-brand-orange">Khmer GRS Academy</p>
                  <p className="mt-2 text-sm leading-6 text-brand-text/65 dark:text-gray-300">GIS - Remote Sensing - Geospatial Technologies</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {text.stats.map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-brand-blue/10 bg-brand-light/70 p-4 text-center dark:border-white/10 dark:bg-[#0B1929]/60">
                    <div className="font-display text-2xl font-900 text-brand-blue dark:text-brand-orange">{value}</div>
                    <div className="mt-1 text-xs font-700 text-brand-text/60 dark:text-gray-300">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-brand-blue p-5 text-white dark:bg-brand-blue-dark">
                <div className="flex items-start gap-3">
                  <Compass className="mt-1 h-5 w-5 flex-none text-brand-orange" />
                  <p className="text-sm leading-7 text-white/85">{text.mission}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper className="bg-brand-light dark:bg-[#0B1929]">
        <div className="custom-screen">
          <FadeIn><SectionHeader eyebrow={text.missionEyebrow} title={text.missionTitle} lead={text.mission} /></FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {text.missionPoints.map((point, index) => (
              <FadeIn key={point} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-brand-blue/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-brand-orange" />
                  <p className="text-sm leading-7 text-brand-text/75 dark:text-gray-200">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="custom-screen">
          <FadeIn><SectionHeader title={text.whatTitle} lead={text.whatLead} /></FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {text.pillars.map(([title, body], index) => {
              const Icon = pillarIcons[index];
              return (
                <FadeIn key={title} delay={index * 0.05}>
                  <article className="tool-card h-full rounded-2xl border border-brand-blue/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.05]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange"><Icon className="h-6 w-6" /></div>
                    <h3 className="font-display text-xl font-800 leading-snug text-brand-text dark:text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-text/65 dark:text-gray-300">{body}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white/45 dark:bg-white/[0.03]">
        <div className="custom-screen grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn><SectionHeader align="left" title={text.trainingTitle} lead={text.trainingLead} /></FadeIn>
          <div className="grid gap-3 sm:grid-cols-2">
            {text.training.map((area, index) => (
              <FadeIn key={area} delay={index * 0.025}>
                <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-brand-blue/10 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#0B1929]/70">
                  <Layers3 className="h-5 w-5 flex-none text-brand-orange" />
                  <span className="text-sm font-display font-700 text-brand-text dark:text-white">{area}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="custom-screen grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <FadeIn>
            <div className="rounded-3xl bg-brand-blue p-7 text-white shadow-xl shadow-brand-blue/15 dark:bg-brand-blue-dark">
              <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-display font-700 uppercase tracking-[0.18em] text-brand-orange">{text.philosophyEyebrow}</span>
              <h2 className="font-display text-3xl font-900 leading-[1.35] md:text-4xl">{text.philosophyTitle}</h2>
              <p className="mt-5 text-base leading-8 text-white/82">{text.philosophy}</p>
            </div>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2">
            {text.philosophyPoints.map((point, index) => (
              <FadeIn key={point} delay={index * 0.04}>
                <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-brand-blue/10 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]">
                  <Target className="h-5 w-5 flex-none text-brand-orange" />
                  <span className="text-sm leading-6 text-brand-text/75 dark:text-gray-200">{point}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-light dark:bg-[#0B1929]">
        <div className="custom-screen grid gap-5 md:grid-cols-2">
          {[[text.innovationTitle, text.innovation], [text.communityTitle, text.community]].map(([title, body], index) => {
            const Icon = storyIcons[index];
            return (
              <FadeIn key={title} delay={index * 0.08}>
                <article className="h-full rounded-3xl border border-brand-blue/10 bg-white p-7 dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue dark:bg-brand-orange/10 dark:text-brand-orange"><Icon className="h-6 w-6" /></div>
                  <h2 className="font-display text-2xl font-900 leading-snug text-brand-text dark:text-white">{title}</h2>
                  <p className="mt-4 text-sm leading-7 text-brand-text/68 dark:text-gray-300">{body}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="custom-screen">
          <FadeIn>
            <div className="rounded-3xl border border-brand-blue/10 bg-white p-8 text-center shadow-xl shadow-brand-blue/10 dark:border-white/10 dark:bg-white/[0.05] md:p-12">
              <span className="mb-4 inline-flex rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-1.5 text-xs font-display font-700 uppercase tracking-[0.18em] text-brand-orange">{text.visionEyebrow}</span>
              <h2 className="mx-auto max-w-4xl font-display text-3xl font-900 leading-[1.35] text-brand-text dark:text-white md:text-5xl">{text.visionTitle}</h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-brand-text/70 dark:text-gray-300 md:text-lg">{text.vision}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-display font-700 text-white shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange-hover">
                  {text.visionAction}<Users className="h-4 w-4" />
                </Link>
                <Link href="/courses" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/15 px-6 py-3 text-sm font-display font-700 text-brand-blue transition-colors hover:border-brand-orange/40 hover:text-brand-orange dark:border-white/10 dark:text-white">
                  <BookOpen className="h-4 w-4" />{text.ctaCourses}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </div>
  );
}