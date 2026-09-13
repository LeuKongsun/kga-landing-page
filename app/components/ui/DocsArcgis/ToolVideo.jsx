"use client";

import { useLanguage } from "../../LanguageProvider";
import { t, UI } from "../../../docs/arcgis/_data/ui";

/**
 * Demo video slot.
 *
 * Renders nothing at all until a YouTube id is set on the tool: no heading, no
 * empty frame, no reserved gap and no third-party request. Every tool ships
 * with `youtubeId: null` today; adding a demo later is a one-line edit in
 * arcgisDocs.jsx (the generator carries hand-set ids across a re-run) and needs
 * no change here.
 */
const ToolVideo = ({ youtubeId, title }) => {
  const { language } = useLanguage();

  const id = typeof youtubeId === "string" ? youtubeId.trim() : "";
  if (!id) return null;

  const heading = t(UI.demoVideo, language);

  return (
    <section aria-labelledby="tool-demo-heading" className="mt-10">
      <h2
        id="tool-demo-heading"
        className="mb-4 text-xl font-display font-700 text-brand-text dark:text-white md:text-2xl"
      >
        {heading}
      </h2>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-brand-blue/8 bg-brand-blue/5 dark:border-white/8 dark:bg-white/5">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`}
          title={title ? `${title} — ${t(UI.demoVideo, "en")}` : t(UI.demoVideo, "en")}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </section>
  );
};

export default ToolVideo;
