import { Suspense } from "react";
import ProjectComingSoon from "../components/ui/Project/ProjectComingSoon";

export const metadata = {
  title: "Project | Khmer GRS Academy",
  description:
    "KGA training project portfolio, available for display soon.",
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "Project | Khmer GRS Academy",
    description:
      "KGA training project portfolio, available for display soon.",
    url: "/project",
    siteName: "Khmer GRS Academy",
    images: [{ url: "/cta-image.jpg", alt: "Khmer GRS Academy Project Portfolio" }],
    locale: "km_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project | Khmer GRS Academy",
    description:
      "KGA training project portfolio, available for display soon.",
    images: ["/cta-image.jpg"],
  },
};

export default function ProjectPage() {
  return (
    <Suspense fallback={null}>
      <ProjectComingSoon />
    </Suspense>
  );
}
