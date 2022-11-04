const mdx = require('@next/mdx');

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

if (process.env.NODE_ENV === 'production') {
  config.basePath = process.env.NEXT_PUBLIC_PATH;
  config.publicRuntimeConfig.basePath = process.env.NEXT_PUBLIC_PATH;
}

module.exports = withMDX(config);
