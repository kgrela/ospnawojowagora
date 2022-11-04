const mdx = require('@next/mdx');

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_PATH : undefined;

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  basePath,
  publicRuntimeConfig: {
    basePath,
  },
};

module.exports = withMDX(config);
