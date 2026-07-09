import { notFound } from "next/navigation";
import BlogPost from "../../components/ui/Blog/BlogPost";
import { getLocalizedPost, getPostBySlug, posts } from "../_data/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sourcePost = getPostBySlug(slug);
  if (!sourcePost) return { title: "Post not found" };
  const post = getLocalizedPost(sourcePost, "en");
  return {
    title: `${post.title} | KGA Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: "Khmer GRS Academy",
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
      locale: "km_KH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
