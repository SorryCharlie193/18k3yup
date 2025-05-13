/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/18k3yup' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/18k3yup' : '',
}

module.exports = nextConfig
