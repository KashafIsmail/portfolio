/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // double render off
  images: {
    domains: ["res.cloudinary.com"],
  },

};

module.exports = nextConfig;
