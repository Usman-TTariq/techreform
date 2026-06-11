import { getArticles } from "@/lib/strapi";
import { absoluteUrl } from "@/lib/site-url";
import { STATIC_SITEMAP_ROUTES } from "@/lib/sitemap-routes";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

function toLastModified(value) {
  if (!value) return new Date();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

export default async function sitemap() {
  const staticEntries = STATIC_SITEMAP_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  let blogEntries = [];
  try {
    const blogs = await getArticles({ limit: 500 });
    blogEntries = blogs
      .filter((blog) => blog?.slug)
      .map((blog) => ({
        url: absoluteUrl(`/blog/${encodeURIComponent(blog.slug)}`),
        lastModified: toLastModified(blog.publishedAt || blog.blogDate),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch (error) {
    console.error("[sitemap] Failed to load blog posts:", error?.message || error);
  }

  return [...staticEntries, ...blogEntries];
}
