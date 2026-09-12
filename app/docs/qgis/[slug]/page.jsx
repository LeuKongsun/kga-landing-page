import { notFound } from "next/navigation";
import ToolDetail from "../../../components/ui/DocsQgis/ToolDetail";
import { tools, getToolBySlug, getGroupById, PLUGIN } from "../_data/qgisDocs";
import { t } from "../_data/ui";

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return { title: `Tool not found | ${PLUGIN.name}` };
  }

  const group = getGroupById(tool.group);
  const title = `${tool.name} — ${PLUGIN.name}`;
  const description = t(tool.summary, "en");
  // Absolute and apex-hosted so it matches the plugin's helpUrl() exactly.
  const url = `https://khmergrs.com/docs/qgis/${tool.slug}`;

  return {
    title,
    description,
    keywords: ["QGIS", "KGA Toolbox", tool.name, group?.name].filter(Boolean),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Khmer GRS Academy",
      locale: "km_KH",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function QgisToolPage({ params }) {
  const { slug } = await params;

  if (!getToolBySlug(slug)) notFound();

  return <ToolDetail slug={slug} />;
}
