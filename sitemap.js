// sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, mkdirSync, existsSync } from "node:fs";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

async function generateSitemap() {
  try {
    const distPath = resolve(__dirname, "dist");

    // Ensure dist directory exists
    if (!existsSync(distPath)) {
      mkdirSync(distPath, { recursive: true });
    }

    const stream = new SitemapStream({
      hostname: "https://sanketbanerjee.tech",
    });

    // Add current timestamp to all URLs
    const linksWithTimestamp = links.map((link) => ({
      ...link,
      lastmod: new Date().toISOString(),
    }));

    const sitemap = await streamToPromise(
      Readable.from(linksWithTimestamp).pipe(stream)
    );

    const sitemapPath = resolve(distPath, "sitemap.xml");
    createWriteStream(sitemapPath).write(sitemap.toString());

    console.log("Sitemap generated successfully at dist/sitemap.xml");
    console.log(`Generated ${linksWithTimestamp.length} URLs`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

generateSitemap();
