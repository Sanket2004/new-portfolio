import { projects } from "@/data/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();

  const routes = [
    {
      url: "/",
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "/projects",
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "/contact",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
