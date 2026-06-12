const DEFAULT_SITE_URL = "https://techreforms.com";

/**
 * Canonical site origin for sitemap, robots, and absolute URLs.
 * Never uses VERCEL_URL — preview deploys must not leak into sitemap.xml.
 */
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  return DEFAULT_SITE_URL;
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
