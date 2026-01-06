import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"], // formatos mais leves
    qualities: [60, 75], // permite usar quality={60} e quality={75}
  },
};

export default nextConfig;
