import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://files.stripe.com/**')],
  },
};

export default nextConfig;
