import { notFound } from "next/navigation";
import ToolDetail from "../../../components/ui/DocsArcgis/ToolDetail";
import { tools, getToolBySlug, getGroupById, PRODUCT } from "../_data/arcgisDocs";
import { t } from "../_data/ui";

// Every metadata file gets a page, the three Product pages included, so this
// prerenders 118 paths while the index advertises 115 tools.
export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return { title: `Tool not found | ${PRODUCT.name}` };
  }

  const group = getGroupById(tool.group);
  const title = `${tool.name} — ${PRODUCT.name}`;
  const description = t(tool.summary, "en");
  // Absolute and apex-hosted, so it matches /docs/qgis and the URL the add-in's
  // Help buttons will eventually open.
  const url = `https://khmergrs.com/docs/arcgis/${tool.slug}`;

  return {
    title,
    description,
    keywords: ["ArcGIS Pro", "KGA Toolbox", tool.name, group?.name].filter(Boolean),
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

export default async function ArcgisToolPage({ params }) {
  const { slug } = await params;

  if (!getToolBySlug(slug)) notFound();

  return <ToolDetail slug={slug} />;
}
