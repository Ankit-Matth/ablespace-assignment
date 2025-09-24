import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image-server.worldofbooks.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'www.worldofbooks.com',
        port: '',
        pathname: '/cdn/shop/files/**',
      },
      {
        protocol: 'https',
        hostname: 'productimages.worldofbooks.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
