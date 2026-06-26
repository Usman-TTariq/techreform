/** ImageKit URL transform helper for CDN-side resize/compress. */
export function ikUrl(file, width, quality = 45) {
  return `https://ik.imagekit.io/sajib4aqc/${file}?tr=w-${width},q-${quality},f-webp`;
}
