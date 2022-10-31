const mdx = require('@next/mdx');

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.BASE_PATH ?? '/',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
