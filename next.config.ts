import type { NextConfig } from "next";
import { Resume } from "@/app/lib/ref-links";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/resume",
        destination: Resume,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
