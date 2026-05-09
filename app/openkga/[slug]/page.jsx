import OpenKGADetail from "../../components/ui/OpenKGA/OpenKGADetail";
import { getDatasetBySlug, datasets } from "../_data/datasets";

export async function generateStaticParams() {
  return datasets.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dataset = getDatasetBySlug(slug);
  if (!dataset) {
    return { title: "Dataset not found | OpenKGA" };
  }
  return {
    title: `${dataset.title} | OpenKGA`,
    description: dataset.excerpt,
  };
}

export default async function OpenKGADetailPage({ params }) {
  const { slug } = await params;
  return <OpenKGADetail slug={slug} />;
}