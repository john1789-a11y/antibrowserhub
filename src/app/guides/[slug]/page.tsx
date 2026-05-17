import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import GuideDetailContent from "./GuideDetailContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <GuideDetailContent
      guide={{
        slug: guide.slug,
        title: guide.title,
        category: guide.category,
        readTime: guide.readTime,
        publishDate: guide.publishDate,
        content: guide.content,
      }}
    />
  );
}
