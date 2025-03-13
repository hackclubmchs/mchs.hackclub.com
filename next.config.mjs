/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
};

import withMDX from '@next/mdx'
const withMDXConfig = withMDX({ extension: /\.mdx?$/ })

export default withMDXConfig(nextConfig);