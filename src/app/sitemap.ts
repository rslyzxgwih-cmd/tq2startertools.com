import type { MetadataRoute } from "next";

const siteUrl = "https://tq2startertools.com";

const routes = [
  "/",
  "/choose-build/",
  "/builds/",
  "/builds/beginner/",
  "/classes/",
  "/class-picker/",
  "/skills/",
  "/guides/beginner/",
  "/tools/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-06-29"),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}
