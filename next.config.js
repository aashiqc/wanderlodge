/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.html$/,
      use: options.defaultLoaders.babel,
    });

    return config;
  },
    reactStrictMode: true,
    images: {
      domains: ['avatars.githubusercontent.com','lh3.googleusercontent.com', 'res.cloudinary.com'],
    },
  }