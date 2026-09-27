import type { Metadata } from "next";

export const siteName = "Sanket Banerjee";
export const siteDescription =
  "Portfolio of Sanket Banerjee, a data engineer and full-stack developer building reliable systems and thoughtful digital experiences.";

interface PageMetadataOptions {
  title: string;
  description: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
}

export function createPageMetadata({
  title,
  description,
  type = "website",
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const shareTitle = `${title} | ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: shareTitle } : title,
    description,
    openGraph: {
      type,
      siteName,
      title: shareTitle,
      description,
    },
    twitter: {
      card: "summary",
      title: shareTitle,
      description,
    },
  };
}
