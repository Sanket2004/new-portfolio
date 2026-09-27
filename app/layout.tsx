import ScrollToTop from "@/components/helpers/ScrollToTop";
import SmoothScroll from "@/components/helpers/SmoothScroll";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { siteDescription, siteName } from "@/lib/metadata";
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
  title: {
    default: `${siteName} | Data Engineer & Full Stack Developer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | Data Engineer & Full Stack Developer`,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Data Engineer & Full Stack Developer`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
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
