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
  const socialImage = `/_next/image?url=${encodeURIComponent(dataset.coverImage)}&w=1200&q=82`;

  return {
    title: `${dataset.title} | OpenKGA`,
    description: dataset.excerpt,
    alternates: {
      canonical: `/openkga/${dataset.slug}`,
    },
    openGraph: {
      title: dataset.title,
      description: dataset.excerpt,
      url: `/openkga/${dataset.slug}`,
      siteName: "Khmer GRS Academy",
      images: [
        {
          url: socialImage,
          alt: dataset.title,
        },
      ],
      locale: "km_KH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dataset.title,
      description: dataset.excerpt,
      images: [socialImage],
    },
  };
}

export default async function OpenKGADetailPage({ params }) {
  const { slug } = await params;
  return <OpenKGADetail slug={slug} />;
}