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
  const socialImage = dataset.socialImage || dataset.coverImage;
  const socialImageMetadata = {
    url: socialImage,
    alt: dataset.title,
    ...(dataset.socialImageWidth && { width: dataset.socialImageWidth }),
    ...(dataset.socialImageHeight && { height: dataset.socialImageHeight }),
    ...(dataset.socialImage && { type: "image/jpeg" }),
  };

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
      images: [socialImageMetadata],
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