import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  // TODO: remove noIndex once the full article is published.
  return createPageMetadata(post.title, post.excerpt, `/blog/${slug}`, {
    noIndex: true,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />
      <article className="bg-white pt-24 pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {post.category}
          </span>
          <h1 className="mb-4 text-4xl font-bold text-dark">{post.title}</h1>
          <p className="mb-8 text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Full article content coming soon. This blog architecture is ready
              for CMS integration with Sanity, Contentful, or MDX. Contact us if
              you&apos;d like to discuss content strategy for your own platform.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
