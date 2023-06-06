/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  typescript: {

    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
