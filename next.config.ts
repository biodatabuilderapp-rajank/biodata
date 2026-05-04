import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Enable XSS protection in older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Control referrer information
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/articles/biodata-photo-tips",
        destination: "/articles/biodata-tips",
        permanent: true,
      },
      {
        source: "/articles/biodata-mistakes-to-avoid",
        destination: "/articles/biodata-tips",
        permanent: true,
      },
      {
        source: "/articles/what-to-write-in-biodata-hobbies",
        destination: "/articles/biodata-tips",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
