/**
 * Use for images that must work after deployment (including subpath e.g. GitHub Pages).
 * NEXT_PUBLIC_BASE_PATH must be set at build time if app is served from a subpath.
 */
export function getImagePath(path) {
  const base = typeof process.env.NEXT_PUBLIC_BASE_PATH === "string"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
