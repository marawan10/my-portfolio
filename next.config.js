/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
