/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['picsum.photos', 'raw.githubusercontent.com']
  }
}

module.exports = nextConfig
