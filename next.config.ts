import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // dev: izinkan semua — longgar
      // production nanti: daftar eksplisit:
      // { protocol: "https", hostname: "image.tmdb.org" },
    ],
  },
};

export default nextConfig;
