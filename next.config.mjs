/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" }, // for YouTube thumbnails later
    ],
  },
  async rewrites() {
    return [
      {
        source: "/geodigitizer",
        destination: "/geodigitizer.html",
      },
      {
        source: "/kga-toolbox",
        destination: "/kga-toolbox.html",
      },
    ];
  },
};

export default nextConfig;
