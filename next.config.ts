import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'images.ctfassets.net', // contentful image CDN
    }
    ],
  },
};

export default nextConfig;
