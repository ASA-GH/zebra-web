import { withWyw } from "@wyw-in-js/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  async headers() {
    return [
      {
        source: "/videos/hero-video/:path*.m3u8",
        headers: [
          { key: "Content-Type", value: "application/vnd.apple.mpegurl" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/videos/hero-video/:path*.m2ts",
        headers: [
          { key: "Content-Type", value: "video/mp2t" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
};

export default withWyw(nextConfig);
