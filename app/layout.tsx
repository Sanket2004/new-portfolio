import ScrollToTop from "@/components/helpers/ScrollToTop";
import SmoothScroll from "@/components/helpers/SmoothScroll";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import {
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
} from "@/lib/metadata";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Data Engineer & Full Stack Developer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  keywords: siteKeywords,
  authors: [{ name: siteName }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | Data Engineer & Full Stack Developer`,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Data Engineer & Full Stack Developer`,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@sanket__dev",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    jobTitle: "Data Engineer & Full Stack Developer",
    url: siteUrl,
    email: "mailto:itsanketbanerjee@gmail.com",
    image: new URL("/og-image.png", siteUrl).toString(),
    sameAs: [
      "https://github.com/Sanket2004",
      "https://www.linkedin.com/in/itsanketbanerjee",
      "https://twitter.com/sanket__dev",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Data engineering",
      "Full stack development",
      "Next.js",
      "React",
      "Python",
      "JavaScript",
      "TypeScript",
      "Cloud infrastructure",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <ScrollToTop />
            <Navbar />
            <main className="max-w-3xl mx-auto flex flex-col gap-20 px-6 pb-6 sm:gap-20 sm:pb-20 overflow-hidden">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
