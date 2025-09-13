/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // double render off
  images: {
    domains: ["res.cloudinary.com"],
  },
  output: "export", // static export ke liye
};

module.exports = nextConfig;
