/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      legacyBrowsers: false,
      outputFileTracingIgnores: ['**canvas**'],
      '*': [
        // prettier-ignore
        'node_modules/canvas/build',
      ],
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