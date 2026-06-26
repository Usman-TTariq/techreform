import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(basePath && { basePath, assetPrefix: basePath }),
  experimental: {
    optimizePackageImports: ["lucide-react", "swiper"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.techreforms.com" }],
        destination: "https://techreforms.com/:path*",
        permanent: true,
      },
      {
        source: "/lp/app",
        destination: "/app-development",
        permanent: true,
      },
      {
        source: "/lp/web",
        destination: "/website-development",
        permanent: true,
      },
    ];
  },
  images: {
    // Serve images directly from public so they load on all deployment platforms
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },
};

export default nextConfig;
