import type { NextConfig } from "next";

const CANONICAL = "https://www.techsolutionhub.tech";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.techsolutionhub.tech",
      },
    ],
  },
  async redirects() {
    const hosts = [
      "techsolutionhub.com",
      "www.techsolutionhub.com",
      "techsolutionhub.tech",
    ];

    return hosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `${CANONICAL}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
