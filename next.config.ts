import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  trailingSlash: true,
  images: {
    // GitHub Pages has no server, so Next's on-demand image
    // optimization API isn't available — serve images as-is.
    unoptimized: true,
  },
};
 
export default nextConfig;
 