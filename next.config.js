/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CUSTOM_KEY: process.env.OPENWEATHER_API_KEY,
  },
}

module.exports = nextConfig
