import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repositoryName = "zen-book-nextjs-sample-app";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
      }
    : {}),
};

export default nextConfig;
