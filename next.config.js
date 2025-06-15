/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@babel/runtime"], // optional
  },
  // 🔥 Force Node.js runtime instead of Edge
  output: "standalone",
};

module.exports = nextConfig;
