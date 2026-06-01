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

/** Convert a blog title into a URL-safe slug (e.g. "Hello World!" → "hello-world"). */
function generateSlugFromTitle(title) {
  if (!title || typeof title !== "string") return "";
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Pull href from a stored <link rel="canonical" ... /> string (Strapi canonicialTag field). */
function extractCanonicalHref(tagHtml) {
  if (!tagHtml || typeof tagHtml !== "string") return null;
  const m = tagHtml.match(/href\s*=\s*["']([^"']+)["']/i);
  const href = m?.[1]?.trim();
  return href || null;
}

/**
 * Normalize Strapi blog entry.
 * Content: Desc (rich text blocks) or content; excerpt: metaDescription.
 */
function normalizeArticle(entry) {
  if (!entry) return null;
  const attrs = entry.attributes || entry;
  const rawCanon =
    attrs.canonicialTag ??
    attrs.canonicalTag ??
    (typeof attrs.canonical === "string" ? attrs.canonical : null);
  const canonicialTag =
    typeof rawCanon === "string" && rawCanon.trim() !== "" ? rawCanon.trim() : null;
  const canonicalUrl = extractCanonicalHref(canonicialTag);
  const coverData = attrs.cover?.data || attrs.cover || attrs.coverUrl?.data || attrs.coverUrl;
  const coverAttrs = coverData?.attributes || coverData;
  const rawUrl = coverAttrs?.url;
  const coverUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `${getStrapiUrl()}${rawUrl}`) : null;
  const id = entry.documentId ?? entry.id;
  const title = attrs.title ?? attrs.blogTitle ?? "";
  const rawSlug = attrs.slug ?? entry.slug;
  const slugFromField =
    typeof rawSlug === "string" && rawSlug.trim() !== "" ? rawSlug.trim() : typeof rawSlug === "number" ? String(rawSlug) : "";
  const slug =
    slugFromField ||
    generateSlugFromTitle(title) ||
    (entry.documentId != null ? String(entry.documentId) : "") ||
    (entry.id != null ? String(entry.id) : "");
  const metaDescription = attrs.metaDescription ?? attrs.excerpt ?? "";
  const excerpt = metaDescription ?? "";
  const content = attrs.Desc ?? attrs.content ?? "";
  const table = attrs.table ?? null;
  const secondDesc = attrs.secondDesc ?? null;
  const table2 = attrs.table2 ?? null;
  const thirdDesc = attrs.thirdDesc ?? null;
  const table3 = attrs.table3 ?? null;
  const forthDesc = attrs.forthDesc ?? null;
  const table4 = attrs.table4 ?? null;
  const fifthDesc = attrs.fifthDesc ?? null;
  const table5 = attrs.table5 ?? null;
  const sixthDesc = attrs.sixthDesc ?? null;

  const normalizeBlocks = (value) =>
    Array.isArray(value) && value.length > 0 ? value : null;
  const normalizeTable = (value) =>
    typeof value === "string" && value.trim() !== "" ? value : null;
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
    table: normalizeTable(table),
    secondDesc: normalizeBlocks(secondDesc),
    table2: normalizeTable(table2),
    thirdDesc: normalizeBlocks(thirdDesc),
    table3: normalizeTable(table3),
    forthDesc: normalizeBlocks(forthDesc),
    table4: normalizeTable(table4),
    fifthDesc: normalizeBlocks(fifthDesc),
    table5: normalizeTable(table5),
    sixthDesc: normalizeBlocks(sixthDesc),
    faq,
    coverUrl,
    blogDate: attrs.blogDate ?? null,
    publishedAt: attrs.publishedAt ?? null,
    canonicialTag,
    canonicalUrl,
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
    const list = rawList.filter((entry) => {
      const a = entry?.attributes ?? entry;
      return a?.publishedAt != null;
    });
    return list.map(normalizeArticle).filter(Boolean);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      const url = `${baseUrl}/api/blogs`;
      const cause = e?.cause?.code || e?.code;
      if (cause === "ECONNREFUSED") {
        console.error(
          `[Strapi getArticles] Cannot reach Strapi at ${url}. Start it: cd strapi && npm run develop`
        );
      } else if (String(e.message).includes("403")) {
        console.error(
          `[Strapi getArticles] 403 Forbidden at ${url}. In Strapi Admin → Settings → Roles → Public → enable Blog find + findOne, then Save.`
        );
      } else {
        console.error("[Strapi getArticles] URL:", url, "Error:", e.message, e);
      }
    }
    return [];
  }
}

/**
 * Get one blog post by slug or by documentId (Strapi 5: GET /api/blogs/:documentId).
 */
export async function getArticleBySlug(slug) {
  if (!STRAPI_URL || slug == null || slug === "") return null;
  const headers = { "Content-Type": "application/json" };
  if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  const base = getStrapiUrl();

  try {
    // Pretty URLs use /blog/{slug}. Strapi 5 findOne path is usually documentId, not slug—resolve by filter first.
    const listUrl = new URL(`${base}/api/blogs`);
    listUrl.searchParams.set("filters[slug][$eq]", slug);
    listUrl.searchParams.set("populate", "*");
    let res = await fetch(listUrl.toString(), { headers, cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      const arr = Array.isArray(json.data) ? json.data : [];
      if (arr.length > 0) {
        const normalized = normalizeArticle(arr[0]);
        if (normalized) return normalized;
      }
    }

    // Fallback: slug might be documentId or numeric id (direct REST)
    const directUrl = `${base}/api/blogs/${encodeURIComponent(slug)}?populate=*`;
    res = await fetch(directUrl, { headers, cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      const data = json.data;
      if (data) return normalizeArticle(data);
    }

    // Last resort: Strapi slug field may be empty — match by title-generated slug
    const allArticles = await getArticles({ limit: 100 });
    const match = allArticles.find((a) => a.slug === slug);
    return match ?? null;
  } catch (e) {
    console.warn("Strapi getArticleBySlug:", e.message);
    return null;
  }
}

export { getStrapiUrl };
