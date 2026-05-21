/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-export friendly. Remove `output: 'export'` if you plan to use
  // any server features (e.g. dynamic routes that aren't pre-rendered).
  output: 'export',
  images: { unoptimized: true },
  // If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
  // set NEXT_PUBLIC_BASE_PATH=/<repo> when building.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
};

module.exports = nextConfig;
