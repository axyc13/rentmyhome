import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import { posts } from "@/src/app/components/blog/posts";
import ArticleHero from "@/src/app/components/blog/ArticleHero";
import ArticleFeaturedImage from "@/src/app/components/blog/ArticleFeaturedImage";
import ArticleSidebar from "@/src/app/components/blog/ArticleSidebar";
import VacancyContent from "@/src/app/components/blog/content/VacancyContent";
import HealthyHomesContent from "@/src/app/components/blog/content/HealthyHomesContent";
import TenantRetentionContent from "@/src/app/components/blog/content/TenantRetentionContent";
import type { ComponentType } from "react";

const contentMap: Record<string, ComponentType> = {
  vacancy: VacancyContent,
  "healthy-homes": HealthyHomesContent,
  "tenant-retention": TenantRetentionContent,
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | RMH Blog`,
    description: post.description,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const Content = contentMap[slug];
  if (!Content) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ArticleHero
        category={post.category}
        title={post.title}
        description={post.description}
      />
      <ArticleFeaturedImage src={post.image} alt={post.title} />

      <section className="py-30">
        <div className="mx-auto w-[90%] max-w-[1150px]">
          <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-15">
            <div>
              <Content />
              <Link
                href="/blog"
                className="inline-block mt-12 bg-red text-white px-7 py-4 rounded-[12px] font-semibold hover:bg-black transition-colors"
              >
                Back To Blog
              </Link>
            </div>
            <ArticleSidebar currentSlug={slug} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
