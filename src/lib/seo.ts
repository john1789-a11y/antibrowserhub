import type { Metadata } from "next";

/** Every indexable route owns its canonical and social metadata. */
export function pageMetadata(path: string, metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title.replace(/\s*[|—-]\s*AntiBrowserHub$/, "") : metadata.title;
  const socialTitle = typeof title === "string" ? `${title} | AntiBrowserHub` : title && "absolute" in title ? title.absolute : title && "default" in title ? title.default : "AntiBrowserHub";
  return {
    ...metadata,
    title,
    alternates: { ...metadata.alternates, canonical: path },
    openGraph: { type: "website", siteName: "AntiBrowserHub", ...metadata.openGraph, title: socialTitle, description: metadata.description || undefined, url: path },
    twitter: { card: "summary_large_image", ...metadata.twitter, title: socialTitle, description: metadata.description || undefined },
  };
}
