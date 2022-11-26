/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
