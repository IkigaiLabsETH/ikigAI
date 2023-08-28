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
      '*': [
        'node_modules/@swc/**/*',  
        'node_modules/next/dist',
      ],
    },
  }
   
  module.exports = nextConfig