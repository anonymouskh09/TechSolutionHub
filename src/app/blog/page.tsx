import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Blog",
  "Insights on AI automation, Next.js development, SEO, and business growth from TechSolutionHub.",
  "/blog"
);

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <PageHeader
        title="Blog"
        description="Insights, guides, and updates from our team"
      />
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 md:px-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-0.5 font-medium text-primary">
                  {post.category}
                </span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-dark group-hover:text-primary">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
