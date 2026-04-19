import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output: 'export' — Vercel handles deployment natively with full Next.js support
  images: {
    // Keep unoptimized for now since images are local PNGs/JPGs
    unoptimized: true,
  },
};

export default nextConfig;
