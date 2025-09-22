/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/android-chrome-192x192.png',
        destination: '/icons/android-chrome-192x192.png',
      },
      {
        source: '/android-chrome-512x512.png',
        destination: '/icons/android-chrome-512x512.png',
      },
    ]
  },
}

export default nextConfig