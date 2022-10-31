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
  basePath: process.env.NEXT_PUBLIC_PATH,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_PATH,
  },
};

module.exports = withMDX(nextConfig);
