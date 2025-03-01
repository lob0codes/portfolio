/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Remove "http://" and "/"
    minimumCacheTTL: 0, // Reduce cache lifetime
    disableStaticImages: true, // Prevents Next.js from caching static images
  },
};

module.exports = nextConfig;
