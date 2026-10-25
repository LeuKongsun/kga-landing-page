/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" }, // for YouTube thumbnails later
    ],
  },
  // Tools removed from the plugin in 1.0.0. Their Help buttons are still in the
  // wild in older installs, so each goes to its closest surviving relative
  // rather than a 404. `reservoir_storage_analyzer` is the declared replacement
  // for Storage Capacity Curve; the other two had no successor named, so they
  // point at the tool that now does the same job.
  async redirects() {
    return [
      {
        source: "/docs/qgis/storage_capacity_curve",
        destination: "/docs/qgis/reservoir_storage_analyzer",
        permanent: true,
      },
      {
        source: "/docs/qgis/demcontourtool",
        destination: "/docs/qgis/csvtodemcontour",
        permanent: true,
      },
      {
        source: "/docs/qgis/dempointsampleexport",
        destination: "/docs/qgis/demelevationcorrectionandpointsamplereport",
        permanent: true,
      },
    ];
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
      {
        source: "/data-creation",
        destination: "/data-creation.html",
      },
    ];
  },
};

export default nextConfig;
