import ProjectListing from "../components/ui/Project/ProjectListing";

export const metadata = {
  title: "Professional Training Projects",
  description:
    "Explore professional GIS training projects delivered by Khmer GRS Academy for government institutions, private companies, and development partners.",
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "Professional Training Projects | Khmer GRS Academy",
    description:
      "Explore professional GIS training projects delivered by Khmer GRS Academy for government institutions, private companies, and development partners.",
    url: "/project",
    siteName: "Khmer GRS Academy",
    images: [
      {
        url: "/kga_training_project/MoSVY_Training_pictures/photo_2026-07-29_14-45-50.jpg",
        alt: "Khmer GRS Academy professional GIS training",
      },
    ],
    locale: "km_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Training Projects | Khmer GRS Academy",
    description:
      "Explore professional GIS training projects delivered by Khmer GRS Academy.",
    images: [
      "/kga_training_project/MoSVY_Training_pictures/photo_2026-07-29_14-45-50.jpg",
    ],
  },
};

export default function ProjectPage() {
  return <ProjectListing />;
}
