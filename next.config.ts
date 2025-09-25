import type { NextConfig } from "next";
import { CV } from "@/app/lib/ref-links";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/cv",
        destination: CV,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
