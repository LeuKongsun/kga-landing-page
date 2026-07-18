import ProjectDetail from "../../components/ui/Project/ProjectDetail";
import { getLocalizedProject, getProjectBySlug, projects } from "../_data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sourceProject = getProjectBySlug(slug);

  if (!sourceProject) {
    return { title: "Project not found | Khmer GRS Academy" };
  }

  const project = getLocalizedProject(sourceProject, "en");

  return {
    title: `${project.title} | KGA Project`,
    description: project.excerpt,
    alternates: {
      canonical: `/project/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.excerpt,
      url: `/project/${project.slug}`,
      siteName: "Khmer GRS Academy",
      images: project.coverImage ? [{ url: project.coverImage, alt: project.title }] : undefined,
      locale: "km_KH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.excerpt,
      images: project.coverImage ? [project.coverImage] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
