import { Download, Eye } from "lucide-react";

const numberFormatter = new Intl.NumberFormat("en-US");

// Stable placeholders until public metrics are supplied by the database.
const getSeededPlaceholderStats = (slug) => {
  let hash = 2166136261;

  for (let index = 0; index < slug.length; index += 1) {
    hash ^= slug.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  const seed = hash >>> 0;
  const views = 240 + (seed % 8760);
  const maxDownloads = Math.max(80, Math.floor(views * 0.42));
  const downloads = 35 + ((seed >>> 8) % (maxDownloads - 34));

  return { views, downloads };
};

export default function DatasetStats({
  slug,
  views,
  downloads,
  className = "",
  compact = false,
}) {
  const placeholders = getSeededPlaceholderStats(slug);
  const viewCount = views ?? placeholders.views;
  const downloadCount = downloads ?? placeholders.downloads;
  const iconSize = compact ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-body text-brand-text/45 dark:text-gray-500 ${className}`}
    >
      <span className="inline-flex items-center gap-1.5" aria-label={`${viewCount} views`}>
        <Eye className={iconSize} aria-hidden="true" />
        <span>{numberFormatter.format(viewCount)}</span>
      </span>
      <span className="inline-flex items-center gap-1.5" aria-label={`${downloadCount} downloads`}>
        <Download className={iconSize} aria-hidden="true" />
        <span>{numberFormatter.format(downloadCount)}</span>
      </span>
    </div>
  );
}
