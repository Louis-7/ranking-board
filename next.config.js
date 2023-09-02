/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";
const subProjectName = "ranking-board";

const nextConfig = {
  output: 'export',
  basePath: prod ? `/${subProjectName}` : ''
}

module.exports = nextConfig
