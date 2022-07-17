/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  future: {
    webpack5: true,
  },
  images: {
    path: "https://res.cloudinary.com/dunz5zfpt/fl_progressive",
    loader: "cloudinary",
  },
};

module.exports = nextConfig;
