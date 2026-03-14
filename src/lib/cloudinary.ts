/**
 * Asset Optimization Protocol
 * Injects f_auto (format) and q_auto (quality) into Cloudinary URLs
 */
export function optimizeCloudinaryUrl(url: string) {
  if (!url || !url.includes("res.cloudinary.com")) return url;

  // We look for '/upload/' in the URL and insert our optimization parameters
  // f_auto: Automatically delivers WebP or AVIF
  // q_auto: Automatically compresses to the best balance of quality/size
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
}