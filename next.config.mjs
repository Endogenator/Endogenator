import createMDX from '@next/mdx'

const withMDX = createMDX({ extension: /\.mdx?$/ })

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    // Old addresses from before the November 2026 restructure.
    return [
      { source: '/frameworks/xik-ts', destination: '/frameworks/belief-to-knowledge', permanent: false },
      { source: '/frameworks/etcs', destination: '/applications/education', permanent: false },
      { source: '/frameworks/etcs/education-as-a-system', destination: '/applications/education', permanent: false },
      { source: '/frameworks/integration', destination: '/', permanent: false },
    ]
  },
  eslint: {
    // Prevent lint errors from failing the Vercel build
    ignoreDuringBuilds: true,
  },
}

export default withMDX(nextConfig)
