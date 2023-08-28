/** @type {import('next').NextConfig} */
const nextConfig = {
      "functions": {
        "pages/**/*": {
          "excludeFiles": "public/**"
        }
      },
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