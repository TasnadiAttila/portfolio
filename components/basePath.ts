// Prefixes public/ asset paths with the GitHub Pages basePath
// (set in next.config.ts). Empty string locally, "/portfolio" in prod.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";