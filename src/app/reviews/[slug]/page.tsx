import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBrowserBySlug, getAllBrowserSlugs } from "@/data/browsers";
import ReviewHero from "./ReviewHero";
import ReviewContent from "./ReviewContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBrowserSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const browser = getBrowserBySlug(slug);
  if (!browser) return {};
  return {
    title: `${browser.name} Review 2026 — Features, Pricing & Honest Analysis`,
    description: `In-depth ${browser.name} review: ${browser.tagline}. Rating: ${browser.rating.overall}/5. Starting from ${browser.pricing.startingPrice}. Pros, cons, fingerprint test results, pricing comparison & more.`,
    alternates: {
      canonical: `/reviews/${slug}`,
    },
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const browser = getBrowserBySlug(slug);
  if (!browser) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "SoftwareApplication", name: browser.name, applicationCategory: "BrowserApplication", operatingSystem: browser.platforms.join(", ") },
    reviewRating: { "@type": "Rating", ratingValue: browser.rating.overall, bestRating: 5 },
    author: { "@type": "Organization", name: "AntiBrowserHub" },
    publisher: { "@type": "Organization", name: "AntiBrowserHub" },
    datePublished: "2026-01-15",
    dateModified: "2026-06-27",
  };

  const faqJsonLd = browser.faqs && browser.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: browser.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* Hero — Client Component for i18n */}
      <ReviewHero browser={browser} />

      {/* Main content — Client Component for i18n */}
      <ReviewContent browser={browser} />
    </>
  );
}
