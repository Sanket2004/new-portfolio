import type { Metadata } from "next";

export const siteName = "Sanket Banerjee";
export const siteDescription =
  "Portfolio of Sanket Banerjee, a data engineer and full-stack developer building reliable systems and thoughtful digital experiences.";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const siteKeywords = [
  "Sanket Banerjee",
  "Data Engineer",
  "Full Stack Developer",
  "Portfolio",
  "Next.js Developer",
  "Kolkata Developer",
  "Data Engineering",
  "Web Development",
  "React Developer",
  "Backend Developer",
  "Python Developer",
  "Software Engineer",
];

interface PageMetadataOptions {
  title: string;
  description: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
  path?: string;
}

export function createPageMetadata({
  title,
  description,
  type = "website",
  absoluteTitle = false,
  path = "/",
}: PageMetadataOptions): Metadata {
  const shareTitle = `${title} | ${siteName}`;
  const canonicalUrl = new URL(path, siteUrl).toString();
  const ogImageUrl = new URL("/og-image.png", siteUrl).toString();

  return {
    title: absoluteTitle ? { absolute: shareTitle } : title,
    description,
    keywords: siteKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      siteName,
      title: shareTitle,
      description,
      url: canonicalUrl,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: shareTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [ogImageUrl],
      creator: "@sanket__dev",
    },
  };
}
