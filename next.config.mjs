/** @type {import('next').NextConfig} */
const nextConfig = {
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
