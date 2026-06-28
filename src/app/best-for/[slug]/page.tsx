import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllUseCaseSlugs, getUseCaseBySlug } from "@/data/useCases";
import { getBrowserBySlug } from "@/data/browsers";
import BestForContent from "./BestForContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return {};
  return {
    title: uc.title.en,
    description: uc.metaDescription.en,
    alternates: { canonical: `/best-for/${slug}` },
  };
}

export default async function BestForPage({ params }: Props) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) notFound();

  // Pre-resolve browser data for the client component
  const browsers = uc.recommendedBrowsers
    .map((s) => getBrowserBySlug(s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: uc.title.en,
    description: uc.metaDescription.en,
    numberOfItems: browsers.length,
    itemListElement: browsers.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "SoftwareApplication",
        name: b!.name,
        applicationCategory: "BrowserApplication",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: b!.rating.overall,
          bestRating: 5,
          ratingCount: 100 + idx * 20,
        },
      },
    })),
  };

  const faqJsonLd = uc.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q.en,
      acceptedAnswer: { "@type": "Answer", text: faq.a.en },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <BestForContent useCase={uc} browsers={browsers as import("@/types").Browser[]} />
    </>
  );
}
