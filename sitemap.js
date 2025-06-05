// sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";
import { Readable } from "node:stream";

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

const stream = new SitemapStream({
  hostname: "https://sanketbanerjee.netlify.app",
});

const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

createWriteStream("./dist/sitemap.xml").write(sitemap.toString());

console.log("Sitemap generated at dist/sitemap.xml");
