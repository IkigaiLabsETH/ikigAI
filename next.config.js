/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      legacyBrowsers: false,
      outputFileTracingIgnores: ['**canvas**'],
  },
  images: {
    domains: [
      // "googleusercontent.com",
      // "oaidalleapiprodscus.blob.core.windows.net",
      // "cdn.openai.com"
    ]
  },
}
   
  module.exports = nextConfig