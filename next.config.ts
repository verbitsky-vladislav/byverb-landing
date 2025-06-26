import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "",
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
