import type { NextConfig } from "next";

// npm run dev → NODE_ENV=development → basePath "" (site at localhost:3000/)
// npm run build → NODE_ENV=production → basePath "/portfolio" (for GitHub Pages)
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages has no server, so Next's on-demand image
    // optimization API isn't available — serve images as-is.
    unoptimized: true,
  },
  env: {
    // Exposed to the client so components can prefix /public paths
    // (e.g. <Image src="/images/..."/>) with the basePath — this isn't
    // done automatically when images.unoptimized is true.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;