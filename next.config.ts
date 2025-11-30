import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // static HTML export (for GitHub Pages)
  images: {
    unoptimized: true,       // disable Image Optimization (not supported on GitHub Pages)
  },
  trailingSlash: true,       // safer for static hosting (generates folder-style paths)
};

export default nextConfig;