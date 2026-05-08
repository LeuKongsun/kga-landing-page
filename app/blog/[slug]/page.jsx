import { notFound } from "next/navigation";
import BlogPost from "../../components/ui/Blog/BlogPost";
import { getPostBySlug, posts } from "../_data/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | KGA Blog`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}