/**
 * Strapi CMS API client for blog (Article) content.
 * Set STRAPI_URL and STRAPI_API_TOKEN in .env.local to enable.
 */

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

function getStrapiUrl() {
  return STRAPI_URL.replace(/\/$/, "");
}

/**
 * Fetch from Strapi REST API with optional auth token.
 * @param {string} path - API path (e.g. /api/articles)
 * @param {{ populate?: string | string[], filters?: object }} options
 */
export async function fetchStrapi(path, options = {}) {
  const url = new URL(path, getStrapiUrl());
  if (options.populate) {
    const p = Array.isArray(options.populate) ? options.populate.join(",") : options.populate;
    url.searchParams.set("populate", p);
  }
  if (options.filters && Object.keys(options.filters).length) {
    Object.entries(options.filters).forEach(([key, value]) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        Object.entries(value).forEach(([k, v]) => url.searchParams.set(`filters[${key}][${k}]`, String(v)));
      } else {
        url.searchParams.set(`filters[${key}]`, String(value));
      }
    });
  }
  if (options.sort) url.searchParams.set("sort", options.sort);
  if (options.pagination) {
    Object.entries(options.pagination).forEach(([k, v]) => url.searchParams.set(`pagination[${k}]`, String(v)));
  }

  const headers = { "Content-Type": "application/json" };
  if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;

  const res = await fetch(url.toString(), { headers, cache: "no-store" });
  if (!res.ok) throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
  return res.json();
}

/**
 * Normalize Strapi blog entry.
 * Content: Desc (rich text blocks) or content; excerpt: metaDescription.
 */
function normalizeArticle(entry) {
  if (!entry) return null;
  const attrs = entry.attributes || entry;
  const coverData = attrs.cover?.data || attrs.cover || attrs.coverUrl?.data || attrs.coverUrl;
  const coverAttrs = coverData?.attributes || coverData;
  const rawUrl = coverAttrs?.url;
  const coverUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `${getStrapiUrl()}${rawUrl}`) : null;
  const id = entry.documentId ?? entry.id;
  const title = attrs.title ?? attrs.blogTitle ?? "";
  const slug = attrs.slug ?? (entry.documentId ?? (entry.id != null ? String(entry.id) : ""));
  const metaDescription = attrs.metaDescription ?? attrs.excerpt ?? "";
  const excerpt = metaDescription ?? "";
  const content = attrs.Desc ?? attrs.content ?? "";
  const table = attrs.table ?? null;
  const secondDesc = attrs.secondDesc ?? null;
  const rawFaq = attrs.Faq ?? attrs.faq ?? null;
  const faq = Array.isArray(rawFaq)
    ? rawFaq
        .map((item) => {
          const q = item?.question ?? item?.Question ?? "";
          const a = item?.answer ?? item?.Answer ?? "";
          return q ? { question: String(q), answer: String(a) } : null;
        })
        .filter(Boolean)
    : [];
  return {
    id,
    documentId: entry.documentId,
    title,
    slug,
    excerpt,
    metaTitle: attrs.metaTitle ?? title,
    metaDescription,
    altText: attrs.altText ?? title,
    content,
    table: typeof table === "string" ? table : null,
    secondDesc: Array.isArray(secondDesc) ? secondDesc : secondDesc || null,
    faq,
    coverUrl,
    blogDate: attrs.blogDate ?? null,
    publishedAt: attrs.publishedAt ?? null,
  };
}

/**
 * Get published blog posts. Uses /api/blogs (your Strapi) or /api/articles.
 * Returns [] if Strapi is not configured or request fails.
 */
export async function getArticles(options = {}) {
  const baseUrl = getStrapiUrl();
  if (!baseUrl) return [];
  try {
    const data = await fetchStrapi("/api/blogs", {
      populate: "coverUrl",
      sort: "publishedAt:desc",
      pagination: { pageSize: options.limit || 20 },
    });
    const rawList = Array.isArray(data.data) ? data.data : [];
    const list = rawList.filter((entry) => entry?.publishedAt != null);
    return list.map(normalizeArticle).filter(Boolean);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.error("[Strapi getArticles] URL:", `${baseUrl}/api/blogs`, "Error:", e.message, e);
    }
    return [];
  }
}

/**
 * Get one blog post by slug or by documentId (Strapi 5: GET /api/blogs/:documentId).
 */
export async function getArticleBySlug(slug) {
  if (!STRAPI_URL || slug == null || slug === "") return null;
  try {
    const url = `${getStrapiUrl()}/api/blogs/${encodeURIComponent(slug)}?populate=*`;
    const headers = { "Content-Type": "application/json" };
    if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
    const res = await fetch(url, { headers, cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    const data = json.data;
    return data ? normalizeArticle(data) : null;
  } catch (e) {
    console.warn("Strapi getArticleBySlug:", e.message);
    return null;
  }
}

export { getStrapiUrl };
