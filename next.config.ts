import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.spoonacular.com",
        port: "",
        pathname: "/recipes/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
